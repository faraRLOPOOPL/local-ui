var If = Object.defineProperty;
var Tf = (e, t, n) => t in e ? If(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Zt = (e, t, n) => Tf(e, typeof t != "symbol" ? t + "" : t, n);
import { jsx as os } from "react/jsx-runtime";
import * as f from "react";
import st, { isValidElement as Nf, version as Ff, useContext as On, createContext as ko, useRef as Ae, useLayoutEffect as Df, useEffect as xn, useState as In, useMemo as Oo, useCallback as is } from "react";
import as, { createPortal as Af, unstable_batchedUpdates as Vf, flushSync as ss } from "react-dom";
function Lf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kl = { exports: {} };
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
})(Kl);
var kf = Kl.exports;
const Ze = /* @__PURE__ */ Lf(kf);
function Ke() {
  return Ke = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ke.apply(null, arguments);
}
function ge(e) {
  "@babel/helpers - typeof";
  return ge = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ge(e);
}
var jf = Symbol.for("react.element"), zf = Symbol.for("react.transitional.element"), Hf = Symbol.for("react.fragment");
function Gl(e) {
  return (
    // Base object type
    e && ge(e) === "object" && // React Element type
    (e.$$typeof === jf || e.$$typeof === zf) && // React Fragment type
    e.type === Hf
  );
}
function Jn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return st.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Jn(r)) : Gl(r) && r.props ? n = n.concat(Jn(r.props.children, t)) : n.push(r));
  }), n;
}
var Si = {}, Oa = [], Bf = function(t) {
  Oa.push(t);
};
function er(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Oa.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function Wf(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Oa.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Xl() {
  Si = {};
}
function Yl(e, t, n) {
  !t && !Si[n] && (e(!1, n), Si[n] = !0);
}
function Ve(e, t) {
  Yl(er, e, t);
}
function Ci(e, t) {
  Yl(Wf, e, t);
}
Ve.preMessage = Bf;
Ve.resetWarned = Xl;
Ve.noteOnce = Ci;
function Uf(e, t) {
  if (ge(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (ge(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ql(e) {
  var t = Uf(e, "string");
  return ge(t) == "symbol" ? t : t + "";
}
function O(e, t, n) {
  return (t = Ql(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ls(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ls(Object(n), !0).forEach(function(r) {
      O(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ls(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function zr(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function qf(e) {
  return e && ge(e) === "object" && zr(e.nativeElement) ? e.nativeElement : zr(e) ? e : null;
}
function yo(e) {
  var t = qf(e);
  if (t)
    return t;
  if (e instanceof st.Component) {
    var n;
    return (n = as.findDOMNode) === null || n === void 0 ? void 0 : n.call(as, e);
  }
  return null;
}
var wi = { exports: {} }, et = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function Kf() {
  if (cs) return et;
  cs = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), p;
  p = Symbol.for("react.module.reference");
  function g(v) {
    if (typeof v == "object" && v !== null) {
      var b = v.$$typeof;
      switch (b) {
        case e:
          switch (v = v.type, v) {
            case n:
            case o:
            case r:
            case c:
            case u:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case s:
                case a:
                case l:
                case m:
                case d:
                case i:
                  return v;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return et.ContextConsumer = a, et.ContextProvider = i, et.Element = e, et.ForwardRef = l, et.Fragment = n, et.Lazy = m, et.Memo = d, et.Portal = t, et.Profiler = o, et.StrictMode = r, et.Suspense = c, et.SuspenseList = u, et.isAsyncMode = function() {
    return !1;
  }, et.isConcurrentMode = function() {
    return !1;
  }, et.isContextConsumer = function(v) {
    return g(v) === a;
  }, et.isContextProvider = function(v) {
    return g(v) === i;
  }, et.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, et.isForwardRef = function(v) {
    return g(v) === l;
  }, et.isFragment = function(v) {
    return g(v) === n;
  }, et.isLazy = function(v) {
    return g(v) === m;
  }, et.isMemo = function(v) {
    return g(v) === d;
  }, et.isPortal = function(v) {
    return g(v) === t;
  }, et.isProfiler = function(v) {
    return g(v) === o;
  }, et.isStrictMode = function(v) {
    return g(v) === r;
  }, et.isSuspense = function(v) {
    return g(v) === c;
  }, et.isSuspenseList = function(v) {
    return g(v) === u;
  }, et.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === o || v === r || v === c || v === u || v === h || typeof v == "object" && v !== null && (v.$$typeof === m || v.$$typeof === d || v.$$typeof === i || v.$$typeof === a || v.$$typeof === l || v.$$typeof === p || v.getModuleId !== void 0);
  }, et.typeOf = g, et;
}
var tt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var us;
function Gf() {
  return us || (us = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), p = !1, g = !1, v = !1, b = !1, y = !1, S;
    S = Symbol.for("react.module.reference");
    function x(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === n || A === o || y || A === r || A === c || A === u || b || A === h || p || g || v || typeof A == "object" && A !== null && (A.$$typeof === m || A.$$typeof === d || A.$$typeof === i || A.$$typeof === a || A.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === S || A.getModuleId !== void 0));
    }
    function E(A) {
      if (typeof A == "object" && A !== null) {
        var B = A.$$typeof;
        switch (B) {
          case e:
            var Q = A.type;
            switch (Q) {
              case n:
              case o:
              case r:
              case c:
              case u:
                return Q;
              default:
                var me = Q && Q.$$typeof;
                switch (me) {
                  case s:
                  case a:
                  case l:
                  case m:
                  case d:
                  case i:
                    return me;
                  default:
                    return B;
                }
            }
          case t:
            return B;
        }
      }
    }
    var C = a, w = i, P = e, M = l, _ = n, $ = m, N = d, T = t, I = o, V = r, D = c, z = u, L = !1, G = !1;
    function W(A) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(A) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function H(A) {
      return E(A) === a;
    }
    function K(A) {
      return E(A) === i;
    }
    function te(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function ae(A) {
      return E(A) === l;
    }
    function we(A) {
      return E(A) === n;
    }
    function fe(A) {
      return E(A) === m;
    }
    function Pe(A) {
      return E(A) === d;
    }
    function pe(A) {
      return E(A) === t;
    }
    function Re(A) {
      return E(A) === o;
    }
    function X(A) {
      return E(A) === r;
    }
    function j(A) {
      return E(A) === c;
    }
    function U(A) {
      return E(A) === u;
    }
    tt.ContextConsumer = C, tt.ContextProvider = w, tt.Element = P, tt.ForwardRef = M, tt.Fragment = _, tt.Lazy = $, tt.Memo = N, tt.Portal = T, tt.Profiler = I, tt.StrictMode = V, tt.Suspense = D, tt.SuspenseList = z, tt.isAsyncMode = W, tt.isConcurrentMode = k, tt.isContextConsumer = H, tt.isContextProvider = K, tt.isElement = te, tt.isForwardRef = ae, tt.isFragment = we, tt.isLazy = fe, tt.isMemo = Pe, tt.isPortal = pe, tt.isProfiler = Re, tt.isStrictMode = X, tt.isSuspense = j, tt.isSuspenseList = U, tt.isValidElementType = x, tt.typeOf = E;
  }()), tt;
}
process.env.NODE_ENV === "production" ? wi.exports = Kf() : wi.exports = Gf();
var ni = wi.exports;
function jo(e, t, n) {
  var r = f.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Xf = Number(Ff.split(".")[0]), Pa = function(t, n) {
  typeof t == "function" ? t(n) : ge(t) === "object" && t && "current" in t && (t.current = n);
}, Ra = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(i) {
    n.forEach(function(a) {
      Pa(a, i);
    });
  };
}, zo = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return jo(function() {
    return Ra.apply(void 0, n);
  }, n, function(o, i) {
    return o.length !== i.length || o.every(function(a, s) {
      return a !== i[s];
    });
  });
}, Ho = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (Zl(t) && Xf >= 19)
    return !0;
  var o = ni.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== ni.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== ni.ForwardRef);
};
function Zl(e) {
  return /* @__PURE__ */ Nf(e) && !Gl(e);
}
var Ma = function(t) {
  if (t && Zl(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
}, Ei = /* @__PURE__ */ f.createContext(null);
function Yf(e) {
  var t = e.children, n = e.onBatchResize, r = f.useRef(0), o = f.useRef([]), i = f.useContext(Ei), a = f.useCallback(function(s, l, c) {
    r.current += 1;
    var u = r.current;
    o.current.push({
      size: s,
      element: l,
      data: c
    }), Promise.resolve().then(function() {
      u === r.current && (n == null || n(o.current), o.current = []);
    }), i == null || i(s, l, c);
  }, [n, i]);
  return /* @__PURE__ */ f.createElement(Ei.Provider, {
    value: a
  }, t);
}
var Jl = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(o, i) {
      return o[0] === n ? (r = i, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), o = this.__entries__[r];
        return o && o[1];
      }, t.prototype.set = function(n, r) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, o = e(r, n);
        ~o && r.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var a = i[o];
          n.call(r, a[1], a[0]);
        }
      }, t;
    }()
  );
}(), xi = typeof window < "u" && typeof document < "u" && window.document === document, Po = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Qf = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Po) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Zf = 2;
function Jf(e, t) {
  var n = !1, r = !1, o = 0;
  function i() {
    n && (n = !1, e()), r && s();
  }
  function a() {
    Qf(i);
  }
  function s() {
    var l = Date.now();
    if (n) {
      if (l - o < Zf)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(a, t);
    o = l;
  }
  return s;
}
var ed = 20, td = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], nd = typeof MutationObserver < "u", rd = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Jf(this.refresh.bind(this), ed);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !xi || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), nd ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !xi || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = td.some(function(i) {
        return !!~r.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), ec = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, pr = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Po;
}, tc = Bo(0, 0, 0, 0);
function Ro(e) {
  return parseFloat(e) || 0;
}
function fs(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var i = e["border-" + o + "-width"];
    return r + Ro(i);
  }, 0);
}
function od(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var i = o[r], a = e["padding-" + i];
    n[i] = Ro(a);
  }
  return n;
}
function id(e) {
  var t = e.getBBox();
  return Bo(0, 0, t.width, t.height);
}
function ad(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return tc;
  var r = pr(e).getComputedStyle(e), o = od(r), i = o.left + o.right, a = o.top + o.bottom, s = Ro(r.width), l = Ro(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + i) !== t && (s -= fs(r, "left", "right") + i), Math.round(l + a) !== n && (l -= fs(r, "top", "bottom") + a)), !ld(e)) {
    var c = Math.round(s + i) - t, u = Math.round(l + a) - n;
    Math.abs(c) !== 1 && (s -= c), Math.abs(u) !== 1 && (l -= u);
  }
  return Bo(o.left, o.top, s, l);
}
var sd = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof pr(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof pr(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function ld(e) {
  return e === pr(e).document.documentElement;
}
function cd(e) {
  return xi ? sd(e) ? id(e) : ad(e) : tc;
}
function ud(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, a = Object.create(i.prototype);
  return ec(a, {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: o + n,
    left: t
  }), a;
}
function Bo(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var fd = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Bo(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = cd(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), dd = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = ud(n);
      ec(this, { target: t, contentRect: r });
    }
    return e;
  }()
), vd = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Jl(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof pr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new fd(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof pr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new dd(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), nc = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Jl(), rc = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = rd.getInstance(), r = new vd(t, n, this);
      nc.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  rc.prototype[e] = function() {
    var t;
    return (t = nc.get(this))[e].apply(t, arguments);
  };
});
var md = function() {
  return typeof Po.ResizeObserver < "u" ? Po.ResizeObserver : rc;
}(), $n = /* @__PURE__ */ new Map();
function oc(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = $n.get(r)) === null || n === void 0 || n.forEach(function(o) {
      return o(r);
    });
  });
}
var ic = new md(oc);
process.env.NODE_ENV;
process.env.NODE_ENV;
function hd(e, t) {
  $n.has(e) || ($n.set(e, /* @__PURE__ */ new Set()), ic.observe(e)), $n.get(e).add(t);
}
function gd(e, t) {
  $n.has(e) && ($n.get(e).delete(t), $n.get(e).size || (ic.unobserve(e), $n.delete(e)));
}
function At(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ds(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ql(r.key), r);
  }
}
function Vt(e, t, n) {
  return t && ds(e.prototype, t), n && ds(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Hr(e, t) {
  return Hr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Hr(e, t);
}
function tr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Hr(e, t);
}
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Br(e);
}
function _a() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_a = function() {
    return !!e;
  })();
}
function De(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pd(e, t) {
  if (t && (ge(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return De(e);
}
function nr(e) {
  var t = _a();
  return function() {
    var n, r = Br(e);
    if (t) {
      var o = Br(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return pd(this, n);
  };
}
var yd = /* @__PURE__ */ function(e) {
  tr(n, e);
  var t = nr(n);
  function n() {
    return At(this, n), t.apply(this, arguments);
  }
  return Vt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(f.Component);
function bd(e, t) {
  var n = e.children, r = e.disabled, o = f.useRef(null), i = f.useRef(null), a = f.useContext(Ei), s = typeof n == "function", l = s ? n(o) : n, c = f.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ f.isValidElement(l) && Ho(l), d = u ? Ma(l) : null, m = zo(d, o), h = function() {
    var b;
    return yo(o.current) || // Support `nativeElement` format
    (o.current && ge(o.current) === "object" ? yo((b = o.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || yo(i.current);
  };
  f.useImperativeHandle(t, function() {
    return h();
  });
  var p = f.useRef(e);
  p.current = e;
  var g = f.useCallback(function(v) {
    var b = p.current, y = b.onResize, S = b.data, x = v.getBoundingClientRect(), E = x.width, C = x.height, w = v.offsetWidth, P = v.offsetHeight, M = Math.floor(E), _ = Math.floor(C);
    if (c.current.width !== M || c.current.height !== _ || c.current.offsetWidth !== w || c.current.offsetHeight !== P) {
      var $ = {
        width: M,
        height: _,
        offsetWidth: w,
        offsetHeight: P
      };
      c.current = $;
      var N = w === Math.round(E) ? E : w, T = P === Math.round(C) ? C : P, I = R(R({}, $), {}, {
        offsetWidth: N,
        offsetHeight: T
      });
      a == null || a(I, v, S), y && Promise.resolve().then(function() {
        y(I, v);
      });
    }
  }, []);
  return f.useEffect(function() {
    var v = h();
    return v && !r && hd(v, g), function() {
      return gd(v, g);
    };
  }, [o.current, r]), /* @__PURE__ */ f.createElement(yd, {
    ref: i
  }, u ? /* @__PURE__ */ f.cloneElement(l, {
    ref: m
  }) : l);
}
var ac = /* @__PURE__ */ f.forwardRef(bd);
process.env.NODE_ENV !== "production" && (ac.displayName = "SingleObserver");
var Sd = "rc-observer-key";
function Cd(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Jn(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? er(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && er(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(o, i) {
    var a = (o == null ? void 0 : o.key) || "".concat(Sd, "-").concat(i);
    return /* @__PURE__ */ f.createElement(ac, Ke({}, e, {
      key: a,
      ref: i === 0 ? t : void 0
    }), o);
  });
}
var Un = /* @__PURE__ */ f.forwardRef(Cd);
process.env.NODE_ENV !== "production" && (Un.displayName = "ResizeObserver");
Un.Collection = Yf;
function Oi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function wd(e) {
  if (Array.isArray(e)) return Oi(e);
}
function sc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function $a(e, t) {
  if (e) {
    if (typeof e == "string") return Oi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Oi(e, t) : void 0;
  }
}
function Ed() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function le(e) {
  return wd(e) || sc(e) || $a(e) || Ed();
}
var lc = function(t) {
  return +setTimeout(t, 16);
}, cc = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (lc = function(t) {
  return window.requestAnimationFrame(t);
}, cc = function(t) {
  return window.cancelAnimationFrame(t);
});
var vs = 0, Wo = /* @__PURE__ */ new Map();
function uc(e) {
  Wo.delete(e);
}
var Wt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  vs += 1;
  var r = vs;
  function o(i) {
    if (i === 0)
      uc(r), t();
    else {
      var a = lc(function() {
        o(i - 1);
      });
      Wo.set(r, a);
    }
  }
  return o(n), r;
};
Wt.cancel = function(e) {
  var t = Wo.get(e);
  return uc(e), cc(t);
};
process.env.NODE_ENV !== "production" && (Wt.ids = function() {
  return Wo;
});
function fc(e) {
  if (Array.isArray(e)) return e;
}
function xd(e, t) {
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
function dc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F(e, t) {
  return fc(e) || xd(e, t) || $a(e, t) || dc();
}
function Wr(e) {
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
function Ut() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Od(e, t) {
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
var ms = "data-rc-order", hs = "data-rc-priority", Pd = "rc-util-key", Pi = /* @__PURE__ */ new Map();
function vc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Pd;
}
function Uo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Rd(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ia(e) {
  return Array.from((Pi.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function mc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ut())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, i = o === void 0 ? 0 : o, a = Rd(r), s = a === "prependQueue", l = document.createElement("style");
  l.setAttribute(ms, a), s && i && l.setAttribute(hs, "".concat(i)), n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce), l.innerHTML = e;
  var c = Uo(t), u = c.firstChild;
  if (r) {
    if (s) {
      var d = (t.styles || Ia(c)).filter(function(m) {
        if (!["prepend", "prependQueue"].includes(m.getAttribute(ms)))
          return !1;
        var h = Number(m.getAttribute(hs) || 0);
        return i >= h;
      });
      if (d.length)
        return c.insertBefore(l, d[d.length - 1].nextSibling), l;
    }
    c.insertBefore(l, u);
  } else
    c.appendChild(l);
  return l;
}
function hc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Uo(t);
  return (t.styles || Ia(n)).find(function(r) {
    return r.getAttribute(vc(t)) === e;
  });
}
function Ur(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = hc(e, t);
  if (n) {
    var r = Uo(t);
    r.removeChild(n);
  }
}
function Md(e, t) {
  var n = Pi.get(e);
  if (!n || !Od(document, n)) {
    var r = mc("", t), o = r.parentNode;
    Pi.set(e, o), e.removeChild(r);
  }
}
function Tn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Uo(n), o = Ia(r), i = R(R({}, n), {}, {
    styles: o
  });
  Md(r, i);
  var a = hc(t, i);
  if (a) {
    var s, l;
    if ((s = i.csp) !== null && s !== void 0 && s.nonce && a.nonce !== ((l = i.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var c;
      a.nonce = (c = i.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var u = mc(e, i);
  return u.setAttribute(vc(i), t), u;
}
function _d(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function St(e, t) {
  if (e == null) return {};
  var n, r, o = _d(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Ri(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(i, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = r.has(i);
    if (Ve(!l, "Warning: There may be circular references"), l)
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
    if (i && a && ge(i) === "object" && ge(a) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(a).length ? !1 : d.every(function(m) {
        return o(i[m], a[m], c);
      });
    }
    return !1;
  }
  return o(e, t);
}
var $d = "%";
function Mi(e) {
  return e.join($d);
}
var Id = /* @__PURE__ */ function() {
  function e(t) {
    At(this, e), O(this, "instanceId", void 0), O(this, "cache", /* @__PURE__ */ new Map()), O(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return Vt(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Mi(n));
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
      return this.opUpdate(Mi(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), i = r(o);
      i === null ? this.cache.delete(n) : this.cache.set(n, i);
    }
  }]), e;
}(), yr = "data-token-hash", vn = "data-css-hash", Td = "data-cache-path", Hn = "__cssinjs_instance__";
function Nd() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(vn, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Hn] = o[Hn] || e, o[Hn] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(vn, "]"))).forEach(function(o) {
      var i = o.getAttribute(vn);
      if (r[i]) {
        if (o[Hn] === e) {
          var a;
          (a = o.parentNode) === null || a === void 0 || a.removeChild(o);
        }
      } else
        r[i] = !0;
    });
  }
  return new Id(e);
}
var Qr = /* @__PURE__ */ f.createContext({
  hashPriority: "low",
  cache: Nd(),
  defaultCache: !0
});
function Fd(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Ta = /* @__PURE__ */ function() {
  function e() {
    At(this, e), O(this, "cache", void 0), O(this, "keys", void 0), O(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Vt(e, [{
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
            var d = F(c, 2), m = d[1];
            return o.internalGet(u)[1] < m ? [u, o.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), a = F(i, 1), s = a[0];
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
          var d = l.get(c);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : l.set(c, {
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
          return !Fd(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
O(Ta, "MAX_CACHE_SIZE", 20);
O(Ta, "MAX_CACHE_OFFSET", 5);
var gs = 0, gc = /* @__PURE__ */ function() {
  function e(t) {
    At(this, e), O(this, "derivatives", void 0), O(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = gs, t.length === 0 && er(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), gs += 1;
  }
  return Vt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
}(), ri = new Ta();
function _i(e) {
  var t = Array.isArray(e) ? e : [e];
  return ri.has(t) || ri.set(t, new gc(t)), ri.get(t);
}
var Dd = /* @__PURE__ */ new WeakMap(), oi = {};
function Ad(e, t) {
  for (var n = Dd, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(oi) || n.set(oi, e()), n.get(oi);
}
var ps = /* @__PURE__ */ new WeakMap();
function Ar(e) {
  var t = ps.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof gc ? t += r.id : r && ge(r) === "object" ? t += Ar(r) : t += r;
  }), t = Wr(t), ps.set(e, t)), t;
}
function ys(e, t) {
  return Wr("".concat(t, "_").concat(Ar(e)));
}
var $i = Ut();
function mt(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Mo(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var i = R(R({}, r), {}, O(O({}, yr, t), vn, n)), a = Object.keys(i).map(function(s) {
    var l = i[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(a, ">").concat(e, "</style>");
}
var bo = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Vd = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var i = F(o, 2), a = i[0], s = i[1];
    return "".concat(a, ":").concat(s, ";");
  }).join(""), "}") : "";
}, pc = function(t, n, r) {
  var o = {}, i = {};
  return Object.entries(t).forEach(function(a) {
    var s, l, c = F(a, 2), u = c[0], d = c[1];
    if (r != null && (s = r.preserve) !== null && s !== void 0 && s[u])
      i[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (l = r.ignore) !== null && l !== void 0 && l[u])) {
      var m, h = bo(u, r == null ? void 0 : r.prefix);
      o[h] = typeof d == "number" && !(r != null && (m = r.unitless) !== null && m !== void 0 && m[u]) ? "".concat(d, "px") : String(d), i[u] = "var(".concat(h, ")");
    }
  }), [i, Vd(o, n, {
    scope: r == null ? void 0 : r.scope
  })];
}, bs = process.env.NODE_ENV !== "test" && Ut() ? f.useLayoutEffect : f.useEffect, bt = function(t, n) {
  var r = f.useRef(!0);
  bs(function() {
    return t(r.current);
  }, n), bs(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Ss = function(t, n) {
  bt(function(r) {
    if (!r)
      return t();
  }, n);
}, Ld = R({}, f), Cs = Ld.useInsertionEffect, kd = function(t, n, r) {
  f.useMemo(t, r), bt(function() {
    return n(!0);
  }, r);
}, jd = Cs ? function(e, t, n) {
  return Cs(function() {
    return e(), t();
  }, n);
} : kd, zd = R({}, f), Hd = zd.useInsertionEffect, Bd = function(t) {
  var n = [], r = !1;
  function o(i) {
    if (r) {
      process.env.NODE_ENV !== "production" && er(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(i);
  }
  return f.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(i) {
        return i();
      });
    };
  }, t), o;
}, Wd = function() {
  return function(t) {
    t();
  };
}, Ud = typeof Hd < "u" ? Bd : Wd;
function qd() {
  return !1;
}
var Ii = !1;
function Kd() {
  return Ii;
}
const Gd = process.env.NODE_ENV === "production" ? qd : Kd;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var so = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (so && typeof so.webpackHotUpdate == "function") {
    var Xd = so.webpackHotUpdate;
    so.webpackHotUpdate = function() {
      return Ii = !0, setTimeout(function() {
        Ii = !1;
      }, 0), Xd.apply(void 0, arguments);
    };
  }
}
function Na(e, t, n, r, o) {
  var i = f.useContext(Qr), a = i.cache, s = [e].concat(le(t)), l = Mi(s), c = Ud([l]), u = Gd(), d = function(g) {
    a.opUpdate(l, function(v) {
      var b = v || [void 0, void 0], y = F(b, 2), S = y[0], x = S === void 0 ? 0 : S, E = y[1], C = E;
      process.env.NODE_ENV !== "production" && E && u && (r == null || r(C, u), C = null);
      var w = C || n(), P = [x, w];
      return g ? g(P) : P;
    });
  };
  f.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var m = a.opGet(l);
  process.env.NODE_ENV !== "production" && !m && (d(), m = a.opGet(l));
  var h = m[1];
  return jd(function() {
    o == null || o(h);
  }, function(p) {
    return d(function(g) {
      var v = F(g, 2), b = v[0], y = v[1];
      return p && b === 0 && (o == null || o(h)), [b + 1, y];
    }), function() {
      a.opUpdate(l, function(g) {
        var v = g || [], b = F(v, 2), y = b[0], S = y === void 0 ? 0 : y, x = b[1], E = S - 1;
        return E === 0 ? (c(function() {
          (p || !a.opGet(l)) && (r == null || r(x, !1));
        }), null) : [S - 1, x];
      });
    };
  }, [l]), h;
}
var Yd = {}, Qd = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Yn = /* @__PURE__ */ new Map();
function Zd(e) {
  Yn.set(e, (Yn.get(e) || 0) + 1);
}
function Jd(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(yr, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Hn] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var ev = 0;
function tv(e, t) {
  Yn.set(e, (Yn.get(e) || 0) - 1);
  var n = /* @__PURE__ */ new Set();
  Yn.forEach(function(r, o) {
    r <= 0 && n.add(o);
  }), Yn.size - n.size > ev && n.forEach(function(r) {
    Jd(r, t), Yn.delete(r);
  });
}
var nv = function(t, n, r, o) {
  var i = r.getDerivativeToken(t), a = R(R({}, i), n);
  return o && (a = o(a)), a;
}, yc = "token";
function rv(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = On(Qr), o = r.cache.instanceId, i = r.container, a = n.salt, s = a === void 0 ? "" : a, l = n.override, c = l === void 0 ? Yd : l, u = n.formatToken, d = n.getComputedToken, m = n.cssVar, h = Ad(function() {
    return Object.assign.apply(Object, [{}].concat(le(t)));
  }, t), p = Ar(h), g = Ar(c), v = m ? Ar(m) : "", b = Na(yc, [s, e.id, p, g, v], function() {
    var y, S = d ? d(h, c, e) : nv(h, c, e, u), x = R({}, S), E = "";
    if (m) {
      var C = pc(S, m.key, {
        prefix: m.prefix,
        ignore: m.ignore,
        unitless: m.unitless,
        preserve: m.preserve
      }), w = F(C, 2);
      S = w[0], E = w[1];
    }
    var P = ys(S, s);
    S._tokenKey = P, x._tokenKey = ys(x, s);
    var M = (y = m == null ? void 0 : m.key) !== null && y !== void 0 ? y : P;
    S._themeKey = M, Zd(M);
    var _ = "".concat(Qd, "-").concat(Wr(P));
    return S._hashId = _, [S, _, x, E, (m == null ? void 0 : m.key) || ""];
  }, function(y) {
    tv(y[0]._themeKey, o);
  }, function(y) {
    var S = F(y, 4), x = S[0], E = S[3];
    if (m && E) {
      var C = Tn(E, Wr("css-variables-".concat(x._themeKey)), {
        mark: vn,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      C[Hn] = o, C.setAttribute(yr, x._themeKey);
    }
  });
  return b;
}
var ov = function(t, n, r) {
  var o = F(t, 5), i = o[2], a = o[3], s = o[4], l = r || {}, c = l.plain;
  if (!a)
    return null;
  var u = i._tokenKey, d = -999, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, h = Mo(a, s, u, m, c);
  return [d, u, h];
}, iv = {
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
}, bc = "comm", Sc = "rule", Cc = "decl", av = "@import", sv = "@namespace", lv = "@keyframes", cv = "@layer", wc = Math.abs, Fa = String.fromCharCode;
function Ec(e) {
  return e.trim();
}
function So(e, t, n) {
  return e.replace(t, n);
}
function uv(e, t, n) {
  return e.indexOf(t, n);
}
function hr(e, t) {
  return e.charCodeAt(t) | 0;
}
function br(e, t, n) {
  return e.slice(t, n);
}
function wn(e) {
  return e.length;
}
function fv(e) {
  return e.length;
}
function lo(e, t) {
  return t.push(e), e;
}
var qo = 1, Sr = 1, xc = 0, sn = 0, Et = 0, xr = "";
function Da(e, t, n, r, o, i, a, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: qo, column: Sr, length: a, return: "", siblings: s };
}
function dv() {
  return Et;
}
function vv() {
  return Et = sn > 0 ? hr(xr, --sn) : 0, Sr--, Et === 10 && (Sr = 1, qo--), Et;
}
function mn() {
  return Et = sn < xc ? hr(xr, sn++) : 0, Sr++, Et === 10 && (Sr = 1, qo++), Et;
}
function Bn() {
  return hr(xr, sn);
}
function Co() {
  return sn;
}
function Ko(e, t) {
  return br(xr, e, t);
}
function qr(e) {
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
function mv(e) {
  return qo = Sr = 1, xc = wn(xr = e), sn = 0, [];
}
function hv(e) {
  return xr = "", e;
}
function ii(e) {
  return Ec(Ko(sn - 1, Ti(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gv(e) {
  for (; (Et = Bn()) && Et < 33; )
    mn();
  return qr(e) > 2 || qr(Et) > 3 ? "" : " ";
}
function pv(e, t) {
  for (; --t && mn() && !(Et < 48 || Et > 102 || Et > 57 && Et < 65 || Et > 70 && Et < 97); )
    ;
  return Ko(e, Co() + (t < 6 && Bn() == 32 && mn() == 32));
}
function Ti(e) {
  for (; mn(); )
    switch (Et) {
      case e:
        return sn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ti(Et);
        break;
      case 40:
        e === 41 && Ti(e);
        break;
      case 92:
        mn();
        break;
    }
  return sn;
}
function yv(e, t) {
  for (; mn() && e + Et !== 57; )
    if (e + Et === 84 && Bn() === 47)
      break;
  return "/*" + Ko(t, sn - 1) + "*" + Fa(e === 47 ? e : mn());
}
function bv(e) {
  for (; !qr(Bn()); )
    mn();
  return Ko(e, sn);
}
function Sv(e) {
  return hv(wo("", null, null, null, [""], e = mv(e), 0, [0], e));
}
function wo(e, t, n, r, o, i, a, s, l) {
  for (var c = 0, u = 0, d = a, m = 0, h = 0, p = 0, g = 1, v = 1, b = 1, y = 0, S = "", x = o, E = i, C = r, w = S; v; )
    switch (p = y, y = mn()) {
      case 40:
        if (p != 108 && hr(w, d - 1) == 58) {
          uv(w += So(ii(y), "&", "&\f"), "&\f", wc(c ? s[c - 1] : 0)) != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += ii(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += gv(p);
        break;
      case 92:
        w += pv(Co() - 1, 7);
        continue;
      case 47:
        switch (Bn()) {
          case 42:
          case 47:
            lo(Cv(yv(mn(), Co()), t, n, l), l), (qr(p || 1) == 5 || qr(Bn() || 1) == 5) && wn(w) && br(w, -1, void 0) !== " " && (w += " ");
            break;
          default:
            w += "/";
        }
        break;
      case 123 * g:
        s[c++] = wn(w) * b;
      case 125 * g:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            v = 0;
          case 59 + u:
            b == -1 && (w = So(w, /\f/g, "")), h > 0 && (wn(w) - d || g === 0 && p === 47) && lo(h > 32 ? Es(w + ";", r, n, d - 1, l) : Es(So(w, " ", "") + ";", r, n, d - 2, l), l);
            break;
          case 59:
            w += ";";
          default:
            if (lo(C = ws(w, t, n, c, u, o, s, S, x = [], E = [], d, i), i), y === 123)
              if (u === 0)
                wo(w, t, C, C, x, i, d, s, E);
              else {
                switch (m) {
                  case 99:
                    if (hr(w, 3) === 110) break;
                  case 108:
                    if (hr(w, 2) === 97) break;
                  default:
                    u = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                u ? wo(e, C, C, r && lo(ws(e, C, C, 0, 0, o, s, S, o, x = [], d, E), E), o, E, d, s, r ? x : E) : wo(w, C, C, C, [""], E, 0, s, E);
              }
        }
        c = u = h = 0, g = b = 1, S = w = "", d = a;
        break;
      case 58:
        d = 1 + wn(w), h = p;
      default:
        if (g < 1) {
          if (y == 123)
            --g;
          else if (y == 125 && g++ == 0 && vv() == 125)
            continue;
        }
        switch (w += Fa(y), y * g) {
          case 38:
            b = u > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            s[c++] = (wn(w) - 1) * b, b = 1;
            break;
          case 64:
            Bn() === 45 && (w += ii(mn())), m = Bn(), u = d = wn(S = w += bv(Co())), y++;
            break;
          case 45:
            p === 45 && wn(w) == 2 && (g = 0);
        }
    }
  return i;
}
function ws(e, t, n, r, o, i, a, s, l, c, u, d) {
  for (var m = o - 1, h = o === 0 ? i : [""], p = fv(h), g = 0, v = 0, b = 0; g < r; ++g)
    for (var y = 0, S = br(e, m + 1, m = wc(v = a[g])), x = e; y < p; ++y)
      (x = Ec(v > 0 ? h[y] + " " + S : So(S, /&\f/g, h[y]))) && (l[b++] = x);
  return Da(e, t, n, o === 0 ? Sc : s, l, c, u, d);
}
function Cv(e, t, n, r) {
  return Da(e, t, n, bc, Fa(dv()), br(e, 2, -2), 0, r);
}
function Es(e, t, n, r, o) {
  return Da(e, t, n, Cc, br(e, 0, r), br(e, r + 1, -1), r, o);
}
function Ni(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function wv(e, t, n, r) {
  switch (e.type) {
    case cv:
      if (e.children.length) break;
    case av:
    case sv:
    case Cc:
      return e.return = e.return || e.value;
    case bc:
      return "";
    case lv:
      return e.return = e.value + "{" + Ni(e.children, r) + "}";
    case Sc:
      if (!wn(e.value = e.props.join(","))) return "";
  }
  return wn(n = Ni(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Oc(e, t) {
  var n = t.path, r = t.parentSelectors;
  Ve(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var Ev = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Oc("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, xv = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Oc("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, xs = "data-ant-cssinjs-cache-path", Pc = "_FILE_STYLE__", Zn, Rc = !0;
function Ov() {
  if (!Zn && (Zn = {}, Ut())) {
    var e = document.createElement("div");
    e.className = xs, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var i = o.split(":"), a = F(i, 2), s = a[0], l = a[1];
      Zn[s] = l;
    });
    var n = document.querySelector("style[".concat(xs, "]"));
    if (n) {
      var r;
      Rc = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Pv(e) {
  return Ov(), !!Zn[e];
}
function Rv(e) {
  var t = Zn[e], n = null;
  if (t && Ut())
    if (Rc)
      n = Pc;
    else {
      var r = document.querySelector("style[".concat(vn, '="').concat(Zn[e], '"]'));
      r ? n = r.innerHTML : delete Zn[e];
    }
  return [n, t];
}
var Mc = "_skip_check_", _c = "_multi_value_";
function Eo(e) {
  var t = Ni(Sv(e), wv);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Mv(e) {
  return ge(e) === "object" && e && (Mc in e || _c in e);
}
function Os(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(a) {
    var s, l = a.trim().split(/\s+/), c = l[0] || "", u = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(u).concat(o).concat(c.slice(u.length)), [c].concat(le(l.slice(1))).join(" ");
  });
  return i.join(",");
}
var _v = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, i = r.injectHash, a = r.parentSelectors, s = n.hashId, l = n.layer, c = n.path, u = n.hashPriority, d = n.transformers, m = d === void 0 ? [] : d, h = n.linters, p = h === void 0 ? [] : h, g = "", v = {};
  function b(x) {
    var E = x.getName(s);
    if (!v[E]) {
      var C = e(x.style, n, {
        root: !1,
        parentSelectors: a
      }), w = F(C, 1), P = w[0];
      v[E] = "@keyframes ".concat(x.getName(s)).concat(P);
    }
  }
  function y(x) {
    var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return x.forEach(function(C) {
      Array.isArray(C) ? y(C, E) : C && E.push(C);
    }), E;
  }
  var S = y(Array.isArray(t) ? t : [t]);
  return S.forEach(function(x) {
    var E = typeof x == "string" && !o ? {} : x;
    if (typeof E == "string")
      g += "".concat(E, `
`);
    else if (E._keyframe)
      b(E);
    else {
      var C = m.reduce(function(w, P) {
        var M;
        return (P == null || (M = P.visit) === null || M === void 0 ? void 0 : M.call(P, w)) || w;
      }, E);
      Object.keys(C).forEach(function(w) {
        var P = C[w];
        if (ge(P) === "object" && P && (w !== "animationName" || !P._keyframe) && !Mv(P)) {
          var M = !1, _ = w.trim(), $ = !1;
          (o || i) && s ? _.startsWith("@") ? M = !0 : _ === "&" ? _ = Os("", s, u) : _ = Os(w, s, u) : o && !s && (_ === "&" || _ === "") && (_ = "", $ = !0);
          var N = e(P, n, {
            root: $,
            injectHash: M,
            parentSelectors: [].concat(le(a), [_])
          }), T = F(N, 2), I = T[0], V = T[1];
          v = R(R({}, v), V), g += "".concat(_).concat(I);
        } else {
          let L = function(G, W) {
            process.env.NODE_ENV !== "production" && (ge(P) !== "object" || !(P != null && P[Mc])) && [Ev, xv].concat(le(p)).forEach(function(K) {
              return K(G, W, {
                path: c,
                hashId: s,
                parentSelectors: a
              });
            });
            var k = G.replace(/[A-Z]/g, function(K) {
              return "-".concat(K.toLowerCase());
            }), H = W;
            !iv[G] && typeof H == "number" && H !== 0 && (H = "".concat(H, "px")), G === "animationName" && W !== null && W !== void 0 && W._keyframe && (b(W), H = W.getName(s)), g += "".concat(k, ":").concat(H, ";");
          };
          var D, z = (D = P == null ? void 0 : P.value) !== null && D !== void 0 ? D : P;
          ge(P) === "object" && P !== null && P !== void 0 && P[_c] && Array.isArray(z) ? z.forEach(function(G) {
            L(w, G);
          }) : L(w, z);
        }
      });
    }
  }), o ? l && (g && (g = "@layer ".concat(l.name, " {").concat(g, "}")), l.dependencies && (v["@layer ".concat(l.name)] = l.dependencies.map(function(x) {
    return "@layer ".concat(x, ", ").concat(l.name, ";");
  }).join(`
`))) : g = "{".concat(g, "}"), [g, v];
};
function $c(e, t) {
  return Wr("".concat(e.join("%")).concat(t));
}
function $v() {
  return null;
}
var Ic = "style";
function Fi(e, t) {
  var n = e.token, r = e.path, o = e.hashId, i = e.layer, a = e.nonce, s = e.clientOnly, l = e.order, c = l === void 0 ? 0 : l, u = f.useContext(Qr), d = u.autoClear, m = u.mock, h = u.defaultCache, p = u.hashPriority, g = u.container, v = u.ssrInline, b = u.transformers, y = u.linters, S = u.cache, x = u.layer, E = n._tokenKey, C = [E];
  x && C.push("layer"), C.push.apply(C, le(r));
  var w = $i;
  process.env.NODE_ENV !== "production" && m !== void 0 && (w = m === "client");
  var P = Na(
    Ic,
    C,
    // Create cache if needed
    function() {
      var T = C.join("|");
      if (Pv(T)) {
        var I = Rv(T), V = F(I, 2), D = V[0], z = V[1];
        if (D)
          return [D, E, z, {}, s, c];
      }
      var L = t(), G = _v(L, {
        hashId: o,
        hashPriority: p,
        layer: x ? i : void 0,
        path: r.join("-"),
        transformers: b,
        linters: y
      }), W = F(G, 2), k = W[0], H = W[1], K = Eo(k), te = $c(C, K);
      return [K, E, te, H, s, c];
    },
    // Remove cache if no need
    function(T, I) {
      var V = F(T, 3), D = V[2];
      (I || d) && $i && Ur(D, {
        mark: vn,
        attachTo: g
      });
    },
    // Effect: Inject style here
    function(T) {
      var I = F(T, 4), V = I[0];
      I[1];
      var D = I[2], z = I[3];
      if (w && V !== Pc) {
        var L = {
          mark: vn,
          prepend: x ? !1 : "queue",
          attachTo: g,
          priority: c
        }, G = typeof a == "function" ? a() : a;
        G && (L.csp = {
          nonce: G
        });
        var W = [], k = [];
        Object.keys(z).forEach(function(K) {
          K.startsWith("@layer") ? W.push(K) : k.push(K);
        }), W.forEach(function(K) {
          Tn(Eo(z[K]), "_layer-".concat(K), R(R({}, L), {}, {
            prepend: !0
          }));
        });
        var H = Tn(V, D, L);
        H[Hn] = S.instanceId, H.setAttribute(yr, E), process.env.NODE_ENV !== "production" && H.setAttribute(Td, C.join("|")), k.forEach(function(K) {
          Tn(Eo(z[K]), "_effect-".concat(K), L);
        });
      }
    }
  ), M = F(P, 3), _ = M[0], $ = M[1], N = M[2];
  return function(T) {
    var I;
    return !v || w || !h ? I = /* @__PURE__ */ f.createElement($v, null) : I = /* @__PURE__ */ f.createElement("style", Ke({}, O(O({}, yr, $), vn, N), {
      dangerouslySetInnerHTML: {
        __html: _
      }
    })), /* @__PURE__ */ f.createElement(f.Fragment, null, I, T);
  };
}
var Iv = function(t, n, r) {
  var o = F(t, 6), i = o[0], a = o[1], s = o[2], l = o[3], c = o[4], u = o[5], d = r || {}, m = d.plain;
  if (c)
    return null;
  var h = i, p = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return h = Mo(i, a, s, p, m), l && Object.keys(l).forEach(function(g) {
    if (!n[g]) {
      n[g] = !0;
      var v = Eo(l[g]), b = Mo(v, a, "_effect-".concat(g), p, m);
      g.startsWith("@layer") ? h = b + h : h += b;
    }
  }), [u, s, h];
}, Tc = "cssVar", Tv = function(t, n) {
  var r = t.key, o = t.prefix, i = t.unitless, a = t.ignore, s = t.token, l = t.scope, c = l === void 0 ? "" : l, u = On(Qr), d = u.cache.instanceId, m = u.container, h = s._tokenKey, p = [].concat(le(t.path), [r, c, h]), g = Na(Tc, p, function() {
    var v = n(), b = pc(v, r, {
      prefix: o,
      unitless: i,
      ignore: a,
      scope: c
    }), y = F(b, 2), S = y[0], x = y[1], E = $c(p, x);
    return [S, x, E, r];
  }, function(v) {
    var b = F(v, 3), y = b[2];
    $i && Ur(y, {
      mark: vn,
      attachTo: m
    });
  }, function(v) {
    var b = F(v, 3), y = b[1], S = b[2];
    if (y) {
      var x = Tn(y, S, {
        mark: vn,
        prepend: "queue",
        attachTo: m,
        priority: -999
      });
      x[Hn] = d, x.setAttribute(yr, r);
    }
  });
  return g;
}, Nv = function(t, n, r) {
  var o = F(t, 4), i = o[1], a = o[2], s = o[3], l = r || {}, c = l.plain;
  if (!i)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, m = Mo(i, s, a, d, c);
  return [u, a, m];
};
O(O(O({}, Ic, Iv), yc, ov), Tc, Nv);
var jt = /* @__PURE__ */ function() {
  function e(t, n) {
    At(this, e), O(this, "name", void 0), O(this, "style", void 0), O(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return Vt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function ar(e) {
  return e.notSplit = !0, e;
}
ar(["borderTop", "borderBottom"]), ar(["borderTop"]), ar(["borderBottom"]), ar(["borderLeft", "borderRight"]), ar(["borderLeft"]), ar(["borderRight"]);
var Aa = /* @__PURE__ */ ko({});
function Nc(e) {
  return fc(e) || sc(e) || $a(e) || dc();
}
function En(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Fc(e, t, n, r) {
  if (!t.length)
    return n;
  var o = Nc(t), i = o[0], a = o.slice(1), s;
  return !e && typeof i == "number" ? s = [] : Array.isArray(e) ? s = le(e) : s = R({}, e), r && n === void 0 && a.length === 1 ? delete s[i][a[0]] : s[i] = Fc(s[i], a, n, r), s;
}
function fn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !En(e, t.slice(0, -1)) ? e : Fc(e, t, n, r);
}
function Fv(e) {
  return ge(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Ps(e) {
  return Array.isArray(e) ? [] : {};
}
var Dv = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function fr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Ps(t[0]);
  return t.forEach(function(o) {
    function i(a, s) {
      var l = new Set(s), c = En(o, a), u = Array.isArray(c);
      if (u || Fv(c)) {
        if (!l.has(c)) {
          l.add(c);
          var d = En(r, a);
          u ? r = fn(r, a, []) : (!d || ge(d) !== "object") && (r = fn(r, a, Ps(c))), Dv(c).forEach(function(m) {
            i([].concat(le(a), [m]), l);
          });
        }
      } else
        r = fn(r, a, c);
    }
    i([]);
  }), r;
}
function Dc() {
}
let Mn = null;
function Av() {
  Mn = null, Xl();
}
let Ac = Dc;
process.env.NODE_ENV !== "production" && (Ac = (e, t, n) => {
  Ve(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && Av();
});
const Zr = Ac, Vc = /* @__PURE__ */ f.createContext({}), qn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = f.useContext(Vc), n = (r, o, i) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const a = Mn;
        Mn || (Mn = {}), Mn[e] = Mn[e] || [], Mn[e].includes(i || "") || Mn[e].push(i || ""), a || console.warn("[antd] There exists deprecated usage in your code:", Mn);
      } else
        process.env.NODE_ENV !== "production" && Zr(r, e, i);
  };
  return n.deprecated = (r, o, i, a) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${i}\` instead.${a ? ` ${a}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = Dc, e;
}, Vv = /* @__PURE__ */ ko(void 0);
var Lv = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, kv = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, jv = R(R({}, kv), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const Lc = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Rs = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, jv),
  timePickerLocale: Object.assign({}, Lc)
}, Jt = "${label} is not a valid ${type}", Cr = {
  locale: "en",
  Pagination: Lv,
  DatePicker: Rs,
  TimePicker: Lc,
  Calendar: Rs,
  global: {
    placeholder: "Please select",
    close: "Close"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckAll: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
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
        string: Jt,
        method: Jt,
        array: Jt,
        object: Jt,
        number: Jt,
        date: Jt,
        boolean: Jt,
        integer: Jt,
        float: Jt,
        regexp: Jt,
        email: Jt,
        url: Jt,
        hex: Jt
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
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
Object.assign({}, Cr.Modal);
let xo = [];
const Ms = () => xo.reduce((e, t) => Object.assign(Object.assign({}, e), t), Cr.Modal);
function zv(e) {
  if (e) {
    const t = Object.assign({}, e);
    return xo.push(t), Ms(), () => {
      xo = xo.filter((n) => n !== t), Ms();
    };
  }
  Object.assign({}, Cr.Modal);
}
const Va = /* @__PURE__ */ ko(void 0), La = (e, t) => {
  const n = f.useContext(Va), r = f.useMemo(() => {
    var i;
    const a = Cr[e], s = (i = n == null ? void 0 : n[e]) !== null && i !== void 0 ? i : {};
    return Object.assign(Object.assign({}, typeof a == "function" ? a() : a), s || {});
  }, [e, t, n]), o = f.useMemo(() => {
    const i = n == null ? void 0 : n.locale;
    return n != null && n.exist && !i ? Cr.locale : i;
  }, [n]);
  return [r, o];
}, kc = "internalMark", jc = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = qn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(r === kc, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  f.useEffect(() => zv(t == null ? void 0 : t.Modal), [t]);
  const o = f.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ f.createElement(Va.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (jc.displayName = "LocaleProvider");
const zc = {
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
}, Kr = Object.assign(Object.assign({}, zc), {
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
}), Ft = Math.round;
function ai(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const _s = (e, t, n) => n === 0 ? e : e / 100;
function $r(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
let pt = class Hc {
  constructor(t) {
    O(this, "isValid", !0), O(this, "r", 0), O(this, "g", 0), O(this, "b", 0), O(this, "a", 1), O(this, "_h", void 0), O(this, "_s", void 0), O(this, "_l", void 0), O(this, "_v", void 0), O(this, "_max", void 0), O(this, "_min", void 0), O(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(i) {
        return r.startsWith(i);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof Hc)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = $r(t.r), this.g = $r(t.g), this.b = $r(t.b), this.a = typeof t.a == "number" ? $r(t.a, 1) : 1;
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
      t === 0 ? this._h = 0 : this._h = Ft(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
      r: Ft(i("r")),
      g: Ft(i("g")),
      b: Ft(i("b")),
      a: Ft(i("a") * 100) / 100
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => Ft((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
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
      const i = Ft(this.a * 255).toString(16);
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
    const t = this.getHue(), n = Ft(this.getSaturation() * 100), r = Ft(this.getLightness() * 100);
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
    return o[t] = $r(n, r), o;
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
      const m = Ft(r * 255);
      this.r = m, this.g = m, this.b = m;
    }
    let i = 0, a = 0, s = 0;
    const l = t / 60, c = (1 - Math.abs(2 * r - 1)) * n, u = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = c, a = u) : l >= 1 && l < 2 ? (i = u, a = c) : l >= 2 && l < 3 ? (a = c, s = u) : l >= 3 && l < 4 ? (a = u, s = c) : l >= 4 && l < 5 ? (i = u, s = c) : l >= 5 && l < 6 && (i = c, s = u);
    const d = r - c / 2;
    this.r = Ft((i + d) * 255), this.g = Ft((a + d) * 255), this.b = Ft((s + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = Ft(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const a = t / 60, s = Math.floor(a), l = a - s, c = Ft(r * (1 - n) * 255), u = Ft(r * (1 - n * l) * 255), d = Ft(r * (1 - n * (1 - l)) * 255);
    switch (s) {
      case 0:
        this.g = d, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = d;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = d, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = ai(t, _s);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = ai(t, _s);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = ai(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Ft(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
};
var co = 2, $s = 0.16, Hv = 0.05, Bv = 0.05, Wv = 0.15, Bc = 5, Wc = 4, Uv = [{
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
function Is(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - co * t : Math.round(e.h) + co * t : r = n ? Math.round(e.h) + co * t : Math.round(e.h) - co * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Ts(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - $s * t : t === Wc ? r = e.s + $s : r = e.s + Hv * t, r > 1 && (r = 1), n && t === Bc && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Ns(e, t, n) {
  var r;
  return n ? r = e.v + Bv * t : r = e.v - Wv * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Gr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new pt(e), o = r.toHsv(), i = Bc; i > 0; i -= 1) {
    var a = new pt({
      h: Is(o, i, !0),
      s: Ts(o, i, !0),
      v: Ns(o, i, !0)
    });
    n.push(a);
  }
  n.push(r);
  for (var s = 1; s <= Wc; s += 1) {
    var l = new pt({
      h: Is(o, s),
      s: Ts(o, s),
      v: Ns(o, s)
    });
    n.push(l);
  }
  return t.theme === "dark" ? Uv.map(function(c) {
    var u = c.index, d = c.amount;
    return new pt(t.backgroundColor || "#141414").mix(n[u], d).toHexString();
  }) : n.map(function(c) {
    return c.toHexString();
  });
}
var si = {
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
}, Di = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Di.primary = Di[5];
var Ai = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Ai.primary = Ai[5];
var Vi = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Vi.primary = Vi[5];
var Li = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Li.primary = Li[5];
var ki = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
ki.primary = ki[5];
var ji = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
ji.primary = ji[5];
var zi = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
zi.primary = zi[5];
var Hi = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Hi.primary = Hi[5];
var _o = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
_o.primary = _o[5];
var Bi = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Bi.primary = Bi[5];
var Wi = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Wi.primary = Wi[5];
var Ui = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Ui.primary = Ui[5];
var qi = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
qi.primary = qi[5];
var li = {
  red: Di,
  volcano: Ai,
  orange: Vi,
  gold: Li,
  yellow: ki,
  lime: ji,
  green: zi,
  cyan: Hi,
  blue: _o,
  geekblue: Bi,
  purple: Wi,
  magenta: Ui,
  grey: qi
};
function qv(e, {
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
  } = e, u = t(s), d = t(r), m = t(o), h = t(i), p = t(a), g = n(l, c), v = e.colorLink || e.colorInfo, b = t(v), y = new pt(h[1]).mix(new pt(h[3]), 50).toHexString();
  return Object.assign(Object.assign({}, g), {
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
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: h[1],
    colorErrorBgHover: h[2],
    colorErrorBgFilledHover: y,
    colorErrorBgActive: h[3],
    colorErrorBorder: h[3],
    colorErrorBorderHover: h[4],
    colorErrorHover: h[5],
    colorError: h[6],
    colorErrorActive: h[7],
    colorErrorTextHover: h[8],
    colorErrorText: h[9],
    colorErrorTextActive: h[10],
    colorWarningBg: m[1],
    colorWarningBgHover: m[2],
    colorWarningBorder: m[3],
    colorWarningBorderHover: m[4],
    colorWarningHover: m[4],
    colorWarning: m[6],
    colorWarningActive: m[7],
    colorWarningTextHover: m[8],
    colorWarningText: m[9],
    colorWarningTextActive: m[10],
    colorInfoBg: p[1],
    colorInfoBgHover: p[2],
    colorInfoBorder: p[3],
    colorInfoBorderHover: p[4],
    colorInfoHover: p[4],
    colorInfo: p[6],
    colorInfoActive: p[7],
    colorInfoTextHover: p[8],
    colorInfoText: p[9],
    colorInfoTextActive: p[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new pt("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Kv = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Gv(e) {
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
  }, Kv(r));
}
const Xv = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Yv(e) {
  return (e + 8) / e;
}
function Qv(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, i = e * Math.pow(Math.E, o / 5), a = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(a / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: Yv(n)
  }));
}
const Zv = (e) => {
  const t = Qv(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], i = n[0], a = n[2], s = r[1], l = r[0], c = r[2];
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
function Jv(e) {
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
const on = (e, t) => new pt(e).setA(t).toRgbString(), Ir = (e, t) => new pt(e).darken(t).toHexString(), em = (e) => {
  const t = Gr(e);
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
}, tm = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: on(r, 0.88),
    colorTextSecondary: on(r, 0.65),
    colorTextTertiary: on(r, 0.45),
    colorTextQuaternary: on(r, 0.25),
    colorFill: on(r, 0.15),
    colorFillSecondary: on(r, 0.06),
    colorFillTertiary: on(r, 0.04),
    colorFillQuaternary: on(r, 0.02),
    colorBgSolid: on(r, 1),
    colorBgSolidHover: on(r, 0.75),
    colorBgSolidActive: on(r, 0.95),
    colorBgLayout: Ir(n, 4),
    colorBgContainer: Ir(n, 0),
    colorBgElevated: Ir(n, 0),
    colorBgSpotlight: on(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Ir(n, 15),
    colorBorderSecondary: Ir(n, 6)
  };
};
function nm(e) {
  si.pink = si.magenta, li.pink = li.magenta;
  const t = Object.keys(zc).map((n) => {
    const r = e[n] === si[n] ? li[n] : Gr(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, i, a) => (o[`${n}-${a + 1}`] = r[a], o[`${n}${a + 1}`] = r[a], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), qv(e, {
    generateColorPalettes: em,
    generateNeutralColorPalettes: tm
  })), Zv(e.fontSize)), Jv(e)), Xv(e)), Gv(e));
}
const Uc = _i(nm), Ki = {
  token: Kr,
  override: {
    override: Kr
  },
  hashed: !0
}, qc = /* @__PURE__ */ st.createContext(Ki), Gi = "ant", ka = "anticon", rm = ["outlined", "borderless", "filled", "underlined"], om = (e, t) => t || (e ? `${Gi}-${e}` : Gi), hn = /* @__PURE__ */ f.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: om,
  iconPrefixCls: ka
}), {
  Consumer: lb
} = hn, Fs = {};
function Kc(e) {
  const t = f.useContext(hn), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, i = t[e];
  return Object.assign(Object.assign({
    classNames: Fs,
    styles: Fs
  }, i), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const im = `-ant-${Date.now()}-${Math.random()}`;
function am(e, t) {
  const n = {}, r = (a, s) => {
    let l = a.clone();
    return l = (s == null ? void 0 : s(l)) || l, l.toRgbString();
  }, o = (a, s) => {
    const l = new pt(a), c = Gr(l.toRgbString());
    n[`${s}-color`] = r(l), n[`${s}-color-disabled`] = c[1], n[`${s}-color-hover`] = c[4], n[`${s}-color-active`] = c[6], n[`${s}-color-outline`] = l.clone().setA(0.2).toRgbString(), n[`${s}-color-deprecated-bg`] = c[0], n[`${s}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const a = new pt(t.primaryColor), s = Gr(a.toRgbString());
    s.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(a, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(a, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(a, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(a, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(a, (c) => c.setA(c.a * 0.12));
    const l = new pt(s[0]);
    n["primary-color-active-deprecated-f-30"] = r(l, (c) => c.setA(c.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(l, (c) => c.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim();
}
function sm(e, t) {
  const n = am(e, t);
  Ut() ? Tn(n, `${im}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Zr(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const $o = /* @__PURE__ */ f.createContext(!1), lm = ({
  children: e,
  disabled: t
}) => {
  const n = f.useContext($o);
  return /* @__PURE__ */ f.createElement($o.Provider, {
    value: t ?? n
  }, e);
}, wr = /* @__PURE__ */ f.createContext(void 0), cm = ({
  children: e,
  size: t
}) => {
  const n = f.useContext(wr);
  return /* @__PURE__ */ f.createElement(wr.Provider, {
    value: t || n
  }, e);
};
function um() {
  const e = On($o), t = On(wr);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Gc = /* @__PURE__ */ Vt(function e() {
  At(this, e);
}), Xc = "CALC_UNIT", fm = new RegExp(Xc, "g");
function ci(e) {
  return typeof e == "number" ? "".concat(e).concat(Xc) : e;
}
var dm = /* @__PURE__ */ function(e) {
  tr(n, e);
  var t = nr(n);
  function n(r, o) {
    var i;
    At(this, n), i = t.call(this), O(De(i), "result", ""), O(De(i), "unitlessCssVar", void 0), O(De(i), "lowPriority", void 0);
    var a = ge(r);
    return i.unitlessCssVar = o, r instanceof n ? i.result = "(".concat(r.result, ")") : a === "number" ? i.result = ci(r) : a === "string" && (i.result = r), i;
  }
  return Vt(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(ci(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(ci(o))), this.lowPriority = !0, this;
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
      }) && (l = !1), this.result = this.result.replace(fm, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
}(Gc), vm = /* @__PURE__ */ function(e) {
  tr(n, e);
  var t = nr(n);
  function n(r) {
    var o;
    return At(this, n), o = t.call(this), O(De(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Vt(n, [{
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
}(Gc), mm = function(t, n) {
  var r = t === "css" ? dm : vm;
  return function(o) {
    return new r(o, n);
  };
}, Ds = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Bt(e) {
  var t = f.useRef();
  t.current = e;
  var n = f.useCallback(function() {
    for (var r, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(i));
  }, []);
  return n;
}
function Xr(e) {
  var t = f.useRef(!1), n = f.useState(e), r = F(n, 2), o = r[0], i = r[1];
  f.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function a(s, l) {
    l && t.current || i(s);
  }
  return [o, a];
}
function ui(e) {
  return e !== void 0;
}
function Io(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, i = n.onChange, a = n.postState, s = Xr(function() {
    return ui(o) ? o : ui(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), l = F(s, 2), c = l[0], u = l[1], d = o !== void 0 ? o : c, m = a ? a(d) : d, h = Bt(i), p = Xr([d]), g = F(p, 2), v = g[0], b = g[1];
  Ss(function() {
    var S = v[0];
    c !== S && h(c, S);
  }, [v]), Ss(function() {
    ui(o) || u(o);
  }, [o]);
  var y = Bt(function(S, x) {
    u(S, x), b([d], x);
  });
  return [m, y];
}
function As(e, t, n, r) {
  var o = R({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var i = r.deprecatedTokens;
    i.forEach(function(s) {
      var l = F(s, 2), c = l[0], u = l[1];
      if (process.env.NODE_ENV !== "production" && Ve(!(o != null && o[c]), "Component Token `".concat(String(c), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[c] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[c]);
      }
    });
  }
  var a = R(R({}, n), o);
  return Object.keys(a).forEach(function(s) {
    a[s] === t[s] && delete a[s];
  }), a;
}
var Yc = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Xi = !0;
function Wn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Yc)
    return Object.assign.apply(Object, [{}].concat(t));
  Xi = !1;
  var r = {};
  return t.forEach(function(o) {
    if (ge(o) === "object") {
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
  }), Xi = !0, r;
}
var Vs = {};
function hm() {
}
var gm = function(t) {
  var n, r = t, o = hm;
  return Yc && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(a, s) {
      if (Xi) {
        var l;
        (l = n) === null || l === void 0 || l.add(s);
      }
      return a[s];
    }
  }), o = function(a, s) {
    var l;
    Vs[a] = {
      global: Array.from(n),
      component: R(R({}, (l = Vs[a]) === null || l === void 0 ? void 0 : l.component), s)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function Ls(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(Wn(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function pm(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(i) {
        return mt(i);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(i) {
        return mt(i);
      }).join(","), ")");
    }
  };
}
var ym = 1e3 * 60 * 10, bm = /* @__PURE__ */ function() {
  function e() {
    At(this, e), O(this, "map", /* @__PURE__ */ new Map()), O(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), O(this, "nextID", 0), O(this, "lastAccessBeat", /* @__PURE__ */ new Map()), O(this, "accessBeat", 0);
  }
  return Vt(e, [{
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
        return i && ge(i) === "object" ? "obj_".concat(r.getObjectID(i)) : "".concat(ge(i), "_").concat(i);
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
          r - o > ym && (n.map.delete(i), n.lastAccessBeat.delete(i));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), ks = new bm();
function Sm(e, t) {
  return st.useMemo(function() {
    var n = ks.get(t);
    if (n)
      return n;
    var r = e();
    return ks.set(t, r), r;
  }, t);
}
var Cm = function() {
  return {};
};
function wm(e) {
  var t = e.useCSP, n = t === void 0 ? Cm : t, r = e.useToken, o = e.usePrefix, i = e.getResetStyles, a = e.getCommonStyle, s = e.getCompUnitless;
  function l(m, h, p, g) {
    var v = Array.isArray(m) ? m[0] : m;
    function b(P) {
      return "".concat(String(v)).concat(P.slice(0, 1).toUpperCase()).concat(P.slice(1));
    }
    var y = (g == null ? void 0 : g.unitless) || {}, S = typeof s == "function" ? s(m) : {}, x = R(R({}, S), {}, O({}, b("zIndexPopup"), !0));
    Object.keys(y).forEach(function(P) {
      x[b(P)] = y[P];
    });
    var E = R(R({}, g), {}, {
      unitless: x,
      prefixToken: b
    }), C = u(m, h, p, E), w = c(v, p, E);
    return function(P) {
      var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : P, _ = C(P, M), $ = F(_, 2), N = $[1], T = w(M), I = F(T, 2), V = I[0], D = I[1];
      return [V, N, D];
    };
  }
  function c(m, h, p) {
    var g = p.unitless, v = p.injectStyle, b = v === void 0 ? !0 : v, y = p.prefixToken, S = p.ignore, x = function(w) {
      var P = w.rootCls, M = w.cssVar, _ = M === void 0 ? {} : M, $ = r(), N = $.realToken;
      return Tv({
        path: [m],
        prefix: _.prefix,
        key: _.key,
        unitless: g,
        ignore: S,
        token: N,
        scope: P
      }, function() {
        var T = Ls(m, N, h), I = As(m, N, T, {
          deprecatedTokens: p == null ? void 0 : p.deprecatedTokens
        });
        return Object.keys(T).forEach(function(V) {
          I[y(V)] = I[V], delete I[V];
        }), I;
      }), null;
    }, E = function(w) {
      var P = r(), M = P.cssVar;
      return [function(_) {
        return b && M ? /* @__PURE__ */ st.createElement(st.Fragment, null, /* @__PURE__ */ st.createElement(x, {
          rootCls: w,
          cssVar: M,
          component: m
        }), _) : _;
      }, M == null ? void 0 : M.key];
    };
    return E;
  }
  function u(m, h, p) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, v = Array.isArray(m) ? m : [m, m], b = F(v, 1), y = b[0], S = v.join("-"), x = e.layer || {
      name: "antd"
    };
    return function(E) {
      var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E, w = r(), P = w.theme, M = w.realToken, _ = w.hashId, $ = w.token, N = w.cssVar, T = o(), I = T.rootPrefixCls, V = T.iconPrefixCls, D = n(), z = N ? "css" : "js", L = Sm(function() {
        var te = /* @__PURE__ */ new Set();
        return N && Object.keys(g.unitless || {}).forEach(function(ae) {
          te.add(bo(ae, N.prefix)), te.add(bo(ae, Ds(y, N.prefix)));
        }), mm(z, te);
      }, [z, y, N == null ? void 0 : N.prefix]), G = pm(z), W = G.max, k = G.min, H = {
        theme: P,
        token: $,
        hashId: _,
        nonce: function() {
          return D.nonce;
        },
        clientOnly: g.clientOnly,
        layer: x,
        // antd is always at top of styles
        order: g.order || -999
      };
      typeof i == "function" && Fi(R(R({}, H), {}, {
        clientOnly: !1,
        path: ["Shared", I]
      }), function() {
        return i($, {
          prefix: {
            rootPrefixCls: I,
            iconPrefixCls: V
          },
          csp: D
        });
      });
      var K = Fi(R(R({}, H), {}, {
        path: [S, E, V]
      }), function() {
        if (g.injectStyle === !1)
          return [];
        var te = gm($), ae = te.token, we = te.flush, fe = Ls(y, M, p), Pe = ".".concat(E), pe = As(y, M, fe, {
          deprecatedTokens: g.deprecatedTokens
        });
        N && fe && ge(fe) === "object" && Object.keys(fe).forEach(function(U) {
          fe[U] = "var(".concat(bo(U, Ds(y, N.prefix)), ")");
        });
        var Re = Wn(ae, {
          componentCls: Pe,
          prefixCls: E,
          iconCls: ".".concat(V),
          antCls: ".".concat(I),
          calc: L,
          // @ts-ignore
          max: W,
          // @ts-ignore
          min: k
        }, N ? fe : pe), X = h(Re, {
          hashId: _,
          prefixCls: E,
          rootPrefixCls: I,
          iconPrefixCls: V
        });
        we(y, pe);
        var j = typeof a == "function" ? a(Re, E, C, g.resetFont) : null;
        return [g.resetStyle === !1 ? null : j, X];
      });
      return [K, _];
    };
  }
  function d(m, h, p) {
    var g = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, v = u(m, h, p, R({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, g)), b = function(S) {
      var x = S.prefixCls, E = S.rootCls, C = E === void 0 ? x : E;
      return v(x, C), null;
    };
    return process.env.NODE_ENV !== "production" && (b.displayName = "SubStyle_".concat(String(Array.isArray(m) ? m.join(".") : m))), b;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Em = "5.27.5";
function fi(e) {
  return e >= 0 && e <= 255;
}
function uo(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a: i
  } = new pt(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: a,
    g: s,
    b: l
  } = new pt(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - a * (1 - c)) / c), d = Math.round((r - s * (1 - c)) / c), m = Math.round((o - l * (1 - c)) / c);
    if (fi(u) && fi(d) && fi(m))
      return new pt({
        r: u,
        g: d,
        b: m,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new pt({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var xm = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Qc(e) {
  const {
    override: t
  } = e, n = xm(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Kr).forEach((m) => {
    delete r[m];
  });
  const o = Object.assign(Object.assign({}, n), r), i = 480, a = 576, s = 768, l = 992, c = 1200, u = 1600;
  if (o.motion === !1) {
    const m = "0s";
    o.motionDurationFast = m, o.motionDurationMid = m, o.motionDurationSlow = m;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: uo(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: uo(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: uo(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: uo(o.colorPrimaryBg, o.colorBgContainer),
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
      0 1px 2px -2px ${new pt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new pt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new pt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var js = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Zc = {
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
}, Om = {
  motionBase: !0,
  motionUnit: !0
}, Pm = {
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
}, Jc = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, i = js(t, ["override"]);
  let a = Object.assign(Object.assign({}, r), {
    override: o
  });
  return a = Qc(a), i && Object.entries(i).forEach(([s, l]) => {
    const {
      theme: c
    } = l, u = js(l, ["theme"]);
    let d = u;
    c && (d = Jc(Object.assign(Object.assign({}, a), u), {
      override: u
    }, c)), a[s] = d;
  }), a;
};
function Kn() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = st.useContext(qc), i = `${Em}-${t || ""}`, a = n || Uc, [s, l, c] = rv(a, [Kr, e], {
    salt: i,
    override: r,
    getComputedToken: Jc,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Qc,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Zc,
      ignore: Om,
      preserve: Pm
    }
  });
  return [a, c, t ? l : "", s, o];
}
const Yi = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, ja = (e, t = !1) => ({
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
}), za = () => ({
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
}), Rm = (e) => ({
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
}), Mm = (e, t, n, r) => {
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
}, eu = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, za()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: tu
} = wm({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = On(hn);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = Kn();
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
    } = On(hn);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = Rm(e);
    return [r, {
      "&": r
    }, eu((n = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && n !== void 0 ? n : ka)];
  },
  getCommonStyle: Mm,
  getCompUnitless: () => Zc
}), _m = (e, t) => {
  const [n, r] = Kn();
  return Fi({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => eu(e));
}, $m = Object.assign({}, f), {
  useId: zs
} = $m, Im = () => "", Tm = typeof zs > "u" ? Im : zs;
function Nm(e, t, n) {
  var r, o;
  const i = qn("ConfigProvider"), a = e || {}, s = a.inherit === !1 || !t ? Object.assign(Object.assign({}, Ki), {
    hashed: (r = t == null ? void 0 : t.hashed) !== null && r !== void 0 ? r : Ki.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, l = Tm();
  if (process.env.NODE_ENV !== "production") {
    const c = a.cssVar || s.cssVar, u = !!(typeof a.cssVar == "object" && (!((o = a.cssVar) === null || o === void 0) && o.key) || l);
    process.env.NODE_ENV !== "production" && i(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return jo(() => {
    var c, u;
    if (!e)
      return t;
    const d = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((p) => {
      d[p] = Object.assign(Object.assign({}, d[p]), e.components[p]);
    });
    const m = `css-var-${l.replace(/:/g, "")}`, h = ((c = a.cssVar) !== null && c !== void 0 ? c : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n == null ? void 0 : n.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof a.cssVar == "object" ? a.cssVar : {}), {
      key: typeof a.cssVar == "object" && ((u = a.cssVar) === null || u === void 0 ? void 0 : u.key) || m
    });
    return Object.assign(Object.assign(Object.assign({}, s), a), {
      token: Object.assign(Object.assign({}, s.token), a.token),
      components: d,
      cssVar: h
    });
  }, [a, s], (c, u) => c.some((d, m) => {
    const h = u[m];
    return !Ri(d, h, !0);
  }));
}
var Fm = ["children"], nu = /* @__PURE__ */ f.createContext({});
function Dm(e) {
  var t = e.children, n = St(e, Fm);
  return /* @__PURE__ */ f.createElement(nu.Provider, {
    value: n
  }, t);
}
var Am = /* @__PURE__ */ function(e) {
  tr(n, e);
  var t = nr(n);
  function n() {
    return At(this, n), t.apply(this, arguments);
  }
  return Vt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
}(f.Component);
function Vm(e) {
  var t = f.useReducer(function(s) {
    return s + 1;
  }, 0), n = F(t, 2), r = n[1], o = f.useRef(e), i = Bt(function() {
    return o.current;
  }), a = Bt(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, r();
  });
  return [i, a];
}
var jn = "none", fo = "appear", vo = "enter", mo = "leave", Hs = "none", dn = "prepare", dr = "start", vr = "active", Ha = "end", ru = "prepared";
function Bs(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Lm(e, t) {
  var n = {
    animationend: Bs("Animation", "AnimationEnd"),
    transitionend: Bs("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var km = Lm(Ut(), typeof window < "u" ? window : {}), ou = {};
if (Ut()) {
  var jm = document.createElement("div");
  ou = jm.style;
}
var ho = {};
function iu(e) {
  if (ho[e])
    return ho[e];
  var t = km[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var i = n[o];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in ou)
        return ho[e] = t[i], ho[e];
    }
  return "";
}
var au = iu("animationend"), su = iu("transitionend"), lu = !!(au && su), Ws = au || "animationend", Us = su || "transitionend";
function qs(e, t) {
  if (!e) return null;
  if (ge(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const zm = function(e) {
  var t = Ae();
  function n(o) {
    o && (o.removeEventListener(Us, e), o.removeEventListener(Ws, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(Us, e), o.addEventListener(Ws, e), t.current = o);
  }
  return f.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
};
var cu = Ut() ? Df : xn;
const Hm = function() {
  var e = f.useRef(null);
  function t() {
    Wt.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = Wt(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : n(r, o - 1);
    });
    e.current = i;
  }
  return f.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
};
var Bm = [dn, dr, vr, Ha], Wm = [dn, ru], uu = !1, Um = !0;
function fu(e) {
  return e === vr || e === Ha;
}
const qm = function(e, t, n) {
  var r = Xr(Hs), o = F(r, 2), i = o[0], a = o[1], s = Hm(), l = F(s, 2), c = l[0], u = l[1];
  function d() {
    a(dn, !0);
  }
  var m = t ? Wm : Bm;
  return cu(function() {
    if (i !== Hs && i !== Ha) {
      var h = m.indexOf(i), p = m[h + 1], g = n(i);
      g === uu ? a(p, !0) : p && c(function(v) {
        function b() {
          v.isCanceled() || a(p, !0);
        }
        g === !0 ? b() : Promise.resolve(g).then(b);
      });
    }
  }, [e, i]), f.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, i];
};
function Km(e, t, n, r) {
  var o = r.motionEnter, i = o === void 0 ? !0 : o, a = r.motionAppear, s = a === void 0 ? !0 : a, l = r.motionLeave, c = l === void 0 ? !0 : l, u = r.motionDeadline, d = r.motionLeaveImmediately, m = r.onAppearPrepare, h = r.onEnterPrepare, p = r.onLeavePrepare, g = r.onAppearStart, v = r.onEnterStart, b = r.onLeaveStart, y = r.onAppearActive, S = r.onEnterActive, x = r.onLeaveActive, E = r.onAppearEnd, C = r.onEnterEnd, w = r.onLeaveEnd, P = r.onVisibleChanged, M = Xr(), _ = F(M, 2), $ = _[0], N = _[1], T = Vm(jn), I = F(T, 2), V = I[0], D = I[1], z = Xr(null), L = F(z, 2), G = L[0], W = L[1], k = V(), H = Ae(!1), K = Ae(null);
  function te() {
    return n();
  }
  var ae = Ae(!1);
  function we() {
    D(jn), W(null, !0);
  }
  var fe = Bt(function(be) {
    var ye = V();
    if (ye !== jn) {
      var Ie = te();
      if (!(be && !be.deadline && be.target !== Ie)) {
        var re = ae.current, Ge;
        ye === fo && re ? Ge = E == null ? void 0 : E(Ie, be) : ye === vo && re ? Ge = C == null ? void 0 : C(Ie, be) : ye === mo && re && (Ge = w == null ? void 0 : w(Ie, be)), re && Ge !== !1 && we();
      }
    }
  }), Pe = zm(fe), pe = F(Pe, 1), Re = pe[0], X = function(ye) {
    switch (ye) {
      case fo:
        return O(O(O({}, dn, m), dr, g), vr, y);
      case vo:
        return O(O(O({}, dn, h), dr, v), vr, S);
      case mo:
        return O(O(O({}, dn, p), dr, b), vr, x);
      default:
        return {};
    }
  }, j = f.useMemo(function() {
    return X(k);
  }, [k]), U = qm(k, !e, function(be) {
    if (be === dn) {
      var ye = j[dn];
      return ye ? ye(te()) : uu;
    }
    if (Q in j) {
      var Ie;
      W(((Ie = j[Q]) === null || Ie === void 0 ? void 0 : Ie.call(j, te(), null)) || null);
    }
    return Q === vr && k !== jn && (Re(te()), u > 0 && (clearTimeout(K.current), K.current = setTimeout(function() {
      fe({
        deadline: !0
      });
    }, u))), Q === ru && we(), Um;
  }), A = F(U, 2), B = A[0], Q = A[1], me = fu(Q);
  ae.current = me;
  var se = Ae(null);
  cu(function() {
    if (!(H.current && se.current === t)) {
      N(t);
      var be = H.current;
      H.current = !0;
      var ye;
      !be && t && s && (ye = fo), be && t && i && (ye = vo), (be && !t && c || !be && d && !t && c) && (ye = mo);
      var Ie = X(ye);
      ye && (e || Ie[dn]) ? (D(ye), B()) : D(jn), se.current = t;
    }
  }, [t]), xn(function() {
    // Cancel appear
    (k === fo && !s || // Cancel enter
    k === vo && !i || // Cancel leave
    k === mo && !c) && D(jn);
  }, [s, i, c]), xn(function() {
    return function() {
      H.current = !1, clearTimeout(K.current);
    };
  }, []);
  var de = f.useRef(!1);
  xn(function() {
    $ && (de.current = !0), $ !== void 0 && k === jn && ((de.current || $) && (P == null || P($)), de.current = !0);
  }, [$, k]);
  var Ee = G;
  return j[dn] && Q === dr && (Ee = R({
    transition: "none"
  }, Ee)), [k, Q, Ee, $ ?? t];
}
function Gm(e) {
  var t = e;
  ge(e) === "object" && (t = e.transitionSupport);
  function n(o, i) {
    return !!(o.motionName && t && i !== !1);
  }
  var r = /* @__PURE__ */ f.forwardRef(function(o, i) {
    var a = o.visible, s = a === void 0 ? !0 : a, l = o.removeOnLeave, c = l === void 0 ? !0 : l, u = o.forceRender, d = o.children, m = o.motionName, h = o.leavedClassName, p = o.eventProps, g = f.useContext(nu), v = g.motion, b = n(o, v), y = Ae(), S = Ae();
    function x() {
      try {
        return y.current instanceof HTMLElement ? y.current : yo(S.current);
      } catch {
        return null;
      }
    }
    var E = Km(b, s, x, o), C = F(E, 4), w = C[0], P = C[1], M = C[2], _ = C[3], $ = f.useRef(_);
    _ && ($.current = !0);
    var N = f.useCallback(function(L) {
      y.current = L, Pa(i, L);
    }, [i]), T, I = R(R({}, p), {}, {
      visible: s
    });
    if (!d)
      T = null;
    else if (w === jn)
      _ ? T = d(R({}, I), N) : !c && $.current && h ? T = d(R(R({}, I), {}, {
        className: h
      }), N) : u || !c && !h ? T = d(R(R({}, I), {}, {
        style: {
          display: "none"
        }
      }), N) : T = null;
    else {
      var V;
      P === dn ? V = "prepare" : fu(P) ? V = "active" : P === dr && (V = "start");
      var D = qs(m, "".concat(w, "-").concat(V));
      T = d(R(R({}, I), {}, {
        className: Ze(qs(m, w), O(O({}, D, D && V), m, typeof m == "string")),
        style: M
      }), N);
    }
    if (/* @__PURE__ */ f.isValidElement(T) && Ho(T)) {
      var z = Ma(T);
      z || (T = /* @__PURE__ */ f.cloneElement(T, {
        ref: N
      }));
    }
    return /* @__PURE__ */ f.createElement(Am, {
      ref: S
    }, T);
  });
  return r.displayName = "CSSMotion", r;
}
const Ba = Gm(lu);
var Qi = "add", Zi = "keep", Ji = "remove", di = "removed";
function Xm(e) {
  var t;
  return e && ge(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, R(R({}, t), {}, {
    key: String(t.key)
  });
}
function ea() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Xm);
}
function Ym() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, i = ea(e), a = ea(t);
  i.forEach(function(c) {
    for (var u = !1, d = r; d < o; d += 1) {
      var m = a[d];
      if (m.key === c.key) {
        r < d && (n = n.concat(a.slice(r, d).map(function(h) {
          return R(R({}, h), {}, {
            status: Qi
          });
        })), r = d), n.push(R(R({}, m), {}, {
          status: Zi
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(R(R({}, c), {}, {
      status: Ji
    }));
  }), r < o && (n = n.concat(a.slice(r).map(function(c) {
    return R(R({}, c), {}, {
      status: Qi
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
      var d = u.key, m = u.status;
      return d !== c || m !== Ji;
    }), n.forEach(function(u) {
      u.key === c && (u.status = Zi);
    });
  }), n;
}
var Qm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Zm = ["status"], Jm = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function eh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ba, n = /* @__PURE__ */ function(r) {
    tr(i, r);
    var o = nr(i);
    function i() {
      var a;
      At(this, i);
      for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return a = o.call.apply(o, [this].concat(l)), O(De(a), "state", {
        keyEntities: []
      }), O(De(a), "removeKey", function(u) {
        a.setState(function(d) {
          var m = d.keyEntities.map(function(h) {
            return h.key !== u ? h : R(R({}, h), {}, {
              status: di
            });
          });
          return {
            keyEntities: m
          };
        }, function() {
          var d = a.state.keyEntities, m = d.filter(function(h) {
            var p = h.status;
            return p !== di;
          }).length;
          m === 0 && a.props.onAllRemoved && a.props.onAllRemoved();
        });
      }), a;
    }
    return Vt(i, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, c = this.props, u = c.component, d = c.children, m = c.onVisibleChanged;
        c.onAllRemoved;
        var h = St(c, Qm), p = u || f.Fragment, g = {};
        return Jm.forEach(function(v) {
          g[v] = h[v], delete h[v];
        }), delete h.keys, /* @__PURE__ */ f.createElement(p, h, l.map(function(v, b) {
          var y = v.status, S = St(v, Zm), x = y === Qi || y === Zi;
          return /* @__PURE__ */ f.createElement(t, Ke({}, g, {
            key: S.key,
            visible: x,
            eventProps: S,
            onVisibleChanged: function(C) {
              m == null || m(C, {
                key: S.key
              }), C || s.removeKey(S.key);
            }
          }), function(E, C) {
            return d(R(R({}, E), {}, {
              index: b
            }), C);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var c = s.keys, u = l.keyEntities, d = ea(c), m = Ym(u, d);
        return {
          keyEntities: m.filter(function(h) {
            var p = u.find(function(g) {
              var v = g.key;
              return h.key === v;
            });
            return !(p && p.status === di && h.status === Ji);
          })
        };
      }
    }]), i;
  }(f.Component);
  return O(n, "defaultProps", {
    component: "div"
  }), n;
}
eh(lu);
const ta = /* @__PURE__ */ f.createContext(!0);
process.env.NODE_ENV !== "production" && (ta.displayName = "MotionCacheContext");
function th(e) {
  const t = f.useContext(ta), {
    children: n
  } = e, [, r] = Kn(), {
    motion: o
  } = r, i = f.useRef(!1);
  return i.current || (i.current = t !== o), i.current ? /* @__PURE__ */ f.createElement(ta.Provider, {
    value: o
  }, /* @__PURE__ */ f.createElement(Dm, {
    motion: o
  }, n)) : n;
}
const du = /* @__PURE__ */ f.memo(({
  dropdownMatchSelectWidth: e
}) => (qn("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (du.displayName = "PropWarning");
const nh = process.env.NODE_ENV !== "production" ? du : () => null;
var rh = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let na = !1;
process.env.NODE_ENV;
const oh = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let vu;
function ih() {
  return vu || Gi;
}
function ah(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const sh = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (vu = t), r && ah(r) && (process.env.NODE_ENV !== "production" && Zr(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), sm(ih(), r));
}, lh = (e) => {
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
    splitter: d,
    virtual: m,
    dropdownMatchSelectWidth: h,
    popupMatchSelectWidth: p,
    popupOverflow: g,
    legacyLocale: v,
    parentContext: b,
    iconPrefixCls: y,
    theme: S,
    componentDisabled: x,
    segmented: E,
    statistic: C,
    spin: w,
    calendar: P,
    carousel: M,
    cascader: _,
    collapse: $,
    typography: N,
    checkbox: T,
    descriptions: I,
    divider: V,
    drawer: D,
    skeleton: z,
    steps: L,
    image: G,
    layout: W,
    list: k,
    mentions: H,
    modal: K,
    progress: te,
    result: ae,
    slider: we,
    breadcrumb: fe,
    menu: Pe,
    pagination: pe,
    input: Re,
    textArea: X,
    empty: j,
    badge: U,
    radio: A,
    rate: B,
    switch: Q,
    transfer: me,
    avatar: se,
    message: de,
    tag: Ee,
    table: be,
    card: ye,
    tabs: Ie,
    timeline: re,
    timePicker: Ge,
    upload: Me,
    notification: Le,
    tree: je,
    colorPicker: xe,
    datePicker: Be,
    rangePicker: Ye,
    flex: lt,
    wave: nt,
    dropdown: Xe,
    warning: Te,
    tour: _t,
    tooltip: Ue,
    popover: ct,
    popconfirm: it,
    floatButton: Lt,
    floatButtonGroup: ut,
    variant: $t,
    inputNumber: xt,
    treeSelect: ft
  } = e, Qe = f.useCallback((ue, ze) => {
    const {
      prefixCls: Je
    } = e;
    if (ze)
      return ze;
    const rt = Je || b.getPrefixCls("");
    return ue ? `${rt}-${ue}` : rt;
  }, [b.getPrefixCls, e.prefixCls]), Ne = y || b.iconPrefixCls || ka, ce = n || b.csp;
  _m(Ne, ce);
  const ve = Nm(S, b.theme, {
    prefixCls: Qe("")
  });
  process.env.NODE_ENV !== "production" && (na = na || !!ve);
  const Z = {
    csp: ce,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: i,
    locale: s || v,
    direction: c,
    space: u,
    splitter: d,
    virtual: m,
    popupMatchSelectWidth: p ?? h,
    popupOverflow: g,
    getPrefixCls: Qe,
    iconPrefixCls: Ne,
    theme: ve,
    segmented: E,
    statistic: C,
    spin: w,
    calendar: P,
    carousel: M,
    cascader: _,
    collapse: $,
    typography: N,
    checkbox: T,
    descriptions: I,
    divider: V,
    drawer: D,
    skeleton: z,
    steps: L,
    image: G,
    input: Re,
    textArea: X,
    layout: W,
    list: k,
    mentions: H,
    modal: K,
    progress: te,
    result: ae,
    slider: we,
    breadcrumb: fe,
    menu: Pe,
    pagination: pe,
    empty: j,
    badge: U,
    radio: A,
    rate: B,
    switch: Q,
    transfer: me,
    avatar: se,
    message: de,
    tag: Ee,
    table: be,
    card: ye,
    tabs: Ie,
    timeline: re,
    timePicker: Ge,
    upload: Me,
    notification: Le,
    tree: je,
    colorPicker: xe,
    datePicker: Be,
    rangePicker: Ye,
    flex: lt,
    wave: nt,
    dropdown: Xe,
    warning: Te,
    tour: _t,
    tooltip: Ue,
    popover: ct,
    popconfirm: it,
    floatButton: Lt,
    floatButtonGroup: ut,
    variant: $t,
    inputNumber: xt,
    treeSelect: ft
  };
  process.env.NODE_ENV !== "production" && qn("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const he = Object.assign({}, b);
  Object.keys(Z).forEach((ue) => {
    Z[ue] !== void 0 && (he[ue] = Z[ue]);
  }), oh.forEach((ue) => {
    const ze = e[ue];
    ze && (he[ue] = ze);
  }), typeof r < "u" && (he.button = Object.assign({
    autoInsertSpace: r
  }, he.button));
  const ke = jo(() => he, he, (ue, ze) => {
    const Je = Object.keys(ue), rt = Object.keys(ze);
    return Je.length !== rt.length || Je.some((qe) => ue[qe] !== ze[qe]);
  }), {
    layer: J
  } = f.useContext(Qr), oe = f.useMemo(() => ({
    prefixCls: Ne,
    csp: ce,
    layer: J ? "antd" : void 0
  }), [Ne, ce, J]);
  let Y = /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(nh, {
    dropdownMatchSelectWidth: h
  }), t);
  const ee = f.useMemo(() => {
    var ue, ze, Je, rt;
    return fr(((ue = Cr.Form) === null || ue === void 0 ? void 0 : ue.defaultValidateMessages) || {}, ((Je = (ze = ke.locale) === null || ze === void 0 ? void 0 : ze.Form) === null || Je === void 0 ? void 0 : Je.defaultValidateMessages) || {}, ((rt = ke.form) === null || rt === void 0 ? void 0 : rt.validateMessages) || {}, (a == null ? void 0 : a.validateMessages) || {});
  }, [ke, a == null ? void 0 : a.validateMessages]);
  Object.keys(ee).length > 0 && (Y = /* @__PURE__ */ f.createElement(Vv.Provider, {
    value: ee
  }, Y)), s && (Y = /* @__PURE__ */ f.createElement(jc, {
    locale: s,
    _ANT_MARK__: kc
  }, Y)), Y = /* @__PURE__ */ f.createElement(Aa.Provider, {
    value: oe
  }, Y), l && (Y = /* @__PURE__ */ f.createElement(cm, {
    size: l
  }, Y)), Y = /* @__PURE__ */ f.createElement(th, null, Y);
  const Se = f.useMemo(() => {
    const ue = ve || {}, {
      algorithm: ze,
      token: Je,
      components: rt,
      cssVar: qe
    } = ue, It = rh(ue, ["algorithm", "token", "components", "cssVar"]), dt = ze && (!Array.isArray(ze) || ze.length > 0) ? _i(ze) : Uc, Tt = {};
    Object.entries(rt || {}).forEach(([ht, Ot]) => {
      const q = Object.assign({}, Ot);
      "algorithm" in q && (q.algorithm === !0 ? q.theme = dt : (Array.isArray(q.algorithm) || typeof q.algorithm == "function") && (q.theme = _i(q.algorithm)), delete q.algorithm), Tt[ht] = q;
    });
    const zt = Object.assign(Object.assign({}, Kr), Je);
    return Object.assign(Object.assign({}, It), {
      theme: dt,
      token: zt,
      components: Tt,
      override: Object.assign({
        override: zt
      }, Tt),
      cssVar: qe
    });
  }, [ve]);
  return S && (Y = /* @__PURE__ */ f.createElement(qc.Provider, {
    value: Se
  }, Y)), ke.warning && (Y = /* @__PURE__ */ f.createElement(Vc.Provider, {
    value: ke.warning
  }, Y)), x !== void 0 && (Y = /* @__PURE__ */ f.createElement(lm, {
    disabled: x
  }, Y)), /* @__PURE__ */ f.createElement(hn.Provider, {
    value: ke
  }, Y);
}, rr = (e) => {
  const t = f.useContext(hn), n = f.useContext(Va);
  return /* @__PURE__ */ f.createElement(lh, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
rr.ConfigContext = hn;
rr.SizeContext = wr;
rr.config = sh;
rr.useConfig = um;
Object.defineProperty(rr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Zr(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), wr)
});
process.env.NODE_ENV !== "production" && (rr.displayName = "ConfigProvider");
function mu(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function ch(e) {
  return mu(e) instanceof ShadowRoot;
}
function To(e) {
  return ch(e) ? mu(e) : null;
}
function uh(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function fh(e, t) {
  Ve(e, "[@ant-design/icons] ".concat(t));
}
function Ks(e) {
  return ge(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (ge(e.icon) === "object" || typeof e.icon == "function");
}
function Gs() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[uh(n)] = r;
    }
    return t;
  }, {});
}
function ra(e, t, n) {
  return n ? /* @__PURE__ */ st.createElement(e.tag, R(R({
    key: t
  }, Gs(e.attrs)), n), (e.children || []).map(function(r, o) {
    return ra(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ st.createElement(e.tag, R({
    key: t
  }, Gs(e.attrs)), (e.children || []).map(function(r, o) {
    return ra(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function hu(e) {
  return Gr(e)[0];
}
function gu(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var dh = `
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
`, vh = function(t) {
  var n = On(Aa), r = n.csp, o = n.prefixCls, i = n.layer, a = dh;
  o && (a = a.replace(/anticon/g, o)), i && (a = "@layer ".concat(i, ` {
`).concat(a, `
}`)), xn(function() {
    var s = t.current, l = To(s);
    Tn(a, "@ant-design-icons", {
      prepend: !i,
      csp: r,
      attachTo: l
    });
  }, []);
}, mh = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Vr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function hh(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Vr.primaryColor = t, Vr.secondaryColor = n || hu(t), Vr.calculated = !!n;
}
function gh() {
  return R({}, Vr);
}
var Or = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, i = t.style, a = t.primaryColor, s = t.secondaryColor, l = St(t, mh), c = f.useRef(), u = Vr;
  if (a && (u = {
    primaryColor: a,
    secondaryColor: s || hu(a)
  }), vh(c), fh(Ks(n), "icon should be icon definiton, but got ".concat(n)), !Ks(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = R(R({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), ra(d.icon, "svg-".concat(d.name), R(R({
    className: r,
    onClick: o,
    style: i,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: c
  }));
};
Or.displayName = "IconReact";
Or.getTwoToneColors = gh;
Or.setTwoToneColors = hh;
function pu(e) {
  var t = gu(e), n = F(t, 2), r = n[0], o = n[1];
  return Or.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function ph() {
  var e = Or.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var yh = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
pu(_o.primary);
var Nn = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, i = e.rotate, a = e.tabIndex, s = e.onClick, l = e.twoToneColor, c = St(e, yh), u = f.useContext(Aa), d = u.prefixCls, m = d === void 0 ? "anticon" : d, h = u.rootClassName, p = Ze(h, m, O(O({}, "".concat(m, "-").concat(r.name), !!r.name), "".concat(m, "-spin"), !!o || r.name === "loading"), n), g = a;
  g === void 0 && s && (g = -1);
  var v = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, b = gu(l), y = F(b, 2), S = y[0], x = y[1];
  return /* @__PURE__ */ f.createElement("span", Ke({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: g,
    onClick: s,
    className: p
  }), /* @__PURE__ */ f.createElement(Or, {
    icon: r,
    primaryColor: S,
    secondaryColor: x,
    style: v
  }));
});
Nn.displayName = "AntdIcon";
Nn.getTwoToneColor = ph;
Nn.setTwoToneColor = pu;
var bh = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Sh = function(t, n) {
  return /* @__PURE__ */ f.createElement(Nn, Ke({}, t, {
    ref: n,
    icon: bh
  }));
}, yu = /* @__PURE__ */ f.forwardRef(Sh);
process.env.NODE_ENV !== "production" && (yu.displayName = "CloseCircleFilled");
var Ch = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, wh = function(t, n) {
  return /* @__PURE__ */ f.createElement(Nn, Ke({}, t, {
    ref: n,
    icon: Ch
  }));
}, bu = /* @__PURE__ */ f.forwardRef(wh);
process.env.NODE_ENV !== "production" && (bu.displayName = "CloseOutlined");
var Eh = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, xh = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Oh = "".concat(Eh, " ").concat(xh).split(/[\s\n]+/), Ph = "aria-", Rh = "data-";
function Xs(e, t) {
  return e.indexOf(t) === 0;
}
function No(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = R({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || Xs(o, Ph)) || // Data
    n.data && Xs(o, Rh) || // Attr
    n.attr && Oh.includes(o)) && (r[o] = e[o]);
  }), r;
}
const Mh = (e) => {
  const [, , , , t] = Kn();
  return t ? `${e}-css-var` : "";
};
var $e = {
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  /**
   * N
   */
  N: 78,
  /**
   * P
   */
  P: 80,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224
}, _h = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, $h = function(t, n) {
  return /* @__PURE__ */ f.createElement(Nn, Ke({}, t, {
    ref: n,
    icon: _h
  }));
}, Su = /* @__PURE__ */ f.forwardRef($h);
process.env.NODE_ENV !== "production" && (Su.displayName = "LoadingOutlined");
const Cu = /* @__PURE__ */ st.createContext(void 0);
process.env.NODE_ENV !== "production" && (Cu.displayName = "zIndexContext");
const _n = 100, Ih = 10, Th = _n * Ih, Nh = Th + _n, wu = {
  Modal: _n,
  Drawer: _n,
  Popover: _n,
  Popconfirm: _n,
  Tooltip: _n,
  Tour: _n,
  FloatButton: _n
}, Fh = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function Dh(e) {
  return e in wu;
}
const Ah = (e, t) => {
  const [, n] = Kn(), r = st.useContext(Cu), o = Dh(e);
  let i;
  if (t !== void 0)
    i = [t, t];
  else {
    let a = r ?? 0;
    o ? a += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    wu[e] : a += Fh[e], i = [r === void 0 ? t : a, a];
  }
  if (process.env.NODE_ENV !== "production") {
    const a = qn(e), s = n.zIndexPopupBase + Nh, l = i[0] || 0;
    process.env.NODE_ENV !== "production" && a(t !== void 0 || l <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return i;
};
function Eu(e, t) {
  this.v = e, this.k = t;
}
function kt(e, t, n, r) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch {
    o = 0;
  }
  kt = function(a, s, l, c) {
    function u(d, m) {
      kt(a, d, function(h) {
        return this._invoke(d, m, h);
      });
    }
    s ? o ? o(a, s, {
      value: l,
      enumerable: !c,
      configurable: !c,
      writable: !c
    }) : a[s] = l : (u("next", 0), u("throw", 1), u("return", 2));
  }, kt(e, t, n, r);
}
function Wa() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", o = n.toStringTag || "@@toStringTag";
  function i(h, p, g, v) {
    var b = p && p.prototype instanceof s ? p : s, y = Object.create(b.prototype);
    return kt(y, "_invoke", function(S, x, E) {
      var C, w, P, M = 0, _ = E || [], $ = !1, N = {
        p: 0,
        n: 0,
        v: e,
        a: T,
        f: T.bind(e, 4),
        d: function(V, D) {
          return C = V, w = 0, P = e, N.n = D, a;
        }
      };
      function T(I, V) {
        for (w = I, P = V, t = 0; !$ && M && !D && t < _.length; t++) {
          var D, z = _[t], L = N.p, G = z[2];
          I > 3 ? (D = G === V) && (P = z[(w = z[4]) ? 5 : (w = 3, 3)], z[4] = z[5] = e) : z[0] <= L && ((D = I < 2 && L < z[1]) ? (w = 0, N.v = V, N.n = z[1]) : L < G && (D = I < 3 || z[0] > V || V > G) && (z[4] = I, z[5] = V, N.n = G, w = 0));
        }
        if (D || I > 1) return a;
        throw $ = !0, V;
      }
      return function(I, V, D) {
        if (M > 1) throw TypeError("Generator is already running");
        for ($ && V === 1 && T(V, D), w = V, P = D; (t = w < 2 ? e : P) || !$; ) {
          C || (w ? w < 3 ? (w > 1 && (N.n = -1), T(w, P)) : N.n = P : N.v = P);
          try {
            if (M = 2, C) {
              if (w || (I = "next"), t = C[I]) {
                if (!(t = t.call(C, P))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                P = t.value, w < 2 && (w = 0);
              } else w === 1 && (t = C.return) && t.call(C), w < 2 && (P = TypeError("The iterator does not provide a '" + I + "' method"), w = 1);
              C = e;
            } else if ((t = ($ = N.n < 0) ? P : S.call(x, N)) !== a) break;
          } catch (z) {
            C = e, w = 1, P = z;
          } finally {
            M = 1;
          }
        }
        return {
          value: t,
          done: $
        };
      };
    }(h, g, v), !0), y;
  }
  var a = {};
  function s() {
  }
  function l() {
  }
  function c() {
  }
  t = Object.getPrototypeOf;
  var u = [][r] ? t(t([][r]())) : (kt(t = {}, r, function() {
    return this;
  }), t), d = c.prototype = s.prototype = Object.create(u);
  function m(h) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(h, c) : (h.__proto__ = c, kt(h, o, "GeneratorFunction")), h.prototype = Object.create(d), h;
  }
  return l.prototype = c, kt(d, "constructor", c), kt(c, "constructor", l), l.displayName = "GeneratorFunction", kt(c, o, "GeneratorFunction"), kt(d), kt(d, o, "Generator"), kt(d, r, function() {
    return this;
  }), kt(d, "toString", function() {
    return "[object Generator]";
  }), (Wa = function() {
    return {
      w: i,
      m
    };
  })();
}
function Fo(e, t) {
  function n(o, i, a, s) {
    try {
      var l = e[o](i), c = l.value;
      return c instanceof Eu ? t.resolve(c.v).then(function(u) {
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
  this.next || (kt(Fo.prototype), kt(Fo.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), kt(this, "_invoke", function(o, i, a) {
    function s() {
      return new t(function(l, c) {
        n(o, a, l, c);
      });
    }
    return r = r ? r.then(s, s) : s();
  }, !0);
}
function xu(e, t, n, r, o) {
  return new Fo(Wa().w(e, t, n, r), o || Promise);
}
function Vh(e, t, n, r, o) {
  var i = xu(e, t, n, r, o);
  return i.next().then(function(a) {
    return a.done ? a.value : i.next();
  });
}
function Lh(e) {
  var t = Object(e), n = [];
  for (var r in t) n.unshift(r);
  return function o() {
    for (; n.length; ) if ((r = n.pop()) in t) return o.value = r, o.done = !1, o;
    return o.done = !0, o;
  };
}
function Ys(e) {
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
  throw new TypeError(ge(e) + " is not iterable");
}
function ln() {
  var e = Wa(), t = e.m(ln), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
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
        abrupt: function(d, m) {
          return l(c.a, o[d], m);
        },
        delegateYield: function(d, m, h) {
          return s.resultName = m, l(c.d, Ys(d), h);
        },
        finish: function(d) {
          return l(c.f, d);
        }
      }, l = function(d, m, h) {
        c.p = s.prev, c.n = s.next;
        try {
          return d(m, h);
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
  return (ln = function() {
    return {
      wrap: function(l, c, u, d) {
        return e.w(i(l), c, u, d && d.reverse());
      },
      isGeneratorFunction: r,
      mark: e.m,
      awrap: function(l, c) {
        return new Eu(l, c);
      },
      AsyncIterator: Fo,
      async: function(l, c, u, d, m) {
        return (r(c) ? xu : Vh)(i(l), c, u, d, m);
      },
      keys: Lh,
      values: Ys
    };
  })();
}
function Qs(e, t, n, r, o, i, a) {
  try {
    var s = e[i](a), l = s.value;
  } catch (c) {
    return void n(c);
  }
  s.done ? t(l) : Promise.resolve(l).then(r, o);
}
function Jr(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var i = e.apply(t, n);
      function a(l) {
        Qs(i, r, o, a, s, "next", l);
      }
      function s(l) {
        Qs(i, r, o, a, s, "throw", l);
      }
      a(void 0);
    });
  };
}
const kh = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
function Ou(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const jh = function(e) {
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
}, zh = (e) => {
  const t = st.useContext(wr);
  return st.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, Pu = /* @__PURE__ */ f.createContext(null), Hh = (e, t) => {
  const n = f.useContext(Pu), r = f.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: o,
      isFirstItem: i,
      isLastItem: a
    } = n, s = o === "vertical" ? "-vertical-" : "-";
    return Ze(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: i,
      [`${e}-compact${s}last-item`]: a,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n == null ? void 0 : n.compactSize,
    compactDirection: n == null ? void 0 : n.compactDirection,
    compactItemClassnames: r
  };
}, Bh = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ f.createElement(Pu.Provider, {
    value: null
  }, t);
}, Wh = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Uh = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Ru = (e, t, n, r, o = !1) => {
  const i = o ? "&" : "";
  return {
    [`
      ${i}${e}-enter,
      ${i}${e}-appear
    `]: Object.assign(Object.assign({}, Wh(r)), {
      animationPlayState: "paused"
    }),
    [`${i}${e}-leave`]: Object.assign(Object.assign({}, Uh(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${i}${e}-enter${e}-enter-active,
      ${i}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${i}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, qh = new jt("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Kh = new jt("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Gh = new jt("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Xh = new jt("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Yh = new jt("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Qh = new jt("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Zh = new jt("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Jh = new jt("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), eg = {
  "move-up": {
    inKeyframes: Zh,
    outKeyframes: Jh
  },
  "move-down": {
    inKeyframes: qh,
    outKeyframes: Kh
  },
  "move-left": {
    inKeyframes: Gh,
    outKeyframes: Xh
  },
  "move-right": {
    inKeyframes: Yh,
    outKeyframes: Qh
  }
}, Zs = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = eg[t];
  return [Ru(r, o, i, e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, Mu = new jt("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), _u = new jt("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), $u = new jt("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), Iu = new jt("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), tg = new jt("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), ng = new jt("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), rg = new jt("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), og = new jt("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), ig = {
  "slide-up": {
    inKeyframes: Mu,
    outKeyframes: _u
  },
  "slide-down": {
    inKeyframes: $u,
    outKeyframes: Iu
  },
  "slide-left": {
    inKeyframes: tg,
    outKeyframes: ng
  },
  "slide-right": {
    inKeyframes: rg,
    outKeyframes: og
  }
}, Js = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: i
  } = ig[t];
  return [Ru(r, o, i, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
};
function ag(e, t, n, r) {
  const {
    focusElCls: o,
    focus: i,
    borderElCls: a
  } = n, s = a ? "> *" : "", l = ["hover", i ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${s}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${r}-status-success)`]: {
      zIndex: 2
    },
    "&-item": Object.assign(Object.assign({
      [l]: {
        zIndex: 3
      }
    }, o ? {
      [`&${o}`]: {
        zIndex: 3
      }
    } : {}), {
      [`&[disabled] ${s}`]: {
        zIndex: 0
      }
    })
  };
}
function sg(e, t, n) {
  const {
    borderElCls: r
  } = n, o = r ? `> ${r}` : "";
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
function lg(e, t = {
  focus: !0
}) {
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, ag(e, r, t, n)), sg(n, r, t))
  };
}
var Tu = /* @__PURE__ */ f.createContext(null), el = [];
function cg(e, t) {
  var n = f.useState(function() {
    if (!Ut())
      return null;
    var p = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && p.setAttribute("data-debug", t), p;
  }), r = F(n, 1), o = r[0], i = f.useRef(!1), a = f.useContext(Tu), s = f.useState(el), l = F(s, 2), c = l[0], u = l[1], d = a || (i.current ? void 0 : function(p) {
    u(function(g) {
      var v = [p].concat(le(g));
      return v;
    });
  });
  function m() {
    o.parentElement || document.body.appendChild(o), i.current = !0;
  }
  function h() {
    var p;
    (p = o.parentElement) === null || p === void 0 || p.removeChild(o), i.current = !1;
  }
  return bt(function() {
    return e ? a ? a(m) : m() : h(), h;
  }, [e]), bt(function() {
    c.length && (c.forEach(function(p) {
      return p();
    }), u(el));
  }, [c]), [o, d];
}
function ug(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), n = document.createElement("div");
  n.id = t;
  var r = n.style;
  r.position = "absolute", r.left = "0", r.top = "0", r.width = "100px", r.height = "100px", r.overflow = "scroll";
  var o, i;
  if (e) {
    var a = getComputedStyle(e);
    r.scrollbarColor = a.scrollbarColor, r.scrollbarWidth = a.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), l = parseInt(s.width, 10), c = parseInt(s.height, 10);
    try {
      var u = l ? "width: ".concat(s.width, ";") : "", d = c ? "height: ".concat(s.height, ";") : "";
      Tn(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(u, `
`).concat(d, `
}`), t);
    } catch (p) {
      console.error(p), o = l, i = c;
    }
  }
  document.body.appendChild(n);
  var m = e && o && !isNaN(o) ? o : n.offsetWidth - n.clientWidth, h = e && i && !isNaN(i) ? i : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), Ur(t), {
    width: m,
    height: h
  };
}
function fg(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : ug(e);
}
function dg() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var vg = "rc-util-locker-".concat(Date.now()), tl = 0;
function mg(e) {
  var t = !!e, n = f.useState(function() {
    return tl += 1, "".concat(vg, "_").concat(tl);
  }), r = F(n, 1), o = r[0];
  bt(function() {
    if (t) {
      var i = fg(document.body).width, a = dg();
      Tn(`
html body {
  overflow-y: hidden;
  `.concat(a ? "width: calc(100% - ".concat(i, "px);") : "", `
}`), o);
    } else
      Ur(o);
    return function() {
      Ur(o);
    };
  }, [t, o]);
}
var hg = !1;
function gg(e) {
  return hg;
}
var nl = function(t) {
  return t === !1 ? !1 : !Ut() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Ua = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, o = e.getContainer, i = e.debug, a = e.autoDestroy, s = a === void 0 ? !0 : a, l = e.children, c = f.useState(n), u = F(c, 2), d = u[0], m = u[1], h = d || n;
  process.env.NODE_ENV !== "production" && Ve(Ut() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), f.useEffect(function() {
    (s || n) && m(n);
  }, [n, s]);
  var p = f.useState(function() {
    return nl(o);
  }), g = F(p, 2), v = g[0], b = g[1];
  f.useEffect(function() {
    var N = nl(o);
    b(N ?? null);
  });
  var y = cg(h && !v, i), S = F(y, 2), x = S[0], E = S[1], C = v ?? x;
  mg(r && n && Ut() && (C === x || C === document.body));
  var w = null;
  if (l && Ho(l) && t) {
    var P = l;
    w = P.ref;
  }
  var M = zo(w, t);
  if (!h || !Ut() || v === void 0)
    return null;
  var _ = C === !1 || gg(), $ = l;
  return t && ($ = /* @__PURE__ */ f.cloneElement(l, {
    ref: M
  })), /* @__PURE__ */ f.createElement(Tu.Provider, {
    value: E
  }, _ ? $ : /* @__PURE__ */ Af($, C));
});
process.env.NODE_ENV !== "production" && (Ua.displayName = "Portal");
function pg() {
  var e = R({}, f);
  return e.useId;
}
var rl = 0, ol = pg();
const yg = ol ? (
  // Use React `useId`
  function(t) {
    var n = ol();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = f.useState("ssr-id"), r = F(n, 2), o = r[0], i = r[1];
    return f.useEffect(function() {
      var a = rl;
      rl += 1, i("rc_unique_".concat(a));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
var Qn = "RC_FORM_INTERNAL_HOOKS", ot = function() {
  Ve(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Er = /* @__PURE__ */ f.createContext({
  getFieldValue: ot,
  getFieldsValue: ot,
  getFieldError: ot,
  getFieldWarning: ot,
  getFieldsError: ot,
  isFieldsTouched: ot,
  isFieldTouched: ot,
  isFieldValidating: ot,
  isFieldsValidating: ot,
  resetFields: ot,
  setFields: ot,
  setFieldValue: ot,
  setFieldsValue: ot,
  validateFields: ot,
  submit: ot,
  getInternalHooks: function() {
    return ot(), {
      dispatch: ot,
      initEntityValue: ot,
      registerField: ot,
      useSubscribe: ot,
      setInitialValues: ot,
      destroyForm: ot,
      setCallbacks: ot,
      registerWatch: ot,
      getFields: ot,
      setValidateMessages: ot,
      setPreserve: ot,
      getInitialValue: ot
    };
  }
}), Do = /* @__PURE__ */ f.createContext(null);
function oa(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function bg(e) {
  return e && !!e._init;
}
function ia() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var aa = ia();
function Sg(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Cg(e, t, n) {
  if (_a()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var o = new (e.bind.apply(e, r))();
  return n && Hr(o, n.prototype), o;
}
function sa(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return sa = function(r) {
    if (r === null || !Sg(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Cg(r, arguments, Br(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Hr(o, r);
  }, sa(e);
}
var wg = /%[sdj%]/g, Nu = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Nu = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function la(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function tn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, i = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var a = e.replace(wg, function(s) {
      if (s === "%%")
        return "%";
      if (o >= i)
        return s;
      switch (s) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return a;
  }
  return e;
}
function Eg(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Mt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Eg(t) && typeof e == "string" && !e);
}
function xg(e, t, n) {
  var r = [], o = 0, i = e.length;
  function a(s) {
    r.push.apply(r, le(s || [])), o++, o === i && n(r);
  }
  e.forEach(function(s) {
    t(s, a);
  });
}
function il(e, t, n) {
  var r = 0, o = e.length;
  function i(a) {
    if (a && a.length) {
      n(a);
      return;
    }
    var s = r;
    r = r + 1, s < o ? t(e[s], i) : n([]);
  }
  i([]);
}
function Og(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, le(e[n] || []));
  }), t;
}
var al = /* @__PURE__ */ function(e) {
  tr(n, e);
  var t = nr(n);
  function n(r, o) {
    var i;
    return At(this, n), i = t.call(this, "Async Validation Error"), O(De(i), "errors", void 0), O(De(i), "fields", void 0), i.errors = r, i.fields = o, i;
  }
  return Vt(n);
}(/* @__PURE__ */ sa(Error));
function Pg(e, t, n, r, o) {
  if (t.first) {
    var i = new Promise(function(m, h) {
      var p = function(b) {
        return r(b), b.length ? h(new al(b, la(b))) : m(o);
      }, g = Og(e);
      il(g, n, p);
    });
    return i.catch(function(m) {
      return m;
    }), i;
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, c = 0, u = [], d = new Promise(function(m, h) {
    var p = function(v) {
      if (u.push.apply(u, v), c++, c === l)
        return r(u), u.length ? h(new al(u, la(u))) : m(o);
    };
    s.length || (r(u), m(o)), s.forEach(function(g) {
      var v = e[g];
      a.indexOf(g) !== -1 ? il(v, n, p) : xg(v, n, p);
    });
  });
  return d.catch(function(m) {
    return m;
  }), d;
}
function Rg(e) {
  return !!(e && e.message !== void 0);
}
function Mg(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function sl(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = Mg(t, e.fullFields) : r = t[n.field || e.fullField], Rg(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function ll(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        ge(r) === "object" && ge(e[n]) === "object" ? e[n] = R(R({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var sr = "enum", _g = function(t, n, r, o, i) {
  t[sr] = Array.isArray(t[sr]) ? t[sr] : [], t[sr].indexOf(n) === -1 && o.push(tn(i.messages[sr], t.fullField, t[sr].join(", ")));
}, $g = function(t, n, r, o, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(tn(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var a = new RegExp(t.pattern);
      a.test(n) || o.push(tn(i.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, Ig = function(t, n, r, o, i) {
  var a = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, d = null, m = typeof n == "number", h = typeof n == "string", p = Array.isArray(n);
  if (m ? d = "number" : h ? d = "string" : p && (d = "array"), !d)
    return !1;
  p && (u = n.length), h && (u = n.replace(c, "_").length), a ? u !== t.len && o.push(tn(i.messages[d].len, t.fullField, t.len)) : s && !l && u < t.min ? o.push(tn(i.messages[d].min, t.fullField, t.min)) : l && !s && u > t.max ? o.push(tn(i.messages[d].max, t.fullField, t.max)) : s && l && (u < t.min || u > t.max) && o.push(tn(i.messages[d].range, t.fullField, t.min, t.max));
}, Fu = function(t, n, r, o, i, a) {
  t.required && (!r.hasOwnProperty(t.field) || Mt(n, a || t.type)) && o.push(tn(i.messages.required, t.fullField));
}, go;
const Tg = function() {
  if (go)
    return go;
  var e = "[a-fA-F\\d:]", t = function(C) {
    return C && C.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", o = [
    "(?:".concat(r, ":){7}(?:").concat(r, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(r, ":){5}(?::").concat(n, "|(?::").concat(r, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(r, ":){4}(?:(?::").concat(r, "){0,1}:").concat(n, "|(?::").concat(r, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(r, ":){3}(?:(?::").concat(r, "){0,2}:").concat(n, "|(?::").concat(r, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(r, ":){2}(?:(?::").concat(r, "){0,3}:").concat(n, "|(?::").concat(r, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(r, ":){1}(?:(?::").concat(r, "){0,4}:").concat(n, "|(?::").concat(r, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(r, "){0,5}:").concat(n, "|(?::").concat(r, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], i = "(?:%[0-9a-zA-Z]{1,})?", a = "(?:".concat(o.join("|"), ")").concat(i), s = new RegExp("(?:^".concat(n, "$)|(?:^").concat(a, "$)")), l = new RegExp("^".concat(n, "$")), c = new RegExp("^".concat(a, "$")), u = function(C) {
    return C && C.exact ? s : new RegExp("(?:".concat(t(C)).concat(n).concat(t(C), ")|(?:").concat(t(C)).concat(a).concat(t(C), ")"), "g");
  };
  u.v4 = function(E) {
    return E && E.exact ? l : new RegExp("".concat(t(E)).concat(n).concat(t(E)), "g");
  }, u.v6 = function(E) {
    return E && E.exact ? c : new RegExp("".concat(t(E)).concat(a).concat(t(E)), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", m = "(?:\\S+(?::\\S*)?@)?", h = u.v4().source, p = u.v6().source, g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", b = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", S = '(?:[/?#][^\\s"]*)?', x = "(?:".concat(d, "|www\\.)").concat(m, "(?:localhost|").concat(h, "|").concat(p, "|").concat(g).concat(v).concat(b, ")").concat(y).concat(S);
  return go = new RegExp("(?:^".concat(x, "$)"), "i"), go;
};
var cl = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Dr = {
  integer: function(t) {
    return Dr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Dr.number(t) && !Dr.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return ge(t) === "object" && !Dr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(cl.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Tg());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(cl.hex);
  }
}, Ng = function(t, n, r, o, i) {
  if (t.required && n === void 0) {
    Fu(t, n, r, o, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  a.indexOf(s) > -1 ? Dr[s](n) || o.push(tn(i.messages.types[s], t.fullField, t.type)) : s && ge(n) !== t.type && o.push(tn(i.messages.types[s], t.fullField, t.type));
}, Fg = function(t, n, r, o, i) {
  (/^\s+$/.test(n) || n === "") && o.push(tn(i.messages.whitespace, t.fullField));
};
const He = {
  required: Fu,
  whitespace: Fg,
  type: Ng,
  range: Ig,
  enum: _g,
  pattern: $g
};
var Dg = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Mt(n) && !t.required)
      return r();
    He.required(t, n, o, a, i);
  }
  r(a);
}, Ag = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    He.required(t, n, o, a, i, "array"), n != null && (He.type(t, n, o, a, i), He.range(t, n, o, a, i));
  }
  r(a);
}, Vg = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Mt(n) && !t.required)
      return r();
    He.required(t, n, o, a, i), n !== void 0 && He.type(t, n, o, a, i);
  }
  r(a);
}, Lg = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Mt(n, "date") && !t.required)
      return r();
    if (He.required(t, n, o, a, i), !Mt(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), He.type(t, l, o, a, i), l && He.range(t, l.getTime(), o, a, i);
    }
  }
  r(a);
}, kg = "enum", jg = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Mt(n) && !t.required)
      return r();
    He.required(t, n, o, a, i), n !== void 0 && He[kg](t, n, o, a, i);
  }
  r(a);
}, zg = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Mt(n) && !t.required)
      return r();
    He.required(t, n, o, a, i), n !== void 0 && (He.type(t, n, o, a, i), He.range(t, n, o, a, i));
  }
  r(a);
}, Hg = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Mt(n) && !t.required)
      return r();
    He.required(t, n, o, a, i), n !== void 0 && (He.type(t, n, o, a, i), He.range(t, n, o, a, i));
  }
  r(a);
}, Bg = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Mt(n) && !t.required)
      return r();
    He.required(t, n, o, a, i), n !== void 0 && He.type(t, n, o, a, i);
  }
  r(a);
}, Wg = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), Mt(n) && !t.required)
      return r();
    He.required(t, n, o, a, i), n !== void 0 && (He.type(t, n, o, a, i), He.range(t, n, o, a, i));
  }
  r(a);
}, Ug = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Mt(n) && !t.required)
      return r();
    He.required(t, n, o, a, i), n !== void 0 && He.type(t, n, o, a, i);
  }
  r(a);
}, qg = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Mt(n, "string") && !t.required)
      return r();
    He.required(t, n, o, a, i), Mt(n, "string") || He.pattern(t, n, o, a, i);
  }
  r(a);
}, Kg = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Mt(n) && !t.required)
      return r();
    He.required(t, n, o, a, i), Mt(n) || He.type(t, n, o, a, i);
  }
  r(a);
}, Gg = function(t, n, r, o, i) {
  var a = [], s = Array.isArray(n) ? "array" : ge(n);
  He.required(t, n, o, a, i, s), r(a);
}, Xg = function(t, n, r, o, i) {
  var a = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Mt(n, "string") && !t.required)
      return r();
    He.required(t, n, o, a, i, "string"), Mt(n, "string") || (He.type(t, n, o, a, i), He.range(t, n, o, a, i), He.pattern(t, n, o, a, i), t.whitespace === !0 && He.whitespace(t, n, o, a, i));
  }
  r(a);
}, vi = function(t, n, r, o, i) {
  var a = t.type, s = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Mt(n, a) && !t.required)
      return r();
    He.required(t, n, o, s, i, a), Mt(n, a) || He.type(t, n, o, s, i);
  }
  r(s);
};
const Lr = {
  string: Xg,
  method: Bg,
  number: Wg,
  boolean: Vg,
  regexp: Kg,
  integer: Hg,
  float: zg,
  array: Ag,
  object: Ug,
  enum: jg,
  pattern: qg,
  date: Lg,
  url: vi,
  hex: vi,
  email: vi,
  required: Gg,
  any: Dg
};
var eo = /* @__PURE__ */ function() {
  function e(t) {
    At(this, e), O(this, "rules", null), O(this, "_messages", aa), this.define(t);
  }
  return Vt(e, [{
    key: "define",
    value: function(n) {
      var r = this;
      if (!n)
        throw new Error("Cannot configure a schema with no rules");
      if (ge(n) !== "object" || Array.isArray(n))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(n).forEach(function(o) {
        var i = n[o];
        r.rules[o] = Array.isArray(i) ? i : [i];
      });
    }
  }, {
    key: "messages",
    value: function(n) {
      return n && (this._messages = ll(ia(), n)), this._messages;
    }
  }, {
    key: "validate",
    value: function(n) {
      var r = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, a = n, s = o, l = i;
      if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return l && l(null, a), Promise.resolve(a);
      function c(p) {
        var g = [], v = {};
        function b(S) {
          if (Array.isArray(S)) {
            var x;
            g = (x = g).concat.apply(x, le(S));
          } else
            g.push(S);
        }
        for (var y = 0; y < p.length; y++)
          b(p[y]);
        g.length ? (v = la(g), l(g, v)) : l(null, a);
      }
      if (s.messages) {
        var u = this.messages();
        u === aa && (u = ia()), ll(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var d = {}, m = s.keys || Object.keys(this.rules);
      m.forEach(function(p) {
        var g = r.rules[p], v = a[p];
        g.forEach(function(b) {
          var y = b;
          typeof y.transform == "function" && (a === n && (a = R({}, a)), v = a[p] = y.transform(v), v != null && (y.type = y.type || (Array.isArray(v) ? "array" : ge(v)))), typeof y == "function" ? y = {
            validator: y
          } : y = R({}, y), y.validator = r.getValidationMethod(y), y.validator && (y.field = p, y.fullField = y.fullField || p, y.type = r.getType(y), d[p] = d[p] || [], d[p].push({
            rule: y,
            value: v,
            source: a,
            field: p
          }));
        });
      });
      var h = {};
      return Pg(d, s, function(p, g) {
        var v = p.rule, b = (v.type === "object" || v.type === "array") && (ge(v.fields) === "object" || ge(v.defaultField) === "object");
        b = b && (v.required || !v.required && p.value), v.field = p.field;
        function y(w, P) {
          return R(R({}, P), {}, {
            fullField: "".concat(v.fullField, ".").concat(w),
            fullFields: v.fullFields ? [].concat(le(v.fullFields), [w]) : [w]
          });
        }
        function S() {
          var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], P = Array.isArray(w) ? w : [w];
          !s.suppressWarning && P.length && e.warning("async-validator:", P), P.length && v.message !== void 0 && (P = [].concat(v.message));
          var M = P.map(sl(v, a));
          if (s.first && M.length)
            return h[v.field] = 1, g(M);
          if (!b)
            g(M);
          else {
            if (v.required && !p.value)
              return v.message !== void 0 ? M = [].concat(v.message).map(sl(v, a)) : s.error && (M = [s.error(v, tn(s.messages.required, v.field))]), g(M);
            var _ = {};
            v.defaultField && Object.keys(p.value).map(function(T) {
              _[T] = v.defaultField;
            }), _ = R(R({}, _), p.rule.fields);
            var $ = {};
            Object.keys(_).forEach(function(T) {
              var I = _[T], V = Array.isArray(I) ? I : [I];
              $[T] = V.map(y.bind(null, T));
            });
            var N = new e($);
            N.messages(s.messages), p.rule.options && (p.rule.options.messages = s.messages, p.rule.options.error = s.error), N.validate(p.value, p.rule.options || s, function(T) {
              var I = [];
              M && M.length && I.push.apply(I, le(M)), T && T.length && I.push.apply(I, le(T)), g(I.length ? I : null);
            });
          }
        }
        var x;
        if (v.asyncValidator)
          x = v.asyncValidator(v, p.value, S, p.source, s);
        else if (v.validator) {
          try {
            x = v.validator(v, p.value, S, p.source, s);
          } catch (w) {
            var E, C;
            (E = (C = console).error) === null || E === void 0 || E.call(C, w), s.suppressValidatorError || setTimeout(function() {
              throw w;
            }, 0), S(w.message);
          }
          x === !0 ? S() : x === !1 ? S(typeof v.message == "function" ? v.message(v.fullField || v.field) : v.message || "".concat(v.fullField || v.field, " fails")) : x instanceof Array ? S(x) : x instanceof Error && S(x.message);
        }
        x && x.then && x.then(function() {
          return S();
        }, function(w) {
          return S(w);
        });
      }, function(p) {
        c(p);
      }, a);
    }
  }, {
    key: "getType",
    value: function(n) {
      if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Lr.hasOwnProperty(n.type))
        throw new Error(tn("Unknown rule type %s", n.type));
      return n.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(n) {
      if (typeof n.validator == "function")
        return n.validator;
      var r = Object.keys(n), o = r.indexOf("message");
      return o !== -1 && r.splice(o, 1), r.length === 1 && r[0] === "required" ? Lr.required : Lr[this.getType(n)] || void 0;
    }
  }]), e;
}();
O(eo, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Lr[t] = n;
});
O(eo, "warning", Nu);
O(eo, "messages", aa);
O(eo, "validators", Lr);
var en = "'${name}' is not a valid ${type}", Du = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: en,
    method: en,
    array: en,
    object: en,
    number: en,
    date: en,
    boolean: en,
    integer: en,
    float: en,
    regexp: en,
    email: en,
    url: en,
    hex: en
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, ul = eo;
function Yg(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\"))
      return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var fl = "CODE_LOGIC_ERROR";
function ca(e, t, n, r, o) {
  return ua.apply(this, arguments);
}
function ua() {
  return ua = Jr(/* @__PURE__ */ ln().mark(function e(t, n, r, o, i) {
    var a, s, l, c, u, d, m, h, p;
    return ln().wrap(function(v) {
      for (; ; ) switch (v.prev = v.next) {
        case 0:
          return a = R({}, r), delete a.ruleIndex, ul.warning = function() {
          }, a.validator && (s = a.validator, a.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (b) {
              return console.error(b), Promise.reject(fl);
            }
          }), l = null, a && a.type === "array" && a.defaultField && (l = a.defaultField, delete a.defaultField), c = new ul(O({}, t, [a])), u = fr(Du, o.validateMessages), c.messages(u), d = [], v.prev = 10, v.next = 13, Promise.resolve(c.validate(O({}, t, n), R({}, o)));
        case 13:
          v.next = 18;
          break;
        case 15:
          v.prev = 15, v.t0 = v.catch(10), v.t0.errors && (d = v.t0.errors.map(function(b, y) {
            var S = b.message, x = S === fl ? u.default : S;
            return /* @__PURE__ */ f.isValidElement(x) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ f.cloneElement(x, {
                key: "error_".concat(y)
              })
            ) : x;
          }));
        case 18:
          if (!(!d.length && l)) {
            v.next = 23;
            break;
          }
          return v.next = 21, Promise.all(n.map(function(b, y) {
            return ca("".concat(t, ".").concat(y), b, l, o, i);
          }));
        case 21:
          return m = v.sent, v.abrupt("return", m.reduce(function(b, y) {
            return [].concat(le(b), le(y));
          }, []));
        case 23:
          return h = R(R({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, i), p = d.map(function(b) {
            return typeof b == "string" ? Yg(b, h) : b;
          }), v.abrupt("return", p);
        case 26:
        case "end":
          return v.stop();
      }
    }, e, null, [[10, 15]]);
  })), ua.apply(this, arguments);
}
function Qg(e, t, n, r, o, i) {
  var a = e.join("."), s = n.map(function(u, d) {
    var m = u.validator, h = R(R({}, u), {}, {
      ruleIndex: d
    });
    return m && (h.validator = function(p, g, v) {
      var b = !1, y = function() {
        for (var E = arguments.length, C = new Array(E), w = 0; w < E; w++)
          C[w] = arguments[w];
        Promise.resolve().then(function() {
          Ve(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || v.apply(void 0, C);
        });
      }, S = m(p, g, y);
      b = S && typeof S.then == "function" && typeof S.catch == "function", Ve(b, "`callback` is deprecated. Please return a promise instead."), b && S.then(function() {
        v();
      }).catch(function(x) {
        v(x || " ");
      });
    }), h;
  }).sort(function(u, d) {
    var m = u.warningOnly, h = u.ruleIndex, p = d.warningOnly, g = d.ruleIndex;
    return !!m == !!p ? h - g : m ? 1 : -1;
  }), l;
  if (o === !0)
    l = new Promise(/* @__PURE__ */ function() {
      var u = Jr(/* @__PURE__ */ ln().mark(function d(m, h) {
        var p, g, v;
        return ln().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              p = 0;
            case 1:
              if (!(p < s.length)) {
                y.next = 12;
                break;
              }
              return g = s[p], y.next = 5, ca(a, t, g, r, i);
            case 5:
              if (v = y.sent, !v.length) {
                y.next = 9;
                break;
              }
              return h([{
                errors: v,
                rule: g
              }]), y.abrupt("return");
            case 9:
              p += 1, y.next = 1;
              break;
            case 12:
              m([]);
            case 13:
            case "end":
              return y.stop();
          }
        }, d);
      }));
      return function(d, m) {
        return u.apply(this, arguments);
      };
    }());
  else {
    var c = s.map(function(u) {
      return ca(a, t, u, r, i).then(function(d) {
        return {
          errors: d,
          rule: u
        };
      });
    });
    l = (o ? Jg(c) : Zg(c)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return l.catch(function(u) {
    return u;
  }), l;
}
function Zg(e) {
  return fa.apply(this, arguments);
}
function fa() {
  return fa = Jr(/* @__PURE__ */ ln().mark(function e(t) {
    return ln().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(o) {
            var i, a = (i = []).concat.apply(i, le(o));
            return a;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), fa.apply(this, arguments);
}
function Jg(e) {
  return da.apply(this, arguments);
}
function da() {
  return da = Jr(/* @__PURE__ */ ln().mark(function e(t) {
    var n;
    return ln().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return n = 0, o.abrupt("return", new Promise(function(i) {
            t.forEach(function(a) {
              a.then(function(s) {
                s.errors.length && i([s]), n += 1, n === t.length && i([]);
              });
            });
          }));
        case 2:
        case "end":
          return o.stop();
      }
    }, e);
  })), da.apply(this, arguments);
}
function wt(e) {
  return oa(e);
}
function dl(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var o = En(e, r);
    n = fn(n, r, o);
  }), n;
}
function gr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return Au(t, r, n);
  });
}
function Au(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, o) {
    return e[o] === r;
  });
}
function ep(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || ge(e) !== "object" || ge(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), o = new Set([].concat(n, r));
  return le(o).every(function(i) {
    var a = e[i], s = t[i];
    return typeof a == "function" && typeof s == "function" ? !0 : a === s;
  });
}
function tp(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && ge(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function vl(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var o = e[t], i = t - n;
  return i > 0 ? [].concat(le(e.slice(0, n)), [o], le(e.slice(n, t)), le(e.slice(t + 1, r))) : i < 0 ? [].concat(le(e.slice(0, t)), le(e.slice(t + 1, n + 1)), [o], le(e.slice(n + 1, r))) : e;
}
var np = ["name"], an = [];
function mi(e, t, n, r, o, i) {
  return typeof e == "function" ? e(t, n, "source" in i ? {
    source: i.source
  } : {}) : r !== o;
}
var qa = /* @__PURE__ */ function(e) {
  tr(n, e);
  var t = nr(n);
  function n(r) {
    var o;
    if (At(this, n), o = t.call(this, r), O(De(o), "state", {
      resetCount: 0
    }), O(De(o), "cancelRegisterFunc", null), O(De(o), "mounted", !1), O(De(o), "touched", !1), O(De(o), "dirty", !1), O(De(o), "validatePromise", void 0), O(De(o), "prevValidating", void 0), O(De(o), "errors", an), O(De(o), "warnings", an), O(De(o), "cancelRegister", function() {
      var l = o.props, c = l.preserve, u = l.isListField, d = l.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, c, wt(d)), o.cancelRegisterFunc = null;
    }), O(De(o), "getNamePath", function() {
      var l = o.props, c = l.name, u = l.fieldContext, d = u.prefixName, m = d === void 0 ? [] : d;
      return c !== void 0 ? [].concat(le(m), le(c)) : [];
    }), O(De(o), "getRules", function() {
      var l = o.props, c = l.rules, u = c === void 0 ? [] : c, d = l.fieldContext;
      return u.map(function(m) {
        return typeof m == "function" ? m(d) : m;
      });
    }), O(De(o), "refresh", function() {
      o.mounted && o.setState(function(l) {
        var c = l.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), O(De(o), "metaCache", null), O(De(o), "triggerMetaEvent", function(l) {
      var c = o.props.onMetaChange;
      if (c) {
        var u = R(R({}, o.getMeta()), {}, {
          destroy: l
        });
        Ri(o.metaCache, u) || c(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), O(De(o), "onStoreChange", function(l, c, u) {
      var d = o.props, m = d.shouldUpdate, h = d.dependencies, p = h === void 0 ? [] : h, g = d.onReset, v = u.store, b = o.getNamePath(), y = o.getValue(l), S = o.getValue(v), x = c && gr(c, b);
      switch (u.type === "valueUpdate" && u.source === "external" && !Ri(y, S) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = an, o.warnings = an, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!c || x) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = an, o.warnings = an, o.triggerMetaEvent(), g == null || g(), o.refresh();
            return;
          }
          break;
        case "remove": {
          if (m && mi(m, l, v, y, S, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var E = u.data;
          if (x) {
            "touched" in E && (o.touched = E.touched), "validating" in E && !("originRCField" in E) && (o.validatePromise = E.validating ? Promise.resolve([]) : null), "errors" in E && (o.errors = E.errors || an), "warnings" in E && (o.warnings = E.warnings || an), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in E && gr(c, b, !0)) {
            o.reRender();
            return;
          }
          if (m && !b.length && mi(m, l, v, y, S, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var C = p.map(wt);
          if (C.some(function(w) {
            return gr(u.relatedFields, w);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (x || (!p.length || b.length || m) && mi(m, l, v, y, S, u)) {
            o.reRender();
            return;
          }
          break;
      }
      m === !0 && o.reRender();
    }), O(De(o), "validateRules", function(l) {
      var c = o.getNamePath(), u = o.getValue(), d = l || {}, m = d.triggerName, h = d.validateOnly, p = h === void 0 ? !1 : h, g = Promise.resolve().then(/* @__PURE__ */ Jr(/* @__PURE__ */ ln().mark(function v() {
        var b, y, S, x, E, C, w;
        return ln().wrap(function(M) {
          for (; ; ) switch (M.prev = M.next) {
            case 0:
              if (o.mounted) {
                M.next = 2;
                break;
              }
              return M.abrupt("return", []);
            case 2:
              if (b = o.props, y = b.validateFirst, S = y === void 0 ? !1 : y, x = b.messageVariables, E = b.validateDebounce, C = o.getRules(), m && (C = C.filter(function(_) {
                return _;
              }).filter(function(_) {
                var $ = _.validateTrigger;
                if (!$)
                  return !0;
                var N = oa($);
                return N.includes(m);
              })), !(E && m)) {
                M.next = 10;
                break;
              }
              return M.next = 8, new Promise(function(_) {
                setTimeout(_, E);
              });
            case 8:
              if (o.validatePromise === g) {
                M.next = 10;
                break;
              }
              return M.abrupt("return", []);
            case 10:
              return w = Qg(c, u, C, l, S, x), w.catch(function(_) {
                return _;
              }).then(function() {
                var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : an;
                if (o.validatePromise === g) {
                  var $;
                  o.validatePromise = null;
                  var N = [], T = [];
                  ($ = _.forEach) === null || $ === void 0 || $.call(_, function(I) {
                    var V = I.rule.warningOnly, D = I.errors, z = D === void 0 ? an : D;
                    V ? T.push.apply(T, le(z)) : N.push.apply(N, le(z));
                  }), o.errors = N, o.warnings = T, o.triggerMetaEvent(), o.reRender();
                }
              }), M.abrupt("return", w);
            case 13:
            case "end":
              return M.stop();
          }
        }, v);
      })));
      return p || (o.validatePromise = g, o.dirty = !0, o.errors = an, o.warnings = an, o.triggerMetaEvent(), o.reRender()), g;
    }), O(De(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), O(De(o), "isFieldTouched", function() {
      return o.touched;
    }), O(De(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var l = o.props.fieldContext, c = l.getInternalHooks(Qn), u = c.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), O(De(o), "getErrors", function() {
      return o.errors;
    }), O(De(o), "getWarnings", function() {
      return o.warnings;
    }), O(De(o), "isListField", function() {
      return o.props.isListField;
    }), O(De(o), "isList", function() {
      return o.props.isList;
    }), O(De(o), "isPreserve", function() {
      return o.props.preserve;
    }), O(De(o), "getMeta", function() {
      o.prevValidating = o.isFieldValidating();
      var l = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return l;
    }), O(De(o), "getOnlyChild", function(l) {
      if (typeof l == "function") {
        var c = o.getMeta();
        return R(R({}, o.getOnlyChild(l(o.getControlled(), c, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = Jn(l);
      return u.length !== 1 || !/* @__PURE__ */ f.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), O(De(o), "getValue", function(l) {
      var c = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return En(l || c(!0), u);
    }), O(De(o), "getControlled", function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = o.props, u = c.name, d = c.trigger, m = c.validateTrigger, h = c.getValueFromEvent, p = c.normalize, g = c.valuePropName, v = c.getValueProps, b = c.fieldContext, y = m !== void 0 ? m : b.validateTrigger, S = o.getNamePath(), x = b.getInternalHooks, E = b.getFieldsValue, C = x(Qn), w = C.dispatch, P = o.getValue(), M = v || function(I) {
        return O({}, g, I);
      }, _ = l[d], $ = u !== void 0 ? M(P) : {};
      process.env.NODE_ENV !== "production" && $ && Object.keys($).forEach(function(I) {
        Ve(typeof $[I] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(I, ")"));
      });
      var N = R(R({}, l), $);
      N[d] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var I, V = arguments.length, D = new Array(V), z = 0; z < V; z++)
          D[z] = arguments[z];
        h ? I = h.apply(void 0, D) : I = tp.apply(void 0, [g].concat(D)), p && (I = p(I, P, E(!0))), I !== P && w({
          type: "updateValue",
          namePath: S,
          value: I
        }), _ && _.apply(void 0, D);
      };
      var T = oa(y || []);
      return T.forEach(function(I) {
        var V = N[I];
        N[I] = function() {
          V && V.apply(void 0, arguments);
          var D = o.props.rules;
          D && D.length && w({
            type: "validateField",
            namePath: S,
            triggerName: I
          });
        };
      }), N;
    }), r.fieldContext) {
      var i = r.fieldContext.getInternalHooks, a = i(Qn), s = a.initEntityValue;
      s(De(o));
    }
    return o;
  }
  return Vt(n, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, i = o.shouldUpdate, a = o.fieldContext;
      if (this.mounted = !0, a) {
        var s = a.getInternalHooks, l = s(Qn), c = l.registerField;
        this.cancelRegisterFunc = c(this);
      }
      i === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.resetCount, i = this.props.children, a = this.getOnlyChild(i), s = a.child, l = a.isFunction, c;
      return l ? c = s : /* @__PURE__ */ f.isValidElement(s) ? c = /* @__PURE__ */ f.cloneElement(s, this.getControlled(s.props)) : (Ve(!s, "`children` of Field is not validate ReactElement."), c = s), /* @__PURE__ */ f.createElement(f.Fragment, {
        key: o
      }, c);
    }
  }]), n;
}(f.Component);
O(qa, "contextType", Er);
O(qa, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Vu(e) {
  var t, n = e.name, r = St(e, np), o = f.useContext(Er), i = f.useContext(Do), a = n !== void 0 ? wt(n) : void 0, s = (t = r.isListField) !== null && t !== void 0 ? t : !!i, l = "keep";
  return s || (l = "_".concat((a || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && s && a.length <= 1 && Ve(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ f.createElement(qa, Ke({
    key: l,
    name: a,
    isListField: s
  }, r, {
    fieldContext: o
  }));
}
function rp(e) {
  var t = e.name, n = e.initialValue, r = e.children, o = e.rules, i = e.validateTrigger, a = e.isListField, s = f.useContext(Er), l = f.useContext(Do), c = f.useRef({
    keys: [],
    id: 0
  }), u = c.current, d = f.useMemo(function() {
    var g = wt(s.prefixName) || [];
    return [].concat(le(g), le(wt(t)));
  }, [s.prefixName, t]), m = f.useMemo(function() {
    return R(R({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), h = f.useMemo(function() {
    return {
      getKey: function(v) {
        var b = d.length, y = v[b];
        return [u.keys[y], v.slice(b + 1)];
      }
    };
  }, [d]);
  if (typeof r != "function")
    return Ve(!1, "Form.List only accepts function as children."), null;
  var p = function(v, b, y) {
    var S = y.source;
    return S === "internal" ? !1 : v !== b;
  };
  return /* @__PURE__ */ f.createElement(Do.Provider, {
    value: h
  }, /* @__PURE__ */ f.createElement(Er.Provider, {
    value: m
  }, /* @__PURE__ */ f.createElement(Vu, {
    name: [],
    shouldUpdate: p,
    rules: o,
    validateTrigger: i,
    initialValue: n,
    isList: !0,
    isListField: a ?? !!l
  }, function(g, v) {
    var b = g.value, y = b === void 0 ? [] : b, S = g.onChange, x = s.getFieldValue, E = function() {
      var M = x(d || []);
      return M || [];
    }, C = {
      add: function(M, _) {
        var $ = E();
        _ >= 0 && _ <= $.length ? (u.keys = [].concat(le(u.keys.slice(0, _)), [u.id], le(u.keys.slice(_))), S([].concat(le($.slice(0, _)), [M], le($.slice(_))))) : (process.env.NODE_ENV !== "production" && (_ < 0 || _ > $.length) && Ve(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(le(u.keys), [u.id]), S([].concat(le($), [M]))), u.id += 1;
      },
      remove: function(M) {
        var _ = E(), $ = new Set(Array.isArray(M) ? M : [M]);
        $.size <= 0 || (u.keys = u.keys.filter(function(N, T) {
          return !$.has(T);
        }), S(_.filter(function(N, T) {
          return !$.has(T);
        })));
      },
      move: function(M, _) {
        if (M !== _) {
          var $ = E();
          M < 0 || M >= $.length || _ < 0 || _ >= $.length || (u.keys = vl(u.keys, M, _), S(vl($, M, _)));
        }
      }
    }, w = y || [];
    return Array.isArray(w) || (w = [], process.env.NODE_ENV !== "production" && Ve(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), r(w.map(function(P, M) {
      var _ = u.keys[M];
      return _ === void 0 && (u.keys[M] = u.id, _ = u.keys[M], u.id += 1), {
        name: M,
        key: _,
        isListField: !0
      };
    }), C, v);
  })));
}
function op(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(o, i) {
    e.forEach(function(a, s) {
      a.catch(function(l) {
        return t = !0, l;
      }).then(function(l) {
        n -= 1, r[s] = l, !(n > 0) && (t && i(r), o(r));
      });
    });
  }) : Promise.resolve([]);
}
var Lu = "__@field_split__";
function hi(e) {
  return e.map(function(t) {
    return "".concat(ge(t), ":").concat(t);
  }).join(Lu);
}
var lr = /* @__PURE__ */ function() {
  function e() {
    At(this, e), O(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Vt(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(hi(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(hi(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var o = this.get(n), i = r(o);
      i ? this.set(n, i) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(hi(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return le(this.kvs.entries()).map(function(r) {
        var o = F(r, 2), i = o[0], a = o[1], s = i.split(Lu);
        return n({
          key: s.map(function(l) {
            var c = l.match(/^([^:]*):(.*)$/), u = F(c, 3), d = u[1], m = u[2];
            return d === "number" ? Number(m) : m;
          }),
          value: a
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var o = r.key, i = r.value;
        return n[o.join(".")] = i, null;
      }), n;
    }
  }]), e;
}(), ip = ["name"], ap = /* @__PURE__ */ Vt(function e(t) {
  var n = this;
  At(this, e), O(this, "formHooked", !1), O(this, "forceRootUpdate", void 0), O(this, "subscribable", !0), O(this, "store", {}), O(this, "fieldEntities", []), O(this, "initialValues", {}), O(this, "callbacks", {}), O(this, "validateMessages", null), O(this, "preserve", null), O(this, "lastValidatePromise", null), O(this, "getForm", function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }), O(this, "getInternalHooks", function(r) {
    return r === Qn ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : (Ve(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), O(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), O(this, "prevWithoutPreserves", null), O(this, "setInitialValues", function(r, o) {
    if (n.initialValues = r || {}, o) {
      var i, a = fr(r, n.store);
      (i = n.prevWithoutPreserves) === null || i === void 0 || i.map(function(s) {
        var l = s.key;
        a = fn(a, l, En(r, l));
      }), n.prevWithoutPreserves = null, n.updateStore(a);
    }
  }), O(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var o = new lr();
      n.getFieldEntities(!0).forEach(function(i) {
        n.isMergedPreserve(i.isPreserve()) || o.set(i.getNamePath(), !0);
      }), n.prevWithoutPreserves = o;
    }
  }), O(this, "getInitialValue", function(r) {
    var o = En(n.initialValues, r);
    return r.length ? fr(o) : o;
  }), O(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), O(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), O(this, "setPreserve", function(r) {
    n.preserve = r;
  }), O(this, "watchList", []), O(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(o) {
        return o !== r;
      });
    };
  }), O(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var o = n.getFieldsValue(), i = n.getFieldsValue(!0);
      n.watchList.forEach(function(a) {
        a(o, i, r);
      });
    }
  }), O(this, "timeoutId", null), O(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || Ve(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), O(this, "updateStore", function(r) {
    n.store = r;
  }), O(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : n.fieldEntities;
  }), O(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new lr();
    return n.getFieldEntities(r).forEach(function(i) {
      var a = i.getNamePath();
      o.set(a, i);
    }), o;
  }), O(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var o = n.getFieldsMap(!0);
    return r.map(function(i) {
      var a = wt(i);
      return o.get(a) || {
        INVALIDATE_NAME_PATH: wt(i)
      };
    });
  }), O(this, "getFieldsValue", function(r, o) {
    n.warningUnhooked();
    var i, a, s;
    if (r === !0 || Array.isArray(r) ? (i = r, a = o) : r && ge(r) === "object" && (s = r.strict, a = r.filter), i === !0 && !a)
      return n.store;
    var l = n.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), c = [];
    return l.forEach(function(u) {
      var d, m, h = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var p, g;
        if ((p = (g = u).isList) !== null && p !== void 0 && p.call(g))
          return;
      } else if (!i && (d = (m = u).isListField) !== null && d !== void 0 && d.call(m))
        return;
      if (!a)
        c.push(h);
      else {
        var v = "getMeta" in u ? u.getMeta() : null;
        a(v) && c.push(h);
      }
    }), dl(n.store, c.map(wt));
  }), O(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var o = wt(r);
    return En(n.store, o);
  }), O(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntitiesForNamePathList(r);
    return o.map(function(i, a) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: wt(r[a]),
        errors: [],
        warnings: []
      };
    });
  }), O(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var o = wt(r), i = n.getFieldsError([o])[0];
    return i.errors;
  }), O(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var o = wt(r), i = n.getFieldsError([o])[0];
    return i.warnings;
  }), O(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    var a = o[0], s = o[1], l, c = !1;
    o.length === 0 ? l = null : o.length === 1 ? Array.isArray(a) ? (l = a.map(wt), c = !1) : (l = null, c = a) : (l = a.map(wt), c = s);
    var u = n.getFieldEntities(!0), d = function(v) {
      return v.isFieldTouched();
    };
    if (!l)
      return c ? u.every(function(g) {
        return d(g) || g.isList();
      }) : u.some(d);
    var m = new lr();
    l.forEach(function(g) {
      m.set(g, []);
    }), u.forEach(function(g) {
      var v = g.getNamePath();
      l.forEach(function(b) {
        b.every(function(y, S) {
          return v[S] === y;
        }) && m.update(b, function(y) {
          return [].concat(le(y), [g]);
        });
      });
    });
    var h = function(v) {
      return v.some(d);
    }, p = m.map(function(g) {
      var v = g.value;
      return v;
    });
    return c ? p.every(h) : p.some(h);
  }), O(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), O(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntities();
    if (!r)
      return o.some(function(a) {
        return a.isFieldValidating();
      });
    var i = r.map(wt);
    return o.some(function(a) {
      var s = a.getNamePath();
      return gr(i, s) && a.isFieldValidating();
    });
  }), O(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), O(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new lr(), i = n.getFieldEntities(!0);
    i.forEach(function(l) {
      var c = l.props.initialValue, u = l.getNamePath();
      if (c !== void 0) {
        var d = o.get(u) || /* @__PURE__ */ new Set();
        d.add({
          entity: l,
          value: c
        }), o.set(u, d);
      }
    });
    var a = function(c) {
      c.forEach(function(u) {
        var d = u.props.initialValue;
        if (d !== void 0) {
          var m = u.getNamePath(), h = n.getInitialValue(m);
          if (h !== void 0)
            Ve(!1, "Form already set 'initialValues' with path '".concat(m.join("."), "'. Field can not overwrite it."));
          else {
            var p = o.get(m);
            if (p && p.size > 1)
              Ve(!1, "Multiple Field with path '".concat(m.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (p) {
              var g = n.getFieldValue(m), v = u.isListField();
              !v && (!r.skipExist || g === void 0) && n.updateStore(fn(n.store, m, le(p)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(l) {
      var c = o.get(l);
      if (c) {
        var u;
        (u = s).push.apply(u, le(le(c).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = i, a(s);
  }), O(this, "resetFields", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (!r) {
      n.updateStore(fr(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(o, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var i = r.map(wt);
    i.forEach(function(a) {
      var s = n.getInitialValue(a);
      n.updateStore(fn(n.store, a, s));
    }), n.resetWithFieldInitialValue({
      namePathList: i
    }), n.notifyObservers(o, i, {
      type: "reset"
    }), n.notifyWatch(i);
  }), O(this, "setFields", function(r) {
    n.warningUnhooked();
    var o = n.store, i = [];
    r.forEach(function(a) {
      var s = a.name, l = St(a, ip), c = wt(s);
      i.push(c), "value" in l && n.updateStore(fn(n.store, c, l.value)), n.notifyObservers(o, [c], {
        type: "setField",
        data: a
      });
    }), n.notifyWatch(i);
  }), O(this, "getFields", function() {
    var r = n.getFieldEntities(!0), o = r.map(function(i) {
      var a = i.getNamePath(), s = i.getMeta(), l = R(R({}, s), {}, {
        name: a,
        value: n.getFieldValue(a)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return o;
  }), O(this, "initEntityValue", function(r) {
    var o = r.props.initialValue;
    if (o !== void 0) {
      var i = r.getNamePath(), a = En(n.store, i);
      a === void 0 && n.updateStore(fn(n.store, i, o));
    }
  }), O(this, "isMergedPreserve", function(r) {
    var o = r !== void 0 ? r : n.preserve;
    return o ?? !0;
  }), O(this, "registerField", function(r) {
    n.fieldEntities.push(r);
    var o = r.getNamePath();
    if (n.notifyWatch([o]), r.props.initialValue !== void 0) {
      var i = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(i, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(a, s) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(d) {
        return d !== r;
      }), !n.isMergedPreserve(s) && (!a || l.length > 1)) {
        var c = a ? void 0 : n.getInitialValue(o);
        if (o.length && n.getFieldValue(o) !== c && n.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !Au(d.getNamePath(), o)
          );
        })) {
          var u = n.store;
          n.updateStore(fn(u, o, c, !0)), n.notifyObservers(u, [o], {
            type: "remove"
          }), n.triggerDependenciesUpdate(u, o);
        }
      }
      n.notifyWatch([o]);
    };
  }), O(this, "dispatch", function(r) {
    switch (r.type) {
      case "updateValue": {
        var o = r.namePath, i = r.value;
        n.updateValue(o, i);
        break;
      }
      case "validateField": {
        var a = r.namePath, s = r.triggerName;
        n.validateFields([a], {
          triggerName: s
        });
        break;
      }
    }
  }), O(this, "notifyObservers", function(r, o, i) {
    if (n.subscribable) {
      var a = R(R({}, i), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(r, o, a);
      });
    } else
      n.forceRootUpdate();
  }), O(this, "triggerDependenciesUpdate", function(r, o) {
    var i = n.getDependencyChildrenFields(o);
    return i.length && n.validateFields(i), n.notifyObservers(r, i, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(le(i))
    }), i;
  }), O(this, "updateValue", function(r, o) {
    var i = wt(r), a = n.store;
    n.updateStore(fn(n.store, i, o)), n.notifyObservers(a, [i], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([i]);
    var s = n.triggerDependenciesUpdate(a, i), l = n.callbacks.onValuesChange;
    if (l) {
      var c = dl(n.store, [i]);
      l(c, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([i].concat(le(s)));
  }), O(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (r) {
      var i = fr(n.store, r);
      n.updateStore(i);
    }
    n.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), O(this, "setFieldValue", function(r, o) {
    n.setFields([{
      name: r,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), O(this, "getDependencyChildrenFields", function(r) {
    var o = /* @__PURE__ */ new Set(), i = [], a = new lr();
    n.getFieldEntities().forEach(function(l) {
      var c = l.props.dependencies;
      (c || []).forEach(function(u) {
        var d = wt(u);
        a.update(d, function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return m.add(l), m;
        });
      });
    });
    var s = function l(c) {
      var u = a.get(c) || /* @__PURE__ */ new Set();
      u.forEach(function(d) {
        if (!o.has(d)) {
          o.add(d);
          var m = d.getNamePath();
          d.isFieldDirty() && m.length && (i.push(m), l(m));
        }
      });
    };
    return s(r), i;
  }), O(this, "triggerOnFieldsChange", function(r, o) {
    var i = n.callbacks.onFieldsChange;
    if (i) {
      var a = n.getFields();
      if (o) {
        var s = new lr();
        o.forEach(function(c) {
          var u = c.name, d = c.errors;
          s.set(u, d);
        }), a.forEach(function(c) {
          c.errors = s.get(c.name) || c.errors;
        });
      }
      var l = a.filter(function(c) {
        var u = c.name;
        return gr(r, u);
      });
      l.length && i(l, a);
    }
  }), O(this, "validateFields", function(r, o) {
    n.warningUnhooked();
    var i, a;
    Array.isArray(r) || typeof r == "string" || typeof o == "string" ? (i = r, a = o) : a = r;
    var s = !!i, l = s ? i.map(wt) : [], c = [], u = String(Date.now()), d = /* @__PURE__ */ new Set(), m = a || {}, h = m.recursive, p = m.dirty;
    n.getFieldEntities(!0).forEach(function(y) {
      if (s || l.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(p && !y.isFieldDirty())) {
        var S = y.getNamePath();
        if (d.add(S.join(u)), !s || gr(l, S, h)) {
          var x = y.validateRules(R({
            validateMessages: R(R({}, Du), n.validateMessages)
          }, a));
          c.push(x.then(function() {
            return {
              name: S,
              errors: [],
              warnings: []
            };
          }).catch(function(E) {
            var C, w = [], P = [];
            return (C = E.forEach) === null || C === void 0 || C.call(E, function(M) {
              var _ = M.rule.warningOnly, $ = M.errors;
              _ ? P.push.apply(P, le($)) : w.push.apply(w, le($));
            }), w.length ? Promise.reject({
              name: S,
              errors: w,
              warnings: P
            }) : {
              name: S,
              errors: w,
              warnings: P
            };
          }));
        }
      }
    });
    var g = op(c);
    n.lastValidatePromise = g, g.catch(function(y) {
      return y;
    }).then(function(y) {
      var S = y.map(function(x) {
        var E = x.name;
        return E;
      });
      n.notifyObservers(n.store, S, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(S, y);
    });
    var v = g.then(function() {
      return n.lastValidatePromise === g ? Promise.resolve(n.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(y) {
      var S = y.filter(function(x) {
        return x && x.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(l),
        errorFields: S,
        outOfDate: n.lastValidatePromise !== g
      });
    });
    v.catch(function(y) {
      return y;
    });
    var b = l.filter(function(y) {
      return d.has(y.join(u));
    });
    return n.triggerOnFieldsChange(b), v;
  }), O(this, "submit", function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var o = n.callbacks.onFinish;
      if (o)
        try {
          o(r);
        } catch (i) {
          console.error(i);
        }
    }).catch(function(r) {
      var o = n.callbacks.onFinishFailed;
      o && o(r);
    });
  }), this.forceRootUpdate = t;
});
function ku(e) {
  var t = f.useRef(), n = f.useState({}), r = F(n, 2), o = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var i = function() {
        o({});
      }, a = new ap(i);
      t.current = a.getForm();
    }
  return [t.current];
}
var va = /* @__PURE__ */ f.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), sp = function(t) {
  var n = t.validateMessages, r = t.onFormChange, o = t.onFormFinish, i = t.children, a = f.useContext(va), s = f.useRef({});
  return /* @__PURE__ */ f.createElement(va.Provider, {
    value: R(R({}, a), {}, {
      validateMessages: R(R({}, a.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(c, u) {
        r && r(c, {
          changedFields: u,
          forms: s.current
        }), a.triggerFormChange(c, u);
      },
      triggerFormFinish: function(c, u) {
        o && o(c, {
          values: u,
          forms: s.current
        }), a.triggerFormFinish(c, u);
      },
      registerForm: function(c, u) {
        c && (s.current = R(R({}, s.current), {}, O({}, c, u))), a.registerForm(c, u);
      },
      unregisterForm: function(c) {
        var u = R({}, s.current);
        delete u[c], s.current = u, a.unregisterForm(c);
      }
    })
  }, i);
}, lp = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], cp = function(t, n) {
  var r = t.name, o = t.initialValues, i = t.fields, a = t.form, s = t.preserve, l = t.children, c = t.component, u = c === void 0 ? "form" : c, d = t.validateMessages, m = t.validateTrigger, h = m === void 0 ? "onChange" : m, p = t.onValuesChange, g = t.onFieldsChange, v = t.onFinish, b = t.onFinishFailed, y = t.clearOnDestroy, S = St(t, lp), x = f.useRef(null), E = f.useContext(va), C = ku(a), w = F(C, 1), P = w[0], M = P.getInternalHooks(Qn), _ = M.useSubscribe, $ = M.setInitialValues, N = M.setCallbacks, T = M.setValidateMessages, I = M.setPreserve, V = M.destroyForm;
  f.useImperativeHandle(n, function() {
    return R(R({}, P), {}, {
      nativeElement: x.current
    });
  }), f.useEffect(function() {
    return E.registerForm(r, P), function() {
      E.unregisterForm(r);
    };
  }, [E, P, r]), T(R(R({}, E.validateMessages), d)), N({
    onValuesChange: p,
    onFieldsChange: function(te) {
      if (E.triggerFormChange(r, te), g) {
        for (var ae = arguments.length, we = new Array(ae > 1 ? ae - 1 : 0), fe = 1; fe < ae; fe++)
          we[fe - 1] = arguments[fe];
        g.apply(void 0, [te].concat(we));
      }
    },
    onFinish: function(te) {
      E.triggerFormFinish(r, te), v && v(te);
    },
    onFinishFailed: b
  }), I(s);
  var D = f.useRef(null);
  $(o, !D.current), D.current || (D.current = !0), f.useEffect(
    function() {
      return function() {
        return V(y);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var z, L = typeof l == "function";
  if (L) {
    var G = P.getFieldsValue(!0);
    z = l(G, P);
  } else
    z = l;
  _(!L);
  var W = f.useRef();
  f.useEffect(function() {
    ep(W.current || [], i || []) || P.setFields(i || []), W.current = i;
  }, [i, P]);
  var k = f.useMemo(function() {
    return R(R({}, P), {}, {
      validateTrigger: h
    });
  }, [P, h]), H = /* @__PURE__ */ f.createElement(Do.Provider, {
    value: null
  }, /* @__PURE__ */ f.createElement(Er.Provider, {
    value: k
  }, z));
  return u === !1 ? H : /* @__PURE__ */ f.createElement(u, Ke({}, S, {
    ref: x,
    onSubmit: function(te) {
      te.preventDefault(), te.stopPropagation(), P.submit();
    },
    onReset: function(te) {
      var ae;
      te.preventDefault(), P.resetFields(), (ae = S.onReset) === null || ae === void 0 || ae.call(S, te);
    }
  }), H);
};
function ml(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var up = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = Ae(t);
  Ve(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function fp() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], i = o === void 0 ? {} : o, a = bg(i) ? {
    form: i
  } : i, s = a.form, l = In(), c = F(l, 2), u = c[0], d = c[1], m = Oo(function() {
    return ml(u);
  }, [u]), h = Ae(m);
  h.current = m;
  var p = On(Er), g = s || p, v = g && g._init;
  process.env.NODE_ENV !== "production" && Ve(t.length === 2 ? s ? v : !0 : v, "useWatch requires a form instance since it can not auto detect from context.");
  var b = wt(r), y = Ae(b);
  return y.current = b, up(b), xn(
    function() {
      if (v) {
        var S = g.getFieldsValue, x = g.getInternalHooks, E = x(Qn), C = E.registerWatch, w = function($, N) {
          var T = a.preserve ? N : $;
          return typeof r == "function" ? r(T) : En(T, y.current);
        }, P = C(function(_, $) {
          var N = w(_, $), T = ml(N);
          h.current !== T && (h.current = T, d(N));
        }), M = w(S(), S(!0));
        return u !== M && d(M), P;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v]
  ), u;
}
var dp = /* @__PURE__ */ f.forwardRef(cp), to = dp;
to.FormProvider = sp;
to.Field = Vu;
to.List = rp;
to.useForm = ku;
to.useWatch = fp;
const Ao = /* @__PURE__ */ f.createContext({});
process.env.NODE_ENV !== "production" && (Ao.displayName = "FormItemInputContext");
const vp = ({
  children: e,
  status: t,
  override: n
}) => {
  const r = f.useContext(Ao), o = f.useMemo(() => {
    const i = Object.assign({}, r);
    return n && delete i.isFormItemInput, t && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon), i;
  }, [t, n, r]);
  return /* @__PURE__ */ f.createElement(Ao.Provider, {
    value: o
  }, e);
}, mp = /* @__PURE__ */ f.createContext(void 0), hp = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let o = r;
  return n && (o = /* @__PURE__ */ st.createElement(vp, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ st.createElement(Bh, null, o)), o;
};
function gp(e) {
  return (t) => /* @__PURE__ */ f.createElement(rr, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ f.createElement(e, Object.assign({}, t)));
}
const pp = (e, t, n, r, o) => gp((a) => {
  const {
    prefixCls: s,
    style: l
  } = a, c = f.useRef(null), [u, d] = f.useState(0), [m, h] = f.useState(0), [p, g] = Io(!1, {
    value: a.open
  }), {
    getPrefixCls: v
  } = f.useContext(hn), b = v("select", s);
  f.useEffect(() => {
    if (g(!0), typeof ResizeObserver < "u") {
      const x = new ResizeObserver((C) => {
        const w = C[0].target;
        d(w.offsetHeight + 8), h(w.offsetWidth);
      }), E = setInterval(() => {
        var C;
        const w = `.${b}-dropdown`, P = (C = c.current) === null || C === void 0 ? void 0 : C.querySelector(w);
        P && (clearInterval(E), x.observe(P));
      }, 10);
      return () => {
        clearInterval(E), x.disconnect();
      };
    }
  }, []);
  let y = Object.assign(Object.assign({}, a), {
    style: Object.assign(Object.assign({}, l), {
      margin: 0
    }),
    open: p,
    visible: p,
    getPopupContainer: () => c.current
  });
  Object.assign(y, {
    [t]: {
      overflow: {
        adjustX: !1,
        adjustY: !1
      }
    }
  });
  const S = {
    paddingBottom: u,
    position: "relative",
    minWidth: m
  };
  return /* @__PURE__ */ f.createElement("div", {
    ref: c,
    style: S
  }, /* @__PURE__ */ f.createElement(e, Object.assign({}, y)));
}), ju = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var Go = function(t) {
  var n = t.className, r = t.customizeIcon, o = t.customizeIconProps, i = t.children, a = t.onMouseDown, s = t.onClick, l = typeof r == "function" ? r(o) : r;
  return /* @__PURE__ */ f.createElement("span", {
    className: n,
    onMouseDown: function(u) {
      u.preventDefault(), a == null || a(u);
    },
    style: {
      userSelect: "none",
      WebkitUserSelect: "none"
    },
    unselectable: "on",
    onClick: s,
    "aria-hidden": !0
  }, l !== void 0 ? l : /* @__PURE__ */ f.createElement("span", {
    className: Ze(n.split(/\s+/).map(function(c) {
      return "".concat(c, "-icon");
    }))
  }, i));
}, yp = function(t, n, r, o, i) {
  var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1, s = arguments.length > 6 ? arguments[6] : void 0, l = arguments.length > 7 ? arguments[7] : void 0, c = st.useMemo(function() {
    if (ge(o) === "object")
      return o.clearIcon;
    if (i)
      return i;
  }, [o, i]), u = st.useMemo(function() {
    return !!(!a && o && (r.length || s) && !(l === "combobox" && s === ""));
  }, [o, a, r.length, s, l]);
  return {
    allowClear: u,
    clearIcon: /* @__PURE__ */ st.createElement(Go, {
      className: "".concat(t, "-clear"),
      onMouseDown: n,
      customizeIcon: c
    }, "×")
  };
}, zu = /* @__PURE__ */ f.createContext(null);
function bp() {
  return f.useContext(zu);
}
function Sp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = f.useState(!1), n = F(t, 2), r = n[0], o = n[1], i = f.useRef(null), a = function() {
    window.clearTimeout(i.current);
  };
  f.useEffect(function() {
    return a;
  }, []);
  var s = function(c, u) {
    a(), i.current = window.setTimeout(function() {
      o(c), u && u();
    }, e);
  };
  return [r, s, a];
}
function Hu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = f.useRef(null), n = f.useRef(null);
  f.useEffect(function() {
    return function() {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(o) {
    (o || t.current === null) && (t.current = o), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
      t.current = null;
    }, e);
  }
  return [function() {
    return t.current;
  }, r];
}
function Cp(e, t, n, r) {
  var o = f.useRef(null);
  o.current = {
    open: t,
    triggerOpen: n,
    customizedTrigger: r
  }, f.useEffect(function() {
    function i(a) {
      var s;
      if (!((s = o.current) !== null && s !== void 0 && s.customizedTrigger)) {
        var l = a.target;
        l.shadowRoot && a.composed && (l = a.composedPath()[0] || l), o.current.open && e().filter(function(c) {
          return c;
        }).every(function(c) {
          return !c.contains(l) && c !== l;
        }) && o.current.triggerOpen(!1);
      }
    }
    return window.addEventListener("mousedown", i), function() {
      return window.removeEventListener("mousedown", i);
    };
  }, []);
}
function wp(e) {
  return (
    // Undefined for Edge bug:
    // https://github.com/ant-design/ant-design/issues/51292
    e && // Other keys
    ![
      // System function button
      $e.ESC,
      $e.SHIFT,
      $e.BACKSPACE,
      $e.TAB,
      $e.WIN_KEY,
      $e.ALT,
      $e.META,
      $e.WIN_KEY_RIGHT,
      $e.CTRL,
      $e.SEMICOLON,
      $e.EQUALS,
      $e.CAPS_LOCK,
      $e.CONTEXT_MENU,
      // F1-F12
      $e.F1,
      $e.F2,
      $e.F3,
      $e.F4,
      $e.F5,
      $e.F6,
      $e.F7,
      $e.F8,
      $e.F9,
      $e.F10,
      $e.F11,
      $e.F12
    ].includes(e)
  );
}
var Ep = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], cr = void 0;
function xp(e, t) {
  var n = e.prefixCls, r = e.invalidate, o = e.item, i = e.renderItem, a = e.responsive, s = e.responsiveDisabled, l = e.registerSize, c = e.itemKey, u = e.className, d = e.style, m = e.children, h = e.display, p = e.order, g = e.component, v = g === void 0 ? "div" : g, b = St(e, Ep), y = a && !h;
  function S(P) {
    l(c, P);
  }
  f.useEffect(function() {
    return function() {
      S(null);
    };
  }, []);
  var x = i && o !== cr ? i(o, {
    index: p
  }) : m, E;
  r || (E = {
    opacity: y ? 0 : 1,
    height: y ? 0 : cr,
    overflowY: y ? "hidden" : cr,
    order: a ? p : cr,
    pointerEvents: y ? "none" : cr,
    position: y ? "absolute" : cr
  });
  var C = {};
  y && (C["aria-hidden"] = !0);
  var w = /* @__PURE__ */ f.createElement(v, Ke({
    className: Ze(!r && n, u),
    style: R(R({}, E), d)
  }, C, b, {
    ref: t
  }), x);
  return a && (w = /* @__PURE__ */ f.createElement(Un, {
    onResize: function(M) {
      var _ = M.offsetWidth;
      S(_);
    },
    disabled: s
  }, w)), w;
}
var kr = /* @__PURE__ */ f.forwardRef(xp);
kr.displayName = "Item";
function Op(e) {
  if (typeof MessageChannel > "u")
    Wt(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function Pp() {
  var e = f.useRef(null), t = function(r) {
    e.current || (e.current = [], Op(function() {
      Vf(function() {
        e.current.forEach(function(o) {
          o();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function Tr(e, t) {
  var n = f.useState(t), r = F(n, 2), o = r[0], i = r[1], a = Bt(function(s) {
    e(function() {
      i(s);
    });
  });
  return [o, a];
}
var Vo = /* @__PURE__ */ st.createContext(null), Rp = ["component"], Mp = ["className"], _p = ["className"], $p = function(t, n) {
  var r = f.useContext(Vo);
  if (!r) {
    var o = t.component, i = o === void 0 ? "div" : o, a = St(t, Rp);
    return /* @__PURE__ */ f.createElement(i, Ke({}, a, {
      ref: n
    }));
  }
  var s = r.className, l = St(r, Mp), c = t.className, u = St(t, _p);
  return /* @__PURE__ */ f.createElement(Vo.Provider, {
    value: null
  }, /* @__PURE__ */ f.createElement(kr, Ke({
    ref: n,
    className: Ze(s, c)
  }, l, u)));
}, Bu = /* @__PURE__ */ f.forwardRef($p);
Bu.displayName = "RawItem";
var Ip = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], Wu = "responsive", Uu = "invalidate";
function Tp(e) {
  return "+ ".concat(e.length, " ...");
}
function Np(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, o = e.data, i = o === void 0 ? [] : o, a = e.renderItem, s = e.renderRawItem, l = e.itemKey, c = e.itemWidth, u = c === void 0 ? 10 : c, d = e.ssr, m = e.style, h = e.className, p = e.maxCount, g = e.renderRest, v = e.renderRawRest, b = e.suffix, y = e.component, S = y === void 0 ? "div" : y, x = e.itemComponent, E = e.onVisibleChange, C = St(e, Ip), w = d === "full", P = Pp(), M = Tr(P, null), _ = F(M, 2), $ = _[0], N = _[1], T = $ || 0, I = Tr(P, /* @__PURE__ */ new Map()), V = F(I, 2), D = V[0], z = V[1], L = Tr(P, 0), G = F(L, 2), W = G[0], k = G[1], H = Tr(P, 0), K = F(H, 2), te = K[0], ae = K[1], we = Tr(P, 0), fe = F(we, 2), Pe = fe[0], pe = fe[1], Re = In(null), X = F(Re, 2), j = X[0], U = X[1], A = In(null), B = F(A, 2), Q = B[0], me = B[1], se = f.useMemo(function() {
    return Q === null && w ? Number.MAX_SAFE_INTEGER : Q || 0;
  }, [Q, $]), de = In(!1), Ee = F(de, 2), be = Ee[0], ye = Ee[1], Ie = "".concat(r, "-item"), re = Math.max(W, te), Ge = p === Wu, Me = i.length && Ge, Le = p === Uu, je = Me || typeof p == "number" && i.length > p, xe = Oo(function() {
    var ce = i;
    return Me ? $ === null && w ? ce = i : ce = i.slice(0, Math.min(i.length, T / u)) : typeof p == "number" && (ce = i.slice(0, p)), ce;
  }, [i, u, $, p, Me]), Be = Oo(function() {
    return Me ? i.slice(se + 1) : i.slice(xe.length);
  }, [i, xe, Me, se]), Ye = is(function(ce, ve) {
    var Z;
    return typeof l == "function" ? l(ce) : (Z = l && (ce == null ? void 0 : ce[l])) !== null && Z !== void 0 ? Z : ve;
  }, [l]), lt = is(a || function(ce) {
    return ce;
  }, [a]);
  function nt(ce, ve, Z) {
    Q === ce && (ve === void 0 || ve === j) || (me(ce), Z || (ye(ce < i.length - 1), E == null || E(ce)), ve !== void 0 && U(ve));
  }
  function Xe(ce, ve) {
    N(ve.clientWidth);
  }
  function Te(ce, ve) {
    z(function(Z) {
      var he = new Map(Z);
      return ve === null ? he.delete(ce) : he.set(ce, ve), he;
    });
  }
  function _t(ce, ve) {
    ae(ve), k(te);
  }
  function Ue(ce, ve) {
    pe(ve);
  }
  function ct(ce) {
    return D.get(Ye(xe[ce], ce));
  }
  bt(function() {
    if (T && typeof re == "number" && xe) {
      var ce = Pe, ve = xe.length, Z = ve - 1;
      if (!ve) {
        nt(0, null);
        return;
      }
      for (var he = 0; he < ve; he += 1) {
        var ke = ct(he);
        if (w && (ke = ke || 0), ke === void 0) {
          nt(he - 1, void 0, !0);
          break;
        }
        if (ce += ke, // Only one means `totalWidth` is the final width
        Z === 0 && ce <= T || // Last two width will be the final width
        he === Z - 1 && ce + ct(Z) <= T) {
          nt(Z, null);
          break;
        } else if (ce + re > T) {
          nt(he - 1, ce - ke - Pe + te);
          break;
        }
      }
      b && ct(0) + Pe > T && U(null);
    }
  }, [T, D, te, Pe, Ye, xe]);
  var it = be && !!Be.length, Lt = {};
  j !== null && Me && (Lt = {
    position: "absolute",
    left: j,
    top: 0
  });
  var ut = {
    prefixCls: Ie,
    responsive: Me,
    component: x,
    invalidate: Le
  }, $t = s ? function(ce, ve) {
    var Z = Ye(ce, ve);
    return /* @__PURE__ */ f.createElement(Vo.Provider, {
      key: Z,
      value: R(R({}, ut), {}, {
        order: ve,
        item: ce,
        itemKey: Z,
        registerSize: Te,
        display: ve <= se
      })
    }, s(ce, ve));
  } : function(ce, ve) {
    var Z = Ye(ce, ve);
    return /* @__PURE__ */ f.createElement(kr, Ke({}, ut, {
      order: ve,
      key: Z,
      item: ce,
      renderItem: lt,
      itemKey: Z,
      registerSize: Te,
      display: ve <= se
    }));
  }, xt = {
    order: it ? se : Number.MAX_SAFE_INTEGER,
    className: "".concat(Ie, "-rest"),
    registerSize: _t,
    display: it
  }, ft = g || Tp, Qe = v ? /* @__PURE__ */ f.createElement(Vo.Provider, {
    value: R(R({}, ut), xt)
  }, v(Be)) : /* @__PURE__ */ f.createElement(kr, Ke({}, ut, xt), typeof ft == "function" ? ft(Be) : ft), Ne = /* @__PURE__ */ f.createElement(S, Ke({
    className: Ze(!Le && r, h),
    style: m,
    ref: t
  }, C), xe.map($t), je ? Qe : null, b && /* @__PURE__ */ f.createElement(kr, Ke({}, ut, {
    responsive: Ge,
    responsiveDisabled: !Me,
    order: se,
    className: "".concat(Ie, "-suffix"),
    registerSize: Ue,
    display: !0,
    style: Lt
  }), b));
  return Ge ? /* @__PURE__ */ f.createElement(Un, {
    onResize: Xe,
    disabled: !Me
  }, Ne) : Ne;
}
var no = /* @__PURE__ */ f.forwardRef(Np);
no.displayName = "Overflow";
no.Item = Bu;
no.RESPONSIVE = Wu;
no.INVALIDATE = Uu;
function Fp(e, t, n) {
  var r = R(R({}, e), t);
  return Object.keys(t).forEach(function(o) {
    var i = t[o];
    typeof i == "function" && (r[o] = function() {
      for (var a, s = arguments.length, l = new Array(s), c = 0; c < s; c++)
        l[c] = arguments[c];
      return i.apply(void 0, l), (a = e[o]) === null || a === void 0 ? void 0 : a.call.apply(a, [e].concat(l));
    });
  }), r;
}
var Dp = ["prefixCls", "id", "inputElement", "autoFocus", "autoComplete", "editable", "activeDescendantId", "value", "open", "attrs"], Ap = function(t, n) {
  var r = t.prefixCls, o = t.id, i = t.inputElement, a = t.autoFocus, s = t.autoComplete, l = t.editable, c = t.activeDescendantId, u = t.value, d = t.open, m = t.attrs, h = St(t, Dp), p = i || /* @__PURE__ */ f.createElement("input", null), g = p, v = g.ref, b = g.props;
  return er(!("maxLength" in p.props), "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."), p = /* @__PURE__ */ f.cloneElement(p, R(R(R({
    type: "search"
  }, Fp(h, b)), {}, {
    // Override over origin props
    id: o,
    ref: Ra(n, v),
    autoComplete: s || "off",
    autoFocus: a,
    className: Ze("".concat(r, "-selection-search-input"), b == null ? void 0 : b.className),
    role: "combobox",
    "aria-expanded": d || !1,
    "aria-haspopup": "listbox",
    "aria-owns": "".concat(o, "_list"),
    "aria-autocomplete": "list",
    "aria-controls": "".concat(o, "_list"),
    "aria-activedescendant": d ? c : void 0
  }, m), {}, {
    value: l ? u : "",
    readOnly: !l,
    unselectable: l ? null : "on",
    style: R(R({}, b.style), {}, {
      opacity: l ? null : 0
    })
  })), p;
}, Ka = /* @__PURE__ */ f.forwardRef(Ap);
process.env.NODE_ENV !== "production" && (Ka.displayName = "Input");
function Ga(e) {
  return Array.isArray(e) ? e : e !== void 0 ? [e] : [];
}
var Vp = typeof window < "u" && window.document && window.document.documentElement, Lp = process.env.NODE_ENV !== "test" && Vp;
function kp(e) {
  return e != null;
}
function jp(e) {
  return !e && e !== 0;
}
function hl(e) {
  return ["string", "number"].includes(ge(e));
}
function qu(e) {
  var t = void 0;
  return e && (hl(e.title) ? t = e.title.toString() : hl(e.label) && (t = e.label.toString())), t;
}
function zp(e, t) {
  Lp ? f.useLayoutEffect(e, t) : f.useEffect(e, t);
}
function Hp(e) {
  var t;
  return (t = e.key) !== null && t !== void 0 ? t : e.value;
}
var gl = function(t) {
  t.preventDefault(), t.stopPropagation();
}, Bp = function(t) {
  var n = t.id, r = t.prefixCls, o = t.values, i = t.open, a = t.searchValue, s = t.autoClearSearchValue, l = t.inputRef, c = t.placeholder, u = t.disabled, d = t.mode, m = t.showSearch, h = t.autoFocus, p = t.autoComplete, g = t.activeDescendantId, v = t.tabIndex, b = t.removeIcon, y = t.maxTagCount, S = t.maxTagTextLength, x = t.maxTagPlaceholder, E = x === void 0 ? function(A) {
    return "+ ".concat(A.length, " ...");
  } : x, C = t.tagRender, w = t.onToggleOpen, P = t.onRemove, M = t.onInputChange, _ = t.onInputPaste, $ = t.onInputKeyDown, N = t.onInputMouseDown, T = t.onInputCompositionStart, I = t.onInputCompositionEnd, V = t.onInputBlur, D = f.useRef(null), z = In(0), L = F(z, 2), G = L[0], W = L[1], k = In(!1), H = F(k, 2), K = H[0], te = H[1], ae = "".concat(r, "-selection"), we = i || d === "multiple" && s === !1 || d === "tags" ? a : "", fe = d === "tags" || d === "multiple" && s === !1 || m && (i || K);
  zp(function() {
    W(D.current.scrollWidth);
  }, [we]);
  var Pe = function(B, Q, me, se, de) {
    return /* @__PURE__ */ f.createElement("span", {
      title: qu(B),
      className: Ze("".concat(ae, "-item"), O({}, "".concat(ae, "-item-disabled"), me))
    }, /* @__PURE__ */ f.createElement("span", {
      className: "".concat(ae, "-item-content")
    }, Q), se && /* @__PURE__ */ f.createElement(Go, {
      className: "".concat(ae, "-item-remove"),
      onMouseDown: gl,
      onClick: de,
      customizeIcon: b
    }, "×"));
  }, pe = function(B, Q, me, se, de, Ee) {
    var be = function(Ie) {
      gl(Ie), w(!i);
    };
    return /* @__PURE__ */ f.createElement("span", {
      onMouseDown: be
    }, C({
      label: Q,
      value: B,
      disabled: me,
      closable: se,
      onClose: de,
      isMaxTag: !!Ee
    }));
  }, Re = function(B) {
    var Q = B.disabled, me = B.label, se = B.value, de = !u && !Q, Ee = me;
    if (typeof S == "number" && (typeof me == "string" || typeof me == "number")) {
      var be = String(Ee);
      be.length > S && (Ee = "".concat(be.slice(0, S), "..."));
    }
    var ye = function(re) {
      re && re.stopPropagation(), P(B);
    };
    return typeof C == "function" ? pe(se, Ee, Q, de, ye) : Pe(B, Ee, Q, de, ye);
  }, X = function(B) {
    if (!o.length)
      return null;
    var Q = typeof E == "function" ? E(B) : E;
    return typeof C == "function" ? pe(void 0, Q, !1, !1, void 0, !0) : Pe({
      title: Q
    }, Q, !1);
  }, j = /* @__PURE__ */ f.createElement("div", {
    className: "".concat(ae, "-search"),
    style: {
      width: G
    },
    onFocus: function() {
      te(!0);
    },
    onBlur: function() {
      te(!1);
    }
  }, /* @__PURE__ */ f.createElement(Ka, {
    ref: l,
    open: i,
    prefixCls: r,
    id: n,
    inputElement: null,
    disabled: u,
    autoFocus: h,
    autoComplete: p,
    editable: fe,
    activeDescendantId: g,
    value: we,
    onKeyDown: $,
    onMouseDown: N,
    onChange: M,
    onPaste: _,
    onCompositionStart: T,
    onCompositionEnd: I,
    onBlur: V,
    tabIndex: v,
    attrs: No(t, !0)
  }), /* @__PURE__ */ f.createElement("span", {
    ref: D,
    className: "".concat(ae, "-search-mirror"),
    "aria-hidden": !0
  }, we, " ")), U = /* @__PURE__ */ f.createElement(no, {
    prefixCls: "".concat(ae, "-overflow"),
    data: o,
    renderItem: Re,
    renderRest: X,
    suffix: j,
    itemKey: Hp,
    maxCount: y
  });
  return /* @__PURE__ */ f.createElement("span", {
    className: "".concat(ae, "-wrap")
  }, U, !o.length && !we && /* @__PURE__ */ f.createElement("span", {
    className: "".concat(ae, "-placeholder")
  }, c));
}, Wp = function(t) {
  var n = t.inputElement, r = t.prefixCls, o = t.id, i = t.inputRef, a = t.disabled, s = t.autoFocus, l = t.autoComplete, c = t.activeDescendantId, u = t.mode, d = t.open, m = t.values, h = t.placeholder, p = t.tabIndex, g = t.showSearch, v = t.searchValue, b = t.activeValue, y = t.maxLength, S = t.onInputKeyDown, x = t.onInputMouseDown, E = t.onInputChange, C = t.onInputPaste, w = t.onInputCompositionStart, P = t.onInputCompositionEnd, M = t.onInputBlur, _ = t.title, $ = f.useState(!1), N = F($, 2), T = N[0], I = N[1], V = u === "combobox", D = V || g, z = m[0], L = v || "";
  V && b && !T && (L = b), f.useEffect(function() {
    V && I(!1);
  }, [V, b]);
  var G = u !== "combobox" && !d && !g ? !1 : !!L, W = _ === void 0 ? qu(z) : _, k = f.useMemo(function() {
    return z ? null : /* @__PURE__ */ f.createElement("span", {
      className: "".concat(r, "-selection-placeholder"),
      style: G ? {
        visibility: "hidden"
      } : void 0
    }, h);
  }, [z, G, h, r]);
  return /* @__PURE__ */ f.createElement("span", {
    className: "".concat(r, "-selection-wrap")
  }, /* @__PURE__ */ f.createElement("span", {
    className: "".concat(r, "-selection-search")
  }, /* @__PURE__ */ f.createElement(Ka, {
    ref: i,
    prefixCls: r,
    id: o,
    open: d,
    inputElement: n,
    disabled: a,
    autoFocus: s,
    autoComplete: l,
    editable: D,
    activeDescendantId: c,
    value: L,
    onKeyDown: S,
    onMouseDown: x,
    onChange: function(K) {
      I(!0), E(K);
    },
    onPaste: C,
    onCompositionStart: w,
    onCompositionEnd: P,
    onBlur: M,
    tabIndex: p,
    attrs: No(t, !0),
    maxLength: V ? y : void 0
  })), !V && z ? /* @__PURE__ */ f.createElement("span", {
    className: "".concat(r, "-selection-item"),
    title: W,
    style: G ? {
      visibility: "hidden"
    } : void 0
  }, z.label) : null, k);
}, Up = function(t, n) {
  var r = Ae(null), o = Ae(!1), i = t.prefixCls, a = t.open, s = t.mode, l = t.showSearch, c = t.tokenWithEnter, u = t.disabled, d = t.prefix, m = t.autoClearSearchValue, h = t.onSearch, p = t.onSearchSubmit, g = t.onToggleOpen, v = t.onInputKeyDown, b = t.onInputBlur, y = t.domRef;
  f.useImperativeHandle(n, function() {
    return {
      focus: function(W) {
        r.current.focus(W);
      },
      blur: function() {
        r.current.blur();
      }
    };
  });
  var S = Hu(0), x = F(S, 2), E = x[0], C = x[1], w = function(W) {
    var k = W.which, H = r.current instanceof HTMLTextAreaElement;
    !H && a && (k === $e.UP || k === $e.DOWN) && W.preventDefault(), v && v(W), k === $e.ENTER && s === "tags" && !o.current && !a && (p == null || p(W.target.value)), !(H && !a && ~[$e.UP, $e.DOWN, $e.LEFT, $e.RIGHT].indexOf(k)) && wp(k) && g(!0);
  }, P = function() {
    C(!0);
  }, M = Ae(null), _ = function(W) {
    h(W, !0, o.current) !== !1 && g(!0);
  }, $ = function() {
    o.current = !0;
  }, N = function(W) {
    o.current = !1, s !== "combobox" && _(W.target.value);
  }, T = function(W) {
    var k = W.target.value;
    if (c && M.current && /[\r\n]/.test(M.current)) {
      var H = M.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      k = k.replace(H, M.current);
    }
    M.current = null, _(k);
  }, I = function(W) {
    var k = W.clipboardData, H = k == null ? void 0 : k.getData("text");
    M.current = H || "";
  }, V = function(W) {
    var k = W.target;
    if (k !== r.current) {
      var H = document.body.style.msTouchAction !== void 0;
      H ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, D = function(W) {
    var k = E();
    W.target !== r.current && !k && !(s === "combobox" && u) && W.preventDefault(), (s !== "combobox" && (!l || !k) || !a) && (a && m !== !1 && h("", !0, !1), g());
  }, z = {
    inputRef: r,
    onInputKeyDown: w,
    onInputMouseDown: P,
    onInputChange: T,
    onInputPaste: I,
    onInputCompositionStart: $,
    onInputCompositionEnd: N,
    onInputBlur: b
  }, L = s === "multiple" || s === "tags" ? /* @__PURE__ */ f.createElement(Bp, Ke({}, t, z)) : /* @__PURE__ */ f.createElement(Wp, Ke({}, t, z));
  return /* @__PURE__ */ f.createElement("div", {
    ref: y,
    className: "".concat(i, "-selector"),
    onClick: V,
    onMouseDown: D
  }, d && /* @__PURE__ */ f.createElement("div", {
    className: "".concat(i, "-prefix")
  }, d), L);
}, Ku = /* @__PURE__ */ f.forwardRef(Up);
process.env.NODE_ENV !== "production" && (Ku.displayName = "Selector");
function qp(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, o = e.arrowPos, i = r || {}, a = i.className, s = i.content, l = o.x, c = l === void 0 ? 0 : l, u = o.y, d = u === void 0 ? 0 : u, m = f.useRef();
  if (!n || !n.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var p = n.points[0], g = n.points[1], v = p[0], b = p[1], y = g[0], S = g[1];
    v === y || !["t", "b"].includes(v) ? h.top = d : v === "t" ? h.top = 0 : h.bottom = 0, b === S || !["l", "r"].includes(b) ? h.left = c : b === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ f.createElement("div", {
    ref: m,
    className: Ze("".concat(t, "-arrow"), a),
    style: h
  }, s);
}
function Kp(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, o = e.mask, i = e.motion;
  return o ? /* @__PURE__ */ f.createElement(Ba, Ke({}, i, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(a) {
    var s = a.className;
    return /* @__PURE__ */ f.createElement("div", {
      style: {
        zIndex: r
      },
      className: Ze("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Gu = /* @__PURE__ */ f.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Gu.displayName = "PopupContent");
var Xu = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, o = e.prefixCls, i = e.style, a = e.target, s = e.onVisibleChanged, l = e.open, c = e.keepDom, u = e.fresh, d = e.onClick, m = e.mask, h = e.arrow, p = e.arrowPos, g = e.align, v = e.motion, b = e.maskMotion, y = e.forceRender, S = e.getPopupContainer, x = e.autoDestroy, E = e.portal, C = e.zIndex, w = e.onMouseEnter, P = e.onMouseLeave, M = e.onPointerEnter, _ = e.onPointerDownCapture, $ = e.ready, N = e.offsetX, T = e.offsetY, I = e.offsetR, V = e.offsetB, D = e.onAlign, z = e.onPrepare, L = e.stretch, G = e.targetWidth, W = e.targetHeight, k = typeof n == "function" ? n() : n, H = l || c, K = (S == null ? void 0 : S.length) > 0, te = f.useState(!S || !K), ae = F(te, 2), we = ae[0], fe = ae[1];
  if (bt(function() {
    !we && K && a && fe(!0);
  }, [we, K, a]), !we)
    return null;
  var Pe = "auto", pe = {
    left: "-1000vw",
    top: "-1000vh",
    right: Pe,
    bottom: Pe
  };
  if ($ || !l) {
    var Re, X = g.points, j = g.dynamicInset || ((Re = g._experimental) === null || Re === void 0 ? void 0 : Re.dynamicInset), U = j && X[0][1] === "r", A = j && X[0][0] === "b";
    U ? (pe.right = I, pe.left = Pe) : (pe.left = N, pe.right = Pe), A ? (pe.bottom = V, pe.top = Pe) : (pe.top = T, pe.bottom = Pe);
  }
  var B = {};
  return L && (L.includes("height") && W ? B.height = W : L.includes("minHeight") && W && (B.minHeight = W), L.includes("width") && G ? B.width = G : L.includes("minWidth") && G && (B.minWidth = G)), l || (B.pointerEvents = "none"), /* @__PURE__ */ f.createElement(E, {
    open: y || H,
    getContainer: S && function() {
      return S(a);
    },
    autoDestroy: x
  }, /* @__PURE__ */ f.createElement(Kp, {
    prefixCls: o,
    open: l,
    zIndex: C,
    mask: m,
    motion: b
  }), /* @__PURE__ */ f.createElement(Un, {
    onResize: D,
    disabled: !l
  }, function(Q) {
    return /* @__PURE__ */ f.createElement(Ba, Ke({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: y,
      leavedClassName: "".concat(o, "-hidden")
    }, v, {
      onAppearPrepare: z,
      onEnterPrepare: z,
      visible: l,
      onVisibleChanged: function(se) {
        var de;
        v == null || (de = v.onVisibleChanged) === null || de === void 0 || de.call(v, se), s(se);
      }
    }), function(me, se) {
      var de = me.className, Ee = me.style, be = Ze(o, de, r);
      return /* @__PURE__ */ f.createElement("div", {
        ref: Ra(Q, t, se),
        className: be,
        style: R(R(R(R({
          "--arrow-x": "".concat(p.x || 0, "px"),
          "--arrow-y": "".concat(p.y || 0, "px")
        }, pe), B), Ee), {}, {
          boxSizing: "border-box",
          zIndex: C
        }, i),
        onMouseEnter: w,
        onMouseLeave: P,
        onPointerEnter: M,
        onClick: d,
        onPointerDownCapture: _
      }, h && /* @__PURE__ */ f.createElement(qp, {
        prefixCls: o,
        arrow: h,
        arrowPos: p,
        align: g
      }), /* @__PURE__ */ f.createElement(Gu, {
        cache: !l && !u
      }, k));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Xu.displayName = "Popup");
var Yu = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, o = Ho(n), i = f.useCallback(function(s) {
    Pa(t, r ? r(s) : s);
  }, [r]), a = zo(i, Ma(n));
  return o ? /* @__PURE__ */ f.cloneElement(n, {
    ref: a
  }) : n;
});
process.env.NODE_ENV !== "production" && (Yu.displayName = "TriggerWrapper");
var pl = /* @__PURE__ */ f.createContext(null);
function yl(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function Gp(e, t, n, r) {
  return f.useMemo(function() {
    var o = yl(n ?? t), i = yl(r ?? t), a = new Set(o), s = new Set(i);
    return e && (a.has("hover") && (a.delete("hover"), a.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [a, s];
  }, [e, t, n, r]);
}
function Xp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function Yp(e, t, n, r) {
  for (var o = n.points, i = Object.keys(e), a = 0; a < i.length; a += 1) {
    var s, l = i[a];
    if (Xp((s = e[l]) === null || s === void 0 ? void 0 : s.points, o, r))
      return "".concat(t, "-placement-").concat(l);
  }
  return "";
}
function bl(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function ro(e) {
  return e.ownerDocument.defaultView;
}
function ma(e) {
  for (var t = [], n = e == null ? void 0 : e.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var o = ro(n).getComputedStyle(n), i = o.overflowX, a = o.overflowY, s = o.overflow;
    [i, a, s].some(function(l) {
      return r.includes(l);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function Yr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Nr(e) {
  return Yr(parseFloat(e), 0);
}
function Sl(e, t) {
  var n = R({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var o = ro(r).getComputedStyle(r), i = o.overflow, a = o.overflowClipMargin, s = o.borderTopWidth, l = o.borderBottomWidth, c = o.borderLeftWidth, u = o.borderRightWidth, d = r.getBoundingClientRect(), m = r.offsetHeight, h = r.clientHeight, p = r.offsetWidth, g = r.clientWidth, v = Nr(s), b = Nr(l), y = Nr(c), S = Nr(u), x = Yr(Math.round(d.width / p * 1e3) / 1e3), E = Yr(Math.round(d.height / m * 1e3) / 1e3), C = (p - g - y - S) * x, w = (m - h - v - b) * E, P = v * E, M = b * E, _ = y * x, $ = S * x, N = 0, T = 0;
      if (i === "clip") {
        var I = Nr(a);
        N = I * x, T = I * E;
      }
      var V = d.x + _ - N, D = d.y + P - T, z = V + d.width + 2 * N - _ - $ - C, L = D + d.height + 2 * T - P - M - w;
      n.left = Math.max(n.left, V), n.top = Math.max(n.top, D), n.right = Math.min(n.right, z), n.bottom = Math.min(n.bottom, L);
    }
  }), n;
}
function Cl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function wl(e, t) {
  var n = t || [], r = F(n, 2), o = r[0], i = r[1];
  return [Cl(e.width, o), Cl(e.height, i)];
}
function El() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function ur(e, t) {
  var n = t[0], r = t[1], o, i;
  return n === "t" ? i = e.y : n === "b" ? i = e.y + e.height : i = e.y + e.height / 2, r === "l" ? o = e.x : r === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: i
  };
}
function kn(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, o) {
    return o === t ? n[r] || "c" : r;
  }).join("");
}
function Qp(e, t, n, r, o, i, a) {
  var s = f.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[r] || {}
  }), l = F(s, 2), c = l[0], u = l[1], d = f.useRef(0), m = f.useMemo(function() {
    return t ? ma(t) : [];
  }, [t]), h = f.useRef({}), p = function() {
    h.current = {};
  };
  e || p();
  var g = Bt(function() {
    if (t && n && e) {
      let rn = function(Mr, Rn) {
        var Ln = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ge, _r = H.x + Mr, oo = H.y + Rn, Zo = _r + A, Jo = oo + U, ei = Math.max(_r, Ln.left), ie = Math.max(oo, Ln.top), Ce = Math.min(Zo, Ln.right), vt = Math.min(Jo, Ln.bottom);
        return Math.max(0, (Ce - ei) * (vt - ie));
      }, ir = function() {
        dt = H.y + he, Tt = dt + U, zt = H.x + Z, ht = zt + A;
      };
      var y, S, x, E, C = t, w = C.ownerDocument, P = ro(C), M = P.getComputedStyle(C), _ = M.position, $ = C.style.left, N = C.style.top, T = C.style.right, I = C.style.bottom, V = C.style.overflow, D = R(R({}, o[r]), i), z = w.createElement("div");
      (y = C.parentElement) === null || y === void 0 || y.appendChild(z), z.style.left = "".concat(C.offsetLeft, "px"), z.style.top = "".concat(C.offsetTop, "px"), z.style.position = _, z.style.height = "".concat(C.offsetHeight, "px"), z.style.width = "".concat(C.offsetWidth, "px"), C.style.left = "0", C.style.top = "0", C.style.right = "auto", C.style.bottom = "auto", C.style.overflow = "hidden";
      var L;
      if (Array.isArray(n))
        L = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var G, W, k = n.getBoundingClientRect();
        k.x = (G = k.x) !== null && G !== void 0 ? G : k.left, k.y = (W = k.y) !== null && W !== void 0 ? W : k.top, L = {
          x: k.x,
          y: k.y,
          width: k.width,
          height: k.height
        };
      }
      var H = C.getBoundingClientRect(), K = P.getComputedStyle(C), te = K.height, ae = K.width;
      H.x = (S = H.x) !== null && S !== void 0 ? S : H.left, H.y = (x = H.y) !== null && x !== void 0 ? x : H.top;
      var we = w.documentElement, fe = we.clientWidth, Pe = we.clientHeight, pe = we.scrollWidth, Re = we.scrollHeight, X = we.scrollTop, j = we.scrollLeft, U = H.height, A = H.width, B = L.height, Q = L.width, me = {
        left: 0,
        top: 0,
        right: fe,
        bottom: Pe
      }, se = {
        left: -j,
        top: -X,
        right: pe - j,
        bottom: Re - X
      }, de = D.htmlRegion, Ee = "visible", be = "visibleFirst";
      de !== "scroll" && de !== be && (de = Ee);
      var ye = de === be, Ie = Sl(se, m), re = Sl(me, m), Ge = de === Ee ? re : Ie, Me = ye ? re : Ge;
      C.style.left = "auto", C.style.top = "auto", C.style.right = "0", C.style.bottom = "0";
      var Le = C.getBoundingClientRect();
      C.style.left = $, C.style.top = N, C.style.right = T, C.style.bottom = I, C.style.overflow = V, (E = C.parentElement) === null || E === void 0 || E.removeChild(z);
      var je = Yr(Math.round(A / parseFloat(ae) * 1e3) / 1e3), xe = Yr(Math.round(U / parseFloat(te) * 1e3) / 1e3);
      if (je === 0 || xe === 0 || zr(n) && !jh(n))
        return;
      var Be = D.offset, Ye = D.targetOffset, lt = wl(H, Be), nt = F(lt, 2), Xe = nt[0], Te = nt[1], _t = wl(L, Ye), Ue = F(_t, 2), ct = Ue[0], it = Ue[1];
      L.x -= ct, L.y -= it;
      var Lt = D.points || [], ut = F(Lt, 2), $t = ut[0], xt = ut[1], ft = El(xt), Qe = El($t), Ne = ur(L, ft), ce = ur(H, Qe), ve = R({}, D), Z = Ne.x - ce.x + Xe, he = Ne.y - ce.y + Te, ke = rn(Z, he), J = rn(Z, he, re), oe = ur(L, ["t", "l"]), Y = ur(H, ["t", "l"]), ee = ur(L, ["b", "r"]), Se = ur(H, ["b", "r"]), ue = D.overflow || {}, ze = ue.adjustX, Je = ue.adjustY, rt = ue.shiftX, qe = ue.shiftY, It = function(Rn) {
        return typeof Rn == "boolean" ? Rn : Rn >= 0;
      }, dt, Tt, zt, ht;
      ir();
      var Ot = It(Je), q = Qe[0] === ft[0];
      if (Ot && Qe[0] === "t" && (Tt > Me.bottom || h.current.bt)) {
        var ne = he;
        q ? ne -= U - B : ne = oe.y - Se.y - Te;
        var _e = rn(Z, ne), We = rn(Z, ne, re);
        // Of course use larger one
        _e > ke || _e === ke && (!ye || // Choose recommend one
        We >= J) ? (h.current.bt = !0, he = ne, Te = -Te, ve.points = [kn(Qe, 0), kn(ft, 0)]) : h.current.bt = !1;
      }
      if (Ot && Qe[0] === "b" && (dt < Me.top || h.current.tb)) {
        var at = he;
        q ? at += U - B : at = ee.y - Y.y - Te;
        var cn = rn(Z, at), Kt = rn(Z, at, re);
        // Of course use larger one
        cn > ke || cn === ke && (!ye || // Choose recommend one
        Kt >= J) ? (h.current.tb = !0, he = at, Te = -Te, ve.points = [kn(Qe, 0), kn(ft, 0)]) : h.current.tb = !1;
      }
      var gn = It(ze), Fn = Qe[1] === ft[1];
      if (gn && Qe[1] === "l" && (ht > Me.right || h.current.rl)) {
        var Gt = Z;
        Fn ? Gt -= A - Q : Gt = oe.x - Se.x - Xe;
        var Xt = rn(Gt, he), Dn = rn(Gt, he, re);
        // Of course use larger one
        Xt > ke || Xt === ke && (!ye || // Choose recommend one
        Dn >= J) ? (h.current.rl = !0, Z = Gt, Xe = -Xe, ve.points = [kn(Qe, 1), kn(ft, 1)]) : h.current.rl = !1;
      }
      if (gn && Qe[1] === "r" && (zt < Me.left || h.current.lr)) {
        var pn = Z;
        Fn ? pn += A - Q : pn = ee.x - Y.x - Xe;
        var Gn = rn(pn, he), Pn = rn(pn, he, re);
        // Of course use larger one
        Gn > ke || Gn === ke && (!ye || // Choose recommend one
        Pn >= J) ? (h.current.lr = !0, Z = pn, Xe = -Xe, ve.points = [kn(Qe, 1), kn(ft, 1)]) : h.current.lr = !1;
      }
      ir();
      var Yt = rt === !0 ? 0 : rt;
      typeof Yt == "number" && (zt < re.left && (Z -= zt - re.left - Xe, L.x + Q < re.left + Yt && (Z += L.x - re.left + Q - Yt)), ht > re.right && (Z -= ht - re.right - Xe, L.x > re.right - Yt && (Z += L.x - re.right + Yt)));
      var yn = qe === !0 ? 0 : qe;
      typeof yn == "number" && (dt < re.top && (he -= dt - re.top - Te, L.y + B < re.top + yn && (he += L.y - re.top + B - yn)), Tt > re.bottom && (he -= Tt - re.bottom - Te, L.y > re.bottom - yn && (he += L.y - re.bottom + yn)));
      var bn = H.x + Z, Sn = bn + A, An = H.y + he, Xn = An + U, Fe = L.x, Oe = Fe + Q, Pt = L.y, Nt = Pt + B, gt = Math.max(bn, Fe), Ct = Math.min(Sn, Oe), Qt = (gt + Ct) / 2, qt = Qt - bn, nn = Math.max(An, Pt), Cn = Math.min(Xn, Nt), un = (nn + Cn) / 2, Vn = un - An;
      a == null || a(t, ve);
      var Ht = Le.right - H.x - (Z + H.width), Rr = Le.bottom - H.y - (he + H.height);
      je === 1 && (Z = Math.round(Z), Ht = Math.round(Ht)), xe === 1 && (he = Math.round(he), Rr = Math.round(Rr));
      var Qo = {
        ready: !0,
        offsetX: Z / je,
        offsetY: he / xe,
        offsetR: Ht / je,
        offsetB: Rr / xe,
        arrowX: qt / je,
        arrowY: Vn / xe,
        scaleX: je,
        scaleY: xe,
        align: ve
      };
      u(Qo);
    }
  }), v = function() {
    d.current += 1;
    var S = d.current;
    Promise.resolve().then(function() {
      d.current === S && g();
    });
  }, b = function() {
    u(function(S) {
      return R(R({}, S), {}, {
        ready: !1
      });
    });
  };
  return bt(b, [r]), bt(function() {
    e || b();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, v];
}
function Zp(e, t, n, r, o) {
  bt(function() {
    if (e && t && n) {
      let d = function() {
        r(), o();
      };
      var i = t, a = n, s = ma(i), l = ma(a), c = ro(a), u = new Set([c].concat(le(s), le(l)));
      return u.forEach(function(m) {
        m.addEventListener("scroll", d, {
          passive: !0
        });
      }), c.addEventListener("resize", d, {
        passive: !0
      }), r(), function() {
        u.forEach(function(m) {
          m.removeEventListener("scroll", d), c.removeEventListener("resize", d);
        });
      };
    }
  }, [e, t, n]);
}
function Jp(e, t, n, r, o, i, a, s) {
  var l = f.useRef(e);
  l.current = e;
  var c = f.useRef(!1);
  f.useEffect(function() {
    if (t && r && (!o || i)) {
      var d = function() {
        c.current = !1;
      }, m = function(x) {
        var E;
        l.current && !a(((E = x.composedPath) === null || E === void 0 || (E = E.call(x)) === null || E === void 0 ? void 0 : E[0]) || x.target) && !c.current && s(!1);
      }, h = ro(r);
      h.addEventListener("pointerdown", d, !0), h.addEventListener("mousedown", m, !0), h.addEventListener("contextmenu", m, !0);
      var p = To(n);
      if (p && (p.addEventListener("mousedown", m, !0), p.addEventListener("contextmenu", m, !0)), process.env.NODE_ENV !== "production") {
        var g, v, b = n == null || (g = n.getRootNode) === null || g === void 0 ? void 0 : g.call(n), y = (v = r.getRootNode) === null || v === void 0 ? void 0 : v.call(r);
        er(b === y, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        h.removeEventListener("pointerdown", d, !0), h.removeEventListener("mousedown", m, !0), h.removeEventListener("contextmenu", m, !0), p && (p.removeEventListener("mousedown", m, !0), p.removeEventListener("contextmenu", m, !0));
      };
    }
  }, [t, n, r, o, i]);
  function u() {
    c.current = !0;
  }
  return u;
}
var e0 = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function t0() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ua, t = /* @__PURE__ */ f.forwardRef(function(n, r) {
    var o = n.prefixCls, i = o === void 0 ? "rc-trigger-popup" : o, a = n.children, s = n.action, l = s === void 0 ? "hover" : s, c = n.showAction, u = n.hideAction, d = n.popupVisible, m = n.defaultPopupVisible, h = n.onPopupVisibleChange, p = n.afterPopupVisibleChange, g = n.mouseEnterDelay, v = n.mouseLeaveDelay, b = v === void 0 ? 0.1 : v, y = n.focusDelay, S = n.blurDelay, x = n.mask, E = n.maskClosable, C = E === void 0 ? !0 : E, w = n.getPopupContainer, P = n.forceRender, M = n.autoDestroy, _ = n.destroyPopupOnHide, $ = n.popup, N = n.popupClassName, T = n.popupStyle, I = n.popupPlacement, V = n.builtinPlacements, D = V === void 0 ? {} : V, z = n.popupAlign, L = n.zIndex, G = n.stretch, W = n.getPopupClassNameFromAlign, k = n.fresh, H = n.alignPoint, K = n.onPopupClick, te = n.onPopupAlign, ae = n.arrow, we = n.popupMotion, fe = n.maskMotion, Pe = n.popupTransitionName, pe = n.popupAnimation, Re = n.maskTransitionName, X = n.maskAnimation, j = n.className, U = n.getTriggerDOMNode, A = St(n, e0), B = M || _ || !1, Q = f.useState(!1), me = F(Q, 2), se = me[0], de = me[1];
    bt(function() {
      de(ju());
    }, []);
    var Ee = f.useRef({}), be = f.useContext(pl), ye = f.useMemo(function() {
      return {
        registerSubPopup: function(Ce, vt) {
          Ee.current[Ce] = vt, be == null || be.registerSubPopup(Ce, vt);
        }
      };
    }, [be]), Ie = yg(), re = f.useState(null), Ge = F(re, 2), Me = Ge[0], Le = Ge[1], je = f.useRef(null), xe = Bt(function(ie) {
      je.current = ie, zr(ie) && Me !== ie && Le(ie), be == null || be.registerSubPopup(Ie, ie);
    }), Be = f.useState(null), Ye = F(Be, 2), lt = Ye[0], nt = Ye[1], Xe = f.useRef(null), Te = Bt(function(ie) {
      zr(ie) && lt !== ie && (nt(ie), Xe.current = ie);
    }), _t = f.Children.only(a), Ue = (_t == null ? void 0 : _t.props) || {}, ct = {}, it = Bt(function(ie) {
      var Ce, vt, Rt = lt;
      return (Rt == null ? void 0 : Rt.contains(ie)) || ((Ce = To(Rt)) === null || Ce === void 0 ? void 0 : Ce.host) === ie || ie === Rt || (Me == null ? void 0 : Me.contains(ie)) || ((vt = To(Me)) === null || vt === void 0 ? void 0 : vt.host) === ie || ie === Me || Object.values(Ee.current).some(function(yt) {
        return (yt == null ? void 0 : yt.contains(ie)) || ie === yt;
      });
    }), Lt = bl(i, we, pe, Pe), ut = bl(i, fe, X, Re), $t = f.useState(m || !1), xt = F($t, 2), ft = xt[0], Qe = xt[1], Ne = d ?? ft, ce = Bt(function(ie) {
      d === void 0 && Qe(ie);
    });
    bt(function() {
      Qe(d || !1);
    }, [d]);
    var ve = f.useRef(Ne);
    ve.current = Ne;
    var Z = f.useRef([]);
    Z.current = [];
    var he = Bt(function(ie) {
      var Ce;
      ce(ie), ((Ce = Z.current[Z.current.length - 1]) !== null && Ce !== void 0 ? Ce : Ne) !== ie && (Z.current.push(ie), h == null || h(ie));
    }), ke = f.useRef(), J = function() {
      clearTimeout(ke.current);
    }, oe = function(Ce) {
      var vt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      J(), vt === 0 ? he(Ce) : ke.current = setTimeout(function() {
        he(Ce);
      }, vt * 1e3);
    };
    f.useEffect(function() {
      return J;
    }, []);
    var Y = f.useState(!1), ee = F(Y, 2), Se = ee[0], ue = ee[1];
    bt(function(ie) {
      (!ie || Ne) && ue(!0);
    }, [Ne]);
    var ze = f.useState(null), Je = F(ze, 2), rt = Je[0], qe = Je[1], It = f.useState(null), dt = F(It, 2), Tt = dt[0], zt = dt[1], ht = function(Ce) {
      zt([Ce.clientX, Ce.clientY]);
    }, Ot = Qp(Ne, Me, H && Tt !== null ? Tt : lt, I, D, z, te), q = F(Ot, 11), ne = q[0], _e = q[1], We = q[2], at = q[3], cn = q[4], Kt = q[5], gn = q[6], Fn = q[7], Gt = q[8], Xt = q[9], Dn = q[10], pn = Gp(se, l, c, u), Gn = F(pn, 2), Pn = Gn[0], Yt = Gn[1], yn = Pn.has("click"), bn = Yt.has("click") || Yt.has("contextMenu"), Sn = Bt(function() {
      Se || Dn();
    }), An = function() {
      ve.current && H && bn && oe(!1);
    };
    Zp(Ne, lt, Me, Sn, An), bt(function() {
      Sn();
    }, [Tt, I]), bt(function() {
      Ne && !(D != null && D[I]) && Sn();
    }, [JSON.stringify(z)]);
    var Xn = f.useMemo(function() {
      var ie = Yp(D, i, Xt, H);
      return Ze(ie, W == null ? void 0 : W(Xt));
    }, [Xt, W, D, i, H]);
    f.useImperativeHandle(r, function() {
      return {
        nativeElement: Xe.current,
        popupElement: je.current,
        forceAlign: Sn
      };
    });
    var Fe = f.useState(0), Oe = F(Fe, 2), Pt = Oe[0], Nt = Oe[1], gt = f.useState(0), Ct = F(gt, 2), Qt = Ct[0], qt = Ct[1], nn = function() {
      if (G && lt) {
        var Ce = lt.getBoundingClientRect();
        Nt(Ce.width), qt(Ce.height);
      }
    }, Cn = function() {
      nn(), Sn();
    }, un = function(Ce) {
      ue(!1), Dn(), p == null || p(Ce);
    }, Vn = function() {
      return new Promise(function(Ce) {
        nn(), qe(function() {
          return Ce;
        });
      });
    };
    bt(function() {
      rt && (Dn(), rt(), qe(null));
    }, [rt]);
    function Ht(ie, Ce, vt, Rt) {
      ct[ie] = function(yt) {
        var io;
        Rt == null || Rt(yt), oe(Ce, vt);
        for (var ti = arguments.length, rs = new Array(ti > 1 ? ti - 1 : 0), ao = 1; ao < ti; ao++)
          rs[ao - 1] = arguments[ao];
        (io = Ue[ie]) === null || io === void 0 || io.call.apply(io, [Ue, yt].concat(rs));
      };
    }
    (yn || bn) && (ct.onClick = function(ie) {
      var Ce;
      ve.current && bn ? oe(!1) : !ve.current && yn && (ht(ie), oe(!0));
      for (var vt = arguments.length, Rt = new Array(vt > 1 ? vt - 1 : 0), yt = 1; yt < vt; yt++)
        Rt[yt - 1] = arguments[yt];
      (Ce = Ue.onClick) === null || Ce === void 0 || Ce.call.apply(Ce, [Ue, ie].concat(Rt));
    });
    var Rr = Jp(Ne, bn, lt, Me, x, C, it, oe), Qo = Pn.has("hover"), rn = Yt.has("hover"), ir, Mr;
    Qo && (Ht("onMouseEnter", !0, g, function(ie) {
      ht(ie);
    }), Ht("onPointerEnter", !0, g, function(ie) {
      ht(ie);
    }), ir = function(Ce) {
      (Ne || Se) && Me !== null && Me !== void 0 && Me.contains(Ce.target) && oe(!0, g);
    }, H && (ct.onMouseMove = function(ie) {
      var Ce;
      (Ce = Ue.onMouseMove) === null || Ce === void 0 || Ce.call(Ue, ie);
    })), rn && (Ht("onMouseLeave", !1, b), Ht("onPointerLeave", !1, b), Mr = function() {
      oe(!1, b);
    }), Pn.has("focus") && Ht("onFocus", !0, y), Yt.has("focus") && Ht("onBlur", !1, S), Pn.has("contextMenu") && (ct.onContextMenu = function(ie) {
      var Ce;
      ve.current && Yt.has("contextMenu") ? oe(!1) : (ht(ie), oe(!0)), ie.preventDefault();
      for (var vt = arguments.length, Rt = new Array(vt > 1 ? vt - 1 : 0), yt = 1; yt < vt; yt++)
        Rt[yt - 1] = arguments[yt];
      (Ce = Ue.onContextMenu) === null || Ce === void 0 || Ce.call.apply(Ce, [Ue, ie].concat(Rt));
    }), j && (ct.className = Ze(Ue.className, j));
    var Rn = f.useRef(!1);
    Rn.current || (Rn.current = P || Ne || Se);
    var Ln = R(R({}, Ue), ct), _r = {}, oo = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    oo.forEach(function(ie) {
      A[ie] && (_r[ie] = function() {
        for (var Ce, vt = arguments.length, Rt = new Array(vt), yt = 0; yt < vt; yt++)
          Rt[yt] = arguments[yt];
        (Ce = Ln[ie]) === null || Ce === void 0 || Ce.call.apply(Ce, [Ln].concat(Rt)), A[ie].apply(A, Rt);
      });
    });
    var Zo = /* @__PURE__ */ f.cloneElement(_t, R(R({}, Ln), _r)), Jo = {
      x: Kt,
      y: gn
    }, ei = ae ? R({}, ae !== !0 ? ae : {}) : null;
    return /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement(Un, {
      disabled: !Ne,
      ref: Te,
      onResize: Cn
    }, /* @__PURE__ */ f.createElement(Yu, {
      getTriggerDOMNode: U
    }, Zo)), Rn.current && /* @__PURE__ */ f.createElement(pl.Provider, {
      value: ye
    }, /* @__PURE__ */ f.createElement(Xu, {
      portal: e,
      ref: xe,
      prefixCls: i,
      popup: $,
      className: Ze(N, Xn),
      style: T,
      target: lt,
      onMouseEnter: ir,
      onMouseLeave: Mr,
      onPointerEnter: ir,
      zIndex: L,
      open: Ne,
      keepDom: Se,
      fresh: k,
      onClick: K,
      onPointerDownCapture: Rr,
      mask: x,
      motion: Lt,
      maskMotion: ut,
      onVisibleChanged: un,
      onPrepare: Vn,
      forceRender: P,
      autoDestroy: B,
      getPopupContainer: w,
      align: Xt,
      arrow: ei,
      arrowPos: Jo,
      ready: ne,
      offsetX: _e,
      offsetY: We,
      offsetR: at,
      offsetB: cn,
      onAlign: Sn,
      stretch: G,
      targetWidth: Pt / Fn,
      targetHeight: Qt / Gt
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const n0 = t0(Ua);
var r0 = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], o0 = function(t) {
  var n = t === !0 ? 0 : 1;
  return {
    bottomLeft: {
      points: ["tl", "bl"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    bottomRight: {
      points: ["tr", "br"],
      offset: [0, 4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topLeft: {
      points: ["bl", "tl"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    },
    topRight: {
      points: ["br", "tr"],
      offset: [0, -4],
      overflow: {
        adjustX: n,
        adjustY: 1
      },
      htmlRegion: "scroll"
    }
  };
}, i0 = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var o = t.visible, i = t.children, a = t.popupElement, s = t.animation, l = t.transitionName, c = t.dropdownStyle, u = t.dropdownClassName, d = t.direction, m = d === void 0 ? "ltr" : d, h = t.placement, p = t.builtinPlacements, g = t.dropdownMatchSelectWidth, v = t.dropdownRender, b = t.dropdownAlign, y = t.getPopupContainer, S = t.empty, x = t.getTriggerDOMNode, E = t.onPopupVisibleChange, C = t.onPopupMouseEnter, w = St(t, r0), P = "".concat(r, "-dropdown"), M = a;
  v && (M = v(a));
  var _ = f.useMemo(function() {
    return p || o0(g);
  }, [p, g]), $ = s ? "".concat(P, "-").concat(s) : l, N = typeof g == "number", T = f.useMemo(function() {
    return N ? null : g === !1 ? "minWidth" : "width";
  }, [g, N]), I = c;
  N && (I = R(R({}, I), {}, {
    width: g
  }));
  var V = f.useRef(null);
  return f.useImperativeHandle(n, function() {
    return {
      getPopupElement: function() {
        var z;
        return (z = V.current) === null || z === void 0 ? void 0 : z.popupElement;
      }
    };
  }), /* @__PURE__ */ f.createElement(n0, Ke({}, w, {
    showAction: E ? ["click"] : [],
    hideAction: E ? ["click"] : [],
    popupPlacement: h || (m === "rtl" ? "bottomRight" : "bottomLeft"),
    builtinPlacements: _,
    prefixCls: P,
    popupTransitionName: $,
    popup: /* @__PURE__ */ f.createElement("div", {
      onMouseEnter: C
    }, M),
    ref: V,
    stretch: T,
    popupAlign: b,
    popupVisible: o,
    getPopupContainer: y,
    popupClassName: Ze(u, O({}, "".concat(P, "-empty"), S)),
    popupStyle: I,
    getTriggerDOMNode: x,
    onPopupVisibleChange: E
  }), i);
}, Qu = /* @__PURE__ */ f.forwardRef(i0);
process.env.NODE_ENV !== "production" && (Qu.displayName = "SelectTrigger");
function xl(e, t) {
  var n = e.key, r;
  return "value" in e && (r = e.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function ha(e) {
  return typeof e < "u" && !Number.isNaN(e);
}
function Zu(e, t) {
  var n = e || {}, r = n.label, o = n.value, i = n.options, a = n.groupLabel, s = r || (t ? "children" : "label");
  return {
    label: s,
    value: o || "value",
    options: i || "options",
    groupLabel: a || s
  };
}
function a0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, o = [], i = Zu(n, !1), a = i.label, s = i.value, l = i.options, c = i.groupLabel;
  function u(d, m) {
    Array.isArray(d) && d.forEach(function(h) {
      if (m || !(l in h)) {
        var p = h[s];
        o.push({
          key: xl(h, o.length),
          groupOption: m,
          data: h,
          label: h[a],
          value: p
        });
      } else {
        var g = h[c];
        g === void 0 && r && (g = h.label), o.push({
          key: xl(h, o.length),
          group: !0,
          data: h,
          label: g
        }), u(h[l], !0);
      }
    });
  }
  return u(e, !1), o;
}
function ga(e) {
  var t = R({}, e);
  return "props" in t || Object.defineProperty(t, "props", {
    get: function() {
      return Ve(!1, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
    }
  }), t;
}
var s0 = function(t, n, r) {
  if (!n || !n.length)
    return null;
  var o = !1, i = function s(l, c) {
    var u = Nc(c), d = u[0], m = u.slice(1);
    if (!d)
      return [l];
    var h = l.split(d);
    return o = o || h.length > 1, h.reduce(function(p, g) {
      return [].concat(le(p), le(s(g, m)));
    }, []).filter(Boolean);
  }, a = i(t, n);
  return o ? typeof r < "u" ? a.slice(0, r) : a : null;
}, Xa = /* @__PURE__ */ f.createContext(null);
function l0(e) {
  var t = e.visible, n = e.values;
  if (!t)
    return null;
  var r = 50;
  return /* @__PURE__ */ f.createElement("span", {
    "aria-live": "polite",
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    }
  }, "".concat(n.slice(0, r).map(function(o) {
    var i = o.label, a = o.value;
    return ["number", "string"].includes(ge(i)) ? i : a;
  }).join(", ")), n.length > r ? ", ..." : null);
}
var c0 = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "prefix", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], u0 = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"], Lo = function(t) {
  return t === "tags" || t === "multiple";
}, Ju = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n, r = e.id, o = e.prefixCls, i = e.className, a = e.showSearch, s = e.tagRender, l = e.direction, c = e.omitDomProps, u = e.displayValues, d = e.onDisplayValuesChange, m = e.emptyOptions, h = e.notFoundContent, p = h === void 0 ? "Not Found" : h, g = e.onClear, v = e.mode, b = e.disabled, y = e.loading, S = e.getInputElement, x = e.getRawInputElement, E = e.open, C = e.defaultOpen, w = e.onDropdownVisibleChange, P = e.activeValue, M = e.onActiveValueChange, _ = e.activeDescendantId, $ = e.searchValue, N = e.autoClearSearchValue, T = e.onSearch, I = e.onSearchSplit, V = e.tokenSeparators, D = e.allowClear, z = e.prefix, L = e.suffixIcon, G = e.clearIcon, W = e.OptionList, k = e.animation, H = e.transitionName, K = e.dropdownStyle, te = e.dropdownClassName, ae = e.dropdownMatchSelectWidth, we = e.dropdownRender, fe = e.dropdownAlign, Pe = e.placement, pe = e.builtinPlacements, Re = e.getPopupContainer, X = e.showAction, j = X === void 0 ? [] : X, U = e.onFocus, A = e.onBlur, B = e.onKeyUp, Q = e.onKeyDown, me = e.onMouseDown, se = St(e, c0), de = Lo(v), Ee = (a !== void 0 ? a : de) || v === "combobox", be = R({}, se);
  u0.forEach(function(Fe) {
    delete be[Fe];
  }), c == null || c.forEach(function(Fe) {
    delete be[Fe];
  });
  var ye = f.useState(!1), Ie = F(ye, 2), re = Ie[0], Ge = Ie[1];
  f.useEffect(function() {
    Ge(ju());
  }, []);
  var Me = f.useRef(null), Le = f.useRef(null), je = f.useRef(null), xe = f.useRef(null), Be = f.useRef(null), Ye = f.useRef(!1), lt = Sp(), nt = F(lt, 3), Xe = nt[0], Te = nt[1], _t = nt[2];
  f.useImperativeHandle(t, function() {
    var Fe, Oe;
    return {
      focus: (Fe = xe.current) === null || Fe === void 0 ? void 0 : Fe.focus,
      blur: (Oe = xe.current) === null || Oe === void 0 ? void 0 : Oe.blur,
      scrollTo: function(Nt) {
        var gt;
        return (gt = Be.current) === null || gt === void 0 ? void 0 : gt.scrollTo(Nt);
      },
      nativeElement: Me.current || Le.current
    };
  });
  var Ue = f.useMemo(function() {
    var Fe;
    if (v !== "combobox")
      return $;
    var Oe = (Fe = u[0]) === null || Fe === void 0 ? void 0 : Fe.value;
    return typeof Oe == "string" || typeof Oe == "number" ? String(Oe) : "";
  }, [$, v, u]), ct = v === "combobox" && typeof S == "function" && S() || null, it = typeof x == "function" && x(), Lt = zo(Le, it == null || (n = it.props) === null || n === void 0 ? void 0 : n.ref), ut = f.useState(!1), $t = F(ut, 2), xt = $t[0], ft = $t[1];
  bt(function() {
    ft(!0);
  }, []);
  var Qe = Io(!1, {
    defaultValue: C,
    value: E
  }), Ne = F(Qe, 2), ce = Ne[0], ve = Ne[1], Z = xt ? ce : !1, he = !p && m;
  (b || he && Z && v === "combobox") && (Z = !1);
  var ke = he ? !1 : Z, J = f.useCallback(function(Fe) {
    var Oe = Fe !== void 0 ? Fe : !Z;
    b || (ve(Oe), Z !== Oe && (w == null || w(Oe)));
  }, [b, Z, ve, w]), oe = f.useMemo(function() {
    return (V || []).some(function(Fe) {
      return [`
`, `\r
`].includes(Fe);
    });
  }, [V]), Y = f.useContext(Xa) || {}, ee = Y.maxCount, Se = Y.rawValues, ue = function(Oe, Pt, Nt) {
    if (!(de && ha(ee) && (Se == null ? void 0 : Se.size) >= ee)) {
      var gt = !0, Ct = Oe;
      M == null || M(null);
      var Qt = s0(Oe, V, ha(ee) ? ee - Se.size : void 0), qt = Nt ? null : Qt;
      return v !== "combobox" && qt && (Ct = "", I == null || I(qt), J(!1), gt = !1), T && Ue !== Ct && T(Ct, {
        source: Pt ? "typing" : "effect"
      }), gt;
    }
  }, ze = function(Oe) {
    !Oe || !Oe.trim() || T(Oe, {
      source: "submit"
    });
  };
  f.useEffect(function() {
    !Z && !de && v !== "combobox" && ue("", !1, !1);
  }, [Z]), f.useEffect(function() {
    ce && b && ve(!1), b && !Ye.current && Te(!1);
  }, [b]);
  var Je = Hu(), rt = F(Je, 2), qe = rt[0], It = rt[1], dt = f.useRef(!1), Tt = function(Oe) {
    var Pt = qe(), Nt = Oe.key, gt = Nt === "Enter";
    if (gt && (v !== "combobox" && Oe.preventDefault(), Z || J(!0)), It(!!Ue), Nt === "Backspace" && !Pt && de && !Ue && u.length) {
      for (var Ct = le(u), Qt = null, qt = Ct.length - 1; qt >= 0; qt -= 1) {
        var nn = Ct[qt];
        if (!nn.disabled) {
          Ct.splice(qt, 1), Qt = nn;
          break;
        }
      }
      Qt && d(Ct, {
        type: "remove",
        values: [Qt]
      });
    }
    for (var Cn = arguments.length, un = new Array(Cn > 1 ? Cn - 1 : 0), Vn = 1; Vn < Cn; Vn++)
      un[Vn - 1] = arguments[Vn];
    if (Z && (!gt || !dt.current)) {
      var Ht;
      gt && (dt.current = !0), (Ht = Be.current) === null || Ht === void 0 || Ht.onKeyDown.apply(Ht, [Oe].concat(un));
    }
    Q == null || Q.apply(void 0, [Oe].concat(un));
  }, zt = function(Oe) {
    for (var Pt = arguments.length, Nt = new Array(Pt > 1 ? Pt - 1 : 0), gt = 1; gt < Pt; gt++)
      Nt[gt - 1] = arguments[gt];
    if (Z) {
      var Ct;
      (Ct = Be.current) === null || Ct === void 0 || Ct.onKeyUp.apply(Ct, [Oe].concat(Nt));
    }
    Oe.key === "Enter" && (dt.current = !1), B == null || B.apply(void 0, [Oe].concat(Nt));
  }, ht = function(Oe) {
    var Pt = u.filter(function(Nt) {
      return Nt !== Oe;
    });
    d(Pt, {
      type: "remove",
      values: [Oe]
    });
  }, Ot = function() {
    dt.current = !1;
  }, q = f.useRef(!1), ne = function() {
    Te(!0), b || (U && !q.current && U.apply(void 0, arguments), j.includes("focus") && J(!0)), q.current = !0;
  }, _e = function() {
    Ye.current = !0, Te(!1, function() {
      q.current = !1, Ye.current = !1, J(!1);
    }), !b && (Ue && (v === "tags" ? T(Ue, {
      source: "submit"
    }) : v === "multiple" && T("", {
      source: "blur"
    })), A && A.apply(void 0, arguments));
  }, We = [];
  f.useEffect(function() {
    return function() {
      We.forEach(function(Fe) {
        return clearTimeout(Fe);
      }), We.splice(0, We.length);
    };
  }, []);
  var at = function(Oe) {
    var Pt, Nt = Oe.target, gt = (Pt = je.current) === null || Pt === void 0 ? void 0 : Pt.getPopupElement();
    if (gt && gt.contains(Nt)) {
      var Ct = setTimeout(function() {
        var Cn = We.indexOf(Ct);
        if (Cn !== -1 && We.splice(Cn, 1), _t(), !re && !gt.contains(document.activeElement)) {
          var un;
          (un = xe.current) === null || un === void 0 || un.focus();
        }
      });
      We.push(Ct);
    }
    for (var Qt = arguments.length, qt = new Array(Qt > 1 ? Qt - 1 : 0), nn = 1; nn < Qt; nn++)
      qt[nn - 1] = arguments[nn];
    me == null || me.apply(void 0, [Oe].concat(qt));
  }, cn = f.useState({}), Kt = F(cn, 2), gn = Kt[1];
  function Fn() {
    gn({});
  }
  var Gt;
  it && (Gt = function(Oe) {
    J(Oe);
  }), Cp(function() {
    var Fe;
    return [Me.current, (Fe = je.current) === null || Fe === void 0 ? void 0 : Fe.getPopupElement()];
  }, ke, J, !!it);
  var Xt = f.useMemo(function() {
    return R(R({}, e), {}, {
      notFoundContent: p,
      open: Z,
      triggerOpen: ke,
      id: r,
      showSearch: Ee,
      multiple: de,
      toggleOpen: J
    });
  }, [e, p, ke, Z, r, Ee, de, J]), Dn = !!L || y, pn;
  Dn && (pn = /* @__PURE__ */ f.createElement(Go, {
    className: Ze("".concat(o, "-arrow"), O({}, "".concat(o, "-arrow-loading"), y)),
    customizeIcon: L,
    customizeIconProps: {
      loading: y,
      searchValue: Ue,
      open: Z,
      focused: Xe,
      showSearch: Ee
    }
  }));
  var Gn = function() {
    var Oe;
    g == null || g(), (Oe = xe.current) === null || Oe === void 0 || Oe.focus(), d([], {
      type: "clear",
      values: u
    }), ue("", !1, !1);
  }, Pn = yp(o, Gn, u, D, G, b, Ue, v), Yt = Pn.allowClear, yn = Pn.clearIcon, bn = /* @__PURE__ */ f.createElement(W, {
    ref: Be
  }), Sn = Ze(o, i, O(O(O(O(O(O(O(O(O(O({}, "".concat(o, "-focused"), Xe), "".concat(o, "-multiple"), de), "".concat(o, "-single"), !de), "".concat(o, "-allow-clear"), D), "".concat(o, "-show-arrow"), Dn), "".concat(o, "-disabled"), b), "".concat(o, "-loading"), y), "".concat(o, "-open"), Z), "".concat(o, "-customize-input"), ct), "".concat(o, "-show-search"), Ee)), An = /* @__PURE__ */ f.createElement(Qu, {
    ref: je,
    disabled: b,
    prefixCls: o,
    visible: ke,
    popupElement: bn,
    animation: k,
    transitionName: H,
    dropdownStyle: K,
    dropdownClassName: te,
    direction: l,
    dropdownMatchSelectWidth: ae,
    dropdownRender: we,
    dropdownAlign: fe,
    placement: Pe,
    builtinPlacements: pe,
    getPopupContainer: Re,
    empty: m,
    getTriggerDOMNode: function(Oe) {
      return (
        // TODO: This is workaround and should be removed in `rc-select`
        // And use new standard `nativeElement` for ref.
        // But we should update `rc-resize-observer` first.
        Le.current || Oe
      );
    },
    onPopupVisibleChange: Gt,
    onPopupMouseEnter: Fn
  }, it ? /* @__PURE__ */ f.cloneElement(it, {
    ref: Lt
  }) : /* @__PURE__ */ f.createElement(Ku, Ke({}, e, {
    domRef: Le,
    prefixCls: o,
    inputElement: ct,
    ref: xe,
    id: r,
    prefix: z,
    showSearch: Ee,
    autoClearSearchValue: N,
    mode: v,
    activeDescendantId: _,
    tagRender: s,
    values: u,
    open: Z,
    onToggleOpen: J,
    activeValue: P,
    searchValue: Ue,
    onSearch: ue,
    onSearchSubmit: ze,
    onRemove: ht,
    tokenWithEnter: oe,
    onInputBlur: Ot
  }))), Xn;
  return it ? Xn = An : Xn = /* @__PURE__ */ f.createElement("div", Ke({
    className: Sn
  }, be, {
    ref: Me,
    onMouseDown: at,
    onKeyDown: Tt,
    onKeyUp: zt,
    onFocus: ne,
    onBlur: _e
  }), /* @__PURE__ */ f.createElement(l0, {
    visible: Xe && !Z,
    values: u
  }), An, pn, Yt && yn), /* @__PURE__ */ f.createElement(zu.Provider, {
    value: Xt
  }, Xn);
});
process.env.NODE_ENV !== "production" && (Ju.displayName = "BaseSelect");
var Ya = function() {
  return null;
};
Ya.isSelectOptGroup = !0;
var Qa = function() {
  return null;
};
Qa.isSelectOption = !0;
var ef = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.height, r = e.offsetY, o = e.offsetX, i = e.children, a = e.prefixCls, s = e.onInnerResize, l = e.innerProps, c = e.rtl, u = e.extra, d = {}, m = {
    display: "flex",
    flexDirection: "column"
  };
  return r !== void 0 && (d = {
    height: n,
    position: "relative",
    overflow: "hidden"
  }, m = R(R({}, m), {}, O(O(O(O(O({
    transform: "translateY(".concat(r, "px)")
  }, c ? "marginRight" : "marginLeft", -o), "position", "absolute"), "left", 0), "right", 0), "top", 0))), /* @__PURE__ */ f.createElement("div", {
    style: d
  }, /* @__PURE__ */ f.createElement(Un, {
    onResize: function(p) {
      var g = p.offsetHeight;
      g && s && s();
    }
  }, /* @__PURE__ */ f.createElement("div", Ke({
    style: m,
    className: Ze(O({}, "".concat(a, "-holder-inner"), a)),
    ref: t
  }, l), i, u)));
});
ef.displayName = "Filler";
function f0(e) {
  var t = e.children, n = e.setRef, r = f.useCallback(function(o) {
    n(o);
  }, []);
  return /* @__PURE__ */ f.cloneElement(t, {
    ref: r
  });
}
function d0(e, t, n, r, o, i, a, s) {
  var l = s.getKey;
  return e.slice(t, n + 1).map(function(c, u) {
    var d = t + u, m = a(c, d, {
      style: {
        width: r
      },
      offsetX: o
    }), h = l(c);
    return /* @__PURE__ */ f.createElement(f0, {
      key: h,
      setRef: function(g) {
        return i(c, g);
      }
    }, m);
  });
}
function v0(e, t, n) {
  var r = e.length, o = t.length, i, a;
  if (r === 0 && o === 0)
    return null;
  r < o ? (i = e, a = t) : (i = t, a = e);
  var s = {
    __EMPTY_ITEM__: !0
  };
  function l(p) {
    return p !== void 0 ? n(p) : s;
  }
  for (var c = null, u = Math.abs(r - o) !== 1, d = 0; d < a.length; d += 1) {
    var m = l(i[d]), h = l(a[d]);
    if (m !== h) {
      c = d, u = u || m !== l(a[d + 1]);
      break;
    }
  }
  return c === null ? null : {
    index: c,
    multiple: u
  };
}
function m0(e, t, n) {
  var r = f.useState(e), o = F(r, 2), i = o[0], a = o[1], s = f.useState(null), l = F(s, 2), c = l[0], u = l[1];
  return f.useEffect(function() {
    var d = v0(i || [], e || [], t);
    (d == null ? void 0 : d.index) !== void 0 && u(e[d.index]), a(e);
  }, [e]), [c];
}
var Ol = (typeof navigator > "u" ? "undefined" : ge(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const tf = function(e, t, n, r) {
  var o = Ae(!1), i = Ae(null);
  function a() {
    clearTimeout(i.current), o.current = !0, i.current = setTimeout(function() {
      o.current = !1;
    }, 50);
  }
  var s = Ae({
    top: e,
    bottom: t,
    left: n,
    right: r
  });
  return s.current.top = e, s.current.bottom = t, s.current.left = n, s.current.right = r, function(l, c) {
    var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, d = l ? (
      // Pass origin wheel when on the left
      c < 0 && s.current.left || // Pass origin wheel when on the right
      c > 0 && s.current.right
    ) : c < 0 && s.current.top || // Pass origin wheel when on the bottom
    c > 0 && s.current.bottom;
    return u && d ? (clearTimeout(i.current), o.current = !1) : (!d || o.current) && a(), !o.current && d;
  };
};
function h0(e, t, n, r, o, i, a) {
  var s = Ae(0), l = Ae(null), c = Ae(null), u = Ae(!1), d = tf(t, n, r, o);
  function m(y, S) {
    if (Wt.cancel(l.current), !d(!1, S)) {
      var x = y;
      if (!x._virtualHandled)
        x._virtualHandled = !0;
      else
        return;
      s.current += S, c.current = S, Ol || x.preventDefault(), l.current = Wt(function() {
        var E = u.current ? 10 : 1;
        a(s.current * E, !1), s.current = 0;
      });
    }
  }
  function h(y, S) {
    a(S, !0), Ol || y.preventDefault();
  }
  var p = Ae(null), g = Ae(null);
  function v(y) {
    if (e) {
      Wt.cancel(g.current), g.current = Wt(function() {
        p.current = null;
      }, 2);
      var S = y.deltaX, x = y.deltaY, E = y.shiftKey, C = S, w = x;
      (p.current === "sx" || !p.current && E && x && !S) && (C = x, w = 0, p.current = "sx");
      var P = Math.abs(C), M = Math.abs(w);
      p.current === null && (p.current = i && P > M ? "x" : "y"), p.current === "y" ? m(y, w) : h(y, C);
    }
  }
  function b(y) {
    e && (u.current = y.detail === c.current);
  }
  return [v, b];
}
function g0(e, t, n, r) {
  var o = f.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [e, n.id, r]), i = F(o, 2), a = i[0], s = i[1], l = function(u) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u, m = a.get(u), h = a.get(d);
    if (m === void 0 || h === void 0)
      for (var p = e.length, g = s.length; g < p; g += 1) {
        var v, b = e[g], y = t(b);
        a.set(y, g);
        var S = (v = n.get(y)) !== null && v !== void 0 ? v : r;
        if (s[g] = (s[g - 1] || 0) + S, y === u && (m = g), y === d && (h = g), m !== void 0 && h !== void 0)
          break;
      }
    return {
      top: s[m - 1] || 0,
      bottom: s[h]
    };
  };
  return l;
}
var p0 = /* @__PURE__ */ function() {
  function e() {
    At(this, e), O(this, "maps", void 0), O(this, "id", 0), O(this, "diffRecords", /* @__PURE__ */ new Map()), this.maps = /* @__PURE__ */ Object.create(null);
  }
  return Vt(e, [{
    key: "set",
    value: function(n, r) {
      this.diffRecords.set(n, this.maps[n]), this.maps[n] = r, this.id += 1;
    }
  }, {
    key: "get",
    value: function(n) {
      return this.maps[n];
    }
    /**
     * CacheMap will record the key changed.
     * To help to know what's update in the next render.
     */
  }, {
    key: "resetRecord",
    value: function() {
      this.diffRecords.clear();
    }
  }, {
    key: "getRecord",
    value: function() {
      return this.diffRecords;
    }
  }]), e;
}();
function Pl(e) {
  var t = parseFloat(e);
  return isNaN(t) ? 0 : t;
}
function y0(e, t, n) {
  var r = f.useState(0), o = F(r, 2), i = o[0], a = o[1], s = Ae(/* @__PURE__ */ new Map()), l = Ae(new p0()), c = Ae(0);
  function u() {
    c.current += 1;
  }
  function d() {
    var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    u();
    var p = function() {
      var b = !1;
      s.current.forEach(function(y, S) {
        if (y && y.offsetParent) {
          var x = y.offsetHeight, E = getComputedStyle(y), C = E.marginTop, w = E.marginBottom, P = Pl(C), M = Pl(w), _ = x + P + M;
          l.current.get(S) !== _ && (l.current.set(S, _), b = !0);
        }
      }), b && a(function(y) {
        return y + 1;
      });
    };
    if (h)
      p();
    else {
      c.current += 1;
      var g = c.current;
      Promise.resolve().then(function() {
        g === c.current && p();
      });
    }
  }
  function m(h, p) {
    var g = e(h);
    s.current.get(g), p ? (s.current.set(g, p), d()) : s.current.delete(g);
  }
  return xn(function() {
    return u;
  }, []), [m, d, l.current, i];
}
var Rl = 14 / 15;
function b0(e, t, n) {
  var r = Ae(!1), o = Ae(0), i = Ae(0), a = Ae(null), s = Ae(null), l, c = function(h) {
    if (r.current) {
      var p = Math.ceil(h.touches[0].pageX), g = Math.ceil(h.touches[0].pageY), v = o.current - p, b = i.current - g, y = Math.abs(v) > Math.abs(b);
      y ? o.current = p : i.current = g;
      var S = n(y, y ? v : b, !1, h);
      S && h.preventDefault(), clearInterval(s.current), S && (s.current = setInterval(function() {
        y ? v *= Rl : b *= Rl;
        var x = Math.floor(y ? v : b);
        (!n(y, x, !0) || Math.abs(x) <= 0.1) && clearInterval(s.current);
      }, 16));
    }
  }, u = function() {
    r.current = !1, l();
  }, d = function(h) {
    l(), h.touches.length === 1 && !r.current && (r.current = !0, o.current = Math.ceil(h.touches[0].pageX), i.current = Math.ceil(h.touches[0].pageY), a.current = h.target, a.current.addEventListener("touchmove", c, {
      passive: !1
    }), a.current.addEventListener("touchend", u, {
      passive: !0
    }));
  };
  l = function() {
    a.current && (a.current.removeEventListener("touchmove", c), a.current.removeEventListener("touchend", u));
  }, bt(function() {
    return e && t.current.addEventListener("touchstart", d, {
      passive: !0
    }), function() {
      var m;
      (m = t.current) === null || m === void 0 || m.removeEventListener("touchstart", d), l(), clearInterval(s.current);
    };
  }, [e]);
}
function Ml(e) {
  return Math.floor(Math.pow(e, 0.5));
}
function pa(e, t) {
  var n = "touches" in e ? e.touches[0] : e;
  return n[t ? "pageX" : "pageY"] - window[t ? "scrollX" : "scrollY"];
}
function S0(e, t, n) {
  f.useEffect(function() {
    var r = t.current;
    if (e && r) {
      var o = !1, i, a, s = function() {
        Wt.cancel(i);
      }, l = function m() {
        s(), i = Wt(function() {
          n(a), m();
        });
      }, c = function() {
        o = !1, s();
      }, u = function(h) {
        if (!(h.target.draggable || h.button !== 0)) {
          var p = h;
          p._virtualHandled || (p._virtualHandled = !0, o = !0);
        }
      }, d = function(h) {
        if (o) {
          var p = pa(h, !1), g = r.getBoundingClientRect(), v = g.top, b = g.bottom;
          if (p <= v) {
            var y = v - p;
            a = -Ml(y), l();
          } else if (p >= b) {
            var S = p - b;
            a = Ml(S), l();
          } else
            s();
        }
      };
      return r.addEventListener("mousedown", u), r.ownerDocument.addEventListener("mouseup", c), r.ownerDocument.addEventListener("mousemove", d), r.ownerDocument.addEventListener("dragend", c), function() {
        r.removeEventListener("mousedown", u), r.ownerDocument.removeEventListener("mouseup", c), r.ownerDocument.removeEventListener("mousemove", d), r.ownerDocument.removeEventListener("dragend", c), s();
      };
    }
  }, [e]);
}
var _l = 10;
function C0(e, t, n, r, o, i, a, s) {
  var l = f.useRef(), c = f.useState(null), u = F(c, 2), d = u[0], m = u[1];
  return bt(function() {
    if (d && d.times < _l) {
      if (!e.current) {
        m(function(G) {
          return R({}, G);
        });
        return;
      }
      i();
      var h = d.targetAlign, p = d.originAlign, g = d.index, v = d.offset, b = e.current.clientHeight, y = !1, S = h, x = null;
      if (b) {
        for (var E = h || p, C = 0, w = 0, P = 0, M = Math.min(t.length - 1, g), _ = 0; _ <= M; _ += 1) {
          var $ = o(t[_]);
          w = C;
          var N = n.get($);
          P = w + (N === void 0 ? r : N), C = P;
        }
        for (var T = E === "top" ? v : b - v, I = M; I >= 0; I -= 1) {
          var V = o(t[I]), D = n.get(V);
          if (D === void 0) {
            y = !0;
            break;
          }
          if (T -= D, T <= 0)
            break;
        }
        switch (E) {
          case "top":
            x = w - v;
            break;
          case "bottom":
            x = P - b + v;
            break;
          default: {
            var z = e.current.scrollTop, L = z + b;
            w < z ? S = "top" : P > L && (S = "bottom");
          }
        }
        x !== null && a(x), x !== d.lastTop && (y = !0);
      }
      y && m(R(R({}, d), {}, {
        times: d.times + 1,
        targetAlign: S,
        lastTop: x
      }));
    } else process.env.NODE_ENV !== "production" && (d == null ? void 0 : d.times) === _l && Ve(!1, "Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.");
  }, [d, e.current]), function(h) {
    if (h == null) {
      s();
      return;
    }
    if (Wt.cancel(l.current), typeof h == "number")
      a(h);
    else if (h && ge(h) === "object") {
      var p, g = h.align;
      "index" in h ? p = h.index : p = t.findIndex(function(y) {
        return o(y) === h.key;
      });
      var v = h.offset, b = v === void 0 ? 0 : v;
      m({
        times: 0,
        index: p,
        offset: b,
        originAlign: g
      });
    }
  };
}
var ya = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.rtl, o = e.scrollOffset, i = e.scrollRange, a = e.onStartMove, s = e.onStopMove, l = e.onScroll, c = e.horizontal, u = e.spinSize, d = e.containerSize, m = e.style, h = e.thumbStyle, p = e.showScrollBar, g = f.useState(!1), v = F(g, 2), b = v[0], y = v[1], S = f.useState(null), x = F(S, 2), E = x[0], C = x[1], w = f.useState(null), P = F(w, 2), M = P[0], _ = P[1], $ = !r, N = f.useRef(), T = f.useRef(), I = f.useState(p), V = F(I, 2), D = V[0], z = V[1], L = f.useRef(), G = function() {
    p === !0 || p === !1 || (clearTimeout(L.current), z(!0), L.current = setTimeout(function() {
      z(!1);
    }, 3e3));
  }, W = i - d || 0, k = d - u || 0, H = f.useMemo(function() {
    if (o === 0 || W === 0)
      return 0;
    var X = o / W;
    return X * k;
  }, [o, W, k]), K = function(j) {
    j.stopPropagation(), j.preventDefault();
  }, te = f.useRef({
    top: H,
    dragging: b,
    pageY: E,
    startTop: M
  });
  te.current = {
    top: H,
    dragging: b,
    pageY: E,
    startTop: M
  };
  var ae = function(j) {
    y(!0), C(pa(j, c)), _(te.current.top), a(), j.stopPropagation(), j.preventDefault();
  };
  f.useEffect(function() {
    var X = function(B) {
      B.preventDefault();
    }, j = N.current, U = T.current;
    return j.addEventListener("touchstart", X, {
      passive: !1
    }), U.addEventListener("touchstart", ae, {
      passive: !1
    }), function() {
      j.removeEventListener("touchstart", X), U.removeEventListener("touchstart", ae);
    };
  }, []);
  var we = f.useRef();
  we.current = W;
  var fe = f.useRef();
  fe.current = k, f.useEffect(function() {
    if (b) {
      var X, j = function(B) {
        var Q = te.current, me = Q.dragging, se = Q.pageY, de = Q.startTop;
        Wt.cancel(X);
        var Ee = N.current.getBoundingClientRect(), be = d / (c ? Ee.width : Ee.height);
        if (me) {
          var ye = (pa(B, c) - se) * be, Ie = de;
          !$ && c ? Ie -= ye : Ie += ye;
          var re = we.current, Ge = fe.current, Me = Ge ? Ie / Ge : 0, Le = Math.ceil(Me * re);
          Le = Math.max(Le, 0), Le = Math.min(Le, re), X = Wt(function() {
            l(Le, c);
          });
        }
      }, U = function() {
        y(!1), s();
      };
      return window.addEventListener("mousemove", j, {
        passive: !0
      }), window.addEventListener("touchmove", j, {
        passive: !0
      }), window.addEventListener("mouseup", U, {
        passive: !0
      }), window.addEventListener("touchend", U, {
        passive: !0
      }), function() {
        window.removeEventListener("mousemove", j), window.removeEventListener("touchmove", j), window.removeEventListener("mouseup", U), window.removeEventListener("touchend", U), Wt.cancel(X);
      };
    }
  }, [b]), f.useEffect(function() {
    return G(), function() {
      clearTimeout(L.current);
    };
  }, [o]), f.useImperativeHandle(t, function() {
    return {
      delayHidden: G
    };
  });
  var Pe = "".concat(n, "-scrollbar"), pe = {
    position: "absolute",
    visibility: D ? null : "hidden"
  }, Re = {
    position: "absolute",
    borderRadius: 99,
    background: "var(--rc-virtual-list-scrollbar-bg, rgba(0, 0, 0, 0.5))",
    cursor: "pointer",
    userSelect: "none"
  };
  return c ? (Object.assign(pe, {
    height: 8,
    left: 0,
    right: 0,
    bottom: 0
  }), Object.assign(Re, O({
    height: "100%",
    width: u
  }, $ ? "left" : "right", H))) : (Object.assign(pe, O({
    width: 8,
    top: 0,
    bottom: 0
  }, $ ? "right" : "left", 0)), Object.assign(Re, {
    width: "100%",
    height: u,
    top: H
  })), /* @__PURE__ */ f.createElement("div", {
    ref: N,
    className: Ze(Pe, O(O(O({}, "".concat(Pe, "-horizontal"), c), "".concat(Pe, "-vertical"), !c), "".concat(Pe, "-visible"), D)),
    style: R(R({}, pe), m),
    onMouseDown: K,
    onMouseMove: G
  }, /* @__PURE__ */ f.createElement("div", {
    ref: T,
    className: Ze("".concat(Pe, "-thumb"), O({}, "".concat(Pe, "-thumb-moving"), b)),
    style: R(R({}, Re), h),
    onMouseDown: ae
  }));
});
process.env.NODE_ENV !== "production" && (ya.displayName = "ScrollBar");
var w0 = 20;
function $l() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e / t * e;
  return isNaN(n) && (n = 0), n = Math.max(n, w0), Math.floor(n);
}
var E0 = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles", "showScrollBar"], x0 = [], O0 = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function P0(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, o = e.className, i = e.height, a = e.itemHeight, s = e.fullHeight, l = s === void 0 ? !0 : s, c = e.style, u = e.data, d = e.children, m = e.itemKey, h = e.virtual, p = e.direction, g = e.scrollWidth, v = e.component, b = v === void 0 ? "div" : v, y = e.onScroll, S = e.onVirtualScroll, x = e.onVisibleChange, E = e.innerProps, C = e.extraRender, w = e.styles, P = e.showScrollBar, M = P === void 0 ? "optional" : P, _ = St(e, E0), $ = f.useCallback(function(q) {
    return typeof m == "function" ? m(q) : q == null ? void 0 : q[m];
  }, [m]), N = y0($), T = F(N, 4), I = T[0], V = T[1], D = T[2], z = T[3], L = !!(h !== !1 && i && a), G = f.useMemo(function() {
    return Object.values(D.maps).reduce(function(q, ne) {
      return q + ne;
    }, 0);
  }, [D.id, D.maps]), W = L && u && (Math.max(a * u.length, G) > i || !!g), k = p === "rtl", H = Ze(r, O({}, "".concat(r, "-rtl"), k), o), K = u || x0, te = Ae(), ae = Ae(), we = Ae(), fe = In(0), Pe = F(fe, 2), pe = Pe[0], Re = Pe[1], X = In(0), j = F(X, 2), U = j[0], A = j[1], B = In(!1), Q = F(B, 2), me = Q[0], se = Q[1], de = function() {
    se(!0);
  }, Ee = function() {
    se(!1);
  }, be = {
    getKey: $
  };
  function ye(q) {
    Re(function(ne) {
      var _e;
      typeof q == "function" ? _e = q(ne) : _e = q;
      var We = ft(_e);
      return te.current.scrollTop = We, We;
    });
  }
  var Ie = Ae({
    start: 0,
    end: K.length
  }), re = Ae(), Ge = m0(K, $), Me = F(Ge, 1), Le = Me[0];
  re.current = Le;
  var je = f.useMemo(function() {
    if (!L)
      return {
        scrollHeight: void 0,
        start: 0,
        end: K.length - 1,
        offset: void 0
      };
    if (!W) {
      var q;
      return {
        scrollHeight: ((q = ae.current) === null || q === void 0 ? void 0 : q.offsetHeight) || 0,
        start: 0,
        end: K.length - 1,
        offset: void 0
      };
    }
    for (var ne = 0, _e, We, at, cn = K.length, Kt = 0; Kt < cn; Kt += 1) {
      var gn = K[Kt], Fn = $(gn), Gt = D.get(Fn), Xt = ne + (Gt === void 0 ? a : Gt);
      Xt >= pe && _e === void 0 && (_e = Kt, We = ne), Xt > pe + i && at === void 0 && (at = Kt), ne = Xt;
    }
    return _e === void 0 && (_e = 0, We = 0, at = Math.ceil(i / a)), at === void 0 && (at = K.length - 1), at = Math.min(at + 1, K.length - 1), {
      scrollHeight: ne,
      start: _e,
      end: at,
      offset: We
    };
  }, [W, L, pe, K, z, i]), xe = je.scrollHeight, Be = je.start, Ye = je.end, lt = je.offset;
  Ie.current.start = Be, Ie.current.end = Ye, f.useLayoutEffect(function() {
    var q = D.getRecord();
    if (q.size === 1) {
      var ne = Array.from(q.keys())[0], _e = q.get(ne), We = K[Be];
      if (We && _e === void 0) {
        var at = $(We);
        if (at === ne) {
          var cn = D.get(ne), Kt = cn - a;
          ye(function(gn) {
            return gn + Kt;
          });
        }
      }
    }
    D.resetRecord();
  }, [xe]);
  var nt = f.useState({
    width: 0,
    height: i
  }), Xe = F(nt, 2), Te = Xe[0], _t = Xe[1], Ue = function(ne) {
    _t({
      width: ne.offsetWidth,
      height: ne.offsetHeight
    });
  }, ct = Ae(), it = Ae(), Lt = f.useMemo(function() {
    return $l(Te.width, g);
  }, [Te.width, g]), ut = f.useMemo(function() {
    return $l(Te.height, xe);
  }, [Te.height, xe]), $t = xe - i, xt = Ae($t);
  xt.current = $t;
  function ft(q) {
    var ne = q;
    return Number.isNaN(xt.current) || (ne = Math.min(ne, xt.current)), ne = Math.max(ne, 0), ne;
  }
  var Qe = pe <= 0, Ne = pe >= $t, ce = U <= 0, ve = U >= g, Z = tf(Qe, Ne, ce, ve), he = function() {
    return {
      x: k ? -U : U,
      y: pe
    };
  }, ke = Ae(he()), J = Bt(function(q) {
    if (S) {
      var ne = R(R({}, he()), q);
      (ke.current.x !== ne.x || ke.current.y !== ne.y) && (S(ne), ke.current = ne);
    }
  });
  function oe(q, ne) {
    var _e = q;
    ne ? (ss(function() {
      A(_e);
    }), J()) : ye(_e);
  }
  function Y(q) {
    var ne = q.currentTarget.scrollTop;
    ne !== pe && ye(ne), y == null || y(q), J();
  }
  var ee = function(ne) {
    var _e = ne, We = g ? g - Te.width : 0;
    return _e = Math.max(_e, 0), _e = Math.min(_e, We), _e;
  }, Se = Bt(function(q, ne) {
    ne ? (ss(function() {
      A(function(_e) {
        var We = _e + (k ? -q : q);
        return ee(We);
      });
    }), J()) : ye(function(_e) {
      var We = _e + q;
      return We;
    });
  }), ue = h0(L, Qe, Ne, ce, ve, !!g, Se), ze = F(ue, 2), Je = ze[0], rt = ze[1];
  b0(L, te, function(q, ne, _e, We) {
    var at = We;
    return Z(q, ne, _e) ? !1 : !at || !at._virtualHandled ? (at && (at._virtualHandled = !0), Je({
      preventDefault: function() {
      },
      deltaX: q ? ne : 0,
      deltaY: q ? 0 : ne
    }), !0) : !1;
  }), S0(W, te, function(q) {
    ye(function(ne) {
      return ne + q;
    });
  }), bt(function() {
    function q(_e) {
      var We = Qe && _e.detail < 0, at = Ne && _e.detail > 0;
      L && !We && !at && _e.preventDefault();
    }
    var ne = te.current;
    return ne.addEventListener("wheel", Je, {
      passive: !1
    }), ne.addEventListener("DOMMouseScroll", rt, {
      passive: !0
    }), ne.addEventListener("MozMousePixelScroll", q, {
      passive: !1
    }), function() {
      ne.removeEventListener("wheel", Je), ne.removeEventListener("DOMMouseScroll", rt), ne.removeEventListener("MozMousePixelScroll", q);
    };
  }, [L, Qe, Ne]), bt(function() {
    if (g) {
      var q = ee(U);
      A(q), J({
        x: q
      });
    }
  }, [Te.width, g]);
  var qe = function() {
    var ne, _e;
    (ne = ct.current) === null || ne === void 0 || ne.delayHidden(), (_e = it.current) === null || _e === void 0 || _e.delayHidden();
  }, It = C0(te, K, D, a, $, function() {
    return V(!0);
  }, ye, qe);
  f.useImperativeHandle(t, function() {
    return {
      nativeElement: we.current,
      getScrollInfo: he,
      scrollTo: function(ne) {
        function _e(We) {
          return We && ge(We) === "object" && ("left" in We || "top" in We);
        }
        _e(ne) ? (ne.left !== void 0 && A(ee(ne.left)), It(ne.top)) : It(ne);
      }
    };
  }), bt(function() {
    if (x) {
      var q = K.slice(Be, Ye + 1);
      x(q, K);
    }
  }, [Be, Ye, K]);
  var dt = g0(K, $, D, a), Tt = C == null ? void 0 : C({
    start: Be,
    end: Ye,
    virtual: W,
    offsetX: U,
    offsetY: lt,
    rtl: k,
    getSize: dt
  }), zt = d0(K, Be, Ye, g, U, I, d, be), ht = null;
  i && (ht = R(O({}, l ? "height" : "maxHeight", i), O0), L && (ht.overflowY = "hidden", g && (ht.overflowX = "hidden"), me && (ht.pointerEvents = "none")));
  var Ot = {};
  return k && (Ot.dir = "rtl"), /* @__PURE__ */ f.createElement("div", Ke({
    ref: we,
    style: R(R({}, c), {}, {
      position: "relative"
    }),
    className: H
  }, Ot, _), /* @__PURE__ */ f.createElement(Un, {
    onResize: Ue
  }, /* @__PURE__ */ f.createElement(b, {
    className: "".concat(r, "-holder"),
    style: ht,
    ref: te,
    onScroll: Y,
    onMouseEnter: qe
  }, /* @__PURE__ */ f.createElement(ef, {
    prefixCls: r,
    height: xe,
    offsetX: U,
    offsetY: lt,
    scrollWidth: g,
    onInnerResize: V,
    ref: ae,
    innerProps: E,
    rtl: k,
    extra: Tt
  }, zt))), W && xe > i && /* @__PURE__ */ f.createElement(ya, {
    ref: ct,
    prefixCls: r,
    scrollOffset: pe,
    scrollRange: xe,
    rtl: k,
    onScroll: oe,
    onStartMove: de,
    onStopMove: Ee,
    spinSize: ut,
    containerSize: Te.height,
    style: w == null ? void 0 : w.verticalScrollBar,
    thumbStyle: w == null ? void 0 : w.verticalScrollBarThumb,
    showScrollBar: M
  }), W && g > Te.width && /* @__PURE__ */ f.createElement(ya, {
    ref: it,
    prefixCls: r,
    scrollOffset: U,
    scrollRange: g,
    rtl: k,
    onScroll: oe,
    onStartMove: de,
    onStopMove: Ee,
    spinSize: Lt,
    containerSize: Te.width,
    horizontal: !0,
    style: w == null ? void 0 : w.horizontalScrollBar,
    thumbStyle: w == null ? void 0 : w.horizontalScrollBarThumb,
    showScrollBar: M
  }));
}
var nf = /* @__PURE__ */ f.forwardRef(P0);
nf.displayName = "List";
function R0() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var M0 = ["disabled", "title", "children", "style", "className"];
function Il(e) {
  return typeof e == "string" || typeof e == "number";
}
var _0 = function(t, n) {
  var r = bp(), o = r.prefixCls, i = r.id, a = r.open, s = r.multiple, l = r.mode, c = r.searchValue, u = r.toggleOpen, d = r.notFoundContent, m = r.onPopupScroll, h = f.useContext(Xa), p = h.maxCount, g = h.flattenOptions, v = h.onActiveValue, b = h.defaultActiveFirstOption, y = h.onSelect, S = h.menuItemSelectedIcon, x = h.rawValues, E = h.fieldNames, C = h.virtual, w = h.direction, P = h.listHeight, M = h.listItemHeight, _ = h.optionRender, $ = "".concat(o, "-item"), N = jo(function() {
    return g;
  }, [a, g], function(X, j) {
    return j[0] && X[1] !== j[1];
  }), T = f.useRef(null), I = f.useMemo(function() {
    return s && ha(p) && (x == null ? void 0 : x.size) >= p;
  }, [s, p, x == null ? void 0 : x.size]), V = function(j) {
    j.preventDefault();
  }, D = function(j) {
    var U;
    (U = T.current) === null || U === void 0 || U.scrollTo(typeof j == "number" ? {
      index: j
    } : j);
  }, z = f.useCallback(function(X) {
    return l === "combobox" ? !1 : x.has(X);
  }, [l, le(x).toString(), x.size]), L = function(j) {
    for (var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, A = N.length, B = 0; B < A; B += 1) {
      var Q = (j + B * U + A) % A, me = N[Q] || {}, se = me.group, de = me.data;
      if (!se && !(de != null && de.disabled) && (z(de.value) || !I))
        return Q;
    }
    return -1;
  }, G = f.useState(function() {
    return L(0);
  }), W = F(G, 2), k = W[0], H = W[1], K = function(j) {
    var U = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    H(j);
    var A = {
      source: U ? "keyboard" : "mouse"
    }, B = N[j];
    if (!B) {
      v(null, -1, A);
      return;
    }
    v(B.value, j, A);
  };
  xn(function() {
    K(b !== !1 ? L(0) : -1);
  }, [N.length, c]);
  var te = f.useCallback(function(X) {
    return l === "combobox" ? String(X).toLowerCase() === c.toLowerCase() : x.has(X);
  }, [l, c, le(x).toString(), x.size]);
  xn(function() {
    var X = setTimeout(function() {
      if (!s && a && x.size === 1) {
        var U = Array.from(x)[0], A = N.findIndex(function(B) {
          var Q = B.data;
          return c ? String(Q.value).startsWith(c) : Q.value === U;
        });
        A !== -1 && (K(A), D(A));
      }
    });
    if (a) {
      var j;
      (j = T.current) === null || j === void 0 || j.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(X);
    };
  }, [a, c]);
  var ae = function(j) {
    j !== void 0 && y(j, {
      selected: !x.has(j)
    }), s || u(!1);
  };
  if (f.useImperativeHandle(n, function() {
    return {
      onKeyDown: function(j) {
        var U = j.which, A = j.ctrlKey;
        switch (U) {
          case $e.N:
          case $e.P:
          case $e.UP:
          case $e.DOWN: {
            var B = 0;
            if (U === $e.UP ? B = -1 : U === $e.DOWN ? B = 1 : R0() && A && (U === $e.N ? B = 1 : U === $e.P && (B = -1)), B !== 0) {
              var Q = L(k + B, B);
              D(Q), K(Q, !0);
            }
            break;
          }
          case $e.TAB:
          case $e.ENTER: {
            var me, se = N[k];
            se && !(se != null && (me = se.data) !== null && me !== void 0 && me.disabled) && !I ? ae(se.value) : ae(void 0), a && j.preventDefault();
            break;
          }
          case $e.ESC:
            u(!1), a && j.stopPropagation();
        }
      },
      onKeyUp: function() {
      },
      scrollTo: function(j) {
        D(j);
      }
    };
  }), N.length === 0)
    return /* @__PURE__ */ f.createElement("div", {
      role: "listbox",
      id: "".concat(i, "_list"),
      className: "".concat($, "-empty"),
      onMouseDown: V
    }, d);
  var we = Object.keys(E).map(function(X) {
    return E[X];
  }), fe = function(j) {
    return j.label;
  };
  function Pe(X, j) {
    var U = X.group;
    return {
      role: U ? "presentation" : "option",
      id: "".concat(i, "_list_").concat(j)
    };
  }
  var pe = function(j) {
    var U = N[j];
    if (!U)
      return null;
    var A = U.data || {}, B = A.value, Q = U.group, me = No(A, !0), se = fe(U);
    return U ? /* @__PURE__ */ f.createElement("div", Ke({
      "aria-label": typeof se == "string" && !Q ? se : null
    }, me, {
      key: j
    }, Pe(U, j), {
      "aria-selected": te(B)
    }), B) : null;
  }, Re = {
    role: "listbox",
    id: "".concat(i, "_list")
  };
  return /* @__PURE__ */ f.createElement(f.Fragment, null, C && /* @__PURE__ */ f.createElement("div", Ke({}, Re, {
    style: {
      height: 0,
      width: 0,
      overflow: "hidden"
    }
  }), pe(k - 1), pe(k), pe(k + 1)), /* @__PURE__ */ f.createElement(nf, {
    itemKey: "key",
    ref: T,
    data: N,
    height: P,
    itemHeight: M,
    fullHeight: !1,
    onMouseDown: V,
    onScroll: m,
    virtual: C,
    direction: w,
    innerProps: C ? null : Re
  }, function(X, j) {
    var U = X.group, A = X.groupOption, B = X.data, Q = X.label, me = X.value, se = B.key;
    if (U) {
      var de, Ee = (de = B.title) !== null && de !== void 0 ? de : Il(Q) ? Q.toString() : void 0;
      return /* @__PURE__ */ f.createElement("div", {
        className: Ze($, "".concat($, "-group"), B.className),
        title: Ee
      }, Q !== void 0 ? Q : se);
    }
    var be = B.disabled, ye = B.title;
    B.children;
    var Ie = B.style, re = B.className, Ge = St(B, M0), Me = Ou(Ge, we), Le = z(me), je = be || !Le && I, xe = "".concat($, "-option"), Be = Ze($, xe, re, O(O(O(O({}, "".concat(xe, "-grouped"), A), "".concat(xe, "-active"), k === j && !je), "".concat(xe, "-disabled"), je), "".concat(xe, "-selected"), Le)), Ye = fe(X), lt = !S || typeof S == "function" || Le, nt = typeof Ye == "number" ? Ye : Ye || me, Xe = Il(nt) ? nt.toString() : void 0;
    return ye !== void 0 && (Xe = ye), /* @__PURE__ */ f.createElement("div", Ke({}, No(Me), C ? {} : Pe(X, j), {
      "aria-selected": te(me),
      className: Be,
      title: Xe,
      onMouseMove: function() {
        k === j || je || K(j);
      },
      onClick: function() {
        je || ae(me);
      },
      style: Ie
    }), /* @__PURE__ */ f.createElement("div", {
      className: "".concat(xe, "-content")
    }, typeof _ == "function" ? _(X, {
      index: j
    }) : nt), /* @__PURE__ */ f.isValidElement(S) || Le, lt && /* @__PURE__ */ f.createElement(Go, {
      className: "".concat($, "-option-state"),
      customizeIcon: S,
      customizeIconProps: {
        value: me,
        disabled: je,
        isSelected: Le
      }
    }, Le ? "✓" : null));
  }));
}, rf = /* @__PURE__ */ f.forwardRef(_0);
process.env.NODE_ENV !== "production" && (rf.displayName = "OptionList");
const $0 = function(e, t) {
  var n = f.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  }), r = f.useMemo(function() {
    var i = n.current, a = i.values, s = i.options, l = e.map(function(d) {
      if (d.label === void 0) {
        var m;
        return R(R({}, d), {}, {
          label: (m = a.get(d.value)) === null || m === void 0 ? void 0 : m.label
        });
      }
      return d;
    }), c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
    return l.forEach(function(d) {
      c.set(d.value, d), u.set(d.value, t.get(d.value) || s.get(d.value));
    }), n.current.values = c, n.current.options = u, l;
  }, [e, t]), o = f.useCallback(function(i) {
    return t.get(i) || n.current.options.get(i);
  }, [t]);
  return [r, o];
};
function gi(e, t) {
  return Ga(e).join("").toUpperCase().includes(t);
}
const I0 = function(e, t, n, r, o) {
  return f.useMemo(function() {
    if (!n || r === !1)
      return e;
    var i = t.options, a = t.label, s = t.value, l = [], c = typeof r == "function", u = n.toUpperCase(), d = c ? r : function(h, p) {
      return o ? gi(p[o], u) : p[i] ? gi(p[a !== "children" ? a : "label"], u) : gi(p[s], u);
    }, m = c ? function(h) {
      return ga(h);
    } : function(h) {
      return h;
    };
    return e.forEach(function(h) {
      if (h[i]) {
        var p = d(n, m(h));
        if (p)
          l.push(h);
        else {
          var g = h[i].filter(function(v) {
            return d(n, m(v));
          });
          g.length && l.push(R(R({}, h), {}, O({}, i, g)));
        }
        return;
      }
      d(n, m(h)) && l.push(h);
    }), l;
  }, [e, r, o, n, t]);
};
var Tl = 0, T0 = process.env.NODE_ENV !== "test" && Ut();
function N0() {
  var e;
  return T0 ? (e = Tl, Tl += 1) : e = "TEST_OR_SSR", e;
}
function F0(e) {
  var t = f.useState(), n = F(t, 2), r = n[0], o = n[1];
  return f.useEffect(function() {
    o("rc_select_".concat(N0()));
  }, []), e || r;
}
var D0 = ["children", "value"], A0 = ["children"];
function V0(e) {
  var t = e, n = t.key, r = t.props, o = r.children, i = r.value, a = St(r, D0);
  return R({
    key: n,
    value: i !== void 0 ? i : n,
    children: o
  }, a);
}
function Za(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return Jn(e).map(function(n, r) {
    if (!/* @__PURE__ */ f.isValidElement(n) || !n.type)
      return null;
    var o = n, i = o.type.isSelectOptGroup, a = o.key, s = o.props, l = s.children, c = St(s, A0);
    return t || !i ? V0(n) : R(R({
      key: "__RC_SELECT_GRP__".concat(a === null ? r : a, "__"),
      label: a
    }, c), {}, {
      options: Za(l)
    });
  }).filter(function(n) {
    return n;
  });
}
var L0 = function(t, n, r, o, i) {
  return f.useMemo(function() {
    var a = t, s = !t;
    s && (a = Za(n));
    var l = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), u = function(h, p, g) {
      g && typeof g == "string" && h.set(p[g], p);
    }, d = function m(h) {
      for (var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, g = 0; g < h.length; g += 1) {
        var v = h[g];
        !v[r.options] || p ? (l.set(v[r.value], v), u(c, v, r.label), u(c, v, o), u(c, v, i)) : m(v[r.options], !0);
      }
    };
    return d(a), {
      options: a,
      valueOptions: l,
      labelOptions: c
    };
  }, [t, n, r, o, i]);
};
function Nl(e) {
  var t = f.useRef();
  t.current = e;
  var n = f.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
function k0(e) {
  var t = e.mode, n = e.options, r = e.children, o = e.backfill, i = e.allowClear, a = e.placeholder, s = e.getInputElement, l = e.showSearch, c = e.onSearch, u = e.defaultOpen, d = e.autoFocus, m = e.labelInValue, h = e.value, p = e.inputValue, g = e.optionLabelProp, v = Lo(t), b = l !== void 0 ? l : v || t === "combobox", y = n || Za(r);
  if (Ve(t !== "tags" || y.every(function(C) {
    return !C.disabled;
  }), "Please avoid setting option to disabled in tags mode since user can always type text as tag."), t === "tags" || t === "combobox") {
    var S = y.some(function(C) {
      return C.options ? C.options.some(function(w) {
        return typeof ("value" in w ? w.value : w.key) == "number";
      }) : typeof ("value" in C ? C.value : C.key) == "number";
    });
    Ve(!S, "`value` of Option should not use number type when `mode` is `tags` or `combobox`.");
  }
  if (Ve(t !== "combobox" || !g, "`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."), Ve(t === "combobox" || !o, "`backfill` only works with `combobox` mode."), Ve(t === "combobox" || !s, "`getInputElement` only work with `combobox` mode."), Ci(t !== "combobox" || !s || !i || !a, "Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."), c && !b && t !== "combobox" && t !== "tags" && Ve(!1, "`onSearch` should work with `showSearch` instead of use alone."), Ci(!u || d, "`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."), h != null) {
    var x = Ga(h);
    Ve(!m || x.every(function(C) {
      return ge(C) === "object" && ("key" in C || "value" in C);
    }), "`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"), Ve(!v || Array.isArray(h), "`value` should be array when `mode` is `multiple` or `tags`");
  }
  if (r) {
    var E = null;
    Jn(r).some(function(C) {
      if (!/* @__PURE__ */ f.isValidElement(C) || !C.type)
        return !1;
      var w = C, P = w.type;
      if (P.isSelectOption)
        return !1;
      if (P.isSelectOptGroup) {
        var M = Jn(C.props.children).every(function(_) {
          return !/* @__PURE__ */ f.isValidElement(_) || !C.type || _.type.isSelectOption ? !0 : (E = _.type, !1);
        });
        return !M;
      }
      return E = P, !0;
    }), E && Ve(!1, "`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(E.displayName || E.name || E, "`.")), Ve(p === void 0, "`inputValue` is deprecated, please use `searchValue` instead.");
  }
}
function j0(e, t) {
  if (e) {
    var n = function r(o) {
      for (var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = 0; a < o.length; a++) {
        var s = o[a];
        if (s[t == null ? void 0 : t.value] === null)
          return Ve(!1, "`value` in Select options should not be `null`."), !0;
        if (!i && Array.isArray(s[t == null ? void 0 : t.options]) && r(s[t == null ? void 0 : t.options], !0))
          break;
      }
    };
    n(e);
  }
}
var z0 = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "optionRender", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "labelRender", "value", "defaultValue", "labelInValue", "onChange", "maxCount"], H0 = ["inputValue"];
function B0(e) {
  return !e || ge(e) !== "object";
}
var of = /* @__PURE__ */ f.forwardRef(function(e, t) {
  var n = e.id, r = e.mode, o = e.prefixCls, i = o === void 0 ? "rc-select" : o, a = e.backfill, s = e.fieldNames, l = e.inputValue, c = e.searchValue, u = e.onSearch, d = e.autoClearSearchValue, m = d === void 0 ? !0 : d, h = e.onSelect, p = e.onDeselect, g = e.dropdownMatchSelectWidth, v = g === void 0 ? !0 : g, b = e.filterOption, y = e.filterSort, S = e.optionFilterProp, x = e.optionLabelProp, E = e.options, C = e.optionRender, w = e.children, P = e.defaultActiveFirstOption, M = e.menuItemSelectedIcon, _ = e.virtual, $ = e.direction, N = e.listHeight, T = N === void 0 ? 200 : N, I = e.listItemHeight, V = I === void 0 ? 20 : I, D = e.labelRender, z = e.value, L = e.defaultValue, G = e.labelInValue, W = e.onChange, k = e.maxCount, H = St(e, z0), K = F0(n), te = Lo(r), ae = !!(!E && w), we = f.useMemo(function() {
    return b === void 0 && r === "combobox" ? !1 : b;
  }, [b, r]), fe = f.useMemo(
    function() {
      return Zu(s, ae);
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [
      // We stringify fieldNames to avoid unnecessary re-renders.
      JSON.stringify(s),
      ae
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  ), Pe = Io("", {
    value: c !== void 0 ? c : l,
    postState: function(oe) {
      return oe || "";
    }
  }), pe = F(Pe, 2), Re = pe[0], X = pe[1], j = L0(E, w, fe, S, x), U = j.valueOptions, A = j.labelOptions, B = j.options, Q = f.useCallback(function(J) {
    var oe = Ga(J);
    return oe.map(function(Y) {
      var ee, Se, ue, ze, Je;
      if (B0(Y))
        ee = Y;
      else {
        var rt;
        ue = Y.key, Se = Y.label, ee = (rt = Y.value) !== null && rt !== void 0 ? rt : ue;
      }
      var qe = U.get(ee);
      if (qe) {
        var It;
        if (Se === void 0 && (Se = qe == null ? void 0 : qe[x || fe.label]), ue === void 0 && (ue = (It = qe == null ? void 0 : qe.key) !== null && It !== void 0 ? It : ee), ze = qe == null ? void 0 : qe.disabled, Je = qe == null ? void 0 : qe.title, process.env.NODE_ENV !== "production" && !x) {
          var dt = qe == null ? void 0 : qe[fe.label];
          dt !== void 0 && !/* @__PURE__ */ f.isValidElement(dt) && !/* @__PURE__ */ f.isValidElement(Se) && dt !== Se && Ve(!1, "`label` of `value` is not same as `label` in Select options.");
        }
      }
      return {
        label: Se,
        value: ee,
        key: ue,
        disabled: ze,
        title: Je
      };
    });
  }, [fe, x, U]), me = Io(L, {
    value: z
  }), se = F(me, 2), de = se[0], Ee = se[1], be = f.useMemo(function() {
    var J, oe = te && de === null ? [] : de, Y = Q(oe);
    return r === "combobox" && jp((J = Y[0]) === null || J === void 0 ? void 0 : J.value) ? [] : Y;
  }, [de, Q, r, te]), ye = $0(be, U), Ie = F(ye, 2), re = Ie[0], Ge = Ie[1], Me = f.useMemo(function() {
    if (!r && re.length === 1) {
      var J = re[0];
      if (J.value === null && (J.label === null || J.label === void 0))
        return [];
    }
    return re.map(function(oe) {
      var Y;
      return R(R({}, oe), {}, {
        label: (Y = typeof D == "function" ? D(oe) : oe.label) !== null && Y !== void 0 ? Y : oe.value
      });
    });
  }, [r, re, D]), Le = f.useMemo(function() {
    return new Set(re.map(function(J) {
      return J.value;
    }));
  }, [re]);
  f.useEffect(function() {
    if (r === "combobox") {
      var J, oe = (J = re[0]) === null || J === void 0 ? void 0 : J.value;
      X(kp(oe) ? String(oe) : "");
    }
  }, [re]);
  var je = Nl(function(J, oe) {
    var Y = oe ?? J;
    return O(O({}, fe.value, J), fe.label, Y);
  }), xe = f.useMemo(function() {
    if (r !== "tags")
      return B;
    var J = le(B), oe = function(ee) {
      return U.has(ee);
    };
    return le(re).sort(function(Y, ee) {
      return Y.value < ee.value ? -1 : 1;
    }).forEach(function(Y) {
      var ee = Y.value;
      oe(ee) || J.push(je(ee, Y.label));
    }), J;
  }, [je, B, U, re, r]), Be = I0(xe, fe, Re, we, S), Ye = f.useMemo(function() {
    return r !== "tags" || !Re || Be.some(function(J) {
      return J[S || "value"] === Re;
    }) || Be.some(function(J) {
      return J[fe.value] === Re;
    }) ? Be : [je(Re)].concat(le(Be));
  }, [je, S, r, Be, Re, fe]), lt = function J(oe) {
    var Y = le(oe).sort(function(ee, Se) {
      return y(ee, Se, {
        searchValue: Re
      });
    });
    return Y.map(function(ee) {
      return Array.isArray(ee.options) ? R(R({}, ee), {}, {
        options: ee.options.length > 0 ? J(ee.options) : ee.options
      }) : ee;
    });
  }, nt = f.useMemo(function() {
    return y ? lt(Ye) : Ye;
  }, [Ye, y, Re]), Xe = f.useMemo(function() {
    return a0(nt, {
      fieldNames: fe,
      childrenAsData: ae
    });
  }, [nt, fe, ae]), Te = function(oe) {
    var Y = Q(oe);
    if (Ee(Y), W && // Trigger event only when value changed
    (Y.length !== re.length || Y.some(function(ue, ze) {
      var Je;
      return ((Je = re[ze]) === null || Je === void 0 ? void 0 : Je.value) !== (ue == null ? void 0 : ue.value);
    }))) {
      var ee = G ? Y : Y.map(function(ue) {
        return ue.value;
      }), Se = Y.map(function(ue) {
        return ga(Ge(ue.value));
      });
      W(
        // Value
        te ? ee : ee[0],
        // Option
        te ? Se : Se[0]
      );
    }
  }, _t = f.useState(null), Ue = F(_t, 2), ct = Ue[0], it = Ue[1], Lt = f.useState(0), ut = F(Lt, 2), $t = ut[0], xt = ut[1], ft = P !== void 0 ? P : r !== "combobox", Qe = f.useCallback(function(J, oe) {
    var Y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ee = Y.source, Se = ee === void 0 ? "keyboard" : ee;
    xt(oe), a && r === "combobox" && J !== null && Se === "keyboard" && it(String(J));
  }, [a, r]), Ne = function(oe, Y, ee) {
    var Se = function() {
      var ht, Ot = Ge(oe);
      return [G ? {
        label: Ot == null ? void 0 : Ot[fe.label],
        value: oe,
        key: (ht = Ot == null ? void 0 : Ot.key) !== null && ht !== void 0 ? ht : oe
      } : oe, ga(Ot)];
    };
    if (Y && h) {
      var ue = Se(), ze = F(ue, 2), Je = ze[0], rt = ze[1];
      h(Je, rt);
    } else if (!Y && p && ee !== "clear") {
      var qe = Se(), It = F(qe, 2), dt = It[0], Tt = It[1];
      p(dt, Tt);
    }
  }, ce = Nl(function(J, oe) {
    var Y, ee = te ? oe.selected : !0;
    ee ? Y = te ? [].concat(le(re), [J]) : [J] : Y = re.filter(function(Se) {
      return Se.value !== J;
    }), Te(Y), Ne(J, ee), r === "combobox" ? it("") : (!Lo || m) && (X(""), it(""));
  }), ve = function(oe, Y) {
    Te(oe);
    var ee = Y.type, Se = Y.values;
    (ee === "remove" || ee === "clear") && Se.forEach(function(ue) {
      Ne(ue.value, !1, ee);
    });
  }, Z = function(oe, Y) {
    if (X(oe), it(null), Y.source === "submit") {
      var ee = (oe || "").trim();
      if (ee) {
        var Se = Array.from(new Set([].concat(le(Le), [ee])));
        Te(Se), Ne(ee, !0), X("");
      }
      return;
    }
    Y.source !== "blur" && (r === "combobox" && Te(oe), u == null || u(oe));
  }, he = function(oe) {
    var Y = oe;
    r !== "tags" && (Y = oe.map(function(Se) {
      var ue = A.get(Se);
      return ue == null ? void 0 : ue.value;
    }).filter(function(Se) {
      return Se !== void 0;
    }));
    var ee = Array.from(new Set([].concat(le(Le), le(Y))));
    Te(ee), ee.forEach(function(Se) {
      Ne(Se, !0);
    });
  }, ke = f.useMemo(function() {
    var J = _ !== !1 && v !== !1;
    return R(R({}, j), {}, {
      flattenOptions: Xe,
      onActiveValue: Qe,
      defaultActiveFirstOption: ft,
      onSelect: ce,
      menuItemSelectedIcon: M,
      rawValues: Le,
      fieldNames: fe,
      virtual: J,
      direction: $,
      listHeight: T,
      listItemHeight: V,
      childrenAsData: ae,
      maxCount: k,
      optionRender: C
    });
  }, [k, j, Xe, Qe, ft, ce, M, Le, fe, _, v, $, T, V, ae, C]);
  return process.env.NODE_ENV !== "production" && (k0(e), j0(B, fe)), /* @__PURE__ */ f.createElement(Xa.Provider, {
    value: ke
  }, /* @__PURE__ */ f.createElement(Ju, Ke({}, H, {
    // >>> MISC
    id: K,
    prefixCls: i,
    ref: t,
    omitDomProps: H0,
    mode: r,
    displayValues: Me,
    onDisplayValuesChange: ve,
    direction: $,
    searchValue: Re,
    onSearch: Z,
    autoClearSearchValue: m,
    onSearchSplit: he,
    dropdownMatchSelectWidth: v,
    OptionList: rf,
    emptyOptions: !Xe.length,
    activeValue: ct,
    activeDescendantId: "".concat(K, "_list_").concat($t)
  })));
});
process.env.NODE_ENV !== "production" && (of.displayName = "Select");
var Ja = of;
Ja.Option = Qa;
Ja.OptGroup = Ya;
function W0(e, t, n) {
  return Ze({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const U0 = (e, t) => t || e, af = () => {
  const [, e] = Kn(), [t] = La("Empty"), r = new pt(e.colorBgBase).toHsl().l < 0.5 ? {
    opacity: 0.65
  } : {};
  return /* @__PURE__ */ f.createElement("svg", {
    style: r,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ f.createElement("title", null, (t == null ? void 0 : t.description) || "Empty"), /* @__PURE__ */ f.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ f.createElement("g", {
    transform: "translate(24 31.67)"
  }, /* @__PURE__ */ f.createElement("ellipse", {
    fillOpacity: ".8",
    fill: "#F5F5F7",
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",
    fill: "#AEB8C2"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    fill: "url(#linearGradient-1)",
    transform: "translate(13.56)"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",
    fill: "#F5F5F7"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",
    fill: "#DCE0E6"
  })), /* @__PURE__ */ f.createElement("path", {
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",
    fill: "#DCE0E6"
  }), /* @__PURE__ */ f.createElement("g", {
    transform: "translate(149.65 15.383)",
    fill: "#FFF"
  }, /* @__PURE__ */ f.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};
process.env.NODE_ENV !== "production" && (af.displayName = "EmptyImage");
const sf = () => {
  const [, e] = Kn(), [t] = La("Empty"), {
    colorFill: n,
    colorFillTertiary: r,
    colorFillQuaternary: o,
    colorBgContainer: i
  } = e, {
    borderColor: a,
    shadowColor: s,
    contentColor: l
  } = Oo(() => ({
    borderColor: new pt(n).onBackground(i).toHexString(),
    shadowColor: new pt(r).onBackground(i).toHexString(),
    contentColor: new pt(o).onBackground(i).toHexString()
  }), [n, r, o, i]);
  return /* @__PURE__ */ f.createElement("svg", {
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ f.createElement("title", null, (t == null ? void 0 : t.description) || "Empty"), /* @__PURE__ */ f.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /* @__PURE__ */ f.createElement("ellipse", {
    fill: s,
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /* @__PURE__ */ f.createElement("g", {
    fillRule: "nonzero",
    stroke: a
  }, /* @__PURE__ */ f.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /* @__PURE__ */ f.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    fill: l
  }))));
};
process.env.NODE_ENV !== "production" && (sf.displayName = "SimpleImage");
const q0 = (e) => {
  const {
    componentCls: t,
    margin: n,
    marginXS: r,
    marginXL: o,
    fontSize: i,
    lineHeight: a
  } = e;
  return {
    [t]: {
      marginInline: r,
      fontSize: i,
      lineHeight: a,
      textAlign: "center",
      // 原来 &-image 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${t}-image`]: {
        height: e.emptyImgHeight,
        marginBottom: r,
        opacity: e.opacityImage,
        img: {
          height: "100%"
        },
        svg: {
          maxWidth: "100%",
          height: "100%",
          margin: "auto"
        }
      },
      [`${t}-description`]: {
        color: e.colorTextDescription
      },
      // 原来 &-footer 没有父子结构，现在为了外层承担我们的 hashId，改成父子结构
      [`${t}-footer`]: {
        marginTop: n
      },
      "&-normal": {
        marginBlock: o,
        color: e.colorTextDescription,
        [`${t}-description`]: {
          color: e.colorTextDescription
        },
        [`${t}-image`]: {
          height: e.emptyImgHeightMD
        }
      },
      "&-small": {
        marginBlock: r,
        color: e.colorTextDescription,
        [`${t}-image`]: {
          height: e.emptyImgHeightSM
        }
      }
    }
  };
}, K0 = tu("Empty", (e) => {
  const {
    componentCls: t,
    controlHeightLG: n,
    calc: r
  } = e, o = Wn(e, {
    emptyImgCls: `${t}-img`,
    emptyImgHeight: r(n).mul(2.5).equal(),
    emptyImgHeightMD: n,
    emptyImgHeightSM: r(n).mul(0.875).equal()
  });
  return q0(o);
});
var G0 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const lf = /* @__PURE__ */ f.createElement(af, null), cf = /* @__PURE__ */ f.createElement(sf, null), zn = (e) => {
  var t;
  const {
    className: n,
    rootClassName: r,
    prefixCls: o,
    image: i,
    description: a,
    children: s,
    imageStyle: l,
    style: c,
    classNames: u,
    styles: d
  } = e, m = G0(e, ["className", "rootClassName", "prefixCls", "image", "description", "children", "imageStyle", "style", "classNames", "styles"]), {
    getPrefixCls: h,
    direction: p,
    className: g,
    style: v,
    classNames: b,
    styles: y,
    image: S
  } = Kc("empty"), x = h("empty", o), [E, C, w] = K0(x), [P] = La("Empty"), M = typeof a < "u" ? a : P == null ? void 0 : P.description, _ = typeof M == "string" ? M : "empty", $ = (t = i ?? S) !== null && t !== void 0 ? t : lf;
  let N = null;
  if (typeof $ == "string" ? N = /* @__PURE__ */ f.createElement("img", {
    draggable: !1,
    alt: _,
    src: $
  }) : N = $, process.env.NODE_ENV !== "production") {
    const T = qn("Empty");
    [["imageStyle", "styles: { image: {} }"]].forEach(([I, V]) => {
      T.deprecated(!(I in e), I, V);
    });
  }
  return E(/* @__PURE__ */ f.createElement("div", Object.assign({
    className: Ze(C, w, x, g, {
      [`${x}-normal`]: $ === cf,
      [`${x}-rtl`]: p === "rtl"
    }, n, r, b.root, u == null ? void 0 : u.root),
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, y.root), v), d == null ? void 0 : d.root), c)
  }, m), /* @__PURE__ */ f.createElement("div", {
    className: Ze(`${x}-image`, b.image, u == null ? void 0 : u.image),
    style: Object.assign(Object.assign(Object.assign({}, l), y.image), d == null ? void 0 : d.image)
  }, N), M && /* @__PURE__ */ f.createElement("div", {
    className: Ze(`${x}-description`, b.description, u == null ? void 0 : u.description),
    style: Object.assign(Object.assign({}, y.description), d == null ? void 0 : d.description)
  }, M), s && /* @__PURE__ */ f.createElement("div", {
    className: Ze(`${x}-footer`, b.footer, u == null ? void 0 : u.footer),
    style: Object.assign(Object.assign({}, y.footer), d == null ? void 0 : d.footer)
  }, s)));
};
zn.PRESENTED_IMAGE_DEFAULT = lf;
zn.PRESENTED_IMAGE_SIMPLE = cf;
process.env.NODE_ENV !== "production" && (zn.displayName = "Empty");
const X0 = (e) => {
  const {
    componentName: t
  } = e, {
    getPrefixCls: n
  } = On(hn), r = n("empty");
  switch (t) {
    case "Table":
    case "List":
      return /* @__PURE__ */ st.createElement(zn, {
        image: zn.PRESENTED_IMAGE_SIMPLE
      });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return /* @__PURE__ */ st.createElement(zn, {
        image: zn.PRESENTED_IMAGE_SIMPLE,
        className: `${r}-small`
      });
    case "Table.filter":
      return null;
    default:
      return /* @__PURE__ */ st.createElement(zn, null);
  }
}, Y0 = (e, t, n = void 0) => {
  var r, o;
  const {
    variant: i,
    [e]: a
  } = f.useContext(hn), s = f.useContext(mp), l = a == null ? void 0 : a.variant;
  let c;
  typeof t < "u" ? c = t : n === !1 ? c = "borderless" : c = (o = (r = s ?? l) !== null && r !== void 0 ? r : i) !== null && o !== void 0 ? o : "outlined";
  const u = rm.includes(c);
  return [c, u];
}, Q0 = (e) => {
  const n = {
    overflow: {
      adjustX: !0,
      adjustY: !0,
      shiftY: !0
    },
    htmlRegion: e === "scroll" ? "scroll" : "visible",
    dynamicInset: !0
  };
  return {
    bottomLeft: Object.assign(Object.assign({}, n), {
      points: ["tl", "bl"],
      offset: [0, 4]
    }),
    bottomRight: Object.assign(Object.assign({}, n), {
      points: ["tr", "br"],
      offset: [0, 4]
    }),
    topLeft: Object.assign(Object.assign({}, n), {
      points: ["bl", "tl"],
      offset: [0, -4]
    }),
    topRight: Object.assign(Object.assign({}, n), {
      points: ["br", "tr"],
      offset: [0, -4]
    })
  };
};
function Z0(e, t) {
  return e || Q0(t);
}
const Fl = (e) => {
  const {
    optionHeight: t,
    optionFontSize: n,
    optionLineHeight: r,
    optionPadding: o
  } = e;
  return {
    position: "relative",
    display: "block",
    minHeight: t,
    padding: o,
    color: e.colorText,
    fontWeight: "normal",
    fontSize: n,
    lineHeight: r,
    boxSizing: "border-box"
  };
}, J0 = (e) => {
  const {
    antCls: t,
    componentCls: n
  } = e, r = `${n}-item`, o = `&${t}-slide-up-enter${t}-slide-up-enter-active`, i = `&${t}-slide-up-appear${t}-slide-up-appear-active`, a = `&${t}-slide-up-leave${t}-slide-up-leave-active`, s = `${n}-dropdown-placement-`, l = `${r}-option-selected`;
  return [
    {
      [`${n}-dropdown`]: Object.assign(Object.assign({}, ja(e)), {
        position: "absolute",
        top: -9999,
        zIndex: e.zIndexPopup,
        boxSizing: "border-box",
        padding: e.paddingXXS,
        overflow: "hidden",
        fontSize: e.fontSize,
        // Fix select render lag of long text in chrome
        // https://github.com/ant-design/ant-design/issues/11456
        // https://github.com/ant-design/ant-design/issues/11843
        fontVariant: "initial",
        backgroundColor: e.colorBgElevated,
        borderRadius: e.borderRadiusLG,
        outline: "none",
        boxShadow: e.boxShadowSecondary,
        [`
          ${o}${s}bottomLeft,
          ${i}${s}bottomLeft
        `]: {
          animationName: Mu
        },
        [`
          ${o}${s}topLeft,
          ${i}${s}topLeft,
          ${o}${s}topRight,
          ${i}${s}topRight
        `]: {
          animationName: $u
        },
        [`${a}${s}bottomLeft`]: {
          animationName: _u
        },
        [`
          ${a}${s}topLeft,
          ${a}${s}topRight
        `]: {
          animationName: Iu
        },
        "&-hidden": {
          display: "none"
        },
        [r]: Object.assign(Object.assign({}, Fl(e)), {
          cursor: "pointer",
          transition: `background ${e.motionDurationSlow} ease`,
          borderRadius: e.borderRadiusSM,
          // =========== Group ============
          "&-group": {
            color: e.colorTextDescription,
            fontSize: e.fontSizeSM,
            cursor: "default"
          },
          // =========== Option ===========
          "&-option": {
            display: "flex",
            "&-content": Object.assign({
              flex: "auto"
            }, Yi),
            "&-state": {
              flex: "none",
              display: "flex",
              alignItems: "center"
            },
            [`&-active:not(${r}-option-disabled)`]: {
              backgroundColor: e.optionActiveBg
            },
            [`&-selected:not(${r}-option-disabled)`]: {
              color: e.optionSelectedColor,
              fontWeight: e.optionSelectedFontWeight,
              backgroundColor: e.optionSelectedBg,
              [`${r}-option-state`]: {
                color: e.colorPrimary
              }
            },
            "&-disabled": {
              [`&${r}-option-selected`]: {
                backgroundColor: e.colorBgContainerDisabled
              },
              color: e.colorTextDisabled,
              cursor: "not-allowed"
            },
            "&-grouped": {
              paddingInlineStart: e.calc(e.controlPaddingHorizontal).mul(2).equal()
            }
          },
          "&-empty": Object.assign(Object.assign({}, Fl(e)), {
            color: e.colorTextDisabled
          })
        }),
        // https://github.com/ant-design/ant-design/pull/46646
        [`${l}:has(+ ${l})`]: {
          borderEndStartRadius: 0,
          borderEndEndRadius: 0,
          [`& + ${l}`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0
          }
        },
        // =========================== RTL ===========================
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Follow code may reuse in other components
    Js(e, "slide-up"),
    Js(e, "slide-down"),
    Zs(e, "move-up"),
    Zs(e, "move-down")
  ];
}, ey = (e) => {
  const {
    multipleSelectItemHeight: t,
    paddingXXS: n,
    lineWidth: r,
    INTERNAL_FIXED_ITEM_MARGIN: o
  } = e, i = e.max(e.calc(n).sub(r).equal(), 0), a = e.max(e.calc(i).sub(o).equal(), 0);
  return {
    basePadding: i,
    containerPadding: a,
    itemHeight: mt(t),
    itemLineHeight: mt(e.calc(t).sub(e.calc(e.lineWidth).mul(2)).equal())
  };
}, ty = (e) => {
  const {
    multipleSelectItemHeight: t,
    selectHeight: n,
    lineWidth: r
  } = e;
  return e.calc(n).sub(t).div(2).sub(r).equal();
}, ny = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    borderRadiusSM: r,
    motionDurationSlow: o,
    paddingXS: i,
    multipleItemColorDisabled: a,
    multipleItemBorderColorDisabled: s,
    colorIcon: l,
    colorIconHover: c,
    INTERNAL_FIXED_ITEM_MARGIN: u
  } = e;
  return {
    /**
     * Do not merge `height` & `line-height` under style with `selection` & `search`, since chrome
     * may update to redesign with its align logic.
     */
    // =========================== Overflow ===========================
    [`${t}-selection-overflow`]: {
      position: "relative",
      display: "flex",
      flex: "auto",
      flexWrap: "wrap",
      maxWidth: "100%",
      "&-item": {
        flex: "none",
        alignSelf: "center",
        // https://github.com/ant-design/ant-design/issues/54179
        maxWidth: "calc(100% - 4px)",
        display: "inline-flex"
      },
      // ======================== Selections ==========================
      [`${t}-selection-item`]: {
        display: "flex",
        alignSelf: "center",
        flex: "none",
        boxSizing: "border-box",
        maxWidth: "100%",
        marginBlock: u,
        borderRadius: r,
        cursor: "default",
        transition: `font-size ${o}, line-height ${o}, height ${o}`,
        marginInlineEnd: e.calc(u).mul(2).equal(),
        paddingInlineStart: i,
        paddingInlineEnd: e.calc(i).div(2).equal(),
        [`${t}-disabled&`]: {
          color: a,
          borderColor: s,
          cursor: "not-allowed"
        },
        // It's ok not to do this, but 24px makes bottom narrow in view should adjust
        "&-content": {
          display: "inline-block",
          marginInlineEnd: e.calc(i).div(2).equal(),
          overflow: "hidden",
          whiteSpace: "pre",
          // fix whitespace wrapping. custom tags display all whitespace within.
          textOverflow: "ellipsis"
        },
        "&-remove": Object.assign(Object.assign({}, za()), {
          display: "inline-flex",
          alignItems: "center",
          color: l,
          fontWeight: "bold",
          fontSize: 10,
          lineHeight: "inherit",
          cursor: "pointer",
          [`> ${n}`]: {
            verticalAlign: "-0.2em"
          },
          "&:hover": {
            color: c
          }
        })
      }
    }
  };
}, ry = (e, t) => {
  const {
    componentCls: n,
    INTERNAL_FIXED_ITEM_MARGIN: r
  } = e, o = `${n}-selection-overflow`, i = e.multipleSelectItemHeight, a = ty(e), s = t ? `${n}-${t}` : "", l = ey(e);
  return {
    [`${n}-multiple${s}`]: Object.assign(Object.assign({}, ny(e)), {
      // ========================= Selector =========================
      [`${n}-selector`]: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        // Multiple is little different that horizontal is follow the vertical
        paddingInline: l.basePadding,
        paddingBlock: l.containerPadding,
        borderRadius: e.borderRadius,
        [`${n}-disabled&`]: {
          background: e.multipleSelectorBgDisabled,
          cursor: "not-allowed"
        },
        "&:after": {
          display: "inline-block",
          width: 0,
          margin: `${mt(r)} 0`,
          lineHeight: mt(i),
          visibility: "hidden",
          content: '"\\a0"'
        }
      },
      // ======================== Selections ========================
      [`${n}-selection-item`]: {
        height: l.itemHeight,
        lineHeight: mt(l.itemLineHeight)
      },
      // ========================== Wrap ===========================
      [`${n}-selection-wrap`]: {
        alignSelf: "flex-start",
        "&:after": {
          lineHeight: mt(i),
          marginBlock: r
        }
      },
      // ========================== Input ==========================
      [`${n}-prefix`]: {
        marginInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(l.basePadding).equal()
      },
      [`${o}-item + ${o}-item,
        ${n}-prefix + ${n}-selection-wrap
      `]: {
        [`${n}-selection-search`]: {
          marginInlineStart: 0
        },
        [`${n}-selection-placeholder`]: {
          insetInlineStart: 0
        }
      },
      // https://github.com/ant-design/ant-design/issues/44754
      // Same as `wrap:after`
      [`${o}-item-suffix`]: {
        minHeight: l.itemHeight,
        marginBlock: r
      },
      [`${n}-selection-search`]: {
        display: "inline-flex",
        position: "relative",
        maxWidth: "100%",
        marginInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(a).equal(),
        "\n          &-input,\n          &-mirror\n        ": {
          height: i,
          fontFamily: e.fontFamily,
          lineHeight: mt(i),
          transition: `all ${e.motionDurationSlow}`
        },
        "&-input": {
          width: "100%",
          minWidth: 4.1
          // fix search cursor missing
        },
        "&-mirror": {
          position: "absolute",
          top: 0,
          insetInlineStart: 0,
          insetInlineEnd: "auto",
          zIndex: 999,
          whiteSpace: "pre",
          // fix whitespace wrapping caused width calculation bug
          visibility: "hidden"
        }
      },
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: e.calc(e.inputPaddingHorizontalBase).sub(l.basePadding).equal(),
        insetInlineEnd: e.inputPaddingHorizontalBase,
        transform: "translateY(-50%)",
        transition: `all ${e.motionDurationSlow}`
      }
    })
  };
};
function pi(e, t) {
  const {
    componentCls: n
  } = e, r = t ? `${n}-${t}` : "", o = {
    [`${n}-multiple${r}`]: {
      fontSize: e.fontSize,
      // ========================= Selector =========================
      [`${n}-selector`]: {
        [`${n}-show-search&`]: {
          cursor: "text"
        }
      },
      [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: {
        paddingInlineEnd: e.calc(e.fontSizeIcon).add(e.controlPaddingHorizontal).equal()
      }
    }
  };
  return [ry(e, t), o];
}
const oy = (e) => {
  const {
    componentCls: t
  } = e, n = Wn(e, {
    selectHeight: e.controlHeightSM,
    multipleSelectItemHeight: e.multipleItemHeightSM,
    borderRadius: e.borderRadiusSM,
    borderRadiusSM: e.borderRadiusXS
  }), r = Wn(e, {
    fontSize: e.fontSizeLG,
    selectHeight: e.controlHeightLG,
    multipleSelectItemHeight: e.multipleItemHeightLG,
    borderRadius: e.borderRadiusLG,
    borderRadiusSM: e.borderRadius
  });
  return [
    pi(e),
    // ======================== Small ========================
    pi(n, "sm"),
    // Padding
    {
      [`${t}-multiple${t}-sm`]: {
        [`${t}-selection-placeholder`]: {
          insetInline: e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal()
        },
        // https://github.com/ant-design/ant-design/issues/29559
        [`${t}-selection-search`]: {
          marginInlineStart: 2
          // Magic Number
        }
      }
    },
    // ======================== Large ========================
    pi(r, "lg")
  ];
};
function yi(e, t) {
  const {
    componentCls: n,
    inputPaddingHorizontalBase: r,
    borderRadius: o
  } = e, i = e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(), a = t ? `${n}-${t}` : "";
  return {
    [`${n}-single${a}`]: {
      fontSize: e.fontSize,
      height: e.controlHeight,
      // ========================= Selector =========================
      [`${n}-selector`]: Object.assign(Object.assign({}, ja(e, !0)), {
        display: "flex",
        borderRadius: o,
        flex: "1 1 auto",
        [`${n}-selection-wrap:after`]: {
          lineHeight: mt(i)
        },
        [`${n}-selection-search`]: {
          position: "absolute",
          inset: 0,
          width: "100%",
          "&-input": {
            width: "100%",
            WebkitAppearance: "textfield"
          }
        },
        [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: {
          display: "block",
          padding: 0,
          lineHeight: mt(i),
          transition: `all ${e.motionDurationSlow}, visibility 0s`,
          alignSelf: "center"
        },
        [`${n}-selection-placeholder`]: {
          transition: "none",
          pointerEvents: "none"
        },
        // For common baseline align
        [[
          "&:after",
          /* For '' value baseline align */
          `${n}-selection-item:empty:after`,
          /* For undefined value baseline align */
          `${n}-selection-placeholder:empty:after`
        ].join(",")]: {
          display: "inline-block",
          width: 0,
          visibility: "hidden",
          content: '"\\a0"'
        }
      }),
      [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-search,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: {
        paddingInlineEnd: e.showArrowPaddingInlineEnd
      },
      // Opacity selection if open
      [`&${n}-open ${n}-selection-item`]: {
        color: e.colorTextPlaceholder
      },
      // ========================== Input ==========================
      // We only change the style of non-customize input which is only support by `combobox` mode.
      // Not customize
      [`&:not(${n}-customize-input)`]: {
        [`${n}-selector`]: {
          width: "100%",
          height: "100%",
          alignItems: "center",
          padding: `0 ${mt(r)}`,
          [`${n}-selection-search-input`]: {
            height: i,
            fontSize: e.fontSize
          },
          "&:after": {
            lineHeight: mt(i)
          }
        }
      },
      [`&${n}-customize-input`]: {
        [`${n}-selector`]: {
          "&:after": {
            display: "none"
          },
          [`${n}-selection-search`]: {
            position: "static",
            width: "100%"
          },
          [`${n}-selection-placeholder`]: {
            position: "absolute",
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${mt(r)}`,
            "&:after": {
              display: "none"
            }
          }
        }
      }
    }
  };
}
function iy(e) {
  const {
    componentCls: t
  } = e, n = e.calc(e.controlPaddingHorizontalSM).sub(e.lineWidth).equal();
  return [
    yi(e),
    // ======================== Small ========================
    // Shared
    yi(Wn(e, {
      controlHeight: e.controlHeightSM,
      borderRadius: e.borderRadiusSM
    }), "sm"),
    // padding
    {
      [`${t}-single${t}-sm`]: {
        [`&:not(${t}-customize-input)`]: {
          [`${t}-selector`]: {
            padding: `0 ${mt(n)}`
          },
          // With arrow should provides `padding-right` to show the arrow
          [`&${t}-show-arrow ${t}-selection-search`]: {
            insetInlineEnd: e.calc(n).add(e.calc(e.fontSize).mul(1.5)).equal()
          },
          [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: {
            paddingInlineEnd: e.calc(e.fontSize).mul(1.5).equal()
          }
        }
      }
    },
    // ======================== Large ========================
    // Shared
    yi(Wn(e, {
      controlHeight: e.singleItemHeightLG,
      fontSize: e.fontSizeLG,
      borderRadius: e.borderRadiusLG
    }), "lg")
  ];
}
const ay = (e) => {
  const {
    fontSize: t,
    lineHeight: n,
    lineWidth: r,
    controlHeight: o,
    controlHeightSM: i,
    controlHeightLG: a,
    paddingXXS: s,
    controlPaddingHorizontal: l,
    zIndexPopupBase: c,
    colorText: u,
    fontWeightStrong: d,
    controlItemBgActive: m,
    controlItemBgHover: h,
    colorBgContainer: p,
    colorFillSecondary: g,
    colorBgContainerDisabled: v,
    colorTextDisabled: b,
    colorPrimaryHover: y,
    colorPrimary: S,
    controlOutline: x
  } = e, E = s * 2, C = r * 2, w = Math.min(o - E, o - C), P = Math.min(i - E, i - C), M = Math.min(a - E, a - C);
  return {
    INTERNAL_FIXED_ITEM_MARGIN: Math.floor(s / 2),
    zIndexPopup: c + 50,
    optionSelectedColor: u,
    optionSelectedFontWeight: d,
    optionSelectedBg: m,
    optionActiveBg: h,
    optionPadding: `${(o - t * n) / 2}px ${l}px`,
    optionFontSize: t,
    optionLineHeight: n,
    optionHeight: o,
    selectorBg: p,
    clearBg: p,
    singleItemHeightLG: a,
    multipleItemBg: g,
    multipleItemBorderColor: "transparent",
    multipleItemHeight: w,
    multipleItemHeightSM: P,
    multipleItemHeightLG: M,
    multipleSelectorBgDisabled: v,
    multipleItemColorDisabled: b,
    multipleItemBorderColorDisabled: "transparent",
    showArrowPaddingInlineEnd: Math.ceil(e.fontSize * 1.25),
    hoverBorderColor: y,
    activeBorderColor: S,
    activeOutlineColor: x,
    selectAffixPadding: s
  };
}, uf = (e, t) => {
  const {
    componentCls: n,
    antCls: r,
    controlOutlineWidth: o
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      border: `${mt(e.lineWidth)} ${e.lineType} ${t.borderColor}`,
      background: e.selectorBg
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        borderColor: t.hoverBorderHover
      },
      [`${n}-focused& ${n}-selector`]: {
        borderColor: t.activeBorderColor,
        boxShadow: `0 0 0 ${mt(o)} ${t.activeOutlineColor}`,
        outline: 0
      },
      [`${n}-prefix`]: {
        color: t.color
      }
    }
  };
}, Dl = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, uf(e, t))
}), sy = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign({}, uf(e, {
    borderColor: e.colorBorder,
    hoverBorderHover: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeOutlineColor: e.activeOutlineColor,
    color: e.colorText
  })), Dl(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderHover: e.colorErrorHover,
    activeBorderColor: e.colorError,
    activeOutlineColor: e.colorErrorOutline,
    color: e.colorError
  })), Dl(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderHover: e.colorWarningHover,
    activeBorderColor: e.colorWarning,
    activeOutlineColor: e.colorWarningOutline,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${mt(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    }
  })
}), ff = (e, t) => {
  const {
    componentCls: n,
    antCls: r
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      background: t.bg,
      border: `${mt(e.lineWidth)} ${e.lineType} transparent`,
      color: t.color
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        background: t.hoverBg
      },
      [`${n}-focused& ${n}-selector`]: {
        background: e.selectorBg,
        borderColor: t.activeBorderColor,
        outline: 0
      }
    }
  };
}, Al = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, ff(e, t))
}), ly = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign({}, ff(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor,
    color: e.colorText
  })), Al(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    color: e.colorError
  })), Al(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        borderColor: e.colorBorder,
        background: e.colorBgContainerDisabled,
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.colorBgContainer,
      border: `${mt(e.lineWidth)} ${e.lineType} ${e.colorSplit}`
    }
  })
}), cy = (e) => ({
  "&-borderless": {
    [`${e.componentCls}-selector`]: {
      background: "transparent",
      border: `${mt(e.lineWidth)} ${e.lineType} transparent`
    },
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${mt(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    },
    // Status
    [`&${e.componentCls}-status-error`]: {
      [`${e.componentCls}-prefix, ${e.componentCls}-selection-item`]: {
        color: e.colorError
      }
    },
    [`&${e.componentCls}-status-warning`]: {
      [`${e.componentCls}-prefix, ${e.componentCls}-selection-item`]: {
        color: e.colorWarning
      }
    }
  }
}), df = (e, t) => {
  const {
    componentCls: n,
    antCls: r
  } = e;
  return {
    [`&:not(${n}-customize-input) ${n}-selector`]: {
      borderWidth: `0 0 ${mt(e.lineWidth)} 0`,
      borderStyle: `none none ${e.lineType} none`,
      borderColor: t.borderColor,
      background: e.selectorBg,
      borderRadius: 0
    },
    [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: {
      [`&:hover ${n}-selector`]: {
        borderColor: t.hoverBorderHover
      },
      [`${n}-focused& ${n}-selector`]: {
        borderColor: t.activeBorderColor,
        outline: 0
      },
      [`${n}-prefix`]: {
        color: t.color
      }
    }
  };
}, Vl = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}`]: Object.assign({}, df(e, t))
}), uy = (e) => ({
  "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign({}, df(e, {
    borderColor: e.colorBorder,
    hoverBorderHover: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeOutlineColor: e.activeOutlineColor,
    color: e.colorText
  })), Vl(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderHover: e.colorErrorHover,
    activeBorderColor: e.colorError,
    activeOutlineColor: e.colorErrorOutline,
    color: e.colorError
  })), Vl(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderHover: e.colorWarningHover,
    activeBorderColor: e.colorWarning,
    activeOutlineColor: e.colorWarningOutline,
    color: e.colorWarning
  })), {
    [`&${e.componentCls}-disabled`]: {
      [`&:not(${e.componentCls}-customize-input) ${e.componentCls}-selector`]: {
        color: e.colorTextDisabled
      }
    },
    [`&${e.componentCls}-multiple ${e.componentCls}-selection-item`]: {
      background: e.multipleItemBg,
      border: `${mt(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`
    }
  })
}), fy = (e) => ({
  [e.componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, sy(e)), ly(e)), cy(e)), uy(e))
}), dy = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    position: "relative",
    transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
    input: {
      cursor: "pointer"
    },
    [`${t}-show-search&`]: {
      cursor: "text",
      input: {
        cursor: "auto",
        color: "inherit",
        height: "100%"
      }
    },
    [`${t}-disabled&`]: {
      cursor: "not-allowed",
      input: {
        cursor: "not-allowed"
      }
    }
  };
}, vy = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-selection-search-input`]: {
      margin: 0,
      padding: 0,
      background: "transparent",
      border: "none",
      outline: "none",
      appearance: "none",
      fontFamily: "inherit",
      "&::-webkit-search-cancel-button": {
        display: "none",
        appearance: "none"
      }
    }
  };
}, my = (e) => {
  const {
    antCls: t,
    componentCls: n,
    inputPaddingHorizontalBase: r,
    iconCls: o
  } = e, i = {
    [`${n}-clear`]: {
      opacity: 1,
      background: e.colorBgBase,
      borderRadius: "50%"
    }
  };
  return {
    [n]: Object.assign(Object.assign({}, ja(e)), {
      position: "relative",
      display: "inline-flex",
      cursor: "pointer",
      [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(Object.assign({}, dy(e)), vy(e)),
      // ======================== Selection ========================
      [`${n}-selection-item`]: Object.assign(Object.assign({
        flex: 1,
        fontWeight: "normal",
        position: "relative",
        userSelect: "none"
      }, Yi), {
        // https://github.com/ant-design/ant-design/issues/40421
        [`> ${t}-typography`]: {
          display: "inline"
        }
      }),
      // ======================= Placeholder =======================
      [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, Yi), {
        flex: 1,
        color: e.colorTextPlaceholder,
        pointerEvents: "none"
      }),
      // ========================== Arrow ==========================
      [`${n}-arrow`]: Object.assign(Object.assign({}, za()), {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        lineHeight: 1,
        textAlign: "center",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        transition: `opacity ${e.motionDurationSlow} ease`,
        [o]: {
          verticalAlign: "top",
          transition: `transform ${e.motionDurationSlow}`,
          "> svg": {
            verticalAlign: "top"
          },
          [`&:not(${n}-suffix)`]: {
            pointerEvents: "auto"
          }
        },
        [`${n}-disabled &`]: {
          cursor: "not-allowed"
        },
        "> *:not(:last-child)": {
          marginInlineEnd: 8
          // FIXME: magic
        }
      }),
      // ========================== Wrap ===========================
      [`${n}-selection-wrap`]: {
        display: "flex",
        width: "100%",
        position: "relative",
        minWidth: 0,
        // https://github.com/ant-design/ant-design/issues/51669
        "&:after": {
          content: '"\\a0"',
          width: 0,
          overflow: "hidden"
        }
      },
      // ========================= Prefix ==========================
      [`${n}-prefix`]: {
        flex: "none",
        marginInlineEnd: e.selectAffixPadding
      },
      // ========================== Clear ==========================
      [`${n}-clear`]: {
        position: "absolute",
        top: "50%",
        insetInlineStart: "auto",
        insetInlineEnd: r,
        zIndex: 1,
        display: "inline-block",
        width: e.fontSizeIcon,
        height: e.fontSizeIcon,
        marginTop: e.calc(e.fontSizeIcon).mul(-1).div(2).equal(),
        color: e.colorTextQuaternary,
        fontSize: e.fontSizeIcon,
        fontStyle: "normal",
        lineHeight: 1,
        textAlign: "center",
        textTransform: "none",
        cursor: "pointer",
        opacity: 0,
        transition: `color ${e.motionDurationMid} ease, opacity ${e.motionDurationSlow} ease`,
        textRendering: "auto",
        // https://github.com/ant-design/ant-design/issues/54205
        // Force GPU compositing on Safari to prevent flickering on opacity/transform transitions
        transform: "translateZ(0)",
        "&:before": {
          display: "block"
        },
        "&:hover": {
          color: e.colorIcon
        }
      },
      "@media(hover:none)": i,
      "&:hover": i
    }),
    // ========================= Feedback ==========================
    [`${n}-status`]: {
      "&-error, &-warning, &-success, &-validating": {
        [`&${n}-has-feedback`]: {
          [`${n}-clear`]: {
            insetInlineEnd: e.calc(r).add(e.fontSize).add(e.paddingXS).equal()
          }
        }
      }
    }
  };
}, hy = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    {
      [t]: {
        // ==================== In Form ====================
        [`&${t}-in-form-item`]: {
          width: "100%"
        }
      }
    },
    // =====================================================
    // ==                       LTR                       ==
    // =====================================================
    // Base
    my(e),
    // Single
    iy(e),
    // Multiple
    oy(e),
    // Dropdown
    J0(e),
    // =====================================================
    // ==                       RTL                       ==
    // =====================================================
    {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    },
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    lg(e, {
      borderElCls: `${t}-selector`,
      focusElCls: `${t}-focused`
    })
  ];
}, gy = tu("Select", (e, {
  rootPrefixCls: t
}) => {
  const n = Wn(e, {
    rootPrefixCls: t,
    inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
    multipleSelectItemHeight: e.multipleItemHeight,
    selectHeight: e.controlHeight
  });
  return [hy(n), fy(n)];
}, ay, {
  unitless: {
    optionLineHeight: !0,
    optionSelectedFontWeight: !0
  }
});
var py = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, yy = function(t, n) {
  return /* @__PURE__ */ f.createElement(Nn, Ke({}, t, {
    ref: n,
    icon: py
  }));
}, vf = /* @__PURE__ */ f.forwardRef(yy);
process.env.NODE_ENV !== "production" && (vf.displayName = "CheckOutlined");
var mf = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, by = function(t, n) {
  return /* @__PURE__ */ f.createElement(Nn, Ke({}, t, {
    ref: n,
    icon: mf
  }));
}, hf = /* @__PURE__ */ f.forwardRef(by);
process.env.NODE_ENV !== "production" && (hf.displayName = "DownOutlined");
var Sy = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, Cy = function(t, n) {
  return /* @__PURE__ */ f.createElement(Nn, Ke({}, t, {
    ref: n,
    icon: Sy
  }));
}, gf = /* @__PURE__ */ f.forwardRef(Cy);
process.env.NODE_ENV !== "production" && (gf.displayName = "SearchOutlined");
function wy({
  suffixIcon: e,
  clearIcon: t,
  menuItemSelectedIcon: n,
  removeIcon: r,
  loading: o,
  multiple: i,
  hasFeedback: a,
  prefixCls: s,
  showSuffixIcon: l,
  feedbackIcon: c,
  showArrow: u,
  componentName: d
}) {
  process.env.NODE_ENV !== "production" && qn(d).deprecated(!t, "clearIcon", "allowClear={{ clearIcon: React.ReactNode }}");
  const m = t ?? /* @__PURE__ */ f.createElement(yu, null), h = (b) => e === null && !a && !u ? null : /* @__PURE__ */ f.createElement(f.Fragment, null, l !== !1 && b, a && c);
  let p = null;
  if (e !== void 0)
    p = h(e);
  else if (o)
    p = h(/* @__PURE__ */ f.createElement(Su, {
      spin: !0
    }));
  else {
    const b = `${s}-suffix`;
    p = ({
      open: y,
      showSearch: S
    }) => h(y && S ? /* @__PURE__ */ f.createElement(gf, {
      className: b
    }) : /* @__PURE__ */ f.createElement(hf, {
      className: b
    }));
  }
  let g = null;
  n !== void 0 ? g = n : i ? g = /* @__PURE__ */ f.createElement(vf, null) : g = null;
  let v = null;
  return r !== void 0 ? v = r : v = /* @__PURE__ */ f.createElement(bu, null), {
    clearIcon: m,
    suffixIcon: p,
    itemIcon: g,
    removeIcon: v
  };
}
function Ey(e) {
  return st.useMemo(() => {
    if (e)
      return (...t) => /* @__PURE__ */ st.createElement(hp, {
        space: !0
      }, e.apply(void 0, t));
  }, [e]);
}
function xy(e, t) {
  return t !== void 0 ? t : e !== null;
}
var Oy = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const pf = "SECRET_COMBOBOX_MODE_DO_NOT_USE", yf = (e, t) => {
  var n, r, o, i, a;
  const {
    prefixCls: s,
    bordered: l,
    className: c,
    rootClassName: u,
    getPopupContainer: d,
    popupClassName: m,
    dropdownClassName: h,
    listHeight: p = 256,
    placement: g,
    listItemHeight: v,
    size: b,
    disabled: y,
    notFoundContent: S,
    status: x,
    builtinPlacements: E,
    dropdownMatchSelectWidth: C,
    popupMatchSelectWidth: w,
    direction: P,
    style: M,
    allowClear: _,
    variant: $,
    dropdownStyle: N,
    transitionName: T,
    tagRender: I,
    maxCount: V,
    prefix: D,
    dropdownRender: z,
    popupRender: L,
    onDropdownVisibleChange: G,
    onOpenChange: W,
    styles: k,
    classNames: H
  } = e, K = Oy(e, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear", "variant", "dropdownStyle", "transitionName", "tagRender", "maxCount", "prefix", "dropdownRender", "popupRender", "onDropdownVisibleChange", "onOpenChange", "styles", "classNames"]), {
    getPopupContainer: te,
    getPrefixCls: ae,
    renderEmpty: we,
    direction: fe,
    virtual: Pe,
    popupMatchSelectWidth: pe,
    popupOverflow: Re
  } = f.useContext(hn), {
    showSearch: X,
    style: j,
    styles: U,
    className: A,
    classNames: B
  } = Kc("select"), [, Q] = Kn(), me = v ?? (Q == null ? void 0 : Q.controlHeight), se = ae("select", s), de = ae(), Ee = P ?? fe, {
    compactSize: be,
    compactItemClassnames: ye
  } = Hh(se, Ee), [Ie, re] = Y0("select", $, l), Ge = Mh(se), [Me, Le, je] = gy(se, Ge), xe = f.useMemo(() => {
    const {
      mode: ee
    } = e;
    if (ee !== "combobox")
      return ee === pf ? "combobox" : ee;
  }, [e.mode]), Be = xe === "multiple" || xe === "tags", Ye = xy(e.suffixIcon, e.showArrow), lt = (n = w ?? C) !== null && n !== void 0 ? n : pe, nt = ((r = k == null ? void 0 : k.popup) === null || r === void 0 ? void 0 : r.root) || ((o = U.popup) === null || o === void 0 ? void 0 : o.root) || N, Xe = Ey(L || z), Te = W || G, {
    status: _t,
    hasFeedback: Ue,
    isFormItemInput: ct,
    feedbackIcon: it
  } = f.useContext(Ao), Lt = U0(_t, x);
  let ut;
  S !== void 0 ? ut = S : xe === "combobox" ? ut = null : ut = (we == null ? void 0 : we("Select")) || /* @__PURE__ */ f.createElement(X0, {
    componentName: "Select"
  });
  const {
    suffixIcon: $t,
    itemIcon: xt,
    removeIcon: ft,
    clearIcon: Qe
  } = wy(Object.assign(Object.assign({}, K), {
    multiple: Be,
    hasFeedback: Ue,
    feedbackIcon: it,
    showSuffixIcon: Ye,
    prefixCls: se,
    componentName: "Select"
  })), Ne = _ === !0 ? {
    clearIcon: Qe
  } : _, ce = Ou(K, ["suffixIcon", "itemIcon"]), ve = Ze(((i = H == null ? void 0 : H.popup) === null || i === void 0 ? void 0 : i.root) || ((a = B == null ? void 0 : B.popup) === null || a === void 0 ? void 0 : a.root) || m || h, {
    [`${se}-dropdown-${Ee}`]: Ee === "rtl"
  }, u, B.root, H == null ? void 0 : H.root, je, Ge, Le), Z = zh((ee) => {
    var Se;
    return (Se = b ?? be) !== null && Se !== void 0 ? Se : ee;
  }), he = f.useContext($o), ke = y ?? he, J = Ze({
    [`${se}-lg`]: Z === "large",
    [`${se}-sm`]: Z === "small",
    [`${se}-rtl`]: Ee === "rtl",
    [`${se}-${Ie}`]: re,
    [`${se}-in-form-item`]: ct
  }, W0(se, Lt, Ue), ye, A, c, B.root, H == null ? void 0 : H.root, u, je, Ge, Le), oe = f.useMemo(() => g !== void 0 ? g : Ee === "rtl" ? "bottomRight" : "bottomLeft", [g, Ee]);
  if (process.env.NODE_ENV !== "production") {
    const ee = qn("Select");
    Object.entries({
      dropdownMatchSelectWidth: "popupMatchSelectWidth",
      dropdownStyle: "styles.popup.root",
      dropdownClassName: "classNames.popup.root",
      popupClassName: "classNames.popup.root",
      dropdownRender: "popupRender",
      onDropdownVisibleChange: "onOpenChange",
      bordered: "variant"
    }).forEach(([ue, ze]) => {
      ee.deprecated(!(ue in e), ue, ze);
    }), process.env.NODE_ENV !== "production" && ee(!("showArrow" in e), "deprecated", "`showArrow` is deprecated which will be removed in next major version. It will be a default behavior, you can hide it by setting `suffixIcon` to null."), process.env.NODE_ENV !== "production" && ee(!(typeof V < "u" && !Be), "usage", "`maxCount` only works with mode `multiple` or `tags`");
  }
  const [Y] = Ah("SelectLike", nt == null ? void 0 : nt.zIndex);
  return Me(/* @__PURE__ */ f.createElement(Ja, Object.assign({
    ref: t,
    virtual: Pe,
    showSearch: X
  }, ce, {
    style: Object.assign(Object.assign(Object.assign(Object.assign({}, U.root), k == null ? void 0 : k.root), j), M),
    dropdownMatchSelectWidth: lt,
    transitionName: kh(de, "slide-up", T),
    builtinPlacements: Z0(E, Re),
    listHeight: p,
    listItemHeight: me,
    mode: xe,
    prefixCls: se,
    placement: oe,
    direction: Ee,
    prefix: D,
    suffixIcon: $t,
    menuItemSelectedIcon: xt,
    removeIcon: ft,
    allowClear: Ne,
    notFoundContent: ut,
    className: J,
    getPopupContainer: d || te,
    dropdownClassName: ve,
    disabled: ke,
    dropdownStyle: Object.assign(Object.assign({}, nt), {
      zIndex: Y
    }),
    maxCount: Be ? V : void 0,
    tagRender: Be ? I : void 0,
    dropdownRender: Xe,
    onDropdownVisibleChange: Te
  })));
};
process.env.NODE_ENV !== "production" && (yf.displayName = "Select");
const or = /* @__PURE__ */ f.forwardRef(yf), Py = pp(or, "dropdownAlign");
or.SECRET_COMBOBOX_MODE_DO_NOT_USE = pf;
or.Option = Qa;
or.OptGroup = Ya;
or._InternalPanelDoNotUseOrYouWillBeFired = Py;
process.env.NODE_ENV !== "production" && (or.displayName = "Select");
const bf = /* @__PURE__ */ ko({});
function Sf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Sf(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ry() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Sf(e)) && (r && (r += " "), r += t);
  return r;
}
const My = {
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
}, Dt = Math.round;
function bi(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Ll = (e, t, n) => n === 0 ? e : e / 100;
function Fr(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class mr {
  constructor(t) {
    /**
     * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
     */
    Zt(this, "isValid", !0);
    /**
     * Red, R in RGB
     */
    Zt(this, "r", 0);
    /**
     * Green, G in RGB
     */
    Zt(this, "g", 0);
    /**
     * Blue, B in RGB
     */
    Zt(this, "b", 0);
    /**
     * Alpha/Opacity, A in RGBA/HSLA
     */
    Zt(this, "a", 1);
    // HSV privates
    Zt(this, "_h");
    Zt(this, "_s");
    Zt(this, "_l");
    Zt(this, "_v");
    // intermediate variables to calculate HSL/HSV
    Zt(this, "_max");
    Zt(this, "_min");
    Zt(this, "_brightness");
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
        const i = My[r.toLowerCase()];
        i && this.fromHexString(
          // Convert 36 hex to 16 hex
          parseInt(i, 36).toString(16).padStart(6, "0")
        );
      }
    } else if (t instanceof mr)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = Fr(t.r), this.g = Fr(t.g), this.b = Fr(t.b), this.a = typeof t.a == "number" ? Fr(t.a, 1) : 1;
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
      t === 0 ? this._h = 0 : this._h = Dt(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
      r: Dt(i("r")),
      g: Dt(i("g")),
      b: Dt(i("b")),
      a: Dt(i("a") * 100) / 100
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (i) => Dt((this[i] * this.a + n[i] * n.a * (1 - this.a)) / r);
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
      const i = Dt(this.a * 255).toString(16);
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
    const t = this.getHue(), n = Dt(this.getSaturation() * 100), r = Dt(this.getLightness() * 100);
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
    return o[t] = Fr(n, r), o;
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
      const m = Dt(r * 255);
      this.r = m, this.g = m, this.b = m;
    }
    let i = 0, a = 0, s = 0;
    const l = t / 60, c = (1 - Math.abs(2 * r - 1)) * n, u = c * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (i = c, a = u) : l >= 1 && l < 2 ? (i = u, a = c) : l >= 2 && l < 3 ? (a = c, s = u) : l >= 3 && l < 4 ? (a = u, s = c) : l >= 4 && l < 5 ? (i = u, s = c) : l >= 5 && l < 6 && (i = c, s = u);
    const d = r - c / 2;
    this.r = Dt((i + d) * 255), this.g = Dt((a + d) * 255), this.b = Dt((s + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const i = Dt(r * 255);
    if (this.r = i, this.g = i, this.b = i, n <= 0)
      return;
    const a = t / 60, s = Math.floor(a), l = a - s, c = Dt(r * (1 - n) * 255), u = Dt(r * (1 - n * l) * 255), d = Dt(r * (1 - n * (1 - l)) * 255);
    switch (s) {
      case 0:
        this.g = d, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = d;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = d, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = bi(t, Ll);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = bi(t, Ll);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = bi(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Dt(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
const po = 2, kl = 0.16, _y = 0.05, $y = 0.05, Iy = 0.15, Cf = 5, wf = 4, Ty = [{
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
function jl(e, t, n) {
  let r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - po * t : Math.round(e.h) + po * t : r = n ? Math.round(e.h) + po * t : Math.round(e.h) - po * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function zl(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  let r;
  return n ? r = e.s - kl * t : t === wf ? r = e.s + kl : r = e.s + _y * t, r > 1 && (r = 1), n && t === Cf && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Hl(e, t, n) {
  let r;
  return n ? r = e.v + $y * t : r = e.v - Iy * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Ny(e, t = {}) {
  const n = [], r = new mr(e), o = r.toHsv();
  for (let i = Cf; i > 0; i -= 1) {
    const a = new mr({
      h: jl(o, i, !0),
      s: zl(o, i, !0),
      v: Hl(o, i, !0)
    });
    n.push(a);
  }
  n.push(r);
  for (let i = 1; i <= wf; i += 1) {
    const a = new mr({
      h: jl(o, i),
      s: zl(o, i),
      v: Hl(o, i)
    });
    n.push(a);
  }
  return t.theme === "dark" ? Ty.map(({
    index: i,
    amount: a
  }) => new mr(t.backgroundColor || "#141414").mix(n[i], a).toHexString()) : n.map((i) => i.toHexString());
}
const ba = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
ba.primary = ba[5];
function Fy() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Dy(e, t) {
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
const Bl = "data-rc-order", Wl = "data-rc-priority", Ay = "rc-util-key", Sa = /* @__PURE__ */ new Map();
function Ef({
  mark: e
} = {}) {
  return e ? e.startsWith("data-") ? e : `data-${e}` : Ay;
}
function es(e) {
  return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function Vy(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ts(e) {
  return Array.from((Sa.get(e) || e).children).filter((t) => t.tagName === "STYLE");
}
function xf(e, t = {}) {
  if (!Fy())
    return null;
  const {
    csp: n,
    prepend: r,
    priority: o = 0
  } = t, i = Vy(r), a = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(Bl, i), a && o && s.setAttribute(Wl, `${o}`), n != null && n.nonce && (s.nonce = n == null ? void 0 : n.nonce), s.innerHTML = e;
  const l = es(t), {
    firstChild: c
  } = l;
  if (r) {
    if (a) {
      const u = (t.styles || ts(l)).filter((d) => {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Bl)))
          return !1;
        const m = Number(d.getAttribute(Wl) || 0);
        return o >= m;
      });
      if (u.length)
        return l.insertBefore(s, u[u.length - 1].nextSibling), s;
    }
    l.insertBefore(s, c);
  } else
    l.appendChild(s);
  return s;
}
function Ly(e, t = {}) {
  let {
    styles: n
  } = t;
  return n || (n = ts(es(t))), n.find((r) => r.getAttribute(Ef(t)) === e);
}
function ky(e, t) {
  const n = Sa.get(e);
  if (!n || !Dy(document, n)) {
    const r = xf("", t), {
      parentNode: o
    } = r;
    Sa.set(e, o), e.removeChild(r);
  }
}
function jy(e, t, n = {}) {
  var l, c, u;
  const r = es(n), o = ts(r), i = {
    ...n,
    styles: o
  };
  ky(r, i);
  const a = Ly(t, i);
  if (a)
    return (l = i.csp) != null && l.nonce && a.nonce !== ((c = i.csp) == null ? void 0 : c.nonce) && (a.nonce = (u = i.csp) == null ? void 0 : u.nonce), a.innerHTML !== e && (a.innerHTML = e), a;
  const s = xf(e, i);
  return s.setAttribute(Ef(i), t), s;
}
function Of(e) {
  var t;
  return (t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e);
}
function zy(e) {
  return Of(e) instanceof ShadowRoot;
}
function Hy(e) {
  return zy(e) ? Of(e) : null;
}
let Ca = {};
const ns = [], By = (e) => {
  ns.push(e);
};
function Wy(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = ns.reduce((r, o) => o(r ?? "", "warning"), t);
    n && console.error(`Warning: ${n}`);
  }
}
function Uy(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    const n = ns.reduce((r, o) => o(r ?? "", "note"), t);
    n && console.warn(`Note: ${n}`);
  }
}
function qy() {
  Ca = {};
}
function Pf(e, t, n) {
  !t && !Ca[n] && (e(!1, n), Ca[n] = !0);
}
function Xo(e, t) {
  Pf(Wy, e, t);
}
function Ky(e, t) {
  Pf(Uy, e, t);
}
Xo.preMessage = By;
Xo.resetWarned = qy;
Xo.noteOnce = Ky;
function Gy(e) {
  return e.replace(/-(.)/g, (t, n) => n.toUpperCase());
}
function Xy(e, t) {
  Xo(e, `[@ant-design/icons] ${t}`);
}
function Ul(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function ql(e = {}) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Gy(n)] = r;
    }
    return t;
  }, {});
}
function wa(e, t, n) {
  return n ? /* @__PURE__ */ st.createElement(e.tag, {
    key: t,
    ...ql(e.attrs),
    ...n
  }, (e.children || []).map((r, o) => wa(r, `${t}-${e.tag}-${o}`))) : /* @__PURE__ */ st.createElement(e.tag, {
    key: t,
    ...ql(e.attrs)
  }, (e.children || []).map((r, o) => wa(r, `${t}-${e.tag}-${o}`)));
}
function Rf(e) {
  return Ny(e)[0];
}
function Mf(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
const Yy = `
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
`, Qy = (e) => {
  const {
    csp: t,
    prefixCls: n,
    layer: r
  } = On(bf);
  let o = Yy;
  n && (o = o.replace(/anticon/g, n)), r && (o = `@layer ${r} {
${o}
}`), xn(() => {
    const i = e.current, a = Hy(i);
    jy(o, "@ant-design-icons", {
      prepend: !r,
      csp: t,
      attachTo: a
    });
  }, []);
}, jr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Zy({
  primaryColor: e,
  secondaryColor: t
}) {
  jr.primaryColor = e, jr.secondaryColor = t || Rf(e), jr.calculated = !!t;
}
function Jy() {
  return {
    ...jr
  };
}
const Pr = (e) => {
  const {
    icon: t,
    className: n,
    onClick: r,
    style: o,
    primaryColor: i,
    secondaryColor: a,
    ...s
  } = e, l = f.useRef(null);
  let c = jr;
  if (i && (c = {
    primaryColor: i,
    secondaryColor: a || Rf(i)
  }), Qy(l), Xy(Ul(t), `icon should be icon definiton, but got ${t}`), !Ul(t))
    return null;
  let u = t;
  return u && typeof u.icon == "function" && (u = {
    ...u,
    icon: u.icon(c.primaryColor, c.secondaryColor)
  }), wa(u.icon, `svg-${u.name}`, {
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
Pr.displayName = "IconReact";
Pr.getTwoToneColors = Jy;
Pr.setTwoToneColors = Zy;
function _f(e) {
  const [t, n] = Mf(e);
  return Pr.setTwoToneColors({
    primaryColor: t,
    secondaryColor: n
  });
}
function eb() {
  const e = Pr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
function Ea() {
  return Ea = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ea.apply(this, arguments);
}
_f(ba.primary);
const Yo = /* @__PURE__ */ f.forwardRef((e, t) => {
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
    rootClassName: d
  } = f.useContext(bf), m = Ry(d, u, {
    [`${u}-${r.name}`]: !!r.name,
    [`${u}-spin`]: !!o || r.name === "loading"
  }, n);
  let h = a;
  h === void 0 && s && (h = -1);
  const p = i ? {
    msTransform: `rotate(${i}deg)`,
    transform: `rotate(${i}deg)`
  } : void 0, [g, v] = Mf(l);
  return /* @__PURE__ */ f.createElement("span", Ea({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: h,
    onClick: s,
    className: m
  }), /* @__PURE__ */ f.createElement(Pr, {
    icon: r,
    primaryColor: g,
    secondaryColor: v,
    style: p
  }));
});
Yo.getTwoToneColor = eb;
Yo.setTwoToneColor = _f;
process.env.NODE_ENV !== "production" && (Yo.displayName = "AntdIcon");
function xa() {
  return xa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, xa.apply(this, arguments);
}
const tb = (e, t) => /* @__PURE__ */ f.createElement(Yo, xa({}, e, {
  ref: t,
  icon: mf
})), $f = /* @__PURE__ */ f.forwardRef(tb);
process.env.NODE_ENV !== "production" && ($f.displayName = "DownOutlined");
function nb(...e) {
  return e.filter(Boolean).join(" ");
}
function rb(e, t) {
  return t ? { width: "100%" } : typeof e == "number" ? { width: `${e}px` } : typeof e == "string" ? { width: e } : { width: "auto" };
}
function cb({
  className: e,
  width: t,
  fullWidth: n,
  style: r,
  suffixIcon: o,
  disabled: i,
  ...a
}) {
  return /* @__PURE__ */ os(
    or,
    {
      ...a,
      size: "large",
      disabled: i,
      style: { ...rb(t, n), ...r || {} },
      className: nb(
        n ? "rl-block rl-w-full" : "rl-inline-block rl-w-auto",
        e
      ),
      suffixIcon: o ?? /* @__PURE__ */ os($f, {}),
      dropdownMatchSelectWidth: !0
    }
  );
}
export {
  cb as Select
};
//# sourceMappingURL=index.mjs.map
