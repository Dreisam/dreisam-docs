import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Update Notes","description":"","frontmatter":{},"headers":[],"relativePath":"en/sdk/ios/update-notes.md","filePath":"en/sdk/ios/update-notes.md"}');
const _sfc_main = { name: "en/sdk/ios/update-notes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="update-notes" tabindex="-1">Update Notes <a class="header-anchor" href="#update-notes" aria-label="Permalink to &quot;Update Notes&quot;">​</a></h1><h2 id="ios-integration-notes" tabindex="-1">iOS Integration Notes <a class="header-anchor" href="#ios-integration-notes" aria-label="Permalink to &quot;iOS Integration Notes&quot;">​</a></h2><p>The iOS documentation for <code>DreisamLib</code> now keeps only the update notes and the <code>DreisamLib API</code>. The integration essentials are merged into this page instead of a separate access guide.</p><h2 id="basic-info" tabindex="-1">Basic Info <a class="header-anchor" href="#basic-info" aria-label="Permalink to &quot;Basic Info&quot;">​</a></h2><ul><li>Sample project: <code>Demo</code> folder</li><li>SDK package: <code>DreisamLib.framework</code></li><li>Minimum supported version: <code>iOS 11</code></li></ul><h2 id="integration-steps" tabindex="-1">Integration Steps <a class="header-anchor" href="#integration-steps" aria-label="Permalink to &quot;Integration Steps&quot;">​</a></h2><ol><li>Add <code>DreisamLib.framework</code> to your project.</li><li>Add the Bluetooth permission descriptions in <code>Info.plist</code>.</li><li>Follow the initialization flow described in <code>DreisamLib API</code>.</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/sdk/ios/update-notes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const updateNotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  updateNotes as default
};
