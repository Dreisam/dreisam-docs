import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext, onMounted } from "vue";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":false},"headers":[],"relativePath":"en/index.md","filePath":"en/index.md"}');
const __default__ = { name: "en/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      window.location.replace("/en/sdk/android/access-guide");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><template><div></div></template></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
