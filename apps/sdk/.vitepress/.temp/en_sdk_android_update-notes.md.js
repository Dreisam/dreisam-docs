import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Update Notes","description":"","frontmatter":{},"headers":[],"relativePath":"en/sdk/android/update-notes.md","filePath":"en/sdk/android/update-notes.md"}');
const _sfc_main = { name: "en/sdk/android/update-notes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="update-notes" tabindex="-1">Update Notes <a class="header-anchor" href="#update-notes" aria-label="Permalink to &quot;Update Notes&quot;">​</a></h1><h2 id="current-release" tabindex="-1">Current Release <a class="header-anchor" href="#current-release" aria-label="Permalink to &quot;Current Release&quot;">​</a></h2><p>This release reorganizes the Android documentation under the <code>SDK</code> section and completes the structure with an access guide, update notes, and <code>DreisamLib API</code>.</p><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li>Integration is still based on the <code>AAR</code> package.</li><li>Minimum supported version remains <code>Android 8.0 / API 26</code>.</li><li>Permissions, ProGuard rules, and dependencies are documented in the access guide.</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/sdk/android/update-notes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const updateNotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  updateNotes as default
};
