// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compress from 'astro-compress';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  // Configuración del sitio
  site: 'https://woaitea.com',
  base: '/',
  
  // Configuración de salida
  output: 'static',
  
  // Configuración de build
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
    assets: 'assets',
  },
  
  // Configuración de servidor de desarrollo
  server: {
    port: 3000,
    host: true,
  },
  
  // Configuración de preview
  preview: {
    port: 4321,
    host: true,
  },
  
  // Integraciones
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    
    robotsTxt({
      sitemap: ['https://woaitea.com/sitemap-index.xml'],
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/admin/', '/api/', '/_astro/'],
        },
      ],
      host: 'https://woaitea.com',
    }),
    
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
    
    partytown({
      config: {
        forward: ['dataLayer.push'],
        debug: false,
      },
    }),
  ],
  
  // Configuración de Vite simplificada
  vite: {
    plugins: [tailwindcss()],
    
    css: {
      devSourcemap: true,
    },
    
    server: {
      fs: {
        strict: false,
      },
    },
    
    define: {
      __SITE_URL__: JSON.stringify('https://woaitea.com'),
      __BUSINESS_NAME__: JSON.stringify('Wo Ai Tea'),
      __BUSINESS_PHONE__: JSON.stringify('+503-1234-5678'),
      __BUSINESS_EMAIL__: JSON.stringify('hola@woaitea.com'),
      __BUSINESS_ADDRESS__: JSON.stringify('Plaza Soho Las Cascadas, Local 15, Antiguo Cuscatlán'),
    },
  },
  
  // Configuración de imágenes
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    formats: ['webp', 'avif', 'jpeg', 'png'],
  },
  
  // Configuración de prefetch
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  
  // Configuración de seguridad
  security: {
    checkOrigin: true,
  },
});