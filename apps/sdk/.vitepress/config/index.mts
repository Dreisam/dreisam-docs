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
        link: '/dreisam-docs/cn/sdk/android/access-guide/',
        ...zh,
      },
      en: {
        label: '🇺🇸 English',
        lang: 'en',
        link: '/dreisam-docs/cn/en/sdk/android/access-guide/',
        ...en,
      },
    },
  }),
);
