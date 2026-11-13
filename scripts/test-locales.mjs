import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const routes = ['', 'docs/', 'controle/', 'labs/', 'ferramentas/', 'downloads/'];
let errors = 0;
const verify = (condition, message) => {
  if (!condition) { console.error('FAIL: ' + message); errors++; }
  else console.log('OK: ' + message);
};
for (const route of routes) {
  const enPath = join('dist', route, 'index.html');
  const ptPath = join('dist', 'pt-br', route, 'index.html');
  verify(existsSync(enPath), 'English route /' + route);
  verify(existsSync(ptPath), 'Brazilian Portuguese route /pt-br/' + route);
  if (!existsSync(enPath) || !existsSync(ptPath)) continue;
  const en = readFileSync(enPath, 'utf8');
  const pt = readFileSync(ptPath, 'utf8');
  verify(en.includes('lang="en"'), 'English HTML language: /' + route);
  verify(pt.includes('lang="pt-BR"'), 'Portuguese HTML language: /pt-br/' + route);
  for (const marker of ['hreflang="en"', 'hreflang="pt-BR"', 'data-lang-choice="en"', 'data-lang-choice="pt-BR"']) {
    verify(en.includes(marker) && pt.includes(marker), marker + ' on both routes: ' + route);
  }
  verify(en.includes('darfinos-language') && pt.includes('darfinos-language'),
    'persistent explicit language choice on both routes: ' + route);
}
const downloadEn = existsSync('dist/downloads/index.html') ? readFileSync('dist/downloads/index.html','utf8') : '';
const downloadPt = existsSync('dist/pt-br/downloads/index.html') ? readFileSync('dist/pt-br/downloads/index.html','utf8') : '';
verify(downloadEn.includes('/archive/refs/heads/main.zip'), 'English source download works without a release');
verify(downloadPt.includes('/archive/refs/heads/main.zip'), 'Portuguese source download works without a release');
verify(downloadEn.includes('/releases'), 'English release index remains available');
verify(downloadEn.includes('api.github.com/repos/AlanDarfin/DarfinOS/releases'), 'English page checks real released assets');
if (errors) process.exitCode = 1;
