(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(".rl-flex{display:flex!important}.rl-inline-flex{display:inline-flex!important}.rl-h-48{height:12rem!important}.rl-w-full{width:100%!important}.rl-items-center{align-items:center!important}.rl-justify-center{justify-content:center!important}.rl-space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(1rem * var(--tw-space-y-reverse))!important}.rl-space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0 !important;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)))!important;margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))!important}.rl-rounded-rl{border-radius:12px!important}.rl-border{border-width:1px!important}.rl-border-solid{border-style:solid!important}.rl-border-neutral-20{border-color:var(--rl-color-neutral-20)!important}.rl-bg-neutral-30{background-color:var(--rl-color-neutral-30)!important}.rl-bg-neutral-5{background-color:var(--rl-color-neutral-05)!important}.rl-px-4{padding-left:1rem!important;padding-right:1rem!important}.rl-py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.rl-text-center{text-align:center!important}.rl-text-base{font-size:1rem!important;line-height:1.5rem!important}.rl-text-xl{font-size:1.25rem!important;line-height:1.75rem!important}.rl-font-semibold{font-weight:600!important}.rl-text-neutral-60{color:var(--rl-color-neutral-60)!important}.rl-text-neutral-80{color:var(--rl-color-neutral-80)!important}.rl-shadow-none{--tw-shadow: 0 0 #0000 !important;--tw-shadow-colored: 0 0 #0000 !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)!important}.hover\\:rl-text-neutral-80:hover{color:var(--rl-color-neutral-80)!important}")),document.head.appendChild(r)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import { jsx as r } from "react/jsx-runtime";
import { Modal as p } from "antd";
import { CloseOutlined as b } from "@ant-design/icons";
const f = (...e) => e.filter(Boolean).join(" "), N = ({
  open: e,
  onCancel: o,
  label: t,
  sizePct: n = 60,
  stroke: a = !0,
  centered: d = !0,
  showClose: l = !0,
  className: s,
  contentClassName: c,
  children: i,
  ...x
}) => {
  const m = `${Math.max(10, Math.min(100, n))}vw`;
  return /* @__PURE__ */ r(
    p,
    {
      ...x,
      open: e,
      onCancel: o,
      width: m,
      mask: a,
      centered: d,
      footer: null,
      closable: l,
      styles: {
        content: {
          borderRadius: "12px",
          background: "var(--rl-color-neutral-05)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
        },
        header: {
          textAlign: "center",
          borderBottom: "none",
          background: "transparent",
          padding: "16px 20px 0"
        },
        body: { padding: "20px" }
      },
      title: t ? /* @__PURE__ */ r("div", { className: "rl-text-neutral-80 rl-text-xl rl-font-semibold rl-text-center", children: t }) : null,
      closeIcon: l ? /* @__PURE__ */ r("span", { className: "rl-inline-flex rl-items-center rl-justify-center rl-text-neutral-60 hover:rl-text-neutral-80 rl-text-base", children: /* @__PURE__ */ r(b, {}) }) : null,
      className: s,
      rootClassName: "rl-modal-root",
      modalRender: (u) => /* @__PURE__ */ r("div", { className: f("rl-rounded-rl rl-border rl-border-solid rl-border-neutral-20", c), children: u }),
      children: i
    }
  );
};
export {
  N as Modal
};
