/**
 * Capture the real DarfinOS curses frontend and read-only CLI commands.
 * No installer stage is executed. TUI screenshots run with --local --dry-run.
 *
 * Requirements: Python 3, Chromium, @xterm/xterm and playwright.
 * npm install --no-save --package-lock=false @xterm/xterm playwright
 * DARFINOS_SOURCE=../DarfinOS node scripts/capture-screenshots.mjs
 * Optional: CHROMIUM_PATH, CAPTURE_NODE_MODULES (external dependency directory).
 */
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import { readFile, writeFile, mkdir, mkdtemp, rm } from 'node:fs/promises';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(process.env.DARFINOS_SOURCE || join(root, '../DarfinOS'));
const output = join(root, 'public/screenshots');
const require = createRequire(process.env.CAPTURE_NODE_MODULES
  ? resolve(process.env.CAPTURE_NODE_MODULES, '../package.json') : import.meta.url);
const { chromium } = require('playwright');
const xtermScript = require.resolve('@xterm/xterm');
const xtermCss = resolve(dirname(xtermScript), '../css/xterm.css');
const cols = 140;
const rows = 38;

// PTY records actual ANSI output, including the application's original palette.
// No source functions are mocked, patched or replaced for these captures.
const capture = String.raw`
import os, pty, select, fcntl, termios, struct, json, time, signal, sys
source, target, cols, rows = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
env = dict(os.environ, TERM='xterm-256color', LANG='C.UTF-8', LC_ALL='C.UTF-8')

def start(args, extra=None):
    pid, fd = pty.fork()
    if pid == 0:
        os.chdir(source)
        fcntl.ioctl(0, termios.TIOCSWINSZ, struct.pack('HHHH', rows, cols, 0, 0))
        os.execvpe(args[0], args, dict(env, **(extra or {})))
    fcntl.ioctl(fd, termios.TIOCSWINSZ, struct.pack('HHHH', rows, cols, 0, 0))
    return pid, fd

def read(fd, first_wait=15):
    chunks=[]
    deadline=time.monotonic()+first_wait
    while time.monotonic()<deadline:
        ready,_,_=select.select([fd],[],[], 0.35 if chunks else 0.5)
        if ready:
            try: chunk=os.read(fd,65536)
            except OSError: break
            if not chunk: break
            chunks.append(chunk)
        elif chunks: break
    return b''.join(chunks)

def resize(pid, fd, height):
    fcntl.ioctl(fd, termios.TIOCSWINSZ, struct.pack('HHHH', height, cols, 0, 0))
    os.kill(pid,signal.SIGWINCH)

def stop(pid, fd):
    try: os.kill(pid, signal.SIGKILL)
    except ProcessLookupError: pass
    os.close(fd)
    os.waitpid(pid,0)

shots={}
pid, fd = start(['python3','DarfinOSInstallScript-TUI.py','--local','--dry-run','--preset','desktop'])
try:
    screen=read(fd)
    # Inspect the newly added Xfce stage while retaining the desktop preset.
    os.write(fd,b'j'*16)
    screen+=read(fd)
    shots['tui']=screen.decode('utf-8')
    resize(pid,fd,24)
    screen+=read(fd)
    os.write(fd,b'l')
    screen+=read(fd)
    os.write(fd,b'j')
    screen+=read(fd)
    shots['labs-tui']=screen.decode('utf-8')
    os.write(fd,b'q')
    screen+=read(fd)
    resize(pid,fd,rows)
    screen+=read(fd)
    os.write(fd,b'c')
    screen+=read(fd)
    shots['control-center']=screen.decode('utf-8')
    os.write(fd,b'q')
    screen+=read(fd)
    resize(pid,fd,24)
    screen+=read(fd)
    os.write(fd,b'o')
    screen+=read(fd)
    shots['presets']=screen.decode('utf-8')
finally: stop(pid,fd)

def read_prompt(fd):
    data=b''
    deadline=time.monotonic()+25
    while time.monotonic()<deadline:
        data+=read(fd,first_wait=1)
        if '❯'.encode() in data:
            return data
    raise RuntimeError('Shell did not finish a read-only command')

prompt='\\[\\e[38;5;220m\\]❯\\[\\e[0m\\] '
pid,fd=start(['bash','--noprofile','--norc','-i'], {'PS1':prompt, 'HISTFILE':'/dev/null'})
try:
    screen=read_prompt(fd)
    for command in ['bash DarfinOSInstallScript.sh --help',
                    'python3 DarfinOSInstallScript-TUI.py --list-presets',
                    'python3 DarfinOSInstallScript-TUI.py --doctor']:
        os.write(fd,(command+'\n').encode())
        screen+=read_prompt(fd)
    shots['terminal']=screen.decode('utf-8')
finally: stop(pid,fd)
with open(target,'w') as file: json.dump(shots,file,ensure_ascii=False)
`;

const temp = await mkdtemp(join(tmpdir(), 'darfinos-screenshots-'));
let browser;
try {
  await mkdir(output, { recursive: true });
  const recording = join(temp, 'recording.json');
  const result = spawnSync('python3', ['-c', capture, source, recording, String(cols), String(rows)], {
    encoding: 'utf8', timeout: 90000,
  });
  if (result.status !== 0) throw new Error(result.stderr || `PTY capture failed: ${result.status}`);
  const streams = JSON.parse(await readFile(recording, 'utf8'));
  browser = await chromium.launch({
    executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium',
    headless: true, args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 1800, height: 1100 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html><head><meta charset="utf-8"></head><body>
    <div id="capture"><div id="terminal"></div></div>
    <style>
      * { box-sizing: border-box; }
      html, body { margin: 0; background: #101210; }
      #capture { display: inline-block; padding: 20px 16px; background: #101210; }
      .xterm { padding: 0; }
      .xterm-viewport { overflow: hidden !important; }
    </style></body></html>`);
  await page.addStyleTag({ path: xtermCss });
  await page.addScriptTag({ path: xtermScript });
  const screenshots = [];
  for (const [name, stream] of Object.entries(streams)) {
    const shotRows = ['labs-tui', 'presets'].includes(name) ? 24 : rows;
    await page.evaluate(async ({ stream, cols, rows }) => {
      if (window.captureTerminal) window.captureTerminal.dispose();
      document.querySelector('#terminal').replaceChildren();
      const terminal = new window.Terminal({
        cols, rows, fontSize: 15, lineHeight: 1.2, fontFamily: '"DejaVu Sans Mono", monospace',
        cursorBlink: false, cursorInactiveStyle: 'none', allowTransparency: false,
        theme: {
          background: '#101210', foreground: '#e9e9df', cursor: '#e8bd48',
          selectionBackground: '#51441e', black: '#101210', red: '#d97b61',
          green: '#b7bf87', yellow: '#e8bd48', blue: '#98b6c4', magenta: '#bd9cba',
          cyan: '#9bbfba', white: '#e9e9df', brightBlack: '#929184',
          brightRed: '#e9a18b', brightGreen: '#cbd3ab', brightYellow: '#f8d57e',
          brightBlue: '#bbced8', brightMagenta: '#d6bad3', brightCyan: '#bdd8d3', brightWhite: '#fffdf3',
        },
      });
      terminal.open(document.querySelector('#terminal'));
      window.captureTerminal = terminal;
      await new Promise(resolve => terminal.write(stream, resolve));
      await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    }, { stream, cols, rows: shotRows });
    const png = await page.locator('#capture').screenshot({ path: join(output, `${name}.png`) });
    screenshots.push({ file: `${name}.png`, cols, rows: shotRows, width: png.readUInt32BE(16), height: png.readUInt32BE(20) });
    const text = await page.evaluate(() => {
      const terminal = window.captureTerminal;
      return Array.from({ length: terminal.rows }, (_, i) => terminal.buffer.active.getLine(i)?.translateToString(true) || '').join('\n');
    });
    if (!text.includes('DARFINOS') && !text.includes('DarfinOS') && !text.includes('PRESETS OFICIAIS')) throw new Error(`Empty capture: ${name}`);
    if (name === 'tui' && (!/\d+\/\d+ ETAPAS/.test(text) || !text.includes('XFCE'))) throw new Error('TUI did not reach current stage inspection');
    if (name === 'terminal' && (!text.includes('retro') || !text.includes('OK: estrutura'))) throw new Error('CLI commands did not finish');
    console.log(`${name}.png: captured real terminal at ${cols}x${shotRows}`);
  }
  const commit = spawnSync('git', ['-C', source, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).stdout.trim();
  await writeFile(join(output, 'capture.json'), JSON.stringify({
    source: 'https://github.com/AlanDarfin/DarfinOS', commit,
    capturedAt: new Date().toISOString(), terminal: { cols, rows, TERM: 'xterm-256color' },
    mode: 'TUI: --local --dry-run --preset desktop; CLI: --help, --list-presets, --doctor',
    screenshots,
  }, null, 2) + '\n');
} finally {
  await browser?.close();
  await rm(temp, { recursive: true, force: true });
}
