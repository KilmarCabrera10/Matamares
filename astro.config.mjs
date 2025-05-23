// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://tupaginaweb.com', // Cambia esto por tu dominio real
  vite: {
    plugins: [tailwindcss()]
  }
});
