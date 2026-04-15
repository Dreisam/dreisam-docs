import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"faq/common-questions.md","filePath":"faq/common-questions.md"}');
const _sfc_main = { name: "faq/common-questions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="为什么不同手机登录-获取的时间会有偏差" tabindex="-1">为什么不同手机登录，获取的时间会有偏差？ <a class="header-anchor" href="#为什么不同手机登录-获取的时间会有偏差" aria-label="Permalink to &quot;为什么不同手机登录，获取的时间会有偏差？&quot;">​</a></h2><p>因为设备上报的是分钟级别的计数，在将计数转换为具体时间时，会存在误差。</p><p>建议：给用户展示时间时，采用分钟级别的显示格式，例如 <code>11:22</code>。</p><h2 id="为什么有时候获取历史数据和实时上报的数据间隔不是-3-分钟" tabindex="-1">为什么有时候获取历史数据和实时上报的数据间隔不是 3 分钟？ <a class="header-anchor" href="#为什么有时候获取历史数据和实时上报的数据间隔不是-3-分钟" aria-label="Permalink to &quot;为什么有时候获取历史数据和实时上报的数据间隔不是 3 分钟？&quot;">​</a></h2><p>核心原因是设备的计数为分钟级别，且设备自身计数存在误差。设备运行时间越长，该误差可能越大，最终使得 SDK 计算出的数据时间间隔偏离 <code>3</code> 分钟。</p><h2 id="为什么不同手机登录后-获取的血糖数据时间不准确" tabindex="-1">为什么不同手机登录后，获取的血糖数据时间不准确？ <a class="header-anchor" href="#为什么不同手机登录后-获取的血糖数据时间不准确" aria-label="Permalink to &quot;为什么不同手机登录后，获取的血糖数据时间不准确？&quot;">​</a></h2><p>大概率是设备发生过重启，设备重启前的时间数据将不再准确。</p><p>解决方案：开发者可依据服务器最后保存的时间，丢弃该时间点之前的历史数据。</p><h2 id="为什么不同手机登录后-更新的是全部数据-而不是最新未更新的数据" tabindex="-1">为什么不同手机登录后，更新的是全部数据，而不是最新未更新的数据？ <a class="header-anchor" href="#为什么不同手机登录后-更新的是全部数据-而不是最新未更新的数据" aria-label="Permalink to &quot;为什么不同手机登录后，更新的是全部数据，而不是最新未更新的数据？&quot;">​</a></h2><p>更换手机登录后，新设备上的 SDK 没有历史数据缓存，因此会从设备获取全部数据。</p><p>解决方案：开发者可依据服务器最后保存的时间，丢弃旧数据，仅保留最新未更新的数据。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("faq/common-questions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commonQuestions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commonQuestions as default
};
