(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".rl-inline-flex{display:inline-flex!important}.rl-h-6{height:1.5rem!important}.rl-h-60{height:15rem!important}.rl-h-64{height:16rem!important}.rl-w-12{width:3rem!important}.rl-origin-left{transform-origin:left!important}.-rl-scale-100{--tw-scale-x: -1 !important;--tw-scale-y: -1 !important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.-rl-scale-110{--tw-scale-x: -1.1 !important;--tw-scale-y: -1.1 !important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.-rl-scale-90{--tw-scale-x: -.9 !important;--tw-scale-y: -.9 !important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.rl-scale-100{--tw-scale-x: 1 !important;--tw-scale-y: 1 !important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.rl-scale-110{--tw-scale-x: 1.1 !important;--tw-scale-y: 1.1 !important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.rl-scale-90{--tw-scale-x: .9 !important;--tw-scale-y: .9 !important;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))!important}.rl-items-center{align-items:center!important}.rl-justify-center{justify-content:center!important}.rl-rounded-full{border-radius:9999px!important}.rl-px-1{padding-left:.25rem!important;padding-right:.25rem!important}.rl-px-1\\.5{padding-left:.375rem!important;padding-right:.375rem!important}.rl-px-10{padding-left:2.5rem!important;padding-right:2.5rem!important}.rl-px-11{padding-left:2.75rem!important;padding-right:2.75rem!important}.rl-px-12{padding-left:3rem!important;padding-right:3rem!important}.rl-px-14{padding-left:3.5rem!important;padding-right:3.5rem!important}.rl-px-16{padding-left:4rem!important;padding-right:4rem!important}.rl-text-neutral-20{color:var(--rl-color-neutral-20)!important}.rl-text-neutral-200{--tw-text-opacity: 1 !important;color:rgb(229 229 229 / var(--tw-text-opacity))!important}.rl-text-neutral-200\\/0{color:#e5e5e500!important}.rl-text-neutral-200\\/10{color:#e5e5e51a!important}.rl-text-neutral-200\\/100{color:#e5e5e5!important}.rl-text-neutral-200\\/15{color:#e5e5e526!important}.rl-text-neutral-200\\/20{color:#e5e5e533!important}.rl-text-neutral-200\\/25{color:#e5e5e540!important}.rl-text-neutral-200\\/30{color:#e5e5e54d!important}.rl-text-neutral-200\\/35{color:#e5e5e559!important}.rl-text-neutral-200\\/40{color:#e5e5e566!important}.rl-text-neutral-200\\/45{color:#e5e5e573!important}.rl-text-neutral-200\\/5{color:#e5e5e50d!important}.rl-text-neutral-200\\/50{color:#e5e5e580!important}.rl-text-neutral-200\\/55{color:#e5e5e58c!important}.rl-text-neutral-200\\/60{color:#e5e5e599!important}.rl-text-neutral-200\\/65{color:#e5e5e5a6!important}.rl-text-neutral-200\\/70{color:#e5e5e5b3!important}.rl-text-neutral-200\\/75{color:#e5e5e5bf!important}.rl-text-neutral-200\\/80{color:#e5e5e5cc!important}.rl-text-neutral-200\\/85{color:#e5e5e5d9!important}.rl-text-neutral-200\\/90{color:#e5e5e5e6!important}.rl-text-neutral-200\\/95{color:#e5e5e5f2!important}.rl-opacity-60{opacity:.6!important}.rl-outline-none{outline:2px solid transparent!important;outline-offset:2px!important}.focus\\:rl-outline-none:focus{outline:2px solid transparent!important;outline-offset:2px!important}.focus-visible\\:rl-outline-none:focus-visible{outline:2px solid transparent!important;outline-offset:2px!important}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import { jsx as e } from "react/jsx-runtime";
import w, { useState as x } from "react";
import { Switch as N } from "antd";
import { MoonFilled as y, SunFilled as R } from "@ant-design/icons";
const T = {
  xs: { antd: "small", scale: "rl-scale-90" },
  s: { antd: "small", scale: "rl-scale-100" },
  m: { antd: "default", scale: "rl-scale-110" }
}, b = w.forwardRef(function({ sizeDs: a = "s", checked: t, defaultChecked: r, disabled: n, onChange: l, className: F, ...c }, i) {
  const [m, d] = x(!!r), o = typeof t == "boolean", f = o ? t : m, u = T[a], h = f ? "var(--rl-color-indigo-70)" : "var(--rl-color-neutral-50)", p = (s, S) => {
    o || d(s), l == null || l(s, S);
  };
  return /* @__PURE__ */ e(
    N,
    {
      ...c,
      ref: i,
      size: u.antd,
      checked: t,
      defaultChecked: r,
      disabled: n,
      onChange: p,
      checkedChildren: /* @__PURE__ */ e(R, { className: "rl-text-neutral-00" }),
      unCheckedChildren: /* @__PURE__ */ e(y, { className: "rl-text-neutral-20" }),
      style: { backgroundColor: h }
    }
  );
});
b.displayName = "RLSwitchTheme";
export {
  b as ThemeSwitch
};
