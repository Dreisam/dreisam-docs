function readEnv(key: keyof ImportMetaEnv, fallback: string) {
  return import.meta.env[key] || fallback;
}

export const docsBrand = {
  heroTaglineEn: readEnv(
    "VITE_DOCS_HERO_TAGLINE_EN",
    "Fully Upgraded, Ready to Use, Simple and Efficient",
  ),
  heroTaglineZh: readEnv("VITE_DOCS_HERO_TAGLINE_ZH", "全新升级，开箱即用，简单高效"),
  heroTextEn: readEnv("VITE_DOCS_HERO_TEXT_EN", "Enterprise-Level Management System Framework"),
  heroTextZh: readEnv("VITE_DOCS_HERO_TEXT_ZH", "企业级管理系统框架"),
  name: readEnv("VITE_DOCS_BRAND_NAME", "Dreisam"),
} as const;
