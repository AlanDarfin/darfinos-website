import { siteConfig } from './config';

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

const galleryText = [
  ['DarfinOS terminal','DARFINOS CUSTOMIZATION','A DarfinOS terminal using Fastfetch, which displays system and hardware details. Bedrock, KWin and XLibre visible here are independent third-party projects.','Visit Fastfetch'],
  ['DarfinOS Control Center','PROJECT TOOL','The text-based installer lets you inspect modules, dependencies, installation plans and module status before performing any changes.','View the TUI code'],
  ['SonicDE desktop','INDEPENDENT PROJECT','SonicDE is an independent KDE-derived desktop environment focused on the Plasma X11 experience. The screenshot belongs to SonicDE.','Visit SonicDE'],
  ['XLibre display server','INDEPENDENT PROJECT','XLibre continues X11 server development based on the X.Org lineage. This image does not represent a guaranteed version installed by DarfinOS.','Visit XLibre'],
  ['CachyOS packages and performance','OPTIONAL INTEGRATION','CachyOS is an Arch-based distribution with performance-tuned packages and repositories. Using its packages is optional and hardware-dependent.','Read CachyOS docs'],
  ['Bedrock Linux','ADVANCED EXPERIMENT','Bedrock allows components from different Linux distributions to work together. DarfinOS treats it as a high-risk optional experiment.','Visit Bedrock'],
  ['LinuxToys inspiration','PROJECT INSPIRATION','LinuxToys collects application discovery, installation and maintenance tools for Linux. It is a separate project, not part of DarfinOS.','Visit LinuxToys'],
] as const;

export const englishGallery = siteConfig.screenshots.map((shot, i) => ({
  ...shot,
  alt: galleryText[i][0],
  title: galleryText[i][0],
  label: galleryText[i][1],
  caption: galleryText[i][2],
  linkText: galleryText[i][3],
}));
