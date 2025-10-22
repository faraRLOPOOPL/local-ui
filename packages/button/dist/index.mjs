import { jsx as ft, jsxs as Qa } from "react/jsx-runtime";
import * as _ from "react";
import R, { isValidElement as Za, version as Ja, useContext as He, createContext as ei, useRef as ne, useLayoutEffect as ti, useEffect as Te, forwardRef as Gt, useState as _r, useMemo as bt, Children as ri } from "react";
import * as Eo from "react-dom";
import Pn from "react-dom";
function ni(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var To = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var a = "", i = 0; i < arguments.length; i++) {
        var c = arguments[i];
        c && (a = o(a, n(c)));
      }
      return a;
    }
    function n(a) {
      if (typeof a == "string" || typeof a == "number")
        return a;
      if (typeof a != "object")
        return "";
      if (Array.isArray(a))
        return r.apply(null, a);
      if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
        return a.toString();
      var i = "";
      for (var c in a)
        t.call(a, c) && a[c] && (i = o(i, c));
      return i;
    }
    function o(a, i) {
      return i ? a ? a + " " + i : a + i : a;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(To);
var oi = To.exports;
const oe = /* @__PURE__ */ ni(oi);
function _e() {
  return _e = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _e.apply(null, arguments);
}
function G(e) {
  "@babel/helpers - typeof";
  return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, G(e);
}
var ai = Symbol.for("react.element"), ii = Symbol.for("react.transitional.element"), ci = Symbol.for("react.fragment");
function si(e) {
  return (
    // Base object type
    e && G(e) === "object" && // React Element type
    (e.$$typeof === ai || e.$$typeof === ii) && // React Fragment type
    e.type === ci
  );
}
var wr = {}, an = [], li = function(t) {
  an.push(t);
};
function cn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = an.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function ui(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = an.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function _o() {
  wr = {};
}
function wo(e, t, r) {
  !t && !wr[r] && (e(!1, r), wr[r] = !0);
}
function Xe(e, t) {
  wo(cn, e, t);
}
function fi(e, t) {
  wo(ui, e, t);
}
Xe.preMessage = li;
Xe.resetWarned = _o;
Xe.noteOnce = fi;
function di(e, t) {
  if (G(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (G(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Oo(e) {
  var t = di(e, "string");
  return G(t) == "symbol" ? t : t + "";
}
function M(e, t, r) {
  return (t = Oo(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function $n(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $n(Object(r), !0).forEach(function(n) {
      M(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $n(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function In(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function vi(e) {
  return e && G(e) === "object" && In(e.nativeElement) ? e.nativeElement : In(e) ? e : null;
}
function gi(e) {
  var t = vi(e);
  if (t)
    return t;
  if (e instanceof R.Component) {
    var r;
    return (r = Pn.findDOMNode) === null || r === void 0 ? void 0 : r.call(Pn, e);
  }
  return null;
}
var Or = { exports: {} }, k = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function hi() {
  if (Mn) return k;
  Mn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function h(v) {
    if (typeof v == "object" && v !== null) {
      var S = v.$$typeof;
      switch (S) {
        case e:
          switch (v = v.type, v) {
            case r:
            case o:
            case n:
            case l:
            case u:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case i:
                case s:
                case d:
                case f:
                case a:
                  return v;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return k.ContextConsumer = i, k.ContextProvider = a, k.Element = e, k.ForwardRef = s, k.Fragment = r, k.Lazy = d, k.Memo = f, k.Portal = t, k.Profiler = o, k.StrictMode = n, k.Suspense = l, k.SuspenseList = u, k.isAsyncMode = function() {
    return !1;
  }, k.isConcurrentMode = function() {
    return !1;
  }, k.isContextConsumer = function(v) {
    return h(v) === i;
  }, k.isContextProvider = function(v) {
    return h(v) === a;
  }, k.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, k.isForwardRef = function(v) {
    return h(v) === s;
  }, k.isFragment = function(v) {
    return h(v) === r;
  }, k.isLazy = function(v) {
    return h(v) === d;
  }, k.isMemo = function(v) {
    return h(v) === f;
  }, k.isPortal = function(v) {
    return h(v) === t;
  }, k.isProfiler = function(v) {
    return h(v) === o;
  }, k.isStrictMode = function(v) {
    return h(v) === n;
  }, k.isSuspense = function(v) {
    return h(v) === l;
  }, k.isSuspenseList = function(v) {
    return h(v) === u;
  }, k.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === o || v === n || v === l || v === u || v === g || typeof v == "object" && v !== null && (v.$$typeof === d || v.$$typeof === f || v.$$typeof === a || v.$$typeof === i || v.$$typeof === s || v.$$typeof === m || v.getModuleId !== void 0);
  }, k.typeOf = h, k;
}
var V = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function mi() {
  return Hn || (Hn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = !1, h = !1, v = !1, S = !1, x = !1, T;
    T = Symbol.for("react.module.reference");
    function C(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === o || x || A === n || A === l || A === u || S || A === g || m || h || v || typeof A == "object" && A !== null && (A.$$typeof === d || A.$$typeof === f || A.$$typeof === a || A.$$typeof === i || A.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === T || A.getModuleId !== void 0));
    }
    function p(A) {
      if (typeof A == "object" && A !== null) {
        var Ae = A.$$typeof;
        switch (Ae) {
          case e:
            var ae = A.type;
            switch (ae) {
              case r:
              case o:
              case n:
              case l:
              case u:
                return ae;
              default:
                var Fe = ae && ae.$$typeof;
                switch (Fe) {
                  case c:
                  case i:
                  case s:
                  case d:
                  case f:
                  case a:
                    return Fe;
                  default:
                    return Ae;
                }
            }
          case t:
            return Ae;
        }
      }
    }
    var E = i, b = a, y = e, P = s, H = r, N = d, w = f, j = t, $ = o, I = n, D = l, z = u, F = !1, B = !1;
    function U(A) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(A) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(A) {
      return p(A) === i;
    }
    function X(A) {
      return p(A) === a;
    }
    function ee(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function le(A) {
      return p(A) === s;
    }
    function W(A) {
      return p(A) === r;
    }
    function ce(A) {
      return p(A) === d;
    }
    function ze(A) {
      return p(A) === f;
    }
    function Oe(A) {
      return p(A) === t;
    }
    function Re(A) {
      return p(A) === o;
    }
    function se(A) {
      return p(A) === n;
    }
    function ge(A) {
      return p(A) === l;
    }
    function ue(A) {
      return p(A) === u;
    }
    V.ContextConsumer = E, V.ContextProvider = b, V.Element = y, V.ForwardRef = P, V.Fragment = H, V.Lazy = N, V.Memo = w, V.Portal = j, V.Profiler = $, V.StrictMode = I, V.Suspense = D, V.SuspenseList = z, V.isAsyncMode = U, V.isConcurrentMode = q, V.isContextConsumer = Y, V.isContextProvider = X, V.isElement = ee, V.isForwardRef = le, V.isFragment = W, V.isLazy = ce, V.isMemo = ze, V.isPortal = Oe, V.isProfiler = Re, V.isStrictMode = se, V.isSuspense = ge, V.isSuspenseList = ue, V.isValidElementType = C, V.typeOf = p;
  }()), V;
}
process.env.NODE_ENV === "production" ? Or.exports = hi() : Or.exports = mi();
var lr = Or.exports;
function pi(e, t, r) {
  var n = _.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var bi = Number(Ja.split(".")[0]), Ro = function(t, r) {
  typeof t == "function" ? t(r) : G(t) === "object" && t && "current" in t && (t.current = r);
}, sn = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    r.forEach(function(i) {
      Ro(i, a);
    });
  };
}, yi = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return pi(function() {
    return sn.apply(void 0, r);
  }, r, function(o, a) {
    return o.length !== a.length || o.every(function(i, c) {
      return i !== a[c];
    });
  });
}, Ao = function(t) {
  var r, n;
  if (!t)
    return !1;
  if (Po(t) && bi >= 19)
    return !0;
  var o = lr.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== lr.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== lr.ForwardRef);
};
function Po(e) {
  return /* @__PURE__ */ Za(e) && !si(e);
}
var $o = function(t) {
  if (t && Po(t)) {
    var r = t;
    return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
  }
  return null;
};
function be(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function jn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Oo(n.key), n);
  }
}
function ye(e, t, r) {
  return t && jn(e.prototype, t), r && jn(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Rr(e, t) {
  return Rr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Rr(e, t);
}
function xt(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Rr(e, t);
}
function Dt(e) {
  return Dt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Dt(e);
}
function Io() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Io = function() {
    return !!e;
  })();
}
function We(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Si(e, t) {
  if (t && (G(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return We(e);
}
function Et(e) {
  var t = Io();
  return function() {
    var r, n = Dt(e);
    if (t) {
      var o = Dt(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return Si(this, r);
  };
}
function Ar(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Ci(e) {
  if (Array.isArray(e)) return Ar(e);
}
function xi(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Mo(e, t) {
  if (e) {
    if (typeof e == "string") return Ar(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Ar(e, t) : void 0;
  }
}
function Ei() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function je(e) {
  return Ci(e) || xi(e) || Mo(e) || Ei();
}
var Ho = function(t) {
  return +setTimeout(t, 16);
}, jo = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Ho = function(t) {
  return window.requestAnimationFrame(t);
}, jo = function(t) {
  return window.cancelAnimationFrame(t);
});
var Nn = 0, Ut = /* @__PURE__ */ new Map();
function No(e) {
  Ut.delete(e);
}
var Ne = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Nn += 1;
  var n = Nn;
  function o(a) {
    if (a === 0)
      No(n), t();
    else {
      var i = Ho(function() {
        o(a - 1);
      });
      Ut.set(n, i);
    }
  }
  return o(r), n;
};
Ne.cancel = function(e) {
  var t = Ut.get(e);
  return No(e), jo(t);
};
process.env.NODE_ENV !== "production" && (Ne.ids = function() {
  return Ut;
});
function Ti(e) {
  if (Array.isArray(e)) return e;
}
function _i(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, c = [], s = !0, l = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        s = !1;
      } else for (; !(s = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); s = !0) ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!s && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw o;
      }
    }
    return c;
  }
}
function wi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L(e, t) {
  return Ti(e) || _i(e, t) || Mo(e, t) || wi();
}
function yt(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function De() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Oi(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Ln = "data-rc-order", Bn = "data-rc-priority", Ri = "rc-util-key", Pr = /* @__PURE__ */ new Map();
function Lo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Ri;
}
function Xt(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Ai(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ln(e) {
  return Array.from((Pr.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Bo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!De())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = Ai(n), c = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(Ln, i), c && a && s.setAttribute(Bn, "".concat(a)), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = e;
  var l = Xt(t), u = l.firstChild;
  if (n) {
    if (c) {
      var f = (t.styles || ln(l)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Ln)))
          return !1;
        var g = Number(d.getAttribute(Bn) || 0);
        return a >= g;
      });
      if (f.length)
        return l.insertBefore(s, f[f.length - 1].nextSibling), s;
    }
    l.insertBefore(s, u);
  } else
    l.appendChild(s);
  return s;
}
function Do(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Xt(t);
  return (t.styles || ln(r)).find(function(n) {
    return n.getAttribute(Lo(t)) === e;
  });
}
function zo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Do(e, t);
  if (r) {
    var n = Xt(t);
    n.removeChild(r);
  }
}
function Pi(e, t) {
  var r = Pr.get(e);
  if (!r || !Oi(document, r)) {
    var n = Bo("", t), o = n.parentNode;
    Pr.set(e, o), e.removeChild(n);
  }
}
function et(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Xt(r), o = ln(n), a = O(O({}, r), {}, {
    styles: o
  });
  Pi(n, a);
  var i = Do(t, a);
  if (i) {
    var c, s;
    if ((c = a.csp) !== null && c !== void 0 && c.nonce && i.nonce !== ((s = a.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var l;
      i.nonce = (l = a.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = Bo(e, a);
  return u.setAttribute(Lo(a), t), u;
}
function $i(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function nt(e, t) {
  if (e == null) return {};
  var r, n, o = $i(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
var Ii = "%";
function $r(e) {
  return e.join(Ii);
}
var Mi = /* @__PURE__ */ function() {
  function e(t) {
    be(this, e), M(this, "instanceId", void 0), M(this, "cache", /* @__PURE__ */ new Map()), M(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return ye(e, [{
    key: "get",
    value: function(r) {
      return this.opGet($r(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate($r(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), a = n(o);
      a === null ? this.cache.delete(r) : this.cache.set(r, a);
    }
  }]), e;
}(), ot = "data-token-hash", me = "data-css-hash", Hi = "data-cache-path", Ie = "__cssinjs_instance__";
function ji() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(me, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Ie] = o[Ie] || e, o[Ie] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(me, "]"))).forEach(function(o) {
      var a = o.getAttribute(me);
      if (n[a]) {
        if (o[Ie] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        n[a] = !0;
    });
  }
  return new Mi(e);
}
var Yt = /* @__PURE__ */ _.createContext({
  hashPriority: "low",
  cache: ji(),
  defaultCache: !0
});
function Ni(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var un = /* @__PURE__ */ function() {
  function e() {
    be(this, e), M(this, "cache", void 0), M(this, "keys", void 0), M(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return ye(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return r.forEach(function(c) {
        if (!i)
          i = void 0;
        else {
          var s;
          i = (s = i) === null || s === void 0 || (s = s.map) === null || s === void 0 ? void 0 : s.get(c);
        }
      }), (n = i) !== null && n !== void 0 && n.value && a && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var o = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var a = this.keys.reduce(function(l, u) {
            var f = L(l, 2), d = f[1];
            return o.internalGet(u)[1] < d ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = L(a, 1), c = i[0];
          this.delete(c);
        }
        this.keys.push(r);
      }
      var s = this.cache;
      r.forEach(function(l, u) {
        if (u === r.length - 1)
          s.set(l, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var f = s.get(l);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : s.set(l, {
            map: /* @__PURE__ */ new Map()
          }), s = s.get(l).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var o = r.get(n[0]);
      if (n.length === 1) {
        var a;
        return o.map ? r.set(n[0], {
          map: o.map
        }) : r.delete(n[0]), (a = o.value) === null || a === void 0 ? void 0 : a[0];
      }
      var i = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), i;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !Ni(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
M(un, "MAX_CACHE_SIZE", 20);
M(un, "MAX_CACHE_OFFSET", 5);
var Dn = 0, Fo = /* @__PURE__ */ function() {
  function e(t) {
    be(this, e), M(this, "derivatives", void 0), M(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Dn, t.length === 0 && cn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Dn += 1;
  }
  return ye(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), ur = new un();
function Li(e) {
  var t = Array.isArray(e) ? e : [e];
  return ur.has(t) || ur.set(t, new Fo(t)), ur.get(t);
}
var Bi = /* @__PURE__ */ new WeakMap(), fr = {};
function Di(e, t) {
  for (var r = Bi, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(fr) || r.set(fr, e()), r.get(fr);
}
var zn = /* @__PURE__ */ new WeakMap();
function mt(e) {
  var t = zn.get(e) || "";
  return t || (Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof Fo ? t += n.id : n && G(n) === "object" ? t += mt(n) : t += n;
  }), t = yt(t), zn.set(e, t)), t;
}
function Fn(e, t) {
  return yt("".concat(t, "_").concat(mt(e)));
}
var Ir = De();
function Ue(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function zt(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = O(O({}, n), {}, M(M({}, ot, t), me, r)), i = Object.keys(a).map(function(c) {
    var s = a[c];
    return s ? "".concat(c, '="').concat(s, '"') : null;
  }).filter(function(c) {
    return c;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Mt = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, zi = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = L(o, 2), i = a[0], c = a[1];
    return "".concat(i, ":").concat(c, ";");
  }).join(""), "}") : "";
}, ko = function(t, r, n) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var c, s, l = L(i, 2), u = l[0], f = l[1];
    if (n != null && (c = n.preserve) !== null && c !== void 0 && c[u])
      a[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (s = n.ignore) !== null && s !== void 0 && s[u])) {
      var d, g = Mt(u, n == null ? void 0 : n.prefix);
      o[g] = typeof f == "number" && !(n != null && (d = n.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), a[u] = "var(".concat(g, ")");
    }
  }), [a, zi(o, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, kn = process.env.NODE_ENV !== "test" && De() ? _.useLayoutEffect : _.useEffect, fn = function(t, r) {
  var n = _.useRef(!0);
  kn(function() {
    return t(n.current);
  }, r), kn(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Vn = function(t, r) {
  fn(function(n) {
    if (!n)
      return t();
  }, r);
}, Fi = O({}, _), Wn = Fi.useInsertionEffect, ki = function(t, r, n) {
  _.useMemo(t, n), fn(function() {
    return r(!0);
  }, n);
}, Vi = Wn ? function(e, t, r) {
  return Wn(function() {
    return e(), t();
  }, r);
} : ki, Wi = O({}, _), Gi = Wi.useInsertionEffect, Ui = function(t) {
  var r = [], n = !1;
  function o(a) {
    if (n) {
      process.env.NODE_ENV !== "production" && cn(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(a);
  }
  return _.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, Xi = function() {
  return function(t) {
    t();
  };
}, Yi = typeof Gi < "u" ? Ui : Xi;
function qi() {
  return !1;
}
var Mr = !1;
function Ki() {
  return Mr;
}
const Qi = process.env.NODE_ENV === "production" ? qi : Ki;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var _t = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (_t && typeof _t.webpackHotUpdate == "function") {
    var Zi = _t.webpackHotUpdate;
    _t.webpackHotUpdate = function() {
      return Mr = !0, setTimeout(function() {
        Mr = !1;
      }, 0), Zi.apply(void 0, arguments);
    };
  }
}
function dn(e, t, r, n, o) {
  var a = _.useContext(Yt), i = a.cache, c = [e].concat(je(t)), s = $r(c), l = Yi([s]), u = Qi(), f = function(h) {
    i.opUpdate(s, function(v) {
      var S = v || [void 0, void 0], x = L(S, 2), T = x[0], C = T === void 0 ? 0 : T, p = x[1], E = p;
      process.env.NODE_ENV !== "production" && p && u && (n == null || n(E, u), E = null);
      var b = E || r(), y = [C, b];
      return h ? h(y) : y;
    });
  };
  _.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [s]
    /* eslint-enable */
  );
  var d = i.opGet(s);
  process.env.NODE_ENV !== "production" && !d && (f(), d = i.opGet(s));
  var g = d[1];
  return Vi(function() {
    o == null || o(g);
  }, function(m) {
    return f(function(h) {
      var v = L(h, 2), S = v[0], x = v[1];
      return m && S === 0 && (o == null || o(g)), [S + 1, x];
    }), function() {
      i.opUpdate(s, function(h) {
        var v = h || [], S = L(v, 2), x = S[0], T = x === void 0 ? 0 : x, C = S[1], p = T - 1;
        return p === 0 ? (l(function() {
          (m || !i.opGet(s)) && (n == null || n(C, !1));
        }), null) : [T - 1, C];
      });
    };
  }, [s]), g;
}
var Ji = {}, ec = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Ve = /* @__PURE__ */ new Map();
function tc(e) {
  Ve.set(e, (Ve.get(e) || 0) + 1);
}
function rc(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(ot, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Ie] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var nc = 0;
function oc(e, t) {
  Ve.set(e, (Ve.get(e) || 0) - 1);
  var r = /* @__PURE__ */ new Set();
  Ve.forEach(function(n, o) {
    n <= 0 && r.add(o);
  }), Ve.size - r.size > nc && r.forEach(function(n) {
    rc(n, t), Ve.delete(n);
  });
}
var ac = function(t, r, n, o) {
  var a = n.getDerivativeToken(t), i = O(O({}, a), r);
  return o && (i = o(i)), i;
}, Vo = "token";
function ic(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = He(Yt), o = n.cache.instanceId, a = n.container, i = r.salt, c = i === void 0 ? "" : i, s = r.override, l = s === void 0 ? Ji : s, u = r.formatToken, f = r.getComputedToken, d = r.cssVar, g = Di(function() {
    return Object.assign.apply(Object, [{}].concat(je(t)));
  }, t), m = mt(g), h = mt(l), v = d ? mt(d) : "", S = dn(Vo, [c, e.id, m, h, v], function() {
    var x, T = f ? f(g, l, e) : ac(g, l, e, u), C = O({}, T), p = "";
    if (d) {
      var E = ko(T, d.key, {
        prefix: d.prefix,
        ignore: d.ignore,
        unitless: d.unitless,
        preserve: d.preserve
      }), b = L(E, 2);
      T = b[0], p = b[1];
    }
    var y = Fn(T, c);
    T._tokenKey = y, C._tokenKey = Fn(C, c);
    var P = (x = d == null ? void 0 : d.key) !== null && x !== void 0 ? x : y;
    T._themeKey = P, tc(P);
    var H = "".concat(ec, "-").concat(yt(y));
    return T._hashId = H, [T, H, C, p, (d == null ? void 0 : d.key) || ""];
  }, function(x) {
    oc(x[0]._themeKey, o);
  }, function(x) {
    var T = L(x, 4), C = T[0], p = T[3];
    if (d && p) {
      var E = et(p, yt("css-variables-".concat(C._themeKey)), {
        mark: me,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      E[Ie] = o, E.setAttribute(ot, C._themeKey);
    }
  });
  return S;
}
var cc = function(t, r, n) {
  var o = L(t, 5), a = o[2], i = o[3], c = o[4], s = n || {}, l = s.plain;
  if (!i)
    return null;
  var u = a._tokenKey, f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, g = zt(i, c, u, d, l);
  return [f, u, g];
}, sc = {
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
}, Wo = "comm", Go = "rule", Uo = "decl", lc = "@import", uc = "@namespace", fc = "@keyframes", dc = "@layer", Xo = Math.abs, vn = String.fromCharCode;
function Yo(e) {
  return e.trim();
}
function Ht(e, t, r) {
  return e.replace(t, r);
}
function vc(e, t, r) {
  return e.indexOf(t, r);
}
function tt(e, t) {
  return e.charCodeAt(t) | 0;
}
function at(e, t, r) {
  return e.slice(t, r);
}
function Se(e) {
  return e.length;
}
function gc(e) {
  return e.length;
}
function wt(e, t) {
  return t.push(e), e;
}
var qt = 1, it = 1, qo = 0, ve = 0, K = 0, st = "";
function gn(e, t, r, n, o, a, i, c) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: qt, column: it, length: i, return: "", siblings: c };
}
function hc() {
  return K;
}
function mc() {
  return K = ve > 0 ? tt(st, --ve) : 0, it--, K === 10 && (it = 1, qt--), K;
}
function pe() {
  return K = ve < qo ? tt(st, ve++) : 0, it++, K === 10 && (it = 1, qt++), K;
}
function Me() {
  return tt(st, ve);
}
function jt() {
  return ve;
}
function Kt(e, t) {
  return at(st, e, t);
}
function St(e) {
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
function pc(e) {
  return qt = it = 1, qo = Se(st = e), ve = 0, [];
}
function bc(e) {
  return st = "", e;
}
function dr(e) {
  return Yo(Kt(ve - 1, Hr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function yc(e) {
  for (; (K = Me()) && K < 33; )
    pe();
  return St(e) > 2 || St(K) > 3 ? "" : " ";
}
function Sc(e, t) {
  for (; --t && pe() && !(K < 48 || K > 102 || K > 57 && K < 65 || K > 70 && K < 97); )
    ;
  return Kt(e, jt() + (t < 6 && Me() == 32 && pe() == 32));
}
function Hr(e) {
  for (; pe(); )
    switch (K) {
      case e:
        return ve;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Hr(K);
        break;
      case 40:
        e === 41 && Hr(e);
        break;
      case 92:
        pe();
        break;
    }
  return ve;
}
function Cc(e, t) {
  for (; pe() && e + K !== 57; )
    if (e + K === 84 && Me() === 47)
      break;
  return "/*" + Kt(t, ve - 1) + "*" + vn(e === 47 ? e : pe());
}
function xc(e) {
  for (; !St(Me()); )
    pe();
  return Kt(e, ve);
}
function Ec(e) {
  return bc(Nt("", null, null, null, [""], e = pc(e), 0, [0], e));
}
function Nt(e, t, r, n, o, a, i, c, s) {
  for (var l = 0, u = 0, f = i, d = 0, g = 0, m = 0, h = 1, v = 1, S = 1, x = 0, T = "", C = o, p = a, E = n, b = T; v; )
    switch (m = x, x = pe()) {
      case 40:
        if (m != 108 && tt(b, f - 1) == 58) {
          vc(b += Ht(dr(x), "&", "&\f"), "&\f", Xo(l ? c[l - 1] : 0)) != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        b += dr(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        b += yc(m);
        break;
      case 92:
        b += Sc(jt() - 1, 7);
        continue;
      case 47:
        switch (Me()) {
          case 42:
          case 47:
            wt(Tc(Cc(pe(), jt()), t, r, s), s), (St(m || 1) == 5 || St(Me() || 1) == 5) && Se(b) && at(b, -1, void 0) !== " " && (b += " ");
            break;
          default:
            b += "/";
        }
        break;
      case 123 * h:
        c[l++] = Se(b) * S;
      case 125 * h:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            v = 0;
          case 59 + u:
            S == -1 && (b = Ht(b, /\f/g, "")), g > 0 && (Se(b) - f || h === 0 && m === 47) && wt(g > 32 ? Un(b + ";", n, r, f - 1, s) : Un(Ht(b, " ", "") + ";", n, r, f - 2, s), s);
            break;
          case 59:
            b += ";";
          default:
            if (wt(E = Gn(b, t, r, l, u, o, c, T, C = [], p = [], f, a), a), x === 123)
              if (u === 0)
                Nt(b, t, E, E, C, a, f, c, p);
              else {
                switch (d) {
                  case 99:
                    if (tt(b, 3) === 110) break;
                  case 108:
                    if (tt(b, 2) === 97) break;
                  default:
                    u = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Nt(e, E, E, n && wt(Gn(e, E, E, 0, 0, o, c, T, o, C = [], f, p), p), o, p, f, c, n ? C : p) : Nt(b, E, E, E, [""], p, 0, c, p);
              }
        }
        l = u = g = 0, h = S = 1, T = b = "", f = i;
        break;
      case 58:
        f = 1 + Se(b), g = m;
      default:
        if (h < 1) {
          if (x == 123)
            --h;
          else if (x == 125 && h++ == 0 && mc() == 125)
            continue;
        }
        switch (b += vn(x), x * h) {
          case 38:
            S = u > 0 ? 1 : (b += "\f", -1);
            break;
          case 44:
            c[l++] = (Se(b) - 1) * S, S = 1;
            break;
          case 64:
            Me() === 45 && (b += dr(pe())), d = Me(), u = f = Se(T = b += xc(jt())), x++;
            break;
          case 45:
            m === 45 && Se(b) == 2 && (h = 0);
        }
    }
  return a;
}
function Gn(e, t, r, n, o, a, i, c, s, l, u, f) {
  for (var d = o - 1, g = o === 0 ? a : [""], m = gc(g), h = 0, v = 0, S = 0; h < n; ++h)
    for (var x = 0, T = at(e, d + 1, d = Xo(v = i[h])), C = e; x < m; ++x)
      (C = Yo(v > 0 ? g[x] + " " + T : Ht(T, /&\f/g, g[x]))) && (s[S++] = C);
  return gn(e, t, r, o === 0 ? Go : c, s, l, u, f);
}
function Tc(e, t, r, n) {
  return gn(e, t, r, Wo, vn(hc()), at(e, 2, -2), 0, n);
}
function Un(e, t, r, n, o) {
  return gn(e, t, r, Uo, at(e, 0, n), at(e, n + 1, -1), n, o);
}
function jr(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function _c(e, t, r, n) {
  switch (e.type) {
    case dc:
      if (e.children.length) break;
    case lc:
    case uc:
    case Uo:
      return e.return = e.return || e.value;
    case Wo:
      return "";
    case fc:
      return e.return = e.value + "{" + jr(e.children, n) + "}";
    case Go:
      if (!Se(e.value = e.props.join(","))) return "";
  }
  return Se(r = jr(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ko(e, t) {
  var r = t.path, n = t.parentSelectors;
  Xe(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var wc = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || a.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Ko("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Oc = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Ko("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Xn = "data-ant-cssinjs-cache-path", Qo = "_FILE_STYLE__", Ge, Zo = !0;
function Rc() {
  if (!Ge && (Ge = {}, De())) {
    var e = document.createElement("div");
    e.className = Xn, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = L(a, 2), c = i[0], s = i[1];
      Ge[c] = s;
    });
    var r = document.querySelector("style[".concat(Xn, "]"));
    if (r) {
      var n;
      Zo = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Ac(e) {
  return Rc(), !!Ge[e];
}
function Pc(e) {
  var t = Ge[e], r = null;
  if (t && De())
    if (Zo)
      r = Qo;
    else {
      var n = document.querySelector("style[".concat(me, '="').concat(Ge[e], '"]'));
      n ? r = n.innerHTML : delete Ge[e];
    }
  return [r, t];
}
var Jo = "_skip_check_", ea = "_multi_value_";
function Lt(e) {
  var t = jr(Ec(e), _c);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function $c(e) {
  return G(e) === "object" && e && (Jo in e || ea in e);
}
function Yn(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, a = e.split(",").map(function(i) {
    var c, s = i.trim().split(/\s+/), l = s[0] || "", u = ((c = l.match(/^\w+/)) === null || c === void 0 ? void 0 : c[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(je(s.slice(1))).join(" ");
  });
  return a.join(",");
}
var Ic = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, a = n.injectHash, i = n.parentSelectors, c = r.hashId, s = r.layer, l = r.path, u = r.hashPriority, f = r.transformers, d = f === void 0 ? [] : f, g = r.linters, m = g === void 0 ? [] : g, h = "", v = {};
  function S(C) {
    var p = C.getName(c);
    if (!v[p]) {
      var E = e(C.style, r, {
        root: !1,
        parentSelectors: i
      }), b = L(E, 1), y = b[0];
      v[p] = "@keyframes ".concat(C.getName(c)).concat(y);
    }
  }
  function x(C) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return C.forEach(function(E) {
      Array.isArray(E) ? x(E, p) : E && p.push(E);
    }), p;
  }
  var T = x(Array.isArray(t) ? t : [t]);
  return T.forEach(function(C) {
    var p = typeof C == "string" && !o ? {} : C;
    if (typeof p == "string")
      h += "".concat(p, `
`);
    else if (p._keyframe)
      S(p);
    else {
      var E = d.reduce(function(b, y) {
        var P;
        return (y == null || (P = y.visit) === null || P === void 0 ? void 0 : P.call(y, b)) || b;
      }, p);
      Object.keys(E).forEach(function(b) {
        var y = E[b];
        if (G(y) === "object" && y && (b !== "animationName" || !y._keyframe) && !$c(y)) {
          var P = !1, H = b.trim(), N = !1;
          (o || a) && c ? H.startsWith("@") ? P = !0 : H === "&" ? H = Yn("", c, u) : H = Yn(b, c, u) : o && !c && (H === "&" || H === "") && (H = "", N = !0);
          var w = e(y, r, {
            root: N,
            injectHash: P,
            parentSelectors: [].concat(je(i), [H])
          }), j = L(w, 2), $ = j[0], I = j[1];
          v = O(O({}, v), I), h += "".concat(H).concat($);
        } else {
          let F = function(B, U) {
            process.env.NODE_ENV !== "production" && (G(y) !== "object" || !(y != null && y[Jo])) && [wc, Oc].concat(je(m)).forEach(function(X) {
              return X(B, U, {
                path: l,
                hashId: c,
                parentSelectors: i
              });
            });
            var q = B.replace(/[A-Z]/g, function(X) {
              return "-".concat(X.toLowerCase());
            }), Y = U;
            !sc[B] && typeof Y == "number" && Y !== 0 && (Y = "".concat(Y, "px")), B === "animationName" && U !== null && U !== void 0 && U._keyframe && (S(U), Y = U.getName(c)), h += "".concat(q, ":").concat(Y, ";");
          };
          var D, z = (D = y == null ? void 0 : y.value) !== null && D !== void 0 ? D : y;
          G(y) === "object" && y !== null && y !== void 0 && y[ea] && Array.isArray(z) ? z.forEach(function(B) {
            F(b, B);
          }) : F(b, z);
        }
      });
    }
  }), o ? s && (h && (h = "@layer ".concat(s.name, " {").concat(h, "}")), s.dependencies && (v["@layer ".concat(s.name)] = s.dependencies.map(function(C) {
    return "@layer ".concat(C, ", ").concat(s.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, v];
};
function ta(e, t) {
  return yt("".concat(e.join("%")).concat(t));
}
function Mc() {
  return null;
}
var ra = "style";
function qn(e, t) {
  var r = e.token, n = e.path, o = e.hashId, a = e.layer, i = e.nonce, c = e.clientOnly, s = e.order, l = s === void 0 ? 0 : s, u = _.useContext(Yt), f = u.autoClear, d = u.mock, g = u.defaultCache, m = u.hashPriority, h = u.container, v = u.ssrInline, S = u.transformers, x = u.linters, T = u.cache, C = u.layer, p = r._tokenKey, E = [p];
  C && E.push("layer"), E.push.apply(E, je(n));
  var b = Ir;
  process.env.NODE_ENV !== "production" && d !== void 0 && (b = d === "client");
  var y = dn(
    ra,
    E,
    // Create cache if needed
    function() {
      var j = E.join("|");
      if (Ac(j)) {
        var $ = Pc(j), I = L($, 2), D = I[0], z = I[1];
        if (D)
          return [D, p, z, {}, c, l];
      }
      var F = t(), B = Ic(F, {
        hashId: o,
        hashPriority: m,
        layer: C ? a : void 0,
        path: n.join("-"),
        transformers: S,
        linters: x
      }), U = L(B, 2), q = U[0], Y = U[1], X = Lt(q), ee = ta(E, X);
      return [X, p, ee, Y, c, l];
    },
    // Remove cache if no need
    function(j, $) {
      var I = L(j, 3), D = I[2];
      ($ || f) && Ir && zo(D, {
        mark: me,
        attachTo: h
      });
    },
    // Effect: Inject style here
    function(j) {
      var $ = L(j, 4), I = $[0];
      $[1];
      var D = $[2], z = $[3];
      if (b && I !== Qo) {
        var F = {
          mark: me,
          prepend: C ? !1 : "queue",
          attachTo: h,
          priority: l
        }, B = typeof i == "function" ? i() : i;
        B && (F.csp = {
          nonce: B
        });
        var U = [], q = [];
        Object.keys(z).forEach(function(X) {
          X.startsWith("@layer") ? U.push(X) : q.push(X);
        }), U.forEach(function(X) {
          et(Lt(z[X]), "_layer-".concat(X), O(O({}, F), {}, {
            prepend: !0
          }));
        });
        var Y = et(I, D, F);
        Y[Ie] = T.instanceId, Y.setAttribute(ot, p), process.env.NODE_ENV !== "production" && Y.setAttribute(Hi, E.join("|")), q.forEach(function(X) {
          et(Lt(z[X]), "_effect-".concat(X), F);
        });
      }
    }
  ), P = L(y, 3), H = P[0], N = P[1], w = P[2];
  return function(j) {
    var $;
    return !v || b || !g ? $ = /* @__PURE__ */ _.createElement(Mc, null) : $ = /* @__PURE__ */ _.createElement("style", _e({}, M(M({}, ot, N), me, w), {
      dangerouslySetInnerHTML: {
        __html: H
      }
    })), /* @__PURE__ */ _.createElement(_.Fragment, null, $, j);
  };
}
var Hc = function(t, r, n) {
  var o = L(t, 6), a = o[0], i = o[1], c = o[2], s = o[3], l = o[4], u = o[5], f = n || {}, d = f.plain;
  if (l)
    return null;
  var g = a, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return g = zt(a, i, c, m, d), s && Object.keys(s).forEach(function(h) {
    if (!r[h]) {
      r[h] = !0;
      var v = Lt(s[h]), S = zt(v, i, "_effect-".concat(h), m, d);
      h.startsWith("@layer") ? g = S + g : g += S;
    }
  }), [u, c, g];
}, na = "cssVar", jc = function(t, r) {
  var n = t.key, o = t.prefix, a = t.unitless, i = t.ignore, c = t.token, s = t.scope, l = s === void 0 ? "" : s, u = He(Yt), f = u.cache.instanceId, d = u.container, g = c._tokenKey, m = [].concat(je(t.path), [n, l, g]), h = dn(na, m, function() {
    var v = r(), S = ko(v, n, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: l
    }), x = L(S, 2), T = x[0], C = x[1], p = ta(m, C);
    return [T, C, p, n];
  }, function(v) {
    var S = L(v, 3), x = S[2];
    Ir && zo(x, {
      mark: me,
      attachTo: d
    });
  }, function(v) {
    var S = L(v, 3), x = S[1], T = S[2];
    if (x) {
      var C = et(x, T, {
        mark: me,
        prepend: "queue",
        attachTo: d,
        priority: -999
      });
      C[Ie] = f, C.setAttribute(ot, n);
    }
  });
  return h;
}, Nc = function(t, r, n) {
  var o = L(t, 4), a = o[1], i = o[2], c = o[3], s = n || {}, l = s.plain;
  if (!a)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, d = zt(a, c, i, f, l);
  return [u, i, d];
};
M(M(M({}, ra, Hc), Vo, cc), na, Nc);
function Qe(e) {
  return e.notSplit = !0, e;
}
Qe(["borderTop", "borderBottom"]), Qe(["borderTop"]), Qe(["borderBottom"]), Qe(["borderLeft", "borderRight"]), Qe(["borderLeft"]), Qe(["borderRight"]);
var oa = /* @__PURE__ */ ei({});
function aa() {
}
let Ee = null;
function Lc() {
  Ee = null, _o();
}
let ia = aa;
process.env.NODE_ENV !== "production" && (ia = (e, t, r) => {
  Xe(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && Lc();
});
const ca = ia, Bc = /* @__PURE__ */ _.createContext({}), sa = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = _.useContext(Bc), r = (n, o, a) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const i = Ee;
        Ee || (Ee = {}), Ee[e] = Ee[e] || [], Ee[e].includes(a || "") || Ee[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Ee);
      } else
        process.env.NODE_ENV !== "production" && ca(n, e, a);
  };
  return r.deprecated = (n, o, a, i) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = aa, e;
}, la = {
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
}, Ft = Object.assign(Object.assign({}, la), {
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
}), re = Math.round;
function vr(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = t(n[o] || 0, r[o] || "", o);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const Kn = (e, t, r) => r === 0 ? e : e / 100;
function dt(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class Q {
  constructor(t) {
    M(this, "isValid", !0), M(this, "r", 0), M(this, "g", 0), M(this, "b", 0), M(this, "a", 1), M(this, "_h", void 0), M(this, "_s", void 0), M(this, "_l", void 0), M(this, "_v", void 0), M(this, "_max", void 0), M(this, "_min", void 0), M(this, "_brightness", void 0);
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(a) {
        return n.startsWith(a);
      };
      const n = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : o("rgb") ? this.fromRgbString(n) : o("hsl") ? this.fromHslString(n) : (o("hsv") || o("hsb")) && this.fromHsvString(n);
    } else if (t instanceof Q)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = dt(t.r), this.g = dt(t.g), this.b = dt(t.b), this.a = typeof t.a == "number" ? dt(t.a, 1) : 1;
    else if (r("hsl"))
      this.fromHsl(t);
    else if (r("hsv"))
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
    const r = this.toHsv();
    return r.h = t, this._c(r);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(a) {
      const i = a / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const r = t(this.r), n = t(this.g), o = t(this.b);
    return 0.2126 * r + 0.7152 * n + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = re(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const n = this._c(t), o = r / 100, a = (c) => (n[c] - this[c]) * o + this[c], i = {
      r: re(a("r")),
      g: re(a("g")),
      b: re(a("b")),
      a: re(a("a") * 100) / 100
    };
    return this._c(i);
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
    const r = this._c(t), n = this.a + r.a * (1 - this.a), o = (a) => re((this[a] * this.a + r[a] * r.a * (1 - this.a)) / n);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: n
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
    const r = (this.r || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const a = re(this.a * 255).toString(16);
      t += a.length === 2 ? a : "0" + a;
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
    const t = this.getHue(), r = re(this.getSaturation() * 100), n = re(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
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
  _sc(t, r, n) {
    const o = this.clone();
    return o[t] = dt(r, n), o;
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
    const r = t.replace("#", "");
    function n(o, a) {
      return parseInt(r[o] + r[a || o], 16);
    }
    r.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = r[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = r[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: n,
    a: o
  }) {
    if (this._h = t % 360, this._s = r, this._l = n, this.a = typeof o == "number" ? o : 1, r <= 0) {
      const d = re(n * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let a = 0, i = 0, c = 0;
    const s = t / 60, l = (1 - Math.abs(2 * n - 1)) * r, u = l * (1 - Math.abs(s % 2 - 1));
    s >= 0 && s < 1 ? (a = l, i = u) : s >= 1 && s < 2 ? (a = u, i = l) : s >= 2 && s < 3 ? (i = l, c = u) : s >= 3 && s < 4 ? (i = u, c = l) : s >= 4 && s < 5 ? (a = u, c = l) : s >= 5 && s < 6 && (a = l, c = u);
    const f = n - l / 2;
    this.r = re((a + f) * 255), this.g = re((i + f) * 255), this.b = re((c + f) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a: o
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof o == "number" ? o : 1;
    const a = re(n * 255);
    if (this.r = a, this.g = a, this.b = a, r <= 0)
      return;
    const i = t / 60, c = Math.floor(i), s = i - c, l = re(n * (1 - r) * 255), u = re(n * (1 - r * s) * 255), f = re(n * (1 - r * (1 - s)) * 255);
    switch (c) {
      case 0:
        this.g = f, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = f;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = f, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const r = vr(t, Kn);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = vr(t, Kn);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = vr(t, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? re(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var Ot = 2, Qn = 0.16, Dc = 0.05, zc = 0.05, Fc = 0.15, ua = 5, fa = 4, kc = [{
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
function Zn(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Ot * t : Math.round(e.h) + Ot * t : n = r ? Math.round(e.h) + Ot * t : Math.round(e.h) - Ot * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Jn(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - Qn * t : t === fa ? n = e.s + Qn : n = e.s + Dc * t, n > 1 && (n = 1), r && t === ua && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function eo(e, t, r) {
  var n;
  return r ? n = e.v + zc * t : n = e.v - Fc * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function hn(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = new Q(e), o = n.toHsv(), a = ua; a > 0; a -= 1) {
    var i = new Q({
      h: Zn(o, a, !0),
      s: Jn(o, a, !0),
      v: eo(o, a, !0)
    });
    r.push(i);
  }
  r.push(n);
  for (var c = 1; c <= fa; c += 1) {
    var s = new Q({
      h: Zn(o, c),
      s: Jn(o, c),
      v: eo(o, c)
    });
    r.push(s);
  }
  return t.theme === "dark" ? kc.map(function(l) {
    var u = l.index, f = l.amount;
    return new Q(t.backgroundColor || "#141414").mix(r[u], f).toHexString();
  }) : r.map(function(l) {
    return l.toHexString();
  });
}
var gr = {
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
}, Nr = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Nr.primary = Nr[5];
var Lr = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Lr.primary = Lr[5];
var Br = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Br.primary = Br[5];
var Dr = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Dr.primary = Dr[5];
var zr = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
zr.primary = zr[5];
var Fr = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Fr.primary = Fr[5];
var kr = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
kr.primary = kr[5];
var Vr = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Vr.primary = Vr[5];
var kt = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
kt.primary = kt[5];
var Wr = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Wr.primary = Wr[5];
var Gr = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Gr.primary = Gr[5];
var Ur = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Ur.primary = Ur[5];
var Xr = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Xr.primary = Xr[5];
var hr = {
  red: Nr,
  volcano: Lr,
  orange: Br,
  gold: Dr,
  yellow: zr,
  lime: Fr,
  green: kr,
  cyan: Vr,
  blue: kt,
  geekblue: Wr,
  purple: Gr,
  magenta: Ur,
  grey: Xr
};
function Vc(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: r
}) {
  const {
    colorSuccess: n,
    colorWarning: o,
    colorError: a,
    colorInfo: i,
    colorPrimary: c,
    colorBgBase: s,
    colorTextBase: l
  } = e, u = t(c), f = t(n), d = t(o), g = t(a), m = t(i), h = r(s, l), v = e.colorLink || e.colorInfo, S = t(v), x = new Q(g[1]).mix(new Q(g[3]), 50).toHexString();
  return Object.assign(Object.assign({}, h), {
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
    colorErrorBgFilledHover: x,
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
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorLinkHover: S[4],
    colorLink: S[6],
    colorLinkActive: S[7],
    colorBgMask: new Q("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Wc = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Gc(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, Wc(n));
}
const Uc = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Bt(e) {
  return (e + 8) / e;
}
function Xc(e) {
  const t = Array.from({
    length: 10
  }).map((r, n) => {
    const o = n - 1, a = e * Math.pow(Math.E, o / 5), i = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: Bt(r)
  }));
}
const Yc = (e) => {
  const t = Xc(e), r = t.map((u) => u.size), n = t.map((u) => u.lineHeight), o = r[1], a = r[0], i = r[2], c = n[1], s = n[0], l = n[2];
  return {
    fontSizeSM: a,
    fontSize: o,
    fontSizeLG: i,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: c,
    lineHeightLG: l,
    lineHeightSM: s,
    fontHeight: Math.round(c * o),
    fontHeightLG: Math.round(l * i),
    fontHeightSM: Math.round(s * a),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function qc(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const de = (e, t) => new Q(e).setA(t).toRgbString(), vt = (e, t) => new Q(e).darken(t).toHexString(), Kc = (e) => {
  const t = hn(e);
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
}, Qc = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: de(n, 0.88),
    colorTextSecondary: de(n, 0.65),
    colorTextTertiary: de(n, 0.45),
    colorTextQuaternary: de(n, 0.25),
    colorFill: de(n, 0.15),
    colorFillSecondary: de(n, 0.06),
    colorFillTertiary: de(n, 0.04),
    colorFillQuaternary: de(n, 0.02),
    colorBgSolid: de(n, 1),
    colorBgSolidHover: de(n, 0.75),
    colorBgSolidActive: de(n, 0.95),
    colorBgLayout: vt(r, 4),
    colorBgContainer: vt(r, 0),
    colorBgElevated: vt(r, 0),
    colorBgSpotlight: de(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: vt(r, 15),
    colorBorderSecondary: vt(r, 6)
  };
};
function Zc(e) {
  gr.pink = gr.magenta, hr.pink = hr.magenta;
  const t = Object.keys(la).map((r) => {
    const n = e[r] === gr[r] ? hr[r] : hn(e[r]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, a, i) => (o[`${r}-${i + 1}`] = n[i], o[`${r}${i + 1}`] = n[i], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Vc(e, {
    generateColorPalettes: Kc,
    generateNeutralColorPalettes: Qc
  })), Yc(e.fontSize)), qc(e)), Uc(e)), Gc(e));
}
const Jc = Li(Zc), es = {
  token: Ft,
  override: {
    override: Ft
  },
  hashed: !0
}, ts = /* @__PURE__ */ R.createContext(es), Yr = "ant", da = "anticon", rs = (e, t) => t || (e ? `${Yr}-${e}` : Yr), Le = /* @__PURE__ */ _.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: rs,
  iconPrefixCls: da
}), {
  Consumer: Vu
} = Le, to = {};
function ns(e) {
  const t = _.useContext(Le), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  } = t, a = t[e];
  return Object.assign(Object.assign({
    classNames: to,
    styles: to
  }, a), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  });
}
const os = /* @__PURE__ */ _.createContext(!1), as = /* @__PURE__ */ _.createContext(void 0);
var va = /* @__PURE__ */ ye(function e() {
  be(this, e);
}), ga = "CALC_UNIT", is = new RegExp(ga, "g");
function mr(e) {
  return typeof e == "number" ? "".concat(e).concat(ga) : e;
}
var cs = /* @__PURE__ */ function(e) {
  xt(r, e);
  var t = Et(r);
  function r(n, o) {
    var a;
    be(this, r), a = t.call(this), M(We(a), "result", ""), M(We(a), "unitlessCssVar", void 0), M(We(a), "lowPriority", void 0);
    var i = G(n);
    return a.unitlessCssVar = o, n instanceof r ? a.result = "(".concat(n.result, ")") : i === "number" ? a.result = mr(n) : i === "string" && (a.result = n), a;
  }
  return ye(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(mr(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(mr(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var a = this, i = o || {}, c = i.unit, s = !0;
      return typeof c == "boolean" ? s = c : Array.from(this.unitlessCssVar).some(function(l) {
        return a.result.includes(l);
      }) && (s = !1), this.result = this.result.replace(is, s ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(va), ss = /* @__PURE__ */ function(e) {
  xt(r, e);
  var t = Et(r);
  function r(n) {
    var o;
    return be(this, r), o = t.call(this), M(We(o), "result", 0), n instanceof r ? o.result = n.result : typeof n == "number" && (o.result = n), o;
  }
  return ye(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof r ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof r ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), r;
}(va), ls = function(t, r) {
  var n = t === "css" ? cs : ss;
  return function(o) {
    return new n(o, r);
  };
}, ro = function(t, r) {
  return "".concat([r, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Be(e) {
  var t = _.useRef();
  t.current = e;
  var r = _.useCallback(function() {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function Ct(e) {
  var t = _.useRef(!1), r = _.useState(e), n = L(r, 2), o = n[0], a = n[1];
  _.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(c, s) {
    s && t.current || a(c);
  }
  return [o, i];
}
function pr(e) {
  return e !== void 0;
}
function us(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, a = r.onChange, i = r.postState, c = Ct(function() {
    return pr(o) ? o : pr(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), s = L(c, 2), l = s[0], u = s[1], f = o !== void 0 ? o : l, d = i ? i(f) : f, g = Be(a), m = Ct([f]), h = L(m, 2), v = h[0], S = h[1];
  Vn(function() {
    var T = v[0];
    l !== T && g(l, T);
  }, [v]), Vn(function() {
    pr(o) || u(o);
  }, [o]);
  var x = Be(function(T, C) {
    u(T, C), S([f], C);
  });
  return [d, x];
}
function no(e, t, r, n) {
  var o = O({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    var a = n.deprecatedTokens;
    a.forEach(function(c) {
      var s = L(c, 2), l = s[0], u = s[1];
      if (process.env.NODE_ENV !== "production" && Xe(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var i = O(O({}, r), o);
  return Object.keys(i).forEach(function(c) {
    i[c] === t[c] && delete i[c];
  }), i;
}
var ha = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", qr = !0;
function lt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!ha)
    return Object.assign.apply(Object, [{}].concat(t));
  qr = !1;
  var n = {};
  return t.forEach(function(o) {
    if (G(o) === "object") {
      var a = Object.keys(o);
      a.forEach(function(i) {
        Object.defineProperty(n, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[i];
          }
        });
      });
    }
  }), qr = !0, n;
}
var oo = {};
function fs() {
}
var ds = function(t) {
  var r, n = t, o = fs;
  return ha && typeof Proxy < "u" && (r = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(i, c) {
      if (qr) {
        var s;
        (s = r) === null || s === void 0 || s.add(c);
      }
      return i[c];
    }
  }), o = function(i, c) {
    var s;
    oo[i] = {
      global: Array.from(r),
      component: O(O({}, (s = oo[i]) === null || s === void 0 ? void 0 : s.component), c)
    };
  }), {
    token: n,
    keys: r,
    flush: o
  };
};
function ao(e, t, r) {
  if (typeof r == "function") {
    var n;
    return r(lt(t, (n = t[e]) !== null && n !== void 0 ? n : {}));
  }
  return r ?? {};
}
function vs(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "max(".concat(n.map(function(a) {
        return Ue(a);
      }).join(","), ")");
    },
    min: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "min(".concat(n.map(function(a) {
        return Ue(a);
      }).join(","), ")");
    }
  };
}
var gs = 1e3 * 60 * 10, hs = /* @__PURE__ */ function() {
  function e() {
    be(this, e), M(this, "map", /* @__PURE__ */ new Map()), M(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), M(this, "nextID", 0), M(this, "lastAccessBeat", /* @__PURE__ */ new Map()), M(this, "accessBeat", 0);
  }
  return ye(e, [{
    key: "set",
    value: function(r, n) {
      this.clear();
      var o = this.getCompositeKey(r);
      this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      var n = this.getCompositeKey(r), o = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      var n = this, o = r.map(function(a) {
        return a && G(a) === "object" ? "obj_".concat(n.getObjectID(a)) : "".concat(G(a), "_").concat(a);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      var n = this.nextID;
      return this.objectIDMap.set(r, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      var r = this;
      if (this.accessBeat > 1e4) {
        var n = Date.now();
        this.lastAccessBeat.forEach(function(o, a) {
          n - o > gs && (r.map.delete(a), r.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), io = new hs();
function ms(e, t) {
  return R.useMemo(function() {
    var r = io.get(t);
    if (r)
      return r;
    var n = e();
    return io.set(t, n), n;
  }, t);
}
var ps = function() {
  return {};
};
function bs(e) {
  var t = e.useCSP, r = t === void 0 ? ps : t, n = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, c = e.getCompUnitless;
  function s(d, g, m, h) {
    var v = Array.isArray(d) ? d[0] : d;
    function S(y) {
      return "".concat(String(v)).concat(y.slice(0, 1).toUpperCase()).concat(y.slice(1));
    }
    var x = (h == null ? void 0 : h.unitless) || {}, T = typeof c == "function" ? c(d) : {}, C = O(O({}, T), {}, M({}, S("zIndexPopup"), !0));
    Object.keys(x).forEach(function(y) {
      C[S(y)] = x[y];
    });
    var p = O(O({}, h), {}, {
      unitless: C,
      prefixToken: S
    }), E = u(d, g, m, p), b = l(v, m, p);
    return function(y) {
      var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, H = E(y, P), N = L(H, 2), w = N[1], j = b(P), $ = L(j, 2), I = $[0], D = $[1];
      return [I, w, D];
    };
  }
  function l(d, g, m) {
    var h = m.unitless, v = m.injectStyle, S = v === void 0 ? !0 : v, x = m.prefixToken, T = m.ignore, C = function(b) {
      var y = b.rootCls, P = b.cssVar, H = P === void 0 ? {} : P, N = n(), w = N.realToken;
      return jc({
        path: [d],
        prefix: H.prefix,
        key: H.key,
        unitless: h,
        ignore: T,
        token: w,
        scope: y
      }, function() {
        var j = ao(d, w, g), $ = no(d, w, j, {
          deprecatedTokens: m == null ? void 0 : m.deprecatedTokens
        });
        return Object.keys(j).forEach(function(I) {
          $[x(I)] = $[I], delete $[I];
        }), $;
      }), null;
    }, p = function(b) {
      var y = n(), P = y.cssVar;
      return [function(H) {
        return S && P ? /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(C, {
          rootCls: b,
          cssVar: P,
          component: d
        }), H) : H;
      }, P == null ? void 0 : P.key];
    };
    return p;
  }
  function u(d, g, m) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, v = Array.isArray(d) ? d : [d, d], S = L(v, 1), x = S[0], T = v.join("-"), C = e.layer || {
      name: "antd"
    };
    return function(p) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : p, b = n(), y = b.theme, P = b.realToken, H = b.hashId, N = b.token, w = b.cssVar, j = o(), $ = j.rootPrefixCls, I = j.iconPrefixCls, D = r(), z = w ? "css" : "js", F = ms(function() {
        var ee = /* @__PURE__ */ new Set();
        return w && Object.keys(h.unitless || {}).forEach(function(le) {
          ee.add(Mt(le, w.prefix)), ee.add(Mt(le, ro(x, w.prefix)));
        }), ls(z, ee);
      }, [z, x, w == null ? void 0 : w.prefix]), B = vs(z), U = B.max, q = B.min, Y = {
        theme: y,
        token: N,
        hashId: H,
        nonce: function() {
          return D.nonce;
        },
        clientOnly: h.clientOnly,
        layer: C,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof a == "function" && qn(O(O({}, Y), {}, {
        clientOnly: !1,
        path: ["Shared", $]
      }), function() {
        return a(N, {
          prefix: {
            rootPrefixCls: $,
            iconPrefixCls: I
          },
          csp: D
        });
      });
      var X = qn(O(O({}, Y), {}, {
        path: [T, p, I]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var ee = ds(N), le = ee.token, W = ee.flush, ce = ao(x, P, m), ze = ".".concat(p), Oe = no(x, P, ce, {
          deprecatedTokens: h.deprecatedTokens
        });
        w && ce && G(ce) === "object" && Object.keys(ce).forEach(function(ue) {
          ce[ue] = "var(".concat(Mt(ue, ro(x, w.prefix)), ")");
        });
        var Re = lt(le, {
          componentCls: ze,
          prefixCls: p,
          iconCls: ".".concat(I),
          antCls: ".".concat($),
          calc: F,
          // @ts-ignore
          max: U,
          // @ts-ignore
          min: q
        }, w ? ce : Oe), se = g(Re, {
          hashId: H,
          prefixCls: p,
          rootPrefixCls: $,
          iconPrefixCls: I
        });
        W(x, Oe);
        var ge = typeof i == "function" ? i(Re, p, E, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : ge, se];
      });
      return [X, H];
    };
  }
  function f(d, g, m) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, v = u(d, g, m, O({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), S = function(T) {
      var C = T.prefixCls, p = T.rootCls, E = p === void 0 ? C : p;
      return v(C, E), null;
    };
    return process.env.NODE_ENV !== "production" && (S.displayName = "SubStyle_".concat(String(Array.isArray(d) ? d.join(".") : d))), S;
  }
  return {
    genStyleHooks: s,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const mn = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], ys = "5.27.5";
function br(e) {
  return e >= 0 && e <= 255;
}
function ht(e, t) {
  const {
    r,
    g: n,
    b: o,
    a
  } = new Q(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: c,
    b: s
  } = new Q(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((r - i * (1 - l)) / l), f = Math.round((n - c * (1 - l)) / l), d = Math.round((o - s * (1 - l)) / l);
    if (br(u) && br(f) && br(d))
      return new Q({
        r: u,
        g: f,
        b: d,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Q({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var Ss = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function ma(e) {
  const {
    override: t
  } = e, r = Ss(e, ["override"]), n = Object.assign({}, t);
  Object.keys(Ft).forEach((d) => {
    delete n[d];
  });
  const o = Object.assign(Object.assign({}, r), n), a = 480, i = 576, c = 768, s = 992, l = 1200, u = 1600;
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
    colorSplit: ht(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: ht(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: ht(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: ht(o.colorPrimaryBg, o.colorBgContainer),
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
    screenXS: a,
    screenXSMin: a,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: c - 1,
    screenMD: c,
    screenMDMin: c,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Q("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Q("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Q("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), n);
}
var co = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const pa = {
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
}, Cs = {
  motionBase: !0,
  motionUnit: !0
}, xs = {
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
}, ba = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, a = co(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: o
  });
  return i = ma(i), a && Object.entries(a).forEach(([c, s]) => {
    const {
      theme: l
    } = s, u = co(s, ["theme"]);
    let f = u;
    l && (f = ba(Object.assign(Object.assign({}, i), u), {
      override: u
    }, l)), i[c] = f;
  }), i;
};
function pn() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = R.useContext(ts), a = `${ys}-${t || ""}`, i = r || Jc, [c, s, l] = ic(i, [Ft, e], {
    salt: a,
    override: n,
    getComputedToken: ba,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: ma,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: pa,
      ignore: Cs,
      preserve: xs
    }
  });
  return [i, l, t ? s : "", c, o];
}
const ya = () => ({
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
}), Es = (e) => ({
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
}), Ts = (e, t, r, n) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, a = r ? `.${r}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let c = {};
  return n !== !1 && (c = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, c), i), {
      [o]: i
    })
  };
}, _s = (e, t) => ({
  outline: `${Ue(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), ws = (e, t) => ({
  "&:focus-visible": _s(e)
}), Os = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, ya()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Rs,
  genComponentStyleHook: As,
  genSubStyleComponent: Ps
} = bs({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = He(Le);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, r, n, o] = pn();
    return {
      theme: e,
      realToken: t,
      hashId: r,
      token: n,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = He(Le);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var r;
    const n = Es(e);
    return [n, {
      "&": n
    }, Os((r = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && r !== void 0 ? r : da)];
  },
  getCommonStyle: Ts,
  getCompUnitless: () => pa
});
var $s = /* @__PURE__ */ _.createContext({}), Is = /* @__PURE__ */ function(e) {
  xt(r, e);
  var t = Et(r);
  function r() {
    return be(this, r), t.apply(this, arguments);
  }
  return ye(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(_.Component);
function Ms(e) {
  var t = _.useReducer(function(c) {
    return c + 1;
  }, 0), r = L(t, 2), n = r[1], o = _.useRef(e), a = Be(function() {
    return o.current;
  }), i = Be(function(c) {
    o.current = typeof c == "function" ? c(o.current) : c, n();
  });
  return [a, i];
}
var $e = "none", Rt = "appear", At = "enter", Pt = "leave", so = "none", he = "prepare", Ze = "start", Je = "active", bn = "end", Sa = "prepared";
function lo(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function Hs(e, t) {
  var r = {
    animationend: lo("Animation", "AnimationEnd"),
    transitionend: lo("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var js = Hs(De(), typeof window < "u" ? window : {}), Ca = {};
if (De()) {
  var Ns = document.createElement("div");
  Ca = Ns.style;
}
var $t = {};
function xa(e) {
  if ($t[e])
    return $t[e];
  var t = js[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in Ca)
        return $t[e] = t[a], $t[e];
    }
  return "";
}
var Ea = xa("animationend"), Ta = xa("transitionend"), _a = !!(Ea && Ta), uo = Ea || "animationend", fo = Ta || "transitionend";
function vo(e, t) {
  if (!e) return null;
  if (G(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const Ls = function(e) {
  var t = ne();
  function r(o) {
    o && (o.removeEventListener(fo, e), o.removeEventListener(uo, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(fo, e), o.addEventListener(uo, e), t.current = o);
  }
  return _.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var wa = De() ? ti : Te;
const Bs = function() {
  var e = _.useRef(null);
  function t() {
    Ne.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = Ne(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = a;
  }
  return _.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var Ds = [he, Ze, Je, bn], zs = [he, Sa], Oa = !1, Fs = !0;
function Ra(e) {
  return e === Je || e === bn;
}
const ks = function(e, t, r) {
  var n = Ct(so), o = L(n, 2), a = o[0], i = o[1], c = Bs(), s = L(c, 2), l = s[0], u = s[1];
  function f() {
    i(he, !0);
  }
  var d = t ? zs : Ds;
  return wa(function() {
    if (a !== so && a !== bn) {
      var g = d.indexOf(a), m = d[g + 1], h = r(a);
      h === Oa ? i(m, !0) : m && l(function(v) {
        function S() {
          v.isCanceled() || i(m, !0);
        }
        h === !0 ? S() : Promise.resolve(h).then(S);
      });
    }
  }, [e, a]), _.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, a];
};
function Vs(e, t, r, n) {
  var o = n.motionEnter, a = o === void 0 ? !0 : o, i = n.motionAppear, c = i === void 0 ? !0 : i, s = n.motionLeave, l = s === void 0 ? !0 : s, u = n.motionDeadline, f = n.motionLeaveImmediately, d = n.onAppearPrepare, g = n.onEnterPrepare, m = n.onLeavePrepare, h = n.onAppearStart, v = n.onEnterStart, S = n.onLeaveStart, x = n.onAppearActive, T = n.onEnterActive, C = n.onLeaveActive, p = n.onAppearEnd, E = n.onEnterEnd, b = n.onLeaveEnd, y = n.onVisibleChanged, P = Ct(), H = L(P, 2), N = H[0], w = H[1], j = Ms($e), $ = L(j, 2), I = $[0], D = $[1], z = Ct(null), F = L(z, 2), B = F[0], U = F[1], q = I(), Y = ne(!1), X = ne(null);
  function ee() {
    return r();
  }
  var le = ne(!1);
  function W() {
    D($e), U(null, !0);
  }
  var ce = Be(function(te) {
    var Z = I();
    if (Z !== $e) {
      var fe = ee();
      if (!(te && !te.deadline && te.target !== fe)) {
        var ke = le.current, Ke;
        Z === Rt && ke ? Ke = p == null ? void 0 : p(fe, te) : Z === At && ke ? Ke = E == null ? void 0 : E(fe, te) : Z === Pt && ke && (Ke = b == null ? void 0 : b(fe, te)), ke && Ke !== !1 && W();
      }
    }
  }), ze = Ls(ce), Oe = L(ze, 1), Re = Oe[0], se = function(Z) {
    switch (Z) {
      case Rt:
        return M(M(M({}, he, d), Ze, h), Je, x);
      case At:
        return M(M(M({}, he, g), Ze, v), Je, T);
      case Pt:
        return M(M(M({}, he, m), Ze, S), Je, C);
      default:
        return {};
    }
  }, ge = _.useMemo(function() {
    return se(q);
  }, [q]), ue = ks(q, !e, function(te) {
    if (te === he) {
      var Z = ge[he];
      return Z ? Z(ee()) : Oa;
    }
    if (ae in ge) {
      var fe;
      U(((fe = ge[ae]) === null || fe === void 0 ? void 0 : fe.call(ge, ee(), null)) || null);
    }
    return ae === Je && q !== $e && (Re(ee()), u > 0 && (clearTimeout(X.current), X.current = setTimeout(function() {
      ce({
        deadline: !0
      });
    }, u))), ae === Sa && W(), Fs;
  }), A = L(ue, 2), Ae = A[0], ae = A[1], Fe = Ra(ae);
  le.current = Fe;
  var Pe = ne(null);
  wa(function() {
    if (!(Y.current && Pe.current === t)) {
      w(t);
      var te = Y.current;
      Y.current = !0;
      var Z;
      !te && t && c && (Z = Rt), te && t && a && (Z = At), (te && !t && l || !te && f && !t && l) && (Z = Pt);
      var fe = se(Z);
      Z && (e || fe[he]) ? (D(Z), Ae()) : D($e), Pe.current = t;
    }
  }, [t]), Te(function() {
    // Cancel appear
    (q === Rt && !c || // Cancel enter
    q === At && !a || // Cancel leave
    q === Pt && !l) && D($e);
  }, [c, a, l]), Te(function() {
    return function() {
      Y.current = !1, clearTimeout(X.current);
    };
  }, []);
  var Ye = _.useRef(!1);
  Te(function() {
    N && (Ye.current = !0), N !== void 0 && q === $e && ((Ye.current || N) && (y == null || y(N)), Ye.current = !0);
  }, [N, q]);
  var qe = B;
  return ge[he] && ae === Ze && (qe = O({
    transition: "none"
  }, qe)), [q, ae, qe, N ?? t];
}
function Ws(e) {
  var t = e;
  G(e) === "object" && (t = e.transitionSupport);
  function r(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ _.forwardRef(function(o, a) {
    var i = o.visible, c = i === void 0 ? !0 : i, s = o.removeOnLeave, l = s === void 0 ? !0 : s, u = o.forceRender, f = o.children, d = o.motionName, g = o.leavedClassName, m = o.eventProps, h = _.useContext($s), v = h.motion, S = r(o, v), x = ne(), T = ne();
    function C() {
      try {
        return x.current instanceof HTMLElement ? x.current : gi(T.current);
      } catch {
        return null;
      }
    }
    var p = Vs(S, c, C, o), E = L(p, 4), b = E[0], y = E[1], P = E[2], H = E[3], N = _.useRef(H);
    H && (N.current = !0);
    var w = _.useCallback(function(F) {
      x.current = F, Ro(a, F);
    }, [a]), j, $ = O(O({}, m), {}, {
      visible: c
    });
    if (!f)
      j = null;
    else if (b === $e)
      H ? j = f(O({}, $), w) : !l && N.current && g ? j = f(O(O({}, $), {}, {
        className: g
      }), w) : u || !l && !g ? j = f(O(O({}, $), {}, {
        style: {
          display: "none"
        }
      }), w) : j = null;
    else {
      var I;
      y === he ? I = "prepare" : Ra(y) ? I = "active" : y === Ze && (I = "start");
      var D = vo(d, "".concat(b, "-").concat(I));
      j = f(O(O({}, $), {}, {
        className: oe(vo(d, b), M(M({}, D, D && I), d, typeof d == "string")),
        style: P
      }), w);
    }
    if (/* @__PURE__ */ _.isValidElement(j) && Ao(j)) {
      var z = $o(j);
      z || (j = /* @__PURE__ */ _.cloneElement(j, {
        ref: w
      }));
    }
    return /* @__PURE__ */ _.createElement(Is, {
      ref: T
    }, j);
  });
  return n.displayName = "CSSMotion", n;
}
const yn = Ws(_a);
var Kr = "add", Qr = "keep", Zr = "remove", yr = "removed";
function Gs(e) {
  var t;
  return e && G(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, O(O({}, t), {}, {
    key: String(t.key)
  });
}
function Jr() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Gs);
}
function Us() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, a = Jr(e), i = Jr(t);
  a.forEach(function(l) {
    for (var u = !1, f = n; f < o; f += 1) {
      var d = i[f];
      if (d.key === l.key) {
        n < f && (r = r.concat(i.slice(n, f).map(function(g) {
          return O(O({}, g), {}, {
            status: Kr
          });
        })), n = f), r.push(O(O({}, d), {}, {
          status: Qr
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(O(O({}, l), {}, {
      status: Zr
    }));
  }), n < o && (r = r.concat(i.slice(n).map(function(l) {
    return O(O({}, l), {}, {
      status: Kr
    });
  })));
  var c = {};
  r.forEach(function(l) {
    var u = l.key;
    c[u] = (c[u] || 0) + 1;
  });
  var s = Object.keys(c).filter(function(l) {
    return c[l] > 1;
  });
  return s.forEach(function(l) {
    r = r.filter(function(u) {
      var f = u.key, d = u.status;
      return f !== l || d !== Zr;
    }), r.forEach(function(u) {
      u.key === l && (u.status = Qr);
    });
  }), r;
}
var Xs = ["component", "children", "onVisibleChanged", "onAllRemoved"], Ys = ["status"], qs = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Ks(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yn, r = /* @__PURE__ */ function(n) {
    xt(a, n);
    var o = Et(a);
    function a() {
      var i;
      be(this, a);
      for (var c = arguments.length, s = new Array(c), l = 0; l < c; l++)
        s[l] = arguments[l];
      return i = o.call.apply(o, [this].concat(s)), M(We(i), "state", {
        keyEntities: []
      }), M(We(i), "removeKey", function(u) {
        i.setState(function(f) {
          var d = f.keyEntities.map(function(g) {
            return g.key !== u ? g : O(O({}, g), {}, {
              status: yr
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var f = i.state.keyEntities, d = f.filter(function(g) {
            var m = g.status;
            return m !== yr;
          }).length;
          d === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return ye(a, [{
      key: "render",
      value: function() {
        var c = this, s = this.state.keyEntities, l = this.props, u = l.component, f = l.children, d = l.onVisibleChanged;
        l.onAllRemoved;
        var g = nt(l, Xs), m = u || _.Fragment, h = {};
        return qs.forEach(function(v) {
          h[v] = g[v], delete g[v];
        }), delete g.keys, /* @__PURE__ */ _.createElement(m, g, s.map(function(v, S) {
          var x = v.status, T = nt(v, Ys), C = x === Kr || x === Qr;
          return /* @__PURE__ */ _.createElement(t, _e({}, h, {
            key: T.key,
            visible: C,
            eventProps: T,
            onVisibleChanged: function(E) {
              d == null || d(E, {
                key: T.key
              }), E || c.removeKey(T.key);
            }
          }), function(p, E) {
            return f(O(O({}, p), {}, {
              index: S
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(c, s) {
        var l = c.keys, u = s.keyEntities, f = Jr(l), d = Us(u, f);
        return {
          keyEntities: d.filter(function(g) {
            var m = u.find(function(h) {
              var v = h.key;
              return g.key === v;
            });
            return !(m && m.status === yr && g.status === Zr);
          })
        };
      }
    }]), a;
  }(_.Component);
  return M(r, "defaultProps", {
    component: "div"
  }), r;
}
Ks(_a);
function Aa(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Qs(e) {
  return Aa(e) instanceof ShadowRoot;
}
function Zs(e) {
  return Qs(e) ? Aa(e) : null;
}
function Js(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function el(e, t) {
  Xe(e, "[@ant-design/icons] ".concat(t));
}
function go(e) {
  return G(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (G(e.icon) === "object" || typeof e.icon == "function");
}
function ho() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[Js(r)] = n;
    }
    return t;
  }, {});
}
function en(e, t, r) {
  return r ? /* @__PURE__ */ R.createElement(e.tag, O(O({
    key: t
  }, ho(e.attrs)), r), (e.children || []).map(function(n, o) {
    return en(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ R.createElement(e.tag, O({
    key: t
  }, ho(e.attrs)), (e.children || []).map(function(n, o) {
    return en(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Pa(e) {
  return hn(e)[0];
}
function $a(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var tl = `
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
`, rl = function(t) {
  var r = He(oa), n = r.csp, o = r.prefixCls, a = r.layer, i = tl;
  o && (i = i.replace(/anticon/g, o)), a && (i = "@layer ".concat(a, ` {
`).concat(i, `
}`)), Te(function() {
    var c = t.current, s = Zs(c);
    et(i, "@ant-design-icons", {
      prepend: !a,
      csp: n,
      attachTo: s
    });
  }, []);
}, nl = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], pt = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function ol(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  pt.primaryColor = t, pt.secondaryColor = r || Pa(t), pt.calculated = !!r;
}
function al() {
  return O({}, pt);
}
var ut = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, a = t.style, i = t.primaryColor, c = t.secondaryColor, s = nt(t, nl), l = _.useRef(), u = pt;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: c || Pa(i)
  }), rl(l), el(go(r), "icon should be icon definiton, but got ".concat(r)), !go(r))
    return null;
  var f = r;
  return f && typeof f.icon == "function" && (f = O(O({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), en(f.icon, "svg-".concat(f.name), O(O({
    className: n,
    onClick: o,
    style: a,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, s), {}, {
    ref: l
  }));
};
ut.displayName = "IconReact";
ut.getTwoToneColors = al;
ut.setTwoToneColors = ol;
function Ia(e) {
  var t = $a(e), r = L(t, 2), n = r[0], o = r[1];
  return ut.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function il() {
  var e = ut.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var cl = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Ia(kt.primary);
var Qt = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, c = e.onClick, s = e.twoToneColor, l = nt(e, cl), u = _.useContext(oa), f = u.prefixCls, d = f === void 0 ? "anticon" : f, g = u.rootClassName, m = oe(g, d, M(M({}, "".concat(d, "-").concat(n.name), !!n.name), "".concat(d, "-spin"), !!o || n.name === "loading"), r), h = i;
  h === void 0 && c && (h = -1);
  var v = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, S = $a(s), x = L(S, 2), T = x[0], C = x[1];
  return /* @__PURE__ */ _.createElement("span", _e({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: t,
    tabIndex: h,
    onClick: c,
    className: m
  }), /* @__PURE__ */ _.createElement(ut, {
    icon: n,
    primaryColor: T,
    secondaryColor: C,
    style: v
  }));
});
Qt.displayName = "AntdIcon";
Qt.getTwoToneColor = il;
Qt.setTwoToneColor = Ia;
function sl(e) {
  return e && /* @__PURE__ */ R.isValidElement(e) && e.type === R.Fragment;
}
const ll = (e, t, r) => /* @__PURE__ */ R.isValidElement(e) ? /* @__PURE__ */ R.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function Ma(e, t) {
  return ll(e, e, t);
}
var ul = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, fl = function(t, r) {
  return /* @__PURE__ */ _.createElement(Qt, _e({}, t, {
    ref: r,
    icon: ul
  }));
}, Ha = /* @__PURE__ */ _.forwardRef(fl);
process.env.NODE_ENV !== "production" && (Ha.displayName = "LoadingOutlined");
function ja(e, t) {
  this.v = e, this.k = t;
}
function ie(e, t, r, n) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch {
    o = 0;
  }
  ie = function(i, c, s, l) {
    function u(f, d) {
      ie(i, f, function(g) {
        return this._invoke(f, d, g);
      });
    }
    c ? o ? o(i, c, {
      value: s,
      enumerable: !l,
      configurable: !l,
      writable: !l
    }) : i[c] = s : (u("next", 0), u("throw", 1), u("return", 2));
  }, ie(e, t, r, n);
}
function Sn() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, r = typeof Symbol == "function" ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
  function a(g, m, h, v) {
    var S = m && m.prototype instanceof c ? m : c, x = Object.create(S.prototype);
    return ie(x, "_invoke", function(T, C, p) {
      var E, b, y, P = 0, H = p || [], N = !1, w = {
        p: 0,
        n: 0,
        v: e,
        a: j,
        f: j.bind(e, 4),
        d: function(I, D) {
          return E = I, b = 0, y = e, w.n = D, i;
        }
      };
      function j($, I) {
        for (b = $, y = I, t = 0; !N && P && !D && t < H.length; t++) {
          var D, z = H[t], F = w.p, B = z[2];
          $ > 3 ? (D = B === I) && (y = z[(b = z[4]) ? 5 : (b = 3, 3)], z[4] = z[5] = e) : z[0] <= F && ((D = $ < 2 && F < z[1]) ? (b = 0, w.v = I, w.n = z[1]) : F < B && (D = $ < 3 || z[0] > I || I > B) && (z[4] = $, z[5] = I, w.n = B, b = 0));
        }
        if (D || $ > 1) return i;
        throw N = !0, I;
      }
      return function($, I, D) {
        if (P > 1) throw TypeError("Generator is already running");
        for (N && I === 1 && j(I, D), b = I, y = D; (t = b < 2 ? e : y) || !N; ) {
          E || (b ? b < 3 ? (b > 1 && (w.n = -1), j(b, y)) : w.n = y : w.v = y);
          try {
            if (P = 2, E) {
              if (b || ($ = "next"), t = E[$]) {
                if (!(t = t.call(E, y))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                y = t.value, b < 2 && (b = 0);
              } else b === 1 && (t = E.return) && t.call(E), b < 2 && (y = TypeError("The iterator does not provide a '" + $ + "' method"), b = 1);
              E = e;
            } else if ((t = (N = w.n < 0) ? y : T.call(C, w)) !== i) break;
          } catch (z) {
            E = e, b = 1, y = z;
          } finally {
            P = 1;
          }
        }
        return {
          value: t,
          done: N
        };
      };
    }(g, h, v), !0), x;
  }
  var i = {};
  function c() {
  }
  function s() {
  }
  function l() {
  }
  t = Object.getPrototypeOf;
  var u = [][n] ? t(t([][n]())) : (ie(t = {}, n, function() {
    return this;
  }), t), f = l.prototype = c.prototype = Object.create(u);
  function d(g) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(g, l) : (g.__proto__ = l, ie(g, o, "GeneratorFunction")), g.prototype = Object.create(f), g;
  }
  return s.prototype = l, ie(f, "constructor", l), ie(l, "constructor", s), s.displayName = "GeneratorFunction", ie(l, o, "GeneratorFunction"), ie(f), ie(f, o, "Generator"), ie(f, n, function() {
    return this;
  }), ie(f, "toString", function() {
    return "[object Generator]";
  }), (Sn = function() {
    return {
      w: a,
      m: d
    };
  })();
}
function Vt(e, t) {
  function r(o, a, i, c) {
    try {
      var s = e[o](a), l = s.value;
      return l instanceof ja ? t.resolve(l.v).then(function(u) {
        r("next", u, i, c);
      }, function(u) {
        r("throw", u, i, c);
      }) : t.resolve(l).then(function(u) {
        s.value = u, i(s);
      }, function(u) {
        return r("throw", u, i, c);
      });
    } catch (u) {
      c(u);
    }
  }
  var n;
  this.next || (ie(Vt.prototype), ie(Vt.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), ie(this, "_invoke", function(o, a, i) {
    function c() {
      return new t(function(s, l) {
        r(o, i, s, l);
      });
    }
    return n = n ? n.then(c, c) : c();
  }, !0);
}
function Na(e, t, r, n, o) {
  return new Vt(Sn().w(e, t, r, n), o || Promise);
}
function dl(e, t, r, n, o) {
  var a = Na(e, t, r, n, o);
  return a.next().then(function(i) {
    return i.done ? i.value : a.next();
  });
}
function vl(e) {
  var t = Object(e), r = [];
  for (var n in t) r.unshift(n);
  return function o() {
    for (; r.length; ) if ((n = r.pop()) in t) return o.value = n, o.done = !1, o;
    return o.done = !0, o;
  };
}
function mo(e) {
  if (e != null) {
    var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], r = 0;
    if (t) return t.call(e);
    if (typeof e.next == "function") return e;
    if (!isNaN(e.length)) return {
      next: function() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(G(e) + " is not iterable");
}
function ct() {
  var e = Sn(), t = e.m(ct), r = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function n(i) {
    var c = typeof i == "function" && i.constructor;
    return !!c && (c === r || (c.displayName || c.name) === "GeneratorFunction");
  }
  var o = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function a(i) {
    var c, s;
    return function(l) {
      c || (c = {
        stop: function() {
          return s(l.a, 2);
        },
        catch: function() {
          return l.v;
        },
        abrupt: function(f, d) {
          return s(l.a, o[f], d);
        },
        delegateYield: function(f, d, g) {
          return c.resultName = d, s(l.d, mo(f), g);
        },
        finish: function(f) {
          return s(l.f, f);
        }
      }, s = function(f, d, g) {
        l.p = c.prev, l.n = c.next;
        try {
          return f(d, g);
        } finally {
          c.next = l.n;
        }
      }), c.resultName && (c[c.resultName] = l.v, c.resultName = void 0), c.sent = l.v, c.next = l.n;
      try {
        return i.call(this, c);
      } finally {
        l.p = c.prev, l.n = c.next;
      }
    };
  }
  return (ct = function() {
    return {
      wrap: function(s, l, u, f) {
        return e.w(a(s), l, u, f && f.reverse());
      },
      isGeneratorFunction: n,
      mark: e.m,
      awrap: function(s, l) {
        return new ja(s, l);
      },
      AsyncIterator: Vt,
      async: function(s, l, u, f, d) {
        return (n(l) ? Na : dl)(a(s), l, u, f, d);
      },
      keys: vl,
      values: mo
    };
  })();
}
function po(e, t, r, n, o, a, i) {
  try {
    var c = e[a](i), s = c.value;
  } catch (l) {
    return void r(l);
  }
  c.done ? t(s) : Promise.resolve(s).then(n, o);
}
function La(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var a = e.apply(t, r);
      function i(s) {
        po(a, n, o, i, c, "next", s);
      }
      function c(s) {
        po(a, n, o, i, c, "throw", s);
      }
      i(void 0);
    });
  };
}
var Tt = O({}, Eo), gl = Tt.version, Sr = Tt.render, hl = Tt.unmountComponentAtNode, Zt;
try {
  var ml = Number((gl || "").split(".")[0]);
  ml >= 18 && (Zt = Tt.createRoot);
} catch {
}
function bo(e) {
  var t = Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && G(t) === "object" && (t.usingClientEntryPoint = e);
}
var Wt = "__rc_react_root__";
function pl(e, t) {
  bo(!0);
  var r = t[Wt] || Zt(t);
  bo(!1), r.render(e), t[Wt] = r;
}
function bl(e, t) {
  Sr == null || Sr(e, t);
}
function yl(e, t) {
  if (Zt) {
    pl(e, t);
    return;
  }
  bl(e, t);
}
function Sl(e) {
  return tn.apply(this, arguments);
}
function tn() {
  return tn = La(/* @__PURE__ */ ct().mark(function e(t) {
    return ct().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[Wt]) === null || o === void 0 || o.unmount(), delete t[Wt];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), tn.apply(this, arguments);
}
function Cl(e) {
  hl(e);
}
function xl(e) {
  return rn.apply(this, arguments);
}
function rn() {
  return rn = La(/* @__PURE__ */ ct().mark(function e(t) {
    return ct().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (Zt === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", Sl(t));
        case 2:
          Cl(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), rn.apply(this, arguments);
}
const El = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const r = Number.parseInt(_.version.split(".")[0], 10), n = Object.keys(Eo);
    process.env.NODE_ENV !== "production" && ca(r < 19 || n.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return yl(e, t), () => xl(t);
};
let Tl = El;
function _l(e) {
  return Tl;
}
function wl(e, t) {
  var r = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
const Ol = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), a = o.width, i = o.height;
      if (a || i)
        return !0;
    }
  }
  return !1;
}, Rl = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
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
}, Al = As("Wave", Rl), Ba = `${Yr}-wave-target`;
function Pl(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent" && e !== "canvastext";
}
function $l(e) {
  var t;
  const {
    borderTopColor: r,
    borderColor: n,
    backgroundColor: o
  } = getComputedStyle(e);
  return (t = [r, n, o].find(Pl)) !== null && t !== void 0 ? t : null;
}
function Cr(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Il = (e) => {
  const {
    className: t,
    target: r,
    component: n,
    registerUnmount: o
  } = e, a = _.useRef(null), i = _.useRef(null);
  _.useEffect(() => {
    i.current = o();
  }, []);
  const [c, s] = _.useState(null), [l, u] = _.useState([]), [f, d] = _.useState(0), [g, m] = _.useState(0), [h, v] = _.useState(0), [S, x] = _.useState(0), [T, C] = _.useState(!1), p = {
    left: f,
    top: g,
    width: h,
    height: S,
    borderRadius: l.map((y) => `${y}px`).join(" ")
  };
  c && (p["--wave-color"] = c);
  function E() {
    const y = getComputedStyle(r);
    s($l(r));
    const P = y.position === "static", {
      borderLeftWidth: H,
      borderTopWidth: N
    } = y;
    d(P ? r.offsetLeft : Cr(-Number.parseFloat(H))), m(P ? r.offsetTop : Cr(-Number.parseFloat(N))), v(r.offsetWidth), x(r.offsetHeight);
    const {
      borderTopLeftRadius: w,
      borderTopRightRadius: j,
      borderBottomLeftRadius: $,
      borderBottomRightRadius: I
    } = y;
    u([w, j, I, $].map((D) => Cr(Number.parseFloat(D))));
  }
  if (_.useEffect(() => {
    if (r) {
      const y = Ne(() => {
        E(), C(!0);
      });
      let P;
      return typeof ResizeObserver < "u" && (P = new ResizeObserver(E), P.observe(r)), () => {
        Ne.cancel(y), P == null || P.disconnect();
      };
    }
  }, [r]), !T)
    return null;
  const b = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(Ba));
  return /* @__PURE__ */ _.createElement(yn, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (y, P) => {
      var H, N;
      if (P.deadline || P.propertyName === "opacity") {
        const w = (H = a.current) === null || H === void 0 ? void 0 : H.parentElement;
        (N = i.current) === null || N === void 0 || N.call(i).then(() => {
          w == null || w.remove();
        });
      }
      return !1;
    }
  }, ({
    className: y
  }, P) => /* @__PURE__ */ _.createElement("div", {
    ref: sn(a, P),
    className: oe(t, y, {
      "wave-quick": b
    }),
    style: p
  }));
}, Ml = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const a = _l();
  let i = null;
  function c() {
    return i;
  }
  i = a(/* @__PURE__ */ _.createElement(Il, Object.assign({}, t, {
    target: e,
    registerUnmount: c
  })), o);
}, Hl = (e, t, r) => {
  const {
    wave: n
  } = _.useContext(Le), [, o, a] = pn(), i = Be((l) => {
    const u = e.current;
    if (n != null && n.disabled || !u)
      return;
    const f = u.querySelector(`.${Ba}`) || u, {
      showEffect: d
    } = n || {};
    (d || Ml)(f, {
      className: t,
      token: o,
      component: r,
      event: l,
      hashId: a
    });
  }), c = _.useRef(null);
  return (l) => {
    Ne.cancel(c.current), c.current = Ne(() => {
      i(l);
    });
  };
}, Da = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = He(Le), a = ne(null), i = o("wave"), [, c] = Al(i), s = Hl(a, oe(i, c), n);
  if (R.useEffect(() => {
    const u = a.current;
    if (!u || u.nodeType !== window.Node.ELEMENT_NODE || r)
      return;
    const f = (d) => {
      !Ol(d.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") && !u.className.includes("disabled:") || u.getAttribute("aria-disabled") === "true" || u.className.includes("-leave") || s(d);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [r]), !/* @__PURE__ */ R.isValidElement(t))
    return t ?? null;
  const l = Ao(t) ? sn($o(t), a) : a;
  return Ma(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (Da.displayName = "Wave");
const jl = (e) => {
  const t = R.useContext(as);
  return R.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, Nl = /* @__PURE__ */ _.createContext(null), Ll = (e, t) => {
  const r = _.useContext(Nl), n = _.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: a,
      isLastItem: i
    } = r, c = o === "vertical" ? "-vertical-" : "-";
    return oe(`${e}-compact${c}item`, {
      [`${e}-compact${c}first-item`]: a,
      [`${e}-compact${c}last-item`]: i,
      [`${e}-compact${c}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: n
  };
};
var Bl = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const za = /* @__PURE__ */ _.createContext(void 0), Dl = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = _.useContext(Le), {
    prefixCls: n,
    size: o,
    className: a
  } = e, i = Bl(e, ["prefixCls", "size", "className"]), c = t("btn-group", n), [, , s] = pn(), l = _.useMemo(() => {
    switch (o) {
      case "large":
        return "lg";
      case "small":
        return "sm";
      default:
        return "";
    }
  }, [o]);
  if (process.env.NODE_ENV !== "production") {
    const f = sa("Button.Group");
    f.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = oe(c, {
    [`${c}-${l}`]: l,
    [`${c}-rtl`]: r === "rtl"
  }, a, s);
  return /* @__PURE__ */ _.createElement(za.Provider, {
    value: o
  }, /* @__PURE__ */ _.createElement("div", Object.assign({}, i, {
    className: u
  })));
}, yo = /^[\u4E00-\u9FA5]{2}$/, nn = yo.test.bind(yo);
function So(e) {
  return typeof e == "string";
}
function It(e) {
  return e === "text" || e === "link";
}
function zl(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && So(e.type) && nn(e.props.children) ? Ma(e, {
    children: e.props.children.split("").join(r)
  }) : So(e) ? nn(e) ? /* @__PURE__ */ R.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ R.createElement("span", null, e) : sl(e) ? /* @__PURE__ */ R.createElement("span", null, e) : e;
}
function Fl(e, t) {
  let r = !1;
  const n = [];
  return R.Children.forEach(e, (o) => {
    const a = typeof o, i = a === "string" || a === "number";
    if (r && i) {
      const c = n.length - 1, s = n[c];
      n[c] = `${s}${o}`;
    } else
      n.push(o);
    r = i;
  }), R.Children.map(n, (o) => zl(o, t));
}
["default", "primary", "danger"].concat(je(mn));
const on = /* @__PURE__ */ Gt((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: a
  } = e, i = oe(`${a}-icon`, r);
  return /* @__PURE__ */ R.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, o);
}), Co = /* @__PURE__ */ Gt((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: a
  } = e, i = oe(`${r}-loading-icon`, n);
  return /* @__PURE__ */ R.createElement(on, {
    prefixCls: r,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ R.createElement(Ha, {
    className: a
  }));
}), xr = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Er = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), kl = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: a,
    mount: i
  } = e, c = !!r;
  return n ? /* @__PURE__ */ R.createElement(Co, {
    prefixCls: t,
    className: o,
    style: a
  }) : /* @__PURE__ */ R.createElement(yn, {
    visible: c,
    // Used for minus flex gap style only
    motionName: `${t}-loading-icon-motion`,
    motionAppear: !i,
    motionEnter: !i,
    motionLeave: !i,
    removeOnLeave: !0,
    onAppearStart: xr,
    onAppearActive: Er,
    onEnterStart: xr,
    onEnterActive: Er,
    onLeaveStart: Er,
    onLeaveActive: xr
  }, ({
    className: s,
    style: l
  }, u) => {
    const f = Object.assign(Object.assign({}, a), l);
    return /* @__PURE__ */ R.createElement(Co, {
      prefixCls: t,
      className: oe(o, s),
      style: f,
      ref: u
    });
  });
}, xo = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), Vl = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    groupBorderColor: o,
    colorErrorHover: a
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(n).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      xo(`${t}-primary`, o),
      xo(`${t}-danger`, a)
    ]
  };
};
var Wl = ["b"], Gl = ["v"], Tr = function(t) {
  return Math.round(Number(t || 0));
}, Ul = function(t) {
  if (t instanceof Q)
    return t;
  if (t && G(t) === "object" && "h" in t && "b" in t) {
    var r = t, n = r.b, o = nt(r, Wl);
    return O(O({}, o), {}, {
      v: n
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, we = /* @__PURE__ */ function(e) {
  xt(r, e);
  var t = Et(r);
  function r(n) {
    return be(this, r), t.call(this, Ul(n));
  }
  return ye(r, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = Tr(o.s * 100), i = Tr(o.b * 100), c = Tr(o.h), s = o.a, l = "hsb(".concat(c, ", ").concat(a, "%, ").concat(i, "%)"), u = "hsba(".concat(c, ", ").concat(a, "%, ").concat(i, "%, ").concat(s.toFixed(s === 0 ? 0 : 2), ")");
      return s === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = nt(o, Gl);
      return O(O({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), r;
}(Q), Xl = "rc-color-picker", rt = function(t) {
  return t instanceof we ? t : new we(t);
}, Yl = rt("#1677ff"), Fa = function(t) {
  var r = t.offset, n = t.targetRef, o = t.containerRef, a = t.color, i = t.type, c = o.current.getBoundingClientRect(), s = c.width, l = c.height, u = n.current.getBoundingClientRect(), f = u.width, d = u.height, g = f / 2, m = d / 2, h = (r.x + g) / s, v = 1 - (r.y + m) / l, S = a.toHsb(), x = h, T = (r.x + g) / s * 360;
  if (i)
    switch (i) {
      case "hue":
        return rt(O(O({}, S), {}, {
          h: T <= 0 ? 0 : T
        }));
      case "alpha":
        return rt(O(O({}, S), {}, {
          a: x <= 0 ? 0 : x
        }));
    }
  return rt({
    h: S.h,
    s: h <= 0 ? 0 : h,
    b: v >= 1 ? 1 : v,
    a: S.a
  });
}, ka = function(t, r) {
  var n = t.toHsb();
  switch (r) {
    case "hue":
      return {
        x: n.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    default:
      return {
        x: n.s * 100,
        y: (1 - n.b) * 100
      };
  }
}, ql = function(t) {
  var r = t.color, n = t.prefixCls, o = t.className, a = t.style, i = t.onClick, c = "".concat(n, "-color-block");
  return /* @__PURE__ */ R.createElement("div", {
    className: oe(c, o),
    style: a,
    onClick: i
  }, /* @__PURE__ */ R.createElement("div", {
    className: "".concat(c, "-inner"),
    style: {
      background: r
    }
  }));
};
function Kl(e) {
  var t = "touches" in e ? e.touches[0] : e, r = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - r,
    pageY: t.pageY - n
  };
}
function Va(e) {
  var t = e.targetRef, r = e.containerRef, n = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, c = e.color, s = e.disabledDrag, l = _r({
    x: 0,
    y: 0
  }), u = L(l, 2), f = u[0], d = u[1], g = ne(null), m = ne(null);
  Te(function() {
    d(i());
  }, [c]), Te(function() {
    return function() {
      document.removeEventListener("mousemove", g.current), document.removeEventListener("mouseup", m.current), document.removeEventListener("touchmove", g.current), document.removeEventListener("touchend", m.current), g.current = null, m.current = null;
    };
  }, []);
  var h = function(C) {
    var p = Kl(C), E = p.pageX, b = p.pageY, y = r.current.getBoundingClientRect(), P = y.x, H = y.y, N = y.width, w = y.height, j = t.current.getBoundingClientRect(), $ = j.width, I = j.height, D = $ / 2, z = I / 2, F = Math.max(0, Math.min(E - P, N)) - D, B = Math.max(0, Math.min(b - H, w)) - z, U = {
      x: F,
      y: n === "x" ? f.y : B
    };
    if ($ === 0 && I === 0 || $ !== I)
      return !1;
    o == null || o(U);
  }, v = function(C) {
    C.preventDefault(), h(C);
  }, S = function(C) {
    C.preventDefault(), document.removeEventListener("mousemove", g.current), document.removeEventListener("mouseup", m.current), document.removeEventListener("touchmove", g.current), document.removeEventListener("touchend", m.current), g.current = null, m.current = null, a == null || a();
  }, x = function(C) {
    document.removeEventListener("mousemove", g.current), document.removeEventListener("mouseup", m.current), !s && (h(C), document.addEventListener("mousemove", v), document.addEventListener("mouseup", S), document.addEventListener("touchmove", v), document.addEventListener("touchend", S), g.current = v, m.current = S);
  };
  return [f, x];
}
var Wa = function(t) {
  var r = t.size, n = r === void 0 ? "default" : r, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ R.createElement("div", {
    className: oe("".concat(a, "-handler"), M({}, "".concat(a, "-handler-sm"), n === "small")),
    style: {
      backgroundColor: o
    }
  });
}, Ga = function(t) {
  var r = t.children, n = t.style, o = t.prefixCls;
  return /* @__PURE__ */ R.createElement("div", {
    className: "".concat(o, "-palette"),
    style: O({
      position: "relative"
    }, n)
  }, r);
}, Ua = /* @__PURE__ */ Gt(function(e, t) {
  var r = e.children, n = e.x, o = e.y;
  return /* @__PURE__ */ R.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(n, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, r);
}), Ql = function(t) {
  var r = t.color, n = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, c = ne(), s = ne(), l = ne(r), u = Be(function(h) {
    var v = Fa({
      offset: h,
      targetRef: s,
      containerRef: c,
      color: r
    });
    l.current = v, n(v);
  }), f = Va({
    color: r,
    containerRef: c,
    targetRef: s,
    calculate: function() {
      return ka(r);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return a == null ? void 0 : a(l.current);
    },
    disabledDrag: i
  }), d = L(f, 2), g = d[0], m = d[1];
  return /* @__PURE__ */ R.createElement("div", {
    ref: c,
    className: "".concat(o, "-select"),
    onMouseDown: m,
    onTouchStart: m
  }, /* @__PURE__ */ R.createElement(Ga, {
    prefixCls: o
  }, /* @__PURE__ */ R.createElement(Ua, {
    x: g.x,
    y: g.y,
    ref: s
  }, /* @__PURE__ */ R.createElement(Wa, {
    color: r.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ R.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(r.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, Zl = function(t, r) {
  var n = us(t, {
    value: r
  }), o = L(n, 2), a = o[0], i = o[1], c = bt(function() {
    return rt(a);
  }, [a]);
  return [c, i];
}, Jl = function(t) {
  var r = t.colors, n = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, c = t.prefixCls, s = bt(function() {
    return r.map(function(l, u) {
      var f = rt(l);
      return i === "alpha" && u === r.length - 1 && (f = new we(f.setA(1))), f.toRgbString();
    }).join(",");
  }, [r, i]);
  return /* @__PURE__ */ R.createElement("div", {
    className: "".concat(c, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(a, ", ").concat(s, ")")
    }
  }, n);
}, eu = function(t) {
  var r = t.prefixCls, n = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, c = t.color, s = t.type, l = ne(), u = ne(), f = ne(c), d = function(p) {
    return s === "hue" ? p.getHue() : p.a * 100;
  }, g = Be(function(C) {
    var p = Fa({
      offset: C,
      targetRef: u,
      containerRef: l,
      color: c,
      type: s
    });
    f.current = p, a(d(p));
  }), m = Va({
    color: c,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return ka(c, s);
    },
    onDragChange: g,
    onDragChangeComplete: function() {
      i(d(f.current));
    },
    direction: "x",
    disabledDrag: o
  }), h = L(m, 2), v = h[0], S = h[1], x = R.useMemo(function() {
    if (s === "hue") {
      var C = c.toHsb();
      C.s = 1, C.b = 1, C.a = 1;
      var p = new we(C);
      return p;
    }
    return c;
  }, [c, s]), T = R.useMemo(function() {
    return n.map(function(C) {
      return "".concat(C.color, " ").concat(C.percent, "%");
    });
  }, [n]);
  return /* @__PURE__ */ R.createElement("div", {
    ref: l,
    className: oe("".concat(r, "-slider"), "".concat(r, "-slider-").concat(s)),
    onMouseDown: S,
    onTouchStart: S
  }, /* @__PURE__ */ R.createElement(Ga, {
    prefixCls: r
  }, /* @__PURE__ */ R.createElement(Ua, {
    x: v.x,
    y: v.y,
    ref: u
  }, /* @__PURE__ */ R.createElement(Wa, {
    size: "small",
    color: x.toHexString(),
    prefixCls: r
  })), /* @__PURE__ */ R.createElement(Jl, {
    colors: T,
    type: s,
    prefixCls: r
  })));
};
function tu(e) {
  return _.useMemo(function() {
    var t = e || {}, r = t.slider;
    return [r || eu];
  }, [e]);
}
var ru = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}], nu = /* @__PURE__ */ Gt(function(e, t) {
  var r = e.value, n = e.defaultValue, o = e.prefixCls, a = o === void 0 ? Xl : o, i = e.onChange, c = e.onChangeComplete, s = e.className, l = e.style, u = e.panelRender, f = e.disabledAlpha, d = f === void 0 ? !1 : f, g = e.disabled, m = g === void 0 ? !1 : g, h = e.components, v = tu(h), S = L(v, 1), x = S[0], T = Zl(n || Yl, r), C = L(T, 2), p = C[0], E = C[1], b = bt(function() {
    return p.setA(1).toRgbString();
  }, [p]), y = function(B, U) {
    r || E(B), i == null || i(B, U);
  }, P = function(B) {
    return new we(p.setHue(B));
  }, H = function(B) {
    return new we(p.setA(B / 100));
  }, N = function(B) {
    y(P(B), {
      type: "hue",
      value: B
    });
  }, w = function(B) {
    y(H(B), {
      type: "alpha",
      value: B
    });
  }, j = function(B) {
    c && c(P(B));
  }, $ = function(B) {
    c && c(H(B));
  }, I = oe("".concat(a, "-panel"), s, M({}, "".concat(a, "-panel-disabled"), m)), D = {
    prefixCls: a,
    disabled: m,
    color: p
  }, z = /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Ql, _e({
    onChange: y
  }, D, {
    onChangeComplete: c
  })), /* @__PURE__ */ R.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ R.createElement("div", {
    className: oe("".concat(a, "-slider-group"), M({}, "".concat(a, "-slider-group-disabled-alpha"), d))
  }, /* @__PURE__ */ R.createElement(x, _e({}, D, {
    type: "hue",
    colors: ru,
    min: 0,
    max: 359,
    value: p.getHue(),
    onChange: N,
    onChangeComplete: j
  })), !d && /* @__PURE__ */ R.createElement(x, _e({}, D, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: b
    }],
    min: 0,
    max: 100,
    value: p.a * 100,
    onChange: w,
    onChangeComplete: $
  }))), /* @__PURE__ */ R.createElement(ql, {
    color: p.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ R.createElement("div", {
    className: I,
    style: l,
    ref: t
  }, typeof u == "function" ? u(z) : z);
});
process.env.NODE_ENV !== "production" && (nu.displayName = "ColorPicker");
const ou = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", au = (e, t) => e ? ou(e, t) : "";
let iu = /* @__PURE__ */ function() {
  function e(t) {
    be(this, e);
    var r;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (r = t.colors) === null || r === void 0 ? void 0 : r.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = t.cleared;
      return;
    }
    const n = Array.isArray(t);
    n && t.length ? (this.colors = t.map(({
      color: o,
      percent: a
    }) => ({
      color: new e(o),
      percent: a
    })), this.metaColor = new we(this.colors[0].color.metaColor)) : this.metaColor = new we(n ? "" : t), (!t || n && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return ye(e, [{
    key: "toHsb",
    value: function() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function() {
      return au(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function() {
      const {
        colors: r
      } = this;
      return r ? `linear-gradient(90deg, ${r.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(r) {
      return !r || this.isGradient() !== r.isGradient() ? !1 : this.isGradient() ? this.colors.length === r.colors.length && this.colors.every((n, o) => {
        const a = r.colors[o];
        return n.percent === a.percent && n.color.equals(a.color);
      }) : this.toHexString() === r.toHexString();
    }
  }]);
}();
const cu = (e, t) => {
  const {
    r,
    g: n,
    b: o,
    a
  } = e.toRgb(), i = new we(e.toRgbString()).onBackground(t).toHsv();
  return a <= 0.5 ? i.v > 0.5 : r * 0.299 + n * 0.587 + o * 0.114 > 192;
}, Xa = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r
  } = e;
  return lt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: r
  });
}, Ya = (e) => {
  var t, r, n, o, a, i;
  const c = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, s = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, l = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Bt(c), f = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : Bt(s), d = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : Bt(l), g = cu(new iu(e.colorBgSolid), "#fff") ? "#000" : "#fff", m = mn.reduce((h, v) => Object.assign(Object.assign({}, h), {
    [`${v}ShadowColor`]: `0 ${Ue(e.controlOutlineWidth)} 0 ${ht(e[`${v}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, m), {
    fontWeight: 400,
    iconGap: e.marginXS,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: "inherit",
    onlyIconSizeSM: "inherit",
    onlyIconSizeLG: "inherit",
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textTextColor: e.colorText,
    textTextHoverColor: e.colorText,
    textTextActiveColor: e.colorText,
    textHoverBg: e.colorFillTertiary,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    defaultHoverBg: e.colorBgContainer,
    defaultHoverColor: e.colorPrimaryHover,
    defaultHoverBorderColor: e.colorPrimaryHover,
    defaultActiveBg: e.colorBgContainer,
    defaultActiveColor: e.colorPrimaryActive,
    defaultActiveBorderColor: e.colorPrimaryActive,
    solidTextColor: g,
    contentFontSize: c,
    contentFontSizeSM: s,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: f,
    contentLineHeightLG: d,
    paddingBlock: Math.max((e.controlHeight - c * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - s * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * d) / 2 - e.lineWidth, 0)
  });
}, su = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n,
    opacityLoading: o,
    motionDurationSlow: a,
    motionEaseInOut: i,
    iconGap: c,
    calc: s
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: c,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${Ue(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${t}-icon > svg`]: ya(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": ws(e),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${r})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${t}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${t}-compact-item`]: {
          flex: "none"
        }
      },
      // Loading
      [`&${t}-loading`]: {
        opacity: o,
        cursor: "default"
      },
      [`${t}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((l) => `${l} ${a} ${i}`).join(",")
      },
      // iconPosition
      [`&:not(${t}-icon-end)`]: {
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineEnd: s(c).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: s(c).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: s(c).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: s(c).mul(-1).equal()
          }
        }
      }
    }
  };
}, qa = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), lu = (e) => ({
  minWidth: e.controlHeight,
  paddingInline: 0,
  borderRadius: "50%"
}), uu = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Jt = (e, t, r, n, o, a, i, c) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, qa(e, Object.assign({
    background: t
  }, i), Object.assign({
    background: t
  }, c))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: a || void 0
    }
  })
}), fu = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, uu(e))
}), du = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), er = (e, t, r, n) => {
  const a = n && ["link", "text"].includes(n) ? du : fu;
  return Object.assign(Object.assign({}, a(e)), qa(e.componentCls, t, r));
}, tr = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: r
  }, er(e, n, o))
}), rr = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: r
  }, er(e, n, o))
}), nr = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), or = (e, t, r, n) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, er(e, r, n))
}), Ce = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-${r}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, er(e, n, o, r))
}), vu = (e) => {
  const {
    componentCls: t
  } = e;
  return mn.reduce((r, n) => {
    const o = e[`${n}6`], a = e[`${n}1`], i = e[`${n}5`], c = e[`${n}2`], s = e[`${n}3`], l = e[`${n}7`];
    return Object.assign(Object.assign({}, r), {
      [`&${t}-color-${n}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${n}ShadowColor`]
      }, tr(e, e.colorTextLightSolid, o, {
        background: i
      }, {
        background: l
      })), rr(e, o, e.colorBgContainer, {
        color: i,
        borderColor: i,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), nr(e)), or(e, a, {
        color: o,
        background: c
      }, {
        color: o,
        background: s
      })), Ce(e, o, "link", {
        color: i
      }, {
        color: l
      })), Ce(e, o, "text", {
        color: i,
        background: a
      }, {
        color: l,
        background: s
      }))
    });
  }, {});
}, gu = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, tr(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), nr(e)), or(e, e.colorFillTertiary, {
  color: e.defaultColor,
  background: e.colorFillSecondary
}, {
  color: e.defaultColor,
  background: e.colorFill
})), Jt(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Ce(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), hu = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, rr(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), nr(e)), or(e, e.colorPrimaryBg, {
  color: e.colorPrimary,
  background: e.colorPrimaryBgHover
}, {
  color: e.colorPrimary,
  background: e.colorPrimaryBorder
})), Ce(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Ce(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), Jt(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), mu = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, tr(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), rr(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), nr(e)), or(e, e.colorErrorBg, {
  color: e.colorError,
  background: e.colorErrorBgFilledHover
}, {
  color: e.colorError,
  background: e.colorErrorBgActive
})), Ce(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Ce(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Jt(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), pu = (e) => Object.assign(Object.assign({}, Ce(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Jt(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), bu = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: gu(e),
    [`${t}-color-primary`]: hu(e),
    [`${t}-color-dangerous`]: mu(e),
    [`${t}-color-link`]: pu(e)
  }, vu(e));
}, yu = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, rr(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Ce(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), tr(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), Ce(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Cn = (e, t = "") => {
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: o,
    borderRadius: a,
    buttonPaddingHorizontal: i,
    iconCls: c,
    buttonPaddingVertical: s,
    buttonIconOnlyFontSize: l
  } = e;
  return [
    {
      [t]: {
        fontSize: o,
        height: n,
        padding: `${Ue(s)} ${Ue(i)}`,
        borderRadius: a,
        [`&${r}-icon-only`]: {
          width: n,
          [c]: {
            fontSize: l
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: lu(e)
    },
    {
      [`${r}${r}-round${t}`]: {
        borderRadius: e.controlHeight,
        [`&:not(${r}-icon-only)`]: {
          paddingInline: e.buttonPaddingHorizontal
        }
      }
    }
  ];
}, Su = (e) => {
  const t = lt(e, {
    fontSize: e.contentFontSize
  });
  return Cn(t, e.componentCls);
}, Cu = (e) => {
  const t = lt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return Cn(t, `${e.componentCls}-sm`);
}, xu = (e) => {
  const t = lt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return Cn(t, `${e.componentCls}-lg`);
}, Eu = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, Tu = Rs("Button", (e) => {
  const t = Xa(e);
  return [
    // Shared
    su(t),
    // Size
    Su(t),
    Cu(t),
    xu(t),
    // Block
    Eu(t),
    // Color
    bu(t),
    // https://github.com/ant-design/ant-design/issues/50969
    yu(t),
    // Button Group
    Vl(t)
  ];
}, Ya, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function _u(e, t, r, n) {
  const {
    focusElCls: o,
    focus: a,
    borderElCls: i
  } = r, c = i ? "> *" : "", s = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${c}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${n}-status-success)`]: {
      zIndex: 2
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 3
      }
    }, o ? {
      [`&${o}`]: {
        zIndex: 3
      }
    } : {}), {
      [`&[disabled] ${c}`]: {
        zIndex: 0
      }
    })
  };
}
function wu(e, t, r) {
  const {
    borderElCls: n
  } = r, o = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function Ou(e, t = {
  focus: !0
}) {
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, _u(e, n, t, r)), wu(r, n, t))
  };
}
function Ru(e, t, r) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${r}-status-success)`]: {
      zIndex: 2
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 3
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function Au(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function Pu(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Ru(e, t, e.componentCls)), Au(e.componentCls, t))
  };
}
const $u = (e) => {
  const {
    componentCls: t,
    colorPrimaryHover: r,
    lineWidth: n,
    calc: o
  } = e, a = o(n).mul(-1).equal(), i = (c) => {
    const s = `${t}-compact${c ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
    return {
      [`${s} + ${s}::before`]: {
        position: "absolute",
        top: c ? a : 0,
        insetInlineStart: c ? 0 : a,
        backgroundColor: r,
        content: '""',
        width: c ? "100%" : n,
        height: c ? n : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, i()), i(!0));
}, Iu = Ps(["Button", "compact"], (e) => {
  const t = Xa(e);
  return [
    // Space Compact
    Ou(t),
    Pu(t),
    $u(t)
  ];
}, Ya);
var Mu = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Hu(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const ju = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, Nu = /* @__PURE__ */ R.forwardRef((e, t) => {
  var r, n;
  const {
    loading: o = !1,
    prefixCls: a,
    color: i,
    variant: c,
    type: s,
    danger: l = !1,
    shape: u,
    size: f,
    styles: d,
    disabled: g,
    className: m,
    rootClassName: h,
    children: v,
    icon: S,
    iconPosition: x = "start",
    ghost: T = !1,
    block: C = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: p = "button",
    classNames: E,
    style: b = {},
    autoInsertSpace: y,
    autoFocus: P
  } = e, H = Mu(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), N = s || "default", {
    button: w
  } = R.useContext(Le), j = u || (w == null ? void 0 : w.shape) || "default", [$, I] = bt(() => {
    if (i && c)
      return [i, c];
    if (s || l) {
      const J = ju[N] || [];
      return l ? ["danger", J[1]] : J;
    }
    return w != null && w.color && (w != null && w.variant) ? [w.color, w.variant] : ["default", "outlined"];
  }, [s, i, c, l, w == null ? void 0 : w.variant, w == null ? void 0 : w.color]), z = $ === "danger" ? "dangerous" : $, {
    getPrefixCls: F,
    direction: B,
    autoInsertSpace: U,
    className: q,
    style: Y,
    classNames: X,
    styles: ee
  } = ns("button"), le = (r = y ?? U) !== null && r !== void 0 ? r : !0, W = F("btn", a), [ce, ze, Oe] = Tu(W), Re = He(os), se = g ?? Re, ge = He(za), ue = bt(() => Hu(o), [o]), [A, Ae] = _r(ue.loading), [ae, Fe] = _r(!1), Pe = ne(null), Ye = yi(t, Pe), qe = ri.count(v) === 1 && !S && !It(I), te = ne(!0);
  R.useEffect(() => (te.current = !1, () => {
    te.current = !0;
  }), []), fn(() => {
    let J = null;
    ue.delay > 0 ? J = setTimeout(() => {
      J = null, Ae(!0);
    }, ue.delay) : Ae(ue.loading);
    function xe() {
      J && (clearTimeout(J), J = null);
    }
    return xe;
  }, [ue.delay, ue.loading]), Te(() => {
    if (!Pe.current || !le)
      return;
    const J = Pe.current.textContent || "";
    qe && nn(J) ? ae || Fe(!0) : ae && Fe(!1);
  }), Te(() => {
    P && Pe.current && Pe.current.focus();
  }, []);
  const Z = R.useCallback((J) => {
    var xe;
    if (A || se) {
      J.preventDefault();
      return;
    }
    (xe = e.onClick) === null || xe === void 0 || xe.call(e, ("href" in e, J));
  }, [e.onClick, A, se]);
  if (process.env.NODE_ENV !== "production") {
    const J = sa("Button");
    process.env.NODE_ENV !== "production" && J(!(typeof S == "string" && S.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${S}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && J(!(T && It(I)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: fe,
    compactItemClassnames: ke
  } = Ll(W, B), Ke = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, xn = jl((J) => {
    var xe, sr;
    return (sr = (xe = f ?? fe) !== null && xe !== void 0 ? xe : ge) !== null && sr !== void 0 ? sr : J;
  }), En = xn && (n = Ke[xn]) !== null && n !== void 0 ? n : "", Ka = A ? "loading" : S, ir = wl(H, ["navigate"]), Tn = oe(W, ze, Oe, {
    [`${W}-${j}`]: j !== "default" && j,
    // Compatible with versions earlier than 5.21.0
    [`${W}-${N}`]: N,
    [`${W}-dangerous`]: l,
    [`${W}-color-${z}`]: z,
    [`${W}-variant-${I}`]: I,
    [`${W}-${En}`]: En,
    [`${W}-icon-only`]: !v && v !== 0 && !!Ka,
    [`${W}-background-ghost`]: T && !It(I),
    [`${W}-loading`]: A,
    [`${W}-two-chinese-chars`]: ae && le && !A,
    [`${W}-block`]: C,
    [`${W}-rtl`]: B === "rtl",
    [`${W}-icon-end`]: x === "end"
  }, ke, m, h, q), _n = Object.assign(Object.assign({}, Y), b), wn = oe(E == null ? void 0 : E.icon, X.icon), On = Object.assign(Object.assign({}, (d == null ? void 0 : d.icon) || {}), ee.icon || {}), Rn = S && !A ? /* @__PURE__ */ R.createElement(on, {
    prefixCls: W,
    className: wn,
    style: On
  }, S) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ R.createElement(on, {
    prefixCls: W,
    className: wn,
    style: On
  }, o.icon) : /* @__PURE__ */ R.createElement(kl, {
    existIcon: !!S,
    prefixCls: W,
    loading: A,
    mount: te.current
  }), An = v || v === 0 ? Fl(v, qe && le) : null;
  if (ir.href !== void 0)
    return ce(/* @__PURE__ */ R.createElement("a", Object.assign({}, ir, {
      className: oe(Tn, {
        [`${W}-disabled`]: se
      }),
      href: se ? void 0 : ir.href,
      style: _n,
      onClick: Z,
      ref: Ye,
      tabIndex: se ? -1 : 0,
      "aria-disabled": se
    }), Rn, An));
  let cr = /* @__PURE__ */ R.createElement("button", Object.assign({}, H, {
    type: p,
    className: Tn,
    style: _n,
    onClick: Z,
    disabled: se,
    ref: Ye
  }), Rn, An, ke && /* @__PURE__ */ R.createElement(Iu, {
    prefixCls: W
  }));
  return It(I) || (cr = /* @__PURE__ */ R.createElement(Da, {
    component: "Button",
    disabled: A
  }, cr)), ce(cr);
}), ar = Nu;
ar.Group = Dl;
ar.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (ar.displayName = "Button");
const gt = (...e) => e.filter(Boolean).join(" "), Lu = {
  xl: { base: "rl-h-14 rl-px-8 rl-rounded-rl", only: "rl-h-14 rl-w-14 rl-p-0 rl-rounded-rl", icon: "rl-text-lg", text: "rl-text-btn1" },
  l: { base: "rl-h-12 rl-px-6 rl-rounded-rl", only: "rl-h-12 rl-w-12 rl-p-0 rl-rounded-rl", icon: "rl-text-base", text: "rl-text-btn1" },
  m: { base: "rl-h-10 rl-px-4 rl-rounded-rl", only: "rl-h-10 rl-w-10 rl-p-0 rl-rounded-rl", icon: "rl-text-sm", text: "rl-text-btn2" },
  s: { base: "rl-h-8  rl-px-3 rl-rounded-rl", only: "rl-h-8  rl-w-8  rl-p-0 rl-rounded-rl", icon: "rl-text-xs", text: "rl-text-btn2" }
}, Bu = "rl-inline-flex rl-items-center rl-justify-center rl-font-medium rl-leading-none rl-select-none rl-whitespace-nowrap rl-align-middle rl-shadow-none hover:rl-shadow-none active:rl-shadow-none focus:rl-shadow-none focus-visible:rl-shadow-none focus:rl-ring-0 focus-visible:rl-ring-0 rl-outline-none focus:rl-outline-none focus-visible:rl-outline-none active:rl-translate-y-0", Du = {
  primary: "rl-bg-indigo-60 rl-text-staticwhite-10 rl-border-0 hover:rl-bg-indigo-70 active:rl-bg-indigo-80 disabled:rl-bg-neutral-15 disabled:rl-text-neutral-50",
  secondary: "rl-bg-neutral-0 rl-text-indigo-60 rl-border rl-border-indigo-40 hover:rl-bg-neutral-5 hover:rl-border-indigo-50 active:rl-bg-neutral-10 active:rl-border-indigo-60 disabled:rl-text-neutral-50 disabled:rl-border-neutral-20 disabled:rl-bg-neutral-10",
  text: "rl-bg-transparent rl-text-indigo-60 rl-border-0 hover:rl-bg-indigo-10 active:rl-bg-indigo-20 disabled:rl-text-neutral-40",
  success: "rl-bg-success-60 rl-text-staticwhite-10 rl-border-0 hover:rl-bg-success-70 active:rl-bg-success-80 disabled:rl-bg-neutral-15 disabled:rl-text-neutral-50",
  error: "rl-bg-error-60 rl-text-staticwhite-10 rl-border-0 hover:rl-bg-error-70 active:rl-bg-error-80 disabled:rl-bg-neutral-15 disabled:rl-text-neutral-50"
}, Wu = R.forwardRef(function({ rlType: t = "primary", sizeDs: r = "m", icon: n, iconPosition: o = "none", className: a, children: i, disabled: c, ...s }, l) {
  const u = Lu[r], f = t === "secondary" ? "default" : "text", d = o === "left" && n, g = o === "right" && n, m = o === "only" && n, h = m ? /* @__PURE__ */ ft("span", { className: gt("rl-flex rl-items-center rl-justify-center", u.icon), "aria-hidden": !0, children: n }) : /* @__PURE__ */ Qa("span", { className: gt("rl-inline-flex rl-items-center", u.text), children: [
    d && /* @__PURE__ */ ft("span", { className: gt("rl-mr-2", u.icon), "aria-hidden": !0, children: n }),
    /* @__PURE__ */ ft("span", { children: i }),
    g && /* @__PURE__ */ ft("span", { className: gt("rl-ml-2", u.icon), "aria-hidden": !0, children: n })
  ] });
  return /* @__PURE__ */ ft(
    ar,
    {
      ...s,
      ref: l,
      type: f,
      className: gt(Bu, u.base, m && u.only, Du[t], a),
      disabled: c,
      children: h
    }
  );
});
export {
  Wu as Button
};
//# sourceMappingURL=index.mjs.map
