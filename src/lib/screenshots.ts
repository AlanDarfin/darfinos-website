type GalleryText = {
  url?: string;
  alt: string;
  title: string;
  label: string;
  caption: string;
  linkText: string;
};

type Screenshot = {
  id: string;
  src: string;
  category: 'darfinos' | 'projects' | 'inspiration';
  width: number;
  height: number;
  url: string;
  pt: GalleryText;
  en: GalleryText;
};

const repository = 'https://github.com/AlanDarfin/DarfinOS';

// Keep both translations with each image so reordering cannot mix up captions.
export const screenshots: Screenshot[] = [
  {
    id: 'tui', src: '/screenshots/tui.png', category: 'darfinos', width: 1296, height: 838,
    url: `${repository}/blob/main/DarfinOSInstallScript-TUI.py`,
    pt: {
      alt: 'TUI atual do DarfinOS em dourado, com módulos, preset Desktop e painel de inspeção',
      title: 'Sua seleção, à vista.', label: 'DARFINOS / INTERFACE ATUAL',
      caption: 'Captura real da TUI atual, com a paleta dourada, seleção de etapas e inspeção de módulos. Executada em modo de simulação no ambiente de desenvolvimento, sem instalar pacotes.',
      linkText: 'Conhecer a TUI',
    },
    en: {
      alt: 'Current gold DarfinOS TUI showing modules, the Desktop preset and the inspection panel',
      title: 'Your selection, in view.', label: 'DARFINOS / CURRENT INTERFACE',
      caption: 'The current TUI, with its gold palette, stage selection and module inspection. Captured from a real dry run in a development environment, without installing packages.',
      linkText: 'Explore the TUI',
    },
  },
  {
    id: 'control-center', src: '/screenshots/control-center.png', category: 'darfinos', width: 1296, height: 838,
    url: `${repository}/blob/main/darfinos_control.py`,
    pt: {
      alt: 'Painel do Control Center com diagnóstico local e estado das ferramentas',
      title: 'Entenda seu ambiente.', label: 'DARFINOS / CONTROL CENTER',
      caption: 'O painel reúne diagnóstico local e ferramentas de manutenção. Esta captura de desenvolvimento mostra o estado real do ambiente de testes; não representa uma instalação Arch concluída.',
      linkText: 'Ver o Control Center',
    },
    en: {
      alt: 'Control Center dashboard with local diagnostics and tool availability',
      title: 'Know your environment.', label: 'DARFINOS / CONTROL CENTER',
      caption: 'Local diagnostics and maintenance tools in one dashboard. This development capture shows the actual test environment, rather than a completed Arch installation.',
      linkText: 'View Control Center source',
    },
  },
  {
    id: 'terminal', src: '/screenshots/terminal.png', category: 'darfinos', width: 1296, height: 838,
    url: `${repository}/blob/main/DarfinOSInstallScript.sh`,
    pt: {
      alt: 'Terminal executando a ajuda, a lista de presets e o diagnóstico atuais do DarfinOS',
      title: 'O terminal também evoluiu.', label: 'DARFINOS / LINHA DE COMANDO',
      caption: 'Comandos reais de ajuda, lista de presets e Doctor da versão atual. A captura mostra consultas no ambiente de desenvolvimento, sem executar etapas de instalação.',
      linkText: 'Abrir o instalador Bash',
    },
    en: {
      alt: 'Terminal running current DarfinOS help, preset listing and Doctor commands',
      title: 'The terminal evolved, too.', label: 'DARFINOS / COMMAND LINE',
      caption: 'Real output from the current help, preset listing and Doctor commands. Captured in the development environment without running installation stages.',
      linkText: 'View the Bash installer',
    },
  },
  {
    id: 'labs-tui', src: '/screenshots/labs-tui.png', category: 'darfinos', width: 1296, height: 544,
    url: `${repository}/blob/main/docs/LABS.md`,
    pt: {
      alt: 'Catálogo DarfinOS Labs na TUI, com o módulo Chicago95 e suas informações',
      title: 'Um laboratório no terminal.', label: 'DARFINOS / LABS',
      url: `${repository}/blob/main/docs/pt-BR/LABS.md`,
      caption: 'Navegação real pelos módulos Labs, com Chicago95 em destaque. Capturada em modo de simulação: explorar o catálogo e ler os detalhes não instala nem ativa um novo desktop.',
      linkText: 'Ler sobre os Labs',
    },
    en: {
      alt: 'DarfinOS Labs in the TUI, showing the Chicago95 module and its details',
      title: 'A lab in your terminal.', label: 'DARFINOS / LABS',
      caption: 'Browsing the actual Labs modules with Chicago95 in focus. Captured in dry-run mode: exploring the catalog does not install or activate a new desktop.',
      linkText: 'Read about Labs',
    },
  },
  {
    id: 'presets', src: '/screenshots/presets.png', category: 'darfinos', width: 1296, height: 544,
    url: `${repository}/blob/main/docs/MANIFESTO_PRESETS.md`,
    pt: {
      alt: 'Seletor de presets oficial na TUI atual do DarfinOS',
      title: 'Escolha por onde começar.', label: 'DARFINOS / SEIS PRESETS',
      url: `${repository}/blob/main/docs/pt-BR/MANIFESTO_PRESETS.md`,
      caption: 'O seletor real de presets na TUI: Minimal, Desktop, Gaming, Full, i3 e Retro. Captura em modo de simulação; escolher um preset prepara uma seleção para revisão.',
      linkText: 'Ver os presets',
    },
    en: {
      alt: 'Official preset selector in the current DarfinOS TUI',
      title: 'Choose where to start.', label: 'DARFINOS / SIX PRESETS',
      caption: 'The actual TUI preset selector: Minimal, Desktop, Gaming, Full, i3 and Retro. Captured in dry-run mode; choosing a preset prepares a selection for review.',
      linkText: 'Explore the presets',
    },
  },
  {
    id: 'sonicde', src: '/screenshots/sonicde.png', category: 'projects', width: 1440, height: 900,
    url: 'https://sonicde.org/',
    pt: {
      alt: 'Página oficial atual do SonicDE', title: 'SonicDE. O desktop em X11.', label: 'PROJETO INDEPENDENTE / SONICDE',
      caption: 'Captura atual do site oficial do SonicDE, projeto independente que continua a experiência Plasma em X11. É uma opção de desktop no DarfinOS.', linkText: 'Conhecer o SonicDE',
    },
    en: {
      alt: 'Current SonicDE official website', title: 'SonicDE. The X11 desktop.', label: 'INDEPENDENT PROJECT / SONICDE',
      caption: 'A current capture of the official SonicDE website. This independent project continues the Plasma experience on X11 and is an optional DarfinOS desktop.', linkText: 'Visit SonicDE',
    },
  },
  {
    id: 'xlibre', src: '/screenshots/xlibre.png', category: 'projects', width: 1440, height: 900,
    url: 'https://xlibre.net/',
    pt: {
      alt: 'Página oficial atual do servidor gráfico XLibre', title: 'XLibre. A base gráfica.', label: 'PROJETO INDEPENDENTE / XLIBRE',
      caption: 'O site oficial do XLibre, servidor gráfico comunitário que continua o desenvolvimento do X11. A captura apresenta o projeto, sem indicar uma versão instalada pelo DarfinOS.', linkText: 'Conhecer o XLibre',
    },
    en: {
      alt: 'Current XLibre display server official website', title: 'XLibre. The display foundation.', label: 'INDEPENDENT PROJECT / XLIBRE',
      caption: 'The official website of XLibre, a community project continuing X11 server development. This capture introduces the project without claiming a particular installed version.', linkText: 'Visit XLibre',
    },
  },
  {
    id: 'cachyos', src: '/screenshots/cachyos.png', category: 'projects', width: 1440, height: 900,
    url: 'https://wiki.cachyos.org/features/optimized_repos/',
    pt: {
      alt: 'Página atual da documentação oficial do CachyOS', title: 'CachyOS. Outras possibilidades.', label: 'INTEGRAÇÃO OPCIONAL / CACHYOS',
      caption: 'Captura atual da documentação oficial do CachyOS. Seus repositórios otimizados são uma integração opcional; compatibilidade e desempenho dependem do hardware e dos pacotes.', linkText: 'Consultar a wiki do CachyOS',
    },
    en: {
      alt: 'Current CachyOS official documentation website', title: 'CachyOS. More possibilities.', label: 'OPTIONAL INTEGRATION / CACHYOS',
      caption: 'A current capture of the official CachyOS documentation. Its optimized repositories are optional; compatibility and performance depend on hardware and packages.', linkText: 'Read the CachyOS wiki',
    },
  },
  {
    id: 'bedrock', src: '/screenshots/bedrock.png', category: 'projects', width: 1440, height: 900,
    url: 'https://bedrocklinux.org/',
    pt: {
      alt: 'Página oficial atual do Bedrock Linux', title: 'Bedrock. Além de uma distro.', label: 'EXPERIMENTO AVANÇADO / BEDROCK',
      caption: 'O site oficial do Bedrock Linux, metadistribuição que permite combinar componentes de distribuições diferentes. Um experimento avançado e opcional, com planejamento de recuperação.', linkText: 'Conhecer o Bedrock Linux',
    },
    en: {
      alt: 'Current Bedrock Linux official website', title: 'Bedrock. Beyond one distro.', label: 'ADVANCED EXPERIMENT / BEDROCK',
      caption: 'The official Bedrock Linux website. This metadistribution combines components from different distributions and remains an advanced optional experiment requiring recovery planning.', linkText: 'Visit Bedrock Linux',
    },
  },
  {
    id: 'linuxtoys', src: '/screenshots/linuxtoys.png', category: 'inspiration', width: 1440, height: 900,
    url: 'https://linux.toys',
    pt: {
      alt: 'Página oficial atual do LinuxToys', title: 'LinuxToys. Uma grande inspiração.', label: 'INSPIRAÇÃO / LINUXTOYS',
      caption: 'Captura atual do site oficial do LinuxToys, inspiração para reunir descoberta de programas, configuração e manutenção do Linux. Um projeto independente, com seus próprios criadores.', linkText: 'Explorar o LinuxToys',
    },
    en: {
      alt: 'Current LinuxToys official website', title: 'LinuxToys. A major inspiration.', label: 'INSPIRATION / LINUXTOYS',
      caption: 'A current capture of the official LinuxToys website, an inspiration for bringing Linux software discovery, configuration and maintenance together. Independently built and maintained.', linkText: 'Explore LinuxToys',
    },
  },
];
