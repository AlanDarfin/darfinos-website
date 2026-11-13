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
       'The Retro preset installs Xfce and copies selected upstream themes and icons to HOME after confirmation. It does not execute the upstream installer or apply the theme automatically.'],
  nscde: ['A modern desktop experience inspired by the classic commercial UNIX workstations, based on FVWM.',
       'Optional AUR stage. Installs the package only; it does not activate a new desktop session.'],
  junest: ['A user-space Arch Linux environment for experimenting with programs without installing them into the host.',
       'Optional AUR stage. Environment creation and namespace permissions remain manual.'],
  decman: ['Declarative Arch package, service and file management through Python configurations.',
       'Optional AUR stage. DarfinOS never applies a Python configuration or synchronizes system state automatically.'],
  metapac: ['Declarative package management across multiple packaging systems.',
       'Optional AUR stage. Commands such as sync and clean are never run automatically.'],
  conty: ['A compressed, portable Linux container useful for games, Wine and programs with separate library stacks.',
       'Documentation only. Download from upstream and review FUSE and user-namespace requirements.'],
  nix_portable: ['Portable Nix environments without a traditional system-wide installation.',
       'Documentation only. Review upstream binaries, permissions and isolation requirements.'],
  trinity: ['An independent continuation of the classic KDE 3 desktop.',
       'Documentation only. Requires external repositories and trust configuration; test a separate desktop session.'],
  yserver: ['An experimental X11 server reimplemented in Rust.',
       'Research and VM testing only. DarfinOS does not replace XLibre with it.'],
  xomposite: ['An experimental Rust-based X11 compositor aimed at XLibre.',
       'Research and isolated sessions only; do not run alongside an active KWin compositor.'],
  wayback: ['Experimental infrastructure for running a full X11 desktop with Wayland components.',
       'Documentation and isolated testing only. The active source is on freedesktop.org GitLab.'],
  booster: ['An alternative Linux initramfs generator.',
       'Documentation only; never change the boot chain without a tested snapshot and recovery route.'],
};

export const englishLabs = labProjects.map(project => ({
  ...project,
  description: labTranslations[project.id]?.[0] || project.description,
  integration: labTranslations[project.id]?.[1] || project.integration,
}));
