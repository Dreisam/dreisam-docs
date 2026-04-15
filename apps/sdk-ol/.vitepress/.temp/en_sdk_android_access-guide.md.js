import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Android SDK Integration Guide","description":"","frontmatter":{},"headers":[],"relativePath":"en/sdk/android/access-guide.md","filePath":"en/sdk/android/access-guide.md"}');
const _sfc_main = { name: "en/sdk/android/access-guide.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="android-sdk-integration-guide" tabindex="-1">Android SDK Integration Guide <a class="header-anchor" href="#android-sdk-integration-guide" aria-label="Permalink to &quot;Android SDK Integration Guide&quot;">​</a></h1><p>This guide explains how to integrate <code>DreisamLib</code> into an Android project and complete the basic setup.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li>Minimum version: <code>Android 8.0 / API 26</code></li><li>Development environment: <code>Android Studio</code></li><li>JDK: <code>Java 17</code></li></ul><h2 id="download-the-sdk" tabindex="-1">Download the SDK <a class="header-anchor" href="#download-the-sdk" aria-label="Permalink to &quot;Download the SDK&quot;">​</a></h2><blockquote><p><a href="https://github.com/Dreisam/DreisamLib_Android" target="_blank" rel="noreferrer">DreisamLib_Android</a></p></blockquote><p>Repository contents:</p><ul><li><code>Demo</code>: sample project</li><li><code>libs</code>: <code>DreisamLib-release_xxx.aar</code></li></ul><h2 id="integration-steps" tabindex="-1">Integration Steps <a class="header-anchor" href="#integration-steps" aria-label="Permalink to &quot;Integration Steps&quot;">​</a></h2><h3 id="_1-add-the-aar" tabindex="-1">1. Add the AAR <a class="header-anchor" href="#_1-add-the-aar" aria-label="Permalink to &quot;1. Add the AAR&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>dependencies {</span></span>
<span class="line"><span>    implementation(files(&quot;libs/DreisamLib-release_xxx.aar&quot;))</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="_2-configure-permissions" tabindex="-1">2. Configure Permissions <a class="header-anchor" href="#_2-configure-permissions" aria-label="Permalink to &quot;2. Configure Permissions&quot;">​</a></h3><p>Add the required Bluetooth and location permissions in <code>AndroidManifest.xml</code>.</p><h3 id="_3-configure-proguard" tabindex="-1">3. Configure ProGuard <a class="header-anchor" href="#_3-configure-proguard" aria-label="Permalink to &quot;3. Configure ProGuard&quot;">​</a></h3><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>-keep class com.dreisamlib.lib.* {*;}</span></span></code></pre></div><h3 id="_4-initialize-the-sdk" tabindex="-1">4. Initialize the SDK <a class="header-anchor" href="#_4-initialize-the-sdk" aria-label="Permalink to &quot;4. Initialize the SDK&quot;">​</a></h3><p>See <a href="./dreisamlib-api">DreisamLib API</a> for the full interface details.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/sdk/android/access-guide.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accessGuide = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  accessGuide as default
};
