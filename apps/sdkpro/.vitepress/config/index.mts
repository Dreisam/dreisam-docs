import { withPwa } from '@vite-pwa/vitepress';
import { defineConfigWithTheme } from 'vitepress';

import { en } from './en.mts';
import { shared } from './shared.mts';
import { zh } from './zh.mts';

export default withPwa(
  defineConfigWithTheme({
    ...shared,
    locales: {
      cn: {
        label: '🇨🇳 简体中文',
        lang: 'zh-CN',
        link: '/dreisam-docs/sdkpro/cn/',
        ...zh,
      },
      en: {
        label: '🇺🇸 English',
        lang: 'en',
        link: '/dreisam-docs/sdkpro/en/',
        ...en,
      },
    },
  }),
);
