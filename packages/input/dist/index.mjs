import { jsx as Cl } from "react/jsx-runtime";
import * as g from "react";
import j, { version as Sl, isValidElement as xl, useContext as He, createContext as ra, useRef as le, useLayoutEffect as El, useEffect as Be, forwardRef as Vt, useState as It, useMemo as Mt, Children as wl, cloneElement as Ol, useImperativeHandle as Gi } from "react";
import * as qi from "react-dom";
import Aa from "react-dom";
function $l(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ui = { exports: {} };
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
        var s = arguments[i];
        s && (a = o(a, n(s)));
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
      for (var s in a)
        t.call(a, s) && a[s] && (i = o(i, s));
      return i;
    }
    function o(a, i) {
      return i ? a ? a + " " + i : a + i : a;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Ui);
var Rl = Ui.exports;
const Q = /* @__PURE__ */ $l(Rl);
function _e() {
  return _e = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _e.apply(null, arguments);
}
function Z(e) {
  "@babel/helpers - typeof";
  return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Z(e);
}
var _l = Symbol.for("react.element"), Pl = Symbol.for("react.transitional.element"), Tl = Symbol.for("react.fragment");
function Xi(e) {
  return (
    // Base object type
    e && Z(e) === "object" && // React Element type
    (e.$$typeof === _l || e.$$typeof === Pl) && // React Fragment type
    e.type === Tl
  );
}
function nn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return j.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(nn(n)) : Xi(n) && n.props ? r = r.concat(nn(n.props.children, t)) : r.push(n));
  }), r;
}
var oo = {}, na = [], Fl = function(t) {
  na.push(t);
};
function yr(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = na.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Al(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = na.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Ki() {
  oo = {};
}
function Yi(e, t, r) {
  !t && !oo[r] && (e(!1, r), oo[r] = !0);
}
function we(e, t) {
  Yi(yr, e, t);
}
function Nl(e, t) {
  Yi(Al, e, t);
}
we.preMessage = Fl;
we.resetWarned = Ki;
we.noteOnce = Nl;
function Il(e, t) {
  if (Z(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Z(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qi(e) {
  var t = Il(e, "string");
  return Z(t) == "symbol" ? t : t + "";
}
function O(e, t, r) {
  return (t = Qi(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Na(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Na(Object(r), !0).forEach(function(n) {
      O(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Na(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ia(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Ml(e) {
  return e && Z(e) === "object" && Ia(e.nativeElement) ? e.nativeElement : Ia(e) ? e : null;
}
function Kr(e) {
  var t = Ml(e);
  if (t)
    return t;
  if (e instanceof j.Component) {
    var r;
    return (r = Aa.findDOMNode) === null || r === void 0 ? void 0 : r.call(Aa, e);
  }
  return null;
}
var ao = { exports: {} }, fe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function jl() {
  if (Ma) return fe;
  Ma = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function p(f) {
    if (typeof f == "object" && f !== null) {
      var y = f.$$typeof;
      switch (y) {
        case e:
          switch (f = f.type, f) {
            case r:
            case o:
            case n:
            case l:
            case u:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case i:
                case c:
                case v:
                case d:
                case a:
                  return f;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return fe.ContextConsumer = i, fe.ContextProvider = a, fe.Element = e, fe.ForwardRef = c, fe.Fragment = r, fe.Lazy = v, fe.Memo = d, fe.Portal = t, fe.Profiler = o, fe.StrictMode = n, fe.Suspense = l, fe.SuspenseList = u, fe.isAsyncMode = function() {
    return !1;
  }, fe.isConcurrentMode = function() {
    return !1;
  }, fe.isContextConsumer = function(f) {
    return p(f) === i;
  }, fe.isContextProvider = function(f) {
    return p(f) === a;
  }, fe.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, fe.isForwardRef = function(f) {
    return p(f) === c;
  }, fe.isFragment = function(f) {
    return p(f) === r;
  }, fe.isLazy = function(f) {
    return p(f) === v;
  }, fe.isMemo = function(f) {
    return p(f) === d;
  }, fe.isPortal = function(f) {
    return p(f) === t;
  }, fe.isProfiler = function(f) {
    return p(f) === o;
  }, fe.isStrictMode = function(f) {
    return p(f) === n;
  }, fe.isSuspense = function(f) {
    return p(f) === l;
  }, fe.isSuspenseList = function(f) {
    return p(f) === u;
  }, fe.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === o || f === n || f === l || f === u || f === b || typeof f == "object" && f !== null && (f.$$typeof === v || f.$$typeof === d || f.$$typeof === a || f.$$typeof === i || f.$$typeof === c || f.$$typeof === m || f.getModuleId !== void 0);
  }, fe.typeOf = p, fe;
}
var ve = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja;
function Vl() {
  return ja || (ja = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), m = !1, p = !1, f = !1, y = !1, h = !1, x;
    x = Symbol.for("react.module.reference");
    function E(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === r || H === o || h || H === n || H === l || H === u || y || H === b || m || p || f || typeof H == "object" && H !== null && (H.$$typeof === v || H.$$typeof === d || H.$$typeof === a || H.$$typeof === i || H.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      H.$$typeof === x || H.getModuleId !== void 0));
    }
    function C(H) {
      if (typeof H == "object" && H !== null) {
        var xe = H.$$typeof;
        switch (xe) {
          case e:
            var K = H.type;
            switch (K) {
              case r:
              case o:
              case n:
              case l:
              case u:
                return K;
              default:
                var oe = K && K.$$typeof;
                switch (oe) {
                  case s:
                  case i:
                  case c:
                  case v:
                  case d:
                  case a:
                    return oe;
                  default:
                    return xe;
                }
            }
          case t:
            return xe;
        }
      }
    }
    var $ = i, S = a, w = e, R = c, _ = r, F = v, T = d, A = t, N = o, I = n, V = l, z = u, L = !1, k = !1;
    function U(H) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(H) {
      return k || (k = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(H) {
      return C(H) === i;
    }
    function D(H) {
      return C(H) === a;
    }
    function M(H) {
      return typeof H == "object" && H !== null && H.$$typeof === e;
    }
    function W(H) {
      return C(H) === c;
    }
    function B(H) {
      return C(H) === r;
    }
    function ne(H) {
      return C(H) === v;
    }
    function X(H) {
      return C(H) === d;
    }
    function ie(H) {
      return C(H) === t;
    }
    function ue(H) {
      return C(H) === o;
    }
    function de(H) {
      return C(H) === n;
    }
    function Se(H) {
      return C(H) === l;
    }
    function he(H) {
      return C(H) === u;
    }
    ve.ContextConsumer = $, ve.ContextProvider = S, ve.Element = w, ve.ForwardRef = R, ve.Fragment = _, ve.Lazy = F, ve.Memo = T, ve.Portal = A, ve.Profiler = N, ve.StrictMode = I, ve.Suspense = V, ve.SuspenseList = z, ve.isAsyncMode = U, ve.isConcurrentMode = J, ve.isContextConsumer = q, ve.isContextProvider = D, ve.isElement = M, ve.isForwardRef = W, ve.isFragment = B, ve.isLazy = ne, ve.isMemo = X, ve.isPortal = ie, ve.isProfiler = ue, ve.isStrictMode = de, ve.isSuspense = Se, ve.isSuspenseList = he, ve.isValidElementType = E, ve.typeOf = C;
  }()), ve;
}
process.env.NODE_ENV === "production" ? ao.exports = jl() : ao.exports = Vl();
var Mn = ao.exports;
function oa(e, t, r) {
  var n = g.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var zl = Number(Sl.split(".")[0]), Zi = function(t, r) {
  typeof t == "function" ? t(r) : Z(t) === "object" && t && "current" in t && (t.current = r);
}, or = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    r.forEach(function(i) {
      Zi(i, a);
    });
  };
}, Ji = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return oa(function() {
    return or.apply(void 0, r);
  }, r, function(o, a) {
    return o.length !== a.length || o.every(function(i, s) {
      return i !== a[s];
    });
  });
}, aa = function(t) {
  var r, n;
  if (!t)
    return !1;
  if (es(t) && zl >= 19)
    return !0;
  var o = Mn.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== Mn.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== Mn.ForwardRef);
};
function es(e) {
  return /* @__PURE__ */ xl(e) && !Xi(e);
}
var ia = function(t) {
  if (t && es(t)) {
    var r = t;
    return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
  }
  return null;
}, io = /* @__PURE__ */ g.createContext(null);
function Ll(e) {
  var t = e.children, r = e.onBatchResize, n = g.useRef(0), o = g.useRef([]), a = g.useContext(io), i = g.useCallback(function(s, c, l) {
    n.current += 1;
    var u = n.current;
    o.current.push({
      size: s,
      element: c,
      data: l
    }), Promise.resolve().then(function() {
      u === n.current && (r == null || r(o.current), o.current = []);
    }), a == null || a(s, c, l);
  }, [r, a]);
  return /* @__PURE__ */ g.createElement(io.Provider, {
    value: i
  }, t);
}
var ts = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(o, a) {
      return o[0] === r ? (n = a, !0) : !1;
    }), n;
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
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), o = this.__entries__[n];
        return o && o[1];
      }, t.prototype.set = function(r, n) {
        var o = e(this.__entries__, r);
        ~o ? this.__entries__[o][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, o = e(n, r);
        ~o && n.splice(o, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var o = 0, a = this.__entries__; o < a.length; o++) {
          var i = a[o];
          r.call(n, i[1], i[0]);
        }
      }, t;
    }()
  );
}(), so = typeof window < "u" && typeof document < "u" && window.document === document, on = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Dl = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(on) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Bl = 2;
function Hl(e, t) {
  var r = !1, n = !1, o = 0;
  function a() {
    r && (r = !1, e()), n && s();
  }
  function i() {
    Dl(a);
  }
  function s() {
    var c = Date.now();
    if (r) {
      if (c - o < Bl)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(i, t);
    o = c;
  }
  return s;
}
var Wl = 20, kl = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Gl = typeof MutationObserver < "u", ql = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Hl(this.refresh.bind(this), Wl);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !so || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Gl ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !so || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, o = kl.some(function(a) {
        return !!~n.indexOf(a);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), rs = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var o = n[r];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Zt = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || on;
}, ns = pn(0, 0, 0, 0);
function an(e) {
  return parseFloat(e) || 0;
}
function Va(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, o) {
    var a = e["border-" + o + "-width"];
    return n + an(a);
  }, 0);
}
function Ul(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
    var a = o[n], i = e["padding-" + a];
    r[a] = an(i);
  }
  return r;
}
function Xl(e) {
  var t = e.getBBox();
  return pn(0, 0, t.width, t.height);
}
function Kl(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return ns;
  var n = Zt(e).getComputedStyle(e), o = Ul(n), a = o.left + o.right, i = o.top + o.bottom, s = an(n.width), c = an(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + a) !== t && (s -= Va(n, "left", "right") + a), Math.round(c + i) !== r && (c -= Va(n, "top", "bottom") + i)), !Ql(e)) {
    var l = Math.round(s + a) - t, u = Math.round(c + i) - r;
    Math.abs(l) !== 1 && (s -= l), Math.abs(u) !== 1 && (c -= u);
  }
  return pn(o.left, o.top, s, c);
}
var Yl = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Zt(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Zt(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function Ql(e) {
  return e === Zt(e).document.documentElement;
}
function Zl(e) {
  return so ? Yl(e) ? Xl(e) : Kl(e) : ns;
}
function Jl(e) {
  var t = e.x, r = e.y, n = e.width, o = e.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(a.prototype);
  return rs(i, {
    x: t,
    y: r,
    width: n,
    height: o,
    top: r,
    right: t + n,
    bottom: o + r,
    left: t
  }), i;
}
function pn(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var eu = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = pn(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = Zl(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), tu = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = Jl(r);
      rs(this, { target: t, contentRect: n });
    }
    return e;
  }()
), ru = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new ts(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Zt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new eu(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Zt(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new tu(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), os = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ts(), as = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = ql.getInstance(), n = new ru(t, r, this);
      os.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  as.prototype[e] = function() {
    var t;
    return (t = os.get(this))[e].apply(t, arguments);
  };
});
var nu = function() {
  return typeof on.ResizeObserver < "u" ? on.ResizeObserver : as;
}(), Ct = /* @__PURE__ */ new Map();
function is(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = Ct.get(n)) === null || r === void 0 || r.forEach(function(o) {
      return o(n);
    });
  });
}
var ss = new nu(is);
process.env.NODE_ENV;
process.env.NODE_ENV;
function ou(e, t) {
  Ct.has(e) || (Ct.set(e, /* @__PURE__ */ new Set()), ss.observe(e)), Ct.get(e).add(t);
}
function au(e, t) {
  Ct.has(e) && (Ct.get(e).delete(t), Ct.get(e).size || (ss.unobserve(e), Ct.delete(e)));
}
function Ve(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function za(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Qi(n.key), n);
  }
}
function ze(e, t, r) {
  return t && za(e.prototype, t), r && za(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Cr(e, t) {
  return Cr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Cr(e, t);
}
function Rt(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Cr(e, t);
}
function Sr(e) {
  return Sr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Sr(e);
}
function sa() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sa = function() {
    return !!e;
  })();
}
function re(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function iu(e, t) {
  if (t && (Z(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return re(e);
}
function _t(e) {
  var t = sa();
  return function() {
    var r, n = Sr(e);
    if (t) {
      var o = Sr(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return iu(this, r);
  };
}
var su = /* @__PURE__ */ function(e) {
  Rt(r, e);
  var t = _t(r);
  function r() {
    return Ve(this, r), t.apply(this, arguments);
  }
  return ze(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(g.Component);
function cu(e, t) {
  var r = e.children, n = e.disabled, o = g.useRef(null), a = g.useRef(null), i = g.useContext(io), s = typeof r == "function", c = s ? r(o) : r, l = g.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !s && /* @__PURE__ */ g.isValidElement(c) && aa(c), d = u ? ia(c) : null, v = Ji(d, o), b = function() {
    var y;
    return Kr(o.current) || // Support `nativeElement` format
    (o.current && Z(o.current) === "object" ? Kr((y = o.current) === null || y === void 0 ? void 0 : y.nativeElement) : null) || Kr(a.current);
  };
  g.useImperativeHandle(t, function() {
    return b();
  });
  var m = g.useRef(e);
  m.current = e;
  var p = g.useCallback(function(f) {
    var y = m.current, h = y.onResize, x = y.data, E = f.getBoundingClientRect(), C = E.width, $ = E.height, S = f.offsetWidth, w = f.offsetHeight, R = Math.floor(C), _ = Math.floor($);
    if (l.current.width !== R || l.current.height !== _ || l.current.offsetWidth !== S || l.current.offsetHeight !== w) {
      var F = {
        width: R,
        height: _,
        offsetWidth: S,
        offsetHeight: w
      };
      l.current = F;
      var T = S === Math.round(C) ? C : S, A = w === Math.round($) ? $ : w, N = P(P({}, F), {}, {
        offsetWidth: T,
        offsetHeight: A
      });
      i == null || i(N, f, x), h && Promise.resolve().then(function() {
        h(N, f);
      });
    }
  }, []);
  return g.useEffect(function() {
    var f = b();
    return f && !n && ou(f, p), function() {
      return au(f, p);
    };
  }, [o.current, n]), /* @__PURE__ */ g.createElement(su, {
    ref: a
  }, u ? /* @__PURE__ */ g.cloneElement(c, {
    ref: v
  }) : c);
}
var cs = /* @__PURE__ */ g.forwardRef(cu);
process.env.NODE_ENV !== "production" && (cs.displayName = "SingleObserver");
var lu = "rc-observer-key";
function uu(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : nn(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? yr(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && yr(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(o, a) {
    var i = (o == null ? void 0 : o.key) || "".concat(lu, "-").concat(a);
    return /* @__PURE__ */ g.createElement(cs, _e({}, e, {
      key: i,
      ref: a === 0 ? t : void 0
    }), o);
  });
}
var ca = /* @__PURE__ */ g.forwardRef(uu);
process.env.NODE_ENV !== "production" && (ca.displayName = "ResizeObserver");
ca.Collection = Ll;
function co(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function du(e) {
  if (Array.isArray(e)) return co(e);
}
function ls(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function la(e, t) {
  if (e) {
    if (typeof e == "string") return co(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? co(e, t) : void 0;
  }
}
function fu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y(e) {
  return du(e) || ls(e) || la(e) || fu();
}
var us = function(t) {
  return +setTimeout(t, 16);
}, ds = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (us = function(t) {
  return window.requestAnimationFrame(t);
}, ds = function(t) {
  return window.cancelAnimationFrame(t);
});
var La = 0, mn = /* @__PURE__ */ new Map();
function fs(e) {
  mn.delete(e);
}
var ct = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  La += 1;
  var n = La;
  function o(a) {
    if (a === 0)
      fs(n), t();
    else {
      var i = us(function() {
        o(a - 1);
      });
      mn.set(n, i);
    }
  }
  return o(r), n;
};
ct.cancel = function(e) {
  var t = mn.get(e);
  return fs(e), ds(t);
};
process.env.NODE_ENV !== "production" && (ct.ids = function() {
  return mn;
});
function vs(e) {
  if (Array.isArray(e)) return e;
}
function vu(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        c = !1;
      } else for (; !(c = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw o;
      }
    }
    return s;
  }
}
function gs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return vs(e) || vu(e, t) || la(e, t) || gs();
}
function xr(e) {
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
function Et() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function gu(e, t) {
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
var Da = "data-rc-order", Ba = "data-rc-priority", pu = "rc-util-key", lo = /* @__PURE__ */ new Map();
function ps() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : pu;
}
function hn(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function mu(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ua(e) {
  return Array.from((lo.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ms(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Et())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = mu(n), s = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(Da, i), s && a && c.setAttribute(Ba, "".concat(a)), r != null && r.nonce && (c.nonce = r == null ? void 0 : r.nonce), c.innerHTML = e;
  var l = hn(t), u = l.firstChild;
  if (n) {
    if (s) {
      var d = (t.styles || ua(l)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(Da)))
          return !1;
        var b = Number(v.getAttribute(Ba) || 0);
        return a >= b;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function hs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = hn(t);
  return (t.styles || ua(r)).find(function(n) {
    return n.getAttribute(ps(t)) === e;
  });
}
function bs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = hs(e, t);
  if (r) {
    var n = hn(t);
    n.removeChild(r);
  }
}
function hu(e, t) {
  var r = lo.get(e);
  if (!r || !gu(document, r)) {
    var n = ms("", t), o = n.parentNode;
    lo.set(e, o), e.removeChild(n);
  }
}
function At(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = hn(r), o = ua(n), a = P(P({}, r), {}, {
    styles: o
  });
  hu(n, a);
  var i = hs(t, a);
  if (i) {
    var s, c;
    if ((s = a.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((c = a.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      i.nonce = (l = a.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = ms(e, a);
  return u.setAttribute(ps(a), t), u;
}
function bu(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function We(e, t) {
  if (e == null) return {};
  var r, n, o = bu(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function uo(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(a, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(a);
    if (we(!c, "Warning: There may be circular references"), c)
      return !1;
    if (a === i)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(a);
    var l = s + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(i) || a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++)
        if (!o(a[u], i[u], l))
          return !1;
      return !0;
    }
    if (a && i && Z(a) === "object" && Z(i) === "object") {
      var d = Object.keys(a);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(v) {
        return o(a[v], i[v], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var yu = "%";
function fo(e) {
  return e.join(yu);
}
var Cu = /* @__PURE__ */ function() {
  function e(t) {
    Ve(this, e), O(this, "instanceId", void 0), O(this, "cache", /* @__PURE__ */ new Map()), O(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return ze(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(fo(r));
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
      return this.opUpdate(fo(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), a = n(o);
      a === null ? this.cache.delete(r) : this.cache.set(r, a);
    }
  }]), e;
}(), Jt = "data-token-hash", it = "data-css-hash", Su = "data-cache-path", Ot = "__cssinjs_instance__";
function xu() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(it, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Ot] = o[Ot] || e, o[Ot] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(it, "]"))).forEach(function(o) {
      var a = o.getAttribute(it);
      if (n[a]) {
        if (o[Ot] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        n[a] = !0;
    });
  }
  return new Cu(e);
}
var _r = /* @__PURE__ */ g.createContext({
  hashPriority: "low",
  cache: xu(),
  defaultCache: !0
});
function Eu(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var da = /* @__PURE__ */ function() {
  function e() {
    Ve(this, e), O(this, "cache", void 0), O(this, "keys", void 0), O(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return ze(e, [{
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
      return r.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var c;
          i = (c = i) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(s);
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
            var d = G(l, 2), v = d[1];
            return o.internalGet(u)[1] < v ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = G(a, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var c = this.cache;
      r.forEach(function(l, u) {
        if (u === r.length - 1)
          c.set(l, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var d = c.get(l);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : c.set(l, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(l).map;
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
          return !Eu(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
O(da, "MAX_CACHE_SIZE", 20);
O(da, "MAX_CACHE_OFFSET", 5);
var Ha = 0, ys = /* @__PURE__ */ function() {
  function e(t) {
    Ve(this, e), O(this, "derivatives", void 0), O(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Ha, t.length === 0 && yr(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Ha += 1;
  }
  return ze(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
}(), jn = new da();
function vo(e) {
  var t = Array.isArray(e) ? e : [e];
  return jn.has(t) || jn.set(t, new ys(t)), jn.get(t);
}
var wu = /* @__PURE__ */ new WeakMap(), Vn = {};
function Ou(e, t) {
  for (var r = wu, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(Vn) || r.set(Vn, e()), r.get(Vn);
}
var Wa = /* @__PURE__ */ new WeakMap();
function mr(e) {
  var t = Wa.get(e) || "";
  return t || (Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof ys ? t += n.id : n && Z(n) === "object" ? t += mr(n) : t += n;
  }), t = xr(t), Wa.set(e, t)), t;
}
function ka(e, t) {
  return xr("".concat(t, "_").concat(mr(e)));
}
var go = Et();
function me(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function sn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = P(P({}, n), {}, O(O({}, Jt, t), it, r)), i = Object.keys(a).map(function(s) {
    var c = a[s];
    return c ? "".concat(s, '="').concat(c, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Yr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, $u = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = G(o, 2), i = a[0], s = a[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Cs = function(t, r, n) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var s, c, l = G(i, 2), u = l[0], d = l[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[u])
      a[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (c = n.ignore) !== null && c !== void 0 && c[u])) {
      var v, b = Yr(u, n == null ? void 0 : n.prefix);
      o[b] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[u]) ? "".concat(d, "px") : String(d), a[u] = "var(".concat(b, ")");
    }
  }), [a, $u(o, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, Ga = process.env.NODE_ENV !== "test" && Et() ? g.useLayoutEffect : g.useEffect, Er = function(t, r) {
  var n = g.useRef(!0);
  Ga(function() {
    return t(n.current);
  }, r), Ga(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, qa = function(t, r) {
  Er(function(n) {
    if (!n)
      return t();
  }, r);
}, Ru = P({}, g), Ua = Ru.useInsertionEffect, _u = function(t, r, n) {
  g.useMemo(t, n), Er(function() {
    return r(!0);
  }, n);
}, Pu = Ua ? function(e, t, r) {
  return Ua(function() {
    return e(), t();
  }, r);
} : _u, Tu = P({}, g), Fu = Tu.useInsertionEffect, Au = function(t) {
  var r = [], n = !1;
  function o(a) {
    if (n) {
      process.env.NODE_ENV !== "production" && yr(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(a);
  }
  return g.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, Nu = function() {
  return function(t) {
    t();
  };
}, Iu = typeof Fu < "u" ? Au : Nu;
function Mu() {
  return !1;
}
var po = !1;
function ju() {
  return po;
}
const Vu = process.env.NODE_ENV === "production" ? Mu : ju;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Lr && typeof Lr.webpackHotUpdate == "function") {
    var zu = Lr.webpackHotUpdate;
    Lr.webpackHotUpdate = function() {
      return po = !0, setTimeout(function() {
        po = !1;
      }, 0), zu.apply(void 0, arguments);
    };
  }
}
function fa(e, t, r, n, o) {
  var a = g.useContext(_r), i = a.cache, s = [e].concat(Y(t)), c = fo(s), l = Iu([c]), u = Vu(), d = function(p) {
    i.opUpdate(c, function(f) {
      var y = f || [void 0, void 0], h = G(y, 2), x = h[0], E = x === void 0 ? 0 : x, C = h[1], $ = C;
      process.env.NODE_ENV !== "production" && C && u && (n == null || n($, u), $ = null);
      var S = $ || r(), w = [E, S];
      return p ? p(w) : w;
    });
  };
  g.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var v = i.opGet(c);
  process.env.NODE_ENV !== "production" && !v && (d(), v = i.opGet(c));
  var b = v[1];
  return Pu(function() {
    o == null || o(b);
  }, function(m) {
    return d(function(p) {
      var f = G(p, 2), y = f[0], h = f[1];
      return m && y === 0 && (o == null || o(b)), [y + 1, h];
    }), function() {
      i.opUpdate(c, function(p) {
        var f = p || [], y = G(f, 2), h = y[0], x = h === void 0 ? 0 : h, E = y[1], C = x - 1;
        return C === 0 ? (l(function() {
          (m || !i.opGet(c)) && (n == null || n(E, !1));
        }), null) : [x - 1, E];
      });
    };
  }, [c]), b;
}
var Lu = {}, Du = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Tt = /* @__PURE__ */ new Map();
function Bu(e) {
  Tt.set(e, (Tt.get(e) || 0) + 1);
}
function Hu(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(Jt, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Ot] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var Wu = 0;
function ku(e, t) {
  Tt.set(e, (Tt.get(e) || 0) - 1);
  var r = /* @__PURE__ */ new Set();
  Tt.forEach(function(n, o) {
    n <= 0 && r.add(o);
  }), Tt.size - r.size > Wu && r.forEach(function(n) {
    Hu(n, t), Tt.delete(n);
  });
}
var Gu = function(t, r, n, o) {
  var a = n.getDerivativeToken(t), i = P(P({}, a), r);
  return o && (i = o(i)), i;
}, Ss = "token";
function qu(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = He(_r), o = n.cache.instanceId, a = n.container, i = r.salt, s = i === void 0 ? "" : i, c = r.override, l = c === void 0 ? Lu : c, u = r.formatToken, d = r.getComputedToken, v = r.cssVar, b = Ou(function() {
    return Object.assign.apply(Object, [{}].concat(Y(t)));
  }, t), m = mr(b), p = mr(l), f = v ? mr(v) : "", y = fa(Ss, [s, e.id, m, p, f], function() {
    var h, x = d ? d(b, l, e) : Gu(b, l, e, u), E = P({}, x), C = "";
    if (v) {
      var $ = Cs(x, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), S = G($, 2);
      x = S[0], C = S[1];
    }
    var w = ka(x, s);
    x._tokenKey = w, E._tokenKey = ka(E, s);
    var R = (h = v == null ? void 0 : v.key) !== null && h !== void 0 ? h : w;
    x._themeKey = R, Bu(R);
    var _ = "".concat(Du, "-").concat(xr(w));
    return x._hashId = _, [x, _, E, C, (v == null ? void 0 : v.key) || ""];
  }, function(h) {
    ku(h[0]._themeKey, o);
  }, function(h) {
    var x = G(h, 4), E = x[0], C = x[3];
    if (v && C) {
      var $ = At(C, xr("css-variables-".concat(E._themeKey)), {
        mark: it,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      $[Ot] = o, $.setAttribute(Jt, E._themeKey);
    }
  });
  return y;
}
var Uu = function(t, r, n) {
  var o = G(t, 5), a = o[2], i = o[3], s = o[4], c = n || {}, l = c.plain;
  if (!i)
    return null;
  var u = a._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, b = sn(i, s, u, v, l);
  return [d, u, b];
}, Xu = {
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
}, xs = "comm", Es = "rule", ws = "decl", Ku = "@import", Yu = "@namespace", Qu = "@keyframes", Zu = "@layer", Os = Math.abs, va = String.fromCharCode;
function $s(e) {
  return e.trim();
}
function Qr(e, t, r) {
  return e.replace(t, r);
}
function Ju(e, t, r) {
  return e.indexOf(t, r);
}
function Kt(e, t) {
  return e.charCodeAt(t) | 0;
}
function er(e, t, r) {
  return e.slice(t, r);
}
function gt(e) {
  return e.length;
}
function ed(e) {
  return e.length;
}
function Dr(e, t) {
  return t.push(e), e;
}
var bn = 1, tr = 1, Rs = 0, tt = 0, Fe = 0, ar = "";
function ga(e, t, r, n, o, a, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: bn, column: tr, length: i, return: "", siblings: s };
}
function td() {
  return Fe;
}
function rd() {
  return Fe = tt > 0 ? Kt(ar, --tt) : 0, tr--, Fe === 10 && (tr = 1, bn--), Fe;
}
function st() {
  return Fe = tt < Rs ? Kt(ar, tt++) : 0, tr++, Fe === 10 && (tr = 1, bn++), Fe;
}
function $t() {
  return Kt(ar, tt);
}
function Zr() {
  return tt;
}
function yn(e, t) {
  return er(ar, e, t);
}
function wr(e) {
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
function nd(e) {
  return bn = tr = 1, Rs = gt(ar = e), tt = 0, [];
}
function od(e) {
  return ar = "", e;
}
function zn(e) {
  return $s(yn(tt - 1, mo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ad(e) {
  for (; (Fe = $t()) && Fe < 33; )
    st();
  return wr(e) > 2 || wr(Fe) > 3 ? "" : " ";
}
function id(e, t) {
  for (; --t && st() && !(Fe < 48 || Fe > 102 || Fe > 57 && Fe < 65 || Fe > 70 && Fe < 97); )
    ;
  return yn(e, Zr() + (t < 6 && $t() == 32 && st() == 32));
}
function mo(e) {
  for (; st(); )
    switch (Fe) {
      case e:
        return tt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && mo(Fe);
        break;
      case 40:
        e === 41 && mo(e);
        break;
      case 92:
        st();
        break;
    }
  return tt;
}
function sd(e, t) {
  for (; st() && e + Fe !== 57; )
    if (e + Fe === 84 && $t() === 47)
      break;
  return "/*" + yn(t, tt - 1) + "*" + va(e === 47 ? e : st());
}
function cd(e) {
  for (; !wr($t()); )
    st();
  return yn(e, tt);
}
function ld(e) {
  return od(Jr("", null, null, null, [""], e = nd(e), 0, [0], e));
}
function Jr(e, t, r, n, o, a, i, s, c) {
  for (var l = 0, u = 0, d = i, v = 0, b = 0, m = 0, p = 1, f = 1, y = 1, h = 0, x = "", E = o, C = a, $ = n, S = x; f; )
    switch (m = h, h = st()) {
      case 40:
        if (m != 108 && Kt(S, d - 1) == 58) {
          Ju(S += Qr(zn(h), "&", "&\f"), "&\f", Os(l ? s[l - 1] : 0)) != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        S += zn(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        S += ad(m);
        break;
      case 92:
        S += id(Zr() - 1, 7);
        continue;
      case 47:
        switch ($t()) {
          case 42:
          case 47:
            Dr(ud(sd(st(), Zr()), t, r, c), c), (wr(m || 1) == 5 || wr($t() || 1) == 5) && gt(S) && er(S, -1, void 0) !== " " && (S += " ");
            break;
          default:
            S += "/";
        }
        break;
      case 123 * p:
        s[l++] = gt(S) * y;
      case 125 * p:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            f = 0;
          case 59 + u:
            y == -1 && (S = Qr(S, /\f/g, "")), b > 0 && (gt(S) - d || p === 0 && m === 47) && Dr(b > 32 ? Ka(S + ";", n, r, d - 1, c) : Ka(Qr(S, " ", "") + ";", n, r, d - 2, c), c);
            break;
          case 59:
            S += ";";
          default:
            if (Dr($ = Xa(S, t, r, l, u, o, s, x, E = [], C = [], d, a), a), h === 123)
              if (u === 0)
                Jr(S, t, $, $, E, a, d, s, C);
              else {
                switch (v) {
                  case 99:
                    if (Kt(S, 3) === 110) break;
                  case 108:
                    if (Kt(S, 2) === 97) break;
                  default:
                    u = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Jr(e, $, $, n && Dr(Xa(e, $, $, 0, 0, o, s, x, o, E = [], d, C), C), o, C, d, s, n ? E : C) : Jr(S, $, $, $, [""], C, 0, s, C);
              }
        }
        l = u = b = 0, p = y = 1, x = S = "", d = i;
        break;
      case 58:
        d = 1 + gt(S), b = m;
      default:
        if (p < 1) {
          if (h == 123)
            --p;
          else if (h == 125 && p++ == 0 && rd() == 125)
            continue;
        }
        switch (S += va(h), h * p) {
          case 38:
            y = u > 0 ? 1 : (S += "\f", -1);
            break;
          case 44:
            s[l++] = (gt(S) - 1) * y, y = 1;
            break;
          case 64:
            $t() === 45 && (S += zn(st())), v = $t(), u = d = gt(x = S += cd(Zr())), h++;
            break;
          case 45:
            m === 45 && gt(S) == 2 && (p = 0);
        }
    }
  return a;
}
function Xa(e, t, r, n, o, a, i, s, c, l, u, d) {
  for (var v = o - 1, b = o === 0 ? a : [""], m = ed(b), p = 0, f = 0, y = 0; p < n; ++p)
    for (var h = 0, x = er(e, v + 1, v = Os(f = i[p])), E = e; h < m; ++h)
      (E = $s(f > 0 ? b[h] + " " + x : Qr(x, /&\f/g, b[h]))) && (c[y++] = E);
  return ga(e, t, r, o === 0 ? Es : s, c, l, u, d);
}
function ud(e, t, r, n) {
  return ga(e, t, r, xs, va(td()), er(e, 2, -2), 0, n);
}
function Ka(e, t, r, n, o) {
  return ga(e, t, r, ws, er(e, 0, n), er(e, n + 1, -1), n, o);
}
function ho(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function dd(e, t, r, n) {
  switch (e.type) {
    case Zu:
      if (e.children.length) break;
    case Ku:
    case Yu:
    case ws:
      return e.return = e.return || e.value;
    case xs:
      return "";
    case Qu:
      return e.return = e.value + "{" + ho(e.children, n) + "}";
    case Es:
      if (!gt(e.value = e.props.join(","))) return "";
  }
  return gt(r = ho(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function _s(e, t) {
  var r = t.path, n = t.parentSelectors;
  we(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var fd = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || a.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && _s("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, vd = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && _s("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Ya = "data-ant-cssinjs-cache-path", Ps = "_FILE_STYLE__", Nt, Ts = !0;
function gd() {
  if (!Nt && (Nt = {}, Et())) {
    var e = document.createElement("div");
    e.className = Ya, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = G(a, 2), s = i[0], c = i[1];
      Nt[s] = c;
    });
    var r = document.querySelector("style[".concat(Ya, "]"));
    if (r) {
      var n;
      Ts = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function pd(e) {
  return gd(), !!Nt[e];
}
function md(e) {
  var t = Nt[e], r = null;
  if (t && Et())
    if (Ts)
      r = Ps;
    else {
      var n = document.querySelector("style[".concat(it, '="').concat(Nt[e], '"]'));
      n ? r = n.innerHTML : delete Nt[e];
    }
  return [r, t];
}
var Fs = "_skip_check_", As = "_multi_value_";
function en(e) {
  var t = ho(ld(e), dd);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function hd(e) {
  return Z(e) === "object" && e && (Fs in e || As in e);
}
function Qa(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, a = e.split(",").map(function(i) {
    var s, c = i.trim().split(/\s+/), l = c[0] || "", u = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(Y(c.slice(1))).join(" ");
  });
  return a.join(",");
}
var bd = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, a = n.injectHash, i = n.parentSelectors, s = r.hashId, c = r.layer, l = r.path, u = r.hashPriority, d = r.transformers, v = d === void 0 ? [] : d, b = r.linters, m = b === void 0 ? [] : b, p = "", f = {};
  function y(E) {
    var C = E.getName(s);
    if (!f[C]) {
      var $ = e(E.style, r, {
        root: !1,
        parentSelectors: i
      }), S = G($, 1), w = S[0];
      f[C] = "@keyframes ".concat(E.getName(s)).concat(w);
    }
  }
  function h(E) {
    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function($) {
      Array.isArray($) ? h($, C) : $ && C.push($);
    }), C;
  }
  var x = h(Array.isArray(t) ? t : [t]);
  return x.forEach(function(E) {
    var C = typeof E == "string" && !o ? {} : E;
    if (typeof C == "string")
      p += "".concat(C, `
`);
    else if (C._keyframe)
      y(C);
    else {
      var $ = v.reduce(function(S, w) {
        var R;
        return (w == null || (R = w.visit) === null || R === void 0 ? void 0 : R.call(w, S)) || S;
      }, C);
      Object.keys($).forEach(function(S) {
        var w = $[S];
        if (Z(w) === "object" && w && (S !== "animationName" || !w._keyframe) && !hd(w)) {
          var R = !1, _ = S.trim(), F = !1;
          (o || a) && s ? _.startsWith("@") ? R = !0 : _ === "&" ? _ = Qa("", s, u) : _ = Qa(S, s, u) : o && !s && (_ === "&" || _ === "") && (_ = "", F = !0);
          var T = e(w, r, {
            root: F,
            injectHash: R,
            parentSelectors: [].concat(Y(i), [_])
          }), A = G(T, 2), N = A[0], I = A[1];
          f = P(P({}, f), I), p += "".concat(_).concat(N);
        } else {
          let L = function(k, U) {
            process.env.NODE_ENV !== "production" && (Z(w) !== "object" || !(w != null && w[Fs])) && [fd, vd].concat(Y(m)).forEach(function(D) {
              return D(k, U, {
                path: l,
                hashId: s,
                parentSelectors: i
              });
            });
            var J = k.replace(/[A-Z]/g, function(D) {
              return "-".concat(D.toLowerCase());
            }), q = U;
            !Xu[k] && typeof q == "number" && q !== 0 && (q = "".concat(q, "px")), k === "animationName" && U !== null && U !== void 0 && U._keyframe && (y(U), q = U.getName(s)), p += "".concat(J, ":").concat(q, ";");
          };
          var V, z = (V = w == null ? void 0 : w.value) !== null && V !== void 0 ? V : w;
          Z(w) === "object" && w !== null && w !== void 0 && w[As] && Array.isArray(z) ? z.forEach(function(k) {
            L(S, k);
          }) : L(S, z);
        }
      });
    }
  }), o ? c && (p && (p = "@layer ".concat(c.name, " {").concat(p, "}")), c.dependencies && (f["@layer ".concat(c.name)] = c.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(c.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, f];
};
function Ns(e, t) {
  return xr("".concat(e.join("%")).concat(t));
}
function yd() {
  return null;
}
var Is = "style";
function bo(e, t) {
  var r = e.token, n = e.path, o = e.hashId, a = e.layer, i = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = g.useContext(_r), d = u.autoClear, v = u.mock, b = u.defaultCache, m = u.hashPriority, p = u.container, f = u.ssrInline, y = u.transformers, h = u.linters, x = u.cache, E = u.layer, C = r._tokenKey, $ = [C];
  E && $.push("layer"), $.push.apply($, Y(n));
  var S = go;
  process.env.NODE_ENV !== "production" && v !== void 0 && (S = v === "client");
  var w = fa(
    Is,
    $,
    // Create cache if needed
    function() {
      var A = $.join("|");
      if (pd(A)) {
        var N = md(A), I = G(N, 2), V = I[0], z = I[1];
        if (V)
          return [V, C, z, {}, s, l];
      }
      var L = t(), k = bd(L, {
        hashId: o,
        hashPriority: m,
        layer: E ? a : void 0,
        path: n.join("-"),
        transformers: y,
        linters: h
      }), U = G(k, 2), J = U[0], q = U[1], D = en(J), M = Ns($, D);
      return [D, C, M, q, s, l];
    },
    // Remove cache if no need
    function(A, N) {
      var I = G(A, 3), V = I[2];
      (N || d) && go && bs(V, {
        mark: it,
        attachTo: p
      });
    },
    // Effect: Inject style here
    function(A) {
      var N = G(A, 4), I = N[0];
      N[1];
      var V = N[2], z = N[3];
      if (S && I !== Ps) {
        var L = {
          mark: it,
          prepend: E ? !1 : "queue",
          attachTo: p,
          priority: l
        }, k = typeof i == "function" ? i() : i;
        k && (L.csp = {
          nonce: k
        });
        var U = [], J = [];
        Object.keys(z).forEach(function(D) {
          D.startsWith("@layer") ? U.push(D) : J.push(D);
        }), U.forEach(function(D) {
          At(en(z[D]), "_layer-".concat(D), P(P({}, L), {}, {
            prepend: !0
          }));
        });
        var q = At(I, V, L);
        q[Ot] = x.instanceId, q.setAttribute(Jt, C), process.env.NODE_ENV !== "production" && q.setAttribute(Su, $.join("|")), J.forEach(function(D) {
          At(en(z[D]), "_effect-".concat(D), L);
        });
      }
    }
  ), R = G(w, 3), _ = R[0], F = R[1], T = R[2];
  return function(A) {
    var N;
    return !f || S || !b ? N = /* @__PURE__ */ g.createElement(yd, null) : N = /* @__PURE__ */ g.createElement("style", _e({}, O(O({}, Jt, F), it, T), {
      dangerouslySetInnerHTML: {
        __html: _
      }
    })), /* @__PURE__ */ g.createElement(g.Fragment, null, N, A);
  };
}
var Cd = function(t, r, n) {
  var o = G(t, 6), a = o[0], i = o[1], s = o[2], c = o[3], l = o[4], u = o[5], d = n || {}, v = d.plain;
  if (l)
    return null;
  var b = a, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return b = sn(a, i, s, m, v), c && Object.keys(c).forEach(function(p) {
    if (!r[p]) {
      r[p] = !0;
      var f = en(c[p]), y = sn(f, i, "_effect-".concat(p), m, v);
      p.startsWith("@layer") ? b = y + b : b += y;
    }
  }), [u, s, b];
}, Ms = "cssVar", Sd = function(t, r) {
  var n = t.key, o = t.prefix, a = t.unitless, i = t.ignore, s = t.token, c = t.scope, l = c === void 0 ? "" : c, u = He(_r), d = u.cache.instanceId, v = u.container, b = s._tokenKey, m = [].concat(Y(t.path), [n, l, b]), p = fa(Ms, m, function() {
    var f = r(), y = Cs(f, n, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: l
    }), h = G(y, 2), x = h[0], E = h[1], C = Ns(m, E);
    return [x, E, C, n];
  }, function(f) {
    var y = G(f, 3), h = y[2];
    go && bs(h, {
      mark: it,
      attachTo: v
    });
  }, function(f) {
    var y = G(f, 3), h = y[1], x = y[2];
    if (h) {
      var E = At(h, x, {
        mark: it,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      E[Ot] = d, E.setAttribute(Jt, n);
    }
  });
  return p;
}, xd = function(t, r, n) {
  var o = G(t, 4), a = o[1], i = o[2], s = o[3], c = n || {}, l = c.plain;
  if (!a)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, v = sn(a, s, i, d, l);
  return [u, i, v];
};
O(O(O({}, Is, Cd), Ss, Uu), Ms, xd);
function Wt(e) {
  return e.notSplit = !0, e;
}
Wt(["borderTop", "borderBottom"]), Wt(["borderTop"]), Wt(["borderBottom"]), Wt(["borderLeft", "borderRight"]), Wt(["borderLeft"]), Wt(["borderRight"]);
var pa = /* @__PURE__ */ ra({});
function Ed(e) {
  return vs(e) || ls(e) || la(e) || gs();
}
function pt(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function js(e, t, r, n) {
  if (!t.length)
    return r;
  var o = Ed(t), a = o[0], i = o.slice(1), s;
  return !e && typeof a == "number" ? s = [] : Array.isArray(e) ? s = Y(e) : s = P({}, e), n && r === void 0 && i.length === 1 ? delete s[a][i[0]] : s[a] = js(s[a], i, r, n), s;
}
function ot(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !pt(e, t.slice(0, -1)) ? e : js(e, t, r, n);
}
function wd(e) {
  return Z(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Za(e) {
  return Array.isArray(e) ? [] : {};
}
var Od = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function qt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Za(t[0]);
  return t.forEach(function(o) {
    function a(i, s) {
      var c = new Set(s), l = pt(o, i), u = Array.isArray(l);
      if (u || wd(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = pt(n, i);
          u ? n = ot(n, i, []) : (!d || Z(d) !== "object") && (n = ot(n, i, Za(l))), Od(l).forEach(function(v) {
            a([].concat(Y(i), [v]), c);
          });
        }
      } else
        n = ot(n, i, l);
    }
    a([]);
  }), n;
}
function Vs() {
}
let yt = null;
function $d() {
  yt = null, Ki();
}
let zs = Vs;
process.env.NODE_ENV !== "production" && (zs = (e, t, r) => {
  we(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && $d();
});
const ir = zs, Ls = /* @__PURE__ */ g.createContext({}), lt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = g.useContext(Ls), r = (n, o, a) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const i = yt;
        yt || (yt = {}), yt[e] = yt[e] || [], yt[e].includes(a || "") || yt[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", yt);
      } else
        process.env.NODE_ENV !== "production" && ir(n, e, a);
  };
  return r.deprecated = (n, o, a, i) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = Vs, e;
}, Rd = /* @__PURE__ */ ra(void 0), Xe = "${label} is not a valid ${type}", Cn = {
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
        string: Xe,
        method: Xe,
        array: Xe,
        object: Xe,
        number: Xe,
        date: Xe,
        boolean: Xe,
        integer: Xe,
        float: Xe,
        regexp: Xe,
        email: Xe,
        url: Xe,
        hex: Xe
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
Object.assign({}, Cn.Modal);
let tn = [];
const Ja = () => tn.reduce((e, t) => Object.assign(Object.assign({}, e), t), Cn.Modal);
function _d(e) {
  if (e) {
    const t = Object.assign({}, e);
    return tn.push(t), Ja(), () => {
      tn = tn.filter((r) => r !== t), Ja();
    };
  }
  Object.assign({}, Cn.Modal);
}
const Ds = /* @__PURE__ */ ra(void 0), Bs = "internalMark", Hs = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = lt("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(n === Bs, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  g.useEffect(() => _d(t == null ? void 0 : t.Modal), [t]);
  const o = g.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ g.createElement(Ds.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (Hs.displayName = "LocaleProvider");
const Ws = {
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
}, Or = Object.assign(Object.assign({}, Ws), {
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
}), Ne = Math.round;
function Ln(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = t(n[o] || 0, r[o] || "", o);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const ei = (e, t, r) => r === 0 ? e : e / 100;
function fr(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class Oe {
  constructor(t) {
    O(this, "isValid", !0), O(this, "r", 0), O(this, "g", 0), O(this, "b", 0), O(this, "a", 1), O(this, "_h", void 0), O(this, "_s", void 0), O(this, "_l", void 0), O(this, "_v", void 0), O(this, "_max", void 0), O(this, "_min", void 0), O(this, "_brightness", void 0);
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(a) {
        return n.startsWith(a);
      };
      const n = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : o("rgb") ? this.fromRgbString(n) : o("hsl") ? this.fromHslString(n) : (o("hsv") || o("hsb")) && this.fromHsvString(n);
    } else if (t instanceof Oe)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = fr(t.r), this.g = fr(t.g), this.b = fr(t.b), this.a = typeof t.a == "number" ? fr(t.a, 1) : 1;
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
      t === 0 ? this._h = 0 : this._h = Ne(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const n = this._c(t), o = r / 100, a = (s) => (n[s] - this[s]) * o + this[s], i = {
      r: Ne(a("r")),
      g: Ne(a("g")),
      b: Ne(a("b")),
      a: Ne(a("a") * 100) / 100
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
    const r = this._c(t), n = this.a + r.a * (1 - this.a), o = (a) => Ne((this[a] * this.a + r[a] * r.a * (1 - this.a)) / n);
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
      const a = Ne(this.a * 255).toString(16);
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
    const t = this.getHue(), r = Ne(this.getSaturation() * 100), n = Ne(this.getLightness() * 100);
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
    return o[t] = fr(r, n), o;
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
      const v = Ne(n * 255);
      this.r = v, this.g = v, this.b = v;
    }
    let a = 0, i = 0, s = 0;
    const c = t / 60, l = (1 - Math.abs(2 * n - 1)) * r, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (a = l, i = u) : c >= 1 && c < 2 ? (a = u, i = l) : c >= 2 && c < 3 ? (i = l, s = u) : c >= 3 && c < 4 ? (i = u, s = l) : c >= 4 && c < 5 ? (a = u, s = l) : c >= 5 && c < 6 && (a = l, s = u);
    const d = n - l / 2;
    this.r = Ne((a + d) * 255), this.g = Ne((i + d) * 255), this.b = Ne((s + d) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a: o
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof o == "number" ? o : 1;
    const a = Ne(n * 255);
    if (this.r = a, this.g = a, this.b = a, r <= 0)
      return;
    const i = t / 60, s = Math.floor(i), c = i - s, l = Ne(n * (1 - r) * 255), u = Ne(n * (1 - r * c) * 255), d = Ne(n * (1 - r * (1 - c)) * 255);
    switch (s) {
      case 0:
        this.g = d, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = d;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = d, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const r = Ln(t, ei);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = Ln(t, ei);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = Ln(t, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Ne(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var Br = 2, ti = 0.16, Pd = 0.05, Td = 0.05, Fd = 0.15, ks = 5, Gs = 4, Ad = [{
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
function ri(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Br * t : Math.round(e.h) + Br * t : n = r ? Math.round(e.h) + Br * t : Math.round(e.h) - Br * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function ni(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - ti * t : t === Gs ? n = e.s + ti : n = e.s + Pd * t, n > 1 && (n = 1), r && t === ks && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function oi(e, t, r) {
  var n;
  return r ? n = e.v + Td * t : n = e.v - Fd * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function $r(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = new Oe(e), o = n.toHsv(), a = ks; a > 0; a -= 1) {
    var i = new Oe({
      h: ri(o, a, !0),
      s: ni(o, a, !0),
      v: oi(o, a, !0)
    });
    r.push(i);
  }
  r.push(n);
  for (var s = 1; s <= Gs; s += 1) {
    var c = new Oe({
      h: ri(o, s),
      s: ni(o, s),
      v: oi(o, s)
    });
    r.push(c);
  }
  return t.theme === "dark" ? Ad.map(function(l) {
    var u = l.index, d = l.amount;
    return new Oe(t.backgroundColor || "#141414").mix(r[u], d).toHexString();
  }) : r.map(function(l) {
    return l.toHexString();
  });
}
var Dn = {
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
}, yo = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
yo.primary = yo[5];
var Co = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Co.primary = Co[5];
var So = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
So.primary = So[5];
var xo = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
xo.primary = xo[5];
var Eo = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Eo.primary = Eo[5];
var wo = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
wo.primary = wo[5];
var Oo = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Oo.primary = Oo[5];
var $o = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
$o.primary = $o[5];
var cn = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
cn.primary = cn[5];
var Ro = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Ro.primary = Ro[5];
var _o = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
_o.primary = _o[5];
var Po = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Po.primary = Po[5];
var To = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
To.primary = To[5];
var Bn = {
  red: yo,
  volcano: Co,
  orange: So,
  gold: xo,
  yellow: Eo,
  lime: wo,
  green: Oo,
  cyan: $o,
  blue: cn,
  geekblue: Ro,
  purple: _o,
  magenta: Po,
  grey: To
};
function Nd(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: r
}) {
  const {
    colorSuccess: n,
    colorWarning: o,
    colorError: a,
    colorInfo: i,
    colorPrimary: s,
    colorBgBase: c,
    colorTextBase: l
  } = e, u = t(s), d = t(n), v = t(o), b = t(a), m = t(i), p = r(c, l), f = e.colorLink || e.colorInfo, y = t(f), h = new Oe(b[1]).mix(new Oe(b[3]), 50).toHexString();
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
    colorErrorBg: b[1],
    colorErrorBgHover: b[2],
    colorErrorBgFilledHover: h,
    colorErrorBgActive: b[3],
    colorErrorBorder: b[3],
    colorErrorBorderHover: b[4],
    colorErrorHover: b[5],
    colorError: b[6],
    colorErrorActive: b[7],
    colorErrorTextHover: b[8],
    colorErrorText: b[9],
    colorErrorTextActive: b[10],
    colorWarningBg: v[1],
    colorWarningBgHover: v[2],
    colorWarningBorder: v[3],
    colorWarningBorderHover: v[4],
    colorWarningHover: v[4],
    colorWarning: v[6],
    colorWarningActive: v[7],
    colorWarningTextHover: v[8],
    colorWarningText: v[9],
    colorWarningTextActive: v[10],
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
    colorLinkHover: y[4],
    colorLink: y[6],
    colorLinkActive: y[7],
    colorBgMask: new Oe("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Id = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Md(e) {
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
  }, Id(n));
}
const jd = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function rn(e) {
  return (e + 8) / e;
}
function Vd(e) {
  const t = Array.from({
    length: 10
  }).map((r, n) => {
    const o = n - 1, a = e * Math.pow(Math.E, o / 5), i = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: rn(r)
  }));
}
const zd = (e) => {
  const t = Vd(e), r = t.map((u) => u.size), n = t.map((u) => u.lineHeight), o = r[1], a = r[0], i = r[2], s = n[1], c = n[0], l = n[2];
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
    lineHeight: s,
    lineHeightLG: l,
    lineHeightSM: c,
    fontHeight: Math.round(s * o),
    fontHeightLG: Math.round(l * i),
    fontHeightSM: Math.round(c * a),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function Ld(e) {
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
const Je = (e, t) => new Oe(e).setA(t).toRgbString(), vr = (e, t) => new Oe(e).darken(t).toHexString(), Dd = (e) => {
  const t = $r(e);
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
}, Bd = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: Je(n, 0.88),
    colorTextSecondary: Je(n, 0.65),
    colorTextTertiary: Je(n, 0.45),
    colorTextQuaternary: Je(n, 0.25),
    colorFill: Je(n, 0.15),
    colorFillSecondary: Je(n, 0.06),
    colorFillTertiary: Je(n, 0.04),
    colorFillQuaternary: Je(n, 0.02),
    colorBgSolid: Je(n, 1),
    colorBgSolidHover: Je(n, 0.75),
    colorBgSolidActive: Je(n, 0.95),
    colorBgLayout: vr(r, 4),
    colorBgContainer: vr(r, 0),
    colorBgElevated: vr(r, 0),
    colorBgSpotlight: Je(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: vr(r, 15),
    colorBorderSecondary: vr(r, 6)
  };
};
function Hd(e) {
  Dn.pink = Dn.magenta, Bn.pink = Bn.magenta;
  const t = Object.keys(Ws).map((r) => {
    const n = e[r] === Dn[r] ? Bn[r] : $r(e[r]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, a, i) => (o[`${r}-${i + 1}`] = n[i], o[`${r}${i + 1}`] = n[i], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Nd(e, {
    generateColorPalettes: Dd,
    generateNeutralColorPalettes: Bd
  })), zd(e.fontSize)), Ld(e)), jd(e)), Md(e));
}
const qs = vo(Hd), Fo = {
  token: Or,
  override: {
    override: Or
  },
  hashed: !0
}, Us = /* @__PURE__ */ j.createContext(Fo), ln = "ant", ma = "anticon", Wd = ["outlined", "borderless", "filled", "underlined"], kd = (e, t) => t || (e ? `${ln}-${e}` : ln), je = /* @__PURE__ */ g.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: kd,
  iconPrefixCls: ma
}), {
  Consumer: km
} = je, ai = {};
function ha(e) {
  const t = g.useContext(je), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  } = t, a = t[e];
  return Object.assign(Object.assign({
    classNames: ai,
    styles: ai
  }, a), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  });
}
const Gd = `-ant-${Date.now()}-${Math.random()}`;
function qd(e, t) {
  const r = {}, n = (i, s) => {
    let c = i.clone();
    return c = (s == null ? void 0 : s(c)) || c, c.toRgbString();
  }, o = (i, s) => {
    const c = new Oe(i), l = $r(c.toRgbString());
    r[`${s}-color`] = n(c), r[`${s}-color-disabled`] = l[1], r[`${s}-color-hover`] = l[4], r[`${s}-color-active`] = l[6], r[`${s}-color-outline`] = c.clone().setA(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = l[0], r[`${s}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new Oe(t.primaryColor), s = $r(i.toRgbString());
    s.forEach((l, u) => {
      r[`primary-${u + 1}`] = l;
    }), r["primary-color-deprecated-l-35"] = n(i, (l) => l.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (l) => l.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (l) => l.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (l) => l.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (l) => l.setA(l.a * 0.12));
    const c = new Oe(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(c, (l) => l.setA(l.a * 0.3)), r["primary-color-active-deprecated-d-02"] = n(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function Ud(e, t) {
  const r = qd(e, t);
  Et() ? At(r, `${Gd}-dynamic-theme`) : process.env.NODE_ENV !== "production" && ir(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const jt = /* @__PURE__ */ g.createContext(!1), Xd = ({
  children: e,
  disabled: t
}) => {
  const r = g.useContext(jt);
  return /* @__PURE__ */ g.createElement(jt.Provider, {
    value: t ?? r
  }, e);
}, rr = /* @__PURE__ */ g.createContext(void 0), Kd = ({
  children: e,
  size: t
}) => {
  const r = g.useContext(rr);
  return /* @__PURE__ */ g.createElement(rr.Provider, {
    value: t || r
  }, e);
};
function Yd() {
  const e = He(jt), t = He(rr);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Xs = /* @__PURE__ */ ze(function e() {
  Ve(this, e);
}), Ks = "CALC_UNIT", Qd = new RegExp(Ks, "g");
function Hn(e) {
  return typeof e == "number" ? "".concat(e).concat(Ks) : e;
}
var Zd = /* @__PURE__ */ function(e) {
  Rt(r, e);
  var t = _t(r);
  function r(n, o) {
    var a;
    Ve(this, r), a = t.call(this), O(re(a), "result", ""), O(re(a), "unitlessCssVar", void 0), O(re(a), "lowPriority", void 0);
    var i = Z(n);
    return a.unitlessCssVar = o, n instanceof r ? a.result = "(".concat(n.result, ")") : i === "number" ? a.result = Hn(n) : i === "string" && (a.result = n), a;
  }
  return ze(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Hn(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Hn(o))), this.lowPriority = !0, this;
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
      var a = this, i = o || {}, s = i.unit, c = !0;
      return typeof s == "boolean" ? c = s : Array.from(this.unitlessCssVar).some(function(l) {
        return a.result.includes(l);
      }) && (c = !1), this.result = this.result.replace(Qd, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
}(Xs), Jd = /* @__PURE__ */ function(e) {
  Rt(r, e);
  var t = _t(r);
  function r(n) {
    var o;
    return Ve(this, r), o = t.call(this), O(re(o), "result", 0), n instanceof r ? o.result = n.result : typeof n == "number" && (o.result = n), o;
  }
  return ze(r, [{
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
}(Xs), ef = function(t, r) {
  var n = t === "css" ? Zd : Jd;
  return function(o) {
    return new n(o, r);
  };
}, ii = function(t, r) {
  return "".concat([r, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function mt(e) {
  var t = g.useRef();
  t.current = e;
  var r = g.useCallback(function() {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function Rr(e) {
  var t = g.useRef(!1), r = g.useState(e), n = G(r, 2), o = n[0], a = n[1];
  g.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, c) {
    c && t.current || a(s);
  }
  return [o, i];
}
function Wn(e) {
  return e !== void 0;
}
function Sn(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, a = r.onChange, i = r.postState, s = Rr(function() {
    return Wn(o) ? o : Wn(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), c = G(s, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l, v = i ? i(d) : d, b = mt(a), m = Rr([d]), p = G(m, 2), f = p[0], y = p[1];
  qa(function() {
    var x = f[0];
    l !== x && b(l, x);
  }, [f]), qa(function() {
    Wn(o) || u(o);
  }, [o]);
  var h = mt(function(x, E) {
    u(x, E), y([d], E);
  });
  return [v, h];
}
function si(e, t, r, n) {
  var o = P({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    var a = n.deprecatedTokens;
    a.forEach(function(s) {
      var c = G(s, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && we(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o == null ? void 0 : o[l]);
      }
    });
  }
  var i = P(P({}, r), o);
  return Object.keys(i).forEach(function(s) {
    i[s] === t[s] && delete i[s];
  }), i;
}
var Ys = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Ao = !0;
function rt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Ys)
    return Object.assign.apply(Object, [{}].concat(t));
  Ao = !1;
  var n = {};
  return t.forEach(function(o) {
    if (Z(o) === "object") {
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
  }), Ao = !0, n;
}
var ci = {};
function tf() {
}
var rf = function(t) {
  var r, n = t, o = tf;
  return Ys && typeof Proxy < "u" && (r = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(i, s) {
      if (Ao) {
        var c;
        (c = r) === null || c === void 0 || c.add(s);
      }
      return i[s];
    }
  }), o = function(i, s) {
    var c;
    ci[i] = {
      global: Array.from(r),
      component: P(P({}, (c = ci[i]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: n,
    keys: r,
    flush: o
  };
};
function li(e, t, r) {
  if (typeof r == "function") {
    var n;
    return r(rt(t, (n = t[e]) !== null && n !== void 0 ? n : {}));
  }
  return r ?? {};
}
function nf(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "max(".concat(n.map(function(a) {
        return me(a);
      }).join(","), ")");
    },
    min: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "min(".concat(n.map(function(a) {
        return me(a);
      }).join(","), ")");
    }
  };
}
var of = 1e3 * 60 * 10, af = /* @__PURE__ */ function() {
  function e() {
    Ve(this, e), O(this, "map", /* @__PURE__ */ new Map()), O(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), O(this, "nextID", 0), O(this, "lastAccessBeat", /* @__PURE__ */ new Map()), O(this, "accessBeat", 0);
  }
  return ze(e, [{
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
        return a && Z(a) === "object" ? "obj_".concat(n.getObjectID(a)) : "".concat(Z(a), "_").concat(a);
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
          n - o > of && (r.map.delete(a), r.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
}(), ui = new af();
function sf(e, t) {
  return j.useMemo(function() {
    var r = ui.get(t);
    if (r)
      return r;
    var n = e();
    return ui.set(t, n), n;
  }, t);
}
var cf = function() {
  return {};
};
function lf(e) {
  var t = e.useCSP, r = t === void 0 ? cf : t, n = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function c(v, b, m, p) {
    var f = Array.isArray(v) ? v[0] : v;
    function y(w) {
      return "".concat(String(f)).concat(w.slice(0, 1).toUpperCase()).concat(w.slice(1));
    }
    var h = (p == null ? void 0 : p.unitless) || {}, x = typeof s == "function" ? s(v) : {}, E = P(P({}, x), {}, O({}, y("zIndexPopup"), !0));
    Object.keys(h).forEach(function(w) {
      E[y(w)] = h[w];
    });
    var C = P(P({}, p), {}, {
      unitless: E,
      prefixToken: y
    }), $ = u(v, b, m, C), S = l(f, m, C);
    return function(w) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w, _ = $(w, R), F = G(_, 2), T = F[1], A = S(R), N = G(A, 2), I = N[0], V = N[1];
      return [I, T, V];
    };
  }
  function l(v, b, m) {
    var p = m.unitless, f = m.injectStyle, y = f === void 0 ? !0 : f, h = m.prefixToken, x = m.ignore, E = function(S) {
      var w = S.rootCls, R = S.cssVar, _ = R === void 0 ? {} : R, F = n(), T = F.realToken;
      return Sd({
        path: [v],
        prefix: _.prefix,
        key: _.key,
        unitless: p,
        ignore: x,
        token: T,
        scope: w
      }, function() {
        var A = li(v, T, b), N = si(v, T, A, {
          deprecatedTokens: m == null ? void 0 : m.deprecatedTokens
        });
        return Object.keys(A).forEach(function(I) {
          N[h(I)] = N[I], delete N[I];
        }), N;
      }), null;
    }, C = function(S) {
      var w = n(), R = w.cssVar;
      return [function(_) {
        return y && R ? /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(E, {
          rootCls: S,
          cssVar: R,
          component: v
        }), _) : _;
      }, R == null ? void 0 : R.key];
    };
    return C;
  }
  function u(v, b, m) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, f = Array.isArray(v) ? v : [v, v], y = G(f, 1), h = y[0], x = f.join("-"), E = e.layer || {
      name: "antd"
    };
    return function(C) {
      var $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C, S = n(), w = S.theme, R = S.realToken, _ = S.hashId, F = S.token, T = S.cssVar, A = o(), N = A.rootPrefixCls, I = A.iconPrefixCls, V = r(), z = T ? "css" : "js", L = sf(function() {
        var M = /* @__PURE__ */ new Set();
        return T && Object.keys(p.unitless || {}).forEach(function(W) {
          M.add(Yr(W, T.prefix)), M.add(Yr(W, ii(h, T.prefix)));
        }), ef(z, M);
      }, [z, h, T == null ? void 0 : T.prefix]), k = nf(z), U = k.max, J = k.min, q = {
        theme: w,
        token: F,
        hashId: _,
        nonce: function() {
          return V.nonce;
        },
        clientOnly: p.clientOnly,
        layer: E,
        // antd is always at top of styles
        order: p.order || -999
      };
      typeof a == "function" && bo(P(P({}, q), {}, {
        clientOnly: !1,
        path: ["Shared", N]
      }), function() {
        return a(F, {
          prefix: {
            rootPrefixCls: N,
            iconPrefixCls: I
          },
          csp: V
        });
      });
      var D = bo(P(P({}, q), {}, {
        path: [x, C, I]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var M = rf(F), W = M.token, B = M.flush, ne = li(h, R, m), X = ".".concat(C), ie = si(h, R, ne, {
          deprecatedTokens: p.deprecatedTokens
        });
        T && ne && Z(ne) === "object" && Object.keys(ne).forEach(function(he) {
          ne[he] = "var(".concat(Yr(he, ii(h, T.prefix)), ")");
        });
        var ue = rt(W, {
          componentCls: X,
          prefixCls: C,
          iconCls: ".".concat(I),
          antCls: ".".concat(N),
          calc: L,
          // @ts-ignore
          max: U,
          // @ts-ignore
          min: J
        }, T ? ne : ie), de = b(ue, {
          hashId: _,
          prefixCls: C,
          rootPrefixCls: N,
          iconPrefixCls: I
        });
        B(h, ie);
        var Se = typeof i == "function" ? i(ue, C, $, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : Se, de];
      });
      return [D, _];
    };
  }
  function d(v, b, m) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, f = u(v, b, m, P({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), y = function(x) {
      var E = x.prefixCls, C = x.rootCls, $ = C === void 0 ? E : C;
      return f(E, $), null;
    };
    return process.env.NODE_ENV !== "production" && (y.displayName = "SubStyle_".concat(String(Array.isArray(v) ? v.join(".") : v))), y;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const ba = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], uf = "5.27.5";
function kn(e) {
  return e >= 0 && e <= 255;
}
function gr(e, t) {
  const {
    r,
    g: n,
    b: o,
    a
  } = new Oe(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: s,
    b: c
  } = new Oe(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((r - i * (1 - l)) / l), d = Math.round((n - s * (1 - l)) / l), v = Math.round((o - c * (1 - l)) / l);
    if (kn(u) && kn(d) && kn(v))
      return new Oe({
        r: u,
        g: d,
        b: v,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Oe({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var df = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Qs(e) {
  const {
    override: t
  } = e, r = df(e, ["override"]), n = Object.assign({}, t);
  Object.keys(Or).forEach((v) => {
    delete n[v];
  });
  const o = Object.assign(Object.assign({}, r), n), a = 480, i = 576, s = 768, c = 992, l = 1200, u = 1600;
  if (o.motion === !1) {
    const v = "0s";
    o.motionDurationFast = v, o.motionDurationMid = v, o.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: gr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: gr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: gr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: gr(o.colorPrimaryBg, o.colorBgContainer),
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
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Oe("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Oe("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Oe("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var di = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Zs = {
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
}, ff = {
  motionBase: !0,
  motionUnit: !0
}, vf = {
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
}, Js = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, a = di(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: o
  });
  return i = Qs(i), a && Object.entries(a).forEach(([s, c]) => {
    const {
      theme: l
    } = c, u = di(c, ["theme"]);
    let d = u;
    l && (d = Js(Object.assign(Object.assign({}, i), u), {
      override: u
    }, l)), i[s] = d;
  }), i;
};
function sr() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = j.useContext(Us), a = `${uf}-${t || ""}`, i = r || qs, [s, c, l] = qu(i, [Or, e], {
    salt: a,
    override: n,
    getComputedToken: Js,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Qs,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Zs,
      ignore: ff,
      preserve: vf
    }
  });
  return [i, l, t ? c : "", s, o];
}
const ec = (e, t = !1) => ({
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
}), tc = () => ({
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
}), gf = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), pf = (e) => ({
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
}), mf = (e, t, r, n) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, a = r ? `.${r}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return n !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, s), i), {
      [o]: i
    })
  };
}, hf = (e, t) => ({
  outline: `${me(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), bf = (e, t) => ({
  "&:focus-visible": hf(e)
}), rc = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, tc()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Pr,
  genComponentStyleHook: yf,
  genSubStyleComponent: Cf
} = lf({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = He(je);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, r, n, o] = sr();
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
    } = He(je);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var r;
    const n = pf(e);
    return [n, {
      "&": n
    }, rc((r = t == null ? void 0 : t.prefix.iconPrefixCls) !== null && r !== void 0 ? r : ma)];
  },
  getCommonStyle: mf,
  getCompUnitless: () => Zs
}), Sf = (e, t) => {
  const [r, n] = sr();
  return bo({
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce,
    layer: {
      name: "antd"
    }
  }, () => rc(e));
}, xf = Object.assign({}, g), {
  useId: fi
} = xf, Ef = () => "", wf = typeof fi > "u" ? Ef : fi;
function Of(e, t, r) {
  var n, o;
  const a = lt("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, Fo), {
    hashed: (n = t == null ? void 0 : t.hashed) !== null && n !== void 0 ? n : Fo.hashed,
    cssVar: t == null ? void 0 : t.cssVar
  }) : t, c = wf();
  if (process.env.NODE_ENV !== "production") {
    const l = i.cssVar || s.cssVar, u = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && a(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return oa(() => {
    var l, u;
    if (!e)
      return t;
    const d = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((m) => {
      d[m] = Object.assign(Object.assign({}, d[m]), e.components[m]);
    });
    const v = `css-var-${c.replace(/:/g, "")}`, b = ((l = i.cssVar) !== null && l !== void 0 ? l : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: r == null ? void 0 : r.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || v
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: d,
      cssVar: b
    });
  }, [i, s], (l, u) => l.some((d, v) => {
    const b = u[v];
    return !uo(d, b, !0);
  }));
}
var $f = ["children"], nc = /* @__PURE__ */ g.createContext({});
function Rf(e) {
  var t = e.children, r = We(e, $f);
  return /* @__PURE__ */ g.createElement(nc.Provider, {
    value: r
  }, t);
}
var _f = /* @__PURE__ */ function(e) {
  Rt(r, e);
  var t = _t(r);
  function r() {
    return Ve(this, r), t.apply(this, arguments);
  }
  return ze(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(g.Component);
function Pf(e) {
  var t = g.useReducer(function(s) {
    return s + 1;
  }, 0), r = G(t, 2), n = r[1], o = g.useRef(e), a = mt(function() {
    return o.current;
  }), i = mt(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, n();
  });
  return [a, i];
}
var wt = "none", Hr = "appear", Wr = "enter", kr = "leave", vi = "none", at = "prepare", Ut = "start", Xt = "active", ya = "end", oc = "prepared";
function gi(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function Tf(e, t) {
  var r = {
    animationend: gi("Animation", "AnimationEnd"),
    transitionend: gi("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var Ff = Tf(Et(), typeof window < "u" ? window : {}), ac = {};
if (Et()) {
  var Af = document.createElement("div");
  ac = Af.style;
}
var Gr = {};
function ic(e) {
  if (Gr[e])
    return Gr[e];
  var t = Ff[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in ac)
        return Gr[e] = t[a], Gr[e];
    }
  return "";
}
var sc = ic("animationend"), cc = ic("transitionend"), lc = !!(sc && cc), pi = sc || "animationend", mi = cc || "transitionend";
function hi(e, t) {
  if (!e) return null;
  if (Z(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const Nf = function(e) {
  var t = le();
  function r(o) {
    o && (o.removeEventListener(mi, e), o.removeEventListener(pi, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(mi, e), o.addEventListener(pi, e), t.current = o);
  }
  return g.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
};
var uc = Et() ? El : Be;
const If = function() {
  var e = g.useRef(null);
  function t() {
    ct.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = ct(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = a;
  }
  return g.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var Mf = [at, Ut, Xt, ya], jf = [at, oc], dc = !1, Vf = !0;
function fc(e) {
  return e === Xt || e === ya;
}
const zf = function(e, t, r) {
  var n = Rr(vi), o = G(n, 2), a = o[0], i = o[1], s = If(), c = G(s, 2), l = c[0], u = c[1];
  function d() {
    i(at, !0);
  }
  var v = t ? jf : Mf;
  return uc(function() {
    if (a !== vi && a !== ya) {
      var b = v.indexOf(a), m = v[b + 1], p = r(a);
      p === dc ? i(m, !0) : m && l(function(f) {
        function y() {
          f.isCanceled() || i(m, !0);
        }
        p === !0 ? y() : Promise.resolve(p).then(y);
      });
    }
  }, [e, a]), g.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, a];
};
function Lf(e, t, r, n) {
  var o = n.motionEnter, a = o === void 0 ? !0 : o, i = n.motionAppear, s = i === void 0 ? !0 : i, c = n.motionLeave, l = c === void 0 ? !0 : c, u = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, b = n.onEnterPrepare, m = n.onLeavePrepare, p = n.onAppearStart, f = n.onEnterStart, y = n.onLeaveStart, h = n.onAppearActive, x = n.onEnterActive, E = n.onLeaveActive, C = n.onAppearEnd, $ = n.onEnterEnd, S = n.onLeaveEnd, w = n.onVisibleChanged, R = Rr(), _ = G(R, 2), F = _[0], T = _[1], A = Pf(wt), N = G(A, 2), I = N[0], V = N[1], z = Rr(null), L = G(z, 2), k = L[0], U = L[1], J = I(), q = le(!1), D = le(null);
  function M() {
    return r();
  }
  var W = le(!1);
  function B() {
    V(wt), U(null, !0);
  }
  var ne = mt(function(ye) {
    var Ce = I();
    if (Ce !== wt) {
      var te = M();
      if (!(ye && !ye.deadline && ye.target !== te)) {
        var ee = W.current, ge;
        Ce === Hr && ee ? ge = C == null ? void 0 : C(te, ye) : Ce === Wr && ee ? ge = $ == null ? void 0 : $(te, ye) : Ce === kr && ee && (ge = S == null ? void 0 : S(te, ye)), ee && ge !== !1 && B();
      }
    }
  }), X = Nf(ne), ie = G(X, 1), ue = ie[0], de = function(Ce) {
    switch (Ce) {
      case Hr:
        return O(O(O({}, at, v), Ut, p), Xt, h);
      case Wr:
        return O(O(O({}, at, b), Ut, f), Xt, x);
      case kr:
        return O(O(O({}, at, m), Ut, y), Xt, E);
      default:
        return {};
    }
  }, Se = g.useMemo(function() {
    return de(J);
  }, [J]), he = zf(J, !e, function(ye) {
    if (ye === at) {
      var Ce = Se[at];
      return Ce ? Ce(M()) : dc;
    }
    if (K in Se) {
      var te;
      U(((te = Se[K]) === null || te === void 0 ? void 0 : te.call(Se, M(), null)) || null);
    }
    return K === Xt && J !== wt && (ue(M()), u > 0 && (clearTimeout(D.current), D.current = setTimeout(function() {
      ne({
        deadline: !0
      });
    }, u))), K === oc && B(), Vf;
  }), H = G(he, 2), xe = H[0], K = H[1], oe = fc(K);
  W.current = oe;
  var be = le(null);
  uc(function() {
    if (!(q.current && be.current === t)) {
      T(t);
      var ye = q.current;
      q.current = !0;
      var Ce;
      !ye && t && s && (Ce = Hr), ye && t && a && (Ce = Wr), (ye && !t && l || !ye && d && !t && l) && (Ce = kr);
      var te = de(Ce);
      Ce && (e || te[at]) ? (V(Ce), xe()) : V(wt), be.current = t;
    }
  }, [t]), Be(function() {
    // Cancel appear
    (J === Hr && !s || // Cancel enter
    J === Wr && !a || // Cancel leave
    J === kr && !l) && V(wt);
  }, [s, a, l]), Be(function() {
    return function() {
      q.current = !1, clearTimeout(D.current);
    };
  }, []);
  var se = g.useRef(!1);
  Be(function() {
    F && (se.current = !0), F !== void 0 && J === wt && ((se.current || F) && (w == null || w(F)), se.current = !0);
  }, [F, J]);
  var Pe = k;
  return Se[at] && K === Ut && (Pe = P({
    transition: "none"
  }, Pe)), [J, K, Pe, F ?? t];
}
function Df(e) {
  var t = e;
  Z(e) === "object" && (t = e.transitionSupport);
  function r(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ g.forwardRef(function(o, a) {
    var i = o.visible, s = i === void 0 ? !0 : i, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, v = o.motionName, b = o.leavedClassName, m = o.eventProps, p = g.useContext(nc), f = p.motion, y = r(o, f), h = le(), x = le();
    function E() {
      try {
        return h.current instanceof HTMLElement ? h.current : Kr(x.current);
      } catch {
        return null;
      }
    }
    var C = Lf(y, s, E, o), $ = G(C, 4), S = $[0], w = $[1], R = $[2], _ = $[3], F = g.useRef(_);
    _ && (F.current = !0);
    var T = g.useCallback(function(L) {
      h.current = L, Zi(a, L);
    }, [a]), A, N = P(P({}, m), {}, {
      visible: s
    });
    if (!d)
      A = null;
    else if (S === wt)
      _ ? A = d(P({}, N), T) : !l && F.current && b ? A = d(P(P({}, N), {}, {
        className: b
      }), T) : u || !l && !b ? A = d(P(P({}, N), {}, {
        style: {
          display: "none"
        }
      }), T) : A = null;
    else {
      var I;
      w === at ? I = "prepare" : fc(w) ? I = "active" : w === Ut && (I = "start");
      var V = hi(v, "".concat(S, "-").concat(I));
      A = d(P(P({}, N), {}, {
        className: Q(hi(v, S), O(O({}, V, V && I), v, typeof v == "string")),
        style: R
      }), T);
    }
    if (/* @__PURE__ */ g.isValidElement(A) && aa(A)) {
      var z = ia(A);
      z || (A = /* @__PURE__ */ g.cloneElement(A, {
        ref: T
      }));
    }
    return /* @__PURE__ */ g.createElement(_f, {
      ref: x
    }, A);
  });
  return n.displayName = "CSSMotion", n;
}
const Ca = Df(lc);
var No = "add", Io = "keep", Mo = "remove", Gn = "removed";
function Bf(e) {
  var t;
  return e && Z(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, P(P({}, t), {}, {
    key: String(t.key)
  });
}
function jo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Bf);
}
function Hf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, a = jo(e), i = jo(t);
  a.forEach(function(l) {
    for (var u = !1, d = n; d < o; d += 1) {
      var v = i[d];
      if (v.key === l.key) {
        n < d && (r = r.concat(i.slice(n, d).map(function(b) {
          return P(P({}, b), {}, {
            status: No
          });
        })), n = d), r.push(P(P({}, v), {}, {
          status: Io
        })), n += 1, u = !0;
        break;
      }
    }
    u || r.push(P(P({}, l), {}, {
      status: Mo
    }));
  }), n < o && (r = r.concat(i.slice(n).map(function(l) {
    return P(P({}, l), {}, {
      status: No
    });
  })));
  var s = {};
  r.forEach(function(l) {
    var u = l.key;
    s[u] = (s[u] || 0) + 1;
  });
  var c = Object.keys(s).filter(function(l) {
    return s[l] > 1;
  });
  return c.forEach(function(l) {
    r = r.filter(function(u) {
      var d = u.key, v = u.status;
      return d !== l || v !== Mo;
    }), r.forEach(function(u) {
      u.key === l && (u.status = Io);
    });
  }), r;
}
var Wf = ["component", "children", "onVisibleChanged", "onAllRemoved"], kf = ["status"], Gf = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function qf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ca, r = /* @__PURE__ */ function(n) {
    Rt(a, n);
    var o = _t(a);
    function a() {
      var i;
      Ve(this, a);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return i = o.call.apply(o, [this].concat(c)), O(re(i), "state", {
        keyEntities: []
      }), O(re(i), "removeKey", function(u) {
        i.setState(function(d) {
          var v = d.keyEntities.map(function(b) {
            return b.key !== u ? b : P(P({}, b), {}, {
              status: Gn
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var d = i.state.keyEntities, v = d.filter(function(b) {
            var m = b.status;
            return m !== Gn;
          }).length;
          v === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return ze(a, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, v = l.onVisibleChanged;
        l.onAllRemoved;
        var b = We(l, Wf), m = u || g.Fragment, p = {};
        return Gf.forEach(function(f) {
          p[f] = b[f], delete b[f];
        }), delete b.keys, /* @__PURE__ */ g.createElement(m, b, c.map(function(f, y) {
          var h = f.status, x = We(f, kf), E = h === No || h === Io;
          return /* @__PURE__ */ g.createElement(t, _e({}, p, {
            key: x.key,
            visible: E,
            eventProps: x,
            onVisibleChanged: function($) {
              v == null || v($, {
                key: x.key
              }), $ || s.removeKey(x.key);
            }
          }), function(C, $) {
            return d(P(P({}, C), {}, {
              index: y
            }), $);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var l = s.keys, u = c.keyEntities, d = jo(l), v = Hf(u, d);
        return {
          keyEntities: v.filter(function(b) {
            var m = u.find(function(p) {
              var f = p.key;
              return b.key === f;
            });
            return !(m && m.status === Gn && b.status === Mo);
          })
        };
      }
    }]), a;
  }(g.Component);
  return O(r, "defaultProps", {
    component: "div"
  }), r;
}
qf(lc);
const Vo = /* @__PURE__ */ g.createContext(!0);
process.env.NODE_ENV !== "production" && (Vo.displayName = "MotionCacheContext");
function Uf(e) {
  const t = g.useContext(Vo), {
    children: r
  } = e, [, n] = sr(), {
    motion: o
  } = n, a = g.useRef(!1);
  return a.current || (a.current = t !== o), a.current ? /* @__PURE__ */ g.createElement(Vo.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement(Rf, {
    motion: o
  }, r)) : r;
}
const vc = /* @__PURE__ */ g.memo(({
  dropdownMatchSelectWidth: e
}) => (lt("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (vc.displayName = "PropWarning");
const Xf = process.env.NODE_ENV !== "production" ? vc : () => null;
var Kf = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let zo = !1;
process.env.NODE_ENV;
const Yf = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let gc;
function Qf() {
  return gc || ln;
}
function Zf(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Jf = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: o
  } = e;
  t !== void 0 && (gc = t), n && Zf(n) && (process.env.NODE_ENV !== "production" && ir(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Ud(Qf(), n));
}, ev = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    form: i,
    locale: s,
    componentSize: c,
    direction: l,
    space: u,
    splitter: d,
    virtual: v,
    dropdownMatchSelectWidth: b,
    popupMatchSelectWidth: m,
    popupOverflow: p,
    legacyLocale: f,
    parentContext: y,
    iconPrefixCls: h,
    theme: x,
    componentDisabled: E,
    segmented: C,
    statistic: $,
    spin: S,
    calendar: w,
    carousel: R,
    cascader: _,
    collapse: F,
    typography: T,
    checkbox: A,
    descriptions: N,
    divider: I,
    drawer: V,
    skeleton: z,
    steps: L,
    image: k,
    layout: U,
    list: J,
    mentions: q,
    modal: D,
    progress: M,
    result: W,
    slider: B,
    breadcrumb: ne,
    menu: X,
    pagination: ie,
    input: ue,
    textArea: de,
    empty: Se,
    badge: he,
    radio: H,
    rate: xe,
    switch: K,
    transfer: oe,
    avatar: be,
    message: se,
    tag: Pe,
    table: ye,
    card: Ce,
    tabs: te,
    timeline: ee,
    timePicker: ge,
    upload: Ze,
    notification: ke,
    tree: Ge,
    colorPicker: qe,
    datePicker: ut,
    rangePicker: Lt,
    flex: Dt,
    wave: Ee,
    dropdown: ce,
    warning: Ue,
    tour: dt,
    tooltip: $e,
    popover: nt,
    popconfirm: dr,
    floatButton: ul,
    floatButtonGroup: dl,
    variant: fl,
    inputNumber: vl,
    treeSelect: gl
  } = e, Ra = g.useCallback((Te, Me) => {
    const {
      prefixCls: ft
    } = e;
    if (Me)
      return Me;
    const vt = ft || y.getPrefixCls("");
    return Te ? `${vt}-${Te}` : vt;
  }, [y.getPrefixCls, e.prefixCls]), Mr = h || y.iconPrefixCls || ma, jr = r || y.csp;
  Sf(Mr, jr);
  const Vr = Of(x, y.theme, {
    prefixCls: Ra("")
  });
  process.env.NODE_ENV !== "production" && (zo = zo || !!Vr);
  const Nn = {
    csp: jr,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    locale: s || f,
    direction: l,
    space: u,
    splitter: d,
    virtual: v,
    popupMatchSelectWidth: m ?? b,
    popupOverflow: p,
    getPrefixCls: Ra,
    iconPrefixCls: Mr,
    theme: Vr,
    segmented: C,
    statistic: $,
    spin: S,
    calendar: w,
    carousel: R,
    cascader: _,
    collapse: F,
    typography: T,
    checkbox: A,
    descriptions: N,
    divider: I,
    drawer: V,
    skeleton: z,
    steps: L,
    image: k,
    input: ue,
    textArea: de,
    layout: U,
    list: J,
    mentions: q,
    modal: D,
    progress: M,
    result: W,
    slider: B,
    breadcrumb: ne,
    menu: X,
    pagination: ie,
    empty: Se,
    badge: he,
    radio: H,
    rate: xe,
    switch: K,
    transfer: oe,
    avatar: be,
    message: se,
    tag: Pe,
    table: ye,
    card: Ce,
    tabs: te,
    timeline: ee,
    timePicker: ge,
    upload: Ze,
    notification: ke,
    tree: Ge,
    colorPicker: qe,
    datePicker: ut,
    rangePicker: Lt,
    flex: Dt,
    wave: Ee,
    dropdown: ce,
    warning: Ue,
    tour: dt,
    tooltip: $e,
    popover: nt,
    popconfirm: dr,
    floatButton: ul,
    floatButtonGroup: dl,
    variant: fl,
    inputNumber: vl,
    treeSelect: gl
  };
  process.env.NODE_ENV !== "production" && lt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const Bt = Object.assign({}, y);
  Object.keys(Nn).forEach((Te) => {
    Nn[Te] !== void 0 && (Bt[Te] = Nn[Te]);
  }), Yf.forEach((Te) => {
    const Me = e[Te];
    Me && (Bt[Te] = Me);
  }), typeof n < "u" && (Bt.button = Object.assign({
    autoInsertSpace: n
  }, Bt.button));
  const Ht = oa(() => Bt, Bt, (Te, Me) => {
    const ft = Object.keys(Te), vt = Object.keys(Me);
    return ft.length !== vt.length || ft.some((zr) => Te[zr] !== Me[zr]);
  }), {
    layer: _a
  } = g.useContext(_r), pl = g.useMemo(() => ({
    prefixCls: Mr,
    csp: jr,
    layer: _a ? "antd" : void 0
  }), [Mr, jr, _a]);
  let Ie = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Xf, {
    dropdownMatchSelectWidth: b
  }), t);
  const Pa = g.useMemo(() => {
    var Te, Me, ft, vt;
    return qt(((Te = Cn.Form) === null || Te === void 0 ? void 0 : Te.defaultValidateMessages) || {}, ((ft = (Me = Ht.locale) === null || Me === void 0 ? void 0 : Me.Form) === null || ft === void 0 ? void 0 : ft.defaultValidateMessages) || {}, ((vt = Ht.form) === null || vt === void 0 ? void 0 : vt.validateMessages) || {}, (i == null ? void 0 : i.validateMessages) || {});
  }, [Ht, i == null ? void 0 : i.validateMessages]);
  Object.keys(Pa).length > 0 && (Ie = /* @__PURE__ */ g.createElement(Rd.Provider, {
    value: Pa
  }, Ie)), s && (Ie = /* @__PURE__ */ g.createElement(Hs, {
    locale: s,
    _ANT_MARK__: Bs
  }, Ie)), Ie = /* @__PURE__ */ g.createElement(pa.Provider, {
    value: pl
  }, Ie), c && (Ie = /* @__PURE__ */ g.createElement(Kd, {
    size: c
  }, Ie)), Ie = /* @__PURE__ */ g.createElement(Uf, null, Ie);
  const ml = g.useMemo(() => {
    const Te = Vr || {}, {
      algorithm: Me,
      token: ft,
      components: vt,
      cssVar: zr
    } = Te, hl = Kf(Te, ["algorithm", "token", "components", "cssVar"]), Ta = Me && (!Array.isArray(Me) || Me.length > 0) ? vo(Me) : qs, In = {};
    Object.entries(vt || {}).forEach(([bl, yl]) => {
      const bt = Object.assign({}, yl);
      "algorithm" in bt && (bt.algorithm === !0 ? bt.theme = Ta : (Array.isArray(bt.algorithm) || typeof bt.algorithm == "function") && (bt.theme = vo(bt.algorithm)), delete bt.algorithm), In[bl] = bt;
    });
    const Fa = Object.assign(Object.assign({}, Or), ft);
    return Object.assign(Object.assign({}, hl), {
      theme: Ta,
      token: Fa,
      components: In,
      override: Object.assign({
        override: Fa
      }, In),
      cssVar: zr
    });
  }, [Vr]);
  return x && (Ie = /* @__PURE__ */ g.createElement(Us.Provider, {
    value: ml
  }, Ie)), Ht.warning && (Ie = /* @__PURE__ */ g.createElement(Ls.Provider, {
    value: Ht.warning
  }, Ie)), E !== void 0 && (Ie = /* @__PURE__ */ g.createElement(Xd, {
    disabled: E
  }, Ie)), /* @__PURE__ */ g.createElement(je.Provider, {
    value: Ht
  }, Ie);
}, cr = (e) => {
  const t = g.useContext(je), r = g.useContext(Ds);
  return /* @__PURE__ */ g.createElement(ev, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
cr.ConfigContext = je;
cr.SizeContext = rr;
cr.config = Jf;
cr.useConfig = Yd;
Object.defineProperty(cr, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && ir(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), rr)
});
process.env.NODE_ENV !== "production" && (cr.displayName = "ConfigProvider");
function pc(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function tv(e) {
  return pc(e) instanceof ShadowRoot;
}
function rv(e) {
  return tv(e) ? pc(e) : null;
}
function nv(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function ov(e, t) {
  we(e, "[@ant-design/icons] ".concat(t));
}
function bi(e) {
  return Z(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Z(e.icon) === "object" || typeof e.icon == "function");
}
function yi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[nv(r)] = n;
    }
    return t;
  }, {});
}
function Lo(e, t, r) {
  return r ? /* @__PURE__ */ j.createElement(e.tag, P(P({
    key: t
  }, yi(e.attrs)), r), (e.children || []).map(function(n, o) {
    return Lo(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ j.createElement(e.tag, P({
    key: t
  }, yi(e.attrs)), (e.children || []).map(function(n, o) {
    return Lo(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function mc(e) {
  return $r(e)[0];
}
function hc(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var av = `
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
`, iv = function(t) {
  var r = He(pa), n = r.csp, o = r.prefixCls, a = r.layer, i = av;
  o && (i = i.replace(/anticon/g, o)), a && (i = "@layer ".concat(a, ` {
`).concat(i, `
}`)), Be(function() {
    var s = t.current, c = rv(s);
    At(i, "@ant-design-icons", {
      prepend: !a,
      csp: n,
      attachTo: c
    });
  }, []);
}, sv = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], hr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function cv(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  hr.primaryColor = t, hr.secondaryColor = r || mc(t), hr.calculated = !!r;
}
function lv() {
  return P({}, hr);
}
var lr = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, a = t.style, i = t.primaryColor, s = t.secondaryColor, c = We(t, sv), l = g.useRef(), u = hr;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: s || mc(i)
  }), iv(l), ov(bi(r), "icon should be icon definiton, but got ".concat(r)), !bi(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = P(P({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), Lo(d.icon, "svg-".concat(d.name), P(P({
    className: n,
    onClick: o,
    style: a,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: l
  }));
};
lr.displayName = "IconReact";
lr.getTwoToneColors = lv;
lr.setTwoToneColors = cv;
function bc(e) {
  var t = hc(e), r = G(t, 2), n = r[0], o = r[1];
  return lr.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function uv() {
  var e = lr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var dv = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
bc(cn.primary);
var Pt = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, s = e.onClick, c = e.twoToneColor, l = We(e, dv), u = g.useContext(pa), d = u.prefixCls, v = d === void 0 ? "anticon" : d, b = u.rootClassName, m = Q(b, v, O(O({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!o || n.name === "loading"), r), p = i;
  p === void 0 && s && (p = -1);
  var f = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, y = hc(c), h = G(y, 2), x = h[0], E = h[1];
  return /* @__PURE__ */ g.createElement("span", _e({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: t,
    tabIndex: p,
    onClick: s,
    className: m
  }), /* @__PURE__ */ g.createElement(lr, {
    icon: n,
    primaryColor: x,
    secondaryColor: E,
    style: f
  }));
});
Pt.displayName = "AntdIcon";
Pt.getTwoToneColor = uv;
Pt.setTwoToneColor = bc;
var fv = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, vv = function(t, r) {
  return /* @__PURE__ */ g.createElement(Pt, _e({}, t, {
    ref: r,
    icon: fv
  }));
}, yc = /* @__PURE__ */ g.forwardRef(vv);
process.env.NODE_ENV !== "production" && (yc.displayName = "CloseCircleFilled");
var gv = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, pv = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, mv = "".concat(gv, " ").concat(pv).split(/[\s\n]+/), hv = "aria-", bv = "data-";
function Ci(e, t) {
  return e.indexOf(t) === 0;
}
function yv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r;
  t === !1 ? r = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? r = {
    aria: !0
  } : r = P({}, t);
  var n = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (r.aria && (o === "role" || Ci(o, hv)) || // Data
    r.data && Ci(o, bv) || // Attr
    r.attr && mv.includes(o)) && (n[o] = e[o]);
  }), n;
}
function Cv(e) {
  return e && /* @__PURE__ */ j.isValidElement(e) && e.type === j.Fragment;
}
const Sv = (e, t, r) => /* @__PURE__ */ j.isValidElement(e) ? /* @__PURE__ */ j.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function un(e, t) {
  return Sv(e, e, t);
}
const Cc = (e) => {
  const [, , , , t] = sr();
  return t ? `${e}-css-var` : "";
};
var xv = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Ev = function(t, r) {
  return /* @__PURE__ */ g.createElement(Pt, _e({}, t, {
    ref: r,
    icon: xv
  }));
}, Sc = /* @__PURE__ */ g.forwardRef(Ev);
process.env.NODE_ENV !== "production" && (Sc.displayName = "LoadingOutlined");
function xc(e, t) {
  this.v = e, this.k = t;
}
function Le(e, t, r, n) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch {
    o = 0;
  }
  Le = function(i, s, c, l) {
    function u(d, v) {
      Le(i, d, function(b) {
        return this._invoke(d, v, b);
      });
    }
    s ? o ? o(i, s, {
      value: c,
      enumerable: !l,
      configurable: !l,
      writable: !l
    }) : i[s] = c : (u("next", 0), u("throw", 1), u("return", 2));
  }, Le(e, t, r, n);
}
function Sa() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e, t, r = typeof Symbol == "function" ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
  function a(b, m, p, f) {
    var y = m && m.prototype instanceof s ? m : s, h = Object.create(y.prototype);
    return Le(h, "_invoke", function(x, E, C) {
      var $, S, w, R = 0, _ = C || [], F = !1, T = {
        p: 0,
        n: 0,
        v: e,
        a: A,
        f: A.bind(e, 4),
        d: function(I, V) {
          return $ = I, S = 0, w = e, T.n = V, i;
        }
      };
      function A(N, I) {
        for (S = N, w = I, t = 0; !F && R && !V && t < _.length; t++) {
          var V, z = _[t], L = T.p, k = z[2];
          N > 3 ? (V = k === I) && (w = z[(S = z[4]) ? 5 : (S = 3, 3)], z[4] = z[5] = e) : z[0] <= L && ((V = N < 2 && L < z[1]) ? (S = 0, T.v = I, T.n = z[1]) : L < k && (V = N < 3 || z[0] > I || I > k) && (z[4] = N, z[5] = I, T.n = k, S = 0));
        }
        if (V || N > 1) return i;
        throw F = !0, I;
      }
      return function(N, I, V) {
        if (R > 1) throw TypeError("Generator is already running");
        for (F && I === 1 && A(I, V), S = I, w = V; (t = S < 2 ? e : w) || !F; ) {
          $ || (S ? S < 3 ? (S > 1 && (T.n = -1), A(S, w)) : T.n = w : T.v = w);
          try {
            if (R = 2, $) {
              if (S || (N = "next"), t = $[N]) {
                if (!(t = t.call($, w))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                w = t.value, S < 2 && (S = 0);
              } else S === 1 && (t = $.return) && t.call($), S < 2 && (w = TypeError("The iterator does not provide a '" + N + "' method"), S = 1);
              $ = e;
            } else if ((t = (F = T.n < 0) ? w : x.call(E, T)) !== i) break;
          } catch (z) {
            $ = e, S = 1, w = z;
          } finally {
            R = 1;
          }
        }
        return {
          value: t,
          done: F
        };
      };
    }(b, p, f), !0), h;
  }
  var i = {};
  function s() {
  }
  function c() {
  }
  function l() {
  }
  t = Object.getPrototypeOf;
  var u = [][n] ? t(t([][n]())) : (Le(t = {}, n, function() {
    return this;
  }), t), d = l.prototype = s.prototype = Object.create(u);
  function v(b) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(b, l) : (b.__proto__ = l, Le(b, o, "GeneratorFunction")), b.prototype = Object.create(d), b;
  }
  return c.prototype = l, Le(d, "constructor", l), Le(l, "constructor", c), c.displayName = "GeneratorFunction", Le(l, o, "GeneratorFunction"), Le(d), Le(d, o, "Generator"), Le(d, n, function() {
    return this;
  }), Le(d, "toString", function() {
    return "[object Generator]";
  }), (Sa = function() {
    return {
      w: a,
      m: v
    };
  })();
}
function dn(e, t) {
  function r(o, a, i, s) {
    try {
      var c = e[o](a), l = c.value;
      return l instanceof xc ? t.resolve(l.v).then(function(u) {
        r("next", u, i, s);
      }, function(u) {
        r("throw", u, i, s);
      }) : t.resolve(l).then(function(u) {
        c.value = u, i(c);
      }, function(u) {
        return r("throw", u, i, s);
      });
    } catch (u) {
      s(u);
    }
  }
  var n;
  this.next || (Le(dn.prototype), Le(dn.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), Le(this, "_invoke", function(o, a, i) {
    function s() {
      return new t(function(c, l) {
        r(o, i, c, l);
      });
    }
    return n = n ? n.then(s, s) : s();
  }, !0);
}
function Ec(e, t, r, n, o) {
  return new dn(Sa().w(e, t, r, n), o || Promise);
}
function wv(e, t, r, n, o) {
  var a = Ec(e, t, r, n, o);
  return a.next().then(function(i) {
    return i.done ? i.value : a.next();
  });
}
function Ov(e) {
  var t = Object(e), r = [];
  for (var n in t) r.unshift(n);
  return function o() {
    for (; r.length; ) if ((n = r.pop()) in t) return o.value = n, o.done = !1, o;
    return o.done = !0, o;
  };
}
function Si(e) {
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
  throw new TypeError(Z(e) + " is not iterable");
}
function De() {
  var e = Sa(), t = e.m(De), r = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function n(i) {
    var s = typeof i == "function" && i.constructor;
    return !!s && (s === r || (s.displayName || s.name) === "GeneratorFunction");
  }
  var o = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function a(i) {
    var s, c;
    return function(l) {
      s || (s = {
        stop: function() {
          return c(l.a, 2);
        },
        catch: function() {
          return l.v;
        },
        abrupt: function(d, v) {
          return c(l.a, o[d], v);
        },
        delegateYield: function(d, v, b) {
          return s.resultName = v, c(l.d, Si(d), b);
        },
        finish: function(d) {
          return c(l.f, d);
        }
      }, c = function(d, v, b) {
        l.p = s.prev, l.n = s.next;
        try {
          return d(v, b);
        } finally {
          s.next = l.n;
        }
      }), s.resultName && (s[s.resultName] = l.v, s.resultName = void 0), s.sent = l.v, s.next = l.n;
      try {
        return i.call(this, s);
      } finally {
        l.p = s.prev, l.n = s.next;
      }
    };
  }
  return (De = function() {
    return {
      wrap: function(c, l, u, d) {
        return e.w(a(c), l, u, d && d.reverse());
      },
      isGeneratorFunction: n,
      mark: e.m,
      awrap: function(c, l) {
        return new xc(c, l);
      },
      AsyncIterator: dn,
      async: function(c, l, u, d, v) {
        return (n(l) ? Ec : wv)(a(c), l, u, d, v);
      },
      keys: Ov,
      values: Si
    };
  })();
}
function xi(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i), c = s.value;
  } catch (l) {
    return void r(l);
  }
  s.done ? t(c) : Promise.resolve(c).then(n, o);
}
function zt(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var a = e.apply(t, r);
      function i(c) {
        xi(a, n, o, i, s, "next", c);
      }
      function s(c) {
        xi(a, n, o, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var Tr = P({}, qi), $v = Tr.version, qn = Tr.render, Rv = Tr.unmountComponentAtNode, xn;
try {
  var _v = Number(($v || "").split(".")[0]);
  _v >= 18 && (xn = Tr.createRoot);
} catch {
}
function Ei(e) {
  var t = Tr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Z(t) === "object" && (t.usingClientEntryPoint = e);
}
var fn = "__rc_react_root__";
function Pv(e, t) {
  Ei(!0);
  var r = t[fn] || xn(t);
  Ei(!1), r.render(e), t[fn] = r;
}
function Tv(e, t) {
  qn == null || qn(e, t);
}
function Fv(e, t) {
  if (xn) {
    Pv(e, t);
    return;
  }
  Tv(e, t);
}
function Av(e) {
  return Do.apply(this, arguments);
}
function Do() {
  return Do = zt(/* @__PURE__ */ De().mark(function e(t) {
    return De().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[fn]) === null || o === void 0 || o.unmount(), delete t[fn];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Do.apply(this, arguments);
}
function Nv(e) {
  Rv(e);
}
function Iv(e) {
  return Bo.apply(this, arguments);
}
function Bo() {
  return Bo = zt(/* @__PURE__ */ De().mark(function e(t) {
    return De().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (xn === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", Av(t));
        case 2:
          Nv(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), Bo.apply(this, arguments);
}
const Mv = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const r = Number.parseInt(g.version.split(".")[0], 10), n = Object.keys(qi);
    process.env.NODE_ENV !== "production" && ir(r < 19 || n.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return Fv(e, t), () => Iv(t);
};
let jv = Mv;
function Vv(e) {
  return jv;
}
function xa(e, t) {
  var r = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
const zv = function(e) {
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
}, Lv = (e) => {
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
}, Dv = yf("Wave", Lv), wc = `${ln}-wave-target`;
function Bv(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent" && e !== "canvastext";
}
function Hv(e) {
  var t;
  const {
    borderTopColor: r,
    borderColor: n,
    backgroundColor: o
  } = getComputedStyle(e);
  return (t = [r, n, o].find(Bv)) !== null && t !== void 0 ? t : null;
}
function Un(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Wv = (e) => {
  const {
    className: t,
    target: r,
    component: n,
    registerUnmount: o
  } = e, a = g.useRef(null), i = g.useRef(null);
  g.useEffect(() => {
    i.current = o();
  }, []);
  const [s, c] = g.useState(null), [l, u] = g.useState([]), [d, v] = g.useState(0), [b, m] = g.useState(0), [p, f] = g.useState(0), [y, h] = g.useState(0), [x, E] = g.useState(!1), C = {
    left: d,
    top: b,
    width: p,
    height: y,
    borderRadius: l.map((w) => `${w}px`).join(" ")
  };
  s && (C["--wave-color"] = s);
  function $() {
    const w = getComputedStyle(r);
    c(Hv(r));
    const R = w.position === "static", {
      borderLeftWidth: _,
      borderTopWidth: F
    } = w;
    v(R ? r.offsetLeft : Un(-Number.parseFloat(_))), m(R ? r.offsetTop : Un(-Number.parseFloat(F))), f(r.offsetWidth), h(r.offsetHeight);
    const {
      borderTopLeftRadius: T,
      borderTopRightRadius: A,
      borderBottomLeftRadius: N,
      borderBottomRightRadius: I
    } = w;
    u([T, A, I, N].map((V) => Un(Number.parseFloat(V))));
  }
  if (g.useEffect(() => {
    if (r) {
      const w = ct(() => {
        $(), E(!0);
      });
      let R;
      return typeof ResizeObserver < "u" && (R = new ResizeObserver($), R.observe(r)), () => {
        ct.cancel(w), R == null || R.disconnect();
      };
    }
  }, [r]), !x)
    return null;
  const S = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(wc));
  return /* @__PURE__ */ g.createElement(Ca, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (w, R) => {
      var _, F;
      if (R.deadline || R.propertyName === "opacity") {
        const T = (_ = a.current) === null || _ === void 0 ? void 0 : _.parentElement;
        (F = i.current) === null || F === void 0 || F.call(i).then(() => {
          T == null || T.remove();
        });
      }
      return !1;
    }
  }, ({
    className: w
  }, R) => /* @__PURE__ */ g.createElement("div", {
    ref: or(a, R),
    className: Q(t, w, {
      "wave-quick": S
    }),
    style: C
  }));
}, kv = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e == null || e.insertBefore(o, e == null ? void 0 : e.firstChild);
  const a = Vv();
  let i = null;
  function s() {
    return i;
  }
  i = a(/* @__PURE__ */ g.createElement(Wv, Object.assign({}, t, {
    target: e,
    registerUnmount: s
  })), o);
}, Gv = (e, t, r) => {
  const {
    wave: n
  } = g.useContext(je), [, o, a] = sr(), i = mt((l) => {
    const u = e.current;
    if (n != null && n.disabled || !u)
      return;
    const d = u.querySelector(`.${wc}`) || u, {
      showEffect: v
    } = n || {};
    (v || kv)(d, {
      className: t,
      token: o,
      component: r,
      event: l,
      hashId: a
    });
  }), s = g.useRef(null);
  return (l) => {
    ct.cancel(s.current), s.current = ct(() => {
      i(l);
    });
  };
}, Oc = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = He(je), a = le(null), i = o("wave"), [, s] = Dv(i), c = Gv(a, Q(i, s), n);
  if (j.useEffect(() => {
    const u = a.current;
    if (!u || u.nodeType !== window.Node.ELEMENT_NODE || r)
      return;
    const d = (v) => {
      !zv(v.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") && !u.className.includes("disabled:") || u.getAttribute("aria-disabled") === "true" || u.className.includes("-leave") || c(v);
    };
    return u.addEventListener("click", d, !0), () => {
      u.removeEventListener("click", d, !0);
    };
  }, [r]), !/* @__PURE__ */ j.isValidElement(t))
    return t ?? null;
  const l = aa(t) ? or(ia(t), a) : a;
  return un(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (Oc.displayName = "Wave");
const Fr = (e) => {
  const t = j.useContext(rr);
  return j.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, $c = /* @__PURE__ */ g.createContext(null), En = (e, t) => {
  const r = g.useContext($c), n = g.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: a,
      isLastItem: i
    } = r, s = o === "vertical" ? "-vertical-" : "-";
    return Q(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: a,
      [`${e}-compact${s}last-item`]: i,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: n
  };
}, qv = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ g.createElement($c.Provider, {
    value: null
  }, t);
};
var Uv = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Rc = /* @__PURE__ */ g.createContext(void 0), Xv = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = g.useContext(je), {
    prefixCls: n,
    size: o,
    className: a
  } = e, i = Uv(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , c] = sr(), l = g.useMemo(() => {
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
    const d = lt("Button.Group");
    d.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = Q(s, {
    [`${s}-${l}`]: l,
    [`${s}-rtl`]: r === "rtl"
  }, a, c);
  return /* @__PURE__ */ g.createElement(Rc.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement("div", Object.assign({}, i, {
    className: u
  })));
}, wi = /^[\u4E00-\u9FA5]{2}$/, Ho = wi.test.bind(wi);
function Oi(e) {
  return typeof e == "string";
}
function qr(e) {
  return e === "text" || e === "link";
}
function Kv(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Oi(e.type) && Ho(e.props.children) ? un(e, {
    children: e.props.children.split("").join(r)
  }) : Oi(e) ? Ho(e) ? /* @__PURE__ */ j.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ j.createElement("span", null, e) : Cv(e) ? /* @__PURE__ */ j.createElement("span", null, e) : e;
}
function Yv(e, t) {
  let r = !1;
  const n = [];
  return j.Children.forEach(e, (o) => {
    const a = typeof o, i = a === "string" || a === "number";
    if (r && i) {
      const s = n.length - 1, c = n[s];
      n[s] = `${c}${o}`;
    } else
      n.push(o);
    r = i;
  }), j.Children.map(n, (o) => Kv(o, t));
}
["default", "primary", "danger"].concat(Y(ba));
const Wo = /* @__PURE__ */ Vt((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: a
  } = e, i = Q(`${a}-icon`, r);
  return /* @__PURE__ */ j.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, o);
}), $i = /* @__PURE__ */ Vt((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: a
  } = e, i = Q(`${r}-loading-icon`, n);
  return /* @__PURE__ */ j.createElement(Wo, {
    prefixCls: r,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ j.createElement(Sc, {
    className: a
  }));
}), Xn = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Kn = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Qv = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: a,
    mount: i
  } = e, s = !!r;
  return n ? /* @__PURE__ */ j.createElement($i, {
    prefixCls: t,
    className: o,
    style: a
  }) : /* @__PURE__ */ j.createElement(Ca, {
    visible: s,
    // Used for minus flex gap style only
    motionName: `${t}-loading-icon-motion`,
    motionAppear: !i,
    motionEnter: !i,
    motionLeave: !i,
    removeOnLeave: !0,
    onAppearStart: Xn,
    onAppearActive: Kn,
    onEnterStart: Xn,
    onEnterActive: Kn,
    onLeaveStart: Kn,
    onLeaveActive: Xn
  }, ({
    className: c,
    style: l
  }, u) => {
    const d = Object.assign(Object.assign({}, a), l);
    return /* @__PURE__ */ j.createElement($i, {
      prefixCls: t,
      className: Q(o, c),
      style: d,
      ref: u
    });
  });
}, Ri = (e, t) => ({
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
}), Zv = (e) => {
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
      Ri(`${t}-primary`, o),
      Ri(`${t}-danger`, a)
    ]
  };
};
var Jv = ["b"], eg = ["v"], Yn = function(t) {
  return Math.round(Number(t || 0));
}, tg = function(t) {
  if (t instanceof Oe)
    return t;
  if (t && Z(t) === "object" && "h" in t && "b" in t) {
    var r = t, n = r.b, o = We(r, Jv);
    return P(P({}, o), {}, {
      v: n
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, St = /* @__PURE__ */ function(e) {
  Rt(r, e);
  var t = _t(r);
  function r(n) {
    return Ve(this, r), t.call(this, tg(n));
  }
  return ze(r, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = Yn(o.s * 100), i = Yn(o.b * 100), s = Yn(o.h), c = o.a, l = "hsb(".concat(s, ", ").concat(a, "%, ").concat(i, "%)"), u = "hsba(".concat(s, ", ").concat(a, "%, ").concat(i, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = We(o, eg);
      return P(P({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), r;
}(Oe), rg = "rc-color-picker", Yt = function(t) {
  return t instanceof St ? t : new St(t);
}, ng = Yt("#1677ff"), _c = function(t) {
  var r = t.offset, n = t.targetRef, o = t.containerRef, a = t.color, i = t.type, s = o.current.getBoundingClientRect(), c = s.width, l = s.height, u = n.current.getBoundingClientRect(), d = u.width, v = u.height, b = d / 2, m = v / 2, p = (r.x + b) / c, f = 1 - (r.y + m) / l, y = a.toHsb(), h = p, x = (r.x + b) / c * 360;
  if (i)
    switch (i) {
      case "hue":
        return Yt(P(P({}, y), {}, {
          h: x <= 0 ? 0 : x
        }));
      case "alpha":
        return Yt(P(P({}, y), {}, {
          a: h <= 0 ? 0 : h
        }));
    }
  return Yt({
    h: y.h,
    s: p <= 0 ? 0 : p,
    b: f >= 1 ? 1 : f,
    a: y.a
  });
}, Pc = function(t, r) {
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
}, og = function(t) {
  var r = t.color, n = t.prefixCls, o = t.className, a = t.style, i = t.onClick, s = "".concat(n, "-color-block");
  return /* @__PURE__ */ j.createElement("div", {
    className: Q(s, o),
    style: a,
    onClick: i
  }, /* @__PURE__ */ j.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: r
    }
  }));
};
function ag(e) {
  var t = "touches" in e ? e.touches[0] : e, r = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - r,
    pageY: t.pageY - n
  };
}
function Tc(e) {
  var t = e.targetRef, r = e.containerRef, n = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, s = e.color, c = e.disabledDrag, l = It({
    x: 0,
    y: 0
  }), u = G(l, 2), d = u[0], v = u[1], b = le(null), m = le(null);
  Be(function() {
    v(i());
  }, [s]), Be(function() {
    return function() {
      document.removeEventListener("mousemove", b.current), document.removeEventListener("mouseup", m.current), document.removeEventListener("touchmove", b.current), document.removeEventListener("touchend", m.current), b.current = null, m.current = null;
    };
  }, []);
  var p = function(E) {
    var C = ag(E), $ = C.pageX, S = C.pageY, w = r.current.getBoundingClientRect(), R = w.x, _ = w.y, F = w.width, T = w.height, A = t.current.getBoundingClientRect(), N = A.width, I = A.height, V = N / 2, z = I / 2, L = Math.max(0, Math.min($ - R, F)) - V, k = Math.max(0, Math.min(S - _, T)) - z, U = {
      x: L,
      y: n === "x" ? d.y : k
    };
    if (N === 0 && I === 0 || N !== I)
      return !1;
    o == null || o(U);
  }, f = function(E) {
    E.preventDefault(), p(E);
  }, y = function(E) {
    E.preventDefault(), document.removeEventListener("mousemove", b.current), document.removeEventListener("mouseup", m.current), document.removeEventListener("touchmove", b.current), document.removeEventListener("touchend", m.current), b.current = null, m.current = null, a == null || a();
  }, h = function(E) {
    document.removeEventListener("mousemove", b.current), document.removeEventListener("mouseup", m.current), !c && (p(E), document.addEventListener("mousemove", f), document.addEventListener("mouseup", y), document.addEventListener("touchmove", f), document.addEventListener("touchend", y), b.current = f, m.current = y);
  };
  return [d, h];
}
var Fc = function(t) {
  var r = t.size, n = r === void 0 ? "default" : r, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ j.createElement("div", {
    className: Q("".concat(a, "-handler"), O({}, "".concat(a, "-handler-sm"), n === "small")),
    style: {
      backgroundColor: o
    }
  });
}, Ac = function(t) {
  var r = t.children, n = t.style, o = t.prefixCls;
  return /* @__PURE__ */ j.createElement("div", {
    className: "".concat(o, "-palette"),
    style: P({
      position: "relative"
    }, n)
  }, r);
}, Nc = /* @__PURE__ */ Vt(function(e, t) {
  var r = e.children, n = e.x, o = e.y;
  return /* @__PURE__ */ j.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(n, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, r);
}), ig = function(t) {
  var r = t.color, n = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, s = le(), c = le(), l = le(r), u = mt(function(p) {
    var f = _c({
      offset: p,
      targetRef: c,
      containerRef: s,
      color: r
    });
    l.current = f, n(f);
  }), d = Tc({
    color: r,
    containerRef: s,
    targetRef: c,
    calculate: function() {
      return Pc(r);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return a == null ? void 0 : a(l.current);
    },
    disabledDrag: i
  }), v = G(d, 2), b = v[0], m = v[1];
  return /* @__PURE__ */ j.createElement("div", {
    ref: s,
    className: "".concat(o, "-select"),
    onMouseDown: m,
    onTouchStart: m
  }, /* @__PURE__ */ j.createElement(Ac, {
    prefixCls: o
  }, /* @__PURE__ */ j.createElement(Nc, {
    x: b.x,
    y: b.y,
    ref: c
  }, /* @__PURE__ */ j.createElement(Fc, {
    color: r.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ j.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(r.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, sg = function(t, r) {
  var n = Sn(t, {
    value: r
  }), o = G(n, 2), a = o[0], i = o[1], s = Mt(function() {
    return Yt(a);
  }, [a]);
  return [s, i];
}, cg = function(t) {
  var r = t.colors, n = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, s = t.prefixCls, c = Mt(function() {
    return r.map(function(l, u) {
      var d = Yt(l);
      return i === "alpha" && u === r.length - 1 && (d = new St(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [r, i]);
  return /* @__PURE__ */ j.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(a, ", ").concat(c, ")")
    }
  }, n);
}, lg = function(t) {
  var r = t.prefixCls, n = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, s = t.color, c = t.type, l = le(), u = le(), d = le(s), v = function(C) {
    return c === "hue" ? C.getHue() : C.a * 100;
  }, b = mt(function(E) {
    var C = _c({
      offset: E,
      targetRef: u,
      containerRef: l,
      color: s,
      type: c
    });
    d.current = C, a(v(C));
  }), m = Tc({
    color: s,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return Pc(s, c);
    },
    onDragChange: b,
    onDragChangeComplete: function() {
      i(v(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), p = G(m, 2), f = p[0], y = p[1], h = j.useMemo(function() {
    if (c === "hue") {
      var E = s.toHsb();
      E.s = 1, E.b = 1, E.a = 1;
      var C = new St(E);
      return C;
    }
    return s;
  }, [s, c]), x = j.useMemo(function() {
    return n.map(function(E) {
      return "".concat(E.color, " ").concat(E.percent, "%");
    });
  }, [n]);
  return /* @__PURE__ */ j.createElement("div", {
    ref: l,
    className: Q("".concat(r, "-slider"), "".concat(r, "-slider-").concat(c)),
    onMouseDown: y,
    onTouchStart: y
  }, /* @__PURE__ */ j.createElement(Ac, {
    prefixCls: r
  }, /* @__PURE__ */ j.createElement(Nc, {
    x: f.x,
    y: f.y,
    ref: u
  }, /* @__PURE__ */ j.createElement(Fc, {
    size: "small",
    color: h.toHexString(),
    prefixCls: r
  })), /* @__PURE__ */ j.createElement(cg, {
    colors: x,
    type: c,
    prefixCls: r
  })));
};
function ug(e) {
  return g.useMemo(function() {
    var t = e || {}, r = t.slider;
    return [r || lg];
  }, [e]);
}
var dg = [{
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
}], fg = /* @__PURE__ */ Vt(function(e, t) {
  var r = e.value, n = e.defaultValue, o = e.prefixCls, a = o === void 0 ? rg : o, i = e.onChange, s = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, d = e.disabledAlpha, v = d === void 0 ? !1 : d, b = e.disabled, m = b === void 0 ? !1 : b, p = e.components, f = ug(p), y = G(f, 1), h = y[0], x = sg(n || ng, r), E = G(x, 2), C = E[0], $ = E[1], S = Mt(function() {
    return C.setA(1).toRgbString();
  }, [C]), w = function(k, U) {
    r || $(k), i == null || i(k, U);
  }, R = function(k) {
    return new St(C.setHue(k));
  }, _ = function(k) {
    return new St(C.setA(k / 100));
  }, F = function(k) {
    w(R(k), {
      type: "hue",
      value: k
    });
  }, T = function(k) {
    w(_(k), {
      type: "alpha",
      value: k
    });
  }, A = function(k) {
    s && s(R(k));
  }, N = function(k) {
    s && s(_(k));
  }, I = Q("".concat(a, "-panel"), c, O({}, "".concat(a, "-panel-disabled"), m)), V = {
    prefixCls: a,
    disabled: m,
    color: C
  }, z = /* @__PURE__ */ j.createElement(j.Fragment, null, /* @__PURE__ */ j.createElement(ig, _e({
    onChange: w
  }, V, {
    onChangeComplete: s
  })), /* @__PURE__ */ j.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ j.createElement("div", {
    className: Q("".concat(a, "-slider-group"), O({}, "".concat(a, "-slider-group-disabled-alpha"), v))
  }, /* @__PURE__ */ j.createElement(h, _e({}, V, {
    type: "hue",
    colors: dg,
    min: 0,
    max: 359,
    value: C.getHue(),
    onChange: F,
    onChangeComplete: A
  })), !v && /* @__PURE__ */ j.createElement(h, _e({}, V, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: S
    }],
    min: 0,
    max: 100,
    value: C.a * 100,
    onChange: T,
    onChangeComplete: N
  }))), /* @__PURE__ */ j.createElement(og, {
    color: C.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ j.createElement("div", {
    className: I,
    style: l,
    ref: t
  }, typeof u == "function" ? u(z) : z);
});
process.env.NODE_ENV !== "production" && (fg.displayName = "ColorPicker");
const vg = (e, t) => (e == null ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", gg = (e, t) => e ? vg(e, t) : "";
let pg = /* @__PURE__ */ function() {
  function e(t) {
    Ve(this, e);
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
    })), this.metaColor = new St(this.colors[0].color.metaColor)) : this.metaColor = new St(n ? "" : t), (!t || n && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return ze(e, [{
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
      return gg(this.toHexString(), this.metaColor.a < 1);
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
const mg = (e, t) => {
  const {
    r,
    g: n,
    b: o,
    a
  } = e.toRgb(), i = new St(e.toRgbString()).onBackground(t).toHsv();
  return a <= 0.5 ? i.v > 0.5 : r * 0.299 + n * 0.587 + o * 0.114 > 192;
}, Ic = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r
  } = e;
  return rt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: r
  });
}, Mc = (e) => {
  var t, r, n, o, a, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, c = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, l = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : rn(s), d = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : rn(c), v = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : rn(l), b = mg(new pg(e.colorBgSolid), "#fff") ? "#000" : "#fff", m = ba.reduce((p, f) => Object.assign(Object.assign({}, p), {
    [`${f}ShadowColor`]: `0 ${me(e.controlOutlineWidth)} 0 ${gr(e[`${f}1`], e.colorBgContainer)}`
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
    solidTextColor: b,
    contentFontSize: s,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: d,
    contentLineHeightLG: v,
    paddingBlock: Math.max((e.controlHeight - s * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * v) / 2 - e.lineWidth, 0)
  });
}, hg = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n,
    opacityLoading: o,
    motionDurationSlow: a,
    motionEaseInOut: i,
    iconGap: s,
    calc: c
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: s,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${me(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${t}-icon > svg`]: tc(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": bf(e),
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
            marginInlineEnd: c(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: c(s).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: c(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: c(s).mul(-1).equal()
          }
        }
      }
    }
  };
}, jc = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), bg = (e) => ({
  minWidth: e.controlHeight,
  paddingInline: 0,
  borderRadius: "50%"
}), yg = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), wn = (e, t, r, n, o, a, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, jc(e, Object.assign({
    background: t
  }, i), Object.assign({
    background: t
  }, s))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: a || void 0
    }
  })
}), Cg = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, yg(e))
}), Sg = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), On = (e, t, r, n) => {
  const a = n && ["link", "text"].includes(n) ? Sg : Cg;
  return Object.assign(Object.assign({}, a(e)), jc(e.componentCls, t, r));
}, $n = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: r
  }, On(e, n, o))
}), Rn = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: r
  }, On(e, n, o))
}), _n = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Pn = (e, t, r, n) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, On(e, r, n))
}), ht = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-${r}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, On(e, n, o, r))
}), xg = (e) => {
  const {
    componentCls: t
  } = e;
  return ba.reduce((r, n) => {
    const o = e[`${n}6`], a = e[`${n}1`], i = e[`${n}5`], s = e[`${n}2`], c = e[`${n}3`], l = e[`${n}7`];
    return Object.assign(Object.assign({}, r), {
      [`&${t}-color-${n}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${n}ShadowColor`]
      }, $n(e, e.colorTextLightSolid, o, {
        background: i
      }, {
        background: l
      })), Rn(e, o, e.colorBgContainer, {
        color: i,
        borderColor: i,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), _n(e)), Pn(e, a, {
        color: o,
        background: s
      }, {
        color: o,
        background: c
      })), ht(e, o, "link", {
        color: i
      }, {
        color: l
      })), ht(e, o, "text", {
        color: i,
        background: a
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, Eg = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, $n(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), _n(e)), Pn(e, e.colorFillTertiary, {
  color: e.defaultColor,
  background: e.colorFillSecondary
}, {
  color: e.defaultColor,
  background: e.colorFill
})), wn(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), ht(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), wg = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, Rn(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), _n(e)), Pn(e, e.colorPrimaryBg, {
  color: e.colorPrimary,
  background: e.colorPrimaryBgHover
}, {
  color: e.colorPrimary,
  background: e.colorPrimaryBorder
})), ht(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), ht(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), wn(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Og = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, $n(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), Rn(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), _n(e)), Pn(e, e.colorErrorBg, {
  color: e.colorError,
  background: e.colorErrorBgFilledHover
}, {
  color: e.colorError,
  background: e.colorErrorBgActive
})), ht(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), ht(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), wn(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), $g = (e) => Object.assign(Object.assign({}, ht(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), wn(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), Rg = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: Eg(e),
    [`${t}-color-primary`]: wg(e),
    [`${t}-color-dangerous`]: Og(e),
    [`${t}-color-link`]: $g(e)
  }, xg(e));
}, _g = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Rn(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), ht(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), $n(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), ht(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Ea = (e, t = "") => {
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: o,
    borderRadius: a,
    buttonPaddingHorizontal: i,
    iconCls: s,
    buttonPaddingVertical: c,
    buttonIconOnlyFontSize: l
  } = e;
  return [
    {
      [t]: {
        fontSize: o,
        height: n,
        padding: `${me(c)} ${me(i)}`,
        borderRadius: a,
        [`&${r}-icon-only`]: {
          width: n,
          [s]: {
            fontSize: l
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: bg(e)
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
}, Pg = (e) => {
  const t = rt(e, {
    fontSize: e.contentFontSize
  });
  return Ea(t, e.componentCls);
}, Tg = (e) => {
  const t = rt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return Ea(t, `${e.componentCls}-sm`);
}, Fg = (e) => {
  const t = rt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return Ea(t, `${e.componentCls}-lg`);
}, Ag = (e) => {
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
}, Ng = Pr("Button", (e) => {
  const t = Ic(e);
  return [
    // Shared
    hg(t),
    // Size
    Pg(t),
    Tg(t),
    Fg(t),
    // Block
    Ag(t),
    // Color
    Rg(t),
    // https://github.com/ant-design/ant-design/issues/50969
    _g(t),
    // Button Group
    Zv(t)
  ];
}, Mc, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function Ig(e, t, r, n) {
  const {
    focusElCls: o,
    focus: a,
    borderElCls: i
  } = r, s = i ? "> *" : "", c = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${s}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${n}-status-success)`]: {
      zIndex: 2
    },
    "&-item": Object.assign(Object.assign({
      [c]: {
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
function Mg(e, t, r) {
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
function Vc(e, t = {
  focus: !0
}) {
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, Ig(e, n, t, r)), Mg(r, n, t))
  };
}
function jg(e, t, r) {
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
function Vg(e, t) {
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
function zg(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, jg(e, t, e.componentCls)), Vg(e.componentCls, t))
  };
}
const Lg = (e) => {
  const {
    componentCls: t,
    colorPrimaryHover: r,
    lineWidth: n,
    calc: o
  } = e, a = o(n).mul(-1).equal(), i = (s) => {
    const c = `${t}-compact${s ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
    return {
      [`${c} + ${c}::before`]: {
        position: "absolute",
        top: s ? a : 0,
        insetInlineStart: s ? 0 : a,
        backgroundColor: r,
        content: '""',
        width: s ? "100%" : n,
        height: s ? n : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, i()), i(!0));
}, Dg = Cf(["Button", "compact"], (e) => {
  const t = Ic(e);
  return [
    // Space Compact
    Vc(t),
    zg(t),
    Lg(t)
  ];
}, Mc);
var Bg = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Hg(e) {
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
const Wg = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, kg = /* @__PURE__ */ j.forwardRef((e, t) => {
  var r, n;
  const {
    loading: o = !1,
    prefixCls: a,
    color: i,
    variant: s,
    type: c,
    danger: l = !1,
    shape: u,
    size: d,
    styles: v,
    disabled: b,
    className: m,
    rootClassName: p,
    children: f,
    icon: y,
    iconPosition: h = "start",
    ghost: x = !1,
    block: E = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: C = "button",
    classNames: $,
    style: S = {},
    autoInsertSpace: w,
    autoFocus: R
  } = e, _ = Bg(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), F = c || "default", {
    button: T
  } = j.useContext(je), A = u || (T == null ? void 0 : T.shape) || "default", [N, I] = Mt(() => {
    if (i && s)
      return [i, s];
    if (c || l) {
      const $e = Wg[F] || [];
      return l ? ["danger", $e[1]] : $e;
    }
    return T != null && T.color && (T != null && T.variant) ? [T.color, T.variant] : ["default", "outlined"];
  }, [c, i, s, l, T == null ? void 0 : T.variant, T == null ? void 0 : T.color]), z = N === "danger" ? "dangerous" : N, {
    getPrefixCls: L,
    direction: k,
    autoInsertSpace: U,
    className: J,
    style: q,
    classNames: D,
    styles: M
  } = ha("button"), W = (r = w ?? U) !== null && r !== void 0 ? r : !0, B = L("btn", a), [ne, X, ie] = Ng(B), ue = He(jt), de = b ?? ue, Se = He(Rc), he = Mt(() => Hg(o), [o]), [H, xe] = It(he.loading), [K, oe] = It(!1), be = le(null), se = Ji(t, be), Pe = wl.count(f) === 1 && !y && !qr(I), ye = le(!0);
  j.useEffect(() => (ye.current = !1, () => {
    ye.current = !0;
  }), []), Er(() => {
    let $e = null;
    he.delay > 0 ? $e = setTimeout(() => {
      $e = null, xe(!0);
    }, he.delay) : xe(he.loading);
    function nt() {
      $e && (clearTimeout($e), $e = null);
    }
    return nt;
  }, [he.delay, he.loading]), Be(() => {
    if (!be.current || !W)
      return;
    const $e = be.current.textContent || "";
    Pe && Ho($e) ? K || oe(!0) : K && oe(!1);
  }), Be(() => {
    R && be.current && be.current.focus();
  }, []);
  const Ce = j.useCallback(($e) => {
    var nt;
    if (H || de) {
      $e.preventDefault();
      return;
    }
    (nt = e.onClick) === null || nt === void 0 || nt.call(e, ("href" in e, $e));
  }, [e.onClick, H, de]);
  if (process.env.NODE_ENV !== "production") {
    const $e = lt("Button");
    process.env.NODE_ENV !== "production" && $e(!(typeof y == "string" && y.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${y}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && $e(!(x && qr(I)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: te,
    compactItemClassnames: ee
  } = En(B, k), ge = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, Ze = Fr(($e) => {
    var nt, dr;
    return (dr = (nt = d ?? te) !== null && nt !== void 0 ? nt : Se) !== null && dr !== void 0 ? dr : $e;
  }), ke = Ze && (n = ge[Ze]) !== null && n !== void 0 ? n : "", Ge = H ? "loading" : y, qe = xa(_, ["navigate"]), ut = Q(B, X, ie, {
    [`${B}-${A}`]: A !== "default" && A,
    // Compatible with versions earlier than 5.21.0
    [`${B}-${F}`]: F,
    [`${B}-dangerous`]: l,
    [`${B}-color-${z}`]: z,
    [`${B}-variant-${I}`]: I,
    [`${B}-${ke}`]: ke,
    [`${B}-icon-only`]: !f && f !== 0 && !!Ge,
    [`${B}-background-ghost`]: x && !qr(I),
    [`${B}-loading`]: H,
    [`${B}-two-chinese-chars`]: K && W && !H,
    [`${B}-block`]: E,
    [`${B}-rtl`]: k === "rtl",
    [`${B}-icon-end`]: h === "end"
  }, ee, m, p, J), Lt = Object.assign(Object.assign({}, q), S), Dt = Q($ == null ? void 0 : $.icon, D.icon), Ee = Object.assign(Object.assign({}, (v == null ? void 0 : v.icon) || {}), M.icon || {}), ce = y && !H ? /* @__PURE__ */ j.createElement(Wo, {
    prefixCls: B,
    className: Dt,
    style: Ee
  }, y) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ j.createElement(Wo, {
    prefixCls: B,
    className: Dt,
    style: Ee
  }, o.icon) : /* @__PURE__ */ j.createElement(Qv, {
    existIcon: !!y,
    prefixCls: B,
    loading: H,
    mount: ye.current
  }), Ue = f || f === 0 ? Yv(f, Pe && W) : null;
  if (qe.href !== void 0)
    return ne(/* @__PURE__ */ j.createElement("a", Object.assign({}, qe, {
      className: Q(ut, {
        [`${B}-disabled`]: de
      }),
      href: de ? void 0 : qe.href,
      style: Lt,
      onClick: Ce,
      ref: se,
      tabIndex: de ? -1 : 0,
      "aria-disabled": de
    }), ce, Ue));
  let dt = /* @__PURE__ */ j.createElement("button", Object.assign({}, _, {
    type: C,
    className: ut,
    style: Lt,
    onClick: Ce,
    disabled: de,
    ref: se
  }), ce, Ue, ee && /* @__PURE__ */ j.createElement(Dg, {
    prefixCls: B
  }));
  return qr(I) || (dt = /* @__PURE__ */ j.createElement(Oc, {
    component: "Button",
    disabled: H
  }, dt)), ne(dt);
}), Tn = kg;
Tn.Group = Xv;
Tn.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (Tn.displayName = "Button");
var Ft = "RC_FORM_INTERNAL_HOOKS", pe = function() {
  we(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, nr = /* @__PURE__ */ g.createContext({
  getFieldValue: pe,
  getFieldsValue: pe,
  getFieldError: pe,
  getFieldWarning: pe,
  getFieldsError: pe,
  isFieldsTouched: pe,
  isFieldTouched: pe,
  isFieldValidating: pe,
  isFieldsValidating: pe,
  resetFields: pe,
  setFields: pe,
  setFieldValue: pe,
  setFieldsValue: pe,
  validateFields: pe,
  submit: pe,
  getInternalHooks: function() {
    return pe(), {
      dispatch: pe,
      initEntityValue: pe,
      registerField: pe,
      useSubscribe: pe,
      setInitialValues: pe,
      destroyForm: pe,
      setCallbacks: pe,
      registerWatch: pe,
      getFields: pe,
      setValidateMessages: pe,
      setPreserve: pe,
      getInitialValue: pe
    };
  }
}), vn = /* @__PURE__ */ g.createContext(null);
function ko(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Gg(e) {
  return e && !!e._init;
}
function Go() {
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
var qo = Go();
function qg(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Ug(e, t, r) {
  if (sa()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && Cr(o, r.prototype), o;
}
function Uo(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Uo = function(n) {
    if (n === null || !qg(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, o);
    }
    function o() {
      return Ug(n, arguments, Sr(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Cr(o, n);
  }, Uo(e);
}
var Xg = /%[sdj%]/g, zc = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (zc = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function Xo(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function Qe(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var o = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(Xg, function(s) {
      if (s === "%%")
        return "%";
      if (o >= a)
        return s;
      switch (s) {
        case "%s":
          return String(r[o++]);
        case "%d":
          return Number(r[o++]);
        case "%j":
          try {
            return JSON.stringify(r[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function Kg(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ae(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Kg(t) && typeof e == "string" && !e);
}
function Yg(e, t, r) {
  var n = [], o = 0, a = e.length;
  function i(s) {
    n.push.apply(n, Y(s || [])), o++, o === a && r(n);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function _i(e, t, r) {
  var n = 0, o = e.length;
  function a(i) {
    if (i && i.length) {
      r(i);
      return;
    }
    var s = n;
    n = n + 1, s < o ? t(e[s], a) : r([]);
  }
  a([]);
}
function Qg(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, Y(e[r] || []));
  }), t;
}
var Pi = /* @__PURE__ */ function(e) {
  Rt(r, e);
  var t = _t(r);
  function r(n, o) {
    var a;
    return Ve(this, r), a = t.call(this, "Async Validation Error"), O(re(a), "errors", void 0), O(re(a), "fields", void 0), a.errors = n, a.fields = o, a;
  }
  return ze(r);
}(/* @__PURE__ */ Uo(Error));
function Zg(e, t, r, n, o) {
  if (t.first) {
    var a = new Promise(function(v, b) {
      var m = function(y) {
        return n(y), y.length ? b(new Pi(y, Xo(y))) : v(o);
      }, p = Qg(e);
      _i(p, r, m);
    });
    return a.catch(function(v) {
      return v;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], d = new Promise(function(v, b) {
    var m = function(f) {
      if (u.push.apply(u, f), l++, l === c)
        return n(u), u.length ? b(new Pi(u, Xo(u))) : v(o);
    };
    s.length || (n(u), v(o)), s.forEach(function(p) {
      var f = e[p];
      i.indexOf(p) !== -1 ? _i(f, r, m) : Yg(f, r, m);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function Jg(e) {
  return !!(e && e.message !== void 0);
}
function ep(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function Ti(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = ep(t, e.fullFields) : n = t[r.field || e.fullField], Jg(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Fi(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        Z(n) === "object" && Z(e[r]) === "object" ? e[r] = P(P({}, e[r]), n) : e[r] = n;
      }
  }
  return e;
}
var kt = "enum", tp = function(t, r, n, o, a) {
  t[kt] = Array.isArray(t[kt]) ? t[kt] : [], t[kt].indexOf(r) === -1 && o.push(Qe(a.messages[kt], t.fullField, t[kt].join(", ")));
}, rp = function(t, r, n, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || o.push(Qe(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || o.push(Qe(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, np = function(t, r, n, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = r, d = null, v = typeof r == "number", b = typeof r == "string", m = Array.isArray(r);
  if (v ? d = "number" : b ? d = "string" : m && (d = "array"), !d)
    return !1;
  m && (u = r.length), b && (u = r.replace(l, "_").length), i ? u !== t.len && o.push(Qe(a.messages[d].len, t.fullField, t.len)) : s && !c && u < t.min ? o.push(Qe(a.messages[d].min, t.fullField, t.min)) : c && !s && u > t.max ? o.push(Qe(a.messages[d].max, t.fullField, t.max)) : s && c && (u < t.min || u > t.max) && o.push(Qe(a.messages[d].range, t.fullField, t.min, t.max));
}, Lc = function(t, r, n, o, a, i) {
  t.required && (!n.hasOwnProperty(t.field) || Ae(r, i || t.type)) && o.push(Qe(a.messages.required, t.fullField));
}, Ur;
const op = function() {
  if (Ur)
    return Ur;
  var e = "[a-fA-F\\d:]", t = function($) {
    return $ && $.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", o = [
    "(?:".concat(n, ":){7}(?:").concat(n, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(n, ":){6}(?:").concat(r, "|:").concat(n, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(n, ":){5}(?::").concat(r, "|(?::").concat(n, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(n, ":){4}(?:(?::").concat(n, "){0,1}:").concat(r, "|(?::").concat(n, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(n, ":){3}(?:(?::").concat(n, "){0,2}:").concat(r, "|(?::").concat(n, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(n, ":){2}(?:(?::").concat(n, "){0,3}:").concat(r, "|(?::").concat(n, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(n, ":){1}(?:(?::").concat(n, "){0,4}:").concat(r, "|(?::").concat(n, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(n, "){0,5}:").concat(r, "|(?::").concat(n, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], a = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(o.join("|"), ")").concat(a), s = new RegExp("(?:^".concat(r, "$)|(?:^").concat(i, "$)")), c = new RegExp("^".concat(r, "$")), l = new RegExp("^".concat(i, "$")), u = function($) {
    return $ && $.exact ? s : new RegExp("(?:".concat(t($)).concat(r).concat(t($), ")|(?:").concat(t($)).concat(i).concat(t($), ")"), "g");
  };
  u.v4 = function(C) {
    return C && C.exact ? c : new RegExp("".concat(t(C)).concat(r).concat(t(C)), "g");
  }, u.v6 = function(C) {
    return C && C.exact ? l : new RegExp("".concat(t(C)).concat(i).concat(t(C)), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", b = u.v4().source, m = u.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", f = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", y = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", h = "(?::\\d{2,5})?", x = '(?:[/?#][^\\s"]*)?', E = "(?:".concat(d, "|www\\.)").concat(v, "(?:localhost|").concat(b, "|").concat(m, "|").concat(p).concat(f).concat(y, ")").concat(h).concat(x);
  return Ur = new RegExp("(?:^".concat(E, "$)"), "i"), Ur;
};
var Ai = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, pr = {
  integer: function(t) {
    return pr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return pr.number(t) && !pr.integer(t);
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
    return Z(t) === "object" && !pr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Ai.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(op());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Ai.hex);
  }
}, ap = function(t, r, n, o, a) {
  if (t.required && r === void 0) {
    Lc(t, r, n, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? pr[s](r) || o.push(Qe(a.messages.types[s], t.fullField, t.type)) : s && Z(r) !== t.type && o.push(Qe(a.messages.types[s], t.fullField, t.type));
}, ip = function(t, r, n, o, a) {
  (/^\s+$/.test(r) || r === "") && o.push(Qe(a.messages.whitespace, t.fullField));
};
const ae = {
  required: Lc,
  whitespace: ip,
  type: ap,
  range: np,
  enum: tp,
  pattern: rp
};
var sp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ae(r) && !t.required)
      return n();
    ae.required(t, r, o, i, a);
  }
  n(i);
}, cp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    ae.required(t, r, o, i, a, "array"), r != null && (ae.type(t, r, o, i, a), ae.range(t, r, o, i, a));
  }
  n(i);
}, lp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ae(r) && !t.required)
      return n();
    ae.required(t, r, o, i, a), r !== void 0 && ae.type(t, r, o, i, a);
  }
  n(i);
}, up = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ae(r, "date") && !t.required)
      return n();
    if (ae.required(t, r, o, i, a), !Ae(r, "date")) {
      var c;
      r instanceof Date ? c = r : c = new Date(r), ae.type(t, c, o, i, a), c && ae.range(t, c.getTime(), o, i, a);
    }
  }
  n(i);
}, dp = "enum", fp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ae(r) && !t.required)
      return n();
    ae.required(t, r, o, i, a), r !== void 0 && ae[dp](t, r, o, i, a);
  }
  n(i);
}, vp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ae(r) && !t.required)
      return n();
    ae.required(t, r, o, i, a), r !== void 0 && (ae.type(t, r, o, i, a), ae.range(t, r, o, i, a));
  }
  n(i);
}, gp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ae(r) && !t.required)
      return n();
    ae.required(t, r, o, i, a), r !== void 0 && (ae.type(t, r, o, i, a), ae.range(t, r, o, i, a));
  }
  n(i);
}, pp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ae(r) && !t.required)
      return n();
    ae.required(t, r, o, i, a), r !== void 0 && ae.type(t, r, o, i, a);
  }
  n(i);
}, mp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Ae(r) && !t.required)
      return n();
    ae.required(t, r, o, i, a), r !== void 0 && (ae.type(t, r, o, i, a), ae.range(t, r, o, i, a));
  }
  n(i);
}, hp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ae(r) && !t.required)
      return n();
    ae.required(t, r, o, i, a), r !== void 0 && ae.type(t, r, o, i, a);
  }
  n(i);
}, bp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ae(r, "string") && !t.required)
      return n();
    ae.required(t, r, o, i, a), Ae(r, "string") || ae.pattern(t, r, o, i, a);
  }
  n(i);
}, yp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ae(r) && !t.required)
      return n();
    ae.required(t, r, o, i, a), Ae(r) || ae.type(t, r, o, i, a);
  }
  n(i);
}, Cp = function(t, r, n, o, a) {
  var i = [], s = Array.isArray(r) ? "array" : Z(r);
  ae.required(t, r, o, i, a, s), n(i);
}, Sp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Ae(r, "string") && !t.required)
      return n();
    ae.required(t, r, o, i, a, "string"), Ae(r, "string") || (ae.type(t, r, o, i, a), ae.range(t, r, o, i, a), ae.pattern(t, r, o, i, a), t.whitespace === !0 && ae.whitespace(t, r, o, i, a));
  }
  n(i);
}, Qn = function(t, r, n, o, a) {
  var i = t.type, s = [], c = t.required || !t.required && o.hasOwnProperty(t.field);
  if (c) {
    if (Ae(r, i) && !t.required)
      return n();
    ae.required(t, r, o, s, a, i), Ae(r, i) || ae.type(t, r, o, s, a);
  }
  n(s);
};
const br = {
  string: Sp,
  method: pp,
  number: mp,
  boolean: lp,
  regexp: yp,
  integer: gp,
  float: vp,
  array: cp,
  object: hp,
  enum: fp,
  pattern: bp,
  date: up,
  url: Qn,
  hex: Qn,
  email: Qn,
  required: Cp,
  any: sp
};
var Ar = /* @__PURE__ */ function() {
  function e(t) {
    Ve(this, e), O(this, "rules", null), O(this, "_messages", qo), this.define(t);
  }
  return ze(e, [{
    key: "define",
    value: function(r) {
      var n = this;
      if (!r)
        throw new Error("Cannot configure a schema with no rules");
      if (Z(r) !== "object" || Array.isArray(r))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(r).forEach(function(o) {
        var a = r[o];
        n.rules[o] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(r) {
      return r && (this._messages = Fi(Go(), r)), this._messages;
    }
  }, {
    key: "validate",
    value: function(r) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = r, s = o, c = a;
      if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, i), Promise.resolve(i);
      function l(m) {
        var p = [], f = {};
        function y(x) {
          if (Array.isArray(x)) {
            var E;
            p = (E = p).concat.apply(E, Y(x));
          } else
            p.push(x);
        }
        for (var h = 0; h < m.length; h++)
          y(m[h]);
        p.length ? (f = Xo(p), c(p, f)) : c(null, i);
      }
      if (s.messages) {
        var u = this.messages();
        u === qo && (u = Go()), Fi(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var d = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(m) {
        var p = n.rules[m], f = i[m];
        p.forEach(function(y) {
          var h = y;
          typeof h.transform == "function" && (i === r && (i = P({}, i)), f = i[m] = h.transform(f), f != null && (h.type = h.type || (Array.isArray(f) ? "array" : Z(f)))), typeof h == "function" ? h = {
            validator: h
          } : h = P({}, h), h.validator = n.getValidationMethod(h), h.validator && (h.field = m, h.fullField = h.fullField || m, h.type = n.getType(h), d[m] = d[m] || [], d[m].push({
            rule: h,
            value: f,
            source: i,
            field: m
          }));
        });
      });
      var b = {};
      return Zg(d, s, function(m, p) {
        var f = m.rule, y = (f.type === "object" || f.type === "array") && (Z(f.fields) === "object" || Z(f.defaultField) === "object");
        y = y && (f.required || !f.required && m.value), f.field = m.field;
        function h(S, w) {
          return P(P({}, w), {}, {
            fullField: "".concat(f.fullField, ".").concat(S),
            fullFields: f.fullFields ? [].concat(Y(f.fullFields), [S]) : [S]
          });
        }
        function x() {
          var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], w = Array.isArray(S) ? S : [S];
          !s.suppressWarning && w.length && e.warning("async-validator:", w), w.length && f.message !== void 0 && (w = [].concat(f.message));
          var R = w.map(Ti(f, i));
          if (s.first && R.length)
            return b[f.field] = 1, p(R);
          if (!y)
            p(R);
          else {
            if (f.required && !m.value)
              return f.message !== void 0 ? R = [].concat(f.message).map(Ti(f, i)) : s.error && (R = [s.error(f, Qe(s.messages.required, f.field))]), p(R);
            var _ = {};
            f.defaultField && Object.keys(m.value).map(function(A) {
              _[A] = f.defaultField;
            }), _ = P(P({}, _), m.rule.fields);
            var F = {};
            Object.keys(_).forEach(function(A) {
              var N = _[A], I = Array.isArray(N) ? N : [N];
              F[A] = I.map(h.bind(null, A));
            });
            var T = new e(F);
            T.messages(s.messages), m.rule.options && (m.rule.options.messages = s.messages, m.rule.options.error = s.error), T.validate(m.value, m.rule.options || s, function(A) {
              var N = [];
              R && R.length && N.push.apply(N, Y(R)), A && A.length && N.push.apply(N, Y(A)), p(N.length ? N : null);
            });
          }
        }
        var E;
        if (f.asyncValidator)
          E = f.asyncValidator(f, m.value, x, m.source, s);
        else if (f.validator) {
          try {
            E = f.validator(f, m.value, x, m.source, s);
          } catch (S) {
            var C, $;
            (C = ($ = console).error) === null || C === void 0 || C.call($, S), s.suppressValidatorError || setTimeout(function() {
              throw S;
            }, 0), x(S.message);
          }
          E === !0 ? x() : E === !1 ? x(typeof f.message == "function" ? f.message(f.fullField || f.field) : f.message || "".concat(f.fullField || f.field, " fails")) : E instanceof Array ? x(E) : E instanceof Error && x(E.message);
        }
        E && E.then && E.then(function() {
          return x();
        }, function(S) {
          return x(S);
        });
      }, function(m) {
        l(m);
      }, i);
    }
  }, {
    key: "getType",
    value: function(r) {
      if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !br.hasOwnProperty(r.type))
        throw new Error(Qe("Unknown rule type %s", r.type));
      return r.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(r) {
      if (typeof r.validator == "function")
        return r.validator;
      var n = Object.keys(r), o = n.indexOf("message");
      return o !== -1 && n.splice(o, 1), n.length === 1 && n[0] === "required" ? br.required : br[this.getType(r)] || void 0;
    }
  }]), e;
}();
O(Ar, "register", function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  br[t] = r;
});
O(Ar, "warning", zc);
O(Ar, "messages", qo);
O(Ar, "validators", br);
var Ke = "'${name}' is not a valid ${type}", Dc = {
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
    string: Ke,
    method: Ke,
    array: Ke,
    object: Ke,
    number: Ke,
    date: Ke,
    boolean: Ke,
    integer: Ke,
    float: Ke,
    regexp: Ke,
    email: Ke,
    url: Ke,
    hex: Ke
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
}, Ni = Ar;
function xp(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(r) {
    if (r.startsWith("\\"))
      return r.slice(1);
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Ii = "CODE_LOGIC_ERROR";
function Ko(e, t, r, n, o) {
  return Yo.apply(this, arguments);
}
function Yo() {
  return Yo = zt(/* @__PURE__ */ De().mark(function e(t, r, n, o, a) {
    var i, s, c, l, u, d, v, b, m;
    return De().wrap(function(f) {
      for (; ; ) switch (f.prev = f.next) {
        case 0:
          return i = P({}, n), delete i.ruleIndex, Ni.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (y) {
              return console.error(y), Promise.reject(Ii);
            }
          }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), l = new Ni(O({}, t, [i])), u = qt(Dc, o.validateMessages), l.messages(u), d = [], f.prev = 10, f.next = 13, Promise.resolve(l.validate(O({}, t, r), P({}, o)));
        case 13:
          f.next = 18;
          break;
        case 15:
          f.prev = 15, f.t0 = f.catch(10), f.t0.errors && (d = f.t0.errors.map(function(y, h) {
            var x = y.message, E = x === Ii ? u.default : x;
            return /* @__PURE__ */ g.isValidElement(E) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ g.cloneElement(E, {
                key: "error_".concat(h)
              })
            ) : E;
          }));
        case 18:
          if (!(!d.length && c)) {
            f.next = 23;
            break;
          }
          return f.next = 21, Promise.all(r.map(function(y, h) {
            return Ko("".concat(t, ".").concat(h), y, c, o, a);
          }));
        case 21:
          return v = f.sent, f.abrupt("return", v.reduce(function(y, h) {
            return [].concat(Y(y), Y(h));
          }, []));
        case 23:
          return b = P(P({}, n), {}, {
            name: t,
            enum: (n.enum || []).join(", ")
          }, a), m = d.map(function(y) {
            return typeof y == "string" ? xp(y, b) : y;
          }), f.abrupt("return", m);
        case 26:
        case "end":
          return f.stop();
      }
    }, e, null, [[10, 15]]);
  })), Yo.apply(this, arguments);
}
function Ep(e, t, r, n, o, a) {
  var i = e.join("."), s = r.map(function(u, d) {
    var v = u.validator, b = P(P({}, u), {}, {
      ruleIndex: d
    });
    return v && (b.validator = function(m, p, f) {
      var y = !1, h = function() {
        for (var C = arguments.length, $ = new Array(C), S = 0; S < C; S++)
          $[S] = arguments[S];
        Promise.resolve().then(function() {
          we(!y, "Your validator function has already return a promise. `callback` will be ignored."), y || f.apply(void 0, $);
        });
      }, x = v(m, p, h);
      y = x && typeof x.then == "function" && typeof x.catch == "function", we(y, "`callback` is deprecated. Please return a promise instead."), y && x.then(function() {
        f();
      }).catch(function(E) {
        f(E || " ");
      });
    }), b;
  }).sort(function(u, d) {
    var v = u.warningOnly, b = u.ruleIndex, m = d.warningOnly, p = d.ruleIndex;
    return !!v == !!m ? b - p : v ? 1 : -1;
  }), c;
  if (o === !0)
    c = new Promise(/* @__PURE__ */ function() {
      var u = zt(/* @__PURE__ */ De().mark(function d(v, b) {
        var m, p, f;
        return De().wrap(function(h) {
          for (; ; ) switch (h.prev = h.next) {
            case 0:
              m = 0;
            case 1:
              if (!(m < s.length)) {
                h.next = 12;
                break;
              }
              return p = s[m], h.next = 5, Ko(i, t, p, n, a);
            case 5:
              if (f = h.sent, !f.length) {
                h.next = 9;
                break;
              }
              return b([{
                errors: f,
                rule: p
              }]), h.abrupt("return");
            case 9:
              m += 1, h.next = 1;
              break;
            case 12:
              v([]);
            case 13:
            case "end":
              return h.stop();
          }
        }, d);
      }));
      return function(d, v) {
        return u.apply(this, arguments);
      };
    }());
  else {
    var l = s.map(function(u) {
      return Ko(i, t, u, n, a).then(function(d) {
        return {
          errors: d,
          rule: u
        };
      });
    });
    c = (o ? Op(l) : wp(l)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return c.catch(function(u) {
    return u;
  }), c;
}
function wp(e) {
  return Qo.apply(this, arguments);
}
function Qo() {
  return Qo = zt(/* @__PURE__ */ De().mark(function e(t) {
    return De().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(t).then(function(o) {
            var a, i = (a = []).concat.apply(a, Y(o));
            return i;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Qo.apply(this, arguments);
}
function Op(e) {
  return Zo.apply(this, arguments);
}
function Zo() {
  return Zo = zt(/* @__PURE__ */ De().mark(function e(t) {
    var r;
    return De().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return r = 0, o.abrupt("return", new Promise(function(a) {
            t.forEach(function(i) {
              i.then(function(s) {
                s.errors.length && a([s]), r += 1, r === t.length && a([]);
              });
            });
          }));
        case 2:
        case "end":
          return o.stop();
      }
    }, e);
  })), Zo.apply(this, arguments);
}
function Re(e) {
  return ko(e);
}
function Mi(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var o = pt(e, n);
    r = ot(r, n, o);
  }), r;
}
function Qt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return Bc(t, n, r);
  });
}
function Bc(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, o) {
    return e[o] === n;
  });
}
function $p(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Z(e) !== "object" || Z(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), o = new Set([].concat(r, n));
  return Y(o).every(function(a) {
    var i = e[a], s = t[a];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function Rp(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Z(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function ji(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var o = e[t], a = t - r;
  return a > 0 ? [].concat(Y(e.slice(0, r)), [o], Y(e.slice(r, t)), Y(e.slice(t + 1, n))) : a < 0 ? [].concat(Y(e.slice(0, t)), Y(e.slice(t + 1, r + 1)), [o], Y(e.slice(r + 1, n))) : e;
}
var _p = ["name"], et = [];
function Zn(e, t, r, n, o, a) {
  return typeof e == "function" ? e(t, r, "source" in a ? {
    source: a.source
  } : {}) : n !== o;
}
var wa = /* @__PURE__ */ function(e) {
  Rt(r, e);
  var t = _t(r);
  function r(n) {
    var o;
    if (Ve(this, r), o = t.call(this, n), O(re(o), "state", {
      resetCount: 0
    }), O(re(o), "cancelRegisterFunc", null), O(re(o), "mounted", !1), O(re(o), "touched", !1), O(re(o), "dirty", !1), O(re(o), "validatePromise", void 0), O(re(o), "prevValidating", void 0), O(re(o), "errors", et), O(re(o), "warnings", et), O(re(o), "cancelRegister", function() {
      var c = o.props, l = c.preserve, u = c.isListField, d = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, l, Re(d)), o.cancelRegisterFunc = null;
    }), O(re(o), "getNamePath", function() {
      var c = o.props, l = c.name, u = c.fieldContext, d = u.prefixName, v = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat(Y(v), Y(l)) : [];
    }), O(re(o), "getRules", function() {
      var c = o.props, l = c.rules, u = l === void 0 ? [] : l, d = c.fieldContext;
      return u.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }), O(re(o), "refresh", function() {
      o.mounted && o.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), O(re(o), "metaCache", null), O(re(o), "triggerMetaEvent", function(c) {
      var l = o.props.onMetaChange;
      if (l) {
        var u = P(P({}, o.getMeta()), {}, {
          destroy: c
        });
        uo(o.metaCache, u) || l(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), O(re(o), "onStoreChange", function(c, l, u) {
      var d = o.props, v = d.shouldUpdate, b = d.dependencies, m = b === void 0 ? [] : b, p = d.onReset, f = u.store, y = o.getNamePath(), h = o.getValue(c), x = o.getValue(f), E = l && Qt(l, y);
      switch (u.type === "valueUpdate" && u.source === "external" && !uo(h, x) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = et, o.warnings = et, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!l || E) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = et, o.warnings = et, o.triggerMetaEvent(), p == null || p(), o.refresh();
            return;
          }
          break;
        case "remove": {
          if (v && Zn(v, c, f, h, x, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var C = u.data;
          if (E) {
            "touched" in C && (o.touched = C.touched), "validating" in C && !("originRCField" in C) && (o.validatePromise = C.validating ? Promise.resolve([]) : null), "errors" in C && (o.errors = C.errors || et), "warnings" in C && (o.warnings = C.warnings || et), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in C && Qt(l, y, !0)) {
            o.reRender();
            return;
          }
          if (v && !y.length && Zn(v, c, f, h, x, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var $ = m.map(Re);
          if ($.some(function(S) {
            return Qt(u.relatedFields, S);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (E || (!m.length || y.length || v) && Zn(v, c, f, h, x, u)) {
            o.reRender();
            return;
          }
          break;
      }
      v === !0 && o.reRender();
    }), O(re(o), "validateRules", function(c) {
      var l = o.getNamePath(), u = o.getValue(), d = c || {}, v = d.triggerName, b = d.validateOnly, m = b === void 0 ? !1 : b, p = Promise.resolve().then(/* @__PURE__ */ zt(/* @__PURE__ */ De().mark(function f() {
        var y, h, x, E, C, $, S;
        return De().wrap(function(R) {
          for (; ; ) switch (R.prev = R.next) {
            case 0:
              if (o.mounted) {
                R.next = 2;
                break;
              }
              return R.abrupt("return", []);
            case 2:
              if (y = o.props, h = y.validateFirst, x = h === void 0 ? !1 : h, E = y.messageVariables, C = y.validateDebounce, $ = o.getRules(), v && ($ = $.filter(function(_) {
                return _;
              }).filter(function(_) {
                var F = _.validateTrigger;
                if (!F)
                  return !0;
                var T = ko(F);
                return T.includes(v);
              })), !(C && v)) {
                R.next = 10;
                break;
              }
              return R.next = 8, new Promise(function(_) {
                setTimeout(_, C);
              });
            case 8:
              if (o.validatePromise === p) {
                R.next = 10;
                break;
              }
              return R.abrupt("return", []);
            case 10:
              return S = Ep(l, u, $, c, x, E), S.catch(function(_) {
                return _;
              }).then(function() {
                var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : et;
                if (o.validatePromise === p) {
                  var F;
                  o.validatePromise = null;
                  var T = [], A = [];
                  (F = _.forEach) === null || F === void 0 || F.call(_, function(N) {
                    var I = N.rule.warningOnly, V = N.errors, z = V === void 0 ? et : V;
                    I ? A.push.apply(A, Y(z)) : T.push.apply(T, Y(z));
                  }), o.errors = T, o.warnings = A, o.triggerMetaEvent(), o.reRender();
                }
              }), R.abrupt("return", S);
            case 13:
            case "end":
              return R.stop();
          }
        }, f);
      })));
      return m || (o.validatePromise = p, o.dirty = !0, o.errors = et, o.warnings = et, o.triggerMetaEvent(), o.reRender()), p;
    }), O(re(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), O(re(o), "isFieldTouched", function() {
      return o.touched;
    }), O(re(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, l = c.getInternalHooks(Ft), u = l.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), O(re(o), "getErrors", function() {
      return o.errors;
    }), O(re(o), "getWarnings", function() {
      return o.warnings;
    }), O(re(o), "isListField", function() {
      return o.props.isListField;
    }), O(re(o), "isList", function() {
      return o.props.isList;
    }), O(re(o), "isPreserve", function() {
      return o.props.preserve;
    }), O(re(o), "getMeta", function() {
      o.prevValidating = o.isFieldValidating();
      var c = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return c;
    }), O(re(o), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var l = o.getMeta();
        return P(P({}, o.getOnlyChild(c(o.getControlled(), l, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = nn(c);
      return u.length !== 1 || !/* @__PURE__ */ g.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), O(re(o), "getValue", function(c) {
      var l = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return pt(c || l(!0), u);
    }), O(re(o), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = o.props, u = l.name, d = l.trigger, v = l.validateTrigger, b = l.getValueFromEvent, m = l.normalize, p = l.valuePropName, f = l.getValueProps, y = l.fieldContext, h = v !== void 0 ? v : y.validateTrigger, x = o.getNamePath(), E = y.getInternalHooks, C = y.getFieldsValue, $ = E(Ft), S = $.dispatch, w = o.getValue(), R = f || function(N) {
        return O({}, p, N);
      }, _ = c[d], F = u !== void 0 ? R(w) : {};
      process.env.NODE_ENV !== "production" && F && Object.keys(F).forEach(function(N) {
        we(typeof F[N] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(N, ")"));
      });
      var T = P(P({}, c), F);
      T[d] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var N, I = arguments.length, V = new Array(I), z = 0; z < I; z++)
          V[z] = arguments[z];
        b ? N = b.apply(void 0, V) : N = Rp.apply(void 0, [p].concat(V)), m && (N = m(N, w, C(!0))), N !== w && S({
          type: "updateValue",
          namePath: x,
          value: N
        }), _ && _.apply(void 0, V);
      };
      var A = ko(h || []);
      return A.forEach(function(N) {
        var I = T[N];
        T[N] = function() {
          I && I.apply(void 0, arguments);
          var V = o.props.rules;
          V && V.length && S({
            type: "validateField",
            namePath: x,
            triggerName: N
          });
        };
      }), T;
    }), n.fieldContext) {
      var a = n.fieldContext.getInternalHooks, i = a(Ft), s = i.initEntityValue;
      s(re(o));
    }
    return o;
  }
  return ze(r, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, a = o.shouldUpdate, i = o.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, c = s(Ft), l = c.registerField;
        this.cancelRegisterFunc = l(this);
      }
      a === !0 && this.reRender();
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
      var o = this.state.resetCount, a = this.props.children, i = this.getOnlyChild(a), s = i.child, c = i.isFunction, l;
      return c ? l = s : /* @__PURE__ */ g.isValidElement(s) ? l = /* @__PURE__ */ g.cloneElement(s, this.getControlled(s.props)) : (we(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ g.createElement(g.Fragment, {
        key: o
      }, l);
    }
  }]), r;
}(g.Component);
O(wa, "contextType", nr);
O(wa, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Hc(e) {
  var t, r = e.name, n = We(e, _p), o = g.useContext(nr), a = g.useContext(vn), i = r !== void 0 ? Re(r) : void 0, s = (t = n.isListField) !== null && t !== void 0 ? t : !!a, c = "keep";
  return s || (c = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && s && i.length <= 1 && we(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ g.createElement(wa, _e({
    key: c,
    name: i,
    isListField: s
  }, n, {
    fieldContext: o
  }));
}
function Pp(e) {
  var t = e.name, r = e.initialValue, n = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField, s = g.useContext(nr), c = g.useContext(vn), l = g.useRef({
    keys: [],
    id: 0
  }), u = l.current, d = g.useMemo(function() {
    var p = Re(s.prefixName) || [];
    return [].concat(Y(p), Y(Re(t)));
  }, [s.prefixName, t]), v = g.useMemo(function() {
    return P(P({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), b = g.useMemo(function() {
    return {
      getKey: function(f) {
        var y = d.length, h = f[y];
        return [u.keys[h], f.slice(y + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return we(!1, "Form.List only accepts function as children."), null;
  var m = function(f, y, h) {
    var x = h.source;
    return x === "internal" ? !1 : f !== y;
  };
  return /* @__PURE__ */ g.createElement(vn.Provider, {
    value: b
  }, /* @__PURE__ */ g.createElement(nr.Provider, {
    value: v
  }, /* @__PURE__ */ g.createElement(Hc, {
    name: [],
    shouldUpdate: m,
    rules: o,
    validateTrigger: a,
    initialValue: r,
    isList: !0,
    isListField: i ?? !!c
  }, function(p, f) {
    var y = p.value, h = y === void 0 ? [] : y, x = p.onChange, E = s.getFieldValue, C = function() {
      var R = E(d || []);
      return R || [];
    }, $ = {
      add: function(R, _) {
        var F = C();
        _ >= 0 && _ <= F.length ? (u.keys = [].concat(Y(u.keys.slice(0, _)), [u.id], Y(u.keys.slice(_))), x([].concat(Y(F.slice(0, _)), [R], Y(F.slice(_))))) : (process.env.NODE_ENV !== "production" && (_ < 0 || _ > F.length) && we(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(Y(u.keys), [u.id]), x([].concat(Y(F), [R]))), u.id += 1;
      },
      remove: function(R) {
        var _ = C(), F = new Set(Array.isArray(R) ? R : [R]);
        F.size <= 0 || (u.keys = u.keys.filter(function(T, A) {
          return !F.has(A);
        }), x(_.filter(function(T, A) {
          return !F.has(A);
        })));
      },
      move: function(R, _) {
        if (R !== _) {
          var F = C();
          R < 0 || R >= F.length || _ < 0 || _ >= F.length || (u.keys = ji(u.keys, R, _), x(ji(F, R, _)));
        }
      }
    }, S = h || [];
    return Array.isArray(S) || (S = [], process.env.NODE_ENV !== "production" && we(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(S.map(function(w, R) {
      var _ = u.keys[R];
      return _ === void 0 && (u.keys[R] = u.id, _ = u.keys[R], u.id += 1), {
        name: R,
        key: _,
        isListField: !0
      };
    }), $, f);
  })));
}
function Tp(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(o, a) {
    e.forEach(function(i, s) {
      i.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        r -= 1, n[s] = c, !(r > 0) && (t && a(n), o(n));
      });
    });
  }) : Promise.resolve([]);
}
var Wc = "__@field_split__";
function Jn(e) {
  return e.map(function(t) {
    return "".concat(Z(t), ":").concat(t);
  }).join(Wc);
}
var Gt = /* @__PURE__ */ function() {
  function e() {
    Ve(this, e), O(this, "kvs", /* @__PURE__ */ new Map());
  }
  return ze(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(Jn(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(Jn(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = this.get(r), a = n(o);
      a ? this.set(r, a) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(Jn(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return Y(this.kvs.entries()).map(function(n) {
        var o = G(n, 2), a = o[0], i = o[1], s = a.split(Wc);
        return r({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), u = G(l, 3), d = u[1], v = u[2];
            return d === "number" ? Number(v) : v;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var o = n.key, a = n.value;
        return r[o.join(".")] = a, null;
      }), r;
    }
  }]), e;
}(), Fp = ["name"], Ap = /* @__PURE__ */ ze(function e(t) {
  var r = this;
  Ve(this, e), O(this, "formHooked", !1), O(this, "forceRootUpdate", void 0), O(this, "subscribable", !0), O(this, "store", {}), O(this, "fieldEntities", []), O(this, "initialValues", {}), O(this, "callbacks", {}), O(this, "validateMessages", null), O(this, "preserve", null), O(this, "lastValidatePromise", null), O(this, "getForm", function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }), O(this, "getInternalHooks", function(n) {
    return n === Ft ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (we(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), O(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), O(this, "prevWithoutPreserves", null), O(this, "setInitialValues", function(n, o) {
    if (r.initialValues = n || {}, o) {
      var a, i = qt(n, r.store);
      (a = r.prevWithoutPreserves) === null || a === void 0 || a.map(function(s) {
        var c = s.key;
        i = ot(i, c, pt(n, c));
      }), r.prevWithoutPreserves = null, r.updateStore(i);
    }
  }), O(this, "destroyForm", function(n) {
    if (n)
      r.updateStore({});
    else {
      var o = new Gt();
      r.getFieldEntities(!0).forEach(function(a) {
        r.isMergedPreserve(a.isPreserve()) || o.set(a.getNamePath(), !0);
      }), r.prevWithoutPreserves = o;
    }
  }), O(this, "getInitialValue", function(n) {
    var o = pt(r.initialValues, n);
    return n.length ? qt(o) : o;
  }), O(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), O(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), O(this, "setPreserve", function(n) {
    r.preserve = n;
  }), O(this, "watchList", []), O(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(o) {
        return o !== n;
      });
    };
  }), O(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var o = r.getFieldsValue(), a = r.getFieldsValue(!0);
      r.watchList.forEach(function(i) {
        i(o, a, n);
      });
    }
  }), O(this, "timeoutId", null), O(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || we(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), O(this, "updateStore", function(n) {
    r.store = n;
  }), O(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : r.fieldEntities;
  }), O(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new Gt();
    return r.getFieldEntities(n).forEach(function(a) {
      var i = a.getNamePath();
      o.set(i, a);
    }), o;
  }), O(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var o = r.getFieldsMap(!0);
    return n.map(function(a) {
      var i = Re(a);
      return o.get(i) || {
        INVALIDATE_NAME_PATH: Re(a)
      };
    });
  }), O(this, "getFieldsValue", function(n, o) {
    r.warningUnhooked();
    var a, i, s;
    if (n === !0 || Array.isArray(n) ? (a = n, i = o) : n && Z(n) === "object" && (s = n.strict, i = n.filter), a === !0 && !i)
      return r.store;
    var c = r.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), l = [];
    return c.forEach(function(u) {
      var d, v, b = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var m, p;
        if ((m = (p = u).isList) !== null && m !== void 0 && m.call(p))
          return;
      } else if (!a && (d = (v = u).isListField) !== null && d !== void 0 && d.call(v))
        return;
      if (!i)
        l.push(b);
      else {
        var f = "getMeta" in u ? u.getMeta() : null;
        i(f) && l.push(b);
      }
    }), Mi(r.store, l.map(Re));
  }), O(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var o = Re(n);
    return pt(r.store, o);
  }), O(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntitiesForNamePathList(n);
    return o.map(function(a, i) {
      return a && !("INVALIDATE_NAME_PATH" in a) ? {
        name: a.getNamePath(),
        errors: a.getErrors(),
        warnings: a.getWarnings()
      } : {
        name: Re(n[i]),
        errors: [],
        warnings: []
      };
    });
  }), O(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var o = Re(n), a = r.getFieldsError([o])[0];
    return a.errors;
  }), O(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var o = Re(n), a = r.getFieldsError([o])[0];
    return a.warnings;
  }), O(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    var i = o[0], s = o[1], c, l = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(i) ? (c = i.map(Re), l = !1) : (c = null, l = i) : (c = i.map(Re), l = s);
    var u = r.getFieldEntities(!0), d = function(f) {
      return f.isFieldTouched();
    };
    if (!c)
      return l ? u.every(function(p) {
        return d(p) || p.isList();
      }) : u.some(d);
    var v = new Gt();
    c.forEach(function(p) {
      v.set(p, []);
    }), u.forEach(function(p) {
      var f = p.getNamePath();
      c.forEach(function(y) {
        y.every(function(h, x) {
          return f[x] === h;
        }) && v.update(y, function(h) {
          return [].concat(Y(h), [p]);
        });
      });
    });
    var b = function(f) {
      return f.some(d);
    }, m = v.map(function(p) {
      var f = p.value;
      return f;
    });
    return l ? m.every(b) : m.some(b);
  }), O(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), O(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntities();
    if (!n)
      return o.some(function(i) {
        return i.isFieldValidating();
      });
    var a = n.map(Re);
    return o.some(function(i) {
      var s = i.getNamePath();
      return Qt(a, s) && i.isFieldValidating();
    });
  }), O(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), O(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new Gt(), a = r.getFieldEntities(!0);
    a.forEach(function(c) {
      var l = c.props.initialValue, u = c.getNamePath();
      if (l !== void 0) {
        var d = o.get(u) || /* @__PURE__ */ new Set();
        d.add({
          entity: c,
          value: l
        }), o.set(u, d);
      }
    });
    var i = function(l) {
      l.forEach(function(u) {
        var d = u.props.initialValue;
        if (d !== void 0) {
          var v = u.getNamePath(), b = r.getInitialValue(v);
          if (b !== void 0)
            we(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var m = o.get(v);
            if (m && m.size > 1)
              we(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (m) {
              var p = r.getFieldValue(v), f = u.isListField();
              !f && (!n.skipExist || p === void 0) && r.updateStore(ot(r.store, v, Y(m)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(c) {
      var l = o.get(c);
      if (l) {
        var u;
        (u = s).push.apply(u, Y(Y(l).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = a, i(s);
  }), O(this, "resetFields", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (!n) {
      r.updateStore(qt(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(o, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var a = n.map(Re);
    a.forEach(function(i) {
      var s = r.getInitialValue(i);
      r.updateStore(ot(r.store, i, s));
    }), r.resetWithFieldInitialValue({
      namePathList: a
    }), r.notifyObservers(o, a, {
      type: "reset"
    }), r.notifyWatch(a);
  }), O(this, "setFields", function(n) {
    r.warningUnhooked();
    var o = r.store, a = [];
    n.forEach(function(i) {
      var s = i.name, c = We(i, Fp), l = Re(s);
      a.push(l), "value" in c && r.updateStore(ot(r.store, l, c.value)), r.notifyObservers(o, [l], {
        type: "setField",
        data: i
      });
    }), r.notifyWatch(a);
  }), O(this, "getFields", function() {
    var n = r.getFieldEntities(!0), o = n.map(function(a) {
      var i = a.getNamePath(), s = a.getMeta(), c = P(P({}, s), {}, {
        name: i,
        value: r.getFieldValue(i)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return o;
  }), O(this, "initEntityValue", function(n) {
    var o = n.props.initialValue;
    if (o !== void 0) {
      var a = n.getNamePath(), i = pt(r.store, a);
      i === void 0 && r.updateStore(ot(r.store, a, o));
    }
  }), O(this, "isMergedPreserve", function(n) {
    var o = n !== void 0 ? n : r.preserve;
    return o ?? !0;
  }), O(this, "registerField", function(n) {
    r.fieldEntities.push(n);
    var o = n.getNamePath();
    if (r.notifyWatch([o]), n.props.initialValue !== void 0) {
      var a = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(a, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(d) {
        return d !== n;
      }), !r.isMergedPreserve(s) && (!i || c.length > 1)) {
        var l = i ? void 0 : r.getInitialValue(o);
        if (o.length && r.getFieldValue(o) !== l && r.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !Bc(d.getNamePath(), o)
          );
        })) {
          var u = r.store;
          r.updateStore(ot(u, o, l, !0)), r.notifyObservers(u, [o], {
            type: "remove"
          }), r.triggerDependenciesUpdate(u, o);
        }
      }
      r.notifyWatch([o]);
    };
  }), O(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var o = n.namePath, a = n.value;
        r.updateValue(o, a);
        break;
      }
      case "validateField": {
        var i = n.namePath, s = n.triggerName;
        r.validateFields([i], {
          triggerName: s
        });
        break;
      }
    }
  }), O(this, "notifyObservers", function(n, o, a) {
    if (r.subscribable) {
      var i = P(P({}, a), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(n, o, i);
      });
    } else
      r.forceRootUpdate();
  }), O(this, "triggerDependenciesUpdate", function(n, o) {
    var a = r.getDependencyChildrenFields(o);
    return a.length && r.validateFields(a), r.notifyObservers(n, a, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(Y(a))
    }), a;
  }), O(this, "updateValue", function(n, o) {
    var a = Re(n), i = r.store;
    r.updateStore(ot(r.store, a, o)), r.notifyObservers(i, [a], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([a]);
    var s = r.triggerDependenciesUpdate(i, a), c = r.callbacks.onValuesChange;
    if (c) {
      var l = Mi(r.store, [a]);
      c(l, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([a].concat(Y(s)));
  }), O(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (n) {
      var a = qt(r.store, n);
      r.updateStore(a);
    }
    r.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), O(this, "setFieldValue", function(n, o) {
    r.setFields([{
      name: n,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), O(this, "getDependencyChildrenFields", function(n) {
    var o = /* @__PURE__ */ new Set(), a = [], i = new Gt();
    r.getFieldEntities().forEach(function(c) {
      var l = c.props.dependencies;
      (l || []).forEach(function(u) {
        var d = Re(u);
        i.update(d, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(c), v;
        });
      });
    });
    var s = function c(l) {
      var u = i.get(l) || /* @__PURE__ */ new Set();
      u.forEach(function(d) {
        if (!o.has(d)) {
          o.add(d);
          var v = d.getNamePath();
          d.isFieldDirty() && v.length && (a.push(v), c(v));
        }
      });
    };
    return s(n), a;
  }), O(this, "triggerOnFieldsChange", function(n, o) {
    var a = r.callbacks.onFieldsChange;
    if (a) {
      var i = r.getFields();
      if (o) {
        var s = new Gt();
        o.forEach(function(l) {
          var u = l.name, d = l.errors;
          s.set(u, d);
        }), i.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var c = i.filter(function(l) {
        var u = l.name;
        return Qt(n, u);
      });
      c.length && a(c, i);
    }
  }), O(this, "validateFields", function(n, o) {
    r.warningUnhooked();
    var a, i;
    Array.isArray(n) || typeof n == "string" || typeof o == "string" ? (a = n, i = o) : i = n;
    var s = !!a, c = s ? a.map(Re) : [], l = [], u = String(Date.now()), d = /* @__PURE__ */ new Set(), v = i || {}, b = v.recursive, m = v.dirty;
    r.getFieldEntities(!0).forEach(function(h) {
      if (s || c.push(h.getNamePath()), !(!h.props.rules || !h.props.rules.length) && !(m && !h.isFieldDirty())) {
        var x = h.getNamePath();
        if (d.add(x.join(u)), !s || Qt(c, x, b)) {
          var E = h.validateRules(P({
            validateMessages: P(P({}, Dc), r.validateMessages)
          }, i));
          l.push(E.then(function() {
            return {
              name: x,
              errors: [],
              warnings: []
            };
          }).catch(function(C) {
            var $, S = [], w = [];
            return ($ = C.forEach) === null || $ === void 0 || $.call(C, function(R) {
              var _ = R.rule.warningOnly, F = R.errors;
              _ ? w.push.apply(w, Y(F)) : S.push.apply(S, Y(F));
            }), S.length ? Promise.reject({
              name: x,
              errors: S,
              warnings: w
            }) : {
              name: x,
              errors: S,
              warnings: w
            };
          }));
        }
      }
    });
    var p = Tp(l);
    r.lastValidatePromise = p, p.catch(function(h) {
      return h;
    }).then(function(h) {
      var x = h.map(function(E) {
        var C = E.name;
        return C;
      });
      r.notifyObservers(r.store, x, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(x, h);
    });
    var f = p.then(function() {
      return r.lastValidatePromise === p ? Promise.resolve(r.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(h) {
      var x = h.filter(function(E) {
        return E && E.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(c),
        errorFields: x,
        outOfDate: r.lastValidatePromise !== p
      });
    });
    f.catch(function(h) {
      return h;
    });
    var y = c.filter(function(h) {
      return d.has(h.join(u));
    });
    return r.triggerOnFieldsChange(y), f;
  }), O(this, "submit", function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var o = r.callbacks.onFinish;
      if (o)
        try {
          o(n);
        } catch (a) {
          console.error(a);
        }
    }).catch(function(n) {
      var o = r.callbacks.onFinishFailed;
      o && o(n);
    });
  }), this.forceRootUpdate = t;
});
function kc(e) {
  var t = g.useRef(), r = g.useState({}), n = G(r, 2), o = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var a = function() {
        o({});
      }, i = new Ap(a);
      t.current = i.getForm();
    }
  return [t.current];
}
var Jo = /* @__PURE__ */ g.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Np = function(t) {
  var r = t.validateMessages, n = t.onFormChange, o = t.onFormFinish, a = t.children, i = g.useContext(Jo), s = g.useRef({});
  return /* @__PURE__ */ g.createElement(Jo.Provider, {
    value: P(P({}, i), {}, {
      validateMessages: P(P({}, i.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(l, u) {
        n && n(l, {
          changedFields: u,
          forms: s.current
        }), i.triggerFormChange(l, u);
      },
      triggerFormFinish: function(l, u) {
        o && o(l, {
          values: u,
          forms: s.current
        }), i.triggerFormFinish(l, u);
      },
      registerForm: function(l, u) {
        l && (s.current = P(P({}, s.current), {}, O({}, l, u))), i.registerForm(l, u);
      },
      unregisterForm: function(l) {
        var u = P({}, s.current);
        delete u[l], s.current = u, i.unregisterForm(l);
      }
    })
  }, a);
}, Ip = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], Mp = function(t, r) {
  var n = t.name, o = t.initialValues, a = t.fields, i = t.form, s = t.preserve, c = t.children, l = t.component, u = l === void 0 ? "form" : l, d = t.validateMessages, v = t.validateTrigger, b = v === void 0 ? "onChange" : v, m = t.onValuesChange, p = t.onFieldsChange, f = t.onFinish, y = t.onFinishFailed, h = t.clearOnDestroy, x = We(t, Ip), E = g.useRef(null), C = g.useContext(Jo), $ = kc(i), S = G($, 1), w = S[0], R = w.getInternalHooks(Ft), _ = R.useSubscribe, F = R.setInitialValues, T = R.setCallbacks, A = R.setValidateMessages, N = R.setPreserve, I = R.destroyForm;
  g.useImperativeHandle(r, function() {
    return P(P({}, w), {}, {
      nativeElement: E.current
    });
  }), g.useEffect(function() {
    return C.registerForm(n, w), function() {
      C.unregisterForm(n);
    };
  }, [C, w, n]), A(P(P({}, C.validateMessages), d)), T({
    onValuesChange: m,
    onFieldsChange: function(M) {
      if (C.triggerFormChange(n, M), p) {
        for (var W = arguments.length, B = new Array(W > 1 ? W - 1 : 0), ne = 1; ne < W; ne++)
          B[ne - 1] = arguments[ne];
        p.apply(void 0, [M].concat(B));
      }
    },
    onFinish: function(M) {
      C.triggerFormFinish(n, M), f && f(M);
    },
    onFinishFailed: y
  }), N(s);
  var V = g.useRef(null);
  F(o, !V.current), V.current || (V.current = !0), g.useEffect(
    function() {
      return function() {
        return I(h);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var z, L = typeof c == "function";
  if (L) {
    var k = w.getFieldsValue(!0);
    z = c(k, w);
  } else
    z = c;
  _(!L);
  var U = g.useRef();
  g.useEffect(function() {
    $p(U.current || [], a || []) || w.setFields(a || []), U.current = a;
  }, [a, w]);
  var J = g.useMemo(function() {
    return P(P({}, w), {}, {
      validateTrigger: b
    });
  }, [w, b]), q = /* @__PURE__ */ g.createElement(vn.Provider, {
    value: null
  }, /* @__PURE__ */ g.createElement(nr.Provider, {
    value: J
  }, z));
  return u === !1 ? q : /* @__PURE__ */ g.createElement(u, _e({}, x, {
    ref: E,
    onSubmit: function(M) {
      M.preventDefault(), M.stopPropagation(), w.submit();
    },
    onReset: function(M) {
      var W;
      M.preventDefault(), w.resetFields(), (W = x.onReset) === null || W === void 0 || W.call(x, M);
    }
  }), q);
};
function Vi(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var jp = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = le(t);
  we(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Vp() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = t[1], a = o === void 0 ? {} : o, i = Gg(a) ? {
    form: a
  } : a, s = i.form, c = It(), l = G(c, 2), u = l[0], d = l[1], v = Mt(function() {
    return Vi(u);
  }, [u]), b = le(v);
  b.current = v;
  var m = He(nr), p = s || m, f = p && p._init;
  process.env.NODE_ENV !== "production" && we(t.length === 2 ? s ? f : !0 : f, "useWatch requires a form instance since it can not auto detect from context.");
  var y = Re(n), h = le(y);
  return h.current = y, jp(y), Be(
    function() {
      if (f) {
        var x = p.getFieldsValue, E = p.getInternalHooks, C = E(Ft), $ = C.registerWatch, S = function(F, T) {
          var A = i.preserve ? T : F;
          return typeof n == "function" ? n(A) : pt(A, h.current);
        }, w = $(function(_, F) {
          var T = S(_, F), A = Vi(T);
          b.current !== A && (b.current = A, d(T));
        }), R = S(x(), x(!0));
        return u !== R && d(R), w;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [f]
  ), u;
}
var zp = /* @__PURE__ */ g.forwardRef(Mp), Nr = zp;
Nr.FormProvider = Np;
Nr.Field = Hc;
Nr.List = Pp;
Nr.useForm = kc;
Nr.useWatch = Vp;
const xt = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (xt.displayName = "FormItemInputContext");
const Lp = ({
  children: e,
  status: t,
  override: r
}) => {
  const n = g.useContext(xt), o = g.useMemo(() => {
    const a = Object.assign({}, n);
    return r && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, r, n]);
  return /* @__PURE__ */ g.createElement(xt.Provider, {
    value: o
  }, e);
}, Dp = /* @__PURE__ */ g.createContext(void 0), zi = (e) => {
  const {
    space: t,
    form: r,
    children: n
  } = e;
  if (n == null)
    return null;
  let o = n;
  return r && (o = /* @__PURE__ */ j.createElement(Lp, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ j.createElement(qv, null, o)), o;
};
function ea(e, t, r) {
  return Q({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: r
  });
}
const Oa = (e, t) => t || e, Gc = (e, t, r = void 0) => {
  var n, o;
  const {
    variant: a,
    [e]: i
  } = g.useContext(je), s = g.useContext(Dp), c = i == null ? void 0 : i.variant;
  let l;
  typeof t < "u" ? l = t : r === !1 ? l = "borderless" : l = (o = (n = s ?? c) !== null && n !== void 0 ? n : a) !== null && o !== void 0 ? o : "outlined";
  const u = Wd.includes(l);
  return [l, u];
};
var Bp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, Hp = function(t, r) {
  return /* @__PURE__ */ g.createElement(Pt, _e({}, t, {
    ref: r,
    icon: Bp
  }));
}, qc = /* @__PURE__ */ g.forwardRef(Hp);
process.env.NODE_ENV !== "production" && (qc.displayName = "SearchOutlined");
function Fn(e) {
  return rt(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const An = (e) => {
  const {
    controlHeight: t,
    fontSize: r,
    lineHeight: n,
    lineWidth: o,
    controlHeightSM: a,
    controlHeightLG: i,
    fontSizeLG: s,
    lineHeightLG: c,
    paddingSM: l,
    controlPaddingHorizontalSM: u,
    controlPaddingHorizontal: d,
    colorFillAlter: v,
    colorPrimaryHover: b,
    colorPrimary: m,
    controlOutlineWidth: p,
    controlOutline: f,
    colorErrorOutline: y,
    colorWarningOutline: h,
    colorBgContainer: x,
    inputFontSize: E,
    inputFontSizeLG: C,
    inputFontSizeSM: $
  } = e, S = E || r, w = $ || S, R = C || s, _ = Math.round((t - S * n) / 2 * 10) / 10 - o, F = Math.round((a - w * n) / 2 * 10) / 10 - o, T = Math.ceil((i - R * c) / 2 * 10) / 10 - o;
  return {
    paddingBlock: Math.max(_, 0),
    paddingBlockSM: Math.max(F, 0),
    paddingBlockLG: Math.max(T, 0),
    paddingInline: l - o,
    paddingInlineSM: u - o,
    paddingInlineLG: d - o,
    addonBg: v,
    activeBorderColor: m,
    hoverBorderColor: b,
    activeShadow: `0 0 0 ${p}px ${f}`,
    errorActiveShadow: `0 0 0 ${p}px ${y}`,
    warningActiveShadow: `0 0 0 ${p}px ${h}`,
    hoverBg: x,
    activeBg: x,
    inputFontSize: S,
    inputFontSizeLG: R,
    inputFontSizeSM: w
  };
}, Wp = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), $a = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, Wp(rt(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), Uc = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), Li = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Uc(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), kp = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Uc(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, $a(e))
  }), Li(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Li(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), Di = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), Gp = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${me(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, Di(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), Di(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, $a(e))
    }
  })
}), qp = (e, t) => {
  const {
    componentCls: r
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${r}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      // >>>>> Status
      [`&${r}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${r}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, t)
  };
}, Xc = (e, t) => {
  var r;
  return {
    background: t.bg,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: "transparent",
    "input&, & input, textarea&, & textarea": {
      color: (r = t == null ? void 0 : t.inputColor) !== null && r !== void 0 ? r : "unset"
    },
    "&:hover": {
      background: t.hoverBg
    },
    "&:focus, &:focus-within": {
      outline: 0,
      borderColor: t.activeBorderColor,
      backgroundColor: e.activeBg
    }
  };
}, Bi = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Xc(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), Up = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Xc(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, $a(e))
  }), Bi(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), Bi(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), Hi = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), Xp = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group-addon`]: {
      background: e.colorFillTertiary,
      "&:last-child": {
        position: "static"
      }
    }
  }, Hi(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), Hi(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${me(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${me(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${me(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${me(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${me(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${me(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), Kc = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: `${me(e.lineWidth)} 0`,
  borderStyle: `${e.lineType} none`,
  borderColor: `transparent transparent ${t.borderColor} transparent`,
  borderRadius: 0,
  "&:hover": {
    borderColor: `transparent transparent ${t.borderColor} transparent`,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: `transparent transparent ${t.activeBorderColor} transparent`,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), Wi = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, Kc(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: `transparent transparent ${t.borderColor} transparent`
  }
}), Kp = (e, t) => ({
  "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Kc(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    // >>>>> Disabled
    [`&${e.componentCls}-disabled, &[disabled]`]: {
      color: e.colorTextDisabled,
      boxShadow: "none",
      cursor: "not-allowed",
      "&:hover": {
        borderColor: `transparent transparent ${e.colorBorder} transparent`
      }
    },
    "input[disabled], textarea[disabled]": {
      cursor: "not-allowed"
    }
  }), Wi(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), Wi(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), Yp = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), Yc = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: r,
    borderRadiusLG: n,
    paddingInlineLG: o
  } = e;
  return {
    padding: `${me(t)} ${me(o)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: r,
    borderRadius: n
  };
}, Qc = (e) => ({
  padding: `${me(e.paddingBlockSM)} ${me(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), Zc = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${me(e.paddingBlock)} ${me(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, Yp(e.colorTextPlaceholder)), {
  // Size
  "&-lg": Object.assign({}, Yc(e)),
  "&-sm": Object.assign({}, Qc(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), Qp = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, Yc(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, Qc(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${r}-select-single ${r}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${me(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${r}-select`]: {
          margin: `${me(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${me(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${r}-select-single:not(${r}-select-customize-input):not(${r}-pagination-size-changer)`]: {
            [`${r}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${me(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${r}-cascader-picker`]: {
          margin: `-9px ${me(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${r}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [t]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${r}-select ${r}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, gf()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${r}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [t]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${r}-select > ${r}-select-selector,
      & > ${r}-select-auto-complete ${t},
      & > ${r}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${r}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${r}-select > ${r}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${r}-select:first-child > ${r}-select-selector,
      & > ${r}-select-auto-complete:first-child ${t},
      & > ${r}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${r}-select:last-child > ${r}-select-selector,
      & > ${r}-cascader-picker:last-child ${t},
      & > ${r}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${r}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, Zp = (e) => {
  const {
    componentCls: t,
    controlHeightSM: r,
    lineWidth: n,
    calc: o
  } = e, i = o(r).sub(o(n).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ec(e)), Zc(e)), kp(e)), Up(e)), qp(e)), Kp(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: r,
          paddingTop: i,
          paddingBottom: i
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        appearance: "none"
      }
    })
  };
}, Jp = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      "&:hover": {
        color: e.colorIcon
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${me(e.inputAffixPadding)}`
      }
    }
  };
}, em = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: r,
    colorTextDescription: n,
    motionDurationSlow: o,
    colorIcon: a,
    colorIconHover: i,
    iconCls: s
  } = e, c = `${t}-affix-wrapper`, l = `${t}-affix-wrapper-disabled`;
  return {
    [c]: Object.assign(Object.assign(Object.assign(Object.assign({}, Zc(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0
      },
      [`> input${t}, > textarea${t}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [t]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: n,
          direction: "ltr"
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: r
        },
        "&-suffix": {
          marginInlineStart: r
        }
      }
    }), Jp(e)), {
      // password
      [`${s}${t}-password-icon`]: {
        color: a,
        cursor: "pointer",
        transition: `all ${o}`,
        "&:hover": {
          color: i
        }
      }
    }),
    // 覆盖 affix-wrapper borderRadius！
    [`${t}-underlined`]: {
      borderRadius: 0
    },
    [l]: {
      // password disabled
      [`${s}${t}-password-icon`]: {
        color: a,
        cursor: "not-allowed",
        "&:hover": {
          color: a
        }
      }
    }
  };
}, tm = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: r,
    borderRadiusSM: n
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, ec(e)), Qp(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: r,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: n
          }
        }
      }, Gp(e)), Xp(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        // Fix the issue of input use `addonAfter` param in space compact mode
        // https://github.com/ant-design/ant-design/issues/52483
        [`&:not(${t}-compact-first-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      })
    })
  };
}, rm = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e, n = `${t}-search`;
  return {
    [n]: {
      [t]: {
        "&:not([disabled]):hover, &:not([disabled]):focus": {
          [`+ ${t}-group-addon ${n}-button:not(${r}-btn-color-primary):not(${r}-btn-variant-text)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        height: e.controlHeight,
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${n}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${n}-button:not(${r}-btn-color-primary)`]: {
            color: e.colorTextDescription,
            "&:not([disabled]):hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${r}-btn-loading::before`]: {
              inset: 0
            }
          }
        }
      },
      [`${n}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      "&-large": {
        [`${t}-affix-wrapper, ${n}-button`]: {
          height: e.controlHeightLG
        }
      },
      "&-small": {
        [`${t}-affix-wrapper, ${n}-button`]: {
          height: e.controlHeightSM
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, nm = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, Jc = Pr(["Input", "Shared"], (e) => {
  const t = rt(e, Fn(e));
  return [Zp(t), em(t)];
}, An, {
  resetFont: !1
}), el = Pr(["Input", "Component"], (e) => {
  const t = rt(e, Fn(e));
  return [
    tm(t),
    rm(t),
    nm(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Vc(t)
  ];
}, An, {
  resetFont: !1
});
function om(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function am(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function ki(e, t, r) {
  var n = t.cloneNode(!0), o = Object.create(e, {
    target: {
      value: n
    },
    currentTarget: {
      value: n
    }
  });
  return n.value = r, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (n.selectionStart = t.selectionStart, n.selectionEnd = t.selectionEnd), n.setSelectionRange = function() {
    t.setSelectionRange.apply(t, arguments);
  }, o;
}
function gn(e, t, r, n) {
  if (r) {
    var o = t;
    if (t.type === "click") {
      o = ki(t, e, ""), r(o);
      return;
    }
    if (e.type !== "file" && n !== void 0) {
      o = ki(t, e, n), r(o);
      return;
    }
    r(o);
  }
}
function tl(e, t) {
  if (e) {
    e.focus(t);
    var r = t || {}, n = r.cursor;
    if (n) {
      var o = e.value.length;
      switch (n) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(o, o);
          break;
        default:
          e.setSelectionRange(0, o);
      }
    }
  }
}
var rl = /* @__PURE__ */ j.forwardRef(function(e, t) {
  var r, n, o, a = e.inputElement, i = e.children, s = e.prefixCls, c = e.prefix, l = e.suffix, u = e.addonBefore, d = e.addonAfter, v = e.className, b = e.style, m = e.disabled, p = e.readOnly, f = e.focused, y = e.triggerFocus, h = e.allowClear, x = e.value, E = e.handleReset, C = e.hidden, $ = e.classes, S = e.classNames, w = e.dataAttrs, R = e.styles, _ = e.components, F = e.onClear, T = i ?? a, A = (_ == null ? void 0 : _.affixWrapper) || "span", N = (_ == null ? void 0 : _.groupWrapper) || "span", I = (_ == null ? void 0 : _.wrapper) || "span", V = (_ == null ? void 0 : _.groupAddon) || "span", z = le(null), L = function(xe) {
    var K;
    (K = z.current) !== null && K !== void 0 && K.contains(xe.target) && (y == null || y());
  }, k = am(e), U = /* @__PURE__ */ Ol(T, {
    value: x,
    className: Q((r = T.props) === null || r === void 0 ? void 0 : r.className, !k && (S == null ? void 0 : S.variant)) || null
  }), J = le(null);
  if (j.useImperativeHandle(t, function() {
    return {
      nativeElement: J.current || z.current
    };
  }), k) {
    var q = null;
    if (h) {
      var D = !m && !p && x, M = "".concat(s, "-clear-icon"), W = Z(h) === "object" && h !== null && h !== void 0 && h.clearIcon ? h.clearIcon : "✖";
      q = /* @__PURE__ */ j.createElement("button", {
        type: "button",
        tabIndex: -1,
        onClick: function(xe) {
          E == null || E(xe), F == null || F();
        },
        onMouseDown: function(xe) {
          return xe.preventDefault();
        },
        className: Q(M, O(O({}, "".concat(M, "-hidden"), !D), "".concat(M, "-has-suffix"), !!l))
      }, W);
    }
    var B = "".concat(s, "-affix-wrapper"), ne = Q(B, O(O(O(O(O({}, "".concat(s, "-disabled"), m), "".concat(B, "-disabled"), m), "".concat(B, "-focused"), f), "".concat(B, "-readonly"), p), "".concat(B, "-input-with-clear-btn"), l && h && x), $ == null ? void 0 : $.affixWrapper, S == null ? void 0 : S.affixWrapper, S == null ? void 0 : S.variant), X = (l || h) && /* @__PURE__ */ j.createElement("span", {
      className: Q("".concat(s, "-suffix"), S == null ? void 0 : S.suffix),
      style: R == null ? void 0 : R.suffix
    }, q, l);
    U = /* @__PURE__ */ j.createElement(A, _e({
      className: ne,
      style: R == null ? void 0 : R.affixWrapper,
      onClick: L
    }, w == null ? void 0 : w.affixWrapper, {
      ref: z
    }), c && /* @__PURE__ */ j.createElement("span", {
      className: Q("".concat(s, "-prefix"), S == null ? void 0 : S.prefix),
      style: R == null ? void 0 : R.prefix
    }, c), U, X);
  }
  if (om(e)) {
    var ie = "".concat(s, "-group"), ue = "".concat(ie, "-addon"), de = "".concat(ie, "-wrapper"), Se = Q("".concat(s, "-wrapper"), ie, $ == null ? void 0 : $.wrapper, S == null ? void 0 : S.wrapper), he = Q(de, O({}, "".concat(de, "-disabled"), m), $ == null ? void 0 : $.group, S == null ? void 0 : S.groupWrapper);
    U = /* @__PURE__ */ j.createElement(N, {
      className: he,
      ref: J
    }, /* @__PURE__ */ j.createElement(I, {
      className: Se
    }, u && /* @__PURE__ */ j.createElement(V, {
      className: ue
    }, u), U, d && /* @__PURE__ */ j.createElement(V, {
      className: ue
    }, d)));
  }
  return /* @__PURE__ */ j.cloneElement(U, {
    className: Q((n = U.props) === null || n === void 0 ? void 0 : n.className, v) || null,
    style: P(P({}, (o = U.props) === null || o === void 0 ? void 0 : o.style), b),
    hidden: C
  });
}), im = ["show"];
function nl(e, t) {
  return g.useMemo(function() {
    var r = {};
    t && (r.show = Z(t) === "object" && t.formatter ? t.formatter : !!t), r = P(P({}, r), e);
    var n = r, o = n.show, a = We(n, im);
    return P(P({}, a), {}, {
      show: !!o,
      showFormatter: typeof o == "function" ? o : void 0,
      strategy: a.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var sm = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], cm = /* @__PURE__ */ Vt(function(e, t) {
  var r = e.autoComplete, n = e.onChange, o = e.onFocus, a = e.onBlur, i = e.onPressEnter, s = e.onKeyDown, c = e.onKeyUp, l = e.prefixCls, u = l === void 0 ? "rc-input" : l, d = e.disabled, v = e.htmlSize, b = e.className, m = e.maxLength, p = e.suffix, f = e.showCount, y = e.count, h = e.type, x = h === void 0 ? "text" : h, E = e.classes, C = e.classNames, $ = e.styles, S = e.onCompositionStart, w = e.onCompositionEnd, R = We(e, sm), _ = It(!1), F = G(_, 2), T = F[0], A = F[1], N = le(!1), I = le(!1), V = le(null), z = le(null), L = function(ee) {
    V.current && tl(V.current, ee);
  }, k = Sn(e.defaultValue, {
    value: e.value
  }), U = G(k, 2), J = U[0], q = U[1], D = J == null ? "" : String(J), M = It(null), W = G(M, 2), B = W[0], ne = W[1], X = nl(y, f), ie = X.max || m, ue = X.strategy(D), de = !!ie && ue > ie;
  Gi(t, function() {
    var te;
    return {
      focus: L,
      blur: function() {
        var ge;
        (ge = V.current) === null || ge === void 0 || ge.blur();
      },
      setSelectionRange: function(ge, Ze, ke) {
        var Ge;
        (Ge = V.current) === null || Ge === void 0 || Ge.setSelectionRange(ge, Ze, ke);
      },
      select: function() {
        var ge;
        (ge = V.current) === null || ge === void 0 || ge.select();
      },
      input: V.current,
      nativeElement: ((te = z.current) === null || te === void 0 ? void 0 : te.nativeElement) || V.current
    };
  }), Be(function() {
    I.current && (I.current = !1), A(function(te) {
      return te && d ? !1 : te;
    });
  }, [d]);
  var Se = function(ee, ge, Ze) {
    var ke = ge;
    if (!N.current && X.exceedFormatter && X.max && X.strategy(ge) > X.max) {
      if (ke = X.exceedFormatter(ge, {
        max: X.max
      }), ge !== ke) {
        var Ge, qe;
        ne([((Ge = V.current) === null || Ge === void 0 ? void 0 : Ge.selectionStart) || 0, ((qe = V.current) === null || qe === void 0 ? void 0 : qe.selectionEnd) || 0]);
      }
    } else if (Ze.source === "compositionEnd")
      return;
    q(ke), V.current && gn(V.current, ee, n, ke);
  };
  Be(function() {
    if (B) {
      var te;
      (te = V.current) === null || te === void 0 || te.setSelectionRange.apply(te, Y(B));
    }
  }, [B]);
  var he = function(ee) {
    Se(ee, ee.target.value, {
      source: "change"
    });
  }, H = function(ee) {
    N.current = !1, Se(ee, ee.currentTarget.value, {
      source: "compositionEnd"
    }), w == null || w(ee);
  }, xe = function(ee) {
    i && ee.key === "Enter" && !I.current && (I.current = !0, i(ee)), s == null || s(ee);
  }, K = function(ee) {
    ee.key === "Enter" && (I.current = !1), c == null || c(ee);
  }, oe = function(ee) {
    A(!0), o == null || o(ee);
  }, be = function(ee) {
    I.current && (I.current = !1), A(!1), a == null || a(ee);
  }, se = function(ee) {
    q(""), L(), V.current && gn(V.current, ee, n);
  }, Pe = de && "".concat(u, "-out-of-range"), ye = function() {
    var ee = xa(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames",
      "onClear"
    ]);
    return /* @__PURE__ */ j.createElement("input", _e({
      autoComplete: r
    }, ee, {
      onChange: he,
      onFocus: oe,
      onBlur: be,
      onKeyDown: xe,
      onKeyUp: K,
      className: Q(u, O({}, "".concat(u, "-disabled"), d), C == null ? void 0 : C.input),
      style: $ == null ? void 0 : $.input,
      ref: V,
      size: v,
      type: x,
      onCompositionStart: function(Ze) {
        N.current = !0, S == null || S(Ze);
      },
      onCompositionEnd: H
    }));
  }, Ce = function() {
    var ee = Number(ie) > 0;
    if (p || X.show) {
      var ge = X.showFormatter ? X.showFormatter({
        value: D,
        count: ue,
        maxLength: ie
      }) : "".concat(ue).concat(ee ? " / ".concat(ie) : "");
      return /* @__PURE__ */ j.createElement(j.Fragment, null, X.show && /* @__PURE__ */ j.createElement("span", {
        className: Q("".concat(u, "-show-count-suffix"), O({}, "".concat(u, "-show-count-has-suffix"), !!p), C == null ? void 0 : C.count),
        style: P({}, $ == null ? void 0 : $.count)
      }, ge), p);
    }
    return null;
  };
  return /* @__PURE__ */ j.createElement(rl, _e({}, R, {
    prefixCls: u,
    className: Q(b, Pe),
    handleReset: se,
    value: D,
    focused: T,
    triggerFocus: L,
    suffix: Ce(),
    disabled: d,
    classes: E,
    classNames: C,
    styles: $,
    ref: z
  }), ye());
});
const ol = (e) => {
  let t;
  return typeof e == "object" && (e != null && e.clearIcon) ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ j.createElement(yc, null)
  }), t;
};
function al(e, t) {
  const r = le([]), n = () => {
    r.current.push(setTimeout(() => {
      var o, a, i, s;
      !((o = e.current) === null || o === void 0) && o.input && ((a = e.current) === null || a === void 0 ? void 0 : a.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((s = e.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return Be(() => (t && n(), () => r.current.forEach((o) => {
    o && clearTimeout(o);
  })), []), n;
}
function lm(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var um = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Ir = /* @__PURE__ */ Vt((e, t) => {
  const {
    prefixCls: r,
    bordered: n = !0,
    status: o,
    size: a,
    disabled: i,
    onBlur: s,
    onFocus: c,
    suffix: l,
    allowClear: u,
    addonAfter: d,
    addonBefore: v,
    className: b,
    style: m,
    styles: p,
    rootClassName: f,
    onChange: y,
    classNames: h,
    variant: x
  } = e, E = um(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: se
    } = lt("Input");
    se(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: C,
    direction: $,
    allowClear: S,
    autoComplete: w,
    className: R,
    style: _,
    classNames: F,
    styles: T
  } = ha("input"), A = C("input", r), N = le(null), I = Cc(A), [V, z, L] = Jc(A, f), [k] = el(A, I), {
    compactSize: U,
    compactItemClassnames: J
  } = En(A, $), q = Fr((se) => {
    var Pe;
    return (Pe = a ?? U) !== null && Pe !== void 0 ? Pe : se;
  }), D = j.useContext(jt), M = i ?? D, {
    status: W,
    hasFeedback: B,
    feedbackIcon: ne
  } = He(xt), X = Oa(W, o), ie = lm(e) || !!B, ue = le(ie);
  if (process.env.NODE_ENV !== "production") {
    const se = lt("Input");
    Be(() => {
      var Pe;
      ie && !ue.current && process.env.NODE_ENV !== "production" && se(document.activeElement === ((Pe = N.current) === null || Pe === void 0 ? void 0 : Pe.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), ue.current = ie;
    }, [ie]);
  }
  const de = al(N, !0), Se = (se) => {
    de(), s == null || s(se);
  }, he = (se) => {
    de(), c == null || c(se);
  }, H = (se) => {
    de(), y == null || y(se);
  }, xe = (B || l) && /* @__PURE__ */ j.createElement(j.Fragment, null, l, B && ne), K = ol(u ?? S), [oe, be] = Gc("input", x, n);
  return V(k(/* @__PURE__ */ j.createElement(cm, Object.assign({
    ref: or(t, N),
    prefixCls: A,
    autoComplete: w
  }, E, {
    disabled: M,
    onBlur: Se,
    onFocus: he,
    style: Object.assign(Object.assign({}, _), m),
    styles: Object.assign(Object.assign({}, T), p),
    suffix: xe,
    allowClear: K,
    className: Q(b, f, L, I, J, R),
    onChange: H,
    addonBefore: v && /* @__PURE__ */ j.createElement(zi, {
      form: !0,
      space: !0
    }, v),
    addonAfter: d && /* @__PURE__ */ j.createElement(zi, {
      form: !0,
      space: !0
    }, d),
    classNames: Object.assign(Object.assign(Object.assign({}, h), F), {
      input: Q({
        [`${A}-sm`]: q === "small",
        [`${A}-lg`]: q === "large",
        [`${A}-rtl`]: $ === "rtl"
      }, h == null ? void 0 : h.input, F.input, z),
      variant: Q({
        [`${A}-${oe}`]: be
      }, ea(A, X)),
      affixWrapper: Q({
        [`${A}-affix-wrapper-sm`]: q === "small",
        [`${A}-affix-wrapper-lg`]: q === "large",
        [`${A}-affix-wrapper-rtl`]: $ === "rtl"
      }, z),
      wrapper: Q({
        [`${A}-group-rtl`]: $ === "rtl"
      }, z),
      groupWrapper: Q({
        [`${A}-group-wrapper-sm`]: q === "small",
        [`${A}-group-wrapper-lg`]: q === "large",
        [`${A}-group-wrapper-rtl`]: $ === "rtl",
        [`${A}-group-wrapper-${oe}`]: be
      }, ea(`${A}-group-wrapper`, X, B), z)
    })
  }))));
});
process.env.NODE_ENV !== "production" && (Ir.displayName = "Input");
var dm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" }, fm = function(t, r) {
  return /* @__PURE__ */ g.createElement(Pt, _e({}, t, {
    ref: r,
    icon: dm
  }));
}, il = /* @__PURE__ */ g.forwardRef(fm);
process.env.NODE_ENV !== "production" && (il.displayName = "EyeOutlined");
const vm = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = He(je), {
    prefixCls: n,
    className: o
  } = e, a = t("input-group", n), i = t("input"), [s, c, l] = el(i), u = Q(a, l, {
    [`${a}-lg`]: e.size === "large",
    [`${a}-sm`]: e.size === "small",
    [`${a}-compact`]: e.compact,
    [`${a}-rtl`]: r === "rtl"
  }, c, o), d = He(xt), v = Mt(() => Object.assign(Object.assign({}, d), {
    isFormItemInput: !1
  }), [d]);
  return process.env.NODE_ENV !== "production" && lt("Input.Group").deprecated(!1, "Input.Group", "Space.Compact"), s(/* @__PURE__ */ g.createElement("span", {
    className: u,
    style: e.style,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  }, /* @__PURE__ */ g.createElement(xt.Provider, {
    value: v
  }, e.children)));
}, gm = (e) => {
  const {
    componentCls: t,
    paddingXS: r
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      alignItems: "center",
      flexWrap: "nowrap",
      columnGap: r,
      [`${t}-input-wrapper`]: {
        position: "relative",
        [`${t}-mask-icon`]: {
          position: "absolute",
          zIndex: "1",
          top: "50%",
          right: "50%",
          transform: "translate(50%, -50%)",
          pointerEvents: "none"
        },
        [`${t}-mask-input`]: {
          color: "transparent",
          caretColor: e.colorText
        },
        [`${t}-mask-input[type=number]::-webkit-inner-spin-button`]: {
          "-webkit-appearance": "none",
          margin: 0
        },
        [`${t}-mask-input[type=number]`]: {
          "-moz-appearance": "textfield"
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      [`${t}-input`]: {
        textAlign: "center",
        paddingInline: e.paddingXXS
      },
      // ================= Size =================
      [`&${t}-sm ${t}-input`]: {
        paddingInline: e.calc(e.paddingXXS).div(2).equal()
      },
      [`&${t}-lg ${t}-input`]: {
        paddingInline: e.paddingXS
      }
    }
  };
}, pm = Pr(["Input", "OTP"], (e) => {
  const t = rt(e, Fn(e));
  return gm(t);
}, An);
var mm = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const hm = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    className: r,
    value: n,
    onChange: o,
    onActiveChange: a,
    index: i,
    mask: s
  } = e, c = mm(e, ["className", "value", "onChange", "onActiveChange", "index", "mask"]), {
    getPrefixCls: l
  } = g.useContext(je), u = l("otp"), d = typeof s == "string" ? s : n, v = g.useRef(null);
  g.useImperativeHandle(t, () => v.current);
  const b = (f) => {
    o(i, f.target.value);
  }, m = () => {
    ct(() => {
      var f;
      const y = (f = v.current) === null || f === void 0 ? void 0 : f.input;
      document.activeElement === y && y && y.select();
    });
  }, p = (f) => {
    const {
      key: y,
      ctrlKey: h,
      metaKey: x
    } = f;
    y === "ArrowLeft" ? a(i - 1) : y === "ArrowRight" ? a(i + 1) : y === "z" && (h || x) ? f.preventDefault() : y === "Backspace" && !n && a(i - 1), m();
  };
  return /* @__PURE__ */ g.createElement("span", {
    className: `${u}-input-wrapper`,
    role: "presentation"
  }, s && n !== "" && n !== void 0 && /* @__PURE__ */ g.createElement("span", {
    className: `${u}-mask-icon`,
    "aria-hidden": "true"
  }, d), /* @__PURE__ */ g.createElement(Ir, Object.assign({
    "aria-label": `OTP Input ${i + 1}`,
    type: s === !0 ? "password" : "text"
  }, c, {
    ref: v,
    value: n,
    onInput: b,
    onFocus: m,
    onKeyDown: p,
    onMouseDown: m,
    onMouseUp: m,
    className: Q(r, {
      [`${u}-mask-input`]: s
    })
  })));
});
var bm = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function Xr(e) {
  return (e || "").split("");
}
const ym = (e) => {
  const {
    index: t,
    prefixCls: r,
    separator: n
  } = e, o = typeof n == "function" ? n(t) : n;
  return o ? /* @__PURE__ */ g.createElement("span", {
    className: `${r}-separator`
  }, o) : null;
}, Cm = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    prefixCls: r,
    length: n = 6,
    size: o,
    defaultValue: a,
    value: i,
    onChange: s,
    formatter: c,
    separator: l,
    variant: u,
    disabled: d,
    status: v,
    autoFocus: b,
    mask: m,
    type: p,
    onInput: f,
    inputMode: y
  } = e, h = bm(e, ["prefixCls", "length", "size", "defaultValue", "value", "onChange", "formatter", "separator", "variant", "disabled", "status", "autoFocus", "mask", "type", "onInput", "inputMode"]);
  if (process.env.NODE_ENV !== "production") {
    const M = lt("Input.OTP");
    process.env.NODE_ENV !== "production" && M(!(typeof m == "string" && m.length > 1), "usage", "`mask` prop should be a single character.");
  }
  const {
    getPrefixCls: x,
    direction: E
  } = g.useContext(je), C = x("otp", r), $ = yv(h, {
    aria: !0,
    data: !0,
    attr: !0
  }), [S, w, R] = pm(C), _ = Fr((M) => o ?? M), F = g.useContext(xt), T = Oa(F.status, v), A = g.useMemo(() => Object.assign(Object.assign({}, F), {
    status: T,
    hasFeedback: !1,
    feedbackIcon: null
  }), [F, T]), N = g.useRef(null), I = g.useRef({});
  g.useImperativeHandle(t, () => ({
    focus: () => {
      var M;
      (M = I.current[0]) === null || M === void 0 || M.focus();
    },
    blur: () => {
      var M;
      for (let W = 0; W < n; W += 1)
        (M = I.current[W]) === null || M === void 0 || M.blur();
    },
    nativeElement: N.current
  }));
  const V = (M) => c ? c(M) : M, [z, L] = g.useState(() => Xr(V(a || "")));
  g.useEffect(() => {
    i !== void 0 && L(Xr(i));
  }, [i]);
  const k = mt((M) => {
    L(M), f && f(M), s && M.length === n && M.every((W) => W) && M.some((W, B) => z[B] !== W) && s(M.join(""));
  }), U = mt((M, W) => {
    let B = Y(z);
    for (let X = 0; X < M; X += 1)
      B[X] || (B[X] = "");
    W.length <= 1 ? B[M] = W : B = B.slice(0, M).concat(Xr(W)), B = B.slice(0, n);
    for (let X = B.length - 1; X >= 0 && !B[X]; X -= 1)
      B.pop();
    const ne = V(B.map((X) => X || " ").join(""));
    return B = Xr(ne).map((X, ie) => X === " " && !B[ie] ? B[ie] : X), B;
  }), J = (M, W) => {
    var B;
    const ne = U(M, W), X = Math.min(M + W.length, n - 1);
    X !== M && ne[M] !== void 0 && ((B = I.current[X]) === null || B === void 0 || B.focus()), k(ne);
  }, q = (M) => {
    var W;
    (W = I.current[M]) === null || W === void 0 || W.focus();
  }, D = {
    variant: u,
    disabled: d,
    status: T,
    mask: m,
    type: p,
    inputMode: y
  };
  return S(/* @__PURE__ */ g.createElement("div", Object.assign({}, $, {
    ref: N,
    className: Q(C, {
      [`${C}-sm`]: _ === "small",
      [`${C}-lg`]: _ === "large",
      [`${C}-rtl`]: E === "rtl"
    }, R, w),
    role: "group"
  }), /* @__PURE__ */ g.createElement(xt.Provider, {
    value: A
  }, Array.from({
    length: n
  }).map((M, W) => {
    const B = `otp-${W}`, ne = z[W] || "";
    return /* @__PURE__ */ g.createElement(g.Fragment, {
      key: B
    }, /* @__PURE__ */ g.createElement(hm, Object.assign({
      ref: (X) => {
        I.current[W] = X;
      },
      index: W,
      size: _,
      htmlSize: 1,
      className: `${C}-input`,
      onChange: J,
      value: ne,
      onActiveChange: q,
      autoFocus: W === 0 && b
    }, D)), W < n - 1 && /* @__PURE__ */ g.createElement(ym, {
      separator: l,
      index: W,
      prefixCls: C
    }));
  }))));
});
var Sm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" }, xm = function(t, r) {
  return /* @__PURE__ */ g.createElement(Pt, _e({}, t, {
    ref: r,
    icon: Sm
  }));
}, sl = /* @__PURE__ */ g.forwardRef(xm);
process.env.NODE_ENV !== "production" && (sl.displayName = "EyeInvisibleOutlined");
var Em = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const wm = (e) => e ? /* @__PURE__ */ g.createElement(il, null) : /* @__PURE__ */ g.createElement(sl, null), Om = {
  click: "onClick",
  hover: "onMouseOver"
}, cl = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    disabled: r,
    action: n = "click",
    visibilityToggle: o = !0,
    iconRender: a = wm,
    suffix: i
  } = e, s = g.useContext(jt), c = r ?? s, l = typeof o == "object" && o.visible !== void 0, [u, d] = It(() => l ? o.visible : !1), v = le(null);
  g.useEffect(() => {
    l && d(o.visible);
  }, [l, o]);
  const b = al(v), m = () => {
    var F;
    if (c)
      return;
    u && b();
    const T = !u;
    d(T), typeof o == "object" && ((F = o.onVisibleChange) === null || F === void 0 || F.call(o, T));
  }, p = (F) => {
    const T = Om[n] || "", A = a(u), N = {
      [T]: m,
      className: `${F}-icon`,
      key: "passwordIcon",
      onMouseDown: (I) => {
        I.preventDefault();
      },
      onMouseUp: (I) => {
        I.preventDefault();
      }
    };
    return /* @__PURE__ */ g.cloneElement(/* @__PURE__ */ g.isValidElement(A) ? A : /* @__PURE__ */ g.createElement("span", null, A), N);
  }, {
    className: f,
    prefixCls: y,
    inputPrefixCls: h,
    size: x
  } = e, E = Em(e, ["className", "prefixCls", "inputPrefixCls", "size"]), {
    getPrefixCls: C
  } = g.useContext(je), $ = C("input", h), S = C("input-password", y), w = o && p(S), R = Q(S, f, {
    [`${S}-${x}`]: !!x
  }), _ = Object.assign(Object.assign({}, xa(E, ["suffix", "iconRender", "visibilityToggle"])), {
    type: u ? "text" : "password",
    className: R,
    prefixCls: $,
    suffix: /* @__PURE__ */ g.createElement(g.Fragment, null, w, i)
  });
  return x && (_.size = x), /* @__PURE__ */ g.createElement(Ir, Object.assign({
    ref: or(t, v)
  }, _));
});
process.env.NODE_ENV !== "production" && (cl.displayName = "Input.Password");
var $m = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const ll = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    prefixCls: r,
    inputPrefixCls: n,
    className: o,
    size: a,
    suffix: i,
    enterButton: s = !1,
    addonAfter: c,
    loading: l,
    disabled: u,
    onSearch: d,
    onChange: v,
    onCompositionStart: b,
    onCompositionEnd: m,
    variant: p,
    onPressEnter: f
  } = e, y = $m(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd", "variant", "onPressEnter"]), {
    getPrefixCls: h,
    direction: x
  } = g.useContext(je), E = g.useRef(!1), C = h("input-search", r), $ = h("input", n), {
    compactSize: S
  } = En(C, x), w = Fr((D) => {
    var M;
    return (M = a ?? S) !== null && M !== void 0 ? M : D;
  }), R = g.useRef(null), _ = (D) => {
    D != null && D.target && D.type === "click" && d && d(D.target.value, D, {
      source: "clear"
    }), v == null || v(D);
  }, F = (D) => {
    var M;
    document.activeElement === ((M = R.current) === null || M === void 0 ? void 0 : M.input) && D.preventDefault();
  }, T = (D) => {
    var M, W;
    d && d((W = (M = R.current) === null || M === void 0 ? void 0 : M.input) === null || W === void 0 ? void 0 : W.value, D, {
      source: "input"
    });
  }, A = (D) => {
    E.current || l || (f == null || f(D), T(D));
  }, N = typeof s == "boolean" ? /* @__PURE__ */ g.createElement(qc, null) : null, I = `${C}-button`;
  let V;
  const z = s || {}, L = z.type && z.type.__ANT_BUTTON === !0;
  L || z.type === "button" ? V = un(z, Object.assign({
    onMouseDown: F,
    onClick: (D) => {
      var M, W;
      (W = (M = z == null ? void 0 : z.props) === null || M === void 0 ? void 0 : M.onClick) === null || W === void 0 || W.call(M, D), T(D);
    },
    key: "enterButton"
  }, L ? {
    className: I,
    size: w
  } : {})) : V = /* @__PURE__ */ g.createElement(Tn, {
    className: I,
    color: s ? "primary" : "default",
    size: w,
    disabled: u,
    key: "enterButton",
    onMouseDown: F,
    onClick: T,
    loading: l,
    icon: N,
    variant: p === "borderless" || p === "filled" || p === "underlined" ? "text" : s ? "solid" : void 0
  }, s), c && (V = [V, un(c, {
    key: "addonAfter"
  })]);
  const k = Q(C, {
    [`${C}-rtl`]: x === "rtl",
    [`${C}-${w}`]: !!w,
    [`${C}-with-button`]: !!s
  }, o), U = (D) => {
    E.current = !0, b == null || b(D);
  }, J = (D) => {
    E.current = !1, m == null || m(D);
  }, q = Object.assign(Object.assign({}, y), {
    className: k,
    prefixCls: $,
    type: "search",
    size: w,
    variant: p,
    onPressEnter: A,
    onCompositionStart: U,
    onCompositionEnd: J,
    addonAfter: V,
    suffix: i,
    onChange: _,
    disabled: u
  });
  return /* @__PURE__ */ g.createElement(Ir, Object.assign({
    ref: or(R, t)
  }, q));
});
process.env.NODE_ENV !== "production" && (ll.displayName = "Search");
var Rm = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, _m = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], eo = {}, Ye;
function Pm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && eo[r])
    return eo[r];
  var n = window.getComputedStyle(e), o = n.getPropertyValue("box-sizing") || n.getPropertyValue("-moz-box-sizing") || n.getPropertyValue("-webkit-box-sizing"), a = parseFloat(n.getPropertyValue("padding-bottom")) + parseFloat(n.getPropertyValue("padding-top")), i = parseFloat(n.getPropertyValue("border-bottom-width")) + parseFloat(n.getPropertyValue("border-top-width")), s = _m.map(function(l) {
    return "".concat(l, ":").concat(n.getPropertyValue(l));
  }).join(";"), c = {
    sizingStyle: s,
    paddingSize: a,
    borderSize: i,
    boxSizing: o
  };
  return t && r && (eo[r] = c), c;
}
function Tm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Ye || (Ye = document.createElement("textarea"), Ye.setAttribute("tab-index", "-1"), Ye.setAttribute("aria-hidden", "true"), Ye.setAttribute("name", "hiddenTextarea"), document.body.appendChild(Ye)), e.getAttribute("wrap") ? Ye.setAttribute("wrap", e.getAttribute("wrap")) : Ye.removeAttribute("wrap");
  var o = Pm(e, t), a = o.paddingSize, i = o.borderSize, s = o.boxSizing, c = o.sizingStyle;
  Ye.setAttribute("style", "".concat(c, ";").concat(Rm)), Ye.value = e.value || e.placeholder || "";
  var l = void 0, u = void 0, d, v = Ye.scrollHeight;
  if (s === "border-box" ? v += i : s === "content-box" && (v -= a), r !== null || n !== null) {
    Ye.value = " ";
    var b = Ye.scrollHeight - a;
    r !== null && (l = b * r, s === "border-box" && (l = l + a + i), v = Math.max(l, v)), n !== null && (u = b * n, s === "border-box" && (u = u + a + i), d = v > u ? "" : "hidden", v = Math.min(u, v));
  }
  var m = {
    height: v,
    overflowY: d,
    resize: "none"
  };
  return l && (m.minHeight = l), u && (m.maxHeight = u), m;
}
var Fm = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], to = 0, ro = 1, no = 2, Am = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e, n = r.prefixCls, o = r.defaultValue, a = r.value, i = r.autoSize, s = r.onResize, c = r.className, l = r.style, u = r.disabled, d = r.onChange, v = r.onInternalAutoSize, b = We(r, Fm), m = Sn(o, {
    value: a,
    postState: function(M) {
      return M ?? "";
    }
  }), p = G(m, 2), f = p[0], y = p[1], h = function(M) {
    y(M.target.value), d == null || d(M);
  }, x = g.useRef();
  g.useImperativeHandle(t, function() {
    return {
      textArea: x.current
    };
  });
  var E = g.useMemo(function() {
    return i && Z(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), C = G(E, 2), $ = C[0], S = C[1], w = !!i, R = g.useState(no), _ = G(R, 2), F = _[0], T = _[1], A = g.useState(), N = G(A, 2), I = N[0], V = N[1], z = function() {
    T(to), process.env.NODE_ENV === "test" && (v == null || v());
  };
  Er(function() {
    w && z();
  }, [a, $, S, w]), Er(function() {
    if (F === to)
      T(ro);
    else if (F === ro) {
      var D = Tm(x.current, !1, $, S);
      T(no), V(D);
    }
  }, [F]);
  var L = g.useRef(), k = function() {
    ct.cancel(L.current);
  }, U = function(M) {
    F === no && (s == null || s(M), i && (k(), L.current = ct(function() {
      z();
    })));
  };
  g.useEffect(function() {
    return k;
  }, []);
  var J = w ? I : null, q = P(P({}, l), J);
  return (F === to || F === ro) && (q.overflowY = "hidden", q.overflowX = "hidden"), /* @__PURE__ */ g.createElement(ca, {
    onResize: U,
    disabled: !(i || s)
  }, /* @__PURE__ */ g.createElement("textarea", _e({}, b, {
    ref: x,
    style: q,
    className: Q(n, c, O({}, "".concat(n, "-disabled"), u)),
    disabled: u,
    value: f,
    onChange: h
  })));
}), Nm = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"], Im = /* @__PURE__ */ j.forwardRef(function(e, t) {
  var r, n = e.defaultValue, o = e.value, a = e.onFocus, i = e.onBlur, s = e.onChange, c = e.allowClear, l = e.maxLength, u = e.onCompositionStart, d = e.onCompositionEnd, v = e.suffix, b = e.prefixCls, m = b === void 0 ? "rc-textarea" : b, p = e.showCount, f = e.count, y = e.className, h = e.style, x = e.disabled, E = e.hidden, C = e.classNames, $ = e.styles, S = e.onResize, w = e.onClear, R = e.onPressEnter, _ = e.readOnly, F = e.autoSize, T = e.onKeyDown, A = We(e, Nm), N = Sn(n, {
    value: o,
    defaultValue: n
  }), I = G(N, 2), V = I[0], z = I[1], L = V == null ? "" : String(V), k = j.useState(!1), U = G(k, 2), J = U[0], q = U[1], D = j.useRef(!1), M = j.useState(null), W = G(M, 2), B = W[0], ne = W[1], X = le(null), ie = le(null), ue = function() {
    var ce;
    return (ce = ie.current) === null || ce === void 0 ? void 0 : ce.textArea;
  }, de = function() {
    ue().focus();
  };
  Gi(t, function() {
    var Ee;
    return {
      resizableTextArea: ie.current,
      focus: de,
      blur: function() {
        ue().blur();
      },
      nativeElement: ((Ee = X.current) === null || Ee === void 0 ? void 0 : Ee.nativeElement) || ue()
    };
  }), Be(function() {
    q(function(Ee) {
      return !x && Ee;
    });
  }, [x]);
  var Se = j.useState(null), he = G(Se, 2), H = he[0], xe = he[1];
  j.useEffect(function() {
    if (H) {
      var Ee;
      (Ee = ue()).setSelectionRange.apply(Ee, Y(H));
    }
  }, [H]);
  var K = nl(f, p), oe = (r = K.max) !== null && r !== void 0 ? r : l, be = Number(oe) > 0, se = K.strategy(L), Pe = !!oe && se > oe, ye = function(ce, Ue) {
    var dt = Ue;
    !D.current && K.exceedFormatter && K.max && K.strategy(Ue) > K.max && (dt = K.exceedFormatter(Ue, {
      max: K.max
    }), Ue !== dt && xe([ue().selectionStart || 0, ue().selectionEnd || 0])), z(dt), gn(ce.currentTarget, ce, s, dt);
  }, Ce = function(ce) {
    D.current = !0, u == null || u(ce);
  }, te = function(ce) {
    D.current = !1, ye(ce, ce.currentTarget.value), d == null || d(ce);
  }, ee = function(ce) {
    ye(ce, ce.target.value);
  }, ge = function(ce) {
    ce.key === "Enter" && R && R(ce), T == null || T(ce);
  }, Ze = function(ce) {
    q(!0), a == null || a(ce);
  }, ke = function(ce) {
    q(!1), i == null || i(ce);
  }, Ge = function(ce) {
    z(""), de(), gn(ue(), ce, s);
  }, qe = v, ut;
  K.show && (K.showFormatter ? ut = K.showFormatter({
    value: L,
    count: se,
    maxLength: oe
  }) : ut = "".concat(se).concat(be ? " / ".concat(oe) : ""), qe = /* @__PURE__ */ j.createElement(j.Fragment, null, qe, /* @__PURE__ */ j.createElement("span", {
    className: Q("".concat(m, "-data-count"), C == null ? void 0 : C.count),
    style: $ == null ? void 0 : $.count
  }, ut)));
  var Lt = function(ce) {
    var Ue;
    S == null || S(ce), (Ue = ue()) !== null && Ue !== void 0 && Ue.style.height && ne(!0);
  }, Dt = !F && !p && !c;
  return /* @__PURE__ */ j.createElement(rl, {
    ref: X,
    value: L,
    allowClear: c,
    handleReset: Ge,
    suffix: qe,
    prefixCls: m,
    classNames: P(P({}, C), {}, {
      affixWrapper: Q(C == null ? void 0 : C.affixWrapper, O(O({}, "".concat(m, "-show-count"), p), "".concat(m, "-textarea-allow-clear"), c))
    }),
    disabled: x,
    focused: J,
    className: Q(y, Pe && "".concat(m, "-out-of-range")),
    style: P(P({}, h), B && !Dt ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof ut == "string" ? ut : void 0
      }
    },
    hidden: E,
    readOnly: _,
    onClear: w
  }, /* @__PURE__ */ j.createElement(Am, _e({}, A, {
    autoSize: F,
    maxLength: l,
    onKeyDown: ge,
    onChange: ee,
    onFocus: Ze,
    onBlur: ke,
    onCompositionStart: Ce,
    onCompositionEnd: te,
    className: Q(C == null ? void 0 : C.textarea),
    style: P(P({}, $ == null ? void 0 : $.textarea), {}, {
      resize: h == null ? void 0 : h.resize
    }),
    disabled: x,
    prefixCls: m,
    onResize: Lt,
    ref: ie,
    readOnly: _
  })));
});
const Mm = (e) => {
  const {
    componentCls: t,
    paddingLG: r
  } = e, n = `${t}-textarea`;
  return {
    // Raw Textarea
    [`textarea${t}`]: {
      maxWidth: "100%",
      // prevent textarea resize from coming out of its container
      height: "auto",
      minHeight: e.controlHeight,
      lineHeight: e.lineHeight,
      verticalAlign: "bottom",
      transition: `all ${e.motionDurationSlow}`,
      resize: "vertical",
      [`&${t}-mouse-active`]: {
        transition: `all ${e.motionDurationSlow}, height 0s, width 0s`
      }
    },
    // Wrapper for resize
    [`${t}-textarea-affix-wrapper-resize-dirty`]: {
      width: "auto"
    },
    [n]: {
      position: "relative",
      "&-show-count": {
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${t},
        &-affix-wrapper${n}-has-feedback ${t}
      `]: {
        paddingInlineEnd: r
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          minHeight: e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingInline,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${n}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-rtl`]: {
        [`${t}-suffix`]: {
          [`${t}-data-count`]: {
            direction: "ltr",
            insetInlineStart: 0
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
        [`${t}-suffix`]: {
          [`${t}-clear-icon`]: {
            insetInlineEnd: e.paddingInlineSM
          }
        }
      }
    }
  };
}, jm = Pr(["Input", "TextArea"], (e) => {
  const t = rt(e, Fn(e));
  return Mm(t);
}, An, {
  resetFont: !1
});
var Vm = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const zm = /* @__PURE__ */ Vt((e, t) => {
  var r;
  const {
    prefixCls: n,
    bordered: o = !0,
    size: a,
    disabled: i,
    status: s,
    allowClear: c,
    classNames: l,
    rootClassName: u,
    className: d,
    style: v,
    styles: b,
    variant: m,
    showCount: p,
    onMouseDown: f,
    onResize: y
  } = e, h = Vm(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant", "showCount", "onMouseDown", "onResize"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: K
    } = lt("TextArea");
    K(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: x,
    direction: E,
    allowClear: C,
    autoComplete: $,
    className: S,
    style: w,
    classNames: R,
    styles: _
  } = ha("textArea"), F = g.useContext(jt), T = i ?? F, {
    status: A,
    hasFeedback: N,
    feedbackIcon: I
  } = g.useContext(xt), V = Oa(A, s), z = g.useRef(null);
  g.useImperativeHandle(t, () => {
    var K;
    return {
      resizableTextArea: (K = z.current) === null || K === void 0 ? void 0 : K.resizableTextArea,
      focus: (oe) => {
        var be, se;
        tl((se = (be = z.current) === null || be === void 0 ? void 0 : be.resizableTextArea) === null || se === void 0 ? void 0 : se.textArea, oe);
      },
      blur: () => {
        var oe;
        return (oe = z.current) === null || oe === void 0 ? void 0 : oe.blur();
      }
    };
  });
  const L = x("input", n), k = Cc(L), [U, J, q] = Jc(L, u), [D] = jm(L, k), {
    compactSize: M,
    compactItemClassnames: W
  } = En(L, E), B = Fr((K) => {
    var oe;
    return (oe = a ?? M) !== null && oe !== void 0 ? oe : K;
  }), [ne, X] = Gc("textArea", m, o), ie = ol(c ?? C), [ue, de] = g.useState(!1), [Se, he] = g.useState(!1), H = (K) => {
    de(!0), f == null || f(K);
    const oe = () => {
      de(!1), document.removeEventListener("mouseup", oe);
    };
    document.addEventListener("mouseup", oe);
  }, xe = (K) => {
    var oe, be;
    if (y == null || y(K), ue && typeof getComputedStyle == "function") {
      const se = (be = (oe = z.current) === null || oe === void 0 ? void 0 : oe.nativeElement) === null || be === void 0 ? void 0 : be.querySelector("textarea");
      se && getComputedStyle(se).resize === "both" && he(!0);
    }
  };
  return U(D(/* @__PURE__ */ g.createElement(Im, Object.assign({
    autoComplete: $
  }, h, {
    style: Object.assign(Object.assign({}, w), v),
    styles: Object.assign(Object.assign({}, _), b),
    disabled: T,
    allowClear: ie,
    className: Q(
      q,
      k,
      d,
      u,
      W,
      S,
      // Only for wrapper
      Se && `${L}-textarea-affix-wrapper-resize-dirty`
    ),
    classNames: Object.assign(Object.assign(Object.assign({}, l), R), {
      textarea: Q({
        [`${L}-sm`]: B === "small",
        [`${L}-lg`]: B === "large"
      }, J, l == null ? void 0 : l.textarea, R.textarea, ue && `${L}-mouse-active`),
      variant: Q({
        [`${L}-${ne}`]: X
      }, ea(L, V)),
      affixWrapper: Q(`${L}-textarea-affix-wrapper`, {
        [`${L}-affix-wrapper-rtl`]: E === "rtl",
        [`${L}-affix-wrapper-sm`]: B === "small",
        [`${L}-affix-wrapper-lg`]: B === "large",
        [`${L}-textarea-show-count`]: p || ((r = e.count) === null || r === void 0 ? void 0 : r.show)
      }, J)
    }),
    prefixCls: L,
    suffix: N && /* @__PURE__ */ g.createElement("span", {
      className: `${L}-textarea-suffix`
    }, I),
    showCount: p,
    ref: z,
    onResize: xe,
    onMouseDown: H
  }))));
}), ur = Ir;
ur.Group = vm;
ur.Search = ll;
ur.TextArea = zm;
ur.Password = cl;
ur.OTP = Cm;
function ta(...e) {
  return e.filter(Boolean).join(" ");
}
const Lm = {
  sm: { root: "rl-h-10 rl-px-3", text: "rl-text-sm" },
  // ~40px
  md: { root: "rl-h-12 rl-px-4", text: "rl-text-base" },
  // ~48px
  lg: { root: "rl-h-14 rl-px-5", text: "rl-text-lg" }
  // ~56px
};
function Dm(e, t = "a") {
  const r = "rl-border rl-border-gray-c rl-bg-white rl-text-gray-d placeholder:rl-text-gray-b";
  if (e === "blue") {
    const i = t ?? "a", s = `focus:rl-border-blue-${i} focus-within:rl-border-blue-${i} hover:rl-border-blue-${i}`;
    return { base: ta(r), focus: s };
  }
  if (e === "red") {
    const i = ["a", "b", "c"].includes(t) ? t : "a";
    return {
      base: `rl-border rl-border-red-${i} rl-bg-redtint rl-text-gray-d placeholder:rl-text-gray-b rl-rounded-md`,
      focus: `hover:rl-border-red-${i} focus:rl-border-red-${i} focus-within:rl-border-red-${i}`
    };
  }
  const n = ["a", "b", "c"].includes(t) ? t : "a", o = `rl-border rl-border-green-${n} rl-bg-white rl-text-gray-d placeholder:rl-text-gray-b`, a = `focus:rl-border-green-${n} focus-within:rl-border-green-${n}`;
  return { base: o, focus: a };
}
const Gm = j.forwardRef(function({ className: t, rootClassName: r, sizeDs: n = "md", rlVariant: o = "blue", tone: a = "a", fullWidth: i = !1, disabled: s, ...c }, l) {
  const u = Lm[n], d = Dm(o, a), v = ta(
    "rl-rounded-md rl-transition-colors rl-duration-150",
    u.root,
    d.base,
    d.focus,
    // fullWidth ? 'rl-block' : 'rl-inline-block',
    // fullWidth ? 'rl-w-full rl-block' : 'rl-w-auto rl-inline-block',
    s && "rl-opacity-60 rl-cursor-not-allowed",
    t
    // поддержим старое поведение: кто-то может кидать классы сюда
  ), b = ta("rl-bg-transparent rl-outline-none", u.text, "placeholder:rl-text-gray-b");
  return /* @__PURE__ */ Cl(
    ur,
    {
      ...c,
      ref: l,
      disabled: s,
      rootClassName: v,
      className: b
    }
  );
});
export {
  Gm as Input
};
//# sourceMappingURL=index.mjs.map
