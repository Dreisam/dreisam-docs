import type { PwaOptions } from '@vite-pwa/vitepress';
import type { HeadConfig } from 'vitepress';

import { resolve } from 'node:path';

import { defineConfig, postcssIsolateStyles } from 'vitepress';

import { docsBrand } from './brand.mts';
import { search as zhSearch } from './zh.mts';

export const shared = defineConfig({
  appearance: true,
  cleanUrls: true,
  head: head(),
  pwa: pwa(),
  srcDir: 'src',
  themeConfig: {
    i18nRouting: true,
    logo: {
      dark: '/logo-dark.svg',
      light: '/logo.svg',
    },
    search: {
      options: {
        locales: {
          ...zhSearch,
        },
      },
      provider: 'local',
    },
    siteTitle: docsBrand.name,
  },
  title: docsBrand.name,
  vite: {
    build: {
      chunkSizeWarningLimit: Infinity,
    },
    css: {
      postcss: {
        plugins: [postcssIsolateStyles({ includeFiles: [/vp-doc\.css/] })],
      },
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
    json: {
      stringify: true,
    },
    server: {
      fs: {
        allow: ['../..'],
      },
      host: true,
      port: 6173,
    },

    ssr: {
      external: ['@vue/repl'],
    },
  },
});

function head(): HeadConfig[] {
  return [
    [
      'meta',
      {
        content: `${docsBrand.name}, docs, sdk`,
        name: 'keywords',
      },
    ],
    ['link', { href: '/logo.svg', rel: 'icon', type: 'image/svg+xml' }],
    [
      'meta',
      {
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        name: 'viewport',
      },
    ],
    ['link', { href: '/logo.svg', rel: 'icon' }],
  ];
}

function pwa(): PwaOptions {
  return {
    includeManifestIcons: false,
    manifest: {
      description: docsBrand.pwaDescription,
      icons: [
        {
          sizes: 'any',
          src: '/logo.svg',
          type: 'image/svg+xml',
        },
        {
          sizes: 'any',
          src: '/logo.svg',
          type: 'image/svg+xml',
        },
      ],
      id: '/',
      name: `${docsBrand.name} Docs`,
      short_name: docsBrand.name.toLowerCase().replaceAll(/\s+/g, '_'),
      theme_color: '#ffffff',
    },
    outDir: resolve(process.cwd(), '.vitepress/dist'),
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
    },
  };
}
