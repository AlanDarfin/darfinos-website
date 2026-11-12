export type LabProject = {
  id: string;
  name: string;
  description: string;
  originalUrl: string;
  category: 'wm-desktop' | 'portatil' | 'declarativo' | 'laboratorio';
  risk: 'opcional' | 'avancado' | 'critico';
  integration: string;
  step?: string;
};

export const labProjects: LabProject[] = [
  {
    id: 'i3', name: 'i3 Window Manager', category: 'wm-desktop', risk: 'opcional',
    originalUrl: 'https://i3wm.org/', step: 'i3',
    description: 'Gerenciador de janelas X11 com organização em mosaico e atalhos de teclado. Uma sessão independente, sem substituir o SonicDE.',
    integration: 'Pacotes oficiais Arch (i3-wm, i3status, i3lock e dmenu). Preset próprio i3 + XLibre.'
  },
  {
    id: 'nscde', name: 'NsCDE', category: 'wm-desktop', risk: 'avancado',
    originalUrl: 'https://github.com/NsCDE/NsCDE', step: 'lab_nscde',
    description: 'Ambiente inspirado nas estações de trabalho UNIX, construído com ferramentas modernas e FVWM.',
    integration: 'Etapa AUR opcional. Instalação separada, sem ativar automaticamente uma sessão gráfica.'
  },
  {
    id: 'junest', name: 'JuNest', category: 'portatil', risk: 'avancado',
    originalUrl: 'https://github.com/fsquillace/junest', step: 'lab_junest',
    description: 'Ambiente Arch Linux em espaço de usuário para experimentar pacotes e ferramentas sem instalar no host.',
    integration: 'Etapa AUR opcional. A criação do ambiente e suas permissões são configuradas pelo usuário depois.'
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
    originalUrl: 'https://github.com/Kron4ek/Conty',
    description: 'Contêiner Linux comprimido em um executável portátil, útil para jogos, Wine e aplicativos com bibliotecas próprias.',
    integration: 'Guia de instalação manual. Baixe a versão do projeto original e revise requisitos de FUSE e namespaces.'
  },
  {
    id: 'nix_portable', name: 'nix-portable', category: 'portatil', risk: 'avancado',
    originalUrl: 'https://github.com/DavHau/nix-portable',
    description: 'Nix portátil sem instalação tradicional, com execução em espaço de usuário.',
    integration: 'Guia de instalação manual. Binários e ambientes vêm do upstream e exigem avaliação das permissões.'
  },
  {
    id: 'trinity', name: 'Trinity Desktop', category: 'wm-desktop', risk: 'critico',
    originalUrl: 'https://www.trinitydesktop.org/',
    description: 'Continuação independente do KDE 3, com interface tradicional e ecossistema próprio.',
    integration: 'Guia manual: exige repositório e chave de terceiros. Recomenda-se testar em VM e usar sessão separada.'
  },
  {
    id: 'yserver', name: 'yserver', category: 'laboratorio', risk: 'critico',
    originalUrl: 'https://github.com/joske/yserver',
    description: 'Novo servidor X11 escrito em Rust, alternativa experimental à arquitetura histórica do X.Org.',
    integration: 'Laboratório gráfico somente documental; não substitui XLibre automaticamente.'
  },
  {
    id: 'xomposite', name: 'xomposite', category: 'laboratorio', risk: 'critico',
    originalUrl: 'https://github.com/demostenex/xlibre-compositor-poc',
    description: 'Compositor X11 experimental escrito em Rust para testes com XLibre, sombras e outros efeitos.',
    integration: 'Laboratório gráfico separado; não ativar simultaneamente ao compositor do KWin/SonicDE.'
  },
  {
    id: 'wayback', name: 'Wayback', category: 'laboratorio', risk: 'critico',
    originalUrl: 'https://gitlab.freedesktop.org/wayback/wayback',
    description: 'Camada experimental que permite rodar ambientes X11 através de componentes Wayland.',
    integration: 'Laboratório documental. O repositório ativo está no GitLab do freedesktop.org.'
  },
  {
    id: 'booster', name: 'Booster', category: 'laboratorio', risk: 'critico',
    originalUrl: 'https://github.com/anatol/booster',
    description: 'Gerador de initramfs alternativo, para quem deseja experimentar outra forma de preparar o boot do Linux.',
    integration: 'Guia manual e teste em VM; o DarfinOS não altera bootloader ou initramfs automaticamente.'
  }
];

export const labGroups = [
  { id: 'todos', name: 'Todos' },
  { id: 'wm-desktop', name: 'Desktop / WM' },
  { id: 'portatil', name: 'Portáteis' },
  { id: 'declarativo', name: 'Declarativos' },
  { id: 'laboratorio', name: 'Laboratório' }
] as const;
