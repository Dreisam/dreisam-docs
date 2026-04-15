// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";

import DefaultTheme from "vitepress/theme";

import SiteLayout from "./components/site-layout.vue";

import "./styles";

export default {
  extends: DefaultTheme,
  Layout: SiteLayout,
} satisfies Theme;
