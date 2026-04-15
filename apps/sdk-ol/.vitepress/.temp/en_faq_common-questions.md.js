import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"FAQ","description":"","frontmatter":{},"headers":[],"relativePath":"en/faq/common-questions.md","filePath":"en/faq/common-questions.md"}');
const _sfc_main = { name: "en/faq/common-questions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-label="Permalink to &quot;FAQ&quot;">​</a></h1><h2 id="why-is-there-a-discrepancy-in-retrieved-time-when-logging-in-from-different-phones" tabindex="-1">Why is there a discrepancy in retrieved time when logging in from different phones? <a class="header-anchor" href="#why-is-there-a-discrepancy-in-retrieved-time-when-logging-in-from-different-phones" aria-label="Permalink to &quot;Why is there a discrepancy in retrieved time when logging in from different phones?&quot;">​</a></h2><p>Because the device reports minute-level counts, converting them into exact timestamps introduces error.</p><h2 id="why-is-the-interval-between-historical-data-and-real-time-data-sometimes-not-3-minutes" tabindex="-1">Why is the interval between historical data and real-time data sometimes not 3 minutes? <a class="header-anchor" href="#why-is-the-interval-between-historical-data-and-real-time-data-sometimes-not-3-minutes" aria-label="Permalink to &quot;Why is the interval between historical data and real-time data sometimes not 3 minutes?&quot;">​</a></h2><p>The device counts in minutes and may accumulate timing drift over time, which affects the timestamps calculated by the SDK.</p><h2 id="why-is-glucose-data-time-inaccurate-after-logging-in-on-another-phone" tabindex="-1">Why is glucose data time inaccurate after logging in on another phone? <a class="header-anchor" href="#why-is-glucose-data-time-inaccurate-after-logging-in-on-another-phone" aria-label="Permalink to &quot;Why is glucose data time inaccurate after logging in on another phone?&quot;">​</a></h2><p>The device may have restarted, and the time data before the restart may no longer be accurate.</p><h2 id="why-does-a-new-phone-fetch-all-data-instead-of-only-the-latest-unsynced-data" tabindex="-1">Why does a new phone fetch all data instead of only the latest unsynced data? <a class="header-anchor" href="#why-does-a-new-phone-fetch-all-data-instead-of-only-the-latest-unsynced-data" aria-label="Permalink to &quot;Why does a new phone fetch all data instead of only the latest unsynced data?&quot;">​</a></h2><p>The SDK on a new device has no local history cache, so it fetches the full dataset from the device.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/faq/common-questions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commonQuestions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commonQuestions as default
};
