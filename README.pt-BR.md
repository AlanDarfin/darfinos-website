<div align="center">

**[🇺🇸 English (default)](README.md) · 🇧🇷 Português (Brasil)**


<img src="public/darfinos-mark.svg" alt="Logotipo DarfinOS: dois raios geométricos" width="104" />

# DarfinOS — Website

### Uma distro Linux com opiniões que não são as suas.

**Seu Arch, minhas regras.**

![Website](https://img.shields.io/badge/WEBSITE-DarfinOS-FFCB2E?style=for-the-badge&labelColor=171717)
![Arch Linux](https://img.shields.io/badge/BASE-Arch_Linux-FFCB2E?style=for-the-badge&labelColor=171717&logo=archlinux&logoColor=white)
![Open Source](https://img.shields.io/badge/PROJETO-Open_Source-FFCB2E?style=for-the-badge&labelColor=171717)

**[🌐 Site oficial](https://darfinos.vercel.app/) · [💻 DarfinOS no GitHub](https://github.com/AlanDarfin/DarfinOS) · [📚 Documentação](https://github.com/AlanDarfin/DarfinOS/tree/main/docs) · [⬇️ Downloads](https://darfinos.vercel.app/pt-br/downloads/)**

</div>

---

## ✦ Sobre

Este repositório reúne o **site do DarfinOS**, um projeto opinativo de **personalização e pós-instalação do Arch Linux**. O site apresenta a proposta, galeria filtrável, ferramentas independentes, downloads, documentação e comandos de diagnóstico para quem usa o projeto.

O DarfinOS **não é uma distribuição Linux independente**: é uma experiência de configuração do Arch Linux, com escolhas próprias e automação.

## ⚡ Identidade

- **Visual:** escuro, elétrico e amarelo.
- **Símbolo:** raio duplo geométrico, derivado do conceito 02, disponível em `public/darfinos-mark.svg` e aplicado no favicon, cabeçalho, rodapé e página inicial.
- **Slogan:** *Seu Arch, minhas regras.*
- **Filosofia:** *Uma distro Linux com opiniões que não são as suas.*

## 🔗 Projetos e inspirações

| Projeto | O que é e qual seu papel | Link |
| --- | --- | --- |
| **DarfinOS** | Ferramentas de pós-instalação, scripts e TUI que permitem escolher e revisar personalizações para um Arch Linux já instalado. | [Repositório principal](https://github.com/AlanDarfin/DarfinOS) |
| **Arch Linux** | Distribuição Linux independente, minimalista e de atualização contínua que constitui a base do DarfinOS. | [Site oficial](https://archlinux.org/) |
| **SonicDE** | Ambiente de desktop derivado de componentes do KDE, com foco em preservar e aprimorar a experiência Plasma sobre X11. | [Site oficial](https://sonicde.org/) |
| **XLibre** | Servidor gráfico comunitário derivado do X.Org Server, que mantém e evolui o protocolo X11. | [Site oficial](https://xlibre.net/) |
| **CachyOS** | Distribuição baseada no Arch conhecida por otimizações; seu ecossistema de repositórios pode ser integrado opcionalmente. | [Documentação oficial](https://wiki.cachyos.org/) |
| **Bedrock Linux** | Metadistribuição para combinar componentes de diferentes sistemas Linux, apresentada como opção experimental avançada. | [Site oficial](https://bedrocklinux.org/) |
| **LinuxToys** | Plataforma independente para descoberta e instalação de software, manutenção e configurações repetíveis de sistemas Linux. Uma grande inspiração para o DarfinOS. | [Site oficial](https://linux.toys) · [Código](https://github.com/psygreg/linuxtoys) |

> [!NOTE]
> A página [Ferramentas e créditos](https://darfinos.vercel.app/ferramentas/) reúne descrições mais completas, as atribuições e os destinos oficiais de cada projeto. Para instalar, consultar opções e entender os riscos das modificações do sistema, leia o [README principal do DarfinOS](https://github.com/AlanDarfin/DarfinOS#readme).

## 🤝 Contribuições

Sugestões, melhorias visuais e correções são bem-vindas por meio de issues e pull requests.

---

<div align="center">

**Feito para quem gosta de deixar o Arch com personalidade. ⚡**

</div>


## 🧭 Páginas e funcionalidades

- **/** — versão principal em inglês; apresentação, 41 etapas, seis presets, Labs e galeria interativa.
- **/docs/** — instalação segura, Doctor, plano de execução, logs e FAQ com comandos copiáveis.
- **/ferramentas/** — créditos e links oficiais das tecnologias e inspirações.

A interface estática usa **Astro + Tailwind**; galeria e botões de copiar são aprimoramentos progressivos em JavaScript. Nenhum backend é necessário.

## 🛠 Desenvolver localmente

```bash
npm ci
npm run dev
npm run build
npm run preview
```

A branch principal contém o código de desenvolvimento mais recente, **não uma release estável**. A página de [Downloads](https://darfinos.vercel.app/pt-br/downloads/) oferece o ZIP da main mesmo quando não existem releases, além dos candidatos de desenvolvimento publicados com SHA-256 depois dos testes. **Não há ISO nem versão estável validada em VM.**

O build é verificado em pull requests por [GitHub Actions](.github/workflows/site.yml).

**Site:** https://darfinos.vercel.app/ · **Instalador:** https://github.com/AlanDarfin/DarfinOS


## 🌐 Idiomas

O site agora tem **inglês como padrão** e páginas completas em português em `/pt-br/`. Se o navegador preferir português (`pt`), a página redireciona automaticamente para a versão brasileira. O visitante pode mudar manualmente entre **EN / PT-BR**, e a preferência fica salva localmente no navegador.

Os dois READMEs do GitHub são arquivos diferentes porque o próprio GitHub não permite escolher automaticamente o idioma do README com base no navegador. Este arquivo é a versão em português; [o README principal em inglês](README.md) é o padrão.

## 📦 Releases e verificações

- [ZIP atual do código](https://github.com/AlanDarfin/DarfinOS/archive/refs/heads/main.zip): disponível mesmo sem releases, mas não é versão estável.
- [Candidatos de desenvolvimento](https://github.com/AlanDarfin/DarfinOS/releases): quando os testes Python/Bash e o smoke no Arch passam no mesmo commit, o GitHub Actions publica um **prerelease** com pacote e checksum.
- [Página bilíngue de downloads](https://darfinos.vercel.app/pt-br/downloads/): identifica claramente fonte, pré-lançamentos e pendências de validação.

As páginas em inglês e português incluem início, documentação, Control Center, Labs, ferramentas e downloads.
