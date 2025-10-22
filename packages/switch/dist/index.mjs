var cs = Object.defineProperty;
var ls = (e, t, n) => t in e ? cs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ce = (e, t, n) => ls(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as St } from "react/jsx-runtime";
import * as v from "react";
import te, { isValidElement as us, version as fs, useContext as we, createContext as cn, useRef as Ne, useLayoutEffect as ds, useEffect as rt } from "react";
import * as Yo from "react-dom";
import Yr from "react-dom";
function hs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = "", a = 0; a < arguments.length; a++) {
        var s = arguments[a];
        s && (i = o(i, r(s)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return n.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var a = "";
      for (var s in i)
        t.call(i, s) && i[s] && (a = o(a, s));
      return a;
    }
    function o(i, a) {
      return a ? i ? i + " " + a : i + a : i;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Qo);
var gs = Qo.exports;
const dt = /* @__PURE__ */ hs(gs);
function Ue() {
  return Ue = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ue.apply(null, arguments);
}
function V(e) {
  "@babel/helpers - typeof";
  return V = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, V(e);
}
var vs = Symbol.for("react.element"), ps = Symbol.for("react.transitional.element"), ms = Symbol.for("react.fragment");
function bs(e) {
  return (
    // Base object type
    e && V(e) === "object" && // React Element type
    (e.$$typeof === vs || e.$$typeof === ps) && // React Fragment type
    e.type === ms
  );
}
var Dn = {}, $r = [], ys = function(t) {
  $r.push(t);
};
function Or(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = $r.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function Ss(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = $r.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Zo() {
  Dn = {};
}
function Jo(e, t, n) {
  !t && !Dn[n] && (e(!1, n), Dn[n] = !0);
}
function ze(e, t) {
  Jo(Or, e, t);
}
function Cs(e, t) {
  Jo(Ss, e, t);
}
ze.preMessage = ys;
ze.resetWarned = Zo;
ze.noteOnce = Cs;
function xs(e, t) {
  if (V(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (V(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ei(e) {
  var t = xs(e, "string");
  return V(t) == "symbol" ? t : t + "";
}
function $(e, t, n) {
  return (t = ei(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Qr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qr(Object(n), !0).forEach(function(r) {
      $(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Zr(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Es(e) {
  return e && V(e) === "object" && Zr(e.nativeElement) ? e.nativeElement : Zr(e) ? e : null;
}
function ws(e) {
  var t = Es(e);
  if (t)
    return t;
  if (e instanceof te.Component) {
    var n;
    return (n = Yr.findDOMNode) === null || n === void 0 ? void 0 : n.call(Yr, e);
  }
  return null;
}
var zn = { exports: {} }, D = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function _s() {
  if (Jr) return D;
  Jr = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function p(h) {
    if (typeof h == "object" && h !== null) {
      var x = h.$$typeof;
      switch (x) {
        case e:
          switch (h = h.type, h) {
            case n:
            case o:
            case r:
            case c:
            case u:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case a:
                case l:
                case d:
                case f:
                case i:
                  return h;
                default:
                  return x;
              }
          }
        case t:
          return x;
      }
    }
  }
  return D.ContextConsumer = a, D.ContextProvider = i, D.Element = e, D.ForwardRef = l, D.Fragment = n, D.Lazy = d, D.Memo = f, D.Portal = t, D.Profiler = o, D.StrictMode = r, D.Suspense = c, D.SuspenseList = u, D.isAsyncMode = function() {
    return !1;
  }, D.isConcurrentMode = function() {
    return !1;
  }, D.isContextConsumer = function(h) {
    return p(h) === a;
  }, D.isContextProvider = function(h) {
    return p(h) === i;
  }, D.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, D.isForwardRef = function(h) {
    return p(h) === l;
  }, D.isFragment = function(h) {
    return p(h) === n;
  }, D.isLazy = function(h) {
    return p(h) === d;
  }, D.isMemo = function(h) {
    return p(h) === f;
  }, D.isPortal = function(h) {
    return p(h) === t;
  }, D.isProfiler = function(h) {
    return p(h) === o;
  }, D.isStrictMode = function(h) {
    return p(h) === r;
  }, D.isSuspense = function(h) {
    return p(h) === c;
  }, D.isSuspenseList = function(h) {
    return p(h) === u;
  }, D.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === o || h === r || h === c || h === u || h === g || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === i || h.$$typeof === a || h.$$typeof === l || h.$$typeof === b || h.getModuleId !== void 0);
  }, D.typeOf = p, D;
}
var z = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function ks() {
  return eo || (eo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), b = !1, p = !1, h = !1, x = !1, S = !1, w;
    w = Symbol.for("react.module.reference");
    function _(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === n || M === o || S || M === r || M === c || M === u || x || M === g || b || p || h || typeof M == "object" && M !== null && (M.$$typeof === d || M.$$typeof === f || M.$$typeof === i || M.$$typeof === a || M.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === w || M.getModuleId !== void 0));
    }
    function C(M) {
      if (typeof M == "object" && M !== null) {
        var Fe = M.$$typeof;
        switch (Fe) {
          case e:
            var ae = M.type;
            switch (ae) {
              case n:
              case o:
              case r:
              case c:
              case u:
                return ae;
              default:
                var Xe = ae && ae.$$typeof;
                switch (Xe) {
                  case s:
                  case a:
                  case l:
                  case d:
                  case f:
                  case i:
                    return Xe;
                  default:
                    return Fe;
                }
            }
          case t:
            return Fe;
        }
      }
    }
    var E = a, m = i, y = e, k = l, A = n, j = d, R = f, I = t, O = o, P = r, L = c, H = u, F = !1, B = !1;
    function U(M) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(M) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function G(M) {
      return C(M) === a;
    }
    function W(M) {
      return C(M) === i;
    }
    function Q(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function he(M) {
      return C(M) === l;
    }
    function Me(M) {
      return C(M) === n;
    }
    function se(M) {
      return C(M) === d;
    }
    function Ve(M) {
      return C(M) === f;
    }
    function Ae(M) {
      return C(M) === t;
    }
    function Pe(M) {
      return C(M) === o;
    }
    function Re(M) {
      return C(M) === r;
    }
    function ge(M) {
      return C(M) === c;
    }
    function Ie(M) {
      return C(M) === u;
    }
    z.ContextConsumer = E, z.ContextProvider = m, z.Element = y, z.ForwardRef = k, z.Fragment = A, z.Lazy = j, z.Memo = R, z.Portal = I, z.Profiler = O, z.StrictMode = P, z.Suspense = L, z.SuspenseList = H, z.isAsyncMode = U, z.isConcurrentMode = q, z.isContextConsumer = G, z.isContextProvider = W, z.isElement = Q, z.isForwardRef = he, z.isFragment = Me, z.isLazy = se, z.isMemo = Ve, z.isPortal = Ae, z.isProfiler = Pe, z.isStrictMode = Re, z.isSuspense = ge, z.isSuspenseList = Ie, z.isValidElementType = _, z.typeOf = C;
  }()), z;
}
process.env.NODE_ENV === "production" ? zn.exports = _s() : zn.exports = ks();
var wn = zn.exports;
function ti(e, t, n) {
  var r = v.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Ts = Number(fs.split(".")[0]), ni = function(t, n) {
  typeof t == "function" ? t(n) : V(t) === "object" && t && "current" in t && (t.current = n);
}, ri = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    n.forEach(function(a) {
      ni(a, i);
    });
  };
}, oi = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (ii(t) && Ts >= 19)
    return !0;
  var o = wn.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== wn.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== wn.ForwardRef);
};
function ii(e) {
  return /* @__PURE__ */ us(e) && !bs(e);
}
var ai = function(t) {
  if (t && ii(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function Te(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function to(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ei(r.key), r);
  }
}
function $e(e, t, n) {
  return t && to(e.prototype, t), n && to(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Vn(e, t) {
  return Vn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Vn(e, t);
}
function ln(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Vn(e, t);
}
function en(e) {
  return en = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, en(e);
}
function si() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (si = function() {
    return !!e;
  })();
}
function We(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function $s(e, t) {
  if (t && (V(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return We(e);
}
function un(e) {
  var t = si();
  return function() {
    var n, r = en(e);
    if (t) {
      var o = en(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return $s(this, n);
  };
}
function Fn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Os(e) {
  if (Array.isArray(e)) return Fn(e);
}
function ci(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Mr(e, t) {
  if (e) {
    if (typeof e == "string") return Fn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Fn(e, t) : void 0;
  }
}
function Ms() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _e(e) {
  return Os(e) || ci(e) || Mr(e) || Ms();
}
var li = function(t) {
  return +setTimeout(t, 16);
}, ui = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (li = function(t) {
  return window.requestAnimationFrame(t);
}, ui = function(t) {
  return window.cancelAnimationFrame(t);
});
var no = 0, fn = /* @__PURE__ */ new Map();
function fi(e) {
  fn.delete(e);
}
var De = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  no += 1;
  var r = no;
  function o(i) {
    if (i === 0)
      fi(r), t();
    else {
      var a = li(function() {
        o(i - 1);
      });
      fn.set(r, a);
    }
  }
  return o(n), r;
};
De.cancel = function(e) {
  var t = fn.get(e);
  return fi(e), ui(t);
};
process.env.NODE_ENV !== "production" && (De.ids = function() {
  return fn;
});
function di(e) {
  if (Array.isArray(e)) return e;
}
function As(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, i, a, s = [], l = !0, c = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (r = i.call(n)).done) && (s.push(r.value), s.length !== t); l = !0) ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!l && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (c) throw o;
      }
    }
    return s;
  }
}
function hi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N(e, t) {
  return di(e) || As(e, t) || Mr(e, t) || hi();
}
function Tt(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Oe() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ps(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var ro = "data-rc-order", oo = "data-rc-priority", Rs = "rc-util-key", Bn = /* @__PURE__ */ new Map();
function gi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Rs;
}
function dn(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Is(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ar(e) {
  return Array.from((Bn.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function vi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Oe())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = Is(r), s = a === "prependQueue", l = document.createElement("style");
  l.setAttribute(ro, a), s && i && l.setAttribute(oo, "".concat(i)), n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce), l.innerHTML = e;
  var c = dn(t), u = c.firstChild;
  if (r) {
    if (s) {
      var f = (t.styles || Ar(c)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(ro)))
          return !1;
        var g = Number(d.getAttribute(oo) || 0);
        return i >= g;
      });
      if (f.length)
        return c.insertBefore(l, f[f.length - 1].nextSibling), l;
    }
    c.insertBefore(l, u);
  } else
    c.appendChild(l);
  return l;
}
function pi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = dn(t);
  return (t.styles || Ar(n)).find(function(r) {
    return r.getAttribute(gi(t)) === e;
  });
}
function mi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = pi(e, t);
  if (n) {
    var r = dn(t);
    r.removeChild(n);
  }
}
function js(e, t) {
  var n = Bn.get(e);
  if (!n || !Ps(document, n)) {
    var r = vi("", t), o = r.parentNode;
    Bn.set(e, o), e.removeChild(r);
  }
}
function Ge(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = dn(n), o = Ar(r), i = T(T({}, n), {}, {
    styles: o
  });
  js(r, i);
  var a = pi(t, i);
  if (a) {
    var s, l;
    if ((s = i.csp) !== null && s !== void 0 && s.nonce && a.nonce !== ((l = i.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var c;
      a.nonce = (c = i.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var u = vi(e, i);
  return u.setAttribute(gi(i), t), u;
}
function Ns(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function it(e, t) {
  if (e == null) return {};
  var n, r, o = Ns(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Ls(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = r.has(i);
    if (ze(!l, "Warning: There may be circular references"), l)
      return !1;
    if (i === a)
      return !0;
    if (n && s > 1)
      return !1;
    r.add(i);
    var c = s + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(a) || i.length !== a.length)
        return !1;
      for (var u = 0; u < i.length; u++)
        if (!o(i[u], a[u], c))
          return !1;
      return !0;
    }
    if (i && a && V(i) === "object" && V(a) === "object") {
      var f = Object.keys(i);
      return f.length !== Object.keys(a).length ? !1 : f.every(function(d) {
        return o(i[d], a[d], c);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Hs = "%";
function Wn(e) {
  return e.join(Hs);
}
var Ds = /* @__PURE__ */ function() {
  function e(t) {
    Te(this, e), $(this, "instanceId", void 0), $(this, "cache", /* @__PURE__ */ new Map()), $(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return $e(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Wn(n));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(n) {
      return this.cache.get(n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      return this.opUpdate(Wn(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), i = r(o);
      i === null ? this.cache.delete(n) : this.cache.set(n, i);
    }
  }]), e;
}(), at = "data-token-hash", me = "data-css-hash", zs = "data-cache-path", Le = "__cssinjs_instance__";
function Vs() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(me, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Le] = o[Le] || e, o[Le] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(me, "]"))).forEach(function(o) {
      var i = o.getAttribute(me);
      if (r[i]) {
        if (o[Le] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new Ds(e);
}
var Pt = /* @__PURE__ */ v.createContext({
  hashPriority: "low",
  cache: Vs(),
  defaultCache: !0
});
function Fs(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Pr = /* @__PURE__ */ function() {
  function e() {
    Te(this, e), $(this, "cache", void 0), $(this, "keys", void 0), $(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return $e(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, o, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = {
        map: this.cache
      };
      return n.forEach(function(s) {
        if (!a)
          a = void 0;
        else {
          var l;
          a = (l = a) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(s);
        }
      }), (r = a) !== null && r !== void 0 && r.value && i && (a.value[1] = this.cacheCallTimes++), (o = a) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var o = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(c, u) {
            var f = N(c, 2), d = f[1];
            return o.internalGet(u)[1] < d ? [u, o.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), a = N(i, 1), s = a[0];
          this.delete(s);
        }
        this.keys.push(n);
      }
      var l = this.cache;
      n.forEach(function(c, u) {
        if (u === n.length - 1)
          l.set(c, {
            value: [r, o.cacheCallTimes++]
          });
        else {
          var f = l.get(c);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : l.set(c, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(c).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var o = n.get(r[0]);
      if (r.length === 1) {
        var i;
        return o.map ? n.set(r[0], {
          map: o.map
        }) : n.delete(r[0]), (i = o.value) === null || i === void 0 ? void 0 : i[0];
      }
      var a = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), a;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !Fs(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
$(Pr, "MAX_CACHE_SIZE", 20);
$(Pr, "MAX_CACHE_OFFSET", 5);
var io = 0, bi = /* @__PURE__ */ function() {
  function e(t) {
    Te(this, e), $(this, "derivatives", void 0), $(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = io, t.length === 0 && Or(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), io += 1;
  }
  return $e(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
}(), _n = new Pr();
function Gn(e) {
  var t = Array.isArray(e) ? e : [e];
  return _n.has(t) || _n.set(t, new bi(t)), _n.get(t);
}
var Bs = /* @__PURE__ */ new WeakMap(), kn = {};
function Ws(e, t) {
  for (var n = Bs, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(kn) || n.set(kn, e()), n.get(kn);
}
var ao = /* @__PURE__ */ new WeakMap();
function wt(e) {
  var t = ao.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof bi ? t += r.id : r && V(r) === "object" ? t += wt(r) : t += r;
  }), t = Tt(t), ao.set(e, t)), t;
}
function so(e, t) {
  return Tt("".concat(t, "_").concat(wt(e)));
}
var qn = Oe();
function pe(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function tn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var i = T(T({}, r), {}, $($({}, at, t), me, n)), a = Object.keys(i).map(function(s) {
    var l = i[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var Xt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Gs = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var i = N(o, 2), a = i[0], s = i[1];
    return "".concat(a, ":").concat(s, ";");
  }).join(""), "}") : "";
}, yi = function(t, n, r) {
  var o = {}, i = {};
  return Object.entries(t).forEach(function(a) {
    var s, l, c = N(a, 2), u = c[0], f = c[1];
    if (r != null && (s = r.preserve) !== null && s !== void 0 && s[u])
      i[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (l = r.ignore) !== null && l !== void 0 && l[u])) {
      var d, g = Xt(u, r == null ? void 0 : r.prefix);
      o[g] = typeof f == "number" && !(r != null && (d = r.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), i[u] = "var(".concat(g, ")");
    }
  }), [i, Gs(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, co = process.env.NODE_ENV !== "test" && Oe() ? v.useLayoutEffect : v.useEffect, Si = function(t, n) {
  var r = v.useRef(!0);
  co(function() {
    return t(r.current);
  }, n), co(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, lo = function(t, n) {
  Si(function(r) {
    if (!r)
      return t();
  }, n);
}, qs = T({}, v), uo = qs.useInsertionEffect, Us = function(t, n, r) {
  v.useMemo(t, r), Si(function() {
    return n(!0);
  }, r);
}, Xs = uo ? function(e, t, n) {
  return uo(function() {
    return e(), t();
  }, n);
} : Us, Ks = T({}, v), Ys = Ks.useInsertionEffect, Qs = function(t) {
  var n = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && Or(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(i);
  }
  return v.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(i) {
        return i();
      });
    };
  }, t), o;
}, Zs = function() {
  return function(t) {
    t();
  };
}, Js = typeof Ys < "u" ? Qs : Zs;
function ec() {
  return !1;
}
var Un = !1;
function tc() {
  return Un;
}
const nc = process.env.NODE_ENV === "production" ? ec : tc;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Dt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Dt && typeof Dt.webpackHotUpdate == "function") {
    var rc = Dt.webpackHotUpdate;
    Dt.webpackHotUpdate = function() {
      return Un = !0, setTimeout(function() {
        Un = !1;
      }, 0), rc.apply(void 0, arguments);
    };
  }
}
function Rr(e, t, n, r, o) {
  var i = v.useContext(Pt), a = i.cache, s = [e].concat(_e(t)), l = Wn(s), c = Js([l]), u = nc(), f = function(p) {
    a.opUpdate(l, function(h) {
      var x = h || [void 0, void 0], S = N(x, 2), w = S[0], _ = w === void 0 ? 0 : w, C = S[1], E = C;
      process.env.NODE_ENV !== "production" && C && u && (r == null || r(E, u), E = null);
      var m = E || n(), y = [_, m];
      return p ? p(y) : y;
    });
  };
  v.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var d = a.opGet(l);
  process.env.NODE_ENV !== "production" && !d && (f(), d = a.opGet(l));
  var g = d[1];
  return Xs(function() {
    o == null || o(g);
  }, function(b) {
    return f(function(p) {
      var h = N(p, 2), x = h[0], S = h[1];
      return b && x === 0 && (o == null || o(g)), [x + 1, S];
    }), function() {
      a.opUpdate(l, function(p) {
        var h = p || [], x = N(h, 2), S = x[0], w = S === void 0 ? 0 : S, _ = x[1], C = w - 1;
        return C === 0 ? (c(function() {
          (b || !a.opGet(l)) && (r == null || r(_, !1));
        }), null) : [w - 1, _];
      });
    };
  }, [l]), g;
}
var oc = {}, ic = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Be = /* @__PURE__ */ new Map();
function ac(e) {
  Be.set(e, (Be.get(e) || 0) + 1);
}
function sc(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(at, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Le] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var cc = 0;
function lc(e, t) {
  Be.set(e, (Be.get(e) || 0) - 1);
  var n = /* @__PURE__ */ new Set();
  Be.forEach(function(r, o) {
    r <= 0 && n.add(o);
  }), Be.size - n.size > cc && n.forEach(function(r) {
    sc(r, t), Be.delete(r);
  });
}
var uc = function(t, n, r, o) {
  var i = r.getDerivativeToken(t), a = T(T({}, i), n);
  return o && (a = o(a)), a;
}, Ci = "token";
function fc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = we(Pt), o = r.cache.instanceId, i = r.container, a = n.salt, s = a === void 0 ? "" : a, l = n.override, c = l === void 0 ? oc : l, u = n.formatToken, f = n.getComputedToken, d = n.cssVar, g = Ws(function() {
    return Object.assign.apply(Object, [{}].concat(_e(t)));
  }, t), b = wt(g), p = wt(c), h = d ? wt(d) : "", x = Rr(Ci, [s, e.id, b, p, h], function() {
    var S, w = f ? f(g, c, e) : uc(g, c, e, u), _ = T({}, w), C = "";
    if (d) {
      var E = yi(w, d.key, {
        prefix: d.prefix,
        ignore: d.ignore,
        unitless: d.unitless,
        preserve: d.preserve
      }), m = N(E, 2);
      w = m[0], C = m[1];
    }
    var y = so(w, s);
    w._tokenKey = y, _._tokenKey = so(_, s);
    var k = (S = d == null ? void 0 : d.key) !== null && S !== void 0 ? S : y;
    w._themeKey = k, ac(k);
    var A = "".concat(ic, "-").concat(Tt(y));
    return w._hashId = A, [w, A, _, C, (d == null ? void 0 : d.key) || ""];
  }, function(S) {
    lc(S[0]._themeKey, o);
  }, function(S) {
    var w = N(S, 4), _ = w[0], C = w[3];
    if (d && C) {
      var E = Ge(C, Tt("css-variables-".concat(_._themeKey)), {
        mark: me,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      E[Le] = o, E.setAttribute(at, _._themeKey);
    }
  });
  return x;
}
var dc = function(t, n, r) {
  var o = N(t, 5), i = o[2], a = o[3], s = o[4], l = r || {}, c = l.plain;
  if (!a)
    return null;
  var u = i._tokenKey, f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, g = tn(a, s, u, d, c);
  return [f, u, g];
}, hc = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, xi = "comm", Ei = "rule", wi = "decl", gc = "@import", vc = "@namespace", pc = "@keyframes", mc = "@layer", _i = Math.abs, Ir = String.fromCharCode;
function ki(e) {
  return e.trim();
}
function Kt(e, t, n) {
  return e.replace(t, n);
}
function bc(e, t, n) {
  return e.indexOf(t, n);
}
function ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function st(e, t, n) {
  return e.slice(t, n);
}
function Ce(e) {
  return e.length;
}
function yc(e) {
  return e.length;
}
function zt(e, t) {
  return t.push(e), e;
}
var hn = 1, ct = 1, Ti = 0, de = 0, K = 0, ht = "";
function jr(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: hn, column: ct, length: a, return: "", siblings: s };
}
function Sc() {
  return K;
}
function Cc() {
  return K = de > 0 ? ot(ht, --de) : 0, ct--, K === 10 && (ct = 1, hn--), K;
}
function be() {
  return K = de < Ti ? ot(ht, de++) : 0, ct++, K === 10 && (ct = 1, hn++), K;
}
function He() {
  return ot(ht, de);
}
function Yt() {
  return de;
}
function gn(e, t) {
  return st(ht, e, t);
}
function $t(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function xc(e) {
  return hn = ct = 1, Ti = Ce(ht = e), de = 0, [];
}
function Ec(e) {
  return ht = "", e;
}
function Tn(e) {
  return ki(gn(de - 1, Xn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wc(e) {
  for (; (K = He()) && K < 33; )
    be();
  return $t(e) > 2 || $t(K) > 3 ? "" : " ";
}
function _c(e, t) {
  for (; --t && be() && !(K < 48 || K > 102 || K > 57 && K < 65 || K > 70 && K < 97); )
    ;
  return gn(e, Yt() + (t < 6 && He() == 32 && be() == 32));
}
function Xn(e) {
  for (; be(); )
    switch (K) {
      case e:
        return de;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Xn(K);
        break;
      case 40:
        e === 41 && Xn(e);
        break;
      case 92:
        be();
        break;
    }
  return de;
}
function kc(e, t) {
  for (; be() && e + K !== 57; )
    if (e + K === 84 && He() === 47)
      break;
  return "/*" + gn(t, de - 1) + "*" + Ir(e === 47 ? e : be());
}
function Tc(e) {
  for (; !$t(He()); )
    be();
  return gn(e, de);
}
function $c(e) {
  return Ec(Qt("", null, null, null, [""], e = xc(e), 0, [0], e));
}
function Qt(e, t, n, r, o, i, a, s, l) {
  for (var c = 0, u = 0, f = a, d = 0, g = 0, b = 0, p = 1, h = 1, x = 1, S = 0, w = "", _ = o, C = i, E = r, m = w; h; )
    switch (b = S, S = be()) {
      case 40:
        if (b != 108 && ot(m, f - 1) == 58) {
          bc(m += Kt(Tn(S), "&", "&\f"), "&\f", _i(c ? s[c - 1] : 0)) != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += Tn(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += wc(b);
        break;
      case 92:
        m += _c(Yt() - 1, 7);
        continue;
      case 47:
        switch (He()) {
          case 42:
          case 47:
            zt(Oc(kc(be(), Yt()), t, n, l), l), ($t(b || 1) == 5 || $t(He() || 1) == 5) && Ce(m) && st(m, -1, void 0) !== " " && (m += " ");
            break;
          default:
            m += "/";
        }
        break;
      case 123 * p:
        s[c++] = Ce(m) * x;
      case 125 * p:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            h = 0;
          case 59 + u:
            x == -1 && (m = Kt(m, /\f/g, "")), g > 0 && (Ce(m) - f || p === 0 && b === 47) && zt(g > 32 ? ho(m + ";", r, n, f - 1, l) : ho(Kt(m, " ", "") + ";", r, n, f - 2, l), l);
            break;
          case 59:
            m += ";";
          default:
            if (zt(E = fo(m, t, n, c, u, o, s, w, _ = [], C = [], f, i), i), S === 123)
              if (u === 0)
                Qt(m, t, E, E, _, i, f, s, C);
              else {
                switch (d) {
                  case 99:
                    if (ot(m, 3) === 110) break;
                  case 108:
                    if (ot(m, 2) === 97) break;
                  default:
                    u = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Qt(e, E, E, r && zt(fo(e, E, E, 0, 0, o, s, w, o, _ = [], f, C), C), o, C, f, s, r ? _ : C) : Qt(m, E, E, E, [""], C, 0, s, C);
              }
        }
        c = u = g = 0, p = x = 1, w = m = "", f = a;
        break;
      case 58:
        f = 1 + Ce(m), g = b;
      default:
        if (p < 1) {
          if (S == 123)
            --p;
          else if (S == 125 && p++ == 0 && Cc() == 125)
            continue;
        }
        switch (m += Ir(S), S * p) {
          case 38:
            x = u > 0 ? 1 : (m += "\f", -1);
            break;
          case 44:
            s[c++] = (Ce(m) - 1) * x, x = 1;
            break;
          case 64:
            He() === 45 && (m += Tn(be())), d = He(), u = f = Ce(w = m += Tc(Yt())), S++;
            break;
          case 45:
            b === 45 && Ce(m) == 2 && (p = 0);
        }
    }
  return i;
}
function fo(e, t, n, r, o, i, a, s, l, c, u, f) {
  for (var d = o - 1, g = o === 0 ? i : [""], b = yc(g), p = 0, h = 0, x = 0; p < r; ++p)
    for (var S = 0, w = st(e, d + 1, d = _i(h = a[p])), _ = e; S < b; ++S)
      (_ = ki(h > 0 ? g[S] + " " + w : Kt(w, /&\f/g, g[S]))) && (l[x++] = _);
  return jr(e, t, n, o === 0 ? Ei : s, l, c, u, f);
}
function Oc(e, t, n, r) {
  return jr(e, t, n, xi, Ir(Sc()), st(e, 2, -2), 0, r);
}
function ho(e, t, n, r, o) {
  return jr(e, t, n, wi, st(e, 0, r), st(e, r + 1, -1), r, o);
}
function Kn(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Mc(e, t, n, r) {
  switch (e.type) {
    case mc:
      if (e.children.length) break;
    case gc:
    case vc:
    case wi:
      return e.return = e.return || e.value;
    case xi:
      return "";
    case pc:
      return e.return = e.value + "{" + Kn(e.children, r) + "}";
    case Ei:
      if (!Ce(e.value = e.props.join(","))) return "";
  }
  return Ce(n = Kn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function $i(e, t) {
  var n = t.path, r = t.parentSelectors;
  ze(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Ac = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && $i("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, Pc = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && $i("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, go = "data-ant-cssinjs-cache-path", Oi = "_FILE_STYLE__", qe, Mi = !0;
function Rc() {
  if (!qe && (qe = {}, Oe())) {
    var e = document.createElement("div");
    e.className = go, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), a = N(i, 2), s = a[0], l = a[1];
      qe[s] = l;
    });
    var n = document.querySelector("style[".concat(go, "]"));
    if (n) {
      var r;
      Mi = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Ic(e) {
  return Rc(), !!qe[e];
}
function jc(e) {
  var t = qe[e], n = null;
  if (t && Oe())
    if (Mi)
      n = Oi;
    else {
      var r = document.querySelector("style[".concat(me, '="').concat(qe[e], '"]'));
      r ? n = r.innerHTML : delete qe[e];
    }
  return [n, t];
}
var Ai = "_skip_check_", Pi = "_multi_value_";
function Zt(e) {
  var t = Kn($c(e), Mc);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Nc(e) {
  return V(e) === "object" && e && (Ai in e || Pi in e);
}
function vo(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(a) {
    var s, l = a.trim().split(/\s+/), c = l[0] || "", u = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(u).concat(o).concat(c.slice(u.length)), [c].concat(_e(l.slice(1))).join(" ");
  });
  return i.join(",");
}
var Lc = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, a = r.parentSelectors, s = n.hashId, l = n.layer, c = n.path, u = n.hashPriority, f = n.transformers, d = f === void 0 ? [] : f, g = n.linters, b = g === void 0 ? [] : g, p = "", h = {};
  function x(_) {
    var C = _.getName(s);
    if (!h[C]) {
      var E = e(_.style, n, {
        root: !1,
        parentSelectors: a
      }), m = N(E, 1), y = m[0];
      h[C] = "@keyframes ".concat(_.getName(s)).concat(y);
    }
  }
  function S(_) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return _.forEach(function(E) {
      Array.isArray(E) ? S(E, C) : E && C.push(E);
    }), C;
  }
  var w = S(Array.isArray(t) ? t : [t]);
  return w.forEach(function(_) {
    var C = typeof _ == "string" && !o ? {} : _;
    if (typeof C == "string")
      p += "".concat(C, `
`);
    else if (C._keyframe)
      x(C);
    else {
      var E = d.reduce(function(m, y) {
        var k;
        return (y == null || (k = y.visit) === null || k === void 0 ? void 0 : k.call(y, m)) || m;
      }, C);
      Object.keys(E).forEach(function(m) {
        var y = E[m];
        if (V(y) === "object" && y && (m !== "animationName" || !y._keyframe) && !Nc(y)) {
          var k = !1, A = m.trim(), j = !1;
          (o || i) && s ? A.startsWith("@") ? k = !0 : A === "&" ? A = vo("", s, u) : A = vo(m, s, u) : o && !s && (A === "&" || A === "") && (A = "", j = !0);
          var R = e(y, n, {
            root: j,
            injectHash: k,
            parentSelectors: [].concat(_e(a), [A])
          }), I = N(R, 2), O = I[0], P = I[1];
          h = T(T({}, h), P), p += "".concat(A).concat(O);
        } else {
          let F = function(B, U) {
            process.env.NODE_ENV !== "production" && (V(y) !== "object" || !(y != null && y[Ai])) && [Ac, Pc].concat(_e(b)).forEach(function(W) {
              return W(B, U, {
                path: c,
                hashId: s,
                parentSelectors: a
              });
            });
            var q = B.replace(/[A-Z]/g, function(W) {
              return "-".concat(W.toLowerCase());
            }), G = U;
            !hc[B] && typeof G == "number" && G !== 0 && (G = "".concat(G, "px")), B === "animationName" && U !== null && U !== void 0 && U._keyframe && (x(U), G = U.getName(s)), p += "".concat(q, ":").concat(G, ";");
          };
          var L, H = (L = y == null ? void 0 : y.value) !== null && L !== void 0 ? L : y;
          V(y) === "object" && y !== null && y !== void 0 && y[Pi] && Array.isArray(H) ? H.forEach(function(B) {
            F(m, B);
          }) : F(m, H);
        }
      });
    }
  }), o ? l && (p && (p = "@layer ".concat(l.name, " {").concat(p, "}")), l.dependencies && (h["@layer ".concat(l.name)] = l.dependencies.map(function(_) {
    return "@layer ".concat(_, ", ").concat(l.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, h];
};
function Ri(e, t) {
  return Tt("".concat(e.join("%")).concat(t));
}
function Hc() {
  return null;
}
var Ii = "style";
function Yn(e, t) {
  var n = e.token, r = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, l = e.order, c = l === void 0 ? 0 : l, u = v.useContext(Pt), f = u.autoClear, d = u.mock, g = u.defaultCache, b = u.hashPriority, p = u.container, h = u.ssrInline, x = u.transformers, S = u.linters, w = u.cache, _ = u.layer, C = n._tokenKey, E = [C];
  _ && E.push("layer"), E.push.apply(E, _e(r));
  var m = qn;
  process.env.NODE_ENV !== "production" && d !== void 0 && (m = d === "client");
  var y = Rr(
    Ii,
    E,
    // Create cache if needed
    function() {
      var I = E.join("|");
      if (Ic(I)) {
        var O = jc(I), P = N(O, 2), L = P[0], H = P[1];
        if (L)
          return [L, C, H, {}, s, c];
      }
      var F = t(), B = Lc(F, {
        hashId: o,
        hashPriority: b,
        layer: _ ? i : void 0,
        path: r.join("-"),
        transformers: x,
        linters: S
      }), U = N(B, 2), q = U[0], G = U[1], W = Zt(q), Q = Ri(E, W);
      return [W, C, Q, G, s, c];
    },
    // Remove cache if no need
    function(I, O) {
      var P = N(I, 3), L = P[2];
      (O || f) && qn && mi(L, {
        mark: me,
        attachTo: p
      });
    },
    // Effect: Inject style here
    function(I) {
      var O = N(I, 4), P = O[0];
      O[1];
      var L = O[2], H = O[3];
      if (m && P !== Oi) {
        var F = {
          mark: me,
          prepend: _ ? !1 : "queue",
          attachTo: p,
          priority: c
        }, B = typeof a == "function" ? a() : a;
        B && (F.csp = {
          nonce: B
        });
        var U = [], q = [];
        Object.keys(H).forEach(function(W) {
          W.startsWith("@layer") ? U.push(W) : q.push(W);
        }), U.forEach(function(W) {
          Ge(Zt(H[W]), "_layer-".concat(W), T(T({}, F), {}, {
            prepend: !0
          }));
        });
        var G = Ge(P, L, F);
        G[Le] = w.instanceId, G.setAttribute(at, C), process.env.NODE_ENV !== "production" && G.setAttribute(zs, E.join("|")), q.forEach(function(W) {
          Ge(Zt(H[W]), "_effect-".concat(W), F);
        });
      }
    }
  ), k = N(y, 3), A = k[0], j = k[1], R = k[2];
  return function(I) {
    var O;
    return !h || m || !g ? O = /* @__PURE__ */ v.createElement(Hc, null) : O = /* @__PURE__ */ v.createElement("style", Ue({}, $($({}, at, j), me, R), {
      dangerouslySetInnerHTML: {
        __html: A
      }
    })), /* @__PURE__ */ v.createElement(v.Fragment, null, O, I);
  };
}
var Dc = function(t, n, r) {
  var o = N(t, 6), i = o[0], a = o[1], s = o[2], l = o[3], c = o[4], u = o[5], f = r || {}, d = f.plain;
  if (c)
    return null;
  var g = i, b = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return g = tn(i, a, s, b, d), l && Object.keys(l).forEach(function(p) {
    if (!n[p]) {
      n[p] = !0;
      var h = Zt(l[p]), x = tn(h, a, "_effect-".concat(p), b, d);
      p.startsWith("@layer") ? g = x + g : g += x;
    }
  }), [u, s, g];
}, ji = "cssVar", zc = function(t, n) {
  var r = t.key, o = t.prefix, i = t.unitless, a = t.ignore, s = t.token, l = t.scope, c = l === void 0 ? "" : l, u = we(Pt), f = u.cache.instanceId, d = u.container, g = s._tokenKey, b = [].concat(_e(t.path), [r, c, g]), p = Rr(ji, b, function() {
    var h = n(), x = yi(h, r, {
      prefix: o,
      unitless: i,
      ignore: a,
      scope: c
    }), S = N(x, 2), w = S[0], _ = S[1], C = Ri(b, _);
    return [w, _, C, r];
  }, function(h) {
    var x = N(h, 3), S = x[2];
    qn && mi(S, {
      mark: me,
      attachTo: d
    });
  }, function(h) {
    var x = N(h, 3), S = x[1], w = x[2];
    if (S) {
      var _ = Ge(S, w, {
        mark: me,
        prepend: "queue",
        attachTo: d,
        priority: -999
      });
      _[Le] = f, _.setAttribute(at, r);
    }
  });
  return p;
}, Vc = function(t, n, r) {
  var o = N(t, 4), i = o[1], a = o[2], s = o[3], l = r || {}, c = l.plain;
  if (!i)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, d = tn(i, s, a, f, c);
  return [u, a, d];
};
$($($({}, Ii, Dc), Ci, dc), ji, Vc);
function Je(e) {
  return e.notSplit = !0, e;
}
Je(["borderTop", "borderBottom"]), Je(["borderTop"]), Je(["borderBottom"]), Je(["borderLeft", "borderRight"]), Je(["borderLeft"]), Je(["borderRight"]);
var Nr = /* @__PURE__ */ cn({});
function Fc(e) {
  return di(e) || ci(e) || Mr(e) || hi();
}
function Qn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Ni(e, t, n, r) {
  if (!t.length)
    return n;
  var o = Fc(t), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = _e(e) : s = T({}, e), r && n === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = Ni(s[i], a, n, r), s;
}
function $n(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Qn(e, t.slice(0, -1)) ? e : Ni(e, t, n, r);
}
function Bc(e) {
  return V(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function po(e) {
  return Array.isArray(e) ? [] : {};
}
var Wc = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Gc() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = po(t[0]);
  return t.forEach(function(o) {
    function i(a, s) {
      var l = new Set(s), c = Qn(o, a), u = Array.isArray(c);
      if (u || Bc(c)) {
        if (!l.has(c)) {
          l.add(c);
          var f = Qn(r, a);
          u ? r = $n(r, a, []) : (!f || V(f) !== "object") && (r = $n(r, a, po(c))), Wc(c).forEach(function(d) {
            i([].concat(_e(a), [d]), l);
          });
        }
      } else
        r = $n(r, a, c);
    }
    i([]);
  }), r;
}
function Li() {
}
let Ee = null;
function qc() {
  Ee = null, Zo();
}
let Hi = Li;
process.env.NODE_ENV !== "production" && (Hi = (e, t, n) => {
  ze(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && qc();
});
const gt = Hi, Di = /* @__PURE__ */ v.createContext({}), vn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = v.useContext(Di), n = (r, o, i) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const a = Ee;
        Ee || (Ee = {}), Ee[e] = Ee[e] || [], Ee[e].includes(i || "") || Ee[e].push(i || ""), a || console.warn("[antd] There exists deprecated usage in your code:", Ee);
      } else
        process.env.NODE_ENV !== "production" && gt(r, e, i);
  };
  return n.deprecated = (r, o, i, a) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${a ? ` ${a}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = Li, e;
}, Uc = /* @__PURE__ */ cn(void 0), le = "${label} is not a valid ${type}", pn = {
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: le,
        method: le,
        array: le,
        object: le,
        number: le,
        date: le,
        boolean: le,
        integer: le,
        float: le,
        regexp: le,
        email: le,
        url: le,
        hex: le
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  }
};
Object.assign({}, pn.Modal);
let Jt = [];
const mo = () => Jt.reduce((e, t) => Object.assign(Object.assign({}, e), t), pn.Modal);
function Xc(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Jt.push(t), mo(), () => {
      Jt = Jt.filter((n) => n !== t), mo();
    };
  }
  Object.assign({}, pn.Modal);
}
const zi = /* @__PURE__ */ cn(void 0), Vi = "internalMark", Fi = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = vn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === Vi, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  v.useEffect(() => Xc(t == null ? void 0 : t.Modal), [t]);
  const o = v.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ v.createElement(zi.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (Fi.displayName = "LocaleProvider");
const Bi = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Ot = Object.assign(Object.assign({}, Bi), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), J = Math.round;
function On(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const bo = (e, t, n) => n === 0 ? e : e / 100;
function Ct(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
let Y = class Wi {
  constructor(t) {
    $(this, "isValid", !0), $(this, "r", 0), $(this, "g", 0), $(this, "b", 0), $(this, "a", 1), $(this, "_h", void 0), $(this, "_s", void 0), $(this, "_l", void 0), $(this, "_v", void 0), $(this, "_max", void 0), $(this, "_min", void 0), $(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof Wi)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = Ct(t.r), this.g = Ct(t.g), this.b = Ct(t.b), this.a = typeof t.a == "number" ? Ct(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(i) {
      const a = i / 255;
      return a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = J(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, i = (s) => (r[s] - this[s]) * o + this[s], a = {
      r: J(i("r")),
      g: J(i("g")),
      b: J(i("b")),
      a: J(i("a") * 100) / 100
    };
    return this._c(a);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => J((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: r
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = J(this.a * 255).toString(16);
      t += i.length === 2 ? i : "0" + i;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), n = J(this.getSaturation() * 100), r = J(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = Ct(n, r), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(o, i) {
      return parseInt(n[o] + n[i || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const d = J(r * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, a = 0, s = 0;
    const l = t / 60, c = (1 - Math.abs(2 * r - 1)) * n, u = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = c, a = u) : l >= 1 && l < 2 ? (i = u, a = c) : l >= 2 && l < 3 ? (a = c, s = u) : l >= 3 && l < 4 ? (a = u, s = c) : l >= 4 && l < 5 ? (i = u, s = c) : l >= 5 && l < 6 && (i = c, s = u);
    const f = r - c / 2;
    this.r = J((i + f) * 255), this.g = J((a + f) * 255), this.b = J((s + f) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = J(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const a = t / 60, s = Math.floor(a), l = a - s, c = J(r * (1 - n) * 255), u = J(r * (1 - n * l) * 255), f = J(r * (1 - n * (1 - l)) * 255);
    switch (s) {
      case 0:
        this.g = f, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = f;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = f, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = On(t, bo);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = On(t, bo);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = On(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? J(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
};
var Vt = 2, yo = 0.16, Kc = 0.05, Yc = 0.05, Qc = 0.15, Gi = 5, qi = 4, Zc = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function So(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Vt * t : Math.round(e.h) + Vt * t : r = n ? Math.round(e.h) + Vt * t : Math.round(e.h) - Vt * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Co(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - yo * t : t === qi ? r = e.s + yo : r = e.s + Kc * t, r > 1 && (r = 1), n && t === Gi && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function xo(e, t, n) {
  var r;
  return n ? r = e.v + Yc * t : r = e.v - Qc * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Mt(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new Y(e), o = r.toHsv(), i = Gi; i > 0; i -= 1) {
    var a = new Y({
      h: So(o, i, !0),
      s: Co(o, i, !0),
      v: xo(o, i, !0)
    });
    n.push(a);
  }
  n.push(r);
  for (var s = 1; s <= qi; s += 1) {
    var l = new Y({
      h: So(o, s),
      s: Co(o, s),
      v: xo(o, s)
    });
    n.push(l);
  }
  return t.theme === "dark" ? Zc.map(function(c) {
    var u = c.index, f = c.amount;
    return new Y(t.backgroundColor || "#141414").mix(n[u], f).toHexString();
  }) : n.map(function(c) {
    return c.toHexString();
  });
}
var Mn = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Zn = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Zn.primary = Zn[5];
var Jn = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Jn.primary = Jn[5];
var er = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
er.primary = er[5];
var tr = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
tr.primary = tr[5];
var nr = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
nr.primary = nr[5];
var rr = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
rr.primary = rr[5];
var or = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
or.primary = or[5];
var ir = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
ir.primary = ir[5];
var nn = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
nn.primary = nn[5];
var ar = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ar.primary = ar[5];
var sr = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
sr.primary = sr[5];
var cr = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
cr.primary = cr[5];
var lr = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
lr.primary = lr[5];
var An = {
  red: Zn,
  volcano: Jn,
  orange: er,
  gold: tr,
  yellow: nr,
  lime: rr,
  green: or,
  cyan: ir,
  blue: nn,
  geekblue: ar,
  purple: sr,
  magenta: cr,
  grey: lr
};
function Jc(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: n
}) {
  const {
    colorSuccess: r,
    colorWarning: o,
    colorError: i,
    colorInfo: a,
    colorPrimary: s,
    colorBgBase: l,
    colorTextBase: c
  } = e, u = t(s), f = t(r), d = t(o), g = t(i), b = t(a), p = n(l, c), h = e.colorLink || e.colorInfo, x = t(h), S = new Y(g[1]).mix(new Y(g[3]), 50).toHexString();
  return Object.assign(Object.assign({}, p), {
    colorPrimaryBg: u[1],
    colorPrimaryBgHover: u[2],
    colorPrimaryBorder: u[3],
    colorPrimaryBorderHover: u[4],
    colorPrimaryHover: u[5],
    colorPrimary: u[6],
    colorPrimaryActive: u[7],
    colorPrimaryTextHover: u[8],
    colorPrimaryText: u[9],
    colorPrimaryTextActive: u[10],
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: g[1],
    colorErrorBgHover: g[2],
    colorErrorBgFilledHover: S,
    colorErrorBgActive: g[3],
    colorErrorBorder: g[3],
    colorErrorBorderHover: g[4],
    colorErrorHover: g[5],
    colorError: g[6],
    colorErrorActive: g[7],
    colorErrorTextHover: g[8],
    colorErrorText: g[9],
    colorErrorTextActive: g[10],
    colorWarningBg: d[1],
    colorWarningBgHover: d[2],
    colorWarningBorder: d[3],
    colorWarningBorderHover: d[4],
    colorWarningHover: d[4],
    colorWarning: d[6],
    colorWarningActive: d[7],
    colorWarningTextHover: d[8],
    colorWarningText: d[9],
    colorWarningTextActive: d[10],
    colorInfoBg: b[1],
    colorInfoBgHover: b[2],
    colorInfoBorder: b[3],
    colorInfoBorderHover: b[4],
    colorInfoHover: b[4],
    colorInfo: b[6],
    colorInfoActive: b[7],
    colorInfoTextHover: b[8],
    colorInfoText: b[9],
    colorInfoTextActive: b[10],
    colorLinkHover: x[4],
    colorLink: x[6],
    colorLinkActive: x[7],
    colorBgMask: new Y("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const el = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function tl(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, el(r));
}
const nl = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function rl(e) {
  return (e + 8) / e;
}
function ol(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: rl(n)
  }));
}
const il = (e) => {
  const t = ol(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], i = n[0], a = n[2], s = r[1], l = r[0], c = r[2];
  return {
    fontSizeSM: i,
    fontSize: o,
    fontSizeLG: a,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: s,
    lineHeightLG: c,
    lineHeightSM: l,
    fontHeight: Math.round(s * o),
    fontHeightLG: Math.round(c * a),
    fontHeightSM: Math.round(l * i),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function al(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
const fe = (e, t) => new Y(e).setA(t).toRgbString(), xt = (e, t) => new Y(e).darken(t).toHexString(), sl = (e) => {
  const t = Mt(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, cl = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: fe(r, 0.88),
    colorTextSecondary: fe(r, 0.65),
    colorTextTertiary: fe(r, 0.45),
    colorTextQuaternary: fe(r, 0.25),
    colorFill: fe(r, 0.15),
    colorFillSecondary: fe(r, 0.06),
    colorFillTertiary: fe(r, 0.04),
    colorFillQuaternary: fe(r, 0.02),
    colorBgSolid: fe(r, 1),
    colorBgSolidHover: fe(r, 0.75),
    colorBgSolidActive: fe(r, 0.95),
    colorBgLayout: xt(n, 4),
    colorBgContainer: xt(n, 0),
    colorBgElevated: xt(n, 0),
    colorBgSpotlight: fe(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: xt(n, 15),
    colorBorderSecondary: xt(n, 6)
  };
};
function ll(e) {
  Mn.pink = Mn.magenta, An.pink = An.magenta;
  const t = Object.keys(Bi).map((n) => {
    const r = e[n] === Mn[n] ? An[n] : Mt(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, a) => (o[`${n}-${a + 1}`] = r[a], o[`${n}${a + 1}`] = r[a], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Jc(e, {
    generateColorPalettes: sl,
    generateNeutralColorPalettes: cl
  })), il(e.fontSize)), al(e)), nl(e)), tl(e));
}
const Ui = Gn(ll), ur = {
  token: Ot,
  override: {
    override: Ot
  },
  hashed: !0
}, Xi = /* @__PURE__ */ te.createContext(ur), rn = "ant", Lr = "anticon", ul = (e, t) => t || (e ? `${rn}-${e}` : rn), ke = /* @__PURE__ */ v.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: ul,
  iconPrefixCls: Lr
}), {
  Consumer: Zf
} = ke, fl = `-ant-${Date.now()}-${Math.random()}`;
function dl(e, t) {
  const n = {}, r = (a, s) => {
    let l = a.clone();
    return l = (s == null ? void 0 : s(l)) || l, l.toRgbString();
  }, o = (a, s) => {
    const l = new Y(a), c = Mt(l.toRgbString());
    n[`${s}-color`] = r(l), n[`${s}-color-disabled`] = c[1], n[`${s}-color-hover`] = c[4], n[`${s}-color-active`] = c[6], n[`${s}-color-outline`] = l.clone().setA(0.2).toRgbString(), n[`${s}-color-deprecated-bg`] = c[0], n[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new Y(t.primaryColor), s = Mt(a.toRgbString());
    s.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(a, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(a, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(a, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(a, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(a, (c) => c.setA(c.a * 0.12));
    const l = new Y(s[0]);
    n["primary-color-active-deprecated-f-30"] = r(l, (c) => c.setA(c.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(l, (c) => c.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim();
}
function hl(e, t) {
  const n = dl(e, t);
  Oe() ? Ge(n, `${fl}-dynamic-theme`) : process.env.NODE_ENV !== "production" && gt(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const on = /* @__PURE__ */ v.createContext(!1), gl = ({
  children: e,
  disabled: t
}) => {
  const n = v.useContext(on);
  return /* @__PURE__ */ v.createElement(on.Provider, {
    value: t ?? n
  }, e);
}, lt = /* @__PURE__ */ v.createContext(void 0), vl = ({
  children: e,
  size: t
}) => {
  const n = v.useContext(lt);
  return /* @__PURE__ */ v.createElement(lt.Provider, {
    value: t || n
  }, e);
};
function pl() {
  const e = we(on), t = we(lt);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Ki = /* @__PURE__ */ $e(function e() {
  Te(this, e);
}), Yi = "CALC_UNIT", ml = new RegExp(Yi, "g");
function Pn(e) {
  return typeof e == "number" ? "".concat(e).concat(Yi) : e;
}
var bl = /* @__PURE__ */ function(e) {
  ln(n, e);
  var t = un(n);
  function n(r, o) {
    var i;
    Te(this, n), i = t.call(this), $(We(i), "result", ""), $(We(i), "unitlessCssVar", void 0), $(We(i), "lowPriority", void 0);
    var a = V(r);
    return i.unitlessCssVar = o, r instanceof n ? i.result = "(".concat(r.result, ")") : a === "number" ? i.result = Pn(r) : a === "string" && (i.result = r), i;
  }
  return $e(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Pn(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Pn(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var i = this, a = o || {}, s = a.unit, l = !0;
      return typeof s == "boolean" ? l = s : Array.from(this.unitlessCssVar).some(function(c) {
        return i.result.includes(c);
      }) && (l = !1), this.result = this.result.replace(ml, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Ki), yl = /* @__PURE__ */ function(e) {
  ln(n, e);
  var t = un(n);
  function n(r) {
    var o;
    return Te(this, n), o = t.call(this), $(We(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return $e(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof n ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof n ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
}(Ki), Sl = function(t, n) {
  var r = t === "css" ? bl : yl;
  return function(o) {
    return new r(o, n);
  };
}, Eo = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function ut(e) {
  var t = v.useRef();
  t.current = e;
  var n = v.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function At(e) {
  var t = v.useRef(!1), n = v.useState(e), r = N(n, 2), o = r[0], i = r[1];
  v.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(s, l) {
    l && t.current || i(s);
  }
  return [o, a];
}
function Rn(e) {
  return e !== void 0;
}
function Qi(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, i = n.onChange, a = n.postState, s = At(function() {
    return Rn(o) ? o : Rn(r) ? typeof r == "function" ? r() : r : e;
  }), l = N(s, 2), c = l[0], u = l[1], f = o !== void 0 ? o : c, d = a ? a(f) : f, g = ut(i), b = At([f]), p = N(b, 2), h = p[0], x = p[1];
  lo(function() {
    var w = h[0];
    c !== w && g(c, w);
  }, [h]), lo(function() {
    Rn(o) || u(o);
  }, [o]);
  var S = ut(function(w, _) {
    u(w, _), x([f], _);
  });
  return [d, S];
}
function wo(e, t, n, r) {
  var o = T({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(s) {
      var l = N(s, 2), c = l[0], u = l[1];
      if (process.env.NODE_ENV !== "production" && ze(!(o != null && o[c]), "Component Token `".concat(String(c), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[c] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o == null ? void 0 : o[c]);
      }
    });
  }
  var a = T(T({}, n), o);
  return Object.keys(a).forEach(function(s) {
    a[s] === t[s] && delete a[s];
  }), a;
}
var Zi = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", fr = !0;
function Hr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Zi)
    return Object.assign.apply(Object, [{}].concat(t));
  fr = !1;
  var r = {};
  return t.forEach(function(o) {
    if (V(o) === "object") {
      var i = Object.keys(o);
      i.forEach(function(a) {
        Object.defineProperty(r, a, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[a];
          }
        });
      });
    }
  }), fr = !0, r;
}
var _o = {};
function Cl() {
}
var xl = function(t) {
  var n, r = t, o = Cl;
  return Zi && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(a, s) {
      if (fr) {
        var l;
        (l = n) === null || l === void 0 || l.add(s);
      }
      return a[s];
    }
  }), o = function(a, s) {
    var l;
    _o[a] = {
      global: Array.from(n),
      component: T(T({}, (l = _o[a]) === null || l === void 0 ? void 0 : l.component), s)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function ko(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(Hr(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function El(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return pe(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return pe(i);
      }).join(","), ")");
    }
  };
}
var wl = 1e3 * 60 * 10, _l = /* @__PURE__ */ function() {
  function e() {
    Te(this, e), $(this, "map", /* @__PURE__ */ new Map()), $(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), $(this, "nextID", 0), $(this, "lastAccessBeat", /* @__PURE__ */ new Map()), $(this, "accessBeat", 0);
  }
  return $e(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      var o = this.getCompositeKey(n);
      this.map.set(o, r), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var r = this.getCompositeKey(n), o = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var r = this, o = n.map(function(i) {
        return i && V(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(V(i), "_").concat(i);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(o, i) {
          r - o > wl && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), To = new _l();
function kl(e, t) {
  return te.useMemo(function() {
    var n = To.get(t);
    if (n)
      return n;
    var r = e();
    return To.set(t, r), r;
  }, t);
}
var Tl = function() {
  return {};
};
function $l(e) {
  var t = e.useCSP, n = t === void 0 ? Tl : t, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, a = e.getCommonStyle, s = e.getCompUnitless;
  function l(d, g, b, p) {
    var h = Array.isArray(d) ? d[0] : d;
    function x(y) {
      return "".concat(String(h)).concat(y.slice(0, 1).toUpperCase()).concat(y.slice(1));
    }
    var S = (p == null ? void 0 : p.unitless) || {}, w = typeof s == "function" ? s(d) : {}, _ = T(T({}, w), {}, $({}, x("zIndexPopup"), !0));
    Object.keys(S).forEach(function(y) {
      _[x(y)] = S[y];
    });
    var C = T(T({}, p), {}, {
      unitless: _,
      prefixToken: x
    }), E = u(d, g, b, C), m = c(h, b, C);
    return function(y) {
      var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, A = E(y, k), j = N(A, 2), R = j[1], I = m(k), O = N(I, 2), P = O[0], L = O[1];
      return [P, R, L];
    };
  }
  function c(d, g, b) {
    var p = b.unitless, h = b.injectStyle, x = h === void 0 ? !0 : h, S = b.prefixToken, w = b.ignore, _ = function(m) {
      var y = m.rootCls, k = m.cssVar, A = k === void 0 ? {} : k, j = r(), R = j.realToken;
      return zc({
        path: [d],
        prefix: A.prefix,
        key: A.key,
        unitless: p,
        ignore: w,
        token: R,
        scope: y
      }, function() {
        var I = ko(d, R, g), O = wo(d, R, I, {
          deprecatedTokens: b == null ? void 0 : b.deprecatedTokens
        });
        return Object.keys(I).forEach(function(P) {
          O[S(P)] = O[P], delete O[P];
        }), O;
      }), null;
    }, C = function(m) {
      var y = r(), k = y.cssVar;
      return [function(A) {
        return x && k ? /* @__PURE__ */ te.createElement(te.Fragment, null, /* @__PURE__ */ te.createElement(_, {
          rootCls: m,
          cssVar: k,
          component: d
        }), A) : A;
      }, k == null ? void 0 : k.key];
    };
    return C;
  }
  function u(d, g, b) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = Array.isArray(d) ? d : [d, d], x = N(h, 1), S = x[0], w = h.join("-"), _ = e.layer || {
      name: "antd"
    };
    return function(C) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, m = r(), y = m.theme, k = m.realToken, A = m.hashId, j = m.token, R = m.cssVar, I = o(), O = I.rootPrefixCls, P = I.iconPrefixCls, L = n(), H = R ? "css" : "js", F = kl(function() {
        var Q = /* @__PURE__ */ new Set();
        return R && Object.keys(p.unitless || {}).forEach(function(he) {
          Q.add(Xt(he, R.prefix)), Q.add(Xt(he, Eo(S, R.prefix)));
        }), Sl(H, Q);
      }, [H, S, R == null ? void 0 : R.prefix]), B = El(H), U = B.max, q = B.min, G = {
        theme: y,
        token: j,
        hashId: A,
        nonce: function() {
          return L.nonce;
        },
        clientOnly: p.clientOnly,
        layer: _,
        // antd is always at top of styles
        order: p.order || -999
      };
      typeof i == "function" && Yn(T(T({}, G), {}, {
        clientOnly: !1,
        path: ["Shared", O]
      }), function() {
        return i(j, {
          prefix: {
            rootPrefixCls: O,
            iconPrefixCls: P
          },
          csp: L
        });
      });
      var W = Yn(T(T({}, G), {}, {
        path: [w, C, P]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var Q = xl(j), he = Q.token, Me = Q.flush, se = ko(S, k, b), Ve = ".".concat(C), Ae = wo(S, k, se, {
          deprecatedTokens: p.deprecatedTokens
        });
        R && se && V(se) === "object" && Object.keys(se).forEach(function(Ie) {
          se[Ie] = "var(".concat(Xt(Ie, Eo(S, R.prefix)), ")");
        });
        var Pe = Hr(he, {
          componentCls: Ve,
          prefixCls: C,
          iconCls: ".".concat(P),
          antCls: ".".concat(O),
          calc: F,
          // @ts-ignore
          max: U,
          // @ts-ignore
          min: q
        }, R ? se : Ae), Re = g(Pe, {
          hashId: A,
          prefixCls: C,
          rootPrefixCls: O,
          iconPrefixCls: P
        });
        Me(S, Ae);
        var ge = typeof a == "function" ? a(Pe, C, E, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : ge, Re];
      });
      return [W, A];
    };
  }
  function f(d, g, b) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, h = u(d, g, b, T({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), x = function(w) {
      var _ = w.prefixCls, C = w.rootCls, E = C === void 0 ? _ : C;
      return h(_, E), null;
    };
    return process.env.NODE_ENV !== "production" && (x.displayName = "SubStyle_".concat(String(Array.isArray(d) ? d.join(".") : d))), x;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const Ol = "5.27.5";
function In(e) {
  return e >= 0 && e <= 255;
}
function Ft(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new Y(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: l
  } = new Y(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - a * (1 - c)) / c), f = Math.round((r - s * (1 - c)) / c), d = Math.round((o - l * (1 - c)) / c);
    if (In(u) && In(f) && In(d))
      return new Y({
        r: u,
        g: f,
        b: d,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new Y({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var Ml = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Ji(e) {
  const {
    override: t
  } = e, n = Ml(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Ot).forEach((d) => {
    delete r[d];
  });
  const o = Object.assign(Object.assign({}, n), r), i = 480, a = 576, s = 768, l = 992, c = 1200, u = 1600;
  if (o.motion === !1) {
    const d = "0s";
    o.motionDurationFast = d, o.motionDurationMid = d, o.motionDurationSlow = d;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: Ft(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: Ft(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: Ft(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 3,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: Ft(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: a - 1,
    screenSM: a,
    screenSMMin: a,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Y("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Y("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Y("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
var $o = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const ea = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, Al = {
  motionBase: !0,
  motionUnit: !0
}, Pl = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, ta = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, i = $o(t, ["override"]);
  let a = Object.assign(Object.assign({}, r), {
    override: o
  });
  return a = Ji(a), i && Object.entries(i).forEach(([s, l]) => {
    const {
      theme: c
    } = l, u = $o(l, ["theme"]);
    let f = u;
    c && (f = ta(Object.assign(Object.assign({}, a), u), {
      override: u
    }, c)), a[s] = f;
  }), a;
};
function mn() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = te.useContext(Xi), i = `${Ol}-${t || ""}`, a = n || Ui, [s, l, c] = fc(a, [Ot, e], {
    salt: i,
    override: r,
    getComputedToken: ta,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Ji,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: ea,
      ignore: Al,
      preserve: Pl
    }
  });
  return [a, c, t ? l : "", s, o];
}
const Rl = (e, t = !1) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: t ? "inherit" : e.fontFamily
}), Il = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), jl = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Nl = (e, t, n, r) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, i = n ? `.${n}` : o, a = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return r !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [i]: Object.assign(Object.assign(Object.assign({}, s), a), {
      [o]: a
    })
  };
}, Ll = (e, t) => ({
  outline: `${pe(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), Hl = (e, t) => ({
  "&:focus-visible": Ll(e, t)
}), na = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Il()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Dl,
  genComponentStyleHook: zl
} = $l({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = we(ke);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = mn();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: r,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = we(ke);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = jl(e);
    return [r, {
      "&": r
    }, na((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : Lr)];
  },
  getCommonStyle: Nl,
  getCompUnitless: () => ea
}), Vl = (e, t) => {
  const [n, r] = mn();
  return Yn({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => na(e));
}, Fl = Object.assign({}, v), {
  useId: Oo
} = Fl, Bl = () => "", Wl = typeof Oo > "u" ? Bl : Oo;
function Gl(e, t, n) {
  var r, o;
  const i = vn("ConfigProvider"), a = e || {}, s = a.inherit === !1 || !t ? Object.assign(Object.assign({}, ur), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : ur.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, l = Wl();
  if (process.env.NODE_ENV !== "production") {
    const c = a.cssVar || s.cssVar, u = !!(typeof a.cssVar == "object" && (!((o = a.cssVar) === null || o === void 0) && o.key) || l);
    process.env.NODE_ENV !== "production" && i(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return ti(() => {
    var c, u;
    if (!e)
      return t;
    const f = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((b) => {
      f[b] = Object.assign(Object.assign({}, f[b]), e.components[b]);
    });
    const d = `css-var-${l.replace(/:/g, "")}`, g = ((c = a.cssVar) !== null && c !== void 0 ? c : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof a.cssVar == "object" ? a.cssVar : {}), {
      key: typeof a.cssVar == "object" && ((u = a.cssVar) === null || u === void 0 ? void 0 : u.key) || d
    });
    return Object.assign(Object.assign(Object.assign({}, s), a), {
      token: Object.assign(Object.assign({}, s.token), a.token),
      components: f,
      cssVar: g
    });
  }, [a, s], (c, u) => c.some((f, d) => {
    const g = u[d];
    return !Ls(f, g, !0);
  }));
}
var ql = ["children"], ra = /* @__PURE__ */ v.createContext({});
function Ul(e) {
  var t = e.children, n = it(e, ql);
  return /* @__PURE__ */ v.createElement(ra.Provider, {
    value: n
  }, t);
}
var Xl = /* @__PURE__ */ function(e) {
  ln(n, e);
  var t = un(n);
  function n() {
    return Te(this, n), t.apply(this, arguments);
  }
  return $e(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(v.Component);
function Kl(e) {
  var t = v.useReducer(function(s) {
    return s + 1;
  }, 0), n = N(t, 2), r = n[1], o = v.useRef(e), i = ut(function() {
    return o.current;
  }), a = ut(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, r();
  });
  return [i, a];
}
var je = "none", Bt = "appear", Wt = "enter", Gt = "leave", Mo = "none", ve = "prepare", et = "start", tt = "active", Dr = "end", oa = "prepared";
function Ao(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Yl(e, t) {
  var n = {
    animationend: Ao("Animation", "AnimationEnd"),
    transitionend: Ao("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Ql = Yl(Oe(), typeof window < "u" ? window : {}), ia = {};
if (Oe()) {
  var Zl = document.createElement("div");
  ia = Zl.style;
}
var qt = {};
function aa(e) {
  if (qt[e])
    return qt[e];
  var t = Ql[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in ia)
        return qt[e] = t[i], qt[e];
    }
  return "";
}
var sa = aa("animationend"), ca = aa("transitionend"), la = !!(sa && ca), Po = sa || "animationend", Ro = ca || "transitionend";
function Io(e, t) {
  if (!e) return null;
  if (V(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Jl = function(e) {
  var t = Ne();
  function n(o) {
    o && (o.removeEventListener(Ro, e), o.removeEventListener(Po, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(Ro, e), o.addEventListener(Po, e), t.current = o);
  }
  return v.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var ua = Oe() ? ds : rt;
const eu = function() {
  var e = v.useRef(null);
  function t() {
    De.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = De(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : n(r, o - 1);
    });
    e.current = i;
  }
  return v.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var tu = [ve, et, tt, Dr], nu = [ve, oa], fa = !1, ru = !0;
function da(e) {
  return e === tt || e === Dr;
}
const ou = function(e, t, n) {
  var r = At(Mo), o = N(r, 2), i = o[0], a = o[1], s = eu(), l = N(s, 2), c = l[0], u = l[1];
  function f() {
    a(ve, !0);
  }
  var d = t ? nu : tu;
  return ua(function() {
    if (i !== Mo && i !== Dr) {
      var g = d.indexOf(i), b = d[g + 1], p = n(i);
      p === fa ? a(b, !0) : b && c(function(h) {
        function x() {
          h.isCanceled() || a(b, !0);
        }
        p === !0 ? x() : Promise.resolve(p).then(x);
      });
    }
  }, [e, i]), v.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, i];
};
function iu(e, t, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, a = r.motionAppear, s = a === void 0 ? !0 : a, l = r.motionLeave, c = l === void 0 ? !0 : l, u = r.motionDeadline, f = r.motionLeaveImmediately, d = r.onAppearPrepare, g = r.onEnterPrepare, b = r.onLeavePrepare, p = r.onAppearStart, h = r.onEnterStart, x = r.onLeaveStart, S = r.onAppearActive, w = r.onEnterActive, _ = r.onLeaveActive, C = r.onAppearEnd, E = r.onEnterEnd, m = r.onLeaveEnd, y = r.onVisibleChanged, k = At(), A = N(k, 2), j = A[0], R = A[1], I = Kl(je), O = N(I, 2), P = O[0], L = O[1], H = At(null), F = N(H, 2), B = F[0], U = F[1], q = P(), G = Ne(!1), W = Ne(null);
  function Q() {
    return n();
  }
  var he = Ne(!1);
  function Me() {
    L(je), U(null, !0);
  }
  var se = ut(function(oe) {
    var Z = P();
    if (Z !== je) {
      var ue = Q();
      if (!(oe && !oe.deadline && oe.target !== ue)) {
        var Ke = he.current, Ye;
        Z === Bt && Ke ? Ye = C == null ? void 0 : C(ue, oe) : Z === Wt && Ke ? Ye = E == null ? void 0 : E(ue, oe) : Z === Gt && Ke && (Ye = m == null ? void 0 : m(ue, oe)), Ke && Ye !== !1 && Me();
      }
    }
  }), Ve = Jl(se), Ae = N(Ve, 1), Pe = Ae[0], Re = function(Z) {
    switch (Z) {
      case Bt:
        return $($($({}, ve, d), et, p), tt, S);
      case Wt:
        return $($($({}, ve, g), et, h), tt, w);
      case Gt:
        return $($($({}, ve, b), et, x), tt, _);
      default:
        return {};
    }
  }, ge = v.useMemo(function() {
    return Re(q);
  }, [q]), Ie = ou(q, !e, function(oe) {
    if (oe === ve) {
      var Z = ge[ve];
      return Z ? Z(Q()) : fa;
    }
    if (ae in ge) {
      var ue;
      U(((ue = ge[ae]) === null || ue === void 0 ? void 0 : ue.call(ge, Q(), null)) || null);
    }
    return ae === tt && q !== je && (Pe(Q()), u > 0 && (clearTimeout(W.current), W.current = setTimeout(function() {
      se({
        deadline: !0
      });
    }, u))), ae === oa && Me(), ru;
  }), M = N(Ie, 2), Fe = M[0], ae = M[1], Xe = da(ae);
  he.current = Xe;
  var It = Ne(null);
  ua(function() {
    if (!(G.current && It.current === t)) {
      R(t);
      var oe = G.current;
      G.current = !0;
      var Z;
      !oe && t && s && (Z = Bt), oe && t && i && (Z = Wt), (oe && !t && c || !oe && f && !t && c) && (Z = Gt);
      var ue = Re(Z);
      Z && (e || ue[ve]) ? (L(Z), Fe()) : L(je), It.current = t;
    }
  }, [t]), rt(function() {
    // Cancel appear
    (q === Bt && !s || // Cancel enter
    q === Wt && !i || // Cancel leave
    q === Gt && !c) && L(je);
  }, [s, i, c]), rt(function() {
    return function() {
      G.current = !1, clearTimeout(W.current);
    };
  }, []);
  var bt = v.useRef(!1);
  rt(function() {
    j && (bt.current = !0), j !== void 0 && q === je && ((bt.current || j) && (y == null || y(j)), bt.current = !0);
  }, [j, q]);
  var yt = B;
  return ge[ve] && ae === et && (yt = T({
    transition: "none"
  }, yt)), [q, ae, yt, j ?? t];
}
function au(e) {
  var t = e;
  V(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ v.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, l = o.removeOnLeave, c = l === void 0 ? !0 : l, u = o.forceRender, f = o.children, d = o.motionName, g = o.leavedClassName, b = o.eventProps, p = v.useContext(ra), h = p.motion, x = n(o, h), S = Ne(), w = Ne();
    function _() {
      try {
        return S.current instanceof HTMLElement ? S.current : ws(w.current);
      } catch {
        return null;
      }
    }
    var C = iu(x, s, _, o), E = N(C, 4), m = E[0], y = E[1], k = E[2], A = E[3], j = v.useRef(A);
    A && (j.current = !0);
    var R = v.useCallback(function(F) {
      S.current = F, ni(i, F);
    }, [i]), I, O = T(T({}, b), {}, {
      visible: s
    });
    if (!f)
      I = null;
    else if (m === je)
      A ? I = f(T({}, O), R) : !c && j.current && g ? I = f(T(T({}, O), {}, {
        className: g
      }), R) : u || !c && !g ? I = f(T(T({}, O), {}, {
        style: {
          display: "none"
        }
      }), R) : I = null;
    else {
      var P;
      y === ve ? P = "prepare" : da(y) ? P = "active" : y === et && (P = "start");
      var L = Io(d, "".concat(m, "-").concat(P));
      I = f(T(T({}, O), {}, {
        className: dt(Io(d, m), $($({}, L, L && P), d, typeof d == "string")),
        style: k
      }), R);
    }
    if (/* @__PURE__ */ v.isValidElement(I) && oi(I)) {
      var H = ai(I);
      H || (I = /* @__PURE__ */ v.cloneElement(I, {
        ref: R
      }));
    }
    return /* @__PURE__ */ v.createElement(Xl, {
      ref: w
    }, I);
  });
  return r.displayName = "CSSMotion", r;
}
const ha = au(la);
var dr = "add", hr = "keep", gr = "remove", jn = "removed";
function su(e) {
  var t;
  return e && V(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, T(T({}, t), {}, {
    key: String(t.key)
  });
}
function vr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(su);
}
function cu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, i = vr(e), a = vr(t);
  i.forEach(function(c) {
    for (var u = !1, f = r; f < o; f += 1) {
      var d = a[f];
      if (d.key === c.key) {
        r < f && (n = n.concat(a.slice(r, f).map(function(g) {
          return T(T({}, g), {}, {
            status: dr
          });
        })), r = f), n.push(T(T({}, d), {}, {
          status: hr
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(T(T({}, c), {}, {
      status: gr
    }));
  }), r < o && (n = n.concat(a.slice(r).map(function(c) {
    return T(T({}, c), {}, {
      status: dr
    });
  })));
  var s = {};
  n.forEach(function(c) {
    var u = c.key;
    s[u] = (s[u] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return l.forEach(function(c) {
    n = n.filter(function(u) {
      var f = u.key, d = u.status;
      return f !== c || d !== gr;
    }), n.forEach(function(u) {
      u.key === c && (u.status = hr);
    });
  }), n;
}
var lu = ["component", "children", "onVisibleChanged", "onAllRemoved"], uu = ["status"], fu = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function du(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ha, n = /* @__PURE__ */ function(r) {
    ln(i, r);
    var o = un(i);
    function i() {
      var a;
      Te(this, i);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return a = o.call.apply(o, [this].concat(l)), $(We(a), "state", {
        keyEntities: []
      }), $(We(a), "removeKey", function(u) {
        a.setState(function(f) {
          var d = f.keyEntities.map(function(g) {
            return g.key !== u ? g : T(T({}, g), {}, {
              status: jn
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var f = a.state.keyEntities, d = f.filter(function(g) {
            var b = g.status;
            return b !== jn;
          }).length;
          d === 0 && a.props.onAllRemoved && a.props.onAllRemoved();
        });
      }), a;
    }
    return $e(i, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, u = c.component, f = c.children, d = c.onVisibleChanged;
        c.onAllRemoved;
        var g = it(c, lu), b = u || v.Fragment, p = {};
        return fu.forEach(function(h) {
          p[h] = g[h], delete g[h];
        }), delete g.keys, /* @__PURE__ */ v.createElement(b, g, l.map(function(h, x) {
          var S = h.status, w = it(h, uu), _ = S === dr || S === hr;
          return /* @__PURE__ */ v.createElement(t, Ue({}, p, {
            key: w.key,
            visible: _,
            eventProps: w,
            onVisibleChanged: function(E) {
              d == null || d(E, {
                key: w.key
              }), E || s.removeKey(w.key);
            }
          }), function(C, E) {
            return f(T(T({}, C), {}, {
              index: x
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, u = l.keyEntities, f = vr(c), d = cu(u, f);
        return {
          keyEntities: d.filter(function(g) {
            var b = u.find(function(p) {
              var h = p.key;
              return g.key === h;
            });
            return !(b && b.status === jn && g.status === gr);
          })
        };
      }
    }]), i;
  }(v.Component);
  return $(n, "defaultProps", {
    component: "div"
  }), n;
}
du(la);
const pr = /* @__PURE__ */ v.createContext(!0);
process.env.NODE_ENV !== "production" && (pr.displayName = "MotionCacheContext");
function hu(e) {
  const t = v.useContext(pr), {
    children: n
  } = e, [, r] = mn(), {
    motion: o
  } = r, i = v.useRef(!1);
  return i.current || (i.current = t !== o), i.current ? /* @__PURE__ */ v.createElement(pr.Provider, {
    value: o
  }, /* @__PURE__ */ v.createElement(Ul, {
    motion: o
  }, n)) : n;
}
const ga = /* @__PURE__ */ v.memo(({
  dropdownMatchSelectWidth: e
}) => (vn("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (ga.displayName = "PropWarning");
const gu = process.env.NODE_ENV !== "production" ? ga : () => null;
var vu = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let mr = !1;
process.env.NODE_ENV;
const pu = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let va;
function mu() {
  return va || rn;
}
function bu(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const yu = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (va = t), r && bu(r) && (process.env.NODE_ENV !== "production" && gt(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), hl(mu(), r));
}, Su = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    form: a,
    locale: s,
    componentSize: l,
    direction: c,
    space: u,
    splitter: f,
    virtual: d,
    dropdownMatchSelectWidth: g,
    popupMatchSelectWidth: b,
    popupOverflow: p,
    legacyLocale: h,
    parentContext: x,
    iconPrefixCls: S,
    theme: w,
    componentDisabled: _,
    segmented: C,
    statistic: E,
    spin: m,
    calendar: y,
    carousel: k,
    cascader: A,
    collapse: j,
    typography: R,
    checkbox: I,
    descriptions: O,
    divider: P,
    drawer: L,
    skeleton: H,
    steps: F,
    image: B,
    layout: U,
    list: q,
    mentions: G,
    modal: W,
    progress: Q,
    result: he,
    slider: Me,
    breadcrumb: se,
    menu: Ve,
    pagination: Ae,
    input: Pe,
    textArea: Re,
    empty: ge,
    badge: Ie,
    radio: M,
    rate: Fe,
    switch: ae,
    transfer: Xe,
    avatar: It,
    message: bt,
    tag: yt,
    table: oe,
    card: Z,
    tabs: ue,
    timeline: Ke,
    timePicker: Ye,
    upload: Ha,
    notification: Da,
    tree: za,
    colorPicker: Va,
    datePicker: Fa,
    rangePicker: Ba,
    flex: Wa,
    wave: Ga,
    dropdown: qa,
    warning: Ua,
    tour: Xa,
    tooltip: Ka,
    popover: Ya,
    popconfirm: Qa,
    floatButton: Za,
    floatButtonGroup: Ja,
    variant: es,
    inputNumber: ts,
    treeSelect: ns
  } = e, Gr = v.useCallback((X, re) => {
    const {
      prefixCls: ye
    } = e;
    if (re)
      return re;
    const Se = ye || x.getPrefixCls("");
    return X ? `${Se}-${X}` : Se;
  }, [x.getPrefixCls, e.prefixCls]), jt = S || x.iconPrefixCls || Lr, Nt = n || x.csp;
  Vl(jt, Nt);
  const Lt = Gl(w, x.theme, {
    prefixCls: Gr("")
  });
  process.env.NODE_ENV !== "production" && (mr = mr || !!Lt);
  const xn = {
    csp: Nt,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: s || h,
    direction: c,
    space: u,
    splitter: f,
    virtual: d,
    popupMatchSelectWidth: b ?? g,
    popupOverflow: p,
    getPrefixCls: Gr,
    iconPrefixCls: jt,
    theme: Lt,
    segmented: C,
    statistic: E,
    spin: m,
    calendar: y,
    carousel: k,
    cascader: A,
    collapse: j,
    typography: R,
    checkbox: I,
    descriptions: O,
    divider: P,
    drawer: L,
    skeleton: H,
    steps: F,
    image: B,
    input: Pe,
    textArea: Re,
    layout: U,
    list: q,
    mentions: G,
    modal: W,
    progress: Q,
    result: he,
    slider: Me,
    breadcrumb: se,
    menu: Ve,
    pagination: Ae,
    empty: ge,
    badge: Ie,
    radio: M,
    rate: Fe,
    switch: ae,
    transfer: Xe,
    avatar: It,
    message: bt,
    tag: yt,
    table: oe,
    card: Z,
    tabs: ue,
    timeline: Ke,
    timePicker: Ye,
    upload: Ha,
    notification: Da,
    tree: za,
    colorPicker: Va,
    datePicker: Fa,
    rangePicker: Ba,
    flex: Wa,
    wave: Ga,
    dropdown: qa,
    warning: Ua,
    tour: Xa,
    tooltip: Ka,
    popover: Ya,
    popconfirm: Qa,
    floatButton: Za,
    floatButtonGroup: Ja,
    variant: es,
    inputNumber: ts,
    treeSelect: ns
  };
  process.env.NODE_ENV !== "production" && vn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Qe = Object.assign({}, x);
  Object.keys(xn).forEach((X) => {
    xn[X] !== void 0 && (Qe[X] = xn[X]);
  }), pu.forEach((X) => {
    const re = e[X];
    re && (Qe[X] = re);
  }), typeof r < "u" && (Qe.button = Object.assign({
    autoInsertSpace: r
  }, Qe.button));
  const Ze = ti(() => Qe, Qe, (X, re) => {
    const ye = Object.keys(X), Se = Object.keys(re);
    return ye.length !== Se.length || ye.some((Ht) => X[Ht] !== re[Ht]);
  }), {
    layer: qr
  } = v.useContext(Pt), rs = v.useMemo(() => ({
    prefixCls: jt,
    csp: Nt,
    layer: qr ? "antd" : void 0
  }), [jt, Nt, qr]);
  let ne = /* @__PURE__ */ v.createElement(v.Fragment, null, /* @__PURE__ */ v.createElement(gu, {
    dropdownMatchSelectWidth: g
  }), t);
  const Ur = v.useMemo(() => {
    var X, re, ye, Se;
    return Gc(((X = pn.Form) === null || X === void 0 ? void 0 : X.defaultValidateMessages) || {}, ((ye = (re = Ze.locale) === null || re === void 0 ? void 0 : re.Form) === null || ye === void 0 ? void 0 : ye.defaultValidateMessages) || {}, ((Se = Ze.form) === null || Se === void 0 ? void 0 : Se.validateMessages) || {}, (a == null ? void 0 : a.validateMessages) || {});
  }, [Ze, a == null ? void 0 : a.validateMessages]);
  Object.keys(Ur).length > 0 && (ne = /* @__PURE__ */ v.createElement(Uc.Provider, {
    value: Ur
  }, ne)), s && (ne = /* @__PURE__ */ v.createElement(Fi, {
    locale: s,
    _ANT_MARK__: Vi
  }, ne)), ne = /* @__PURE__ */ v.createElement(Nr.Provider, {
    value: rs
  }, ne), l && (ne = /* @__PURE__ */ v.createElement(vl, {
    size: l
  }, ne)), ne = /* @__PURE__ */ v.createElement(hu, null, ne);
  const os = v.useMemo(() => {
    const X = Lt || {}, {
      algorithm: re,
      token: ye,
      components: Se,
      cssVar: Ht
    } = X, is = vu(X, ["algorithm", "token", "components", "cssVar"]), Xr = re && (!Array.isArray(re) || re.length > 0) ? Gn(re) : Ui, En = {};
    Object.entries(Se || {}).forEach(([as, ss]) => {
      const xe = Object.assign({}, ss);
      "algorithm" in xe && (xe.algorithm === !0 ? xe.theme = Xr : (Array.isArray(xe.algorithm) || typeof xe.algorithm == "function") && (xe.theme = Gn(xe.algorithm)), delete xe.algorithm), En[as] = xe;
    });
    const Kr = Object.assign(Object.assign({}, Ot), ye);
    return Object.assign(Object.assign({}, is), {
      theme: Xr,
      token: Kr,
      components: En,
      override: Object.assign({
        override: Kr
      }, En),
      cssVar: Ht
    });
  }, [Lt]);
  return w && (ne = /* @__PURE__ */ v.createElement(Xi.Provider, {
    value: os
  }, ne)), Ze.warning && (ne = /* @__PURE__ */ v.createElement(Di.Provider, {
    value: Ze.warning
  }, ne)), _ !== void 0 && (ne = /* @__PURE__ */ v.createElement(gl, {
    disabled: _
  }, ne)), /* @__PURE__ */ v.createElement(ke.Provider, {
    value: Ze
  }, ne);
}, vt = (e) => {
  const t = v.useContext(ke), n = v.useContext(zi);
  return /* @__PURE__ */ v.createElement(Su, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
vt.ConfigContext = ke;
vt.SizeContext = lt;
vt.config = yu;
vt.useConfig = pl;
Object.defineProperty(vt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && gt(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), lt)
});
process.env.NODE_ENV !== "production" && (vt.displayName = "ConfigProvider");
function pa(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Cu(e) {
  return pa(e) instanceof ShadowRoot;
}
function xu(e) {
  return Cu(e) ? pa(e) : null;
}
function Eu(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function wu(e, t) {
  ze(e, "[@ant-design/icons] ".concat(t));
}
function jo(e) {
  return V(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (V(e.icon) === "object" || typeof e.icon == "function");
}
function No() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Eu(n)] = r;
    }
    return t;
  }, {});
}
function br(e, t, n) {
  return n ? /* @__PURE__ */ te.createElement(e.tag, T(T({
    key: t
  }, No(e.attrs)), n), (e.children || []).map(function(r, o) {
    return br(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ te.createElement(e.tag, T({
    key: t
  }, No(e.attrs)), (e.children || []).map(function(r, o) {
    return br(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function ma(e) {
  return Mt(e)[0];
}
function ba(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var _u = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, ku = function(t) {
  var n = we(Nr), r = n.csp, o = n.prefixCls, i = n.layer, a = _u;
  o && (a = a.replace(/anticon/g, o)), i && (a = "@layer ".concat(i, ` {
`).concat(a, `
}`)), rt(function() {
    var s = t.current, l = xu(s);
    Ge(a, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: l
    });
  }, []);
}, Tu = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], _t = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function $u(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  _t.primaryColor = t, _t.secondaryColor = n || ma(t), _t.calculated = !!n;
}
function Ou() {
  return T({}, _t);
}
var pt = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, i = t.style, a = t.primaryColor, s = t.secondaryColor, l = it(t, Tu), c = v.useRef(), u = _t;
  if (a && (u = {
    primaryColor: a,
    secondaryColor: s || ma(a)
  }), ku(c), wu(jo(n), "icon should be icon definiton, but got ".concat(n)), !jo(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = T(T({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), br(f.icon, "svg-".concat(f.name), T(T({
    className: r,
    onClick: o,
    style: i,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: c
  }));
};
pt.displayName = "IconReact";
pt.getTwoToneColors = Ou;
pt.setTwoToneColors = $u;
function ya(e) {
  var t = ba(e), n = N(t, 2), r = n[0], o = n[1];
  return pt.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function Mu() {
  var e = pt.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Au = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
ya(nn.primary);
var bn = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, i = e.rotate, a = e.tabIndex, s = e.onClick, l = e.twoToneColor, c = it(e, Au), u = v.useContext(Nr), f = u.prefixCls, d = f === void 0 ? "anticon" : f, g = u.rootClassName, b = dt(g, d, $($({}, "".concat(d, "-").concat(r.name), !!r.name), "".concat(d, "-spin"), !!o || r.name === "loading"), n), p = a;
  p === void 0 && s && (p = -1);
  var h = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, x = ba(l), S = N(x, 2), w = S[0], _ = S[1];
  return /* @__PURE__ */ v.createElement("span", Ue({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: p,
    onClick: s,
    className: b
  }), /* @__PURE__ */ v.createElement(pt, {
    icon: r,
    primaryColor: w,
    secondaryColor: _,
    style: h
  }));
});
bn.displayName = "AntdIcon";
bn.getTwoToneColor = Mu;
bn.setTwoToneColor = ya;
const Pu = (e, t, n) => /* @__PURE__ */ te.isValidElement(e) ? /* @__PURE__ */ te.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function Ru(e, t) {
  return Pu(e, e, t);
}
var Lo = {
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39
}, Iu = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, ju = function(t, n) {
  return /* @__PURE__ */ v.createElement(bn, Ue({}, t, {
    ref: n,
    icon: Iu
  }));
}, Sa = /* @__PURE__ */ v.forwardRef(ju);
process.env.NODE_ENV !== "production" && (Sa.displayName = "LoadingOutlined");
function Ca(e, t) {
  this.v = e, this.k = t;
}
function ie(e, t, n, r) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch {
    o = 0;
  }
  ie = function(a, s, l, c) {
    function u(f, d) {
      ie(a, f, function(g) {
        return this._invoke(f, d, g);
      });
    }
    s ? o ? o(a, s, {
      value: l,
      enumerable: !c,
      configurable: !c,
      writable: !c
    }) : a[s] = l : (u("next", 0), u("throw", 1), u("return", 2));
  }, ie(e, t, n, r);
}
function zr() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", o = n.toStringTag || "@@toStringTag";
  function i(g, b, p, h) {
    var x = b && b.prototype instanceof s ? b : s, S = Object.create(x.prototype);
    return ie(S, "_invoke", function(w, _, C) {
      var E, m, y, k = 0, A = C || [], j = !1, R = {
        p: 0,
        n: 0,
        v: e,
        a: I,
        f: I.bind(e, 4),
        d: function(P, L) {
          return E = P, m = 0, y = e, R.n = L, a;
        }
      };
      function I(O, P) {
        for (m = O, y = P, t = 0; !j && k && !L && t < A.length; t++) {
          var L, H = A[t], F = R.p, B = H[2];
          O > 3 ? (L = B === P) && (y = H[(m = H[4]) ? 5 : (m = 3, 3)], H[4] = H[5] = e) : H[0] <= F && ((L = O < 2 && F < H[1]) ? (m = 0, R.v = P, R.n = H[1]) : F < B && (L = O < 3 || H[0] > P || P > B) && (H[4] = O, H[5] = P, R.n = B, m = 0));
        }
        if (L || O > 1) return a;
        throw j = !0, P;
      }
      return function(O, P, L) {
        if (k > 1) throw TypeError("Generator is already running");
        for (j && P === 1 && I(P, L), m = P, y = L; (t = m < 2 ? e : y) || !j; ) {
          E || (m ? m < 3 ? (m > 1 && (R.n = -1), I(m, y)) : R.n = y : R.v = y);
          try {
            if (k = 2, E) {
              if (m || (O = "next"), t = E[O]) {
                if (!(t = t.call(E, y))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                y = t.value, m < 2 && (m = 0);
              } else m === 1 && (t = E.return) && t.call(E), m < 2 && (y = TypeError("The iterator does not provide a '" + O + "' method"), m = 1);
              E = e;
            } else if ((t = (j = R.n < 0) ? y : w.call(_, R)) !== a) break;
          } catch (H) {
            E = e, m = 1, y = H;
          } finally {
            k = 1;
          }
        }
        return {
          value: t,
          done: j
        };
      };
    }(g, p, h), !0), S;
  }
  var a = {};
  function s() {
  }
  function l() {
  }
  function c() {
  }
  t = Object.getPrototypeOf;
  var u = [][r] ? t(t([][r]())) : (ie(t = {}, r, function() {
    return this;
  }), t), f = c.prototype = s.prototype = Object.create(u);
  function d(g) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(g, c) : (g.__proto__ = c, ie(g, o, "GeneratorFunction")), g.prototype = Object.create(f), g;
  }
  return l.prototype = c, ie(f, "constructor", c), ie(c, "constructor", l), l.displayName = "GeneratorFunction", ie(c, o, "GeneratorFunction"), ie(f), ie(f, o, "Generator"), ie(f, r, function() {
    return this;
  }), ie(f, "toString", function() {
    return "[object Generator]";
  }), (zr = function() {
    return {
      w: i,
      m: d
    };
  })();
}
function an(e, t) {
  function n(o, i, a, s) {
    try {
      var l = e[o](i), c = l.value;
      return c instanceof Ca ? t.resolve(c.v).then(function(u) {
        n("next", u, a, s);
      }, function(u) {
        n("throw", u, a, s);
      }) : t.resolve(c).then(function(u) {
        l.value = u, a(l);
      }, function(u) {
        return n("throw", u, a, s);
      });
    } catch (u) {
      s(u);
    }
  }
  var r;
  this.next || (ie(an.prototype), ie(an.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), ie(this, "_invoke", function(o, i, a) {
    function s() {
      return new t(function(l, c) {
        n(o, a, l, c);
      });
    }
    return r = r ? r.then(s, s) : s();
  }, !0);
}
function xa(e, t, n, r, o) {
  return new an(zr().w(e, t, n, r), o || Promise);
}
function Nu(e, t, n, r, o) {
  var i = xa(e, t, n, r, o);
  return i.next().then(function(a) {
    return a.done ? a.value : i.next();
  });
}
function Lu(e) {
  var t = Object(e), n = [];
  for (var r in t) n.unshift(r);
  return function o() {
    for (; n.length; ) if ((r = n.pop()) in t) return o.value = r, o.done = !1, o;
    return o.done = !0, o;
  };
}
function Ho(e) {
  if (e != null) {
    var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], n = 0;
    if (t) return t.call(e);
    if (typeof e.next == "function") return e;
    if (!isNaN(e.length)) return {
      next: function() {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(V(e) + " is not iterable");
}
function ft() {
  var e = zr(), t = e.m(ft), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function r(a) {
    var s = typeof a == "function" && a.constructor;
    return !!s && (s === n || (s.displayName || s.name) === "GeneratorFunction");
  }
  var o = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function i(a) {
    var s, l;
    return function(c) {
      s || (s = {
        stop: function() {
          return l(c.a, 2);
        },
        catch: function() {
          return c.v;
        },
        abrupt: function(f, d) {
          return l(c.a, o[f], d);
        },
        delegateYield: function(f, d, g) {
          return s.resultName = d, l(c.d, Ho(f), g);
        },
        finish: function(f) {
          return l(c.f, f);
        }
      }, l = function(f, d, g) {
        c.p = s.prev, c.n = s.next;
        try {
          return f(d, g);
        } finally {
          s.next = c.n;
        }
      }), s.resultName && (s[s.resultName] = c.v, s.resultName = void 0), s.sent = c.v, s.next = c.n;
      try {
        return a.call(this, s);
      } finally {
        c.p = s.prev, c.n = s.next;
      }
    };
  }
  return (ft = function() {
    return {
      wrap: function(l, c, u, f) {
        return e.w(i(l), c, u, f && f.reverse());
      },
      isGeneratorFunction: r,
      mark: e.m,
      awrap: function(l, c) {
        return new Ca(l, c);
      },
      AsyncIterator: an,
      async: function(l, c, u, f, d) {
        return (r(c) ? xa : Nu)(i(l), c, u, f, d);
      },
      keys: Lu,
      values: Ho
    };
  })();
}
function Do(e, t, n, r, o, i, a) {
  try {
    var s = e[i](a), l = s.value;
  } catch (c) {
    return void n(c);
  }
  s.done ? t(l) : Promise.resolve(l).then(r, o);
}
function Ea(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var i = e.apply(t, n);
      function a(l) {
        Do(i, r, o, a, s, "next", l);
      }
      function s(l) {
        Do(i, r, o, a, s, "throw", l);
      }
      a(void 0);
    });
  };
}
var Rt = T({}, Yo), Hu = Rt.version, Nn = Rt.render, Du = Rt.unmountComponentAtNode, yn;
try {
  var zu = Number((Hu || "").split(".")[0]);
  zu >= 18 && (yn = Rt.createRoot);
} catch {
}
function zo(e) {
  var t = Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && V(t) === "object" && (t.usingClientEntryPoint = e);
}
var sn = "__rc_react_root__";
function Vu(e, t) {
  zo(!0);
  var n = t[sn] || yn(t);
  zo(!1), n.render(e), t[sn] = n;
}
function Fu(e, t) {
  Nn == null || Nn(e, t);
}
function Bu(e, t) {
  if (yn) {
    Vu(e, t);
    return;
  }
  Fu(e, t);
}
function Wu(e) {
  return yr.apply(this, arguments);
}
function yr() {
  return yr = Ea(/* @__PURE__ */ ft().mark(function e(t) {
    return ft().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[sn]) === null || o === void 0 || o.unmount(), delete t[sn];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), yr.apply(this, arguments);
}
function Gu(e) {
  Du(e);
}
function qu(e) {
  return Sr.apply(this, arguments);
}
function Sr() {
  return Sr = Ea(/* @__PURE__ */ ft().mark(function e(t) {
    return ft().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (yn === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", Wu(t));
        case 2:
          Gu(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), Sr.apply(this, arguments);
}
const Uu = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const n = Number.parseInt(v.version.split(".")[0], 10), r = Object.keys(Yo);
    process.env.NODE_ENV !== "production" && gt(n < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return Bu(e, t), () => qu(t);
};
let Xu = Uu;
function Ku(e) {
  return Xu;
}
const Yu = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), i = o.width, a = o.height;
      if (i || a)
        return !0;
    }
  }
  return !1;
}, Qu = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, Zu = zl("Wave", Qu), wa = `${rn}-wave-target`;
function Ju(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent" && e !== "canvastext";
}
function ef(e) {
  var t;
  const {
    borderTopColor: n,
    borderColor: r,
    backgroundColor: o
  } = getComputedStyle(e);
  return (t = [n, r, o].find(Ju)) !== null && t !== void 0 ? t : null;
}
function Ln(e) {
  return Number.isNaN(e) ? 0 : e;
}
const tf = (e) => {
  const {
    className: t,
    target: n,
    component: r,
    registerUnmount: o
  } = e, i = v.useRef(null), a = v.useRef(null);
  v.useEffect(() => {
    a.current = o();
  }, []);
  const [s, l] = v.useState(null), [c, u] = v.useState([]), [f, d] = v.useState(0), [g, b] = v.useState(0), [p, h] = v.useState(0), [x, S] = v.useState(0), [w, _] = v.useState(!1), C = {
    left: f,
    top: g,
    width: p,
    height: x,
    borderRadius: c.map((y) => `${y}px`).join(" ")
  };
  s && (C["--wave-color"] = s);
  function E() {
    const y = getComputedStyle(n);
    l(ef(n));
    const k = y.position === "static", {
      borderLeftWidth: A,
      borderTopWidth: j
    } = y;
    d(k ? n.offsetLeft : Ln(-Number.parseFloat(A))), b(k ? n.offsetTop : Ln(-Number.parseFloat(j))), h(n.offsetWidth), S(n.offsetHeight);
    const {
      borderTopLeftRadius: R,
      borderTopRightRadius: I,
      borderBottomLeftRadius: O,
      borderBottomRightRadius: P
    } = y;
    u([R, I, P, O].map((L) => Ln(Number.parseFloat(L))));
  }
  if (v.useEffect(() => {
    if (n) {
      const y = De(() => {
        E(), _(!0);
      });
      let k;
      return typeof ResizeObserver < "u" && (k = new ResizeObserver(E), k.observe(n)), () => {
        De.cancel(y), k == null || k.disconnect();
      };
    }
  }, [n]), !w)
    return null;
  const m = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains(wa));
  return /* @__PURE__ */ v.createElement(ha, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (y, k) => {
      var A, j;
      if (k.deadline || k.propertyName === "opacity") {
        const R = (A = i.current) === null || A === void 0 ? void 0 : A.parentElement;
        (j = a.current) === null || j === void 0 || j.call(a).then(() => {
          R == null || R.remove();
        });
      }
      return !1;
    }
  }, ({
    className: y
  }, k) => /* @__PURE__ */ v.createElement("div", {
    ref: ri(i, k),
    className: dt(t, y, {
      "wave-quick": m
    }),
    style: C
  }));
}, nf = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const i = Ku();
  let a = null;
  function s() {
    return a;
  }
  a = i(/* @__PURE__ */ v.createElement(tf, Object.assign({}, t, {
    target: e,
    registerUnmount: s
  })), o);
}, rf = (e, t, n) => {
  const {
    wave: r
  } = v.useContext(ke), [, o, i] = mn(), a = ut((c) => {
    const u = e.current;
    if (r != null && r.disabled || !u)
      return;
    const f = u.querySelector(`.${wa}`) || u, {
      showEffect: d
    } = r || {};
    (d || nf)(f, {
      className: t,
      token: o,
      component: n,
      event: c,
      hashId: i
    });
  }), s = v.useRef(null);
  return (c) => {
    De.cancel(s.current), s.current = De(() => {
      a(c);
    });
  };
}, _a = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: o
  } = we(ke), i = Ne(null), a = o("wave"), [, s] = Zu(a), l = rf(i, dt(a, s), r);
  if (te.useEffect(() => {
    const u = i.current;
    if (!u || u.nodeType !== window.Node.ELEMENT_NODE || n)
      return;
    const f = (d) => {
      !Yu(d.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") && !u.className.includes("disabled:") || u.getAttribute("aria-disabled") === "true" || u.className.includes("-leave") || l(d);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [n]), !/* @__PURE__ */ te.isValidElement(t))
    return t ?? null;
  const c = oi(t) ? ri(ai(t), i) : i;
  return Ru(t, {
    ref: c
  });
};
process.env.NODE_ENV !== "production" && (_a.displayName = "Wave");
const of = (e) => {
  const t = te.useContext(lt);
  return te.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
};
var af = ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"], ka = /* @__PURE__ */ v.forwardRef(function(e, t) {
  var n, r = e.prefixCls, o = r === void 0 ? "rc-switch" : r, i = e.className, a = e.checked, s = e.defaultChecked, l = e.disabled, c = e.loadingIcon, u = e.checkedChildren, f = e.unCheckedChildren, d = e.onClick, g = e.onChange, b = e.onKeyDown, p = it(e, af), h = Qi(!1, {
    value: a,
    defaultValue: s
  }), x = N(h, 2), S = x[0], w = x[1];
  function _(y, k) {
    var A = S;
    return l || (A = y, w(A), g == null || g(A, k)), A;
  }
  function C(y) {
    y.which === Lo.LEFT ? _(!1, y) : y.which === Lo.RIGHT && _(!0, y), b == null || b(y);
  }
  function E(y) {
    var k = _(!S, y);
    d == null || d(k, y);
  }
  var m = dt(o, i, (n = {}, $(n, "".concat(o, "-checked"), S), $(n, "".concat(o, "-disabled"), l), n));
  return /* @__PURE__ */ v.createElement("button", Ue({}, p, {
    type: "button",
    role: "switch",
    "aria-checked": S,
    disabled: l,
    className: m,
    ref: t,
    onKeyDown: C,
    onClick: E
  }), c, /* @__PURE__ */ v.createElement("span", {
    className: "".concat(o, "-inner")
  }, /* @__PURE__ */ v.createElement("span", {
    className: "".concat(o, "-inner-checked")
  }, u), /* @__PURE__ */ v.createElement("span", {
    className: "".concat(o, "-inner-unchecked")
  }, f)));
});
ka.displayName = "Switch";
const sf = (e) => {
  const {
    componentCls: t,
    trackHeightSM: n,
    trackPadding: r,
    trackMinWidthSM: o,
    innerMinMarginSM: i,
    innerMaxMarginSM: a,
    handleSizeSM: s,
    calc: l
  } = e, c = `${t}-inner`, u = pe(l(s).add(l(r).mul(2)).equal()), f = pe(l(a).mul(2).equal());
  return {
    [t]: {
      [`&${t}-small`]: {
        minWidth: o,
        height: n,
        lineHeight: pe(n),
        [`${t}-inner`]: {
          paddingInlineStart: a,
          paddingInlineEnd: i,
          [`${c}-checked, ${c}-unchecked`]: {
            minHeight: n
          },
          [`${c}-checked`]: {
            marginInlineStart: `calc(-100% + ${u} - ${f})`,
            marginInlineEnd: `calc(100% - ${u} + ${f})`
          },
          [`${c}-unchecked`]: {
            marginTop: l(n).mul(-1).equal(),
            marginInlineStart: 0,
            marginInlineEnd: 0
          }
        },
        [`${t}-handle`]: {
          width: s,
          height: s
        },
        [`${t}-loading-icon`]: {
          top: l(l(s).sub(e.switchLoadingIconSize)).div(2).equal(),
          fontSize: e.switchLoadingIconSize
        },
        [`&${t}-checked`]: {
          [`${t}-inner`]: {
            paddingInlineStart: i,
            paddingInlineEnd: a,
            [`${c}-checked`]: {
              marginInlineStart: 0,
              marginInlineEnd: 0
            },
            [`${c}-unchecked`]: {
              marginInlineStart: `calc(100% - ${u} + ${f})`,
              marginInlineEnd: `calc(-100% + ${u} - ${f})`
            }
          },
          [`${t}-handle`]: {
            insetInlineStart: `calc(100% - ${pe(l(s).add(r).equal())})`
          }
        },
        [`&:not(${t}-disabled):active`]: {
          [`&:not(${t}-checked) ${c}`]: {
            [`${c}-unchecked`]: {
              marginInlineStart: l(e.marginXXS).div(2).equal(),
              marginInlineEnd: l(e.marginXXS).mul(-1).div(2).equal()
            }
          },
          [`&${t}-checked ${c}`]: {
            [`${c}-checked`]: {
              marginInlineStart: l(e.marginXXS).mul(-1).div(2).equal(),
              marginInlineEnd: l(e.marginXXS).div(2).equal()
            }
          }
        }
      }
    }
  };
}, cf = (e) => {
  const {
    componentCls: t,
    handleSize: n,
    calc: r
  } = e;
  return {
    [t]: {
      [`${t}-loading-icon${e.iconCls}`]: {
        position: "relative",
        top: r(r(n).sub(e.fontSize)).div(2).equal(),
        color: e.switchLoadingIconColor,
        verticalAlign: "top"
      },
      [`&${t}-checked ${t}-loading-icon`]: {
        color: e.switchColor
      }
    }
  };
}, lf = (e) => {
  const {
    componentCls: t,
    trackPadding: n,
    handleBg: r,
    handleShadow: o,
    handleSize: i,
    calc: a
  } = e, s = `${t}-handle`;
  return {
    [t]: {
      [s]: {
        position: "absolute",
        top: n,
        insetInlineStart: n,
        width: i,
        height: i,
        transition: `all ${e.switchDuration} ease-in-out`,
        "&::before": {
          position: "absolute",
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          backgroundColor: r,
          borderRadius: a(i).div(2).equal(),
          boxShadow: o,
          transition: `all ${e.switchDuration} ease-in-out`,
          content: '""'
        }
      },
      [`&${t}-checked ${s}`]: {
        insetInlineStart: `calc(100% - ${pe(a(i).add(n).equal())})`
      },
      [`&:not(${t}-disabled):active`]: {
        [`${s}::before`]: {
          insetInlineEnd: e.switchHandleActiveInset,
          insetInlineStart: 0
        },
        [`&${t}-checked ${s}::before`]: {
          insetInlineEnd: 0,
          insetInlineStart: e.switchHandleActiveInset
        }
      }
    }
  };
}, uf = (e) => {
  const {
    componentCls: t,
    trackHeight: n,
    trackPadding: r,
    innerMinMargin: o,
    innerMaxMargin: i,
    handleSize: a,
    calc: s
  } = e, l = `${t}-inner`, c = pe(s(a).add(s(r).mul(2)).equal()), u = pe(s(i).mul(2).equal());
  return {
    [t]: {
      [l]: {
        display: "block",
        overflow: "hidden",
        borderRadius: 100,
        height: "100%",
        paddingInlineStart: i,
        paddingInlineEnd: o,
        transition: `padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,
        [`${l}-checked, ${l}-unchecked`]: {
          display: "block",
          color: e.colorTextLightSolid,
          fontSize: e.fontSizeSM,
          transition: `margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,
          pointerEvents: "none",
          minHeight: n
        },
        [`${l}-checked`]: {
          marginInlineStart: `calc(-100% + ${c} - ${u})`,
          marginInlineEnd: `calc(100% - ${c} + ${u})`
        },
        [`${l}-unchecked`]: {
          marginTop: s(n).mul(-1).equal(),
          marginInlineStart: 0,
          marginInlineEnd: 0
        }
      },
      [`&${t}-checked ${l}`]: {
        paddingInlineStart: o,
        paddingInlineEnd: i,
        [`${l}-checked`]: {
          marginInlineStart: 0,
          marginInlineEnd: 0
        },
        [`${l}-unchecked`]: {
          marginInlineStart: `calc(100% - ${c} + ${u})`,
          marginInlineEnd: `calc(-100% + ${c} - ${u})`
        }
      },
      [`&:not(${t}-disabled):active`]: {
        [`&:not(${t}-checked) ${l}`]: {
          [`${l}-unchecked`]: {
            marginInlineStart: s(r).mul(2).equal(),
            marginInlineEnd: s(r).mul(-1).mul(2).equal()
          }
        },
        [`&${t}-checked ${l}`]: {
          [`${l}-checked`]: {
            marginInlineStart: s(r).mul(-1).mul(2).equal(),
            marginInlineEnd: s(r).mul(2).equal()
          }
        }
      }
    }
  };
}, ff = (e) => {
  const {
    componentCls: t,
    trackHeight: n,
    trackMinWidth: r
  } = e;
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Rl(e)), {
      position: "relative",
      display: "inline-block",
      boxSizing: "border-box",
      minWidth: r,
      height: n,
      lineHeight: pe(n),
      verticalAlign: "middle",
      background: e.colorTextQuaternary,
      border: "0",
      borderRadius: 100,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid}`,
      userSelect: "none",
      [`&:hover:not(${t}-disabled)`]: {
        background: e.colorTextTertiary
      }
    }), Hl(e)), {
      [`&${t}-checked`]: {
        background: e.switchColor,
        [`&:hover:not(${t}-disabled)`]: {
          background: e.colorPrimaryHover
        }
      },
      [`&${t}-loading, &${t}-disabled`]: {
        cursor: "not-allowed",
        opacity: e.switchDisabledOpacity,
        "*": {
          boxShadow: "none",
          cursor: "not-allowed"
        }
      },
      // rtl style
      [`&${t}-rtl`]: {
        direction: "rtl"
      }
    })
  };
}, df = (e) => {
  const {
    fontSize: t,
    lineHeight: n,
    controlHeight: r,
    colorWhite: o
  } = e, i = t * n, a = r / 2, s = 2, l = i - s * 2, c = a - s * 2;
  return {
    trackHeight: i,
    trackHeightSM: a,
    trackMinWidth: l * 2 + s * 4,
    trackMinWidthSM: c * 2 + s * 2,
    trackPadding: s,
    // Fixed value
    handleBg: o,
    handleSize: l,
    handleSizeSM: c,
    handleShadow: `0 2px 4px 0 ${new Y("#00230b").setA(0.2).toRgbString()}`,
    innerMinMargin: l / 2,
    innerMaxMargin: l + s + s * 2,
    innerMinMarginSM: c / 2,
    innerMaxMarginSM: c + s + s * 2
  };
}, hf = Dl("Switch", (e) => {
  const t = Hr(e, {
    switchDuration: e.motionDurationMid,
    switchColor: e.colorPrimary,
    switchDisabledOpacity: e.opacityLoading,
    switchLoadingIconSize: e.calc(e.fontSizeIcon).mul(0.75).equal(),
    switchLoadingIconColor: `rgba(0, 0, 0, ${e.opacityLoading})`,
    switchHandleActiveInset: "-30%"
  });
  return [
    ff(t),
    // inner style
    uf(t),
    // handle style
    lf(t),
    // loading style
    cf(t),
    // small style
    sf(t)
  ];
}, df);
var gf = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const vf = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    prefixCls: n,
    size: r,
    disabled: o,
    loading: i,
    className: a,
    rootClassName: s,
    style: l,
    checked: c,
    value: u,
    defaultChecked: f,
    defaultValue: d,
    onChange: g
  } = e, b = gf(e, ["prefixCls", "size", "disabled", "loading", "className", "rootClassName", "style", "checked", "value", "defaultChecked", "defaultValue", "onChange"]), [p, h] = Qi(!1, {
    value: c ?? u,
    defaultValue: f ?? d
  }), {
    getPrefixCls: x,
    direction: S,
    switch: w
  } = v.useContext(ke), _ = v.useContext(on), C = (o ?? _) || i, E = x("switch", n), m = /* @__PURE__ */ v.createElement("div", {
    className: `${E}-handle`
  }, i && /* @__PURE__ */ v.createElement(Sa, {
    className: `${E}-loading-icon`
  })), [y, k, A] = hf(E), j = of(r), R = dt(w == null ? void 0 : w.className, {
    [`${E}-small`]: j === "small",
    [`${E}-loading`]: i,
    [`${E}-rtl`]: S === "rtl"
  }, a, s, k, A), I = Object.assign(Object.assign({}, w == null ? void 0 : w.style), l), O = (...P) => {
    h(P[0]), g == null || g.apply(void 0, P);
  };
  return y(/* @__PURE__ */ v.createElement(_a, {
    component: "Switch",
    disabled: C
  }, /* @__PURE__ */ v.createElement(ka, Object.assign({}, b, {
    checked: p,
    onChange: O,
    prefixCls: E,
    className: R,
    style: I,
    disabled: C,
    ref: t,
    loadingIcon: m
  }))));
}), Vr = vf;
Vr.__ANT_SWITCH = !0;
process.env.NODE_ENV !== "production" && (Vr.displayName = "Switch");
const Ta = /* @__PURE__ */ cn({});
function $a(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = $a(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function pf() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = $a(e)) && (r && (r += " "), r += t);
  return r;
}
const mf = {
  aliceblue: "9ehhb",
  antiquewhite: "9sgk7",
  aqua: "1ekf",
  aquamarine: "4zsno",
  azure: "9eiv3",
  beige: "9lhp8",
  bisque: "9zg04",
  black: "0",
  blanchedalmond: "9zhe5",
  blue: "73",
  blueviolet: "5e31e",
  brown: "6g016",
  burlywood: "8ouiv",
  cadetblue: "3qba8",
  chartreuse: "4zshs",
  chocolate: "87k0u",
  coral: "9yvyo",
  cornflowerblue: "3xael",
  cornsilk: "9zjz0",
  crimson: "8l4xo",
  cyan: "1ekf",
  darkblue: "3v",
  darkcyan: "rkb",
  darkgoldenrod: "776yz",
  darkgray: "6mbhl",
  darkgreen: "jr4",
  darkgrey: "6mbhl",
  darkkhaki: "7ehkb",
  darkmagenta: "5f91n",
  darkolivegreen: "3bzfz",
  darkorange: "9yygw",
  darkorchid: "5z6x8",
  darkred: "5f8xs",
  darksalmon: "9441m",
  darkseagreen: "5lwgf",
  darkslateblue: "2th1n",
  darkslategray: "1ugcv",
  darkslategrey: "1ugcv",
  darkturquoise: "14up",
  darkviolet: "5rw7n",
  deeppink: "9yavn",
  deepskyblue: "11xb",
  dimgray: "442g9",
  dimgrey: "442g9",
  dodgerblue: "16xof",
  firebrick: "6y7tu",
  floralwhite: "9zkds",
  forestgreen: "1cisi",
  fuchsia: "9y70f",
  gainsboro: "8m8kc",
  ghostwhite: "9pq0v",
  goldenrod: "8j4f4",
  gold: "9zda8",
  gray: "50i2o",
  green: "pa8",
  greenyellow: "6senj",
  grey: "50i2o",
  honeydew: "9eiuo",
  hotpink: "9yrp0",
  indianred: "80gnw",
  indigo: "2xcoy",
  ivory: "9zldc",
  khaki: "9edu4",
  lavenderblush: "9ziet",
  lavender: "90c8q",
  lawngreen: "4vk74",
  lemonchiffon: "9zkct",
  lightblue: "6s73a",
  lightcoral: "9dtog",
  lightcyan: "8s1rz",
  lightgoldenrodyellow: "9sjiq",
  lightgray: "89jo3",
  lightgreen: "5nkwg",
  lightgrey: "89jo3",
  lightpink: "9z6wx",
  lightsalmon: "9z2ii",
  lightseagreen: "19xgq",
  lightskyblue: "5arju",
  lightslategray: "4nwk9",
  lightslategrey: "4nwk9",
  lightsteelblue: "6wau6",
  lightyellow: "9zlcw",
  lime: "1edc",
  limegreen: "1zcxe",
  linen: "9shk6",
  magenta: "9y70f",
  maroon: "4zsow",
  mediumaquamarine: "40eju",
  mediumblue: "5p",
  mediumorchid: "79qkz",
  mediumpurple: "5r3rv",
  mediumseagreen: "2d9ip",
  mediumslateblue: "4tcku",
  mediumspringgreen: "1di2",
  mediumturquoise: "2uabw",
  mediumvioletred: "7rn9h",
  midnightblue: "z980",
  mintcream: "9ljp6",
  mistyrose: "9zg0x",
  moccasin: "9zfzp",
  navajowhite: "9zest",
  navy: "3k",
  oldlace: "9wq92",
  olive: "50hz4",
  olivedrab: "472ub",
  orange: "9z3eo",
  orangered: "9ykg0",
  orchid: "8iu3a",
  palegoldenrod: "9bl4a",
  palegreen: "5yw0o",
  paleturquoise: "6v4ku",
  palevioletred: "8k8lv",
  papayawhip: "9zi6t",
  peachpuff: "9ze0p",
  peru: "80oqn",
  pink: "9z8wb",
  plum: "8nba5",
  powderblue: "6wgdi",
  purple: "4zssg",
  rebeccapurple: "3zk49",
  red: "9y6tc",
  rosybrown: "7cv4f",
  royalblue: "2jvtt",
  saddlebrown: "5fmkz",
  salmon: "9rvci",
  sandybrown: "9jn1c",
  seagreen: "1tdnb",
  seashell: "9zje6",
  sienna: "6973h",
  silver: "7ir40",
  skyblue: "5arjf",
  slateblue: "45e4t",
  slategray: "4e100",
  slategrey: "4e100",
  snow: "9zke2",
  springgreen: "1egv",
  steelblue: "2r1kk",
  tan: "87yx8",
  teal: "pds",
  thistle: "8ggk8",
  tomato: "9yqfb",
  turquoise: "2j4r4",
  violet: "9b10u",
  wheat: "9ld4j",
  white: "9zldr",
  whitesmoke: "9lhpx",
  yellow: "9zl6o",
  yellowgreen: "61fzm"
}, ee = Math.round;
function Hn(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Vo = (e, t, n) => n === 0 ? e : e / 100;
function Et(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class nt {
  constructor(t) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    ce(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    ce(this, "r", 0);
    /**
     * Green, G in RGB
     */
    ce(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    ce(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    ce(this, "a", 1);
    // HSV privates
    ce(this, "_h");
    ce(this, "_s");
    ce(this, "_l");
    ce(this, "_v");
    // intermediate variables to calculate HSL/HSV
    ce(this, "_max");
    ce(this, "_min");
    ce(this, "_brightness");
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(r))
        this.fromHexString(r);
      else if (o("rgb"))
        this.fromRgbString(r);
      else if (o("hsl"))
        this.fromHslString(r);
      else if (o("hsv") || o("hsb"))
        this.fromHsvString(r);
      else {
        const i = mf[r.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (t instanceof nt)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = Et(t.r), this.g = Et(t.g), this.b = Et(t.b), this.a = typeof t.a == "number" ? Et(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(i) {
      const a = i / 255;
      return a <= 0.03928 ? a / 12.92 : Math.pow((a + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = ee(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, i = (s) => (r[s] - this[s]) * o + this[s], a = {
      r: ee(i("r")),
      g: ee(i("g")),
      b: ee(i("b")),
      a: ee(i("a") * 100) / 100
    };
    return this._c(a);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => ee((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: r
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const i = ee(this.a * 255).toString(16);
      t += i.length === 2 ? i : "0" + i;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), n = ee(this.getSaturation() * 100), r = ee(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = Et(n, r), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(o, i) {
      return parseInt(n[o] + n[i || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const d = ee(r * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let i = 0, a = 0, s = 0;
    const l = t / 60, c = (1 - Math.abs(2 * r - 1)) * n, u = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = c, a = u) : l >= 1 && l < 2 ? (i = u, a = c) : l >= 2 && l < 3 ? (a = c, s = u) : l >= 3 && l < 4 ? (a = u, s = c) : l >= 4 && l < 5 ? (i = u, s = c) : l >= 5 && l < 6 && (i = c, s = u);
    const f = r - c / 2;
    this.r = ee((i + f) * 255), this.g = ee((a + f) * 255), this.b = ee((s + f) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = ee(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const a = t / 60, s = Math.floor(a), l = a - s, c = ee(r * (1 - n) * 255), u = ee(r * (1 - n * l) * 255), f = ee(r * (1 - n * (1 - l)) * 255);
    switch (s) {
      case 0:
        this.g = f, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = f;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = f, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = Hn(t, Vo);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = Hn(t, Vo);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = Hn(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? ee(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
const Ut = 2, Fo = 0.16, bf = 0.05, yf = 0.05, Sf = 0.15, Oa = 5, Ma = 4, Cf = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function Bo(e, t, n) {
  let r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Ut * t : Math.round(e.h) + Ut * t : r = n ? Math.round(e.h) + Ut * t : Math.round(e.h) - Ut * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Wo(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let r;
  return n ? r = e.s - Fo * t : t === Ma ? r = e.s + Fo : r = e.s + bf * t, r > 1 && (r = 1), n && t === Oa && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Go(e, t, n) {
  let r;
  return n ? r = e.v + yf * t : r = e.v - Sf * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function xf(e, t = {}) {
  const n = [], r = new nt(e), o = r.toHsv();
  for (let i = Oa; i > 0; i -= 1) {
    const a = new nt({
      h: Bo(o, i, !0),
      s: Wo(o, i, !0),
      v: Go(o, i, !0)
    });
    n.push(a);
  }
  n.push(r);
  for (let i = 1; i <= Ma; i += 1) {
    const a = new nt({
      h: Bo(o, i),
      s: Wo(o, i),
      v: Go(o, i)
    });
    n.push(a);
  }
  return t.theme === "dark" ? Cf.map(({
    index: i,
    amount: a
  }) => new nt(t.backgroundColor || "#141414").mix(n[i], a).toHexString()) : n.map((i) => i.toHexString());
}
const Cr = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Cr.primary = Cr[5];
function Ef() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function wf(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  let n = t;
  for (; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
const qo = "data-rc-order", Uo = "data-rc-priority", _f = "rc-util-key", xr = /* @__PURE__ */ new Map();
function Aa({
  mark: e
} = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : _f;
}
function Fr(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function kf(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Br(e) {
  return Array.from((xr.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function Pa(e, t = {}) {
  if (!Ef())
    return null;
  const {
    csp: n,
    prepend: r,
    priority: o = 0
  } = t, i = kf(r), a = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(qo, i), a && o && s.setAttribute(Uo, `${o}`), n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce), s.innerHTML = e;
  const l = Fr(t), {
    firstChild: c
  } = l;
  if (r) {
    if (a) {
      const u = (t.styles || Br(l)).filter((f) => {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(qo)))
          return !1;
        const d = Number(f.getAttribute(Uo) || 0);
        return o >= d;
      });
      if (u.length)
        return l.insertBefore(s, u[u.length - 1].nextSibling), s;
    }
    l.insertBefore(s, c);
  } else
    l.appendChild(s);
  return s;
}
function Tf(e, t = {}) {
  let {
    styles: n
  } = t;
  return n || (n = Br(Fr(t))), n.find((r) => r.getAttribute(Aa(t)) === e);
}
function $f(e, t) {
  const n = xr.get(e);
  if (!n || !wf(document, n)) {
    const r = Pa("", t), {
      parentNode: o
    } = r;
    xr.set(e, o), e.removeChild(r);
  }
}
function Of(e, t, n = {}) {
  var l, c, u;
  const r = Fr(n), o = Br(r), i = {
    ...n,
    styles: o
  };
  $f(r, i);
  const a = Tf(t, i);
  if (a)
    return (l = i.csp) != null && l.nonce && a.nonce !== ((c = i.csp) == null ? void 0 : c.nonce) && (a.nonce = (u = i.csp) == null ? void 0 : u.nonce), a.innerHTML !== e && (a.innerHTML = e), a;
  const s = Pa(e, i);
  return s.setAttribute(Aa(i), t), s;
}
function Ra(e) {
  var t;
  return (t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e);
}
function Mf(e) {
  return Ra(e) instanceof ShadowRoot;
}
function Af(e) {
  return Mf(e) ? Ra(e) : null;
}
let Er = {};
const Wr = [], Pf = (e) => {
  Wr.push(e);
};
function Rf(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = Wr.reduce((r, o) => o(r ?? "", "warning"), t);
    n && console.error(`Warning: ${n}`);
  }
}
function If(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = Wr.reduce((r, o) => o(r ?? "", "note"), t);
    n && console.warn(`Note: ${n}`);
  }
}
function jf() {
  Er = {};
}
function Ia(e, t, n) {
  !t && !Er[n] && (e(!1, n), Er[n] = !0);
}
function Sn(e, t) {
  Ia(Rf, e, t);
}
function Nf(e, t) {
  Ia(If, e, t);
}
Sn.preMessage = Pf;
Sn.resetWarned = jf;
Sn.noteOnce = Nf;
function Lf(e) {
  return e.replace(/-(.)/g, (t, n) => n.toUpperCase());
}
function Hf(e, t) {
  Sn(e, `[@ant-design/icons] ${t}`);
}
function Xo(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Ko(e = {}) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Lf(n)] = r;
    }
    return t;
  }, {});
}
function wr(e, t, n) {
  return n ? /* @__PURE__ */ te.createElement(e.tag, {
    key: t,
    ...Ko(e.attrs),
    ...n
  }, (e.children || []).map((r, o) => wr(r, `${t}-${e.tag}-${o}`))) : /* @__PURE__ */ te.createElement(e.tag, {
    key: t,
    ...Ko(e.attrs)
  }, (e.children || []).map((r, o) => wr(r, `${t}-${e.tag}-${o}`)));
}
function ja(e) {
  return xf(e)[0];
}
function Na(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
const Df = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
  vertical-align: inherit;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, zf = (e) => {
  const {
    csp: t,
    prefixCls: n,
    layer: r
  } = we(Ta);
  let o = Df;
  n && (o = o.replace(/anticon/g, n)), r && (o = `@layer ${r} {
${o}
}`), rt(() => {
    const i = e.current, a = Af(i);
    Of(o, "@ant-design-icons", {
      prepend: !r,
      csp: t,
      attachTo: a
    });
  }, []);
}, kt = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Vf({
  primaryColor: e,
  secondaryColor: t
}) {
  kt.primaryColor = e, kt.secondaryColor = t || ja(e), kt.calculated = !!t;
}
function Ff() {
  return {
    ...kt
  };
}
const mt = (e) => {
  const {
    icon: t,
    className: n,
    onClick: r,
    style: o,
    primaryColor: i,
    secondaryColor: a,
    ...s
  } = e, l = v.useRef(null);
  let c = kt;
  if (i && (c = {
    primaryColor: i,
    secondaryColor: a || ja(i)
  }), zf(l), Hf(Xo(t), `icon should be icon definiton, but got ${t}`), !Xo(t))
    return null;
  let u = t;
  return u && typeof u.icon == "function" && (u = {
    ...u,
    icon: u.icon(c.primaryColor, c.secondaryColor)
  }), wr(u.icon, `svg-${u.name}`, {
    className: n,
    onClick: r,
    style: o,
    "data-icon": u.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...s,
    ref: l
  });
};
mt.displayName = "IconReact";
mt.getTwoToneColors = Ff;
mt.setTwoToneColors = Vf;
function La(e) {
  const [t, n] = Na(e);
  return mt.setTwoToneColors({
    primaryColor: t,
    secondaryColor: n
  });
}
function Bf() {
  const e = mt.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
function _r() {
  return _r = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _r.apply(this, arguments);
}
La(Cr.primary);
const Cn = /* @__PURE__ */ v.forwardRef((e, t) => {
  const {
    // affect outter <i>...</i>
    className: n,
    // affect inner <svg>...</svg>
    icon: r,
    spin: o,
    rotate: i,
    tabIndex: a,
    onClick: s,
    // other
    twoToneColor: l,
    ...c
  } = e, {
    prefixCls: u = "anticon",
    rootClassName: f
  } = v.useContext(Ta), d = pf(f, u, {
    [`${u}-${r.name}`]: !!r.name,
    [`${u}-spin`]: !!o || r.name === "loading"
  }, n);
  let g = a;
  g === void 0 && s && (g = -1);
  const b = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [p, h] = Na(l);
  return /* @__PURE__ */ v.createElement("span", _r({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: g,
    onClick: s,
    className: d
  }), /* @__PURE__ */ v.createElement(mt, {
    icon: r,
    primaryColor: p,
    secondaryColor: h,
    style: b
  }));
});
Cn.getTwoToneColor = Bf;
Cn.setTwoToneColor = La;
process.env.NODE_ENV !== "production" && (Cn.displayName = "AntdIcon");
var Wf = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M548 818v126a16 16 0 01-16 16h-40a16 16 0 01-16-16V818c15.85 1.64 27.84 2.46 36 2.46 8.15 0 20.16-.82 36-2.46m205.25-115.66l89.1 89.1a16 16 0 010 22.62l-28.29 28.29a16 16 0 01-22.62 0l-89.1-89.1c12.37-10.04 21.43-17.95 27.2-23.71 5.76-5.77 13.67-14.84 23.71-27.2m-482.5 0c10.04 12.36 17.95 21.43 23.71 27.2 5.77 5.76 14.84 13.67 27.2 23.71l-89.1 89.1a16 16 0 01-22.62 0l-28.29-28.29a16 16 0 010-22.63zM512 278c129.24 0 234 104.77 234 234S641.24 746 512 746 278 641.24 278 512s104.77-234 234-234m0 72c-89.47 0-162 72.53-162 162s72.53 162 162 162 162-72.53 162-162-72.53-162-162-162M206 476c-1.64 15.85-2.46 27.84-2.46 36 0 8.15.82 20.16 2.46 36H80a16 16 0 01-16-16v-40a16 16 0 0116-16zm738 0a16 16 0 0116 16v40a16 16 0 01-16 16H818c1.64-15.85 2.46-27.84 2.46-36 0-8.15-.82-20.16-2.46-36zM814.06 180.65l28.29 28.29a16 16 0 010 22.63l-89.1 89.09c-10.04-12.37-17.95-21.43-23.71-27.2-5.77-5.76-14.84-13.67-27.2-23.71l89.1-89.1a16 16 0 0122.62 0m-581.5 0l89.1 89.1c-12.37 10.04-21.43 17.95-27.2 23.71-5.76 5.77-13.67 14.84-23.71 27.2l-89.1-89.1a16 16 0 010-22.62l28.29-28.29a16 16 0 0122.62 0M532 64a16 16 0 0116 16v126c-15.85-1.64-27.84-2.46-36-2.46-8.15 0-20.16.82-36 2.46V80a16 16 0 0116-16z" } }] }, name: "sun", theme: "outlined" };
function kr() {
  return kr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, kr.apply(this, arguments);
}
const Gf = (e, t) => /* @__PURE__ */ v.createElement(Cn, kr({}, e, {
  ref: t,
  icon: Wf
})), Tr = /* @__PURE__ */ v.forwardRef(Gf);
process.env.NODE_ENV !== "production" && (Tr.displayName = "SunOutlined");
function qf(...e) {
  return e.filter(Boolean).join(" ");
}
function Uf(e, t) {
  return t ? { width: "100%" } : typeof e == "number" ? { width: `${e}px` } : typeof e == "string" ? { width: e } : { width: "auto" };
}
const Jf = ({
  className: e,
  style: t,
  checked: n,
  defaultChecked: r,
  onChange: o,
  disabled: i,
  width: a,
  fullWidth: s,
  checkedIcon: l,
  uncheckedIcon: c,
  onBg: u = "var(--rl-blue-a)",
  offBg: f = "var(--rl-gray-d)",
  disabledBg: d = "var(--rl-gray-soft)",
  ...g
}) => {
  const b = typeof n == "boolean", [p, h] = te.useState(r ?? !1), x = b ? n : p, S = (_, C) => {
    b || h(_), o == null || o(_, C);
  }, w = i ? d : x ? u : f;
  return /* @__PURE__ */ St(
    Vr,
    {
      ...g,
      checked: x,
      onChange: S,
      disabled: i,
      style: { ...Uf(a, s), backgroundColor: w, ...t || {} },
      className: qf(
        "rl-rounded-full rl-transition-colors rl-duration-150",
        s ? "rl-block rl-w-full" : "rl-inline-block rl-w-auto",
        e
      ),
      checkedChildren: /* @__PURE__ */ St("span", { className: "rl-text-white", children: l ?? /* @__PURE__ */ St(Tr, {}) }),
      unCheckedChildren: /* @__PURE__ */ St("span", { className: "rl-opacity-60 rl-text-white", children: c ?? /* @__PURE__ */ St(Tr, {}) })
    }
  );
};
export {
  Jf as Switch
};
//# sourceMappingURL=index.mjs.map
