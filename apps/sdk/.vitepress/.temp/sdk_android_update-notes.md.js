import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"更新说明","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/android/update-notes.md","filePath":"sdk/android/update-notes.md"}');
const _sfc_main = { name: "sdk/android/update-notes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="更新说明" tabindex="-1">更新说明 <a class="header-anchor" href="#更新说明" aria-label="Permalink to &quot;更新说明&quot;">​</a></h1><h2 id="当前版本" tabindex="-1">当前版本 <a class="header-anchor" href="#当前版本" aria-label="Permalink to &quot;当前版本&quot;">​</a></h2><p>本次整理将 Android 文档统一收拢到 <code>SDK</code> 子应用下，并补齐了接入指南、更新说明和 <code>DreisamLib API</code> 的结构。</p><h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><ul><li>接入方式保持为 <code>AAR</code> 集成。</li><li>最低支持版本为 <code>Android 8.0 / API 26</code>。</li><li>权限、混淆和依赖项配置已统一整理到接入指南中。</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sdk/android/update-notes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const updateNotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  updateNotes as default
};
