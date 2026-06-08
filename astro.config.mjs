// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore - type mismatch between @tailwindcss/vite and Astro's vite re-export, works at runtime
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    site: 'https://sreedan.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
