function ap(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const l = Object.getOwnPropertyDescriptor(r, o);
          l &&
            Object.defineProperty(
              e,
              o,
              l.get ? l : { enumerable: !0, get: () => r[o] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const l of o)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const l = {};
    return (
      o.integrity && (l.integrity = o.integrity),
      o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const l = n(o);
    fetch(o.href, l);
  }
})();
function Pa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ta = { exports: {} },
  Wo = {},
  _a = { exports: {} },
  A = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pr = Symbol.for("react.element"),
  cp = Symbol.for("react.portal"),
  dp = Symbol.for("react.fragment"),
  fp = Symbol.for("react.strict_mode"),
  pp = Symbol.for("react.profiler"),
  mp = Symbol.for("react.provider"),
  vp = Symbol.for("react.context"),
  hp = Symbol.for("react.forward_ref"),
  gp = Symbol.for("react.suspense"),
  yp = Symbol.for("react.memo"),
  wp = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function xp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ra = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  La = Object.assign,
  Oa = {};
function Dn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Ra);
}
Dn.prototype.isReactComponent = {};
Dn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Dn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ma() {}
Ma.prototype = Dn.prototype;
function Hi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Oa),
    (this.updater = n || Ra);
}
var Qi = (Hi.prototype = new Ma());
Qi.constructor = Hi;
La(Qi, Dn.prototype);
Qi.isPureReactComponent = !0;
var tu = Array.isArray,
  Ia = Object.prototype.hasOwnProperty,
  Ki = { current: null },
  ja = { key: !0, ref: !0, __self: !0, __source: !0 };
function Da(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Ia.call(t, r) && !ja.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: Pr,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Ki.current,
  };
}
function Sp(e, t) {
  return {
    $$typeof: Pr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Gi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pr;
}
function Ep(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function cl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Ep("" + e.key)
    : t.toString(36);
}
function ro(e, t, n, r, o) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Pr:
          case cp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + cl(i, 0) : r),
      tu(o)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          ro(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Gi(o) &&
            (o = Sp(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(nu, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), tu(e)))
    for (var s = 0; s < e.length; s++) {
      l = e[s];
      var u = r + cl(l, s);
      i += ro(l, t, n, u, o);
    }
  else if (((u = xp(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(l = e.next()).done; )
      (l = l.value), (u = r + cl(l, s++)), (i += ro(l, t, n, u, o));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function jr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ro(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function kp(e) {
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
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ge = { current: null },
  oo = { transition: null },
  Cp = {
    ReactCurrentDispatcher: ge,
    ReactCurrentBatchConfig: oo,
    ReactCurrentOwner: Ki,
  };
function za() {
  throw Error("act(...) is not supported in production builds of React.");
}
A.Children = {
  map: jr,
  forEach: function (e, t, n) {
    jr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      jr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      jr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Gi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
A.Component = Dn;
A.Fragment = dp;
A.Profiler = pp;
A.PureComponent = Hi;
A.StrictMode = fp;
A.Suspense = gp;
A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cp;
A.act = za;
A.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = La({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Ki.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Ia.call(t, u) &&
        !ja.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: Pr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
A.createContext = function (e) {
  return (
    (e = {
      $$typeof: vp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: mp, _context: e }),
    (e.Consumer = e)
  );
};
A.createElement = Da;
A.createFactory = function (e) {
  var t = Da.bind(null, e);
  return (t.type = e), t;
};
A.createRef = function () {
  return { current: null };
};
A.forwardRef = function (e) {
  return { $$typeof: hp, render: e };
};
A.isValidElement = Gi;
A.lazy = function (e) {
  return { $$typeof: wp, _payload: { _status: -1, _result: e }, _init: kp };
};
A.memo = function (e, t) {
  return { $$typeof: yp, type: e, compare: t === void 0 ? null : t };
};
A.startTransition = function (e) {
  var t = oo.transition;
  oo.transition = {};
  try {
    e();
  } finally {
    oo.transition = t;
  }
};
A.unstable_act = za;
A.useCallback = function (e, t) {
  return ge.current.useCallback(e, t);
};
A.useContext = function (e) {
  return ge.current.useContext(e);
};
A.useDebugValue = function () {};
A.useDeferredValue = function (e) {
  return ge.current.useDeferredValue(e);
};
A.useEffect = function (e, t) {
  return ge.current.useEffect(e, t);
};
A.useId = function () {
  return ge.current.useId();
};
A.useImperativeHandle = function (e, t, n) {
  return ge.current.useImperativeHandle(e, t, n);
};
A.useInsertionEffect = function (e, t) {
  return ge.current.useInsertionEffect(e, t);
};
A.useLayoutEffect = function (e, t) {
  return ge.current.useLayoutEffect(e, t);
};
A.useMemo = function (e, t) {
  return ge.current.useMemo(e, t);
};
A.useReducer = function (e, t, n) {
  return ge.current.useReducer(e, t, n);
};
A.useRef = function (e) {
  return ge.current.useRef(e);
};
A.useState = function (e) {
  return ge.current.useState(e);
};
A.useSyncExternalStore = function (e, t, n) {
  return ge.current.useSyncExternalStore(e, t, n);
};
A.useTransition = function () {
  return ge.current.useTransition();
};
A.version = "18.3.1";
_a.exports = A;
var m = _a.exports;
const wt = Pa(m),
  Np = ap({ __proto__: null, default: wt }, [m]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pp = m,
  Tp = Symbol.for("react.element"),
  _p = Symbol.for("react.fragment"),
  Rp = Object.prototype.hasOwnProperty,
  Lp = Pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Op = { key: !0, ref: !0, __self: !0, __source: !0 };
function Aa(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Rp.call(t, r) && !Op.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Tp,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Lp.current,
  };
}
Wo.Fragment = _p;
Wo.jsx = Aa;
Wo.jsxs = Aa;
Ta.exports = Wo;
var w = Ta.exports,
  Fa = { exports: {} },
  Le = {},
  ba = { exports: {} },
  $a = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, L) {
    var I = _.length;
    _.push(L);
    e: for (; 0 < I; ) {
      var F = (I - 1) >>> 1,
        X = _[F];
      if (0 < o(X, L)) (_[F] = L), (_[I] = X), (I = F);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var L = _[0],
      I = _.pop();
    if (I !== L) {
      _[0] = I;
      e: for (var F = 0, X = _.length, ot = X >>> 1; F < ot; ) {
        var Xe = 2 * (F + 1) - 1,
          al = _[Xe],
          $t = Xe + 1,
          Ir = _[$t];
        if (0 > o(al, I))
          $t < X && 0 > o(Ir, al)
            ? ((_[F] = Ir), (_[$t] = I), (F = $t))
            : ((_[F] = al), (_[Xe] = I), (F = Xe));
        else if ($t < X && 0 > o(Ir, I)) (_[F] = Ir), (_[$t] = I), (F = $t);
        else break e;
      }
    }
    return L;
  }
  function o(_, L) {
    var I = _.sortIndex - L.sortIndex;
    return I !== 0 ? I : _.id - L.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      s = i.now();
    e.unstable_now = function () {
      return i.now() - s;
    };
  }
  var u = [],
    a = [],
    h = 1,
    f = null,
    v = 3,
    y = !1,
    S = !1,
    g = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= _)
        r(a), (L.sortIndex = L.expirationTime), t(u, L);
      else break;
      L = n(a);
    }
  }
  function x(_) {
    if (((g = !1), p(_), !S))
      if (n(u) !== null) (S = !0), ie(k);
      else {
        var L = n(a);
        L !== null && Me(x, L.startTime - _);
      }
  }
  function k(_, L) {
    (S = !1), g && ((g = !1), d(T), (T = -1)), (y = !0);
    var I = v;
    try {
      for (
        p(L), f = n(u);
        f !== null && (!(f.expirationTime > L) || (_ && !H()));

      ) {
        var F = f.callback;
        if (typeof F == "function") {
          (f.callback = null), (v = f.priorityLevel);
          var X = F(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof X == "function" ? (f.callback = X) : f === n(u) && r(u),
            p(L);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var ot = !0;
      else {
        var Xe = n(a);
        Xe !== null && Me(x, Xe.startTime - L), (ot = !1);
      }
      return ot;
    } finally {
      (f = null), (v = I), (y = !1);
    }
  }
  var P = !1,
    C = null,
    T = -1,
    D = 5,
    O = -1;
  function H() {
    return !(e.unstable_now() - O < D);
  }
  function z() {
    if (C !== null) {
      var _ = e.unstable_now();
      O = _;
      var L = !0;
      try {
        L = C(!0, _);
      } finally {
        L ? Ne() : ((P = !1), (C = null));
      }
    } else P = !1;
  }
  var Ne;
  if (typeof c == "function")
    Ne = function () {
      c(z);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      le = M.port2;
    (M.port1.onmessage = z),
      (Ne = function () {
        le.postMessage(null);
      });
  } else
    Ne = function () {
      E(z, 0);
    };
  function ie(_) {
    (C = _), P || ((P = !0), Ne());
  }
  function Me(_, L) {
    T = E(function () {
      _(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || y || ((S = !0), ie(k));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (D = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return v;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (_) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = v;
      }
      var I = v;
      v = L;
      try {
        return _();
      } finally {
        v = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, L) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var I = v;
      v = _;
      try {
        return L();
      } finally {
        v = I;
      }
    }),
    (e.unstable_scheduleCallback = function (_, L, I) {
      var F = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? F + I : F))
          : (I = F),
        _)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = I + X),
        (_ = {
          id: h++,
          callback: L,
          priorityLevel: _,
          startTime: I,
          expirationTime: X,
          sortIndex: -1,
        }),
        I > F
          ? ((_.sortIndex = I),
            t(a, _),
            n(u) === null &&
              _ === n(a) &&
              (g ? (d(T), (T = -1)) : (g = !0), Me(x, I - F)))
          : ((_.sortIndex = X), t(u, _), S || y || ((S = !0), ie(k))),
        _
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (_) {
      var L = v;
      return function () {
        var I = v;
        v = L;
        try {
          return _.apply(this, arguments);
        } finally {
          v = I;
        }
      };
    });
})($a);
ba.exports = $a;
var Mp = ba.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ip = m,
  Re = Mp;
function N(e) {
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
var Ua = new Set(),
  ur = {};
function en(e, t) {
  Tn(e, t), Tn(e + "Capture", t);
}
function Tn(e, t) {
  for (ur[e] = t, e = 0; e < t.length; e++) Ua.add(t[e]);
}
var dt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ql = Object.prototype.hasOwnProperty,
  jp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  ou = {};
function Dp(e) {
  return Ql.call(ou, e)
    ? !0
    : Ql.call(ru, e)
      ? !1
      : jp.test(e)
        ? (ou[e] = !0)
        : ((ru[e] = !0), !1);
}
function zp(e, t, n, r) {
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
function Ap(e, t, n, r) {
  if (t === null || typeof t > "u" || zp(e, t, n, r)) return !0;
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
function ye(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ye(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ae[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ae[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ae[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ae[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ae[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ae[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ae[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ae[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yi = /[\-:]([a-z])/g;
function Xi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yi, Xi);
    ae[t] = new ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yi, Xi);
    ae[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yi, Xi);
  ae[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ae.xlinkHref = new ye(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ae[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zi(e, t, n, r) {
  var o = ae.hasOwnProperty(t) ? ae[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ap(t, n, o, r) && (n = null),
    r || o === null
      ? Dp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var vt = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Dr = Symbol.for("react.element"),
  sn = Symbol.for("react.portal"),
  un = Symbol.for("react.fragment"),
  Ji = Symbol.for("react.strict_mode"),
  Kl = Symbol.for("react.profiler"),
  Va = Symbol.for("react.provider"),
  Wa = Symbol.for("react.context"),
  qi = Symbol.for("react.forward_ref"),
  Gl = Symbol.for("react.suspense"),
  Yl = Symbol.for("react.suspense_list"),
  es = Symbol.for("react.memo"),
  St = Symbol.for("react.lazy"),
  Ba = Symbol.for("react.offscreen"),
  lu = Symbol.iterator;
function bn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  dl;
function Yn(e) {
  if (dl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      dl = (t && t[1]) || "";
    }
  return (
    `
` +
    dl +
    e
  );
}
var fl = !1;
function pl(e, t) {
  if (!e || fl) return "";
  fl = !0;
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
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var o = a.stack.split(`
`),
          l = r.stack.split(`
`),
          i = o.length - 1,
          s = l.length - 1;
        1 <= i && 0 <= s && o[i] !== l[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (o[i] !== l[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || o[i] !== l[s])) {
                var u =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (fl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Yn(e) : "";
}
function Fp(e) {
  switch (e.tag) {
    case 5:
      return Yn(e.type);
    case 16:
      return Yn("Lazy");
    case 13:
      return Yn("Suspense");
    case 19:
      return Yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = pl(e.type, !1)), e;
    case 11:
      return (e = pl(e.type.render, !1)), e;
    case 1:
      return (e = pl(e.type, !0)), e;
    default:
      return "";
  }
}
function Xl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case un:
      return "Fragment";
    case sn:
      return "Portal";
    case Kl:
      return "Profiler";
    case Ji:
      return "StrictMode";
    case Gl:
      return "Suspense";
    case Yl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Wa:
        return (e.displayName || "Context") + ".Consumer";
      case Va:
        return (e._context.displayName || "Context") + ".Provider";
      case qi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case es:
        return (
          (t = e.displayName || null), t !== null ? t : Xl(e.type) || "Memo"
        );
      case St:
        (t = e._payload), (e = e._init);
        try {
          return Xl(e(t));
        } catch {}
    }
  return null;
}
function bp(e) {
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
      return Xl(t);
    case 8:
      return t === Ji ? "StrictMode" : "Mode";
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
function Dt(e) {
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
function Ha(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function $p(e) {
  var t = Ha(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function zr(e) {
  e._valueTracker || (e._valueTracker = $p(e));
}
function Qa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ha(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function yo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Zl(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Dt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ka(e, t) {
  (t = t.checked), t != null && Zi(e, "checked", t, !1);
}
function Jl(e, t) {
  Ka(e, t);
  var n = Dt(t.value),
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
    ? ql(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ql(e, t.type, Dt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function su(e, t, n) {
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
function ql(e, t, n) {
  (t !== "number" || yo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Dt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ei(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function uu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Xn(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Dt(n) };
}
function Ga(e, t) {
  var n = Dt(t.value),
    r = Dt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ya(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ti(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ya(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Ar,
  Xa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ar = Ar || document.createElement("div"),
          Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ar.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ar(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var qn = {
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
  Up = ["Webkit", "ms", "Moz", "O"];
Object.keys(qn).forEach(function (e) {
  Up.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (qn[t] = qn[e]);
  });
});
function Za(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (qn.hasOwnProperty(e) && qn[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ja(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Za(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Vp = Y(
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
  },
);
function ni(e, t) {
  if (t) {
    if (Vp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function ri(e, t) {
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
var oi = null;
function ts(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var li = null,
  xn = null,
  Sn = null;
function cu(e) {
  if ((e = Rr(e))) {
    if (typeof li != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Go(t)), li(e.stateNode, e.type, t));
  }
}
function qa(e) {
  xn ? (Sn ? Sn.push(e) : (Sn = [e])) : (xn = e);
}
function ec() {
  if (xn) {
    var e = xn,
      t = Sn;
    if (((Sn = xn = null), cu(e), t)) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function tc(e, t) {
  return e(t);
}
function nc() {}
var ml = !1;
function rc(e, t, n) {
  if (ml) return e(t, n);
  ml = !0;
  try {
    return tc(e, t, n);
  } finally {
    (ml = !1), (xn !== null || Sn !== null) && (nc(), ec());
  }
}
function cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Go(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var ii = !1;
if (dt)
  try {
    var $n = {};
    Object.defineProperty($n, "passive", {
      get: function () {
        ii = !0;
      },
    }),
      window.addEventListener("test", $n, $n),
      window.removeEventListener("test", $n, $n);
  } catch {
    ii = !1;
  }
function Wp(e, t, n, r, o, l, i, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var er = !1,
  wo = null,
  xo = !1,
  si = null,
  Bp = {
    onError: function (e) {
      (er = !0), (wo = e);
    },
  };
function Hp(e, t, n, r, o, l, i, s, u) {
  (er = !1), (wo = null), Wp.apply(Bp, arguments);
}
function Qp(e, t, n, r, o, l, i, s, u) {
  if ((Hp.apply(this, arguments), er)) {
    if (er) {
      var a = wo;
      (er = !1), (wo = null);
    } else throw Error(N(198));
    xo || ((xo = !0), (si = a));
  }
}
function tn(e) {
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
function oc(e) {
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
function du(e) {
  if (tn(e) !== e) throw Error(N(188));
}
function Kp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = tn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var l = o.alternate;
    if (l === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === l.child) {
      for (l = o.child; l; ) {
        if (l === n) return du(o), e;
        if (l === r) return du(o), t;
        l = l.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, s = o.child; s; ) {
        if (s === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (s === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = l.child; s; ) {
          if (s === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (s === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function lc(e) {
  return (e = Kp(e)), e !== null ? ic(e) : null;
}
function ic(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ic(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sc = Re.unstable_scheduleCallback,
  fu = Re.unstable_cancelCallback,
  Gp = Re.unstable_shouldYield,
  Yp = Re.unstable_requestPaint,
  J = Re.unstable_now,
  Xp = Re.unstable_getCurrentPriorityLevel,
  ns = Re.unstable_ImmediatePriority,
  uc = Re.unstable_UserBlockingPriority,
  So = Re.unstable_NormalPriority,
  Zp = Re.unstable_LowPriority,
  ac = Re.unstable_IdlePriority,
  Bo = null,
  nt = null;
function Jp(e) {
  if (nt && typeof nt.onCommitFiberRoot == "function")
    try {
      nt.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var We = Math.clz32 ? Math.clz32 : tm,
  qp = Math.log,
  em = Math.LN2;
function tm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qp(e) / em) | 0)) | 0;
}
var Fr = 64,
  br = 4194304;
function Zn(e) {
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
function Eo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var s = i & ~o;
    s !== 0 ? (r = Zn(s)) : ((l &= i), l !== 0 && (r = Zn(l)));
  } else (i = n & ~o), i !== 0 ? (r = Zn(i)) : l !== 0 && (r = Zn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (l = t & -t), o >= l || (o === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - We(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function nm(e, t) {
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
function rm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - We(l),
      s = 1 << i,
      u = o[i];
    u === -1
      ? (!(s & n) || s & r) && (o[i] = nm(s, t))
      : u <= t && (e.expiredLanes |= s),
      (l &= ~s);
  }
}
function ui(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function cc() {
  var e = Fr;
  return (Fr <<= 1), !(Fr & 4194240) && (Fr = 64), e;
}
function vl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Tr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - We(t)),
    (e[t] = n);
}
function om(e, t) {
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
    var o = 31 - We(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function rs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - We(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var $ = 0;
function dc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var fc,
  os,
  pc,
  mc,
  vc,
  ai = !1,
  $r = [],
  Tt = null,
  _t = null,
  Rt = null,
  dr = new Map(),
  fr = new Map(),
  kt = [],
  lm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Tt = null;
      break;
    case "dragenter":
    case "dragleave":
      _t = null;
      break;
    case "mouseover":
    case "mouseout":
      Rt = null;
      break;
    case "pointerover":
    case "pointerout":
      dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fr.delete(t.pointerId);
  }
}
function Un(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Rr(t)), t !== null && os(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function im(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Tt = Un(Tt, e, t, n, r, o)), !0;
    case "dragenter":
      return (_t = Un(_t, e, t, n, r, o)), !0;
    case "mouseover":
      return (Rt = Un(Rt, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return dr.set(l, Un(dr.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), fr.set(l, Un(fr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function hc(e) {
  var t = Wt(e.target);
  if (t !== null) {
    var n = tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = oc(n)), t !== null)) {
          (e.blockedOn = t),
            vc(e.priority, function () {
              pc(n);
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
function lo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oi = r), n.target.dispatchEvent(r), (oi = null);
    } else return (t = Rr(n)), t !== null && os(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function mu(e, t, n) {
  lo(e) && n.delete(t);
}
function sm() {
  (ai = !1),
    Tt !== null && lo(Tt) && (Tt = null),
    _t !== null && lo(_t) && (_t = null),
    Rt !== null && lo(Rt) && (Rt = null),
    dr.forEach(mu),
    fr.forEach(mu);
}
function Vn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ai ||
      ((ai = !0),
      Re.unstable_scheduleCallback(Re.unstable_NormalPriority, sm)));
}
function pr(e) {
  function t(o) {
    return Vn(o, e);
  }
  if (0 < $r.length) {
    Vn($r[0], e);
    for (var n = 1; n < $r.length; n++) {
      var r = $r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Tt !== null && Vn(Tt, e),
      _t !== null && Vn(_t, e),
      Rt !== null && Vn(Rt, e),
      dr.forEach(t),
      fr.forEach(t),
      n = 0;
    n < kt.length;
    n++
  )
    (r = kt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < kt.length && ((n = kt[0]), n.blockedOn === null); )
    hc(n), n.blockedOn === null && kt.shift();
}
var En = vt.ReactCurrentBatchConfig,
  ko = !0;
function um(e, t, n, r) {
  var o = $,
    l = En.transition;
  En.transition = null;
  try {
    ($ = 1), ls(e, t, n, r);
  } finally {
    ($ = o), (En.transition = l);
  }
}
function am(e, t, n, r) {
  var o = $,
    l = En.transition;
  En.transition = null;
  try {
    ($ = 4), ls(e, t, n, r);
  } finally {
    ($ = o), (En.transition = l);
  }
}
function ls(e, t, n, r) {
  if (ko) {
    var o = ci(e, t, n, r);
    if (o === null) Nl(e, t, r, Co, n), pu(e, r);
    else if (im(o, e, t, n, r)) r.stopPropagation();
    else if ((pu(e, r), t & 4 && -1 < lm.indexOf(e))) {
      for (; o !== null; ) {
        var l = Rr(o);
        if (
          (l !== null && fc(l),
          (l = ci(e, t, n, r)),
          l === null && Nl(e, t, r, Co, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else Nl(e, t, r, null, n);
  }
}
var Co = null;
function ci(e, t, n, r) {
  if (((Co = null), (e = ts(r)), (e = Wt(e)), e !== null))
    if (((t = tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = oc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Co = e), null;
}
function gc(e) {
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
      switch (Xp()) {
        case ns:
          return 1;
        case uc:
          return 4;
        case So:
        case Zp:
          return 16;
        case ac:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Nt = null,
  is = null,
  io = null;
function yc() {
  if (io) return io;
  var e,
    t = is,
    n = t.length,
    r,
    o = "value" in Nt ? Nt.value : Nt.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (io = o.slice(e, 1 < r ? 1 - r : void 0));
}
function so(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ur() {
  return !0;
}
function vu() {
  return !1;
}
function Oe(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ur
        : vu),
      (this.isPropagationStopped = vu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ur));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ur));
      },
      persist: function () {},
      isPersistent: Ur,
    }),
    t
  );
}
var zn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ss = Oe(zn),
  _r = Y({}, zn, { view: 0, detail: 0 }),
  cm = Oe(_r),
  hl,
  gl,
  Wn,
  Ho = Y({}, _r, {
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
    getModifierState: us,
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
        : (e !== Wn &&
            (Wn && e.type === "mousemove"
              ? ((hl = e.screenX - Wn.screenX), (gl = e.screenY - Wn.screenY))
              : (gl = hl = 0),
            (Wn = e)),
          hl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : gl;
    },
  }),
  hu = Oe(Ho),
  dm = Y({}, Ho, { dataTransfer: 0 }),
  fm = Oe(dm),
  pm = Y({}, _r, { relatedTarget: 0 }),
  yl = Oe(pm),
  mm = Y({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vm = Oe(mm),
  hm = Y({}, zn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  gm = Oe(hm),
  ym = Y({}, zn, { data: 0 }),
  gu = Oe(ym),
  wm = {
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
  xm = {
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
  Sm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Em(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sm[e]) ? !!t[e] : !1;
}
function us() {
  return Em;
}
var km = Y({}, _r, {
    key: function (e) {
      if (e.key) {
        var t = wm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = so(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? xm[e.keyCode] || "Unidentified"
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
    getModifierState: us,
    charCode: function (e) {
      return e.type === "keypress" ? so(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? so(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Cm = Oe(km),
  Nm = Y({}, Ho, {
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
  yu = Oe(Nm),
  Pm = Y({}, _r, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: us,
  }),
  Tm = Oe(Pm),
  _m = Y({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Rm = Oe(_m),
  Lm = Y({}, Ho, {
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
  Om = Oe(Lm),
  Mm = [9, 13, 27, 32],
  as = dt && "CompositionEvent" in window,
  tr = null;
dt && "documentMode" in document && (tr = document.documentMode);
var Im = dt && "TextEvent" in window && !tr,
  wc = dt && (!as || (tr && 8 < tr && 11 >= tr)),
  wu = " ",
  xu = !1;
function xc(e, t) {
  switch (e) {
    case "keyup":
      return Mm.indexOf(t.keyCode) !== -1;
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
function Sc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var an = !1;
function jm(e, t) {
  switch (e) {
    case "compositionend":
      return Sc(t);
    case "keypress":
      return t.which !== 32 ? null : ((xu = !0), wu);
    case "textInput":
      return (e = t.data), e === wu && xu ? null : e;
    default:
      return null;
  }
}
function Dm(e, t) {
  if (an)
    return e === "compositionend" || (!as && xc(e, t))
      ? ((e = yc()), (io = is = Nt = null), (an = !1), e)
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
      return wc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zm = {
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
function Su(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zm[e.type] : t === "textarea";
}
function Ec(e, t, n, r) {
  qa(r),
    (t = No(t, "onChange")),
    0 < t.length &&
      ((n = new ss("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var nr = null,
  mr = null;
function Am(e) {
  Ic(e, 0);
}
function Qo(e) {
  var t = fn(e);
  if (Qa(t)) return e;
}
function Fm(e, t) {
  if (e === "change") return t;
}
var kc = !1;
if (dt) {
  var wl;
  if (dt) {
    var xl = "oninput" in document;
    if (!xl) {
      var Eu = document.createElement("div");
      Eu.setAttribute("oninput", "return;"),
        (xl = typeof Eu.oninput == "function");
    }
    wl = xl;
  } else wl = !1;
  kc = wl && (!document.documentMode || 9 < document.documentMode);
}
function ku() {
  nr && (nr.detachEvent("onpropertychange", Cc), (mr = nr = null));
}
function Cc(e) {
  if (e.propertyName === "value" && Qo(mr)) {
    var t = [];
    Ec(t, mr, e, ts(e)), rc(Am, t);
  }
}
function bm(e, t, n) {
  e === "focusin"
    ? (ku(), (nr = t), (mr = n), nr.attachEvent("onpropertychange", Cc))
    : e === "focusout" && ku();
}
function $m(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Qo(mr);
}
function Um(e, t) {
  if (e === "click") return Qo(t);
}
function Vm(e, t) {
  if (e === "input" || e === "change") return Qo(t);
}
function Wm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var He = typeof Object.is == "function" ? Object.is : Wm;
function vr(e, t) {
  if (He(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ql.call(t, o) || !He(e[o], t[o])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nu(e, t) {
  var n = Cu(e);
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
    n = Cu(n);
  }
}
function Nc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Nc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Pc() {
  for (var e = window, t = yo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = yo(e.document);
  }
  return t;
}
function cs(e) {
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
function Bm(e) {
  var t = Pc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && cs(n)) {
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
        var o = n.textContent.length,
          l = Math.min(r.start, o);
        (r = r.end === void 0 ? l : Math.min(r.end, o)),
          !e.extend && l > r && ((o = r), (r = l), (l = o)),
          (o = Nu(n, l));
        var i = Nu(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var Hm = dt && "documentMode" in document && 11 >= document.documentMode,
  cn = null,
  di = null,
  rr = null,
  fi = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fi ||
    cn == null ||
    cn !== yo(r) ||
    ((r = cn),
    "selectionStart" in r && cs(r)
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
    (rr && vr(rr, r)) ||
      ((rr = r),
      (r = No(di, "onSelect")),
      0 < r.length &&
        ((t = new ss("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = cn))));
}
function Vr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var dn = {
    animationend: Vr("Animation", "AnimationEnd"),
    animationiteration: Vr("Animation", "AnimationIteration"),
    animationstart: Vr("Animation", "AnimationStart"),
    transitionend: Vr("Transition", "TransitionEnd"),
  },
  Sl = {},
  Tc = {};
dt &&
  ((Tc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dn.animationend.animation,
    delete dn.animationiteration.animation,
    delete dn.animationstart.animation),
  "TransitionEvent" in window || delete dn.transitionend.transition);
function Ko(e) {
  if (Sl[e]) return Sl[e];
  if (!dn[e]) return e;
  var t = dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Tc) return (Sl[e] = t[n]);
  return e;
}
var _c = Ko("animationend"),
  Rc = Ko("animationiteration"),
  Lc = Ko("animationstart"),
  Oc = Ko("transitionend"),
  Mc = new Map(),
  Tu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function At(e, t) {
  Mc.set(e, t), en(t, [e]);
}
for (var El = 0; El < Tu.length; El++) {
  var kl = Tu[El],
    Qm = kl.toLowerCase(),
    Km = kl[0].toUpperCase() + kl.slice(1);
  At(Qm, "on" + Km);
}
At(_c, "onAnimationEnd");
At(Rc, "onAnimationIteration");
At(Lc, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(Oc, "onTransitionEnd");
Tn("onMouseEnter", ["mouseout", "mouseover"]);
Tn("onMouseLeave", ["mouseout", "mouseover"]);
Tn("onPointerEnter", ["pointerout", "pointerover"]);
Tn("onPointerLeave", ["pointerout", "pointerover"]);
en(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
en(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
en("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
en(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
en(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
en(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Jn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Gm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));
function _u(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qp(r, t, void 0, e), (e.currentTarget = null);
}
function Ic(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var s = r[i],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== l && o.isPropagationStopped())) break e;
          _u(o, s, a), (l = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((s = r[i]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== l && o.isPropagationStopped())
          )
            break e;
          _u(o, s, a), (l = u);
        }
    }
  }
  if (xo) throw ((e = si), (xo = !1), (si = null), e);
}
function W(e, t) {
  var n = t[gi];
  n === void 0 && (n = t[gi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jc(t, e, 2, !1), n.add(r));
}
function Cl(e, t, n) {
  var r = 0;
  t && (r |= 4), jc(n, e, r, t);
}
var Wr = "_reactListening" + Math.random().toString(36).slice(2);
function hr(e) {
  if (!e[Wr]) {
    (e[Wr] = !0),
      Ua.forEach(function (n) {
        n !== "selectionchange" && (Gm.has(n) || Cl(n, !1, e), Cl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Wr] || ((t[Wr] = !0), Cl("selectionchange", !1, t));
  }
}
function jc(e, t, n, r) {
  switch (gc(t)) {
    case 1:
      var o = um;
      break;
    case 4:
      o = am;
      break;
    default:
      o = ls;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ii ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Nl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = Wt(s)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = l = i;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  rc(function () {
    var a = l,
      h = ts(n),
      f = [];
    e: {
      var v = Mc.get(e);
      if (v !== void 0) {
        var y = ss,
          S = e;
        switch (e) {
          case "keypress":
            if (so(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Cm;
            break;
          case "focusin":
            (S = "focus"), (y = yl);
            break;
          case "focusout":
            (S = "blur"), (y = yl);
            break;
          case "beforeblur":
          case "afterblur":
            y = yl;
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
            y = hu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = fm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Tm;
            break;
          case _c:
          case Rc:
          case Lc:
            y = vm;
            break;
          case Oc:
            y = Rm;
            break;
          case "scroll":
            y = cm;
            break;
          case "wheel":
            y = Om;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = gm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = yu;
        }
        var g = (t & 4) !== 0,
          E = !g && e === "scroll",
          d = g ? (v !== null ? v + "Capture" : null) : v;
        g = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              d !== null && ((x = cr(c, d)), x != null && g.push(gr(c, x, p)))),
            E)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((v = new y(v, S, null, n, h)), f.push({ event: v, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((v = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          v &&
            n !== oi &&
            (S = n.relatedTarget || n.fromElement) &&
            (Wt(S) || S[ft]))
        )
          break e;
        if (
          (y || v) &&
          ((v =
            h.window === h
              ? h
              : (v = h.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
          y
            ? ((S = n.relatedTarget || n.toElement),
              (y = a),
              (S = S ? Wt(S) : null),
              S !== null &&
                ((E = tn(S)), S !== E || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((y = null), (S = a)),
          y !== S)
        ) {
          if (
            ((g = hu),
            (x = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = yu),
              (x = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (E = y == null ? v : fn(y)),
            (p = S == null ? v : fn(S)),
            (v = new g(x, c + "leave", y, n, h)),
            (v.target = E),
            (v.relatedTarget = p),
            (x = null),
            Wt(h) === a &&
              ((g = new g(d, c + "enter", S, n, h)),
              (g.target = p),
              (g.relatedTarget = E),
              (x = g)),
            (E = x),
            y && S)
          )
            t: {
              for (g = y, d = S, c = 0, p = g; p; p = nn(p)) c++;
              for (p = 0, x = d; x; x = nn(x)) p++;
              for (; 0 < c - p; ) (g = nn(g)), c--;
              for (; 0 < p - c; ) (d = nn(d)), p--;
              for (; c--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = nn(g)), (d = nn(d));
              }
              g = null;
            }
          else g = null;
          y !== null && Ru(f, v, y, g, !1),
            S !== null && E !== null && Ru(f, E, S, g, !0);
        }
      }
      e: {
        if (
          ((v = a ? fn(a) : window),
          (y = v.nodeName && v.nodeName.toLowerCase()),
          y === "select" || (y === "input" && v.type === "file"))
        )
          var k = Fm;
        else if (Su(v))
          if (kc) k = Vm;
          else {
            k = $m;
            var P = bm;
          }
        else
          (y = v.nodeName) &&
            y.toLowerCase() === "input" &&
            (v.type === "checkbox" || v.type === "radio") &&
            (k = Um);
        if (k && (k = k(e, a))) {
          Ec(f, k, n, h);
          break e;
        }
        P && P(e, v, a),
          e === "focusout" &&
            (P = v._wrapperState) &&
            P.controlled &&
            v.type === "number" &&
            ql(v, "number", v.value);
      }
      switch (((P = a ? fn(a) : window), e)) {
        case "focusin":
          (Su(P) || P.contentEditable === "true") &&
            ((cn = P), (di = a), (rr = null));
          break;
        case "focusout":
          rr = di = cn = null;
          break;
        case "mousedown":
          fi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fi = !1), Pu(f, n, h);
          break;
        case "selectionchange":
          if (Hm) break;
        case "keydown":
        case "keyup":
          Pu(f, n, h);
      }
      var C;
      if (as)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        an
          ? xc(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (wc &&
          n.locale !== "ko" &&
          (an || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && an && (C = yc())
            : ((Nt = h),
              (is = "value" in Nt ? Nt.value : Nt.textContent),
              (an = !0))),
        (P = No(a, T)),
        0 < P.length &&
          ((T = new gu(T, e, null, n, h)),
          f.push({ event: T, listeners: P }),
          C ? (T.data = C) : ((C = Sc(n)), C !== null && (T.data = C)))),
        (C = Im ? jm(e, n) : Dm(e, n)) &&
          ((a = No(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new gu("onBeforeInput", "beforeinput", null, n, h)),
            f.push({ event: h, listeners: a }),
            (h.data = C)));
    }
    Ic(f, t);
  });
}
function gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function No(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = cr(e, n)),
      l != null && r.unshift(gr(e, l, o)),
      (l = cr(e, t)),
      l != null && r.push(gr(e, l, o))),
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
function Ru(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = cr(n, l)), u != null && i.unshift(gr(n, u, s)))
        : o || ((u = cr(n, l)), u != null && i.push(gr(n, u, s)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ym = /\r\n?/g,
  Xm = /\u0000|\uFFFD/g;
function Lu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ym,
      `
`,
    )
    .replace(Xm, "");
}
function Br(e, t, n) {
  if (((t = Lu(t)), Lu(e) !== t && n)) throw Error(N(425));
}
function Po() {}
var pi = null,
  mi = null;
function vi(e, t) {
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
var hi = typeof setTimeout == "function" ? setTimeout : void 0,
  Zm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ou = typeof Promise == "function" ? Promise : void 0,
  Jm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ou < "u"
        ? function (e) {
            return Ou.resolve(null).then(e).catch(qm);
          }
        : hi;
function qm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Pl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), pr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  pr(t);
}
function Lt(e) {
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
function Mu(e) {
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
var An = Math.random().toString(36).slice(2),
  et = "__reactFiber$" + An,
  yr = "__reactProps$" + An,
  ft = "__reactContainer$" + An,
  gi = "__reactEvents$" + An,
  ev = "__reactListeners$" + An,
  tv = "__reactHandles$" + An;
function Wt(e) {
  var t = e[et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ft] || n[et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Mu(e); e !== null; ) {
          if ((n = e[et])) return n;
          e = Mu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Rr(e) {
  return (
    (e = e[et] || e[ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Go(e) {
  return e[yr] || null;
}
var yi = [],
  pn = -1;
function Ft(e) {
  return { current: e };
}
function B(e) {
  0 > pn || ((e.current = yi[pn]), (yi[pn] = null), pn--);
}
function U(e, t) {
  pn++, (yi[pn] = e.current), (e.current = t);
}
var zt = {},
  me = Ft(zt),
  Se = Ft(!1),
  Gt = zt;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return zt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    l;
  for (l in n) o[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ee(e) {
  return (e = e.childContextTypes), e != null;
}
function To() {
  B(Se), B(me);
}
function Iu(e, t, n) {
  if (me.current !== zt) throw Error(N(168));
  U(me, t), U(Se, n);
}
function Dc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(N(108, bp(e) || "Unknown", o));
  return Y({}, n, r);
}
function _o(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || zt),
    (Gt = me.current),
    U(me, e),
    U(Se, Se.current),
    !0
  );
}
function ju(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = Dc(e, t, Gt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(Se),
      B(me),
      U(me, e))
    : B(Se),
    U(Se, n);
}
var st = null,
  Yo = !1,
  Tl = !1;
function zc(e) {
  st === null ? (st = [e]) : st.push(e);
}
function nv(e) {
  (Yo = !0), zc(e);
}
function bt() {
  if (!Tl && st !== null) {
    Tl = !0;
    var e = 0,
      t = $;
    try {
      var n = st;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (st = null), (Yo = !1);
    } catch (o) {
      throw (st !== null && (st = st.slice(e + 1)), sc(ns, bt), o);
    } finally {
      ($ = t), (Tl = !1);
    }
  }
  return null;
}
var mn = [],
  vn = 0,
  Ro = null,
  Lo = 0,
  Ie = [],
  je = 0,
  Yt = null,
  ut = 1,
  at = "";
function Ut(e, t) {
  (mn[vn++] = Lo), (mn[vn++] = Ro), (Ro = e), (Lo = t);
}
function Ac(e, t, n) {
  (Ie[je++] = ut), (Ie[je++] = at), (Ie[je++] = Yt), (Yt = e);
  var r = ut;
  e = at;
  var o = 32 - We(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - We(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (ut = (1 << (32 - We(t) + o)) | (n << o) | r),
      (at = l + e);
  } else (ut = (1 << l) | (n << o) | r), (at = e);
}
function ds(e) {
  e.return !== null && (Ut(e, 1), Ac(e, 1, 0));
}
function fs(e) {
  for (; e === Ro; )
    (Ro = mn[--vn]), (mn[vn] = null), (Lo = mn[--vn]), (mn[vn] = null);
  for (; e === Yt; )
    (Yt = Ie[--je]),
      (Ie[je] = null),
      (at = Ie[--je]),
      (Ie[je] = null),
      (ut = Ie[--je]),
      (Ie[je] = null);
}
var _e = null,
  Te = null,
  Q = !1,
  Ve = null;
function Fc(e, t) {
  var n = De(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Du(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (_e = e), (Te = Lt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (_e = e), (Te = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Yt !== null ? { id: ut, overflow: at } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = De(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (_e = e),
            (Te = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (Q) {
    var t = Te;
    if (t) {
      var n = t;
      if (!Du(e, t)) {
        if (wi(e)) throw Error(N(418));
        t = Lt(n.nextSibling);
        var r = _e;
        t && Du(e, t)
          ? Fc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (_e = e));
      }
    } else {
      if (wi(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (_e = e);
    }
  }
}
function zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  _e = e;
}
function Hr(e) {
  if (e !== _e) return !1;
  if (!Q) return zu(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vi(e.type, e.memoizedProps))),
    t && (t = Te))
  ) {
    if (wi(e)) throw (bc(), Error(N(418)));
    for (; t; ) Fc(e, t), (t = Lt(t.nextSibling));
  }
  if ((zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Te = Lt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Te = null;
    }
  } else Te = _e ? Lt(e.stateNode.nextSibling) : null;
  return !0;
}
function bc() {
  for (var e = Te; e; ) e = Lt(e.nextSibling);
}
function Rn() {
  (Te = _e = null), (Q = !1);
}
function ps(e) {
  Ve === null ? (Ve = [e]) : Ve.push(e);
}
var rv = vt.ReactCurrentBatchConfig;
function Bn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var s = o.refs;
            i === null ? delete s[l] : (s[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Qr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Au(e) {
  var t = e._init;
  return t(e._payload);
}
function $c(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function o(d, c) {
    return (d = jt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, c, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((d.flags |= 2), c) : p)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, p, x) {
    return c === null || c.tag !== 6
      ? ((c = jl(p, d.mode, x)), (c.return = d), c)
      : ((c = o(c, p)), (c.return = d), c);
  }
  function u(d, c, p, x) {
    var k = p.type;
    return k === un
      ? h(d, c, p.props.children, x, p.key)
      : c !== null &&
          (c.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === St &&
              Au(k) === c.type))
        ? ((x = o(c, p.props)), (x.ref = Bn(d, c, p)), (x.return = d), x)
        : ((x = vo(p.type, p.key, p.props, null, d.mode, x)),
          (x.ref = Bn(d, c, p)),
          (x.return = d),
          x);
  }
  function a(d, c, p, x) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Dl(p, d.mode, x)), (c.return = d), c)
      : ((c = o(c, p.children || [])), (c.return = d), c);
  }
  function h(d, c, p, x, k) {
    return c === null || c.tag !== 7
      ? ((c = Kt(p, d.mode, x, k)), (c.return = d), c)
      : ((c = o(c, p)), (c.return = d), c);
  }
  function f(d, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = jl("" + c, d.mode, p)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Dr:
          return (
            (p = vo(c.type, c.key, c.props, null, d.mode, p)),
            (p.ref = Bn(d, null, c)),
            (p.return = d),
            p
          );
        case sn:
          return (c = Dl(c, d.mode, p)), (c.return = d), c;
        case St:
          var x = c._init;
          return f(d, x(c._payload), p);
      }
      if (Xn(c) || bn(c))
        return (c = Kt(c, d.mode, p, null)), (c.return = d), c;
      Qr(d, c);
    }
    return null;
  }
  function v(d, c, p, x) {
    var k = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return k !== null ? null : s(d, c, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Dr:
          return p.key === k ? u(d, c, p, x) : null;
        case sn:
          return p.key === k ? a(d, c, p, x) : null;
        case St:
          return (k = p._init), v(d, c, k(p._payload), x);
      }
      if (Xn(p) || bn(p)) return k !== null ? null : h(d, c, p, x, null);
      Qr(d, p);
    }
    return null;
  }
  function y(d, c, p, x, k) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (d = d.get(p) || null), s(c, d, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Dr:
          return (d = d.get(x.key === null ? p : x.key) || null), u(c, d, x, k);
        case sn:
          return (d = d.get(x.key === null ? p : x.key) || null), a(c, d, x, k);
        case St:
          var P = x._init;
          return y(d, c, p, P(x._payload), k);
      }
      if (Xn(x) || bn(x)) return (d = d.get(p) || null), h(c, d, x, k, null);
      Qr(c, x);
    }
    return null;
  }
  function S(d, c, p, x) {
    for (
      var k = null, P = null, C = c, T = (c = 0), D = null;
      C !== null && T < p.length;
      T++
    ) {
      C.index > T ? ((D = C), (C = null)) : (D = C.sibling);
      var O = v(d, C, p[T], x);
      if (O === null) {
        C === null && (C = D);
        break;
      }
      e && C && O.alternate === null && t(d, C),
        (c = l(O, c, T)),
        P === null ? (k = O) : (P.sibling = O),
        (P = O),
        (C = D);
    }
    if (T === p.length) return n(d, C), Q && Ut(d, T), k;
    if (C === null) {
      for (; T < p.length; T++)
        (C = f(d, p[T], x)),
          C !== null &&
            ((c = l(C, c, T)), P === null ? (k = C) : (P.sibling = C), (P = C));
      return Q && Ut(d, T), k;
    }
    for (C = r(d, C); T < p.length; T++)
      (D = y(C, d, T, p[T], x)),
        D !== null &&
          (e && D.alternate !== null && C.delete(D.key === null ? T : D.key),
          (c = l(D, c, T)),
          P === null ? (k = D) : (P.sibling = D),
          (P = D));
    return (
      e &&
        C.forEach(function (H) {
          return t(d, H);
        }),
      Q && Ut(d, T),
      k
    );
  }
  function g(d, c, p, x) {
    var k = bn(p);
    if (typeof k != "function") throw Error(N(150));
    if (((p = k.call(p)), p == null)) throw Error(N(151));
    for (
      var P = (k = null), C = c, T = (c = 0), D = null, O = p.next();
      C !== null && !O.done;
      T++, O = p.next()
    ) {
      C.index > T ? ((D = C), (C = null)) : (D = C.sibling);
      var H = v(d, C, O.value, x);
      if (H === null) {
        C === null && (C = D);
        break;
      }
      e && C && H.alternate === null && t(d, C),
        (c = l(H, c, T)),
        P === null ? (k = H) : (P.sibling = H),
        (P = H),
        (C = D);
    }
    if (O.done) return n(d, C), Q && Ut(d, T), k;
    if (C === null) {
      for (; !O.done; T++, O = p.next())
        (O = f(d, O.value, x)),
          O !== null &&
            ((c = l(O, c, T)), P === null ? (k = O) : (P.sibling = O), (P = O));
      return Q && Ut(d, T), k;
    }
    for (C = r(d, C); !O.done; T++, O = p.next())
      (O = y(C, d, T, O.value, x)),
        O !== null &&
          (e && O.alternate !== null && C.delete(O.key === null ? T : O.key),
          (c = l(O, c, T)),
          P === null ? (k = O) : (P.sibling = O),
          (P = O));
    return (
      e &&
        C.forEach(function (z) {
          return t(d, z);
        }),
      Q && Ut(d, T),
      k
    );
  }
  function E(d, c, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === un &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Dr:
          e: {
            for (var k = p.key, P = c; P !== null; ) {
              if (P.key === k) {
                if (((k = p.type), k === un)) {
                  if (P.tag === 7) {
                    n(d, P.sibling),
                      (c = o(P, p.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  P.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === St &&
                    Au(k) === P.type)
                ) {
                  n(d, P.sibling),
                    (c = o(P, p.props)),
                    (c.ref = Bn(d, P, p)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, P);
                break;
              } else t(d, P);
              P = P.sibling;
            }
            p.type === un
              ? ((c = Kt(p.props.children, d.mode, x, p.key)),
                (c.return = d),
                (d = c))
              : ((x = vo(p.type, p.key, p.props, null, d.mode, x)),
                (x.ref = Bn(d, c, p)),
                (x.return = d),
                (d = x));
          }
          return i(d);
        case sn:
          e: {
            for (P = p.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(d, c.sibling),
                    (c = o(c, p.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = Dl(p, d.mode, x)), (c.return = d), (d = c);
          }
          return i(d);
        case St:
          return (P = p._init), E(d, c, P(p._payload), x);
      }
      if (Xn(p)) return S(d, c, p, x);
      if (bn(p)) return g(d, c, p, x);
      Qr(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, p)), (c.return = d), (d = c))
          : (n(d, c), (c = jl(p, d.mode, x)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return E;
}
var Ln = $c(!0),
  Uc = $c(!1),
  Oo = Ft(null),
  Mo = null,
  hn = null,
  ms = null;
function vs() {
  ms = hn = Mo = null;
}
function hs(e) {
  var t = Oo.current;
  B(Oo), (e._currentValue = t);
}
function Si(e, t, n) {
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
  (Mo = e),
    (ms = hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (xe = !0), (e.firstContext = null));
}
function Ae(e) {
  var t = e._currentValue;
  if (ms !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), hn === null)) {
      if (Mo === null) throw Error(N(308));
      (hn = e), (Mo.dependencies = { lanes: 0, firstContext: e });
    } else hn = hn.next = e;
  return t;
}
var Bt = null;
function gs(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function Vc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), gs(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    pt(e, r)
  );
}
function pt(e, t) {
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
var Et = !1;
function ys(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wc(e, t) {
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
function ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), b & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      pt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), gs(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    pt(e, n)
  );
}
function uo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), rs(e, n);
  }
}
function Fu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (o = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (o = l = t) : (l = l.next = t);
    } else o = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: l,
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
function Io(e, t, n, r) {
  var o = e.updateQueue;
  Et = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), i === null ? (l = a) : (i.next = a), (i = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== i &&
        (s === null ? (h.firstBaseUpdate = a) : (s.next = a),
        (h.lastBaseUpdate = u)));
  }
  if (l !== null) {
    var f = o.baseState;
    (i = 0), (h = a = u = null), (s = l);
    do {
      var v = s.lane,
        y = s.eventTime;
      if ((r & v) === v) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var S = e,
            g = s;
          switch (((v = t), (y = n), g.tag)) {
            case 1:
              if (((S = g.payload), typeof S == "function")) {
                f = S.call(y, f, v);
                break e;
              }
              f = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = g.payload),
                (v = typeof S == "function" ? S.call(y, f, v) : S),
                v == null)
              )
                break e;
              f = Y({}, f, v);
              break e;
            case 2:
              Et = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (v = o.effects),
          v === null ? (o.effects = [s]) : v.push(s));
      } else
        (y = {
          eventTime: y,
          lane: v,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((a = h = y), (u = f)) : (h = h.next = y),
          (i |= v);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (v = s),
          (s = v.next),
          (v.next = null),
          (o.lastBaseUpdate = v),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (u = f),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Zt |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function bu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(N(191, o));
        o.call(r);
      }
    }
}
var Lr = {},
  rt = Ft(Lr),
  wr = Ft(Lr),
  xr = Ft(Lr);
function Ht(e) {
  if (e === Lr) throw Error(N(174));
  return e;
}
function ws(e, t) {
  switch ((U(xr, t), U(wr, e), U(rt, Lr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ti(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ti(t, e));
  }
  B(rt), U(rt, t);
}
function On() {
  B(rt), B(wr), B(xr);
}
function Bc(e) {
  Ht(xr.current);
  var t = Ht(rt.current),
    n = ti(t, e.type);
  t !== n && (U(wr, e), U(rt, n));
}
function xs(e) {
  wr.current === e && (B(rt), B(wr));
}
var K = Ft(0);
function jo(e) {
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
var _l = [];
function Ss() {
  for (var e = 0; e < _l.length; e++)
    _l[e]._workInProgressVersionPrimary = null;
  _l.length = 0;
}
var ao = vt.ReactCurrentDispatcher,
  Rl = vt.ReactCurrentBatchConfig,
  Xt = 0,
  G = null,
  ee = null,
  ne = null,
  Do = !1,
  or = !1,
  Sr = 0,
  ov = 0;
function de() {
  throw Error(N(321));
}
function Es(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!He(e[n], t[n])) return !1;
  return !0;
}
function ks(e, t, n, r, o, l) {
  if (
    ((Xt = l),
    (G = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ao.current = e === null || e.memoizedState === null ? uv : av),
    (e = n(r, o)),
    or)
  ) {
    l = 0;
    do {
      if (((or = !1), (Sr = 0), 25 <= l)) throw Error(N(301));
      (l += 1),
        (ne = ee = null),
        (t.updateQueue = null),
        (ao.current = cv),
        (e = n(r, o));
    } while (or);
  }
  if (
    ((ao.current = zo),
    (t = ee !== null && ee.next !== null),
    (Xt = 0),
    (ne = ee = G = null),
    (Do = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function Cs() {
  var e = Sr !== 0;
  return (Sr = 0), e;
}
function Je() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (G.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function Fe() {
  if (ee === null) {
    var e = G.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = ne === null ? G.memoizedState : ne.next;
  if (t !== null) (ne = t), (ee = e);
  else {
    if (e === null) throw Error(N(310));
    (ee = e),
      (e = {
        memoizedState: ee.memoizedState,
        baseState: ee.baseState,
        baseQueue: ee.baseQueue,
        queue: ee.queue,
        next: null,
      }),
      ne === null ? (G.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function Er(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ll(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ee,
    o = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = l.next), (l.next = i);
    }
    (r.baseQueue = o = l), (n.pending = null);
  }
  if (o !== null) {
    (l = o.next), (r = r.baseState);
    var s = (i = null),
      u = null,
      a = l;
    do {
      var h = a.lane;
      if ((Xt & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var f = {
          lane: h,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = f), (i = r)) : (u = u.next = f),
          (G.lanes |= h),
          (Zt |= h);
      }
      a = a.next;
    } while (a !== null && a !== l);
    u === null ? (i = r) : (u.next = s),
      He(r, t.memoizedState) || (xe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (G.lanes |= l), (Zt |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ol(e) {
  var t = Fe(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    He(l, t.memoizedState) || (xe = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Hc() {}
function Qc(e, t) {
  var n = G,
    r = Fe(),
    o = t(),
    l = !He(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (xe = !0)),
    (r = r.queue),
    Ns(Yc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      kr(9, Gc.bind(null, n, r, o, t), void 0, null),
      oe === null)
    )
      throw Error(N(349));
    Xt & 30 || Kc(n, t, o);
  }
  return o;
}
function Kc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Xc(t) && Zc(e);
}
function Yc(e, t, n) {
  return n(function () {
    Xc(t) && Zc(e);
  });
}
function Xc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !He(e, n);
  } catch {
    return !0;
  }
}
function Zc(e) {
  var t = pt(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function $u(e) {
  var t = Je();
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
    (e = e.dispatch = sv.bind(null, G, e)),
    [t.memoizedState, e]
  );
}
function kr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = G.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (G.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Jc() {
  return Fe().memoizedState;
}
function co(e, t, n, r) {
  var o = Je();
  (G.flags |= e),
    (o.memoizedState = kr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Xo(e, t, n, r) {
  var o = Fe();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (ee !== null) {
    var i = ee.memoizedState;
    if (((l = i.destroy), r !== null && Es(r, i.deps))) {
      o.memoizedState = kr(t, n, l, r);
      return;
    }
  }
  (G.flags |= e), (o.memoizedState = kr(1 | t, n, l, r));
}
function Uu(e, t) {
  return co(8390656, 8, e, t);
}
function Ns(e, t) {
  return Xo(2048, 8, e, t);
}
function qc(e, t) {
  return Xo(4, 2, e, t);
}
function ed(e, t) {
  return Xo(4, 4, e, t);
}
function td(e, t) {
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
function nd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Xo(4, 4, td.bind(null, t, e), n)
  );
}
function Ps() {}
function rd(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Es(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function od(e, t) {
  var n = Fe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Es(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ld(e, t, n) {
  return Xt & 21
    ? (He(n, t) || ((n = cc()), (G.lanes |= n), (Zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (xe = !0)), (e.memoizedState = n));
}
function lv(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Rl.transition;
  Rl.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (Rl.transition = r);
  }
}
function id() {
  return Fe().memoizedState;
}
function iv(e, t, n) {
  var r = It(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    sd(e))
  )
    ud(t, n);
  else if (((n = Vc(e, t, n, r)), n !== null)) {
    var o = he();
    Be(n, e, r, o), ad(n, t, r);
  }
}
function sv(e, t, n) {
  var r = It(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sd(e)) ud(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          s = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), He(s, i))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), gs(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Vc(e, t, o, r)),
      n !== null && ((o = he()), Be(n, e, r, o), ad(n, t, r));
  }
}
function sd(e) {
  var t = e.alternate;
  return e === G || (t !== null && t === G);
}
function ud(e, t) {
  or = Do = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ad(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), rs(e, n);
  }
}
var zo = {
    readContext: Ae,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  uv = {
    readContext: Ae,
    useCallback: function (e, t) {
      return (Je().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ae,
    useEffect: Uu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        co(4194308, 4, td.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return co(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return co(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Je();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Je();
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
        (e = e.dispatch = iv.bind(null, G, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Je();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: $u,
    useDebugValue: Ps,
    useDeferredValue: function (e) {
      return (Je().memoizedState = e);
    },
    useTransition: function () {
      var e = $u(!1),
        t = e[0];
      return (e = lv.bind(null, e[1])), (Je().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = G,
        o = Je();
      if (Q) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), oe === null)) throw Error(N(349));
        Xt & 30 || Kc(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Uu(Yc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        kr(9, Gc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Je(),
        t = oe.identifierPrefix;
      if (Q) {
        var n = at,
          r = ut;
        (n = (r & ~(1 << (32 - We(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ov++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  av = {
    readContext: Ae,
    useCallback: rd,
    useContext: Ae,
    useEffect: Ns,
    useImperativeHandle: nd,
    useInsertionEffect: qc,
    useLayoutEffect: ed,
    useMemo: od,
    useReducer: Ll,
    useRef: Jc,
    useState: function () {
      return Ll(Er);
    },
    useDebugValue: Ps,
    useDeferredValue: function (e) {
      var t = Fe();
      return ld(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(Er)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: Hc,
    useSyncExternalStore: Qc,
    useId: id,
    unstable_isNewReconciler: !1,
  },
  cv = {
    readContext: Ae,
    useCallback: rd,
    useContext: Ae,
    useEffect: Ns,
    useImperativeHandle: nd,
    useInsertionEffect: qc,
    useLayoutEffect: ed,
    useMemo: od,
    useReducer: Ol,
    useRef: Jc,
    useState: function () {
      return Ol(Er);
    },
    useDebugValue: Ps,
    useDeferredValue: function (e) {
      var t = Fe();
      return ee === null ? (t.memoizedState = e) : ld(t, ee.memoizedState, e);
    },
    useTransition: function () {
      var e = Ol(Er)[0],
        t = Fe().memoizedState;
      return [e, t];
    },
    useMutableSource: Hc,
    useSyncExternalStore: Qc,
    useId: id,
    unstable_isNewReconciler: !1,
  };
function $e(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ei(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = he(),
      o = It(e),
      l = ct(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = Ot(e, l, o)),
      t !== null && (Be(t, e, o, r), uo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = he(),
      o = It(e),
      l = ct(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = Ot(e, l, o)),
      t !== null && (Be(t, e, o, r), uo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = he(),
      r = It(e),
      o = ct(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Ot(e, o, r)),
      t !== null && (Be(t, e, r, n), uo(t, e, r));
  },
};
function Vu(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !vr(n, r) || !vr(o, l)
        : !0
  );
}
function cd(e, t, n) {
  var r = !1,
    o = zt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ae(l))
      : ((o = Ee(t) ? Gt : me.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? _n(e, o) : zt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Wu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zo.enqueueReplaceState(t, t.state, null);
}
function ki(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), ys(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Ae(l))
    : ((l = Ee(t) ? Gt : me.current), (o.context = _n(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Ei(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Zo.enqueueReplaceState(o, o.state, null),
      Io(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Fp(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (l) {
    o =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Ml(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ci(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var dv = typeof WeakMap == "function" ? WeakMap : Map;
function dd(e, t, n) {
  (n = ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Fo || ((Fo = !0), (ji = r)), Ci(e, t);
    }),
    n
  );
}
function fd(e, t, n) {
  (n = ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ci(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        Ci(e, t),
          typeof r != "function" &&
            (Mt === null ? (Mt = new Set([this])) : Mt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Bu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dv();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Nv.bind(null, e, t, n)), t.then(e, e));
}
function Hu(e) {
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
function Qu(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ct(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var fv = vt.ReactCurrentOwner,
  xe = !1;
function ve(e, t, n, r) {
  t.child = e === null ? Uc(t, null, n, r) : Ln(t, e.child, n, r);
}
function Ku(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    kn(t, o),
    (r = ks(e, t, n, r, l, o)),
    (n = Cs()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        mt(e, t, o))
      : (Q && n && ds(t), (t.flags |= 1), ve(e, t, r, o), t.child)
  );
}
function Gu(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !js(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), pd(e, t, l, r, o))
      : ((e = vo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : vr), n(i, r) && e.ref === t.ref)
    )
      return mt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = jt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function pd(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (vr(l, r) && e.ref === t.ref)
      if (((xe = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (xe = !0);
      else return (t.lanes = e.lanes), mt(e, t, o);
  }
  return Ni(e, t, n, r, o);
}
function md(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(yn, Pe),
        (Pe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          U(yn, Pe),
          (Pe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        U(yn, Pe),
        (Pe |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(yn, Pe),
      (Pe |= r);
  return ve(e, t, o, n), t.child;
}
function vd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ni(e, t, n, r, o) {
  var l = Ee(n) ? Gt : me.current;
  return (
    (l = _n(t, l)),
    kn(t, o),
    (n = ks(e, t, n, r, l, o)),
    (r = Cs()),
    e !== null && !xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        mt(e, t, o))
      : (Q && r && ds(t), (t.flags |= 1), ve(e, t, n, o), t.child)
  );
}
function Yu(e, t, n, r, o) {
  if (Ee(n)) {
    var l = !0;
    _o(t);
  } else l = !1;
  if ((kn(t, o), t.stateNode === null))
    fo(e, t), cd(t, n, r), ki(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      s = t.memoizedProps;
    i.props = s;
    var u = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Ae(a))
      : ((a = Ee(n) ? Gt : me.current), (a = _n(t, a)));
    var h = n.getDerivedStateFromProps,
      f =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && Wu(t, i, r, a)),
      (Et = !1);
    var v = t.memoizedState;
    (i.state = v),
      Io(t, r, i, o),
      (u = t.memoizedState),
      s !== r || v !== u || Se.current || Et
        ? (typeof h == "function" && (Ei(t, n, h, r), (u = t.memoizedState)),
          (s = Et || Vu(t, n, s, r, v, u, a))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = a),
          (r = s))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Wc(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : $e(t.type, s)),
      (i.props = a),
      (f = t.pendingProps),
      (v = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ae(u))
        : ((u = Ee(n) ? Gt : me.current), (u = _n(t, u)));
    var y = n.getDerivedStateFromProps;
    (h =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== f || v !== u) && Wu(t, i, r, u)),
      (Et = !1),
      (v = t.memoizedState),
      (i.state = v),
      Io(t, r, i, o);
    var S = t.memoizedState;
    s !== f || v !== S || Se.current || Et
      ? (typeof y == "function" && (Ei(t, n, y, r), (S = t.memoizedState)),
        (a = Et || Vu(t, n, a, r, v, S, u) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, S, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, S, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && v === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (i.props = r),
        (i.state = S),
        (i.context = u),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && v === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Pi(e, t, n, r, l, o);
}
function Pi(e, t, n, r, o, l) {
  vd(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && ju(t, n, !1), mt(e, t, l);
  (r = t.stateNode), (fv.current = t);
  var s =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Ln(t, e.child, null, l)), (t.child = Ln(t, null, s, l)))
      : ve(e, t, s, l),
    (t.memoizedState = r.state),
    o && ju(t, n, !0),
    t.child
  );
}
function hd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Iu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Iu(e, t.context, !1),
    ws(e, t.containerInfo);
}
function Xu(e, t, n, r, o) {
  return Rn(), ps(o), (t.flags |= 256), ve(e, t, n, r), t.child;
}
var Ti = { dehydrated: null, treeContext: null, retryLane: 0 };
function _i(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function gd(e, t, n) {
  var r = t.pendingProps,
    o = K.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    U(K, o & 1),
    e === null)
  )
    return (
      xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = el(i, r, 0, null)),
              (e = Kt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = _i(n)),
              (t.memoizedState = Ti),
              e)
            : Ts(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return pv(e, t, i, r, s, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = jt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (l = jt(s, l)) : ((l = Kt(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? _i(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ti),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = jt(l, { mode: "visible", children: r.children })),
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
function Ts(e, t) {
  return (
    (t = el({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Kr(e, t, n, r) {
  return (
    r !== null && ps(r),
    Ln(t, e.child, null, n),
    (e = Ts(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function pv(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ml(Error(N(422)))), Kr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (o = t.mode),
          (r = el({ mode: "visible", children: r.children }, o, 0, null)),
          (l = Kt(l, o, i, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && Ln(t, e.child, null, i),
          (t.child.memoizedState = _i(i)),
          (t.memoizedState = Ti),
          l);
  if (!(t.mode & 1)) return Kr(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (l = Error(N(419))), (r = Ml(l, r, void 0)), Kr(e, t, i, r);
  }
  if (((s = (i & e.childLanes) !== 0), xe || s)) {
    if (((r = oe), r !== null)) {
      switch (i & -i) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | i) ? 0 : o),
        o !== 0 &&
          o !== l.retryLane &&
          ((l.retryLane = o), pt(e, o), Be(r, e, o, -1));
    }
    return Is(), (r = Ml(Error(N(421)))), Kr(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Pv.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Te = Lt(o.nextSibling)),
      (_e = t),
      (Q = !0),
      (Ve = null),
      e !== null &&
        ((Ie[je++] = ut),
        (Ie[je++] = at),
        (Ie[je++] = Yt),
        (ut = e.id),
        (at = e.overflow),
        (Yt = t)),
      (t = Ts(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Zu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Si(e.return, t, n);
}
function Il(e, t, n, r, o) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = o));
}
function yd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((ve(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zu(e, n, t);
        else if (e.tag === 19) Zu(e, n, t);
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
  if ((U(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && jo(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Il(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && jo(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Il(t, !0, n, null, l);
        break;
      case "together":
        Il(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function fo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = jt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function mv(e, t, n) {
  switch (t.tag) {
    case 3:
      hd(t), Rn();
      break;
    case 5:
      Bc(t);
      break;
    case 1:
      Ee(t.type) && _o(t);
      break;
    case 4:
      ws(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      U(Oo, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? gd(e, t, n)
            : (U(K, K.current & 1),
              (e = mt(e, t, n)),
              e !== null ? e.sibling : null);
      U(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return yd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        U(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), md(e, t, n);
  }
  return mt(e, t, n);
}
var wd, Ri, xd, Sd;
wd = function (e, t) {
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
Ri = function () {};
xd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Ht(rt.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Zl(e, o)), (r = Zl(e, r)), (l = []);
        break;
      case "select":
        (o = Y({}, o, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = ei(e, o)), (r = ei(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Po);
    }
    ni(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var s = o[a];
          for (i in s) s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (ur.hasOwnProperty(a)
              ? l || (l = [])
              : (l = l || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                s[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (l || (l = []), l.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (l = l || []).push(a, u))
            : a === "children"
              ? (typeof u != "string" && typeof u != "number") ||
                (l = l || []).push(a, "" + u)
              : a !== "suppressContentEditableWarning" &&
                a !== "suppressHydrationWarning" &&
                (ur.hasOwnProperty(a)
                  ? (u != null && a === "onScroll" && W("scroll", e),
                    l || s === u || (l = []))
                  : (l = l || []).push(a, u));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Sd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Hn(e, t) {
  if (!Q)
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
function fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function vv(e, t, n) {
  var r = t.pendingProps;
  switch ((fs(t), t.tag)) {
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
      return fe(t), null;
    case 1:
      return Ee(t.type) && To(), fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        On(),
        B(Se),
        B(me),
        Ss(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Hr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ve !== null && (Ai(Ve), (Ve = null)))),
        Ri(e, t),
        fe(t),
        null
      );
    case 5:
      xs(t);
      var o = Ht(xr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        xd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return fe(t), null;
        }
        if (((e = Ht(rt.current)), Hr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[et] = t), (r[yr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              W("cancel", r), W("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              W("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Jn.length; o++) W(Jn[o], r);
              break;
            case "source":
              W("error", r);
              break;
            case "img":
            case "image":
            case "link":
              W("error", r), W("load", r);
              break;
            case "details":
              W("toggle", r);
              break;
            case "input":
              iu(r, l), W("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                W("invalid", r);
              break;
            case "textarea":
              uu(r, l), W("invalid", r);
          }
          ni(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var s = l[i];
              i === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Br(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (l.suppressHydrationWarning !== !0 &&
                      Br(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : ur.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              zr(r), su(r, l, !0);
              break;
            case "textarea":
              zr(r), au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Po);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ya(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[et] = t),
            (e[yr] = r),
            wd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ri(n, r)), n)) {
              case "dialog":
                W("cancel", e), W("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                W("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Jn.length; o++) W(Jn[o], e);
                o = r;
                break;
              case "source":
                W("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                W("error", e), W("load", e), (o = r);
                break;
              case "details":
                W("toggle", e), (o = r);
                break;
              case "input":
                iu(e, r), (o = Zl(e, r)), W("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Y({}, r, { value: void 0 })),
                  W("invalid", e);
                break;
              case "textarea":
                uu(e, r), (o = ei(e, r)), W("invalid", e);
                break;
              default:
                o = r;
            }
            ni(n, o), (s = o);
            for (l in s)
              if (s.hasOwnProperty(l)) {
                var u = s[l];
                l === "style"
                  ? Ja(e, u)
                  : l === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Xa(e, u))
                    : l === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && ar(e, u)
                        : typeof u == "number" && ar(e, "" + u)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (ur.hasOwnProperty(l)
                          ? u != null && l === "onScroll" && W("scroll", e)
                          : u != null && Zi(e, l, u, i));
              }
            switch (n) {
              case "input":
                zr(e), su(e, r, !1);
                break;
              case "textarea":
                zr(e), au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Dt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? wn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Po);
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
      return fe(t), null;
    case 6:
      if (e && t.stateNode != null) Sd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = Ht(xr.current)), Ht(rt.current), Hr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[et] = t),
            (l = r.nodeValue !== n) && ((e = _e), e !== null))
          )
            switch (e.tag) {
              case 3:
                Br(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Br(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[et] = t),
            (t.stateNode = r);
      }
      return fe(t), null;
    case 13:
      if (
        (B(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Te !== null && t.mode & 1 && !(t.flags & 128))
          bc(), Rn(), (t.flags |= 98560), (l = !1);
        else if (((l = Hr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(N(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(N(317));
            l[et] = t;
          } else
            Rn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          fe(t), (l = !1);
        } else Ve !== null && (Ai(Ve), (Ve = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? te === 0 && (te = 3) : Is())),
          t.updateQueue !== null && (t.flags |= 4),
          fe(t),
          null);
    case 4:
      return (
        On(), Ri(e, t), e === null && hr(t.stateNode.containerInfo), fe(t), null
      );
    case 10:
      return hs(t.type._context), fe(t), null;
    case 17:
      return Ee(t.type) && To(), fe(t), null;
    case 19:
      if ((B(K), (l = t.memoizedState), l === null)) return fe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Hn(l, !1);
        else {
          if (te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = jo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Hn(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            J() > In &&
            ((t.flags |= 128), (r = !0), Hn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = jo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Hn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !Q)
            )
              return fe(t), null;
          } else
            2 * J() - l.renderingStartTime > In &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Hn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = J()),
          (t.sibling = null),
          (n = K.current),
          U(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (fe(t), null);
    case 22:
    case 23:
      return (
        Ms(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Pe & 1073741824 && (fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function hv(e, t) {
  switch ((fs(t), t.tag)) {
    case 1:
      return (
        Ee(t.type) && To(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        On(),
        B(Se),
        B(me),
        Ss(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return xs(t), null;
    case 13:
      if ((B(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        Rn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(K), null;
    case 4:
      return On(), null;
    case 10:
      return hs(t.type._context), null;
    case 22:
    case 23:
      return Ms(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gr = !1,
  pe = !1,
  gv = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function gn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Li(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Ju = !1;
function yv(e, t) {
  if (((pi = ko), (e = Pc()), cs(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            s = -1,
            u = -1,
            a = 0,
            h = 0,
            f = e,
            v = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = i + o),
                f !== l || (r !== 0 && f.nodeType !== 3) || (u = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (v = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (v === n && ++a === o && (s = i),
                v === l && ++h === r && (u = i),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = v), (v = f.parentNode);
            }
            f = y;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (mi = { focusedElem: e, selectionRange: n }, ko = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var g = S.memoizedProps,
                    E = S.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : $e(t.type, g),
                      E,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (x) {
          Z(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (S = Ju), (Ju = !1), S;
}
function lr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Li(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Jo(e, t) {
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
function Oi(e) {
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
function Ed(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ed(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[et], delete t[yr], delete t[gi], delete t[ev], delete t[tv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function qu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kd(e.return)) return null;
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
function Mi(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Po));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mi(e, t, n), e = e.sibling; e !== null; ) Mi(e, t, n), (e = e.sibling);
}
function Ii(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), (e = e.sibling);
}
var se = null,
  Ue = !1;
function ht(e, t, n) {
  for (n = n.child; n !== null; ) Cd(e, t, n), (n = n.sibling);
}
function Cd(e, t, n) {
  if (nt && typeof nt.onCommitFiberUnmount == "function")
    try {
      nt.onCommitFiberUnmount(Bo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      pe || gn(n, t);
    case 6:
      var r = se,
        o = Ue;
      (se = null),
        ht(e, t, n),
        (se = r),
        (Ue = o),
        se !== null &&
          (Ue
            ? ((e = se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null &&
        (Ue
          ? ((e = se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Pl(e.parentNode, n)
              : e.nodeType === 1 && Pl(e, n),
            pr(e))
          : Pl(se, n.stateNode));
      break;
    case 4:
      (r = se),
        (o = Ue),
        (se = n.stateNode.containerInfo),
        (Ue = !0),
        ht(e, t, n),
        (se = r),
        (Ue = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Li(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      ht(e, t, n);
      break;
    case 1:
      if (
        !pe &&
        (gn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Z(n, t, s);
        }
      ht(e, t, n);
      break;
    case 21:
      ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((pe = (r = pe) || n.memoizedState !== null), ht(e, t, n), (pe = r))
        : ht(e, t, n);
      break;
    default:
      ht(e, t, n);
  }
}
function ea(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new gv()),
      t.forEach(function (r) {
        var o = Tv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function be(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          s = i;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (se = s.stateNode), (Ue = !1);
              break e;
            case 3:
              (se = s.stateNode.containerInfo), (Ue = !0);
              break e;
            case 4:
              (se = s.stateNode.containerInfo), (Ue = !0);
              break e;
          }
          s = s.return;
        }
        if (se === null) throw Error(N(160));
        Cd(l, i, o), (se = null), (Ue = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        Z(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Nd(t, e), (t = t.sibling);
}
function Nd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((be(t, e), Ze(e), r & 4)) {
        try {
          lr(3, e, e.return), Jo(3, e);
        } catch (g) {
          Z(e, e.return, g);
        }
        try {
          lr(5, e, e.return);
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      break;
    case 1:
      be(t, e), Ze(e), r & 512 && n !== null && gn(n, n.return);
      break;
    case 5:
      if (
        (be(t, e),
        Ze(e),
        r & 512 && n !== null && gn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ar(o, "");
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && l.type === "radio" && l.name != null && Ka(o, l),
              ri(s, i);
            var a = ri(s, l);
            for (i = 0; i < u.length; i += 2) {
              var h = u[i],
                f = u[i + 1];
              h === "style"
                ? Ja(o, f)
                : h === "dangerouslySetInnerHTML"
                  ? Xa(o, f)
                  : h === "children"
                    ? ar(o, f)
                    : Zi(o, h, f, a);
            }
            switch (s) {
              case "input":
                Jl(o, l);
                break;
              case "textarea":
                Ga(o, l);
                break;
              case "select":
                var v = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var y = l.value;
                y != null
                  ? wn(o, !!l.multiple, y, !1)
                  : v !== !!l.multiple &&
                    (l.defaultValue != null
                      ? wn(o, !!l.multiple, l.defaultValue, !0)
                      : wn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[yr] = l;
          } catch (g) {
            Z(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((be(t, e), Ze(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (g) {
          Z(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (be(t, e), Ze(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          pr(t.containerInfo);
        } catch (g) {
          Z(e, e.return, g);
        }
      break;
    case 4:
      be(t, e), Ze(e);
      break;
    case 13:
      be(t, e),
        Ze(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ls = J())),
        r & 4 && ea(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((pe = (a = pe) || h), be(t, e), (pe = a)) : be(t, e),
        Ze(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (R = e, h = e.child; h !== null; ) {
            for (f = R = h; R !== null; ) {
              switch (((v = R), (y = v.child), v.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  lr(4, v, v.return);
                  break;
                case 1:
                  gn(v, v.return);
                  var S = v.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = v), (n = v.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (g) {
                      Z(r, n, g);
                    }
                  }
                  break;
                case 5:
                  gn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    na(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = v), (R = y)) : na(f);
            }
            h = h.sibling;
          }
        e: for (h = null, f = e; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                (o = f.stateNode),
                  a
                    ? ((l = o.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((s = f.stateNode),
                      (u = f.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = Za("display", i)));
              } catch (g) {
                Z(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (h === null)
              try {
                f.stateNode.nodeValue = a ? "" : f.memoizedProps;
              } catch (g) {
                Z(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            h === f && (h = null), (f = f.return);
          }
          h === f && (h = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      be(t, e), Ze(e), r & 4 && ea(e);
      break;
    case 21:
      break;
    default:
      be(t, e), Ze(e);
  }
}
function Ze(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ar(o, ""), (r.flags &= -33));
          var l = qu(e);
          Ii(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            s = qu(e);
          Mi(e, s, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      Z(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function wv(e, t, n) {
  (R = e), Pd(e);
}
function Pd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Gr;
      if (!i) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || pe;
        s = Gr;
        var a = pe;
        if (((Gr = i), (pe = u) && !a))
          for (R = o; R !== null; )
            (i = R),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ra(o)
                : u !== null
                  ? ((u.return = i), (R = u))
                  : ra(o);
        for (; l !== null; ) (R = l), Pd(l), (l = l.sibling);
        (R = o), (Gr = s), (pe = a);
      }
      ta(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (R = l)) : ta(e);
  }
}
function ta(e) {
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
              pe || Jo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !pe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : $e(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && bu(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                bu(t, i, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var h = a.memoizedState;
                  if (h !== null) {
                    var f = h.dehydrated;
                    f !== null && pr(f);
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
              throw Error(N(163));
          }
        pe || (t.flags & 512 && Oi(t));
      } catch (v) {
        Z(t, t.return, v);
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
function na(e) {
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
function ra(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Jo(4, t);
          } catch (u) {
            Z(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Z(t, o, u);
            }
          }
          var l = t.return;
          try {
            Oi(t);
          } catch (u) {
            Z(t, l, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Oi(t);
          } catch (u) {
            Z(t, i, u);
          }
      }
    } catch (u) {
      Z(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (R = s);
      break;
    }
    R = t.return;
  }
}
var xv = Math.ceil,
  Ao = vt.ReactCurrentDispatcher,
  _s = vt.ReactCurrentOwner,
  ze = vt.ReactCurrentBatchConfig,
  b = 0,
  oe = null,
  q = null,
  ue = 0,
  Pe = 0,
  yn = Ft(0),
  te = 0,
  Cr = null,
  Zt = 0,
  qo = 0,
  Rs = 0,
  ir = null,
  we = null,
  Ls = 0,
  In = 1 / 0,
  it = null,
  Fo = !1,
  ji = null,
  Mt = null,
  Yr = !1,
  Pt = null,
  bo = 0,
  sr = 0,
  Di = null,
  po = -1,
  mo = 0;
function he() {
  return b & 6 ? J() : po !== -1 ? po : (po = J());
}
function It(e) {
  return e.mode & 1
    ? b & 2 && ue !== 0
      ? ue & -ue
      : rv.transition !== null
        ? (mo === 0 && (mo = cc()), mo)
        : ((e = $),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : gc(e.type))),
          e)
    : 1;
}
function Be(e, t, n, r) {
  if (50 < sr) throw ((sr = 0), (Di = null), Error(N(185)));
  Tr(e, n, r),
    (!(b & 2) || e !== oe) &&
      (e === oe && (!(b & 2) && (qo |= n), te === 4 && Ct(e, ue)),
      ke(e, r),
      n === 1 && b === 0 && !(t.mode & 1) && ((In = J() + 500), Yo && bt()));
}
function ke(e, t) {
  var n = e.callbackNode;
  rm(e, t);
  var r = Eo(e, e === oe ? ue : 0);
  if (r === 0)
    n !== null && fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fu(n), t === 1))
      e.tag === 0 ? nv(oa.bind(null, e)) : zc(oa.bind(null, e)),
        Jm(function () {
          !(b & 6) && bt();
        }),
        (n = null);
    else {
      switch (dc(r)) {
        case 1:
          n = ns;
          break;
        case 4:
          n = uc;
          break;
        case 16:
          n = So;
          break;
        case 536870912:
          n = ac;
          break;
        default:
          n = So;
      }
      n = jd(n, Td.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Td(e, t) {
  if (((po = -1), (mo = 0), b & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (Cn() && e.callbackNode !== n) return null;
  var r = Eo(e, e === oe ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = $o(e, r);
  else {
    t = r;
    var o = b;
    b |= 2;
    var l = Rd();
    (oe !== e || ue !== t) && ((it = null), (In = J() + 500), Qt(e, t));
    do
      try {
        kv();
        break;
      } catch (s) {
        _d(e, s);
      }
    while (!0);
    vs(),
      (Ao.current = l),
      (b = o),
      q !== null ? (t = 0) : ((oe = null), (ue = 0), (t = te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ui(e)), o !== 0 && ((r = o), (t = zi(e, o)))), t === 1)
    )
      throw ((n = Cr), Qt(e, 0), Ct(e, r), ke(e, J()), n);
    if (t === 6) Ct(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Sv(o) &&
          ((t = $o(e, r)),
          t === 2 && ((l = ui(e)), l !== 0 && ((r = l), (t = zi(e, l)))),
          t === 1))
      )
        throw ((n = Cr), Qt(e, 0), Ct(e, r), ke(e, J()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Vt(e, we, it);
          break;
        case 3:
          if (
            (Ct(e, r), (r & 130023424) === r && ((t = Ls + 500 - J()), 10 < t))
          ) {
            if (Eo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              he(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = hi(Vt.bind(null, e, we, it), t);
            break;
          }
          Vt(e, we, it);
          break;
        case 4:
          if ((Ct(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - We(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = J() - r),
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
                          : 1960 * xv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = hi(Vt.bind(null, e, we, it), r);
            break;
          }
          Vt(e, we, it);
          break;
        case 5:
          Vt(e, we, it);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return ke(e, J()), e.callbackNode === n ? Td.bind(null, e) : null;
}
function zi(e, t) {
  var n = ir;
  return (
    e.current.memoizedState.isDehydrated && (Qt(e, t).flags |= 256),
    (e = $o(e, t)),
    e !== 2 && ((t = we), (we = n), t !== null && Ai(t)),
    e
  );
}
function Ai(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function Sv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!He(l(), o)) return !1;
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
function Ct(e, t) {
  for (
    t &= ~Rs,
      t &= ~qo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - We(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function oa(e) {
  if (b & 6) throw Error(N(327));
  Cn();
  var t = Eo(e, 0);
  if (!(t & 1)) return ke(e, J()), null;
  var n = $o(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ui(e);
    r !== 0 && ((t = r), (n = zi(e, r)));
  }
  if (n === 1) throw ((n = Cr), Qt(e, 0), Ct(e, t), ke(e, J()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Vt(e, we, it),
    ke(e, J()),
    null
  );
}
function Os(e, t) {
  var n = b;
  b |= 1;
  try {
    return e(t);
  } finally {
    (b = n), b === 0 && ((In = J() + 500), Yo && bt());
  }
}
function Jt(e) {
  Pt !== null && Pt.tag === 0 && !(b & 6) && Cn();
  var t = b;
  b |= 1;
  var n = ze.transition,
    r = $;
  try {
    if (((ze.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (ze.transition = n), (b = t), !(b & 6) && bt();
  }
}
function Ms() {
  (Pe = yn.current), B(yn);
}
function Qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zm(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((fs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && To();
          break;
        case 3:
          On(), B(Se), B(me), Ss();
          break;
        case 5:
          xs(r);
          break;
        case 4:
          On();
          break;
        case 13:
          B(K);
          break;
        case 19:
          B(K);
          break;
        case 10:
          hs(r.type._context);
          break;
        case 22:
        case 23:
          Ms();
      }
      n = n.return;
    }
  if (
    ((oe = e),
    (q = e = jt(e.current, null)),
    (ue = Pe = t),
    (te = 0),
    (Cr = null),
    (Rs = qo = Zt = 0),
    (we = ir = null),
    Bt !== null)
  ) {
    for (t = 0; t < Bt.length; t++)
      if (((n = Bt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Bt = null;
  }
  return e;
}
function _d(e, t) {
  do {
    var n = q;
    try {
      if ((vs(), (ao.current = zo), Do)) {
        for (var r = G.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Do = !1;
      }
      if (
        ((Xt = 0),
        (ne = ee = G = null),
        (or = !1),
        (Sr = 0),
        (_s.current = null),
        n === null || n.return === null)
      ) {
        (te = 1), (Cr = t), (q = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          s = n,
          u = t;
        if (
          ((t = ue),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            h = s,
            f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var v = h.alternate;
            v
              ? ((h.updateQueue = v.updateQueue),
                (h.memoizedState = v.memoizedState),
                (h.lanes = v.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = Hu(i);
          if (y !== null) {
            (y.flags &= -257),
              Qu(y, i, s, l, t),
              y.mode & 1 && Bu(l, a, t),
              (t = y),
              (u = a);
            var S = t.updateQueue;
            if (S === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else S.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Bu(l, a, t), Is();
              break e;
            }
            u = Error(N(426));
          }
        } else if (Q && s.mode & 1) {
          var E = Hu(i);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Qu(E, i, s, l, t),
              ps(Mn(u, s));
            break e;
          }
        }
        (l = u = Mn(u, s)),
          te !== 4 && (te = 2),
          ir === null ? (ir = [l]) : ir.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = dd(l, u, t);
              Fu(l, d);
              break e;
            case 1:
              s = u;
              var c = l.type,
                p = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Mt === null || !Mt.has(p))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var x = fd(l, s, t);
                Fu(l, x);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Od(n);
    } catch (k) {
      (t = k), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rd() {
  var e = Ao.current;
  return (Ao.current = zo), e === null ? zo : e;
}
function Is() {
  (te === 0 || te === 3 || te === 2) && (te = 4),
    oe === null || (!(Zt & 268435455) && !(qo & 268435455)) || Ct(oe, ue);
}
function $o(e, t) {
  var n = b;
  b |= 2;
  var r = Rd();
  (oe !== e || ue !== t) && ((it = null), Qt(e, t));
  do
    try {
      Ev();
      break;
    } catch (o) {
      _d(e, o);
    }
  while (!0);
  if ((vs(), (b = n), (Ao.current = r), q !== null)) throw Error(N(261));
  return (oe = null), (ue = 0), te;
}
function Ev() {
  for (; q !== null; ) Ld(q);
}
function kv() {
  for (; q !== null && !Gp(); ) Ld(q);
}
function Ld(e) {
  var t = Id(e.alternate, e, Pe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Od(e) : (q = t),
    (_s.current = null);
}
function Od(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = hv(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (te = 6), (q = null);
        return;
      }
    } else if (((n = vv(n, t, Pe)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  te === 0 && (te = 5);
}
function Vt(e, t, n) {
  var r = $,
    o = ze.transition;
  try {
    (ze.transition = null), ($ = 1), Cv(e, t, n, r);
  } finally {
    (ze.transition = o), ($ = r);
  }
  return null;
}
function Cv(e, t, n, r) {
  do Cn();
  while (Pt !== null);
  if (b & 6) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (om(e, l),
    e === oe && ((q = oe = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Yr ||
      ((Yr = !0),
      jd(So, function () {
        return Cn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = ze.transition), (ze.transition = null);
    var i = $;
    $ = 1;
    var s = b;
    (b |= 4),
      (_s.current = null),
      yv(e, n),
      Nd(n, e),
      Bm(mi),
      (ko = !!pi),
      (mi = pi = null),
      (e.current = n),
      wv(n),
      Yp(),
      (b = s),
      ($ = i),
      (ze.transition = l);
  } else e.current = n;
  if (
    (Yr && ((Yr = !1), (Pt = e), (bo = o)),
    (l = e.pendingLanes),
    l === 0 && (Mt = null),
    Jp(n.stateNode),
    ke(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Fo) throw ((Fo = !1), (e = ji), (ji = null), e);
  return (
    bo & 1 && e.tag !== 0 && Cn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Di ? sr++ : ((sr = 0), (Di = e))) : (sr = 0),
    bt(),
    null
  );
}
function Cn() {
  if (Pt !== null) {
    var e = dc(bo),
      t = ze.transition,
      n = $;
    try {
      if (((ze.transition = null), ($ = 16 > e ? 16 : e), Pt === null))
        var r = !1;
      else {
        if (((e = Pt), (Pt = null), (bo = 0), b & 6)) throw Error(N(331));
        var o = b;
        for (b |= 4, R = e.current; R !== null; ) {
          var l = R,
            i = l.child;
          if (R.flags & 16) {
            var s = l.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (R = a; R !== null; ) {
                  var h = R;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lr(8, h, l);
                  }
                  var f = h.child;
                  if (f !== null) (f.return = h), (R = f);
                  else
                    for (; R !== null; ) {
                      h = R;
                      var v = h.sibling,
                        y = h.return;
                      if ((Ed(h), h === a)) {
                        R = null;
                        break;
                      }
                      if (v !== null) {
                        (v.return = y), (R = v);
                        break;
                      }
                      R = y;
                    }
                }
              }
              var S = l.alternate;
              if (S !== null) {
                var g = S.child;
                if (g !== null) {
                  S.child = null;
                  do {
                    var E = g.sibling;
                    (g.sibling = null), (g = E);
                  } while (g !== null);
                }
              }
              R = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (R = i);
          else
            e: for (; R !== null; ) {
              if (((l = R), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    lr(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (R = d);
                break e;
              }
              R = l.return;
            }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          i = R;
          var p = i.child;
          if (i.subtreeFlags & 2064 && p !== null) (p.return = i), (R = p);
          else
            e: for (i = c; R !== null; ) {
              if (((s = R), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jo(9, s);
                  }
                } catch (k) {
                  Z(s, s.return, k);
                }
              if (s === i) {
                R = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (R = x);
                break e;
              }
              R = s.return;
            }
        }
        if (
          ((b = o), bt(), nt && typeof nt.onPostCommitFiberRoot == "function")
        )
          try {
            nt.onPostCommitFiberRoot(Bo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (ze.transition = t);
    }
  }
  return !1;
}
function la(e, t, n) {
  (t = Mn(n, t)),
    (t = dd(e, t, 1)),
    (e = Ot(e, t, 1)),
    (t = he()),
    e !== null && (Tr(e, 1, t), ke(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) la(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        la(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Mt === null || !Mt.has(r)))
        ) {
          (e = Mn(n, e)),
            (e = fd(t, e, 1)),
            (t = Ot(t, e, 1)),
            (e = he()),
            t !== null && (Tr(t, 1, e), ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Nv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = he()),
    (e.pingedLanes |= e.suspendedLanes & n),
    oe === e &&
      (ue & n) === n &&
      (te === 4 || (te === 3 && (ue & 130023424) === ue && 500 > J() - Ls)
        ? Qt(e, 0)
        : (Rs |= n)),
    ke(e, t);
}
function Md(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = br), (br <<= 1), !(br & 130023424) && (br = 4194304))
      : (t = 1));
  var n = he();
  (e = pt(e, t)), e !== null && (Tr(e, t, n), ke(e, n));
}
function Pv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Md(e, n);
}
function Tv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Md(e, n);
}
var Id;
Id = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Se.current) xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (xe = !1), mv(e, t, n);
      xe = !!(e.flags & 131072);
    }
  else (xe = !1), Q && t.flags & 1048576 && Ac(t, Lo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      fo(e, t), (e = t.pendingProps);
      var o = _n(t, me.current);
      kn(t, n), (o = ks(null, t, r, e, o, n));
      var l = Cs();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ee(r) ? ((l = !0), _o(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ys(t),
            (o.updater = Zo),
            (t.stateNode = o),
            (o._reactInternals = t),
            ki(t, r, e, n),
            (t = Pi(null, t, r, !0, l, n)))
          : ((t.tag = 0), Q && l && ds(t), ve(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (fo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Rv(r)),
          (e = $e(r, e)),
          o)
        ) {
          case 0:
            t = Ni(null, t, r, e, n);
            break e;
          case 1:
            t = Yu(null, t, r, e, n);
            break e;
          case 11:
            t = Ku(null, t, r, e, n);
            break e;
          case 14:
            t = Gu(null, t, r, $e(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $e(r, o)),
        Ni(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $e(r, o)),
        Yu(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((hd(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Wc(e, t),
          Io(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (o = Mn(Error(N(423)), t)), (t = Xu(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Mn(Error(N(424)), t)), (t = Xu(e, t, r, n, o));
            break e;
          } else
            for (
              Te = Lt(t.stateNode.containerInfo.firstChild),
                _e = t,
                Q = !0,
                Ve = null,
                n = Uc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Rn(), r === o)) {
            t = mt(e, t, n);
            break e;
          }
          ve(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Bc(t),
        e === null && xi(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        vi(r, o) ? (i = null) : l !== null && vi(r, l) && (t.flags |= 32),
        vd(e, t),
        ve(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && xi(t), null;
    case 13:
      return gd(e, t, n);
    case 4:
      return (
        ws(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ln(t, null, r, n)) : ve(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $e(r, o)),
        Ku(e, t, r, o, n)
      );
    case 7:
      return ve(e, t, t.pendingProps, n), t.child;
    case 8:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ve(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          U(Oo, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (He(l.value, i)) {
            if (l.children === o.children && !Se.current) {
              t = mt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var s = l.dependencies;
              if (s !== null) {
                i = l.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (l.tag === 1) {
                      (u = ct(-1, n & -n)), (u.tag = 2);
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (u.next = u)
                          : ((u.next = h.next), (h.next = u)),
                          (a.pending = u);
                      }
                    }
                    (l.lanes |= n),
                      (u = l.alternate),
                      u !== null && (u.lanes |= n),
                      Si(l.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (s = i.alternate),
                  s !== null && (s.lanes |= n),
                  Si(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        ve(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        kn(t, n),
        (o = Ae(o)),
        (r = r(o)),
        (t.flags |= 1),
        ve(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = $e(r, t.pendingProps)),
        (o = $e(r.type, o)),
        Gu(e, t, r, o, n)
      );
    case 15:
      return pd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : $e(r, o)),
        fo(e, t),
        (t.tag = 1),
        Ee(r) ? ((e = !0), _o(t)) : (e = !1),
        kn(t, n),
        cd(t, r, o),
        ki(t, r, o, n),
        Pi(null, t, r, !0, e, n)
      );
    case 19:
      return yd(e, t, n);
    case 22:
      return md(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function jd(e, t) {
  return sc(e, t);
}
function _v(e, t, n, r) {
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
function De(e, t, n, r) {
  return new _v(e, t, n, r);
}
function js(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Rv(e) {
  if (typeof e == "function") return js(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === qi)) return 11;
    if (e === es) return 14;
  }
  return 2;
}
function jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = De(e.tag, t, e.key, e.mode)),
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
function vo(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) js(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case un:
        return Kt(n.children, o, l, t);
      case Ji:
        (i = 8), (o |= 8);
        break;
      case Kl:
        return (
          (e = De(12, n, t, o | 2)), (e.elementType = Kl), (e.lanes = l), e
        );
      case Gl:
        return (e = De(13, n, t, o)), (e.elementType = Gl), (e.lanes = l), e;
      case Yl:
        return (e = De(19, n, t, o)), (e.elementType = Yl), (e.lanes = l), e;
      case Ba:
        return el(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Va:
              i = 10;
              break e;
            case Wa:
              i = 9;
              break e;
            case qi:
              i = 11;
              break e;
            case es:
              i = 14;
              break e;
            case St:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = De(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Kt(e, t, n, r) {
  return (e = De(7, e, r, t)), (e.lanes = n), e;
}
function el(e, t, n, r) {
  return (
    (e = De(22, e, r, t)),
    (e.elementType = Ba),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function jl(e, t, n) {
  return (e = De(6, e, null, t)), (e.lanes = n), e;
}
function Dl(e, t, n) {
  return (
    (t = De(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Lv(e, t, n, r, o) {
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
    (this.eventTimes = vl(0)),
    (this.expirationTimes = vl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ds(e, t, n, r, o, l, i, s, u) {
  return (
    (e = new Lv(e, t, n, s, u)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = De(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ys(l),
    e
  );
}
function Ov(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: sn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dd(e) {
  if (!e) return zt;
  e = e._reactInternals;
  e: {
    if (tn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ee(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ee(n)) return Dc(e, n, t);
  }
  return t;
}
function zd(e, t, n, r, o, l, i, s, u) {
  return (
    (e = Ds(n, r, !0, e, o, l, i, s, u)),
    (e.context = Dd(null)),
    (n = e.current),
    (r = he()),
    (o = It(n)),
    (l = ct(r, o)),
    (l.callback = t ?? null),
    Ot(n, l, o),
    (e.current.lanes = o),
    Tr(e, o, r),
    ke(e, r),
    e
  );
}
function tl(e, t, n, r) {
  var o = t.current,
    l = he(),
    i = It(o);
  return (
    (n = Dd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ct(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(o, t, i)),
    e !== null && (Be(e, o, i, l), uo(e, o, i)),
    i
  );
}
function Uo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ia(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zs(e, t) {
  ia(e, t), (e = e.alternate) && ia(e, t);
}
function Mv() {
  return null;
}
var Ad =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function As(e) {
  this._internalRoot = e;
}
nl.prototype.render = As.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  tl(e, t, null, null);
};
nl.prototype.unmount = As.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jt(function () {
      tl(null, e, null, null);
    }),
      (t[ft] = null);
  }
};
function nl(e) {
  this._internalRoot = e;
}
nl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = mc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < kt.length && t !== 0 && t < kt[n].priority; n++);
    kt.splice(n, 0, e), n === 0 && hc(e);
  }
};
function Fs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function rl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function sa() {}
function Iv(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = Uo(i);
        l.call(a);
      };
    }
    var i = zd(t, r, e, 0, null, !1, !1, "", sa);
    return (
      (e._reactRootContainer = i),
      (e[ft] = i.current),
      hr(e.nodeType === 8 ? e.parentNode : e),
      Jt(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = Uo(u);
      s.call(a);
    };
  }
  var u = Ds(e, 0, !1, null, null, !1, !1, "", sa);
  return (
    (e._reactRootContainer = u),
    (e[ft] = u.current),
    hr(e.nodeType === 8 ? e.parentNode : e),
    Jt(function () {
      tl(t, u, n, r);
    }),
    u
  );
}
function ol(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = Uo(i);
        s.call(u);
      };
    }
    tl(t, i, e, o);
  } else i = Iv(n, t, e, o, r);
  return Uo(i);
}
fc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zn(t.pendingLanes);
        n !== 0 &&
          (rs(t, n | 1), ke(t, J()), !(b & 6) && ((In = J() + 500), bt()));
      }
      break;
    case 13:
      Jt(function () {
        var r = pt(e, 1);
        if (r !== null) {
          var o = he();
          Be(r, e, 1, o);
        }
      }),
        zs(e, 1);
  }
};
os = function (e) {
  if (e.tag === 13) {
    var t = pt(e, 134217728);
    if (t !== null) {
      var n = he();
      Be(t, e, 134217728, n);
    }
    zs(e, 134217728);
  }
};
pc = function (e) {
  if (e.tag === 13) {
    var t = It(e),
      n = pt(e, t);
    if (n !== null) {
      var r = he();
      Be(n, e, t, r);
    }
    zs(e, t);
  }
};
mc = function () {
  return $;
};
vc = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
li = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Jl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Go(r);
            if (!o) throw Error(N(90));
            Qa(r), Jl(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ga(e, n);
      break;
    case "select":
      (t = n.value), t != null && wn(e, !!n.multiple, t, !1);
  }
};
tc = Os;
nc = Jt;
var jv = { usingClientEntryPoint: !1, Events: [Rr, fn, Go, qa, ec, Os] },
  Qn = {
    findFiberByHostInstance: Wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Dv = {
    bundleType: Qn.bundleType,
    version: Qn.version,
    rendererPackageName: Qn.rendererPackageName,
    rendererConfig: Qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: vt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Qn.findFiberByHostInstance || Mv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xr.isDisabled && Xr.supportsFiber)
    try {
      (Bo = Xr.inject(Dv)), (nt = Xr);
    } catch {}
}
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jv;
Le.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Fs(t)) throw Error(N(200));
  return Ov(e, t, null, n);
};
Le.createRoot = function (e, t) {
  if (!Fs(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = Ad;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ds(e, 1, !1, null, null, n, !1, r, o)),
    (e[ft] = t.current),
    hr(e.nodeType === 8 ? e.parentNode : e),
    new As(t)
  );
};
Le.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = lc(t)), (e = e === null ? null : e.stateNode), e;
};
Le.flushSync = function (e) {
  return Jt(e);
};
Le.hydrate = function (e, t, n) {
  if (!rl(t)) throw Error(N(200));
  return ol(null, e, t, !0, n);
};
Le.hydrateRoot = function (e, t, n) {
  if (!Fs(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = Ad;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = zd(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[ft] = t.current),
    hr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new nl(t);
};
Le.render = function (e, t, n) {
  if (!rl(t)) throw Error(N(200));
  return ol(null, e, t, !1, n);
};
Le.unmountComponentAtNode = function (e) {
  if (!rl(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Jt(function () {
        ol(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ft] = null);
        });
      }),
      !0)
    : !1;
};
Le.unstable_batchedUpdates = Os;
Le.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!rl(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return ol(e, t, n, !1, r);
};
Le.version = "18.3.1-next-f1338f8080-20240426";
function Fd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fd);
    } catch (e) {
      console.error(e);
    }
}
Fd(), (Fa.exports = Le);
var Or = Fa.exports;
const zv = Pa(Or);
var bd,
  ua = Or;
(bd = ua.createRoot), ua.hydrateRoot;
function Av(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function $d(...e) {
  return (t) => e.forEach((n) => Av(n, t));
}
function Qe(...e) {
  return m.useCallback($d(...e), e);
}
var jn = m.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = m.Children.toArray(n),
    l = o.find(bv);
  if (l) {
    const i = l.props.children,
      s = o.map((u) =>
        u === l
          ? m.Children.count(i) > 1
            ? m.Children.only(null)
            : m.isValidElement(i)
              ? i.props.children
              : null
          : u,
      );
    return w.jsx(Fi, {
      ...r,
      ref: t,
      children: m.isValidElement(i) ? m.cloneElement(i, void 0, s) : null,
    });
  }
  return w.jsx(Fi, { ...r, ref: t, children: n });
});
jn.displayName = "Slot";
var Fi = m.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (m.isValidElement(n)) {
    const o = Uv(n);
    return m.cloneElement(n, { ...$v(r, n.props), ref: t ? $d(t, o) : o });
  }
  return m.Children.count(n) > 1 ? m.Children.only(null) : null;
});
Fi.displayName = "SlotClone";
var Fv = ({ children: e }) => w.jsx(w.Fragment, { children: e });
function bv(e) {
  return m.isValidElement(e) && e.type === Fv;
}
function $v(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? o && l
        ? (n[r] = (...s) => {
            l(...s), o(...s);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...l })
        : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Uv(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Ud(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ud(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Vv() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ud(e)) && (r && (r += " "), (r += t));
  return r;
}
const aa = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  ca = Vv,
  bs = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return ca(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: l } = t,
      i = Object.keys(o).map((a) => {
        const h = n == null ? void 0 : n[a],
          f = l == null ? void 0 : l[a];
        if (h === null) return null;
        const v = aa(h) || aa(f);
        return o[a][v];
      }),
      s =
        n &&
        Object.entries(n).reduce((a, h) => {
          let [f, v] = h;
          return v === void 0 || (a[f] = v), a;
        }, {}),
      u =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((a, h) => {
              let { class: f, className: v, ...y } = h;
              return Object.entries(y).every((S) => {
                let [g, E] = S;
                return Array.isArray(E)
                  ? E.includes({ ...l, ...s }[g])
                  : { ...l, ...s }[g] === E;
              })
                ? [...a, f, v]
                : a;
            }, []);
    return ca(
      e,
      i,
      u,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
function Vd(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Vd(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Wv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Vd(e)) && (r && (r += " "), (r += t));
  return r;
}
const $s = "-",
  Bv = (e) => {
    const t = Qv(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const s = i.split($s);
        return s[0] === "" && s.length !== 1 && s.shift(), Wd(s, t) || Hv(i);
      },
      getConflictingClassGroupIds: (i, s) => {
        const u = n[i] || [];
        return s && r[i] ? [...u, ...r[i]] : u;
      },
    };
  },
  Wd = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Wd(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join($s);
    return (i = t.validators.find(({ validator: s }) => s(l))) == null
      ? void 0
      : i.classGroupId;
  },
  da = /^\[(.+)\]$/,
  Hv = (e) => {
    if (da.test(e)) {
      const t = da.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Qv = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Gv(Object.entries(e.classGroups), n).forEach(([l, i]) => {
        bi(i, r, l, t);
      }),
      r
    );
  },
  bi = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const l = o === "" ? t : fa(t, o);
        l.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (Kv(o)) {
          bi(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([l, i]) => {
        bi(i, fa(t, l), n, r);
      });
    });
  },
  fa = (e, t) => {
    let n = e;
    return (
      t.split($s).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Kv = (e) => e.isThemeGetter,
  Gv = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((l) =>
            typeof l == "string"
              ? t + l
              : typeof l == "object"
                ? Object.fromEntries(
                    Object.entries(l).map(([i, s]) => [t + i, s]),
                  )
                : l,
          );
          return [n, o];
        })
      : e,
  Yv = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (l, i) => {
      n.set(l, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(l) {
        let i = n.get(l);
        if (i !== void 0) return i;
        if ((i = r.get(l)) !== void 0) return o(l, i), i;
      },
      set(l, i) {
        n.has(l) ? n.set(l, i) : o(l, i);
      },
    };
  },
  Bd = "!",
  Xv = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      l = t.length,
      i = (s) => {
        const u = [];
        let a = 0,
          h = 0,
          f;
        for (let E = 0; E < s.length; E++) {
          let d = s[E];
          if (a === 0) {
            if (d === o && (r || s.slice(E, E + l) === t)) {
              u.push(s.slice(h, E)), (h = E + l);
              continue;
            }
            if (d === "/") {
              f = E;
              continue;
            }
          }
          d === "[" ? a++ : d === "]" && a--;
        }
        const v = u.length === 0 ? s : s.substring(h),
          y = v.startsWith(Bd),
          S = y ? v.substring(1) : v,
          g = f && f > h ? f - h : void 0;
        return {
          modifiers: u,
          hasImportantModifier: y,
          baseClassName: S,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (s) => n({ className: s, parseClassName: i }) : i;
  },
  Zv = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Jv = (e) => ({ cache: Yv(e.cacheSize), parseClassName: Xv(e), ...Bv(e) }),
  qv = /\s+/,
  eh = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      l = [],
      i = e.trim().split(qv);
    let s = "";
    for (let u = i.length - 1; u >= 0; u -= 1) {
      const a = i[u],
        {
          modifiers: h,
          hasImportantModifier: f,
          baseClassName: v,
          maybePostfixModifierPosition: y,
        } = n(a);
      let S = !!y,
        g = r(S ? v.substring(0, y) : v);
      if (!g) {
        if (!S) {
          s = a + (s.length > 0 ? " " + s : s);
          continue;
        }
        if (((g = r(v)), !g)) {
          s = a + (s.length > 0 ? " " + s : s);
          continue;
        }
        S = !1;
      }
      const E = Zv(h).join(":"),
        d = f ? E + Bd : E,
        c = d + g;
      if (l.includes(c)) continue;
      l.push(c);
      const p = o(g, S);
      for (let x = 0; x < p.length; ++x) {
        const k = p[x];
        l.push(d + k);
      }
      s = a + (s.length > 0 ? " " + s : s);
    }
    return s;
  };
function th() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Hd(t)) && (r && (r += " "), (r += n));
  return r;
}
const Hd = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Hd(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function nh(e, ...t) {
  let n,
    r,
    o,
    l = i;
  function i(u) {
    const a = t.reduce((h, f) => f(h), e());
    return (n = Jv(a)), (r = n.cache.get), (o = n.cache.set), (l = s), s(u);
  }
  function s(u) {
    const a = r(u);
    if (a) return a;
    const h = eh(u, n);
    return o(u, h), h;
  }
  return function () {
    return l(th.apply(null, arguments));
  };
}
const V = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Qd = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  rh = /^\d+\/\d+$/,
  oh = new Set(["px", "full", "screen"]),
  lh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ih =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  sh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  uh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ah =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  lt = (e) => Nn(e) || oh.has(e) || rh.test(e),
  gt = (e) => Fn(e, "length", gh),
  Nn = (e) => !!e && !Number.isNaN(Number(e)),
  zl = (e) => Fn(e, "number", Nn),
  Kn = (e) => !!e && Number.isInteger(Number(e)),
  ch = (e) => e.endsWith("%") && Nn(e.slice(0, -1)),
  j = (e) => Qd.test(e),
  yt = (e) => lh.test(e),
  dh = new Set(["length", "size", "percentage"]),
  fh = (e) => Fn(e, dh, Kd),
  ph = (e) => Fn(e, "position", Kd),
  mh = new Set(["image", "url"]),
  vh = (e) => Fn(e, mh, wh),
  hh = (e) => Fn(e, "", yh),
  Gn = () => !0,
  Fn = (e, t, n) => {
    const r = Qd.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  gh = (e) => ih.test(e) && !sh.test(e),
  Kd = () => !1,
  yh = (e) => uh.test(e),
  wh = (e) => ah.test(e),
  xh = () => {
    const e = V("colors"),
      t = V("spacing"),
      n = V("blur"),
      r = V("brightness"),
      o = V("borderColor"),
      l = V("borderRadius"),
      i = V("borderSpacing"),
      s = V("borderWidth"),
      u = V("contrast"),
      a = V("grayscale"),
      h = V("hueRotate"),
      f = V("invert"),
      v = V("gap"),
      y = V("gradientColorStops"),
      S = V("gradientColorStopPositions"),
      g = V("inset"),
      E = V("margin"),
      d = V("opacity"),
      c = V("padding"),
      p = V("saturate"),
      x = V("scale"),
      k = V("sepia"),
      P = V("skew"),
      C = V("space"),
      T = V("translate"),
      D = () => ["auto", "contain", "none"],
      O = () => ["auto", "hidden", "clip", "visible", "scroll"],
      H = () => ["auto", j, t],
      z = () => [j, t],
      Ne = () => ["", lt, gt],
      M = () => ["auto", Nn, j],
      le = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      ie = () => ["solid", "dashed", "dotted", "double", "none"],
      Me = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      _ = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      L = () => ["", "0", j],
      I = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      F = () => [Nn, j];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Gn],
        spacing: [lt, gt],
        blur: ["none", "", yt, j],
        brightness: F(),
        borderColor: [e],
        borderRadius: ["none", "", "full", yt, j],
        borderSpacing: z(),
        borderWidth: Ne(),
        contrast: F(),
        grayscale: L(),
        hueRotate: F(),
        invert: L(),
        gap: z(),
        gradientColorStops: [e],
        gradientColorStopPositions: [ch, gt],
        inset: H(),
        margin: H(),
        opacity: F(),
        padding: z(),
        saturate: F(),
        scale: F(),
        sepia: L(),
        skew: F(),
        space: z(),
        translate: z(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", j] }],
        container: ["container"],
        columns: [{ columns: [yt] }],
        "break-after": [{ "break-after": I() }],
        "break-before": [{ "break-before": I() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...le(), j] }],
        overflow: [{ overflow: O() }],
        "overflow-x": [{ "overflow-x": O() }],
        "overflow-y": [{ "overflow-y": O() }],
        overscroll: [{ overscroll: D() }],
        "overscroll-x": [{ "overscroll-x": D() }],
        "overscroll-y": [{ "overscroll-y": D() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Kn, j] }],
        basis: [{ basis: H() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", j] }],
        grow: [{ grow: L() }],
        shrink: [{ shrink: L() }],
        order: [{ order: ["first", "last", "none", Kn, j] }],
        "grid-cols": [{ "grid-cols": [Gn] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Kn, j] }, j] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [Gn] }],
        "row-start-end": [{ row: ["auto", { span: [Kn, j] }, j] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", j] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", j] }],
        gap: [{ gap: [v] }],
        "gap-x": [{ "gap-x": [v] }],
        "gap-y": [{ "gap-y": [v] }],
        "justify-content": [{ justify: ["normal", ..._()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ..._(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [..._(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [c] }],
        px: [{ px: [c] }],
        py: [{ py: [c] }],
        ps: [{ ps: [c] }],
        pe: [{ pe: [c] }],
        pt: [{ pt: [c] }],
        pr: [{ pr: [c] }],
        pb: [{ pb: [c] }],
        pl: [{ pl: [c] }],
        m: [{ m: [E] }],
        mx: [{ mx: [E] }],
        my: [{ my: [E] }],
        ms: [{ ms: [E] }],
        me: [{ me: [E] }],
        mt: [{ mt: [E] }],
        mr: [{ mr: [E] }],
        mb: [{ mb: [E] }],
        ml: [{ ml: [E] }],
        "space-x": [{ "space-x": [C] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [C] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", j, t] }],
        "min-w": [{ "min-w": [j, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              j,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [yt] },
              yt,
            ],
          },
        ],
        h: [{ h: [j, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [j, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [j, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [j, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", yt, gt] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              zl,
            ],
          },
        ],
        "font-family": [{ font: [Gn] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              j,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Nn, zl] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              lt,
              j,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", j] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", j] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [d] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [d] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ie(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", lt, gt] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", lt, j] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: z() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              j,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", j] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [d] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...le(), ph] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", fh] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              vh,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [S] }],
        "gradient-via-pos": [{ via: [S] }],
        "gradient-to-pos": [{ to: [S] }],
        "gradient-from": [{ from: [y] }],
        "gradient-via": [{ via: [y] }],
        "gradient-to": [{ to: [y] }],
        rounded: [{ rounded: [l] }],
        "rounded-s": [{ "rounded-s": [l] }],
        "rounded-e": [{ "rounded-e": [l] }],
        "rounded-t": [{ "rounded-t": [l] }],
        "rounded-r": [{ "rounded-r": [l] }],
        "rounded-b": [{ "rounded-b": [l] }],
        "rounded-l": [{ "rounded-l": [l] }],
        "rounded-ss": [{ "rounded-ss": [l] }],
        "rounded-se": [{ "rounded-se": [l] }],
        "rounded-ee": [{ "rounded-ee": [l] }],
        "rounded-es": [{ "rounded-es": [l] }],
        "rounded-tl": [{ "rounded-tl": [l] }],
        "rounded-tr": [{ "rounded-tr": [l] }],
        "rounded-br": [{ "rounded-br": [l] }],
        "rounded-bl": [{ "rounded-bl": [l] }],
        "border-w": [{ border: [s] }],
        "border-w-x": [{ "border-x": [s] }],
        "border-w-y": [{ "border-y": [s] }],
        "border-w-s": [{ "border-s": [s] }],
        "border-w-e": [{ "border-e": [s] }],
        "border-w-t": [{ "border-t": [s] }],
        "border-w-r": [{ "border-r": [s] }],
        "border-w-b": [{ "border-b": [s] }],
        "border-w-l": [{ "border-l": [s] }],
        "border-opacity": [{ "border-opacity": [d] }],
        "border-style": [{ border: [...ie(), "hidden"] }],
        "divide-x": [{ "divide-x": [s] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [s] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [d] }],
        "divide-style": [{ divide: ie() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...ie()] }],
        "outline-offset": [{ "outline-offset": [lt, j] }],
        "outline-w": [{ outline: [lt, gt] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: Ne() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [d] }],
        "ring-offset-w": [{ "ring-offset": [lt, gt] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", yt, hh] }],
        "shadow-color": [{ shadow: [Gn] }],
        opacity: [{ opacity: [d] }],
        "mix-blend": [
          { "mix-blend": [...Me(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": Me() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [u] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", yt, j] }],
        grayscale: [{ grayscale: [a] }],
        "hue-rotate": [{ "hue-rotate": [h] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [p] }],
        sepia: [{ sepia: [k] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [a] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [h] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [d] }],
        "backdrop-saturate": [{ "backdrop-saturate": [p] }],
        "backdrop-sepia": [{ "backdrop-sepia": [k] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              j,
            ],
          },
        ],
        duration: [{ duration: F() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", j] }],
        delay: [{ delay: F() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", j] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [x] }],
        "scale-x": [{ "scale-x": [x] }],
        "scale-y": [{ "scale-y": [x] }],
        rotate: [{ rotate: [Kn, j] }],
        "translate-x": [{ "translate-x": [T] }],
        "translate-y": [{ "translate-y": [T] }],
        "skew-x": [{ "skew-x": [P] }],
        "skew-y": [{ "skew-y": [P] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              j,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              j,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": z() }],
        "scroll-mx": [{ "scroll-mx": z() }],
        "scroll-my": [{ "scroll-my": z() }],
        "scroll-ms": [{ "scroll-ms": z() }],
        "scroll-me": [{ "scroll-me": z() }],
        "scroll-mt": [{ "scroll-mt": z() }],
        "scroll-mr": [{ "scroll-mr": z() }],
        "scroll-mb": [{ "scroll-mb": z() }],
        "scroll-ml": [{ "scroll-ml": z() }],
        "scroll-p": [{ "scroll-p": z() }],
        "scroll-px": [{ "scroll-px": z() }],
        "scroll-py": [{ "scroll-py": z() }],
        "scroll-ps": [{ "scroll-ps": z() }],
        "scroll-pe": [{ "scroll-pe": z() }],
        "scroll-pt": [{ "scroll-pt": z() }],
        "scroll-pr": [{ "scroll-pr": z() }],
        "scroll-pb": [{ "scroll-pb": z() }],
        "scroll-pl": [{ "scroll-pl": z() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", j] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [lt, gt, zl] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  Sh = nh(xh);
function Ce(...e) {
  return Sh(Wv(e));
}
const Eh = bs(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
    {
      variants: {
        variant: {
          default:
            "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
          destructive:
            "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
          outline:
            "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
          secondary:
            "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
          ghost:
            "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
          link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  qe = m.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, l) => {
      const i = r ? jn : "button";
      return w.jsx(i, {
        className: Ce(Eh({ variant: t, size: n, className: e })),
        ref: l,
        ...o,
      });
    },
  );
qe.displayName = "Button";
const Gd = m.forwardRef(({ className: e, type: t, ...n }, r) =>
  w.jsx("input", {
    type: t,
    className: Ce(
      "flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
      e,
    ),
    ref: r,
    ...n,
  }),
);
Gd.displayName = "Input";
var kh = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  ce = kh.reduce((e, t) => {
    const n = m.forwardRef((r, o) => {
      const { asChild: l, ...i } = r,
        s = l ? jn : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        w.jsx(s, { ...i, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Yd(e, t) {
  e && Or.flushSync(() => e.dispatchEvent(t));
}
var Ch = "Label",
  Xd = m.forwardRef((e, t) =>
    w.jsx(ce.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    }),
  );
Xd.displayName = Ch;
var Zd = Xd;
const Nh = bs(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  Us = m.forwardRef(({ className: e, ...t }, n) =>
    w.jsx(Zd, { ref: n, className: Ce(Nh(), e), ...t }),
  );
Us.displayName = Zd.displayName;
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ph = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Jd = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Th = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _h = m.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: l,
      iconNode: i,
      ...s
    },
    u,
  ) =>
    m.createElement(
      "svg",
      {
        ref: u,
        ...Th,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Jd("lucide", o),
        ...s,
      },
      [
        ...i.map(([a, h]) => m.createElement(a, h)),
        ...(Array.isArray(l) ? l : [l]),
      ],
    ),
);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ge = (e, t) => {
  const n = m.forwardRef(({ className: r, ...o }, l) =>
    m.createElement(_h, {
      ref: l,
      iconNode: t,
      className: Jd(`lucide-${Ph(e)}`, r),
      ...o,
    }),
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rh = Ge("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lh = Ge("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oh = Ge("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mh = Ge("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ih = Ge("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jh = Ge("Pause", [
  [
    "rect",
    { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" },
  ],
  [
    "rect",
    { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" },
  ],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dh = Ge("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zh = Ge("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ah = Ge("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fh = Ge("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vs = Ge("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  qd = m.createContext(null),
  bh = ({ children: e }) => {
    const [t, n] = m.useState([]),
      [r, o] = m.useState(null),
      [l, i] = m.useState(null),
      [s, u] = m.useState(""),
      [a, h] = m.useState(!1),
      [f, v] = m.useState([]),
      [y, S] = m.useState(!1),
      [g, E] = m.useState(!1),
      [d, c] = m.useState(!1),
      [p, x] = m.useState(!1),
      k = m.useRef(null),
      P = m.useRef(null),
      [C, T] = m.useState(!1),
      [D, O] = m.useState(""),
      H = {
        videos: t,
        setVideos: n,
        selectedVideoIndex: r,
        setSelectedVideoIndex: o,
        currentVideoIndex: l,
        setCurrentVideoIndex: i,
        prompt: s,
        setPrompt: u,
        isModalOpen: a,
        setIsModalOpen: h,
        detectedItems: f,
        setDetectedItems: v,
        isAnalyzing: y,
        setIsAnalyzing: S,
        isDragging: g,
        setIsDragging: E,
        isPlaying: d,
        setIsPlaying: c,
        isFullscreen: p,
        setIsFullscreen: x,
        videoRef: k,
        fileInputRef: P,
        showToast: C,
        setShowToast: T,
        errorMessage: D,
        setErrorMessage: O,
      };
    return w.jsx(qd.Provider, { value: H, children: e });
  },
  ll = () => {
    const e = m.useContext(qd);
    if (!e)
      throw new Error(
        "useContentProvider must be used within a ContextProvider",
      );
    return e;
  };
function $h() {
  const {
      isDragging: e,
      fileInputRef: t,
      setIsDragging: n,
      setVideos: r,
      selectedVideoIndex: o,
      setSelectedVideoIndex: l,
    } = ll(),
    i = (f) => {
      if (f) {
        const v = Array.from(f)
          .filter((y) => y.type === "video/mp4")
          .map((y) => ({ file: y, url: URL.createObjectURL(y) }));
        r((y) => {
          const S = [...y, ...v];
          return o === null && S.length > 0 && l(y.length), S;
        });
      }
    },
    s = (f) => {
      f.preventDefault(), f.stopPropagation(), n(!0);
    },
    u = (f) => {
      f.preventDefault(), f.stopPropagation(), n(!1);
    },
    a = (f) => {
      f.preventDefault(), f.stopPropagation();
    },
    h = (f) => {
      f.preventDefault(), f.stopPropagation(), n(!1);
      const v = f.dataTransfer.files;
      i(v);
    };
  return w.jsx("div", {
    className: "w-64 bg-gray-800 text-white p-4 flex flex-col",
    children: w.jsxs("div", {
      className: `flex-1 p-4 border-2 border-dashed rounded-lg transition-colors ${e ? "border-blue-500 bg-blue-900" : "border-gray-600"}`,
      onDragEnter: s,
      onDragOver: a,
      onDragLeave: u,
      onDrop: h,
      children: [
        w.jsx(Us, {
          htmlFor: "video-upload",
          className: "text-lg font-medium block text-center mb-2",
          children: "Upload MP4 Files",
        }),
        w.jsx("p", {
          className: "text-sm text-gray-400 text-center mb-4",
          children: "Drag and drop or click to select",
        }),
        w.jsx(Gd, {
          id: "video-upload",
          type: "file",
          accept: "video/mp4",
          onChange: (f) => i(f.target.files),
          className: "hidden",
          multiple: !0,
          ref: t,
        }),
        w.jsxs(qe, {
          variant: "outline",
          onClick: () => {
            var f;
            return (f = t.current) == null ? void 0 : f.click();
          },
          className:
            "w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600",
          children: [w.jsx(Fh, { className: "h-5 w-5 mr-2" }), "Select Files"],
        }),
      ],
    }),
  });
}
const ef = m.forwardRef(({ className: e, ...t }, n) =>
  w.jsx("textarea", {
    className: Ce(
      "flex min-h-[80px] w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
      e,
    ),
    ref: n,
    ...t,
  }),
);
ef.displayName = "Textarea";
function Uh() {
  const {
      videos: e,
      selectedVideoIndex: t,
      setSelectedVideoIndex: n,
      prompt: r,
      setPrompt: o,
      isAnalyzing: l,
      setIsModalOpen: i,
      setIsAnalyzing: s,
      setVideos: u,
      setCurrentVideoIndex: a,
      setDetectedItems: h,
    } = ll(),
    f = (y) => {
      u((S) => S.filter((g, E) => E !== y)),
        t === y ? n(null) : t !== null && y < t && n(t - 1);
    },
    v = async () => {
      t !== null &&
        (s(!0),
        a(t),
        setTimeout(() => {
          h([
            { name: "Person", timestamp: 5 },
            { name: "Car", timestamp: 15 },
            { name: "Suspicious activity", timestamp: 25 },
            { name: "Dining Table", timestamp: 60 },
            { name: "Person", timestamp: 160 },
          ]),
            s(!1),
            i(!0);
        }, 3e3));
    };
  return w.jsxs("div", {
    className: "flex-1 p-8 overflow-auto",
    children: [
      w.jsxs("div", {
        className: "mb-6",
        children: [
          w.jsx("h2", {
            className: "text-xl font-semibold mb-2",
            children: "Uploaded Footage",
          }),
          e.length > 0
            ? w.jsx("ul", {
                className: "space-y-2",
                children: e.map((y, S) =>
                  w.jsxs(
                    "li",
                    {
                      className:
                        "flex items-center justify-between bg-white p-3 rounded-md shadow",
                      children: [
                        w.jsx("button", {
                          className: `flex-grow text-left p-2 rounded ${t === S ? "bg-blue-100" : "hover:bg-gray-100"}`,
                          onClick: () => n(S),
                          children: y.file.name,
                        }),
                        w.jsx(qe, {
                          variant: "ghost",
                          size: "icon",
                          onClick: () => f(S),
                          className:
                            "text-red-500 hover:text-red-600 hover:bg-red-50",
                          children: w.jsx(Ah, { className: "h-5 w-5" }),
                        }),
                      ],
                    },
                    S,
                  ),
                ),
              })
            : w.jsx("p", {
                className: "text-gray-500",
                children: "No videos uploaded yet.",
              }),
        ],
      }),
      w.jsxs("div", {
        className: "mb-6",
        children: [
          w.jsx(Us, {
            htmlFor: "prompt",
            className: "text-lg font-medium block mb-2",
            children: "Analysis Prompt",
          }),
          w.jsx(ef, {
            id: "prompt",
            value: r,
            onChange: (y) => o(y.target.value),
            placeholder: "What should we look for in the footage?",
            rows: 3,
            className:
              "w-full resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500",
          }),
        ],
      }),
      w.jsxs(qe, {
        onClick: v,
        disabled: t === null || !r || l,
        className: "w-full bg-green-600 hover:bg-green-700 text-white",
        children: [
          l ? "Analyzing..." : "Analyze Footage",
          !l && w.jsx(zh, { className: "ml-2 h-5 w-5" }),
        ],
      }),
    ],
  });
}
function re(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Vh(e, t) {
  const n = m.createContext(t);
  function r(l) {
    const { children: i, ...s } = l,
      u = m.useMemo(() => s, Object.values(s));
    return w.jsx(n.Provider, { value: u, children: i });
  }
  function o(l) {
    const i = m.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${l}\` must be used within \`${e}\``);
  }
  return (r.displayName = e + "Provider"), [r, o];
}
function Ws(e, t = []) {
  let n = [];
  function r(l, i) {
    const s = m.createContext(i),
      u = n.length;
    n = [...n, i];
    function a(f) {
      const { scope: v, children: y, ...S } = f,
        g = (v == null ? void 0 : v[e][u]) || s,
        E = m.useMemo(() => S, Object.values(S));
      return w.jsx(g.Provider, { value: E, children: y });
    }
    function h(f, v) {
      const y = (v == null ? void 0 : v[e][u]) || s,
        S = m.useContext(y);
      if (S) return S;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${l}\``);
    }
    return (a.displayName = l + "Provider"), [a, h];
  }
  const o = () => {
    const l = n.map((i) => m.createContext(i));
    return function (s) {
      const u = (s == null ? void 0 : s[e]) || l;
      return m.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: u } }), [s, u]);
    };
  };
  return (o.scopeName = e), [r, Wh(o, ...t)];
}
function Wh(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (l) {
      const i = r.reduce((s, { useScope: u, scopeName: a }) => {
        const f = u(l)[`__scope${a}`];
        return { ...s, ...f };
      }, {});
      return m.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Nr =
    globalThis != null && globalThis.document ? m.useLayoutEffect : () => {},
  Bh = Np.useId || (() => {}),
  Hh = 0;
function Al(e) {
  const [t, n] = m.useState(Bh());
  return (
    Nr(() => {
      e || n((r) => r ?? String(Hh++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function Ke(e) {
  const t = m.useRef(e);
  return (
    m.useEffect(() => {
      t.current = e;
    }),
    m.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function tf({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Qh({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    i = l ? e : r,
    s = Ke(n),
    u = m.useCallback(
      (a) => {
        if (l) {
          const f = typeof a == "function" ? a(e) : a;
          f !== e && s(f);
        } else o(a);
      },
      [l, e, o, s],
    );
  return [i, u];
}
function Qh({ defaultProp: e, onChange: t }) {
  const n = m.useState(e),
    [r] = n,
    o = m.useRef(r),
    l = Ke(t);
  return (
    m.useEffect(() => {
      o.current !== r && (l(r), (o.current = r));
    }, [r, o, l]),
    n
  );
}
function Kh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ke(e);
  m.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Gh = "DismissableLayer",
  $i = "dismissableLayer.update",
  Yh = "dismissableLayer.pointerDownOutside",
  Xh = "dismissableLayer.focusOutside",
  pa,
  nf = m.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Bs = m.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: l,
        onInteractOutside: i,
        onDismiss: s,
        ...u
      } = e,
      a = m.useContext(nf),
      [h, f] = m.useState(null),
      v =
        (h == null ? void 0 : h.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, y] = m.useState({}),
      S = Qe(t, (C) => f(C)),
      g = Array.from(a.layers),
      [E] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1),
      d = g.indexOf(E),
      c = h ? g.indexOf(h) : -1,
      p = a.layersWithOutsidePointerEventsDisabled.size > 0,
      x = c >= d,
      k = Jh((C) => {
        const T = C.target,
          D = [...a.branches].some((O) => O.contains(T));
        !x ||
          D ||
          (o == null || o(C),
          i == null || i(C),
          C.defaultPrevented || s == null || s());
      }, v),
      P = qh((C) => {
        const T = C.target;
        [...a.branches].some((O) => O.contains(T)) ||
          (l == null || l(C),
          i == null || i(C),
          C.defaultPrevented || s == null || s());
      }, v);
    return (
      Kh((C) => {
        c === a.layers.size - 1 &&
          (r == null || r(C),
          !C.defaultPrevented && s && (C.preventDefault(), s()));
      }, v),
      m.useEffect(() => {
        if (h)
          return (
            n &&
              (a.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((pa = v.body.style.pointerEvents),
                (v.body.style.pointerEvents = "none")),
              a.layersWithOutsidePointerEventsDisabled.add(h)),
            a.layers.add(h),
            ma(),
            () => {
              n &&
                a.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (v.body.style.pointerEvents = pa);
            }
          );
      }, [h, v, n, a]),
      m.useEffect(
        () => () => {
          h &&
            (a.layers.delete(h),
            a.layersWithOutsidePointerEventsDisabled.delete(h),
            ma());
        },
        [h, a],
      ),
      m.useEffect(() => {
        const C = () => y({});
        return (
          document.addEventListener($i, C),
          () => document.removeEventListener($i, C)
        );
      }, []),
      w.jsx(ce.div, {
        ...u,
        ref: S,
        style: {
          pointerEvents: p ? (x ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: re(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: re(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: re(
          e.onPointerDownCapture,
          k.onPointerDownCapture,
        ),
      })
    );
  });
Bs.displayName = Gh;
var Zh = "DismissableLayerBranch",
  rf = m.forwardRef((e, t) => {
    const n = m.useContext(nf),
      r = m.useRef(null),
      o = Qe(t, r);
    return (
      m.useEffect(() => {
        const l = r.current;
        if (l)
          return (
            n.branches.add(l),
            () => {
              n.branches.delete(l);
            }
          );
      }, [n.branches]),
      w.jsx(ce.div, { ...e, ref: o })
    );
  });
rf.displayName = Zh;
function Jh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ke(e),
    r = m.useRef(!1),
    o = m.useRef(() => {});
  return (
    m.useEffect(() => {
      const l = (s) => {
          if (s.target && !r.current) {
            let u = function () {
              of(Yh, n, a, { discrete: !0 });
            };
            const a = { originalEvent: s };
            s.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = u),
                t.addEventListener("click", o.current, { once: !0 }))
              : u();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener("pointerdown", l);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener("pointerdown", l),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function qh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ke(e),
    r = m.useRef(!1);
  return (
    m.useEffect(() => {
      const o = (l) => {
        l.target &&
          !r.current &&
          of(Xh, n, { originalEvent: l }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function ma() {
  const e = new CustomEvent($i);
  document.dispatchEvent(e);
}
function of(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Yd(o, l) : o.dispatchEvent(l);
}
var eg = Bs,
  tg = rf,
  Fl = "focusScope.autoFocusOnMount",
  bl = "focusScope.autoFocusOnUnmount",
  va = { bubbles: !1, cancelable: !0 },
  ng = "FocusScope",
  lf = m.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: l,
        ...i
      } = e,
      [s, u] = m.useState(null),
      a = Ke(o),
      h = Ke(l),
      f = m.useRef(null),
      v = Qe(t, (g) => u(g)),
      y = m.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    m.useEffect(() => {
      if (r) {
        let g = function (p) {
            if (y.paused || !s) return;
            const x = p.target;
            s.contains(x) ? (f.current = x) : xt(f.current, { select: !0 });
          },
          E = function (p) {
            if (y.paused || !s) return;
            const x = p.relatedTarget;
            x !== null && (s.contains(x) || xt(f.current, { select: !0 }));
          },
          d = function (p) {
            if (document.activeElement === document.body)
              for (const k of p) k.removedNodes.length > 0 && xt(s);
          };
        document.addEventListener("focusin", g),
          document.addEventListener("focusout", E);
        const c = new MutationObserver(d);
        return (
          s && c.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", g),
              document.removeEventListener("focusout", E),
              c.disconnect();
          }
        );
      }
    }, [r, s, y.paused]),
      m.useEffect(() => {
        if (s) {
          ga.add(y);
          const g = document.activeElement;
          if (!s.contains(g)) {
            const d = new CustomEvent(Fl, va);
            s.addEventListener(Fl, a),
              s.dispatchEvent(d),
              d.defaultPrevented ||
                (rg(ug(sf(s)), { select: !0 }),
                document.activeElement === g && xt(s));
          }
          return () => {
            s.removeEventListener(Fl, a),
              setTimeout(() => {
                const d = new CustomEvent(bl, va);
                s.addEventListener(bl, h),
                  s.dispatchEvent(d),
                  d.defaultPrevented || xt(g ?? document.body, { select: !0 }),
                  s.removeEventListener(bl, h),
                  ga.remove(y);
              }, 0);
          };
        }
      }, [s, a, h, y]);
    const S = m.useCallback(
      (g) => {
        if ((!n && !r) || y.paused) return;
        const E = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
          d = document.activeElement;
        if (E && d) {
          const c = g.currentTarget,
            [p, x] = og(c);
          p && x
            ? !g.shiftKey && d === x
              ? (g.preventDefault(), n && xt(p, { select: !0 }))
              : g.shiftKey &&
                d === p &&
                (g.preventDefault(), n && xt(x, { select: !0 }))
            : d === c && g.preventDefault();
        }
      },
      [n, r, y.paused],
    );
    return w.jsx(ce.div, { tabIndex: -1, ...i, ref: v, onKeyDown: S });
  });
lf.displayName = ng;
function rg(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((xt(r, { select: t }), document.activeElement !== n)) return;
}
function og(e) {
  const t = sf(e),
    n = ha(t, e),
    r = ha(t.reverse(), e);
  return [n, r];
}
function sf(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ha(e, t) {
  for (const n of e) if (!lg(n, { upTo: t })) return n;
}
function lg(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ig(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function xt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && ig(e) && t && e.select();
  }
}
var ga = sg();
function sg() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = ya(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = ya(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function ya(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function ug(e) {
  return e.filter((t) => t.tagName !== "A");
}
var ag = "Portal",
  Hs = m.forwardRef((e, t) => {
    var s;
    const { container: n, ...r } = e,
      [o, l] = m.useState(!1);
    Nr(() => l(!0), []);
    const i =
      n ||
      (o &&
        ((s = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : s.body));
    return i ? zv.createPortal(w.jsx(ce.div, { ...r, ref: t }), i) : null;
  });
Hs.displayName = ag;
function cg(e, t) {
  return m.useReducer((n, r) => t[n][r] ?? n, e);
}
var Mr = (e) => {
  const { present: t, children: n } = e,
    r = dg(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : m.Children.only(n),
    l = Qe(r.ref, fg(o));
  return typeof n == "function" || r.isPresent
    ? m.cloneElement(o, { ref: l })
    : null;
};
Mr.displayName = "Presence";
function dg(e) {
  const [t, n] = m.useState(),
    r = m.useRef({}),
    o = m.useRef(e),
    l = m.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [s, u] = cg(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    m.useEffect(() => {
      const a = Zr(r.current);
      l.current = s === "mounted" ? a : "none";
    }, [s]),
    Nr(() => {
      const a = r.current,
        h = o.current;
      if (h !== e) {
        const v = l.current,
          y = Zr(a);
        e
          ? u("MOUNT")
          : y === "none" || (a == null ? void 0 : a.display) === "none"
            ? u("UNMOUNT")
            : u(h && v !== y ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, u]),
    Nr(() => {
      if (t) {
        const a = (f) => {
            const y = Zr(r.current).includes(f.animationName);
            f.target === t && y && Or.flushSync(() => u("ANIMATION_END"));
          },
          h = (f) => {
            f.target === t && (l.current = Zr(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", a),
          t.addEventListener("animationend", a),
          () => {
            t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", a),
              t.removeEventListener("animationend", a);
          }
        );
      } else u("ANIMATION_END");
    }, [t, u]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(s),
      ref: m.useCallback((a) => {
        a && (r.current = getComputedStyle(a)), n(a);
      }, []),
    }
  );
}
function Zr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function fg(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var $l = 0;
function pg() {
  m.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? wa()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? wa()),
      $l++,
      () => {
        $l === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          $l--;
      }
    );
  }, []);
}
function wa() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var tt = function () {
  return (
    (tt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var l in n)
            Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
        }
        return t;
      }),
    tt.apply(this, arguments)
  );
};
function uf(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function mg(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, l; r < o; r++)
      (l || !(r in t)) &&
        (l || (l = Array.prototype.slice.call(t, 0, r)), (l[r] = t[r]));
  return e.concat(l || Array.prototype.slice.call(t));
}
var ho = "right-scroll-bar-position",
  go = "width-before-scroll-bar",
  vg = "with-scroll-bars-hidden",
  hg = "--removed-body-scroll-bar-size";
function Ul(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function gg(e, t) {
  var n = m.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var yg = typeof window < "u" ? m.useLayoutEffect : m.useEffect,
  xa = new WeakMap();
function wg(e, t) {
  var n = gg(null, function (r) {
    return e.forEach(function (o) {
      return Ul(o, r);
    });
  });
  return (
    yg(
      function () {
        var r = xa.get(n);
        if (r) {
          var o = new Set(r),
            l = new Set(e),
            i = n.current;
          o.forEach(function (s) {
            l.has(s) || Ul(s, null);
          }),
            l.forEach(function (s) {
              o.has(s) || Ul(s, i);
            });
        }
        xa.set(n, e);
      },
      [e],
    ),
    n
  );
}
function xg(e) {
  return e;
}
function Sg(e, t) {
  t === void 0 && (t = xg);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (l) {
        var i = t(l, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (s) {
              return s !== i;
            });
          }
        );
      },
      assignSyncMedium: function (l) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(l);
        }
        n = {
          push: function (s) {
            return l(s);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (l) {
        r = !0;
        var i = [];
        if (n.length) {
          var s = n;
          (n = []), s.forEach(l), (i = n);
        }
        var u = function () {
            var h = i;
            (i = []), h.forEach(l);
          },
          a = function () {
            return Promise.resolve().then(u);
          };
        a(),
          (n = {
            push: function (h) {
              i.push(h), a();
            },
            filter: function (h) {
              return (i = i.filter(h)), n;
            },
          });
      },
    };
  return o;
}
function Eg(e) {
  e === void 0 && (e = {});
  var t = Sg(null);
  return (t.options = tt({ async: !0, ssr: !1 }, e)), t;
}
var af = function (e) {
  var t = e.sideCar,
    n = uf(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return m.createElement(r, tt({}, n));
};
af.isSideCarExport = !0;
function kg(e, t) {
  return e.useMedium(t), af;
}
var cf = Eg(),
  Vl = function () {},
  il = m.forwardRef(function (e, t) {
    var n = m.useRef(null),
      r = m.useState({
        onScrollCapture: Vl,
        onWheelCapture: Vl,
        onTouchMoveCapture: Vl,
      }),
      o = r[0],
      l = r[1],
      i = e.forwardProps,
      s = e.children,
      u = e.className,
      a = e.removeScrollBar,
      h = e.enabled,
      f = e.shards,
      v = e.sideCar,
      y = e.noIsolation,
      S = e.inert,
      g = e.allowPinchZoom,
      E = e.as,
      d = E === void 0 ? "div" : E,
      c = e.gapMode,
      p = uf(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      x = v,
      k = wg([n, t]),
      P = tt(tt({}, p), o);
    return m.createElement(
      m.Fragment,
      null,
      h &&
        m.createElement(x, {
          sideCar: cf,
          removeScrollBar: a,
          shards: f,
          noIsolation: y,
          inert: S,
          setCallbacks: l,
          allowPinchZoom: !!g,
          lockRef: n,
          gapMode: c,
        }),
      i
        ? m.cloneElement(m.Children.only(s), tt(tt({}, P), { ref: k }))
        : m.createElement(d, tt({}, P, { className: u, ref: k }), s),
    );
  });
il.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
il.classNames = { fullWidth: go, zeroRight: ho };
var Cg = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Ng() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Cg();
  return t && e.setAttribute("nonce", t), e;
}
function Pg(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Tg(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var _g = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Ng()) && (Pg(t, n), Tg(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Rg = function () {
    var e = _g();
    return function (t, n) {
      m.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  df = function () {
    var e = Rg(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  Lg = { left: 0, top: 0, right: 0, gap: 0 },
  Wl = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Og = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Wl(n), Wl(r), Wl(o)];
  },
  Mg = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Lg;
    var t = Og(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Ig = df(),
  Pn = "data-scroll-locked",
  jg = function (e, t, n, r) {
    var o = e.left,
      l = e.top,
      i = e.right,
      s = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          vg,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          Pn,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  l,
                  `px;
    padding-right: `,
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(s, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(s, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          ho,
          ` {
    right: `,
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          go,
          ` {
    margin-right: `,
        )
        .concat(s, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(ho, " .")
        .concat(
          ho,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(go, " .")
        .concat(
          go,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          Pn,
          `] {
    `,
        )
        .concat(hg, ": ")
        .concat(
          s,
          `px;
  }
`,
        )
    );
  },
  Sa = function () {
    var e = parseInt(document.body.getAttribute(Pn) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  Dg = function () {
    m.useEffect(function () {
      return (
        document.body.setAttribute(Pn, (Sa() + 1).toString()),
        function () {
          var e = Sa() - 1;
          e <= 0
            ? document.body.removeAttribute(Pn)
            : document.body.setAttribute(Pn, e.toString());
        }
      );
    }, []);
  },
  zg = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    Dg();
    var l = m.useMemo(
      function () {
        return Mg(o);
      },
      [o],
    );
    return m.createElement(Ig, { styles: jg(l, !t, o, n ? "" : "!important") });
  },
  Ui = !1;
if (typeof window < "u")
  try {
    var Jr = Object.defineProperty({}, "passive", {
      get: function () {
        return (Ui = !0), !0;
      },
    });
    window.addEventListener("test", Jr, Jr),
      window.removeEventListener("test", Jr, Jr);
  } catch {
    Ui = !1;
  }
var rn = Ui ? { passive: !1 } : !1,
  Ag = function (e) {
    return e.tagName === "TEXTAREA";
  },
  ff = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Ag(e) && n[t] === "visible")
    );
  },
  Fg = function (e) {
    return ff(e, "overflowY");
  },
  bg = function (e) {
    return ff(e, "overflowX");
  },
  Ea = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = pf(e, r);
      if (o) {
        var l = mf(e, r),
          i = l[1],
          s = l[2];
        if (i > s) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  $g = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Ug = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  pf = function (e, t) {
    return e === "v" ? Fg(t) : bg(t);
  },
  mf = function (e, t) {
    return e === "v" ? $g(t) : Ug(t);
  },
  Vg = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Wg = function (e, t, n, r, o) {
    var l = Vg(e, window.getComputedStyle(t).direction),
      i = l * r,
      s = n.target,
      u = t.contains(s),
      a = !1,
      h = i > 0,
      f = 0,
      v = 0;
    do {
      var y = mf(e, s),
        S = y[0],
        g = y[1],
        E = y[2],
        d = g - E - l * S;
      (S || d) && pf(e, s) && ((f += d), (v += S)),
        s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode);
    } while ((!u && s !== document.body) || (u && (t.contains(s) || t === s)));
    return (
      ((h && (Math.abs(f) < 1 || !o)) || (!h && (Math.abs(v) < 1 || !o))) &&
        (a = !0),
      a
    );
  },
  qr = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  ka = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Ca = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Bg = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Hg = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  Qg = 0,
  on = [];
function Kg(e) {
  var t = m.useRef([]),
    n = m.useRef([0, 0]),
    r = m.useRef(),
    o = m.useState(Qg++)[0],
    l = m.useState(df)[0],
    i = m.useRef(e);
  m.useEffect(
    function () {
      i.current = e;
    },
    [e],
  ),
    m.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var g = mg([e.lockRef.current], (e.shards || []).map(Ca), !0).filter(
            Boolean,
          );
          return (
            g.forEach(function (E) {
              return E.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function (E) {
                  return E.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var s = m.useCallback(function (g, E) {
      if ("touches" in g && g.touches.length === 2)
        return !i.current.allowPinchZoom;
      var d = qr(g),
        c = n.current,
        p = "deltaX" in g ? g.deltaX : c[0] - d[0],
        x = "deltaY" in g ? g.deltaY : c[1] - d[1],
        k,
        P = g.target,
        C = Math.abs(p) > Math.abs(x) ? "h" : "v";
      if ("touches" in g && C === "h" && P.type === "range") return !1;
      var T = Ea(C, P);
      if (!T) return !0;
      if ((T ? (k = C) : ((k = C === "v" ? "h" : "v"), (T = Ea(C, P))), !T))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (p || x) && (r.current = k), !k)
      )
        return !0;
      var D = r.current || k;
      return Wg(D, E, g, D === "h" ? p : x, !0);
    }, []),
    u = m.useCallback(function (g) {
      var E = g;
      if (!(!on.length || on[on.length - 1] !== l)) {
        var d = "deltaY" in E ? ka(E) : qr(E),
          c = t.current.filter(function (k) {
            return (
              k.name === E.type &&
              (k.target === E.target || E.target === k.shadowParent) &&
              Bg(k.delta, d)
            );
          })[0];
        if (c && c.should) {
          E.cancelable && E.preventDefault();
          return;
        }
        if (!c) {
          var p = (i.current.shards || [])
              .map(Ca)
              .filter(Boolean)
              .filter(function (k) {
                return k.contains(E.target);
              }),
            x = p.length > 0 ? s(E, p[0]) : !i.current.noIsolation;
          x && E.cancelable && E.preventDefault();
        }
      }
    }, []),
    a = m.useCallback(function (g, E, d, c) {
      var p = { name: g, delta: E, target: d, should: c, shadowParent: Gg(d) };
      t.current.push(p),
        setTimeout(function () {
          t.current = t.current.filter(function (x) {
            return x !== p;
          });
        }, 1);
    }, []),
    h = m.useCallback(function (g) {
      (n.current = qr(g)), (r.current = void 0);
    }, []),
    f = m.useCallback(function (g) {
      a(g.type, ka(g), g.target, s(g, e.lockRef.current));
    }, []),
    v = m.useCallback(function (g) {
      a(g.type, qr(g), g.target, s(g, e.lockRef.current));
    }, []);
  m.useEffect(function () {
    return (
      on.push(l),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: v,
      }),
      document.addEventListener("wheel", u, rn),
      document.addEventListener("touchmove", u, rn),
      document.addEventListener("touchstart", h, rn),
      function () {
        (on = on.filter(function (g) {
          return g !== l;
        })),
          document.removeEventListener("wheel", u, rn),
          document.removeEventListener("touchmove", u, rn),
          document.removeEventListener("touchstart", h, rn);
      }
    );
  }, []);
  var y = e.removeScrollBar,
    S = e.inert;
  return m.createElement(
    m.Fragment,
    null,
    S ? m.createElement(l, { styles: Hg(o) }) : null,
    y ? m.createElement(zg, { gapMode: e.gapMode }) : null,
  );
}
function Gg(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const Yg = kg(cf, Kg);
var vf = m.forwardRef(function (e, t) {
  return m.createElement(il, tt({}, e, { ref: t, sideCar: Yg }));
});
vf.classNames = il.classNames;
var Xg = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  ln = new WeakMap(),
  eo = new WeakMap(),
  to = {},
  Bl = 0,
  hf = function (e) {
    return e && (e.host || hf(e.parentNode));
  },
  Zg = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = hf(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Jg = function (e, t, n, r) {
    var o = Zg(t, Array.isArray(e) ? e : [e]);
    to[n] || (to[n] = new WeakMap());
    var l = to[n],
      i = [],
      s = new Set(),
      u = new Set(o),
      a = function (f) {
        !f || s.has(f) || (s.add(f), a(f.parentNode));
      };
    o.forEach(a);
    var h = function (f) {
      !f ||
        u.has(f) ||
        Array.prototype.forEach.call(f.children, function (v) {
          if (s.has(v)) h(v);
          else
            try {
              var y = v.getAttribute(r),
                S = y !== null && y !== "false",
                g = (ln.get(v) || 0) + 1,
                E = (l.get(v) || 0) + 1;
              ln.set(v, g),
                l.set(v, E),
                i.push(v),
                g === 1 && S && eo.set(v, !0),
                E === 1 && v.setAttribute(n, "true"),
                S || v.setAttribute(r, "true");
            } catch (d) {
              console.error("aria-hidden: cannot operate on ", v, d);
            }
        });
    };
    return (
      h(t),
      s.clear(),
      Bl++,
      function () {
        i.forEach(function (f) {
          var v = ln.get(f) - 1,
            y = l.get(f) - 1;
          ln.set(f, v),
            l.set(f, y),
            v || (eo.has(f) || f.removeAttribute(r), eo.delete(f)),
            y || f.removeAttribute(n);
        }),
          Bl--,
          Bl ||
            ((ln = new WeakMap()),
            (ln = new WeakMap()),
            (eo = new WeakMap()),
            (to = {}));
      }
    );
  },
  qg = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = Xg(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        Jg(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Qs = "Dialog",
  [gf, Uy] = Ws(Qs),
  [ey, Ye] = gf(Qs),
  yf = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: l,
        modal: i = !0,
      } = e,
      s = m.useRef(null),
      u = m.useRef(null),
      [a = !1, h] = tf({ prop: r, defaultProp: o, onChange: l });
    return w.jsx(ey, {
      scope: t,
      triggerRef: s,
      contentRef: u,
      contentId: Al(),
      titleId: Al(),
      descriptionId: Al(),
      open: a,
      onOpenChange: h,
      onOpenToggle: m.useCallback(() => h((f) => !f), [h]),
      modal: i,
      children: n,
    });
  };
yf.displayName = Qs;
var wf = "DialogTrigger",
  ty = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Ye(wf, n),
      l = Qe(t, o.triggerRef);
    return w.jsx(ce.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Ys(o.open),
      ...r,
      ref: l,
      onClick: re(e.onClick, o.onOpenToggle),
    });
  });
ty.displayName = wf;
var Ks = "DialogPortal",
  [ny, xf] = gf(Ks, { forceMount: void 0 }),
  Sf = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      l = Ye(Ks, t);
    return w.jsx(ny, {
      scope: t,
      forceMount: n,
      children: m.Children.map(r, (i) =>
        w.jsx(Mr, {
          present: n || l.open,
          children: w.jsx(Hs, { asChild: !0, container: o, children: i }),
        }),
      ),
    });
  };
Sf.displayName = Ks;
var Vo = "DialogOverlay",
  Ef = m.forwardRef((e, t) => {
    const n = xf(Vo, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      l = Ye(Vo, e.__scopeDialog);
    return l.modal
      ? w.jsx(Mr, {
          present: r || l.open,
          children: w.jsx(ry, { ...o, ref: t }),
        })
      : null;
  });
Ef.displayName = Vo;
var ry = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Ye(Vo, n);
    return w.jsx(vf, {
      as: jn,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: w.jsx(ce.div, {
        "data-state": Ys(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  qt = "DialogContent",
  kf = m.forwardRef((e, t) => {
    const n = xf(qt, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      l = Ye(qt, e.__scopeDialog);
    return w.jsx(Mr, {
      present: r || l.open,
      children: l.modal
        ? w.jsx(oy, { ...o, ref: t })
        : w.jsx(ly, { ...o, ref: t }),
    });
  });
kf.displayName = qt;
var oy = m.forwardRef((e, t) => {
    const n = Ye(qt, e.__scopeDialog),
      r = m.useRef(null),
      o = Qe(t, n.contentRef, r);
    return (
      m.useEffect(() => {
        const l = r.current;
        if (l) return qg(l);
      }, []),
      w.jsx(Cf, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: re(e.onCloseAutoFocus, (l) => {
          var i;
          l.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: re(e.onPointerDownOutside, (l) => {
          const i = l.detail.originalEvent,
            s = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || s) && l.preventDefault();
        }),
        onFocusOutside: re(e.onFocusOutside, (l) => l.preventDefault()),
      })
    );
  }),
  ly = m.forwardRef((e, t) => {
    const n = Ye(qt, e.__scopeDialog),
      r = m.useRef(!1),
      o = m.useRef(!1);
    return w.jsx(Cf, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (l) => {
        var i, s;
        (i = e.onCloseAutoFocus) == null || i.call(e, l),
          l.defaultPrevented ||
            (r.current || (s = n.triggerRef.current) == null || s.focus(),
            l.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (l) => {
        var u, a;
        (u = e.onInteractOutside) == null || u.call(e, l),
          l.defaultPrevented ||
            ((r.current = !0),
            l.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const i = l.target;
        ((a = n.triggerRef.current) == null ? void 0 : a.contains(i)) &&
          l.preventDefault(),
          l.detail.originalEvent.type === "focusin" &&
            o.current &&
            l.preventDefault();
      },
    });
  }),
  Cf = m.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: l,
        ...i
      } = e,
      s = Ye(qt, n),
      u = m.useRef(null),
      a = Qe(t, u);
    return (
      pg(),
      w.jsxs(w.Fragment, {
        children: [
          w.jsx(lf, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: l,
            children: w.jsx(Bs, {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Ys(s.open),
              ...i,
              ref: a,
              onDismiss: () => s.onOpenChange(!1),
            }),
          }),
          w.jsxs(w.Fragment, {
            children: [
              w.jsx(iy, { titleId: s.titleId }),
              w.jsx(uy, { contentRef: u, descriptionId: s.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Gs = "DialogTitle",
  Nf = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Ye(Gs, n);
    return w.jsx(ce.h2, { id: o.titleId, ...r, ref: t });
  });
Nf.displayName = Gs;
var Pf = "DialogDescription",
  Tf = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Ye(Pf, n);
    return w.jsx(ce.p, { id: o.descriptionId, ...r, ref: t });
  });
Tf.displayName = Pf;
var _f = "DialogClose",
  Rf = m.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Ye(_f, n);
    return w.jsx(ce.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: re(e.onClick, () => o.onOpenChange(!1)),
    });
  });
Rf.displayName = _f;
function Ys(e) {
  return e ? "open" : "closed";
}
var Lf = "DialogTitleWarning",
  [Vy, Of] = Vh(Lf, { contentName: qt, titleName: Gs, docsSlug: "dialog" }),
  iy = ({ titleId: e }) => {
    const t = Of(Lf),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      m.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  sy = "DialogDescriptionWarning",
  uy = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Of(sy).contentName}}.`;
    return (
      m.useEffect(() => {
        var l;
        const o =
          (l = e.current) == null ? void 0 : l.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  ay = yf,
  cy = Sf,
  Mf = Ef,
  If = kf,
  jf = Nf,
  Df = Tf,
  dy = Rf;
const fy = ay,
  py = cy,
  zf = m.forwardRef(({ className: e, ...t }, n) =>
    w.jsx(Mf, {
      ref: n,
      className: Ce(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e,
      ),
      ...t,
    }),
  );
zf.displayName = Mf.displayName;
const Af = m.forwardRef(({ className: e, children: t, ...n }, r) =>
  w.jsxs(py, {
    children: [
      w.jsx(zf, {}),
      w.jsxs(If, {
        ref: r,
        className: Ce(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950",
          e,
        ),
        ...n,
        children: [
          t,
          w.jsxs(dy, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400",
            children: [
              w.jsx(Vs, { className: "h-4 w-4" }),
              w.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
Af.displayName = If.displayName;
const Ff = m.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(jf, {
    ref: n,
    className: Ce("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
Ff.displayName = jf.displayName;
const bf = m.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(Df, {
    ref: n,
    className: Ce("text-sm text-neutral-500 dark:text-neutral-400", e),
    ...t,
  }),
);
bf.displayName = Df.displayName;
function my() {
  const {
      isModalOpen: e,
      isFullscreen: t,
      videos: n,
      currentVideoIndex: r,
      videoRef: o,
      isPlaying: l,
      isAnalyzing: i,
      detectedItems: s,
      setIsModalOpen: u,
      setIsPlaying: a,
      setCurrentVideoIndex: h,
      setIsFullscreen: f,
    } = ll(),
    v = () => {
      u(!1), o.current && o.current.pause(), a(!1);
    },
    y = () => {
      o.current &&
        (l
          ? o.current.pause()
          : o.current.play().catch((d) => {
              console.error("Error playing video:", d);
            }),
        a(!l));
    },
    S = (d) => {
      o.current &&
        ((o.current.currentTime = d),
        l ||
          (o.current.play().catch((c) => {
            console.error("Error playing video:", c);
          }),
          a(!0)));
    },
    g = (d) => {
      if (r === null) return;
      let c;
      d === "prev"
        ? (c = r > 0 ? r - 1 : n.length - 1)
        : (c = r < n.length - 1 ? r + 1 : 0),
        h(c);
    },
    E = () => {
      f(!t);
    };
  return (
    m.useEffect(() => {
      e && o.current && r !== null && ((o.current.src = n[r].url), a(!1));
    }, [e, n, r]),
    w.jsx(fy, {
      open: e,
      onOpenChange: v,
      children: w.jsxs(Af, {
        className: `max-w-7xl w-full ${t ? "h-screen" : "h-[90vh]"} p-0 bg-gray-900 flex flex-col border-0`,
        children: [
          w.jsx(Ff, { className: "sr-only", children: "Analyzed Video" }),
          w.jsx(bf, {
            className: "sr-only",
            children: "Video playback and analysis results",
          }),
          w.jsxs("div", {
            className: "flex flex-col h-full",
            children: [
              w.jsxs("div", {
                className: "flex-grow relative bg-black",
                children: [
                  n.length > 0 &&
                    r !== null &&
                    w.jsx("video", {
                      ref: o,
                      src: n[r].url,
                      className:
                        "absolute inset-0 w-full h-full object-contain",
                      children: "Your browser does not support the video tag.",
                    }),
                  w.jsxs("div", {
                    className:
                      "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4",
                    children: [
                      w.jsx(qe, {
                        variant: "secondary",
                        size: "icon",
                        onClick: () => g("prev"),
                        className: "bg-white/20 hover:bg-white/30 text-white",
                        children: w.jsx(Rh, { className: "h-6 w-6" }),
                      }),
                      w.jsx(qe, {
                        variant: "secondary",
                        size: "icon",
                        onClick: y,
                        className: "bg-white/20 hover:bg-white/30 text-white",
                        children: l
                          ? w.jsx(jh, { className: "h-6 w-6" })
                          : w.jsx(Dh, { className: "h-6 w-6" }),
                      }),
                      w.jsx(qe, {
                        variant: "secondary",
                        size: "icon",
                        onClick: () => g("next"),
                        className: "bg-white/20 hover:bg-white/30 text-white",
                        children: w.jsx(Lh, { className: "h-6 w-6" }),
                      }),
                    ],
                  }),
                ],
              }),
              w.jsxs("div", {
                className:
                  "p-4 bg-gray-800 text-white border-t border-gray-700 overflow-y-auto max-h-[30vh]",
                children: [
                  w.jsx("h3", {
                    className: "text-lg font-medium mb-2",
                    children: "Detected Items:",
                  }),
                  i
                    ? w.jsx("div", {
                        className: "flex items-center justify-center h-20",
                        children: w.jsx("div", {
                          className:
                            "animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500",
                        }),
                      })
                    : w.jsx("ul", {
                        className: "space-y-2",
                        children: s.map((d, c) =>
                          w.jsxs(
                            "li",
                            {
                              className:
                                "flex items-center justify-between bg-gray-700 p-2 rounded-md",
                              children: [
                                w.jsx("span", { children: d.name }),
                                w.jsxs(qe, {
                                  variant: "outline",
                                  size: "sm",
                                  onClick: () => S(d.timestamp),
                                  className:
                                    "text-blue-400 hover:text-blue-300 border-blue-400 hover:border-blue-300",
                                  children: ["Go to ", d.timestamp, "s"],
                                }),
                              ],
                            },
                            c,
                          ),
                        ),
                      }),
                ],
              }),
            ],
          }),
          w.jsxs("div", {
            className: "absolute top-2 right-2 flex space-x-2",
            children: [
              w.jsx(qe, {
                variant: "ghost",
                size: "icon",
                onClick: E,
                className: "text-white hover:bg-white/20",
                children: t
                  ? w.jsx(Ih, { className: "h-5 w-5" })
                  : w.jsx(Mh, { className: "h-5 w-5" }),
              }),
              w.jsx(qe, {
                variant: "ghost",
                size: "icon",
                onClick: v,
                className: "text-white hover:bg-white/20",
                children: w.jsx(Vs, { className: "h-5 w-5" }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function vy(e) {
  const t = e + "CollectionProvider",
    [n, r] = Ws(t),
    [o, l] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (y) => {
      const { scope: S, children: g } = y,
        E = wt.useRef(null),
        d = wt.useRef(new Map()).current;
      return w.jsx(o, { scope: S, itemMap: d, collectionRef: E, children: g });
    };
  i.displayName = t;
  const s = e + "CollectionSlot",
    u = wt.forwardRef((y, S) => {
      const { scope: g, children: E } = y,
        d = l(s, g),
        c = Qe(S, d.collectionRef);
      return w.jsx(jn, { ref: c, children: E });
    });
  u.displayName = s;
  const a = e + "CollectionItemSlot",
    h = "data-radix-collection-item",
    f = wt.forwardRef((y, S) => {
      const { scope: g, children: E, ...d } = y,
        c = wt.useRef(null),
        p = Qe(S, c),
        x = l(a, g);
      return (
        wt.useEffect(
          () => (
            x.itemMap.set(c, { ref: c, ...d }), () => void x.itemMap.delete(c)
          ),
        ),
        w.jsx(jn, { [h]: "", ref: p, children: E })
      );
    });
  f.displayName = a;
  function v(y) {
    const S = l(e + "CollectionConsumer", y);
    return wt.useCallback(() => {
      const E = S.collectionRef.current;
      if (!E) return [];
      const d = Array.from(E.querySelectorAll(`[${h}]`));
      return Array.from(S.itemMap.values()).sort(
        (x, k) => d.indexOf(x.ref.current) - d.indexOf(k.ref.current),
      );
    }, [S.collectionRef, S.itemMap]);
  }
  return [{ Provider: i, Slot: u, ItemSlot: f }, v, r];
}
var hy = "VisuallyHidden",
  Xs = m.forwardRef((e, t) =>
    w.jsx(ce.span, {
      ...e,
      ref: t,
      style: {
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style,
      },
    }),
  );
Xs.displayName = hy;
var Zs = "ToastProvider",
  [Js, gy, yy] = vy("Toast"),
  [$f, Wy] = Ws("Toast", [yy]),
  [wy, sl] = $f(Zs),
  Uf = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: l = 50,
        children: i,
      } = e,
      [s, u] = m.useState(null),
      [a, h] = m.useState(0),
      f = m.useRef(!1),
      v = m.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Zs}\`. Expected non-empty \`string\`.`,
        ),
      w.jsx(Js.Provider, {
        scope: t,
        children: w.jsx(wy, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: l,
          toastCount: a,
          viewport: s,
          onViewportChange: u,
          onToastAdd: m.useCallback(() => h((y) => y + 1), []),
          onToastRemove: m.useCallback(() => h((y) => y - 1), []),
          isFocusedToastEscapeKeyDownRef: f,
          isClosePausedRef: v,
          children: i,
        }),
      })
    );
  };
Uf.displayName = Zs;
var Vf = "ToastViewport",
  xy = ["F8"],
  Vi = "toast.viewportPause",
  Wi = "toast.viewportResume",
  Wf = m.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = xy,
        label: o = "Notifications ({hotkey})",
        ...l
      } = e,
      i = sl(Vf, n),
      s = gy(n),
      u = m.useRef(null),
      a = m.useRef(null),
      h = m.useRef(null),
      f = m.useRef(null),
      v = Qe(t, f, i.onViewportChange),
      y = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      S = i.toastCount > 0;
    m.useEffect(() => {
      const E = (d) => {
        var p;
        r.every((x) => d[x] || d.code === x) &&
          ((p = f.current) == null || p.focus());
      };
      return (
        document.addEventListener("keydown", E),
        () => document.removeEventListener("keydown", E)
      );
    }, [r]),
      m.useEffect(() => {
        const E = u.current,
          d = f.current;
        if (S && E && d) {
          const c = () => {
              if (!i.isClosePausedRef.current) {
                const P = new CustomEvent(Vi);
                d.dispatchEvent(P), (i.isClosePausedRef.current = !0);
              }
            },
            p = () => {
              if (i.isClosePausedRef.current) {
                const P = new CustomEvent(Wi);
                d.dispatchEvent(P), (i.isClosePausedRef.current = !1);
              }
            },
            x = (P) => {
              !E.contains(P.relatedTarget) && p();
            },
            k = () => {
              E.contains(document.activeElement) || p();
            };
          return (
            E.addEventListener("focusin", c),
            E.addEventListener("focusout", x),
            E.addEventListener("pointermove", c),
            E.addEventListener("pointerleave", k),
            window.addEventListener("blur", c),
            window.addEventListener("focus", p),
            () => {
              E.removeEventListener("focusin", c),
                E.removeEventListener("focusout", x),
                E.removeEventListener("pointermove", c),
                E.removeEventListener("pointerleave", k),
                window.removeEventListener("blur", c),
                window.removeEventListener("focus", p);
            }
          );
        }
      }, [S, i.isClosePausedRef]);
    const g = m.useCallback(
      ({ tabbingDirection: E }) => {
        const c = s().map((p) => {
          const x = p.ref.current,
            k = [x, ...Iy(x)];
          return E === "forwards" ? k : k.reverse();
        });
        return (E === "forwards" ? c.reverse() : c).flat();
      },
      [s],
    );
    return (
      m.useEffect(() => {
        const E = f.current;
        if (E) {
          const d = (c) => {
            var k, P, C;
            const p = c.altKey || c.ctrlKey || c.metaKey;
            if (c.key === "Tab" && !p) {
              const T = document.activeElement,
                D = c.shiftKey;
              if (c.target === E && D) {
                (k = a.current) == null || k.focus();
                return;
              }
              const z = g({ tabbingDirection: D ? "backwards" : "forwards" }),
                Ne = z.findIndex((M) => M === T);
              Hl(z.slice(Ne + 1))
                ? c.preventDefault()
                : D
                  ? (P = a.current) == null || P.focus()
                  : (C = h.current) == null || C.focus();
            }
          };
          return (
            E.addEventListener("keydown", d),
            () => E.removeEventListener("keydown", d)
          );
        }
      }, [s, g]),
      w.jsxs(tg, {
        ref: u,
        role: "region",
        "aria-label": o.replace("{hotkey}", y),
        tabIndex: -1,
        style: { pointerEvents: S ? void 0 : "none" },
        children: [
          S &&
            w.jsx(Bi, {
              ref: a,
              onFocusFromOutsideViewport: () => {
                const E = g({ tabbingDirection: "forwards" });
                Hl(E);
              },
            }),
          w.jsx(Js.Slot, {
            scope: n,
            children: w.jsx(ce.ol, { tabIndex: -1, ...l, ref: v }),
          }),
          S &&
            w.jsx(Bi, {
              ref: h,
              onFocusFromOutsideViewport: () => {
                const E = g({ tabbingDirection: "backwards" });
                Hl(E);
              },
            }),
        ],
      })
    );
  });
Wf.displayName = Vf;
var Bf = "ToastFocusProxy",
  Bi = m.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      l = sl(Bf, n);
    return w.jsx(Xs, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (i) => {
        var a;
        const s = i.relatedTarget;
        !((a = l.viewport) != null && a.contains(s)) && r();
      },
    });
  });
Bi.displayName = Bf;
var ul = "Toast",
  Sy = "toast.swipeStart",
  Ey = "toast.swipeMove",
  ky = "toast.swipeCancel",
  Cy = "toast.swipeEnd",
  Hf = m.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: l, ...i } = e,
      [s = !0, u] = tf({ prop: r, defaultProp: o, onChange: l });
    return w.jsx(Mr, {
      present: n || s,
      children: w.jsx(Ty, {
        open: s,
        ...i,
        ref: t,
        onClose: () => u(!1),
        onPause: Ke(e.onPause),
        onResume: Ke(e.onResume),
        onSwipeStart: re(e.onSwipeStart, (a) => {
          a.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: re(e.onSwipeMove, (a) => {
          const { x: h, y: f } = a.detail.delta;
          a.currentTarget.setAttribute("data-swipe", "move"),
            a.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${h}px`,
            ),
            a.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${f}px`,
            );
        }),
        onSwipeCancel: re(e.onSwipeCancel, (a) => {
          a.currentTarget.setAttribute("data-swipe", "cancel"),
            a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            a.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            a.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: re(e.onSwipeEnd, (a) => {
          const { x: h, y: f } = a.detail.delta;
          a.currentTarget.setAttribute("data-swipe", "end"),
            a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            a.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${h}px`,
            ),
            a.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${f}px`,
            ),
            u(!1);
        }),
      }),
    });
  });
Hf.displayName = ul;
var [Ny, Py] = $f(ul, { onClose() {} }),
  Ty = m.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: l,
        onClose: i,
        onEscapeKeyDown: s,
        onPause: u,
        onResume: a,
        onSwipeStart: h,
        onSwipeMove: f,
        onSwipeCancel: v,
        onSwipeEnd: y,
        ...S
      } = e,
      g = sl(ul, n),
      [E, d] = m.useState(null),
      c = Qe(t, (M) => d(M)),
      p = m.useRef(null),
      x = m.useRef(null),
      k = o || g.duration,
      P = m.useRef(0),
      C = m.useRef(k),
      T = m.useRef(0),
      { onToastAdd: D, onToastRemove: O } = g,
      H = Ke(() => {
        var le;
        (E == null ? void 0 : E.contains(document.activeElement)) &&
          ((le = g.viewport) == null || le.focus()),
          i();
      }),
      z = m.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(T.current),
            (P.current = new Date().getTime()),
            (T.current = window.setTimeout(H, M)));
        },
        [H],
      );
    m.useEffect(() => {
      const M = g.viewport;
      if (M) {
        const le = () => {
            z(C.current), a == null || a();
          },
          ie = () => {
            const Me = new Date().getTime() - P.current;
            (C.current = C.current - Me),
              window.clearTimeout(T.current),
              u == null || u();
          };
        return (
          M.addEventListener(Vi, ie),
          M.addEventListener(Wi, le),
          () => {
            M.removeEventListener(Vi, ie), M.removeEventListener(Wi, le);
          }
        );
      }
    }, [g.viewport, k, u, a, z]),
      m.useEffect(() => {
        l && !g.isClosePausedRef.current && z(k);
      }, [l, k, g.isClosePausedRef, z]),
      m.useEffect(() => (D(), () => O()), [D, O]);
    const Ne = m.useMemo(() => (E ? Jf(E) : null), [E]);
    return g.viewport
      ? w.jsxs(w.Fragment, {
          children: [
            Ne &&
              w.jsx(_y, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: Ne,
              }),
            w.jsx(Ny, {
              scope: n,
              onClose: H,
              children: Or.createPortal(
                w.jsx(Js.ItemSlot, {
                  scope: n,
                  children: w.jsx(eg, {
                    asChild: !0,
                    onEscapeKeyDown: re(s, () => {
                      g.isFocusedToastEscapeKeyDownRef.current || H(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: w.jsx(ce.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": l ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...S,
                      ref: c,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: re(e.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (s == null || s(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            H()));
                      }),
                      onPointerDown: re(e.onPointerDown, (M) => {
                        M.button === 0 &&
                          (p.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: re(e.onPointerMove, (M) => {
                        if (!p.current) return;
                        const le = M.clientX - p.current.x,
                          ie = M.clientY - p.current.y,
                          Me = !!x.current,
                          _ = ["left", "right"].includes(g.swipeDirection),
                          L = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          I = _ ? L(0, le) : 0,
                          F = _ ? 0 : L(0, ie),
                          X = M.pointerType === "touch" ? 10 : 2,
                          ot = { x: I, y: F },
                          Xe = { originalEvent: M, delta: ot };
                        Me
                          ? ((x.current = ot), no(Ey, f, Xe, { discrete: !1 }))
                          : Na(ot, g.swipeDirection, X)
                            ? ((x.current = ot),
                              no(Sy, h, Xe, { discrete: !1 }),
                              M.target.setPointerCapture(M.pointerId))
                            : (Math.abs(le) > X || Math.abs(ie) > X) &&
                              (p.current = null);
                      }),
                      onPointerUp: re(e.onPointerUp, (M) => {
                        const le = x.current,
                          ie = M.target;
                        if (
                          (ie.hasPointerCapture(M.pointerId) &&
                            ie.releasePointerCapture(M.pointerId),
                          (x.current = null),
                          (p.current = null),
                          le)
                        ) {
                          const Me = M.currentTarget,
                            _ = { originalEvent: M, delta: le };
                          Na(le, g.swipeDirection, g.swipeThreshold)
                            ? no(Cy, y, _, { discrete: !0 })
                            : no(ky, v, _, { discrete: !0 }),
                            Me.addEventListener(
                              "click",
                              (L) => L.preventDefault(),
                              { once: !0 },
                            );
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport,
              ),
            }),
          ],
        })
      : null;
  }),
  _y = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = sl(ul, t),
      [l, i] = m.useState(!1),
      [s, u] = m.useState(!1);
    return (
      Oy(() => i(!0)),
      m.useEffect(() => {
        const a = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(a);
      }, []),
      s
        ? null
        : w.jsx(Hs, {
            asChild: !0,
            children: w.jsx(Xs, {
              ...r,
              children:
                l && w.jsxs(w.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  Ry = "ToastTitle",
  Qf = m.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return w.jsx(ce.div, { ...r, ref: t });
  });
Qf.displayName = Ry;
var Ly = "ToastDescription",
  Kf = m.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return w.jsx(ce.div, { ...r, ref: t });
  });
Kf.displayName = Ly;
var Gf = "ToastAction",
  Yf = m.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? w.jsx(Zf, {
          altText: n,
          asChild: !0,
          children: w.jsx(qs, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Gf}\`. Expected non-empty \`string\`.`,
        ),
        null);
  });
Yf.displayName = Gf;
var Xf = "ToastClose",
  qs = m.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = Py(Xf, n);
    return w.jsx(Zf, {
      asChild: !0,
      children: w.jsx(ce.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: re(e.onClick, o.onClose),
      }),
    });
  });
qs.displayName = Xf;
var Zf = m.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return w.jsx(ce.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Jf(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        My(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          l = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (l) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...Jf(r));
      }
    }),
    t
  );
}
function no(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    l = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Yd(o, l) : o.dispatchEvent(l);
}
var Na = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    l = r > o;
  return t === "left" || t === "right" ? l && r > n : !l && o > n;
};
function Oy(e = () => {}) {
  const t = Ke(e);
  Nr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function My(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Iy(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Hl(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
var jy = Uf,
  qf = Wf,
  ep = Hf,
  tp = Qf,
  np = Kf,
  rp = Yf,
  op = qs;
const Dy = jy,
  lp = m.forwardRef(({ className: e, ...t }, n) =>
    w.jsx(qf, {
      ref: n,
      className: Ce(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e,
      ),
      ...t,
    }),
  );
lp.displayName = qf.displayName;
const zy = bs(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  ip = m.forwardRef(({ className: e, variant: t, ...n }, r) =>
    w.jsx(ep, { ref: r, className: Ce(zy({ variant: t }), e), ...n }),
  );
ip.displayName = ep.displayName;
const Ay = m.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(rp, {
    ref: n,
    className: Ce(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      e,
    ),
    ...t,
  }),
);
Ay.displayName = rp.displayName;
const Fy = m.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(op, {
    ref: n,
    className: Ce(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e,
    ),
    "toast-close": "",
    ...t,
    children: w.jsx(Vs, { className: "h-4 w-4" }),
  }),
);
Fy.displayName = op.displayName;
const sp = m.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(tp, { ref: n, className: Ce("text-sm font-semibold", e), ...t }),
);
sp.displayName = tp.displayName;
const up = m.forwardRef(({ className: e, ...t }, n) =>
  w.jsx(np, { ref: n, className: Ce("text-sm opacity-90", e), ...t }),
);
up.displayName = np.displayName;
function by({ message: e, duration: t = 5e3, onClose: n }) {
  const [r, o] = m.useState(!0);
  return (
    m.useEffect(() => {
      const l = setTimeout(() => {
        o(!1), n && n();
      }, t);
      return () => clearTimeout(l);
    }, [t, n]),
    w.jsxs(Dy, {
      children: [
        w.jsx(ip, {
          open: r,
          onOpenChange: o,
          className: "bg-red-600",
          children: w.jsxs("div", {
            className: "flex items-start gap-2",
            children: [
              w.jsx(Oh, { className: "h-5 w-5 text-white" }),
              w.jsxs("div", {
                className: "grid gap-1 text-white",
                children: [
                  w.jsx(sp, { children: "Error" }),
                  w.jsx(up, { children: e }),
                ],
              }),
            ],
          }),
        }),
        w.jsx(lp, {}),
      ],
    })
  );
}
function $y() {
  const { showToast: e, setShowToast: t, errorMessage: n } = ll();
  return w.jsxs("div", {
    className: "flex h-screen bg-gray-100 text-gray-800",
    children: [
      w.jsx($h, {}),
      w.jsx(Uh, {}),
      w.jsx(my, {}),
      e && w.jsx(by, { message: n, onClose: () => t(!1) }),
    ],
  });
}
bd(document.getElementById("root")).render(
  w.jsx(m.StrictMode, { children: w.jsx(bh, { children: w.jsx($y, {}) }) }),
);
