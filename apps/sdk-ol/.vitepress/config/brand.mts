import { resolve } from 'node:path';

import { loadEnv } from 'vite';

const docsRoot = resolve(process.cwd());
const mode = process.env.NODE_ENV ?? 'development';
const env = loadEnv(mode, docsRoot, 'VITE_');

function readEnv(key: string, fallback: string) {
  return env[key] || fallback;
}

export const docsBrand = {
  name: readEnv('VITE_DOCS_BRAND_NAME', 'Dreisam'),
  pwaDescription: readEnv(
    'VITE_DOCS_PWA_DESCRIPTION',
    'Dreisam SDK',
  ),
  siteDescriptionEn: readEnv(
    'VITE_DOCS_SITE_DESCRIPTION_EN',
    'Dreisam SDK',
  ),
  siteDescriptionZh: readEnv(
    'VITE_DOCS_SITE_DESCRIPTION_ZH',
    'Dreisam SDK',
  ),
} as const;
