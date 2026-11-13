export type LabProject = {
  id: string;
  name: string;
  description: string;
  originalUrl: string;
  category: 'wm-desktop' | 'portatil' | 'declarativo' | 'laboratorio' | 'automacao';
  risk: 'opcional' | 'avancado' | 'critico';
  integration: string;
  step: string;
};

export const labProjects: LabProject[] = [
  {
    id: 'i3', name: 'i3 Window Manager', category: 'wm-desktop', risk: 'opcional',
    originalUrl: 'https://i3wm.org/', step: 'i3',
    description: 'Gerenciador de janelas X11 com organização em mosaico e atalhos de teclado. Uma sessão independente, sem substituir o SonicDE.',
    integration: 'Pacotes oficiais Arch (i3-wm, i3status, i3lock e dmenu). Preset próprio i3 + XLibre.'
  },
  {
    id: 'chicago95', name: 'Chicago95 + Xfce', category: 'wm-desktop', risk: 'avancado',
    originalUrl: 'https://github.com/grassmunk/Chicago95', step: 'lab_chicago95',
    description: 'Um visual inspirado no Windows 95 para Xfce, com temas GTK, ícones, decoração XFWM, cursores e extras opcionais.',
    integration: 'Preset Retro: instala Xfce oficial e copia tema GTK/XFWM, ícones, cursores e fontes para o HOME. Não altera o painel, o tema ativo nem a sessão atual.'
  },
  {
    id: 'nscde', name: 'NsCDE', category: 'wm-desktop', risk: 'avancado',
    originalUrl: 'https://github.com/NsCDE/NsCDE', step: 'lab_nscde',
    description: 'Ambiente inspirado nas estações de trabalho UNIX, construído com ferramentas modernas e FVWM.',
    integration: 'Instala pelo AUR. Escolha NsCDE na tela de login para iniciar a configuração do projeto.'
  },
  {
    id: 'junest', name: 'JuNest', category: 'portatil', risk: 'avancado',
    originalUrl: 'https://github.com/fsquillace/junest', step: 'lab_junest',
    description: 'Ambiente Arch Linux em espaço de usuário para experimentar pacotes e ferramentas sem instalar no host.',
    integration: 'Instala junest-git pelo AUR e roda junest setup no HOME. Não altera namespaces do sistema.'
  },
  {
    id: 'decman', name: 'Decman', category: 'declarativo', risk: 'avancado',
    originalUrl: 'https://github.com/kiviktnm/decman', step: 'lab_decman',
    description: 'Gerenciador declarativo de pacotes, arquivos e serviços para Arch Linux, configurado em Python.',
    integration: 'Etapa AUR opcional. Não aplica arquivos Python nem sincroniza estado automaticamente.'
  },
  {
    id: 'metapac', name: 'Metapac', category: 'declarativo', risk: 'avancado',
    originalUrl: 'https://github.com/ripytide/metapac', step: 'lab_metapac',
    description: 'Mantém listas declarativas de pacotes e repositórios para vários gerenciadores.',
    integration: 'Etapa AUR opcional. Sync e clean nunca são iniciados pelo DarfinOS.'
  },
  {
    id: 'conty', name: 'Conty', category: 'portatil', risk: 'avancado',
    originalUrl: 'https://github.com/Kron4ek/Conty', step: 'lab_conty',
    description: 'Contêiner Linux comprimido em um executável portátil, útil para jogos, Wine e aplicativos com bibliotecas próprias.',
    integration: 'Instala Conty Lite para x86_64 no HOME, com FUSE e verificação SHA-256 do download oficial.'
  },
  {
    id: 'nix_portable', name: 'nix-portable', category: 'portatil', risk: 'avancado',
    originalUrl: 'https://github.com/DavHau/nix-portable', step: 'lab_nix_portable',
    description: 'Nix portátil sem instalação tradicional, com execução em espaço de usuário.',
    integration: 'Instala o binário oficial x86_64 no HOME, com verificação SHA-256 e sem daemon.'
  },
  {
    id: 'trinity', name: 'Trinity Desktop', category: 'wm-desktop', risk: 'critico',
    originalUrl: 'https://www.trinitydesktop.org/', step: 'lab_trinity',
    description: 'Continuação independente do KDE 3, com interface tradicional e ecossistema próprio.',
    integration: 'Confere a chave de assinatura, configura o repositório Trinity e instala tde-meta com atualização completa do Arch. Mantém o gerenciador de login.'
  },
  {
    id: 'yserver', name: 'yserver', category: 'laboratorio', risk: 'critico',
    originalUrl: 'https://github.com/joske/yserver', step: 'lab_yserver',
    description: 'Novo servidor X11 escrito em Rust, alternativa experimental à arquitetura histórica do X.Org.',
    integration: 'Instala yserver e starty pelo AUR, com opção de instalar Vulkan para Intel ou AMD. Não troca o servidor gráfico padrão.'
  },
  {
    id: 'xomposite', name: 'xomposite', category: 'laboratorio', risk: 'critico',
    originalUrl: 'https://github.com/demostenex/xomposite', step: 'lab_xomposite',
    description: 'Compositor X11 experimental escrito em Rust para testes com XLibre, sombras e outros efeitos.',
    integration: 'Instala as dependências e compila uma revisão fixa do projeto. O binário fica no HOME, sem iniciar junto do i3.'
  },
  {
    id: 'wayback', name: 'Wayback', category: 'laboratorio', risk: 'critico',
    originalUrl: 'https://gitlab.freedesktop.org/wayback/wayback', step: 'lab_wayback',
    description: 'Camada experimental que permite rodar ambientes X11 através de componentes Wayland.',
    integration: 'Instala wayback-x11 pelo AUR. Não troca o servidor padrão nem modifica o gerenciador de login.'
  },
  {
    id: 'booster', name: 'Booster', category: 'laboratorio', risk: 'critico',
    originalUrl: 'https://github.com/anatol/booster', step: 'lab_booster',
    description: 'Gerador de initramfs alternativo, para quem deseja experimentar outra forma de preparar o boot do Linux.',
    integration: 'Instala Booster pelo repositório oficial. O hook gera imagens alternativas em paralelo e o DarfinOS não modifica a entrada de boot.'
  },
  { id: "windowmaker", name: "Window Maker", originalUrl: "https://www.windowmaker.org/", category: "wm-desktop", risk: "opcional", step: "lab_windowmaker", description: "Sessão X11 inspirada no NeXTSTEP; não troca o login.", integration: "Pacote oficial do Arch. Ativação é opcional." },
  { id: "notion", name: "Notion WM", originalUrl: "https://notionwm.net/", category: "wm-desktop", risk: "avancado", step: "lab_notion", description: "WM X11 com mosaico estático e abas; pacote notion-git.", integration: "AUR com revisão do PKGBUILD." },
  { id: "e16", name: "Enlightenment E16", originalUrl: "https://www.enlightenment.org/e16", category: "wm-desktop", risk: "opcional", step: "lab_e16", description: "Window manager X11 retrô; sessão alternativa.", integration: "Pacote oficial do Arch. Ativação é opcional." },
  { id: "xpra", name: "Xpra", originalUrl: "https://xpra-org.github.io/xpra/", category: "laboratorio", risk: "opcional", step: "lab_xpra", description: "Encaminha janelas X11; não inicia serviços nem abre portas.", integration: "Pacote oficial do Arch. Ativação é opcional." },
  { id: "opengamepadui", name: "OpenGamepadUI", originalUrl: "https://github.com/ShadowBlip/OpenGamepadUI", category: "laboratorio", risk: "avancado", step: "lab_opengamepadui", description: "Launcher e overlay para controle pelo AUR; não troca a sessão ativa.", integration: "AUR com revisão do PKGBUILD." },
  { id: "wmutils", name: "wmutils", originalUrl: "https://github.com/wmutils/core", category: "wm-desktop", risk: "avancado", step: "lab_wmutils", description: "Utilitários para mover e organizar janelas X11 por script.", integration: "AUR com revisão do PKGBUILD." },
  { id: "pkgsrc", name: "pkgsrc", originalUrl: "https://www.netbsd.org/docs/pkgsrc/pkgsrc.html", category: "portatil", risk: "avancado", step: "lab_pkgsrc", description: "Bootstrap sem sudo no HOME com prefixo separado e sem alterar PATH.", integration: "Bootstrap no espaço do usuário." },
  { id: "pipeworld", name: "Arcan + Pipeworld", originalUrl: "https://github.com/letoram/pipeworld", category: "laboratorio", risk: "critico", step: "lab_pipeworld", description: "Instala Arcan pelo AUR e prepara um lançador Pipeworld no HOME; uso experimental.", integration: "Pacote AUR e código upstream fixado. Sessão não validada." },
  { id: "chezmoi", name: "chezmoi", originalUrl: "https://www.chezmoi.io/", category: "automacao", risk: "opcional", step: "lab_chezmoi", description: "Motor dos perfis de personalização com prévia e aplicação seletiva.", integration: "Pacote oficial do Arch. Ativação é opcional." },
  { id: "matugen", name: "Matugen", originalUrl: "https://github.com/InioX/matugen", category: "automacao", risk: "opcional", step: "lab_matugen", description: "Extrai paletas de wallpapers para a Oficina de Temas.", integration: "Pacote oficial do Arch. Ativação é opcional." },
  { id: "autorandr", name: "autorandr", originalUrl: "https://github.com/phillipberndt/autorandr", category: "automacao", risk: "opcional", step: "lab_autorandr", description: "Perfis de monitores X11; aplica somente modos disponíveis.", integration: "Pacote oficial do Arch. Ativação é opcional." },
  { id: "desktop_config", name: "Xfconf + KConfig", originalUrl: "https://docs.xfce.org/xfce/xfconf/xfconf-query", category: "automacao", risk: "opcional", step: "lab_desktop_config", description: "Ajustes pontuais de tema no Xfce e estilo Qt no SonicDE.", integration: "Pacote oficial do Arch. Ativação é opcional." },
  { id: "etckeeper", name: "etckeeper", originalUrl: "https://etckeeper.branchable.com/", category: "automacao", risk: "avancado", step: "lab_etckeeper", description: "Histórico local de /etc; inicialização separada, sem envio remoto.", integration: "Pacote oficial do Arch. Ativação é opcional." },
  { id: "rustic", name: "rustic", originalUrl: "https://rustic.cli.rs/", category: "automacao", risk: "opcional", step: "lab_rustic", description: "Backups criptografados em destino escolhido; sem repositório automático.", integration: "Pacote oficial do Arch. Ativação é opcional." },
  { id: "kvantum", name: "Kvantum", originalUrl: "https://github.com/tsujan/Kvantum", category: "automacao", risk: "opcional", step: "lab_kvantum", description: "Temas Qt SVG para SonicDE com opção de suporte Qt5.", integration: "Pacote oficial do Arch. Ativação é opcional." }
];

export const labGroups = [
  { id: 'todos', name: 'Todos' },
  { id: 'wm-desktop', name: 'Desktop / WM' },
  { id: 'portatil', name: 'Portáteis' },
  { id: 'declarativo', name: 'Declarativos' },
  { id: 'laboratorio', name: 'Laboratório' },
  { id: 'automacao', name: 'Automação e temas' }
] as const;
