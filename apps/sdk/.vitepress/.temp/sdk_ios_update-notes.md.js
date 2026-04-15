import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"更新说明","description":"","frontmatter":{},"headers":[],"relativePath":"sdk/ios/update-notes.md","filePath":"sdk/ios/update-notes.md"}');
const _sfc_main = { name: "sdk/ios/update-notes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="更新说明" tabindex="-1">更新说明 <a class="header-anchor" href="#更新说明" aria-label="Permalink to &quot;更新说明&quot;">​</a></h1><h2 id="ios-接入要点" tabindex="-1">iOS 接入要点 <a class="header-anchor" href="#ios-接入要点" aria-label="Permalink to &quot;iOS 接入要点&quot;">​</a></h2><p><code>DreisamLib</code> 的 iOS 文档当前只保留更新说明和 <code>DreisamLib API</code> 两部分，接入要点合并在这里，避免单独拆出接入指南页面。</p><h2 id="基础信息" tabindex="-1">基础信息 <a class="header-anchor" href="#基础信息" aria-label="Permalink to &quot;基础信息&quot;">​</a></h2><ul><li>示例工程：<code>Demo</code> 文件夹</li><li>SDK 载体：<code>DreisamLib.framework</code></li><li>最低支持版本：<code>iOS 11</code></li></ul><h2 id="基本接入步骤" tabindex="-1">基本接入步骤 <a class="header-anchor" href="#基本接入步骤" aria-label="Permalink to &quot;基本接入步骤&quot;">​</a></h2><ol><li>将 <code>DreisamLib.framework</code> 加入项目。</li><li>在 <code>Info.plist</code> 中补充蓝牙权限说明。</li><li>按 <code>DreisamLib API</code> 中的初始化方式完成 SDK 接入。</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("sdk/ios/update-notes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const updateNotes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  updateNotes as default
};
