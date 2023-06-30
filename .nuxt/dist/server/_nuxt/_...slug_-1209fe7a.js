import _sfc_main$1 from "./ContentDoc-b3bde900.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "hookable";
import "destr";
import "ufo";
import "devalue";
import "klona";
import "./index-e12b288f.js";
import "unhead";
import "./ContentRenderer-e3e427d0.js";
import "./ContentRendererMarkdown-6ce7e67c.js";
import "scule";
import "property-information";
import "./preview-59456639.js";
import "cookie-es";
import "h3";
import "ohash";
import "./ssr-b54361f8.js";
import "./ContentQuery-9c75a51c.js";
import "./query-8180cca3.js";
import "./utils-4d957cff.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "@unhead/ssr";
import "@unhead/shared";
import "defu";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = _sfc_main$1;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-1209fe7a.js.map
