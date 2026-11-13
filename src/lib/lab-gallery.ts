type MediaKind = 'upstream' | 'demo' | 'terminal' | 'docs';

type LabMedia = {
  src: string;
  width: number;
  height: number;
  kind: MediaKind;
  source: string;
  en: { alt: string; caption: string };
  pt: { alt: string; caption: string };
};

const media = (
  id: string, width: number, height: number, kind: MediaKind, source: string,
  altEn: string, captionEn: string, altPt: string, captionPt: string,
): LabMedia => ({
  src: `/screenshots/labs/${id}.webp`, width, height, kind, source,
  en: { alt: altEn, caption: captionEn },
  pt: { alt: altPt, caption: captionPt },
});

export const labGallery = {
  i3: media('i3', 1280, 800, 'upstream', 'https://i3wm.org/screenshots/',
    'An i3 workspace with tiled windows and a status bar',
    'The i3 project gallery shows several applications tiled in the same workspace.',
    'Área de trabalho do i3 com janelas em mosaico e barra de status',
    'A galeria do i3 mostra vários aplicativos organizados em mosaico na mesma área de trabalho.'),
  chicago95: media('chicago95', 800, 600, 'upstream', 'https://github.com/grassmunk/Chicago95/blob/master/Screenshots/SCREENSHOTS.md',
    'Xfce with Chicago95 gray window frames, classic icons and a retro taskbar',
    'The Chicago95 project shows its Windows 95-inspired theme running on Xfce.',
    'Xfce com molduras cinzas, ícones clássicos e barra de tarefas retrô do Chicago95',
    'O projeto Chicago95 mostra o tema inspirado no Windows 95 rodando no Xfce.'),
  nscde: media('nscde', 1440, 900, 'upstream', 'https://github.com/NsCDE/NsCDE#readme',
    'NsCDE desktop with classic UNIX-style windows and a control panel',
    'An upstream screenshot of the FVWM-based desktop and its classic control panel.',
    'Desktop NsCDE com janelas ao estilo UNIX clássico e painel de controle',
    'Captura do próprio projeto, com o desktop baseado em FVWM e seu painel clássico.'),
  junest: media('junest', 1200, 710, 'terminal', 'https://github.com/fsquillace/junest#usage',
    'JuNest help in a terminal, showing setup and namespace modes',
    'Real help output showing how to set up an environment and choose a backend.',
    'Ajuda do JuNest no terminal, com opções de configuração e namespaces',
    'Saída real da ajuda, com as opções para criar um ambiente e escolher como executá-lo.'),
  decman: media('decman', 1200, 710, 'terminal', 'https://github.com/kiviktnm/decman#readme',
    'Decman help in a terminal, showing source and dry-run options',
    'Real help output for the Python configuration and dry-run options. No profile was applied.',
    'Ajuda do Decman no terminal, com opções de configuração e simulação',
    'Saída real da ajuda com as opções de arquivo Python e simulação. Nenhum perfil foi aplicado.'),
  metapac: media('metapac', 1200, 710, 'docs', 'https://github.com/ripytide/metapac#readme',
    'Illustration of Metapac TOML configuration, package backends and sync',
    'An illustrated summary of the upstream workflow, not a screenshot of a running sync.',
    'Ilustração da configuração TOML, dos gerenciadores de pacotes e da sincronização do Metapac',
    'Resumo ilustrado do fluxo documentado pelo projeto, sem executar uma sincronização.'),
  conty: media('conty', 1200, 710, 'docs', 'https://github.com/Kron4ek/Conty#usage',
    'Illustration of Conty commands for launching apps and listing bundled packages',
    'An illustrated reference for the launcher and package-list commands from the original project.',
    'Ilustração dos comandos do Conty para abrir aplicativos e listar os pacotes incluídos',
    'Referência ilustrada dos comandos de execução e listagem do projeto original.'),
  nix_portable: media('nix_portable', 1210, 715, 'upstream', 'https://github.com/DavHau/nix-portable#readme',
    'nix-portable logo with a blue animal beside the project name',
    'Artwork published in the original nix-portable README.',
    'Logotipo do nix-portable com um animal azul ao lado do nome',
    'Arte publicada no README do projeto original.'),
  trinity: media('trinity', 1440, 810, 'upstream', 'https://www.trinitydesktop.org/screenshots.php',
    'Trinity Desktop Environment with a classic desktop panel and overlapping windows',
    'An image from the Trinity Desktop project gallery showing the KDE 3-derived interface.',
    'Trinity Desktop Environment com painel clássico e janelas sobrepostas',
    'Imagem da galeria do Trinity Desktop mostrando a interface derivada do KDE 3.'),
  yserver: media('yserver', 1280, 720, 'demo', 'https://github.com/user-attachments/assets/dc266c55-e9ee-4649-a0c4-be3db2526713',
    'A frame of the yserver demo showing an animated file manager window alongside a terminal',
    'A still from the yserver maintainers’ video demonstration of a running X11 desktop.',
    'Quadro da demonstração do yserver com a janela do gerenciador de arquivos em movimento ao lado de um terminal',
    'Quadro do vídeo dos mantenedores do yserver mostrando um desktop X11 em funcionamento.'),
  xomposite: media('xomposite', 1200, 710, 'docs', 'https://github.com/demostenex/xomposite#readme',
    'Illustrated reference for building and configuring the Xomposite X11 compositor',
    'An illustrated summary of the upstream build and configuration, not a capture of a running session.',
    'Referência ilustrada de compilação e configuração do compositor X11 Xomposite',
    'Resumo ilustrado da compilação e da configuração documentadas pelo projeto, sem simular uma sessão em funcionamento.'),
  wayback: media('wayback', 1200, 710, 'docs', 'https://wayback.freedesktop.org/',
    'Diagram describing how an X11 desktop, Xwayland and Wayback fit together',
    'A visual explanation of the architecture described by the Wayback project.',
    'Diagrama mostrando a relação entre um desktop X11, o Xwayland e o Wayback',
    'Explicação visual da arquitetura descrita pelo projeto Wayback.'),
  booster: media('booster', 1200, 710, 'terminal', 'https://github.com/anatol/booster#readme',
    'Booster help in a terminal showing build, cat, ls and unpack commands',
    'Real help output from the Arch package, without creating a boot image.',
    'Ajuda do Booster no terminal com os comandos build, cat, ls e unpack',
    'Saída real da ajuda do pacote do Arch, sem criar uma imagem de boot.'),
} satisfies Record<string, LabMedia>;

export type LabId = keyof typeof labGallery;

export function hasLabImage(id: string): id is LabId {
  return Object.prototype.hasOwnProperty.call(labGallery, id);
}

export const mediaLabels: Record<MediaKind, { en: string; pt: string }> = {
  upstream: { en: 'Published by the project', pt: 'Imagem do projeto' },
  demo: { en: 'Frame from upstream demo', pt: 'Quadro da demonstração original' },
  terminal: { en: 'Real terminal output', pt: 'Saída real do terminal' },
  docs: { en: 'Documentation illustration', pt: 'Ilustração da documentação' },
};

export const fastfetchScreenshot = {
  id: 'fastfetch',
  src: '/screenshots/labs/fastfetch.webp',
  category: 'darfinos' as const,
  width: 1400,
  height: 580,
  url: 'https://github.com/AlanDarfin/DarfinOS/tree/main/Fastfetch',
  pt: {
    alt: 'Fastfetch com o logotipo dourado do DarfinOS à esquerda e os dados do sistema à direita',
    title: 'Fastfetch do meu jeito.',
    label: 'DARFINOS / FASTFETCH',
    caption: 'Saída real do Fastfetch com a configuração e o logo do DarfinOS. Os dados de sistema são do ambiente de captura, não de uma instalação DarfinOS.',
    linkText: 'Ver a configuração do Fastfetch',
  },
  en: {
    alt: 'Fastfetch with the gold DarfinOS logo on the left and system information on the right',
    title: 'Fastfetch, my way.',
    label: 'DARFINOS / FASTFETCH',
    caption: 'Real Fastfetch output using the DarfinOS configuration and logo. System details are from the capture environment, not a DarfinOS installation.',
    linkText: 'View the Fastfetch config',
  },
};
