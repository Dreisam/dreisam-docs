import type { DefaultTheme } from 'vitepress';

import { defineConfig } from 'vitepress';

import { docsBrand } from './brand.mts';

export const en = defineConfig({
  description: docsBrand.siteDescriptionEn,
  lang: 'en-US',
  themeConfig: {
    darkModeSwitchLabel: 'Theme',
    darkModeSwitchTitle: 'Switch to Dark Mode',
    docFooter: {
      next: 'Next Page',
      prev: 'Previous Page',
    },
    footer: {
      copyright: `Copyright © 2020-${new Date().getFullYear()} ${docsBrand.name}`,
      message: 'Released under the MIT License.',
    },
    langMenuLabel: 'Language',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
      text: 'Last updated on',
    },
    lightModeSwitchTitle: 'Switch to Light Mode',
    nav: nav(),
    outline: {
      label: 'Navigate',
    },
    returnToTopLabel: 'Back to top',
    sidebar: {
      '/dreisam-docs/sdkpro/en/sdk/': {
        base: '/dreisam-docs/sdkpro/en/sdk/',
        items: sidebarSdk(),
      },
      '/dreisam-docs/sdkpro/en/api/': {
        base: '/dreisam-docs/sdkpro/en/api/',
        items: sidebarApi(),
      },
      '/dreisam-docs/sdkpro/en/faq/': {
        base: '/dreisam-docs/sdkpro/en/faq/',
        items: sidebarFaq(),
      },
    },
  },
});

function sidebarSdk(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'AndroidSDK',
      items: [
        {
          link: 'android/access-guide',
          text: 'Access Guide',
        },
        {
          link: 'android/dreisamlib-api',
          text: 'DreisamLib API',
        },
      ],
    },
    {
      text: 'iOS-SDK',
      items: [
        {
          link: 'ios/access-guide',
          text: 'Access Guide',
        },
        {
          link: 'ios/dreisamlib-api',
          text: 'DreisamLib API',
        },
      ],
    },
  ];
}

function sidebarApi(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'API',
      items: [
        {
          link: 'access-guide',
          text: 'Access Guide',
        },
        {
          link: 'interface-documentation',
          text: 'Interface Documentation',
        },
      ],
    },
  ];
}

function sidebarFaq(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'FAQ',
      items: [
        {
          link: 'common-questions',
          text: 'Common Questions',
        },
      ],
    },
  ];
}

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      activeMatch: '^/dreisam-docs/sdkpro/en/sdk/',
      link: '/dreisam-docs/sdkpro/en/sdk/android/access-guide',
      text: 'SDK',
    },
    {
      activeMatch: '^/dreisam-docs/sdkpro/en/api/',
      link: '/dreisam-docs/sdkpro/en/api/access-guide',
      text: 'API',
    },
    {
      activeMatch: '^/dreisam-docs/sdkpro/en/faq/',
      link: '/dreisam-docs/sdkpro/en/faq/common-questions',
      text: 'FAQ',
    },
  ];
}
