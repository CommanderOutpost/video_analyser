function Ef(e, t) {
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
function sa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var aa = { exports: {} },
  Fo = {},
  ca = { exports: {} },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sr = Symbol.for("react.element"),
  Cf = Symbol.for("react.portal"),
  Nf = Symbol.for("react.fragment"),
  Pf = Symbol.for("react.strict_mode"),
  _f = Symbol.for("react.profiler"),
  Rf = Symbol.for("react.provider"),
  Tf = Symbol.for("react.context"),
  zf = Symbol.for("react.forward_ref"),
  Lf = Symbol.for("react.suspense"),
  Of = Symbol.for("react.memo"),
  Mf = Symbol.for("react.lazy"),
  Au = Symbol.iterator;
function jf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Au && e[Au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var da = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  fa = Object.assign,
  pa = {};
function Ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pa),
    (this.updater = n || da);
}
Ln.prototype.isReactComponent = {};
Ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ma() {}
ma.prototype = Ln.prototype;
function Ii(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = pa),
    (this.updater = n || da);
}
var Ai = (Ii.prototype = new ma());
Ai.constructor = Ii;
fa(Ai, Ln.prototype);
Ai.isPureReactComponent = !0;
var Fu = Array.isArray,
  ha = Object.prototype.hasOwnProperty,
  Fi = { current: null },
  va = { key: !0, ref: !0, __self: !0, __source: !0 };
function ga(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      ha.call(t, r) && !va.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return {
    $$typeof: Sr,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Fi.current,
  };
}
function Df(e, t) {
  return {
    $$typeof: Sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ui(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Sr;
}
function If(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Uu = /\/+/g;
function ll(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? If("" + e.key)
    : t.toString(36);
}
function Zr(e, t, n, r, o) {
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
          case Sr:
          case Cf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === "" ? "." + ll(i, 0) : r),
      Fu(o)
        ? ((n = ""),
          e != null && (n = e.replace(Uu, "$&/") + "/"),
          Zr(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Ui(o) &&
            (o = Df(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Uu, "$&/") + "/") +
                e,
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Fu(e)))
    for (var u = 0; u < e.length; u++) {
      l = e[u];
      var s = r + ll(l, u);
      i += Zr(l, t, n, s, o);
    }
  else if (((s = jf(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(l = e.next()).done; )
      (l = l.value), (s = r + ll(l, u++)), (i += Zr(l, t, n, s, o));
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
function Tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Zr(e, r, "", "", function (l) {
      return t.call(n, l, o++);
    }),
    r
  );
}
function Af(e) {
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
var fe = { current: null },
  Jr = { transition: null },
  Ff = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Jr,
    ReactCurrentOwner: Fi,
  };
function ya() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
  map: Tr,
  forEach: function (e, t, n) {
    Tr(
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
      Tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ui(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
j.Component = Ln;
j.Fragment = Nf;
j.Profiler = _f;
j.PureComponent = Ii;
j.StrictMode = Pf;
j.Suspense = Lf;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ff;
j.act = ya;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = fa({}, e.props),
    o = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Fi.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ha.call(t, s) &&
        !va.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: Sr, type: e.type, key: o, ref: l, props: r, _owner: i };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: Tf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Rf, _context: e }),
    (e.Consumer = e)
  );
};
j.createElement = ga;
j.createFactory = function (e) {
  var t = ga.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return { current: null };
};
j.forwardRef = function (e) {
  return { $$typeof: zf, render: e };
};
j.isValidElement = Ui;
j.lazy = function (e) {
  return { $$typeof: Mf, _payload: { _status: -1, _result: e }, _init: Af };
};
j.memo = function (e, t) {
  return { $$typeof: Of, type: e, compare: t === void 0 ? null : t };
};
j.startTransition = function (e) {
  var t = Jr.transition;
  Jr.transition = {};
  try {
    e();
  } finally {
    Jr.transition = t;
  }
};
j.unstable_act = ya;
j.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
j.useContext = function (e) {
  return fe.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
j.useId = function () {
  return fe.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return fe.current.useRef(e);
};
j.useState = function (e) {
  return fe.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return fe.current.useTransition();
};
j.version = "18.3.1";
ca.exports = j;
var v = ca.exports;
const Uf = sa(v),
  $f = Ef({ __proto__: null, default: Uf }, [v]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vf = v,
  Wf = Symbol.for("react.element"),
  bf = Symbol.for("react.fragment"),
  Bf = Object.prototype.hasOwnProperty,
  Hf = Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Qf = { key: !0, ref: !0, __self: !0, __source: !0 };
function wa(e, t, n) {
  var r,
    o = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Bf.call(t, r) && !Qf.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Wf,
    type: e,
    key: l,
    ref: i,
    props: o,
    _owner: Hf.current,
  };
}
Fo.Fragment = bf;
Fo.jsx = wa;
Fo.jsxs = wa;
aa.exports = Fo;
var S = aa.exports,
  xa = { exports: {} },
  Ee = {},
  Sa = { exports: {} },
  ka = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, z) {
    var O = _.length;
    _.push(z);
    e: for (; 0 < O; ) {
      var A = (O - 1) >>> 1,
        q = _[A];
      if (0 < o(q, z)) (_[A] = z), (_[O] = q), (O = A);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var z = _[0],
      O = _.pop();
    if (O !== z) {
      _[0] = O;
      e: for (var A = 0, q = _.length, _r = q >>> 1; A < _r; ) {
        var Mt = 2 * (A + 1) - 1,
          ol = _[Mt],
          jt = Mt + 1,
          Rr = _[jt];
        if (0 > o(ol, O))
          jt < q && 0 > o(Rr, ol)
            ? ((_[A] = Rr), (_[jt] = O), (A = jt))
            : ((_[A] = ol), (_[Mt] = O), (A = Mt));
        else if (jt < q && 0 > o(Rr, O)) (_[A] = Rr), (_[jt] = O), (A = jt);
        else break e;
      }
    }
    return z;
  }
  function o(_, z) {
    var O = _.sortIndex - z.sortIndex;
    return O !== 0 ? O : _.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    h = 1,
    f = null,
    p = 3,
    y = !1,
    x = !1,
    g = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(_) {
    for (var z = n(a); z !== null; ) {
      if (z.callback === null) r(a);
      else if (z.startTime <= _)
        r(a), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(a);
    }
  }
  function w(_) {
    if (((g = !1), m(_), !x))
      if (n(s) !== null) (x = !0), it(C);
      else {
        var z = n(a);
        z !== null && Jt(w, z.startTime - _);
      }
  }
  function C(_, z) {
    (x = !1), g && ((g = !1), d(R), (R = -1)), (y = !0);
    var O = p;
    try {
      for (
        m(z), f = n(s);
        f !== null && (!(f.expirationTime > z) || (_ && !ae()));

      ) {
        var A = f.callback;
        if (typeof A == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var q = A(f.expirationTime <= z);
          (z = e.unstable_now()),
            typeof q == "function" ? (f.callback = q) : f === n(s) && r(s),
            m(z);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var _r = !0;
      else {
        var Mt = n(a);
        Mt !== null && Jt(w, Mt.startTime - z), (_r = !1);
      }
      return _r;
    } finally {
      (f = null), (p = O), (y = !1);
    }
  }
  var P = !1,
    N = null,
    R = -1,
    I = 5,
    L = -1;
  function ae() {
    return !(e.unstable_now() - L < I);
  }
  function F() {
    if (N !== null) {
      var _ = e.unstable_now();
      L = _;
      var z = !0;
      try {
        z = N(!0, _);
      } finally {
        z ? lt() : ((P = !1), (N = null));
      }
    } else P = !1;
  }
  var lt;
  if (typeof c == "function")
    lt = function () {
      c(F);
    };
  else if (typeof MessageChannel < "u") {
    var Ot = new MessageChannel(),
      Pr = Ot.port2;
    (Ot.port1.onmessage = F),
      (lt = function () {
        Pr.postMessage(null);
      });
  } else
    lt = function () {
      k(F, 0);
    };
  function it(_) {
    (N = _), P || ((P = !0), lt());
  }
  function Jt(_, z) {
    R = k(function () {
      _(e.unstable_now());
    }, z);
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
      x || y || ((x = !0), it(C));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var O = p;
      p = z;
      try {
        return _();
      } finally {
        p = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, z) {
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
      var O = p;
      p = _;
      try {
        return z();
      } finally {
        p = O;
      }
    }),
    (e.unstable_scheduleCallback = function (_, z, O) {
      var A = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? A + O : A))
          : (O = A),
        _)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = O + q),
        (_ = {
          id: h++,
          callback: z,
          priorityLevel: _,
          startTime: O,
          expirationTime: q,
          sortIndex: -1,
        }),
        O > A
          ? ((_.sortIndex = O),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (g ? (d(R), (R = -1)) : (g = !0), Jt(w, O - A)))
          : ((_.sortIndex = q), t(s, _), x || y || ((x = !0), it(C))),
        _
      );
    }),
    (e.unstable_shouldYield = ae),
    (e.unstable_wrapCallback = function (_) {
      var z = p;
      return function () {
        var O = p;
        p = z;
        try {
          return _.apply(this, arguments);
        } finally {
          p = O;
        }
      };
    });
})(ka);
Sa.exports = ka;
var Gf = Sa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kf = v,
  ke = Gf;
function E(e) {
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
var Ea = new Set(),
  or = {};
function Yt(e, t) {
  Cn(e, t), Cn(e + "Capture", t);
}
function Cn(e, t) {
  for (or[e] = t, e = 0; e < t.length; e++) Ea.add(t[e]);
}
var et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  $l = Object.prototype.hasOwnProperty,
  Yf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $u = {},
  Vu = {};
function Xf(e) {
  return $l.call(Vu, e)
    ? !0
    : $l.call($u, e)
      ? !1
      : Yf.test(e)
        ? (Vu[e] = !0)
        : (($u[e] = !0), !1);
}
function Zf(e, t, n, r) {
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
function Jf(e, t, n, r) {
  if (t === null || typeof t > "u" || Zf(e, t, n, r)) return !0;
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
function pe(e, t, n, r, o, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  oe[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  oe[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    oe[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  oe[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  oe[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  oe[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  oe[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var $i = /[\-:]([a-z])/g;
function Vi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($i, Vi);
    oe[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace($i, Vi);
    oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace($i, Vi);
  oe[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
oe.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  oe[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Wi(e, t, n, r) {
  var o = oe.hasOwnProperty(t) ? oe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Jf(t, n, o, r) && (n = null),
    r || o === null
      ? Xf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var ot = Kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zr = Symbol.for("react.element"),
  rn = Symbol.for("react.portal"),
  on = Symbol.for("react.fragment"),
  bi = Symbol.for("react.strict_mode"),
  Vl = Symbol.for("react.profiler"),
  Ca = Symbol.for("react.provider"),
  Na = Symbol.for("react.context"),
  Bi = Symbol.for("react.forward_ref"),
  Wl = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  Hi = Symbol.for("react.memo"),
  dt = Symbol.for("react.lazy"),
  Pa = Symbol.for("react.offscreen"),
  Wu = Symbol.iterator;
function Dn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Wu && e[Wu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var G = Object.assign,
  il;
function Hn(e) {
  if (il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      il = (t && t[1]) || "";
    }
  return (
    `
` +
    il +
    e
  );
}
var ul = !1;
function sl(e, t) {
  if (!e || ul) return "";
  ul = !0;
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
          u = l.length - 1;
        1 <= i && 0 <= u && o[i] !== l[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (o[i] !== l[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || o[i] !== l[u])) {
                var s =
                  `
` + o[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (ul = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Hn(e) : "";
}
function qf(e) {
  switch (e.tag) {
    case 5:
      return Hn(e.type);
    case 16:
      return Hn("Lazy");
    case 13:
      return Hn("Suspense");
    case 19:
      return Hn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = sl(e.type, !1)), e;
    case 11:
      return (e = sl(e.type.render, !1)), e;
    case 1:
      return (e = sl(e.type, !0)), e;
    default:
      return "";
  }
}
function Bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case on:
      return "Fragment";
    case rn:
      return "Portal";
    case Vl:
      return "Profiler";
    case bi:
      return "StrictMode";
    case Wl:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Na:
        return (e.displayName || "Context") + ".Consumer";
      case Ca:
        return (e._context.displayName || "Context") + ".Provider";
      case Bi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Hi:
        return (
          (t = e.displayName || null), t !== null ? t : Bl(e.type) || "Memo"
        );
      case dt:
        (t = e._payload), (e = e._init);
        try {
          return Bl(e(t));
        } catch {}
    }
  return null;
}
function ep(e) {
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
      return Bl(t);
    case 8:
      return t === bi ? "StrictMode" : "Mode";
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
function Pt(e) {
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
function _a(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function tp(e) {
  var t = _a(e) ? "checked" : "value",
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
function Lr(e) {
  e._valueTracker || (e._valueTracker = tp(e));
}
function Ra(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = _a(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function fo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Hl(e, t) {
  var n = t.checked;
  return G({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function bu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Pt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ta(e, t) {
  (t = t.checked), t != null && Wi(e, "checked", t, !1);
}
function Ql(e, t) {
  Ta(e, t);
  var n = Pt(t.value),
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
    ? Gl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Gl(e, t.type, Pt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Bu(e, t, n) {
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
function Gl(e, t, n) {
  (t !== "number" || fo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Qn = Array.isArray;
function vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Pt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Kl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return G({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Hu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Qn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Pt(n) };
}
function za(e, t) {
  var n = Pt(t.value),
    r = Pt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Qu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function La(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Yl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? La(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Or,
  Oa = (function (e) {
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
        Or = Or || document.createElement("div"),
          Or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yn = {
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
  np = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yn).forEach(function (e) {
  np.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yn[t] = Yn[e]);
  });
});
function Ma(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Yn.hasOwnProperty(e) && Yn[e])
      ? ("" + t).trim()
      : t + "px";
}
function ja(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Ma(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var rp = G(
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
function Xl(e, t) {
  if (t) {
    if (rp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Zl(e, t) {
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
var Jl = null;
function Qi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ql = null,
  gn = null,
  yn = null;
function Gu(e) {
  if ((e = Cr(e))) {
    if (typeof ql != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = bo(t)), ql(e.stateNode, e.type, t));
  }
}
function Da(e) {
  gn ? (yn ? yn.push(e) : (yn = [e])) : (gn = e);
}
function Ia() {
  if (gn) {
    var e = gn,
      t = yn;
    if (((yn = gn = null), Gu(e), t)) for (e = 0; e < t.length; e++) Gu(t[e]);
  }
}
function Aa(e, t) {
  return e(t);
}
function Fa() {}
var al = !1;
function Ua(e, t, n) {
  if (al) return e(t, n);
  al = !0;
  try {
    return Aa(e, t, n);
  } finally {
    (al = !1), (gn !== null || yn !== null) && (Fa(), Ia());
  }
}
function ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = bo(n);
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
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var ei = !1;
if (et)
  try {
    var In = {};
    Object.defineProperty(In, "passive", {
      get: function () {
        ei = !0;
      },
    }),
      window.addEventListener("test", In, In),
      window.removeEventListener("test", In, In);
  } catch {
    ei = !1;
  }
function op(e, t, n, r, o, l, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (h) {
    this.onError(h);
  }
}
var Xn = !1,
  po = null,
  mo = !1,
  ti = null,
  lp = {
    onError: function (e) {
      (Xn = !0), (po = e);
    },
  };
function ip(e, t, n, r, o, l, i, u, s) {
  (Xn = !1), (po = null), op.apply(lp, arguments);
}
function up(e, t, n, r, o, l, i, u, s) {
  if ((ip.apply(this, arguments), Xn)) {
    if (Xn) {
      var a = po;
      (Xn = !1), (po = null);
    } else throw Error(E(198));
    mo || ((mo = !0), (ti = a));
  }
}
function Xt(e) {
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
function $a(e) {
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
function Ku(e) {
  if (Xt(e) !== e) throw Error(E(188));
}
function sp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xt(e)), t === null)) throw Error(E(188));
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
        if (l === n) return Ku(o), e;
        if (l === r) return Ku(o), t;
        l = l.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = o), (r = l);
    else {
      for (var i = !1, u = o.child; u; ) {
        if (u === n) {
          (i = !0), (n = o), (r = l);
          break;
        }
        if (u === r) {
          (i = !0), (r = o), (n = l);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = l.child; u; ) {
          if (u === n) {
            (i = !0), (n = l), (r = o);
            break;
          }
          if (u === r) {
            (i = !0), (r = l), (n = o);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Va(e) {
  return (e = sp(e)), e !== null ? Wa(e) : null;
}
function Wa(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wa(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ba = ke.unstable_scheduleCallback,
  Yu = ke.unstable_cancelCallback,
  ap = ke.unstable_shouldYield,
  cp = ke.unstable_requestPaint,
  Y = ke.unstable_now,
  dp = ke.unstable_getCurrentPriorityLevel,
  Gi = ke.unstable_ImmediatePriority,
  Ba = ke.unstable_UserBlockingPriority,
  ho = ke.unstable_NormalPriority,
  fp = ke.unstable_LowPriority,
  Ha = ke.unstable_IdlePriority,
  Uo = null,
  Be = null;
function pp(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function")
    try {
      Be.onCommitFiberRoot(Uo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var De = Math.clz32 ? Math.clz32 : vp,
  mp = Math.log,
  hp = Math.LN2;
function vp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((mp(e) / hp) | 0)) | 0;
}
var Mr = 64,
  jr = 4194304;
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
function vo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~o;
    u !== 0 ? (r = Gn(u)) : ((l &= i), l !== 0 && (r = Gn(l)));
  } else (i = n & ~o), i !== 0 ? (r = Gn(i)) : l !== 0 && (r = Gn(l));
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
      (n = 31 - De(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function gp(e, t) {
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
function yp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - De(l),
      u = 1 << i,
      s = o[i];
    s === -1
      ? (!(u & n) || u & r) && (o[i] = gp(u, t))
      : s <= t && (e.expiredLanes |= u),
      (l &= ~u);
  }
}
function ni(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Qa() {
  var e = Mr;
  return (Mr <<= 1), !(Mr & 4194240) && (Mr = 64), e;
}
function cl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function kr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - De(t)),
    (e[t] = n);
}
function wp(e, t) {
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
    var o = 31 - De(n),
      l = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~l);
  }
}
function Ki(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - De(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var U = 0;
function Ga(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ka,
  Yi,
  Ya,
  Xa,
  Za,
  ri = !1,
  Dr = [],
  gt = null,
  yt = null,
  wt = null,
  ur = new Map(),
  sr = new Map(),
  pt = [],
  xp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Xu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      gt = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      wt = null;
      break;
    case "pointerover":
    case "pointerout":
      ur.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      sr.delete(t.pointerId);
  }
}
function An(e, t, n, r, o, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o],
      }),
      t !== null && ((t = Cr(t)), t !== null && Yi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Sp(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (gt = An(gt, e, t, n, r, o)), !0;
    case "dragenter":
      return (yt = An(yt, e, t, n, r, o)), !0;
    case "mouseover":
      return (wt = An(wt, e, t, n, r, o)), !0;
    case "pointerover":
      var l = o.pointerId;
      return ur.set(l, An(ur.get(l) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (l = o.pointerId), sr.set(l, An(sr.get(l) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Ja(e) {
  var t = At(e.target);
  if (t !== null) {
    var n = Xt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = $a(n)), t !== null)) {
          (e.blockedOn = t),
            Za(e.priority, function () {
              Ya(n);
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
function qr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = oi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Jl = r), n.target.dispatchEvent(r), (Jl = null);
    } else return (t = Cr(n)), t !== null && Yi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zu(e, t, n) {
  qr(e) && n.delete(t);
}
function kp() {
  (ri = !1),
    gt !== null && qr(gt) && (gt = null),
    yt !== null && qr(yt) && (yt = null),
    wt !== null && qr(wt) && (wt = null),
    ur.forEach(Zu),
    sr.forEach(Zu);
}
function Fn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ri ||
      ((ri = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, kp)));
}
function ar(e) {
  function t(o) {
    return Fn(o, e);
  }
  if (0 < Dr.length) {
    Fn(Dr[0], e);
    for (var n = 1; n < Dr.length; n++) {
      var r = Dr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    gt !== null && Fn(gt, e),
      yt !== null && Fn(yt, e),
      wt !== null && Fn(wt, e),
      ur.forEach(t),
      sr.forEach(t),
      n = 0;
    n < pt.length;
    n++
  )
    (r = pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pt.length && ((n = pt[0]), n.blockedOn === null); )
    Ja(n), n.blockedOn === null && pt.shift();
}
var wn = ot.ReactCurrentBatchConfig,
  go = !0;
function Ep(e, t, n, r) {
  var o = U,
    l = wn.transition;
  wn.transition = null;
  try {
    (U = 1), Xi(e, t, n, r);
  } finally {
    (U = o), (wn.transition = l);
  }
}
function Cp(e, t, n, r) {
  var o = U,
    l = wn.transition;
  wn.transition = null;
  try {
    (U = 4), Xi(e, t, n, r);
  } finally {
    (U = o), (wn.transition = l);
  }
}
function Xi(e, t, n, r) {
  if (go) {
    var o = oi(e, t, n, r);
    if (o === null) xl(e, t, r, yo, n), Xu(e, r);
    else if (Sp(o, e, t, n, r)) r.stopPropagation();
    else if ((Xu(e, r), t & 4 && -1 < xp.indexOf(e))) {
      for (; o !== null; ) {
        var l = Cr(o);
        if (
          (l !== null && Ka(l),
          (l = oi(e, t, n, r)),
          l === null && xl(e, t, r, yo, n),
          l === o)
        )
          break;
        o = l;
      }
      o !== null && r.stopPropagation();
    } else xl(e, t, r, null, n);
  }
}
var yo = null;
function oi(e, t, n, r) {
  if (((yo = null), (e = Qi(r)), (e = At(e)), e !== null))
    if (((t = Xt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = $a(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (yo = e), null;
}
function qa(e) {
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
      switch (dp()) {
        case Gi:
          return 1;
        case Ba:
          return 4;
        case ho:
        case fp:
          return 16;
        case Ha:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ht = null,
  Zi = null,
  eo = null;
function ec() {
  if (eo) return eo;
  var e,
    t = Zi,
    n = t.length,
    r,
    o = "value" in ht ? ht.value : ht.textContent,
    l = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
  return (eo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function to(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ir() {
  return !0;
}
function Ju() {
  return !1;
}
function Ce(e) {
  function t(n, r, o, l, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(l) : l[u]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ir
        : Ju),
      (this.isPropagationStopped = Ju),
      this
    );
  }
  return (
    G(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ir));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ir));
      },
      persist: function () {},
      isPersistent: Ir,
    }),
    t
  );
}
var On = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ji = Ce(On),
  Er = G({}, On, { view: 0, detail: 0 }),
  Np = Ce(Er),
  dl,
  fl,
  Un,
  $o = G({}, Er, {
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
    getModifierState: qi,
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
        : (e !== Un &&
            (Un && e.type === "mousemove"
              ? ((dl = e.screenX - Un.screenX), (fl = e.screenY - Un.screenY))
              : (fl = dl = 0),
            (Un = e)),
          dl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fl;
    },
  }),
  qu = Ce($o),
  Pp = G({}, $o, { dataTransfer: 0 }),
  _p = Ce(Pp),
  Rp = G({}, Er, { relatedTarget: 0 }),
  pl = Ce(Rp),
  Tp = G({}, On, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zp = Ce(Tp),
  Lp = G({}, On, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Op = Ce(Lp),
  Mp = G({}, On, { data: 0 }),
  es = Ce(Mp),
  jp = {
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
function Ap(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Ip[e]) ? !!t[e] : !1;
}
function qi() {
  return Ap;
}
var Fp = G({}, Er, {
    key: function (e) {
      if (e.key) {
        var t = jp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = to(e)), e === 13 ? "Enter" : String.fromCharCode(e))
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
    getModifierState: qi,
    charCode: function (e) {
      return e.type === "keypress" ? to(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? to(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Up = Ce(Fp),
  $p = G({}, $o, {
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
  ts = Ce($p),
  Vp = G({}, Er, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qi,
  }),
  Wp = Ce(Vp),
  bp = G({}, On, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Bp = Ce(bp),
  Hp = G({}, $o, {
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
  Qp = Ce(Hp),
  Gp = [9, 13, 27, 32],
  eu = et && "CompositionEvent" in window,
  Zn = null;
et && "documentMode" in document && (Zn = document.documentMode);
var Kp = et && "TextEvent" in window && !Zn,
  tc = et && (!eu || (Zn && 8 < Zn && 11 >= Zn)),
  ns = " ",
  rs = !1;
function nc(e, t) {
  switch (e) {
    case "keyup":
      return Gp.indexOf(t.keyCode) !== -1;
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
function rc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ln = !1;
function Yp(e, t) {
  switch (e) {
    case "compositionend":
      return rc(t);
    case "keypress":
      return t.which !== 32 ? null : ((rs = !0), ns);
    case "textInput":
      return (e = t.data), e === ns && rs ? null : e;
    default:
      return null;
  }
}
function Xp(e, t) {
  if (ln)
    return e === "compositionend" || (!eu && nc(e, t))
      ? ((e = ec()), (eo = Zi = ht = null), (ln = !1), e)
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
      return tc && t.locale !== "ko" ? null : t.data;
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
function os(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Zp[e.type] : t === "textarea";
}
function oc(e, t, n, r) {
  Da(r),
    (t = wo(t, "onChange")),
    0 < t.length &&
      ((n = new Ji("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Jn = null,
  cr = null;
function Jp(e) {
  hc(e, 0);
}
function Vo(e) {
  var t = an(e);
  if (Ra(t)) return e;
}
function qp(e, t) {
  if (e === "change") return t;
}
var lc = !1;
if (et) {
  var ml;
  if (et) {
    var hl = "oninput" in document;
    if (!hl) {
      var ls = document.createElement("div");
      ls.setAttribute("oninput", "return;"),
        (hl = typeof ls.oninput == "function");
    }
    ml = hl;
  } else ml = !1;
  lc = ml && (!document.documentMode || 9 < document.documentMode);
}
function is() {
  Jn && (Jn.detachEvent("onpropertychange", ic), (cr = Jn = null));
}
function ic(e) {
  if (e.propertyName === "value" && Vo(cr)) {
    var t = [];
    oc(t, cr, e, Qi(e)), Ua(Jp, t);
  }
}
function em(e, t, n) {
  e === "focusin"
    ? (is(), (Jn = t), (cr = n), Jn.attachEvent("onpropertychange", ic))
    : e === "focusout" && is();
}
function tm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vo(cr);
}
function nm(e, t) {
  if (e === "click") return Vo(t);
}
function rm(e, t) {
  if (e === "input" || e === "change") return Vo(t);
}
function om(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ae = typeof Object.is == "function" ? Object.is : om;
function dr(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!$l.call(t, o) || !Ae(e[o], t[o])) return !1;
  }
  return !0;
}
function us(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ss(e, t) {
  var n = us(e);
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
    n = us(n);
  }
}
function uc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? uc(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function sc() {
  for (var e = window, t = fo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fo(e.document);
  }
  return t;
}
function tu(e) {
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
function lm(e) {
  var t = sc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    uc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && tu(n)) {
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
          (o = ss(n, l));
        var i = ss(n, r);
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
var im = et && "documentMode" in document && 11 >= document.documentMode,
  un = null,
  li = null,
  qn = null,
  ii = !1;
function as(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ii ||
    un == null ||
    un !== fo(r) ||
    ((r = un),
    "selectionStart" in r && tu(r)
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
    (qn && dr(qn, r)) ||
      ((qn = r),
      (r = wo(li, "onSelect")),
      0 < r.length &&
        ((t = new Ji("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = un))));
}
function Ar(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var sn = {
    animationend: Ar("Animation", "AnimationEnd"),
    animationiteration: Ar("Animation", "AnimationIteration"),
    animationstart: Ar("Animation", "AnimationStart"),
    transitionend: Ar("Transition", "TransitionEnd"),
  },
  vl = {},
  ac = {};
et &&
  ((ac = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete sn.animationend.animation,
    delete sn.animationiteration.animation,
    delete sn.animationstart.animation),
  "TransitionEvent" in window || delete sn.transitionend.transition);
function Wo(e) {
  if (vl[e]) return vl[e];
  if (!sn[e]) return e;
  var t = sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ac) return (vl[e] = t[n]);
  return e;
}
var cc = Wo("animationend"),
  dc = Wo("animationiteration"),
  fc = Wo("animationstart"),
  pc = Wo("transitionend"),
  mc = new Map(),
  cs =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Rt(e, t) {
  mc.set(e, t), Yt(t, [e]);
}
for (var gl = 0; gl < cs.length; gl++) {
  var yl = cs[gl],
    um = yl.toLowerCase(),
    sm = yl[0].toUpperCase() + yl.slice(1);
  Rt(um, "on" + sm);
}
Rt(cc, "onAnimationEnd");
Rt(dc, "onAnimationIteration");
Rt(fc, "onAnimationStart");
Rt("dblclick", "onDoubleClick");
Rt("focusin", "onFocus");
Rt("focusout", "onBlur");
Rt(pc, "onTransitionEnd");
Cn("onMouseEnter", ["mouseout", "mouseover"]);
Cn("onMouseLeave", ["mouseout", "mouseover"]);
Cn("onPointerEnter", ["pointerout", "pointerover"]);
Cn("onPointerLeave", ["pointerout", "pointerover"]);
Yt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Yt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Yt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Yt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  am = new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));
function ds(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), up(r, t, void 0, e), (e.currentTarget = null);
}
function hc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== l && o.isPropagationStopped())) break e;
          ds(o, u, a), (l = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== l && o.isPropagationStopped())
          )
            break e;
          ds(o, u, a), (l = s);
        }
    }
  }
  if (mo) throw ((e = ti), (mo = !1), (ti = null), e);
}
function W(e, t) {
  var n = t[di];
  n === void 0 && (n = t[di] = new Set());
  var r = e + "__bubble";
  n.has(r) || (vc(t, e, 2, !1), n.add(r));
}
function wl(e, t, n) {
  var r = 0;
  t && (r |= 4), vc(n, e, r, t);
}
var Fr = "_reactListening" + Math.random().toString(36).slice(2);
function fr(e) {
  if (!e[Fr]) {
    (e[Fr] = !0),
      Ea.forEach(function (n) {
        n !== "selectionchange" && (am.has(n) || wl(n, !1, e), wl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fr] || ((t[Fr] = !0), wl("selectionchange", !1, t));
  }
}
function vc(e, t, n, r) {
  switch (qa(t)) {
    case 1:
      var o = Ep;
      break;
    case 4:
      o = Cp;
      break;
    default:
      o = Xi;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ei ||
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
function xl(e, t, n, r, o) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = At(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = l = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ua(function () {
    var a = l,
      h = Qi(n),
      f = [];
    e: {
      var p = mc.get(e);
      if (p !== void 0) {
        var y = Ji,
          x = e;
        switch (e) {
          case "keypress":
            if (to(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Up;
            break;
          case "focusin":
            (x = "focus"), (y = pl);
            break;
          case "focusout":
            (x = "blur"), (y = pl);
            break;
          case "beforeblur":
          case "afterblur":
            y = pl;
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
            y = qu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = _p;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Wp;
            break;
          case cc:
          case dc:
          case fc:
            y = zp;
            break;
          case pc:
            y = Bp;
            break;
          case "scroll":
            y = Np;
            break;
          case "wheel":
            y = Qp;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Op;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ts;
        }
        var g = (t & 4) !== 0,
          k = !g && e === "scroll",
          d = g ? (p !== null ? p + "Capture" : null) : p;
        g = [];
        for (var c = a, m; c !== null; ) {
          m = c;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              d !== null && ((w = ir(c, d)), w != null && g.push(pr(c, w, m)))),
            k)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((p = new y(p, x, null, n, h)), f.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Jl &&
            (x = n.relatedTarget || n.fromElement) &&
            (At(x) || x[tt]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((x = n.relatedTarget || n.toElement),
              (y = a),
              (x = x ? At(x) : null),
              x !== null &&
                ((k = Xt(x)), x !== k || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((y = null), (x = a)),
          y !== x)
        ) {
          if (
            ((g = qu),
            (w = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = ts),
              (w = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (k = y == null ? p : an(y)),
            (m = x == null ? p : an(x)),
            (p = new g(w, c + "leave", y, n, h)),
            (p.target = k),
            (p.relatedTarget = m),
            (w = null),
            At(h) === a &&
              ((g = new g(d, c + "enter", x, n, h)),
              (g.target = m),
              (g.relatedTarget = k),
              (w = g)),
            (k = w),
            y && x)
          )
            t: {
              for (g = y, d = x, c = 0, m = g; m; m = qt(m)) c++;
              for (m = 0, w = d; w; w = qt(w)) m++;
              for (; 0 < c - m; ) (g = qt(g)), c--;
              for (; 0 < m - c; ) (d = qt(d)), m--;
              for (; c--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = qt(g)), (d = qt(d));
              }
              g = null;
            }
          else g = null;
          y !== null && fs(f, p, y, g, !1),
            x !== null && k !== null && fs(f, k, x, g, !0);
        }
      }
      e: {
        if (
          ((p = a ? an(a) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var C = qp;
        else if (os(p))
          if (lc) C = rm;
          else {
            C = tm;
            var P = em;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = nm);
        if (C && (C = C(e, a))) {
          oc(f, C, n, h);
          break e;
        }
        P && P(e, p, a),
          e === "focusout" &&
            (P = p._wrapperState) &&
            P.controlled &&
            p.type === "number" &&
            Gl(p, "number", p.value);
      }
      switch (((P = a ? an(a) : window), e)) {
        case "focusin":
          (os(P) || P.contentEditable === "true") &&
            ((un = P), (li = a), (qn = null));
          break;
        case "focusout":
          qn = li = un = null;
          break;
        case "mousedown":
          ii = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ii = !1), as(f, n, h);
          break;
        case "selectionchange":
          if (im) break;
        case "keydown":
        case "keyup":
          as(f, n, h);
      }
      var N;
      if (eu)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        ln
          ? nc(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (tc &&
          n.locale !== "ko" &&
          (ln || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && ln && (N = ec())
            : ((ht = h),
              (Zi = "value" in ht ? ht.value : ht.textContent),
              (ln = !0))),
        (P = wo(a, R)),
        0 < P.length &&
          ((R = new es(R, e, null, n, h)),
          f.push({ event: R, listeners: P }),
          N ? (R.data = N) : ((N = rc(n)), N !== null && (R.data = N)))),
        (N = Kp ? Yp(e, n) : Xp(e, n)) &&
          ((a = wo(a, "onBeforeInput")),
          0 < a.length &&
            ((h = new es("onBeforeInput", "beforeinput", null, n, h)),
            f.push({ event: h, listeners: a }),
            (h.data = N)));
    }
    hc(f, t);
  });
}
function pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      l = o.stateNode;
    o.tag === 5 &&
      l !== null &&
      ((o = l),
      (l = ir(e, n)),
      l != null && r.unshift(pr(e, l, o)),
      (l = ir(e, t)),
      l != null && r.push(pr(e, l, o))),
      (e = e.return);
  }
  return r;
}
function qt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fs(e, t, n, r, o) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = ir(n, l)), s != null && i.unshift(pr(n, s, u)))
        : o || ((s = ir(n, l)), s != null && i.push(pr(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var cm = /\r\n?/g,
  dm = /\u0000|\uFFFD/g;
function ps(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      cm,
      `
`,
    )
    .replace(dm, "");
}
function Ur(e, t, n) {
  if (((t = ps(t)), ps(e) !== t && n)) throw Error(E(425));
}
function xo() {}
var ui = null,
  si = null;
function ai(e, t) {
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
var ci = typeof setTimeout == "function" ? setTimeout : void 0,
  fm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ms = typeof Promise == "function" ? Promise : void 0,
  pm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ms < "u"
        ? function (e) {
            return ms.resolve(null).then(e).catch(mm);
          }
        : ci;
function mm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Sl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ar(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ar(t);
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
function hs(e) {
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
var Mn = Math.random().toString(36).slice(2),
  We = "__reactFiber$" + Mn,
  mr = "__reactProps$" + Mn,
  tt = "__reactContainer$" + Mn,
  di = "__reactEvents$" + Mn,
  hm = "__reactListeners$" + Mn,
  vm = "__reactHandles$" + Mn;
function At(e) {
  var t = e[We];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[tt] || n[We])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = hs(e); e !== null; ) {
          if ((n = e[We])) return n;
          e = hs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Cr(e) {
  return (
    (e = e[We] || e[tt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function an(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function bo(e) {
  return e[mr] || null;
}
var fi = [],
  cn = -1;
function Tt(e) {
  return { current: e };
}
function b(e) {
  0 > cn || ((e.current = fi[cn]), (fi[cn] = null), cn--);
}
function $(e, t) {
  cn++, (fi[cn] = e.current), (e.current = t);
}
var _t = {},
  se = Tt(_t),
  ve = Tt(!1),
  Wt = _t;
function Nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
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
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function So() {
  b(ve), b(se);
}
function vs(e, t, n) {
  if (se.current !== _t) throw Error(E(168));
  $(se, t), $(ve, n);
}
function gc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(E(108, ep(e) || "Unknown", o));
  return G({}, n, r);
}
function ko(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || _t),
    (Wt = se.current),
    $(se, e),
    $(ve, ve.current),
    !0
  );
}
function gs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = gc(e, t, Wt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      b(ve),
      b(se),
      $(se, e))
    : b(ve),
    $(ve, n);
}
var Xe = null,
  Bo = !1,
  kl = !1;
function yc(e) {
  Xe === null ? (Xe = [e]) : Xe.push(e);
}
function gm(e) {
  (Bo = !0), yc(e);
}
function zt() {
  if (!kl && Xe !== null) {
    kl = !0;
    var e = 0,
      t = U;
    try {
      var n = Xe;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Xe = null), (Bo = !1);
    } catch (o) {
      throw (Xe !== null && (Xe = Xe.slice(e + 1)), ba(Gi, zt), o);
    } finally {
      (U = t), (kl = !1);
    }
  }
  return null;
}
var dn = [],
  fn = 0,
  Eo = null,
  Co = 0,
  Ne = [],
  Pe = 0,
  bt = null,
  Ze = 1,
  Je = "";
function Dt(e, t) {
  (dn[fn++] = Co), (dn[fn++] = Eo), (Eo = e), (Co = t);
}
function wc(e, t, n) {
  (Ne[Pe++] = Ze), (Ne[Pe++] = Je), (Ne[Pe++] = bt), (bt = e);
  var r = Ze;
  e = Je;
  var o = 32 - De(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var l = 32 - De(t) + o;
  if (30 < l) {
    var i = o - (o % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (Ze = (1 << (32 - De(t) + o)) | (n << o) | r),
      (Je = l + e);
  } else (Ze = (1 << l) | (n << o) | r), (Je = e);
}
function nu(e) {
  e.return !== null && (Dt(e, 1), wc(e, 1, 0));
}
function ru(e) {
  for (; e === Eo; )
    (Eo = dn[--fn]), (dn[fn] = null), (Co = dn[--fn]), (dn[fn] = null);
  for (; e === bt; )
    (bt = Ne[--Pe]),
      (Ne[Pe] = null),
      (Je = Ne[--Pe]),
      (Ne[Pe] = null),
      (Ze = Ne[--Pe]),
      (Ne[Pe] = null);
}
var Se = null,
  xe = null,
  B = !1,
  je = null;
function xc(e, t) {
  var n = _e(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ys(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (xe = xt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bt !== null ? { id: Ze, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = _e(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function pi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function mi(e) {
  if (B) {
    var t = xe;
    if (t) {
      var n = t;
      if (!ys(e, t)) {
        if (pi(e)) throw Error(E(418));
        t = xt(n.nextSibling);
        var r = Se;
        t && ys(e, t)
          ? xc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (B = !1), (Se = e));
      }
    } else {
      if (pi(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (B = !1), (Se = e);
    }
  }
}
function ws(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function $r(e) {
  if (e !== Se) return !1;
  if (!B) return ws(e), (B = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ai(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (pi(e)) throw (Sc(), Error(E(418)));
    for (; t; ) xc(e, t), (t = xt(t.nextSibling));
  }
  if ((ws(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = xt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = Se ? xt(e.stateNode.nextSibling) : null;
  return !0;
}
function Sc() {
  for (var e = xe; e; ) e = xt(e.nextSibling);
}
function Pn() {
  (xe = Se = null), (B = !1);
}
function ou(e) {
  je === null ? (je = [e]) : je.push(e);
}
var ym = ot.ReactCurrentBatchConfig;
function $n(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var o = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var u = o.refs;
            i === null ? delete u[l] : (u[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Vr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function xs(e) {
  var t = e._init;
  return t(e._payload);
}
function kc(e) {
  function t(d, c) {
    if (e) {
      var m = d.deletions;
      m === null ? ((d.deletions = [c]), (d.flags |= 16)) : m.push(c);
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
    return (d = Ct(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function l(d, c, m) {
    return (
      (d.index = m),
      e
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < c ? ((d.flags |= 2), c) : m)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, m, w) {
    return c === null || c.tag !== 6
      ? ((c = Tl(m, d.mode, w)), (c.return = d), c)
      : ((c = o(c, m)), (c.return = d), c);
  }
  function s(d, c, m, w) {
    var C = m.type;
    return C === on
      ? h(d, c, m.props.children, w, m.key)
      : c !== null &&
          (c.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === dt &&
              xs(C) === c.type))
        ? ((w = o(c, m.props)), (w.ref = $n(d, c, m)), (w.return = d), w)
        : ((w = so(m.type, m.key, m.props, null, d.mode, w)),
          (w.ref = $n(d, c, m)),
          (w.return = d),
          w);
  }
  function a(d, c, m, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== m.containerInfo ||
      c.stateNode.implementation !== m.implementation
      ? ((c = zl(m, d.mode, w)), (c.return = d), c)
      : ((c = o(c, m.children || [])), (c.return = d), c);
  }
  function h(d, c, m, w, C) {
    return c === null || c.tag !== 7
      ? ((c = Vt(m, d.mode, w, C)), (c.return = d), c)
      : ((c = o(c, m)), (c.return = d), c);
  }
  function f(d, c, m) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Tl("" + c, d.mode, m)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case zr:
          return (
            (m = so(c.type, c.key, c.props, null, d.mode, m)),
            (m.ref = $n(d, null, c)),
            (m.return = d),
            m
          );
        case rn:
          return (c = zl(c, d.mode, m)), (c.return = d), c;
        case dt:
          var w = c._init;
          return f(d, w(c._payload), m);
      }
      if (Qn(c) || Dn(c))
        return (c = Vt(c, d.mode, m, null)), (c.return = d), c;
      Vr(d, c);
    }
    return null;
  }
  function p(d, c, m, w) {
    var C = c !== null ? c.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return C !== null ? null : u(d, c, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case zr:
          return m.key === C ? s(d, c, m, w) : null;
        case rn:
          return m.key === C ? a(d, c, m, w) : null;
        case dt:
          return (C = m._init), p(d, c, C(m._payload), w);
      }
      if (Qn(m) || Dn(m)) return C !== null ? null : h(d, c, m, w, null);
      Vr(d, m);
    }
    return null;
  }
  function y(d, c, m, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (d = d.get(m) || null), u(c, d, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case zr:
          return (d = d.get(w.key === null ? m : w.key) || null), s(c, d, w, C);
        case rn:
          return (d = d.get(w.key === null ? m : w.key) || null), a(c, d, w, C);
        case dt:
          var P = w._init;
          return y(d, c, m, P(w._payload), C);
      }
      if (Qn(w) || Dn(w)) return (d = d.get(m) || null), h(c, d, w, C, null);
      Vr(c, w);
    }
    return null;
  }
  function x(d, c, m, w) {
    for (
      var C = null, P = null, N = c, R = (c = 0), I = null;
      N !== null && R < m.length;
      R++
    ) {
      N.index > R ? ((I = N), (N = null)) : (I = N.sibling);
      var L = p(d, N, m[R], w);
      if (L === null) {
        N === null && (N = I);
        break;
      }
      e && N && L.alternate === null && t(d, N),
        (c = l(L, c, R)),
        P === null ? (C = L) : (P.sibling = L),
        (P = L),
        (N = I);
    }
    if (R === m.length) return n(d, N), B && Dt(d, R), C;
    if (N === null) {
      for (; R < m.length; R++)
        (N = f(d, m[R], w)),
          N !== null &&
            ((c = l(N, c, R)), P === null ? (C = N) : (P.sibling = N), (P = N));
      return B && Dt(d, R), C;
    }
    for (N = r(d, N); R < m.length; R++)
      (I = y(N, d, R, m[R], w)),
        I !== null &&
          (e && I.alternate !== null && N.delete(I.key === null ? R : I.key),
          (c = l(I, c, R)),
          P === null ? (C = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        N.forEach(function (ae) {
          return t(d, ae);
        }),
      B && Dt(d, R),
      C
    );
  }
  function g(d, c, m, w) {
    var C = Dn(m);
    if (typeof C != "function") throw Error(E(150));
    if (((m = C.call(m)), m == null)) throw Error(E(151));
    for (
      var P = (C = null), N = c, R = (c = 0), I = null, L = m.next();
      N !== null && !L.done;
      R++, L = m.next()
    ) {
      N.index > R ? ((I = N), (N = null)) : (I = N.sibling);
      var ae = p(d, N, L.value, w);
      if (ae === null) {
        N === null && (N = I);
        break;
      }
      e && N && ae.alternate === null && t(d, N),
        (c = l(ae, c, R)),
        P === null ? (C = ae) : (P.sibling = ae),
        (P = ae),
        (N = I);
    }
    if (L.done) return n(d, N), B && Dt(d, R), C;
    if (N === null) {
      for (; !L.done; R++, L = m.next())
        (L = f(d, L.value, w)),
          L !== null &&
            ((c = l(L, c, R)), P === null ? (C = L) : (P.sibling = L), (P = L));
      return B && Dt(d, R), C;
    }
    for (N = r(d, N); !L.done; R++, L = m.next())
      (L = y(N, d, R, L.value, w)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? R : L.key),
          (c = l(L, c, R)),
          P === null ? (C = L) : (P.sibling = L),
          (P = L));
    return (
      e &&
        N.forEach(function (F) {
          return t(d, F);
        }),
      B && Dt(d, R),
      C
    );
  }
  function k(d, c, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === on &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case zr:
          e: {
            for (var C = m.key, P = c; P !== null; ) {
              if (P.key === C) {
                if (((C = m.type), C === on)) {
                  if (P.tag === 7) {
                    n(d, P.sibling),
                      (c = o(P, m.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === dt &&
                    xs(C) === P.type)
                ) {
                  n(d, P.sibling),
                    (c = o(P, m.props)),
                    (c.ref = $n(d, P, m)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, P);
                break;
              } else t(d, P);
              P = P.sibling;
            }
            m.type === on
              ? ((c = Vt(m.props.children, d.mode, w, m.key)),
                (c.return = d),
                (d = c))
              : ((w = so(m.type, m.key, m.props, null, d.mode, w)),
                (w.ref = $n(d, c, m)),
                (w.return = d),
                (d = w));
          }
          return i(d);
        case rn:
          e: {
            for (P = m.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === m.containerInfo &&
                  c.stateNode.implementation === m.implementation
                ) {
                  n(d, c.sibling),
                    (c = o(c, m.children || [])),
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
            (c = zl(m, d.mode, w)), (c.return = d), (d = c);
          }
          return i(d);
        case dt:
          return (P = m._init), k(d, c, P(m._payload), w);
      }
      if (Qn(m)) return x(d, c, m, w);
      if (Dn(m)) return g(d, c, m, w);
      Vr(d, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, m)), (c.return = d), (d = c))
          : (n(d, c), (c = Tl(m, d.mode, w)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return k;
}
var _n = kc(!0),
  Ec = kc(!1),
  No = Tt(null),
  Po = null,
  pn = null,
  lu = null;
function iu() {
  lu = pn = Po = null;
}
function uu(e) {
  var t = No.current;
  b(No), (e._currentValue = t);
}
function hi(e, t, n) {
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
function xn(e, t) {
  (Po = e),
    (lu = pn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Te(e) {
  var t = e._currentValue;
  if (lu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), pn === null)) {
      if (Po === null) throw Error(E(308));
      (pn = e), (Po.dependencies = { lanes: 0, firstContext: e });
    } else pn = pn.next = e;
  return t;
}
var Ft = null;
function su(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
function Cc(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), su(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    nt(e, r)
  );
}
function nt(e, t) {
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
var ft = !1;
function au(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Nc(e, t) {
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
function qe(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function St(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      nt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), su(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    nt(e, n)
  );
}
function no(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ki(e, n);
  }
}
function Ss(e, t) {
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
function _o(e, t, n, r) {
  var o = e.updateQueue;
  ft = !1;
  var l = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (l = a) : (i.next = a), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
        (h.lastBaseUpdate = s)));
  }
  if (l !== null) {
    var f = o.baseState;
    (i = 0), (h = a = s = null), (u = l);
    do {
      var p = u.lane,
        y = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            g = u;
          switch (((p = t), (y = n), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == "function")) {
                f = x.call(y, f, p);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = g.payload),
                (p = typeof x == "function" ? x.call(y, f, p) : x),
                p == null)
              )
                break e;
              f = G({}, f, p);
              break e;
            case 2:
              ft = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [u]) : p.push(u));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((a = h = y), (s = f)) : (h = h.next = y),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = f),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else l === null && (o.shared.lanes = 0);
    (Ht |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function ks(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(E(191, o));
        o.call(r);
      }
    }
}
var Nr = {},
  He = Tt(Nr),
  hr = Tt(Nr),
  vr = Tt(Nr);
function Ut(e) {
  if (e === Nr) throw Error(E(174));
  return e;
}
function cu(e, t) {
  switch (($(vr, t), $(hr, e), $(He, Nr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yl(t, e));
  }
  b(He), $(He, t);
}
function Rn() {
  b(He), b(hr), b(vr);
}
function Pc(e) {
  Ut(vr.current);
  var t = Ut(He.current),
    n = Yl(t, e.type);
  t !== n && ($(hr, e), $(He, n));
}
function du(e) {
  hr.current === e && (b(He), b(hr));
}
var H = Tt(0);
function Ro(e) {
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
var El = [];
function fu() {
  for (var e = 0; e < El.length; e++)
    El[e]._workInProgressVersionPrimary = null;
  El.length = 0;
}
var ro = ot.ReactCurrentDispatcher,
  Cl = ot.ReactCurrentBatchConfig,
  Bt = 0,
  Q = null,
  Z = null,
  ee = null,
  To = !1,
  er = !1,
  gr = 0,
  wm = 0;
function le() {
  throw Error(E(321));
}
function pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function mu(e, t, n, r, o, l) {
  if (
    ((Bt = l),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ro.current = e === null || e.memoizedState === null ? Em : Cm),
    (e = n(r, o)),
    er)
  ) {
    l = 0;
    do {
      if (((er = !1), (gr = 0), 25 <= l)) throw Error(E(301));
      (l += 1),
        (ee = Z = null),
        (t.updateQueue = null),
        (ro.current = Nm),
        (e = n(r, o));
    } while (er);
  }
  if (
    ((ro.current = zo),
    (t = Z !== null && Z.next !== null),
    (Bt = 0),
    (ee = Z = Q = null),
    (To = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function hu() {
  var e = gr !== 0;
  return (gr = 0), e;
}
function $e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ee === null ? (Q.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function ze() {
  if (Z === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = ee === null ? Q.memoizedState : ee.next;
  if (t !== null) (ee = t), (Z = e);
  else {
    if (e === null) throw Error(E(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      ee === null ? (Q.memoizedState = ee = e) : (ee = ee.next = e);
  }
  return ee;
}
function yr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Nl(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = Z,
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
    var u = (i = null),
      s = null,
      a = l;
    do {
      var h = a.lane;
      if ((Bt & h) === h)
        s !== null &&
          (s = s.next =
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
        s === null ? ((u = s = f), (i = r)) : (s = s.next = f),
          (Q.lanes |= h),
          (Ht |= h);
      }
      a = a.next;
    } while (a !== null && a !== l);
    s === null ? (i = r) : (s.next = u),
      Ae(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (l = o.lane), (Q.lanes |= l), (Ht |= l), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Pl(e) {
  var t = ze(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    l = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== o);
    Ae(l, t.memoizedState) || (he = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function _c() {}
function Rc(e, t) {
  var n = Q,
    r = ze(),
    o = t(),
    l = !Ae(r.memoizedState, o);
  if (
    (l && ((r.memoizedState = o), (he = !0)),
    (r = r.queue),
    vu(Lc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      wr(9, zc.bind(null, n, r, o, t), void 0, null),
      te === null)
    )
      throw Error(E(349));
    Bt & 30 || Tc(n, t, o);
  }
  return o;
}
function Tc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Oc(t) && Mc(e);
}
function Lc(e, t, n) {
  return n(function () {
    Oc(t) && Mc(e);
  });
}
function Oc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function Mc(e) {
  var t = nt(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function Es(e) {
  var t = $e();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = km.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function wr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function jc() {
  return ze().memoizedState;
}
function oo(e, t, n, r) {
  var o = $e();
  (Q.flags |= e),
    (o.memoizedState = wr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ho(e, t, n, r) {
  var o = ze();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (((l = i.destroy), r !== null && pu(r, i.deps))) {
      o.memoizedState = wr(t, n, l, r);
      return;
    }
  }
  (Q.flags |= e), (o.memoizedState = wr(1 | t, n, l, r));
}
function Cs(e, t) {
  return oo(8390656, 8, e, t);
}
function vu(e, t) {
  return Ho(2048, 8, e, t);
}
function Dc(e, t) {
  return Ho(4, 2, e, t);
}
function Ic(e, t) {
  return Ho(4, 4, e, t);
}
function Ac(e, t) {
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
function Fc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ho(4, 4, Ac.bind(null, t, e), n)
  );
}
function gu() {}
function Uc(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function $c(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vc(e, t, n) {
  return Bt & 21
    ? (Ae(n, t) || ((n = Qa()), (Q.lanes |= n), (Ht |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function xm(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Cl.transition;
  Cl.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Cl.transition = r);
  }
}
function Wc() {
  return ze().memoizedState;
}
function Sm(e, t, n) {
  var r = Et(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    bc(e))
  )
    Bc(t, n);
  else if (((n = Cc(e, t, n, r)), n !== null)) {
    var o = de();
    Ie(n, e, r, o), Hc(n, t, r);
  }
}
function km(e, t, n) {
  var r = Et(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bc(e)) Bc(t, o);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = l(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), Ae(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), su(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Cc(e, t, o, r)),
      n !== null && ((o = de()), Ie(n, e, r, o), Hc(n, t, r));
  }
}
function bc(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function Bc(e, t) {
  er = To = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Hc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ki(e, n);
  }
}
var zo = {
    readContext: Te,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  Em = {
    readContext: Te,
    useCallback: function (e, t) {
      return ($e().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Te,
    useEffect: Cs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        oo(4194308, 4, Ac.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return oo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return oo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $e();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $e();
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
        (e = e.dispatch = Sm.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $e();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Es,
    useDebugValue: gu,
    useDeferredValue: function (e) {
      return ($e().memoizedState = e);
    },
    useTransition: function () {
      var e = Es(!1),
        t = e[0];
      return (e = xm.bind(null, e[1])), ($e().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        o = $e();
      if (B) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(E(349));
        Bt & 30 || Tc(r, t, n);
      }
      o.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (o.queue = l),
        Cs(Lc.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        wr(9, zc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $e(),
        t = te.identifierPrefix;
      if (B) {
        var n = Je,
          r = Ze;
        (n = (r & ~(1 << (32 - De(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = gr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = wm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Cm = {
    readContext: Te,
    useCallback: Uc,
    useContext: Te,
    useEffect: vu,
    useImperativeHandle: Fc,
    useInsertionEffect: Dc,
    useLayoutEffect: Ic,
    useMemo: $c,
    useReducer: Nl,
    useRef: jc,
    useState: function () {
      return Nl(yr);
    },
    useDebugValue: gu,
    useDeferredValue: function (e) {
      var t = ze();
      return Vc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Nl(yr)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: _c,
    useSyncExternalStore: Rc,
    useId: Wc,
    unstable_isNewReconciler: !1,
  },
  Nm = {
    readContext: Te,
    useCallback: Uc,
    useContext: Te,
    useEffect: vu,
    useImperativeHandle: Fc,
    useInsertionEffect: Dc,
    useLayoutEffect: Ic,
    useMemo: $c,
    useReducer: Pl,
    useRef: jc,
    useState: function () {
      return Pl(yr);
    },
    useDebugValue: gu,
    useDeferredValue: function (e) {
      var t = ze();
      return Z === null ? (t.memoizedState = e) : Vc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Pl(yr)[0],
        t = ze().memoizedState;
      return [e, t];
    },
    useMutableSource: _c,
    useSyncExternalStore: Rc,
    useId: Wc,
    unstable_isNewReconciler: !1,
  };
function Oe(e, t) {
  if (e && e.defaultProps) {
    (t = G({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function vi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : G({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      o = Et(e),
      l = qe(r, o);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = St(e, l, o)),
      t !== null && (Ie(t, e, o, r), no(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      o = Et(e),
      l = qe(r, o);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = St(e, l, o)),
      t !== null && (Ie(t, e, o, r), no(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = Et(e),
      o = qe(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = St(e, o, r)),
      t !== null && (Ie(t, e, r, n), no(t, e, r));
  },
};
function Ns(e, t, n, r, o, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !dr(n, r) || !dr(o, l)
        : !0
  );
}
function Qc(e, t, n) {
  var r = !1,
    o = _t,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Te(l))
      : ((o = ge(t) ? Wt : se.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Nn(e, o) : _t)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Qo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function Ps(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Qo.enqueueReplaceState(t, t.state, null);
}
function gi(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), au(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (o.context = Te(l))
    : ((l = ge(t) ? Wt : se.current), (o.context = Nn(e, l))),
    (o.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (vi(e, t, l, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Qo.enqueueReplaceState(o, o.state, null),
      _o(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Tn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += qf(r)), (r = r.return);
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
function _l(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function yi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Pm = typeof WeakMap == "function" ? WeakMap : Map;
function Gc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Oo || ((Oo = !0), (Ri = r)), yi(e, t);
    }),
    n
  );
}
function Kc(e, t, n) {
  (n = qe(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        yi(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        yi(e, t),
          typeof r != "function" &&
            (kt === null ? (kt = new Set([this])) : kt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function _s(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Pm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = $m.bind(null, e, t, n)), t.then(e, e));
}
function Rs(e) {
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
function Ts(e, t, n, r, o) {
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
              : ((t = qe(-1, 1)), (t.tag = 2), St(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var _m = ot.ReactCurrentOwner,
  he = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Ec(t, null, n, r) : _n(t, e.child, n, r);
}
function zs(e, t, n, r, o) {
  n = n.render;
  var l = t.ref;
  return (
    xn(t, o),
    (r = mu(e, t, n, r, l, o)),
    (n = hu()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        rt(e, t, o))
      : (B && n && nu(t), (t.flags |= 1), ce(e, t, r, o), t.child)
  );
}
function Ls(e, t, n, r, o) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Nu(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), Yc(e, t, l, r, o))
      : ((e = so(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & o))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : dr), n(i, r) && e.ref === t.ref)
    )
      return rt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Ct(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Yc(e, t, n, r, o) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (dr(l, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = l), (e.lanes & o) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), rt(e, t, o);
  }
  return wi(e, t, n, r, o);
}
function Xc(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(hn, we),
        (we |= n);
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
          $(hn, we),
          (we |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        $(hn, we),
        (we |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(hn, we),
      (we |= r);
  return ce(e, t, o, n), t.child;
}
function Zc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function wi(e, t, n, r, o) {
  var l = ge(n) ? Wt : se.current;
  return (
    (l = Nn(t, l)),
    xn(t, o),
    (n = mu(e, t, n, r, l, o)),
    (r = hu()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        rt(e, t, o))
      : (B && r && nu(t), (t.flags |= 1), ce(e, t, n, o), t.child)
  );
}
function Os(e, t, n, r, o) {
  if (ge(n)) {
    var l = !0;
    ko(t);
  } else l = !1;
  if ((xn(t, o), t.stateNode === null))
    lo(e, t), Qc(t, n, r), gi(t, n, r, o), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = Te(a))
      : ((a = ge(n) ? Wt : se.current), (a = Nn(t, a)));
    var h = n.getDerivedStateFromProps,
      f =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Ps(t, i, r, a)),
      (ft = !1);
    var p = t.memoizedState;
    (i.state = p),
      _o(t, r, i, o),
      (s = t.memoizedState),
      u !== r || p !== s || ve.current || ft
        ? (typeof h == "function" && (vi(t, n, h, r), (s = t.memoizedState)),
          (u = ft || Ns(t, n, u, r, p, s, a))
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
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Nc(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Oe(t.type, u)),
      (i.props = a),
      (f = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Te(s))
        : ((s = ge(n) ? Wt : se.current), (s = Nn(t, s)));
    var y = n.getDerivedStateFromProps;
    (h =
      typeof y == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== f || p !== s) && Ps(t, i, r, s)),
      (ft = !1),
      (p = t.memoizedState),
      (i.state = p),
      _o(t, r, i, o);
    var x = t.memoizedState;
    u !== f || p !== x || ve.current || ft
      ? (typeof y == "function" && (vi(t, n, y, r), (x = t.memoizedState)),
        (a = ft || Ns(t, n, a, r, p, x, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xi(e, t, n, r, l, o);
}
function xi(e, t, n, r, o, l) {
  Zc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && gs(t, n, !1), rt(e, t, l);
  (r = t.stateNode), (_m.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = _n(t, e.child, null, l)), (t.child = _n(t, null, u, l)))
      : ce(e, t, u, l),
    (t.memoizedState = r.state),
    o && gs(t, n, !0),
    t.child
  );
}
function Jc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vs(e, t.context, !1),
    cu(e, t.containerInfo);
}
function Ms(e, t, n, r, o) {
  return Pn(), ou(o), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var Si = { dehydrated: null, treeContext: null, retryLane: 0 };
function ki(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function qc(e, t, n) {
  var r = t.pendingProps,
    o = H.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    $(H, o & 1),
    e === null)
  )
    return (
      mi(t),
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
                : (l = Yo(i, r, 0, null)),
              (e = Vt(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ki(n)),
              (t.memoizedState = Si),
              e)
            : yu(t, i))
    );
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return Rm(e, t, i, r, u, o, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (o = e.child), (u = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Ct(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (l = Ct(u, l)) : ((l = Vt(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ki(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = Si),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = Ct(l, { mode: "visible", children: r.children })),
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
function yu(e, t) {
  return (
    (t = Yo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Wr(e, t, n, r) {
  return (
    r !== null && ou(r),
    _n(t, e.child, null, n),
    (e = yu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Rm(e, t, n, r, o, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _l(Error(E(422)))), Wr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (o = t.mode),
          (r = Yo({ mode: "visible", children: r.children }, o, 0, null)),
          (l = Vt(l, o, i, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          t.mode & 1 && _n(t, e.child, null, i),
          (t.child.memoizedState = ki(i)),
          (t.memoizedState = Si),
          l);
  if (!(t.mode & 1)) return Wr(e, t, i, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (l = Error(E(419))), (r = _l(l, r, void 0)), Wr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), he || u)) {
    if (((r = te), r !== null)) {
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
          ((l.retryLane = o), nt(e, o), Ie(r, e, o, -1));
    }
    return Cu(), (r = _l(Error(E(421)))), Wr(e, t, i, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Vm.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (xe = xt(o.nextSibling)),
      (Se = t),
      (B = !0),
      (je = null),
      e !== null &&
        ((Ne[Pe++] = Ze),
        (Ne[Pe++] = Je),
        (Ne[Pe++] = bt),
        (Ze = e.id),
        (Je = e.overflow),
        (bt = t)),
      (t = yu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function js(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), hi(e.return, t, n);
}
function Rl(e, t, n, r, o) {
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
function ed(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    l = r.tail;
  if ((ce(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && js(e, n, t);
        else if (e.tag === 19) js(e, n, t);
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
  if (($(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ro(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Rl(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ro(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Rl(t, !0, n, null, l);
        break;
      case "together":
        Rl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function lo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ht |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Tm(e, t, n) {
  switch (t.tag) {
    case 3:
      Jc(t), Pn();
      break;
    case 5:
      Pc(t);
      break;
    case 1:
      ge(t.type) && ko(t);
      break;
    case 4:
      cu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      $(No, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? qc(e, t, n)
            : ($(H, H.current & 1),
              (e = rt(e, t, n)),
              e !== null ? e.sibling : null);
      $(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ed(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        $(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Xc(e, t, n);
  }
  return rt(e, t, n);
}
var td, Ei, nd, rd;
td = function (e, t) {
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
Ei = function () {};
nd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Ut(He.current);
    var l = null;
    switch (n) {
      case "input":
        (o = Hl(e, o)), (r = Hl(e, r)), (l = []);
        break;
      case "select":
        (o = G({}, o, { value: void 0 })),
          (r = G({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (o = Kl(e, o)), (r = Kl(e, r)), (l = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = xo);
    }
    Xl(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var u = o[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (or.hasOwnProperty(a)
              ? l || (l = [])
              : (l = l || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (l || (l = []), l.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (l = l || []).push(a, s))
            : a === "children"
              ? (typeof s != "string" && typeof s != "number") ||
                (l = l || []).push(a, "" + s)
              : a !== "suppressContentEditableWarning" &&
                a !== "suppressHydrationWarning" &&
                (or.hasOwnProperty(a)
                  ? (s != null && a === "onScroll" && W("scroll", e),
                    l || u === s || (l = []))
                  : (l = l || []).push(a, s));
    }
    n && (l = l || []).push("style", n);
    var a = l;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
rd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vn(e, t) {
  if (!B)
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
function ie(e) {
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
function zm(e, t, n) {
  var r = t.pendingProps;
  switch ((ru(t), t.tag)) {
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
      return ie(t), null;
    case 1:
      return ge(t.type) && So(), ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Rn(),
        b(ve),
        b(se),
        fu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          ($r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), je !== null && (Li(je), (je = null)))),
        Ei(e, t),
        ie(t),
        null
      );
    case 5:
      du(t);
      var o = Ut(vr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        nd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ie(t), null;
        }
        if (((e = Ut(He.current)), $r(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[We] = t), (r[mr] = l), (e = (t.mode & 1) !== 0), n)) {
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
              for (o = 0; o < Kn.length; o++) W(Kn[o], r);
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
              bu(r, l), W("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                W("invalid", r);
              break;
            case "textarea":
              Hu(r, l), W("invalid", r);
          }
          Xl(n, l), (o = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, u, e),
                    (o = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (l.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, u, e),
                    (o = ["children", "" + u]))
                : or.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  W("scroll", r);
            }
          switch (n) {
            case "input":
              Lr(r), Bu(r, l, !0);
              break;
            case "textarea":
              Lr(r), Qu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = xo);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = La(n)),
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
            (e[We] = t),
            (e[mr] = r),
            td(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Zl(n, r)), n)) {
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
                for (o = 0; o < Kn.length; o++) W(Kn[o], e);
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
                bu(e, r), (o = Hl(e, r)), W("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = G({}, r, { value: void 0 })),
                  W("invalid", e);
                break;
              case "textarea":
                Hu(e, r), (o = Kl(e, r)), W("invalid", e);
                break;
              default:
                o = r;
            }
            Xl(n, o), (u = o);
            for (l in u)
              if (u.hasOwnProperty(l)) {
                var s = u[l];
                l === "style"
                  ? ja(e, s)
                  : l === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Oa(e, s))
                    : l === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && lr(e, s)
                        : typeof s == "number" && lr(e, "" + s)
                      : l !== "suppressContentEditableWarning" &&
                        l !== "suppressHydrationWarning" &&
                        l !== "autoFocus" &&
                        (or.hasOwnProperty(l)
                          ? s != null && l === "onScroll" && W("scroll", e)
                          : s != null && Wi(e, l, s, i));
              }
            switch (n) {
              case "input":
                Lr(e), Bu(e, r, !1);
                break;
              case "textarea":
                Lr(e), Qu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Pt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? vn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      vn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = xo);
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
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) rd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Ut(vr.current)), Ut(He.current), $r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[We] = t),
            (l = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ur(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ur(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[We] = t),
            (t.stateNode = r);
      }
      return ie(t), null;
    case 13:
      if (
        (b(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && xe !== null && t.mode & 1 && !(t.flags & 128))
          Sc(), Pn(), (t.flags |= 98560), (l = !1);
        else if (((l = $r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(E(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(E(317));
            l[We] = t;
          } else
            Pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ie(t), (l = !1);
        } else je !== null && (Li(je), (je = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? J === 0 && (J = 3) : Cu())),
          t.updateQueue !== null && (t.flags |= 4),
          ie(t),
          null);
    case 4:
      return (
        Rn(), Ei(e, t), e === null && fr(t.stateNode.containerInfo), ie(t), null
      );
    case 10:
      return uu(t.type._context), ie(t), null;
    case 17:
      return ge(t.type) && So(), ie(t), null;
    case 19:
      if ((b(H), (l = t.memoizedState), l === null)) return ie(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) Vn(l, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ro(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Vn(l, !1),
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
                return $(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            Y() > zn &&
            ((t.flags |= 128), (r = !0), Vn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ro(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Vn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !B)
            )
              return ie(t), null;
          } else
            2 * Y() - l.renderingStartTime > zn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Vn(l, !1), (t.lanes = 4194304));
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
          (l.renderingStartTime = Y()),
          (t.sibling = null),
          (n = H.current),
          $(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (ie(t), null);
    case 22:
    case 23:
      return (
        Eu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? we & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Lm(e, t) {
  switch ((ru(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && So(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Rn(),
        b(ve),
        b(se),
        fu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return du(t), null;
    case 13:
      if ((b(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return b(H), null;
    case 4:
      return Rn(), null;
    case 10:
      return uu(t.type._context), null;
    case 22:
    case 23:
      return Eu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var br = !1,
  ue = !1,
  Om = typeof WeakSet == "function" ? WeakSet : Set,
  T = null;
function mn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        K(e, t, r);
      }
    else n.current = null;
}
function Ci(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var Ds = !1;
function Mm(e, t) {
  if (((ui = go), (e = sc()), tu(e))) {
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
            u = -1,
            s = -1,
            a = 0,
            h = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (o !== 0 && f.nodeType !== 3) || (u = i + o),
                f !== l || (r !== 0 && f.nodeType !== 3) || (s = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (p = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++a === o && (u = i),
                p === l && ++h === r && (s = i),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = y;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (si = { focusedElem: e, selectionRange: n }, go = !1, T = t; T !== null; )
    if (((t = T), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (T = e);
    else
      for (; T !== null; ) {
        t = T;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    k = x.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Oe(t.type, g),
                      k,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(E(163));
            }
        } catch (w) {
          K(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (T = e);
          break;
        }
        T = t.return;
      }
  return (x = Ds), (Ds = !1), x;
}
function tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var l = o.destroy;
        (o.destroy = void 0), l !== void 0 && Ci(t, n, l);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Go(e, t) {
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
function Ni(e) {
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
function od(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), od(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[We], delete t[mr], delete t[di], delete t[hm], delete t[vm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ld(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Is(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ld(e.return)) return null;
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
function Pi(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = xo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Pi(e, t, n), e = e.sibling; e !== null; ) Pi(e, t, n), (e = e.sibling);
}
function _i(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (_i(e, t, n), e = e.sibling; e !== null; ) _i(e, t, n), (e = e.sibling);
}
var ne = null,
  Me = !1;
function ut(e, t, n) {
  for (n = n.child; n !== null; ) id(e, t, n), (n = n.sibling);
}
function id(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function")
    try {
      Be.onCommitFiberUnmount(Uo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || mn(n, t);
    case 6:
      var r = ne,
        o = Me;
      (ne = null),
        ut(e, t, n),
        (ne = r),
        (Me = o),
        ne !== null &&
          (Me
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (Me
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Sl(e.parentNode, n)
              : e.nodeType === 1 && Sl(e, n),
            ar(e))
          : Sl(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (o = Me),
        (ne = n.stateNode.containerInfo),
        (Me = !0),
        ut(e, t, n),
        (ne = r),
        (Me = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var l = o,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Ci(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      ut(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (mn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          K(n, t, u);
        }
      ut(e, t, n);
      break;
    case 21:
      ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), ut(e, t, n), (ue = r))
        : ut(e, t, n);
      break;
    default:
      ut(e, t, n);
  }
}
function As(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Om()),
      t.forEach(function (r) {
        var o = Wm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ne = u.stateNode), (Me = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (Me = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(E(160));
        id(l, i, o), (ne = null), (Me = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (a) {
        K(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ud(t, e), (t = t.sibling);
}
function ud(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Ue(e), r & 4)) {
        try {
          tr(3, e, e.return), Go(3, e);
        } catch (g) {
          K(e, e.return, g);
        }
        try {
          tr(5, e, e.return);
        } catch (g) {
          K(e, e.return, g);
        }
      }
      break;
    case 1:
      Le(t, e), Ue(e), r & 512 && n !== null && mn(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Ue(e),
        r & 512 && n !== null && mn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          lr(o, "");
        } catch (g) {
          K(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && l.type === "radio" && l.name != null && Ta(o, l),
              Zl(u, i);
            var a = Zl(u, l);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                f = s[i + 1];
              h === "style"
                ? ja(o, f)
                : h === "dangerouslySetInnerHTML"
                  ? Oa(o, f)
                  : h === "children"
                    ? lr(o, f)
                    : Wi(o, h, f, a);
            }
            switch (u) {
              case "input":
                Ql(o, l);
                break;
              case "textarea":
                za(o, l);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var y = l.value;
                y != null
                  ? vn(o, !!l.multiple, y, !1)
                  : p !== !!l.multiple &&
                    (l.defaultValue != null
                      ? vn(o, !!l.multiple, l.defaultValue, !0)
                      : vn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[mr] = l;
          } catch (g) {
            K(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Ue(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (o = e.stateNode), (l = e.memoizedProps);
        try {
          o.nodeValue = l;
        } catch (g) {
          K(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ar(t.containerInfo);
        } catch (g) {
          K(e, e.return, g);
        }
      break;
    case 4:
      Le(t, e), Ue(e);
      break;
    case 13:
      Le(t, e),
        Ue(e),
        (o = e.child),
        o.flags & 8192 &&
          ((l = o.memoizedState !== null),
          (o.stateNode.isHidden = l),
          !l ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Su = Y())),
        r & 4 && As(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (a = ue) || h), Le(t, e), (ue = a)) : Le(t, e),
        Ue(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !h && e.mode & 1)
        )
          for (T = e, h = e.child; h !== null; ) {
            for (f = T = h; T !== null; ) {
              switch (((p = T), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  tr(4, p, p.return);
                  break;
                case 1:
                  mn(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (g) {
                      K(r, n, g);
                    }
                  }
                  break;
                case 5:
                  mn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Us(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (T = y)) : Us(f);
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
                    : ((u = f.stateNode),
                      (s = f.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Ma("display", i)));
              } catch (g) {
                K(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (h === null)
              try {
                f.stateNode.nodeValue = a ? "" : f.memoizedProps;
              } catch (g) {
                K(e, e.return, g);
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
      Le(t, e), Ue(e), r & 4 && As(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ld(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (lr(o, ""), (r.flags &= -33));
          var l = Is(e);
          _i(e, l, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Is(e);
          Pi(e, u, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      K(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function jm(e, t, n) {
  (T = e), sd(e);
}
function sd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var o = T,
      l = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || br;
      if (!i) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || ue;
        u = br;
        var a = ue;
        if (((br = i), (ue = s) && !a))
          for (T = o; T !== null; )
            (i = T),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? $s(o)
                : s !== null
                  ? ((s.return = i), (T = s))
                  : $s(o);
        for (; l !== null; ) (T = l), sd(l), (l = l.sibling);
        (T = o), (br = u), (ue = a);
      }
      Fs(e);
    } else
      o.subtreeFlags & 8772 && l !== null ? ((l.return = o), (T = l)) : Fs(e);
  }
}
function Fs(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || Go(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Oe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var l = t.updateQueue;
              l !== null && ks(t, l, r);
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
                ks(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                    f !== null && ar(f);
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
              throw Error(E(163));
          }
        ue || (t.flags & 512 && Ni(t));
      } catch (p) {
        K(t, t.return, p);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function Us(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (T = n);
      break;
    }
    T = t.return;
  }
}
function $s(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Go(4, t);
          } catch (s) {
            K(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              K(t, o, s);
            }
          }
          var l = t.return;
          try {
            Ni(t);
          } catch (s) {
            K(t, l, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ni(t);
          } catch (s) {
            K(t, i, s);
          }
      }
    } catch (s) {
      K(t, t.return, s);
    }
    if (t === e) {
      T = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (T = u);
      break;
    }
    T = t.return;
  }
}
var Dm = Math.ceil,
  Lo = ot.ReactCurrentDispatcher,
  wu = ot.ReactCurrentOwner,
  Re = ot.ReactCurrentBatchConfig,
  D = 0,
  te = null,
  X = null,
  re = 0,
  we = 0,
  hn = Tt(0),
  J = 0,
  xr = null,
  Ht = 0,
  Ko = 0,
  xu = 0,
  nr = null,
  me = null,
  Su = 0,
  zn = 1 / 0,
  Ye = null,
  Oo = !1,
  Ri = null,
  kt = null,
  Br = !1,
  vt = null,
  Mo = 0,
  rr = 0,
  Ti = null,
  io = -1,
  uo = 0;
function de() {
  return D & 6 ? Y() : io !== -1 ? io : (io = Y());
}
function Et(e) {
  return e.mode & 1
    ? D & 2 && re !== 0
      ? re & -re
      : ym.transition !== null
        ? (uo === 0 && (uo = Qa()), uo)
        : ((e = U),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qa(e.type))),
          e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < rr) throw ((rr = 0), (Ti = null), Error(E(185)));
  kr(e, n, r),
    (!(D & 2) || e !== te) &&
      (e === te && (!(D & 2) && (Ko |= n), J === 4 && mt(e, re)),
      ye(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((zn = Y() + 500), Bo && zt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  yp(e, t);
  var r = vo(e, e === te ? re : 0);
  if (r === 0)
    n !== null && Yu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yu(n), t === 1))
      e.tag === 0 ? gm(Vs.bind(null, e)) : yc(Vs.bind(null, e)),
        pm(function () {
          !(D & 6) && zt();
        }),
        (n = null);
    else {
      switch (Ga(r)) {
        case 1:
          n = Gi;
          break;
        case 4:
          n = Ba;
          break;
        case 16:
          n = ho;
          break;
        case 536870912:
          n = Ha;
          break;
        default:
          n = ho;
      }
      n = vd(n, ad.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ad(e, t) {
  if (((io = -1), (uo = 0), D & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (Sn() && e.callbackNode !== n) return null;
  var r = vo(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = jo(e, r);
  else {
    t = r;
    var o = D;
    D |= 2;
    var l = dd();
    (te !== e || re !== t) && ((Ye = null), (zn = Y() + 500), $t(e, t));
    do
      try {
        Fm();
        break;
      } catch (u) {
        cd(e, u);
      }
    while (!0);
    iu(),
      (Lo.current = l),
      (D = o),
      X !== null ? (t = 0) : ((te = null), (re = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ni(e)), o !== 0 && ((r = o), (t = zi(e, o)))), t === 1)
    )
      throw ((n = xr), $t(e, 0), mt(e, r), ye(e, Y()), n);
    if (t === 6) mt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Im(o) &&
          ((t = jo(e, r)),
          t === 2 && ((l = ni(e)), l !== 0 && ((r = l), (t = zi(e, l)))),
          t === 1))
      )
        throw ((n = xr), $t(e, 0), mt(e, r), ye(e, Y()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          It(e, me, Ye);
          break;
        case 3:
          if (
            (mt(e, r), (r & 130023424) === r && ((t = Su + 500 - Y()), 10 < t))
          ) {
            if (vo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ci(It.bind(null, e, me, Ye), t);
            break;
          }
          It(e, me, Ye);
          break;
        case 4:
          if ((mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - De(r);
            (l = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~l);
          }
          if (
            ((r = o),
            (r = Y() - r),
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
                          : 1960 * Dm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ci(It.bind(null, e, me, Ye), r);
            break;
          }
          It(e, me, Ye);
          break;
        case 5:
          It(e, me, Ye);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return ye(e, Y()), e.callbackNode === n ? ad.bind(null, e) : null;
}
function zi(e, t) {
  var n = nr;
  return (
    e.current.memoizedState.isDehydrated && ($t(e, t).flags |= 256),
    (e = jo(e, t)),
    e !== 2 && ((t = me), (me = n), t !== null && Li(t)),
    e
  );
}
function Li(e) {
  me === null ? (me = e) : me.push.apply(me, e);
}
function Im(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            l = o.getSnapshot;
          o = o.value;
          try {
            if (!Ae(l(), o)) return !1;
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
    t &= ~xu,
      t &= ~Ko,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - De(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Vs(e) {
  if (D & 6) throw Error(E(327));
  Sn();
  var t = vo(e, 0);
  if (!(t & 1)) return ye(e, Y()), null;
  var n = jo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ni(e);
    r !== 0 && ((t = r), (n = zi(e, r)));
  }
  if (n === 1) throw ((n = xr), $t(e, 0), mt(e, t), ye(e, Y()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    It(e, me, Ye),
    ye(e, Y()),
    null
  );
}
function ku(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((zn = Y() + 500), Bo && zt());
  }
}
function Qt(e) {
  vt !== null && vt.tag === 0 && !(D & 6) && Sn();
  var t = D;
  D |= 1;
  var n = Re.transition,
    r = U;
  try {
    if (((Re.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Re.transition = n), (D = t), !(D & 6) && zt();
  }
}
function Eu() {
  (we = hn.current), b(hn);
}
function $t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), fm(n)), X !== null))
    for (n = X.return; n !== null; ) {
      var r = n;
      switch ((ru(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && So();
          break;
        case 3:
          Rn(), b(ve), b(se), fu();
          break;
        case 5:
          du(r);
          break;
        case 4:
          Rn();
          break;
        case 13:
          b(H);
          break;
        case 19:
          b(H);
          break;
        case 10:
          uu(r.type._context);
          break;
        case 22:
        case 23:
          Eu();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (X = e = Ct(e.current, null)),
    (re = we = t),
    (J = 0),
    (xr = null),
    (xu = Ko = Ht = 0),
    (me = nr = null),
    Ft !== null)
  ) {
    for (t = 0; t < Ft.length; t++)
      if (((n = Ft[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = o), (r.next = i);
        }
        n.pending = r;
      }
    Ft = null;
  }
  return e;
}
function cd(e, t) {
  do {
    var n = X;
    try {
      if ((iu(), (ro.current = zo), To)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        To = !1;
      }
      if (
        ((Bt = 0),
        (ee = Z = Q = null),
        (er = !1),
        (gr = 0),
        (wu.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (xr = t), (X = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            h = u,
            f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = Rs(i);
          if (y !== null) {
            (y.flags &= -257),
              Ts(y, i, u, l, t),
              y.mode & 1 && _s(l, a, t),
              (t = y),
              (s = a);
            var x = t.updateQueue;
            if (x === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              _s(l, a, t), Cu();
              break e;
            }
            s = Error(E(426));
          }
        } else if (B && u.mode & 1) {
          var k = Rs(i);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Ts(k, i, u, l, t),
              ou(Tn(s, u));
            break e;
          }
        }
        (l = s = Tn(s, u)),
          J !== 4 && (J = 2),
          nr === null ? (nr = [l]) : nr.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var d = Gc(l, s, t);
              Ss(l, d);
              break e;
            case 1:
              u = s;
              var c = l.type,
                m = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (kt === null || !kt.has(m))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var w = Kc(l, u, t);
                Ss(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      pd(n);
    } catch (C) {
      (t = C), X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function dd() {
  var e = Lo.current;
  return (Lo.current = zo), e === null ? zo : e;
}
function Cu() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    te === null || (!(Ht & 268435455) && !(Ko & 268435455)) || mt(te, re);
}
function jo(e, t) {
  var n = D;
  D |= 2;
  var r = dd();
  (te !== e || re !== t) && ((Ye = null), $t(e, t));
  do
    try {
      Am();
      break;
    } catch (o) {
      cd(e, o);
    }
  while (!0);
  if ((iu(), (D = n), (Lo.current = r), X !== null)) throw Error(E(261));
  return (te = null), (re = 0), J;
}
function Am() {
  for (; X !== null; ) fd(X);
}
function Fm() {
  for (; X !== null && !ap(); ) fd(X);
}
function fd(e) {
  var t = hd(e.alternate, e, we);
  (e.memoizedProps = e.pendingProps),
    t === null ? pd(e) : (X = t),
    (wu.current = null);
}
function pd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lm(n, t)), n !== null)) {
        (n.flags &= 32767), (X = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (X = null);
        return;
      }
    } else if (((n = zm(n, t, we)), n !== null)) {
      X = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function It(e, t, n) {
  var r = U,
    o = Re.transition;
  try {
    (Re.transition = null), (U = 1), Um(e, t, n, r);
  } finally {
    (Re.transition = o), (U = r);
  }
  return null;
}
function Um(e, t, n, r) {
  do Sn();
  while (vt !== null);
  if (D & 6) throw Error(E(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (wp(e, l),
    e === te && ((X = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Br ||
      ((Br = !0),
      vd(ho, function () {
        return Sn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Re.transition), (Re.transition = null);
    var i = U;
    U = 1;
    var u = D;
    (D |= 4),
      (wu.current = null),
      Mm(e, n),
      ud(n, e),
      lm(si),
      (go = !!ui),
      (si = ui = null),
      (e.current = n),
      jm(n),
      cp(),
      (D = u),
      (U = i),
      (Re.transition = l);
  } else e.current = n;
  if (
    (Br && ((Br = !1), (vt = e), (Mo = o)),
    (l = e.pendingLanes),
    l === 0 && (kt = null),
    pp(n.stateNode),
    ye(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Oo) throw ((Oo = !1), (e = Ri), (Ri = null), e);
  return (
    Mo & 1 && e.tag !== 0 && Sn(),
    (l = e.pendingLanes),
    l & 1 ? (e === Ti ? rr++ : ((rr = 0), (Ti = e))) : (rr = 0),
    zt(),
    null
  );
}
function Sn() {
  if (vt !== null) {
    var e = Ga(Mo),
      t = Re.transition,
      n = U;
    try {
      if (((Re.transition = null), (U = 16 > e ? 16 : e), vt === null))
        var r = !1;
      else {
        if (((e = vt), (vt = null), (Mo = 0), D & 6)) throw Error(E(331));
        var o = D;
        for (D |= 4, T = e.current; T !== null; ) {
          var l = T,
            i = l.child;
          if (T.flags & 16) {
            var u = l.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (T = a; T !== null; ) {
                  var h = T;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      tr(8, h, l);
                  }
                  var f = h.child;
                  if (f !== null) (f.return = h), (T = f);
                  else
                    for (; T !== null; ) {
                      h = T;
                      var p = h.sibling,
                        y = h.return;
                      if ((od(h), h === a)) {
                        T = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (T = p);
                        break;
                      }
                      T = y;
                    }
                }
              }
              var x = l.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var k = g.sibling;
                    (g.sibling = null), (g = k);
                  } while (g !== null);
                }
              }
              T = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (T = i);
          else
            e: for (; T !== null; ) {
              if (((l = T), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    tr(9, l, l.return);
                }
              var d = l.sibling;
              if (d !== null) {
                (d.return = l.return), (T = d);
                break e;
              }
              T = l.return;
            }
        }
        var c = e.current;
        for (T = c; T !== null; ) {
          i = T;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (T = m);
          else
            e: for (i = c; T !== null; ) {
              if (((u = T), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Go(9, u);
                  }
                } catch (C) {
                  K(u, u.return, C);
                }
              if (u === i) {
                T = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (T = w);
                break e;
              }
              T = u.return;
            }
        }
        if (
          ((D = o), zt(), Be && typeof Be.onPostCommitFiberRoot == "function")
        )
          try {
            Be.onPostCommitFiberRoot(Uo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Re.transition = t);
    }
  }
  return !1;
}
function Ws(e, t, n) {
  (t = Tn(n, t)),
    (t = Gc(e, t, 1)),
    (e = St(e, t, 1)),
    (t = de()),
    e !== null && (kr(e, 1, t), ye(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) Ws(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ws(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (kt === null || !kt.has(r)))
        ) {
          (e = Tn(n, e)),
            (e = Kc(t, e, 1)),
            (t = St(t, e, 1)),
            (e = de()),
            t !== null && (kr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function $m(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (J === 4 || (J === 3 && (re & 130023424) === re && 500 > Y() - Su)
        ? $t(e, 0)
        : (xu |= n)),
    ye(e, t);
}
function md(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = jr), (jr <<= 1), !(jr & 130023424) && (jr = 4194304))
      : (t = 1));
  var n = de();
  (e = nt(e, t)), e !== null && (kr(e, t, n), ye(e, n));
}
function Vm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), md(e, n);
}
function Wm(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), md(e, n);
}
var hd;
hd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), Tm(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), B && t.flags & 1048576 && wc(t, Co, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      lo(e, t), (e = t.pendingProps);
      var o = Nn(t, se.current);
      xn(t, n), (o = mu(null, t, r, e, o, n));
      var l = hu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((l = !0), ko(t)) : (l = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            au(t),
            (o.updater = Qo),
            (t.stateNode = o),
            (o._reactInternals = t),
            gi(t, r, e, n),
            (t = xi(null, t, r, !0, l, n)))
          : ((t.tag = 0), B && l && nu(t), ce(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (lo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Bm(r)),
          (e = Oe(r, e)),
          o)
        ) {
          case 0:
            t = wi(null, t, r, e, n);
            break e;
          case 1:
            t = Os(null, t, r, e, n);
            break e;
          case 11:
            t = zs(null, t, r, e, n);
            break e;
          case 14:
            t = Ls(null, t, r, Oe(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Oe(r, o)),
        wi(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Oe(r, o)),
        Os(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Jc(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (o = l.element),
          Nc(e, t),
          _o(t, r, null, n);
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
            (o = Tn(Error(E(423)), t)), (t = Ms(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Tn(Error(E(424)), t)), (t = Ms(e, t, r, n, o));
            break e;
          } else
            for (
              xe = xt(t.stateNode.containerInfo.firstChild),
                Se = t,
                B = !0,
                je = null,
                n = Ec(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Pn(), r === o)) {
            t = rt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Pc(t),
        e === null && mi(t),
        (r = t.type),
        (o = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = o.children),
        ai(r, o) ? (i = null) : l !== null && ai(r, l) && (t.flags |= 32),
        Zc(e, t),
        ce(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && mi(t), null;
    case 13:
      return qc(e, t, n);
    case 4:
      return (
        cu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = _n(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Oe(r, o)),
        zs(e, t, r, o, n)
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
          (o = t.pendingProps),
          (l = t.memoizedProps),
          (i = o.value),
          $(No, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Ae(l.value, i)) {
            if (l.children === o.children && !ve.current) {
              t = rt(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var u = l.dependencies;
              if (u !== null) {
                i = l.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (l.tag === 1) {
                      (s = qe(-1, n & -n)), (s.tag = 2);
                      var a = l.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var h = a.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (a.pending = s);
                      }
                    }
                    (l.lanes |= n),
                      (s = l.alternate),
                      s !== null && (s.lanes |= n),
                      hi(l.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(E(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  hi(i, n, t),
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
        ce(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        xn(t, n),
        (o = Te(o)),
        (r = r(o)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Oe(r, t.pendingProps)),
        (o = Oe(r.type, o)),
        Ls(e, t, r, o, n)
      );
    case 15:
      return Yc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Oe(r, o)),
        lo(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), ko(t)) : (e = !1),
        xn(t, n),
        Qc(t, r, o),
        gi(t, r, o, n),
        xi(null, t, r, !0, e, n)
      );
    case 19:
      return ed(e, t, n);
    case 22:
      return Xc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function vd(e, t) {
  return ba(e, t);
}
function bm(e, t, n, r) {
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
function _e(e, t, n, r) {
  return new bm(e, t, n, r);
}
function Nu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Bm(e) {
  if (typeof e == "function") return Nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Bi)) return 11;
    if (e === Hi) return 14;
  }
  return 2;
}
function Ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = _e(e.tag, t, e.key, e.mode)),
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
function so(e, t, n, r, o, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Nu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case on:
        return Vt(n.children, o, l, t);
      case bi:
        (i = 8), (o |= 8);
        break;
      case Vl:
        return (
          (e = _e(12, n, t, o | 2)), (e.elementType = Vl), (e.lanes = l), e
        );
      case Wl:
        return (e = _e(13, n, t, o)), (e.elementType = Wl), (e.lanes = l), e;
      case bl:
        return (e = _e(19, n, t, o)), (e.elementType = bl), (e.lanes = l), e;
      case Pa:
        return Yo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ca:
              i = 10;
              break e;
            case Na:
              i = 9;
              break e;
            case Bi:
              i = 11;
              break e;
            case Hi:
              i = 14;
              break e;
            case dt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = _e(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Vt(e, t, n, r) {
  return (e = _e(7, e, r, t)), (e.lanes = n), e;
}
function Yo(e, t, n, r) {
  return (
    (e = _e(22, e, r, t)),
    (e.elementType = Pa),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Tl(e, t, n) {
  return (e = _e(6, e, null, t)), (e.lanes = n), e;
}
function zl(e, t, n) {
  return (
    (t = _e(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Hm(e, t, n, r, o) {
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
    (this.eventTimes = cl(0)),
    (this.expirationTimes = cl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Pu(e, t, n, r, o, l, i, u, s) {
  return (
    (e = new Hm(e, t, n, u, s)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = _e(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    au(l),
    e
  );
}
function Qm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: rn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function gd(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (Xt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return gc(e, n, t);
  }
  return t;
}
function yd(e, t, n, r, o, l, i, u, s) {
  return (
    (e = Pu(n, r, !0, e, o, l, i, u, s)),
    (e.context = gd(null)),
    (n = e.current),
    (r = de()),
    (o = Et(n)),
    (l = qe(r, o)),
    (l.callback = t ?? null),
    St(n, l, o),
    (e.current.lanes = o),
    kr(e, o, r),
    ye(e, r),
    e
  );
}
function Xo(e, t, n, r) {
  var o = t.current,
    l = de(),
    i = Et(o);
  return (
    (n = gd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = qe(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = St(o, t, i)),
    e !== null && (Ie(e, o, i, l), no(e, o, i)),
    i
  );
}
function Do(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _u(e, t) {
  bs(e, t), (e = e.alternate) && bs(e, t);
}
function Gm() {
  return null;
}
var wd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ru(e) {
  this._internalRoot = e;
}
Zo.prototype.render = Ru.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Xo(e, t, null, null);
};
Zo.prototype.unmount = Ru.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function () {
      Xo(null, e, null, null);
    }),
      (t[tt] = null);
  }
};
function Zo(e) {
  this._internalRoot = e;
}
Zo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Xa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pt.length && t !== 0 && t < pt[n].priority; n++);
    pt.splice(n, 0, e), n === 0 && Ja(e);
  }
};
function Tu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Jo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bs() {}
function Km(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var a = Do(i);
        l.call(a);
      };
    }
    var i = yd(t, r, e, 0, null, !1, !1, "", Bs);
    return (
      (e._reactRootContainer = i),
      (e[tt] = i.current),
      fr(e.nodeType === 8 ? e.parentNode : e),
      Qt(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = Do(s);
      u.call(a);
    };
  }
  var s = Pu(e, 0, !1, null, null, !1, !1, "", Bs);
  return (
    (e._reactRootContainer = s),
    (e[tt] = s.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    Qt(function () {
      Xo(t, s, n, r);
    }),
    s
  );
}
function qo(e, t, n, r, o) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof o == "function") {
      var u = o;
      o = function () {
        var s = Do(i);
        u.call(s);
      };
    }
    Xo(t, i, e, o);
  } else i = Km(n, t, e, o, r);
  return Do(i);
}
Ka = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes);
        n !== 0 &&
          (Ki(t, n | 1), ye(t, Y()), !(D & 6) && ((zn = Y() + 500), zt()));
      }
      break;
    case 13:
      Qt(function () {
        var r = nt(e, 1);
        if (r !== null) {
          var o = de();
          Ie(r, e, 1, o);
        }
      }),
        _u(e, 1);
  }
};
Yi = function (e) {
  if (e.tag === 13) {
    var t = nt(e, 134217728);
    if (t !== null) {
      var n = de();
      Ie(t, e, 134217728, n);
    }
    _u(e, 134217728);
  }
};
Ya = function (e) {
  if (e.tag === 13) {
    var t = Et(e),
      n = nt(e, t);
    if (n !== null) {
      var r = de();
      Ie(n, e, t, r);
    }
    _u(e, t);
  }
};
Xa = function () {
  return U;
};
Za = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
ql = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ql(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = bo(r);
            if (!o) throw Error(E(90));
            Ra(r), Ql(r, o);
          }
        }
      }
      break;
    case "textarea":
      za(e, n);
      break;
    case "select":
      (t = n.value), t != null && vn(e, !!n.multiple, t, !1);
  }
};
Aa = ku;
Fa = Qt;
var Ym = { usingClientEntryPoint: !1, Events: [Cr, an, bo, Da, Ia, ku] },
  Wn = {
    findFiberByHostInstance: At,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Xm = {
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
      return (e = Va(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Wn.findFiberByHostInstance || Gm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hr.isDisabled && Hr.supportsFiber)
    try {
      (Uo = Hr.inject(Xm)), (Be = Hr);
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ym;
Ee.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Tu(t)) throw Error(E(200));
  return Qm(e, t, null, n);
};
Ee.createRoot = function (e, t) {
  if (!Tu(e)) throw Error(E(299));
  var n = !1,
    r = "",
    o = wd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Pu(e, 1, !1, null, null, n, !1, r, o)),
    (e[tt] = t.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    new Ru(t)
  );
};
Ee.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = Va(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
  return Qt(e);
};
Ee.hydrate = function (e, t, n) {
  if (!Jo(t)) throw Error(E(200));
  return qo(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
  if (!Tu(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    l = "",
    i = wd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = yd(t, null, e, 1, n ?? null, o, !1, l, i)),
    (e[tt] = t.current),
    fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Zo(t);
};
Ee.render = function (e, t, n) {
  if (!Jo(t)) throw Error(E(200));
  return qo(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
  if (!Jo(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Qt(function () {
        qo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[tt] = null);
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = ku;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Jo(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return qo(e, t, n, !1, r);
};
Ee.version = "18.3.1-next-f1338f8080-20240426";
function xd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xd);
    } catch (e) {
      console.error(e);
    }
}
xd(), (xa.exports = Ee);
var el = xa.exports;
const Zm = sa(el);
var Sd,
  Hs = el;
(Sd = Hs.createRoot), Hs.hydrateRoot;
function Jm(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function kd(...e) {
  return (t) => e.forEach((n) => Jm(n, t));
}
function Zt(...e) {
  return v.useCallback(kd(...e), e);
}
var tl = v.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = v.Children.toArray(n),
    l = o.find(eh);
  if (l) {
    const i = l.props.children,
      u = o.map((s) =>
        s === l
          ? v.Children.count(i) > 1
            ? v.Children.only(null)
            : v.isValidElement(i)
              ? i.props.children
              : null
          : s,
      );
    return S.jsx(Oi, {
      ...r,
      ref: t,
      children: v.isValidElement(i) ? v.cloneElement(i, void 0, u) : null,
    });
  }
  return S.jsx(Oi, { ...r, ref: t, children: n });
});
tl.displayName = "Slot";
var Oi = v.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (v.isValidElement(n)) {
    const o = nh(n);
    return v.cloneElement(n, { ...th(r, n.props), ref: t ? kd(t, o) : o });
  }
  return v.Children.count(n) > 1 ? v.Children.only(null) : null;
});
Oi.displayName = "SlotClone";
var qm = ({ children: e }) => S.jsx(S.Fragment, { children: e });
function eh(e) {
  return v.isValidElement(e) && e.type === qm;
}
function th(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      l = t[r];
    /^on[A-Z]/.test(r)
      ? o && l
        ? (n[r] = (...u) => {
            l(...u), o(...u);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...l })
        : r === "className" && (n[r] = [o, l].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function nh(e) {
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
function Ed(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ed(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function rh() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ed(e)) && (r && (r += " "), (r += t));
  return r;
}
const Qs = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  Gs = rh,
  Cd = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Gs(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: l } = t,
      i = Object.keys(o).map((a) => {
        const h = n == null ? void 0 : n[a],
          f = l == null ? void 0 : l[a];
        if (h === null) return null;
        const p = Qs(h) || Qs(f);
        return o[a][p];
      }),
      u =
        n &&
        Object.entries(n).reduce((a, h) => {
          let [f, p] = h;
          return p === void 0 || (a[f] = p), a;
        }, {}),
      s =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((a, h) => {
              let { class: f, className: p, ...y } = h;
              return Object.entries(y).every((x) => {
                let [g, k] = x;
                return Array.isArray(k)
                  ? k.includes({ ...l, ...u }[g])
                  : { ...l, ...u }[g] === k;
              })
                ? [...a, f, p]
                : a;
            }, []);
    return Gs(
      e,
      i,
      s,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  };
function Nd(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Nd(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function oh() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Nd(e)) && (r && (r += " "), (r += t));
  return r;
}
const zu = "-",
  lh = (e) => {
    const t = uh(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const u = i.split(zu);
        return u[0] === "" && u.length !== 1 && u.shift(), Pd(u, t) || ih(i);
      },
      getConflictingClassGroupIds: (i, u) => {
        const s = n[i] || [];
        return u && r[i] ? [...s, ...r[i]] : s;
      },
    };
  },
  Pd = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? Pd(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const l = e.join(zu);
    return (i = t.validators.find(({ validator: u }) => u(l))) == null
      ? void 0
      : i.classGroupId;
  },
  Ks = /^\[(.+)\]$/,
  ih = (e) => {
    if (Ks.test(e)) {
      const t = Ks.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  uh = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      ah(Object.entries(e.classGroups), n).forEach(([l, i]) => {
        Mi(i, r, l, t);
      }),
      r
    );
  },
  Mi = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const l = o === "" ? t : Ys(t, o);
        l.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (sh(o)) {
          Mi(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([l, i]) => {
        Mi(i, Ys(t, l), n, r);
      });
    });
  },
  Ys = (e, t) => {
    let n = e;
    return (
      t.split(zu).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  sh = (e) => e.isThemeGetter,
  ah = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((l) =>
            typeof l == "string"
              ? t + l
              : typeof l == "object"
                ? Object.fromEntries(
                    Object.entries(l).map(([i, u]) => [t + i, u]),
                  )
                : l,
          );
          return [n, o];
        })
      : e,
  ch = (e) => {
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
  _d = "!",
  dh = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      l = t.length,
      i = (u) => {
        const s = [];
        let a = 0,
          h = 0,
          f;
        for (let k = 0; k < u.length; k++) {
          let d = u[k];
          if (a === 0) {
            if (d === o && (r || u.slice(k, k + l) === t)) {
              s.push(u.slice(h, k)), (h = k + l);
              continue;
            }
            if (d === "/") {
              f = k;
              continue;
            }
          }
          d === "[" ? a++ : d === "]" && a--;
        }
        const p = s.length === 0 ? u : u.substring(h),
          y = p.startsWith(_d),
          x = y ? p.substring(1) : p,
          g = f && f > h ? f - h : void 0;
        return {
          modifiers: s,
          hasImportantModifier: y,
          baseClassName: x,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (u) => n({ className: u, parseClassName: i }) : i;
  },
  fh = (e) => {
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
  ph = (e) => ({ cache: ch(e.cacheSize), parseClassName: dh(e), ...lh(e) }),
  mh = /\s+/,
  hh = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      l = [],
      i = e.trim().split(mh);
    let u = "";
    for (let s = i.length - 1; s >= 0; s -= 1) {
      const a = i[s],
        {
          modifiers: h,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: y,
        } = n(a);
      let x = !!y,
        g = r(x ? p.substring(0, y) : p);
      if (!g) {
        if (!x) {
          u = a + (u.length > 0 ? " " + u : u);
          continue;
        }
        if (((g = r(p)), !g)) {
          u = a + (u.length > 0 ? " " + u : u);
          continue;
        }
        x = !1;
      }
      const k = fh(h).join(":"),
        d = f ? k + _d : k,
        c = d + g;
      if (l.includes(c)) continue;
      l.push(c);
      const m = o(g, x);
      for (let w = 0; w < m.length; ++w) {
        const C = m[w];
        l.push(d + C);
      }
      u = a + (u.length > 0 ? " " + u : u);
    }
    return u;
  };
function vh() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Rd(t)) && (r && (r += " "), (r += n));
  return r;
}
const Rd = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Rd(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function gh(e, ...t) {
  let n,
    r,
    o,
    l = i;
  function i(s) {
    const a = t.reduce((h, f) => f(h), e());
    return (n = ph(a)), (r = n.cache.get), (o = n.cache.set), (l = u), u(s);
  }
  function u(s) {
    const a = r(s);
    if (a) return a;
    const h = hh(s, n);
    return o(s, h), h;
  }
  return function () {
    return l(vh.apply(null, arguments));
  };
}
const V = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Td = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  yh = /^\d+\/\d+$/,
  wh = new Set(["px", "full", "screen"]),
  xh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Sh =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  kh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Eh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ch =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ke = (e) => kn(e) || wh.has(e) || yh.test(e),
  st = (e) => jn(e, "length", Oh),
  kn = (e) => !!e && !Number.isNaN(Number(e)),
  Ll = (e) => jn(e, "number", kn),
  bn = (e) => !!e && Number.isInteger(Number(e)),
  Nh = (e) => e.endsWith("%") && kn(e.slice(0, -1)),
  M = (e) => Td.test(e),
  at = (e) => xh.test(e),
  Ph = new Set(["length", "size", "percentage"]),
  _h = (e) => jn(e, Ph, zd),
  Rh = (e) => jn(e, "position", zd),
  Th = new Set(["image", "url"]),
  zh = (e) => jn(e, Th, jh),
  Lh = (e) => jn(e, "", Mh),
  Bn = () => !0,
  jn = (e, t, n) => {
    const r = Td.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  Oh = (e) => Sh.test(e) && !kh.test(e),
  zd = () => !1,
  Mh = (e) => Eh.test(e),
  jh = (e) => Ch.test(e),
  Dh = () => {
    const e = V("colors"),
      t = V("spacing"),
      n = V("blur"),
      r = V("brightness"),
      o = V("borderColor"),
      l = V("borderRadius"),
      i = V("borderSpacing"),
      u = V("borderWidth"),
      s = V("contrast"),
      a = V("grayscale"),
      h = V("hueRotate"),
      f = V("invert"),
      p = V("gap"),
      y = V("gradientColorStops"),
      x = V("gradientColorStopPositions"),
      g = V("inset"),
      k = V("margin"),
      d = V("opacity"),
      c = V("padding"),
      m = V("saturate"),
      w = V("scale"),
      C = V("sepia"),
      P = V("skew"),
      N = V("space"),
      R = V("translate"),
      I = () => ["auto", "contain", "none"],
      L = () => ["auto", "hidden", "clip", "visible", "scroll"],
      ae = () => ["auto", M, t],
      F = () => [M, t],
      lt = () => ["", Ke, st],
      Ot = () => ["auto", kn, M],
      Pr = () => [
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
      it = () => ["solid", "dashed", "dotted", "double", "none"],
      Jt = () => [
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
      z = () => ["", "0", M],
      O = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      A = () => [kn, M];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Bn],
        spacing: [Ke, st],
        blur: ["none", "", at, M],
        brightness: A(),
        borderColor: [e],
        borderRadius: ["none", "", "full", at, M],
        borderSpacing: F(),
        borderWidth: lt(),
        contrast: A(),
        grayscale: z(),
        hueRotate: A(),
        invert: z(),
        gap: F(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Nh, st],
        inset: ae(),
        margin: ae(),
        opacity: A(),
        padding: F(),
        saturate: A(),
        scale: A(),
        sepia: z(),
        skew: A(),
        space: F(),
        translate: F(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", M] }],
        container: ["container"],
        columns: [{ columns: [at] }],
        "break-after": [{ "break-after": O() }],
        "break-before": [{ "break-before": O() }],
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
        "object-position": [{ object: [...Pr(), M] }],
        overflow: [{ overflow: L() }],
        "overflow-x": [{ "overflow-x": L() }],
        "overflow-y": [{ "overflow-y": L() }],
        overscroll: [{ overscroll: I() }],
        "overscroll-x": [{ "overscroll-x": I() }],
        "overscroll-y": [{ "overscroll-y": I() }],
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
        z: [{ z: ["auto", bn, M] }],
        basis: [{ basis: ae() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", M] }],
        grow: [{ grow: z() }],
        shrink: [{ shrink: z() }],
        order: [{ order: ["first", "last", "none", bn, M] }],
        "grid-cols": [{ "grid-cols": [Bn] }],
        "col-start-end": [{ col: ["auto", { span: ["full", bn, M] }, M] }],
        "col-start": [{ "col-start": Ot() }],
        "col-end": [{ "col-end": Ot() }],
        "grid-rows": [{ "grid-rows": [Bn] }],
        "row-start-end": [{ row: ["auto", { span: [bn, M] }, M] }],
        "row-start": [{ "row-start": Ot() }],
        "row-end": [{ "row-end": Ot() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", M] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", M] }],
        gap: [{ gap: [p] }],
        "gap-x": [{ "gap-x": [p] }],
        "gap-y": [{ "gap-y": [p] }],
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
        m: [{ m: [k] }],
        mx: [{ mx: [k] }],
        my: [{ my: [k] }],
        ms: [{ ms: [k] }],
        me: [{ me: [k] }],
        mt: [{ mt: [k] }],
        mr: [{ mr: [k] }],
        mb: [{ mb: [k] }],
        ml: [{ ml: [k] }],
        "space-x": [{ "space-x": [N] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [N] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, t] }],
        "min-w": [{ "min-w": [M, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              M,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [at] },
              at,
            ],
          },
        ],
        h: [{ h: [M, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [M, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", at, st] }],
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
              Ll,
            ],
          },
        ],
        "font-family": [{ font: [Bn] }],
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
              M,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", kn, Ll] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Ke,
              M,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", M] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", M] }],
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
        "text-decoration-style": [{ decoration: [...it(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Ke, st] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Ke, M] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: F() }],
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
              M,
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
        content: [{ content: ["none", M] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [d] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Pr(), Rh] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", _h] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              zh,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [x] }],
        "gradient-via-pos": [{ via: [x] }],
        "gradient-to-pos": [{ to: [x] }],
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
        "border-w": [{ border: [u] }],
        "border-w-x": [{ "border-x": [u] }],
        "border-w-y": [{ "border-y": [u] }],
        "border-w-s": [{ "border-s": [u] }],
        "border-w-e": [{ "border-e": [u] }],
        "border-w-t": [{ "border-t": [u] }],
        "border-w-r": [{ "border-r": [u] }],
        "border-w-b": [{ "border-b": [u] }],
        "border-w-l": [{ "border-l": [u] }],
        "border-opacity": [{ "border-opacity": [d] }],
        "border-style": [{ border: [...it(), "hidden"] }],
        "divide-x": [{ "divide-x": [u] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [u] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [d] }],
        "divide-style": [{ divide: it() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...it()] }],
        "outline-offset": [{ "outline-offset": [Ke, M] }],
        "outline-w": [{ outline: [Ke, st] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: lt() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [d] }],
        "ring-offset-w": [{ "ring-offset": [Ke, st] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", at, Lh] }],
        "shadow-color": [{ shadow: [Bn] }],
        opacity: [{ opacity: [d] }],
        "mix-blend": [
          { "mix-blend": [...Jt(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": Jt() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [s] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", at, M] }],
        grayscale: [{ grayscale: [a] }],
        "hue-rotate": [{ "hue-rotate": [h] }],
        invert: [{ invert: [f] }],
        saturate: [{ saturate: [m] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [s] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [a] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [h] }],
        "backdrop-invert": [{ "backdrop-invert": [f] }],
        "backdrop-opacity": [{ "backdrop-opacity": [d] }],
        "backdrop-saturate": [{ "backdrop-saturate": [m] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
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
              M,
            ],
          },
        ],
        duration: [{ duration: A() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", M] }],
        delay: [{ delay: A() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", M] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [w] }],
        "scale-x": [{ "scale-x": [w] }],
        "scale-y": [{ "scale-y": [w] }],
        rotate: [{ rotate: [bn, M] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
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
              M,
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
              M,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": F() }],
        "scroll-mx": [{ "scroll-mx": F() }],
        "scroll-my": [{ "scroll-my": F() }],
        "scroll-ms": [{ "scroll-ms": F() }],
        "scroll-me": [{ "scroll-me": F() }],
        "scroll-mt": [{ "scroll-mt": F() }],
        "scroll-mr": [{ "scroll-mr": F() }],
        "scroll-mb": [{ "scroll-mb": F() }],
        "scroll-ml": [{ "scroll-ml": F() }],
        "scroll-p": [{ "scroll-p": F() }],
        "scroll-px": [{ "scroll-px": F() }],
        "scroll-py": [{ "scroll-py": F() }],
        "scroll-ps": [{ "scroll-ps": F() }],
        "scroll-pe": [{ "scroll-pe": F() }],
        "scroll-pt": [{ "scroll-pt": F() }],
        "scroll-pr": [{ "scroll-pr": F() }],
        "scroll-pb": [{ "scroll-pb": F() }],
        "scroll-pl": [{ "scroll-pl": F() }],
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
          { "will-change": ["auto", "scroll", "contents", "transform", M] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Ke, st, Ll] }],
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
  Ih = gh(Dh);
function Lt(...e) {
  return Ih(oh(e));
}
const Ah = Cd(
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
  Ve = v.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, l) => {
      const i = r ? tl : "button";
      return S.jsx(i, {
        className: Lt(Ah({ variant: t, size: n, className: e })),
        ref: l,
        ...o,
      });
    },
  );
Ve.displayName = "Button";
const Ld = v.forwardRef(({ className: e, type: t, ...n }, r) =>
  S.jsx("input", {
    type: t,
    className: Lt(
      "flex h-10 w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
      e,
    ),
    ref: r,
    ...n,
  }),
);
Ld.displayName = "Input";
var Fh = [
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
  Qe = Fh.reduce((e, t) => {
    const n = v.forwardRef((r, o) => {
      const { asChild: l, ...i } = r,
        u = l ? tl : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        S.jsx(u, { ...i, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Uh(e, t) {
  e && el.flushSync(() => e.dispatchEvent(t));
}
var $h = "Label",
  Od = v.forwardRef((e, t) =>
    S.jsx(Qe.label, {
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
Od.displayName = $h;
var Md = Od;
const Vh = Cd(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  ),
  Lu = v.forwardRef(({ className: e, ...t }, n) =>
    S.jsx(Md, { ref: n, className: Lt(Vh(), e), ...t }),
  );
Lu.displayName = Md.displayName;
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wh = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  jd = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var bh = {
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
 */ const Bh = v.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: l,
      iconNode: i,
      ...u
    },
    s,
  ) =>
    v.createElement(
      "svg",
      {
        ref: s,
        ...bh,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: jd("lucide", o),
        ...u,
      },
      [
        ...i.map(([a, h]) => v.createElement(a, h)),
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
  const n = v.forwardRef(({ className: r, ...o }, l) =>
    v.createElement(Bh, {
      ref: l,
      iconNode: t,
      className: jd(`lucide-${Wh(e)}`, r),
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
 */ const Hh = Ge("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qh = Ge("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gh = Ge("Maximize2", [
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
 */ const Kh = Ge("Minimize2", [
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
 */ const Yh = Ge("Pause", [
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
 */ const Xh = Ge("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zh = Ge("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jh = Ge("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qh = Ge("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dd = Ge("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Id = v.createContext(null),
  ev = ({ children: e }) => {
    const [t, n] = v.useState([]),
      [r, o] = v.useState(null),
      [l, i] = v.useState(null),
      [u, s] = v.useState(""),
      [a, h] = v.useState(!1),
      [f, p] = v.useState([]),
      [y, x] = v.useState(!1),
      [g, k] = v.useState(!1),
      [d, c] = v.useState(!1),
      [m, w] = v.useState(!1),
      C = v.useRef(null),
      P = v.useRef(null),
      N = {
        videos: t,
        setVideos: n,
        selectedVideoIndex: r,
        setSelectedVideoIndex: o,
        currentVideoIndex: l,
        setCurrentVideoIndex: i,
        prompt: u,
        setPrompt: s,
        isModalOpen: a,
        setIsModalOpen: h,
        detectedItems: f,
        setDetectedItems: p,
        isAnalyzing: y,
        setIsAnalyzing: x,
        isDragging: g,
        setIsDragging: k,
        isPlaying: d,
        setIsPlaying: c,
        isFullscreen: m,
        setIsFullscreen: w,
        videoRef: C,
        fileInputRef: P,
      };
    return S.jsx(Id.Provider, { value: N, children: e });
  },
  Ou = () => {
    const e = v.useContext(Id);
    if (!e)
      throw new Error(
        "useContentProvider must be used within a ContextProvider",
      );
    return e;
  };
function tv() {
  const {
      isDragging: e,
      fileInputRef: t,
      setIsDragging: n,
      setVideos: r,
      selectedVideoIndex: o,
      setSelectedVideoIndex: l,
    } = Ou(),
    i = (f) => {
      if (f) {
        const p = Array.from(f)
          .filter((y) => y.type === "video/mp4")
          .map((y) => ({ file: y, url: URL.createObjectURL(y) }));
        r((y) => {
          const x = [...y, ...p];
          return o === null && x.length > 0 && l(y.length), x;
        });
      }
    },
    u = (f) => {
      f.preventDefault(), f.stopPropagation(), n(!0);
    },
    s = (f) => {
      f.preventDefault(), f.stopPropagation(), n(!1);
    },
    a = (f) => {
      f.preventDefault(), f.stopPropagation();
    },
    h = (f) => {
      f.preventDefault(), f.stopPropagation(), n(!1);
      const p = f.dataTransfer.files;
      i(p);
    };
  return S.jsx("div", {
    className: "w-64 bg-gray-800 text-white p-4 flex flex-col",
    children: S.jsxs("div", {
      className: `flex-1 p-4 border-2 border-dashed rounded-lg transition-colors ${e ? "border-blue-500 bg-blue-900" : "border-gray-600"}`,
      onDragEnter: u,
      onDragOver: a,
      onDragLeave: s,
      onDrop: h,
      children: [
        S.jsx(Lu, {
          htmlFor: "video-upload",
          className: "text-lg font-medium block text-center mb-2",
          children: "Upload MP4 Files",
        }),
        S.jsx("p", {
          className: "text-sm text-gray-400 text-center mb-4",
          children: "Drag and drop or click to select",
        }),
        S.jsx(Ld, {
          id: "video-upload",
          type: "file",
          accept: "video/mp4",
          onChange: (f) => i(f.target.files),
          className: "hidden",
          multiple: !0,
          ref: t,
        }),
        S.jsxs(Ve, {
          variant: "outline",
          onClick: () => {
            var f;
            return (f = t.current) == null ? void 0 : f.click();
          },
          className:
            "w-full bg-blue-600 hover:bg-blue-700 text-white border-blue-600",
          children: [S.jsx(qh, { className: "h-5 w-5 mr-2" }), "Select Files"],
        }),
      ],
    }),
  });
}
const Ad = v.forwardRef(({ className: e, ...t }, n) =>
  S.jsx("textarea", {
    className: Lt(
      "flex min-h-[80px] w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
      e,
    ),
    ref: n,
    ...t,
  }),
);
Ad.displayName = "Textarea";
function nv() {
  const {
      videos: e,
      selectedVideoIndex: t,
      setSelectedVideoIndex: n,
      prompt: r,
      setPrompt: o,
      isAnalyzing: l,
      setIsModalOpen: i,
      setIsAnalyzing: u,
      setVideos: s,
      setCurrentVideoIndex: a,
      setDetectedItems: h,
    } = Ou(),
    f = (y) => {
      s((x) => x.filter((g, k) => k !== y)),
        t === y ? n(null) : t !== null && y < t && n(t - 1);
    },
    p = async () => {
      t !== null &&
        (u(!0),
        a(t),
        setTimeout(() => {
          h([
            { name: "Person", timestamp: 5 },
            { name: "Car", timestamp: 15 },
            { name: "Suspicious activity", timestamp: 25 },
            { name: "Dining Table", timestamp: 60 },
            { name: "Person", timestamp: 160 },
          ]),
            u(!1),
            i(!0);
        }, 3e3));
    };
  return S.jsxs("div", {
    className: "flex-1 p-8 overflow-auto",
    children: [
      S.jsxs("div", {
        className: "mb-6",
        children: [
          S.jsx("h2", {
            className: "text-xl font-semibold mb-2",
            children: "Uploaded Footage",
          }),
          e.length > 0
            ? S.jsx("ul", {
                className: "space-y-2",
                children: e.map((y, x) =>
                  S.jsxs(
                    "li",
                    {
                      className:
                        "flex items-center justify-between bg-white p-3 rounded-md shadow",
                      children: [
                        S.jsx("button", {
                          className: `flex-grow text-left p-2 rounded ${t === x ? "bg-blue-100" : "hover:bg-gray-100"}`,
                          onClick: () => n(x),
                          children: y.file.name,
                        }),
                        S.jsx(Ve, {
                          variant: "ghost",
                          size: "icon",
                          onClick: () => f(x),
                          className:
                            "text-red-500 hover:text-red-600 hover:bg-red-50",
                          children: S.jsx(Jh, { className: "h-5 w-5" }),
                        }),
                      ],
                    },
                    x,
                  ),
                ),
              })
            : S.jsx("p", {
                className: "text-gray-500",
                children: "No videos uploaded yet.",
              }),
        ],
      }),
      S.jsxs("div", {
        className: "mb-6",
        children: [
          S.jsx(Lu, {
            htmlFor: "prompt",
            className: "text-lg font-medium block mb-2",
            children: "Analysis Prompt",
          }),
          S.jsx(Ad, {
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
      S.jsxs(Ve, {
        onClick: p,
        disabled: t === null || !r || l,
        className: "w-full bg-green-600 hover:bg-green-700 text-white",
        children: [
          l ? "Analyzing..." : "Analyze Footage",
          !l && S.jsx(Zh, { className: "ml-2 h-5 w-5" }),
        ],
      }),
    ],
  });
}
function Nt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function rv(e, t) {
  const n = v.createContext(t);
  function r(l) {
    const { children: i, ...u } = l,
      s = v.useMemo(() => u, Object.values(u));
    return S.jsx(n.Provider, { value: s, children: i });
  }
  function o(l) {
    const i = v.useContext(n);
    if (i) return i;
    if (t !== void 0) return t;
    throw new Error(`\`${l}\` must be used within \`${e}\``);
  }
  return (r.displayName = e + "Provider"), [r, o];
}
function ov(e, t = []) {
  let n = [];
  function r(l, i) {
    const u = v.createContext(i),
      s = n.length;
    n = [...n, i];
    function a(f) {
      const { scope: p, children: y, ...x } = f,
        g = (p == null ? void 0 : p[e][s]) || u,
        k = v.useMemo(() => x, Object.values(x));
      return S.jsx(g.Provider, { value: k, children: y });
    }
    function h(f, p) {
      const y = (p == null ? void 0 : p[e][s]) || u,
        x = v.useContext(y);
      if (x) return x;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${l}\``);
    }
    return (a.displayName = l + "Provider"), [a, h];
  }
  const o = () => {
    const l = n.map((i) => v.createContext(i));
    return function (u) {
      const s = (u == null ? void 0 : u[e]) || l;
      return v.useMemo(() => ({ [`__scope${e}`]: { ...u, [e]: s } }), [u, s]);
    };
  };
  return (o.scopeName = e), [r, lv(o, ...t)];
}
function lv(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (l) {
      const i = r.reduce((u, { useScope: s, scopeName: a }) => {
        const f = s(l)[`__scope${a}`];
        return { ...u, ...f };
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var Io =
    globalThis != null && globalThis.document ? v.useLayoutEffect : () => {},
  iv = $f.useId || (() => {}),
  uv = 0;
function Ol(e) {
  const [t, n] = v.useState(iv());
  return (
    Io(() => {
      e || n((r) => r ?? String(uv++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function Gt(e) {
  const t = v.useRef(e);
  return (
    v.useEffect(() => {
      t.current = e;
    }),
    v.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      [],
    )
  );
}
function sv({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = av({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    i = l ? e : r,
    u = Gt(n),
    s = v.useCallback(
      (a) => {
        if (l) {
          const f = typeof a == "function" ? a(e) : a;
          f !== e && u(f);
        } else o(a);
      },
      [l, e, o, u],
    );
  return [i, s];
}
function av({ defaultProp: e, onChange: t }) {
  const n = v.useState(e),
    [r] = n,
    o = v.useRef(r),
    l = Gt(t);
  return (
    v.useEffect(() => {
      o.current !== r && (l(r), (o.current = r));
    }, [r, o, l]),
    n
  );
}
function cv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gt(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var dv = "DismissableLayer",
  ji = "dismissableLayer.update",
  fv = "dismissableLayer.pointerDownOutside",
  pv = "dismissableLayer.focusOutside",
  Xs,
  Fd = v.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ud = v.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: l,
        onInteractOutside: i,
        onDismiss: u,
        ...s
      } = e,
      a = v.useContext(Fd),
      [h, f] = v.useState(null),
      p =
        (h == null ? void 0 : h.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, y] = v.useState({}),
      x = Zt(t, (N) => f(N)),
      g = Array.from(a.layers),
      [k] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1),
      d = g.indexOf(k),
      c = h ? g.indexOf(h) : -1,
      m = a.layersWithOutsidePointerEventsDisabled.size > 0,
      w = c >= d,
      C = vv((N) => {
        const R = N.target,
          I = [...a.branches].some((L) => L.contains(R));
        !w ||
          I ||
          (o == null || o(N),
          i == null || i(N),
          N.defaultPrevented || u == null || u());
      }, p),
      P = gv((N) => {
        const R = N.target;
        [...a.branches].some((L) => L.contains(R)) ||
          (l == null || l(N),
          i == null || i(N),
          N.defaultPrevented || u == null || u());
      }, p);
    return (
      cv((N) => {
        c === a.layers.size - 1 &&
          (r == null || r(N),
          !N.defaultPrevented && u && (N.preventDefault(), u()));
      }, p),
      v.useEffect(() => {
        if (h)
          return (
            n &&
              (a.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Xs = p.body.style.pointerEvents),
                (p.body.style.pointerEvents = "none")),
              a.layersWithOutsidePointerEventsDisabled.add(h)),
            a.layers.add(h),
            Zs(),
            () => {
              n &&
                a.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (p.body.style.pointerEvents = Xs);
            }
          );
      }, [h, p, n, a]),
      v.useEffect(
        () => () => {
          h &&
            (a.layers.delete(h),
            a.layersWithOutsidePointerEventsDisabled.delete(h),
            Zs());
        },
        [h, a],
      ),
      v.useEffect(() => {
        const N = () => y({});
        return (
          document.addEventListener(ji, N),
          () => document.removeEventListener(ji, N)
        );
      }, []),
      S.jsx(Qe.div, {
        ...s,
        ref: x,
        style: {
          pointerEvents: m ? (w ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Nt(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: Nt(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: Nt(
          e.onPointerDownCapture,
          C.onPointerDownCapture,
        ),
      })
    );
  });
Ud.displayName = dv;
var mv = "DismissableLayerBranch",
  hv = v.forwardRef((e, t) => {
    const n = v.useContext(Fd),
      r = v.useRef(null),
      o = Zt(t, r);
    return (
      v.useEffect(() => {
        const l = r.current;
        if (l)
          return (
            n.branches.add(l),
            () => {
              n.branches.delete(l);
            }
          );
      }, [n.branches]),
      S.jsx(Qe.div, { ...e, ref: o })
    );
  });
hv.displayName = mv;
function vv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gt(e),
    r = v.useRef(!1),
    o = v.useRef(() => {});
  return (
    v.useEffect(() => {
      const l = (u) => {
          if (u.target && !r.current) {
            let s = function () {
              $d(fv, n, a, { discrete: !0 });
            };
            const a = { originalEvent: u };
            u.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = s),
                t.addEventListener("click", o.current, { once: !0 }))
              : s();
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
function gv(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Gt(e),
    r = v.useRef(!1);
  return (
    v.useEffect(() => {
      const o = (l) => {
        l.target &&
          !r.current &&
          $d(pv, n, { originalEvent: l }, { discrete: !1 });
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
function Zs() {
  const e = new CustomEvent(ji);
  document.dispatchEvent(e);
}
function $d(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    l = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Uh(o, l) : o.dispatchEvent(l);
}
var Ml = "focusScope.autoFocusOnMount",
  jl = "focusScope.autoFocusOnUnmount",
  Js = { bubbles: !1, cancelable: !0 },
  yv = "FocusScope",
  Vd = v.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: l,
        ...i
      } = e,
      [u, s] = v.useState(null),
      a = Gt(o),
      h = Gt(l),
      f = v.useRef(null),
      p = Zt(t, (g) => s(g)),
      y = v.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    v.useEffect(() => {
      if (r) {
        let g = function (m) {
            if (y.paused || !u) return;
            const w = m.target;
            u.contains(w) ? (f.current = w) : ct(f.current, { select: !0 });
          },
          k = function (m) {
            if (y.paused || !u) return;
            const w = m.relatedTarget;
            w !== null && (u.contains(w) || ct(f.current, { select: !0 }));
          },
          d = function (m) {
            if (document.activeElement === document.body)
              for (const C of m) C.removedNodes.length > 0 && ct(u);
          };
        document.addEventListener("focusin", g),
          document.addEventListener("focusout", k);
        const c = new MutationObserver(d);
        return (
          u && c.observe(u, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", g),
              document.removeEventListener("focusout", k),
              c.disconnect();
          }
        );
      }
    }, [r, u, y.paused]),
      v.useEffect(() => {
        if (u) {
          ea.add(y);
          const g = document.activeElement;
          if (!u.contains(g)) {
            const d = new CustomEvent(Ml, Js);
            u.addEventListener(Ml, a),
              u.dispatchEvent(d),
              d.defaultPrevented ||
                (wv(Cv(Wd(u)), { select: !0 }),
                document.activeElement === g && ct(u));
          }
          return () => {
            u.removeEventListener(Ml, a),
              setTimeout(() => {
                const d = new CustomEvent(jl, Js);
                u.addEventListener(jl, h),
                  u.dispatchEvent(d),
                  d.defaultPrevented || ct(g ?? document.body, { select: !0 }),
                  u.removeEventListener(jl, h),
                  ea.remove(y);
              }, 0);
          };
        }
      }, [u, a, h, y]);
    const x = v.useCallback(
      (g) => {
        if ((!n && !r) || y.paused) return;
        const k = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey,
          d = document.activeElement;
        if (k && d) {
          const c = g.currentTarget,
            [m, w] = xv(c);
          m && w
            ? !g.shiftKey && d === w
              ? (g.preventDefault(), n && ct(m, { select: !0 }))
              : g.shiftKey &&
                d === m &&
                (g.preventDefault(), n && ct(w, { select: !0 }))
            : d === c && g.preventDefault();
        }
      },
      [n, r, y.paused],
    );
    return S.jsx(Qe.div, { tabIndex: -1, ...i, ref: p, onKeyDown: x });
  });
Vd.displayName = yv;
function wv(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((ct(r, { select: t }), document.activeElement !== n)) return;
}
function xv(e) {
  const t = Wd(e),
    n = qs(t, e),
    r = qs(t.reverse(), e);
  return [n, r];
}
function Wd(e) {
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
function qs(e, t) {
  for (const n of e) if (!Sv(n, { upTo: t })) return n;
}
function Sv(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function kv(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function ct(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && kv(e) && t && e.select();
  }
}
var ea = Ev();
function Ev() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = ta(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = ta(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function ta(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Cv(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Nv = "Portal",
  bd = v.forwardRef((e, t) => {
    var u;
    const { container: n, ...r } = e,
      [o, l] = v.useState(!1);
    Io(() => l(!0), []);
    const i =
      n ||
      (o &&
        ((u = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : u.body));
    return i ? Zm.createPortal(S.jsx(Qe.div, { ...r, ref: t }), i) : null;
  });
bd.displayName = Nv;
function Pv(e, t) {
  return v.useReducer((n, r) => t[n][r] ?? n, e);
}
var nl = (e) => {
  const { present: t, children: n } = e,
    r = _v(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n),
    l = Zt(r.ref, Rv(o));
  return typeof n == "function" || r.isPresent
    ? v.cloneElement(o, { ref: l })
    : null;
};
nl.displayName = "Presence";
function _v(e) {
  const [t, n] = v.useState(),
    r = v.useRef({}),
    o = v.useRef(e),
    l = v.useRef("none"),
    i = e ? "mounted" : "unmounted",
    [u, s] = Pv(i, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    v.useEffect(() => {
      const a = Qr(r.current);
      l.current = u === "mounted" ? a : "none";
    }, [u]),
    Io(() => {
      const a = r.current,
        h = o.current;
      if (h !== e) {
        const p = l.current,
          y = Qr(a);
        e
          ? s("MOUNT")
          : y === "none" || (a == null ? void 0 : a.display) === "none"
            ? s("UNMOUNT")
            : s(h && p !== y ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, s]),
    Io(() => {
      if (t) {
        const a = (f) => {
            const y = Qr(r.current).includes(f.animationName);
            f.target === t && y && el.flushSync(() => s("ANIMATION_END"));
          },
          h = (f) => {
            f.target === t && (l.current = Qr(r.current));
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
      } else s("ANIMATION_END");
    }, [t, s]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(u),
      ref: v.useCallback((a) => {
        a && (r.current = getComputedStyle(a)), n(a);
      }, []),
    }
  );
}
function Qr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Rv(e) {
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
var Dl = 0;
function Tv() {
  v.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? na()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? na()),
      Dl++,
      () => {
        Dl === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Dl--;
      }
    );
  }, []);
}
function na() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var be = function () {
  return (
    (be =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var l in n)
            Object.prototype.hasOwnProperty.call(n, l) && (t[l] = n[l]);
        }
        return t;
      }),
    be.apply(this, arguments)
  );
};
function Bd(e, t) {
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
function zv(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, l; r < o; r++)
      (l || !(r in t)) &&
        (l || (l = Array.prototype.slice.call(t, 0, r)), (l[r] = t[r]));
  return e.concat(l || Array.prototype.slice.call(t));
}
var ao = "right-scroll-bar-position",
  co = "width-before-scroll-bar",
  Lv = "with-scroll-bars-hidden",
  Ov = "--removed-body-scroll-bar-size";
function Il(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Mv(e, t) {
  var n = v.useState(function () {
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
var jv = typeof window < "u" ? v.useLayoutEffect : v.useEffect,
  ra = new WeakMap();
function Dv(e, t) {
  var n = Mv(null, function (r) {
    return e.forEach(function (o) {
      return Il(o, r);
    });
  });
  return (
    jv(
      function () {
        var r = ra.get(n);
        if (r) {
          var o = new Set(r),
            l = new Set(e),
            i = n.current;
          o.forEach(function (u) {
            l.has(u) || Il(u, null);
          }),
            l.forEach(function (u) {
              o.has(u) || Il(u, i);
            });
        }
        ra.set(n, e);
      },
      [e],
    ),
    n
  );
}
function Iv(e) {
  return e;
}
function Av(e, t) {
  t === void 0 && (t = Iv);
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
            n = n.filter(function (u) {
              return u !== i;
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
          push: function (u) {
            return l(u);
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
          var u = n;
          (n = []), u.forEach(l), (i = n);
        }
        var s = function () {
            var h = i;
            (i = []), h.forEach(l);
          },
          a = function () {
            return Promise.resolve().then(s);
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
function Fv(e) {
  e === void 0 && (e = {});
  var t = Av(null);
  return (t.options = be({ async: !0, ssr: !1 }, e)), t;
}
var Hd = function (e) {
  var t = e.sideCar,
    n = Bd(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return v.createElement(r, be({}, n));
};
Hd.isSideCarExport = !0;
function Uv(e, t) {
  return e.useMedium(t), Hd;
}
var Qd = Fv(),
  Al = function () {},
  rl = v.forwardRef(function (e, t) {
    var n = v.useRef(null),
      r = v.useState({
        onScrollCapture: Al,
        onWheelCapture: Al,
        onTouchMoveCapture: Al,
      }),
      o = r[0],
      l = r[1],
      i = e.forwardProps,
      u = e.children,
      s = e.className,
      a = e.removeScrollBar,
      h = e.enabled,
      f = e.shards,
      p = e.sideCar,
      y = e.noIsolation,
      x = e.inert,
      g = e.allowPinchZoom,
      k = e.as,
      d = k === void 0 ? "div" : k,
      c = e.gapMode,
      m = Bd(e, [
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
      w = p,
      C = Dv([n, t]),
      P = be(be({}, m), o);
    return v.createElement(
      v.Fragment,
      null,
      h &&
        v.createElement(w, {
          sideCar: Qd,
          removeScrollBar: a,
          shards: f,
          noIsolation: y,
          inert: x,
          setCallbacks: l,
          allowPinchZoom: !!g,
          lockRef: n,
          gapMode: c,
        }),
      i
        ? v.cloneElement(v.Children.only(u), be(be({}, P), { ref: C }))
        : v.createElement(d, be({}, P, { className: s, ref: C }), u),
    );
  });
rl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
rl.classNames = { fullWidth: co, zeroRight: ao };
var $v = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Vv() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = $v();
  return t && e.setAttribute("nonce", t), e;
}
function Wv(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function bv(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Bv = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Vv()) && (Wv(t, n), bv(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Hv = function () {
    var e = Bv();
    return function (t, n) {
      v.useEffect(
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
  Gd = function () {
    var e = Hv(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  Qv = { left: 0, top: 0, right: 0, gap: 0 },
  Fl = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Gv = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Fl(n), Fl(r), Fl(o)];
  },
  Kv = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return Qv;
    var t = Gv(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Yv = Gd(),
  En = "data-scroll-locked",
  Xv = function (e, t, n, r) {
    var o = e.left,
      l = e.top,
      i = e.right,
      u = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Lv,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(u, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          En,
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
                .concat(u, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(u, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          ao,
          ` {
    right: `,
        )
        .concat(u, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          co,
          ` {
    margin-right: `,
        )
        .concat(u, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(ao, " .")
        .concat(
          ao,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(co, " .")
        .concat(
          co,
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
          En,
          `] {
    `,
        )
        .concat(Ov, ": ")
        .concat(
          u,
          `px;
  }
`,
        )
    );
  },
  oa = function () {
    var e = parseInt(document.body.getAttribute(En) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  Zv = function () {
    v.useEffect(function () {
      return (
        document.body.setAttribute(En, (oa() + 1).toString()),
        function () {
          var e = oa() - 1;
          e <= 0
            ? document.body.removeAttribute(En)
            : document.body.setAttribute(En, e.toString());
        }
      );
    }, []);
  },
  Jv = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    Zv();
    var l = v.useMemo(
      function () {
        return Kv(o);
      },
      [o],
    );
    return v.createElement(Yv, { styles: Xv(l, !t, o, n ? "" : "!important") });
  },
  Di = !1;
if (typeof window < "u")
  try {
    var Gr = Object.defineProperty({}, "passive", {
      get: function () {
        return (Di = !0), !0;
      },
    });
    window.addEventListener("test", Gr, Gr),
      window.removeEventListener("test", Gr, Gr);
  } catch {
    Di = !1;
  }
var en = Di ? { passive: !1 } : !1,
  qv = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Kd = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !qv(e) && n[t] === "visible")
    );
  },
  eg = function (e) {
    return Kd(e, "overflowY");
  },
  tg = function (e) {
    return Kd(e, "overflowX");
  },
  la = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Yd(e, r);
      if (o) {
        var l = Xd(e, r),
          i = l[1],
          u = l[2];
        if (i > u) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  ng = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  rg = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Yd = function (e, t) {
    return e === "v" ? eg(t) : tg(t);
  },
  Xd = function (e, t) {
    return e === "v" ? ng(t) : rg(t);
  },
  og = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  lg = function (e, t, n, r, o) {
    var l = og(e, window.getComputedStyle(t).direction),
      i = l * r,
      u = n.target,
      s = t.contains(u),
      a = !1,
      h = i > 0,
      f = 0,
      p = 0;
    do {
      var y = Xd(e, u),
        x = y[0],
        g = y[1],
        k = y[2],
        d = g - k - l * x;
      (x || d) && Yd(e, u) && ((f += d), (p += x)),
        u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
    } while ((!s && u !== document.body) || (s && (t.contains(u) || t === u)));
    return (
      ((h && (Math.abs(f) < 1 || !o)) || (!h && (Math.abs(p) < 1 || !o))) &&
        (a = !0),
      a
    );
  },
  Kr = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  ia = function (e) {
    return [e.deltaX, e.deltaY];
  },
  ua = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ig = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  ug = function (e) {
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
  sg = 0,
  tn = [];
function ag(e) {
  var t = v.useRef([]),
    n = v.useRef([0, 0]),
    r = v.useRef(),
    o = v.useState(sg++)[0],
    l = v.useState(Gd)[0],
    i = v.useRef(e);
  v.useEffect(
    function () {
      i.current = e;
    },
    [e],
  ),
    v.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var g = zv([e.lockRef.current], (e.shards || []).map(ua), !0).filter(
            Boolean,
          );
          return (
            g.forEach(function (k) {
              return k.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                g.forEach(function (k) {
                  return k.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var u = v.useCallback(function (g, k) {
      if ("touches" in g && g.touches.length === 2)
        return !i.current.allowPinchZoom;
      var d = Kr(g),
        c = n.current,
        m = "deltaX" in g ? g.deltaX : c[0] - d[0],
        w = "deltaY" in g ? g.deltaY : c[1] - d[1],
        C,
        P = g.target,
        N = Math.abs(m) > Math.abs(w) ? "h" : "v";
      if ("touches" in g && N === "h" && P.type === "range") return !1;
      var R = la(N, P);
      if (!R) return !0;
      if ((R ? (C = N) : ((C = N === "v" ? "h" : "v"), (R = la(N, P))), !R))
        return !1;
      if (
        (!r.current && "changedTouches" in g && (m || w) && (r.current = C), !C)
      )
        return !0;
      var I = r.current || C;
      return lg(I, k, g, I === "h" ? m : w, !0);
    }, []),
    s = v.useCallback(function (g) {
      var k = g;
      if (!(!tn.length || tn[tn.length - 1] !== l)) {
        var d = "deltaY" in k ? ia(k) : Kr(k),
          c = t.current.filter(function (C) {
            return (
              C.name === k.type &&
              (C.target === k.target || k.target === C.shadowParent) &&
              ig(C.delta, d)
            );
          })[0];
        if (c && c.should) {
          k.cancelable && k.preventDefault();
          return;
        }
        if (!c) {
          var m = (i.current.shards || [])
              .map(ua)
              .filter(Boolean)
              .filter(function (C) {
                return C.contains(k.target);
              }),
            w = m.length > 0 ? u(k, m[0]) : !i.current.noIsolation;
          w && k.cancelable && k.preventDefault();
        }
      }
    }, []),
    a = v.useCallback(function (g, k, d, c) {
      var m = { name: g, delta: k, target: d, should: c, shadowParent: cg(d) };
      t.current.push(m),
        setTimeout(function () {
          t.current = t.current.filter(function (w) {
            return w !== m;
          });
        }, 1);
    }, []),
    h = v.useCallback(function (g) {
      (n.current = Kr(g)), (r.current = void 0);
    }, []),
    f = v.useCallback(function (g) {
      a(g.type, ia(g), g.target, u(g, e.lockRef.current));
    }, []),
    p = v.useCallback(function (g) {
      a(g.type, Kr(g), g.target, u(g, e.lockRef.current));
    }, []);
  v.useEffect(function () {
    return (
      tn.push(l),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: p,
      }),
      document.addEventListener("wheel", s, en),
      document.addEventListener("touchmove", s, en),
      document.addEventListener("touchstart", h, en),
      function () {
        (tn = tn.filter(function (g) {
          return g !== l;
        })),
          document.removeEventListener("wheel", s, en),
          document.removeEventListener("touchmove", s, en),
          document.removeEventListener("touchstart", h, en);
      }
    );
  }, []);
  var y = e.removeScrollBar,
    x = e.inert;
  return v.createElement(
    v.Fragment,
    null,
    x ? v.createElement(l, { styles: ug(o) }) : null,
    y ? v.createElement(Jv, { gapMode: e.gapMode }) : null,
  );
}
function cg(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const dg = Uv(Qd, ag);
var Zd = v.forwardRef(function (e, t) {
  return v.createElement(rl, be({}, e, { ref: t, sideCar: dg }));
});
Zd.classNames = rl.classNames;
var fg = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  nn = new WeakMap(),
  Yr = new WeakMap(),
  Xr = {},
  Ul = 0,
  Jd = function (e) {
    return e && (e.host || Jd(e.parentNode));
  },
  pg = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Jd(n);
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
  mg = function (e, t, n, r) {
    var o = pg(t, Array.isArray(e) ? e : [e]);
    Xr[n] || (Xr[n] = new WeakMap());
    var l = Xr[n],
      i = [],
      u = new Set(),
      s = new Set(o),
      a = function (f) {
        !f || u.has(f) || (u.add(f), a(f.parentNode));
      };
    o.forEach(a);
    var h = function (f) {
      !f ||
        s.has(f) ||
        Array.prototype.forEach.call(f.children, function (p) {
          if (u.has(p)) h(p);
          else
            try {
              var y = p.getAttribute(r),
                x = y !== null && y !== "false",
                g = (nn.get(p) || 0) + 1,
                k = (l.get(p) || 0) + 1;
              nn.set(p, g),
                l.set(p, k),
                i.push(p),
                g === 1 && x && Yr.set(p, !0),
                k === 1 && p.setAttribute(n, "true"),
                x || p.setAttribute(r, "true");
            } catch (d) {
              console.error("aria-hidden: cannot operate on ", p, d);
            }
        });
    };
    return (
      h(t),
      u.clear(),
      Ul++,
      function () {
        i.forEach(function (f) {
          var p = nn.get(f) - 1,
            y = l.get(f) - 1;
          nn.set(f, p),
            l.set(f, y),
            p || (Yr.has(f) || f.removeAttribute(r), Yr.delete(f)),
            y || f.removeAttribute(n);
        }),
          Ul--,
          Ul ||
            ((nn = new WeakMap()),
            (nn = new WeakMap()),
            (Yr = new WeakMap()),
            (Xr = {}));
      }
    );
  },
  hg = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = fg(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        mg(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Mu = "Dialog",
  [qd, Og] = ov(Mu),
  [vg, Fe] = qd(Mu),
  ef = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: l,
        modal: i = !0,
      } = e,
      u = v.useRef(null),
      s = v.useRef(null),
      [a = !1, h] = sv({ prop: r, defaultProp: o, onChange: l });
    return S.jsx(vg, {
      scope: t,
      triggerRef: u,
      contentRef: s,
      contentId: Ol(),
      titleId: Ol(),
      descriptionId: Ol(),
      open: a,
      onOpenChange: h,
      onOpenToggle: v.useCallback(() => h((f) => !f), [h]),
      modal: i,
      children: n,
    });
  };
ef.displayName = Mu;
var tf = "DialogTrigger",
  gg = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Fe(tf, n),
      l = Zt(t, o.triggerRef);
    return S.jsx(Qe.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Iu(o.open),
      ...r,
      ref: l,
      onClick: Nt(e.onClick, o.onOpenToggle),
    });
  });
gg.displayName = tf;
var ju = "DialogPortal",
  [yg, nf] = qd(ju, { forceMount: void 0 }),
  rf = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      l = Fe(ju, t);
    return S.jsx(yg, {
      scope: t,
      forceMount: n,
      children: v.Children.map(r, (i) =>
        S.jsx(nl, {
          present: n || l.open,
          children: S.jsx(bd, { asChild: !0, container: o, children: i }),
        }),
      ),
    });
  };
rf.displayName = ju;
var Ao = "DialogOverlay",
  of = v.forwardRef((e, t) => {
    const n = nf(Ao, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      l = Fe(Ao, e.__scopeDialog);
    return l.modal
      ? S.jsx(nl, {
          present: r || l.open,
          children: S.jsx(wg, { ...o, ref: t }),
        })
      : null;
  });
of.displayName = Ao;
var wg = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Fe(Ao, n);
    return S.jsx(Zd, {
      as: tl,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: S.jsx(Qe.div, {
        "data-state": Iu(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Kt = "DialogContent",
  lf = v.forwardRef((e, t) => {
    const n = nf(Kt, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      l = Fe(Kt, e.__scopeDialog);
    return S.jsx(nl, {
      present: r || l.open,
      children: l.modal
        ? S.jsx(xg, { ...o, ref: t })
        : S.jsx(Sg, { ...o, ref: t }),
    });
  });
lf.displayName = Kt;
var xg = v.forwardRef((e, t) => {
    const n = Fe(Kt, e.__scopeDialog),
      r = v.useRef(null),
      o = Zt(t, n.contentRef, r);
    return (
      v.useEffect(() => {
        const l = r.current;
        if (l) return hg(l);
      }, []),
      S.jsx(uf, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Nt(e.onCloseAutoFocus, (l) => {
          var i;
          l.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: Nt(e.onPointerDownOutside, (l) => {
          const i = l.detail.originalEvent,
            u = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || u) && l.preventDefault();
        }),
        onFocusOutside: Nt(e.onFocusOutside, (l) => l.preventDefault()),
      })
    );
  }),
  Sg = v.forwardRef((e, t) => {
    const n = Fe(Kt, e.__scopeDialog),
      r = v.useRef(!1),
      o = v.useRef(!1);
    return S.jsx(uf, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (l) => {
        var i, u;
        (i = e.onCloseAutoFocus) == null || i.call(e, l),
          l.defaultPrevented ||
            (r.current || (u = n.triggerRef.current) == null || u.focus(),
            l.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (l) => {
        var s, a;
        (s = e.onInteractOutside) == null || s.call(e, l),
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
  uf = v.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: l,
        ...i
      } = e,
      u = Fe(Kt, n),
      s = v.useRef(null),
      a = Zt(t, s);
    return (
      Tv(),
      S.jsxs(S.Fragment, {
        children: [
          S.jsx(Vd, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: l,
            children: S.jsx(Ud, {
              role: "dialog",
              id: u.contentId,
              "aria-describedby": u.descriptionId,
              "aria-labelledby": u.titleId,
              "data-state": Iu(u.open),
              ...i,
              ref: a,
              onDismiss: () => u.onOpenChange(!1),
            }),
          }),
          S.jsxs(S.Fragment, {
            children: [
              S.jsx(kg, { titleId: u.titleId }),
              S.jsx(Cg, { contentRef: s, descriptionId: u.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  Du = "DialogTitle",
  sf = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Fe(Du, n);
    return S.jsx(Qe.h2, { id: o.titleId, ...r, ref: t });
  });
sf.displayName = Du;
var af = "DialogDescription",
  cf = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Fe(af, n);
    return S.jsx(Qe.p, { id: o.descriptionId, ...r, ref: t });
  });
cf.displayName = af;
var df = "DialogClose",
  ff = v.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Fe(df, n);
    return S.jsx(Qe.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Nt(e.onClick, () => o.onOpenChange(!1)),
    });
  });
ff.displayName = df;
function Iu(e) {
  return e ? "open" : "closed";
}
var pf = "DialogTitleWarning",
  [Mg, mf] = rv(pf, { contentName: Kt, titleName: Du, docsSlug: "dialog" }),
  kg = ({ titleId: e }) => {
    const t = mf(pf),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      v.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  Eg = "DialogDescriptionWarning",
  Cg = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${mf(Eg).contentName}}.`;
    return (
      v.useEffect(() => {
        var l;
        const o =
          (l = e.current) == null ? void 0 : l.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  Ng = ef,
  Pg = rf,
  hf = of,
  vf = lf,
  gf = sf,
  yf = cf,
  _g = ff;
const Rg = Ng,
  Tg = Pg,
  wf = v.forwardRef(({ className: e, ...t }, n) =>
    S.jsx(hf, {
      ref: n,
      className: Lt(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e,
      ),
      ...t,
    }),
  );
wf.displayName = hf.displayName;
const xf = v.forwardRef(({ className: e, children: t, ...n }, r) =>
  S.jsxs(Tg, {
    children: [
      S.jsx(wf, {}),
      S.jsxs(vf, {
        ref: r,
        className: Lt(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-950",
          e,
        ),
        ...n,
        children: [
          t,
          S.jsxs(_g, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400",
            children: [
              S.jsx(Dd, { className: "h-4 w-4" }),
              S.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
xf.displayName = vf.displayName;
const Sf = v.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(gf, {
    ref: n,
    className: Lt("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
Sf.displayName = gf.displayName;
const kf = v.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(yf, {
    ref: n,
    className: Lt("text-sm text-neutral-500 dark:text-neutral-400", e),
    ...t,
  }),
);
kf.displayName = yf.displayName;
function zg() {
  const {
      isModalOpen: e,
      isFullscreen: t,
      videos: n,
      currentVideoIndex: r,
      videoRef: o,
      isPlaying: l,
      isAnalyzing: i,
      detectedItems: u,
      setIsModalOpen: s,
      setIsPlaying: a,
      setCurrentVideoIndex: h,
      setIsFullscreen: f,
    } = Ou(),
    p = () => {
      s(!1), o.current && o.current.pause(), a(!1);
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
    x = (d) => {
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
    k = () => {
      f(!t);
    };
  return (
    v.useEffect(() => {
      e && o.current && r !== null && ((o.current.src = n[r].url), a(!1));
    }, [e, n, r]),
    S.jsx(Rg, {
      open: e,
      onOpenChange: p,
      children: S.jsxs(xf, {
        className: `max-w-7xl w-full ${t ? "h-screen" : "h-[90vh]"} p-0 bg-gray-900 flex flex-col border-0`,
        children: [
          S.jsx(Sf, { className: "sr-only", children: "Analyzed Video" }),
          S.jsx(kf, {
            className: "sr-only",
            children: "Video playback and analysis results",
          }),
          S.jsxs("div", {
            className: "flex flex-col h-full",
            children: [
              S.jsxs("div", {
                className: "flex-grow relative bg-black",
                children: [
                  n.length > 0 &&
                    r !== null &&
                    S.jsx("video", {
                      ref: o,
                      src: n[r].url,
                      className:
                        "absolute inset-0 w-full h-full object-contain",
                      children: "Your browser does not support the video tag.",
                    }),
                  S.jsxs("div", {
                    className:
                      "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4",
                    children: [
                      S.jsx(Ve, {
                        variant: "secondary",
                        size: "icon",
                        onClick: () => g("prev"),
                        className: "bg-white/20 hover:bg-white/30 text-white",
                        children: S.jsx(Hh, { className: "h-6 w-6" }),
                      }),
                      S.jsx(Ve, {
                        variant: "secondary",
                        size: "icon",
                        onClick: y,
                        className: "bg-white/20 hover:bg-white/30 text-white",
                        children: l
                          ? S.jsx(Yh, { className: "h-6 w-6" })
                          : S.jsx(Xh, { className: "h-6 w-6" }),
                      }),
                      S.jsx(Ve, {
                        variant: "secondary",
                        size: "icon",
                        onClick: () => g("next"),
                        className: "bg-white/20 hover:bg-white/30 text-white",
                        children: S.jsx(Qh, { className: "h-6 w-6" }),
                      }),
                    ],
                  }),
                ],
              }),
              S.jsxs("div", {
                className:
                  "p-4 bg-gray-800 text-white border-t border-gray-700 overflow-y-auto max-h-[30vh]",
                children: [
                  S.jsx("h3", {
                    className: "text-lg font-medium mb-2",
                    children: "Detected Items:",
                  }),
                  i
                    ? S.jsx("div", {
                        className: "flex items-center justify-center h-20",
                        children: S.jsx("div", {
                          className:
                            "animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500",
                        }),
                      })
                    : S.jsx("ul", {
                        className: "space-y-2",
                        children: u.map((d, c) =>
                          S.jsxs(
                            "li",
                            {
                              className:
                                "flex items-center justify-between bg-gray-700 p-2 rounded-md",
                              children: [
                                S.jsx("span", { children: d.name }),
                                S.jsxs(Ve, {
                                  variant: "outline",
                                  size: "sm",
                                  onClick: () => x(d.timestamp),
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
          S.jsxs("div", {
            className: "absolute top-2 right-2 flex space-x-2",
            children: [
              S.jsx(Ve, {
                variant: "ghost",
                size: "icon",
                onClick: k,
                className: "text-white hover:bg-white/20",
                children: t
                  ? S.jsx(Kh, { className: "h-5 w-5" })
                  : S.jsx(Gh, { className: "h-5 w-5" }),
              }),
              S.jsx(Ve, {
                variant: "ghost",
                size: "icon",
                onClick: p,
                className: "text-white hover:bg-white/20",
                children: S.jsx(Dd, { className: "h-5 w-5" }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function Lg() {
  return S.jsxs("div", {
    className: "flex h-screen bg-gray-100 text-gray-800",
    children: [S.jsx(tv, {}), S.jsx(nv, {}), S.jsx(zg, {})],
  });
}
Sd(document.getElementById("root")).render(
  S.jsx(v.StrictMode, { children: S.jsx(ev, { children: S.jsx(Lg, {}) }) }),
);
