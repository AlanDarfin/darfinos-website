import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({
  site: 'https://darfinos.vercel.app',
  integrations: [tailwind()],
  output: 'static'
});
