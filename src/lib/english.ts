import { siteConfig } from './config';
import { labProjects } from './labs';
import { screenshots } from './screenshots';

const roles = [
  ['SYSTEM FOUNDATION','An independent, rolling-release Linux distribution and DarfinOS base.','Arch Linux provides a minimal, flexible system with pacman and a rich ArchWiki. DarfinOS starts from an existing Arch installation and adds optional post-install steps.'],
  ['DESKTOP ENVIRONMENT','A KDE-derived desktop that continues the Plasma experience on X11.','SonicDE is an independent desktop project preserving and extending Plasma components and its own X11 window management. DarfinOS offers it as an optional desktop choice.'],
  ['X11 DISPLAY SERVER','A community X11 server project continuing the X.Org lineage.','XLibre maintains and evolves an X11 server and graphics driver ecosystem. Replacing a running display stack is a high-impact change best tested from a TTY and with recovery available.'],
  ['OPTIMIZED REPOSITORIES','An Arch-based performance-focused project and package ecosystem.','CachyOS maintains optimized packages, kernels and performance-oriented tools. DarfinOS can optionally use compatible repositories, but benefits and compatibility depend on the machine.'],
  ['ADVANCED SYSTEM EXPERIMENT','Combine components from multiple Linux distributions.','Bedrock Linux enables cross-distribution integration. It is an advanced optional experiment in DarfinOS, not a prerequisite. Changes at this level require a recovery strategy.'],
  ['MAJOR INSPIRATION','A tool collection for Linux software, maintenance and setup.','LinuxToys brings application discovery and system configuration workflows together. It inspired DarfinOS, but is independently developed and maintained.'],
] as const;

export const englishProjects = siteConfig.links.map((project, i) => ({
  ...project,
  role: roles[i][0],
  summary: roles[i][1],
  description: roles[i][2],
}));

export const englishGallery = screenshots.map(({ pt, en, ...image }) => ({ ...image, ...en }));

const labTranslations: Record<string, [string, string]> = {
  i3: ['An X11 tiling window manager built around keyboard-driven window layouts.',
       'Official Arch packages and an optional i3 + XLibre preset. Does not remove SonicDE.'],
  chicago95: ['A Windows 95-inspired set of GTK, Xfwm and icon themes for Xfce, with optional cursor and desktop assets.',
       'The Retro preset installs Xfce plus GTK/Xfwm themes, icons, cursors and fonts. Your current panel, theme and session stay as they are.'],
  nscde: ['A modern desktop experience inspired by the classic commercial UNIX workstations, based on FVWM.',
       'Optional AUR stage. Installs the package only; it does not activate a new desktop session.'],
  junest: ['A user-space Arch Linux environment for experimenting with programs without installing them into the host.',
       'Installs junest-git from the AUR and runs junest setup in HOME. Host namespace settings stay as they are.'],
  decman: ['Declarative Arch package, service and file management through Python configurations.',
       'Optional AUR stage. DarfinOS never applies a Python configuration or synchronizes system state automatically.'],
  metapac: ['Declarative package management across multiple packaging systems.',
       'Optional AUR stage. Commands such as sync and clean are never run automatically.'],
  conty: ['A compressed, portable Linux container useful for games, Wine and programs with separate library stacks.',
       'Installs Conty Lite for x86_64 in HOME, with FUSE and an upstream download verified by SHA-256.'],
  nix_portable: ['Portable Nix environments without a traditional system-wide installation.',
       'Installs the official x86_64 binary in HOME, verifies its SHA-256 and leaves the system Nix store and services untouched.'],
  trinity: ['An independent continuation of the classic KDE 3 desktop.',
       'Verifies the signing key, registers the Trinity repository and installs tde-meta with a full Arch upgrade. Your login manager stays in place.'],
  yserver: ['An experimental X11 server reimplemented in Rust.',
       'Installs yserver and starty from the AUR, with optional Intel or AMD Vulkan drivers. Does not replace the default X server.'],
  xomposite: ['An experimental Rust-based X11 compositor aimed at XLibre.',
       'Installs the dependencies and compiles a pinned upstream revision. The binary lives in HOME and does not start automatically.'],
  wayback: ['Experimental infrastructure for running a full X11 desktop with Wayland components.',
       'Installs wayback-x11 from the AUR without changing the default display server or login manager.'],
  booster: ['An alternative Linux initramfs generator.',
       'Installs the official Arch package. Its hook generates alternative initramfs images alongside your existing ones without switching your boot entry.'],
  windowmaker: ["NeXTSTEP-inspired X11 session; keeps your login manager.", "Official Arch package. Activation is optional."],
  notion: ["Tabbed X11 window manager with a static layout; installs notion-git.", "AUR package with PKGBUILD review."],
  e16: ["Classic X11 window manager with its own session.", "Official Arch package. Activation is optional."],
  xpra: ["Forwards individual X11 windows; no services or listening ports enabled.", "Official Arch package. Activation is optional."],
  opengamepadui: ["Gamepad launcher and overlay from the AUR; keeps the current session.", "AUR package with PKGBUILD review."],
  wmutils: ["Scriptable X11 window manipulation utilities.", "AUR package with PKGBUILD review."],
  pkgsrc: ["Unprivileged bootstrap with a separate HOME prefix and no PATH changes.", "Unprivileged upstream bootstrap."],
  pipeworld: ["Installs Arcan from the AUR and stages a local Pipeworld launcher; experimental runtime.", "AUR package plus pinned upstream source. Graphical session unverified."],
  chezmoi: ["Dotfile engine for customization profiles with preview and selective application.", "Official Arch package. Activation is optional."],
  matugen: ["Extracts wallpaper palettes for the Theme Workshop.", "Official Arch package. Activation is optional."],
  autorandr: ["X11 monitor profiles; uses available display modes only.", "Official Arch package. Activation is optional."],
  desktop_config: ["Targeted Xfce theme and SonicDE Qt-style changes.", "Official Arch package. Activation is optional."],
  etckeeper: ["Local /etc history; separate initialization, with no remote uploads.", "Official Arch package. Activation is optional."],
  rustic: ["Encrypted backups to a chosen destination; no repository is created automatically.", "Official Arch package. Activation is optional."],
  kvantum: ["SVG Qt styles for SonicDE with optional Qt5 support.", "Official Arch package. Activation is optional."],
};

export const englishLabs = labProjects.map(project => ({
  ...project,
  description: labTranslations[project.id]?.[0] || project.description,
  integration: labTranslations[project.id]?.[1] || project.integration,
}));
