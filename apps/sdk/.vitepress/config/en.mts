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
      'en/sdk/': { base: 'en/sdk/', items: sidebarSdk() },
      'en/faq/': { base: 'en/faq/', items: sidebarFaq() },
    },
    sidebarMenuLabel: 'Menu',
  },
});

function sidebarSdk(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Android SDK',
      items: [
        {
          link: 'android/access-guide',
          text: 'Access Guide',
        },
        {
          link: 'android/update-notes',
          text: 'Update Notes',
        },
        {
          link: 'android/dreisamlib-api',
          text: 'DreisamLib API',
        },
      ],
    },
    {
      text: 'iOS SDK',
      items: [
        {
          link: 'ios/update-notes',
          text: 'Update Notes',
        },
        {
          link: 'ios/dreisamlib-api',
          text: 'DreisamLib API',
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
      activeMatch: '^en/sdk/',
      link: 'en/sdk/android/access-guide',
      text: 'SDK',
    },
    {
      activeMatch: '^en/faq/',
      link: 'en/faq/common-questions',
      text: 'FAQ',
    },
  ];
}
