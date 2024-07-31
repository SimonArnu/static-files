var Md = Object.defineProperty;
var jd = (e, t, n) =>
  t in e
    ? Md(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ra = (e, t, n) => jd(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function $u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Uu = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rr = Symbol.for("react.element"),
  Ad = Symbol.for("react.portal"),
  zd = Symbol.for("react.fragment"),
  Dd = Symbol.for("react.strict_mode"),
  Id = Symbol.for("react.profiler"),
  $d = Symbol.for("react.provider"),
  Ud = Symbol.for("react.context"),
  Bd = Symbol.for("react.forward_ref"),
  Vd = Symbol.for("react.suspense"),
  Hd = Symbol.for("react.memo"),
  Wd = Symbol.for("react.lazy"),
  ia = Symbol.iterator;
function Kd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ia && e[ia]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Bu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Vu = Object.assign,
  Hu = {};
function Fn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hu),
    (this.updater = n || Bu);
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wu() {}
Wu.prototype = Fn.prototype;
function il(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hu),
    (this.updater = n || Bu);
}
var ol = (il.prototype = new Wu());
ol.constructor = il;
Vu(ol, Fn.prototype);
ol.isPureReactComponent = !0;
var oa = Array.isArray,
  Ku = Object.prototype.hasOwnProperty,
  sl = { current: null },
  Qu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ju(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ku.call(t, r) && !Qu.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Rr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: sl.current,
  };
}
function Qd(e, t) {
  return {
    $$typeof: Rr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ll(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rr;
}
function Jd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var sa = /\/+/g;
function vo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Jd("" + e.key)
    : t.toString(36);
}
function ii(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Rr:
          case Ad:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + vo(s, 0) : r),
      oa(i)
        ? ((n = ""),
          e != null && (n = e.replace(sa, "$&/") + "/"),
          ii(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ll(i) &&
            (i = Qd(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(sa, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), oa(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + vo(o, l);
      s += ii(o, t, n, a, i);
    }
  else if (((a = Kd(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + vo(o, l++)), (s += ii(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Dr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ii(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function bd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  oi = { transition: null },
  Xd = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: oi,
    ReactCurrentOwner: sl,
  };
j.Children = {
  map: Dr,
  forEach: function (e, t, n) {
    Dr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Dr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Dr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ll(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
j.Component = Fn;
j.Fragment = zd;
j.Profiler = Id;
j.PureComponent = il;
j.StrictMode = Dd;
j.Suspense = Vd;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xd;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Vu({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = sl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Ku.call(t, a) &&
        !Qu.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Rr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ud,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: $d, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = Ju;
j.createFactory = function (e) {
  var t = Ju.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: Bd, render: e };
};
j.isValidElement = ll;
j.lazy = function (e) {
  return { $$typeof: Wd, _payload: { _status: -1, _result: e }, _init: bd };
};
j.memo = function (e, t) {
  return { $$typeof: Hd, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = oi.transition;
  oi.transition = {};
  try {
    e();
  } finally {
    oi.transition = t;
  }
};
j.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
j.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
j.useContext = function (e) {
  return de.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
j.useId = function () {
  return de.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return de.current.useRef(e);
};
j.useState = function (e) {
  return de.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return de.current.useTransition();
};
j.version = "18.2.0";
Uu.exports = j;
var me = Uu.exports;
const bu = $u(me);
var Xu = { exports: {} },
  Pe = {},
  Yu = { exports: {} },
  Gu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, L) {
    var T = N.length;
    N.push(L);
    e: for (; 0 < T; ) {
      var V = (T - 1) >>> 1,
        Z = N[V];
      if (0 < i(Z, L)) (N[V] = L), (N[T] = Z), (T = V);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var L = N[0],
      T = N.pop();
    if (T !== L) {
      N[0] = T;
      e: for (var V = 0, Z = N.length, Ar = Z >>> 1; V < Ar; ) {
        var Mt = 2 * (V + 1) - 1,
          yo = N[Mt],
          jt = Mt + 1,
          zr = N[jt];
        if (0 > i(yo, T))
          jt < Z && 0 > i(zr, yo)
            ? ((N[V] = zr), (N[jt] = T), (V = jt))
            : ((N[V] = yo), (N[Mt] = T), (V = Mt));
        else if (jt < Z && 0 > i(zr, T)) (N[V] = zr), (N[jt] = T), (V = jt);
        else break e;
      }
    }
    return L;
  }
  function i(N, L) {
    var T = N.sortIndex - L.sortIndex;
    return T !== 0 ? T : N.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    v = !1,
    g = !1,
    y = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(N) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u);
      else if (L.startTime <= N)
        r(u), (L.sortIndex = L.expirationTime), t(a, L);
      else break;
      L = n(u);
    }
  }
  function S(N) {
    if (((y = !1), m(N), !g))
      if (n(a) !== null) (g = !0), lt(k);
      else {
        var L = n(u);
        L !== null && tn(S, L.startTime - N);
      }
  }
  function k(N, L) {
    (g = !1), y && ((y = !1), h(O), (O = -1)), (v = !0);
    var T = f;
    try {
      for (
        m(L), d = n(a);
        d !== null && (!(d.expirationTime > L) || (N && !I()));

      ) {
        var V = d.callback;
        if (typeof V == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var Z = V(d.expirationTime <= L);
          (L = e.unstable_now()),
            typeof Z == "function" ? (d.callback = Z) : d === n(a) && r(a),
            m(L);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var Ar = !0;
      else {
        var Mt = n(u);
        Mt !== null && tn(S, Mt.startTime - L), (Ar = !1);
      }
      return Ar;
    } finally {
      (d = null), (f = T), (v = !1);
    }
  }
  var P = !1,
    E = null,
    O = -1,
    A = 5,
    _ = -1;
  function I() {
    return !(e.unstable_now() - _ < A);
  }
  function en() {
    if (E !== null) {
      var N = e.unstable_now();
      _ = N;
      var L = !0;
      try {
        L = E(!0, N);
      } finally {
        L ? Tt() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var Tt;
  if (typeof p == "function")
    Tt = function () {
      p(en);
    };
  else if (typeof MessageChannel < "u") {
    var st = new MessageChannel(),
      Ft = st.port2;
    (st.port1.onmessage = en),
      (Tt = function () {
        Ft.postMessage(null);
      });
  } else
    Tt = function () {
      C(en, 0);
    };
  function lt(N) {
    (E = N), P || ((P = !0), Tt());
  }
  function tn(N, L) {
    O = C(function () {
      N(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || v || ((g = !0), lt(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (N) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = f;
      }
      var T = f;
      f = L;
      try {
        return N();
      } finally {
        f = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, L) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var T = f;
      f = N;
      try {
        return L();
      } finally {
        f = T;
      }
    }),
    (e.unstable_scheduleCallback = function (N, L, T) {
      var V = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? V + T : V))
          : (T = V),
        N)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = T + Z),
        (N = {
          id: c++,
          callback: L,
          priorityLevel: N,
          startTime: T,
          expirationTime: Z,
          sortIndex: -1,
        }),
        T > V
          ? ((N.sortIndex = T),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (y ? (h(O), (O = -1)) : (y = !0), tn(S, T - V)))
          : ((N.sortIndex = Z), t(a, N), g || v || ((g = !0), lt(k))),
        N
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (N) {
      var L = f;
      return function () {
        var T = f;
        f = L;
        try {
          return N.apply(this, arguments);
        } finally {
          f = T;
        }
      };
    });
})(Gu);
Yu.exports = Gu;
var Yd = Yu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qu = me,
  Ce = Yd;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zu = new Set(),
  ur = {};
function qt(e, t) {
  Cn(e, t), Cn(e + "Capture", t);
}
function Cn(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++) Zu.add(t[e]);
}
var tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ts = Object.prototype.hasOwnProperty,
  Gd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  aa = {};
function qd(e) {
  return ts.call(aa, e)
    ? !0
    : ts.call(la, e)
    ? !1
    : Gd.test(e)
    ? (aa[e] = !0)
    : ((la[e] = !0), !1);
}
function Zd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ep(e, t, n, r) {
  if (t === null || typeof t > "u" || Zd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var al = /[\-:]([a-z])/g;
function ul(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(al, ul);
    ie[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(al, ul);
    ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(al, ul);
  ie[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cl(e, t, n, r) {
  var i = ie.hasOwnProperty(t) ? ie[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ep(t, n, i, r) && (n = null),
    r || i === null
      ? qd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = qu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ir = Symbol.for("react.element"),
  sn = Symbol.for("react.portal"),
  ln = Symbol.for("react.fragment"),
  fl = Symbol.for("react.strict_mode"),
  ns = Symbol.for("react.profiler"),
  ec = Symbol.for("react.provider"),
  tc = Symbol.for("react.context"),
  dl = Symbol.for("react.forward_ref"),
  rs = Symbol.for("react.suspense"),
  is = Symbol.for("react.suspense_list"),
  pl = Symbol.for("react.memo"),
  dt = Symbol.for("react.lazy"),
  nc = Symbol.for("react.offscreen"),
  ua = Symbol.iterator;
function Dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ua && e[ua]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  wo;
function Xn(e) {
  if (wo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      wo = (t && t[1]) || "";
    }
  return (
    `
` +
    wo +
    e
  );
}
var So = !1;
function xo(e, t) {
  if (!e || So) return "";
  So = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (So = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xn(e) : "";
}
function tp(e) {
  switch (e.tag) {
    case 5:
      return Xn(e.type);
    case 16:
      return Xn("Lazy");
    case 13:
      return Xn("Suspense");
    case 19:
      return Xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = xo(e.type, !1)), e;
    case 11:
      return (e = xo(e.type.render, !1)), e;
    case 1:
      return (e = xo(e.type, !0)), e;
    default:
      return "";
  }
}
function os(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ln:
      return "Fragment";
    case sn:
      return "Portal";
    case ns:
      return "Profiler";
    case fl:
      return "StrictMode";
    case rs:
      return "Suspense";
    case is:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case tc:
        return (e.displayName || "Context") + ".Consumer";
      case ec:
        return (e._context.displayName || "Context") + ".Provider";
      case dl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pl:
        return (
          (t = e.displayName || null), t !== null ? t : os(e.type) || "Memo"
        );
      case dt:
        (t = e._payload), (e = e._init);
        try {
          return os(e(t));
        } catch {}
    }
  return null;
}
function np(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return os(t);
    case 8:
      return t === fl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Nt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function rc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function rp(e) {
  var t = rc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function $r(e) {
  e._valueTracker || (e._valueTracker = rp(e));
}
function ic(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = rc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ss(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ca(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Nt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function oc(e, t) {
  (t = t.checked), t != null && cl(e, "checked", t, !1);
}
function ls(e, t) {
  oc(e, t);
  var n = Nt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? as(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && as(e, t.type, Nt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function fa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function as(e, t, n) {
  (t !== "number" || vi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Yn = Array.isArray;
function vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Nt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function us(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function da(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Yn(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Nt(n) };
}
function sc(e, t) {
  var n = Nt(t.value),
    r = Nt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function pa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function lc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? lc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ur,
  ac = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ur = Ur || document.createElement("div"),
          Ur.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ur.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function cr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ip = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zn).forEach(function (e) {
  ip.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zn[t] = Zn[e]);
  });
});
function uc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Zn.hasOwnProperty(e) && Zn[e])
    ? ("" + t).trim()
    : t + "px";
}
function cc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = uc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var op = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function fs(e, t) {
  if (t) {
    if (op[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function ds(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ps = null;
function hl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var hs = null,
  wn = null,
  Sn = null;
function ha(e) {
  if ((e = Tr(e))) {
    if (typeof hs != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = qi(t)), hs(e.stateNode, e.type, t));
  }
}
function fc(e) {
  wn ? (Sn ? Sn.push(e) : (Sn = [e])) : (wn = e);
}
function dc() {
  if (wn) {
    var e = wn,
      t = Sn;
    if (((Sn = wn = null), ha(e), t)) for (e = 0; e < t.length; e++) ha(t[e]);
  }
}
function pc(e, t) {
  return e(t);
}
function hc() {}
var ko = !1;
function mc(e, t, n) {
  if (ko) return e(t, n);
  ko = !0;
  try {
    return pc(e, t, n);
  } finally {
    (ko = !1), (wn !== null || Sn !== null) && (hc(), dc());
  }
}
function fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = qi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var ms = !1;
if (tt)
  try {
    var In = {};
    Object.defineProperty(In, "passive", {
      get: function () {
        ms = !0;
      },
    }),
      window.addEventListener("test", In, In),
      window.removeEventListener("test", In, In);
  } catch {
    ms = !1;
  }
function sp(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var er = !1,
  wi = null,
  Si = !1,
  gs = null,
  lp = {
    onError: function (e) {
      (er = !0), (wi = e);
    },
  };
function ap(e, t, n, r, i, o, s, l, a) {
  (er = !1), (wi = null), sp.apply(lp, arguments);
}
function up(e, t, n, r, i, o, s, l, a) {
  if ((ap.apply(this, arguments), er)) {
    if (er) {
      var u = wi;
      (er = !1), (wi = null);
    } else throw Error(x(198));
    Si || ((Si = !0), (gs = u));
  }
}
function Zt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function gc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ma(e) {
  if (Zt(e) !== e) throw Error(x(188));
}
function cp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Zt(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return ma(i), e;
        if (o === r) return ma(i), t;
        o = o.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function yc(e) {
  return (e = cp(e)), e !== null ? vc(e) : null;
}
function vc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wc = Ce.unstable_scheduleCallback,
  ga = Ce.unstable_cancelCallback,
  fp = Ce.unstable_shouldYield,
  dp = Ce.unstable_requestPaint,
  b = Ce.unstable_now,
  pp = Ce.unstable_getCurrentPriorityLevel,
  ml = Ce.unstable_ImmediatePriority,
  Sc = Ce.unstable_UserBlockingPriority,
  xi = Ce.unstable_NormalPriority,
  hp = Ce.unstable_LowPriority,
  xc = Ce.unstable_IdlePriority,
  bi = null,
  Je = null;
function mp(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function")
    try {
      Je.onCommitFiberRoot(bi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : vp,
  gp = Math.log,
  yp = Math.LN2;
function vp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((gp(e) / yp) | 0)) | 0;
}
var Br = 64,
  Vr = 4194304;
function Gn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ki(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = Gn(l)) : ((o &= s), o !== 0 && (r = Gn(o)));
  } else (s = n & ~i), s !== 0 ? (r = Gn(s)) : o !== 0 && (r = Gn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ie(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function wp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Sp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ie(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = wp(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function ys(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function kc() {
  var e = Br;
  return (Br <<= 1), !(Br & 4194240) && (Br = 64), e;
}
function Eo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Lr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
    (e[t] = n);
}
function xp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ie(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function gl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var D = 0;
function Ec(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Cc,
  yl,
  Pc,
  Nc,
  Oc,
  vs = !1,
  Hr = [],
  vt = null,
  wt = null,
  St = null,
  dr = new Map(),
  pr = new Map(),
  ht = [],
  kp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ya(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vt = null;
      break;
    case "dragenter":
    case "dragleave":
      wt = null;
      break;
    case "mouseover":
    case "mouseout":
      St = null;
      break;
    case "pointerover":
    case "pointerout":
      dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pr.delete(t.pointerId);
  }
}
function $n(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Tr(t)), t !== null && yl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Ep(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (vt = $n(vt, e, t, n, r, i)), !0;
    case "dragenter":
      return (wt = $n(wt, e, t, n, r, i)), !0;
    case "mouseover":
      return (St = $n(St, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return dr.set(o, $n(dr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), pr.set(o, $n(pr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Rc(e) {
  var t = $t(e.target);
  if (t !== null) {
    var n = Zt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gc(n)), t !== null)) {
          (e.blockedOn = t),
            Oc(e.priority, function () {
              Pc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function si(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ps = r), n.target.dispatchEvent(r), (ps = null);
    } else return (t = Tr(n)), t !== null && yl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function va(e, t, n) {
  si(e) && n.delete(t);
}
function Cp() {
  (vs = !1),
    vt !== null && si(vt) && (vt = null),
    wt !== null && si(wt) && (wt = null),
    St !== null && si(St) && (St = null),
    dr.forEach(va),
    pr.forEach(va);
}
function Un(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vs ||
      ((vs = !0),
      Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, Cp)));
}
function hr(e) {
  function t(i) {
    return Un(i, e);
  }
  if (0 < Hr.length) {
    Un(Hr[0], e);
    for (var n = 1; n < Hr.length; n++) {
      var r = Hr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vt !== null && Un(vt, e),
      wt !== null && Un(wt, e),
      St !== null && Un(St, e),
      dr.forEach(t),
      pr.forEach(t),
      n = 0;
    n < ht.length;
    n++
  )
    (r = ht[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ht.length && ((n = ht[0]), n.blockedOn === null); )
    Rc(n), n.blockedOn === null && ht.shift();
}
var xn = ot.ReactCurrentBatchConfig,
  Ei = !0;
function Pp(e, t, n, r) {
  var i = D,
    o = xn.transition;
  xn.transition = null;
  try {
    (D = 1), vl(e, t, n, r);
  } finally {
    (D = i), (xn.transition = o);
  }
}
function Np(e, t, n, r) {
  var i = D,
    o = xn.transition;
  xn.transition = null;
  try {
    (D = 4), vl(e, t, n, r);
  } finally {
    (D = i), (xn.transition = o);
  }
}
function vl(e, t, n, r) {
  if (Ei) {
    var i = ws(e, t, n, r);
    if (i === null) Mo(e, t, r, Ci, n), ya(e, r);
    else if (Ep(i, e, t, n, r)) r.stopPropagation();
    else if ((ya(e, r), t & 4 && -1 < kp.indexOf(e))) {
      for (; i !== null; ) {
        var o = Tr(i);
        if (
          (o !== null && Cc(o),
          (o = ws(e, t, n, r)),
          o === null && Mo(e, t, r, Ci, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Mo(e, t, r, null, n);
  }
}
var Ci = null;
function ws(e, t, n, r) {
  if (((Ci = null), (e = hl(r)), (e = $t(e)), e !== null))
    if (((t = Zt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ci = e), null;
}
function Lc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (pp()) {
        case ml:
          return 1;
        case Sc:
          return 4;
        case xi:
        case hp:
          return 16;
        case xc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gt = null,
  wl = null,
  li = null;
function _c() {
  if (li) return li;
  var e,
    t = wl,
    n = t.length,
    r,
    i = "value" in gt ? gt.value : gt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (li = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ai(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Wr() {
  return !0;
}
function wa() {
  return !1;
}
function Ne(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Wr
        : wa),
      (this.isPropagationStopped = wa),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Wr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Wr));
      },
      persist: function () {},
      isPersistent: Wr,
    }),
    t
  );
}
var Mn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Sl = Ne(Mn),
  _r = Q({}, Mn, { view: 0, detail: 0 }),
  Op = Ne(_r),
  Co,
  Po,
  Bn,
  Xi = Q({}, _r, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Bn &&
            (Bn && e.type === "mousemove"
              ? ((Co = e.screenX - Bn.screenX), (Po = e.screenY - Bn.screenY))
              : (Po = Co = 0),
            (Bn = e)),
          Co);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Po;
    },
  }),
  Sa = Ne(Xi),
  Rp = Q({}, Xi, { dataTransfer: 0 }),
  Lp = Ne(Rp),
  _p = Q({}, _r, { relatedTarget: 0 }),
  No = Ne(_p),
  Tp = Q({}, Mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fp = Ne(Tp),
  Mp = Q({}, Mn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  jp = Ne(Mp),
  Ap = Q({}, Mn, { data: 0 }),
  xa = Ne(Ap),
  zp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Dp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Ip = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function $p(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ip[e]) ? !!t[e] : !1;
}
function xl() {
  return $p;
}
var Up = Q({}, _r, {
    key: function (e) {
      if (e.key) {
        var t = zp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ai(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Dp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xl,
    charCode: function (e) {
      return e.type === "keypress" ? ai(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ai(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Bp = Ne(Up),
  Vp = Q({}, Xi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ka = Ne(Vp),
  Hp = Q({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xl,
  }),
  Wp = Ne(Hp),
  Kp = Q({}, Mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qp = Ne(Kp),
  Jp = Q({}, Xi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  bp = Ne(Jp),
  Xp = [9, 13, 27, 32],
  kl = tt && "CompositionEvent" in window,
  tr = null;
tt && "documentMode" in document && (tr = document.documentMode);
var Yp = tt && "TextEvent" in window && !tr,
  Tc = tt && (!kl || (tr && 8 < tr && 11 >= tr)),
  Ea = " ",
  Ca = !1;
function Fc(e, t) {
  switch (e) {
    case "keyup":
      return Xp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Mc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var an = !1;
function Gp(e, t) {
  switch (e) {
    case "compositionend":
      return Mc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ca = !0), Ea);
    case "textInput":
      return (e = t.data), e === Ea && Ca ? null : e;
    default:
      return null;
  }
}
function qp(e, t) {
  if (an)
    return e === "compositionend" || (!kl && Fc(e, t))
      ? ((e = _c()), (li = wl = gt = null), (an = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Tc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Zp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Pa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zp[e.type] : t === "textarea";
}
function jc(e, t, n, r) {
  fc(r),
    (t = Pi(t, "onChange")),
    0 < t.length &&
      ((n = new Sl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var nr = null,
  mr = null;
function eh(e) {
  Kc(e, 0);
}
function Yi(e) {
  var t = fn(e);
  if (ic(t)) return e;
}
function th(e, t) {
  if (e === "change") return t;
}
var Ac = !1;
if (tt) {
  var Oo;
  if (tt) {
    var Ro = "oninput" in document;
    if (!Ro) {
      var Na = document.createElement("div");
      Na.setAttribute("oninput", "return;"),
        (Ro = typeof Na.oninput == "function");
    }
    Oo = Ro;
  } else Oo = !1;
  Ac = Oo && (!document.documentMode || 9 < document.documentMode);
}
function Oa() {
  nr && (nr.detachEvent("onpropertychange", zc), (mr = nr = null));
}
function zc(e) {
  if (e.propertyName === "value" && Yi(mr)) {
    var t = [];
    jc(t, mr, e, hl(e)), mc(eh, t);
  }
}
function nh(e, t, n) {
  e === "focusin"
    ? (Oa(), (nr = t), (mr = n), nr.attachEvent("onpropertychange", zc))
    : e === "focusout" && Oa();
}
function rh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yi(mr);
}
function ih(e, t) {
  if (e === "click") return Yi(t);
}
function oh(e, t) {
  if (e === "input" || e === "change") return Yi(t);
}
function sh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == "function" ? Object.is : sh;
function gr(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ts.call(t, i) || !Be(e[i], t[i])) return !1;
  }
  return !0;
}
function Ra(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function La(e, t) {
  var n = Ra(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ra(n);
  }
}
function Dc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Dc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ic() {
  for (var e = window, t = vi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vi(e.document);
  }
  return t;
}
function El(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function lh(e) {
  var t = Ic(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Dc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && El(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = La(n, o));
        var s = La(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var ah = tt && "documentMode" in document && 11 >= document.documentMode,
  un = null,
  Ss = null,
  rr = null,
  xs = !1;
function _a(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xs ||
    un == null ||
    un !== vi(r) ||
    ((r = un),
    "selectionStart" in r && El(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (rr && gr(rr, r)) ||
      ((rr = r),
      (r = Pi(Ss, "onSelect")),
      0 < r.length &&
        ((t = new Sl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = un))));
}
function Kr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var cn = {
    animationend: Kr("Animation", "AnimationEnd"),
    animationiteration: Kr("Animation", "AnimationIteration"),
    animationstart: Kr("Animation", "AnimationStart"),
    transitionend: Kr("Transition", "TransitionEnd"),
  },
  Lo = {},
  $c = {};
tt &&
  (($c = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cn.animationend.animation,
    delete cn.animationiteration.animation,
    delete cn.animationstart.animation),
  "TransitionEvent" in window || delete cn.transitionend.transition);
function Gi(e) {
  if (Lo[e]) return Lo[e];
  if (!cn[e]) return e;
  var t = cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $c) return (Lo[e] = t[n]);
  return e;
}
var Uc = Gi("animationend"),
  Bc = Gi("animationiteration"),
  Vc = Gi("animationstart"),
  Hc = Gi("transitionend"),
  Wc = new Map(),
  Ta =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Rt(e, t) {
  Wc.set(e, t), qt(t, [e]);
}
for (var _o = 0; _o < Ta.length; _o++) {
  var To = Ta[_o],
    uh = To.toLowerCase(),
    ch = To[0].toUpperCase() + To.slice(1);
  Rt(uh, "on" + ch);
}
Rt(Uc, "onAnimationEnd");
Rt(Bc, "onAnimationIteration");
Rt(Vc, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(Hc, "onTransitionEnd");
Cn("onMouseEnter", ["mouseout", "mouseover"]);
Cn("onMouseLeave", ["mouseout", "mouseover"]);
Cn("onPointerEnter", ["pointerout", "pointerover"]);
Cn("onPointerLeave", ["pointerout", "pointerover"]);
qt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var qn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  fh = new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));
function Fa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), up(r, t, void 0, e), (e.currentTarget = null);
}
function Kc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Fa(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Fa(i, l, u), (o = a);
        }
    }
  }
  if (Si) throw ((e = gs), (Si = !1), (gs = null), e);
}
function U(e, t) {
  var n = t[Ns];
  n === void 0 && (n = t[Ns] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Qc(t, e, 2, !1), n.add(r));
}
function Fo(e, t, n) {
  var r = 0;
  t && (r |= 4), Qc(n, e, r, t);
}
var Qr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Qr]) {
    (e[Qr] = !0),
      Zu.forEach(function (n) {
        n !== "selectionchange" && (fh.has(n) || Fo(n, !1, e), Fo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Qr] || ((t[Qr] = !0), Fo("selectionchange", !1, t));
  }
}
function Qc(e, t, n, r) {
  switch (Lc(t)) {
    case 1:
      var i = Pp;
      break;
    case 4:
      i = Np;
      break;
    default:
      i = vl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ms ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Mo(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = $t(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  mc(function () {
    var u = o,
      c = hl(n),
      d = [];
    e: {
      var f = Wc.get(e);
      if (f !== void 0) {
        var v = Sl,
          g = e;
        switch (e) {
          case "keypress":
            if (ai(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Bp;
            break;
          case "focusin":
            (g = "focus"), (v = No);
            break;
          case "focusout":
            (g = "blur"), (v = No);
            break;
          case "beforeblur":
          case "afterblur":
            v = No;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Sa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Lp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Wp;
            break;
          case Uc:
          case Bc:
          case Vc:
            v = Fp;
            break;
          case Hc:
            v = Qp;
            break;
          case "scroll":
            v = Op;
            break;
          case "wheel":
            v = bp;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = jp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ka;
        }
        var y = (t & 4) !== 0,
          C = !y && e === "scroll",
          h = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              h !== null && ((S = fr(p, h)), S != null && y.push(vr(p, S, m)))),
            C)
          )
            break;
          p = p.return;
        }
        0 < y.length &&
          ((f = new v(f, g, null, n, c)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          f &&
            n !== ps &&
            (g = n.relatedTarget || n.fromElement) &&
            ($t(g) || g[nt]))
        )
          break e;
        if (
          (v || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          v
            ? ((g = n.relatedTarget || n.toElement),
              (v = u),
              (g = g ? $t(g) : null),
              g !== null &&
                ((C = Zt(g)), g !== C || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((v = null), (g = u)),
          v !== g)
        ) {
          if (
            ((y = Sa),
            (S = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = ka),
              (S = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (C = v == null ? f : fn(v)),
            (m = g == null ? f : fn(g)),
            (f = new y(S, p + "leave", v, n, c)),
            (f.target = C),
            (f.relatedTarget = m),
            (S = null),
            $t(c) === u &&
              ((y = new y(h, p + "enter", g, n, c)),
              (y.target = m),
              (y.relatedTarget = C),
              (S = y)),
            (C = S),
            v && g)
          )
            t: {
              for (y = v, h = g, p = 0, m = y; m; m = nn(m)) p++;
              for (m = 0, S = h; S; S = nn(S)) m++;
              for (; 0 < p - m; ) (y = nn(y)), p--;
              for (; 0 < m - p; ) (h = nn(h)), m--;
              for (; p--; ) {
                if (y === h || (h !== null && y === h.alternate)) break t;
                (y = nn(y)), (h = nn(h));
              }
              y = null;
            }
          else y = null;
          v !== null && Ma(d, f, v, y, !1),
            g !== null && C !== null && Ma(d, C, g, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? fn(u) : window),
          (v = f.nodeName && f.nodeName.toLowerCase()),
          v === "select" || (v === "input" && f.type === "file"))
        )
          var k = th;
        else if (Pa(f))
          if (Ac) k = oh;
          else {
            k = rh;
            var P = nh;
          }
        else
          (v = f.nodeName) &&
            v.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (k = ih);
        if (k && (k = k(e, u))) {
          jc(d, k, n, c);
          break e;
        }
        P && P(e, f, u),
          e === "focusout" &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === "number" &&
            as(f, "number", f.value);
      }
      switch (((P = u ? fn(u) : window), e)) {
        case "focusin":
          (Pa(P) || P.contentEditable === "true") &&
            ((un = P), (Ss = u), (rr = null));
          break;
        case "focusout":
          rr = Ss = un = null;
          break;
        case "mousedown":
          xs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xs = !1), _a(d, n, c);
          break;
        case "selectionchange":
          if (ah) break;
        case "keydown":
        case "keyup":
          _a(d, n, c);
      }
      var E;
      if (kl)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        an
          ? Fc(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (Tc &&
          n.locale !== "ko" &&
          (an || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && an && (E = _c())
            : ((gt = c),
              (wl = "value" in gt ? gt.value : gt.textContent),
              (an = !0))),
        (P = Pi(u, O)),
        0 < P.length &&
          ((O = new xa(O, e, null, n, c)),
          d.push({ event: O, listeners: P }),
          E ? (O.data = E) : ((E = Mc(n)), E !== null && (O.data = E)))),
        (E = Yp ? Gp(e, n) : qp(e, n)) &&
          ((u = Pi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new xa("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = E)));
    }
    Kc(d, t);
  });
}
function vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Pi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = fr(e, n)),
      o != null && r.unshift(vr(e, o, i)),
      (o = fr(e, t)),
      o != null && r.push(vr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function nn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ma(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = fr(n, o)), a != null && s.unshift(vr(n, a, l)))
        : i || ((a = fr(n, o)), a != null && s.push(vr(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var dh = /\r\n?/g,
  ph = /\u0000|\uFFFD/g;
function ja(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      dh,
      `
`
    )
    .replace(ph, "");
}
function Jr(e, t, n) {
  if (((t = ja(t)), ja(e) !== t && n)) throw Error(x(425));
}
function Ni() {}
var ks = null,
  Es = null;
function Cs(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ps = typeof setTimeout == "function" ? setTimeout : void 0,
  hh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Aa = typeof Promise == "function" ? Promise : void 0,
  mh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Aa < "u"
      ? function (e) {
          return Aa.resolve(null).then(e).catch(gh);
        }
      : Ps;
function gh(e) {
  setTimeout(function () {
    throw e;
  });
}
function jo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), hr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  hr(t);
}
function xt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function za(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jn = Math.random().toString(36).slice(2),
  Ke = "__reactFiber$" + jn,
  wr = "__reactProps$" + jn,
  nt = "__reactContainer$" + jn,
  Ns = "__reactEvents$" + jn,
  yh = "__reactListeners$" + jn,
  vh = "__reactHandles$" + jn;
function $t(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nt] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = za(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = za(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Tr(e) {
  return (
    (e = e[Ke] || e[nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function qi(e) {
  return e[wr] || null;
}
var Os = [],
  dn = -1;
function Lt(e) {
  return { current: e };
}
function B(e) {
  0 > dn || ((e.current = Os[dn]), (Os[dn] = null), dn--);
}
function $(e, t) {
  dn++, (Os[dn] = e.current), (e.current = t);
}
var Ot = {},
  ue = Lt(Ot),
  ye = Lt(!1),
  Qt = Ot;
function Pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ot;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function ve(e) {
  return (e = e.childContextTypes), e != null;
}
function Oi() {
  B(ye), B(ue);
}
function Da(e, t, n) {
  if (ue.current !== Ot) throw Error(x(168));
  $(ue, t), $(ye, n);
}
function Jc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(x(108, np(e) || "Unknown", i));
  return Q({}, n, r);
}
function Ri(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ot),
    (Qt = ue.current),
    $(ue, e),
    $(ye, ye.current),
    !0
  );
}
function Ia(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = Jc(e, t, Qt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(ye),
      B(ue),
      $(ue, e))
    : B(ye),
    $(ye, n);
}
var Ge = null,
  Zi = !1,
  Ao = !1;
function bc(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function wh(e) {
  (Zi = !0), bc(e);
}
function _t() {
  if (!Ao && Ge !== null) {
    Ao = !0;
    var e = 0,
      t = D;
    try {
      var n = Ge;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ge = null), (Zi = !1);
    } catch (i) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), wc(ml, _t), i);
    } finally {
      (D = t), (Ao = !1);
    }
  }
  return null;
}
var pn = [],
  hn = 0,
  Li = null,
  _i = 0,
  Oe = [],
  Re = 0,
  Jt = null,
  qe = 1,
  Ze = "";
function Dt(e, t) {
  (pn[hn++] = _i), (pn[hn++] = Li), (Li = e), (_i = t);
}
function Xc(e, t, n) {
  (Oe[Re++] = qe), (Oe[Re++] = Ze), (Oe[Re++] = Jt), (Jt = e);
  var r = qe;
  e = Ze;
  var i = 32 - Ie(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ie(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (qe = (1 << (32 - Ie(t) + i)) | (n << i) | r),
      (Ze = o + e);
  } else (qe = (1 << o) | (n << i) | r), (Ze = e);
}
function Cl(e) {
  e.return !== null && (Dt(e, 1), Xc(e, 1, 0));
}
function Pl(e) {
  for (; e === Li; )
    (Li = pn[--hn]), (pn[hn] = null), (_i = pn[--hn]), (pn[hn] = null);
  for (; e === Jt; )
    (Jt = Oe[--Re]),
      (Oe[Re] = null),
      (Ze = Oe[--Re]),
      (Oe[Re] = null),
      (qe = Oe[--Re]),
      (Oe[Re] = null);
}
var Ee = null,
  ke = null,
  H = !1,
  De = null;
function Yc(e, t) {
  var n = Le(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function $a(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ee = e), (ke = xt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ee = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Jt !== null ? { id: qe, overflow: Ze } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Le(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ee = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Rs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ls(e) {
  if (H) {
    var t = ke;
    if (t) {
      var n = t;
      if (!$a(e, t)) {
        if (Rs(e)) throw Error(x(418));
        t = xt(n.nextSibling);
        var r = Ee;
        t && $a(e, t)
          ? Yc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Ee = e));
      }
    } else {
      if (Rs(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Ee = e);
    }
  }
}
function Ua(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ee = e;
}
function br(e) {
  if (e !== Ee) return !1;
  if (!H) return Ua(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Cs(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (Rs(e)) throw (Gc(), Error(x(418)));
    for (; t; ) Yc(e, t), (t = xt(t.nextSibling));
  }
  if ((Ua(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = xt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = Ee ? xt(e.stateNode.nextSibling) : null;
  return !0;
}
function Gc() {
  for (var e = ke; e; ) e = xt(e.nextSibling);
}
function Nn() {
  (ke = Ee = null), (H = !1);
}
function Nl(e) {
  De === null ? (De = [e]) : De.push(e);
}
var Sh = ot.ReactCurrentBatchConfig;
function Ae(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ti = Lt(null),
  Fi = null,
  mn = null,
  Ol = null;
function Rl() {
  Ol = mn = Fi = null;
}
function Ll(e) {
  var t = Ti.current;
  B(Ti), (e._currentValue = t);
}
function _s(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function kn(e, t) {
  (Fi = e),
    (Ol = mn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function Fe(e) {
  var t = e._currentValue;
  if (Ol !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mn === null)) {
      if (Fi === null) throw Error(x(308));
      (mn = e), (Fi.dependencies = { lanes: 0, firstContext: e });
    } else mn = mn.next = e;
  return t;
}
var Ut = null;
function _l(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
function qc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), _l(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    rt(e, r)
  );
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var pt = !1;
function Tl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      rt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), _l(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    rt(e, n)
  );
}
function ui(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gl(e, n);
  }
}
function Ba(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Mi(e, t, n, r) {
  var i = e.updateQueue;
  pt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var f = l.lane,
        v = l.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var g = e,
            y = l;
          switch (((f = t), (v = n), y.tag)) {
            case 1:
              if (((g = y.payload), typeof g == "function")) {
                d = g.call(v, d, f);
                break e;
              }
              d = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (
                ((g = y.payload),
                (f = typeof g == "function" ? g.call(v, d, f) : g),
                f == null)
              )
                break e;
              d = Q({}, d, f);
              break e;
            case 2:
              pt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [l]) : f.push(l));
      } else
        (v = {
          eventTime: v,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = v), (a = d)) : (c = c.next = v),
          (s |= f);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = d),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Xt |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Va(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(x(191, i));
        i.call(r);
      }
    }
}
var ef = new qu.Component().refs;
function Ts(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var eo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Zt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      i = Ct(e),
      o = et(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = kt(e, o, i)),
      t !== null && ($e(t, e, i, r), ui(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = fe(),
      i = Ct(e),
      o = et(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = kt(e, o, i)),
      t !== null && ($e(t, e, i, r), ui(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = fe(),
      r = Ct(e),
      i = et(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = kt(e, i, r)),
      t !== null && ($e(t, e, r, n), ui(t, e, r));
  },
};
function Ha(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !gr(n, r) || !gr(i, o)
      : !0
  );
}
function tf(e, t, n) {
  var r = !1,
    i = Ot,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Fe(o))
      : ((i = ve(t) ? Qt : ue.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Pn(e, i) : Ot)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = eo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Wa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && eo.enqueueReplaceState(t, t.state, null);
}
function Fs(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = ef), Tl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Fe(o))
    : ((o = ve(t) ? Qt : ue.current), (i.context = Pn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ts(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && eo.enqueueReplaceState(i, i.state, null),
      Mi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === ef && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Xr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ka(e) {
  var t = e._init;
  return t(e._payload);
}
function nf(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function i(h, p) {
    return (h = Pt(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, p, m, S) {
    return p === null || p.tag !== 6
      ? ((p = Vo(m, h.mode, S)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function a(h, p, m, S) {
    var k = m.type;
    return k === ln
      ? c(h, p, m.props.children, S, m.key)
      : p !== null &&
        (p.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === dt &&
            Ka(k) === p.type))
      ? ((S = i(p, m.props)), (S.ref = Vn(h, p, m)), (S.return = h), S)
      : ((S = mi(m.type, m.key, m.props, null, h.mode, S)),
        (S.ref = Vn(h, p, m)),
        (S.return = h),
        S);
  }
  function u(h, p, m, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Ho(m, h.mode, S)), (p.return = h), p)
      : ((p = i(p, m.children || [])), (p.return = h), p);
  }
  function c(h, p, m, S, k) {
    return p === null || p.tag !== 7
      ? ((p = Ht(m, h.mode, S, k)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function d(h, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Vo("" + p, h.mode, m)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ir:
          return (
            (m = mi(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = Vn(h, null, p)),
            (m.return = h),
            m
          );
        case sn:
          return (p = Ho(p, h.mode, m)), (p.return = h), p;
        case dt:
          var S = p._init;
          return d(h, S(p._payload), m);
      }
      if (Yn(p) || Dn(p))
        return (p = Ht(p, h.mode, m, null)), (p.return = h), p;
      Xr(h, p);
    }
    return null;
  }
  function f(h, p, m, S) {
    var k = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return k !== null ? null : l(h, p, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ir:
          return m.key === k ? a(h, p, m, S) : null;
        case sn:
          return m.key === k ? u(h, p, m, S) : null;
        case dt:
          return (k = m._init), f(h, p, k(m._payload), S);
      }
      if (Yn(m) || Dn(m)) return k !== null ? null : c(h, p, m, S, null);
      Xr(h, m);
    }
    return null;
  }
  function v(h, p, m, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(m) || null), l(p, h, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ir:
          return (h = h.get(S.key === null ? m : S.key) || null), a(p, h, S, k);
        case sn:
          return (h = h.get(S.key === null ? m : S.key) || null), u(p, h, S, k);
        case dt:
          var P = S._init;
          return v(h, p, m, P(S._payload), k);
      }
      if (Yn(S) || Dn(S)) return (h = h.get(m) || null), c(p, h, S, k, null);
      Xr(p, S);
    }
    return null;
  }
  function g(h, p, m, S) {
    for (
      var k = null, P = null, E = p, O = (p = 0), A = null;
      E !== null && O < m.length;
      O++
    ) {
      E.index > O ? ((A = E), (E = null)) : (A = E.sibling);
      var _ = f(h, E, m[O], S);
      if (_ === null) {
        E === null && (E = A);
        break;
      }
      e && E && _.alternate === null && t(h, E),
        (p = o(_, p, O)),
        P === null ? (k = _) : (P.sibling = _),
        (P = _),
        (E = A);
    }
    if (O === m.length) return n(h, E), H && Dt(h, O), k;
    if (E === null) {
      for (; O < m.length; O++)
        (E = d(h, m[O], S)),
          E !== null &&
            ((p = o(E, p, O)), P === null ? (k = E) : (P.sibling = E), (P = E));
      return H && Dt(h, O), k;
    }
    for (E = r(h, E); O < m.length; O++)
      (A = v(E, h, O, m[O], S)),
        A !== null &&
          (e && A.alternate !== null && E.delete(A.key === null ? O : A.key),
          (p = o(A, p, O)),
          P === null ? (k = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        E.forEach(function (I) {
          return t(h, I);
        }),
      H && Dt(h, O),
      k
    );
  }
  function y(h, p, m, S) {
    var k = Dn(m);
    if (typeof k != "function") throw Error(x(150));
    if (((m = k.call(m)), m == null)) throw Error(x(151));
    for (
      var P = (k = null), E = p, O = (p = 0), A = null, _ = m.next();
      E !== null && !_.done;
      O++, _ = m.next()
    ) {
      E.index > O ? ((A = E), (E = null)) : (A = E.sibling);
      var I = f(h, E, _.value, S);
      if (I === null) {
        E === null && (E = A);
        break;
      }
      e && E && I.alternate === null && t(h, E),
        (p = o(I, p, O)),
        P === null ? (k = I) : (P.sibling = I),
        (P = I),
        (E = A);
    }
    if (_.done) return n(h, E), H && Dt(h, O), k;
    if (E === null) {
      for (; !_.done; O++, _ = m.next())
        (_ = d(h, _.value, S)),
          _ !== null &&
            ((p = o(_, p, O)), P === null ? (k = _) : (P.sibling = _), (P = _));
      return H && Dt(h, O), k;
    }
    for (E = r(h, E); !_.done; O++, _ = m.next())
      (_ = v(E, h, O, _.value, S)),
        _ !== null &&
          (e && _.alternate !== null && E.delete(_.key === null ? O : _.key),
          (p = o(_, p, O)),
          P === null ? (k = _) : (P.sibling = _),
          (P = _));
    return (
      e &&
        E.forEach(function (en) {
          return t(h, en);
        }),
      H && Dt(h, O),
      k
    );
  }
  function C(h, p, m, S) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === ln &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ir:
          e: {
            for (var k = m.key, P = p; P !== null; ) {
              if (P.key === k) {
                if (((k = m.type), k === ln)) {
                  if (P.tag === 7) {
                    n(h, P.sibling),
                      (p = i(P, m.props.children)),
                      (p.return = h),
                      (h = p);
                    break e;
                  }
                } else if (
                  P.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === dt &&
                    Ka(k) === P.type)
                ) {
                  n(h, P.sibling),
                    (p = i(P, m.props)),
                    (p.ref = Vn(h, P, m)),
                    (p.return = h),
                    (h = p);
                  break e;
                }
                n(h, P);
                break;
              } else t(h, P);
              P = P.sibling;
            }
            m.type === ln
              ? ((p = Ht(m.props.children, h.mode, S, m.key)),
                (p.return = h),
                (h = p))
              : ((S = mi(m.type, m.key, m.props, null, h.mode, S)),
                (S.ref = Vn(h, p, m)),
                (S.return = h),
                (h = S));
          }
          return s(h);
        case sn:
          e: {
            for (P = m.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  n(h, p.sibling),
                    (p = i(p, m.children || [])),
                    (p.return = h),
                    (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = Ho(m, h.mode, S)), (p.return = h), (h = p);
          }
          return s(h);
        case dt:
          return (P = m._init), C(h, p, P(m._payload), S);
      }
      if (Yn(m)) return g(h, p, m, S);
      if (Dn(m)) return y(h, p, m, S);
      Xr(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = i(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = Vo(m, h.mode, S)), (p.return = h), (h = p)),
        s(h))
      : n(h, p);
  }
  return C;
}
var On = nf(!0),
  rf = nf(!1),
  Fr = {},
  be = Lt(Fr),
  Sr = Lt(Fr),
  xr = Lt(Fr);
function Bt(e) {
  if (e === Fr) throw Error(x(174));
  return e;
}
function Fl(e, t) {
  switch (($(xr, t), $(Sr, e), $(be, Fr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cs(t, e));
  }
  B(be), $(be, t);
}
function Rn() {
  B(be), B(Sr), B(xr);
}
function of(e) {
  Bt(xr.current);
  var t = Bt(be.current),
    n = cs(t, e.type);
  t !== n && ($(Sr, e), $(be, n));
}
function Ml(e) {
  Sr.current === e && (B(be), B(Sr));
}
var W = Lt(0);
function ji(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var zo = [];
function jl() {
  for (var e = 0; e < zo.length; e++)
    zo[e]._workInProgressVersionPrimary = null;
  zo.length = 0;
}
var ci = ot.ReactCurrentDispatcher,
  Do = ot.ReactCurrentBatchConfig,
  bt = 0,
  K = null,
  G = null,
  ee = null,
  Ai = !1,
  ir = !1,
  kr = 0,
  xh = 0;
function se() {
  throw Error(x(321));
}
function Al(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0;
}
function zl(e, t, n, r, i, o) {
  if (
    ((bt = o),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ci.current = e === null || e.memoizedState === null ? Ph : Nh),
    (e = n(r, i)),
    ir)
  ) {
    o = 0;
    do {
      if (((ir = !1), (kr = 0), 25 <= o)) throw Error(x(301));
      (o += 1),
        (ee = G = null),
        (t.updateQueue = null),
        (ci.current = Oh),
        (e = n(r, i));
    } while (ir);
  }
  if (
    ((ci.current = zi),
    (t = G !== null && G.next !== null),
    (bt = 0),
    (ee = G = K = null),
    (Ai = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Dl() {
  var e = kr !== 0;
  return (kr = 0), e;
}
function We() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (K.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Me() {
  if (G === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = ee === null ? K.memoizedState : ee.next;
  if (t !== null) (ee = t), (G = e);
  else {
    if (e === null) throw Error(x(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      ee === null ? (K.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function Er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Io(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = G,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((bt & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = d), (s = r)) : (a = a.next = d),
          (K.lanes |= c),
          (Xt |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Be(r, t.memoizedState) || (ge = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (K.lanes |= o), (Xt |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $o(e) {
  var t = Me(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Be(o, t.memoizedState) || (ge = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function sf() {}
function lf(e, t) {
  var n = K,
    r = Me(),
    i = t(),
    o = !Be(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ge = !0)),
    (r = r.queue),
    Il(cf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Cr(9, uf.bind(null, n, r, i, t), void 0, null),
      te === null)
    )
      throw Error(x(349));
    bt & 30 || af(n, t, i);
  }
  return i;
}
function af(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function uf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ff(t) && df(e);
}
function cf(e, t, n) {
  return n(function () {
    ff(t) && df(e);
  });
}
function ff(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function df(e) {
  var t = rt(e, 1);
  t !== null && $e(t, e, 1, -1);
}
function Qa(e) {
  var t = We();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Er,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ch.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function Cr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function pf() {
  return Me().memoizedState;
}
function fi(e, t, n, r) {
  var i = We();
  (K.flags |= e),
    (i.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r));
}
function to(e, t, n, r) {
  var i = Me();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (G !== null) {
    var s = G.memoizedState;
    if (((o = s.destroy), r !== null && Al(r, s.deps))) {
      i.memoizedState = Cr(t, n, o, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = Cr(1 | t, n, o, r));
}
function Ja(e, t) {
  return fi(8390656, 8, e, t);
}
function Il(e, t) {
  return to(2048, 8, e, t);
}
function hf(e, t) {
  return to(4, 2, e, t);
}
function mf(e, t) {
  return to(4, 4, e, t);
}
function gf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function yf(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), to(4, 4, gf.bind(null, t, e), n)
  );
}
function $l() {}
function vf(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Al(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function wf(e, t) {
  var n = Me();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Al(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sf(e, t, n) {
  return bt & 21
    ? (Be(n, t) || ((n = kc()), (K.lanes |= n), (Xt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = n));
}
function kh(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Do.transition;
  Do.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (Do.transition = r);
  }
}
function xf() {
  return Me().memoizedState;
}
function Eh(e, t, n) {
  var r = Ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    kf(e))
  )
    Ef(t, n);
  else if (((n = qc(e, t, n, r)), n !== null)) {
    var i = fe();
    $e(n, e, r, i), Cf(n, t, r);
  }
}
function Ch(e, t, n) {
  var r = Ct(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (kf(e)) Ef(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Be(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), _l(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = qc(e, t, i, r)),
      n !== null && ((i = fe()), $e(n, e, r, i), Cf(n, t, r));
  }
}
function kf(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Ef(e, t) {
  ir = Ai = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Cf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gl(e, n);
  }
}
var zi = {
    readContext: Fe,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1,
  },
  Ph = {
    readContext: Fe,
    useCallback: function (e, t) {
      return (We().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Fe,
    useEffect: Ja,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fi(4194308, 4, gf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = We();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = We();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Eh.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = We();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Qa,
    useDebugValue: $l,
    useDeferredValue: function (e) {
      return (We().memoizedState = e);
    },
    useTransition: function () {
      var e = Qa(!1),
        t = e[0];
      return (e = kh.bind(null, e[1])), (We().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = We();
      if (H) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(x(349));
        bt & 30 || af(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Ja(cf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Cr(9, uf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = We(),
        t = te.identifierPrefix;
      if (H) {
        var n = Ze,
          r = qe;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = kr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = xh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Nh = {
    readContext: Fe,
    useCallback: vf,
    useContext: Fe,
    useEffect: Il,
    useImperativeHandle: yf,
    useInsertionEffect: hf,
    useLayoutEffect: mf,
    useMemo: wf,
    useReducer: Io,
    useRef: pf,
    useState: function () {
      return Io(Er);
    },
    useDebugValue: $l,
    useDeferredValue: function (e) {
      var t = Me();
      return Sf(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Io(Er)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: sf,
    useSyncExternalStore: lf,
    useId: xf,
    unstable_isNewReconciler: !1,
  },
  Oh = {
    readContext: Fe,
    useCallback: vf,
    useContext: Fe,
    useEffect: Il,
    useImperativeHandle: yf,
    useInsertionEffect: hf,
    useLayoutEffect: mf,
    useMemo: wf,
    useReducer: $o,
    useRef: pf,
    useState: function () {
      return $o(Er);
    },
    useDebugValue: $l,
    useDeferredValue: function (e) {
      var t = Me();
      return G === null ? (t.memoizedState = e) : Sf(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = $o(Er)[0],
        t = Me().memoizedState;
      return [e, t];
    },
    useMutableSource: sf,
    useSyncExternalStore: lf,
    useId: xf,
    unstable_isNewReconciler: !1,
  };
function Ln(e, t) {
  try {
    var n = "",
      r = t;
    do (n += tp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Uo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ms(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Rh = typeof WeakMap == "function" ? WeakMap : Map;
function Pf(e, t, n) {
  (n = et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ii || ((Ii = !0), (Hs = r)), Ms(e, t);
    }),
    n
  );
}
function Nf(e, t, n) {
  (n = et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ms(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ms(e, t),
          typeof r != "function" &&
            (Et === null ? (Et = new Set([this])) : Et.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ba(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rh();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Vh.bind(null, e, t, n)), t.then(e, e));
}
function Xa(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ya(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = et(-1, 1)), (t.tag = 2), kt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Lh = ot.ReactCurrentOwner,
  ge = !1;
function ce(e, t, n, r) {
  t.child = e === null ? rf(t, null, n, r) : On(t, e.child, n, r);
}
function Ga(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    kn(t, i),
    (r = zl(e, t, n, r, o, i)),
    (n = Dl()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (H && n && Cl(t), (t.flags |= 1), ce(e, t, r, i), t.child)
  );
}
function qa(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Jl(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Of(e, t, o, r, i))
      : ((e = mi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : gr), n(s, r) && e.ref === t.ref)
    )
      return it(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Pt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Of(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (gr(o, r) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), it(e, t, i);
  }
  return js(e, t, n, r, i);
}
function Rf(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(yn, xe),
        (xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          $(yn, xe),
          (xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        $(yn, xe),
        (xe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(yn, xe),
      (xe |= r);
  return ce(e, t, i, n), t.child;
}
function Lf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function js(e, t, n, r, i) {
  var o = ve(n) ? Qt : ue.current;
  return (
    (o = Pn(t, o)),
    kn(t, i),
    (n = zl(e, t, n, r, o, i)),
    (r = Dl()),
    e !== null && !ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        it(e, t, i))
      : (H && r && Cl(t), (t.flags |= 1), ce(e, t, n, i), t.child)
  );
}
function Za(e, t, n, r, i) {
  if (ve(n)) {
    var o = !0;
    Ri(t);
  } else o = !1;
  if ((kn(t, i), t.stateNode === null))
    di(e, t), tf(t, n, r), Fs(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Fe(u))
      : ((u = ve(n) ? Qt : ue.current), (u = Pn(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Wa(t, s, r, u)),
      (pt = !1);
    var f = t.memoizedState;
    (s.state = f),
      Mi(t, r, s, i),
      (a = t.memoizedState),
      l !== r || f !== a || ye.current || pt
        ? (typeof c == "function" && (Ts(t, n, c, r), (a = t.memoizedState)),
          (l = pt || Ha(t, n, l, r, f, a, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Zc(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ae(t.type, l)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Fe(a))
        : ((a = ve(n) ? Qt : ue.current), (a = Pn(t, a)));
    var v = n.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== d || f !== a) && Wa(t, s, r, a)),
      (pt = !1),
      (f = t.memoizedState),
      (s.state = f),
      Mi(t, r, s, i);
    var g = t.memoizedState;
    l !== d || f !== g || ye.current || pt
      ? (typeof v == "function" && (Ts(t, n, v, r), (g = t.memoizedState)),
        (u = pt || Ha(t, n, u, r, f, g, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return As(e, t, n, r, o, i);
}
function As(e, t, n, r, i, o) {
  Lf(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Ia(t, n, !1), it(e, t, o);
  (r = t.stateNode), (Lh.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = On(t, e.child, null, o)), (t.child = On(t, null, l, o)))
      : ce(e, t, l, o),
    (t.memoizedState = r.state),
    i && Ia(t, n, !0),
    t.child
  );
}
function _f(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Da(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Da(e, t.context, !1),
    Fl(e, t.containerInfo);
}
function eu(e, t, n, r, i) {
  return Nn(), Nl(i), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var zs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ds(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Tf(e, t, n) {
  var r = t.pendingProps,
    i = W.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    $(W, i & 1),
    e === null)
  )
    return (
      Ls(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = io(s, r, 0, null)),
              (e = Ht(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ds(n)),
              (t.memoizedState = zs),
              e)
            : Ul(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return _h(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Pt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Pt(l, o)) : ((o = Ht(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ds(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = zs),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Pt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ul(e, t) {
  return (
    (t = io({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Yr(e, t, n, r) {
  return (
    r !== null && Nl(r),
    On(t, e.child, null, n),
    (e = Ul(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function _h(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Uo(Error(x(422)))), Yr(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = io({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Ht(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && On(t, e.child, null, s),
        (t.child.memoizedState = Ds(s)),
        (t.memoizedState = zs),
        o);
  if (!(t.mode & 1)) return Yr(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(x(419))), (r = Uo(o, r, void 0)), Yr(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), ge || l)) {
    if (((r = te), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), rt(e, i), $e(r, e, i, -1));
    }
    return Ql(), (r = Uo(Error(x(421)))), Yr(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Hh.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ke = xt(i.nextSibling)),
      (Ee = t),
      (H = !0),
      (De = null),
      e !== null &&
        ((Oe[Re++] = qe),
        (Oe[Re++] = Ze),
        (Oe[Re++] = Jt),
        (qe = e.id),
        (Ze = e.overflow),
        (Jt = t)),
      (t = Ul(t, r.children)),
      (t.flags |= 4096),
      t);
}
function tu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _s(e.return, t, n);
}
function Bo(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Ff(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ce(e, t, r.children, n), (r = W.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && tu(e, n, t);
        else if (e.tag === 19) tu(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if (($(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ji(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Bo(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ji(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Bo(t, !0, n, null, o);
        break;
      case "together":
        Bo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function di(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function it(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Pt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Pt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Th(e, t, n) {
  switch (t.tag) {
    case 3:
      _f(t), Nn();
      break;
    case 5:
      of(t);
      break;
    case 1:
      ve(t.type) && Ri(t);
      break;
    case 4:
      Fl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      $(Ti, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Tf(e, t, n)
          : ($(W, W.current & 1),
            (e = it(e, t, n)),
            e !== null ? e.sibling : null);
      $(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ff(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        $(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Rf(e, t, n);
  }
  return it(e, t, n);
}
var Mf, Is, jf, Af;
Mf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Is = function () {};
jf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Bt(be.current);
    var o = null;
    switch (n) {
      case "input":
        (i = ss(e, i)), (r = ss(e, r)), (o = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = us(e, i)), (r = us(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ni);
    }
    fs(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ur.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ur.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && U("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Af = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Fh(e, t, n) {
  var r = t.pendingProps;
  switch ((Pl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return le(t), null;
    case 1:
      return ve(t.type) && Oi(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Rn(),
        B(ye),
        B(ue),
        jl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (br(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), De !== null && (Qs(De), (De = null)))),
        Is(e, t),
        le(t),
        null
      );
    case 5:
      Ml(t);
      var i = Bt(xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        jf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return le(t), null;
        }
        if (((e = Bt(be.current)), br(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ke] = t), (r[wr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < qn.length; i++) U(qn[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              ca(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              da(r, o), U("invalid", r);
          }
          fs(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Jr(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Jr(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : ur.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              $r(r), fa(r, o, !0);
              break;
            case "textarea":
              $r(r), pa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ni);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = lc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ke] = t),
            (e[wr] = r),
            Mf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = ds(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < qn.length; i++) U(qn[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                ca(e, r), (i = ss(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                da(e, r), (i = us(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            fs(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? cc(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ac(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && cr(e, a)
                    : typeof a == "number" && cr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ur.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && U("scroll", e)
                      : a != null && cl(e, o, a, s));
              }
            switch (n) {
              case "input":
                $r(e), fa(e, r, !1);
                break;
              case "textarea":
                $r(e), pa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Nt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? vn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      vn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ni);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) Af(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = Bt(xr.current)), Bt(be.current), br(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (o = r.nodeValue !== n) && ((e = Ee), e !== null))
          )
            switch (e.tag) {
              case 3:
                Jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (B(W),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && ke !== null && t.mode & 1 && !(t.flags & 128))
          Gc(), Nn(), (t.flags |= 98560), (o = !1);
        else if (((o = br(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(x(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(x(317));
            o[Ke] = t;
          } else
            Nn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (o = !1);
        } else De !== null && (Qs(De), (De = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || W.current & 1 ? q === 0 && (q = 3) : Ql())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        Rn(), Is(e, t), e === null && yr(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return Ll(t.type._context), le(t), null;
    case 17:
      return ve(t.type) && Oi(), le(t), null;
    case 19:
      if ((B(W), (o = t.memoizedState), o === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Hn(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ji(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Hn(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return $(W, (W.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            b() > _n &&
            ((t.flags |= 128), (r = !0), Hn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ji(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !H)
            )
              return le(t), null;
          } else
            2 * b() - o.renderingStartTime > _n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = b()),
          (t.sibling = null),
          (n = W.current),
          $(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Kl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xe & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function Mh(e, t) {
  switch ((Pl(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && Oi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Rn(),
        B(ye),
        B(ue),
        jl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ml(t), null;
    case 13:
      if ((B(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        Nn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(W), null;
    case 4:
      return Rn(), null;
    case 10:
      return Ll(t.type._context), null;
    case 22:
    case 23:
      return Kl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gr = !1,
  ae = !1,
  jh = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function gn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function $s(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var nu = !1;
function Ah(e, t) {
  if (((ks = Ei), (e = Ic()), El(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var v;
              d !== n || (i !== 0 && d.nodeType !== 3) || (l = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (v = d.firstChild) !== null;

            )
              (f = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (l = s),
                f === o && ++c === r && (a = s),
                (v = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = v;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Es = { focusedElem: e, selectionRange: n }, Ei = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var y = g.memoizedProps,
                    C = g.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Ae(t.type, y),
                      C
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (S) {
          J(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (g = nu), (nu = !1), g;
}
function or(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && $s(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function no(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Us(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function zf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), zf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[wr], delete t[Ns], delete t[yh], delete t[vh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Df(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ru(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Df(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ni));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bs(e, t, n), e = e.sibling; e !== null; ) Bs(e, t, n), (e = e.sibling);
}
function Vs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vs(e, t, n), e = e.sibling; e !== null; ) Vs(e, t, n), (e = e.sibling);
}
var ne = null,
  ze = !1;
function at(e, t, n) {
  for (n = n.child; n !== null; ) If(e, t, n), (n = n.sibling);
}
function If(e, t, n) {
  if (Je && typeof Je.onCommitFiberUnmount == "function")
    try {
      Je.onCommitFiberUnmount(bi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ae || gn(n, t);
    case 6:
      var r = ne,
        i = ze;
      (ne = null),
        at(e, t, n),
        (ne = r),
        (ze = i),
        ne !== null &&
          (ze
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (ze
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? jo(e.parentNode, n)
              : e.nodeType === 1 && jo(e, n),
            hr(e))
          : jo(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (i = ze),
        (ne = n.stateNode.containerInfo),
        (ze = !0),
        at(e, t, n),
        (ne = r),
        (ze = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ae &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && $s(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      at(e, t, n);
      break;
    case 1:
      if (
        !ae &&
        (gn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          J(n, t, l);
        }
      at(e, t, n);
      break;
    case 21:
      at(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ae = (r = ae) || n.memoizedState !== null), at(e, t, n), (ae = r))
        : at(e, t, n);
      break;
    default:
      at(e, t, n);
  }
}
function iu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jh()),
      t.forEach(function (r) {
        var i = Wh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function je(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ne = l.stateNode), (ze = !1);
              break e;
            case 3:
              (ne = l.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (ne = l.stateNode.containerInfo), (ze = !0);
              break e;
          }
          l = l.return;
        }
        if (ne === null) throw Error(x(160));
        If(o, s, i), (ne = null), (ze = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        J(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) $f(t, e), (t = t.sibling);
}
function $f(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(t, e), He(e), r & 4)) {
        try {
          or(3, e, e.return), no(3, e);
        } catch (y) {
          J(e, e.return, y);
        }
        try {
          or(5, e, e.return);
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 1:
      je(t, e), He(e), r & 512 && n !== null && gn(n, n.return);
      break;
    case 5:
      if (
        (je(t, e),
        He(e),
        r & 512 && n !== null && gn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          cr(i, "");
        } catch (y) {
          J(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && oc(i, o),
              ds(l, s);
            var u = ds(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                d = a[s + 1];
              c === "style"
                ? cc(i, d)
                : c === "dangerouslySetInnerHTML"
                ? ac(i, d)
                : c === "children"
                ? cr(i, d)
                : cl(i, c, d, u);
            }
            switch (l) {
              case "input":
                ls(i, o);
                break;
              case "textarea":
                sc(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? vn(i, !!o.multiple, v, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? vn(i, !!o.multiple, o.defaultValue, !0)
                      : vn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[wr] = o;
          } catch (y) {
            J(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((je(t, e), He(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (y) {
          J(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (je(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          hr(t.containerInfo);
        } catch (y) {
          J(e, e.return, y);
        }
      break;
    case 4:
      je(t, e), He(e);
      break;
    case 13:
      je(t, e),
        He(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Hl = b())),
        r & 4 && iu(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ae = (u = ae) || c), je(t, e), (ae = u)) : je(t, e),
        He(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (R = e, c = e.child; c !== null; ) {
            for (d = R = c; R !== null; ) {
              switch (((f = R), (v = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  or(4, f, f.return);
                  break;
                case 1:
                  gn(f, f.return);
                  var g = f.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (y) {
                      J(r, n, y);
                    }
                  }
                  break;
                case 5:
                  gn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    su(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = f), (R = v)) : su(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = d.stateNode),
                      (a = d.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = uc("display", s)));
              } catch (y) {
                J(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                J(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      je(t, e), He(e), r & 4 && iu(e);
      break;
    case 21:
      break;
    default:
      je(t, e), He(e);
  }
}
function He(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Df(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (cr(i, ""), (r.flags &= -33));
          var o = ru(e);
          Vs(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = ru(e);
          Bs(e, l, s);
          break;
        default:
          throw Error(x(161));
      }
    } catch (a) {
      J(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function zh(e, t, n) {
  (R = e), Uf(e);
}
function Uf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var i = R,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Gr;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || ae;
        l = Gr;
        var u = ae;
        if (((Gr = s), (ae = a) && !u))
          for (R = i; R !== null; )
            (s = R),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? lu(i)
                : a !== null
                ? ((a.return = s), (R = a))
                : lu(i);
        for (; o !== null; ) (R = o), Uf(o), (o = o.sibling);
        (R = i), (Gr = l), (ae = u);
      }
      ou(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (R = o)) : ou(e);
  }
}
function ou(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ae || no(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ae)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ae(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Va(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Va(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && hr(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        ae || (t.flags & 512 && Us(t));
      } catch (f) {
        J(t, t.return, f);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function su(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function lu(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            no(4, t);
          } catch (a) {
            J(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              J(t, i, a);
            }
          }
          var o = t.return;
          try {
            Us(t);
          } catch (a) {
            J(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Us(t);
          } catch (a) {
            J(t, s, a);
          }
      }
    } catch (a) {
      J(t, t.return, a);
    }
    if (t === e) {
      R = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (R = l);
      break;
    }
    R = t.return;
  }
}
var Dh = Math.ceil,
  Di = ot.ReactCurrentDispatcher,
  Bl = ot.ReactCurrentOwner,
  _e = ot.ReactCurrentBatchConfig,
  z = 0,
  te = null,
  X = null,
  re = 0,
  xe = 0,
  yn = Lt(0),
  q = 0,
  Pr = null,
  Xt = 0,
  ro = 0,
  Vl = 0,
  sr = null,
  he = null,
  Hl = 0,
  _n = 1 / 0,
  Ye = null,
  Ii = !1,
  Hs = null,
  Et = null,
  qr = !1,
  yt = null,
  $i = 0,
  lr = 0,
  Ws = null,
  pi = -1,
  hi = 0;
function fe() {
  return z & 6 ? b() : pi !== -1 ? pi : (pi = b());
}
function Ct(e) {
  return e.mode & 1
    ? z & 2 && re !== 0
      ? re & -re
      : Sh.transition !== null
      ? (hi === 0 && (hi = kc()), hi)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lc(e.type))),
        e)
    : 1;
}
function $e(e, t, n, r) {
  if (50 < lr) throw ((lr = 0), (Ws = null), Error(x(185)));
  Lr(e, n, r),
    (!(z & 2) || e !== te) &&
      (e === te && (!(z & 2) && (ro |= n), q === 4 && mt(e, re)),
      we(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((_n = b() + 500), Zi && _t()));
}
function we(e, t) {
  var n = e.callbackNode;
  Sp(e, t);
  var r = ki(e, e === te ? re : 0);
  if (r === 0)
    n !== null && ga(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ga(n), t === 1))
      e.tag === 0 ? wh(au.bind(null, e)) : bc(au.bind(null, e)),
        mh(function () {
          !(z & 6) && _t();
        }),
        (n = null);
    else {
      switch (Ec(r)) {
        case 1:
          n = ml;
          break;
        case 4:
          n = Sc;
          break;
        case 16:
          n = xi;
          break;
        case 536870912:
          n = xc;
          break;
        default:
          n = xi;
      }
      n = bf(n, Bf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Bf(e, t) {
  if (((pi = -1), (hi = 0), z & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (En() && e.callbackNode !== n) return null;
  var r = ki(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ui(e, r);
  else {
    t = r;
    var i = z;
    z |= 2;
    var o = Hf();
    (te !== e || re !== t) && ((Ye = null), (_n = b() + 500), Vt(e, t));
    do
      try {
        Uh();
        break;
      } catch (l) {
        Vf(e, l);
      }
    while (!0);
    Rl(),
      (Di.current = o),
      (z = i),
      X !== null ? (t = 0) : ((te = null), (re = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ys(e)), i !== 0 && ((r = i), (t = Ks(e, i)))), t === 1)
    )
      throw ((n = Pr), Vt(e, 0), mt(e, r), we(e, b()), n);
    if (t === 6) mt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Ih(i) &&
          ((t = Ui(e, r)),
          t === 2 && ((o = ys(e)), o !== 0 && ((r = o), (t = Ks(e, o)))),
          t === 1))
      )
        throw ((n = Pr), Vt(e, 0), mt(e, r), we(e, b()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          It(e, he, Ye);
          break;
        case 3:
          if (
            (mt(e, r), (r & 130023424) === r && ((t = Hl + 500 - b()), 10 < t))
          ) {
            if (ki(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              fe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ps(It.bind(null, e, he, Ye), t);
            break;
          }
          It(e, he, Ye);
          break;
        case 4:
          if ((mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ie(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = b() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Dh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ps(It.bind(null, e, he, Ye), r);
            break;
          }
          It(e, he, Ye);
          break;
        case 5:
          It(e, he, Ye);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return we(e, b()), e.callbackNode === n ? Bf.bind(null, e) : null;
}
function Ks(e, t) {
  var n = sr;
  return (
    e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256),
    (e = Ui(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && Qs(t)),
    e
  );
}
function Qs(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function Ih(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Be(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mt(e, t) {
  for (
    t &= ~Vl,
      t &= ~ro,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function au(e) {
  if (z & 6) throw Error(x(327));
  En();
  var t = ki(e, 0);
  if (!(t & 1)) return we(e, b()), null;
  var n = Ui(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ys(e);
    r !== 0 && ((t = r), (n = Ks(e, r)));
  }
  if (n === 1) throw ((n = Pr), Vt(e, 0), mt(e, t), we(e, b()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    It(e, he, Ye),
    we(e, b()),
    null
  );
}
function Wl(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && ((_n = b() + 500), Zi && _t());
  }
}
function Yt(e) {
  yt !== null && yt.tag === 0 && !(z & 6) && En();
  var t = z;
  z |= 1;
  var n = _e.transition,
    r = D;
  try {
    if (((_e.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (_e.transition = n), (z = t), !(z & 6) && _t();
  }
}
function Kl() {
  (xe = yn.current), B(yn);
}
function Vt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), hh(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((Pl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Oi();
          break;
        case 3:
          Rn(), B(ye), B(ue), jl();
          break;
        case 5:
          Ml(r);
          break;
        case 4:
          Rn();
          break;
        case 13:
          B(W);
          break;
        case 19:
          B(W);
          break;
        case 10:
          Ll(r.type._context);
          break;
        case 22:
        case 23:
          Kl();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (X = e = Pt(e.current, null)),
    (re = xe = t),
    (q = 0),
    (Pr = null),
    (Vl = ro = Xt = 0),
    (he = sr = null),
    Ut !== null)
  ) {
    for (t = 0; t < Ut.length; t++)
      if (((n = Ut[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Ut = null;
  }
  return e;
}
function Vf(e, t) {
  do {
    var n = X;
    try {
      if ((Rl(), (ci.current = zi), Ai)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ai = !1;
      }
      if (
        ((bt = 0),
        (ee = G = K = null),
        (ir = !1),
        (kr = 0),
        (Bl.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (Pr = t), (X = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = re),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = Xa(s);
          if (v !== null) {
            (v.flags &= -257),
              Ya(v, s, l, o, t),
              v.mode & 1 && ba(o, u, t),
              (t = v),
              (a = u);
            var g = t.updateQueue;
            if (g === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else g.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ba(o, u, t), Ql();
              break e;
            }
            a = Error(x(426));
          }
        } else if (H && l.mode & 1) {
          var C = Xa(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Ya(C, s, l, o, t),
              Nl(Ln(a, l));
            break e;
          }
        }
        (o = a = Ln(a, l)),
          q !== 4 && (q = 2),
          sr === null ? (sr = [o]) : sr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Pf(o, a, t);
              Ba(o, h);
              break e;
            case 1:
              l = a;
              var p = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (Et === null || !Et.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Nf(o, l, t);
                Ba(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Kf(n);
    } catch (k) {
      (t = k), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Hf() {
  var e = Di.current;
  return (Di.current = zi), e === null ? zi : e;
}
function Ql() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    te === null || (!(Xt & 268435455) && !(ro & 268435455)) || mt(te, re);
}
function Ui(e, t) {
  var n = z;
  z |= 2;
  var r = Hf();
  (te !== e || re !== t) && ((Ye = null), Vt(e, t));
  do
    try {
      $h();
      break;
    } catch (i) {
      Vf(e, i);
    }
  while (!0);
  if ((Rl(), (z = n), (Di.current = r), X !== null)) throw Error(x(261));
  return (te = null), (re = 0), q;
}
function $h() {
  for (; X !== null; ) Wf(X);
}
function Uh() {
  for (; X !== null && !fp(); ) Wf(X);
}
function Wf(e) {
  var t = Jf(e.alternate, e, xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Kf(e) : (X = t),
    (Bl.current = null);
}
function Kf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Mh(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (X = null);
        return;
      }
    } else if (((n = Fh(n, t, xe)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function It(e, t, n) {
  var r = D,
    i = _e.transition;
  try {
    (_e.transition = null), (D = 1), Bh(e, t, n, r);
  } finally {
    (_e.transition = i), (D = r);
  }
  return null;
}
function Bh(e, t, n, r) {
  do En();
  while (yt !== null);
  if (z & 6) throw Error(x(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (xp(e, o),
    e === te && ((X = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      qr ||
      ((qr = !0),
      bf(xi, function () {
        return En(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = _e.transition), (_e.transition = null);
    var s = D;
    D = 1;
    var l = z;
    (z |= 4),
      (Bl.current = null),
      Ah(e, n),
      $f(n, e),
      lh(Es),
      (Ei = !!ks),
      (Es = ks = null),
      (e.current = n),
      zh(n),
      dp(),
      (z = l),
      (D = s),
      (_e.transition = o);
  } else e.current = n;
  if (
    (qr && ((qr = !1), (yt = e), ($i = i)),
    (o = e.pendingLanes),
    o === 0 && (Et = null),
    mp(n.stateNode),
    we(e, b()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ii) throw ((Ii = !1), (e = Hs), (Hs = null), e);
  return (
    $i & 1 && e.tag !== 0 && En(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ws ? lr++ : ((lr = 0), (Ws = e))) : (lr = 0),
    _t(),
    null
  );
}
function En() {
  if (yt !== null) {
    var e = Ec($i),
      t = _e.transition,
      n = D;
    try {
      if (((_e.transition = null), (D = 16 > e ? 16 : e), yt === null))
        var r = !1;
      else {
        if (((e = yt), (yt = null), ($i = 0), z & 6)) throw Error(x(331));
        var i = z;
        for (z |= 4, R = e.current; R !== null; ) {
          var o = R,
            s = o.child;
          if (R.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (R = u; R !== null; ) {
                  var c = R;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      or(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (R = d);
                  else
                    for (; R !== null; ) {
                      c = R;
                      var f = c.sibling,
                        v = c.return;
                      if ((zf(c), c === u)) {
                        R = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = v), (R = f);
                        break;
                      }
                      R = v;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var y = g.child;
                if (y !== null) {
                  g.child = null;
                  do {
                    var C = y.sibling;
                    (y.sibling = null), (y = C);
                  } while (y !== null);
                }
              }
              R = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (R = s);
          else
            e: for (; R !== null; ) {
              if (((o = R), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    or(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (R = h);
                break e;
              }
              R = o.return;
            }
        }
        var p = e.current;
        for (R = p; R !== null; ) {
          s = R;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (R = m);
          else
            e: for (s = p; R !== null; ) {
              if (((l = R), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      no(9, l);
                  }
                } catch (k) {
                  J(l, l.return, k);
                }
              if (l === s) {
                R = null;
                break e;
              }
              var S = l.sibling;
              if (S !== null) {
                (S.return = l.return), (R = S);
                break e;
              }
              R = l.return;
            }
        }
        if (
          ((z = i), _t(), Je && typeof Je.onPostCommitFiberRoot == "function")
        )
          try {
            Je.onPostCommitFiberRoot(bi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (_e.transition = t);
    }
  }
  return !1;
}
function uu(e, t, n) {
  (t = Ln(n, t)),
    (t = Pf(e, t, 1)),
    (e = kt(e, t, 1)),
    (t = fe()),
    e !== null && (Lr(e, 1, t), we(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) uu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        uu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Et === null || !Et.has(r)))
        ) {
          (e = Ln(n, e)),
            (e = Nf(t, e, 1)),
            (t = kt(t, e, 1)),
            (e = fe()),
            t !== null && (Lr(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Vh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = fe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (q === 4 || (q === 3 && (re & 130023424) === re && 500 > b() - Hl)
        ? Vt(e, 0)
        : (Vl |= n)),
    we(e, t);
}
function Qf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Vr), (Vr <<= 1), !(Vr & 130023424) && (Vr = 4194304))
      : (t = 1));
  var n = fe();
  (e = rt(e, t)), e !== null && (Lr(e, t, n), we(e, n));
}
function Hh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Qf(e, n);
}
function Wh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Qf(e, n);
}
var Jf;
Jf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ye.current) ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ge = !1), Th(e, t, n);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), H && t.flags & 1048576 && Xc(t, _i, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      di(e, t), (e = t.pendingProps);
      var i = Pn(t, ue.current);
      kn(t, n), (i = zl(null, t, r, e, i, n));
      var o = Dl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((o = !0), Ri(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Tl(t),
            (i.updater = eo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Fs(t, r, e, n),
            (t = As(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && Cl(t), ce(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (di(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Qh(r)),
          (e = Ae(r, e)),
          i)
        ) {
          case 0:
            t = js(null, t, r, e, n);
            break e;
          case 1:
            t = Za(null, t, r, e, n);
            break e;
          case 11:
            t = Ga(null, t, r, e, n);
            break e;
          case 14:
            t = qa(null, t, r, Ae(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        js(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        Za(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((_f(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Zc(e, t),
          Mi(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Ln(Error(x(423)), t)), (t = eu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Ln(Error(x(424)), t)), (t = eu(e, t, r, n, i));
            break e;
          } else
            for (
              ke = xt(t.stateNode.containerInfo.firstChild),
                Ee = t,
                H = !0,
                De = null,
                n = rf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Nn(), r === i)) {
            t = it(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        of(t),
        e === null && Ls(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Cs(r, i) ? (s = null) : o !== null && Cs(r, o) && (t.flags |= 32),
        Lf(e, t),
        ce(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Ls(t), null;
    case 13:
      return Tf(e, t, n);
    case 4:
      return (
        Fl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = On(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        Ga(e, t, r, i, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          $(Ti, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Be(o.value, s)) {
            if (o.children === i.children && !ye.current) {
              t = it(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = et(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      _s(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(x(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  _s(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ce(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        kn(t, n),
        (i = Fe(i)),
        (r = r(i)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ae(r, t.pendingProps)),
        (i = Ae(r.type, i)),
        qa(e, t, r, i, n)
      );
    case 15:
      return Of(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ae(r, i)),
        di(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), Ri(t)) : (e = !1),
        kn(t, n),
        tf(t, r, i),
        Fs(t, r, i, n),
        As(null, t, r, !0, e, n)
      );
    case 19:
      return Ff(e, t, n);
    case 22:
      return Rf(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function bf(e, t) {
  return wc(e, t);
}
function Kh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Le(e, t, n, r) {
  return new Kh(e, t, n, r);
}
function Jl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Qh(e) {
  if (typeof e == "function") return Jl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === dl)) return 11;
    if (e === pl) return 14;
  }
  return 2;
}
function Pt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Le(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function mi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Jl(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ln:
        return Ht(n.children, i, o, t);
      case fl:
        (s = 8), (i |= 8);
        break;
      case ns:
        return (
          (e = Le(12, n, t, i | 2)), (e.elementType = ns), (e.lanes = o), e
        );
      case rs:
        return (e = Le(13, n, t, i)), (e.elementType = rs), (e.lanes = o), e;
      case is:
        return (e = Le(19, n, t, i)), (e.elementType = is), (e.lanes = o), e;
      case nc:
        return io(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case ec:
              s = 10;
              break e;
            case tc:
              s = 9;
              break e;
            case dl:
              s = 11;
              break e;
            case pl:
              s = 14;
              break e;
            case dt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Le(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ht(e, t, n, r) {
  return (e = Le(7, e, r, t)), (e.lanes = n), e;
}
function io(e, t, n, r) {
  return (
    (e = Le(22, e, r, t)),
    (e.elementType = nc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Vo(e, t, n) {
  return (e = Le(6, e, null, t)), (e.lanes = n), e;
}
function Ho(e, t, n) {
  return (
    (t = Le(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Jh(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Eo(0)),
    (this.expirationTimes = Eo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Eo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function bl(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new Jh(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Le(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Tl(o),
    e
  );
}
function bh(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Xf(e) {
  if (!e) return Ot;
  e = e._reactInternals;
  e: {
    if (Zt(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Jc(e, n, t);
  }
  return t;
}
function Yf(e, t, n, r, i, o, s, l, a) {
  return (
    (e = bl(n, r, !0, e, i, o, s, l, a)),
    (e.context = Xf(null)),
    (n = e.current),
    (r = fe()),
    (i = Ct(n)),
    (o = et(r, i)),
    (o.callback = t ?? null),
    kt(n, o, i),
    (e.current.lanes = i),
    Lr(e, i, r),
    we(e, r),
    e
  );
}
function oo(e, t, n, r) {
  var i = t.current,
    o = fe(),
    s = Ct(i);
  return (
    (n = Xf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = et(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kt(i, t, s)),
    e !== null && ($e(e, i, s, o), ui(e, i, s)),
    s
  );
}
function Bi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Xl(e, t) {
  cu(e, t), (e = e.alternate) && cu(e, t);
}
function Xh() {
  return null;
}
var Gf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yl(e) {
  this._internalRoot = e;
}
so.prototype.render = Yl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  oo(e, t, null, null);
};
so.prototype.unmount = Yl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yt(function () {
      oo(null, e, null, null);
    }),
      (t[nt] = null);
  }
};
function so(e) {
  this._internalRoot = e;
}
so.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Nc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++);
    ht.splice(n, 0, e), n === 0 && Rc(e);
  }
};
function Gl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function lo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function fu() {}
function Yh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Bi(s);
        o.call(u);
      };
    }
    var s = Yf(t, r, e, 0, null, !1, !1, "", fu);
    return (
      (e._reactRootContainer = s),
      (e[nt] = s.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      Yt(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Bi(a);
      l.call(u);
    };
  }
  var a = bl(e, 0, !1, null, null, !1, !1, "", fu);
  return (
    (e._reactRootContainer = a),
    (e[nt] = a.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    Yt(function () {
      oo(t, a, n, r);
    }),
    a
  );
}
function ao(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = Bi(s);
        l.call(a);
      };
    }
    oo(t, s, e, i);
  } else s = Yh(n, t, e, i, r);
  return Bi(s);
}
Cc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes);
        n !== 0 &&
          (gl(t, n | 1), we(t, b()), !(z & 6) && ((_n = b() + 500), _t()));
      }
      break;
    case 13:
      Yt(function () {
        var r = rt(e, 1);
        if (r !== null) {
          var i = fe();
          $e(r, e, 1, i);
        }
      }),
        Xl(e, 1);
  }
};
yl = function (e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = fe();
      $e(t, e, 134217728, n);
    }
    Xl(e, 134217728);
  }
};
Pc = function (e) {
  if (e.tag === 13) {
    var t = Ct(e),
      n = rt(e, t);
    if (n !== null) {
      var r = fe();
      $e(n, e, t, r);
    }
    Xl(e, t);
  }
};
Nc = function () {
  return D;
};
Oc = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
hs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ls(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = qi(r);
            if (!i) throw Error(x(90));
            ic(r), ls(r, i);
          }
        }
      }
      break;
    case "textarea":
      sc(e, n);
      break;
    case "select":
      (t = n.value), t != null && vn(e, !!n.multiple, t, !1);
  }
};
pc = Wl;
hc = Yt;
var Gh = { usingClientEntryPoint: !1, Events: [Tr, fn, qi, fc, dc, Wl] },
  Wn = {
    findFiberByHostInstance: $t,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  qh = {
    bundleType: Wn.bundleType,
    version: Wn.version,
    rendererPackageName: Wn.rendererPackageName,
    rendererConfig: Wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ot.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = yc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Wn.findFiberByHostInstance || Xh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zr.isDisabled && Zr.supportsFiber)
    try {
      (bi = Zr.inject(qh)), (Je = Zr);
    } catch {}
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gh;
Pe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gl(t)) throw Error(x(200));
  return bh(e, t, null, n);
};
Pe.createRoot = function (e, t) {
  if (!Gl(e)) throw Error(x(299));
  var n = !1,
    r = "",
    i = Gf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = bl(e, 1, !1, null, null, n, !1, r, i)),
    (e[nt] = t.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    new Yl(t)
  );
};
Pe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = yc(t)), (e = e === null ? null : e.stateNode), e;
};
Pe.flushSync = function (e) {
  return Yt(e);
};
Pe.hydrate = function (e, t, n) {
  if (!lo(t)) throw Error(x(200));
  return ao(null, e, t, !0, n);
};
Pe.hydrateRoot = function (e, t, n) {
  if (!Gl(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Gf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Yf(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[nt] = t.current),
    yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new so(t);
};
Pe.render = function (e, t, n) {
  if (!lo(t)) throw Error(x(200));
  return ao(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function (e) {
  if (!lo(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (Yt(function () {
        ao(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nt] = null);
        });
      }),
      !0)
    : !1;
};
Pe.unstable_batchedUpdates = Wl;
Pe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!lo(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return ao(e, t, n, !1, r);
};
Pe.version = "18.2.0-next-9e3b772b8-20220608";
function qf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf);
    } catch (e) {
      console.error(e);
    }
}
qf(), (Xu.exports = Pe);
var Zh = Xu.exports,
  Zf,
  du = Zh;
(Zf = du.createRoot), du.hydrateRoot;
var em = Object.defineProperty,
  tm = (e, t, n) =>
    t in e
      ? em(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  ei = (e, t, n) => (tm(e, typeof t != "symbol" ? t + "" : t, n), n);
const nm = { stringify: (e) => e, parse: (e) => e },
  rm = { stringify: (e) => `${e}`, parse: (e) => parseFloat(e) },
  im = {
    stringify: (e) => (e ? "true" : "false"),
    parse: (e) => /^[ty1-9]/i.test(e),
  },
  om = {
    stringify: (e) => e.name,
    parse: (e, t, n) => {
      const r = (() => {
        if (typeof window < "u" && e in window) return window[e];
        if (typeof global < "u" && e in global) return global[e];
      })();
      return typeof r == "function" ? r.bind(n) : void 0;
    },
  },
  sm = { stringify: (e) => JSON.stringify(e), parse: (e) => JSON.parse(e) },
  Wo = { string: nm, number: rm, boolean: im, function: om, json: sm };
function lm(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (t, n, r) => `${n}-${r.toLowerCase()}`
  );
}
const ti = Symbol.for("r2wc.render"),
  ni = Symbol.for("r2wc.connected"),
  At = Symbol.for("r2wc.context"),
  ut = Symbol.for("r2wc.props");
function am(e, t, n) {
  var r, i, o;
  t.props || (t.props = e.propTypes ? Object.keys(e.propTypes) : []);
  const s = Array.isArray(t.props) ? t.props.slice() : Object.keys(t.props),
    l = {},
    a = {},
    u = {};
  for (const d of s) {
    l[d] = Array.isArray(t.props) ? "string" : t.props[d];
    const f = lm(d);
    (a[d] = f), (u[f] = d);
  }
  class c extends HTMLElement {
    constructor() {
      super(),
        ei(this, r, !0),
        ei(this, i),
        ei(this, o, {}),
        ei(this, "container"),
        t.shadow
          ? (this.container = this.attachShadow({ mode: t.shadow }))
          : (this.container = this),
        (this[ut].container = this.container);
      for (const f of s) {
        const v = a[f],
          g = this.getAttribute(v),
          y = l[f],
          C = y ? Wo[y] : null;
        C != null && C.parse && g && (this[ut][f] = C.parse(g, v, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(u);
    }
    connectedCallback() {
      (this[ni] = !0), this[ti]();
    }
    disconnectedCallback() {
      (this[ni] = !1), this[At] && n.unmount(this[At]), delete this[At];
    }
    attributeChangedCallback(f, v, g) {
      const y = u[f],
        C = l[y],
        h = C ? Wo[C] : null;
      y in l &&
        h != null &&
        h.parse &&
        g &&
        ((this[ut][y] = h.parse(g, f, this)), this[ti]());
    }
    [((r = ni), (i = At), (o = ut), ti)]() {
      this[ni] &&
        (this[At]
          ? n.update(this[At], this[ut])
          : (this[At] = n.mount(this.container, e, this[ut])));
    }
  }
  for (const d of s) {
    const f = a[d],
      v = l[d];
    Object.defineProperty(c.prototype, d, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[ut][d];
      },
      set(g) {
        this[ut][d] = g;
        const y = v ? Wo[v] : null;
        if (y != null && y.stringify) {
          const C = y.stringify(g, f, this);
          this.getAttribute(f) !== C && this.setAttribute(f, C);
        } else this[ti]();
      },
    });
  }
  return c;
}
function um(e, t, n) {
  const r = Zf(e),
    i = bu.createElement(t, n);
  return r.render(i), { root: r, ReactComponent: t };
}
function cm({ root: e, ReactComponent: t }, n) {
  const r = bu.createElement(t, n);
  e.render(r);
}
function fm({ root: e }) {
  e.unmount();
}
function dm(e, t = {}) {
  return am(e, t, { mount: um, update: cm, unmount: fm });
}
var ed = { exports: {} },
  uo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pm = me,
  hm = Symbol.for("react.element"),
  mm = Symbol.for("react.fragment"),
  gm = Object.prototype.hasOwnProperty,
  ym = pm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vm = { key: !0, ref: !0, __self: !0, __source: !0 };
function td(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) gm.call(t, r) && !vm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: hm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: ym.current,
  };
}
uo.Fragment = mm;
uo.jsx = td;
uo.jsxs = td;
ed.exports = uo;
var M = ed.exports,
  nd = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", s = 0; s < arguments.length; s++) {
        var l = arguments[s];
        l && (o = i(o, r(l)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var s = "";
      for (var l in o) t.call(o, l) && o[l] && (s = i(s, l));
      return s;
    }
    function i(o, s) {
      return s ? (o ? o + " " + s : o + s) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(nd);
var wm = nd.exports;
const Tn = $u(wm),
  Sm = "App-module__reset__TASN7",
  xm = "App-module__app__d3kQ4",
  km = "App-module__layoutContainer__tDHFg",
  Ko = { reset: Sm, app: xm, layoutContainer: km },
  Em = "Container-module__container__JMoiT",
  Cm = "Container-module__partialWidth__y4anM",
  Pm = "Container-module__breakOutSticky__nS15w",
  Qo = { container: Em, partialWidth: Cm, breakOutSticky: Pm },
  zt = (e) => {
    const { children: t, partialWidth: n = !1, breakOutSticky: r = !1 } = e,
      i = Tn(Qo.container, { [Qo.partialWidth]: n, [Qo.breakOutSticky]: r });
    return M.jsx("div", { className: i, children: t });
  },
  Nm = "Content-module__content__HfnNX",
  Om = "Content-module__withoutPadding__p37QC",
  Rm = "Content-module__gray__nmjwS",
  Lm = "Content-module__green__GSgi1",
  _m = "Content-module__greenLight__XSMeG",
  Tm = "Content-module__greenLightest__ARMi3",
  Jo = {
    content: Nm,
    withoutPadding: Om,
    gray: Rm,
    green: Lm,
    greenLight: _m,
    greenLightest: Tm,
  },
  Xe = (e) => {
    const {
        children: t,
        background: n = "default",
        withoutPadding: r = !1,
      } = e,
      i = Tn(Jo.content, { [Jo[n]]: n !== "default", [Jo.withoutPadding]: r });
    return M.jsx("div", { className: i, children: t });
  },
  Fm = "CalculatorForm-module__calculatorForm__L90k-",
  Mm = { calculatorForm: Fm },
  jm = (e) => {
    const { dummy: t } = e,
      n = Tn(Mm.calculatorForm);
    return M.jsxs("div", { className: n, children: ["CalculatorForm ", t] });
  },
  Am = "AmountRow-module__amountRow__Tm3CD",
  zm = "AmountRow-module__label__QgYOv",
  Dm = "AmountRow-module__amount__iLF57",
  bo = { amountRow: Am, label: zm, amount: Dm },
  ct = (e) => {
    const { label: t, value: n, currency: r = "€" } = e,
      i = Tn(bo.amountRow);
    return M.jsxs("div", {
      className: i,
      children: [
        M.jsx("div", { className: bo.label, children: t }),
        M.jsxs("div", { className: bo.amount, children: [n, " ", r] }),
      ],
    });
  },
  Im = (...e) => {
    console != null &&
      console.warn &&
      (Wt(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e));
  },
  pu = {},
  Js = (...e) => {
    (Wt(e[0]) && pu[e[0]]) || (Wt(e[0]) && (pu[e[0]] = new Date()), Im(...e));
  },
  rd = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off("initialized", n);
        }, 0),
          t();
      };
      e.on("initialized", n);
    }
  },
  hu = (e, t, n) => {
    e.loadNamespaces(t, rd(e, n));
  },
  mu = (e, t, n, r) => {
    Wt(n) && (n = [n]),
      n.forEach((i) => {
        e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
      }),
      e.loadLanguages(t, rd(e, r));
  },
  $m = (e, t, n = {}) =>
    !t.languages || !t.languages.length
      ? (Js("i18n.languages were undefined or empty", t.languages), !0)
      : t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (r, i) => {
            var o;
            if (
              ((o = n.bindI18n) == null
                ? void 0
                : o.indexOf("languageChanging")) > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !i(r.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  Wt = (e) => typeof e == "string",
  Um = (e) => typeof e == "object" && e !== null,
  Bm =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Vm = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  Hm = (e) => Vm[e],
  Wm = (e) => e.replace(Bm, Hm);
let bs = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Wm,
};
const Km = (e = {}) => {
    bs = { ...bs, ...e };
  },
  Qm = () => bs;
let id;
const Jm = (e) => {
    id = e;
  },
  bm = () => id,
  Xm = {
    type: "3rdParty",
    init(e) {
      Km(e.options.react), Jm(e);
    },
  },
  od = me.createContext();
class Ym {
  constructor() {
    ra(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      var r;
      (r = this.usedNamespaces)[n] ?? (r[n] = !0);
    });
  }
}
const Gm = (e, t) => {
    const n = me.useRef();
    return (
      me.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  sd = (e, t, n, r) => e.getFixedT(t, n, r),
  qm = (e, t, n, r) => me.useCallback(sd(e, t, n, r), [e, t, n, r]),
  Zm = (e, t = {}) => {
    var S, k, P, E;
    const { i18n: n } = t,
      { i18n: r, defaultNS: i } = me.useContext(od) || {},
      o = n || r || bm();
    if ((o && !o.reportNamespaces && (o.reportNamespaces = new Ym()), !o)) {
      Js(
        "You will need to pass in an i18next instance by using initReactI18next"
      );
      const O = (_, I) =>
          Wt(I)
            ? I
            : Um(I) && Wt(I.defaultValue)
            ? I.defaultValue
            : Array.isArray(_)
            ? _[_.length - 1]
            : _,
        A = [O, {}, !1];
      return (A.t = O), (A.i18n = {}), (A.ready = !1), A;
    }
    (S = o.options.react) != null &&
      S.wait &&
      Js(
        "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    const s = { ...Qm(), ...o.options.react, ...t },
      { useSuspense: l, keyPrefix: a } = s;
    let u = i || ((k = o.options) == null ? void 0 : k.defaultNS);
    (u = Wt(u) ? [u] : u || ["translation"]),
      (E = (P = o.reportNamespaces).addUsedNamespaces) == null || E.call(P, u);
    const c =
        (o.isInitialized || o.initializedStoreOnce) &&
        u.every((O) => $m(O, o, s)),
      d = qm(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], a),
      f = () => d,
      v = () => sd(o, t.lng || null, s.nsMode === "fallback" ? u : u[0], a),
      [g, y] = me.useState(f);
    let C = u.join();
    t.lng && (C = `${t.lng}${C}`);
    const h = Gm(C),
      p = me.useRef(!0);
    me.useEffect(() => {
      const { bindI18n: O, bindI18nStore: A } = s;
      (p.current = !0),
        !c &&
          !l &&
          (t.lng
            ? mu(o, t.lng, u, () => {
                p.current && y(v);
              })
            : hu(o, u, () => {
                p.current && y(v);
              })),
        c && h && h !== C && p.current && y(v);
      const _ = () => {
        p.current && y(v);
      };
      return (
        O && (o == null || o.on(O, _)),
        A && (o == null || o.store.on(A, _)),
        () => {
          (p.current = !1),
            o && (O == null || O.split(" ").forEach((I) => o.off(I, _))),
            A && o && A.split(" ").forEach((I) => o.store.off(I, _));
        }
      );
    }, [o, C]),
      me.useEffect(() => {
        p.current && c && y(f);
      }, [o, a, c]);
    const m = [g, o, c];
    if (((m.t = g), (m.i18n = o), (m.ready = c), c || (!c && !l))) return m;
    throw new Promise((O) => {
      t.lng ? mu(o, t.lng, u, () => O()) : hu(o, u, () => O());
    });
  };
function eg({ i18n: e, defaultNS: t, children: n }) {
  const r = me.useMemo(() => ({ i18n: e, defaultNS: t }), [e, t]);
  return me.createElement(od.Provider, { value: r }, n);
}
const tg = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  },
};
class Vi {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || "i18next:"),
      (this.logger = t || tg),
      (this.options = n),
      (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, i) {
    return i && !this.debug
      ? null
      : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t));
  }
  create(t) {
    return new Vi(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    });
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Vi(this.logger, t)
    );
  }
}
var Qe = new Vi();
class co {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(" ").forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map());
        const i = this.observers[r].get(n) || 0;
        this.observers[r].set(n, i + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((s) => {
        let [l, a] = s;
        for (let u = 0; u < a; u++) l(...r);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((s) => {
          let [l, a] = s;
          for (let u = 0; u < a; u++) l.apply(l, [t, ...r]);
        });
  }
}
function Kn() {
  let e, t;
  const n = new Promise((r, i) => {
    (e = r), (t = i);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function gu(e) {
  return e == null ? "" : "" + e;
}
function ng(e, t, n) {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}
const rg = /###/g;
function ar(e, t, n) {
  function r(l) {
    return l && l.indexOf("###") > -1 ? l.replace(rg, ".") : l;
  }
  function i() {
    return !e || typeof e == "string";
  }
  const o = typeof t != "string" ? t : t.split(".");
  let s = 0;
  for (; s < o.length - 1; ) {
    if (i()) return {};
    const l = r(o[s]);
    !e[l] && n && (e[l] = new n()),
      Object.prototype.hasOwnProperty.call(e, l) ? (e = e[l]) : (e = {}),
      ++s;
  }
  return i() ? {} : { obj: e, k: r(o[s]) };
}
function yu(e, t, n) {
  const { obj: r, k: i } = ar(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[i] = n;
    return;
  }
  let o = t[t.length - 1],
    s = t.slice(0, t.length - 1),
    l = ar(e, s, Object);
  for (; l.obj === void 0 && s.length; )
    (o = `${s[s.length - 1]}.${o}`),
      (s = s.slice(0, s.length - 1)),
      (l = ar(e, s, Object)),
      l && l.obj && typeof l.obj[`${l.k}.${o}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${o}`] = n;
}
function ig(e, t, n, r) {
  const { obj: i, k: o } = ar(e, t, Object);
  (i[o] = i[o] || []), i[o].push(n);
}
function Hi(e, t) {
  const { obj: n, k: r } = ar(e, t);
  if (n) return n[r];
}
function og(e, t, n) {
  const r = Hi(e, n);
  return r !== void 0 ? r : Hi(t, n);
}
function ld(e, t, n) {
  for (const r in t)
    r !== "__proto__" &&
      r !== "constructor" &&
      (r in e
        ? typeof e[r] == "string" ||
          e[r] instanceof String ||
          typeof t[r] == "string" ||
          t[r] instanceof String
          ? n && (e[r] = t[r])
          : ld(e[r], t[r], n)
        : (e[r] = t[r]));
  return e;
}
function rn(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var sg = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
function lg(e) {
  return typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => sg[t]) : e;
}
class ag {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    );
  }
}
const ug = [" ", ",", "?", "!", ";"],
  cg = new ag(20);
function fg(e, t, n) {
  (t = t || ""), (n = n || "");
  const r = ug.filter((s) => t.indexOf(s) < 0 && n.indexOf(s) < 0);
  if (r.length === 0) return !0;
  const i = cg.getRegExp(
    `(${r.map((s) => (s === "?" ? "\\?" : s)).join("|")})`
  );
  let o = !i.test(e);
  if (!o) {
    const s = e.indexOf(n);
    s > 0 && !i.test(e.substring(0, s)) && (o = !0);
  }
  return o;
}
function Xs(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let i = e;
  for (let o = 0; o < r.length; ) {
    if (!i || typeof i != "object") return;
    let s,
      l = "";
    for (let a = o; a < r.length; ++a)
      if ((a !== o && (l += n), (l += r[a]), (s = i[l]), s !== void 0)) {
        if (
          ["string", "number", "boolean"].indexOf(typeof s) > -1 &&
          a < r.length - 1
        )
          continue;
        o += a - o + 1;
        break;
      }
    i = s;
  }
  return i;
}
function Wi(e) {
  return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
}
class vu extends co {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      s =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let l;
    t.indexOf(".") > -1
      ? (l = t.split("."))
      : ((l = [t, n]),
        r &&
          (Array.isArray(r)
            ? l.push(...r)
            : typeof r == "string" && o
            ? l.push(...r.split(o))
            : l.push(r)));
    const a = Hi(this.data, l);
    return (
      !a &&
        !n &&
        !r &&
        t.indexOf(".") > -1 &&
        ((t = l[0]), (n = l[1]), (r = l.slice(2).join("."))),
      a || !s || typeof r != "string"
        ? a
        : Xs(this.data && this.data[t] && this.data[t][n], r, o)
    );
  }
  addResource(t, n, r, i) {
    let o =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const s =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let l = [t, n];
    r && (l = l.concat(s ? r.split(s) : r)),
      t.indexOf(".") > -1 && ((l = t.split(".")), (i = n), (n = l[1])),
      this.addNamespaces(n),
      yu(this.data, l, i),
      o.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r) {
    let i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const o in r)
      (typeof r[o] == "string" || Array.isArray(r[o])) &&
        this.addResource(t, n, o, r[o], { silent: !0 });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, o) {
    let s =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      l = [t, n];
    t.indexOf(".") > -1 && ((l = t.split(".")), (i = r), (r = n), (n = l[1])),
      this.addNamespaces(n);
    let a = Hi(this.data, l) || {};
    s.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      i ? ld(a, r, o) : (a = { ...a, ...r }),
      yu(this.data, l, a),
      s.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var ad = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return (
      e.forEach((o) => {
        this.processors[o] && (t = this.processors[o].process(t, n, r, i));
      }),
      t
    );
  },
};
const wu = {};
class Ki extends co {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      ng(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        t,
        this
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = Qe.create("translator"));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const s = r && t.indexOf(r) > -1,
      l =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !fg(t, r, i);
    if (s && !l) {
      const a = t.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0) return { key: t, namespaces: o };
      const u = t.split(r);
      (r !== i || (r === i && this.options.ns.indexOf(u[0]) > -1)) &&
        (o = u.shift()),
        (t = u.join(i));
    }
    return typeof o == "string" && (o = [o]), { key: t, namespaces: o };
  }
  translate(t, n, r) {
    if (
      (typeof n != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == "object" && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const i =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      o =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: s, namespaces: l } = this.extractFromKey(t[t.length - 1], n),
      a = l[l.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === "cimode") {
      if (c) {
        const S = n.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${a}${S}${s}`,
              usedKey: s,
              exactUsedKey: s,
              usedLng: u,
              usedNS: a,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${a}${S}${s}`;
      }
      return i
        ? {
            res: s,
            usedKey: s,
            exactUsedKey: s,
            usedLng: u,
            usedNS: a,
            usedParams: this.getUsedParamsDetails(n),
          }
        : s;
    }
    const d = this.resolve(t, n);
    let f = d && d.res;
    const v = (d && d.usedKey) || s,
      g = (d && d.exactUsedKey) || s,
      y = Object.prototype.toString.apply(f),
      C = ["[object Number]", "[object Function]", "[object RegExp]"],
      h = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      p = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      p &&
      f &&
      typeof f != "string" &&
      typeof f != "boolean" &&
      typeof f != "number" &&
      C.indexOf(y) < 0 &&
      !(typeof h == "string" && Array.isArray(f))
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const S = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(v, f, { ...n, ns: l })
          : `key '${s} (${this.language})' returned an object instead of string.`;
        return i
          ? ((d.res = S), (d.usedParams = this.getUsedParamsDetails(n)), d)
          : S;
      }
      if (o) {
        const S = Array.isArray(f),
          k = S ? [] : {},
          P = S ? g : v;
        for (const E in f)
          if (Object.prototype.hasOwnProperty.call(f, E)) {
            const O = `${P}${o}${E}`;
            (k[E] = this.translate(O, { ...n, joinArrays: !1, ns: l })),
              k[E] === O && (k[E] = f[E]);
          }
        f = k;
      }
    } else if (p && typeof h == "string" && Array.isArray(f))
      (f = f.join(h)), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let S = !1,
        k = !1;
      const P = n.count !== void 0 && typeof n.count != "string",
        E = Ki.hasDefaultValue(n),
        O = P ? this.pluralResolver.getSuffix(u, n.count, n) : "",
        A =
          n.ordinal && P
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : "",
        _ =
          P &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        I =
          (_ && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${O}`] ||
          n[`defaultValue${A}`] ||
          n.defaultValue;
      !this.isValidLookup(f) && E && ((S = !0), (f = I)),
        this.isValidLookup(f) || ((k = !0), (f = s));
      const Tt =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          k
            ? void 0
            : f,
        st = E && I !== f && this.options.updateMissing;
      if (k || S || st) {
        if (
          (this.logger.log(
            st ? "updateKey" : "missingKey",
            u,
            a,
            s,
            st ? I : f
          ),
          o)
        ) {
          const N = this.resolve(s, { ...n, keySeparator: !1 });
          N &&
            N.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let Ft = [];
        const lt = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && lt && lt[0])
          for (let N = 0; N < lt.length; N++) Ft.push(lt[N]);
        else
          this.options.saveMissingTo === "all"
            ? (Ft = this.languageUtils.toResolveHierarchy(
                n.lng || this.language
              ))
            : Ft.push(n.lng || this.language);
        const tn = (N, L, T) => {
          const V = E && T !== f ? T : Tt;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(N, a, L, V, st, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(N, a, L, V, st, n),
            this.emit("missingKey", N, a, L, f);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && P
            ? Ft.forEach((N) => {
                const L = this.pluralResolver.getSuffixes(N, n);
                _ &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  L.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  L.push(`${this.options.pluralSeparator}zero`),
                  L.forEach((T) => {
                    tn([N], s + T, n[`defaultValue${T}`] || I);
                  });
              })
            : tn(Ft, s, I));
      }
      (f = this.extendTranslation(f, t, n, d, r)),
        k &&
          f === s &&
          this.options.appendNamespaceToMissingKey &&
          (f = `${a}:${s}`),
        (k || S) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (f = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${a}:${s}` : s,
                S ? f : void 0
              ))
            : (f = this.options.parseMissingKeyHandler(f)));
    }
    return i
      ? ((d.res = f), (d.usedParams = this.getUsedParamsDetails(n)), d)
      : f;
  }
  extendTranslation(t, n, r, i, o) {
    var s = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i }
      );
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        });
      const u =
        typeof t == "string" &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const f = t.match(this.interpolator.nestingRegexp);
        c = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables &&
          (d = { ...this.options.interpolation.defaultVariables, ...d }),
        (t = this.interpolator.interpolate(
          t,
          d,
          r.lng || this.language || i.usedLng,
          r
        )),
        u)
      ) {
        const f = t.match(this.interpolator.nestingRegexp),
          v = f && f.length;
        c < v && (r.nest = !1);
      }
      !r.lng &&
        this.options.compatibilityAPI !== "v1" &&
        i &&
        i.res &&
        (r.lng = this.language || i.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var f = arguments.length, v = new Array(f), g = 0;
                g < f;
                g++
              )
                v[g] = arguments[g];
              return o && o[0] === v[0] && !r.context
                ? (s.logger.warn(
                    `It seems you are nesting recursively key: ${v[0]} in key: ${n[0]}`
                  ),
                  null)
                : s.translate(...v, n);
            },
            r
          )),
        r.interpolation && this.interpolator.reset();
    }
    const l = r.postProcess || this.options.postProcess,
      a = typeof l == "string" ? [l] : l;
    return (
      t != null &&
        a &&
        a.length &&
        r.applyPostProcessor !== !1 &&
        (t = ad.handle(
          a,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...i,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      i,
      o,
      s,
      l;
    return (
      typeof t == "string" && (t = [t]),
      t.forEach((a) => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(a, n),
          c = u.key;
        i = c;
        let d = u.namespaces;
        this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
        const f = n.count !== void 0 && typeof n.count != "string",
          v =
            f &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          g =
            n.context !== void 0 &&
            (typeof n.context == "string" || typeof n.context == "number") &&
            n.context !== "",
          y = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng
              );
        d.forEach((C) => {
          this.isValidLookup(r) ||
            ((l = C),
            !wu[`${y[0]}-${C}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(l) &&
              ((wu[`${y[0]}-${C}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${y.join(
                  ", "
                )}" won't get resolved as namespace "${l}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            y.forEach((h) => {
              if (this.isValidLookup(r)) return;
              s = h;
              const p = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(p, c, h, C, n);
              else {
                let S;
                f && (S = this.pluralResolver.getSuffix(h, n.count, n));
                const k = `${this.options.pluralSeparator}zero`,
                  P = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (f &&
                    (p.push(c + S),
                    n.ordinal &&
                      S.indexOf(P) === 0 &&
                      p.push(c + S.replace(P, this.options.pluralSeparator)),
                    v && p.push(c + k)),
                  g)
                ) {
                  const E = `${c}${this.options.contextSeparator}${n.context}`;
                  p.push(E),
                    f &&
                      (p.push(E + S),
                      n.ordinal &&
                        S.indexOf(P) === 0 &&
                        p.push(E + S.replace(P, this.options.pluralSeparator)),
                      v && p.push(E + k));
                }
              }
              let m;
              for (; (m = p.pop()); )
                this.isValidLookup(r) ||
                  ((o = m), (r = this.getResource(h, C, m, n)));
            }));
        });
      }),
      { res: r, usedKey: i, exactUsedKey: o, usedLng: s, usedNS: l }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === "")
    );
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, i)
      : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      r = t.replace && typeof t.replace != "string";
    let i = r ? t.replace : t;
    if (
      (r && typeof t.count < "u" && (i.count = t.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !r)
    ) {
      i = { ...i };
      for (const o of n) delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0;
    return !1;
  }
}
function Xo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class Su {
  constructor(t) {
    (this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Qe.create("languageUtils"));
  }
  getScriptPartFromCode(t) {
    if (((t = Wi(t)), !t || t.indexOf("-") < 0)) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (((t = Wi(t)), !t || t.indexOf("-") < 0)) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return (
        this.options.lowerCaseLng
          ? (r = r.map((i) => i.toLowerCase()))
          : r.length === 2
          ? ((r[0] = r[0].toLowerCase()),
            (r[1] = r[1].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Xo(r[1].toLowerCase())))
          : r.length === 3 &&
            ((r[0] = r[0].toLowerCase()),
            r[1].length === 2 && (r[1] = r[1].toUpperCase()),
            r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
            n.indexOf(r[1].toLowerCase()) > -1 &&
              (r[1] = Xo(r[1].toLowerCase())),
            n.indexOf(r[2].toLowerCase()) > -1 &&
              (r[2] = Xo(r[2].toLowerCase()))),
        r.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach((r) => {
        if (n) return;
        const i = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return;
          const i = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(i)) return (n = i);
          n = this.options.supportedLngs.find((o) => {
            if (o === i) return o;
            if (
              !(o.indexOf("-") < 0 && i.indexOf("-") < 0) &&
              ((o.indexOf("-") > 0 &&
                i.indexOf("-") < 0 &&
                o.substring(0, o.indexOf("-")) === i) ||
                (o.indexOf(i) === 0 && i.length > 1))
            )
              return o;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (
      (typeof t == "function" && (t = t(n)),
      typeof t == "string" && (t = [t]),
      Array.isArray(t))
    )
      return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      i = [],
      o = (s) => {
        s &&
          (this.isSupportedCode(s)
            ? i.push(s)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${s}`
              ));
      };
    return (
      typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            o(this.formatLanguageCode(t)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== "currentOnly" &&
            o(this.getLanguagePartFromCode(t)))
        : typeof t == "string" && o(this.formatLanguageCode(t)),
      r.forEach((s) => {
        i.indexOf(s) < 0 && o(this.formatLanguageCode(s));
      }),
      i
    );
  }
}
let dg = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  pg = {
    1: function (e) {
      return +(e > 1);
    },
    2: function (e) {
      return +(e != 1);
    },
    3: function (e) {
      return 0;
    },
    4: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    5: function (e) {
      return e == 0
        ? 0
        : e == 1
        ? 1
        : e == 2
        ? 2
        : e % 100 >= 3 && e % 100 <= 10
        ? 3
        : e % 100 >= 11
        ? 4
        : 5;
    },
    6: function (e) {
      return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
    },
    7: function (e) {
      return e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    8: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
    },
    9: function (e) {
      return +(e >= 2);
    },
    10: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
    },
    11: function (e) {
      return e == 1 || e == 11
        ? 0
        : e == 2 || e == 12
        ? 1
        : e > 2 && e < 20
        ? 2
        : 3;
    },
    12: function (e) {
      return +(e % 10 != 1 || e % 100 == 11);
    },
    13: function (e) {
      return +(e !== 0);
    },
    14: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
    },
    15: function (e) {
      return e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
        ? 1
        : 2;
    },
    16: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
    },
    17: function (e) {
      return e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1;
    },
    18: function (e) {
      return e == 0 ? 0 : e == 1 ? 1 : 2;
    },
    19: function (e) {
      return e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
        ? 1
        : e % 100 > 10 && e % 100 < 20
        ? 2
        : 3;
    },
    20: function (e) {
      return e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2;
    },
    21: function (e) {
      return e % 100 == 1
        ? 1
        : e % 100 == 2
        ? 2
        : e % 100 == 3 || e % 100 == 4
        ? 3
        : 0;
    },
    22: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
    },
  };
const hg = ["v1", "v2", "v3"],
  mg = ["v4"],
  xu = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function gg() {
  const e = {};
  return (
    dg.forEach((t) => {
      t.lngs.forEach((n) => {
        e[n] = { numbers: t.nr, plurals: pg[t.fc] };
      });
    }),
    e
  );
}
class yg {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = Qe.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        mg.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = gg());
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Wi(t === "dev" ? "en" : t), {
          type: n.ordinal ? "ordinal" : "cardinal",
        });
      } catch {
        return;
      }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    );
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, o) => xu[i] - xu[o])
            .map(
              (i) =>
                `${this.options.prepend}${
                  n.ordinal ? `ordinal${this.options.prepend}` : ""
                }${i}`
            )
        : r.numbers.map((i) => this.getSuffix(t, i, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, r);
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            r.ordinal ? `ordinal${this.options.prepend}` : ""
          }${i.select(n)}`
        : this.getSuffixRetroCompatible(i, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let i = t.numbers[r];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (i === 2 ? (i = "plural") : i === 1 && (i = ""));
    const o = () =>
      this.options.prepend && i.toString()
        ? this.options.prepend + i.toString()
        : i.toString();
    return this.options.compatibilityJSON === "v1"
      ? i === 1
        ? ""
        : typeof i == "number"
        ? `_plural_${i.toString()}`
        : o()
      : this.options.compatibilityJSON === "v2" ||
        (this.options.simplifyPluralSuffix &&
          t.numbers.length === 2 &&
          t.numbers[0] === 1)
      ? o()
      : this.options.prepend && r.toString()
      ? this.options.prepend + r.toString()
      : r.toString();
  }
  shouldUseIntlApi() {
    return !hg.includes(this.options.compatibilityJSON);
  }
}
function ku(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
    i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    o = og(e, t, n);
  return (
    !o &&
      i &&
      typeof n == "string" &&
      ((o = Xs(e, n, r)), o === void 0 && (o = Xs(t, n, r))),
    o
  );
}
class vg {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Qe.create("interpolator")),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: s,
      suffix: l,
      suffixEscaped: a,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: v,
      nestingSuffix: g,
      nestingSuffixEscaped: y,
      nestingOptionsSeparator: C,
      maxReplaces: h,
      alwaysFormat: p,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : lg),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = o ? rn(o) : s || "{{"),
      (this.suffix = l ? rn(l) : a || "}}"),
      (this.formatSeparator = u || ","),
      (this.unescapePrefix = c ? "" : d || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : c || ""),
      (this.nestingPrefix = f ? rn(f) : v || rn("$t(")),
      (this.nestingSuffix = g ? rn(g) : y || rn(")")),
      (this.nestingOptionsSeparator = C || ","),
      (this.maxReplaces = h || 1e3),
      (this.alwaysFormat = p !== void 0 ? p : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, "g");
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(t, n, r, i) {
    let o, s, l;
    const a =
      (this.options &&
        this.options.interpolation &&
        this.options.interpolation.defaultVariables) ||
      {};
    function u(g) {
      return g.replace(/\$/g, "$$$$");
    }
    const c = (g) => {
      if (g.indexOf(this.formatSeparator) < 0) {
        const p = ku(
          n,
          a,
          g,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        );
        return this.alwaysFormat
          ? this.format(p, void 0, r, { ...i, ...n, interpolationkey: g })
          : p;
      }
      const y = g.split(this.formatSeparator),
        C = y.shift().trim(),
        h = y.join(this.formatSeparator).trim();
      return this.format(
        ku(
          n,
          a,
          C,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        ),
        h,
        r,
        { ...i, ...n, interpolationkey: C }
      );
    };
    this.resetRegExp();
    const d =
        (i && i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (g) => u(g) },
        {
          regex: this.regexp,
          safeValue: (g) => (this.escapeValue ? u(this.escape(g)) : u(g)),
        },
      ].forEach((g) => {
        for (l = 0; (o = g.regex.exec(t)); ) {
          const y = o[1].trim();
          if (((s = c(y)), s === void 0))
            if (typeof d == "function") {
              const h = d(t, o, i);
              s = typeof h == "string" ? h : "";
            } else if (i && Object.prototype.hasOwnProperty.call(i, y)) s = "";
            else if (f) {
              s = o[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${y} for interpolating ${t}`
              ),
                (s = "");
          else typeof s != "string" && !this.useRawValueToEscape && (s = gu(s));
          const C = g.safeValue(s);
          if (
            ((t = t.replace(o[0], C)),
            f
              ? ((g.regex.lastIndex += s.length),
                (g.regex.lastIndex -= o[0].length))
              : (g.regex.lastIndex = 0),
            l++,
            l >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      o,
      s;
    function l(a, u) {
      const c = this.nestingOptionsSeparator;
      if (a.indexOf(c) < 0) return a;
      const d = a.split(new RegExp(`${c}[ ]*{`));
      let f = `{${d[1]}`;
      (a = d[0]), (f = this.interpolate(f, s));
      const v = f.match(/'/g),
        g = f.match(/"/g);
      ((v && v.length % 2 === 0 && !g) || g.length % 2 !== 0) &&
        (f = f.replace(/'/g, '"'));
      try {
        (s = JSON.parse(f)), u && (s = { ...u, ...s });
      } catch (y) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${a}`,
            y
          ),
          `${a}${c}${f}`
        );
      }
      return (
        s.defaultValue &&
          s.defaultValue.indexOf(this.prefix) > -1 &&
          delete s.defaultValue,
        a
      );
    }
    for (; (i = this.nestingRegexp.exec(t)); ) {
      let a = [];
      (s = { ...r }),
        (s = s.replace && typeof s.replace != "string" ? s.replace : s),
        (s.applyPostProcessor = !1),
        delete s.defaultValue;
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((d) => d.trim());
        (i[1] = c.shift()), (a = c), (u = !0);
      }
      if (
        ((o = n(l.call(this, i[1].trim(), s), s)),
        o && i[0] === t && typeof o != "string")
      )
        return o;
      typeof o != "string" && (o = gu(o)),
        o ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
          (o = "")),
        u &&
          (o = a.reduce(
            (c, d) =>
              this.format(c, d, r.lng, { ...r, interpolationkey: i[1].trim() }),
            o.trim()
          )),
        (t = t.replace(i[0], o)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
function wg(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === "currency" && i.indexOf(":") < 0
      ? n.currency || (n.currency = i.trim())
      : t === "relativetime" && i.indexOf(":") < 0
      ? n.range || (n.range = i.trim())
      : i.split(";").forEach((s) => {
          if (s) {
            const [l, ...a] = s.split(":"),
              u = a
                .join(":")
                .trim()
                .replace(/^'+|'+$/g, ""),
              c = l.trim();
            n[c] || (n[c] = u),
              u === "false" && (n[c] = !1),
              u === "true" && (n[c] = !0),
              isNaN(u) || (n[c] = parseInt(u, 10));
          }
        });
  }
  return { formatName: t, formatOptions: n };
}
function on(e) {
  const t = {};
  return function (r, i, o) {
    const s = i + JSON.stringify(o);
    let l = t[s];
    return l || ((l = e(Wi(i), o)), (t[s] = l)), l(r);
  };
}
class Sg {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = Qe.create("formatter")),
      (this.options = t),
      (this.formats = {
        number: on((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r });
          return (o) => i.format(o);
        }),
        currency: on((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: "currency" });
          return (o) => i.format(o);
        }),
        datetime: on((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r });
          return (o) => i.format(o);
        }),
        relativetime: on((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r });
          return (o) => i.format(o, r.range || "day");
        }),
        list: on((n, r) => {
          const i = new Intl.ListFormat(n, { ...r });
          return (o) => i.format(o);
        }),
      }),
      this.init(t);
  }
  init(t) {
    const r = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = r.formatSeparator
      ? r.formatSeparator
      : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = on(n);
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((l, a) => {
      const { formatName: u, formatOptions: c } = wg(a);
      if (this.formats[u]) {
        let d = l;
        try {
          const f =
              (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            v = f.locale || f.lng || i.locale || i.lng || r;
          d = this.formats[u](l, v, { ...c, ...i, ...f });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, t);
  }
}
function xg(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class kg extends co {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = Qe.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const o = {},
      s = {},
      l = {},
      a = {};
    return (
      t.forEach((u) => {
        let c = !0;
        n.forEach((d) => {
          const f = `${u}|${d}`;
          !r.reload && this.store.hasResourceBundle(u, d)
            ? (this.state[f] = 2)
            : this.state[f] < 0 ||
              (this.state[f] === 1
                ? s[f] === void 0 && (s[f] = !0)
                : ((this.state[f] = 1),
                  (c = !1),
                  s[f] === void 0 && (s[f] = !0),
                  o[f] === void 0 && (o[f] = !0),
                  a[d] === void 0 && (a[d] = !0)));
        }),
          c || (l[u] = !0);
      }),
      (Object.keys(o).length || Object.keys(s).length) &&
        this.queue.push({
          pending: s,
          pendingCount: Object.keys(s).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(s),
        toLoadLanguages: Object.keys(l),
        toLoadNamespaces: Object.keys(a),
      }
    );
  }
  loaded(t, n, r) {
    const i = t.split("|"),
      o = i[0],
      s = i[1];
    n && this.emit("failedLoading", o, s, n),
      r &&
        this.store.addResourceBundle(o, s, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2);
    const l = {};
    this.queue.forEach((a) => {
      ig(a.loaded, [o], s),
        xg(a, t),
        n && a.errors.push(n),
        a.pendingCount === 0 &&
          !a.done &&
          (Object.keys(a.loaded).forEach((u) => {
            l[u] || (l[u] = {});
            const c = a.loaded[u];
            c.length &&
              c.forEach((d) => {
                l[u][d] === void 0 && (l[u][d] = !0);
              });
          }),
          (a.done = !0),
          a.errors.length ? a.callback(a.errors) : a.callback());
    }),
      this.emit("loaded", l),
      (this.queue = this.queue.filter((a) => !a.done));
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      s = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return s(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: s,
      });
      return;
    }
    this.readingCalls++;
    const l = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const d = this.waitingReads.shift();
          this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
        }
        if (u && c && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, i + 1, o * 2, s);
          }, o);
          return;
        }
        s(u, c);
      },
      a = this.backend[r].bind(this.backend);
    if (a.length === 2) {
      try {
        const u = a(t, n);
        u && typeof u.then == "function"
          ? u.then((c) => l(null, c)).catch(l)
          : l(null, u);
      } catch (u) {
        l(u);
      }
      return;
    }
    return a(t, n, l);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        i && i()
      );
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)),
      typeof n == "string" && (n = [n]);
    const o = this.queueLoad(t, n, r, i);
    if (!o.toLoad.length) return o.pending.length || i(), null;
    o.toLoad.forEach((s) => {
      this.loadOne(s);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"),
      i = r[0],
      o = r[1];
    this.read(i, o, "read", void 0, void 0, (s, l) => {
      s &&
        this.logger.warn(
          `${n}loading namespace ${o} for language ${i} failed`,
          s
        ),
        !s &&
          l &&
          this.logger.log(`${n}loaded namespace ${o} for language ${i}`, l),
        this.loaded(t, s, l);
    });
  }
  saveMissing(t, n, r, i, o) {
    let s = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      l =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const a = { ...s, isUpdate: o },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            u.length === 5 ? (c = u(t, n, r, i, a)) : (c = u(t, n, r, i)),
              c && typeof c.then == "function"
                ? c.then((d) => l(null, d)).catch(l)
                : l(null, c);
          } catch (c) {
            l(c);
          }
        else u(t, n, r, i, l, a);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
function Eu() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (t) {
      let n = {};
      if (
        (typeof t[1] == "object" && (n = t[1]),
        typeof t[1] == "string" && (n.defaultValue = t[1]),
        typeof t[2] == "string" && (n.tDescription = t[2]),
        typeof t[2] == "object" || typeof t[3] == "object")
      ) {
        const r = t[3] || t[2];
        Object.keys(r).forEach((i) => {
          n[i] = r[i];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function Cu(e) {
  return (
    typeof e.ns == "string" && (e.ns = [e.ns]),
    typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf("cimode") < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
    e
  );
}
function ri() {}
function Eg(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
}
class Nr extends co {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Cu(t)),
      (this.services = {}),
      (this.logger = Qe),
      (this.modules = { external: [] }),
      Eg(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == "function" && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == "string"
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const i = Eu();
    (this.options = { ...i, ...this.options, ...Cu(n) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...i.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator);
    function o(c) {
      return c ? (typeof c == "function" ? new c() : c) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger
        ? Qe.init(o(this.modules.logger), this.options)
        : Qe.init(null, this.options);
      let c;
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < "u" && (c = Sg);
      const d = new Su(this.options);
      this.store = new vu(this.options.resources, this.options);
      const f = this.services;
      (f.logger = Qe),
        (f.resourceStore = this.store),
        (f.languageUtils = d),
        (f.pluralResolver = new yg(d, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((f.formatter = o(c)),
          f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(
            f.formatter
          ))),
        (f.interpolator = new vg(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new kg(
          o(this.modules.backend),
          f.resourceStore,
          f,
          this.options
        )),
        f.backendConnector.on("*", function (v) {
          for (
            var g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), C = 1;
            C < g;
            C++
          )
            y[C - 1] = arguments[C];
          t.emit(v, ...y);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = o(this.modules.languageDetector)),
          f.languageDetector.init &&
            f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((f.i18nFormat = o(this.modules.i18nFormat)),
          f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new Ki(this.services, this.options)),
        this.translator.on("*", function (v) {
          for (
            var g = arguments.length, y = new Array(g > 1 ? g - 1 : 0), C = 1;
            C < g;
            C++
          )
            y[C - 1] = arguments[C];
          t.emit(v, ...y);
        }),
        this.modules.external.forEach((v) => {
          v.init && v.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = ri),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t;
        };
      });
    const a = Kn(),
      u = () => {
        const c = (d, f) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            a.resolve(f),
            r(d, f);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      a
    );
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ri;
    const i = typeof t == "string" ? t : this.language;
    if (
      (typeof t == "function" && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r();
      const o = [],
        s = (l) => {
          if (!l || l === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(l).forEach((u) => {
            u !== "cimode" && o.indexOf(u) < 0 && o.push(u);
          });
        };
      i
        ? s(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((a) => s(a)),
        this.options.preload && this.options.preload.forEach((l) => s(l)),
        this.services.backendConnector.load(o, this.options.ns, (l) => {
          !l &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(l);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const i = Kn();
    return (
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = ri),
      this.services.backendConnector.reload(t, n, (o) => {
        i.resolve(), r(o);
      }),
      i
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!t.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      t.type === "backend" && (this.modules.backend = t),
      (t.type === "logger" || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === "languageDetector" && (this.modules.languageDetector = t),
      t.type === "i18nFormat" && (this.modules.i18nFormat = t),
      t.type === "postProcessor" && ad.addPostProcessor(t),
      t.type === "formatter" && (this.modules.formatter = t),
      t.type === "3rdParty" && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (
          !(["cimode", "dev"].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const i = Kn();
    this.emit("languageChanging", t);
    const o = (a) => {
        (this.language = a),
          (this.languages = this.services.languageUtils.toResolveHierarchy(a)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(a);
      },
      s = (a, u) => {
        u
          ? (o(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", u),
            this.logger.log("languageChanged", u))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(a, function () {
              return r.t(...arguments);
            });
      },
      l = (a) => {
        !t && !a && this.services.languageDetector && (a = []);
        const u =
          typeof a == "string"
            ? a
            : this.services.languageUtils.getBestMatchFromCodes(a);
        u &&
          (this.language || o(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            s(c, u);
          });
      };
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? l(this.services.languageDetector.detect())
        : !t &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(l)
          : this.services.languageDetector.detect(l)
        : l(t),
      i
    );
  }
  getFixedT(t, n, r) {
    var i = this;
    const o = function (s, l) {
      let a;
      if (typeof l != "object") {
        for (
          var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), d = 2;
          d < u;
          d++
        )
          c[d - 2] = arguments[d];
        a = i.options.overloadTranslationOptionHandler([s, l].concat(c));
      } else a = { ...l };
      (a.lng = a.lng || o.lng),
        (a.lngs = a.lngs || o.lngs),
        (a.ns = a.ns || o.ns),
        a.keyPrefix !== "" && (a.keyPrefix = a.keyPrefix || r || o.keyPrefix);
      const f = i.options.keySeparator || ".";
      let v;
      return (
        a.keyPrefix && Array.isArray(s)
          ? (v = s.map((g) => `${a.keyPrefix}${f}${g}`))
          : (v = a.keyPrefix ? `${a.keyPrefix}${f}${s}` : s),
        i.t(v, a)
      );
    };
    return (
      typeof t == "string" ? (o.lng = t) : (o.lngs = t),
      (o.ns = n),
      (o.keyPrefix = r),
      o
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const s = (l, a) => {
      const u = this.services.backendConnector.state[`${l}|${a}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const l = n.precheck(this, s);
      if (l !== void 0) return l;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (s(r, t) && (!i || s(o, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = Kn();
    return this.options.ns
      ? (typeof t == "string" && (t = [t]),
        t.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          r.resolve(), n && n(i);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Kn();
    typeof t == "string" && (t = [t]);
    const i = this.options.preload || [],
      o = t.filter(
        (s) =>
          i.indexOf(s) < 0 && this.services.languageUtils.isSupportedCode(s)
      );
    return o.length
      ? ((this.options.preload = i.concat(o)),
        this.loadResources((s) => {
          r.resolve(), n && n(s);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return "rtl";
    const n = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      r = (this.services && this.services.languageUtils) || new Su(Eu());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new Nr(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ri;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = { ...this.options, ...t, isClone: !0 },
      o = new Nr(i);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (o.logger = o.logger.clone(t)),
      ["store", "services", "language"].forEach((l) => {
        o[l] = this[l];
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      r &&
        ((o.store = new vu(this.store.data, i)),
        (o.services.resourceStore = o.store)),
      (o.translator = new Ki(o.services, i)),
      o.translator.on("*", function (l) {
        for (
          var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), c = 1;
          c < a;
          c++
        )
          u[c - 1] = arguments[c];
        o.emit(l, ...u);
      }),
      o.init(i, n),
      (o.translator.options = i),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const oe = Nr.createInstance();
oe.createInstance = Nr.createInstance;
oe.createInstance;
oe.dir;
oe.init;
oe.loadResources;
oe.reloadResources;
oe.use;
oe.changeLanguage;
oe.getFixedT;
oe.t;
oe.exists;
oe.setDefaultNamespace;
oe.hasLoadedNamespace;
oe.loadNamespaces;
oe.loadLanguages;
function Yo(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
function Qn(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth,
        l = n != null && n.width ? String(n.width) : s;
      i = e.formattingValues[l] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth,
        l = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[l] || e.values[s];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[o];
  };
}
function Jn(e) {
  return (t, n = {}) => {
    const r = n.width,
      i = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
      o = t.match(i);
    if (!o) return null;
    const s = o[0],
      l = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
      a = Array.isArray(l) ? Pg(l, (d) => d.test(s)) : Cg(l, (d) => d.test(s));
    let u;
    (u = e.valueCallback ? e.valueCallback(a) : a),
      (u = n.valueCallback ? n.valueCallback(u) : u);
    const c = t.slice(s.length);
    return { value: u, rest: c };
  };
}
function Cg(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Pg(e, t) {
  for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function Ng(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0],
      o = t.match(e.parsePattern);
    if (!o) return null;
    let s = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const l = t.slice(i.length);
    return { value: s, rest: l };
  };
}
const Pu = {
    lessThanXSeconds: {
      standalone: {
        one: "weniger als 1 Sekunde",
        other: "weniger als {{count}} Sekunden",
      },
      withPreposition: {
        one: "weniger als 1 Sekunde",
        other: "weniger als {{count}} Sekunden",
      },
    },
    xSeconds: {
      standalone: { one: "1 Sekunde", other: "{{count}} Sekunden" },
      withPreposition: { one: "1 Sekunde", other: "{{count}} Sekunden" },
    },
    halfAMinute: {
      standalone: "eine halbe Minute",
      withPreposition: "einer halben Minute",
    },
    lessThanXMinutes: {
      standalone: {
        one: "weniger als 1 Minute",
        other: "weniger als {{count}} Minuten",
      },
      withPreposition: {
        one: "weniger als 1 Minute",
        other: "weniger als {{count}} Minuten",
      },
    },
    xMinutes: {
      standalone: { one: "1 Minute", other: "{{count}} Minuten" },
      withPreposition: { one: "1 Minute", other: "{{count}} Minuten" },
    },
    aboutXHours: {
      standalone: { one: "etwa 1 Stunde", other: "etwa {{count}} Stunden" },
      withPreposition: {
        one: "etwa 1 Stunde",
        other: "etwa {{count}} Stunden",
      },
    },
    xHours: {
      standalone: { one: "1 Stunde", other: "{{count}} Stunden" },
      withPreposition: { one: "1 Stunde", other: "{{count}} Stunden" },
    },
    xDays: {
      standalone: { one: "1 Tag", other: "{{count}} Tage" },
      withPreposition: { one: "1 Tag", other: "{{count}} Tagen" },
    },
    aboutXWeeks: {
      standalone: { one: "etwa 1 Woche", other: "etwa {{count}} Wochen" },
      withPreposition: { one: "etwa 1 Woche", other: "etwa {{count}} Wochen" },
    },
    xWeeks: {
      standalone: { one: "1 Woche", other: "{{count}} Wochen" },
      withPreposition: { one: "1 Woche", other: "{{count}} Wochen" },
    },
    aboutXMonths: {
      standalone: { one: "etwa 1 Monat", other: "etwa {{count}} Monate" },
      withPreposition: { one: "etwa 1 Monat", other: "etwa {{count}} Monaten" },
    },
    xMonths: {
      standalone: { one: "1 Monat", other: "{{count}} Monate" },
      withPreposition: { one: "1 Monat", other: "{{count}} Monaten" },
    },
    aboutXYears: {
      standalone: { one: "etwa 1 Jahr", other: "etwa {{count}} Jahre" },
      withPreposition: { one: "etwa 1 Jahr", other: "etwa {{count}} Jahren" },
    },
    xYears: {
      standalone: { one: "1 Jahr", other: "{{count}} Jahre" },
      withPreposition: { one: "1 Jahr", other: "{{count}} Jahren" },
    },
    overXYears: {
      standalone: { one: "mehr als 1 Jahr", other: "mehr als {{count}} Jahre" },
      withPreposition: {
        one: "mehr als 1 Jahr",
        other: "mehr als {{count}} Jahren",
      },
    },
    almostXYears: {
      standalone: { one: "fast 1 Jahr", other: "fast {{count}} Jahre" },
      withPreposition: { one: "fast 1 Jahr", other: "fast {{count}} Jahren" },
    },
  },
  Og = (e, t, n) => {
    let r;
    const i =
      n != null && n.addSuffix ? Pu[e].withPreposition : Pu[e].standalone;
    return (
      typeof i == "string"
        ? (r = i)
        : t === 1
        ? (r = i.one)
        : (r = i.other.replace("{{count}}", String(t))),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : "vor " + r
        : r
    );
  },
  Rg = {
    full: "EEEE, do MMMM y",
    long: "do MMMM y",
    medium: "do MMM y",
    short: "dd.MM.y",
  },
  Lg = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm",
  },
  _g = {
    full: "{{date}} 'um' {{time}}",
    long: "{{date}} 'um' {{time}}",
    medium: "{{date}} {{time}}",
    short: "{{date}} {{time}}",
  },
  Tg = {
    date: Yo({ formats: Rg, defaultWidth: "full" }),
    time: Yo({ formats: Lg, defaultWidth: "full" }),
    dateTime: Yo({ formats: _g, defaultWidth: "full" }),
  },
  Fg = {
    lastWeek: "'letzten' eeee 'um' p",
    yesterday: "'gestern um' p",
    today: "'heute um' p",
    tomorrow: "'morgen um' p",
    nextWeek: "eeee 'um' p",
    other: "P",
  },
  Mg = (e, t, n, r) => Fg[e],
  jg = {
    narrow: ["v.Chr.", "n.Chr."],
    abbreviated: ["v.Chr.", "n.Chr."],
    wide: ["vor Christus", "nach Christus"],
  },
  Ag = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"],
  },
  Ys = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mär",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ],
    wide: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
  },
  zg = {
    narrow: Ys.narrow,
    abbreviated: [
      "Jan.",
      "Feb.",
      "März",
      "Apr.",
      "Mai",
      "Juni",
      "Juli",
      "Aug.",
      "Sep.",
      "Okt.",
      "Nov.",
      "Dez.",
    ],
    wide: Ys.wide,
  },
  Dg = {
    narrow: ["S", "M", "D", "M", "D", "F", "S"],
    short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
    wide: [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ],
  },
  Ig = {
    narrow: {
      am: "vm.",
      pm: "nm.",
      midnight: "Mitternacht",
      noon: "Mittag",
      morning: "Morgen",
      afternoon: "Nachm.",
      evening: "Abend",
      night: "Nacht",
    },
    abbreviated: {
      am: "vorm.",
      pm: "nachm.",
      midnight: "Mitternacht",
      noon: "Mittag",
      morning: "Morgen",
      afternoon: "Nachmittag",
      evening: "Abend",
      night: "Nacht",
    },
    wide: {
      am: "vormittags",
      pm: "nachmittags",
      midnight: "Mitternacht",
      noon: "Mittag",
      morning: "Morgen",
      afternoon: "Nachmittag",
      evening: "Abend",
      night: "Nacht",
    },
  },
  $g = {
    narrow: {
      am: "vm.",
      pm: "nm.",
      midnight: "Mitternacht",
      noon: "Mittag",
      morning: "morgens",
      afternoon: "nachm.",
      evening: "abends",
      night: "nachts",
    },
    abbreviated: {
      am: "vorm.",
      pm: "nachm.",
      midnight: "Mitternacht",
      noon: "Mittag",
      morning: "morgens",
      afternoon: "nachmittags",
      evening: "abends",
      night: "nachts",
    },
    wide: {
      am: "vormittags",
      pm: "nachmittags",
      midnight: "Mitternacht",
      noon: "Mittag",
      morning: "morgens",
      afternoon: "nachmittags",
      evening: "abends",
      night: "nachts",
    },
  },
  Ug = (e) => Number(e) + ".",
  Bg = {
    ordinalNumber: Ug,
    era: Qn({ values: jg, defaultWidth: "wide" }),
    quarter: Qn({
      values: Ag,
      defaultWidth: "wide",
      argumentCallback: (e) => e - 1,
    }),
    month: Qn({ values: Ys, formattingValues: zg, defaultWidth: "wide" }),
    day: Qn({ values: Dg, defaultWidth: "wide" }),
    dayPeriod: Qn({
      values: Ig,
      defaultWidth: "wide",
      formattingValues: $g,
      defaultFormattingWidth: "wide",
    }),
  },
  Vg = /^(\d+)(\.)?/i,
  Hg = /\d+/i,
  Wg = {
    narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
    abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
    wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i,
  },
  Kg = { any: [/^v/i, /^n/i] },
  Qg = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](\.)? Quartal/i,
  },
  Jg = { any: [/1/i, /2/i, /3/i, /4/i] },
  bg = {
    narrow: /^[jfmasond]/i,
    abbreviated:
      /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
    wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i,
  },
  Xg = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^j[aä]/i,
      /^f/i,
      /^mär/i,
      /^ap/i,
      /^mai/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  Yg = {
    narrow: /^[smdmf]/i,
    short: /^(so|mo|di|mi|do|fr|sa)/i,
    abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
    wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i,
  },
  Gg = { any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i] },
  qg = {
    narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
    abbreviated:
      /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
    wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i,
  },
  Zg = {
    any: {
      am: /^v/i,
      pm: /^n/i,
      midnight: /^Mitte/i,
      noon: /^Mitta/i,
      morning: /morgens/i,
      afternoon: /nachmittags/i,
      evening: /abends/i,
      night: /nachts/i,
    },
  },
  ey = {
    ordinalNumber: Ng({
      matchPattern: Vg,
      parsePattern: Hg,
      valueCallback: (e) => parseInt(e),
    }),
    era: Jn({
      matchPatterns: Wg,
      defaultMatchWidth: "wide",
      parsePatterns: Kg,
      defaultParseWidth: "any",
    }),
    quarter: Jn({
      matchPatterns: Qg,
      defaultMatchWidth: "wide",
      parsePatterns: Jg,
      defaultParseWidth: "any",
      valueCallback: (e) => e + 1,
    }),
    month: Jn({
      matchPatterns: bg,
      defaultMatchWidth: "wide",
      parsePatterns: Xg,
      defaultParseWidth: "any",
    }),
    day: Jn({
      matchPatterns: Yg,
      defaultMatchWidth: "wide",
      parsePatterns: Gg,
      defaultParseWidth: "any",
    }),
    dayPeriod: Jn({
      matchPatterns: qg,
      defaultMatchWidth: "wide",
      parsePatterns: Zg,
      defaultParseWidth: "any",
    }),
  },
  ty = {
    code: "de",
    formatDistance: Og,
    formatLong: Tg,
    formatRelative: Mg,
    localize: Bg,
    match: ey,
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
  },
  ny = { jobRadCalculator: "JobRad-Rechner" },
  ud = {
    de: {
      locale: {
        ...ty,
        currency: "EUR",
        currencySymbol: "€",
        thousandSeparator: ".",
        decimalSeparator: ",",
      },
      dateFormat: "dd.MM.yyyy",
      translation: ny,
    },
  },
  ry = () => {
    const { i18n: e, t } = Zm(),
      { locale: n } = ud[e.language];
    return { locale: n, t };
  },
  iy = { de: { translation: ud.de.translation } };
oe.use(Xm).init({
  lng: "de",
  fallbackLng: "de",
  interpolation: { escapeValue: !1 },
  resources: iy,
});
const oy = oe;
function cd(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: sy } = Object.prototype,
  { getPrototypeOf: ql } = Object,
  fo = ((e) => (t) => {
    const n = sy.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ve = (e) => ((e = e.toLowerCase()), (t) => fo(t) === e),
  po = (e) => (t) => typeof t === e,
  { isArray: An } = Array,
  Or = po("undefined");
function ly(e) {
  return (
    e !== null &&
    !Or(e) &&
    e.constructor !== null &&
    !Or(e.constructor) &&
    Te(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const fd = Ve("ArrayBuffer");
function ay(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && fd(e.buffer)),
    t
  );
}
const uy = po("string"),
  Te = po("function"),
  dd = po("number"),
  ho = (e) => e !== null && typeof e == "object",
  cy = (e) => e === !0 || e === !1,
  gi = (e) => {
    if (fo(e) !== "object") return !1;
    const t = ql(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  fy = Ve("Date"),
  dy = Ve("File"),
  py = Ve("Blob"),
  hy = Ve("FileList"),
  my = (e) => ho(e) && Te(e.pipe),
  gy = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Te(e.append) &&
          ((t = fo(e)) === "formdata" ||
            (t === "object" &&
              Te(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  yy = Ve("URLSearchParams"),
  [vy, wy, Sy, xy] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Ve
  ),
  ky = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), An(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let l;
    for (r = 0; r < s; r++) (l = o[r]), t.call(null, e[l], l, e);
  }
}
function pd(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const hd =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  md = (e) => !Or(e) && e !== hd;
function Gs() {
  const { caseless: e } = (md(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && pd(t, i)) || i;
      gi(t[o]) && gi(r)
        ? (t[o] = Gs(t[o], r))
        : gi(r)
        ? (t[o] = Gs({}, r))
        : An(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Mr(arguments[r], n);
  return t;
}
const Ey = (e, t, n, { allOwnKeys: r } = {}) => (
    Mr(
      t,
      (i, o) => {
        n && Te(i) ? (e[o] = cd(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Cy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Py = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Ny = (e, t, n, r) => {
    let i, o, s;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (s = i[o]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0));
      e = n !== !1 && ql(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Oy = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Ry = (e) => {
    if (!e) return null;
    if (An(e)) return e;
    let t = e.length;
    if (!dd(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Ly = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && ql(Uint8Array)),
  _y = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  Ty = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Fy = Ve("HTMLFormElement"),
  My = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Nu = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  jy = Ve("RegExp"),
  gd = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Mr(n, (i, o) => {
      let s;
      (s = t(i, o, e)) !== !1 && (r[o] = s || i);
    }),
      Object.defineProperties(e, r);
  },
  Ay = (e) => {
    gd(e, (t, n) => {
      if (Te(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Te(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  zy = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return An(e) ? r(e) : r(String(e).split(t)), n;
  },
  Dy = () => {},
  Iy = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Go = "abcdefghijklmnopqrstuvwxyz",
  Ou = "0123456789",
  yd = { DIGIT: Ou, ALPHA: Go, ALPHA_DIGIT: Go + Go.toUpperCase() + Ou },
  $y = (e = 16, t = yd.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function Uy(e) {
  return !!(
    e &&
    Te(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const By = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (ho(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = An(r) ? [] : {};
            return (
              Mr(r, (s, l) => {
                const a = n(s, i + 1);
                !Or(a) && (o[l] = a);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Vy = Ve("AsyncFunction"),
  Hy = (e) => e && (ho(e) || Te(e)) && Te(e.then) && Te(e.catch),
  w = {
    isArray: An,
    isArrayBuffer: fd,
    isBuffer: ly,
    isFormData: gy,
    isArrayBufferView: ay,
    isString: uy,
    isNumber: dd,
    isBoolean: cy,
    isObject: ho,
    isPlainObject: gi,
    isReadableStream: vy,
    isRequest: wy,
    isResponse: Sy,
    isHeaders: xy,
    isUndefined: Or,
    isDate: fy,
    isFile: dy,
    isBlob: py,
    isRegExp: jy,
    isFunction: Te,
    isStream: my,
    isURLSearchParams: yy,
    isTypedArray: Ly,
    isFileList: hy,
    forEach: Mr,
    merge: Gs,
    extend: Ey,
    trim: ky,
    stripBOM: Cy,
    inherits: Py,
    toFlatObject: Ny,
    kindOf: fo,
    kindOfTest: Ve,
    endsWith: Oy,
    toArray: Ry,
    forEachEntry: _y,
    matchAll: Ty,
    isHTMLForm: Fy,
    hasOwnProperty: Nu,
    hasOwnProp: Nu,
    reduceDescriptors: gd,
    freezeMethods: Ay,
    toObjectSet: zy,
    toCamelCase: My,
    noop: Dy,
    toFiniteNumber: Iy,
    findKey: pd,
    global: hd,
    isContextDefined: md,
    ALPHABET: yd,
    generateString: $y,
    isSpecCompliantForm: Uy,
    toJSONObject: By,
    isAsyncFn: Vy,
    isThenable: Hy,
  };
function F(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
w.inherits(F, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: w.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const vd = F.prototype,
  wd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  wd[e] = { value: e };
});
Object.defineProperties(F, wd);
Object.defineProperty(vd, "isAxiosError", { value: !0 });
F.from = (e, t, n, r, i, o) => {
  const s = Object.create(vd);
  return (
    w.toFlatObject(
      e,
      s,
      function (a) {
        return a !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    F.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  );
};
const Wy = null;
function qs(e) {
  return w.isPlainObject(e) || w.isArray(e);
}
function Sd(e) {
  return w.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ru(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Sd(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function Ky(e) {
  return w.isArray(e) && !e.some(qs);
}
const Qy = w.toFlatObject(w, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function mo(e, t, n) {
  if (!w.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = w.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, C) {
        return !w.isUndefined(C[y]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    s = n.indexes,
    a = (n.Blob || (typeof Blob < "u" && Blob)) && w.isSpecCompliantForm(t);
  if (!w.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (w.isDate(g)) return g.toISOString();
    if (!a && w.isBlob(g))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return w.isArrayBuffer(g) || w.isTypedArray(g)
      ? a && typeof Blob == "function"
        ? new Blob([g])
        : Buffer.from(g)
      : g;
  }
  function c(g, y, C) {
    let h = g;
    if (g && !C && typeof g == "object") {
      if (w.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (g = JSON.stringify(g));
      else if (
        (w.isArray(g) && Ky(g)) ||
        ((w.isFileList(g) || w.endsWith(y, "[]")) && (h = w.toArray(g)))
      )
        return (
          (y = Sd(y)),
          h.forEach(function (m, S) {
            !(w.isUndefined(m) || m === null) &&
              t.append(
                s === !0 ? Ru([y], S, o) : s === null ? y : y + "[]",
                u(m)
              );
          }),
          !1
        );
    }
    return qs(g) ? !0 : (t.append(Ru(C, y, o), u(g)), !1);
  }
  const d = [],
    f = Object.assign(Qy, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: qs,
    });
  function v(g, y) {
    if (!w.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(g),
        w.forEach(g, function (h, p) {
          (!(w.isUndefined(h) || h === null) &&
            i.call(t, h, w.isString(p) ? p.trim() : p, y, f)) === !0 &&
            v(h, y ? y.concat(p) : [p]);
        }),
        d.pop();
    }
  }
  if (!w.isObject(e)) throw new TypeError("data must be an object");
  return v(e), t;
}
function Lu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Zl(e, t) {
  (this._pairs = []), e && mo(e, this, t);
}
const xd = Zl.prototype;
xd.append = function (t, n) {
  this._pairs.push([t, n]);
};
xd.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Lu);
      }
    : Lu;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function Jy(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function kd(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Jy,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = w.isURLSearchParams(t) ? t.toString() : new Zl(t, n).toString(r)),
    o)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class _u {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    w.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Ed = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  by = typeof URLSearchParams < "u" ? URLSearchParams : Zl,
  Xy = typeof FormData < "u" ? FormData : null,
  Yy = typeof Blob < "u" ? Blob : null,
  Gy = {
    isBrowser: !0,
    classes: { URLSearchParams: by, FormData: Xy, Blob: Yy },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  ea = typeof window < "u" && typeof document < "u",
  qy = ((e) => ea && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  Zy =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  e0 = (ea && window.location.href) || "http://localhost",
  t0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: ea,
        hasStandardBrowserEnv: qy,
        hasStandardBrowserWebWorkerEnv: Zy,
        origin: e0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ue = { ...t0, ...Gy };
function n0(e, t) {
  return mo(
    e,
    new Ue.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return Ue.isNode && w.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function r0(e) {
  return w
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function i0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Cd(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s),
      a = o >= n.length;
    return (
      (s = !s && w.isArray(i) ? i.length : s),
      a
        ? (w.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !l)
        : ((!i[s] || !w.isObject(i[s])) && (i[s] = []),
          t(n, r, i[s], o) && w.isArray(i[s]) && (i[s] = i0(i[s])),
          !l)
    );
  }
  if (w.isFormData(e) && w.isFunction(e.entries)) {
    const n = {};
    return (
      w.forEachEntry(e, (r, i) => {
        t(r0(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function o0(e, t, n) {
  if (w.isString(e))
    try {
      return (t || JSON.parse)(e), w.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const jr = {
  transitional: Ed,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = w.isObject(t);
      if ((o && w.isHTMLForm(t) && (t = new FormData(t)), w.isFormData(t)))
        return i ? JSON.stringify(Cd(t)) : t;
      if (
        w.isArrayBuffer(t) ||
        w.isBuffer(t) ||
        w.isStream(t) ||
        w.isFile(t) ||
        w.isBlob(t) ||
        w.isReadableStream(t)
      )
        return t;
      if (w.isArrayBufferView(t)) return t.buffer;
      if (w.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return n0(t, this.formSerializer).toString();
        if ((l = w.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const a = this.env && this.env.FormData;
          return mo(
            l ? { "files[]": t } : t,
            a && new a(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), o0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || jr.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (w.isResponse(t) || w.isReadableStream(t)) return t;
      if (t && w.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (s)
            throw l.name === "SyntaxError"
              ? F.from(l, F.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: Ue.classes.FormData, Blob: Ue.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
w.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  jr.headers[e] = {};
});
const s0 = w.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  l0 = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (i = s.indexOf(":")),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && s0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Tu = Symbol("internals");
function bn(e) {
  return e && String(e).trim().toLowerCase();
}
function yi(e) {
  return e === !1 || e == null ? e : w.isArray(e) ? e.map(yi) : String(e);
}
function a0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const u0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function qo(e, t, n, r, i) {
  if (w.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!w.isString(t))) {
    if (w.isString(r)) return t.indexOf(r) !== -1;
    if (w.isRegExp(r)) return r.test(t);
  }
}
function c0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function f0(e, t) {
  const n = w.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0,
    });
  });
}
class Se {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(l, a, u) {
      const c = bn(a);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = w.findKey(i, c);
      (!d || i[d] === void 0 || u === !0 || (u === void 0 && i[d] !== !1)) &&
        (i[d || a] = yi(l));
    }
    const s = (l, a) => w.forEach(l, (u, c) => o(u, c, a));
    if (w.isPlainObject(t) || t instanceof this.constructor) s(t, n);
    else if (w.isString(t) && (t = t.trim()) && !u0(t)) s(l0(t), n);
    else if (w.isHeaders(t)) for (const [l, a] of t.entries()) o(a, l, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = bn(t)), t)) {
      const r = w.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return a0(i);
        if (w.isFunction(n)) return n.call(this, i, r);
        if (w.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = bn(t)), t)) {
      const r = w.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || qo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (((s = bn(s)), s)) {
        const l = w.findKey(r, s);
        l && (!n || qo(r, r[l], l, n)) && (delete r[l], (i = !0));
      }
    }
    return w.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || qo(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      w.forEach(this, (i, o) => {
        const s = w.findKey(r, o);
        if (s) {
          (n[s] = yi(i)), delete n[o];
          return;
        }
        const l = t ? c0(o) : String(o).trim();
        l !== o && delete n[o], (n[l] = yi(i)), (r[l] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      w.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && w.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Tu] = this[Tu] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(s) {
      const l = bn(s);
      r[l] || (f0(i, s), (r[l] = !0));
    }
    return w.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Se.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
w.reduceDescriptors(Se.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
w.freezeMethods(Se);
function Zo(e, t) {
  const n = this || jr,
    r = t || n,
    i = Se.from(r.headers);
  let o = r.data;
  return (
    w.forEach(e, function (l) {
      o = l.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function Pd(e) {
  return !!(e && e.__CANCEL__);
}
function zn(e, t, n) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
w.inherits(zn, F, { __CANCEL__: !0 });
function Nd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new F(
          "Request failed with status code " + n.status,
          [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function d0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function p0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (a) {
      const u = Date.now(),
        c = r[o];
      s || (s = u), (n[i] = a), (r[i] = u);
      let d = o,
        f = 0;
      for (; d !== i; ) (f += n[d++]), (d = d % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), u - s < t)) return;
      const v = c && u - c;
      return v ? Math.round((f * 1e3) / v) : void 0;
    }
  );
}
function h0(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let i = null;
  return function () {
    const s = this === !0,
      l = Date.now();
    if (s || l - n > r)
      return (
        i && (clearTimeout(i), (i = null)), (n = l), e.apply(null, arguments)
      );
    i ||
      (i = setTimeout(
        () => ((i = null), (n = Date.now()), e.apply(null, arguments)),
        r - (l - n)
      ));
  };
}
const Qi = (e, t, n = 3) => {
    let r = 0;
    const i = p0(50, 250);
    return h0((o) => {
      const s = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        a = s - r,
        u = i(a),
        c = s <= l;
      r = s;
      const d = {
        loaded: s,
        total: l,
        progress: l ? s / l : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && l && c ? (l - s) / u : void 0,
        event: o,
        lengthComputable: l != null,
      };
      (d[t ? "download" : "upload"] = !0), e(d);
    }, n);
  },
  m0 = Ue.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement("a");
        let r;
        function i(o) {
          let s = o;
          return (
            t && (n.setAttribute("href", s), (s = n.href)),
            n.setAttribute("href", s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = i(window.location.href)),
          function (s) {
            const l = w.isString(s) ? i(s) : s;
            return l.protocol === r.protocol && l.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  g0 = Ue.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, o) {
          const s = [e + "=" + encodeURIComponent(t)];
          w.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
            w.isString(r) && s.push("path=" + r),
            w.isString(i) && s.push("domain=" + i),
            o === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function y0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function v0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Od(e, t) {
  return e && !y0(t) ? v0(e, t) : t;
}
const Fu = (e) => (e instanceof Se ? { ...e } : e);
function Gt(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return w.isPlainObject(u) && w.isPlainObject(c)
      ? w.merge.call({ caseless: d }, u, c)
      : w.isPlainObject(c)
      ? w.merge({}, c)
      : w.isArray(c)
      ? c.slice()
      : c;
  }
  function i(u, c, d) {
    if (w.isUndefined(c)) {
      if (!w.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function o(u, c) {
    if (!w.isUndefined(c)) return r(void 0, c);
  }
  function s(u, c) {
    if (w.isUndefined(c)) {
      if (!w.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const a = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (u, c) => i(Fu(u), Fu(c), !0),
  };
  return (
    w.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const d = a[c] || i,
        f = d(e[c], t[c], c);
      (w.isUndefined(f) && d !== l) || (n[c] = f);
    }),
    n
  );
}
const Rd = (e) => {
    const t = Gt({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: o,
      headers: s,
      auth: l,
    } = t;
    (t.headers = s = Se.from(s)),
      (t.url = kd(Od(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        s.set(
          "Authorization",
          "Basic " +
            btoa(
              (l.username || "") +
                ":" +
                (l.password ? unescape(encodeURIComponent(l.password)) : "")
            )
        );
    let a;
    if (w.isFormData(n)) {
      if (Ue.hasStandardBrowserEnv || Ue.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0);
      else if ((a = s.getContentType()) !== !1) {
        const [u, ...c] = a
          ? a
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        s.setContentType([u || "multipart/form-data", ...c].join("; "));
      }
    }
    if (
      Ue.hasStandardBrowserEnv &&
      (r && w.isFunction(r) && (r = r(t)), r || (r !== !1 && m0(t.url)))
    ) {
      const u = i && o && g0.read(o);
      u && s.set(i, u);
    }
    return t;
  },
  w0 = typeof XMLHttpRequest < "u",
  S0 =
    w0 &&
    function (e) {
      return new Promise(function (n, r) {
        const i = Rd(e);
        let o = i.data;
        const s = Se.from(i.headers).normalize();
        let { responseType: l } = i,
          a;
        function u() {
          i.cancelToken && i.cancelToken.unsubscribe(a),
            i.signal && i.signal.removeEventListener("abort", a);
        }
        let c = new XMLHttpRequest();
        c.open(i.method.toUpperCase(), i.url, !0), (c.timeout = i.timeout);
        function d() {
          if (!c) return;
          const v = Se.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            y = {
              data:
                !l || l === "text" || l === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: v,
              config: e,
              request: c,
            };
          Nd(
            function (h) {
              n(h), u();
            },
            function (h) {
              r(h), u();
            },
            y
          ),
            (c = null);
        }
        "onloadend" in c
          ? (c.onloadend = d)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                setTimeout(d);
            }),
          (c.onabort = function () {
            c &&
              (r(new F("Request aborted", F.ECONNABORTED, i, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new F("Network Error", F.ERR_NETWORK, i, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let g = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const y = i.transitional || Ed;
            i.timeoutErrorMessage && (g = i.timeoutErrorMessage),
              r(
                new F(
                  g,
                  y.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
                  i,
                  c
                )
              ),
              (c = null);
          }),
          o === void 0 && s.setContentType(null),
          "setRequestHeader" in c &&
            w.forEach(s.toJSON(), function (g, y) {
              c.setRequestHeader(y, g);
            }),
          w.isUndefined(i.withCredentials) ||
            (c.withCredentials = !!i.withCredentials),
          l && l !== "json" && (c.responseType = i.responseType),
          typeof i.onDownloadProgress == "function" &&
            c.addEventListener("progress", Qi(i.onDownloadProgress, !0)),
          typeof i.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Qi(i.onUploadProgress)),
          (i.cancelToken || i.signal) &&
            ((a = (v) => {
              c &&
                (r(!v || v.type ? new zn(null, e, c) : v),
                c.abort(),
                (c = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(a),
            i.signal &&
              (i.signal.aborted ? a() : i.signal.addEventListener("abort", a)));
        const f = d0(i.url);
        if (f && Ue.protocols.indexOf(f) === -1) {
          r(new F("Unsupported protocol " + f + ":", F.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(o || null);
      });
    },
  x0 = (e, t) => {
    let n = new AbortController(),
      r;
    const i = function (a) {
      if (!r) {
        (r = !0), s();
        const u = a instanceof Error ? a : this.reason;
        n.abort(
          u instanceof F ? u : new zn(u instanceof Error ? u.message : u)
        );
      }
    };
    let o =
      t &&
      setTimeout(() => {
        i(new F(`timeout ${t} of ms exceeded`, F.ETIMEDOUT));
      }, t);
    const s = () => {
      e &&
        (o && clearTimeout(o),
        (o = null),
        e.forEach((a) => {
          a &&
            (a.removeEventListener
              ? a.removeEventListener("abort", i)
              : a.unsubscribe(i));
        }),
        (e = null));
    };
    e.forEach((a) => a && a.addEventListener && a.addEventListener("abort", i));
    const { signal: l } = n;
    return (
      (l.unsubscribe = s),
      [
        l,
        () => {
          o && clearTimeout(o), (o = null);
        },
      ]
    );
  },
  k0 = function* (e, t) {
    let n = e.byteLength;
    if (!t || n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i);
  },
  E0 = async function* (e, t, n) {
    for await (const r of e)
      yield* k0(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
  },
  Mu = (e, t, n, r, i) => {
    const o = E0(e, t, i);
    let s = 0;
    return new ReadableStream(
      {
        type: "bytes",
        async pull(l) {
          const { done: a, value: u } = await o.next();
          if (a) {
            l.close(), r();
            return;
          }
          let c = u.byteLength;
          n && n((s += c)), l.enqueue(new Uint8Array(u));
        },
        cancel(l) {
          return r(l), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  ju = (e, t) => {
    const n = e != null;
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
  },
  go =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Ld = go && typeof ReadableStream == "function",
  Zs =
    go &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  C0 =
    Ld &&
    (() => {
      let e = !1;
      const t = new Request(Ue.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    })(),
  Au = 64 * 1024,
  el =
    Ld &&
    !!(() => {
      try {
        return w.isReadableStream(new Response("").body);
      } catch {}
    })(),
  Ji = { stream: el && ((e) => e.body) };
go &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Ji[t] &&
        (Ji[t] = w.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new F(
                `Response type '${t}' is not supported`,
                F.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const P0 = async (e) => {
    if (e == null) return 0;
    if (w.isBlob(e)) return e.size;
    if (w.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength;
    if (w.isArrayBufferView(e)) return e.byteLength;
    if ((w.isURLSearchParams(e) && (e = e + ""), w.isString(e)))
      return (await Zs(e)).byteLength;
  },
  N0 = async (e, t) => {
    const n = w.toFiniteNumber(e.getContentLength());
    return n ?? P0(t);
  },
  O0 =
    go &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: o,
        timeout: s,
        onDownloadProgress: l,
        onUploadProgress: a,
        responseType: u,
        headers: c,
        withCredentials: d = "same-origin",
        fetchOptions: f,
      } = Rd(e);
      u = u ? (u + "").toLowerCase() : "text";
      let [v, g] = i || o || s ? x0([i, o], s) : [],
        y,
        C;
      const h = () => {
        !y &&
          setTimeout(() => {
            v && v.unsubscribe();
          }),
          (y = !0);
      };
      let p;
      try {
        if (
          a &&
          C0 &&
          n !== "get" &&
          n !== "head" &&
          (p = await N0(c, r)) !== 0
        ) {
          let P = new Request(t, { method: "POST", body: r, duplex: "half" }),
            E;
          w.isFormData(r) &&
            (E = P.headers.get("content-type")) &&
            c.setContentType(E),
            P.body && (r = Mu(P.body, Au, ju(p, Qi(a)), null, Zs));
        }
        w.isString(d) || (d = d ? "cors" : "omit"),
          (C = new Request(t, {
            ...f,
            signal: v,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            withCredentials: d,
          }));
        let m = await fetch(C);
        const S = el && (u === "stream" || u === "response");
        if (el && (l || S)) {
          const P = {};
          ["status", "statusText", "headers"].forEach((O) => {
            P[O] = m[O];
          });
          const E = w.toFiniteNumber(m.headers.get("content-length"));
          m = new Response(
            Mu(m.body, Au, l && ju(E, Qi(l, !0)), S && h, Zs),
            P
          );
        }
        u = u || "text";
        let k = await Ji[w.findKey(Ji, u) || "text"](m, e);
        return (
          !S && h(),
          g && g(),
          await new Promise((P, E) => {
            Nd(P, E, {
              data: k,
              headers: Se.from(m.headers),
              status: m.status,
              statusText: m.statusText,
              config: e,
              request: C,
            });
          })
        );
      } catch (m) {
        throw (
          (h(),
          m && m.name === "TypeError" && /fetch/i.test(m.message)
            ? Object.assign(new F("Network Error", F.ERR_NETWORK, e, C), {
                cause: m.cause || m,
              })
            : F.from(m, m && m.code, e, C))
        );
      }
    }),
  tl = { http: Wy, xhr: S0, fetch: O0 };
w.forEach(tl, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const zu = (e) => `- ${e}`,
  R0 = (e) => w.isFunction(e) || e === null || e === !1,
  _d = {
    getAdapter: (e) => {
      e = w.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let s;
        if (
          ((r = n),
          !R0(n) && ((r = tl[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new F(`Unknown adapter '${s}'`);
        if (r) break;
        i[s || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([l, a]) =>
            `adapter ${l} ` +
            (a === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let s = t
          ? o.length > 1
            ? `since :
` +
              o.map(zu).join(`
`)
            : " " + zu(o[0])
          : "as no adapter specified";
        throw new F(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: tl,
  };
function es(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new zn(null, e);
}
function Du(e) {
  return (
    es(e),
    (e.headers = Se.from(e.headers)),
    (e.data = Zo.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    _d
      .getAdapter(e.adapter || jr.adapter)(e)
      .then(
        function (r) {
          return (
            es(e),
            (r.data = Zo.call(e, e.transformResponse, r)),
            (r.headers = Se.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            Pd(r) ||
              (es(e),
              r &&
                r.response &&
                ((r.response.data = Zo.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Se.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Td = "1.7.2",
  ta = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    ta[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Iu = {};
ta.transitional = function (t, n, r) {
  function i(o, s) {
    return (
      "[Axios v" +
      Td +
      "] Transitional option '" +
      o +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (o, s, l) => {
    if (t === !1)
      throw new F(
        i(s, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED
      );
    return (
      n &&
        !Iu[s] &&
        ((Iu[s] = !0),
        console.warn(
          i(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, s, l) : !0
    );
  };
};
function L0(e, t, n) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      s = t[o];
    if (s) {
      const l = e[o],
        a = l === void 0 || s(l, o, e);
      if (a !== !0)
        throw new F("option " + o + " must be " + a, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new F("Unknown option " + o, F.ERR_BAD_OPTION);
  }
}
const nl = { assertOptions: L0, validators: ta },
  ft = nl.validators;
class Kt {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new _u(), response: new _u() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Gt(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      nl.assertOptions(
        r,
        {
          silentJSONParsing: ft.transitional(ft.boolean),
          forcedJSONParsing: ft.transitional(ft.boolean),
          clarifyTimeoutError: ft.transitional(ft.boolean),
        },
        !1
      ),
      i != null &&
        (w.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : nl.assertOptions(
              i,
              { encode: ft.function, serialize: ft.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = o && w.merge(o.common, o[n.method]);
    o &&
      w.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (g) => {
          delete o[g];
        }
      ),
      (n.headers = Se.concat(s, o));
    const l = [];
    let a = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((a = a && y.synchronous), l.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let c,
      d = 0,
      f;
    if (!a) {
      const g = [Du.bind(this), void 0];
      for (
        g.unshift.apply(g, l),
          g.push.apply(g, u),
          f = g.length,
          c = Promise.resolve(n);
        d < f;

      )
        c = c.then(g[d++], g[d++]);
      return c;
    }
    f = l.length;
    let v = n;
    for (d = 0; d < f; ) {
      const g = l[d++],
        y = l[d++];
      try {
        v = g(v);
      } catch (C) {
        y.call(this, C);
        break;
      }
    }
    try {
      c = Du.call(this, v);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, f = u.length; d < f; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = Gt(this.defaults, t);
    const n = Od(t.baseURL, t.url);
    return kd(n, t.params, t.paramsSerializer);
  }
}
w.forEach(["delete", "get", "head", "options"], function (t) {
  Kt.prototype[t] = function (n, r) {
    return this.request(
      Gt(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
w.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, s, l) {
      return this.request(
        Gt(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: s,
        })
      );
    };
  }
  (Kt.prototype[t] = n()), (Kt.prototype[t + "Form"] = n(!0));
});
class na {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const s = new Promise((l) => {
          r.subscribe(l), (o = l);
        }).then(i);
        return (
          (s.cancel = function () {
            r.unsubscribe(o);
          }),
          s
        );
      }),
      t(function (o, s, l) {
        r.reason || ((r.reason = new zn(o, s, l)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new na(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
function _0(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function T0(e) {
  return w.isObject(e) && e.isAxiosError === !0;
}
const rl = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(rl).forEach(([e, t]) => {
  rl[t] = e;
});
function Fd(e) {
  const t = new Kt(e),
    n = cd(Kt.prototype.request, t);
  return (
    w.extend(n, Kt.prototype, t, { allOwnKeys: !0 }),
    w.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Fd(Gt(e, i));
    }),
    n
  );
}
const Y = Fd(jr);
Y.Axios = Kt;
Y.CanceledError = zn;
Y.CancelToken = na;
Y.isCancel = Pd;
Y.VERSION = Td;
Y.toFormData = mo;
Y.AxiosError = F;
Y.Cancel = Y.CanceledError;
Y.all = function (t) {
  return Promise.all(t);
};
Y.spread = _0;
Y.isAxiosError = T0;
Y.mergeConfig = Gt;
Y.AxiosHeaders = Se;
Y.formToJSON = (e) => Cd(w.isHTMLForm(e) ? new FormData(e) : e);
Y.getAdapter = _d.getAdapter;
Y.HttpStatusCode = rl;
Y.default = Y;
const F0 = (e) => Y.get(e).then((t) => t.data),
  M0 = (e) => {
    const { configuration: t = { isXY: !1 } } = e,
      { t: n } = ry(),
      r = Tn(Ko.reset, Ko.app, { xy: t.isXY }),
      i = Tn(Ko.layoutContainer);
    return (
      console.log(
        F0(
          "http://portal.leaserad.local.de/portal-backend/v1/contracts/calculator/demoag/JOD6O2YS5E"
        )
      ),
      M.jsx(eg, {
        i18n: oy,
        children: M.jsx("div", {
          className: r,
          children: M.jsxs("div", {
            className: i,
            children: [
              M.jsx(zt, {
                children: M.jsx(Xe, {
                  children: M.jsx("h1", { children: n("jobRadCalculator") }),
                }),
              }),
              M.jsx(zt, {
                partialWidth: !0,
                children: M.jsx(Xe, {
                  background: "gray",
                  children: M.jsx(jm, {}),
                }),
              }),
              M.jsxs(zt, {
                breakOutSticky: !0,
                children: [
                  M.jsxs(Xe, {
                    background: "greenLightest",
                    children: [
                      M.jsx(ct, { label: "Altes Nettogehalt", value: "2560" }),
                      M.jsx(ct, { label: "Neues Nettogehalt", value: "2500" }),
                    ],
                  }),
                  M.jsx(Xe, {
                    background: "greenLight",
                    children: M.jsx(ct, {
                      label: "Monatliche Rate",
                      value: "60",
                    }),
                  }),
                  M.jsx(Xe, {
                    background: "green",
                    children:
                      "Wenn du das Fahrrad nach 36 Monaten übernimmst, sparst Du: viel Geld!",
                  }),
                ],
              }),
              M.jsx(zt, {
                partialWidth: !0,
                children: M.jsxs(Xe, {
                  withoutPadding: !0,
                  children: [
                    M.jsx("h2", { children: "Schrittweise Leasing Verstehen" }),
                    M.jsx("h3", { children: "Gehaltsumwandlung" }),
                    M.jsx(ct, { label: "Altes Bruttogehalt", value: "3500" }),
                  ],
                }),
              }),
              M.jsx(zt, {
                partialWidth: !0,
                children: M.jsxs(Xe, {
                  withoutPadding: !0,
                  children: [
                    M.jsx("h3", { children: "Steuerlicher Vorteil" }),
                    M.jsx(ct, { label: "abzgl. Abgaben", value: "-713" }),
                  ],
                }),
              }),
              M.jsx(zt, {
                partialWidth: !0,
                children: M.jsxs(Xe, {
                  withoutPadding: !0,
                  children: [
                    M.jsx("h3", { children: "Ihre Monatsrate" }),
                    M.jsx(ct, { label: "Altes Nettogehalt", value: "2560" }),
                    M.jsx(ct, { label: "Neues Nettogehalt", value: "2500" }),
                    M.jsx(ct, {
                      label: "Circa Monatsrate (Netto)",
                      value: "60",
                    }),
                  ],
                }),
              }),
              M.jsx(zt, {
                partialWidth: !0,
                children: M.jsx(Xe, {
                  withoutPadding: !0,
                  children: M.jsx("h3", {
                    children: "Ersparnis nach 36 Monaten",
                  }),
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  j0 = dm(M0);
customElements.define("vorteilsrechner-app", j0);
