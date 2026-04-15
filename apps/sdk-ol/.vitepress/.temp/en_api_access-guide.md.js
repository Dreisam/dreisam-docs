import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"API Access Guide","description":"","frontmatter":{},"headers":[],"relativePath":"en/api/access-guide.md","filePath":"en/api/access-guide.md"}');
const _sfc_main = { name: "en/api/access-guide.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="api-access-guide" tabindex="-1">API Access Guide <a class="header-anchor" href="#api-access-guide" aria-label="Permalink to &quot;API Access Guide&quot;">​</a></h1><p>This document is organized from the original <code>DreisamAPIPro</code> integration guide.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li>Minimum version: <code>iOS 11</code></li><li>Development environment: <code>Xcode</code></li><li>Delivery format: <code>DreisamLibPro.framework</code></li></ul><h2 id="download-the-sdk" tabindex="-1">Download the SDK <a class="header-anchor" href="#download-the-sdk" aria-label="Permalink to &quot;Download the SDK&quot;">​</a></h2><blockquote><p><a href="https://github.com/Dreisam/DreisamLibPro-iOS" target="_blank" rel="noreferrer">DreisamLibPro-iOS</a></p></blockquote><p>Repository contents:</p><ul><li><code>Demo</code></li><li><code>DreisamLib</code></li></ul><h2 id="integration-steps" tabindex="-1">Integration Steps <a class="header-anchor" href="#integration-steps" aria-label="Permalink to &quot;Integration Steps&quot;">​</a></h2><ol><li>Add <code>DreisamLibPro.framework</code> to the project</li><li>Add Bluetooth permission descriptions to <code>Info.plist</code></li><li>Initialize the SDK with <code>appId</code></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/api/access-guide.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accessGuide = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  accessGuide as default
};
