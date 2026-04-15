<script lang="ts" setup>
import { computed, h, nextTick, onBeforeUnmount, onMounted, ref, render, watch } from "vue";

// import { useAntdDesignTokens } from '@vben/hooks';
// import { initPreferences } from '@vben/preferences';
import { ConfigProvider, theme } from "ant-design-vue";
import {
  CircleQuestionMark,
  FileText,
  MonitorSmartphone,
  Smartphone,
  TabletSmartphone,
} from "lucide-vue-next";
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
const route = useRoute();
// const { tokens } = useAntdDesignTokens();

const initZoom = () => {
  // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
  mediumZoom(".VPContent img", { background: "var(--vp-c-bg)" });
};

function mountIcon(target: Element | null, icon: object, className: string, size = 15) {
  if (!target) {
    return;
  }

  const element = target as HTMLElement;
  let container = element.querySelector<HTMLElement>(`:scope > .${className}`);

  if (!container) {
    container = document.createElement("span");
    container.className = className;
    element.prepend(container);
  }

  render(
    h(icon as never, {
      size,
      strokeWidth: 2,
    }),
    container,
  );
}

function initNavIcons() {
  mountIcon(
    document.querySelector(
      ".VPNavBarMenuLink[href='/sdk/android/access-guide'], .VPNavBarMenuLink[href='/en/sdk/android/access-guide']",
    ),
    MonitorSmartphone,
    "vp-menu-icon",
  );
  mountIcon(
    document.querySelector(
      ".VPNavBarMenuLink[href='/api/access-guide'], .VPNavBarMenuLink[href='/en/api/access-guide']",
    ),
    FileText,
    "vp-menu-icon",
  );
  mountIcon(
    document.querySelector(
      ".VPNavBarMenuLink[href='/faq/common-questions'], .VPNavBarMenuLink[href='/en/faq/common-questions']",
    ),
    CircleQuestionMark,
    "vp-menu-icon",
  );
}

function initSidebarIcons() {
  const sidebarTitles = document.querySelectorAll<HTMLElement>(
    ".VPSidebarItem.level-0 > .item .text",
  );

  sidebarTitles.forEach((title) => {
    const text = title.textContent?.trim();

    switch (text) {
      case "AndroidSDK": {
        mountIcon(title, Smartphone, "vp-sidebar-group-icon");

        break;
      }
      case "API": {
        mountIcon(title, FileText, "vp-sidebar-group-icon");

        break;
      }
      case "FAQ": {
        mountIcon(title, CircleQuestionMark, "vp-sidebar-group-icon");

        break;
      }
      case "iOS-SDK": {
        mountIcon(title, TabletSmartphone, "vp-sidebar-group-icon");

        break;
      }
      // No default
    }
  });
}

function initFrameworkIcons() {
  nextTick(() => {
    initNavIcons();
    initSidebarIcons();
  });
}

const isDark = ref(true);

watch(
  () => route.path,
  () =>
    nextTick(() => {
      initZoom();
      initFrameworkIcons();
    }),
);

// initPreferences({
//   namespace: 'docs',
// });

onMounted(() => {
  initZoom();
  initFrameworkIcons();
});

// 使用该函数
const observer = watchDarkModeChange((dark) => {
  isDark.value = dark;
});

onBeforeUnmount(() => {
  observer?.disconnect();
});

function watchDarkModeChange(callback: (isDark: boolean) => void) {
  if (typeof window === "undefined") {
    return;
  }
  const htmlElement = document.documentElement;

  const observer = new MutationObserver(() => {
    const isDark = htmlElement.classList.contains("dark");
    callback(isDark);
  });

  observer.observe(htmlElement, {
    attributeFilter: ["class"],
    attributes: true,
  });

  const initialIsDark = htmlElement.classList.contains("dark");
  callback(initialIsDark);

  return observer;
}

const tokenTheme = computed(() => {
  const algorithm = isDark.value ? [theme.darkAlgorithm] : [theme.defaultAlgorithm];

  return {
    algorithm,
    // token: tokens,
  };
});
</script>

<template>
  <ConfigProvider :theme="tokenTheme">
    <Layout />
  </ConfigProvider>
</template>

<style>
.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 2147483647;
}
</style>
