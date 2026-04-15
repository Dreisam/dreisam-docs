import type { PwaOptions } from '@vite-pwa/vitepress';
import type { HeadConfig } from 'vitepress';

import { resolve } from 'node:path';

import { defineConfig, postcssIsolateStyles } from 'vitepress';

import { docsBrand } from './brand.mts';
import { search as zhSearch } from './zh.mts';

const base = '/dreisam-docs/sdk/';

export const shared = defineConfig({
  base,
  appearance: true,
  cleanUrls: true,
  head: head(base),
  pwa: pwa(base),
  srcDir: 'src',
  themeConfig: {
    i18nRouting: true,
    logo: {
      dark: `${base}logo-dark.svg`,
      light: `${base}logo.svg`,
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
      port: 6174,
    },
    ssr: {
      external: ['@vue/repl'],
    },
  },
});

function head(base: string): HeadConfig[] {
  return [
    [
      'meta',
      {
        content: `${docsBrand.name}, docs, sdk, ios`,
        name: 'keywords',
      },
    ],
    ['link', { href: `${base}logo.svg`, rel: 'icon', type: 'image/svg+xml' }],
    [
      'meta',
      {
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        name: 'viewport',
      },
    ],
    ['link', { href: `${base}logo.svg`, rel: 'icon' }],
  ];
}

function pwa(base: string): PwaOptions {
  return {
    includeManifestIcons: false,
    manifest: {
      description: docsBrand.pwaDescription,
      icons: [
        {
          sizes: 'any',
          src: `${base}logo.svg`,
          type: 'image/svg+xml',
        },
        {
          sizes: 'any',
          src: `${base}logo.svg`,
          type: 'image/svg+xml',
        },
      ],
      id: base,
      name: `${docsBrand.name} SDK`,
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
