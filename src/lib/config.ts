export const siteConfig = {
 name: 'DarfinOS', tagline: 'Seu Arch, minhas regras.',
 description: 'Meu jeito de personalizar uma instalação Arch: ferramentas modulares, desktop e experimentos.',
 githubRepo: 'AlanDarfin/DarfinOS', supportUrl: 'https://github.com/AlanDarfin/DarfinOS/issues',
 links: [
  {
    name: 'Arch Linux',
    role: 'BASE DO SISTEMA',
    url: 'https://archlinux.org/',
    summary: 'Distribuição Linux independente e de lançamento contínuo que serve de base para o DarfinOS.',
    description: 'O Arch Linux é uma distribuição independente, leve e flexível, com atualizações contínuas, o gerenciador de pacotes pacman e uma documentação comunitária extensa (ArchWiki). O DarfinOS parte de uma instalação Arch existente e adiciona opções de pós-instalação e personalização, sem substituir o sistema nem fornecer uma ISO própria.'
  },
  {
    name: 'SonicDE',
    role: 'AMBIENTE DE DESKTOP',
    url: 'https://sonicde.org/',
    summary: 'Ambiente gráfico derivado do KDE que preserva e desenvolve a experiência Plasma no X11.',
    description: 'O Sonic Desktop Environment é um projeto independente derivado de componentes do KDE, com foco em preservar e aprimorar a experiência X11. Inclui componentes do Plasma e uma versão própria do KWin/X11. No DarfinOS, ele é uma opção para montar um desktop familiar e personalizável; não é desenvolvido pela equipe do DarfinOS.'
  },
  {
    name: 'XLibre',
    role: 'SERVIDOR GRÁFICO X11',
    url: 'https://xlibre.net/',
    summary: 'Servidor gráfico comunitário que continua o desenvolvimento da arquitetura X11.',
    description: 'O XLibre é um servidor gráfico comunitário baseado no protocolo X11, derivado do X.Org Server. O projeto trabalha em manutenção, compatibilidade e evolução do servidor e dos drivers. Ele pode ser usado como base gráfica para ambientes como o SonicDE, mas envolve mudanças de baixo nível que devem ser avaliadas antes da instalação.'
  },
  {
    name: 'CachyOS',
    role: 'REPOSITÓRIOS OTIMIZADOS',
    url: 'https://wiki.cachyos.org/',
    summary: 'Projeto baseado no Arch conhecido por pacotes otimizados e ajustes de desempenho.',
    description: 'O CachyOS é uma distribuição baseada no Arch Linux, voltada a otimizações de desempenho e responsividade. Além da distribuição, mantém repositórios e documentação sobre seus pacotes e ajustes. O DarfinOS pode oferecer integrações opcionais com esse ecossistema; os ganhos e a compatibilidade dependem do processador, dos pacotes e do uso.'
  },
  {
    name: 'Bedrock Linux',
    role: 'INTEGRAÇÃO AVANÇADA',
    url: 'https://bedrocklinux.org/',
    summary: 'Metadistribuição para combinar componentes de diferentes distribuições Linux.',
    description: 'O Bedrock Linux é uma metadistribuição que permite combinar partes de sistemas normalmente incompatíveis, como ferramentas e pacotes de diferentes distribuições. É uma possibilidade experimental e avançada no DarfinOS, não uma exigência para usar o projeto. Requer leitura cuidadosa da documentação e planejamento para recuperação do sistema.'
  },
  {
    name: 'LinuxToys',
    role: 'GRANDE INSPIRAÇÃO',
    url: 'https://linux.toys',
    sourceUrl: 'https://github.com/psygreg/linuxtoys',
    summary: 'Plataforma que reúne descoberta de aplicativos, instalações e manutenção do Linux.',
    description: 'O LinuxToys reúne instalação e descoberta de programas, ferramentas de manutenção, ajustes e configuração repetível de sistemas em uma interface para diversas distribuições. Sua proposta de tornar tarefas complexas mais acessíveis serviu de inspiração para o DarfinOS. É um projeto independente, com identidade, desenvolvimento e comunidade próprios.'
  }
],
 screenshots: [{"src": "/screenshots/terminal.png", "alt": "Terminal com identidade DarfinOS", "title": "Terminal com identidade DarfinOS", "label": "PERSONALIZAÇÃO DARFINOS", "caption": "Exemplo da identidade do terminal com Fastfetch, utilitário que exibe informações de hardware, sistema e ambiente gráfico de forma personalizável. A captura também mostra Bedrock Linux, KWin e XLibre: ferramentas externas, não componentes criados pelo DarfinOS.", "url": "https://github.com/fastfetch-cli/fastfetch", "linkText": "Conhecer o Fastfetch"}, {"src": "/screenshots/tui.png", "alt": "DarfinOS Control Center", "title": "DarfinOS Control Center", "label": "FERRAMENTA DO PROJETO", "caption": "A TUI (interface textual) do DarfinOS permite navegar pelas etapas de pós-instalação, selecionar módulos, inspecionar dependências e revisar o plano antes de executar alterações. É uma ferramenta própria do projeto, diferente das integrações exibidas nas outras imagens.", "url": "https://github.com/AlanDarfin/DarfinOS/blob/main/DarfinOSInstallScript-TUI.py", "linkText": "Abrir TUI no GitHub"}, {"src": "/screenshots/sonicde.png", "alt": "SonicDE — o rosto do desktop", "title": "SonicDE — o rosto do desktop", "label": "PROJETO INDEPENDENTE", "caption": "O SonicDE é um ambiente de desktop independente derivado de componentes do KDE, criado para preservar e aprimorar a experiência do Plasma no X11. Sua combinação de painel, janelas e personalização é uma das opções gráficas oferecidas no DarfinOS. Esta imagem pertence ao SonicDE.", "url": "https://sonicde.org/", "linkText": "Conhecer o SonicDE"}, {"src": "/screenshots/xlibre.png", "alt": "XLibre — a base gráfica", "title": "XLibre — a base gráfica", "label": "PROJETO INDEPENDENTE", "caption": "O XLibre é um servidor gráfico comunitário derivado do X.Org Server, dedicado à manutenção e evolução do X11. Ele fornece a infraestrutura de exibição usada por ambientes gráficos compatíveis, como o SonicDE. A imagem é do projeto XLibre e não representa uma versão específica incluída no DarfinOS.", "url": "https://xlibre.org/", "linkText": "Conhecer o XLibre"}, {"src": "/screenshots/cachyos.png", "alt": "Repositórios otimizados do CachyOS", "title": "Repositórios otimizados do CachyOS", "label": "INTEGRAÇÃO OPCIONAL", "caption": "O CachyOS é uma distribuição baseada em Arch Linux conhecida por suas otimizações de pacotes, kernels e ajustes de desempenho. O DarfinOS pode integrar seus repositórios como opção de personalização; a compatibilidade e os ganhos reais variam conforme o hardware, os pacotes e a carga de trabalho.", "url": "https://wiki.cachyos.org/", "linkText": "Consultar a wiki do CachyOS"}, {"src": "/screenshots/bedrock.png", "alt": "Bedrock Linux — além de uma distro", "title": "Bedrock Linux — além de uma distro", "label": "EXPERIMENTO OPCIONAL", "caption": "O Bedrock Linux é uma metadistribuição que possibilita combinar componentes de diferentes distribuições Linux no mesmo sistema. O DarfinOS a apresenta como experimento avançado e opcional, pois alterações nessa camada exigem conhecimento prévio, backups e um plano de recuperação.", "url": "https://bedrocklinux.org/", "linkText": "Conhecer o Bedrock Linux"}, {"src": "/screenshots/linuxtoys.png", "alt": "Bônus: LinuxToys", "title": "Bônus: LinuxToys", "label": "GRANDE INSPIRAÇÃO", "caption": "O LinuxToys inspira a ideia de reunir tarefas Linux em um só lugar: descoberta e instalação de programas, utilitários, manutenção e configurações repetíveis para várias distribuições. É um projeto independente, mantido por seus próprios desenvolvedores, e não faz parte do DarfinOS.", "url": "https://linux.toys", "linkText": "Explorar o LinuxToys"}]
};
export const githubUrl = `https://github.com/${siteConfig.githubRepo}`;
export const releaseUrl = `${githubUrl}/releases`;
export const sourceZipUrl = `${githubUrl}/archive/refs/heads/main.zip`;
