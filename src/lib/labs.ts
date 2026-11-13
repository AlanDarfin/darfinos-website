import type { LabId } from './lab-gallery';

export type LabProject = {
  id: LabId;
  name: string;
  description: string;
  originalUrl: string;
  category: 'wm-desktop' | 'portatil' | 'declarativo' | 'laboratorio';
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
  }
];

export const labGroups = [
  { id: 'todos', name: 'Todos' },
  { id: 'wm-desktop', name: 'Desktop / WM' },
  { id: 'portatil', name: 'Portáteis' },
  { id: 'declarativo', name: 'Declarativos' },
  { id: 'laboratorio', name: 'Laboratório' }
] as const;
