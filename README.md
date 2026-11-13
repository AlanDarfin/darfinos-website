<div align="center">

<img src="public/darfinos-mark.svg" alt="DarfinOS double lightning mark" width="104"/>

# DarfinOS · Website

### A Linux distribution with opinions that aren't yours.

**Your Arch, my rules.**

**🇺🇸 English (default) · [🇧🇷 Português (Brasil)](README.pt-BR.md)**

[![Website](https://img.shields.io/badge/WEBSITE-DarfinOS-FFCB2E?style=for-the-badge&labelColor=171717)](https://darfinos.vercel.app/)
![Arch Linux](https://img.shields.io/badge/BASE-Arch_Linux-FFCB2E?style=for-the-badge&labelColor=171717&logo=archlinux&logoColor=white)

**[🌐 Website](https://darfinos.vercel.app/) · [⚡ Main repository](https://github.com/AlanDarfin/DarfinOS) · [📚 Documentation](https://darfinos.vercel.app/docs/) · [⬇️ Downloads](https://darfinos.vercel.app/downloads/)**

</div>

---

## What is DarfinOS?

DarfinOS is an **opinionated Arch Linux post-install and customization project**, not a separate distribution or bootable ISO. This repository contains its static website, built with **Astro 5 + Tailwind CSS**.

The site introduces the modular installer, a terminal Control Center, independently maintained Linux tools and the experiments that give DarfinOS its identity.

## Languages

**English is the default website and GitHub documentation language.** The Brazilian Portuguese version of the website is served from `/pt-br/`. The website detects browsers that prefer Portuguese and redirects automatically; visitors can always switch languages manually using the **EN / PT-BR** control in the header.

Both languages have dedicated static pages with their own `<html lang>`, descriptive metadata and `hreflang` links. The language preference is remembered locally in the browser. This does not read or expose any user account data.

GitHub's README renderer does **not** support automatic translation based on the visitor's language. That's why this README is in English and the Brazilian Portuguese version is available as [README.pt-BR.md](README.pt-BR.md).

## Pages

| English | Português (Brasil) | Purpose |
| --- | --- | --- |
| [Home](https://darfinos.vercel.app/) | [Início](https://darfinos.vercel.app/pt-br/) | Features, modular steps, gallery, Labs |
| [Documentation](https://darfinos.vercel.app/docs/) | [Documentação](https://darfinos.vercel.app/pt-br/docs/) | Installation guidance and commands |
| [Control Center](https://darfinos.vercel.app/controle/) | [Control Center](https://darfinos.vercel.app/pt-br/controle/) | Profiles, audits, backups and module checks |
| [Labs](https://darfinos.vercel.app/labs/) | [Labs](https://darfinos.vercel.app/pt-br/labs/) | Independent projects and original links |
| [Projects and credits](https://darfinos.vercel.app/ferramentas/) | [Ferramentas e créditos](https://darfinos.vercel.app/pt-br/ferramentas/) | Upstream credits and source links |
| [Downloads](https://darfinos.vercel.app/downloads/) | [Downloads](https://darfinos.vercel.app/pt-br/downloads/) | Current source ZIP and development prereleases |

## Downloads and releases

The site **never treats a GitHub releases page with no entries as a download**. The download page always provides a working URL to the [current source ZIP from the main branch](https://github.com/AlanDarfin/DarfinOS/archive/refs/heads/main.zip).

When the main repository publishes a development **prerelease**, the downloads page looks up the versioned archive and SHA-256 asset using GitHub's public releases API. It never presents a prerelease as stable.

Release candidates are produced only after successful Python/Bash tests and an Arch container smoke test on the exact same commit. Full graphical VM and recovery testing remain prerequisites to an eventual stable release. DarfinOS is **not an ISO distribution**.

## Visual identity

- Dark background, electric yellow details, clean layouts and compact cards.
- Minimal double-lightning-bolt mark in `public/darfinos-mark.svg`.
- Motto: **Your Arch, my rules.**
- Every independent project links to its official website or repository.

## Local development

```bash
npm ci
npm run dev
npm run build
npm run preview
```

The site is statically generated. The locale switch and release listing use progressive client-side JavaScript; the download ZIP, navigation and content remain available when that enhancement cannot run.

GitHub Actions checks website builds in pull requests. Vercel deploys the site after changes reach the main branch.

## Contributions

Issues and pull requests are welcome. Maintain both language versions for user-facing changes and preserve official upstream credits and links.

---

**[Main DarfinOS project](https://github.com/AlanDarfin/DarfinOS) · [Site](https://darfinos.vercel.app/) · [Português](README.pt-BR.md)**
