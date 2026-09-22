(function() {
    var mcOptions = {
        "id": "112748053",
        "local_domain": "mc.yandex.ru"
    }
      , mcSettings = {
        "auto_goals": 1,
        "button_goals": 0,
        "c_recp": "1.00000",
        "form_goals": 1,
        "pcs": "0",
        "webvisor": {
            "ad_recp": "1.00000",
            "arch_type": "none",
            "date": "2026-09-17 16:52:29",
            "forms": 1,
            "recp": "1.00000"
        },
        "aytm": true,
        "cf": 1,
        "region": "RU"
    }
      , ytmConfig = {
        "containerVersion": "2",
        "compilerVersion": "1.14.0",
        "variables": [{
            "type": "event",
            "permissions": 0
        }],
        "triggers": [],
        "permissions": [{
            "dataLayer": {
                "keys": {
                    "event": 2
                }
            }
        }],
        "tags": [],
        "code": []
    };
    var n, aa = [];
    function ba(a) {
        return function() {
            return aa[a].apply(this, arguments)
        }
    }
    function ca(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var da = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    function ea(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    var fa = ea(this);
    function ia(a, b) {
        if (b)
            a: {
                for (var c = fa, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    if (!(f in c))
                        break a;
                    c = c[f]
                }
                d = d[d.length - 1];
                e = c[d];
                f = b(e);
                f != e && null != f && da(c, d, {
                    configurable: !0,
                    writable: !0,
                    value: f
                })
            }
    }
    ia("Symbol", function(a) {
        function b(f) {
            if (this instanceof b)
                throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++,f)
        }
        function c(f, g) {
            this.mh = f;
            da(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a)
            return a;
        c.prototype.toString = function() {
            return this.mh
        }
        ;
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
          , e = 0;
        return b
    });
    ia("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = fa[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && da(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ja(ca(this))
                }
            })
        }
        return a
    });
    function ja(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
    function r(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        if (b)
            return b.call(a);
        if ("number" == typeof a.length)
            return {
                next: ca(a)
            };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    }
    function ka(a) {
        for (var b, c = []; !(b = a.next()).done; )
            c.push(b.value);
        return c
    }
    function la(a) {
        return a instanceof Array ? a : ka(r(a))
    }
    var ma = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , na;
    if ("function" == typeof Object.setPrototypeOf)
        na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                a: !0
            }
              , qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var ra = na;
    function sa(a, b) {
        a.prototype = ma(b.prototype);
        a.prototype.constructor = a;
        if (ra)
            ra(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.gk = b.prototype
    }
    function ta() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
            b[c - a] = arguments[c];
        return b
    }
    var ua = {
        construct: "Metrika2",
        callbackPostfix: "2",
        version: "1hktibc15jkbf6b0hcqd2lk35d3wvz3",
        host: "mc.yandex.ru"
    };
    function w() {}
    var va = [];
    function wa(a, b) {
        if (!b || "function" !== typeof b)
            return !1;
        try {
            var c = "" + b
        } catch (h) {
            return !1
        }
        var d = c.length;
        if (d > 35 + a.length)
            return !1;
        for (var e = d - 13, f = 0, g = 8; g < d; g += 1) {
            f = "[native code]"[f] === c[g] || 7 === f && "-" === c[g] ? f + 1 : 0;
            if (12 === f)
                return !0;
            if (!f && g > e)
                break
        }
        return !1
    }
    function xa(a, b) {
        var c = wa(a, b);
        b && !c && va.push([a, b]);
        return c
    }
    function ya(a, b) {
        return xa(b, a) && a
    }
    function x(a) {
        return "string" === typeof a
    }
    var za = ya(String.prototype.indexOf, "indexOf");
    function Aa(a, b) {
        for (var c = 0, d = a.length - b.length, e = 0; e < a.length; e += 1) {
            c = a[e] === b[c] ? c + 1 : 0;
            if (c === b.length)
                return e - b.length + 1;
            if (!c && e > d)
                break
        }
        return -1
    }
    var Ba = za ? function(a, b) {
        return za.call(a, b)
    }
    : Aa;
    function Ca(a, b) {
        return Ba(a, b)
    }
    var Da = ya(String.prototype.lastIndexOf, "lastIndexOf");
    function Ea(a, b) {
        var c = b.length
          , d = a.length;
        if (0 === c)
            return d;
        for (d -= c; 0 <= d; --d) {
            for (var e = !0, f = 0; f < c; f += 1)
                if (a[d + f] !== b[f]) {
                    e = !1;
                    break
                }
            if (e)
                return d
        }
        return -1
    }
    var Fa = Da ? function(a, b) {
        return Da.call(a, b)
    }
    : Ea;
    function Ga(a, b) {
        return Fa(a, b)
    }
    function Ha(a, b) {
        return !(!a || -1 === Ba(a, b))
    }
    function Ia(a) {
        return "" + a
    }
    function Ja(a) {
        return function(b) {
            return function(c) {
                return a(b, c)
            }
        }
    }
    function Ka(a) {
        return function(b) {
            return function(c) {
                return a(c, b)
            }
        }
    }
    var La = Ja(function(a, b) {
        return a === b
    })
      , Ma = Ja(function(a, b) {
        a(b);
        return b
    })
      , Na = Ja(function(a, b) {
        return b(a)
    })
      , Oa = La(null);
    function y(a) {
        return "function" === typeof a
    }
    var A = La(void 0);
    function B(a) {
        return A(a) || Oa(a)
    }
    function Pa(a) {
        return !Oa(a) && !A(a) && "[object Object]" === Object.prototype.toString.call(a)
    }
    var Qa = ya(Array.from, "from");
    function Ra(a) {
        for (var b = a.length, c = [], d = 0; d < b; d += 1)
            c.push(a[d]);
        return c
    }
    function Sa(a) {
        if (Qa)
            try {
                return Qa(a)
            } catch (b) {}
        return Ra(a)
    }
    function Ta(a, b, c) {
        b = void 0 === b ? [] : b;
        c = c || {};
        var d = b.length
          , e = a;
        y(e) && (e = "d",
        c[e] = a);
        var f;
        d ? 1 === d ? f = c[e](b[0]) : 2 === d ? f = c[e](b[0], b[1]) : 3 === d ? f = c[e](b[0], b[1], b[2]) : 4 === d && (f = c[e](b[0], b[1], b[2], b[3])) : f = c[e]();
        return f
    }
    var Ua = ya(Function.prototype.bind, "bind");
    function Va() {
        var a = r(arguments)
          , b = a.next().value
          , c = a.next().value
          , d = ka(a);
        return function() {
            var e = [].concat(la(d), la(arguments));
            if (Function.prototype.call)
                return Function.prototype.call.apply(b, [c].concat(e));
            if (c) {
                for (var f = "_b"; c[f]; )
                    f += "_" + f.length;
                c[f] = b;
                e = c[f] && Ta(f, e, c);
                delete c[f];
                return e
            }
            return Ta(b, e)
        }
    }
    var C = Ua ? function() {
        var a = Sa(arguments)
          , b = r(a);
        a = b.next().value;
        var c = b.next().value;
        b = ka(b);
        return Ua.apply(a, [c].concat(b))
    }
    : Va;
    function D(a, b) {
        return C.apply(null, [b, null].concat(la(a)))
    }
    function F(a, b) {
        return C(b, null, a)
    }
    function Wa(a, b) {
        return C(b[a], b)
    }
    function Xa(a) {
        return Wa("test", a)
    }
    var Ya = Ja(D)
      , Za = Ja(Wa)
      , $a = ya(Array.prototype.reduce, "reduce");
    function ab(a, b, c) {
        for (var d = 0, e = c.length; d < e; )
            b = a(b, c[d], d),
            d += 1;
        return b
    }
    var G = $a ? function(a, b, c) {
        return $a.call(c, a, b)
    }
    : ab;
    function bb(a, b) {
        return D([a, b], G)
    }
    function cb(a, b) {
        return a.isFinite(b) && !a.isNaN(b) && "[object Number]" === Object.prototype.toString.call(b)
    }
    function db(a) {
        try {
            return parseInt(a, 10)
        } catch (b) {
            return null
        }
    }
    var eb = Ka(parseInt)
      , fb = eb(10)
      , gb = eb(2)
      , hb = Object.prototype.hasOwnProperty;
    function H(a, b) {
        return B(a) ? !1 : hb.call(a, b)
    }
    function I(a, b) {
        if (!a)
            return null;
        var c = b.split(".")
          , d = c.length
          , e = a
          , f = 0;
        try {
            for (; f < d; ) {
                if (null === e || void 0 === e)
                    return e;
                e = e[c[f]];
                f += 1
            }
        } catch (g) {
            return null
        }
        return e
    }
    var ib = Ka(I)
      , jb = ib("length");
    function kb(a) {
        var b = void 0 === b ? {} : b;
        if (!a || 1 > a.length)
            return b;
        G(function(c, d, e) {
            if (e === a.length - 1)
                return c;
            e === a.length - 2 ? c[d] = a[e + 1] : H(c, d) || (c[d] = {});
            return c[d]
        }, b, a);
        return b
    }
    function lb(a, b) {
        for (var c = 0; c < b.length; c += 1)
            if (b[c] === a)
                return c;
        return -1
    }
    var mb;
    function nb(a) {
        if (mb)
            return mb;
        var b = !1;
        try {
            b = [].indexOf && 0 === [void 0].indexOf(void 0)
        } catch (d) {}
        var c = a.Array && a.Array.prototype && ya(a.Array.prototype.indexOf, "indexOf");
        return mb = a = b && c ? function(d, e) {
            return c.call(e, d)
        }
        : lb
    }
    var ob = nb(window)
      , pb = Ka(ob);
    function J(a) {
        return a
    }
    function qb(a, b) {
        return b
    }
    function rb(a) {
        return !a
    }
    function K(a, b) {
        var c = []
          , d = [];
        var e = b ? b : J;
        return function() {
            var f = Sa(arguments)
              , g = e.apply(null, la(f))
              , h = ob(g, d);
            if (-1 !== h)
                return c[h];
            f = a.apply(null, la(f));
            c.push(f);
            d.push(g);
            return f
        }
    }
    var sb = K(function(a) {
        a = I(a, "navigator") || {};
        var b = I(a, "userAgent") || "";
        return {
            eg: -1 < Ba(I(a, "vendor") || "", "Apple"),
            ih: b
        }
    });
    function tb(a, b) {
        return -1 !== (I(b, "navigator.userAgent") || "").toLowerCase().search(a)
    }
    var ub = K(ib("navigator.userAgent"))
      , vb = /Firefox\/([0-9]+)/i
      , wb = K(function(a) {
        var b = I(a, "document.documentElement.style")
          , c = I(a, "InstallTrigger");
        a = tb(vb, a);
        vb.lastIndex = 0;
        return !(!(b && "MozAppearance" in b) || B(c)) || a
    });
    function xb(a) {
        return wb(a) ? (a = ub(a).match(vb)) && a.length ? fb(a[1]) : 1 : 0
    }
    function yb(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }
    var zb = ya(Array.isArray, "isArray")
      , L = zb ? function(a) {
        return zb(a)
    }
    : yb;
    function Ab(a, b) {
        var c = I(b, a)
          , d = I(b, "constructor.prototype." + a) || c;
        try {
            if (d && d.apply)
                return function() {
                    return d.apply(b, arguments)
                }
        } catch (e) {
            return c
        }
        return d
    }
    function Bb() {
        var a = Array.prototype.map;
        if (!wb(window))
            return !0;
        try {
            a.call({
                0: !0,
                length: -Math.pow(2, 32) + 1
            }, function() {
                throw 1;
            })
        } catch (b) {
            return !1
        }
        return !0
    }
    var Cb = ya(Array.prototype.map, "map");
    function Db(a, b) {
        return G(function(c, d, e) {
            c.push(a(d, e));
            return c
        }, [], b)
    }
    var M = Cb && Bb() ? function(a, b) {
        return b && 0 < b.length ? Cb.call(b, a) : []
    }
    : Db
      , Eb = ya(Array.prototype.flatMap, "flatMap");
    function Fb(a, b) {
        return G(function(c, d, e) {
            d = a(d, e);
            return c.concat(L(d) ? d : [d])
        }, [], b)
    }
    var Gb = Eb ? function(a, b) {
        return Eb.call(b, a)
    }
    : Fb
      , Hb = Ja(M)
      , Ib = Ja(M)
      , Kb = Ka(M);
    function N() {
        var a = arguments
          , b = a[0];
        return function() {
            for (var c = b.apply(null, arguments), d = a.length, e = 1; e < d; )
                c = a[e](c),
                e += 1;
            return c
        }
    }
    function Lb() {
        var a = Sa(arguments)
          , b = r(a);
        a = b.next().value;
        for (b = ka(b); b.length; ) {
            var c = b.shift(), d;
            for (d in c)
                H(c, d) && (a[d] = c[d]);
            H(c, "toString") && (a.toString = c.toString)
        }
        return a
    }
    var O = Object.assign || Lb
      , Mb = Ja(function(a, b) {
        return O({}, a, b)
    });
    function Nb(a, b) {
        for (var c = "", d = 0; d < b.length; d += 1)
            c += "" + (d ? a : "") + b[d];
        return c
    }
    var Ob = ya(Array.prototype.join, "join")
      , P = Ob ? function(a, b) {
        return Ob.call(b, a)
    }
    : Nb
      , Pb = Ja(P);
    function Qb(a) {
        a = a.Ya = a.Ya || {};
        var b = a._metrika = a._metrika || {};
        return {
            va: function(c, d) {
                H(b, c) || (b[c] = d);
                return this
            },
            F: function(c, d) {
                b[c] = d;
                return this
            },
            C: function(c, d) {
                var e = b[c];
                return H(b, c) || A(d) ? e : d
            }
        }
    }
    var Q = K(Qb)
      , Rb = ya(Array.prototype.some, "some");
    function Sb(a, b) {
        for (var c = 0; c < b.length; c += 1)
            if (c in b && a.call(b, b[c], c))
                return !0;
        return !1
    }
    var Tb = Rb ? function(a, b) {
        return Rb.call(b, a)
    }
    : Sb;
    function Ub(a) {
        var b = this;
        this.ha = [];
        this.size = 0;
        a && M(function(c) {
            b.add(c)
        }, a)
    }
    n = Ub.prototype;
    n.add = function(a) {
        -1 === ob(a, this.ha) && (this.ha.push(a),
        this.size = this.ha.length);
        return this
    }
    ;
    n.has = function(a) {
        return -1 !== ob(a, this.ha)
    }
    ;
    n["delete"] = function(a) {
        a = ob(a, this.ha);
        if (-1 === a)
            return !1;
        this.ha.splice(a, 1);
        this.size = this.ha.length;
        return !0
    }
    ;
    n.clear = function() {
        this.ha = [];
        this.size = 0
    }
    ;
    n.forEach = function(a) {
        var b = this;
        M(function(c) {
            a(c, c, b)
        }, this.ha)
    }
    ;
    function Vb(a) {
        var b = [];
        a.forEach(function(c) {
            b.push(c)
        });
        return b
    }
    function Wb(a) {
        if (!a)
            return [];
        if (L(a))
            return a;
        if (a instanceof Ub)
            return a.ha.slice();
        if (Qa)
            try {
                return Qa(a)
            } catch (b) {}
        return "number" === typeof a.size && y(a.add) ? Vb(a) : "number" === typeof a.length && 0 <= a.length ? Ra(a) : []
    }
    var Xb = K(nb)
      , Yb = ib("0");
    function Zb(a) {
        return a.splice(0, a.length)
    }
    var $b = K(N(ib("String.fromCharCode"), F("fromCharCode", xa), rb))
      , ac = K(N(ub, Xa(/ipad|iphone|ipod/i)))
      , bc = K(function(a) {
        return I(a, "navigator.platform") || ""
    })
      , cc = K(function(a) {
        a = sb(a);
        var b = a.ih;
        return a.eg && !b.match("CriOS")
    })
      , dc = Xa(/Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/)
      , ec = Xa(/; wv\)/)
      , fc = K(function(a) {
        a = ub(a);
        return ec(a) || dc(a)
    })
      , gc = /Chrome\/(\d+)\./
      , hc = K(function(a) {
        return (a = (I(a, "navigator.userAgent") || "").match(gc)) && a.length ? 76 <= fb(a[1]) : !1
    })
      , ic = K(function(a) {
        a = (ub(a) || "").toLowerCase();
        return Ha(a, "android") && Ha(a, "mobile")
    })
      , jc = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" ")
      , kc = K(function(a) {
        var b = I(a, "navigator.connection.type");
        if (A(b))
            return null;
        a = Xb(a)(b, jc);
        return -1 === a ? b : "" + a
    })
      , lc = K(N(ib("document.addEventListener"), rb))
      , mc = K(function(a) {
        var b = I(a, "navigator") || {};
        return G(function(c, d) {
            return c || I(b, d)
        }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
    })
      , nc = K(function(a) {
        var b = I(a, "navigator") || {};
        a = mc(a);
        x(a) || (a = "",
        b = I(b, "languages.0"),
        x(b) && (a = b));
        return a.toLowerCase().split("-")[0]
    })
      , oc = K(function(a) {
        return (I(a, "top") || a) !== a
    })
      , pc = K(ib("top.contentWindow"))
      , qc = K(function(a) {
        var b = !1;
        try {
            b = a.navigator.javaEnabled()
        } catch (c) {}
        return b
    })
      , rc = K(function(a) {
        var b = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" ")
          , c = I(a, "external");
        c = -1 !== Ba(I(c, "toString") ? "" + c.toString() : "", "Sequentum");
        var d = I(a, "document.documentElement")
          , e = ["selenium", "webdriver", "driver"];
        return !!(Tb(F(a, I), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Tb(F(I(a, "document"), I), b) || c || d && Tb(C(d.getAttribute, d), e))
    })
      , sc = K(function(a) {
        return !!(Tb(F(a, I), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(ub(a)) || I(a, "navigator.webdriver") || I(a, "isChrome") && !I(a, "chrome"))
    })
      , tc = K(function(a) {
        return !(!I(a, "ia_document.shareURL") || !I(a, "ia_document.referrer"))
    });
    function uc(a) {
        return I(a, "document.prerendering") || "prerender" === I(a, "document.webkitVisibilityState") || "prerender" === I(a, "document.visibilityState")
    }
    var vc = K(function(a) {
        var b = ub(a) || ""
          , c = b.match(/Mac OS X ([0-9]+)_([0-9]+)/);
        c = c ? [+c[1], +c[2]] : [0, 0];
        b = b.match(/iPhone OS ([1-9]+)_([0-9]+)/);
        return 14 <= (b ? +b[1] : 0) ? !0 : (ac(a) || 10 < c[0] || 10 === c[0] && 13 <= c[1]) && cc(a)
    })
      , wc = /Edg\/(\d+)\./;
    function xc(a) {
        return (a = ub(a)) && (a = a.match(wc)) && 1 < a.length ? 79 <= fb(a[1]) : !1
    }
    var yc = K(function(a) {
        return vc(a) || 68 <= xb(a) || xc(a)
    }), zc = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"], Ac;
    function Bc(a) {
        this.message = a
    }
    var Cc = function(a) {
        return function(b, c) {
            c = void 0 === c ? !1 : c;
            if (Ac)
                var d = new Ac(b);
            else
                xa("Error", a.Error) ? (Ac = a.Error,
                d = new a.Error(b)) : (Ac = Bc,
                d = new Ac(b));
            c && (d.unk = !0);
            return d
        }
    }(window);
    function Dc(a) {
        return Cc("http." + a.status + ".st." + a.statusText + ".rt." + ("" + a.responseText).substring(0, 50))
    }
    var Ec = Xa(RegExp("^http."));
    function Fc(a) {
        throw a;
    }
    function Gc(a) {
        return I(a, "performance") || I(a, "webkitPerformance")
    }
    function Hc(a) {
        a = Gc(a);
        var b = I(a, "timing.navigationStart")
          , c = I(a, "now");
        c && (c = C(c, a));
        return [b, c]
    }
    function Ic(a, b) {
        var c = r(b || Hc(a))
          , d = c.next().value;
        c = c.next().value;
        return !isNaN(d) && y(c) ? Math.round(c() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
    }
    var Jc = ua.construct
      , Kc = mcOptions.local_host || ua.host;
    function Lc(a) {
        var b = "";
        L(a) ? b = P(".", a) : x(a) && (b = a);
        return Cc("err.kn(2652)" + b)
    }
    function Mc() {
        var a = Sa(arguments);
        Fc(Lc(a))
    }
    var Nc = Xa(RegExp("^err.kn"));
    function Oc(a, b) {
        return b ? a(b) : a()
    }
    var Pc = N(J, Oc)
      , Qc = [];
    function Rc(a, b, c, d) {
        M(N(J, Ya([a, b, c, d]), Oc), Qc)
    }
    function Sc(a, b, c) {
        var d = "u.a.e"
          , e = "";
        c && ("object" === typeof c ? (c.unk && Fc(c),
        d = c.message,
        e = "string" === typeof c.stack && c.stack.replace(/\n/g, "\\n") || "n.s.e.s") : d = "" + c);
        Nc(d) || Tb(F(d, Ha), zc) || Ec(d) && .1 <= a.Math.random() || Rc("jserrs", d, b, e)
    }
    function Tc() {
        var a = [];
        return {
            Mj: a,
            push: function() {
                var b = a.push.apply(a, la(ta.apply(0, arguments)));
                100 < a.length && a.splice(0, a.length - 100);
                return b
            },
            flush: function() {
                return a.splice(0, a.length)
            },
            slice: function(b, c) {
                return a.slice(b, c)
            }
        }
    }
    var Uc = Tc()
      , Vc = 0
      , Wc = 0;
    function Xc(a, b, c, d) {
        return function() {
            Vc += 1;
            var e = null
              , f = null
              , g = Gc(c)
              , h = g ? xa("now", g.now) : !1;
            try {
                var k = h ? g.now() : 0;
                f = a.apply(d || null, arguments);
                var l = h ? g.now() : 0;
                g = l - k;
                var m = Vc > Wc;
                300 <= g && m && (Wc = Vc,
                !h || l % 100 || Rc("perf", "t.l.300", b, "" + g));
                h && 50 <= g && Uc.push({
                    scope: b,
                    startTime: k,
                    endTime: l
                })
            } catch (p) {
                e = p
            }
            --Vc;
            Vc < Wc && (Wc = Vc);
            e && Fc(e);
            return f
        }
    }
    function R(a, b, c, d, e, f) {
        var g = c || Fc;
        c && f && (g = Xc(g, b, a, e));
        return function() {
            var h = d;
            try {
                h = g.apply(e || null, arguments)
            } catch (k) {
                Sc(a, b, k)
            }
            return h
        }
    }
    function S(a, b, c) {
        return function() {
            return R(arguments[0], a, b, c).apply(this, arguments)
        }
    }
    ;var Yc = setTimeout;
    function Zc() {}
    function $c(a, b) {
        return function() {
            a.apply(b, arguments)
        }
    }
    function ad(a) {
        if (!(this instanceof ad))
            throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a)
            throw new TypeError("not a function");
        this.Va = 0;
        this.Df = !1;
        this.ob = void 0;
        this.Zb = [];
        bd(a, this)
    }
    function cd(a, b) {
        for (; 3 === a.Va; )
            a = a.ob;
        0 === a.Va ? a.Zb.push(b) : (a.Df = !0,
        ad.Ef(function() {
            var c = 1 === a.Va ? b.Qi : b.Ui;
            if (null === c)
                (1 === a.Va ? dd : ed)(b.promise, a.ob);
            else {
                try {
                    var d = c(a.ob)
                } catch (e) {
                    ed(b.promise, e);
                    return
                }
                dd(b.promise, d)
            }
        }))
    }
    function dd(a, b) {
        try {
            if (b === a)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (b && ("object" === typeof b || "function" === typeof b)) {
                var c = b.then;
                if (b instanceof ad) {
                    a.Va = 3;
                    a.ob = b;
                    fd(a);
                    return
                }
                if ("function" === typeof c) {
                    bd($c(c, b), a);
                    return
                }
            }
            a.Va = 1;
            a.ob = b;
            fd(a)
        } catch (d) {
            ed(a, d)
        }
    }
    function ed(a, b) {
        a.Va = 2;
        a.ob = b;
        fd(a)
    }
    function fd(a) {
        2 === a.Va && 0 === a.Zb.length && ad.Ef(function() {
            a.Df || ad.qh(a.ob)
        });
        for (var b = 0, c = a.Zb.length; b < c; b++)
            cd(a, a.Zb[b]);
        a.Zb = null
    }
    function gd(a, b, c) {
        this.Qi = "function" === typeof a ? a : null;
        this.Ui = "function" === typeof b ? b : null;
        this.promise = c
    }
    function bd(a, b) {
        var c = !1;
        try {
            a(function(d) {
                c || (c = !0,
                dd(b, d))
            }, function(d) {
                c || (c = !0,
                ed(b, d))
            })
        } catch (d) {
            c || (c = !0,
            ed(b, d))
        }
    }
    ad.prototype["catch"] = function(a) {
        return this.then(null, a)
    }
    ;
    ad.prototype.then = function(a, b) {
        var c = new this.constructor(Zc);
        cd(this, new gd(a,b,c));
        return c
    }
    ;
    ad.prototype["finally"] = function(a) {
        var b = this.constructor;
        return this.then(function(c) {
            return b.resolve(a()).then(function() {
                return c
            })
        }, function(c) {
            return b.resolve(a()).then(function() {
                return b.reject(c)
            })
        })
    }
    ;
    ad.all = function(a) {
        return new ad(function(b, c) {
            function d(h, k) {
                try {
                    if (k && ("object" === typeof k || "function" === typeof k)) {
                        var l = k.then;
                        if ("function" === typeof l) {
                            l.call(k, function(m) {
                                d(h, m)
                            }, c);
                            return
                        }
                    }
                    e[h] = k;
                    0 === --f && b(e)
                } catch (m) {
                    c(m)
                }
            }
            if (!a || "undefined" === typeof a.length)
                return c(new TypeError("Promise.all accepts an array"));
            var e = Array.prototype.slice.call(a);
            if (0 === e.length)
                return b([]);
            for (var f = e.length, g = 0; g < e.length; g++)
                d(g, e[g])
        }
        )
    }
    ;
    ad.resolve = function(a) {
        return a && "object" === typeof a && a.constructor === ad ? a : new ad(function(b) {
            b(a)
        }
        )
    }
    ;
    ad.reject = function(a) {
        return new ad(function(b, c) {
            c(a)
        }
        )
    }
    ;
    ad.race = function(a) {
        return new ad(function(b, c) {
            if (!a || "undefined" === typeof a.length)
                return c(new TypeError("Promise.race accepts an array"));
            for (var d = 0, e = a.length; d < e; d++)
                ad.resolve(a[d]).then(b, c)
        }
        )
    }
    ;
    ad.Ef = "function" === typeof setImmediate && function(a) {
        setImmediate(a)
    }
    || function(a) {
        Yc(a, 0)
    }
    ;
    ad.qh = function(a) {
        "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
    }
    ;
    var T = window.Promise
      , hd = ya(T, "Promise")
      , id = ya(I(T, "resolve"), "resolve")
      , jd = ya(I(T, "reject"), "reject")
      , kd = ya(I(T, "all"), "all");
    if (hd && id && jd && kd) {
        var ld = function(a) {
            return new Promise(a)
        };
        ld.resolve = C(id, T);
        ld.reject = C(jd, T);
        ld.all = C(kd, T);
        T = ld
    } else
        T = ad;
    function md() {
        return {}
    }
    function nd() {
        return []
    }
    ;var od = ya(Object.keys, "keys");
    function pd(a) {
        var b = [], c;
        for (c in a)
            H(a, c) && b.push(c);
        return b
    }
    var qd = ya(Object.entries, "entries");
    function rd(a) {
        return A(a) ? [] : ab(function(b, c) {
            b.push([c, a[c]]);
            return b
        }, [], pd(a))
    }
    var sd = qd ? function(a) {
        return a ? qd(a) : []
    }
    : rd
      , td = od ? function(a) {
        return od(a)
    }
    : pd
      , ud = ya(Object.values, "values")
      , vd = N(rd, F(ib("1"), Db))
      , wd = ud ? function(a) {
        return ud(a)
    }
    : vd;
    function xd(a, b, c) {
        return c ? a : b
    }
    var yd = D([1, null], xd)
      , zd = D([1, 0], xd)
      , Ad = Boolean
      , Bd = ya(Array.prototype.filter, "filter");
    function Cd(a, b) {
        return ab(function(c, d, e) {
            a(d, e) && c.push(d);
            return c
        }, [], b)
    }
    var Dd = Bd ? function(a, b) {
        return Bd.call(b, a)
    }
    : Cd
      , Ed = F(Ad, Dd)
      , Fd = Ja(Dd)
      , Gd = ya(Array.prototype.includes, "includes");
    function Hd(a, b) {
        return 1 <= Cd(La(a), b).length
    }
    var U = Gd ? function(a, b, c) {
        return Gd.call(b, a, c)
    }
    : Hd
      , Id = Ka(U);
    function Jd(a, b, c) {
        return Ab("setTimeout", a)(b, c)
    }
    var V = K(function(a) {
        return a.id + ":" + a.$
    });
    function Kd(a, b) {
        return Ab("clearTimeout", a)(b)
    }
    function W(a, b, c, d) {
        return Jd(a, R(a, d + ".d.err", b), c)
    }
    function Ld(a, b, c, d) {
        return a.setInterval(R(a, d + ".i.err", b), c)
    }
    ;var Md = K(function(a) {
        a = !(!a.addEventListener || !a.removeEventListener);
        return {
            nj: a,
            D: a ? "addEventListener" : "attachEvent",
            X: a ? "removeEventListener" : "detachEvent"
        }
    });
    function Nd(a, b, c, d, e, f) {
        a = Md(a);
        var g = a.D
          , h = a.X;
        f = f ? h : g;
        if (b[f])
            if (a.nj)
                if (e)
                    b[f](c, d, e);
                else
                    b[f](c, d);
            else
                b[f]("on" + c, d)
    }
    var Od = K(function(a) {
        var b = !1;
        if (!a.addEventListener)
            return b;
        try {
            var c = Object.defineProperty({}, "passive", {
                get: function() {
                    b = !0;
                    return 1
                }
            });
            a.addEventListener("test", w, c)
        } catch (d) {}
        return b
    })
      , Pd = Ja(function(a, b) {
        if (null !== b)
            return a ? O({
                capture: !0,
                passive: !0
            }, b || {}) : !!b
    })
      , Qd = K(function(a) {
        var b = Od(a)
          , c = Pd(b)
          , d = {};
        return O(d, {
            D: function(e, f, g, h) {
                M(function(k) {
                    var l = c(h);
                    Nd(a, e, k, g, l, !1)
                }, f);
                return C(d.lb, d, e, f, g, h)
            },
            lb: function(e, f, g, h) {
                M(function(k) {
                    var l = c(h);
                    Nd(a, e, k, g, l, !0)
                }, f)
            }
        })
    });
    function Rd(a) {
        return "onpagehide" in a
    }
    ;function Sd(a, b, c) {
        return function() {
            var d = Q(arguments[0])
              , e = c ? "global" : "m2652"
              , f = d.C(e, {})
              , g = I(f, a);
            g || (g = K(b),
            f[a] = g,
            d.F(e, f));
            return g.apply(null, arguments)
        }
    }
    var Td = "hash host hostname href pathname port protocol search".split(" ");
    function Ud(a) {
        return G(function(b, c) {
            var d = I(a, "location." + c);
            b[c] = d ? "" + d : "";
            return b
        }, {}, Td)
    }
    var Vd = /(?:^|\.)(?:(ya\.ru)|(?:yandex)\.(\w+|com?\.\w+))$/
      , Wd = K(function(a) {
        return (a ? a.replace(/^www\./, "") : "").toLowerCase()
    })
      , Xd = K(function(a) {
        a = Ud(a).hostname;
        var b = !1;
        a && (b = -1 !== a.search(Vd));
        return b
    })
      , Yd = N(Ud, ib("protocol"), La("https:"))
      , Zd = K(function(a) {
        return hc(a) && Yd(a) ? "SameSite=None;Secure;" : ""
    });
    function $d(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
        a = P("", Dd(function(b) {
            return 55296 >= b.charCodeAt(0)
        }, a.split("")));
        return encodeURIComponent(a)
    }
    function ae(a) {
        var b = "";
        try {
            b = decodeURIComponent(a)
        } catch (c) {}
        return b
    }
    function be(a) {
        return a ? N(Hb(function(b) {
            var c = r(b.split("="));
            b = c.next().value;
            c = c.next().value;
            return [b, B(c) ? void 0 : ae(c)]
        }), bb(function(b, c) {
            var d = r(c)
              , e = d.next().value;
            d = d.next().value;
            b[e] = d;
            return b
        }, {}))(a.split("&")) : {}
    }
    function ce(a) {
        return a ? N(sd, bb(function(b, c) {
            var d = r(c)
              , e = d.next().value;
            d = d.next().value;
            A(d) || B(d) || b.push(e + "=" + $d(d));
            return b
        }, []), Pb("&"))(a) : ""
    }
    var de = /^\s+|\s+$/g
      , ee = ya(String.prototype.trim, "trim");
    function fe(a, b) {
        if (a) {
            var c = ee ? ee.call(a) : ("" + a).replace(de, "");
            return b && c.length > b ? c.substring(0, b) : c
        }
        return ""
    }
    var ge = Ja(function(a, b) {
        return b.replace(a, "")
    })
      , he = ge(/\s/g)
      , ie = ge(/\D/g)
      , je = ge(/\d/g)
      , ke = ["metrika_enabled"]
      , le = [];
    function me(a, b) {
        var c = ne;
        return !le.length || U(b, ke) ? !0 : G(function(d, e) {
            return d && e(a, c, b)
        }, !0, le)
    }
    function oe(a) {
        try {
            var b = a.document.cookie;
            if (!B(b)) {
                var c = {};
                M(function(d) {
                    var e = r(d.split("="));
                    d = e.next().value;
                    e = e.next().value;
                    d = fe(d);
                    e = fe(ae(e));
                    if (H(c, d)) {
                        var f = c[d];
                        L(f) ? f.push(e) : c[d] = [f, e]
                    } else
                        c[d] = e
                }, (b || "").split(";"));
                return c
            }
        } catch (d) {}
        return null
    }
    var pe = Sd("gsc", oe);
    function ne(a, b, c) {
        a = pe(a);
        if (!a || !H(a, b))
            return null;
        b = a[b];
        if (!L(b))
            return c ? [b] : b;
        if (c)
            return b;
        c = b[b.length - 1];
        return B(c) ? null : c
    }
    var qe = /:\d+$/;
    function re(a, b, c, d, e, f, g) {
        g = void 0 === g ? !1 : g;
        if (me(a, b)) {
            c = b + "=" + encodeURIComponent(c) + ";";
            c += "" + Zd(a);
            if (d) {
                var h = new Date;
                h.setTime(h.getTime() + 6E4 * d);
                c += "expires=" + h.toUTCString() + ";"
            }
            e && (d = e.replace(qe, ""),
            c += "domain=" + d + ";");
            try {
                if (a.document.cookie = c + ("path=" + (f || "/")),
                !g) {
                    var k = pe(a);
                    if (k) {
                        var l = oe(a);
                        l && (H(l, b) ? k[b] = l[b] : delete k[b])
                    }
                }
            } catch (m) {}
        }
    }
    function se(a, b) {
        re(a, "metrika_enabled", "1", 0, b, void 0, !0);
        var c = oe(a);
        (c = c && c.metrika_enabled) && re(a, "metrika_enabled", "", -100, b, void 0, !0);
        return !!c
    }
    var te = K(function(a) {
        var b = (Ud(a).host || "").split(".");
        return 1 === b.length ? b[0] : G(function(c, d, e) {
            e += 1;
            2 <= e && !c && (e = P(".", b.slice(-e)),
            se(a, e) && (c = e));
            return c
        }, "", b)
    });
    function ue(a, b, c) {
        b = void 0 === b ? "_ym_" : b;
        c = void 0 === c ? "" : c;
        var d = te(a)
          , e = 1 === (d || "").split(".").length ? d : "." + d
          , f = c ? "_" + c : "";
        return {
            pb: function(g, h, k) {
                re(a, "" + b + g + f, "", -100, h || e, k, !1);
                return this
            },
            C: function(g, h) {
                return ne(a, "" + b + g + f, h)
            },
            F: function(g, h, k, l, m) {
                re(a, "" + b + g + f, h, k, l || e, m);
                return this
            }
        }
    }
    var ve = K(ue);
    function we(a) {
        return (10 > a ? "0" : "") + a
    }
    function xe(a) {
        var b = Qd(a)
          , c = Hc(a)
          , d = {
            l: a,
            wf: 0,
            ud: c,
            sc: Ic(a, c)
        }
          , e = r(c);
        c = e.next().value;
        e = e.next().value;
        c && e || b.D(a, ["beforeunload", "unload"], function() {
            0 === d.wf && (d.wf = Ic(a, d.ud))
        });
        return Na(d)
    }
    function ye(a) {
        var b = a.wf;
        return 0 !== b ? b : Ic(a.l, a.ud)
    }
    function ze(a) {
        return Math.round(ye(a) / 1E3)
    }
    function Ae(a) {
        var b = r(a.ud)
          , c = b.next().value;
        b = b.next().value;
        a = c && b ? b() : ye(a) - a.sc;
        return Math.round(a)
    }
    var Be = K(xe);
    function Ce(a, b, c) {
        var d = A(c);
        A(b) && d ? (d = 1,
        b = 1073741824) : d ? d = 1 : (d = b,
        b = c);
        return a.Math.floor(a.Math.random() * (b - d)) + d
    }
    function De(a, b) {
        if (!b)
            return null;
        try {
            return a.JSON.parse(b)
        } catch (c) {
            return null
        }
    }
    function Ee(a, b) {
        try {
            return a.JSON.stringify(b, null, void 0)
        } catch (c) {
            return null
        }
    }
    ;function Fe(a) {
        try {
            return a.localStorage
        } catch (b) {}
        return null
    }
    function Ge(a, b) {
        var c = Fe(a);
        try {
            c.removeItem(b)
        } catch (d) {}
    }
    function He(a, b) {
        var c = Fe(a);
        try {
            return De(a, c.getItem(b))
        } catch (d) {}
        return null
    }
    function Ie(a, b, c) {
        var d = Fe(a);
        a = Ee(a, c);
        if (!Oa(a))
            try {
                d.setItem(b, a)
            } catch (e) {}
    }
    var Je = K(function(a) {
        Ie(a, "_ymBRC", "1");
        var b = "1" !== He(a, "_ymBRC");
        b || Ge(a, "_ymBRC");
        return b
    });
    function Ke(a, b, c) {
        var d = "" + (void 0 === c ? "_ym" : c) + (void 0 === b ? "" : b);
        d && (d += "_");
        return {
            Ge: Je(a),
            C: function(e, f) {
                var g = He(a, "" + d + e);
                return Oa(g) && !A(f) ? f : g
            },
            F: function(e, f) {
                Ie(a, "" + d + e, f);
                return this
            },
            pb: function(e) {
                Ge(a, "" + d + e);
                return this
            }
        }
    }
    var Le = K(Ke)
      , Me = K(Ke, function(a, b, c) {
        return "" + b + c
    });
    var Ne = ya(Array.prototype.find, "find");
    function Oe(a, b) {
        for (var c = 0; c < b.length; c += 1)
            if (a.call(b, b[c], c))
                return b[c]
    }
    var Pe = Ne ? function(a, b) {
        return Ne.call(b, a)
    }
    : Oe;
    function Qe(a) {
        if (B(a))
            return !1;
        a = a.nodeType;
        return 3 === a || 8 === a
    }
    function Re(a) {
        return a ? a.innerText || "" : ""
    }
    var Se = K(ib("document.documentElement"))
      , Te = K(function(a) {
        a = I(a, "document") || {};
        return ("" + (a.characterSet || a.charset || "")).toLowerCase()
    })
      , Ue = K(N(ib("document"), F("createElement", Ab)));
    function Ve(a) {
        var b = a && a.parentNode;
        b && b.removeChild(a)
    }
    function We(a, b) {
        var c;
        try {
            if (c = b.target || b.srcElement)
                !c.ownerDocument && c.documentElement ? c = c.documentElement : c.ownerDocument !== a.document && (c = null)
        } catch (d) {}
        return c
    }
    function Xe(a, b) {
        try {
            return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(b.className)
        } catch (c) {
            return !1
        }
    }
    var Ye = K(function(a) {
        var b = I(a, "Element.prototype");
        return b ? (a = Pe(function(c) {
            var d = b[c];
            return !!d && xa(c, d)
        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? b[a] : null : null
    });
    function Ze(a) {
        a = I(a, "document");
        try {
            return a.getElementsByTagName("body")[0]
        } catch (b) {
            return null
        }
    }
    function $e(a) {
        var b = I(a, "document") || {}
          , c = b.documentElement;
        return "CSS1Compat" === b.compatMode ? c : Ze(a) || c
    }
    function af(a) {
        var b = I(a, "visualViewport.width")
          , c = I(a, "visualViewport.height");
        a = I(a, "visualViewport.scale");
        return B(b) || B(c) ? null : [Math.floor(b), Math.floor(c), a]
    }
    function bf(a) {
        var b = af(a);
        if (b) {
            var c = r(b);
            b = c.next().value;
            var d = c.next().value;
            c = c.next().value;
            return [a.Math.round(b * c), a.Math.round(d * c)]
        }
        b = $e(a);
        return [I(b, "clientWidth") || a.innerWidth, I(b, "clientHeight") || a.innerHeight]
    }
    function cf(a) {
        var b = Ze(a)
          , c = I(a, "document");
        return {
            x: a.pageXOffset || c.documentElement && c.documentElement.scrollLeft || b && b.scrollLeft || 0,
            y: a.pageYOffset || c.documentElement && c.documentElement.scrollTop || b && b.scrollTop || 0
        }
    }
    function df(a) {
        var b = $e(a)
          , c = r(bf(a));
        a = c.next().value;
        c = c.next().value;
        return [Math.max(b.scrollWidth, a), Math.max(b.scrollHeight, c)]
    }
    function ef(a) {
        try {
            return a.getBoundingClientRect && a.getBoundingClientRect()
        } catch (b) {
            return a = b,
            "object" === typeof a && null !== a && 16389 === (a.og && a.og & 65535) ? {
                top: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0,
                right: 0
            } : null
        }
    }
    function ff(a) {
        if (a)
            try {
                var b = a.nodeName;
                if (x(b))
                    return b;
                b = a.tagName;
                if (x(b))
                    return b
            } catch (c) {}
    }
    var gf = La("INPUT")
      , hf = N(ff, gf)
      , jf = La("TEXTAREA")
      , kf = N(ff, jf)
      , lf = La("SELECT")
      , mf = N(ff, lf)
      , nf = N(ib("type"), Xa(/^(checkbox|radio)$/))
      , of = N(ff, Xa(/^INPUT|SELECT|TEXTAREA$/))
      , pf = N(ff, Xa(/^INPUT|SELECT|TEXTAREA|BUTTON$/))
      , qf = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" ")
      , rf = ["submit", "image", "hidden"];
    function sf(a) {
        return hf(a) && !Tb(La(a.type), rf) ? nf(a) ? !a.checked : !a.value : kf(a) ? !a.value : mf(a) ? 0 > a.selectedIndex : !0
    }
    function tf(a, b, c) {
        var d = b.top
          , e = b.bottom
          , f = b.left
          , g = c.w;
        c = c.h;
        a = a.Math;
        b = a.min(a.max(b.right, 0), g) - a.min(a.max(f, 0), g);
        return (a.min(a.max(e, 0), c) - a.min(a.max(d, 0), c)) * b
    }
    ;function uf(a, b) {
        return function(c) {
            return c(a, b)
        }
    }
    var vf = Ja(function(a, b) {
        return Na(function(c, d) {
            return b(c, function(e) {
                try {
                    d(a(e))
                } catch (f) {
                    c(f)
                }
            })
        })
    })
      , wf = Ja(function(a, b) {
        return Na(function(c, d) {
            return b(c, function(e) {
                try {
                    a(e)(uf(c, d))
                } catch (f) {
                    c(f)
                }
            })
        })
    });
    function xf(a) {
        return Na(function(b, c) {
            a.then(c, b)
        })
    }
    function yf(a) {
        return Na(function(b, c) {
            c(a)
        })
    }
    function zf(a, b, c) {
        function d(f) {
            I(c, e) && (c.nodeType ? c.src === I(c, "contentDocument.URL") : 1) ? f() : W(a, F(f, d), 100, b + ".wfb")
        }
        c = void 0 === c ? a : c;
        var e = (c.nodeType ? "contentWindow." : "") + "document.body";
        return Na(function(f, g) {
            d(g)
        })
    }
    ;function Af(a) {
        var b = []
          , c = {
            Ki: b
        };
        c.D = N(Wa("push", b), F(c, J));
        c.X = N(Ka(nb(a))(b), Ka(Wa("splice", b))(1), F(c, J));
        c.trigger = N(J, Ka(Oc), Kb(b));
        return c
    }
    function Bf(a, b) {
        var c = {};
        return {
            D: function(d, e) {
                M(function(f) {
                    I(c, f) || (c[f] = Af(a));
                    c[f].D(e)
                }, d);
                return this
            },
            X: function(d, e) {
                M(function(f) {
                    I(c, f) && c[f].X(e)
                }, d);
                return this
            },
            trigger: function(d, e) {
                return I(c, d) ? R(a, b + ".emt." + d, c[d].trigger, [])(e) : []
            }
        }
    }
    var Cf = {
        id: "id",
        Af: "ut",
        $: "type",
        Me: "ldc",
        xb: "nck",
        Kb: "url",
        oe: "referrer"
    }
      , Df = /^\d+$/
      , Ef = {
        id: function(a) {
            a = "" + (a || "0");
            Df.test(a) || (a = "0");
            try {
                var b = fb(a)
            } catch (c) {
                b = 0
            }
            return b
        },
        $: function(a) {
            return "" + (a || 0 === a ? a : "0")
        },
        xb: Ad,
        Af: Ad
    };
    Cf.bc = "defer";
    Ef.bc = Ad;
    Cf.Z = "params";
    Ef.Z = function(a) {
        return Pa(a) || L(a) ? a : null
    }
    ;
    Cf.zf = "userParams";
    Cf.dh = "triggerEvent";
    Ef.dh = Ad;
    Cf.Mg = "sendTitle";
    Ef.Mg = function(a) {
        return !!a || A(a)
    }
    ;
    Cf.sf = "trackHash";
    Ef.sf = Ad;
    Cf.bh = "trackLinks";
    var Ff = G(function(a, b) {
        var c = r(b)
          , d = c.next().value;
        c = c.next().value;
        a[d] = {
            ga: c,
            cb: Ef[d]
        };
        return a
    }, {}, sd(Cf));
    function Gf(a) {
        O(Ff, a)
    }
    ;function Hf(a) {
        var b = Q(a)
          , c = b.C("hitId");
        c || (c = Ce(a),
        b.F("hitId", c));
        return c
    }
    function If(a, b) {
        var c = Le(a)
          , d = ve(a)
          , e = b.Me || "uid";
        return [c.C(e), d.C(e)]
    }
    var Jf = Sd("r", function(a, b) {
        var c = r(If(a, b))
          , d = c.next().value;
        return !c.next().value && d
    });
    function Kf(a, b) {
        var c = b.Me
          , d = c || "uid";
        c = c ? a.location.hostname : void 0;
        var e = ve(a)
          , f = Le(a)
          , g = Be(a)(ze)
          , h = r(If(a, b))
          , k = h.next().value;
        h = h.next().value;
        var l = e.C("d");
        Jf(a, b);
        var m = !1;
        !h && k && (h = k,
        m = !0);
        if (!h)
            h = P("", [g, Ce(a, 1E6, 999999999)]),
            m = !0;
        else if (!l || 15768E3 < g - fb(l))
            m = !0;
        m && !b.xb && (e.F(d, h, 525600, c),
        e.F("d", "" + g, 525600, c));
        f.F(d, h);
        return h
    }
    var Lf = K(function() {
        return {
            Ra: {},
            pending: {},
            children: {}
        }
    })
      , Mf = ib("postMessage");
    function Nf(a, b) {
        return function(c, d) {
            var e = Be(a)(ye), f;
            if (f = a.crypto && ya(a.crypto.getRandomValues, "getRandomValues")) {
                var g = new Uint32Array(1);
                f.call(a.crypto, g);
                f = g[0] / 4294967296
            } else
                f = a.Math.random();
            e = {
                Uc: e,
                key: f,
                dir: 0
            };
            c.length && (e.Uc = fb(c[0]),
            e.key = parseFloat(c[1]),
            e.dir = fb(c[2]));
            O(d, b);
            f = {};
            f = (f.data = d,
            f.__yminfo = P(":", ["__yminfo", e.Uc, e.key, e.dir]),
            f);
            return {
                meta: e,
                Wg: Ee(a, f) || ""
            }
        }
    }
    var Of = S("s.f", function(a, b, c, d, e) {
        b = b(d);
        var f = Lf(a)
          , g = P(":", [b.meta.Uc, b.meta.key]);
        if (Mf(c)) {
            f.pending[g] = e;
            try {
                c.postMessage(b.Wg, "*")
            } catch (h) {
                delete f.pending[g];
                return
            }
            W(a, function() {
                delete f.pending[g]
            }, 5E3, "if.s")
        }
    });
    function Pf(a) {
        if (xa("MutationObserver", a.MutationObserver)) {
            var b = Lf(a).children
              , c = new a.MutationObserver(function() {
                M(function(d) {
                    I(b[d], "window.window") || delete b[d]
                }, td(b))
            }
            );
            zf(a, "if.wf")(uf(w, function() {
                c.observe(a.document.body, {
                    subtree: !0,
                    childList: !0
                })
            }))
        }
    }
    function Qf(a, b) {
        var c = Lf(a);
        b.D(["initToParent"], function(d) {
            var e = r(d);
            d = e.next().value;
            e = e.next().value;
            window.window && (c.children[e.counterId] = {
                info: e,
                window: d.source
            })
        }).D(["initToChild"], function(d) {
            var e = r(d);
            d = e.next().value;
            e = e.next().value;
            d.source === a.parent && b.trigger("parentConnect", [d, e])
        }).D(["parentConnect"], function(d) {
            var e = r(d);
            d = e.next().value;
            e = e.next().value;
            e.counterId && (c.Ra[e.counterId] = {
                info: e,
                window: d.source
            })
        })
    }
    var Rf = S("s.fh", function(a, b, c, d, e, f) {
        var g = null
          , h = null
          , k = Lf(a)
          , l = null;
        try {
            g = De(a, f.data),
            h = g.__yminfo,
            l = g.data
        } catch (m) {
            return
        }
        if (!B(h) && h.substring && "__yminfo" === h.substring(0, 8) && !B(l) && (a = h.split(":"),
        4 === a.length))
            if (g = b.id,
            h = r(a),
            h.next(),
            b = h.next().value,
            a = h.next().value,
            h = h.next().value,
            !L(l) && l.type && "0" === h && l.counterId) {
                if (!l.toCounter || l.toCounter == g) {
                    k = null;
                    try {
                        k = f.source
                    } catch (m) {}
                    !Oa(k) && Mf(k) && (f = d.trigger(l.type, [f, l]),
                    e = M(N(J, Mb(e)), f.concat([void 0])),
                    l = c([b, a, l.counterId], e),
                    k.postMessage(l.Wg, "*"))
                }
            } else
                h === "" + g && L(l) && Dd(function(m) {
                    return !(!m.hid || !m.counterId)
                }, l).length === l.length && (c = k.pending[P(":", [b, a])]) && c.apply(null, [f].concat(l))
    })
      , Sf = K(function(a, b) {
        var c = Ab("getElementsByTagName", I(a, "document"))
          , d = Lf(a)
          , e = Mf(a)
          , f = Bf(a, "ifc")
          , g = Qd(a);
        if (!c || !e)
            return null;
        c = c.call(a.document, "iframe");
        e = {};
        e = (e.counterId = b.id,
        e.hid = "" + Hf(a),
        e);
        yc(a) && (e.duid = Kf(a, b));
        Qf(a, f);
        Pf(a);
        var h = Nf(a, e)
          , k = D([a, F([], h)], Of);
        M(function(l) {
            var m = null;
            try {
                m = l.contentWindow
            } catch (p) {}
            m && k(m, {
                type: "initToChild"
            }, function(p, q) {
                f.trigger("initToParent", [p, q])
            })
        }, c);
        oc(a) && k(a.parent, {
            type: "initToParent"
        }, function(l, m) {
            f.trigger("parentConnect", [l, m])
        });
        g.D(a, ["message"], D([a, b, h, f, e], Rf));
        return {
            ba: f,
            Ra: d.Ra,
            children: d.children,
            jf: k
        }
    }, N(qb, V))
      , Tf = /\/$/
      , Uf = K(function(a, b) {
        if (!yc(a) || !oc(a))
            return Kf(a, b);
        var c = Sf(a, b);
        return c && c.Ra[b.id] ? c.Ra[b.id].info.duid || Kf(a, b) : Kf(a, b)
    }, function(a, b) {
        return "" + b.Me + b.xb
    })
      , Vf = K(N(Be, Na(function(a) {
        return -(new a.l.Date).getTimezoneOffset()
    })))
      , Wf = N(Be, Na(function(a) {
        a = new a.l.Date;
        return P("", M(we, [a.getFullYear(), a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()]))
    }))
      , Xf = N(Be, Na(ze))
      , Yf = K(N(Be, Na(function(a) {
        return r(a.ud).next().value
    })))
      , Zf = K(function(a) {
        a = Q(a);
        var b = a.C("counterNum", 0) + 1;
        a.F("counterNum", b);
        return b
    }, N(qb, V))
      , $f = {}
      , ag = ($f.vf = F(ua.version, J),
    $f.nt = kc,
    $f.fu = function(a, b, c) {
        var d = c.K;
        if (!d)
            return null;
        b = (I(a, "document.referrer") || "").replace(Tf, "");
        c = (d["page-ref"] || "").replace(Tf, "");
        d = d["page-url"];
        a = Ud(a).href !== d;
        b = b !== c;
        c = 0;
        a && b ? c = 3 : b ? c = 1 : a && (c = 2);
        return c
    }
    ,
    $f.en = Te,
    $f.la = mc,
    $f.ut = function(a, b, c) {
        var d = c.T;
        c = c.K;
        d = d && d.ld;
        c && (Xd(a) || b.Af || d) && (c.ut = "noindex");
        return null
    }
    ,
    $f.v = F("2652", J),
    $f.cn = Zf,
    $f.dp = function(a) {
        var b = Q(a)
          , c = b.C("bt", {});
        if (A(b.C("bt"))) {
            var d = I(a, "navigator.getBattery");
            try {
                c.p = d && d.call(a.navigator)
            } catch (e) {}
            b.F("bt", c);
            c.p && c.p.then && c.p.then(R(a, "bi:dp.p", function(e) {
                c.yj = I(e, "charging") && 0 === I(e, "chargingTime")
            }))
        }
        return zd(c.yj)
    }
    ,
    $f.ls = K(function(a, b) {
        var c = Me(a, b.id)
          , d = Be(a)
          , e = c.C("lsid");
        return +e ? e : (d = Ce(a, 0, d(ye)),
        c.F("lsid", d),
        d)
    }, qb),
    $f.hid = Hf,
    $f.phid = function(a, b) {
        if (!oc(a))
            return null;
        var c = Sf(a, b);
        if (!c)
            return null;
        var d = td(c.Ra);
        return d.length ? c.Ra[d[0]].info.hid : null
    }
    ,
    $f.z = Vf,
    $f.i = Wf,
    $f.et = Xf,
    $f.c = N(ib("navigator.cookieEnabled"), yd),
    $f.rn = N(J, Ce),
    $f.rqn = function(a, b, c) {
        c = c.K;
        if (!c || c.nohit)
            return null;
        b = V(b);
        a = Me(a, b);
        b = (a.C("reqNum", 0) || 0) + 1;
        a.F("reqNum", b);
        if (a.C("reqNum") === b)
            return b;
        a.pb("reqNum");
        return null
    }
    ,
    $f.u = Uf,
    $f.w = function(a) {
        var b = r(bf(a));
        a = b.next().value;
        b = b.next().value;
        return a + "x" + b
    }
    ,
    $f.s = function(a) {
        return (a = I(a, "screen")) ? P("x", [I(a, "width"), I(a, "height"), I(a, "colorDepth") || I(a, "pixelDepth")]) : null
    }
    ,
    $f.sk = ib("devicePixelRatio"),
    $f.ifr = N(oc, yd),
    $f.j = N(qc, yd),
    $f.sti = function(a) {
        return oc(a) && pc(a) ? "1" : null
    }
    ,
    $f);
    var bg = []
      , cg = "architecture bitness model platformVersion uaFullVersion fullVersionList".split(" ")
      , dg = Sd("uah", function(a) {
        if (!xa("getHighEntropyValues", I(a, "navigator.userAgentData.getHighEntropyValues")))
            return T.reject("0");
        try {
            return a.navigator.userAgentData.getHighEntropyValues(cg).then(function(b) {
                if (!Pa(b))
                    throw "2";
                return b
            }, function() {
                throw "1";
            })
        } catch (b) {
            return T.reject("3")
        }
    })
      , eg = new RegExp(P("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Lighthouse;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&"))
      , fg = K(function(a) {
        var b = ub(a);
        return (b = eg.test(b)) ? T.resolve(b) : dg(a).then(function(c) {
            try {
                return G(function(d, e) {
                    return d || eg.test(e.brand)
                }, !1, c.brands)
            } catch (d) {
                return !1
            }
        }, F(!1, J))
    })
      , gg = "FB_IAB FBAV OKApp GSA/ yandex yango uber EatsKit YKeyboard iOSAppUslugi YangoEats PassportSDK".split(" ")
      , hg = K(function(a) {
        var b = sb(a);
        a = b.ih;
        if (!b.eg)
            return !1;
        b = Wa("indexOf", a);
        b = Tb(N(b, La(-1), rb), gg);
        var c = /CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/.test(a)
          , d = /YaBrowser\/[\d.]+/.test(a)
          , e = /Mobile/.test(a);
        return b || c || d && e || !/Safari/.test(a) && e
    })
      , ig = K(function(a) {
        var b = ub(a);
        return b ? Ha(b, "YangoEats") || fc(a) : !1
    });
    function jg(a, b, c, d, e) {
        return (new T(function(f, g) {
            var h = td(c)
              , k = N(d.resolve || J, Ma(f))
              , l = N(d.reject || J, Ma(g));
            d.resolve = k;
            d.reject = l;
            M(function(m) {
                d.uf.push(+m);
                var p = c[m]
                  , q = W(a, F(Lc(), l), 5100, "is.m")
                  , v = {};
                b(p.window, O(e, (v.toCounter = fb(m),
                v)), function(t, u) {
                    Kd(a, q);
                    d.Qg.push(m);
                    d.resolve && d.resolve(u)
                })
            }, h)
        }
        ))["catch"](R(a, "if.b"))
    }
    function kg(a, b, c) {
        b = Dd(function(d) {
            return !U(c.info.counterId, d.uf)
        }, b);
        M(function(d) {
            if (c.info.counterId) {
                var e = {};
                a((e[c.info.counterId] = c,
                e), d, d.data)
            }
        }, b)
    }
    function lg(a, b) {
        var c = Sf(a, b);
        if (!c)
            return null;
        var d = []
          , e = []
          , f = D([a, c.jf], jg)
          , g = F(f, kg);
        c.ba.D(["initToParent"], function(h) {
            h = r(h);
            h.next();
            h = h.next().value;
            g(d, c.children[h.counterId])
        }).D(["parentConnect"], function(h) {
            h = r(h);
            h.next();
            h = h.next().value;
            g(e, c.Ra[h.counterId])
        });
        return {
            ba: c.ba,
            ck: function(h, k) {
                return new T(function(l, m) {
                    c.jf(h, k, function(p, q) {
                        l([p, q])
                    });
                    W(a, F(Lc(), m), 5100, "is.o")
                }
                )
            },
            Ng: function(h) {
                var k = {
                    Qg: [],
                    uf: [],
                    data: h
                };
                d.push(k);
                return f(c.children, k, h)
            },
            Og: function(h) {
                var k = {
                    Qg: [],
                    uf: [],
                    data: h
                };
                e.push(k);
                return f(c.Ra, k, h)
            }
        }
    }
    var mg = K(lg, N(qb, V));
    var ng = ["default", "update"]
      , og = Sd("ycs", function(a) {
        function b(e) {
            if ("region" === e)
                return !0;
            if (H(c, e)) {
                e = c[e];
                if (!A(e.current))
                    return e.current;
                if (!A(e["default"]))
                    return e["default"]
            }
            return !0
        }
        var c = {}
          , d = Bf(a, "ytm.cs");
        a = {};
        return a.set = function(e, f) {
            if (U(e, ng) && Pa(f)) {
                var g = H(f, "region") ? f.region : void 0, h = x(g) && g ? ("" + g).toUpperCase() : void 0, k;
                M(function(l) {
                    var m = r(l);
                    l = m.next().value;
                    m = m.next().value;
                    if ("region" !== l && (!h || mcSettings && H(mcSettings, "region") && ("" + mcSettings.region).toUpperCase() === h)) {
                        var p = "granted" === m;
                        m = b(l);
                        var q = H(c, l) ? c[l] : {};
                        if ("default" === e) {
                            if (!A(q.current)) {
                                k = "cdau";
                                return
                            }
                            q["default"] = p
                        } else
                            q.current = p;
                        c[l] = q;
                        p = b(l);
                        p !== m && d.trigger(l, [l, p])
                    }
                }, sd(f));
                return k
            }
        }
        ,
        a.get = b,
        a.on = function(e, f) {
            d.D([e], function(g) {
                var h = r(g);
                g = h.next().value;
                h = h.next().value;
                return f(g, h)
            })
        }
        ,
        a
    }, !0);
    var pg = [];
    function qg(a, b) {
        var c = Q(a).C("counters", {})
          , d = V(b);
        return c[d]
    }
    ;function rg(a, b) {
        var c = Ue(a);
        if (c) {
            var d = a.document
              , e = c("script");
            b.crossOrigin && (e.crossOrigin = "anonymous");
            e.src = b.src;
            e.type = b.type || "text/javascript";
            e.charset = b.charset || "utf-8";
            e.async = b.async || !0;
            b.Kf && O(e.dataset, b.Kf);
            try {
                var f = d.getElementsByTagName("head")[0];
                if (!f) {
                    var g = d.getElementsByTagName("html")[0];
                    f = c("head");
                    g && g.appendChild(f)
                }
                f.insertBefore(e, f.firstChild);
                return e
            } catch (h) {}
        }
    }
    ;var sg = []
      , tg = []
      , ug = [];
    var vg = Ja(function(a, b) {
        var c = b || {};
        return {
            l: F(c, J),
            C: function(d, e) {
                var f = c[d];
                return A(f) && !A(e) ? e : f
            },
            F: function(d, e) {
                c[d] = e;
                return this
            },
            Cb: function(d, e) {
                return "" === e || B(e) ? this : this.F(d, e)
            },
            oa: F(c, a)
        }
    })
      , wg = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" ");
    function xg(a, b) {
        M(N(J, Wa("push", a)), b);
        return a
    }
    ;var yg = new RegExp(P("", ["\\.(" + P("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]),"i")
      , zg = {}
      , Ag = (zg.hit = "h",
    zg.params = "p",
    zg.reachGoal = "g",
    zg.userParams = "up",
    zg.trackHash = "th",
    zg.accurateTrackBounce = "atb",
    zg.notBounce = "nb",
    zg.addFileExtension = "fe",
    zg.extLink = "el",
    zg.file = "fc",
    zg.trackLinks = "tl",
    zg.destruct = "d",
    zg.setUserID = "ui",
    zg.getClientID = "ci",
    zg.clickmap = "cm",
    zg);
    function Bg(a) {
        return !(!xa("querySelectorAll", I(a, "Element.prototype.querySelectorAll")) || !a.document.querySelectorAll)
    }
    ;function Cg(a, b) {
        if (!b || !b.querySelectorAll)
            return [];
        var c = b.querySelectorAll(a);
        return c ? Wb(c) : []
    }
    function Dg(a, b) {
        if (b.querySelector)
            return b.querySelector(a);
        var c = Cg(a, b);
        return c && c.length ? c[0] : null
    }
    ;var Eg = Id([26812653])
      , Fg = K(N(ib("id"), Eg), V)
      , Gg = K(function(a) {
        var b = ve(a)
          , c = "1" === b.C("debug")
          , d = -1 < Ca(Ud(a).href, "_ym_debug=1") || -1 < Ca(Ud(a).href, "_ym_debug=2")
          , e = a._ym_debug;
        !e && !d || c || (a = Ud(a),
        b.F("debug", "1", void 0, a.host));
        return !!(c || e || d)
    })
      , Hg = Sd("debuggerEvents", nd, !0);
    function Ig(a, b) {
        if (Gg(a)) {
            var c = b.counterKey;
            if (c) {
                var d = r(c.split(":"));
                c = d.next().value;
                d = d.next().value;
                c = Eg(db(c));
                if ("1" === d || c)
                    return
            }
            c = Hg(a);
            1E3 === c.length && c.shift();
            c.push(b)
        }
    }
    ;var Jg = K(function(a) {
        if (a = Ue(a))
            return a("a")
    });
    function Kg(a, b) {
        var c = Jg(a);
        return c ? (c.href = b,
        {
            protocol: c.protocol,
            host: c.host,
            port: c.port,
            hostname: c.hostname,
            hash: c.hash,
            search: c.search,
            query: c.search.replace(/^\?/, ""),
            pathname: c.pathname || "/",
            path: (c.pathname || "/") + c.search,
            href: c.href
        }) : {}
    }
    function Lg(a, b) {
        if (!b || !b.length)
            return a;
        var c = r(a.split("#"))
          , d = c.next().value;
        c = ka(c);
        c = (c = P("#", c)) ? "#" + c : "";
        return Ha(a, "?") ? d + "&" + b + c : d + "?" + b + c
    }
    function Mg(a, b, c) {
        (c = ce(c)) && (a = Lg(a, c));
        b.aa && (a = Lg(a, b.aa));
        return a
    }
    function Ng(a, b, c) {
        var d = Ce(a)
          , e = c.fa
          , f = c.aa
          , g = c.Ab
          , h = c.gb;
        c = c.Ic;
        var k = {}
          , l = {}
          , m = {};
        Ig(a, (m.name = "request",
        m.data = (l.url = b,
        l.requestId = d,
        l.senderParams = (k.rBody = f,
        k.debugStack = e,
        k.rHeaders = g,
        k.rQuery = h,
        k.verb = c,
        k),
        l),
        m));
        return d
    }
    var Og = vg(function(a) {
        var b = "";
        a = G(function(c, d) {
            var e = r(d)
              , f = e.next().value;
            e = e.next().value;
            e = "" + f + ":" + e;
            "t" === f ? b = e : c.push(e);
            return c
        }, [], sd(a));
        b && a.push(b);
        return P(":", a)
    });
    function Pg(a, b, c) {
        var d = O({}, b.K);
        a = Be(a);
        b.M && (d["browser-info"] = Og(b.M.l()).F("st", a(ze)).oa());
        !d.t && (b = b.Ja) && (b.F("ti", c),
        d.t = b.oa());
        return d
    }
    function Qg(a, b, c, d, e, f) {
        e = void 0 === e ? 0 : e;
        f = void 0 === f ? 0 : f;
        var g = O({
            fa: []
        }, d.N)
          , h = r(b[f])
          , k = h.next().value;
        h = h.next().value;
        var l = c[e];
        if ((!g.Ab || !g.Ab["Content-Type"]) && g.aa) {
            var m = {};
            g.Ab = O({}, g.Ab, (m["Content-Type"] = "application/x-www-form-urlencoded",
            m));
            g.aa = "site-info=" + $d(g.aa)
        }
        g.Ic || (g.Ic = g.aa ? "POST" : "GET");
        g.gb = Pg(a, d, k);
        g.ta = (d.Ta || {}).ta;
        g.fa.push(k);
        O(d.N, g);
        k = "" + l + (d.wd && d.wd.Ni ? "/1" : "");
        var p = 0;
        p = Ng(a, k, g);
        return h(k, g).then(function(q) {
            var v = p
              , t = {}
              , u = {};
            Ig(a, (u.name = "requestSuccess",
            u.data = (t.body = q,
            t.requestId = v,
            t),
            u));
            return {
                ib: q,
                hh: e
            }
        })["catch"](function(q) {
            var v = p
              , t = {}
              , u = {};
            Ig(a, (u.name = "requestFail",
            u.data = (t.error = q,
            t.requestId = v,
            t),
            u));
            v = f + 1 >= b.length;
            t = e + 1 >= c.length;
            v && t && Fc(q);
            return Qg(a, b, c, d, !t && v ? e + 1 : e, v ? 0 : f + 1)
        })
    }
    function Rg(a, b) {
        return function(c, d) {
            return Qg(a, b, d, c)
        }
    }
    function Sg(a, b, c, d) {
        return new T(function(e, f) {
            if (!I(a, "navigator.onLine"))
                return f();
            var g = {};
            g = O(d.gb, (g["force-urlencoded"] = 1,
            g));
            g = c + "?" + ce(g) + (d.aa ? "&" + d.aa : "");
            return 2E3 < g.length ? f(Lc("sb.tlq")) : b(g) ? e("") : f()
        }
        )
    }
    function Tg(a, b) {
        try {
            delete a[b]
        } catch (c) {
            a[b] = void 0
        }
    }
    function Ug(a, b, c) {
        return new T(function(d, e) {
            var f = "_ymjsp" + Ce(a)
              , g = {};
            g = O((g.callback = f,
            g), c.gb);
            var h = D([a, f], Tg);
            a[f] = function(l) {
                try {
                    h(),
                    Ve(k),
                    d(l)
                } catch (m) {
                    e(m)
                }
            }
            ;
            g.wmode = "5";
            f = {};
            var k = rg(a, (f.src = Mg(b, c, g),
            f));
            if (!k)
                return h(),
                e(Cc("jp.s"));
            f = F(k, Ve);
            f = N(f, F(Lc(c.fa), e));
            g = Jd(a, f, c.jb || 1E4);
            g = D([a, g], Kd);
            k.onload = g;
            k.onerror = N(h, g, f)
        }
        )
    }
    function Vg(a, b, c, d) {
        b = b ? new b : void 0;
        var e = {};
        e = O(d.mb ? (e.wmode = "7",
        e) : {}, d.gb);
        var f = b || {
            signal: void 0,
            abort: w
        }
          , g = a.fetch(Lg(c, ce(e)), {
            method: d.Ic,
            body: d.aa,
            credentials: !1 === d.Cf ? "omit" : "include",
            headers: d.Ab,
            signal: f.signal,
            cache: d.cache
        })
          , h = F(d.fa, Lc)
          , k = F(d.fa.concat("timeout"), Lc);
        return new T(function(l, m) {
            var p;
            d.jb && (p = Jd(a, function() {
                try {
                    f.abort()
                } catch (q) {}
                m(k())
            }, d.jb));
            return g.then(function(q) {
                if (!q.ok) {
                    if (d.Bg)
                        return Fc(Dc(q));
                    Mc(d.fa)
                }
                return d.Bg ? q.text() : d.mb ? q.json() : null
            }).then(l)["catch"](F(h(), m)).then(function() {
                p && Kd(a, p)
            })
        }
        )
    }
    var Wg = /[^a-z0-9.:-]/;
    function Xg(a, b, c, d, e, f, g, h) {
        if (4 === b.readyState)
            if (200 === b.status || e || g(c),
            e)
                200 === b.status ? f(b.responseText) : g(Dc(b));
            else {
                e = null;
                if (d)
                    try {
                        (e = De(a, b.responseText)) || g(c)
                    } catch (k) {
                        g(c)
                    }
                f(e)
            }
        return h
    }
    function Yg(a, b, c) {
        var d = new a.XMLHttpRequest
          , e = c.aa
          , f = {}
          , g = O(c.mb ? (f.wmode = "7",
        f) : {}, c.gb);
        return new T(function(h, k) {
            d.open(c.Ic || "GET", Lg(b, ce(g)), !0);
            d.withCredentials = !1 !== c.Cf;
            c.jb && (d.timeout = c.jb);
            N(sd, Hb(function(m) {
                var p = r(m);
                m = p.next().value;
                p = p.next().value;
                d.setRequestHeader(m, p)
            }))(c.Ab);
            var l = D([a, d, Lc(c.fa), c.mb, c.Bg, h, k], Xg);
            d.onreadystatechange = l;
            try {
                d.send(e)
            } catch (m) {}
        }
        )
    }
    function Zg(a, b, c, d) {
        return new T(function(e, f) {
            var g = $e(a)
              , h = b("img")
              , k = N(F(h, Ve), F(Lc(d.fa), f))
              , l = Jd(a, k, d.jb || 3E3);
            h.onerror = k;
            h.onload = N(F(h, Ve), F(null, e), D([a, l], Kd));
            k = O({}, d.gb);
            delete k.wmode;
            h.src = Mg(c, d, k);
            cc(a) && (O(h.style, {
                position: "absolute",
                visibility: "hidden",
                width: "0px",
                height: "0px"
            }),
            g.appendChild(h))
        }
        )
    }
    var $g = {}
      , ah = ($g.x = {
        id: 2,
        check: function(a) {
            var b;
            if (b = I(a, "XMLHttpRequest"))
                if (b = "withCredentials" in new a.XMLHttpRequest) {
                    a: {
                        if (Wg.test(a.location.host) && a.opera && y(a.opera.version) && (b = a.opera.version(),
                        "string" === typeof b && "12" === b.split(".")[0])) {
                            b = !0;
                            break a
                        }
                        b = !1
                    }
                    b = !b
                }
            return b ? F(a, Yg) : !1
        }
    },
    $g.i = {
        id: 4,
        check: function(a) {
            var b = Ue(a);
            return b ? D([a, b], Zg) : !1
        }
    },
    $g);
    ah.f = {
        id: 1,
        check: function(a) {
            return a.fetch ? D([a, I(a, "AbortController")], Vg) : !1
        }
    };
    ah.b = {
        id: 0,
        check: function(a) {
            if (fc(a))
                a = !1;
            else {
                var b = I(a, "navigator.sendBeacon");
                a = b && xa("sendBeacon", b) ? D([a, C(b, I(a, "navigator"))], Sg) : !1
            }
            return a
        }
    };
    ah.j = {
        id: 3,
        check: function(a) {
            return Ue(a) ? F(a, Ug) : !1
        }
    };
    var bh = {};
    function ch(a) {
        if (a)
            return G(function(b, c) {
                var d = ah[c];
                d && b.push(d);
                return b
            }, [], a)
    }
    function dh(a) {
        return bh["*"] ? ch(bh["*"]) : a ? ch(bh[a]) : void 0
    }
    var eh = ["b", "f", "x", "j", "i"]
      , fh = ["x"];
    fh.unshift("f");
    fh.push("j");
    var gh = ["f", "i"]
      , hh = {}
      , ih = (hh.h = fh,
    hh)
      , jh = K(function(a, b, c, d) {
        (d = dh(c) || ch(d)) || (d = ch(c ? ih[c] : eh));
        c = G(function(e, f) {
            var g = f.check
              , h = f.id;
            (g = g(a, b)) && e.push([h, g]);
            return e
        }, [], d || []);
        c.length || Mc();
        return c
    }, function(a, b, c) {
        return c
    });
    function kh(a, b, c, d, e) {
        var f = c.K;
        f.wmode = "0";
        f["wv-hit"] = f["wv-hit"] || "" + Hf(a);
        f["page-url"] = f["page-url"] || Ud(a).href;
        d && (f[d] = f[d] || "" + Ce(a));
        a = {};
        b = {
            Ta: {
                ta: (e || "webvisor") + "/" + b.id
            },
            N: O(c.N || {}, {
                Ab: (a["Content-Type"] = "text/plain",
                a),
                Ic: "POST"
            }),
            K: f
        };
        O(c, b)
    }
    function lh(a) {
        for (var b = a.length, c = 0, d = 255, e = 255, f, g, h; b; ) {
            f = 21 < b ? 21 : b;
            b -= f;
            do
                g = "string" === typeof a ? a.charCodeAt(c) : a[c],
                c += 1,
                255 < g && (h = g >> 8,
                g &= 255,
                g ^= h),
                d += g,
                e += d;
            while (--f);
            d = (d & 255) + (d >> 8);
            e = (e & 255) + (e >> 8)
        }
        a = (d & 255) + (d >> 8) << 8 | (e & 255) + (e >> 8);
        return 65535 === a ? 0 : a
    }
    var mh = "et w v z i u vf".split(" ");
    var nh = Ja(function(a, b) {
        if (!b[a]) {
            var c, d = new T(function(e) {
                c = e
            }
            );
            b[a] = {
                cf: c,
                promise: d,
                df: !1
            }
        }
        return b[a].promise
    })
      , oh = K(N(md, Na));
    var ph = Ja(function(a, b) {
        var c, d = new T(function(f) {
            c = f
        }
        ), e = {};
        d = (e[a] = {
            cf: c,
            promise: d,
            df: !1
        },
        e);
        b[a] = d[a];
        return Na(d)
    });
    function qh(a, b) {
        oh("hidv2")(nh(V(a))).then(b)
    }
    function rh(a, b) {
        return {
            V: function(c, d) {
                qh(b, function(e) {
                    if (e) {
                        c.K || (c.K = {});
                        var f = {};
                        O(c.K, (f.hidv2 = e,
                        f))
                    }
                    d()
                })
            }
        }
    }
    var sh = {};
    function th(a) {
        a = V(a);
        return sh[a] && sh[a].rj
    }
    ;function uh(a) {
        return a.nf || a.wb.length <= a.Ga
    }
    function vh(a) {
        a.Ga = a.wb.length
    }
    function wh(a) {
        a.nf = !0
    }
    function xh(a) {
        a.nf = !1
    }
    function yh(a) {
        uh(a) && Fc(Cc("i"));
        var b = a.Je(a.wb[a.Ga]);
        a.Ga += 1;
        return b
    }
    var zh = Ja(function(a, b) {
        for (var c = []; !uh(b); ) {
            var d = yh(b);
            a(d, function(e) {
                return e(b)
            });
            c.push(d)
        }
        return c
    })
      , Ah = Ja(function(a, b) {
        for (var c; b.wb.length && !uh(b); )
            c = b.wb.pop(),
            c = b.Je(c, b.wb),
            a(b);
        return c
    });
    function Bh(a, b) {
        return function(c) {
            var d = Be(a)
              , e = d(ye);
            return Ah(function(f) {
                d(ye) - e >= b && wh(f)
            })(c)
        }
    }
    function Ch(a, b) {
        return function(c) {
            var d = Be(a)
              , e = d(ye);
            return zh(function(f, g) {
                d(ye) - e >= b && g(wh)
            })(c)
        }
    }
    function Dh(a) {
        for (var b = !0, c = {}; !uh(a) && b; c = {
            Re: void 0
        })
            b = !1,
            c.Re = function() {
                b = !0;
                a.Ga += 1
            }
            ,
            a.Je(a.wb[a.Ga], function(d) {
                return function() {
                    (0,
                    d.Re)()
                }
            }(c)),
            b || (a.Ga += 1,
            c.Re = F(a, Dh))
    }
    function Eh(a, b) {
        return Na({
            wb: a,
            Je: b || J,
            nf: !1,
            Ga: 0
        })
    }
    var Fh = vg(function(a) {
        a = sd(a);
        return P("", M(function(b) {
            var c = r(b);
            b = c.next().value;
            c = c.next().value;
            return Oa(c) ? "" : b + "(" + c + ")"
        }, a))
    });
    function Gh(a, b, c) {
        c = void 0 === c ? null : c;
        a.Ja || (a.Ja = Fh());
        b && a.Ja.Cb(b, c);
        return a.Ja
    }
    var Hh = ["webkitvisibilitychange", "visibilitychange", "prerenderingchange"];
    function Ih(a) {
        return {
            V: function(b, c) {
                var d = a.document
                  , e = b.M;
                if (e && uc(a)) {
                    var f = Qd(a)
                      , g = function(h) {
                        uc(a) || (f.lb(d, Hh, g),
                        c());
                        return h
                    };
                    f.D(d, Hh, g);
                    e.F("pr", "1")
                } else
                    c()
            }
        }
    }
    var Jh = N(V, K(function() {
        var a = 0;
        return function() {
            return a += 1
        }
    }), Oc)
      , Kh = {
        mc: function(a) {
            a = Qb(a).C("mt", {});
            a = sd(a);
            return a.length ? G(function(b, c, d) {
                var e = r(c);
                c = e.next().value;
                e = e.next().value;
                return "" + b + (d ? "-" : "") + c + "-" + e
            }, "", a) : null
        },
        clc: function(a) {
            var b = Q(a).C("cls", {
                Sc: 0,
                x: 0,
                y: 0
            })
              , c = b.Sc
              , d = b.x;
            b = b.y;
            return c ? c + "-" + a.Math.floor(d / c) + "-" + a.Math.floor(b / c) : c + "-" + d + "-" + b
        },
        rqnt: function(a, b, c) {
            a = c.K;
            return !a || a.nohit ? null : Jh(b)
        }
    }
      , Lh = K(function() {
        return xg(td(ag), td(Kh))
    });
    function Mh(a) {
        return function(b, c) {
            return {
                V: function(d, e) {
                    var f = d.M
                      , g = d.K;
                    f && g && M(function(h) {
                        var k = ag[h]
                          , l = "bi"
                          , m = f;
                        k || (k = Kh[h],
                        l = "tel",
                        m = Gh(d));
                        k && (k = S(l + ":" + h, k, null)(b, c, d),
                        m.Cb(h, k))
                    }, a || Lh());
                    e()
                }
            }
        }
    }
    function Nh(a, b) {
        return {
            V: function(c, d) {
                var e = c.M;
                if (e && (!b || b.Mg)) {
                    var f = a.document.title;
                    c.T && c.T.title && (f = c.T.title);
                    var g = Ab("getElementsByTagName", a.document);
                    "string" !== typeof f && g && (f = g("title"),
                    f = (f = I(f, "0.innerHtml")) ? f : "");
                    f = f.slice(0, lc(a) ? 100 : 400);
                    e.F("t", f)
                }
                d()
            }
        }
    }
    var Oh = K(md, V);
    function Ph(a, b, c) {
        if (yc(a) && oc(a)) {
            var d = Oh(b);
            if (!d.Fi) {
                d.Fi = !0;
                b = Sf(a, b);
                if (!b) {
                    c();
                    return
                }
                d.Ea = [];
                var e = function() {
                    d.Ea && (M(Oc, d.Ea),
                    d.Ea = null)
                };
                W(a, e, 3E3, "w.p.d.p");
                b.ba.D(["initToChild"], e)
            }
            d.Ea ? d.Ea.push(c) : c()
        } else
            c()
    }
    var Qh = K(function() {
        return {
            Wf: null,
            Ea: []
        }
    }, V);
    function Rh(a) {
        return (a = a.M) && a.C("pv") && !a.C("ar")
    }
    function Sh(a, b, c) {
        var d = a.M;
        d ? Rh(a) ? (b.Wf = d,
        c()) : b.Ea ? b.Ea.push(c) : c() : c()
    }
    function Th(a, b) {
        return {
            V: function(c, d) {
                var e = Qh(b);
                e = D([c, e, d], Sh);
                Ph(a, b, e)
            },
            Aa: function(c, d) {
                var e = c.M
                  , f = Qh(b);
                if (e) {
                    var g = f.Ea;
                    f.Wf === e && g && (M(Oc, g),
                    f.Ea = null)
                }
                d()
            }
        }
    }
    var Uh = /^[a-z][\w.+-]+:/i;
    function Vh(a, b) {
        var c = Ud(a)
          , d = c.href
          , e = c.host
          , f = -1;
        if (!x(b) || A(b))
            return d;
        c = b.replace(de, "");
        if (-1 !== c.search(Uh))
            return c;
        var g = c.charAt(0);
        if ("?" === g && (f = d.search(/\?/),
        -1 === f) || "#" === g && (f = d.search(/#/),
        -1 === f))
            return d + c;
        if (-1 !== f)
            return d.substr(0, f) + c;
        if ("/" === g) {
            if (f = Ba(d, e),
            -1 !== f)
                return d.substr(0, f + e.length) + c
        } else
            return d = d.split("/"),
            d[d.length - 1] = c,
            P("/", d);
        return ""
    }
    function Wh(a) {
        return {
            V: function(b, c) {
                var d = b.K;
                if (!b.M || !d)
                    return c();
                var e = d["page-ref"]
                  , f = d["page-url"];
                e && f !== e ? d["page-ref"] = Vh(a, e) : delete d["page-ref"];
                e = lc(a) ? 512 : 2048;
                d["page-url"] = Vh(a, f).slice(0, e);
                return c()
            }
        }
    }
    function Xh(a, b, c) {
        for (var d = [b, c], e = -1E4, f = 0; f < a.length; f += 1) {
            var g = r(a[f])
              , h = g.next().value;
            g = g.next().value;
            if (c === g && h === b)
                return;
            if (c < g && c >= e) {
                a.splice(f, 0, d);
                return
            }
            e = g
        }
        a.push(d)
    }
    function Yh(a, b, c, d) {
        a[b] || (a[b] = []);
        c && !B(d) && Xh(a[b], c, d)
    }
    var Zh = [[Wh, -100], [Ih, 1], [Th, 2], [Mh(), 3], [Nh, 4]]
      , $h = Zh.slice()
      , ai = []
      , bi = F(Zh, Xh)
      , ci = {}
      , di = (ci.h = $h,
    ci)
      , X = F(di, Yh);
    function ei(a, b, c) {
        b = L(b) ? b : di[b] || Zh;
        var d = M(Yb, b);
        M(function(e) {
            return d.unshift(e)
        }, ai);
        return M(N(Ya([a, c]), Oc), d)
    }
    ;function fi(a, b, c) {
        c = void 0 === c ? !1 : c;
        return new T(function(d, e) {
            function f(k, l) {
                l();
                d()
            }
            var g = a.slice();
            g.push({
                V: f,
                Aa: f
            });
            var h = Eh(g, function(k, l) {
                var m = c ? k.V : k.Aa;
                if (m)
                    try {
                        m(b, l)
                    } catch (p) {
                        h(vh),
                        e(p)
                    }
                else
                    l()
            });
            h(Dh)
        }
        )
    }
    var gi = {}
      , hi = (gi.w = [[function(a, b) {
        return {
            V: function(c, d) {
                var e = c.K
                  , f = {};
                e = (f["page-url"] = e && e["page-url"] || "",
                f.charset = "utf-8",
                f);
                "0" !== b.$ && (e["cnt-class"] = b.$);
                c.M || (c.M = Og());
                f = c.M;
                e = {
                    Ta: {
                        ta: "watch/" + b.id
                    },
                    N: O(void 0 === c.N ? {} : c.N, {
                        mb: !!f.C("pv") && !f.C("wh")
                    }),
                    K: O(c.K || {}, e)
                };
                O(c, e);
                d()
            }
        }
    }
    , 1]],
    gi)
      , ii = F(hi, Yh);
    function ji(a, b, c) {
        var d = Rg(a, b);
        return function(e) {
            return fi(c, e, !0).then(function() {
                var f = e.Ta || {}
                  , g = void 0 === f.Ci ? "" : f.Ci
                  , h = void 0 === f.ta ? "" : f.ta;
                f = M(function(k) {
                    return "https://" + ("" + g + k || Kc) + "/" + h
                }, void 0 === f.bg ? [Kc] : f.bg);
                return d(e, f)
            }).then(function(f) {
                var g = f.ib;
                f = f.hh;
                e.Ag = g;
                e.bk = f;
                return fi(c, e).then(F(g, J))
            })
        }
    }
    function ki(a) {
        return function(b, c, d) {
            return function(e, f) {
                var g = M(N(Yb, Ya([b, f]), Oc), hi[a] || []);
                g = xg(g, d);
                return ji(b, c, g)(e)
            }
        }
    }
    var li = ki("w")
      , mi = C(T.reject, T, Lc())
      , ni = {}
      , oi = (ni.h = li,
    ni)
      , pi = S("g.sen", function(a, b, c) {
        var d = jh(a, c, b);
        c = ei(a, b, c);
        var e = oi[b]
          , f = e ? e(a, d, c) : li(a, d, c);
        return function() {
            var g = r(Sa(arguments))
              , h = g.next().value;
            g = ka(g);
            h = O(h, {
                N: O(void 0 === h.N ? {} : h.N, {
                    fa: [b]
                })
            });
            return f.apply(null, [h].concat(g))
        }
    }, mi);
    function qi(a, b) {
        function c(d, e, f) {
            var g = {}
              , h = {};
            Ig(a, (h.name = "log",
            h.counterKey = b,
            h.data = (g.args = L(e) ? e : [e],
            g.type = d,
            g.variables = f,
            g),
            h))
        }
        return {
            log: F("log", c),
            error: F("error", c),
            warn: F("warn", c)
        }
    }
    var ri = K(S("dc.init", function(a, b) {
        return b && Eg(db(b.split(":")[0])) ? {
            log: w,
            warn: w,
            error: w
        } : qi(a, b)
    }), qb);
    function si(a, b, c, d) {
        ri(a, b).log(c, d)
    }
    function ti(a, b, c, d, e) {
        return D([a, V(b), e ? [c + ".p", e] : c, d], si)
    }
    ;function ui(a) {
        return a.id === +mcOptions.id ? mcSettings : null
    }
    ;var vi;
    var wi = window.Set;
    if (ya(wi, "Set")) {
        var xi = ya(I(wi.prototype, "add"), "add")
          , yi = ya(I(wi.prototype, "has"), "has")
          , zi = ya(I(wi.prototype, "delete"), "delete")
          , Ai = ya(I(wi.prototype, "clear"), "clear")
          , Bi = ya(I(wi.prototype, "forEach"), "forEach");
        vi = xi && yi && zi && Ai && Bi ? Set : Ub
    } else
        vi = Ub;
    var Ci = vi;
    function Di(a, b, c) {
        if (!(b && b.Element && b.Element.prototype && b.document && c))
            return null;
        if (b.Element.prototype.closest && xa("closest", b.Element.prototype.closest) && c.closest)
            return c.closest(a);
        var d = Ye(b);
        if (d) {
            for (; c && 1 === c.nodeType && !d.call(c, a); )
                c = c.parentElement || c.parentNode;
            return c && 1 === c.nodeType ? c : null
        }
        if (Bg(b)) {
            for (a = new Ci(Wb((b.document || b.ownerDocument).querySelectorAll(a))); c && 1 === c.nodeType && !a.has(c); )
                c = c.parentElement || c.parentNode;
            return c && 1 === c.nodeType ? c : null
        }
        return null
    }
    ;function Ei(a) {
        var b = null;
        try {
            b = a.target || a.srcElement
        } catch (c) {}
        if (b) {
            3 === b.nodeType && (b = b.parentNode);
            for (a = b && b.nodeName && ("" + b.nodeName).toLowerCase(); I(b, "parentNode.nodeName") && ("a" !== a && "area" !== a || !b.href && !b.getAttribute("xlink:href")); )
                a = (b = b.parentNode) && b.nodeName && ("" + b.nodeName).toLowerCase();
            return b.href ? b : null
        }
        return null
    }
    ;function Fi(a) {
        a = "" + a;
        for (var b = 2166136261, c = a.length, d = 0; d < c; d += 1)
            b ^= a.charCodeAt(d),
            b += (b << 1) + (b << 4) + (b << 7) + (b << 8) + (b << 24);
        return b >>> 0
    }
    ;function Gi(a, b) {
        this.l = a;
        this.type = b
    }
    Gi.isEnabled = function(a) {
        return !!a.JSON
    }
    ;
    Gi.prototype.oa = function(a) {
        return yf(Ee(this.l, a))
    }
    ;
    Gi.prototype.Cc = function(a) {
        var b = a.data;
        return "string" === typeof b ? b : Ee(this.l, a.data)
    }
    ;
    Gi.prototype.lc = function(a) {
        return encodeURIComponent(a).length
    }
    ;
    Gi.prototype.Rg = function(a, b) {
        for (var c = Math.ceil(a.length / b), d = [], e = 0; e < b; e += 1)
            d.push(a.slice(e * c, c * (e + 1)));
        return d
    }
    ;
    function Hi(a, b) {
        return {
            V: function(c, d) {
                c.M.Cb("we", yd(b.Yb));
                kh(a, b, c, "rn");
                d()
            }
        }
    }
    var Ii = /opera mini/i;
    function Ji(a, b) {
        var c = ve(a)
          , d = c.C("visorc");
        U(d, ["w", "b"]) || (d = "");
        var e = !se(a) || !me(a, "visorc") || Ii.test(ub(a) || "");
        e && (d = "b");
        var f = 1 === I(b, "settings.isadv")
          , g = I(b, f ? "settings.webvisor.ad_recp" : "settings.webvisor.recp");
        !a.isFinite(g) || 0 > g || 1 < g ? d = "w" : f && !e && (d = "");
        d || (d = Q(a).C("hitId") % 1E4 / 1E4 < g ? "w" : "b");
        c.F("visorc", d, 30);
        return "w" === d
    }
    ;var Ki = K(md);
    function Li(a, b) {
        var c = V(a);
        return oh()(nh(c)).then(b)
    }
    ;function Mi(a, b) {
        return H(b, "isConnected") ? !b.isConnected : Di("html", a, b) !== a.document.documentElement
    }
    function Ni(a, b) {
        var c = b
          , d = I(a, "document")
          , e = ff(c);
        if (!c || !c.ownerDocument || "PARAM" === e || c === Ze(a) || c === d.documentElement)
            return {
                left: 0,
                top: 0
            };
        if (d = ef(c))
            return c = cf(a),
            {
                left: Math.round(d.left + c.x),
                top: Math.round(d.top + c.y)
            };
        for (e = d = 0; c; )
            d += c.offsetLeft,
            e += c.offsetTop,
            c = c.offsetParent;
        return {
            left: d,
            top: e
        }
    }
    function Oi(a, b) {
        var c = I(a, "document");
        return b === Ze(a) || b === c.documentElement ? df(a) : (c = ef(b)) ? [c.width, c.height] : [b.offsetWidth, b.offsetHeight]
    }
    function Pi(a, b) {
        var c = I(a, "document");
        return b && b !== c.documentElement ? b === Ze(a) ? c.documentElement : I(b, "parentNode") : null
    }
    function Qi(a, b, c) {
        if (a = Pi(a, b)) {
            a = a.childNodes;
            for (var d = b && b.nodeName, e = 0, f = 0; f < a.length; f += 1)
                if (d === (a[f] && a[f].nodeName)) {
                    if (b === a[f])
                        return e;
                    c && a[f] === c || (e += 1)
                }
        }
        return 0
    }
    var Ri = K(function() {
        for (var a = 59, b = {}, c = 0; c < wg.length; c += 1)
            b[wg[c]] = String.fromCharCode(a),
            a += 1;
        return b
    });
    function Si(a, b, c) {
        for (var d = "", e = Ri(), f = ff(b) || "*"; b && b.parentNode && !U(f, ["BODY", "HTML"]); )
            d += e[f] || "*",
            d += Qi(a, b, c) || "",
            b = b.parentElement,
            f = ff(b) || "*";
        return fe(d, 128)
    }
    function Ti(a) {
        var b = ["ym-disable-keys", "-metrika-nokeys"];
        b = L(b) ? b : [b];
        a = a || document;
        if (a.querySelectorAll)
            return b = P(", ", M(function(c) {
                return "." + c
            }, b)),
            Wb(a.querySelectorAll(b));
        if (a.getElementsByClassName)
            return Gb(N(Wa("getElementsByClassName", a), Wb), b);
        a = a.getElementsByTagName("*");
        b = "(" + P("|", b) + ")";
        return Dd(F(b, Xe), Wb(a))
    }
    ;function Ui(a) {
        return !B(a) && 1 === a.nodeType
    }
    ;function Vi(a, b, c) {
        this.Mf = 0;
        this.We = 1;
        this.Kd = 5E3;
        this.l = a;
        this.Bc = b;
        this.Sa = c
    }
    Vi.prototype.Dd = function() {
        this.Mf = W(this.l, N(C(this.flush, this), C(this.Dd, this)), this.Kd, this.Sa + ".b.f")
    }
    ;
    Vi.prototype.send = function(a, b) {
        var c = this.Bc(a, b || [], this.We);
        this.We += 1;
        return c
    }
    ;
    Vi.prototype.push = function() {}
    ;
    Vi.prototype.flush = function() {}
    ;
    function Wi(a, b, c) {
        if (a.postMessage && !a.attachEvent) {
            var d = Qd(a)
              , e = "__ym__promise_" + Ce(a) + "_" + Ce(a)
              , f = w;
            f = d.D(a, ["message"], R(a, c, function(g) {
                try {
                    var h = g.data
                } catch (k) {
                    return
                }
                h === e && (f(),
                g.stopPropagation && g.stopPropagation(),
                b())
            }));
            a.postMessage(e, "*")
        } else
            W(a, b, 0, c)
    }
    var Xi = ["phone", "email"]
      , Yi = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" ");
    function Zi(a, b) {
        if (B(b))
            return !1;
        if (Qe(b))
            return Zi(a, b.parentNode);
        if (!Ui(b))
            return !1;
        var c = Ye(a);
        if (!c)
            return !1;
        var d = c.call(b, ".ym-hide-content,.ym-hide-content *");
        return d && c.call(b, ".ym-show-content,.ym-hide-content .ym-show-content *") ? !1 : d
    }
    var $i = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" ")
      , aj = new RegExp("(" + Yi.join("|") + ")","i")
      , bj = new RegExp("(" + Xi.join("|") + ")","i")
      , cj = ["password", "passwd", "pswd"]
      , dj = new RegExp("(" + Yi.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" ")).join("|") + ")","i");
    function ej(a) {
        return a && Xe("(ym-disable-submit|-metrika-noform)", a)
    }
    function fj(a) {
        try {
            var b = ff(a);
            if (U(b, qf)) {
                if ("INPUT" === b) {
                    var c = a.type;
                    return !c || U(c.toLocaleLowerCase(), $i)
                }
                return !0
            }
        } catch (d) {}
        return !1
    }
    function gj(a) {
        return !!(a && 2 < a.length)
    }
    function hj(a, b) {
        var c = a && (Ha(a.className, "ym-disable-keys") || Ha(a.className, "-metrika-nokeys"));
        return b && a ? c || !!Ti(a).length : c
    }
    function ij(a) {
        return hf(a) ? "password" === a.type || a.name && U(a.name.toLowerCase(), cj) || a.id && U(a.id.toLowerCase(), cj) : !1
    }
    function jj(a, b) {
        return ij(b) || hj(b) ? !0 : Zi(a, b)
    }
    function kj(a, b) {
        if (!b)
            return {
                eb: !1,
                Jb: !1,
                Qb: !1
            };
        var c = b.getAttribute("type") || b.type;
        if ("button" === c)
            return {
                eb: !1,
                Jb: !1,
                Qb: !1
            };
        var d = Dd(gj, [b.className, b.id, b.name])
          , e = b && Xe("ym-record-keys", b);
        (c = c && U(c, Xi) || Tb(Xa(bj), d)) || (c = b.placeholder,
        c = Tb(Xa(aj), d) || gj(c) && dj.test(c || ""));
        d = c;
        return {
            eb: !e && (jj(a, b) || d),
            Jb: e,
            Qb: d
        }
    }
    ;var lj = []
      , mj = !1
      , nj = !1;
    function oj(a, b) {
        if (lj.length) {
            var c = lj.shift();
            nj ? c() : W(a, c, 100, b + ".ei.rnt")
        } else
            mj = !1
    }
    function pj(a, b, c, d, e) {
        d = void 0 === d ? 1 : d;
        e = void 0 === e ? Ch : e;
        nj = Infinity === d;
        return Na(function(f, g) {
            function h() {
                try {
                    var l = b(e(a, d));
                    k = k.concat(l)
                } catch (m) {
                    return f(m)
                }
                b(xh);
                if (b(uh))
                    return g(k),
                    oj(a, c);
                nj ? (b(e(a, 1E4)),
                g(k),
                oj(a, c)) : W(a, h, 100, c + ".ei")
            }
            var k = [];
            mj ? lj.push(h) : (mj = !0,
            h())
        })
    }
    ;var qj = ya(String.prototype.repeat, "repeat");
    function rj(a, b) {
        for (var c = "", d = 0; d < b; d += 1)
            c += a;
        return c
    }
    var sj = qj ? function(a, b) {
        return qj.call(a, b)
    }
    : rj
      , tj = F(!0, function(a, b, c, d) {
        c = b.length && (c - d.length) / b.length;
        if (0 >= c)
            return d;
        b = sj(b, c);
        return a ? b + d : d + b
    });
    function uj(a, b) {
        return Array.prototype.sort.call(b, a)
    }
    var vj = Ja(uj);
    function wj() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    function xj() {
        return wj() + wj() + "-" + wj() + "-" + wj() + "-" + wj() + "-" + wj() + wj() + wj()
    }
    ;function yj(a, b) {
        function c() {
            return h ? d(g, e).then(function(k) {
                return I(k.ib, "wstoken")
            })["catch"](R(a, "ws.s")) : (h = !0,
            Li(b, ib("settings.wstoken"))["catch"](R(a, "ws.st")))
        }
        var d = pi(a, "ws", b)
          , e = ["https://" + Kc + "/watch/" + b.id]
          , f = {}
          , g = {
            K: (f.wmode = "8",
            f),
            N: {
                mb: !0
            }
        }
          , h = !1;
        return {
            V: function(k, l) {
                k.N || (k.N = {});
                k.N.ag = c;
                l()
            }
        }
    }
    function zj(a, b, c, d) {
        Vi.call(this, a, c, d);
        this.Mc = 0;
        this.buffer = [];
        this.Kd = 2E3;
        this.qa = b;
        this.ba = Bf(a, d + ".b");
        this.Dd()
    }
    sa(zj, Vi);
    function Aj(a, b) {
        return Ed(a.ba.trigger("ag", b))
    }
    function Bj(a, b, c) {
        b(uf(R(a.l, a.Sa + ".b.st"), function(d) {
            a.send(d, c)
        }))
    }
    function Cj(a, b, c) {
        Kd(a.l, a.Mf);
        var d = Math.ceil(a.qa.lc(c) / 63E4)
          , e = a.qa.Rg(c, d);
        M(function(f, g) {
            var h = {};
            h = O({}, b, (h.data = f,
            h.partNum = g + 1,
            h.end = g + 1 === d,
            h.partsTotal = e.length,
            h));
            var k = a.qa.oa([h], !1);
            Bj(a, k, [h])
        }, e);
        a.Dd()
    }
    n = zj.prototype;
    n.send = function(a, b) {
        var c = this;
        this.ba.trigger("se", b);
        return Vi.prototype.send.call(this, a, b).then(J, function() {
            c.ba.trigger("see", b)
        })
    }
    ;
    n.push = function(a) {
        var b = this;
        this.ba.trigger("p", a);
        var c = this.qa.Cc(a)
          , d = this.qa.lc(c);
        7E5 < d ? Cj(this, a, c) : (c = Aj(this, this.buffer.concat([a])),
        c = G(function(e, f) {
            return e + b.qa.lc(b.qa.Cc(f))
        }, 0, c),
        this.Mc + c + d >= 7E5 * .7 && this.flush(),
        this.buffer.push(a),
        this.Mc += d)
    }
    ;
    n.D = function(a, b) {
        this.ba.D([a], b)
    }
    ;
    n.X = function(a, b) {
        this.ba.X([a], b)
    }
    ;
    n.flush = function(a) {
        var b = this.buffer.concat(Aj(this, this.buffer));
        b.length && (this.buffer = [],
        this.Mc = 0,
        a = this.qa.oa(b, a),
        Bj(this, a, b))
    }
    ;
    function Dj(a, b, c, d, e, f) {
        e = void 0 === e ? 1 : e;
        f = void 0 === f ? w : f;
        b = Eh(b, c);
        pj(a, b, d + ".itc", e)(uf(R(a, d), f))
    }
    var Ej = K(function(a) {
        var b = a.document;
        return {
            nc: function() {
                if (b.scrollingElement)
                    return b.scrollingElement;
                var c = 0 === Ba(b.compatMode, "CSS1") ? b.documentElement : b.body;
                return I(b, "documentElement.scrollHeight") >= I(b, "body.scrollHeight") ? c : null
            },
            oi: function() {
                var c = a.screen;
                if (!c)
                    return 0;
                var d = Pe(F(c, I), ["orientation", "mozOrientation", "msOrientation"]);
                return I(c, d + ".angle") || 0
            },
            Zj: F(a, oc),
            Ee: F(a, ic),
            Yj: F(a, ac)
        }
    })
      , Fj = ["sr", "sd", "\u043d"];
    function Gj(a) {
        a = Ud(a);
        return a.protocol + "//" + a.host
    }
    function Hj(a, b, c, d) {
        b || Fc(Lc());
        d = d && "null" !== d ? d : Gj(a);
        b.postMessage(Ee(a, c), d)
    }
    function Ij(a, b) {
        try {
            return Pe(N(ib("contentWindow"), La(b)), Wb(a.document.querySelectorAll("iframe")))
        } catch (c) {
            return null
        }
    }
    function Jj(a, b, c, d) {
        var e = Bf(a, d)
          , f = Qd(a)
          , g = oc(a)
          , h = b.$c()
          , k = !I(a, "postMessage") || g && !I(a, "parent.postMessage")
          , l = F(e, J)
          , m = null;
        if (k) {
            if (!h)
                return W(a, C(e.trigger, e, "i", {
                    ra: !1
                }), 10, d + ".pb"),
                {
                    qe: l,
                    Kg: w,
                    stop: w
                };
            Fc(Lc())
        }
        e.D(["sr"], function(u) {
            if (x(u.origin) && !A(u.source)) {
                var z = Ij(a, u.source);
                if (z) {
                    var E = {};
                    Hj(a, u.source, (E.type = "\u043d",
                    E.frameId = b.xa().O(z),
                    E), u.origin)
                }
            }
        });
        e.D(["sd"], function(u) {
            if (x(u.origin) && !A(u.source)) {
                var z = u.data;
                u = u.source;
                (a === u || Ij(a, u)) && e.trigger("sdr", {
                    data: z.data,
                    frameId: z.frameId
                })
            }
        });
        if (g && !h) {
            var p = !1
              , q = 0
              , v = function() {
                var u = {};
                Hj(a, a.parent, (u.type = "sr",
                u), "*");
                q = W(a, v, 100, d + ".i")
            };
            v();
            var t = function(u) {
                if (x(u.origin) && !A(u.source)) {
                    m = u.origin;
                    e.X(["\u043d"], t);
                    Kd(a, q);
                    var z = u.origin;
                    z && "null" !== z && (z = Kg(a, z).host,
                    p || u.source !== a.parent || !u.data.frameId || "about:blank" !== Ud(a).href && !U(z, c) || (p = !0,
                    e.trigger("i", {
                        frameId: u.data.frameId,
                        ra: !0
                    })))
                }
            };
            e.D(["\u043d"], t);
            W(a, function() {
                e.X(["\u043d"], t);
                Kd(a, q);
                p || (p = !0,
                e.trigger("i", {
                    ra: !1
                }))
            }, 2E3, d + ".r")
        }
        f = f.D(a, ["message"], function(u) {
            var z = De(a, u.data);
            z && z.type && U(z.type, Fj) && e.trigger(z.type, {
                data: z,
                source: u.source,
                origin: u.origin
            })
        });
        return {
            qe: l,
            Kg: function(u) {
                var z = {};
                Hj(a, a.parent, (z.frameId = b.$c(),
                z.data = u,
                z.type = "sd",
                z), m || Gj(a.parent))
            },
            stop: f
        }
    }
    function Kj(a) {
        return {
            ji: function() {
                var b = a.document.querySelector("base[href]");
                return b ? b.getAttribute("href") : null
            },
            li: function() {
                if (a.document.doctype) {
                    var b = O({
                        name: "html",
                        publicId: "",
                        systemId: ""
                    }, a.document.doctype)
                      , c = b.publicId
                      , d = b.systemId;
                    return "<!DOCTYPE " + P("", [b.name, c ? ' PUBLIC "' + c + '"' : "", !c && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                }
                return null
            }
        }
    }
    function Lj(a, b, c, d, e) {
        return {
            H: function(f, g, h) {
                return R(a, d + "." + c + "." + g, f, h, b, e)
            },
            Da: function(f) {
                return d + "." + c + "." + f
            }
        }
    }
    var Mj = ib("location.href");
    function Nj(a, b) {
        var c = this;
        this.qc = 0;
        this.Tc = [];
        this.pc = null;
        this.ra = this.Jc = this.Gd = !1;
        this.recordStamp = 0;
        this.stopped = !1;
        this.ri = function() {
            return c.page
        }
        ;
        this.$c = function() {
            return c.qc
        }
        ;
        this.we = function() {
            return c.recordStamp
        }
        ;
        this.mi = function() {
            return c.Xa
        }
        ;
        this.Zf = function() {
            return c.pc
        }
        ;
        this.xa = function() {
            return c.rc
        }
        ;
        this.stamp = function() {
            return c.Fc ? c.l.Math.min(c.l.Math.max(c.Fc(ye) - c.recordStamp, 0), c.options.ah ? 2147483647 : Infinity) : 0
        }
        ;
        this.rb = function() {
            return c.options
        }
        ;
        this.Ka = function() {
            return c.uh
        }
        ;
        this.R = function(h, k, l, m) {
            m = void 0 === m ? c.stamp() : m;
            c.ea([{
                type: h,
                data: k,
                stamp: m,
                frameId: c.qc,
                event: l
            }])
        }
        ;
        this.ea = function(h) {
            c.Gd && !c.Jc ? c.ra ? c.Zf().Kg(M(function(k) {
                return k.frameId ? k : O(k, {
                    frameId: c.qc
                })
            }, h)) : c.Bc(h) : c.Tc = c.Tc.concat(h)
        }
        ;
        this.l = a;
        var d = b.Sa
          , e = Lj(a, this, "R", d);
        this.mf = e.H(this.mf, "s");
        this.ea = e.H(this.ea, "sd");
        var f = Q(a)
          , g = f.C;
        f = f.F;
        g = g("wv2e");
        g = L(g) ? g : [];
        U(d, g) && Mc();
        g.push(d);
        f("wv2e", g);
        this.options = b;
        this.Xa = Qd(a);
        this.rc = new b.Ld(a,b);
        this.ng = new b.Md(a,b,this.rc,1E4);
        this.uh = Ej(a);
        this.Hb = M(function(h) {
            return new h(a,c)
        }, b.Hb);
        Oj(this, e.Da("if"));
        this.page = Kj(this.l);
        this.mf()
    }
    Nj.prototype.start = function(a) {
        this.Gd = !0;
        this.Bc = a;
        a = Zb(this.Tc);
        this.ea(a)
    }
    ;
    Nj.prototype.stop = function() {
        this.stopped || (this.stopped = !0,
        Mj(this.l) && (M(function(a) {
            return a.stop()
        }, this.Hb),
        this.rc.stop(),
        this.ng.stop(),
        this.pc && this.pc.stop(),
        this.ra || this.R("event", {}, "eof")))
    }
    ;
    Nj.prototype.cc = ba(0);
    function Oj(a, b) {
        if (!a.options.Ph) {
            a.ra = !!a.options.frameId;
            a.qc = a.options.frameId || 0;
            a.Jc = !a.ra;
            var c = a.options.gh || [];
            c.push(Ud(a.l).host);
            a.pc = Jj(a.l, a, c, b);
            c = a.pc.qe();
            oc(a.l) ? a.Jc && c.D(["i"], function(d) {
                if (!1 === d.ra || !0 === d.ra)
                    a.ra = d.ra,
                    a.Jc = !1,
                    d.frameId && (a.qc = d.frameId),
                    d = Zb(a.Tc),
                    a.ea(d)
            }) : (a.ra = !1,
            a.Jc = !1)
        }
    }
    Nj.prototype.mf = function() {
        this.Fc = xe(this.l);
        this.recordStamp = this.Fc(ye);
        this.rc.O(this.l.document.documentElement);
        this.ng.start();
        M(function(a) {
            a.start()
        }, this.Hb);
        this.rc.start()
    }
    ;
    function Z(a, b, c, d) {
        this.fb = [];
        this.ca = [];
        this.l = a;
        this.J = Lj(a, this, c, b.rb().Sa + ".c", d);
        this.G = b;
        this.Xa = this.G.mi();
        this.start = this.J.H(this.start, "st");
        this.stop = this.J.H(this.stop, "sp")
    }
    Z.prototype.start = function() {
        var a = this;
        this.fb = M(function(b) {
            var c = r(b);
            b = c.next().value;
            var d = c.next().value;
            c = c.next().value;
            var e = C(a.J.H(d, b[0]), a);
            return a.Xa.D(c || a.l, b, function(f) {
                f && e(f)
            })
        }, this.ca)
    }
    ;
    Z.prototype.stop = function() {
        M(Oc, this.fb)
    }
    ;
    Z.prototype.O = function(a) {
        return this.G.xa().O(a)
    }
    ;
    var Pj = ["focus", "blur"];
    function Qj(a, b) {
        Z.call(this, a, b, "f");
        this.ca.push([Pj, this.ai])
    }
    sa(Qj, Z);
    Qj.prototype.ai = function(a) {
        var b = a.target;
        a = a.type;
        this.G.R("event", {
            target: this.O(b === this.l ? this.l.document.documentElement : b)
        }, a)
    }
    ;
    function Rj(a, b) {
        var c = ff(b);
        if (!c)
            return null;
        var d = b.__ym_indexer;
        if (d)
            return {
                nodeName: c,
                id: d,
                existing: !0
            };
        d = Q(a);
        var e = d.C("nextNodeId", 1);
        b.__ym_indexer = e;
        d.F("nextNodeId", e + 1);
        return {
            nodeName: c,
            id: e,
            existing: !1
        }
    }
    var Sj = {
        91: "super",
        93: "super",
        224: "super",
        18: "alt",
        17: "ctrl",
        16: "shift",
        9: "tab",
        8: "backspace",
        46: "delete"
    }
      , Tj = {
        fk: 1,
        Oj: 2,
        alt: 3,
        shift: 4,
        hk: 5,
        "delete": 6,
        Lj: 6
    }
      , Uj = [4, 9, 8, 32, 37, 38, 39, 40, 46]
      , Vj = {}
      , Wj = (Vj["1"] = {
        91: "&#8984;",
        93: "&#8984;",
        224: "&#8984;",
        18: "&#8997;",
        17: "&#8963;",
        16: "&#8679;",
        9: "&#8677;",
        8: "&#9003;",
        46: "&#9003;"
    },
    Vj["2"] = {
        91: "&#xff;",
        93: "&#xff;",
        224: "&#xff;",
        18: "Alt",
        17: "Ctrl",
        16: "Shift",
        9: "Tab",
        8: "Backspace",
        46: "Delete"
    },
    Vj.multi = {
        32: "SPACEBAR",
        37: "&larr;",
        38: "&uarr;",
        39: "&rarr;",
        40: "&darr;",
        13: "Enter"
    },
    Vj)
      , Xj = /flash/
      , Yj = /ym-disable-keys/
      , Zj = /^&#/;
    function ak(a, b) {
        Z.call(this, a, b, "ks");
        this.Nb = {};
        this.bb = 0;
        this.Na = [];
        this.Xg = [];
        this.zg = this.Vc = 0;
        this.ca.push([["keydown"], this.vi]);
        this.ca.push([["keyup"], this.xi]);
        this.ph = -1 !== Ba(I(a, "navigator.appVersion") || "", "Mac") ? "1" : "2";
        this.jd = this.J.H(this.jd, "v");
        this.de = this.J.H(this.de, "ec");
        this.Bd = this.J.H(this.Bd, "sk");
        this.te = this.J.H(this.te, "gk");
        this.lf = this.J.H(this.lf, "sc");
        this.Pc = this.J.H(this.Pc, "cc");
        this.reset = this.J.H(this.reset, "r");
        this.zd = this.J.H(this.zd, "rs")
    }
    sa(ak, Z);
    n = ak.prototype;
    n.vi = function(a) {
        if (this.jd(a) && (!a.target || "INPUT" !== a.target.nodeName || !a.shiftKey && 32 !== a.keyCode && "shift" !== Sj[a.keyCode])) {
            var b = a.keyCode;
            a.repeat || this.Nb[b] || (this.Nb[a.keyCode] = !0,
            Sj[a.keyCode] && !this.bb ? (this.bb += 1,
            this.lf(a),
            this.reset(300)) : this.bb ? (Kd(this.l, this.zg),
            bk(this, a),
            this.de()) : (this.reset(),
            bk(this, a)))
        }
    }
    ;
    n.xi = function(a) {
        if (this.jd(a)) {
            var b = a.keyCode
              , c = Sj[a.keyCode];
            this.Nb[a.keyCode] && (this.Nb[b] = !1);
            c && this.bb && (this.bb = 0,
            this.Nb = {});
            1 === this.Na.length && (a = r(this.Na).next().value,
            U(a.keyCode, Uj) && (this.Bd([a], !0),
            this.reset()));
            this.Na = Dd(N(ib("keyCode"), La(b), rb), this.Na);
            Kd(this.l, this.Vc)
        }
    }
    ;
    n.jd = function(a) {
        var b = this.l.document.activeElement;
        b = b && "OBJECT" === b.nodeName && Xj.test(b.getAttribute("type") || "");
        a = a.target;
        if (!a)
            return !b;
        a = "INPUT" === a.nodeName && "password" === a.getAttribute("type") && Yj.test(a.className);
        return !b && !a
    }
    ;
    n.de = function() {
        this.Xg = this.Na.slice(0);
        Kd(this.l, this.Vc);
        this.Vc = W(this.l, F(this.Xg, C(this.Bd, this)), 0, "e.c")
    }
    ;
    n.Bd = function(a, b) {
        if (1 < a.length || (void 0 === b ? 0 : b)) {
            var c = this.te(a);
            this.G.R("event", {
                keystrokes: c
            }, "keystroke")
        }
    }
    ;
    n.te = function(a) {
        var b = this;
        a = M(function(c) {
            c = c.keyCode;
            var d = Sj[c]
              , e = Wj[b.ph][c] || Wj.multi[c] || String.fromCharCode(c);
            return {
                id: c,
                key: e,
                isMeta: !!d && Zj.test(e),
                modifier: d
            }
        }, a);
        return uj(function(c, d) {
            return (Tj[c.modifier] || 100) - (Tj[d.modifier] || 100)
        }, a)
    }
    ;
    function bk(a, b) {
        U(b, a.Na) || a.Na.push(b)
    }
    n.lf = function(a) {
        bk(this, a);
        this.Pc()
    }
    ;
    n.Pc = function() {
        this.bb ? W(this.l, this.Pc, 100, this.J.Da("cc")) : this.Na = []
    }
    ;
    n.reset = function(a) {
        a ? this.zg = W(this.l, C(this.zd, this), a, this.J.Da("rr")) : this.zd()
    }
    ;
    n.zd = function() {
        this.bb = 0;
        this.Na = [];
        this.Nb = {};
        Kd(this.l, this.Vc)
    }
    ;
    function ck(a) {
        this.index = 0;
        this.Fb = {};
        this.l = a
    }
    function dk(a, b, c, d) {
        function e() {
            var h = Sa(arguments)
              , k = d.ke && !a.Fb[g].Ac
              , l = a.Fb[g];
            Kd(a.l, l.ya);
            l.Od = h;
            l.Ac = !0;
            var m = f(ye);
            if (k || m - l.Le >= c)
                b.apply(null, la(h)),
                l.Le = m;
            l.ya = W(a.l, function() {
                k || (b.apply(null, la(h)),
                l.Le = f(ye));
                l.Ac = !1;
                l.Od = []
            }, c, "th")
        }
        d = void 0 === d ? {} : d;
        var f = Be(a.l)
          , g = a.index;
        a.index += 1;
        a.Fb[g] = {
            ya: 0,
            Ac: !1,
            fn: b,
            Od: [],
            Le: f(ye)
        };
        e.cancel = function() {
            Kd(a.l, a.Fb[g].ya)
        }
        ;
        return e
    }
    ck.prototype.flush = function() {
        var a = this;
        M(function(b) {
            var c = a.Fb[b]
              , d = c.ya
              , e = c.fn
              , f = c.Od;
            c.Ac && (a.Fb[b].Ac = !1,
            e.apply(null, la(f)),
            Kd(a.l, d))
        }, td(this.Fb))
    }
    ;
    function ek(a, b) {
        Z.call(this, a, b, "r");
        this.zb = {
            width: 0,
            height: 0,
            pageHeight: 0,
            pageWidth: 0,
            orientation: 0
        };
        this.ca.push([["resize"], this.Vi]);
        this.ca.push([["orientationchange"], this.Ti])
    }
    sa(ek, Z);
    ek.prototype.start = function() {
        Z.prototype.start.call(this);
        this.Ig()
    }
    ;
    ek.prototype.Vi = function() {
        var a = fk(this);
        if (a.height !== this.zb.height || a.width !== this.zb.width)
            this.zb = a,
            gk(this, a)
    }
    ;
    ek.prototype.Ti = function() {
        var a = fk(this);
        if (this.zb.orientation !== a.orientation) {
            this.zb = a;
            var b = void 0 === b ? this.G.stamp() : b;
            this.G.R("event", {
                width: a.width,
                height: a.height,
                orientation: a.orientation
            }, "deviceRotation", b)
        }
    }
    ;
    function fk(a) {
        var b = a.G.Ka()
          , c = r(bf(a.l))
          , d = c.next().value;
        c = c.next().value;
        b = b.nc();
        return {
            width: d,
            height: c,
            pageWidth: b ? b.scrollWidth : 0,
            pageHeight: b ? b.scrollHeight : 0,
            orientation: a.G.Ka().oi()
        }
    }
    function gk(a, b, c) {
        c = void 0 === c ? a.G.stamp() : c;
        a.G.R("event", {
            width: b.width,
            height: b.height,
            pageWidth: b.pageWidth,
            pageHeight: b.pageHeight
        }, "resize", c)
    }
    ek.prototype.Ig = function() {
        var a = fk(this);
        if (a.height && a.width && a.pageWidth && a.pageHeight) {
            var b = this.zb;
            b.height && b.width && b.pageWidth && b.pageHeight || (this.zb = a);
            gk(this, a, 0)
        } else
            W(this.l, C(this.Ig, this), 300, this.J.Da("in"))
    }
    ;
    function hk(a) {
        var b = this;
        this.za = [];
        this.ha = [];
        this.size = 0;
        a && M(function(c) {
            var d = r(c);
            c = d.next().value;
            d = d.next().value;
            b.set(c, d)
        }, a)
    }
    n = hk.prototype;
    n.set = function(a, b) {
        var c = ob(a, this.za);
        -1 === c ? (this.za.push(a),
        this.ha.push(b),
        this.size = this.za.length) : this.ha[c] = b;
        return this
    }
    ;
    n.get = function(a) {
        a = ob(a, this.za);
        if (-1 !== a)
            return this.ha[a]
    }
    ;
    n.has = function(a) {
        return -1 !== ob(a, this.za)
    }
    ;
    n["delete"] = function(a) {
        a = ob(a, this.za);
        if (-1 === a)
            return !1;
        this.za.splice(a, 1);
        this.ha.splice(a, 1);
        this.size = this.za.length;
        return !0
    }
    ;
    n.clear = function() {
        this.za = [];
        this.ha = [];
        this.size = 0
    }
    ;
    n.forEach = function(a) {
        var b = this;
        M(function(c, d) {
            a(b.ha[d], c, b)
        }, this.za)
    }
    ;
    var ik;
    var jk = window.Map;
    if (ya(jk, "Map")) {
        var kk = ya(I(jk.prototype, "get"), "get")
          , lk = ya(I(jk.prototype, "set"), "set")
          , mk = ya(I(jk.prototype, "has"), "has")
          , nk = ya(I(jk.prototype, "delete"), "delete")
          , ok = ya(I(jk.prototype, "clear"), "clear")
          , pk = ya(I(jk.prototype, "forEach"), "forEach");
        ik = kk && lk && mk && nk && ok && pk ? jk : hk
    } else
        ik = hk;
    var qk = ik
      , rk = N(K(function(a) {
        var b = ya(a.getSelection, "getSelection");
        return b ? C(b, a) : w
    }), Oc)
      , sk = ["mousemove", "touchmove", "mousedown", "touchdown", "select"]
      , tk = /text|search|password|tel|url/;
    function uk(a, b) {
        var c = rk(a);
        if (c && 0 < c.rangeCount) {
            c = c.getRangeAt(0) || a.document.createRange();
            var d = b(c.startContainer)
              , e = b(c.endContainer);
            if (!A(d) && !A(e))
                return {
                    start: c.startOffset,
                    end: c.endOffset,
                    startNode: d,
                    endNode: e
                }
        }
    }
    function vk(a, b) {
        if (tk.test(a.type || "")) {
            var c = b(a);
            if (!A(c))
                return {
                    start: a.selectionStart,
                    end: a.selectionEnd,
                    target: c
                }
        }
    }
    function wk(a, b) {
        Z.call(this, a, b, "se");
        this.De = !1;
        this.ca.push([sk, this.oc])
    }
    sa(wk, Z);
    wk.prototype.oc = function(a) {
        var b = this
          , c = this.G
          , d = a.type
          , e = a.which;
        a = a.target;
        if ("mousemove" !== d || 1 === e)
            (d = "select" === d ? vk(a, function(f) {
                return b.O(f)
            }) : uk(this.l, function(f) {
                return b.O(f)
            })) && d.start !== d.end ? (this.De = !0,
            c.R("event", d, "selection")) : this.De && (this.De = !1,
            c.R("event", {
                start: 0,
                end: 0
            }, "selection"))
    }
    ;
    var xk = Ja(function(a, b) {
        var c = Math.pow(10, a);
        return Math.round(b * c) / c
    });
    function yk(a, b) {
        var c = I(b, "isTrusted");
        B(c) || (a.ite = c);
        return a
    }
    var zk = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"];
    function Ak(a) {
        return "touchcancel" === a.type || "touchend" === a.type
    }
    function Bk(a, b) {
        Z.call(this, a, b, "t");
        this.Hd = {};
        this.scrolling = !1;
        this.Gg = 0;
        this.ca.push([["scroll"], this.hj, this.l.document]);
        this.ca.push([zk, this.qj, this.l.document]);
        this.ia = new ck(a);
        this.uc = this.J.H(this.uc, "nh");
        this.pj = this.J.H(dk(this.ia, this.uc, this.G.Ka().Ee() ? 0 : 50, {
            ke: !0
        }), "th")
    }
    sa(Bk, Z);
    Bk.prototype.hj = function() {
        var a = this;
        this.scrolling = !0;
        Kd(this.l, this.Gg);
        this.Gg = W(this.l, function() {
            a.scrolling = !1
        }, 150, this.J.Da("sh"))
    }
    ;
    Bk.prototype.qj = function(a) {
        a.changedTouches && 0 !== a.changedTouches.length && (Ak(a) ? (this.ia.flush(),
        this.uc(a)) : "touchmove" !== a.type || this.scrolling ? this.uc(a) : this.pj(a, this.G.stamp()))
    }
    ;
    Bk.prototype.uc = function(a, b) {
        var c = this;
        b = void 0 === b ? this.G.stamp() : b;
        if (a.type) {
            var d = xk(5)
              , e = Wb(a.changedTouches)
              , f = M(function(g) {
                c.Hd[g.identifier] || (c.Hd[g.identifier] = xj());
                var h = {
                    id: c.Hd[g.identifier],
                    x: Math.round(g.clientX),
                    y: Math.round(g.clientY),
                    force: d(g.force)
                }
                  , k = I(g, "radiusX")
                  , l = I(g, "radiusY");
                g = I(g, "rotationAngle");
                cb(c.l, k) && (h.rX = d(k));
                cb(c.l, l) && (h.rY = d(l));
                cb(c.l, g) && (h.rAngle = g);
                return h
            }, e);
            Ak(a) && M(function(g) {
                delete c.Hd[g.identifier]
            }, e);
            e = yk({
                touches: f,
                target: this.O(a.target)
            }, a);
            this.G.R("event", e, a.type, b)
        }
    }
    ;
    var Ck = {}
      , Dk = (Ck.focus = "windowfocus",
    Ck.blur = "windowblur",
    Ck.pageshow = "windowfocus",
    Ck.pagehide = "windowblur",
    Ck);
    function Ek(a, b) {
        Z.call(this, a, b, "wf");
        this.visibility = null;
        A(this.l.document.hidden) ? A(this.l.document.msHidden) ? A(this.l.document.webkitHidden) || (this.visibility = {
            hidden: "webkitHidden",
            event: "webkitvisibilitychange"
        }) : this.visibility = {
            hidden: "msHidden",
            event: "msvisibilitychange"
        } : this.visibility = {
            hidden: "hidden",
            event: "visibilitychange"
        };
        this.ze = this.J.H(this.ze, "fbe");
        this.cd = this.J.H(this.cd, "vce");
        this.Be = this.J.H(this.Be, "she")
    }
    sa(Ek, Z);
    Ek.prototype.start = function() {
        this.visibility ? (this.fb = [this.Xa.D(this.l, [this.visibility.event], C(this.cd, this, this.visibility))],
        this.cd(this.visibility)) : this.fb = [this.Xa.D(this.l, ["focus", "blur"], C(this.ze, this))];
        Rd(this.l) && this.fb.push(this.Xa.D(this.l, ["pageshow", "pagehide"], C(this.Be, this), null))
    }
    ;
    Ek.prototype.Be = function(a) {
        (a = Dk[a.type]) && this.G.R("event", {}, a)
    }
    ;
    Ek.prototype.cd = function(a) {
        this.G.R("event", {}, Dk[this.l.document[a.hidden] ? "blur" : "focus"])
    }
    ;
    Ek.prototype.ze = function(a) {
        (a = Dk[a.type]) && this.G.R("event", {}, a)
    }
    ;
    function Fk(a, b) {
        Z.call(this, a, b, "z");
        this.lh = 1;
        this.ia = new ck(a);
        this.Qc = this.J.H(this.Qc, "z")
    }
    sa(Fk, Z);
    Fk.prototype.start = function() {
        if (Gk(this)) {
            Z.prototype.start.call(this);
            this.Qc();
            var a = this.Xa.D(I(this.l, "visualViewport"), ["resize"], dk(this.ia, this.Qc, 10));
            this.fb.push(a)
        }
    }
    ;
    Fk.prototype.stop = function() {
        Z.prototype.stop.call(this);
        this.ia.flush()
    }
    ;
    Fk.prototype.Qc = function() {
        var a = Gk(this);
        if (a && a !== this.lh) {
            this.lh = a;
            var b = cf(this.l);
            this.G.R("event", {
                x: b.x,
                y: b.y,
                level: a
            }, "zoom")
        }
    }
    ;
    function Gk(a) {
        return (a = af(a.l)) ? a[2] : null
    }
    function Hk() {}
    Hk.prototype.start = function() {}
    ;
    Hk.prototype.stop = function() {}
    ;
    Hk.prototype.D = function() {}
    ;
    Hk.prototype.X = function() {}
    ;
    var Ik = {}
      , Jk = {};
    Ik.p = 500;
    var Kk = {
        i: "id",
        n: "name",
        h: "href",
        ty: "type"
    };
    Jk.h = !0;
    Jk.c = !0;
    var Lk = {
        p: function(a, b, c) {
            if (b && Mi(a, b) && b._ymp)
                return b._ymp;
            a = Si(a, b, c);
            b && (b._ymp = a);
            return a
        },
        c: function(a, b, c) {
            (a = fe(I(b, "textContent"))) && c && (c = c(b),
            c.length && Tb(N(ib("textContent"), fe, La(a)), c) && (a = ""));
            hf(b) && (a = fe(b.getAttribute && b.getAttribute("value") || a));
            return a
        }
    };
    function Mk(a, b, c, d) {
        return G(function(e, f) {
            var g = null;
            f in Kk ? g = b.getAttribute && b.getAttribute(Kk[f]) : f in Lk && (g = "p" === f ? Lk[f](a, b, void 0) : "c" === f ? Lk[f](a, b, d) : Lk[f](a, b));
            g && (g = g.slice(0, Ik[f] || 100),
            e[f] = Jk[f] ? "" + Fi(g) : g);
            return e
        }, {}, c)
    }
    ;function Nk(a) {
        a = Q(a);
        var b = a.C("dsjf") || Na({});
        a.va("dsjf", b);
        return b
    }
    function Ok(a, b, c) {
        Nk(a)(function(d) {
            d[b] = O(d[b] || {}, c)
        })
    }
    function Pk(a, b) {
        Nk(a)(function(c) {
            delete c[b]
        })
    }
    ;function Qk(a, b, c, d, e, f) {
        e = void 0 === e ? -1 : e;
        f = void 0 === f ? !1 : f;
        d = y(d) ? d(b) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT;
        if (y(c) && (f || d === a.NodeFilter.FILTER_ACCEPT) && (d && c(b),
        !Qe(b)))
            for (a = a.document.createTreeWalker(b, e, null, !1); a.nextNode() && !1 !== c(a.currentNode); )
                ;
    }
    ;var Rk = {
        "*": "+",
        "-": "/",
        Jj: "=",
        "+": "*",
        "/": "-",
        "=": "_"
    };
    function Sk(a) {
        return a ? a.replace(/[+/=]/g, function(b) {
            return Rk[b] || b
        }) : ""
    }
    function Tk(a) {
        var b = ""
          , c = 0;
        if (!a)
            return "";
        for (; a.length % 4; )
            a += "=";
        do {
            var d = Ca("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a.charAt(c++))
              , e = Ca("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a.charAt(c++))
              , f = Ca("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a.charAt(c++))
              , g = Ca("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a.charAt(c++));
            if (0 > d || 0 > e || 0 > f || 0 > g)
                return "";
            var h = d << 18 | e << 12 | f << 6 | g;
            d = h >> 16 & 255;
            e = h >> 8 & 255;
            h &= 255;
            b = 64 === f ? b + String.fromCharCode(d) : 64 === g ? b + String.fromCharCode(d, e) : b + String.fromCharCode(d, e, h)
        } while (c < a.length);
        return b
    }
    function Uk(a, b) {
        b = void 0 === b ? !1 : b;
        for (var c = a.length, d = c - c % 3, e = [], f = 0; f < d; f += 3) {
            var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
            e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[g & 63])
        }
        switch (c - d) {
        case 1:
            c = a[d] << 4;
            e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c & 63], "=", "=");
            break;
        case 2:
            c = (a[d] << 10) + (a[d + 1] << 2),
            e.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[c & 63], "=")
        }
        e = P("", e);
        return b ? Sk(e) : e
    }
    function Vk(a) {
        for (var b = "", c = 0; c < a.length; ) {
            var d = a.charCodeAt(c);
            128 > d ? (b += String.fromCharCode(d),
            c++) : 191 < d && 224 > d ? (b += String.fromCharCode((d & 31) << 6 | a.charCodeAt(c + 1) & 63),
            c += 2) : (b += String.fromCharCode((d & 15) << 12 | (a.charCodeAt(c + 1) & 63) << 6 | a.charCodeAt(c + 2) & 63),
            c += 3)
        }
        return b
    }
    ;function Wk(a, b) {
        var c = $e(a)
          , d = cf(a);
        return {
            x: b.pageX || b.clientX + d.x - (c.clientLeft || 0) || 0,
            y: b.pageY || b.clientY + d.y - (c.clientTop || 0) || 0
        }
    }
    ;var Xk = ya(Array.prototype.reverse, "reverse");
    function Yk(a) {
        for (var b = [], c = a.length - 1; 0 <= c; --c)
            b[a.length - 1 - c] = a[c];
        return b
    }
    var Zk = Xk ? function(a) {
        return Xk.call(a)
    }
    : Yk;
    var $k = "button," + P(",", M(function(a) {
        return 'input[type="' + a + '"]'
    }, ["button", "submit", "reset", "file"])) + ",a"
      , al = F($k, Cg)
      , bl = {}
      , cl = (bl.A = "h",
    bl.BUTTON = "i",
    bl.DIV = "i",
    bl.INPUT = "ty",
    bl);
    function dl(a, b, c, d) {
        return function() {
            if (qg(a, b)) {
                var e = Sa(arguments);
                return d.apply(null, la(e))
            }
        }
    }
    ;function el(a, b, c) {
        try {
            if (y(b)) {
                var d = r(Sa(arguments));
                d.next();
                d.next();
                d.next();
                var e = ka(d);
                b.apply(B(c) ? null : c, e)
            }
        } catch (f) {
            Jd(a, F(f, Fc), 0)
        }
    }
    function fl(a, b, c, d, e) {
        var f = D([a, d, e], el);
        return c.then(f, function(g) {
            f();
            Sc(a, b, g)
        })
    }
    var gl = K(md, V);
    function hl(a, b, c, d) {
        var e = Ud(a)
          , f = e.hostname;
        e = e.href;
        if (b = gl(b).url)
            a = Kg(a, b),
            f = a.hostname,
            e = a.href;
        return [d + "://" + f + "/" + c, e || ""]
    }
    var il = {
        Wj: Xa(/[/&=?#]/)
    }
      , jl = S("go.in", function(a, b, c, d) {
        c = void 0 === c ? "goal" : c;
        var e = {};
        return e.reachGoal = function(f, g, h, k) {
            if (!f || il[c] && il[c](f))
                return null;
            var l = g
              , m = h || w;
            y(g) && (m = g,
            l = void 0,
            k = h);
            g = {};
            var p = ti(a, b, "gr", (g.id = b.id,
            g.goal = f,
            g), l)
              , q = "goal" === c;
            g = pi(a, "g", b);
            var v = r(hl(a, b, f, c));
            h = v.next().value;
            v = v.next().value;
            var t = {}
              , u = {};
            g = g({
                T: {
                    Z: l
                },
                M: Og((t.ar = 1,
                t)),
                K: (u["page-url"] = h,
                u["page-ref"] = v,
                u)
            }, b).then(function() {
                q && p();
                var z = {}
                  , E = {};
                Ig(a, (E.counterKey = V(b),
                E.name = "event",
                E.data = (z.schema = c,
                z.name = f,
                z.params = l,
                z),
                E));
                d && d()
            });
            return fl(a, "g.s", g, m, k)
        }
        ,
        e
    });
    function kl(a, b) {
        return function(c) {
            Ok(a, b, c)
        }
    }
    var ll = Ja(function(a, b) {
        var c = {};
        Nk(a)(function(d) {
            c = d[b] || {}
        });
        return c
    })
      , ml = S("c.c.cc", function(a) {
        var b = Q(a)
          , c = N(ll(a), function(d) {
            var e = {};
            e = (e.clickmap = !!d.clickmap,
            e);
            return O({}, d, e)
        });
        return R(a, "g.c.cc", N(C(b.C, b, "counters", {}), td, Hb(c)))
    })
      , nl = S("gt.c.rs", function(a, b) {
        var c = V(b)
          , d = b.id
          , e = b.$
          , f = b.Dh
          , g = b.sf
          , h = D([a, c], Pk)
          , k = {};
        Ok(a, c, (k.id = d,
        k.type = +e,
        k.clickmap = f,
        k.trackHash = !!g,
        k));
        return h
    });
    function ol(a) {
        a = Q(a);
        var b = a.C("dataLayer", []);
        a.F("dataLayer", b);
        return b
    }
    function pl(a, b, c, d) {
        c = void 0 === c ? w : c;
        d = void 0 === d ? !1 : d;
        var e = Af(a);
        if (b && y(b.push)) {
            var f = b.push;
            b.push = function() {
                var g = Sa(arguments)
                  , h = r(g).next().value;
                d && e.trigger(h);
                g = f.apply(b, g);
                d || e.trigger(h);
                return g
            }
            ;
            a = {
                sa: e,
                unsubscribe: function() {
                    b.push = f
                }
            };
            c(a);
            M(e.trigger, b);
            return a
        }
    }
    function ql(a, b) {
        var c = I(b, "ymetrikaEvent");
        c && a.trigger(I(c, "type"), c)
    }
    function rl(a, b, c) {
        c = void 0 === c ? J : c;
        var d = Bf(a, "idlo");
        c(d);
        var e = F(d, ql);
        pl(a, b, function(f) {
            f.sa.D(e)
        });
        return d
    }
    ;var sl = {}
      , tl = (sl.transaction_id = "id",
    sl.item_brand = "brand",
    sl.index = "position",
    sl.item_variant = "variant",
    sl.value = "revenue",
    sl.item_category = "category",
    sl.item_list_name = "list",
    sl)
      , ul = {}
      , vl = (ul.item_id = "id",
    ul.item_name = "name",
    ul.promotion_name = "coupon",
    ul)
      , wl = {}
      , xl = (wl.promotion_name = "name",
    wl)
      , yl = {}
      , zl = (yl.promotion_name = "name",
    yl.promotion_id = "id",
    yl.item_id = "product_id",
    yl.item_name = "product_name",
    yl)
      , Al = {}
      , Bl = (Al.view_item = {
        event: "detail",
        Oa: vl,
        kb: "products"
    },
    Al.add_to_cart = {
        event: "add",
        Oa: vl,
        kb: "products"
    },
    Al.remove_from_cart = {
        event: "remove",
        Oa: vl,
        kb: "products"
    },
    Al.begin_checkout = {
        event: "checkout",
        Oa: vl,
        kb: "products"
    },
    Al.purchase = {
        event: "purchase",
        Oa: vl,
        kb: "products"
    },
    Al.view_item_list = {
        event: "impressions",
        Oa: vl
    },
    Al.select_item = {
        event: "click",
        kb: "products",
        Oa: vl
    },
    Al.view_promotion = {
        event: "promoView",
        kb: "promotions",
        Oa: zl
    },
    Al.select_promotion = {
        event: "promoClick",
        kb: "promotions",
        Oa: zl
    },
    Al)
      , Cl = S("dl.w", function(a, b, c) {
        function d() {
            var g = I(a, b);
            (e = L(g) && pl(a, g, c)) || (f = W(a, d, 1E3, "ec.dl"))
        }
        var e, f = 0;
        d();
        return function() {
            return Kd(a, f)
        }
    });
    function Dl(a, b, c, d) {
        var e = Ag[c];
        return e ? function() {
            var f = Sa(arguments);
            f = d.apply(null, la(f));
            var g = Q(a);
            g.va("mt", {});
            g = g.C("mt");
            var h = g[e];
            g[e] = h ? h + 1 : 1;
            return f
        }
        : d
    }
    ;function El(a, b, c, d) {
        xa("requestIdleCallback", a.requestIdleCallback) && xa("cancelIdleCallback", a.cancelIdleCallback) ? a.requestIdleCallback(R(a, d + ".sdl.ric", b), {
            timeout: c
        }) : W(a, b, c, d + ".sdl")
    }
    ;var Fl = ya(Array.prototype.every, "every");
    function Gl(a, b) {
        return G(function(c, d, e) {
            return c ? !!a(d, e) : !1
        }, !0, b)
    }
    var Hl = Fl ? function(a, b) {
        return Fl.call(b, a)
    }
    : Gl;
    function Il(a, b) {
        return Oa(b) || A(b) || cb(a, b) || x(b) || !!b === b
    }
    function Jl(a, b) {
        var c = Cc(a);
        b && (c.yen = b);
        return c
    }
    function Kl(a) {
        return Jl(a, "yue")
    }
    function Ll(a, b) {
        if (B(b) || !!b === b || cb(a, b) || x(b))
            return b
    }
    function Ml(a, b) {
        if (B(b))
            return b;
        var c = Ll(a, b);
        if (!B(c))
            return c;
        if (Pa(b))
            return G(function(d, e) {
                var f = r(e)
                  , g = f.next().value;
                f = f.next().value;
                d[g] = Ml(a, f);
                return d
            }, {}, sd(b));
        if (L(b))
            return M(F(a, Ml), b)
    }
    var Nl = N(Ca, La(0))
      , Ol = Ka(Nl)
      , Pl = "clientInformation globalThis this caches console cookieStore credentialless crypto customElements document documentPictureInPicture event external fence frameElement frames history indexedDB launchQueue localStorage location mozInnerScreenX mozInnerScreenY navigation navigator opener orientation origin originAgentCluster parent performance scheduler self sessionStorage sharedStorage speechSynthesis top trustedTypes visualViewport window alert atob back blur btoa cancelAnimationFrame cancelIdleCallback captureEvents clearImmediate clearInterval clearTimeout close confirm dump execScript fetch fetchLater find focus forward getComputedStyle getDefaultComputedStyle getScreenDetails getSelection matchMedia moveBy moveTo open postMessage print prompt queryLocalFonts queueMicrotask releaseEvents reportError requestAnimationFrame requestFileSystem requestIdleCallback resizeBy resizeTo scroll scrollBy scrollByLines scrollByPages scrollTo setImmediate setInterval setTimeout showDirectoryPicker showModalDialog showOpenFilePicker showSaveFilePicker sizeToContent stop structuredClone".split(" ");
    function Ql(a) {
        if (!x(a))
            throw Kl("gppns");
        if (U(a.split(".")[0], Pl))
            throw Kl("rwp");
        if (Nl(a, "on"))
            throw Kl("rwp");
    }
    function Rl(a, b) {
        var c = b.split(".")
          , d = c.pop();
        c = c.length ? I(a, P(".", c)) : a;
        if (!c)
            throw Kl("noma");
        return {
            value: I(c, d),
            parent: c,
            xc: d
        }
    }
    var Sl = Sd("giss", md);
    function Tl(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = Sl(a);
        d[b] || (d[b] = {
            gj: rg(a, O(c, {
                src: b
            })),
            state: 0
        });
        return d[b]
    }
    function Ul(a, b, c, d, e) {
        function f() {
            h.state = 1;
            c()
        }
        function g() {
            h.state = 2;
            d && d()
        }
        e = void 0 === e ? {} : e;
        var h = Tl(a, b, e);
        b = h.gj;
        e = h.state;
        b && 2 !== e ? 1 === e ? f() : (a = Qd(a),
        a.D(b, ["load"], f),
        a.D(b, ["error"], g)) : g()
    }
    var Vl = K(function(a) {
        a = I(a, "console");
        var b = I(a, "log");
        b = wa("log", b) ? C(b, a) : w;
        var c = I(a, "warn");
        c = wa("warn", c) ? C(c, a) : b;
        var d = I(a, "error");
        a = wa("error", d) ? C(d, a) : b;
        return {
            log: b,
            error: a,
            warn: c
        }
    }), Wl = {}, Xl = (Wl.akna = "The property of the value is not an array",
    Wl["ca.p.uns"] = "The url is not a string",
    Wl.noma = "Cannot access member of null or undefined object",
    Wl.rwp = "Access to restricted window property is denied",
    Wl.vnd = "Variable is not defined",
    Wl.tenf = "Called value is not a function",
    Wl.cva = "Cannot assign to constant variable",
    Wl.iat = "Invalid assignment target",
    Wl["ca.c.wenf"] = "Window element is not a function",
    Wl["ca.c.mann"] = "Cookie's max age is not a number",
    Wl["ca.c.ssuop"] = "SameSite cookie has an unknown option",
    Wl.gppns = "Window property path is not a string",
    Wl.vr = "Variable redeclaration",
    Wl.da = "Duplicate argument",
    Wl.stce = "Error creating script tag",
    Wl.wenf = "Window element is not a function",
    Wl.uns = "The url is not a string",
    Wl.ict = "Consent type is not a string",
    Wl.icl = "Consent listener is not a function",
    Wl["ca.akna"] = "The property of the value is not an array",
    Wl["ca.c.cinf"] = "Callback is not a function",
    Wl["ca.c.ia"] = "Invalid arguments",
    Wl.ies = "Invalid element selector",
    Wl["t.a.s.ev"] = "Element visibility tag was already started",
    Wl["t.a.s.g"] = "Group tag was already started",
    Wl["t.a.s.sd"] = "Scroll depth tag was already started",
    Wl["t.a.s.t"] = "Timer tag was already started",
    Wl.cdau = "Consent default arrived after the value was updated",
    Wl), Yl = {}, Zl = (Yl.c = "Container",
    Yl.t = "Tag",
    Yl.tr = "Trigger",
    Yl.v = "Variable",
    Yl), $l = w, am, bm = K(function(a, b, c) {
        $l = b;
        c && (am = c)
    });
    function cm(a, b, c, d) {
        return function() {
            var e = b || Fc;
            try {
                return e.apply(null, arguments)
            } catch (f) {
                e = y(d) ? d.apply(null, arguments) : d,
                $l(a, f, e)
            }
            return c
        }
    }
    function dm(a, b, c, d) {
        var e = Ue(a)("img");
        e.src = b;
        b = F(e, Ve);
        var f = F(void 0, J);
        e.onerror = N(b, f, d);
        e.onload = N(b, f, c);
        cc(a) && (a = Ze(a),
        O(e.style, {
            position: "absolute",
            visibility: "hidden",
            width: "0px",
            height: "0px"
        }),
        a.appendChild(e))
    }
    var em = K(function(a, b) {
        return G(function(c, d) {
            c[d] = a[d];
            return c
        }, {}, b)
    });
    function fm(a, b, c) {
        c = void 0 === c ? !0 : c;
        return G(function(d, e) {
            var f = r(e.split("="))
              , g = f.next().value;
            f = ka(f);
            fe(g) === b && (g = fe(P("=", f)),
            d.push(c ? ae(g) : g));
            return d
        }, [], a.document.cookie.split(";"))
    }
    function gm(a, b) {
        if (A(b))
            var c = "undefined";
        else if (Oa(b))
            c = "null";
        else {
            try {
                c = cb(a, b)
            } catch (d) {
                c = !1
            }
            c = c ? "number" : x(b) ? "string" : !0 === b || !1 === b ? "boolean" : y(b) ? "function" : L(b) ? "array" : "object"
        }
        return c
    }
    function hm(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return "query" === b ? a.query : "queryVar" === b ? (a = c ? be(a.query)[c] : void 0,
        a) : "protocol" === b ? a.protocol : "host" === b ? d ? Wd(a.host) : a.host : "port" === b ? (b = a.protocol,
        a = fb(a.port) ? a.port : "http:" === b ? "80" : "https:" === b ? "443" : void 0,
        a) : "path" === b ? a.pathname : "fragment" === b ? a.hash.replace("#", "") : "extension" === b ? (a = a.pathname.split("."),
        ((1 < a.length ? a.pop() : void 0) || "").split("/")[0]) : a.href
    }
    var im = "protocol host port path query queryVar extension fragment href".split(" ")
      , jm = K(function(a) {
        var b = Ud(a).search;
        b = be(b.substring(1))._ytm_preview;
        var c = ue(a, "");
        a = c.F;
        c = c.C;
        return b ? (a("_ytm_preview", b, 10),
        b) : c("_ytm_preview")
    });
    function km(a) {
        switch (a) {
        case 2:
            return "read";
        case 1:
            return "write";
        default:
            throw Cc("usoc");
        }
    }
    function lm(a) {
        switch (a) {
        case "read":
            return 2;
        case "write":
            return 1;
        case "execute":
            return 4
        }
    }
    function mm(a, b, c, d, e) {
        if (!d)
            return !1;
        c = (a = "set_cookies" === c) ? 1 : 2;
        return a && !Pa(e) ? !1 : b.na({
            permissionType: "cookies",
            L: {
                name: d,
                operation: c,
                options: e
            }
        })
    }
    function nm(a, b, c, d) {
        if (!d)
            return !1;
        a = "iframe";
        "load_script" === c ? a = "loadScript" : "send_pixel" === c && (a = "pixel");
        return b.na({
            permissionType: a,
            L: {
                url: d
            }
        })
    }
    function om(a, b, c, d, e) {
        return b.na({
            permissionType: "get_url" === c ? "url" : "referrer",
            L: {
                urlComponent: d || "href",
                variableName: x(e) ? e : void 0
            }
        })
    }
    var pm = {}
      , qm = (pm.access_consent = function(a, b, c, d, e) {
        return d && x(d) && e && x(e) ? (a = lm(e)) && 4 !== a ? b.na({
            permissionType: "accessConsent",
            L: {
                key: d,
                operation: a
            }
        }) : !1 : !1
    }
    ,
    pm.access_globals = function(a, b, c, d, e) {
        return d && x(d) && x(e) ? (a = lm(d)) ? b.na({
            permissionType: "globals",
            L: {
                key: e,
                operation: a
            }
        }) : !1 : !1
    }
    ,
    pm.access_local_storage = function(a, b, c, d, e) {
        return d && x(d) && x(e) ? (a = lm(d)) && 4 !== a ? b.na({
            permissionType: "localStorage",
            L: {
                key: e,
                operation: a
            }
        }) : !1 : !1
    }
    ,
    pm.access_template_storage = function(a, b) {
        return b.na({
            permissionType: "templateStorage",
            L: null
        })
    }
    ,
    pm.get_cookies = mm,
    pm.get_referrer = om,
    pm.get_url = om,
    pm.inject_hidden_iframe = nm,
    pm.load_script = nm,
    pm.logging = function(a, b) {
        return b.na({
            permissionType: "log",
            L: {
                logLevel: jm(a) ? 1 : 0
            }
        })
    }
    ,
    pm.read_data_layer = function(a, b, c, d) {
        return d ? b.na({
            permissionType: "dataLayer",
            L: {
                key: d,
                operation: 2
            }
        }) : !1
    }
    ,
    pm.read_title = function(a, b) {
        return b.na({
            permissionType: "readTitle",
            L: null
        })
    }
    ,
    pm.send_pixel = nm,
    pm.set_cookies = mm,
    pm)
      , rm = "protocol host port path query queryVar extension href".split(" ")
      , sm = K(md, function(a, b) {
        return a + "_" + b
    })
      , tm = /\+/g
      , um = /^\?/
      , vm = /[/:]|^[#?]/;
    function wm(a) {
        return (a = a ? a.replace(um, "") : "") ? G(function(b, c) {
            var d = r(c.split("="))
              , e = d.next().value;
            d = ka(d);
            d = P("=", d);
            e = ae(e.replace(tm, " "));
            d = ae(d.replace(tm, " "));
            if (H(b, e)) {
                var f = b[e];
                L(f) ? f.push(d) : b[e] = [f, d]
            } else
                b[e] = d;
            return b
        }, {}, a.split("&")) : {}
    }
    var xm = {}
      , zm = (xm.callInWindow = function(a) {
        var b = a.l
          , c = a.W;
        return function(d) {
            var e = ta.apply(1, arguments);
            Ql(d);
            c.checkPermission({
                permissionType: "globals",
                L: {
                    key: d,
                    operation: 4
                }
            });
            var f = Rl(b, d)
              , g = f.value;
            f = f.parent;
            if (!y(g))
                throw Kl("ca.c.wenf");
            e = g.apply(f, e);
            return Ml(b, e)
        }
    }
    ,
    xm.callLater = function(a) {
        var b = a.l;
        return function(c) {
            if (!y(c))
                throw Jl("ca.c.cinf");
            W(b, c, 0, "cr.cl")
        }
    }
    ,
    xm.copyFromDataLayer = function(a) {
        var b = a.l
          , c = a.W
          , d = a.event;
        return function(e) {
            if (!d)
                throw Jl("No dataLayer data");
            c.checkPermission({
                permissionType: "dataLayer",
                L: {
                    key: e,
                    operation: 2
                }
            });
            return Ml(b, I(d, e))
        }
    }
    ,
    xm.copyFromWindow = function(a) {
        var b = a.l
          , c = a.W;
        return function(d) {
            Ql(d);
            c.checkPermission({
                permissionType: "globals",
                L: {
                    operation: 2,
                    key: d
                }
            });
            return Ml(b, I(b, d))
        }
    }
    ,
    xm.createArgumentsQueue = function(a) {
        var b = a.l
          , c = a.W;
        return function(d, e) {
            function f() {
                return g.push(arguments)
            }
            c.checkPermission({
                permissionType: "globals",
                L: {
                    key: d,
                    operation: 2
                }
            });
            c.checkPermission({
                permissionType: "globals",
                L: {
                    key: d,
                    operation: 1
                }
            });
            c.checkPermission({
                permissionType: "globals",
                L: {
                    key: e,
                    operation: 2
                }
            });
            c.checkPermission({
                permissionType: "globals",
                L: {
                    key: e,
                    operation: 1
                }
            });
            Ql(d);
            Ql(e);
            var g = []
              , h = Rl(b, d);
            h.value || (h.parent[h.xc] = f);
            h = Rl(b, e);
            if (h.value) {
                if (!L(h.value))
                    throw Kl("ca.akna");
                g = h.value
            } else
                h.parent[h.xc] = g;
            return f
        }
    }
    ,
    xm.createQueue = function(a) {
        var b = a.l
          , c = a.W;
        return function(d) {
            c.checkPermission({
                permissionType: "globals",
                L: {
                    key: d,
                    operation: 2
                }
            });
            c.checkPermission({
                permissionType: "globals",
                L: {
                    key: d,
                    operation: 1
                }
            });
            Ql(d);
            var e = Rl(b, d);
            d = e.value;
            var f = e.parent;
            e = e.xc;
            if (!d)
                f[e] = [];
            else if (!L(d))
                throw Kl("akna");
            return C(f[e].push, f[e])
        }
    }
    ,
    xm.decodeUri = function(a) {
        var b = a.l;
        return function(c) {
            try {
                return b.decodeURI(c)
            } catch (d) {}
        }
    }
    ,
    xm.decodeUriComponent = function(a) {
        var b = a.l;
        return function(c) {
            try {
                return b.decodeURIComponent(c)
            } catch (d) {}
        }
    }
    ,
    xm.encodeUri = function(a) {
        var b = a.l;
        return function(c) {
            try {
                return b.encodeURI(c)
            } catch (d) {}
        }
    }
    ,
    xm.encodeUriComponent = function(a) {
        var b = a.l;
        return function(c) {
            try {
                return b.encodeURIComponent(c)
            } catch (d) {}
        }
    }
    ,
    xm.fromBase64 = function(a) {
        var b = a.l;
        return function(c) {
            try {
                return b.atob(c)
            } catch (d) {}
        }
    }
    ,
    xm.getCookieValues = function(a) {
        var b = a.l
          , c = a.W;
        return function(d, e) {
            c.checkPermission({
                permissionType: "cookies",
                L: {
                    name: d,
                    operation: 2
                }
            });
            return fm(b, d, e)
        }
    }
    ,
    xm.getTimestamp = function(a) {
        var b = a.l;
        return function() {
            return Be(b)(ye)
        }
    }
    ,
    xm.getType = function(a) {
        return F(a.l, gm)
    }
    ,
    xm.getReferrerUrl = function(a) {
        var b = a.l
          , c = a.W;
        return function(d, e) {
            var f = U(d, rm) ? d : "href";
            c.checkPermission({
                permissionType: "referrer",
                L: {
                    urlComponent: f,
                    variableName: e
                }
            });
            var g = I(b, "document.referrer");
            if (g)
                return g = Kg(b, g),
                hm(g, f, e)
        }
    }
    ,
    xm.getUrl = function(a) {
        var b = a.l
          , c = a.W;
        return function(d, e) {
            var f = U(d, im) ? d : "href";
            c.checkPermission({
                permissionType: "url",
                L: {
                    urlComponent: f,
                    variableName: e
                }
            });
            var g = Ud(b);
            g.query = g.search.replace(/^\?/, "");
            return hm(g, f, e)
        }
    }
    ,
    xm.injectHiddenIframe = function(a) {
        var b = a.l
          , c = a.W;
        return function(d, e) {
            e = void 0 === e ? w : e;
            c.checkPermission({
                permissionType: "iframe",
                L: {
                    url: d
                }
            });
            var f = Ue(b)("iframe");
            O(f.style, {
                display: "none",
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            f.src = d;
            f.onload = function() {
                return e()
            }
            ;
            f.onerror = w;
            Ze(b).appendChild(f)
        }
    }
    ,
    xm.JSON = function(a) {
        var b = a.l;
        return {
            parse: function(c) {
                try {
                    return b.JSON.parse("" + c)
                } catch (d) {}
            },
            stringify: function(c) {
                try {
                    return b.JSON.stringify(c)
                } catch (d) {}
            }
        }
    }
    ,
    xm.loadScript = function(a) {
        var b = a.l
          , c = a.W;
        return function(d, e, f) {
            c.checkPermission({
                permissionType: "loadScript",
                L: {
                    url: d
                }
            });
            Ul(b, d, y(e) ? cm("ls.ol", function() {
                return e.apply(null)
            }) : w, y(f) ? cm("ls.oe", function() {
                return f.apply(null)
            }) : void 0)
        }
    }
    ,
    xm.localStorage = function(a) {
        var b = a.W
          , c = a.l.localStorage;
        return {
            getItem: function(d) {
                b.checkPermission({
                    permissionType: "localStorage",
                    L: {
                        key: d,
                        operation: 2
                    }
                });
                return c.getItem(d)
            },
            setItem: function(d, e) {
                b.checkPermission({
                    permissionType: "localStorage",
                    L: {
                        key: d,
                        operation: 1
                    }
                });
                c.setItem(d, e)
            },
            removeItem: function(d) {
                b.checkPermission({
                    permissionType: "localStorage",
                    L: {
                        key: d,
                        operation: 1
                    }
                });
                c.removeItem(d)
            }
        }
    }
    ,
    xm.logToConsole = function(a) {
        var b = a.l
          , c = a.W
          , d = Vl(b).log
          , e = jm(b) ? 1 : 0;
        return function() {
            var f = ta.apply(0, arguments);
            c.na({
                permissionType: "log",
                L: {
                    logLevel: e
                }
            }) && d.apply(null, la(f))
        }
    }
    ,
    xm.makeNumber = function() {
        return function(a, b) {
            return A(a) ? +b : +a
        }
    }
    ,
    xm.makeTableMap = function() {
        return function(a, b, c) {
            if (!L(a) || !x(b) || !x(c))
                throw Kl("ca.c.ia");
            a = G(function(d, e) {
                Pa(e) && H(e, b) && H(e, c) && (d["" + e[b]] = e[c]);
                return d
            }, {}, a);
            return td(a).length ? a : null
        }
    }
    ,
    xm.Math = function(a) {
        return em(a.l.Math, "abs floor ceil round max min pow sqrt".split(" "))
    }
    ,
    xm.Object = function(a) {
        var b = a.l;
        return {
            keys: td,
            values: wd,
            freeze: function(c) {
                return b.Object.freeze(c)
            },
            entries: sd,
            "delete": function(c, d) {
                if (!c || !H(c, d) || L(c) || c === b)
                    return !1;
                try {
                    return delete c[d]
                } catch (e) {
                    return !1
                }
            }
        }
    }
    ,
    xm.parseUrl = function(a) {
        var b = a.l;
        return function(c) {
            if (x(c) && c && vm.test(c)) {
                c = Kg(b, c);
                var d = c.protocol
                  , e = c.host;
                if (d && ":" !== d)
                    return {
                        href: c.href,
                        origin: e ? d + "//" + e : "null",
                        protocol: d,
                        host: e || "",
                        hostname: c.hostname,
                        port: c.port,
                        pathname: c.pathname,
                        search: c.search,
                        searchParams: wm(c.search),
                        hash: c.hash
                    }
            }
        }
    }
    ,
    xm.queryPermission = function(a) {
        var b = a.l
          , c = a.W;
        return function(d, e, f) {
            return (A(e) || x(e)) && H(qm, d) ? (0,
            qm[d])(b, c, d, e, f) : !1
        }
    }
    ,
    xm.readTitle = function(a) {
        var b = a.l
          , c = a.W;
        return function() {
            c.checkPermission({
                permissionType: "readTitle",
                L: null
            });
            return b.document.title
        }
    }
    ,
    xm.sendPixel = function(a) {
        var b = a.W
          , c = a.l;
        return function(d, e, f) {
            e = void 0 === e ? w : e;
            f = void 0 === f ? w : f;
            if (!x(d))
                throw Kl("ca.p.uns");
            b.checkPermission({
                permissionType: "pixel",
                L: {
                    url: d
                }
            });
            dm(c, d, e, f)
        }
    }
    ,
    xm.setCookie = function(a) {
        var b = a.l
          , c = a.W;
        return function(d, e, f, g) {
            f = void 0 === f ? {} : f;
            g = void 0 === g ? !0 : g;
            c.checkPermission({
                permissionType: "cookies",
                L: {
                    name: d,
                    operation: 1,
                    options: f
                }
            });
            e = g ? $d(e) : e;
            d = d + "=" + e + ";";
            if (f) {
                H(f, "domain") && (d += " Domain=" + f.domain + ";");
                H(f, "path") && (d += " Path=" + f.path + ";");
                H(f, "expires") && (d += " Expires=" + f.expires + ";");
                if (H(f, "max-age")) {
                    if (!cb(b, f["max-age"]))
                        throw Kl("ca.c.mann");
                    d += " Max-Age=" + f["max-age"] + ";"
                }
                if (H(f, "sameSite")) {
                    if (!U(f.sameSite, ["Lax", "Strict", "None"]))
                        throw Kl("ca.c.ssuop");
                    d += " Same-Site=" + f.sameSite + ";"
                }
                H(f, "secure") && f.secure && (d += " Secure;")
            }
            b.document.cookie = d
        }
    }
    ,
    xm.setInWindow = function(a) {
        var b = a.l
          , c = a.W;
        return function(d, e, f) {
            f = void 0 === f ? !1 : f;
            c.checkPermission({
                permissionType: "globals",
                L: {
                    key: d,
                    operation: 1
                }
            });
            Ql(d);
            try {
                var g = Rl(b, d)
                  , h = g.parent
                  , k = g.xc;
                if (!f && H(h, k))
                    return !1;
                h[k] = e;
                return !0
            } catch (l) {
                return !1
            }
        }
    }
    ,
    xm.checkInWindow = function(a) {
        var b = a.l
          , c = a.W;
        return function(d, e) {
            Ql(d);
            c.checkPermission({
                permissionType: "globals",
                L: {
                    operation: 2,
                    key: d
                }
            });
            try {
                var f = Rl(b, d)
                  , g = f.value
                  , h = H(f.parent, f.xc);
                if (!e || !h)
                    return h;
                var k = gm(b, g);
                return h && k === e
            } catch (l) {
                if ("noma" === I(l, "message"))
                    return !1;
                throw l;
            }
        }
    }
    ,
    xm.templateStorage = function(a) {
        function b(e) {
            c.checkPermission({
                permissionType: "templateStorage",
                L: null
            });
            delete d[e]
        }
        var c = a.W
          , d = sm(a.containerId, a.bj);
        return {
            getItem: function(e) {
                c.checkPermission({
                    permissionType: "templateStorage",
                    L: null
                });
                return d[e]
            },
            setItem: function(e, f) {
                c.checkPermission({
                    permissionType: "templateStorage",
                    L: null
                });
                d[e] = f
            },
            removeItem: b,
            clear: function() {
                c.checkPermission({
                    permissionType: "templateStorage",
                    L: null
                });
                M(b, td(d))
            }
        }
    }
    ,
    xm);
    function Am(a) {
        return function(b) {
            var c = b.bf
              , d = b.W;
            return function(e) {
                Pa(e) && (M(function(f) {
                    d.checkPermission({
                        permissionType: "accessConsent",
                        L: {
                            key: f,
                            operation: 1
                        }
                    })
                }, td(e)),
                c.Nc({
                    event: "ytm.consent",
                    ytm: {
                        action: a,
                        Vb: e,
                        eventId: xj()
                    }
                }))
            }
        }
    }
    var Bm = Am("default")
      , Cm = Am("update");
    function Dm(a) {
        if (!a)
            return a;
        if (!x(a) && "function" === typeof a[Symbol.iterator]) {
            var b = L(a) ? a : Qa(a);
            return M(Dm, b)
        }
        if (Pa(a)) {
            var c = {};
            M(function(d) {
                c[d] = Dm(a[d])
            }, td(a));
            return c
        }
        return a
    }
    function Em(a) {
        return {
            compilerVersion: a.compilerVersion,
            containerId: a.containerId,
            containerVersion: a.containerVersion,
            counter: Dm(a.counter),
            permissions: Dm(a.permissions),
            tags: Dm(a.tags),
            triggers: Dm(a.triggers),
            variables: Dm(a.variables)
        }
    }
    function Fm(a) {
        a = H(zm, a) ? zm[a] : void 0;
        if (B(a))
            throw Jl("uca");
        return a
    }
    function Gm(a, b) {
        for (var c = a.length; 0 < c; ) {
            var d = a[--c];
            if (H(d.Bf, b))
                return d.Bf[b]
        }
    }
    function Hm(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? {} : b;
        return {
            Bf: a,
            methods: b,
            Yc: !0
        }
    }
    function Im(a, b, c) {
        b = void 0 === b ? {} : b;
        c = void 0 === c ? {} : c;
        return a.concat(Hm(b, c))
    }
    function Jm(a, b, c, d) {
        for (var e = a.length - 1; 0 <= e; --e) {
            var f = a[e];
            f.Yc = !1;
            if (H(f.methods, b)) {
                f.methods[b](d ? d() : void 0);
                return
            }
        }
        throw Jl(c);
    }
    var Km = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim toString".split(" ")
      , Lm = ya(Array.prototype.reduceRight, "reduceRight");
    function Mm(a, b, c) {
        for (var d = c.length - 1; 0 <= d; )
            b = a(b, c[d], d),
            --d;
        return b
    }
    var Nm = Lm ? function(a, b, c) {
        return Lm.call(c, a, b)
    }
    : Mm
      , Om = "concat every filter forEach indexOf join map pop push reduce reduceRight reverse shift slice some sort splice toString unshift".split(" ");
    function Pm(a, b) {
        var c = {};
        return (c.concat = C(Array.prototype.concat, a),
        c.every = Ka(Hl)(a),
        c.filter = Ka(Dd)(a),
        c.forEach = Ka(M)(a),
        c.indexOf = Ka(ob)(a),
        c.join = Ka(P)(a),
        c.map = Ka(M)(a),
        c.pop = C(Array.prototype.pop, a),
        c.push = C(Array.prototype.push, a),
        c.reduce = function(d, e) {
            return G(d, e, a)
        }
        ,
        c.reduceRight = function(d, e) {
            return Nm(d, e, a)
        }
        ,
        c.reverse = F(a, Zk),
        c.shift = C(Array.prototype.shift, a),
        c.slice = C(Array.prototype.slice, a),
        c.some = Ka(Tb)(a),
        c.sort = Ka(uj)(a),
        c.splice = C(Array.prototype.splice, a),
        c.toString = F(a, Ia),
        c.unshift = C(Array.prototype.unshift, a),
        c)[b]
    }
    function Qm(a) {
        return L(a) && 35 === a[0]
    }
    function Rm(a, b, c) {
        var d = r(b);
        d.next();
        b = d.next().value;
        d = d.next().value;
        b = Sm(a, b);
        a = Sm(a, d);
        if (B(b))
            throw Kl("noma");
        if ("number" === typeof b)
            c = c && "toString" === a ? C(Number.prototype.toString, b) : void 0;
        else if (b === !!b)
            c = c && "toString" === a ? F(b, Ia) : void 0;
        else if (L(b))
            c = c && U(a, Om) ? Pm(b, a) : H(b, "" + a) ? b[a] : void 0;
        else if (x(b))
            c && U(a, Km) ? (c = {},
            c = (c.charAt = C(String.prototype.charAt, b),
            c.concat = C(String.prototype.concat, b),
            c.indexOf = F(b, Ca),
            c.lastIndexOf = F(b, Ga),
            c.match = C(String.prototype.match, b),
            c.replace = C(String.prototype.replace, b),
            c.search = C(String.prototype.search, b),
            c.slice = C(String.prototype.slice, b),
            c.split = C(String.prototype.split, b),
            c.substring = C(String.prototype.substring, b),
            c.toLocaleLowerCase = C(String.prototype.toLocaleLowerCase, b),
            c.toLocaleUpperCase = C(String.prototype.toLocaleUpperCase, b),
            c.toLowerCase = C(String.prototype.toLowerCase, b),
            c.toUpperCase = C(String.prototype.toUpperCase, b),
            c.trim = F(b, fe),
            c.toString = F(b, Ia),
            c)[a]) : c = H(b, "" + a) ? b[a] : void 0;
        else if (Pa(b))
            a: {
                if (c) {
                    if ("toString" === a) {
                        c = F(b, Ia);
                        break a
                    }
                    if ("hasOwnProperty" === a) {
                        c = F(b, H);
                        break a
                    }
                }
                c = H(b, "" + a) ? b[a] : void 0
            }
        else
            c = b["" + a];
        return c
    }
    function Tm(a, b) {
        var c = r(b);
        c.next();
        var d = c.next().value
          , e = c.next().value
          , f = c.next().value
          , g = M(J, a);
        return function() {
            var h = arguments
              , k = G(function(m, p, q) {
                if (m[p])
                    throw Kl("da");
                m[p] = {
                    kind: 1,
                    value: h[q]
                };
                return m
            }, {}, e);
            d && !U(d, e) && (k[d] = {
                kind: 0,
                value: d
            });
            var l;
            Um(g, f, k, {
                "return": function(m) {
                    l = m
                }
            });
            return l
        }
    }
    function Vm(a) {
        return L(a) && 42 === a[0]
    }
    function Wm(a, b) {
        var c = r(b);
        c.next();
        c = ka(c);
        return G(function(d, e) {
            var f = r(e)
              , g = f.next().value;
            f = f.next().value;
            g = Sm(a, g);
            f = Sm(a, f);
            d["" + g] = f;
            return d
        }, {}, c)
    }
    function Xm(a) {
        return L(a) && 40 === a[0]
    }
    function Ym(a, b) {
        var c = r(b);
        c.next();
        c = ka(c);
        return M(function(d) {
            return Sm(a, d)
        }, c)
    }
    function Zm(a, b) {
        var c = r(b);
        c.next();
        var d = c.next().value
          , e = c.next().value;
        c = c.next().value;
        e = Sm(a, e);
        c = Sm(a, c);
        switch (d) {
        case "==":
            return e == c;
        case "!=":
            return e != c;
        case "===":
            return e === c;
        case "!==":
            return e !== c;
        case "<":
            return e < c;
        case "<=":
            return e <= c;
        case ">":
            return e > c;
        case ">=":
            return e >= c;
        case "<<":
            return e << c;
        case ">>":
            return e >> c;
        case ">>>":
            return e >>> c;
        case "+":
            return e + c;
        case "-":
            return e - c;
        case "*":
            return e * c;
        case "/":
            return e / c;
        case "%":
            return e % c;
        case "|":
            return e | c;
        case "^":
            return e ^ c;
        case "&":
            return e & c;
        case "in":
            return e in c;
        case "instanceof":
            return e instanceof c;
        default:
            throw Jl("uo");
        }
    }
    function $m(a, b) {
        var c = r(b);
        c.next();
        var d = c.next().value;
        c = c.next().value;
        c = Sm(a, c);
        switch (d) {
        case "+":
            return +c;
        case "!":
            return !c;
        case "-":
            return -c;
        case "~":
            return ~c;
        default:
            throw Jl("uo");
        }
    }
    function an(a, b, c) {
        c = void 0 === c ? [] : c;
        if (Xm(b)) {
            b = r(b);
            b.next();
            b = b.next().value;
            a = Gm(a, b);
            if (!a)
                throw Kl("vnd");
            if (0 === a.kind && 0 === c.length)
                throw Kl("cva");
            return {
                cj: c,
                Aj: a
            }
        }
        if (Qm(b)) {
            var d = r(b);
            d.next();
            b = d.next().value;
            d = d.next().value;
            d = Sm(a, d);
            c.unshift("" + d);
            return an(a, b, c)
        }
        throw Kl("iat");
    }
    function bn(a, b, c, d) {
        b = an(a, b);
        a = b.Aj;
        var e = b.cj;
        e.unshift("value");
        b = e.pop();
        a = G(function(f, g) {
            return f[g]
        }, a, e);
        switch (d) {
        case "=":
            return a[b] = c;
        case "+=":
            return a[b] += c;
        case "-=":
            return a[b] -= c;
        case "*=":
            return a[b] *= c;
        case "/=":
            return a[b] /= c;
        case "%=":
            return a[b] %= c;
        case "<<=":
            return a[b] <<= c;
        case ">>=":
            return a[b] >>= c;
        case ">>>=":
            return a[b] >>>= c;
        case "|=":
            return a[b] |= c;
        case "^=":
            return a[b] ^= c;
        case "&=":
            return a[b] &= c;
        default:
            throw Jl("uo");
        }
    }
    function cn(a, b) {
        var c = r(b);
        c.next();
        var d = c.next().value
          , e = c.next().value;
        c = c.next().value;
        c = Sm(a, c);
        return bn(a, e, c, d)
    }
    function Sm(a, b) {
        if (x(b) || "[object Number]" === Object.prototype.toString.call(b) || !!b === b || Vm(b))
            return Vm(b) ? null : b;
        if (Xm(b)) {
            var c = r(b);
            c.next();
            c = c.next().value;
            c = Gm(a, c);
            if (!c)
                throw Kl("vnd");
            return c.value
        }
        if (L(b) && 37 === b[0]) {
            var d = r(b);
            d.next();
            c = d.next().value;
            d = ka(d);
            c = Qm(c) ? Rm(a, c, !0) : Sm(a, c);
            if (!y(c))
                throw Kl("tenf");
            d = M(F(a, Sm), d);
            return c.apply(null, d)
        }
        if (L(b) && 24 === b[0])
            return Tm(a, b);
        if (Qm(b))
            return Rm(a, b);
        if (L(b) && 23 === b[0])
            return Wm(a, b);
        if (L(b) && 22 === b[0])
            return Ym(a, b);
        if (L(b) && 29 === b[0])
            return Zm(a, b);
        if (L(b) && 25 === b[0])
            return $m(a, b);
        if (L(b) && 27 === b[0]) {
            d = r(b);
            d.next();
            var e = d.next().value;
            c = d.next().value;
            d = d.next().value;
            switch (e) {
            case "++":
                e = "+=";
                break;
            case "--":
                e = "-=";
                break;
            default:
                throw Jl("uo");
            }
            c ? c = bn(a, d, 1, e) : (c = Sm(a, d),
            bn(a, d, 1, e));
            return c
        }
        if (L(b) && 31 === b[0])
            return cn(a, b);
        if (L(b) && 33 === b[0]) {
            c = r(b);
            c.next();
            d = c.next().value;
            e = c.next().value;
            c = c.next().value;
            if ("&&" === d)
                c = (d = Sm(a, e)) ? Sm(a, c) : d;
            else if ("||" === d)
                c = (d = Sm(a, e)) ? d : Sm(a, c);
            else
                throw Jl("uo");
            return c
        }
        if (L(b) && 36 === b[0])
            return e = r(b),
            e.next(),
            d = e.next().value,
            c = e.next().value,
            e = e.next().value,
            d = Sm(a, d),
            Sm(a, d ? c : e)
    }
    function dn(a) {
        return L(a) && (18 === a[0] || 19 === a[0])
    }
    function en(a, b) {
        var c = r(b)
          , d = c.next().value;
        c = ka(c);
        var e = 18 === d;
        M(function(f) {
            var g = r(f)
              , h = g.next().value;
            g = g.next().value;
            if (e && 1 === f.length)
                throw Jl("mca");
            f = a[a.length - 1].Bf;
            if (H(f, h))
                throw Kl("vr");
            g = A(g) ? g : Sm(a, g);
            f[h] = {
                kind: e ? 0 : 1,
                value: g
            }
        }, c)
    }
    function fn(a, b) {
        var c = r(b);
        c.next();
        var d = c.next().value;
        Jm(a, "return", "irs", function() {
            return A(d) ? d : Sm(a, d)
        })
    }
    function gn(a) {
        var b = {
            Wd: !1
        };
        a = Im(a, void 0, {
            "continue": function() {
                b.Wd = !0
            },
            "break": w
        });
        b.stack = a;
        b.Jf = a[a.length - 1];
        return b
    }
    function hn(a, b) {
        var c = a.Jf;
        jn(a.stack, b);
        a.Wd && (c.Yc = !0,
        a.Wd = !1);
        return c.Yc
    }
    function kn(a, b) {
        b = void 0 === b ? !1 : b;
        if (B(a))
            return [];
        var c = Dd(function(f) {
            return (f = Object.getOwnPropertyDescriptor(a, f)) ? f.enumerable : !1
        }, Object.getOwnPropertyNames(a))
          , d = Object.getPrototypeOf(a)
          , e = d ? c.concat(kn(d, !0)) : c;
        return b ? e : Dd(function(f, g) {
            return ob(f, e) === g
        }, e)
    }
    function jn(a, b) {
        if (L(b) && 3 === b[0])
            Um(a, b);
        else if (dn(b))
            en(a, b);
        else if (L(b) && 2 === b[0]) {
            var c = r(b);
            c.next();
            c = c.next().value;
            Sm(a, c)
        } else if (L(b) && 7 === b[0]) {
            var d = r(b);
            d.next();
            c = d.next().value;
            var e = d.next().value;
            d = d.next().value;
            Sm(a, c) ? jn(a, e) : d && jn(a, d)
        } else if (8 === b[0]) {
            c = r(b);
            c.next();
            var f = c.next().value;
            c = ka(c);
            d = e = !1;
            var g = []
              , h = [];
            f = Sm(a, f);
            for (var k = 0; k < c.length; k += 1) {
                var l = r(c[k]);
                l.next();
                var m = l.next().value;
                l = ka(l);
                var p = Oa(m);
                d = d || p;
                p || (e = e || Sm(a, m) === f);
                e && (g = g.concat(l));
                d && (h = h.concat(l))
            }
            Um(a, [3].concat(la(e ? g : h)), {}, {
                "break": w
            })
        } else if (L(b) && 4 === b[0])
            fn(a, b);
        else if (L(b) && 5 === b[0])
            Jm(a, "break", "ibs");
        else if (L(b) && 6 === b[0])
            Jm(a, "continue", "ics");
        else if (L(b) && 15 === b[0])
            for (g = r(b),
            g.next(),
            d = g.next().value,
            c = g.next().value,
            e = g.next().value,
            g = g.next().value,
            h = gn(a),
            d && (dn(d) ? en(h.stack, d) : Sm(h.stack, d)),
            d = !0; d && (!c || Sm(h.stack, c)); )
                d = hn(h, g),
                e && d && Sm(h.stack, e);
        else if (L(b) && 16 === b[0])
            for (e = r(b),
            e.next(),
            c = e.next().value,
            g = e.next().value,
            e = e.next().value,
            d = gn(a),
            g = Sm(d.stack, g),
            g = kn(g),
            f = !0,
            h = 0; f && h < g.length; h += 1)
                f = g[h],
                dn(c) ? (k = Hm(),
                0 < h && d.stack.pop(),
                d.stack.push(k),
                d.Jf = k,
                m = r(c),
                k = m.next().value,
                m = r(m.next().value).next().value,
                en(d.stack, [k, [m, f]])) : cn(d.stack, [31, "=", c, f]),
                f = hn(d, e)
    }
    function Um(a, b, c, d) {
        b = r(b);
        b.next();
        b = ka(b);
        a = Im(a, c, d);
        c = a[a.length - 1];
        for (d = 0; d < b.length && c.Yc; d += 1)
            jn(a, b[d])
    }
    function ln(a, b, c, d, e) {
        b = r(b);
        b.next();
        var f = b.next().value;
        b = ka(b);
        a = {
            W: c.W,
            bf: c.bf,
            l: a,
            bj: f,
            containerId: c.containerId,
            event: c.event
        };
        f = {};
        c = O(c.data, (f.ytmOnFailure = function() {
            return e()
        }
        ,
        f.ytmOnSuccess = function() {
            return d()
        }
        ,
        f));
        var g;
        f = {};
        c = Im([], (f.undefined = {
            kind: 0,
            value: void 0
        },
        f.require = {
            kind: 0,
            value: N(Fm, Ka(Oc)(a))
        },
        f.data = {
            kind: 0,
            value: c
        },
        f), {
            "return": function(h) {
                g = h
            }
        });
        Um(c, [3].concat(la(b)));
        return g
    }
    function mn(a, b, c, d) {
        var e = b.defaultValue
          , f = c(b.key);
        if (f)
            return d.checkPermission({
                Wa: b,
                permissionType: "dataLayer",
                L: {
                    key: f,
                    operation: 2
                }
            }),
            a = I(a, f),
            B(a) ? e ? c(e) : void 0 : a
    }
    var nn = K(function(a, b, c) {
        b = void 0 === c.min ? 0 : c.min;
        b = a.Math.random() * ((void 0 === c.max ? 2147483647 : c.max) - b + 1) + b;
        return (void 0 === c.isInt ? 0 : c.isInt) ? a.Math.floor(b) : b
    }, qb);
    function on(a, b) {
        var c = a(b);
        return B(c) ? void 0 : "" + c
    }
    var pn = /^[\s\xa0]+/g
      , qn = /[\s\xa0]+$/g
      , rn = /(\xa0+|\s{2,}|\n|\r|\t)/g;
    function sn(a) {
        return (a = a.innerText || a.textContent || "") ? a.replace(pn, "").replace(qn, "").replace(rn, " ") : a
    }
    function tn(a, b) {
        try {
            return Cg(a, b)
        } catch (c) {
            throw Kl("ies");
        }
    }
    function un(a, b, c) {
        var d = b.multi
          , e = b.dataType
          , f = c(b.selector);
        if (!f)
            return null;
        a = tn(f, a.document);
        a = M(function(g) {
            if ("text" === e)
                return sn(g);
            var h = c(b.attr);
            return h ? g.getAttribute && g.getAttribute(h) : sn(g)
        }, a);
        return d ? a : a.length ? a[0] : null
    }
    function vn(a, b) {
        return b.length > a.length ? !1 : a.substring(a.length - b.length) === b
    }
    function wn(a, b) {
        return x(a) && x(b) ? vn(a, b) : !1
    }
    function xn(a, b) {
        return a === b
    }
    function yn(a, b) {
        return L(a) ? U(b, a) : x(a) ? Ha(a, "" + b) : !1
    }
    function zn(a, b, c) {
        return Il(a, b) && Il(a, c) ? b < c : !1
    }
    function An(a, b, c) {
        a = Ye(a);
        if (!a || !x(c) || !Ui(b))
            return !1;
        try {
            return a.call(b, c)
        } catch (d) {
            return !1
        }
    }
    function Bn(a, b, c) {
        return Il(a, b) && Il(a, c) ? b > c : !1
    }
    function Cn(a, b, c) {
        if (!x(b) || !x(c))
            return !1;
        try {
            return (new RegExp(c,a ? "i" : "")).test(b)
        } catch (d) {
            return !1
        }
    }
    function Dn(a, b) {
        return x(a) && x(b) ? Nl(a, b) : !1
    }
    function En(a, b) {
        if ("eq" === b)
            return xn;
        if ("more" === b)
            return F(a, Bn);
        if ("less" === b)
            return F(a, zn);
        if ("regex" === b)
            return F(!1, Cn);
        if ("iRegex" === b)
            return F(!0, Cn);
        if ("css" === b)
            return F(a, An);
        if ("inc" === b)
            return yn;
        if ("start" === b)
            return Dn;
        if ("end" === b)
            return wn;
        throw Cc("fn: " + b);
    }
    function Fn(a) {
        return xa("escape", CSS.escape) ? "#" + CSS.escape(a) : "[id='" + a + "']"
    }
    function Gn(a, b) {
        if (a.document.hidden)
            return !1;
        var c = ef(b);
        if (B(c) || c.top === c.bottom || c.left === c.right || !a.getComputedStyle)
            return !1;
        var d = a.getComputedStyle(b);
        if ("hidden" === d.visibility)
            return !1;
        for (c = b; c; ) {
            if ("none" === d.display || "0" === d.opacity || "0%" === d.opacity)
                return !1;
            (c = c.parentElement) && (d = a.getComputedStyle(c))
        }
        return !0
    }
    function Hn(a, b) {
        var c = ef(b);
        if (B(c))
            return 0;
        var d = c.right - c.left
          , e = c.bottom - c.top;
        if (!d || !e)
            return 0;
        var f = r(bf(a))
          , g = f.next().value;
        f = f.next().value;
        return (1 - Math.min((Math.max(0 - c.left, 0) + Math.max(c.right - g, 0)) / d, 1)) * (1 - Math.min((Math.max(0 - c.top, 0) + Math.max(c.bottom - f, 0)) / e, 1))
    }
    function In(a) {
        try {
            return parseFloat(a)
        } catch (b) {
            return null
        }
    }
    var Kn = cm("v.e.r", function(a, b, c, d) {
        var e = a.l
          , f = a.W
          , g = a.Pe
          , h = F(c, on);
        if ("event" === d.type)
            return mn(b, {
                type: "dataLayer",
                key: "event",
                permissions: d.permissions
            }, h, f);
        if ("dataLayer" === d.type)
            return mn(b, d, h, f);
        if ("cnst" === d.type)
            return c(d.value);
        if ("counterId" === d.type)
            return a.counterId;
        if ("rand" === d.type)
            return nn(e, b, d);
        if ("url" === d.type || "ref" === d.type) {
            a: {
                a = !1;
                b = d.component;
                var k = "url" === d.type ? (k = d.urlSource) ? h(k) : I(e, "location.href") : I(e, "document.referrer");
                if (k) {
                    if ("queryVar" === b) {
                        var l = h(d.key);
                        if (!l) {
                            d = void 0;
                            break a
                        }
                    }
                    "host" === b && (a = d.ek);
                    f.checkPermission({
                        Wa: d,
                        permissionType: "url" === d.type ? "url" : "referrer",
                        L: {
                            urlComponent: b,
                            variableName: l
                        }
                    });
                    d = Kg(e, k);
                    d = hm(d, b, l, a)
                } else
                    d = void 0
            }
            return d
        }
        if ("cookie" === d.type)
            return "null" === e.origin ? d = "" : (h = h(d.cookieName)) ? (f.checkPermission({
                Wa: d,
                permissionType: "cookies",
                L: {
                    name: h,
                    operation: 2
                }
            }),
            d = fm(e, h, d.decode)[0] || "") : d = "",
            d;
        if ("js" === d.type)
            return (h = h(d.key)) ? (f.checkPermission({
                Wa: d,
                permissionType: "globals",
                L: {
                    key: h,
                    operation: 2
                }
            }),
            d = I(e, h)) : d = void 0,
            d;
        if ("dom" === d.type)
            return un(e, d, h);
        if ("pro" === d.type) {
            e = g.Vg();
            try {
                return k = Jn(a, b, d, {
                    Nc: w,
                    add: w,
                    Ma: w
                }, w, F(Jl("v.e.of"), Fc)),
                e("success"),
                k
            } catch (m) {
                throw e("failure"),
                m;
            }
        }
        if ("table" === d.type) {
            a: {
                f = h(d.input);
                l = d.rows;
                for (a = 0; a < l.length; a += 1)
                    if (b = l[a],
                    k = h(b.target),
                    En(e, b.fn)(f, k)) {
                        d = h(b.output);
                        break a
                    }
                d = h(d["default"])
            }
            return d
        }
        if ("ev" === d.type) {
            a: {
                f = d.ot;
                if ("id" === d.sm) {
                    l = h(d.id);
                    if (!x(l) || !l) {
                        d = void 0;
                        break a
                    }
                    l = Fn(l)
                } else if (l = h(d.selector),
                !x(l) || !l) {
                    d = void 0;
                    break a
                }
                (l = Dg(l, e.document)) && Gn(e, l) ? (l = Math.round(1E4 * Hn(e, l)) / 100,
                "b" === f ? (f = null,
                d = h(d.srp),
                B(d) || (f = In(d),
                f = !cb(e, f) || 0 > f || 100 < f ? null : f),
                d = l >= (f || 50)) : d = l) : d = void 0
            }
            return d
        }
        if ("contDbm" === d.type)
            return !0 === a.config.isPreview
    }, void 0, function(a, b, c, d) {
        b = {
            type: "v",
            eventId: b.ytm.eventId
        };
        !0 === a.config.isPreview && (b.id = d.id);
        return b
    });
    function Ln(a, b, c) {
        var d = a.config.variables[c];
        if (!d)
            throw Jl("var: " + c);
        c = D([a, b], Mn);
        return Kn(a, b, c, d)
    }
    var Nn = /^(?!-*(?:expression|(?:moz-)?binding))(?:\s*|(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,4}|%)?|[a-z-]+\([^)]*\)|"[^"]*"|'[^']*')(?:\s*!important)?)$/i
      , On = /[\x00\x08-\x0d\x22\x26-\x2a/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g
      , Pn = {
        "\x00": "\\0 ",
        "\b": "\\8 ",
        "\t": "\\9 ",
        "\n": "\\a ",
        "\v": "\\b ",
        "\f": "\\c ",
        "\r": "\\d ",
        '"': "\\22 ",
        "&": "\\26 ",
        "'": "\\27 ",
        "(": "\\28 ",
        ")": "\\29 ",
        "*": "\\2a ",
        "/": "\\2f ",
        ":": "\\3a ",
        ";": "\\3b ",
        "<": "\\3c ",
        "=": "\\3d ",
        ">": "\\3e ",
        "@": "\\40 ",
        "\\": "\\5c ",
        "{": "\\7b ",
        "}": "\\7d ",
        "\u0085": "\\85 ",
        "\u00a0": "\\a0 ",
        "\u2028": "\\2028 ",
        "\u2029": "\\2029 "
    };
    function Qn(a) {
        return a.replace(On, function(b) {
            return Pn[b]
        })
    }
    var Rn = /[\x00\x09-\x0d\x22\x26\x27\x2d\x2f\x3c\x3e\x3d\x60\x85\xa0\u2028\u2029]/g
      , Sn = {
        "\x00": "&#0;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "<": "&lt;",
        ">": "&gt;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        "-": "&#45;",
        "/": "&#47;",
        "=": "&#61;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };
    function Tn(a) {
        return a.replace(Rn, function(b) {
            return Sn[b]
        })
    }
    var Un = /[\x00\x08-\x0d\x22\x24\x26-\x29\x2a-\x2e/\x3a\x3c-\x3f\x5b-\x5e\x7b-\x7d\\\x85\u2028\u2029]/g
      , Vn = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        "&": "\\x26",
        "'": "\\x27",
        "/": "\\/",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "\\": "\\\\",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029",
        Gj: "\\x24",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        ":": "\\x3a",
        "?": "\\x3f",
        "[": "\\x5b",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d"
    };
    function Wn(a) {
        return a.replace(Un, function(b) {
            return Vn[b]
        })
    }
    var Xn = /['()]/g;
    function Yn(a) {
        return "%" + a.charCodeAt(0).toString(16)
    }
    var Zn = /^(?:(?:https?|mailto|tel):|[^&:/?#]*(?:[/?#]|$))/i
      , $n = /[\x00-\x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
      , ao = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };
    function bo(a) {
        Zn.lastIndex = 0;
        return Zn.test(a) ? a.replace($n, function(b) {
            return ao[b]
        }) : "#sYTMs"
    }
    function Mn(a, b, c) {
        if (L(c)) {
            if ("template" === c[0])
                return P("", M(function(e) {
                    return Mn(a, b, e)
                }, c.slice(1)));
            if ("var" === c[0])
                return c = r(c),
                c.next(),
                c = c.next().value,
                Ln(a, b, c);
            if ("escape" === c[0]) {
                var d = r(c);
                d.next();
                c = d.next().value;
                d = ka(d);
                c = Mn(a, b, c);
                return G(function(e, f) {
                    if (7 === f)
                        var g = a.ee(e);
                    else
                        g = "" + e,
                        4 === f ? g = Wn(g) : 3 === f ? g = Tn(g) : 2 === f ? g = bo(g) : 6 === f ? B(e) ? g = "" : (g = "" + e,
                        g = Nn.test(g) ? g : "sYTMs") : 5 === f ? g = Qn(g) : 1 === f && (g = $d(g),
                        Xn.lastIndex = 0,
                        g = Xn.test(g) ? g.replace(Xn, Yn) : g);
                    return g
                }, c, d)
            }
            if ("table" === c[0])
                return c = r(c),
                c.next(),
                c = ka(c),
                M(function(e) {
                    return G(function(f, g) {
                        f[g] = Mn(a, b, e[g]);
                        return f
                    }, {}, td(e))
                }, c);
            if ("list" === c[0])
                return c = r(c),
                c.next(),
                c = ka(c),
                M(function(e) {
                    return Mn(a, b, e)
                }, c)
        } else
            return c
    }
    function co(a, b) {
        return {
            checkPermission: function(c) {
                b.checkPermission(O({
                    Wa: a
                }, c))
            },
            na: function(c) {
                return b.na(O({
                    Wa: a
                }, c))
            }
        }
    }
    function Jn(a, b, c, d, e, f) {
        var g = a.l
          , h = a.config
          , k = a.W
          , l = c.data;
        if (!L(l)) {
            if (!H(h, "code") || !L(h.code) || !h.code[l])
                throw Cc("mp");
            l = h.code[l]
        }
        k = co(c, k);
        c = G(function(m, p) {
            var q = r(p)
              , v = q.next().value;
            q = q.next().value;
            q = Mn(a, b, q);
            m[v] = Ml(g, q);
            return m
        }, {}, sd(c.settings || {}));
        return ln(g, l, {
            containerId: h.containerId,
            W: k,
            bf: d,
            data: c,
            event: b
        }, e, f)
    }
    function eo(a, b) {
        var c = O({}, b, {
            eventId: xj()
        });
        return {
            event: a,
            ytm: c
        }
    }
    function fo(a) {
        var b = G(function(e, f) {
            return e + f
        }, 0, wd(a.data.tm))
          , c = O({}, a.data.tm)
          , d = b;
        return {
            update: function(e) {
                if (!H(c, "" + e))
                    return !1;
                var f = c[e];
                if (0 >= f)
                    return !1;
                c[e] = f - 1;
                --d;
                return 0 === d
            },
            reset: function() {
                c = O({}, a.data.tm);
                d = b
            }
        }
    }
    function go(a, b, c) {
        a = a.fh;
        var d = fo(c);
        a.D(function(e) {
            d.update(e) && (b(eo("ytm.group", {
                trigger: c.data.trigger
            })),
            d.reset())
        })
    }
    var ho = K(md)
      , io = {}
      , jo = (io.group = function(a, b, c, d, e, f) {
        b = c.data.trigger;
        var g = ho(a);
        if (g[b])
            f(Kl("t.a.s.g"));
        else {
            try {
                go(a, N(d.Nc, d.Ma), c)
            } catch (h) {
                f(h);
                return
            }
            g[b] = !0;
            e()
        }
    }
    ,
    io.paused = w,
    io.pro = Jn,
    io);
    function ko(a) {
        var b = Qa(a.classList)
          , c = sn(a)
          , d = a.getAttribute("id");
        var e = a.getAttribute("formAction") || a.getAttribute("action") || a.getAttribute("href") || a.getAttribute("src") || a.getAttribute("code") || a.getAttribute("codebase") || "";
        return {
            element: a,
            elementClasses: b,
            elementText: c,
            elementId: d,
            elementUrl: e,
            elementTarget: a.getAttribute("formTarget") || a.getAttribute("target") || ""
        }
    }
    function lo(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var e = a.l
          , f = null;
        B(c) || (a = "" + Mn(a, b, c),
        f = d ? In(a) : db(a),
        cb(e, f) || (f = null));
        return f
    }
    var mo = K(md)
      , no = K(function(a) {
        return (a = I(a, "trustedTypes")) ? a.createPolicy("ytm#policy", {
            createHTML: J,
            createScript: J,
            createScriptURL: J
        }) : null
    });
    function oo(a, b, c, d) {
        var e = null;
        return {
            fn: function() {
                var f = ta.apply(0, arguments);
                Oa(e) || Kd(a, e);
                e = W(a, function() {
                    b.apply(null, la(f));
                    e = null
                }, c, d + ".deb")
            },
            clear: function() {
                Oa(e) || (Kd(a, e),
                e = null)
            }
        }
    }
    var po = K(md)
      , qo = K(function(a, b) {
        function c() {
            M(function(t) {
                t = +t;
                if (!(t > k)) {
                    var u = h[t];
                    u && b(eo("ytm.scrollDepth", {
                        direction: "vertical",
                        units: "percent",
                        threshold: t,
                        tags: u
                    }));
                    delete h[t]
                }
            }, td(h));
            0 === td(h).length && e()
        }
        function d() {
            var t = f.scrollY
              , u = r(bf(f));
            u.next();
            u = u.next().value;
            var z = r(df(f));
            z.next();
            u = z.next().value - u;
            0 >= u || !f.isFinite(u) || (t = Math.max(0, Math.min(100, Math.round(t / u * 100))),
            t > k && (k = t),
            c())
        }
        function e() {
            m.lb(f, [q], v);
            m.lb(f, ["resize"], d);
            l = !1
        }
        var f = a.l
          , g = a.Gf
          , h = {}
          , k = 0
          , l = !1
          , m = Qd(f)
          , p = H(f, "onscrollend")
          , q = p ? "scrollend" : "scroll"
          , v = p ? d : oo(f, d, 100, "ytm.sd").fn;
        g(e);
        return function(t, u) {
            M(function(z) {
                H(h, "" + z) || (h[z] = []);
                (z = h[z]) && !U(t, z) && z.push(t)
            }, u);
            !l && 0 < td(h).length && (m.D(f, [q], v),
            m.D(f, ["resize"], d),
            l = !0);
            d()
        }
    })
      , ro = K(md);
    function so(a, b, c, d) {
        if (!H(b, c))
            return !1;
        a = b[c];
        if (H(a, "allKeys") && a.allKeys & d.operation)
            return !0;
        if (!H(a, "keys"))
            return !1;
        a = a.keys;
        b = d.key;
        return H(a, b) ? !!(a[b] & d.operation) : !1
    }
    function to(a, b, c, d) {
        if (!H(b, c))
            return !1;
        b = b[c];
        if (H(b, "allUrls"))
            return !!b.allUrls;
        if (!H(b, "allow"))
            return !1;
        var e = d.url;
        return Tb(function(f) {
            var g = Kg(a, e);
            if (!g.protocol || "https:" !== g.protocol)
                return !1;
            f = Kg(a, f);
            return g.host && f.host && (Nl(f.host, "*.") ? vn(g.host, f.host.substring(2)) : g.host === f.host) ? "/" === f.pathname ? !0 : vn(f.pathname, "/*") ? Nl(g.pathname, f.pathname.substring(0, f.pathname.length - 2)) : f.pathname === g.pathname : !1
        }, b.allow)
    }
    function uo(a, b, c, d) {
        if (!H(b, c))
            return !1;
        a = b[c];
        b = d.urlComponent;
        if ("queryVar" === b) {
            if (H(a, "query") && a.query)
                return !0;
            d = d.variableName;
            return H(a, "queryVars") && d ? U(d, a.queryVars) : !1
        }
        return !!a[b]
    }
    var vo = {}
      , wo = (vo.cookies = function(a, b, c, d) {
        if (!H(b, "cookies"))
            return !1;
        b = b.cookies;
        a = d.operation;
        if (H(b, "allKeys") && 2 === a)
            return !!(b.allKeys.access & a);
        if (!H(b, "keys"))
            return !1;
        c = b.keys;
        var e = d.name;
        b = H(c, e) ? c[e] : {
            access: 0
        };
        if (2 === a)
            return !!(b.access & a);
        if (1 === a) {
            d = d.options;
            if (!H(c, e) || !d)
                return !1;
            c = b.access;
            e = b.domain;
            var f = b.path
              , g = b.secure
              , h = b.dk
              , k = !B(d.expires) || !B(d["max-age"]);
            if (H(b, "session") && h)
                if (1 === h) {
                    if (k)
                        return !1
                } else if (!k)
                    return !1;
            return !(c & a) || H(b, "domain") && e !== d.domain || H(b, "path") && f !== d.path || H(b, "secure") && (1 === g && !d.secure || 2 === g && d.secure) ? !1 : !0
        }
        return !1
    }
    ,
    vo.dataLayer = so,
    vo.globals = so,
    vo.iframe = to,
    vo.loadScript = to,
    vo.localStorage = so,
    vo.log = function(a, b, c, d) {
        return H(b, "log") ? d.logLevel >= b.log : !1
    }
    ,
    vo.pixel = to,
    vo.readTitle = function(a, b) {
        return H(b, "readTitle") ? b.readTitle : !1
    }
    ,
    vo.referrer = uo,
    vo.templateStorage = function(a, b) {
        return H(b, "templateStorage") ? !!b.templateStorage : !1
    }
    ,
    vo.url = uo,
    vo);
    function xo(a, b, c) {
        var d = a.permissionType
          , e = a.L;
        a = {
            counterId: b,
            containerId: c,
            permissionType: a.permissionType
        };
        if ("globals" === d) {
            d = e.key;
            a: switch (e.operation) {
            case 2:
                e = "read";
                break a;
            case 1:
                e = "write";
                break a;
            case 4:
                e = "execute";
                break a;
            default:
                throw Cc("uvac");
            }
            return O(a, {
                data: {
                    key: d,
                    operation: e
                }
            })
        }
        return "dataLayer" === d || "localStorage" === d ? O(a, {
            data: {
                key: e.key,
                operation: km(e.operation)
            }
        }) : "url" === d || "referrer" === d ? O(a, {
            data: "queryVar" === e.urlComponent ? {
                component: e.urlComponent,
                key: e.variableName
            } : {
                component: e.urlComponent
            }
        }) : "iframe" === d || "loadScript" === d || "pixel" === d ? O(a, {
            data: {
                url: e.url
            }
        }) : "cookies" === d ? (d = km(e.operation),
        b = e.name,
        c = e.options,
        e = 1 === e.operation && c ? {
            operation: d,
            name: b,
            options: O({}, c)
        } : {
            operation: d,
            name: b
        },
        O(a, {
            data: e
        })) : O(a, {
            data: null
        })
    }
    var yo = "cookies dataLayer globals iframe loadScript localStorage log pixel readTitle referrer url html".split(" ")
      , zo = K(function() {
        var a = {};
        return {
            rh: function(b, c) {
                U(b, yo) && y(c) && (H(a, b) || (a[b] = []),
                a[b].push(c))
            },
            Ah: function(b, c, d) {
                var e = H(a, b.permissionType) && a[b.permissionType];
                if (!e)
                    return !0;
                var f = xo(b, c, d);
                return !Tb(function(g) {
                    try {
                        return !1 === g(f)
                    } catch (h) {
                        return !0
                    }
                }, e)
            }
        }
    })
      , Ao = "https://" + Kc + "/metrika"
      , Bo = Ao + "/match.html"
      , Co = Ao + "-tags/_/ytm-debugger.js"
      , Do = K(function(a) {
        a = Ud(a).hostname.split(".");
        return a[a.length - 1]
    })
      , Eo = K(function(a) {
        return -1 !== Ud(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
    })
      , Fo = /(?:^|\.)dzen\.ru$/
      , Go = K(function(a) {
        a = Ud(a).hostname;
        var b = !1;
        a && (b = -1 !== a.search(Fo));
        return b
    })
      , Ho = /(?:^|\.)vk\.link$/
      , Io = K(function(a) {
        a = Ud(a).hostname;
        var b = !1;
        a && (b = -1 !== a.search(Ho));
        return b
    })
      , Jo = RegExp("^(.*\\.)?((yandex(-team)?)\\.(?:\\w+|com?\\.\\w+)|ya\\.(ru|cc)|dzen\\.ru|vk\\.(ru|com)|ok\\.ru|pikabu\\.ru|vc\\.ru|avito\\.ru)$")
      , Ko = K(function(a) {
        a = Ud(a).hostname;
        return !!a && -1 !== a.search(Jo)
    });
    function Lo(a, b) {
        var c = Q(a)
          , d = {};
        d = c.C("ydeb", (d.ctydl = [],
        d.ypc = b,
        d));
        c.F("ydeb", d);
        return d
    }
    var Mo = S("ytm.d.dl", function(a, b) {
        var c = Em(b)
          , d = Lo(a, c);
        return {
            trigger: R(a, "ytm.d.tr", function(e) {
                100 <= d.ctydl.length && Zb(d.ctydl);
                d.ctydl.push(e)
            })
        }
    });
    function No(a) {
        var b = r(a.split("#"));
        a = b.next().value;
        b = b.next().value;
        if (b)
            try {
                var c = decodeURIComponent(b)
            } catch (d) {
                c = b
            }
        else
            c = "";
        return [a || "", c]
    }
    function Oo(a, b, c) {
        var d = I(a, "history." + b);
        if (y(d)) {
            var e = R(a, "p.h.m." + ("pushState" === b ? "ps" : "rs"), function(f) {
                var g = r(No(a.location.href))
                  , h = g.next().value;
                g = g.next().value;
                c({
                    source: "pushState" === b ? "pushState" : "replaceState",
                    state: f,
                    url: h,
                    qb: g
                })
            });
            try {
                a.history[b] = function(f, g, h) {
                    d.call(a.history, f, g, h);
                    e(f)
                }
            } catch (f) {}
        }
    }
    var Po = K(function(a) {
        var b = Af(a)
          , c = Qd(a);
        Oo(a, "pushState", b.trigger);
        Oo(a, "replaceState", b.trigger);
        c.D(a, ["hashchange"], R(a, "ho.hc", function(d) {
            var e = r(No(I(d, "target.location.href") || a.location.href));
            d = e.next().value;
            e = e.next().value;
            b.trigger({
                source: "hashchange",
                state: null,
                url: d,
                qb: e
            })
        }));
        c.D(a, ["popstate"], R(a, "ho.ps", function(d) {
            var e = r(No(I(d, "target.location.href") || a.location.href))
              , f = e.next().value;
            e = e.next().value;
            b.trigger({
                source: "popstate",
                state: d.state,
                url: f,
                qb: e
            })
        }));
        return b
    });
    function Qo(a, b) {
        return M(function(c) {
            return a(c.target)
        }, b.conditions)
    }
    var Ro = cm("d.t.ve", function(a, b, c) {
        var d = {};
        return d.i = c,
        d.ct = Qo(a, b),
        d
    })
      , So = cm("d.t.ie", function(a, b, c, d) {
        var e = G(function(g, h, k) {
            b(h) && g.push(k);
            return g
        }, [], c.conditions)
          , f = {};
        return f.i = d,
        f.ct = Qo(a, c),
        f.fci = e,
        f
    })
      , To = cm("c.ch", function(a, b, c) {
        var d = a.l
          , e = Ln(a, b, c["var"])
          , f = c.target
          , g = c.not;
        c = En(d, c.fn);
        a = Mn(a, b, f);
        return g ? !c(e, a) : c(e, a)
    }, !1, function(a, b) {
        return {
            type: "tr",
            eventId: b.ytm.eventId
        }
    })
      , Uo = "ar:1:pv:1:v:2652:vf:" + ua.version;
    function Vo(a, b, c) {
        var d = "https://" + Kc + "/watch/" + c;
        try {
            var e = r(b)
              , f = r(e.next().value);
            f.next();
            var g = f.next().value
        } catch (h) {
            return function() {
                return T.resolve()
            }
        }
        return function(h) {
            var k = {};
            k = (k["browser-info"] = Uo,
            k["page-url"] = a.location && "" + a.location.href,
            k);
            return g && (h = Ee(a, h)) ? g(d, {
                gb: k,
                fa: [],
                aa: "site-info=" + $d(h)
            })["catch"](w) : T.resolve()
        }
    }
    var Wo = cm("p.ss", function(a) {
        var b = .99 >= a.Math.random()
          , c = jh(a, {
            id: 102974846,
            $: "0"
        }, "er")
          , d = Vo(a, c, 102974846);
        return [b, function(e, f) {
            var g = {}
              , h = {};
            if ("tgExec" === e) {
                var k = {};
                var l = {}
                  , m = {};
                k = (m[f.status] = (l[f.tagType] = (k[f.counterId] = f,
                k),
                l),
                m)
            } else
                "trExec" === e ? (k = {},
                l = {},
                k = (l[f.event] = (k[f.counterId] = f,
                k),
                l)) : (k = {},
                l = {},
                k = (l[f.status] = (k[f.counterId] = f,
                k),
                l));
            g = (h[e] = (g["2652"] = k,
            g),
            h);
            d(g)
        }
        ]
    })
      , Xo = N(td, Yb);
    var Yo = La("1");
    function sq(a, b) {
        return aa[a] = b
    }
    Nj.prototype.cc = sq(0, function(a, b) {
        var c = new Nj(a,O({}, this.options, {
            frameId: b
        }));
        c.start(w);
        return c
    });
    function tq(a) {
        var b = []
          , c = 0;
        return Na(function(d, e) {
            M(function(f, g) {
                f(uf(d, function(h) {
                    try {
                        b[g] = h,
                        c += 1,
                        c === a.length && e(b)
                    } catch (k) {
                        d(k)
                    }
                }))
            }, a)
        })
    }
    var uq = /^[\w\u0410-\u042f\u0430-\u044f]$/
      , vq = [65, 90]
      , wq = [97, 122];
    function xq(a, b) {
        return P("", M(function(c) {
            if (!a.isNaN(c))
                return "" + Ce(a, 0, 9);
            if (uq.test(c)) {
                var d = r(c.toUpperCase() === c ? vq : wq);
                c = d.next().value;
                d = d.next().value;
                return String.fromCharCode(Ce(a, c, d))
            }
            return c
        }, b.split("")))
    }
    function yq(a) {
        return !A(a.frameId) && !A(a.data)
    }
    var zq = {
        type: "event",
        event: "fatalError",
        data: {
            code: "invalid-snapshot",
            Rj: "p.s.f",
            stack: ""
        }
    }
      , Aq = ["checkbox", "radio"]
      , Bq = /pwd|value|password/i;
    function Cq(a, b, c, d, e, f) {
        f = void 0 === f ? ff(b) : f;
        var g = {
            vb: !1,
            value: d
        };
        fj(b) ? "value" === c ? !B(d) && "" !== d && (e = e.yg,
        c = Zi(a, b),
        e ? (e = kj(a, b),
        b = e.Qb,
        a = e.Jb,
        e = e.eb,
        g.vb = !a && (c || b)) : (g.vb = c,
        e = !(b && Xe("ym-record-keys", b))),
        e || c) && (d = "" + d,
        g.value = 0 < d.length ? sj("\u2022", d.length) : "") : "checked" === c && U((b.getAttribute("type") || "").toLowerCase(), Aq) ? g.value = b.checked ? "checked" : null : Bq.test(c) && ij(b) && (g.value = null) : "IMG" === f && "src" === c ? (d = Zi(a, b)) ? (g.vb = d,
        g.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : g.value = (b.getAttribute("srcset") ? b.currentSrc : "") || b.src : "VIDEO" === f && "src" === c ? (d = Zi(a, b)) ? (g.vb = d,
        g.value = "") : g.value = b.currentSrc || b.src || "" : "A" === f && "href" === c ? g.value = d ? "#" : "" : x(c) && (U(c, ["srcset", "integrity", "crossorigin", "password"]) || 2 < c.length && 0 === Ba(c, "on") || "IFRAME" === f && "src" === c || "SCRIPT" === f && U(c, ["src", "type"])) && (g.value = null);
        return g
    }
    function Dq(a, b, c) {
        var d = {};
        fj(a) ? d.value = a.value || c.value : "IMG" !== b || c.src || (d.src = "");
        return d
    }
    function Eq(a, b, c, d, e) {
        d = void 0 === d ? {} : d;
        e = void 0 === e ? ff(b) : e;
        var f = O(G(function(h, k) {
            h[k.name] = k.value;
            return h
        }, {}, Wb(b.attributes)), d);
        O(f, Dq(b, e, f));
        var g = (d = G(function(h, k) {
            var l = r(k)
              , m = l.next().value;
            l = l.next().value;
            l = Cq(a, b, m, l, c, e);
            var p = l.value;
            B(p) ? delete f[m] : f[m] = p;
            return h || l.vb
        }, !1, sd(f))) && ef(b);
        g && (f.width = g.width,
        f.height = g.height);
        return {
            vb: d,
            th: f
        }
    }
    function Fq(a, b) {
        if (x(b))
            return b;
        var c = a.textContent;
        if (x(c))
            return c;
        c = a.data;
        if (x(c))
            return c;
        c = a.nodeValue;
        return x(c) ? c : ""
    }
    function Gq(a, b, c, d, e, f, g, h, k) {
        f = void 0 === f ? null : f;
        g = void 0 === g ? null : g;
        h = void 0 === h ? {} : h;
        var l = ff(b);
        if (!A(l)) {
            d = {
                id: d,
                prev: f !== e ? f : null,
                next: g !== e ? g : null,
                parent: e,
                name: "http://www.w3.org/2000/svg" === b.namespaceURI ? b.localName : l.toLowerCase(),
                node: b
            };
            if (Qe(b)) {
                if (c = Fq(b, k),
                d.attributes = {},
                d.content = c)
                    if (b = Zi(a, b))
                        d.content = "" !== fe(c) ? xq(a, c) : c,
                        d.hidden = b
            } else
                a = Eq(a, b, c, h, l),
                c = a.vb,
                d.attributes = a.th,
                c && (d.hidden = c),
                b.namespaceURI && Ha(b.namespaceURI, "svg") && (d.namespace = b.namespaceURI);
            return d
        }
    }
    function Hq(a, b) {
        var c = []
          , d = N(J, Wa("push", c));
        if (y()) {
            var e = (void 0)(b);
            (B(e) || e === a.NodeFilter.FILTER_ACCEPT) && d(b)
        } else
            d(b);
        if (b.childNodes && 0 < b.childNodes.length) {
            e = b.childNodes;
            for (var f = 0, g = e.length; f < g; f += 1) {
                var h = Hq(a, e[f]);
                M(d, h)
            }
        }
        return c
    }
    function Iq(a, b, c) {
        if (b) {
            a: {
                var d = [];
                if (b)
                    try {
                        var e = I(a, "document.documentElement");
                        e && e.contains(b) ? Qk(a, b, Wa("push", d)) : xg(d, Hq(a, b))
                    } catch (f) {
                        a = [];
                        break a
                    }
                a = d
            }
            M(c, a)
        }
    }
    var Jq = ki("wv")
      , Kq = S("w2.cs", function(a, b) {
        var c = V(b)
          , d = {};
        Ok(a, c, (d.webvisor = !!b.Yb,
        d))
    });
    function Lq(a, b, c, d) {
        var e = this;
        this.Pd = this.Ub = !1;
        this.rf = 0;
        this.yb = [];
        this.lg = [];
        this.Qf = [];
        this.send = function(f, g, h) {
            f = e.sender(f, e.Ih);
            g && h && f.then(g, h);
            return f
        }
        ;
        this.pf = function(f, g, h) {
            return new T(function(k, l) {
                f.push([g, k, l, h])
            }
            )
        }
        ;
        this.Ai = function() {
            e.yb = uj(function(h, k) {
                return h[3].partNum - k[3].partNum
            }, e.yb);
            var f = G(function(h, k, l) {
                k = k[3];
                return h && l + 1 === k.partNum
            }, !0, e.yb)
              , g = !!e.yb[e.yb.length - 1][3].end;
            return f && g
        }
        ;
        this.le = function(f) {
            Dj(e.l, f.slice(), function(g) {
                var h = r(g);
                g = h.next().value;
                var k = h.next().value;
                h = h.next().value;
                e.send(g, k, h)
            }, "s.w2.sf.fes", 20);
            Zb(f)
        }
        ;
        this.$h = function() {
            e.Pd || (e.Pd = !0,
            e.le(e.lg),
            e.le(e.Qf))
        }
        ;
        this.zh = function(f) {
            return G(function(g, h) {
                var k = "page" === h.type && !h.frameId
                  , l = "eof" === h.event
                  , m = k && !!h.partNum;
                return {
                    Vd: g.Vd || m,
                    Ud: g.Ud || k,
                    Td: g.Td || l
                }
            }, {
                Ud: !1,
                Td: !1,
                Vd: !1
            }, f)
        }
        ;
        this.yi = function(f, g, h) {
            h ? (f = e.pf(e.yb, f, g[0]),
            e.Ai() && (e.le(e.yb),
            e.Ub = !0)) : (e.Ub = !0,
            f = e.send(f));
            return f
        }
        ;
        this.$f = function(f, g, h) {
            var k = {};
            g = {
                K: (k["wv-part"] = "" + h,
                k["wv-type"] = e.ij,
                k["wv-check"] = "" + lh(g),
                k),
                M: Og(),
                N: {
                    aa: g
                }
            };
            f && g.M.F("bt", 1);
            return g
        }
        ;
        this.Uh = function(f, g, h) {
            if (!Mq(e, f.length))
                return Nq(e);
            f = e.$f(!1, f, h);
            return e.Ub ? e.send(f) : e.pf(e.Qf, f, g)
        }
        ;
        this.Mi = function(f, g, h) {
            if (!Mq(e, f.length))
                return Nq(e);
            f = e.$f(!0, f, h);
            if (e.Ub)
                return e.send(f);
            var k = e.zh(g);
            h = k.Ud;
            var l = k.Td;
            k = k.Vd;
            var m;
            h && (m = e.yi(f, g, k));
            e.Pd ? h || (m = e.send(f)) : (h || (m = e.pf(e.lg, f, g)),
            (e.Ub || l) && e.$h());
            return m
        }
        ;
        this.l = a;
        this.ij = c;
        this.Ih = b;
        this.jj = 10485760;
        this.lj = d;
        this.sender = pi(a, "wv2", b)
    }
    function Mq(a, b) {
        if (!a.Ub)
            return !0;
        if (a.rf > a.jj)
            return !1;
        a.rf += b;
        return !0
    }
    function Nq(a) {
        Q(a.l).F("w2s", 14);
        a.lj();
        return T.resolve()
    }
    function Oq() {
        var a = G(function(b, c) {
            var d = r(c)
              , e = d.next().value;
            d = d.next().value;
            b[e] = {
                Qd: 0,
                xh: 1 / d
            };
            return b
        }, {}, [["blur", .0034], ["change", .0155], ["click", .01095], ["deviceRotation", 2E-4], ["focus", .0061], ["mousemove", .5132], ["scroll", .4795], ["selection", .0109], ["touchcancel", 2E-4], ["touchend", .0265], ["touchforcechange", .0233], ["touchmove", .1442], ["touchstart", .027], ["zoom", .0014]]);
        return {
            sh: function(b) {
                if (b.length)
                    return {
                        type: "activity",
                        data: G(function(c, d) {
                            var e = a[d];
                            return Math.round(c + e.Qd * e.xh)
                        }, 0, td(a))
                    }
            },
            Eh: function(b) {
                b && (b = b.event) && (b = a[b]) && (b.Qd += 1)
            }
        }
    }
    function Pq(a, b) {
        var c = this;
        this.Xc = [];
        this.Ib = [];
        this.If = this.Lg = 0;
        this.Ha = {};
        this.ub = {};
        this.kc = [];
        this.Ce = function(e) {
            return c.Ib.length ? U(e, c.Ib) : !1
        }
        ;
        this.removeNode = function(e) {
            var f = c.O(e)
              , g = ff(e);
            if (g && !A(f))
                return g = "NR:" + g.toLowerCase(),
                c.Ce(g) && c.ba.trigger(g, {
                    data: {
                        node: e,
                        id: f
                    }
                }),
                f
        }
        ;
        this.Mb = function(e) {
            var f = c.ad(c.l, e);
            if (!f)
                return null;
            if (f.existing)
                return f.id;
            var g = f.id;
            f = "NA:" + f.nodeName.toLowerCase();
            c.Ce(f) && c.ba.trigger(f, {
                data: {
                    node: e,
                    id: g
                }
            });
            return g
        }
        ;
        this.Eg = function() {
            c.Lg = W(c.l, N(C(c.ea, c, !1), c.Eg), 50, "i.s")
        }
        ;
        this.Cg = function() {
            c.If = W(c.l, N(C(c.Rd, c, !1), c.Cg), 50, "i.g")
        }
        ;
        this.ej = function(e) {
            null === c.Ha[e] && delete c.Ha[e];
            null === c.ub[e] && delete c.ub[e]
        }
        ;
        this.l = a;
        var d = Lj(a, this, "i", b.Sa);
        this.ba = Bf(a, d.Da("em"));
        this.options = b;
        this.start = d.H(this.start, "st");
        this.stop = d.H(this.stop, "sp");
        this.O = d.H(this.O, "i");
        this.Ed = d.H(this.Ed, "o");
        this.sb = d.H(this.sb, "a");
        this.removeNode = d.H(this.removeNode, "r");
        this.ea = d.H(this.ea, "s");
        this.Rd = d.H(this.Rd, "g");
        this.ad = d.H(Rj, "gs")
    }
    n = Pq.prototype;
    n.Ed = function(a, b) {
        var c = this.Mb(a);
        Oa(c) || (this.ub[c] && this.O(a),
        this.ub[c] = b)
    }
    ;
    n.D = function(a, b, c) {
        a = "" + b + a;
        this.Ib.push(a);
        this.Ce(a) || this.Ib.push(a);
        this.ba.D([a], c)
    }
    ;
    n.X = function(a, b, c) {
        var d = "" + b + a;
        this.Ib = Dd(function(e) {
            return e !== d
        }, this.Ib);
        this.ba.X([d], c)
    }
    ;
    n.start = function() {
        this.Eg();
        this.Cg()
    }
    ;
    n.stop = function() {
        this.flush();
        Kd(this.l, this.If);
        Kd(this.l, this.Lg);
        this.Xc = [];
        this.kc = [];
        this.Ha = {};
        this.ub = {}
    }
    ;
    n.sb = function(a) {
        var b = this
          , c = []
          , d = 0
          , e = {
            Cd: a.Cd,
            result: [],
            dd: 0,
            nodes: c
        };
        this.Xc.push(e);
        M(function(f) {
            Iq(b.l, f, function(g) {
                var h = b.Mb(g);
                Oa(h) || (c.push(g),
                b.Ha[h] && b.O(g),
                b.Ha[h] = {
                    node: g,
                    event: e,
                    uj: d
                },
                d += 1)
            })
        }, a.nodes)
    }
    ;
    n.O = function(a) {
        if (a === this.l)
            return 0;
        var b = this.Mb(a);
        if (Oa(b))
            return 0;
        var c = this.Ha[b], d;
        (d = this.ub[b]) ? (this.ub[b] = null,
        this.kc.push(b)) : d = {};
        var e = d;
        d = e.Xf;
        var f = e.me
          , g = e.Yf
          , h = e.bi
          , k = e.di;
        if (c) {
            e = c.event;
            c = c.uj;
            var l = Se(this.l) === a;
            h = h || a.nextSibling;
            k = k || a.previousSibling;
            h = !l && h ? this.Mb(h) : null;
            l = !l && k ? this.Mb(k) : null;
            a = Gq(this.l, a, this.options, b, this.Mb(d || a.parentNode || a.parentElement) || 0, l, h, f, g);
            if (A(a))
                return;
            this.Ha[b] = null;
            this.kc.push(b);
            e.result[c] = a;
            e.dd += 1;
            e.nodes.length === e.dd && e.Cd(e.result)
        }
        return b
    }
    ;
    n.flush = function() {
        this.ea(!0)
    }
    ;
    n.Rd = function() {
        this.kc.length && Eh(this.kc, this.ej)(Bh(this.l, 30))
    }
    ;
    n.ea = function(a) {
        var b = this;
        if (Mj(this.l)) {
            var c = td(this.Ha);
            c = G(function(d, e) {
                b.Ha[e] && d.push(b.Ha[e].node);
                return d
            }, [], c);
            c = Eh(c, this.O);
            a = a ? zh(w) : Ch(this.l, 20);
            c(a);
            this.Xc = Dd(function(d) {
                return d.dd !== d.result.length
            }, this.Xc)
        }
    }
    ;
    var Qq = /allow-same-origin/;
    function Rq(a, b) {
        Z.call(this, a, b, "if");
        this.Dc = [];
        this.pe = {};
        this.Te = this.J.H(this.Te, "fi");
        this.Ue = this.J.H(this.Ue, "sd");
        this.Ve = this.J.H(this.Ve, "src");
        this.sa = new a.MutationObserver(this.Ve)
    }
    sa(Rq, Z);
    n = Rq.prototype;
    n.start = function() {
        Z.prototype.start.call(this);
        this.G.rb().Rc && this.G.xa().D("iframe", "NA:", C(this.Te, this));
        this.G.Zf().qe().D(["sdr"], C(this.Ue, this))
    }
    ;
    n.stop = function() {
        Z.prototype.stop.call(this);
        M(function(a) {
            a.G.stop()
        }, this.Dc)
    }
    ;
    n.Ve = function(a) {
        var b = a.pop().target;
        if (a = Pe(function(d) {
            return d.dg === b
        }, this.Dc)) {
            this.Dc = Dd(function(d) {
                return d.dg !== b
            }, this.Dc);
            var c = a.G.$c();
            try {
                a.G.stop()
            } catch (d) {}
            this.cc(b, c)
        }
    }
    ;
    n.Te = function(a) {
        if (a) {
            var b = a.data.node;
            this.sa.observe(b, {
                attributes: !0,
                attributeFilter: ["src"]
            });
            this.cc(b, a.data.id)
        }
    }
    ;
    n.cc = function(a, b) {
        var c = this;
        Sq(this, a) && zf(this.l, this.J.Da("wb"), a)(uf(w, function() {
            var d = c.G.cc(a.contentWindow, b);
            c.Dc.push({
                G: d,
                dg: a
            })
        }))
    }
    ;
    n.Ue = function(a) {
        var b = this;
        if (yq(a)) {
            var c = a.frameId;
            a = a.data;
            this.pe[c] || (this.pe[c] = {
                data: []
            });
            var d = this.pe[c];
            d.data = d.data.concat(a);
            this.l.isNaN(d.Zd) && M(function(e) {
                "page" === e.type && (d.Zd = e.data.recordStamp - b.G.we())
            }, d.data);
            this.l.isNaN(d.Zd) || (this.G.ea(M(function(e) {
                e.stamp += d.Zd;
                e.stamp = b.l.Math.max(0, e.stamp);
                return e
            }, d.data)),
            d.data = [])
        }
    }
    ;
    function Sq(a, b) {
        var c = b.getAttribute("src")
          , d = b.getAttribute("sandbox");
        return b.getAttribute("_ym_ignore") || d && !d.match(Qq) || c && "about:blank" !== c && (c = Kg(a.l, c).host) && Ud(a.l).host !== c ? !1 : I(b, "contentWindow.location.href")
    }
    var Tq = ["input", "change", "keyup", "paste", "cut"];
    function Uq(a, b) {
        Z.call(this, a, b, "in");
        this.inputs = {};
        this.ae = !1;
        this.md = this.J.H(this.md, "ii");
        this.nd = this.J.H(this.nd, "ir");
        this.yd = this.J.H(this.yd, "ri");
        this.Id = this.J.H(this.Id, "ur");
        this.Ae = this.J.H(this.Ae, "ce");
        this.bd = this.J.H(this.bd, "vc")
    }
    sa(Uq, Z);
    n = Uq.prototype;
    n.start = function() {
        var a = this
          , b = this.G.xa();
        this.ae = Vq(this);
        M(function(c) {
            c = c.toLowerCase();
            b.D(c, "NA:", C(a.md, a));
            b.D(c, "NR:", C(a.nd, a))
        }, qf);
        this.fb = [this.Xa.D(this.l.document, Tq, C(this.Ae, this)), function() {
            M(function(c) {
                c = c.toLowerCase();
                b.X(c, "NA:", a.md);
                b.X(c, "NR:", a.nd)
            }, qf);
            M(a.Id, td(a.inputs))
        }
        ]
    }
    ;
    n.Id = function(a) {
        var b = this.inputs[a];
        if (b) {
            if (this.ae) {
                var c = b.Yi;
                b = b.element;
                c && this.l.Object.defineProperty(b, Wq(b), c)
            }
            delete this.inputs[a]
        }
    }
    ;
    n.nd = function(a) {
        a && this.Id(a.data.id)
    }
    ;
    n.md = function(a) {
        a && (a = a.data,
        this.yd(a.node, a.id))
    }
    ;
    function Wq(a) {
        return nf(a) ? "checked" : "value"
    }
    n.Ae = function(a) {
        if (a = a.target) {
            var b = Wq(a);
            this.bd(a[b], a)
        }
    }
    ;
    n.bd = function(a, b) {
        var c = this.O(b)
          , d = this.inputs[c];
        if (!d && (d = this.yd(d, c),
        !d))
            return;
        var e = d;
        c = e.Bh;
        e = e.value;
        var f = Wq(b);
        a && !U(typeof a, ["string", "boolean", "number"]) || a === e || (e = Cq(this.l, b, f, a, this.G.rb()).value,
        c ? this.G.R("event", {
            target: this.O(b),
            checked: !!a
        }, "change") : (c = kj(this.l, b),
        f = c.Jb,
        this.G.R("event", {
            value: e,
            hidden: c.Qb && !f,
            target: this.O(b)
        }, "change")),
        d.value = a)
    }
    ;
    n.yd = function(a, b) {
        var c = this;
        if (!fj(a) || "__ym_input_override_test" === a.getAttribute("class") || this.inputs[b])
            return null;
        var d = nf(a)
          , e = Wq(a)
          , f = {
            element: a,
            Bh: d,
            value: a[e]
        };
        this.inputs[b] = f;
        this.ae && Wi(this.l, function() {
            var g = c.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(a), e) || {}
              , h = c.l.Object.getOwnPropertyDescriptor(a, e) || {}
              , k = O({}, g, h);
            if (xa("((set)?(\\s?" + e + ")?)?", k.set)) {
                try {
                    c.l.Object.defineProperty(a, e, O({}, k, {
                        configurable: !0,
                        set: function(l) {
                            c.bd(l, this);
                            return k.set.call(this, l)
                        }
                    }))
                } catch (l) {}
                f.Yi = k
            }
        }, this.J.Da("ri.ra"));
        return f
    }
    ;
    function Vq(a) {
        var b = !0
          , c = Ue(a.l)("input");
        try {
            c = Ue(a.l)("input");
            c.value = "INPUT_VALUE";
            c.style.setProperty("display", "none", "important");
            c.setAttribute("type", "text");
            c.setAttribute("class", "__ym_input_override_test");
            var d = a.l.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(c), "value") || {}
              , e = a.l.Object.getOwnPropertyDescriptor(c, "value") || {}
              , f = O({}, d, e);
            a.l.Object.defineProperty(c, "value", O({}, f, {
                configurable: !0,
                set: function(g) {
                    return f.set.call(c, g)
                }
            }));
            "INPUT_VALUE" !== c.value && (b = !1);
            c.value = "INPUT_TEST";
            "INPUT_TEST" !== c.value && (b = !1)
        } catch (g) {
            b = !1
        }
        return b
    }
    var Xq = ["mousemove", "mousedown", "mouseup", "click"];
    function Yq(a, b) {
        Z.call(this, a, b, "mo");
        this.ca.push([Xq, this.Si]);
        this.ia = new ck(a);
        this.Pa = this.J.H(this.Pa, "n");
        this.qf = this.J.H(dk(this.ia, C(this.Pa, this), 100), "t")
    }
    sa(Yq, Z);
    Yq.prototype.stop = function() {
        Z.prototype.stop.call(this);
        this.ia.flush()
    }
    ;
    Yq.prototype.Si = function(a) {
        var b = null;
        try {
            b = a.type
        } catch (c) {
            return
        }
        "mousemove" === b ? this.qf(a) : this.Pa(a)
    }
    ;
    Yq.prototype.Pa = function(a) {
        var b = a.type
          , c = void 0 === a.clientX ? null : a.clientX
          , d = void 0 === a.clientY ? null : a.clientY;
        b && (a = a.target || this.l.document.elementFromPoint(c, d),
        this.G.R("event", {
            x: c || 0,
            y: d || 0,
            target: this.O(a)
        }, b))
    }
    ;
    function Zq(a, b) {
        Z.call(this, a, b, "mu");
        this.Ba = {
            elements: [],
            attributes: []
        };
        this.index = 0;
        this.Se = this.J.H(this.Se, "o");
        this.Yd = this.J.H(this.Yd, "io");
        this.Nd = this.J.H(this.Nd, "ao");
        this.Ze = this.J.H(this.Ze, "a");
        this.Xe = this.J.H(this.Xe, "at");
        this.$e = this.J.H(this.$e, "r");
        this.Ye = this.J.H(this.Ye, "c");
        this.sa = new a.MutationObserver(this.Se)
    }
    sa(Zq, Z);
    n = Zq.prototype;
    n.start = function() {
        this.sa.observe(this.l.document.documentElement, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
            attributeOldValue: !0,
            characterDataOldValue: !0
        })
    }
    ;
    n.stop = function() {
        this.sa.disconnect()
    }
    ;
    n.Nd = function(a) {
        var b = a.target
          , c = a.attributeName
          , d = a.oldValue;
        a = b.getAttribute(c);
        if (a === d)
            return !1;
        d = nb(this.l)(b, this.Ba.elements);
        -1 === d && (d = this.Ba.elements.push(b) - 1,
        this.Ba.attributes[d] = {});
        this.Ba.attributes[d] || (this.Ba.attributes[d] = {});
        this.Ba.attributes[d][c] = Cq(this.l, b, c, a, this.G.rb()).value;
        return !0
    }
    ;
    n.Yd = function(a) {
        function b(g) {
            var h = nb(c.l)(g, d);
            return -1 === h ? (d.push(g),
            g = {
                me: {}
            },
            e.push(g),
            g) : e[h]
        }
        var c = this
          , d = []
          , e = [];
        M(function(g) {
            var h = g.attributeName
              , k = g.removedNodes
              , l = g.oldValue
              , m = g.target
              , p = g.nextSibling
              , q = g.previousSibling;
            switch (g.type) {
            case "attributes":
                if (c.Nd(g)) {
                    var v = b(m);
                    v.me[h] || (v.me[h] = Cq(c.l, m, h, l, c.G.rb()).value)
                }
                break;
            case "childList":
                k && M(function(t) {
                    v = b(t);
                    v.Xf || O(v, {
                        Xf: m,
                        bi: p ? p : void 0,
                        di: q ? q : void 0
                    })
                }, Wb(k));
                break;
            case "characterData":
                v = b(m),
                v.Yf || (v.Yf = l)
            }
        }, a);
        var f = this.G.xa();
        M(function(g, h) {
            f.Ed(g, e[h])
        }, d)
    }
    ;
    n.Se = function(a) {
        var b = this;
        if (Mj(this.l)) {
            var c = this.G.stamp();
            this.Yd(a);
            M(function(d) {
                var e = d.addedNodes
                  , f = d.removedNodes
                  , g = d.target;
                switch (d.type) {
                case "childList":
                    f && f.length && b.$e(Wb(f), c);
                    e && e.length && b.Ze(Wb(e), c);
                    break;
                case "characterData":
                    b.Ye(g, c)
                }
            }, a);
            this.Xe(c)
        } else
            this.stop()
    }
    ;
    n.Xe = function(a) {
        var b = this;
        M(function(c, d) {
            var e = $q(b)
              , f = {}
              , g = [];
            M(function(h) {
                var k = r(h);
                h = k.next().value;
                k = k.next().value;
                Oa(k) ? g.push(h) : f[h] = k
            }, sd(b.Ba.attributes[d]));
            b.G.R("mutation", {
                index: e,
                attributes: f,
                deletedAttributes: g,
                target: b.O(c)
            }, "ac", a)
        }, this.Ba.elements);
        this.Ba.elements = [];
        this.Ba.attributes = []
    }
    ;
    n.Ze = function(a, b) {
        var c = this
          , d = $q(this);
        this.G.xa().sb({
            nodes: a,
            Cd: function(e) {
                e = M(function(f) {
                    f.node = void 0;
                    return f
                }, e);
                c.G.R("mutation", {
                    index: d,
                    nodes: e
                }, "ad", b)
            }
        })
    }
    ;
    n.$e = function(a, b) {
        var c = this
          , d = $q(this)
          , e = this.G.xa()
          , f = M(function(g) {
            var h = e.removeNode(g);
            Iq(c.l, g, function(k) {
                e.removeNode(k)
            });
            return h
        }, a);
        this.G.R("mutation", {
            index: d,
            nodes: f
        }, "re", b)
    }
    ;
    n.Ye = function(a, b) {
        var c = $q(this)
          , d = this.O(a)
          , e = Gq(this.l, a, this.G.rb(), d, this.O(a.parentNode || a.parentElement));
        this.G.R("mutation", {
            value: e.content,
            target: d,
            index: c
        }, "tc", b)
    }
    ;
    function $q(a) {
        var b = a.index;
        a.index += 1;
        return b
    }
    var ar = K(function(a) {
        var b = I(a, "sessionStorage");
        if (!b)
            return null;
        try {
            var c = b.getItem("__ym_tab_guid");
            b = !1;
            var d = I(a, "opener.sessionStorage");
            try {
                b = !!d && c === d.getItem("__ym_tab_guid")
            } catch (e) {
                b = !0
            }
            if (!c || b)
                c = xj(),
                a.sessionStorage.setItem("__ym_tab_guid", c);
            return c
        } catch (e) {
            return null
        }
    });
    function br(a, b) {
        Z.call(this, a, b, "pa");
        this.hf = this.J.H(this.hf, "ps")
    }
    sa(br, Z);
    br.prototype.start = function() {
        this.G.xa().sb({
            nodes: [this.l.document.documentElement],
            Cd: this.hf
        })
    }
    ;
    br.prototype.hf = function(a) {
        var b = this.G.ri()
          , c = b.ji()
          , d = Ud(this.l)
          , e = d.host
          , f = d.protocol;
        d = d.pathname;
        var g = r(bf(this.l))
          , h = g.next().value;
        g = g.next().value;
        this.G.R("page", {
            content: M(function(k) {
                k.node = void 0;
                return k
            }, a),
            base: c || "",
            hasBase: !!c,
            viewport: {
                width: h,
                height: g
            },
            title: this.l.document.title,
            doctype: b.li() || "",
            address: this.l.location.href,
            ua: ub(this.l) || "",
            referrer: this.l.document.referrer,
            screen: {
                width: this.l.screen.width,
                height: this.l.screen.height
            },
            location: {
                host: e,
                protocol: f,
                path: d
            },
            recordStamp: this.G.we(),
            tabId: ar(this.l)
        }, "page", 0)
    }
    ;
    function cr(a, b) {
        Z.call(this, a, b, "sc");
        this.Eb = new qk;
        this.Gb = {
            x: 0,
            y: 0
        };
        this.ia = new ck(a);
        this.Qa = this.J.H(this.Qa, "o");
        this.ca.push([["scroll"], this.od])
    }
    sa(cr, Z);
    n = cr.prototype;
    n.start = function() {
        Z.prototype.start.call(this);
        this.G.R("event", {
            x: Math.max(this.l.scrollX, 0),
            y: Math.max(this.l.scrollY, 0),
            page: !0,
            target: -1
        }, "scroll", 0)
    }
    ;
    n.stop = function() {
        Z.prototype.stop.call(this);
        this.ia.flush()
    }
    ;
    n.od = function(a) {
        if (this.G.Ka().Ee())
            this.Qa(a);
        else {
            var b = a.target
              , c = this.Eb.get(b);
            c || (c = dk(this.ia, C(this.Qa, this), 100, {
                ke: !0
            }),
            this.Eb.set(b, c));
            c(a)
        }
    }
    ;
    n.Qa = function(a) {
        var b = this.G.Ka().nc();
        a = a.target;
        var c = this.$a(a);
        b = b === a || this.l === a || this.l.document === a;
        var d = Math.max(c.left, 0);
        c = Math.max(c.top, 0);
        if (b) {
            if (this.Gb.x === d && this.Gb.y === c)
                return;
            this.Gb = {
                x: d,
                y: c
            }
        }
        this.G.R("event", {
            x: d,
            y: c,
            page: b,
            target: b ? -1 : this.O(a)
        }, "scroll")
    }
    ;
    n.$a = function(a) {
        var b = {
            left: 0,
            top: 0
        };
        if (!a)
            return b;
        if (a.window === a)
            return {
                top: a.scrollY || 0,
                left: a.scrollX || 0
            };
        var c = a.ownerDocument || a
          , d = a;
        return a !== c || (d = this.G.Ka().nc(),
        d) ? U(d, [a.documentElement, c.body]) ? (a = c.defaultView || c.parentWindow || {},
        {
            top: d.scrollTop || a.scrollY || 0,
            left: d.scrollLeft || a.scrollX || 0
        }) : {
            top: d.scrollTop || 0,
            left: d.scrollLeft || 0
        } : b
    }
    ;
    function dr(a, b) {
        Z.call(this, a, b, "src");
        this.ca.push([["load"], this.Ri, this.l.document])
    }
    sa(dr, Z);
    dr.prototype.Ri = function(a) {
        a = a.target;
        "IMG" === ff(a) && a.getAttribute("srcset") && this.G.R("mutation", {
            target: this.O(a),
            attributes: {
                src: a.currentSrc
            }
        }, "ac")
    }
    ;
    var er = ["addRule", "removeRule", "insertRule", "deleteRule"];
    function fr(a, b) {
        Z.call(this, a, b, "ss");
        this.hb = {};
        this.Ec = {};
        this.Hf = 0;
        this.qd = this.J.H(this.qd, "a");
        this.Ia = this.J.H(this.Ia, "sr");
        this.rd = this.J.H(this.rd, "r");
        this.ea = this.J.H(this.ea, "d");
        this.Sb = this.J.H(this.Sb, "ro");
        this.Bb = this.J.H(this.Bb, "rr")
    }
    sa(fr, Z);
    n = fr.prototype;
    n.start = function() {
        var a = this.G.xa();
        a.D("style", "NA:", this.qd);
        a.D("style", "NR:", this.rd);
        this.ea()
    }
    ;
    n.stop = function() {
        var a = this;
        Z.prototype.stop.call(this);
        var b = this.G.xa();
        b.X("style", "NA:", this.qd);
        b.X("style", "NR:", this.rd);
        this.ea();
        Kd(this.l, this.Hf);
        M(function(c) {
            a.hb[c].sheet && gr(a, a.hb[c].sheet)
        }, td(this.hb));
        this.hb = {}
    }
    ;
    n.ea = function() {
        var a = this;
        M(function(b) {
            b = r(b);
            var c = b.next().value;
            b = b.next().value;
            if (b.length) {
                for (var d = [], e = b[0].stamp, f = [], g = 0; g < b.length; g += 1) {
                    var h = b[g]
                      , k = h.stamp;
                    delete h.stamp;
                    k <= e + 50 ? d.push(h) : (f.push(d),
                    e = k,
                    d = [h])
                }
                d.length && f.push(d);
                f.length && M(function(l) {
                    a.G.R("event", {
                        target: fb(c),
                        changes: l
                    }, "stylechange", e)
                }, f);
                delete a.Ec[c]
            }
        }, sd(this.Ec));
        this.Hf = W(this.l, this.ea, 100, this.J.Da("sd"))
    }
    ;
    n.Ia = function(a, b) {
        this.Ec[a] || (this.Ec[a] = []);
        this.Ec[a].push(b)
    }
    ;
    function hr(a, b, c) {
        var d = b.addRule
          , e = b.removeRule
          , f = b.insertRule
          , g = b.deleteRule;
        y(d) && (b.addRule = function(k, l, m) {
            var p = a.G.stamp()
              , q = d.call(b, k, l, m);
            a.Ia(c, {
                op: "a",
                stamp: p,
                style: k + "{" + l + "}",
                index: m
            });
            return q
        }
        );
        y(e) && (b.removeRule = function(k) {
            var l = a.G.stamp()
              , m = ir(b)
              , p = k || 0;
            m && m[p] && a.Bb(m[p]);
            m = e.call(b, k);
            a.Ia(c, {
                op: "r",
                stamp: l,
                index: k
            });
            return m
        }
        );
        y(f) && (b.insertRule = function(k, l) {
            var m = a.G.stamp()
              , p = f.call(b, k, l)
              , q = ir(b);
            q && q[p] && a.Sb(c, null, q[p]);
            a.Ia(c, {
                op: "a",
                stamp: m,
                index: l,
                style: k
            });
            return p
        }
        );
        y(g) && (b.deleteRule = function(k) {
            var l = a.G.stamp()
              , m = ir(b)
              , p = k || 0;
            m && m[p] && a.Bb(m[p]);
            m = g.call(b, k);
            a.Ia(c, {
                op: "r",
                stamp: l,
                index: k
            });
            return m
        }
        );
        var h = ir(b);
        h && M(C(a.Sb, a, c, null), h)
    }
    function gr(a, b) {
        M(function(d) {
            var e = I(a.l, "CSSStyleSheet.prototype." + d);
            y(e) && H(b, d) && b[d] !== e && (b[d] = C(e, b))
        }, er);
        var c = ir(b);
        c && M(C(a.Bb, a), c)
    }
    n.Sb = function(a, b, c) {
        var d = this
          , e = b || c;
        b = this.hb[a];
        if (!b || !b.sheet)
            throw Cc("missing style sheet");
        var f = b.sheet
          , g = c.insertRule
          , h = c.deleteRule;
        y(g) && (c.insertRule = function(k, l) {
            var m = d.G.stamp()
              , p = g.call(c, k, l)
              , q = ir(c);
            q && q[p] && d.Sb(a, e, q[p]);
            q = ob(e, ir(f) || []);
            d.Ia(a, {
                op: "r",
                stamp: m,
                index: q
            });
            d.Ia(a, {
                op: "a",
                stamp: m,
                index: q,
                style: e.cssText
            });
            return p
        }
        );
        y(h) && (c.deleteRule = function(k) {
            var l = d.G.stamp()
              , m = ir(f)
              , p = k || 0;
            m && m[p] && d.Bb(m[p]);
            k = h.call(c, k);
            m = ob(c, ir(f) || []);
            d.Ia(a, {
                op: "r",
                stamp: l,
                index: m
            });
            d.Ia(a, {
                op: "a",
                stamp: l,
                index: m,
                style: e.cssText
            });
            return k
        }
        );
        (b = ir(c)) && M(C(this.Sb, this, a, e), b)
    }
    ;
    n.Bb = function(a) {
        var b = I(this.l, "CSSGroupingRule.prototype.insertRule");
        y(b) && H(a, "insertRule") && a.insertRule !== b && (a.insertRule = C(b, a));
        b = I(this.l, "CSSGroupingRule.prototype.deleteRule");
        y(b) && H(a, "removeRule") && a.deleteRule !== b && (a.deleteRule = C(b, a));
        (a = ir(a)) && M(C(this.Bb, this), a)
    }
    ;
    function ir(a) {
        try {
            return a.cssRules || a.rules
        } catch (b) {
            return null
        }
    }
    n.qd = function(a) {
        var b = a.data;
        a = b.id;
        b = b.node;
        if (b.sheet && !b.getAttribute("src") && !b.innerText) {
            var c = b.sheet
              , d = ir(c);
            if (d && d.length) {
                for (var e = [], f = 0; f < d.length; f += 1)
                    e.push({
                        style: d[f].cssText,
                        index: f,
                        op: "a"
                    });
                this.G.R("event", {
                    changes: e,
                    target: a
                }, "stylechange")
            }
            this.hb[a] = b;
            hr(this, c, a)
        }
    }
    ;
    n.rd = function(a) {
        a = a.data.id;
        var b = this.hb[a];
        b && (delete this.hb[a],
        b.sheet && gr(this, b.sheet))
    }
    ;
    var jr = /^\s*function submit\(\)/;
    function kr(a, b) {
        Z.call(this, a, b, "smc");
        this.forms = {};
        this.vc = ":submit" + a.Math.random();
        this.ca.push([["submit"], this.zi]);
        this.xd = this.J.H(this.xd, "rf");
        this.Hc = this.J.H(this.Hc, "uf")
    }
    sa(kr, Z);
    kr.prototype.start = function() {
        var a = this;
        Z.prototype.start.call(this);
        var b = this.G.xa();
        b.D("form", "NA:", this.xd);
        b.D("form", "NR:", this.Hc);
        this.fb.push(function() {
            b.X("form", "NA:", a.xd);
            b.X("form", "NR:", a.Hc);
            M(a.Hc, wd(a.forms))
        })
    }
    ;
    kr.prototype.xd = function(a) {
        var b = a.data
          , c = b.id;
        b = b.node;
        this.forms[c] || (this.forms[c] = a,
        lr(this, b))
    }
    ;
    kr.prototype.Hc = function(a) {
        var b = a.data;
        a = b.id;
        b = b.node;
        b[this.vc] && (b.submit = b[this.vc],
        delete b[this.vc]);
        delete this.forms[a]
    }
    ;
    function mr(a) {
        a = a.submit;
        return y(a) || Pa(a) && jr.test("" + a)
    }
    function lr(a, b) {
        mr(b) && (b[a.vc] = b.submit,
        b.submit = a.J.H(function() {
            nr(a, b);
            return b[a.vc]()
        }, "os"))
    }
    kr.prototype.zi = function(a) {
        a.target && nr(this, a.target)
    }
    ;
    function nr(a, b) {
        if ("FORM" === b.nodeName && !ej(b)) {
            var c = a.O(b);
            if (c) {
                var d = G(function(e, f) {
                    if (!sf(f)) {
                        var g = a.O(f);
                        g && e.push(g)
                    }
                    return e
                }, [], b.elements);
                a.G.R("event", {
                    formId: c,
                    filledDomNodes: d
                }, "submit")
            }
        }
    }
    var or = [fr, Uq, Zq, ek, cr, Yq, Qj, wk, Ek, Bk, dr, Fk, ak, kr];
    or.push(Rq);
    or.push(br);
    function pr(a, b) {
        var c = Le(a)
          , d = "wv2rf:" + V(b)
          , e = b.Rc
          , f = c.C(d)
          , g = b.vj;
        return Oa(f) ? xf(Li(b, function(h) {
            var k = !!I(h, "settings.webvisor.forms");
            h = !I(h, "settings.x3") && k;
            c.F(d, zd(h));
            return {
                Rc: e,
                yg: h,
                gh: g,
                Hb: or,
                Ld: Pq,
                Md: Hk,
                Sa: "wv2",
                ah: 2147483647
            }
        })) : yf({
            Rc: e,
            yg: !!fb(f),
            gh: g,
            Hb: or,
            Ld: Pq,
            Md: Hk,
            Sa: "wv2",
            ah: 2147483647
        })
    }
    var qr = S("wv2", function(a, b) {
        var c = Q(a)
          , d = c.C
          , e = c.F;
        if (b.Yb)
            if ($b(a))
                e("w2s", 1);
            else if (a.MutationObserver) {
                if (xa("Element", a.Element)) {
                    var f = V(b);
                    xa("MutationObserver", a.MutationObserver) || ri(a, f).warn("w2mo");
                    c = xf(Li(b, J));
                    var g = zf(a, "wv2")(wf(D([a, b], pr)))(vf(function(l) {
                        return new Nj(a,l)
                    }))
                      , h = !1
                      , k = function() {
                        h = !0
                    };
                    tq([g, c])(uf(R(a, "wv2.R.c"), function(l) {
                        l = r(l);
                        var m = l.next().value;
                        l = l.next().value;
                        if (h)
                            e("w2s", 4);
                        else if (k = C(m.stop, m),
                        d("wv2Counter"))
                            e("w2s", 5),
                            k();
                        else if (Ji(a, l)) {
                            e("wv2Counter", f);
                            e("stopRecorder", function() {
                                e("w2s", 13);
                                k()
                            });
                            l = new Gi(a,"6");
                            var p = new Lq(a,b,l.type,k)
                              , q = new zj(a,l,C(p.Mi, p),"wv2")
                              , v = new zj(a,l,C(p.Uh, p),"wv2");
                            Rd(a) ? Qd(a).D(a, ["pagehide"], function(u) {
                                u.persisted ? (q.flush(!0),
                                v.flush(!0)) : (e("w2s", 8),
                                k())
                            }, null) : Qd(a).D(a, ["beforeunload", "unload"], function() {
                                e("w2s", 9);
                                k()
                            });
                            l = Oq();
                            p = l.Eh;
                            v.D("ag", l.sh);
                            v.D("p", p);
                            v.D("se", function z() {
                                e("w2s", 17);
                                v.X("se", z)
                            });
                            q.D("se", function E() {
                                e("w2s", 16);
                                v.X("se", E)
                            });
                            q.D("see", function(E) {
                                var Y = !1;
                                M(function(ha) {
                                    "page" === ha.type && (Y = !0)
                                }, E);
                                Y && (h || v.push(zq),
                                e("w2s", 10),
                                k())
                            });
                            var t = Hb(function(E) {
                                "eof" === I(E, "data.type") || "eof" === E.event ? (v.push(E),
                                q.push(E),
                                v.flush(!0),
                                q.flush(!0)) : ("event" === E.type ? v : q).push(E)
                            });
                            W(a, function() {
                                e("w2s", 11);
                                k()
                            }, 864E5, "wv2.htl");
                            Wi(a, function() {
                                var E = {}
                                  , Y = {};
                                Ig(a, (Y.counterKey = f,
                                Y.name = "webvisor",
                                Y.data = (E.version = 2,
                                E),
                                Y));
                                e("w2s", 15);
                                m.start(t)
                            }, "wv2.rsc")
                        } else
                            e("w2s", 6),
                            k()
                    }));
                    return function() {
                        e("w2s", 12);
                        k()
                    }
                }
                e("w2s", 3)
            } else
                e("w2s", 2);
        else
            e("w2s", 0)
    });
    X("wv2", Mh(mh), 2);
    ii("wv", Hi, 1);
    var rr = ["f", "x"];
    rr.unshift("s");
    X("wv2", yj, 3);
    ih.wv2 = rr;
    oi.wv2 = Jq;
    tg.push(qr);
    sg.push(Kq);
    Gf({
        Yb: {
            ga: "webvisor"
        }
    });
    Gf({
        vj: {
            ga: "trustedDomains"
        },
        Rc: {
            ga: "childIframe",
            cb: Ad
        }
    });
    function sr(a) {
        a = Be(a);
        return Math.round(a(Ae) / 50)
    }
    function tr(a, b) {
        var c = a.document.getElementsByTagName("form");
        return nb(a)(b, Wb(c))
    }
    function ur(a, b) {
        var c = xg([], a)
          , d = c.shift();
        if (!d)
            return [];
        d = b.getElementsByTagName(d);
        return c.length ? Gb(F(c, ur), Wb(d)) : Wb(d)
    }
    function vr(a, b, c) {
        if (Bg(a))
            return Wb(c.querySelectorAll(b));
        var d = ur(b.split(" "), c);
        return Dd(function(e, f) {
            return nb(a)(e, d) === f
        }, d)
    }
    function wr(a, b) {
        var c = Ni(a, b)
          , d = c.left;
        c = c.top;
        var e = r(Oi(a, b))
          , f = e.next().value;
        e = e.next().value;
        return [d, c, f, e]
    }
    var xr = ki("fv");
    function yr(a) {
        var b = zr;
        this.type = "0";
        this.l = a;
        this.ki = b
    }
    n = yr.prototype;
    n.oa = function(a) {
        return yf(Gb(C(this.Cc, this), a))
    }
    ;
    n.Cc = function(a, b) {
        var c = this
          , d = []
          , e = this.ki(this.l, b && b.type, a.type);
        e && (d = Gb(function(f) {
            return f({
                l: c.l,
                wa: a
            }) || []
        }, e));
        return d
    }
    ;
    n.lc = function(a) {
        return a.length
    }
    ;
    n.Rg = function(a) {
        return [a]
    }
    ;
    n.isEnabled = function() {
        return !0
    }
    ;
    function Ar(a, b, c) {
        Vi.call(this, a, c, "fw");
        this.buffer = [];
        this.oh = 7500;
        this.Kd = 3E4;
        this.qa = b;
        this.Dd()
    }
    sa(Ar, Vi);
    Ar.prototype.push = function(a, b) {
        var c = this.qa.Cc(a, b);
        xg(this.buffer, c);
        this.qa.lc(this.buffer) > this.oh && this.flush()
    }
    ;
    Ar.prototype.flush = function() {
        var a = this.buffer;
        a.length && (this.send(a),
        this.buffer = [])
    }
    ;
    var Br = "metrikaId_" + Math.random()
      , Cr = {
        counter: 0
    }
      , Dr = K(function() {
        var a = {};
        return a.A = 1,
        a.ABBR = 2,
        a.ACRONYM = 3,
        a.ADDRESS = 4,
        a.APPLET = 5,
        a.AREA = 6,
        a.B = 7,
        a.BASE = 8,
        a.BASEFONT = 9,
        a.BDO = 10,
        a.BIG = 11,
        a.BLOCKQUOTE = 12,
        a.BODY = 13,
        a.BR = 14,
        a.BUTTON = 15,
        a.CAPTION = 16,
        a.CENTER = 17,
        a.CITE = 18,
        a.CODE = 19,
        a.COL = 20,
        a.COLGROUP = 21,
        a.DD = 22,
        a.DEL = 23,
        a.DFN = 24,
        a.DIR = 25,
        a.DIV = 26,
        a.DL = 27,
        a.DT = 28,
        a.EM = 29,
        a.FIELDSET = 30,
        a.FONT = 31,
        a.FORM = 32,
        a.FRAME = 33,
        a.FRAMESET = 34,
        a.H1 = 35,
        a.H2 = 36,
        a.H3 = 37,
        a.H4 = 38,
        a.H5 = 39,
        a.H6 = 40,
        a.HEAD = 41,
        a.HR = 42,
        a.HTML = 43,
        a.I = 44,
        a.IFRAME = 45,
        a.IMG = 46,
        a.INPUT = 47,
        a.INS = 48,
        a.ISINDEX = 49,
        a.KBD = 50,
        a.LABEL = 51,
        a.LEGEND = 52,
        a.LI = 53,
        a.LINK = 54,
        a.MAP = 55,
        a.MENU = 56,
        a.META = 57,
        a.NOFRAMES = 58,
        a.NOSCRIPT = 59,
        a.OBJECT = 60,
        a.OL = 61,
        a.OPTGROUP = 62,
        a.OPTION = 63,
        a.P = 64,
        a.PARAM = 65,
        a.PRE = 66,
        a.Q = 67,
        a.S = 68,
        a.SAMP = 69,
        a.SCRIPT = 70,
        a.SELECT = 71,
        a.SMALL = 72,
        a.SPAN = 73,
        a.STRIKE = 74,
        a.STRONG = 75,
        a.STYLE = 76,
        a.SUB = 77,
        a.SUP = 78,
        a.TABLE = 79,
        a.TBODY = 80,
        a.TD = 81,
        a.TEXTAREA = 82,
        a.TFOOT = 83,
        a.TH = 84,
        a.THEAD = 85,
        a.TITLE = 86,
        a.TR = 87,
        a.TT = 88,
        a.U = 89,
        a.UL = 90,
        a.VAR = 91,
        a.NOINDEX = 100,
        a
    })
      , Er = [17, 18, 38, 32, 39, 15, 11, 7, 1];
    function Fr(a, b) {
        var c = Math.max(0, Math.min(b, 65535));
        xg(a, [c >> 8, c & 255])
    }
    function Gr(a, b) {
        xg(a, [b & 255])
    }
    function Hr(a, b, c) {
        return -1 !== nb(a)(c, Er) ? (Gr(b, c),
        !1) : !0
    }
    function Ir(a, b) {
        for (var c = Math.max(0, b | 0); 127 < c; )
            xg(a, [c & 127 | 128]),
            c >>= 7;
        xg(a, [c])
    }
    function Jr(a, b) {
        Ir(a, b.length);
        for (var c = 0; c < b.length; c += 1)
            Ir(a, b.charCodeAt(c))
    }
    function Kr(a, b) {
        var c = b;
        255 < c.length && (c = c.substr(0, 255));
        a.push(c.length);
        for (var d = 0; d < c.length; d += 1)
            Fr(a, c.charCodeAt(d))
    }
    function Lr(a, b) {
        var c = [];
        if (Hr(a, c, 27))
            return [];
        Ir(c, b);
        return c
    }
    function Mr(a, b) {
        var c = ff(b);
        if (!c)
            return b[Br] = -1,
            null;
        var d = +b[Br];
        if (!isFinite(d) || 0 >= d)
            return null;
        if (b.attributes)
            for (var e = b; e; ) {
                if (e.attributes.Kj)
                    return null;
                e = e.parentElement
            }
        e = 64;
        var f = Pi(a, b)
          , g = f && f[Br] ? f[Br] : 0;
        0 > g && (g = 0);
        c = (c || "").toUpperCase();
        var h = Dr()[c];
        h || (e |= 2);
        var k = Qi(a, b);
        k || (e |= 4);
        var l = wr(a, b);
        (f = f ? wr(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
        Cr[d].sg = l[0] + "x" + l[1];
        Cr[d].size = l[2] + "x" + l[3];
        b.id && "string" === typeof b.id && (e |= 32);
        f = [];
        if (Hr(a, f, 1))
            return null;
        Ir(f, d);
        Gr(f, e);
        Ir(f, g);
        h ? Gr(f, h) : Kr(f, c);
        k && Ir(f, k);
        e & 8 || (Ir(f, l[0]),
        Ir(f, l[1]),
        Ir(f, l[2]),
        Ir(f, l[3]));
        e & 32 && Kr(f, b.id);
        Gr(f, 0);
        return f
    }
    function Nr(a, b) {
        var c = b[Br];
        if (!c || 0 > c || !of(b) || !b.form || ej(b.form))
            return [];
        var d = tr(a, b.form);
        if (0 > d)
            return [];
        if (hf(b))
            var e = {
                text: 0,
                color: 0,
                Uc: 0,
                Pj: 0,
                "datetime-local": 0,
                email: 0,
                og: 0,
                ak: 0,
                search: 0,
                jk: 0,
                time: 0,
                url: 0,
                month: 0,
                mk: 0,
                password: 2,
                $j: 3,
                Nj: 4,
                file: 6,
                image: 7
            }[b.type];
        else {
            e = {
                Hj: 1,
                Ij: 5
            };
            var f = ff(b);
            e = A(f) ? "" : e[f]
        }
        if ("number" !== typeof e)
            return [];
        f = -1;
        for (var g = b.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
            if (g[k].name === b.name) {
                if (g[k] === b) {
                    f = l;
                    break
                }
                l += 1
            }
        if (0 > f)
            return [];
        g = [];
        if (Hr(a, g, 7))
            return [];
        Ir(g, c);
        Ir(g, d);
        Ir(g, e);
        Jr(g, b.name || "");
        Ir(g, f);
        return g
    }
    var Or = Hb(F("\u2022", J));
    function Pr(a, b, c) {
        var d = b[Br];
        if (d) {
            a: {
                var e = sr(a)
                  , f = b[Br];
                if (0 < f) {
                    var g = [];
                    b = wr(a, b);
                    var h = Cr[f]
                      , k = b[0] + "x" + b[1]
                      , l = b[2] + "x" + b[3];
                    if (k !== h.sg) {
                        h.sg = k;
                        if (Hr(a, g, 9)) {
                            a = [];
                            break a
                        }
                        Ir(g, e);
                        Ir(g, f);
                        Ir(g, b[0]);
                        Ir(g, b[1])
                    }
                    if (l !== h.size) {
                        h.size = l;
                        if (Hr(a, g, 10)) {
                            a = [];
                            break a
                        }
                        Ir(g, e);
                        Ir(g, f);
                        Ir(g, b[2]);
                        Ir(g, b[3])
                    }
                    if (g.length) {
                        a = g;
                        break a
                    }
                }
                a = []
            }
            xg(c, a)
        }
        return d
    }
    function Qr(a, b) {
        var c = void 0 === c ? [] : c;
        for (var d = [], e = b; e && !Pr(a, e, c); e = Pi(a, e))
            d.push(e);
        M(function(f) {
            Cr.counter += 1;
            var g = Cr.counter;
            f[Br] = g;
            Cr[g] = {};
            g = Mr(a, f);
            f = Nr(a, f);
            g && f && (xg(c, g),
            xg(c, f))
        }, Zk(d));
        return c
    }
    var Rr = !0;
    function Sr(a) {
        if (!Rr) {
            Rr = !0;
            a = sr(a.l);
            var b = [];
            Gr(b, 14);
            Ir(b, a);
            return b
        }
    }
    function Tr(a) {
        if (Rr) {
            Rr = !1;
            var b = a.l;
            a = sr(a.l);
            var c = [];
            Hr(b, c, 15) ? b = [] : (Ir(c, a),
            b = c);
            return b
        }
    }
    function Ur(a) {
        var b = a.wa;
        if (!Rr || b && !b.fromElement)
            return Sr(a)
    }
    function Vr(a) {
        var b = a.wa;
        if (b && !b.toElement)
            return Tr(a)
    }
    function Wr(a, b) {
        var c = a.l
          , d = []
          , e = b.form;
        if (!b[Br] && e) {
            var f = e.elements;
            e = e.length;
            for (var g = 0; g < e; g += 1) {
                var h = f[g];
                pf(h) && !h[Br] && xg(d, Qr(c, h))
            }
        } else
            xg(d, Qr(c, b));
        return d
    }
    function Xr(a) {
        var b = We(a.l, a.wa);
        if (b && pf(b)) {
            var c = Wr(a, b)
              , d = c.concat;
            var e = a.l;
            a = sr(a.l);
            var f = [];
            Hr(e, f, 17) ? b = [] : (Ir(f, a),
            Ir(f, b[Br]),
            b = f);
            return d.call(c, b)
        }
    }
    function Yr(a) {
        var b = a.l
          , c = a.wa.target;
        if (c && pf(c)) {
            b = Qr(b, c);
            var d = b.concat;
            var e = a.l;
            a = sr(a.l);
            var f = [];
            Hr(e, f, 18) ? c = [] : (Ir(f, a),
            Ir(f, c[Br]),
            c = f);
            return d.call(b, c)
        }
    }
    function Zr(a) {
        var b = a.l
          , c = We(b, a.wa);
        if (!c || ij(c) || hj(c))
            return [];
        if (of(c)) {
            var d = kj(b, c)
              , e = d.eb
              , f = d.Qb;
            d = d.Jb;
            if (nf(c))
                var g = c.checked;
            else
                g = c.value,
                g = e ? P("", Or(g.split(""))) : g;
            b = Qr(b, c);
            e = b.concat;
            var h = a.l;
            a = sr(a.l);
            var k = [];
            Hr(h, k, 39) ? c = [] : (Ir(k, a),
            Ir(k, c[Br]),
            Kr(k, String(g)),
            Gr(k, f && !d ? 1 : 0),
            c = k);
            return e.call(b, c)
        }
    }
    function $r(a) {
        var b = a.l
          , c = a.wa
          , d = We(b, c);
        if (!d || "SCROLLBAR" === d.nodeName)
            return [];
        var e = []
          , f = F(e, xg);
        d && pf(d) ? f(Wr(a, d)) : f(Qr(b, d));
        var g = Wk(b, c);
        f = e.concat;
        a = sr(a.l);
        var h = c.type
          , k = [g.x, g.y];
        g = c.which;
        c = c.button;
        var l = r(Oi(b, d))
          , m = l.next().value;
        for (l = l.next().value; d && (!m || !l); )
            if (d = Pi(b, d))
                l = r(Oi(b, d)),
                m = l.next().value,
                l = l.next().value;
        if (d)
            if (m = d[Br],
            !m || 0 > m)
                b = [];
            else {
                l = {};
                var p = (l.mousemove = 2,
                l.click = 32,
                l.dblclick = 33,
                l.mousedown = 4,
                l.mouseup = 30,
                l.touch = 12,
                l)[h];
                p ? (l = [],
                d = Ni(b, d),
                Hr(b, l, p) ? b = [] : (Ir(l, a),
                Ir(l, m),
                Ir(l, Math.max(0, k[0] - d.left)),
                Ir(l, Math.max(0, k[1] - d.top)),
                /^mouse(up|down)|click$/.test(h) && (b = g || c,
                Gr(l, 2 > b ? 1 : b === (g ? 2 : 4) ? 4 : 2)),
                b = l)) : b = []
            }
        else
            b = [];
        return f.call(e, b)
    }
    var as = "";
    function bs(a) {
        var b = null
          , c = a.l
          , d = c.document;
        if (c.getSelection) {
            try {
                var e = c.getSelection()
            } catch (g) {
                return []
            }
            if (Oa(e))
                return [];
            var f = "" + e;
            b = e.anchorNode
        } else
            d.selection && d.selection.createRange && (b = d.selection.createRange(),
            f = b.text,
            b = b.parentElement());
        if ("string" !== typeof f)
            return [];
        try {
            for (; b && 1 !== b.nodeType; )
                b = b.parentNode
        } catch (g) {
            return []
        }
        if (!b)
            return [];
        d = kj(c, b).eb || hj(b, !0);
        b = b.getElementsByTagName("*");
        for (e = 0; e < b.length && !d; )
            d = b[e],
            d = kj(c, d).eb || hj(d, !0),
            e += 1;
        if (f !== as)
            return as = f,
            b = d ? P("", Or(f.split(""))) : f,
            f = a.l,
            a = sr(a.l),
            0 === b.length ? b = c = "" : 100 >= b.length ? (c = b,
            b = "") : 200 >= b.length ? (c = b.substr(0, 100),
            b = b.substr(100)) : (c = b.substr(0, 97),
            b = b.substr(b.length - 97)),
            d = [],
            Hr(f, d, 29) ? a = [] : (Ir(d, a),
            Jr(d, c),
            Jr(d, b),
            a = d),
            a
    }
    function cs(a) {
        return $r(a).concat(bs(a) || [])
    }
    function ds(a) {
        return (a.shiftKey ? 2 : 0) | (a.ctrlKey ? 4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
    }
    var es = !1;
    function fs(a) {
        var b = [];
        es || (es = !0,
        as && xg(b, Lr(a.l, sr(a.l))),
        Wi(a.l, function() {
            es = !1
        }, "fv.c"));
        return b
    }
    function gs(a, b, c, d) {
        b = We(a, b);
        if (!b || jj(a, b))
            return [];
        var e = kj(a, b)
          , f = e.Qb
          , g = e.Jb;
        e = e.eb;
        var h = Q(a);
        if (!g && (f && h.C("isEU") || hj(b)))
            a = [];
        else {
            f = Qr(a, b);
            g = f.concat;
            var k = sr(a);
            h = [];
            if (Hr(a, h, 38))
                a = [];
            else {
                Ir(h, k);
                Fr(h, c);
                Gr(h, d);
                a = b[Br];
                if (!a || 0 > a)
                    a = 0;
                Ir(h, a);
                Gr(h, e ? 1 : 0);
                a = h
            }
            a = g.call(f, a)
        }
        return a
    }
    var hs = !0;
    function is(a) {
        var b = a.l
          , c = a.wa
          , d = c.keyCode
          , e = ds(c)
          , f = []
          , g = F(f, xg);
        if ({
            3: 1,
            8: 1,
            9: 1,
            13: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            27: 1,
            33: 1,
            34: 1,
            35: 1,
            36: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1,
            45: 1,
            46: 1,
            91: 1,
            92: 1,
            93: 1,
            106: 1,
            110: 1,
            111: 1,
            144: 1,
            145: 1
        }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16)
            19 === d && 4 === (e & -17) && (d = 144),
            g(gs(b, c, d, e | 16)),
            hs = !1,
            Wi(b, function() {
                hs = !0
            }, "fv.kd"),
            !(67 === d && e & 4) || e & 1 || e & 2 || g(fs(a));
        return f
    }
    var js = !1;
    function ks(a) {
        var b = a.l;
        a = a.wa;
        var c = [];
        hs && !js && 0 !== a.which && (xg(c, gs(b, a, a.charCode || a.keyCode, ds(a))),
        js = !0,
        Wi(b, function() {
            js = !1
        }, "fv.kp"));
        return c
    }
    function ls(a) {
        var b = a.l
          , c = We(b, a.wa);
        if (!c || ej(c))
            return [];
        var d = [];
        if ("FORM" === c.nodeName) {
            for (var e = c.elements, f = 0; f < e.length; f += 1)
                sf(e[f]) || xg(d, Qr(b, e[f]));
            a = sr(a.l);
            e = tr(b, c);
            if (0 > e)
                b = [];
            else {
                f = c.elements;
                var g = f.length;
                c = [];
                for (var h = 0; h < g; h += 1)
                    if (!sf(f[h])) {
                        var k = f[h][Br];
                        k && 0 < k && c.push(k)
                    }
                f = [];
                if (Hr(b, f, 11))
                    b = [];
                else {
                    Ir(f, a);
                    Ir(f, e);
                    Ir(f, c.length);
                    for (b = 0; b < c.length; b += 1)
                        Ir(f, c[b]);
                    b = f
                }
            }
            xg(d, b)
        }
        return d
    }
    function ms(a) {
        var b = a.flush;
        "BODY" === ff(We(a.l, a.wa)) && b()
    }
    var ns = Ja(function(a, b) {
        var c = D([a, "efv." + b.event], R);
        b.Y = M(N(J, c), b.Y);
        return b
    });
    function os(a, b) {
        var c = Dd(function(e) {
            return 0 < e.Y.length
        }, b)
          , d = Mb({
            target: a.document,
            type: "document"
        });
        return M(N(J, d, ns(a)), c)
    }
    var ps = K(function(a) {
        var b = []
          , c = []
          , d = [];
        a.document.attachEvent && !a.opera && (b.push(Tr),
        c.push(Ur),
        c.push(Vr));
        a.document.addEventListener ? b.push(Yr) : (c.push(Xr),
        d.push(Yr));
        return os(a, (Rd(a) ? [] : [{
            target: a,
            type: "window",
            event: "beforeunload",
            Y: [w]
        }, {
            target: a,
            type: "window",
            event: "unload",
            Y: [w]
        }]).concat([{
            event: "click",
            Y: [$r]
        }, {
            event: "dblclick",
            Y: [$r]
        }, {
            event: "mousedown",
            Y: [$r]
        }, {
            event: "mouseup",
            Y: [cs]
        }, {
            event: "keydown",
            Y: [is]
        }, {
            event: "keypress",
            Y: [ks]
        }, {
            event: "copy",
            Y: [fs]
        }, {
            event: "blur",
            Y: b
        }, {
            event: "focusin",
            Y: c
        }, {
            event: "focusout",
            Y: d
        }]).concat(!a.document.attachEvent || a.opera ? [{
            target: a,
            type: "window",
            event: "focus",
            Y: [Sr]
        }, {
            target: a,
            type: "window",
            event: "blur",
            Y: [Tr]
        }] : []).concat(a.document.addEventListener ? [{
            event: "focus",
            Y: [Xr]
        }, {
            event: "change",
            Y: [Zr]
        }, {
            event: "submit",
            Y: [ls]
        }] : [{
            type: "formInput",
            event: "change",
            Y: [Zr]
        }, {
            type: "form",
            event: "submit",
            Y: [ls]
        }]))
    })
      , qs = K(function(a) {
        var b = [];
        Ze(a) && b.push({
            target: a,
            type: "document",
            event: "mouseleave",
            Y: [ms]
        });
        Rd(a) && b.push({
            target: a,
            type: "window",
            event: "pagehide",
            Y: [function(c) {
                c = c.flush;
                c()
            }
            ]
        });
        return b
    })
      , rs = ["submit", "beforeunload", "unload"]
      , ss = K(function(a, b) {
        var c = b(a);
        return G(function(d, e) {
            d[e.type + ":" + e.event] = e.Y;
            return d
        }, {}, c)
    })
      , zr = F(ps, function(a, b, c, d) {
        return ss(b, a)[c + ":" + d] || []
    })
      , ts = /^\s*function submit\(\)/;
    function us(a, b) {
        var c = a.document
          , d = []
          , e = Qd(a)
          , f = ":submit" + Math.random()
          , g = []
          , h = C(b.flush, b)
          , k = Ja(function(l, m) {
            R(a, "hfv." + l, function() {
                try {
                    var p = m.type
                } catch (q) {
                    return
                }
                p = U(p, rs);
                b.push(m, {
                    type: l
                });
                p && h()
            })()
        });
        return {
            start: R(a, "sfv", function() {
                var l = ps(a)
                  , m = qs(a);
                M(function(p) {
                    d.push(e.D(p.target, [p.event], k(p.type)))
                }, l);
                M(function(p) {
                    d.push(e.D(p.target, [p.event], R(a, "hff." + p.type + "." + p.event, function(q) {
                        M(Na({
                            l: a,
                            wa: q,
                            flush: h
                        }), p.Y)
                    })))
                }, m);
                g = vr(a, "form", c);
                c.attachEvent && (l = vr(a, "form *", c),
                M(function(p) {
                    d.push(e.D(p, ["submit"], k("form")))
                }, g),
                M(function(p) {
                    of(p) && d.push(e.D(p, ["change"], k("formInput")))
                }, l));
                M(function(p) {
                    var q = p.submit;
                    if (y(q) || "object" === typeof q && ts.test("" + q))
                        p[f] = q,
                        p.submit = R(a, "fv", function() {
                            var v = {
                                target: p,
                                type: "submit"
                            };
                            k("document")(v);
                            return p[f]()
                        })
                }, g)
            }),
            stop: R(a, "ufv", function() {
                M(Oc, d);
                M(function(l) {
                    l && (l.submit = l[f])
                }, g);
                b.flush()
            })
        }
    }
    function vs(a, b, c) {
        function d() {
            h && h.stop()
        }
        if (!b.Yb)
            return T.resolve(w);
        var e = pi(a, "4", b)
          , f = {
            M: Og()
        }
          , g = new Ar(a,c,function(k, l, m) {
            if (!e)
                return T.resolve();
            l = "wv-data=" + Uk(k, !0);
            var p = {};
            return e(O({}, f, {
                N: {
                    aa: l
                },
                K: (p["wv-part"] = "" + m,
                p["wv-check"] = "" + lh(k),
                p["wv-type"] = c.type,
                p)
            }), b)["catch"](R(a, "m.n.m.s"))
        }
        )
          , h = us(a, g);
        return Li(b, function(k) {
            k && Q(a).F("isEU", I(k, "settings.eu"));
            Q(a).C("oo") || h && Ji(a, k) && h.start();
            return d
        })
    }
    var ws = S("fw.p", function(a, b) {
        var c;
        if (c = b.Yb && !b.Oh) {
            var d = Q(a)
              , e = !1;
            c = d.C("hitParam", {});
            var f = V(b);
            c[f] && (d = d.C("counters", {}),
            e = Yo(b.$) && !d[f]);
            c[f] = 1;
            c = !e
        }
        if (c)
            return vs(a, b, new yr(a))
    });
    Gf({
        Yb: {
            ga: "webvisor",
            cb: Ad
        },
        Oh: {
            ga: "disableFormAnalytics",
            cb: Ad
        }
    });
    X("4", Mh(mh), 2);
    ii("fv", Hi, 1);
    oi["4"] = xr;
    ih["4"] = ["f", "x", "i"];
    tg.push(ws);
    function Ts(a) {
        var b = a.which;
        a = a.button;
        return b || void 0 === a ? b : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
    }
    var Us = Ja(Xe)("(ym-disable-clickmap|ym-clickmap-ignore)");
    function Vs(a, b, c, d, e) {
        if (H(a, "ymDisabledClickmap") || !b || !b.element)
            return !1;
        a = ff(b.element);
        if (e && !e(b.element, a) || U(b.button, [2, 3]) && "A" !== a || Tb(La(a), d))
            return !1;
        d = b.element;
        if (b && c) {
            if (50 > b.time - c.time)
                return !1;
            e = Math.abs(c.position.x - b.position.x);
            a = Math.abs(c.position.y - b.position.y);
            b = b.time - c.time;
            if (c.element === d && 2 > e && 2 > a && 1E3 > b)
                return !1
        }
        for (; d; ) {
            if (Us(d))
                return !1;
            d = d.parentElement
        }
        return !0
    }
    function Ws(a, b, c, d, e) {
        var f = "clmap/" + e.id
          , g = {};
        b = (g["page-url"] = b,
        g["pointer-click"] = c,
        g);
        f = {
            M: Og(),
            K: b,
            Ta: {
                ta: f
            }
        };
        d(f, e)["catch"](R(a, "c.s.c"))
    }
    function Xs(a, b) {
        var c = {};
        a((c.clickmap = A(b) ? !0 : b,
        c))
    }
    var Ys = S("c.m.p", function(a, b) {
        var c = V(b)
          , d = {};
        return d.clickmap = F(kl(a, c), Xs),
        d
    });
    sg.push(S("clm.p", function(a, b) {
        if ($b(a))
            return w;
        var c = pi(a, "m", b), d = V(b), e = Be(a), f = e(ye), g = F(F(d, ll(a)), N(Oc, ib("clickmap"))), h, k = null;
        d = R(a, "clm.p.c", function(l) {
            var m = g();
            if (m) {
                var p = Q(a)
                  , q = p.C("cls", {
                    Sc: 0,
                    x: 0,
                    y: 0
                });
                p.F("cls", {
                    Sc: q.Sc + 1,
                    x: q.x + l.clientX,
                    y: q.y + l.clientY
                });
                p = "object" === typeof m ? m : {};
                q = p.filter;
                m = p.isTrackHash || !1;
                var v = M(function(u) {
                    return ("" + u).toUpperCase()
                }, p.ignoreTags || []);
                A(h) && (h = p.quota || null);
                var t = !!p.quota;
                l = {
                    element: We(a, l),
                    position: Wk(a, l),
                    button: Ts(l),
                    time: e(ye)
                };
                p = Ud(a).href;
                if (Vs(a, l, k, v, q)) {
                    if (t) {
                        if (!h)
                            return;
                        --h
                    }
                    v = r(Oi(a, l.element));
                    q = v.next().value;
                    v = v.next().value;
                    t = Ni(a, l.element);
                    q = ["rn", Ce(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (v || 1)), "t", Math.floor((l.time - f) / 100), "p", Si(a, l.element), "X", l.position.x, "Y", l.position.y];
                    q = P(":", q);
                    m && (q += ":wh:1");
                    Ws(a, p, q, c, b);
                    k = l
                }
            }
        });
        return Qd(a).D(I(a, "document"), ["click"], d)
    }));
    oi.m = ki("cm");
    ih.m = gh;
    X("m", Mh(["u", "v", "vf"]), 1);
    Gf({
        Dh: {
            ga: "clickmap"
        }
    });
    sg.push(Ys);
    var dt = "currencyCode add delete remove purchase checkout detail impressions click promoView promoClick".split(" ");
    function et(a, b) {
        var c = {};
        M(function(d) {
            var e = a[d] || tl[d] || d;
            -1 !== Ba(d, "item_category") ? (e = tl.item_category,
            c[e] = c[e] ? c[e] + ("/" + b[d]) : b[d]) : c[e] = b[d]
        }, td(b));
        return c
    }
    function ft(a, b) {
        var c = x(a) ? Bl[a] : a;
        if (c) {
            var d = c.event
              , e = c.kb
              , f = void 0 === c.ui ? "items" : c.ui
              , g = b.purchase || b
              , h = g[f];
            if (h) {
                c = M(F(c.Oa, et), h);
                h = {};
                var k = {}
                  , l = (k[d] = e ? (h[e] = c,
                h) : c,
                k);
                c = td(g);
                e && 1 < c.length && (l[d].actionField = G(function(m, p) {
                    if (p === f)
                        return m;
                    if ("currency" === p)
                        return l.currencyCode = g.currency,
                        m;
                    m[xl[p] || tl[p] || p] = g[p];
                    return m
                }, {}, c));
                return l
            }
        }
    }
    function gt(a) {
        var b = I(a, "ecommerce");
        if (Pa(b))
            return a = Dd(Id(dt), td(b)),
            a = G(function(c, d) {
                c[d] = b[d];
                return c
            }, {}, a),
            0 === td(a).length ? void 0 : a
    }
    function ht(a, b) {
        return function(c) {
            var d = qg(a, b);
            if (d && (d = d.params)) {
                var e = I(c, "ecommerce") || {};
                var f = I(c, "event") || "";
                e = Pa(e) && x(f) ? ft(f, e) : void 0;
                if (!e)
                    a: {
                        e = c;
                        !L(c) && cb(a, jb(c)) && (e = Sa(e));
                        if (L(e)) {
                            var g = r(e);
                            e = g.next().value;
                            f = g.next().value;
                            g = g.next().value;
                            if (x(f) && Pa(g) && "event" === e) {
                                e = ft(f, g);
                                break a
                            }
                        }
                        e = void 0
                    }
                if (c = e || gt(c))
                    e = {},
                    Ig(a, (e.counterKey = V(b),
                    e.name = "ecommerce",
                    e.data = c,
                    e)),
                    e = {},
                    f = {},
                    d((f.__ym = (e.ecommerce = [c],
                    e),
                    f))
            }
        }
    }
    function it(a, b, c) {
        var d;
        a = [Cl(a, b, function(e) {
            d = e;
            e.sa.D(c)
        }), function() {
            d && d.unsubscribe()
        }
        ];
        return D([Pc, a], M)
    }
    tg.push(S("p.e", function(a, b) {
        if (qg(a, b)) {
            var c = Q(a)
              , d = R(a, "h.ee", ht(a, b));
            return b.ce ? (c.F("ecs", 0),
            it(a, b.ce, d)) : Li(b, function(e) {
                if ((e = I(e, "settings.ecommerce")) && x(e))
                    return c.F("ecs", 1),
                    it(a, e, d)
            })
        }
    }));
    pg.push("ecommerce");
    Gf({
        ce: {
            ga: "ecommerce",
            cb: function(a) {
                if (a)
                    return !0 === a ? "dataLayer" : "" + a
            }
        }
    });
    var lt = S("fbq.o", function(a, b, c) {
        var d = I(a, "fbq");
        if (d && d.callMethod) {
            var e = function() {
                var g = arguments
                  , h = d.apply(null, la(g));
                b(g);
                return h
            };
            O(e, d);
            c && M(b, c);
            a.fbq = e
        } else {
            c = I(d, "queue");
            var f = W(a, D([a, b, c && Wb(c)], lt), 1E3, "fbq.d")
        }
        return C(Kd, null, a, f)
    })
      , mt = {}
      , nt = (mt.add_to_wishlist = "add-to-wishlist",
    mt.begin_checkout = "begin-checkout",
    mt.generate_lead = "submit-lead",
    mt.add_payment_info = "add-payment-info",
    mt)
      , ot = {}
      , pt = (ot.AddToCart = "add-to-cart",
    ot.Lead = "submit-lead",
    ot.InitiateCheckout = "begin-checkout",
    ot.Purchase = "purchase",
    ot.CompleteRegistration = "register",
    ot.Contact = "submit-contact",
    ot.AddPaymentInfo = "add-payment-info",
    ot.AddToWishlist = "add-to-wishlist",
    ot.Subscribe = "subscribe",
    ot)
      , qt = {}
      , rt = (qt["1"] = nt,
    qt["2"] = nt,
    qt["3"] = nt,
    qt["0"] = pt,
    qt)
      , st = [pt.AddToCart, pt.Purchase];
    function tt(a, b) {
        return function(c) {
            if (c) {
                var d = c.version;
                (c = I(rt, d + "." + c.Wc)) && (b && U(c, st) || a("ym-" + c + "-" + d))
            }
        }
    }
    var ut = Ja(function(a, b) {
        var c = I(b, "event") || "";
        if (!(c = I(b, "ecommerce") && c && {
            version: "3",
            Wc: c
        }))
            a: {
                if (L(b) || jb(b)) {
                    var d = r(Sa(b));
                    c = d.next().value;
                    d = d.next().value;
                    if ("event" === c && d) {
                        c = {
                            version: "2",
                            Wc: d
                        };
                        break a
                    }
                }
                c = void 0
            }
        c || (c = (c = I(b, "ecommerce")) && {
            version: "1",
            Wc: P(",", td(c))
        });
        c && a(c)
    })
      , vt = Ja(function(a, b) {
        if (b) {
            var c = r(Sa(b))
              , d = c.next().value;
            c = c.next().value;
            "track" === d && a({
                version: "0",
                Wc: c
            })
        }
    });
    sg.push(S("ag.e", function(a, b) {
        if (!Yo(V(b))) {
            var c = [];
            (ui(b) ? Na(function(d, e) {
                El(a, function() {
                    return e(ui(b))
                }, 100, "ag.ss")
            }) : xf(Li(b, ib("settings"))))(uf(R(a, "ag.s"), R(a, "ag.i", function(d) {
                if (I(d, "auto_goals") && qg(a, b) && (d = jl(a, b, "autogoal").reachGoal)) {
                    d = tt(d, !!b.ce);
                    var e = ut(d);
                    d = vt(d);
                    c.push(lt(a, d));
                    c.push(Cl(a, "dataLayer", function(f) {
                        f.sa.D(e)
                    }))
                }
            })));
            return function() {
                return M(Pc, c)
            }
        }
    }));
    Gf({
        yf: {
            ga: "userLogin"
        }
    });
    ag.ulo = function(a, b) {
        return x(b.yf) && b.yf ? b.yf : null
    }
    ;
    var wt = ["ytm.consent", "consent"]
      , xt = ["default", "update"];
    zm.addConsentListener = function(a) {
        var b = a.l
          , c = a.W;
        return function(d, e) {
            if (!x(d))
                throw Kl("ict");
            if (!y(e))
                throw Kl("icl");
            c.checkPermission({
                permissionType: "accessConsent",
                L: {
                    key: d,
                    operation: 2
                }
            });
            og(b).on(d, e)
        }
    }
    ;
    zm.isConsentGranted = function(a) {
        var b = a.l
          , c = a.W;
        return function(d) {
            if (!x(d))
                throw Kl("ict");
            c.checkPermission({
                permissionType: "accessConsent",
                L: {
                    key: d,
                    operation: 2
                }
            });
            return og(b).get(d)
        }
    }
    ;
    zm.setDefaultConsentState = Bm;
    zm.updateConsentState = Cm;
    jo.consent = function(a, b, c, d, e, f) {
        if (U(b.event, wt)) {
            c = b.ytm.action;
            if (U(c, xt) && (a = og(a.l).set(c, b.ytm.Vb))) {
                f(Kl(a));
                return
            }
            e()
        } else
            f(Jl("t.c.e"))
    }
    ;
    wo.accessConsent = function(a, b, c, d) {
        if (!H(b, c))
            return !1;
        a = b[c];
        if (!H(a, "categories"))
            return !1;
        a = a.categories;
        b = d.key;
        return H(a, b) ? !!(a[b] & d.operation) : !1
    }
    ;
    jo.pix = function(a, b, c, d, e, f) {
        d = a.l;
        var g = a.W;
        a = Mn(a, b, c.data.pixelUrl);
        x(a) ? (g.checkPermission({
            Wa: c,
            permissionType: "pixel",
            L: {
                url: a
            }
        }),
        dm(d, a, e, f)) : f(Kl("ca.p.uns"))
    }
    ;
    wo.pixel = to;
    function Dt(a, b) {
        var c = a.l
          , d = a.dispatchEvent;
        if (b.limit && b.sequence >= b.limit && b.id)
            c.clearInterval(b.id);
        else {
            b.sequence += 1;
            c = Be(c)(ye);
            var e = {};
            c = eo("ytm.timer", (e.id = +b.id,
            e.sequence = b.sequence,
            e.interval = b.interval,
            e.limit = b.limit,
            e.startTime = b.startTime,
            e.currentTime = c,
            e.elapsedTime = c - b.startTime,
            e.timer = b.Fc,
            e));
            d(c)
        }
    }
    jo.timer = function(a, b, c, d, e, f) {
        var g = a.l
          , h = c.data.trigger
          , k = ro(a);
        if (k[h])
            f(Kl("t.a.s.t"));
        else {
            var l = Mn(a, b, c.data.interval);
            x(l) ? (l = In(l),
            B(l) ? f(Jl("t.i.nn")) : (a = lo(a, b, c.data.limit),
            d = {
                l: g,
                dispatchEvent: N(d.add, d.Ma),
                interval: l,
                limit: a
            },
            g = d.l,
            a = 1E3 * d.interval,
            b = {
                id: null,
                interval: a,
                sequence: 0,
                limit: d.limit || 0,
                startTime: Be(g)(ye),
                Fc: h
            },
            b.id = Ld(g, D([d, b], Dt), a, "yt.t"),
            k[h] = !0,
            e())) : f(Jl("t.i.ns"))
        }
    }
    ;
    function Et(a, b) {
        var c = a.data;
        c = "id" === c.Hg ? Fn(c.id) : c.selector;
        var d = [];
        Ui(b) && b.matches(c) && d.push(b);
        return d.concat(tn(c, b))
    }
    function Ft() {
        return {
            ab: !1,
            tb: !1,
            Fa: null,
            Jd: 0
        }
    }
    function Gt(a, b, c) {
        function d(t, u, z) {
            var E = ko(t);
            u = eo("ytm.elementVisibility", {
                element: t,
                elementClasses: E.elementClasses,
                elementText: E.elementText,
                elementId: E.elementId,
                visibleRatioPercent: Math.round(1E4 * u) / 100,
                visibleDuration: z / 1E3,
                trigger: c.data.trigger
            });
            z = g(t);
            "opp" === p ? z.tb || (q.disconnect(),
            h && h.disconnect(),
            z.tb = !0,
            z.ab = !1,
            b(u)) : "ope" === p ? z.ab && !z.tb && (q.unobserve(t),
            z.tb = !0,
            z.ab = !1,
            b(u)) : b(u)
        }
        function e(t) {
            q.unobserve(t);
            t = g(t);
            t.Fa && (f.clearInterval(t.Fa),
            t.Fa = null);
            t.ab = !1
        }
        var f = a.l;
        a = a.Gf;
        var g = K(Ft)
          , h = null
          , k = c.data
          , l = k.Fg
          , m = k.ef
          , p = k.Vf;
        k = k.kg;
        var q = new f.IntersectionObserver(R(f, "ytm.ev.ioc", function(t) {
            return M(function(u) {
                var z = u.target;
                u = u.intersectionRatio;
                var E = g(z);
                E.Fa && (f.clearInterval(E.Fa),
                E.Fa = null);
                if (!(u < m / 100 || !E.ab || E.tb))
                    if (0 === l)
                        d(z, u, 0);
                    else {
                        var Y = E.Jd
                          , ha = Be(f)(ye);
                        E.Fa = Ld(f, function() {
                            var Jb = Be(f)(ye);
                            E.Jd = Y + Jb - ha;
                            E.Jd < l || ("mpe" === p ? (E.Jd = 0,
                            ha = Be(f)(ye)) : E.Fa && (f.clearInterval(E.Fa),
                            E.Fa = null),
                            E.tb || d(z, Hn(f, z), l))
                        }, 100, "yt.ev")
                    }
            }, t)
        }),{
            threshold: [c.data.ef / 100]
        })
          , v = Ib(function(t) {
            var u = g(t);
            u.tb || u.ab || (q.observe(t),
            u.ab = !0)
        });
        v(Et(c, f.document));
        k && xa("MutationObserver", f.MutationObserver) && (h = new f.MutationObserver(R(f, "c.io.ev", function(t) {
            return M(function(u) {
                switch (u.type) {
                case "childList":
                    M(function(ha) {
                        Ui(ha) && v(Et(c, ha))
                    }, u.addedNodes);
                    M(function(ha) {
                        Ui(ha) && (ha = Et(c, ha),
                        M(e, ha))
                    }, u.removedNodes);
                    break;
                case "attributes":
                    var z = u.target
                      , E = u.attributeName;
                    u = u.oldValue;
                    if (Ui(z) && E && u !== z.getAttribute(E)) {
                        var Y = Et(c, z);
                        v(Y);
                        Qk(f, z, function(ha) {
                            Ui(ha) && g(ha).ab && !U(ha, Y) && e(ha)
                        })
                    }
                }
            }, t)
        })),
        h.observe(f.document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeOldValue: !0
        }));
        a(function() {
            q.disconnect();
            h && h.disconnect()
        })
    }
    jo.elementVisibility = function(a, b, c, d, e, f) {
        var g = a.l
          , h = c.data.trigger
          , k = mo(a);
        if (k[h])
            f(Kl("t.a.s.ev"));
        else if (xa("IntersectionObserver", g.IntersectionObserver)) {
            var l = c.data;
            g = l.sm;
            var m = l.srp
              , p = l.lfd
              , q = l.ff
              , v = l.trigger
              , t = lo(a, b, l.sd, !0);
            B(t) || (t = 0 > t ? null : t,
            B(t) || (t *= 1E3));
            m = lo(a, b, m, !0);
            B(m) || (m = 0 > m || 100 < m ? null : m);
            "id" === g ? (b = Mn(a, b, l.id),
            c = x(b) && b ? O({}, c, {
                data: {
                    Hg: g,
                    id: b,
                    Fg: t || 0,
                    ef: m || 50,
                    kg: p,
                    Vf: q,
                    trigger: v
                }
            }) : null) : (b = Mn(a, b, l.selector),
            c = x(b) && b ? O({}, c, {
                data: {
                    Hg: g,
                    selector: b,
                    Fg: t || 0,
                    ef: m || 50,
                    kg: p,
                    Vf: q,
                    trigger: v
                }
            }) : null);
            if (B(c))
                f(Jl("p.f.ev"));
            else {
                try {
                    Gt(a, N(d.add, d.Ma), c)
                } catch (u) {
                    f(u);
                    return
                }
                k[h] = !0;
                e()
            }
        } else
            f(Jl("n.io.ev"))
    }
    ;
    function Ht(a) {
        return x(a) ? G(function(b, c) {
            var d = db(c);
            !B(d) && 0 <= d && 100 >= d && b.push(d);
            return b
        }, [], a.split(",")) : []
    }
    jo.scrollDepth = function(a, b, c, d, e, f) {
        var g = po(a)
          , h = c.data;
        c = h.index;
        var k = h.vpt
          , l = h.mode;
        h = h.ps;
        if (g[c])
            f(Kl("t.a.s.sd"));
        else {
            if ("pt" === l) {
                if (!k) {
                    f(Jl("t.a.s.sd.t"));
                    return
                }
                b = Mn(a, b, k);
                b = Ht(b)
            } else {
                if (!h) {
                    f(Jl("t.a.s.sd.s"));
                    return
                }
                b = Mn(a, b, h);
                if (x(b))
                    if (b = db(b),
                    B(b) || 0 >= b || 100 < b)
                        b = [];
                    else {
                        f = [];
                        for (k = b; 100 >= k; )
                            f.push(k),
                            k += b;
                        b = f
                    }
                else
                    b = []
            }
            qo(a, N(d.add, d.Ma))(c, b);
            g[c] = !0;
            e()
        }
    }
    ;
    var It = /\./g;
    function Jt(a) {
        return a.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(It, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
    }
    var Kt = "ru by kz az kg lv md tj tm uz ee fr lt com co.il com.ge com.am com.tr com.ru".split(" ");
    function Lt(a) {
        if (a = a.match(Vd)) {
            var b = r(a);
            b.next();
            a = b.next().value;
            if (b = b.next().value)
                return U(b, Kt) ? b : !1;
            if (a)
                return Kt[0]
        }
        return !1
    }
    function Mt(a) {
        return Math.floor(ye(a) / 1E3 / 60)
    }
    function Nt(a, b, c) {
        c = Ab("dispatchEvent", c || a.document);
        var d = null
          , e = I(a, "Event.prototype.constructor");
        if (e && (xa("(Event|Object|constructor)", e) || lc(a) && "[object Event]" === "" + e))
            try {
                d = new a.Event(b)
            } catch (f) {
                if ((a = Ab("createEvent", I(a, "document"))) && y(a)) {
                    try {
                        d = a(b)
                    } catch (g) {}
                    d && d.initEvent && d.initEvent(b, !1, !1)
                }
            }
        d && c(d)
    }
    function Ot(a) {
        return G(function(b, c) {
            var d = r(c)
              , e = d.next().value;
            d = d.next().value;
            b[Ff[e].ga] = d;
            return b
        }, {}, sd(a))
    }
    function Pt(a, b) {
        return !b.xb && Jf(a, b)
    }
    var Qt = []
      , Rt = []
      , St = []
      , Tt = /^\s*(data|javascript):/i;
    function Ut(a) {
        return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
    }
    var Vt = ["i"];
    function Wt(a, b) {
        return function(c) {
            var d = c[a];
            d ? (d.df = !0,
            d.cf(b)) : c[a] = {
                promise: T.resolve(b),
                df: !0,
                cf: w
            }
        }
    }
    function Xt(a, b) {
        var c = V(a)
          , d = I(b, "__ym.turbo_page")
          , e = I(b, "__ym.turbo_page_id");
        sh[c] || (sh[c] = {});
        if (d || e)
            sh[c].rj = d,
            sh[c].sj = e
    }
    function Yt(a, b, c) {
        b = V(b);
        Ki(b).Yh = Be(a)(ye);
        c = O({}, c);
        var d = {}
          , e = {};
        Ig(a, (e.counterKey = b,
        e.name = "counterSettings",
        e.data = (d.settings = c,
        d),
        e));
        return oh()(Wt(b, c))
    }
    function Zt(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b.push(d) : (127 < d && 2048 > d ? b.push(d >> 6 | 192) : (b.push(d >> 12 | 224),
            b.push(d >> 6 & 63 | 128)),
            b.push(d & 63 | 128))
        }
        return b
    }
    function $t(a) {
        if (!a)
            return "";
        var b = a.id;
        return "[" + Zl[a.type] + (b ? ":" + b : "") + "]"
    }
    function au(a) {
        a = a.message;
        return x(a) ? Xl[a] || a : "Unknown error"
    }
    function bu(a, b) {
        return function(c) {
            $l(a, c, b)
        }
    }
    function cu(a, b, c) {
        c ? bm(a, function(d, e, f) {
            B(e) || (Vl(a).error("[YTM Error]" + $t(f) + " " + au(e)),
            am && (d = {},
            e = (d.event = "ee",
            d.m = au(e),
            d),
            f && (e.et = f.type,
            e.eid = f.eventId,
            f.id && (e.ei = f.id)),
            am(e)))
        }, c) : bm(a, function(d, e, f) {
            d = "ytm." + d;
            B(e) || (H(e, "yen") ? (ti(a, b, "[YTM Error]" + $t(f) + " " + au(e))(),
            "yme" === e.yen && Rc("mod", I(e, "message") || "ue", d)) : Sc(a, d, e))
        })
    }
    function du(a) {
        var b = []
          , c = []
          , d = !1;
        return {
            Nc: function(e) {
                c.push(e)
            },
            add: function(e) {
                b.push(e)
            },
            Ma: function() {
                if (!d) {
                    d = !0;
                    for (var e; e = 0 < c.length ? c.shift() : b.shift(); )
                        a(e);
                    d = !1
                }
            }
        }
    }
    function eu(a, b, c, d) {
        return new T(function(e, f) {
            if (H(jo, c.type))
                (0,
                jo[c.type])(a, b, c, d, e, f);
            else
                f(Jl("y.u.t." + c.type, "yme"))
        }
        )
    }
    function fu(a, b, c, d, e) {
        var f = a.config
          , g = a.Pe
          , h = !0 === f.isPreview;
        c = M(function(k) {
            function l() {
                return T.all(M(function(q) {
                    return eu(a, b, f.tags[q], e)
                }, m.ft || []))
            }
            var m = f.tags[k];
            if (!m)
                return T.reject(Cc("i.conf." + f.containerVersion + "-" + k));
            var p = g.Tg(m.type, m.id);
            return eu(a, b, m, e).then(function() {
                p("success");
                return T.all(M(function(q) {
                    return eu(a, b, f.tags[q], e)
                }, m.ct || []))
            }, function(q) {
                p("failure");
                var v = {
                    eventId: b.ytm.eventId,
                    type: "t"
                };
                h && (v.id = m.id);
                bu("t.e.r", v)(q)
            }).then(l, l)
        }, uj(function(k, l) {
            return k - l
        }, c));
        M(cm("t.e.m", Pc), d);
        T.all(c)["catch"](bu("t.e", {
            type: "c",
            eventId: b.ytm.eventId
        }))
    }
    var gu = ["ytm.click", "ytm.linkClick", "ytm.formSubmit"];
    function hu(a, b, c) {
        return U(b, gu) && c ? eo(b, ko(c)) : "ytm.init" === b || "ytm.init_consent" === b ? eo(b, {
            timestamp: Be(a)(ye)
        }) : eo(b, {})
    }
    var iu = "ytm.init_consent ytm.init ytm.js ytm.dom ytm.load ytm.click ytm.linkClick ytm.formSubmit ytm.timer ytm.scrollDepth ytm.elementVisibility ytm.group ytm.historyChange ytm.consent".split(" ")
      , ju = ["ytm.js"]
      , ku = ["ytm.js", "ytm.dom", "ytm.load"];
    function lu(a) {
        a = I(a, "id");
        return !(!a || "ytm-debugger-script-root" !== a)
    }
    function mu(a, b) {
        return Qd(a).D(a.document, ["click"], function(c) {
            (c = Ei(c)) && !lu(c) && b(hu(a, "ytm.linkClick", c))
        })
    }
    function nu(a, b, c, d, e) {
        e = void 0 === e ? a.document : e;
        return Qd(a).D(e, d, function(f) {
            lu(f.target) || b(hu(a, c, f.target))
        })
    }
    function ou(a, b, c) {
        return U(a.document.readyState, ["complete", "interactive"]) ? (b(hu(a, c)),
        w) : nu(a, b, c, ["DOMContentLoaded"])
    }
    function pu(a, b) {
        var c = r(No(a.location.href))
          , d = c.next().value;
        c = c.next().value;
        var e = {
            source: null,
            state: a.history.state,
            url: d,
            qb: c
        };
        d = oo(a, function(f) {
            var g = "popstate" === e.source || "popstate" === f.source
              , h = "hashchange" === e.source || "hashchange" === f.source;
            if (e.qb !== f.qb || !g || !h) {
                g = O({}, e);
                e = f;
                h = f.source;
                if (Oa(h))
                    throw Jl("m.e.hc");
                f = eo("ytm.historyChange", {
                    historyChangeSource: h,
                    oldUrlFragment: g.qb,
                    newUrlFragment: f.qb,
                    oldHistoryState: g.state,
                    newHistoryState: f.state,
                    oldUrl: g.url,
                    newUrl: f.url
                });
                b(f)
            }
        }, 50, "hc").fn;
        c = Po(a);
        c.D(d);
        return F(d, c.X)
    }
    function qu(a, b, c) {
        if ("ytm.linkClick" === b)
            return mu(a, c);
        if ("ytm.js" === b)
            return ou(a, c, "ytm.js");
        if ("ytm.dom" === b)
            return ou(a, c, "ytm.dom");
        if ("ytm.load" === b)
            return "complete" === a.document.readyState ? (c(hu(a, "ytm.load")),
            a = w) : a = nu(a, c, "ytm.load", ["load"], a),
            a;
        if ("ytm.click" === b)
            return nu(a, c, "ytm.click", ["click"]);
        if ("ytm.formSubmit" === b)
            return nu(a, c, "ytm.formSubmit", ["submit"], a);
        if ("ytm.historyChange" === b)
            return pu(a, c)
    }
    function ru(a, b) {
        var c = a[b["var"]];
        c = c && "event" === c.type;
        var d = "regex" === b.fn || "eq" === b.fn;
        if (x(b.target) && c && d)
            return b
    }
    function su(a) {
        return Gb(N(ib("conditions"), Hb(F(a.variables, ru)), Ed), a.triggers)
    }
    function tu(a, b, c) {
        var d = void 0 === d ? "dataLayer" : d;
        c = su(c);
        var e = G(function(h, k) {
            var l = k.target;
            "eq" === k.fn && U(l, iu) && -1 === ob(l, h) && h.push(l);
            return h
        }, [], c)
          , f = G(function(h, k) {
            var l = k.target;
            "eq" === k.fn ? h.push(F(l, xn)) : cm("dl.ee", function() {
                h.push(Xa(new RegExp(l)))
            })();
            return h
        }, [], Dd(function(h) {
            h = h.target;
            return !U(h, iu) || U(h, ju)
        }, c))
          , g = [];
        M(function(h) {
            (h = qu(a, h, N(b.add, b.Ma))) && g.push(h)
        }, uj(function(h, k) {
            var l = Xb(a)(h, ku)
              , m = Xb(a)(k, ku);
            return -1 === l ? 1 : -1 === m ? -1 : l - m
        }, e));
        c = I(a, d);
        c || (c = [],
        a[d] = c);
        pl(a, c, function(h) {
            h.sa.D(function(k) {
                var l = I(k, "event");
                if (Pa(k) && l && Tb(Na(l), f))
                    l = b.add,
                    Pa(k) && (Pa(k.ytm) ? k.ytm.eventId = xj() : k.ytm = {
                        eventId: xj()
                    }),
                    l.call(b, k),
                    b.Ma();
                else if (k) {
                    var m = r(Sa(k));
                    k = m.next().value;
                    l = m.next().value;
                    m = m.next().value;
                    "consent" === k && U(l, ng) && Pa(m) && (b.Nc({
                        event: "consent",
                        ytm: {
                            action: l,
                            Vb: m,
                            eventId: xj()
                        }
                    }),
                    b.Ma())
                }
            });
            g.push(h.unsubscribe)
        });
        return function() {
            return M(Oc, g)
        }
    }
    function uu(a, b) {
        var c = td(b);
        return G(function(d, e) {
            d[e] = a(b[e]);
            return d
        }, {}, c)
    }
    function vu(a, b) {
        return M(function(c) {
            if ("pro" === c.type)
                return c = c.settings,
                B(c) ? {} : uu(a, c);
            c = c.data;
            return Pa(c) ? uu(a, c) : {}
        }, b)
    }
    function wu(a, b, c) {
        return M(cm("d.ev.e", function(d) {
            return "generated" === I(d, "source") ? "" : "" + Kn(b, c, a, d)
        }, "Error during value computation"), b.config.variables)
    }
    function xu(a, b, c) {
        return (c = a.config.tags[c].fc) && c.length ? Hl(function(d) {
            return To(a, b, d)
        }, c) : !0
    }
    function yu(a) {
        var b = a.Pe
          , c = a.Nh
          , d = a.fh
          , e = a.config.triggers
          , f = du(function(g) {
            var h = cm("d.ev.c", D([a, g], Mn))
              , k = new Ci
              , l = G(function(v, t, u) {
                var z = !Tb(function(Y) {
                    return !To(a, g, Y)
                }, t.conditions);
                if (c)
                    if (z) {
                        var E = Ro(h, t, u);
                        v.tf.Sf.push(E)
                    } else
                        E = So(h, D([a, g], To), t, u),
                        v.tf.Tf.push(E);
                z && (z = b.Ug(g.event, t.tags),
                v.eh.push(z),
                M(function(Y) {
                    k.has(Y) || (xu(a, g, Y) && v.Zg.push(Y),
                    k.add(Y))
                }, t.tags),
                d.trigger(u));
                return v
            }, {
                Zg: [],
                eh: [],
                tf: {
                    Sf: [],
                    Tf: []
                }
            }, e)
              , m = l.Zg
              , p = l.eh;
            l = l.tf;
            if (c) {
                var q = {};
                l = (q.event = "t",
                q.ev = g.event,
                q.e = l.Sf,
                q.vv = wu(h, a, g),
                q.ne = l.Tf,
                q.et = vu(h, a.config.tags),
                q.fe = g,
                q.eid = g.ytm.eventId,
                q);
                c.trigger(l)
            }
            m.length && fu(a, g, m, p, f)
        });
        return f
    }
    function zu(a) {
        if (a = Gc(a)) {
            var b = I(a, "timing.navigationStart") || I(a, "timeOrigin");
            if (!B(b)) {
                var c = ya(a.now, "now");
                if (y(c))
                    return c = C(c, a),
                    [b, c]
            }
        }
    }
    function Au(a) {
        if (!a)
            return 0;
        var b = r(a);
        a = b.next().value;
        b = b.next().value;
        return Math.round(b() + a)
    }
    function Bu(a, b, c, d) {
        function e(m) {
            k(m.type, m.Vb)
        }
        var f = Bf(a, "ytm.mon")
          , g = r(Wo(a))
          , h = g.next().value
          , k = g.next().value;
        if (h || d)
            return {
                Tg: function() {
                    return w
                },
                Ug: function() {
                    return w
                },
                Vg: function() {
                    return w
                },
                Of: w
            };
        var l = zu(a);
        f.D(["PRIVATE"], e);
        return {
            Tg: function(m, p) {
                var q = {
                    start: Au(l),
                    tagType: m,
                    ik: p,
                    counterId: b,
                    containerId: c.containerId,
                    containerVersion: c.containerVersion,
                    compilerVersion: c.compilerVersion
                };
                return function(v) {
                    v = O(q, {
                        status: v,
                        finish: Au(l)
                    });
                    f.trigger("PRIVATE", {
                        type: "tgExec",
                        Vb: v
                    })
                }
            },
            Ug: function(m, p) {
                var q = {
                    start: Au(l),
                    tags: p,
                    counterId: b,
                    containerId: c.containerId,
                    containerVersion: c.containerVersion,
                    compilerVersion: c.compilerVersion,
                    event: m.slice(0, 150)
                };
                return function() {
                    var v = O(q, {
                        finish: Au(l)
                    });
                    f.trigger("PRIVATE", {
                        type: "trExec",
                        Vb: v
                    })
                }
            },
            Vg: function() {
                var m = {
                    start: Au(l),
                    counterId: b,
                    containerId: c.containerId,
                    containerVersion: c.containerVersion,
                    compilerVersion: c.compilerVersion
                };
                return function(p) {
                    p = O(m, {
                        status: p,
                        finish: Au(l)
                    });
                    f.trigger("PRIVATE", {
                        type: "varExec",
                        Vb: p
                    })
                }
            },
            Of: D([["PRIVATE"], e], f.X)
        }
    }
    function Cu(a, b, c, d) {
        function e(g) {
            var h;
            if (h = f(g, c, d)) {
                h = g.permissionType;
                if (!H(wo, h))
                    throw Jl("y.u.p." + h);
                var k = g.Wa;
                g = g.L;
                k = !A(k.permissions) && H(b, "" + k.permissions) ? b[k.permissions] : {};
                h = (0,
                wo[h])(a, k, h, g)
            }
            return h
        }
        var f = zo(a).Ah;
        return {
            checkPermission: function(g) {
                if (!e(g)) {
                    g = xo(g, c, d);
                    var h = Jl("Permission denied for " + g.permissionType, "yue");
                    h.cause = g;
                    Fc(h)
                }
            },
            na: e
        }
    }
    function Du(a, b) {
        var c = Q(a)
          , d = {};
        c.va("ytm_s", (d.cm = {},
        d));
        var e = 0
          , f = c.C("ytm_s").cm;
        return {
            ee: function(g) {
                if (H(f, b))
                    f[b][e] = g;
                else {
                    var h = {};
                    f[b] = (h[e] = g,
                    h)
                }
                g = 'Ya["_metrika"]["ytm_s"]["cm"]["' + b + '"][' + e + "]";
                e += 1;
                return g
            }
        }
    }
    function Eu(a, b) {
        if (b.Rh || Go(a) || Io(a))
            return T.resolve(!1);
        var c = ui(b);
        return c ? T.resolve(c.aytm) : Li(b, ib("settings.aytm"))
    }
    function Fu(a, b, c, d) {
        var e = {};
        return Pa(a) ? a : (e.id = a,
        e.type = c,
        e.defer = d,
        e.params = b,
        e)
    }
    function Gu(a) {
        return G(function(b, c) {
            var d = r(c)
              , e = d.next().value
              , f = d.next().value;
            d = f.cb;
            f = a[f.ga];
            b[e] = d ? d(f) : f;
            return b
        }, {}, sd(Ff))
    }
    var Hu = {
        1779679723: 1,
        2207780230: 1,
        2214277089: 1,
        3956938178: 1
    }
      , Iu = F("form", Di)
      , Ju = K(function(a) {
        a = Ud(a);
        a = be(a.search.substring(1));
        return {
            id: fb(a["_ym_status-check"] || ""),
            lang: a._ym_lang || "ru"
        }
    })
      , Ku = /^[a-zA-Z0-9'!#$%&*+-/=?^_`{|}~]+$/;
    function Lu(a) {
        var b = a.length;
        return 1 > b || 64 < b ? !1 : Hl(function(c) {
            var d = c.length;
            if (1 > d)
                c = !1;
            else if ('"' === c[0] && '"' === c[d - 1] && 2 < d)
                a: {
                    for (d = 1; d + 2 < c.length; d += 1) {
                        var e = c.charCodeAt(d);
                        if (32 > e || 34 === e || 126 < e) {
                            c = !1;
                            break a
                        }
                        if (92 === e) {
                            if (d + 2 === c.length || 32 > c.charCodeAt(d + 1)) {
                                c = !1;
                                break a
                            }
                            d += 1
                        }
                    }
                    c = !0
                }
            else
                c = Ku.test(c) ? !0 : !1;
            return c
        }, a.split("."))
    }
    function Mu(a) {
        var b = a.length;
        return 5 > b || 100 < b ? void 0 : a
    }
    function Nu(a) {
        var b = fe(a).replace(/^\++/gm, "").toLowerCase()
          , c = b.lastIndexOf("@");
        if (-1 === c)
            return Mu(b);
        a = b.substr(0, c);
        c = b.substr(c + 1);
        if (!c || !Lu(a))
            return Mu(b);
        c = c.replace("googlemail.com", "gmail.com");
        Lt(c) && (c = "yandex.ru");
        "yandex.ru" === c ? a = a.replace(It, "-") : "gmail.com" === c && (a = a.replace(It, ""));
        b = Ba(a, "+");
        -1 !== b && (a = a.slice(0, b));
        return Mu(a + "@" + c)
    }
    var Ou = /^[0-9()\-+\s]+$/;
    function Pu(a, b) {
        var c = ie(b)
          , d = c.length
          , e = b[0]
          , f = c[0];
        if (!(10 > d || 13 < d || "0" === f) && Ou.test(b)) {
            if (10 === d && "+" !== e)
                return "7" + c;
            if (11 === d) {
                if ("+" === e && "8" === f)
                    return;
                if ("8" === f)
                    return "7" + c.slice(1)
            }
            if (!(12 <= d && "+" === e && "7" === f))
                return c
        }
    }
    var Qu = K(function(a) {
        return !!I(a, "crypto.subtle.digest") && !!I(a, "TextEncoder") && !!I(a, "FileReader") && !!I(a, "Blob")
    });
    function Ru(a, b) {
        return new T(function(c, d) {
            var e = (new a.TextEncoder).encode(b);
            a.crypto.subtle.digest("SHA-256", e).then(function(f) {
                f = new a.Blob([f],{
                    type: "application/octet-binary"
                });
                var g = new a.FileReader;
                g.onload = function(h) {
                    h = I(h, "target.result") || "";
                    var k = Ba(h, ",");
                    -1 !== k ? c(h.substring(k + 1)) : d(Cc("fpm.i"))
                }
                ;
                g.readAsDataURL(f)
            }, d)
        }
        )
    }
    var Su = ["yandex_cid", "yandex_public_id"];
    function Tu(a, b, c) {
        c = void 0 === c ? 0 : c;
        b = sd(b);
        b = G(function(d, e) {
            var f = r(e)
              , g = f.next().value;
            f = f.next().value;
            var h = Pa(f);
            if (!h && (cb(a, f) && (f = "" + f),
            !x(f)))
                return d;
            if (h)
                f = Tu(a, f, c + 1);
            else if (!c && U(g, Su))
                f = T.resolve(f);
            else {
                "phone_number" === g ? f = Pu(a, f) : "email" === g && (f = Nu(f));
                if (!f)
                    return d;
                f = Ru(a, f)
            }
            d.push(f.then(function(k) {
                return [g, k]
            }));
            return d
        }, [], b);
        return T.all(b)
    }
    var Uu = S("fpm", function(a, b) {
        if (!Yd(a))
            return w;
        var c = V(b);
        if (!Qu(a))
            return si(a, c, "ns"),
            w;
        var d = qg(a, b);
        return d ? function(e) {
            return (new T(function(f, g) {
                return Pa(e) ? td(e).length ? f(Tu(a, e).then(function(h) {
                    if (h && h.length) {
                        var k = {}
                          , l = {};
                        d.params((l.__ym = (k.fpp = h,
                        k),
                        l))
                    }
                }, w)) : g(Lc("fpm.l")) : g(Lc("fpm.o"))
            }
            ))["catch"](R(a, "fpm.en"))
        }
        : w
    });
    function Vu(a, b) {
        return G(function(c, d) {
            var e = r(d)
              , f = e.next().value
              , g = e.next().value;
            e = g;
            g = Pa(g);
            if (!g && (cb(a, e) && (e = "" + e),
            !x(e)))
                return c;
            e = g ? Vu(a, e) : e;
            jb(e) && c.push([f, e]);
            return c
        }, [], sd(b))
    }
    function Wu(a, b) {
        return function(c) {
            var d = qg(a, b);
            if (d) {
                var e = ri(a, V(b));
                if (Pa(c))
                    if (jb(td(c))) {
                        if ((c = Vu(a, c)) && jb(c)) {
                            e = {};
                            var f = {};
                            d.params((f.__ym = (e.fpmh = c,
                            e),
                            f))
                        }
                    } else
                        e.log("fpeo");
                else
                    e.log("fpno")
            }
        }
    }
    var Xu = K(nd);
    function Yu(a, b) {
        return {
            V: function(c, d) {
                var e = (c.T || {}).Z
                  , f = void 0 === c.N ? {} : c.N;
                if (e && (Xt(b, e),
                !f.aa && c.M && c.K)) {
                    var g = Ee(a, e)
                      , h = Xu(a)
                      , k = c.M.C("pv");
                    if (g && !c.K.nohit) {
                        var l = {}
                          , m = {};
                        Ig(a, (m.counterKey = V(b),
                        m.name = "params",
                        m.data = (l.val = e,
                        l),
                        m));
                        k ? encodeURIComponent(g).length > (lc(a) ? 512 : 2048) ? h.push([c.M, e]) : c.K["site-info"] = g : (f.aa = g,
                        c.N = f,
                        c.wd || (c.wd = {}),
                        c.wd.Ni = !0)
                    }
                }
                d()
            },
            Aa: function(c, d) {
                var e = Xu(a)
                  , f = qg(a, b)
                  , g = f && f.params;
                g && (f = Dd(N(Yb, La(c.M)), e),
                M(function(h) {
                    var k = r(h);
                    k.next();
                    k = k.next().value;
                    g(k);
                    h = Xb(a)(h, e);
                    e.splice(h, 1)
                }, f));
                d()
            }
        }
    }
    function Zu(a) {
        var b = w
          , c = null
          , d = a.length;
        if (0 !== a.length && a[0]) {
            var e = a.slice(-1)[0];
            y(e) && (b = e,
            d = a.length + -1);
            var f = a.slice(-2)[0];
            y(f) && (b = f,
            c = e,
            d = a.length + -2);
            d = a.slice(0, d);
            return {
                Lh: c,
                Oc: b,
                Z: 1 === d.length ? a[0] : kb(d)
            }
        }
    }
    var $u = S("pa.int", function(a, b) {
        var c = {};
        return c.params = function() {
            var d = Sa(arguments)
              , e = Zu(d);
            if (!e)
                return null;
            d = e.Lh;
            var f = e.Z;
            e = e.Oc;
            if (!Pa(f) && !L(f))
                return null;
            var g = pi(a, "1", b)
              , h = gl(b).url
              , k = !Fg(b)
              , l = "pa"
              , m = {};
            m = (m.id = b.id,
            m);
            var p = f
              , q = "";
            if (q = I(f, "__ym.user_id"))
                l = "pau",
                m.uid = q;
            U("__ymu", td(f)) && (l = "paup");
            p.__ym && (p = O({}, f),
            p.__ym = G(function(v, t) {
                var u = I(f, "__ym." + t);
                u && (v[t] = u);
                return v
            }, {}, pg),
            td(p.__ym).length || delete p.__ym,
            k = !!td(p).length);
            p = q ? void 0 : Ee(a, p);
            l = ti(a, b, l, m, p);
            m = {};
            p = {};
            g = g({
                T: {
                    Z: f
                },
                M: Og((m.pa = 1,
                m.ar = 1,
                m)),
                K: (p["page-url"] = h || Ud(a).href,
                p)
            }, b).then(k ? l : w);
            return fl(a, "p.s", g, e, d)
        }
        ,
        c
    });
    function av(a, b, c, d) {
        var e = qg(a, c);
        if (e) {
            a = d.data;
            c = "" + c.id;
            var f = d.sended || [];
            d.sended || (d.sended = f);
            U(c, f) || !e.params || d.counter && "" + d.counter !== c || (e.params(a),
            f.push(c),
            d.parent && (d = {},
            b.Og((d.type = "params",
            d.data = a,
            d))))
        }
    }
    var bv = S("y.p", function(a, b) {
        var c = lg(a, b);
        if (c) {
            var d = ol(a)
              , e = D([a, c, b], av);
            rl(a, d, function(f) {
                f.D(["params"], e)
            });
            c.ba.D(["params"], N(ib("1"), e))
        }
    })
      , cv = S("guid.int", function(a, b) {
        var c = {};
        return c.getClientID = function(d) {
            var e = Kf(a, b);
            d && el(a, d, null, e);
            return e
        }
        ,
        c
    });
    function dv(a, b) {
        var c = {};
        c = (c.string = !0,
        c.object = !0,
        c["boolean"] = b,
        c)[typeof b] || !1;
        var d = {};
        a((d.trackLinks = c,
        d))
    }
    function ev(a, b, c) {
        var d = Og();
        void 0 !== c.hd && d.F("ite", zd(c.hd));
        c.fd && d.F("dl", 1);
        c.Pb && d.F("ln", 1);
        var e = c.jh || {}
          , f = {};
        d = {
            M: d,
            T: {
                title: e.title || c.title,
                ld: !!c.ld,
                Z: e.params
            },
            K: (f["page-url"] = c.url,
            f["page-ref"] = b.Kb || Ud(a).href,
            f)
        };
        f = "Link";
        c.fd ? f = c.Pb ? "Ext link - File" : "File" : c.Pb && (f = "Ext link");
        var g = {}
          , h = {};
        Ig(a, (h.counterKey = V(b),
        h.name = "event",
        h.data = (g.schema = "Link click",
        g.name = (c.Pb ? "external" : "internal") + " url: " + c.url,
        g),
        h));
        g = {};
        b = c.sender(d, b).then(ti(a, b, "lcl", (g.prefix = f,
        g.id = b.id,
        g.url = c.url,
        g), c.jh));
        fl(a, "cl.p.s", b, e.callback || w, e.ctx)
    }
    function fv(a, b) {
        if (a.tj()) {
            var c = Ei(b);
            if (c && !Xe("ym-disable-tracklink", c)) {
                var d = a.l
                  , e = a.Hh
                  , f = a.Jh
                  , g = a.sender
                  , h = a.Xh
                  , k = f.Kb
                  , l = c.href;
                var m = fe(c.innerHTML && c.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                m || (m = (m = c.querySelector("img")) ? fe(m.getAttribute("title") || m.getAttribute("alt")) : "");
                m = l === m ? "" : m;
                var p = I(b, "isTrusted");
                if (Xe("ym-external-link", c))
                    ev(d, f, {
                        url: l,
                        Pb: !0,
                        title: m,
                        hd: p,
                        sender: g
                    });
                else {
                    k = k ? Kg(d, k).hostname : Ud(d).hostname;
                    h = RegExp("\\.(" + P("|", M(Jt, h)) + ")$", "i");
                    var q = c.protocol + "//" + c.hostname + c.pathname;
                    h = yg.test(q) || yg.test(l) || h.test(l) || h.test(q);
                    c = c.hostname;
                    Wd(k) === Wd(c) ? h ? ev(d, f, {
                        url: l,
                        fd: !0,
                        hd: p,
                        title: m,
                        sender: g
                    }) : m && e.F("il", fe(m).slice(0, 100)) : l && Tt.test(l) || ev(d, f, {
                        url: l,
                        ld: !0,
                        Pb: !0,
                        fd: h,
                        hd: p,
                        title: m,
                        sender: g
                    })
                }
            }
        }
    }
    var gv = Ja(function(a, b) {
        x(b) ? a.push(b) : M(N(J, Wa("push", a)), b)
    });
    function hv(a, b, c) {
        function d(g) {
            var h = {
                id: g.counterId,
                $: g.$
            }
              , k = {
                N: {
                    aa: g.$i
                },
                M: Og(g.vh),
                K: g.Z,
                T: {
                    zc: g.zc
                },
                Ta: {
                    ta: g.ta
                }
            };
            g.Ja && (k.Ja = Fh(g.Ja));
            return f(k, h).then(w, e)
        }
        var e = R(a, "rts.p")
          , f = pi(a, "r", b);
        return Li(b, function() {
            Wi(a, D([a, c, d, "rts.a", 1], Dj), "rts.mr")
        }).then(w, e)
    }
    var iv = [Ol("watch"), Ol("clmap")]
      , jv = Sd("retryReqs", function(a) {
        return Le(a).C("retryReqs", {})
    }, !0);
    function kv(a, b) {
        Le(a).F("retryReqs", b)
    }
    function lv(a, b) {
        var c = {
            protocol: b.protocol,
            host: b.host,
            ta: b.resource,
            $i: b.postParams,
            Z: b.params,
            vh: b.browserInfo,
            Uj: b.ghid,
            time: b.time,
            zc: fb(a),
            counterId: b.counterId,
            $: b.counterType
        };
        b.telemetry && (c.Ja = b.telemetry);
        return c
    }
    function mv(a) {
        var b = jv(a);
        return {
            add: function(c) {
                for (var d = 1; b[d]; )
                    d += 1;
                b[d] = c;
                kv(a, b);
                return d
            },
            "delete": function(c) {
                delete b[c];
                kv(a, b)
            },
            xj: function(c, d) {
                var e = b[c];
                e && e.browserInfo && (e.browserInfo.rqnl = d,
                kv(a, b))
            },
            ni: S("g.r", function() {
                var c = Be(a)(ye)
                  , d = Hf(a);
                return G(function(e, f) {
                    var g = r(f)
                      , h = g.next().value;
                    (g = g.next().value) && Tb(Na(g.resource), iv) && !g.d && g.ghid && g.ghid !== d && g.time && 500 < c - g.time && g.time + 864E5 > c && g.browserInfo.rqnl && 2 >= g.browserInfo.rqnl && (g.d = 1,
                    h = lv(h, g),
                    e.push(h));
                    return e
                }, [], sd(b))
            }),
            Ch: function() {
                var c = Be(a)(ye);
                M(function(d) {
                    var e = r(d);
                    d = e.next().value;
                    e = e.next().value;
                    (!e || !e.time || e.time + 864E5 < c || e.browserInfo.rqnl && 2 <= e.browserInfo.rqnl) && delete b[d]
                }, sd(b));
                kv(a, b)
            },
            length: function() {
                return td(b).length
            },
            clear: function() {
                kv(a, {});
                return G(function(c, d) {
                    var e = r(d)
                      , f = e.next().value;
                    e = e.next().value;
                    c.push(lv(f, e));
                    delete b[f];
                    return c
                }, [], sd(b))
            }
        }
    }
    function nv(a, b, c, d) {
        b.M && b.T && (d["delete"](b.T.zc),
        100 <= d.length() && (b = d.clear(),
        hv(a, c, b)))
    }
    function ov(a, b) {
        var c = mv(a);
        return {
            V: function(d, e) {
                var f = d.M
                  , g = d.Ja
                  , h = d.K
                  , k = void 0 === d.N ? {} : d.N;
                if (f && h) {
                    var l = Be(a);
                    f.Cb("rqnl", 1);
                    var m = {};
                    f = (m.protocol = "https:",
                    m.host = Kc,
                    m.resource = d.Ta.ta,
                    m.postParams = k.aa,
                    m.time = l(ye),
                    m.counterType = b.$,
                    m.params = h,
                    m.browserInfo = f.l(),
                    m.counterId = b.id,
                    m.ghid = Hf(a),
                    m);
                    g && (f.telemetry = g.l());
                    g = c.add(f);
                    d.T || (d.T = {});
                    d.T.zc = g
                }
                e()
            },
            Aa: function(d, e) {
                nv(a, d, b, c);
                e()
            }
        }
    }
    function pv(a, b, c) {
        function d() {
            v || (q = !0,
            t = !1,
            v = !0,
            f())
        }
        function e() {
            m = !0;
            k(!1);
            b()
        }
        function f() {
            Kd(a, l);
            if (m)
                k(!1);
            else {
                var Y = Math.max(0, c - (t ? u : u + p(ye) - z));
                Y ? l = W(a, e, Y, "u.t.d.c") : e()
            }
        }
        function g() {
            t = q = v = !0;
            u += p(ye) - z;
            z = p(ye);
            f()
        }
        function h() {
            q || v || (u = 0);
            z = p(ye);
            q = v = !0;
            t = !1;
            f()
        }
        function k(Y) {
            Y = Y ? E.D : E.lb;
            Y(a, ["blur"], g);
            Y(a, ["focus"], h);
            Y(a.document, ["click", "mousemove", "keydown", "scroll"], d)
        }
        var l = 0
          , m = !1;
        if (lc(a))
            return l = W(a, b, c, "u.t.d"),
            D([a, l], Kd);
        var p = Be(a)
          , q = !1
          , v = !1
          , t = !0
          , u = 0
          , z = p(ye)
          , E = Qd(a);
        k(!0);
        f();
        return function() {
            Kd(a, l);
            k(!1)
        }
    }
    var qv = S("nb.p", function(a, b) {
        function c(q) {
            h() || (q = "number" === typeof q ? q : 15E3,
            p = pv(a, d(!1), q),
            l())
        }
        function d(q) {
            return function(v) {
                var t = {};
                v = void 0 === v ? (t.ctx = {},
                t.callback = w,
                t) : v;
                if (q || !m && !g.Ge) {
                    m = !0;
                    l();
                    p && p();
                    var u = Be(a)(ye);
                    t = (fb(g.C("lastHit")) || 0) < u - 18E5;
                    var z = .1 > Math.random();
                    g.F("lastHit", u);
                    var E = Ki(f);
                    u = E.sc;
                    E = E.Yh;
                    var Y = {};
                    u = Og((Y.nb = 1,
                    Y.cl = cb(a, E) && cb(a, u) ? E - u : 0,
                    Y.ar = 1,
                    Y));
                    E = gl(b);
                    Y = {};
                    u = {
                        K: (Y["page-url"] = E.url || Ud(a).href,
                        Y),
                        M: u,
                        T: {
                            force: q
                        }
                    };
                    E = ri(a, V(b)).warn;
                    !v.callback && v.ctx && E("nbnc");
                    (t = q || t || z) || (t = a.location.href,
                    z = a.document.referrer,
                    t = !(t && z ? Ut(t) === Ut(z) : !t && !z));
                    if (t)
                        return t = e(u, b),
                        fl(a, "l.o.l", t, v.callback, v.ctx)
                }
                return null
            }
        }
        var e = pi(a, "n", b), f = V(b), g = Me(a, b.id), h = F(F(f, ll(a)), N(Oc, ib("accurateTrackBounce"))), k = {}, l = F((k.accurateTrackBounce = !0,
        k), kl(a, f)), m = !1, p;
        b.Ff && c(b.Ff);
        k = {};
        k = (k.notBounce = d(!0),
        k.u = p,
        k);
        k.accurateTrackBounce = c;
        return k
    })
      , rv = S("trigger.in", function(a, b) {
        b.dh && Wi(a, D([a, "yacounter" + b.id + "inited"], Nt), "t.i")
    })
      , sv = K(N(qb, Ka(Li)(ib("settings.form_goals"))), qb);
    function tv(a, b, c, d) {
        return sv(a, b).then(N(D([ti(a, b, c, d), w], xd), Oc))
    }
    function uv(a, b, c, d, e, f) {
        var g = nb(b)(e, d)
          , h = -1 !== g;
        if (a || h)
            h && d.splice(g, 1),
            a = Mk(b, e, ["i", "n", "p"]),
            a = "?" + ce(a),
            d = {},
            d = D([b, c, "fg", (d.id = c.id,
            d.query = a,
            d)], tv),
            B(f) ? f = void 0 : (e = {},
            g = {},
            f = (g.__ym = (e.ite = zd(f),
            e),
            g)),
            jl(b, c, "form", d).reachGoal(a, f)
    }
    function vv(a, b, c, d) {
        var e = I(d, "target");
        e && (d = I(d, "isTrusted"),
        (e = Di("button,input", a, e)) && "submit" === e.type && (e = Iu(a, e))) && (c.push(e),
        W(a, D([!1, a, b, c, e, d], uv), 300, "s.t.s"))
    }
    var wv = S("s.f.i", function(a, b) {
        var c = []
          , d = []
          , e = Qd(a);
        c.push(e.D(a, ["click"], R(a, "s.f.c", D([a, b, d], vv))));
        c.push(e.D(a, ["submit"], R(a, "s.f.e", function(f) {
            uv(!0, a, b, d, I(f, "target"), I(f, "isTrusted"))
        })));
        e = {};
        tv(a, b, "fgi", (e.id = b.id,
        e));
        return D([Pc, c], M)
    })
      , xv = S("suid.int", function(a, b) {
        var c = {};
        return c.setUserID = function(d, e, f) {
            if (x(d) || cb(a, d)) {
                var g = qg(a, b);
                d = kb(["__ym", "user_id", d]);
                g.params(d, e || w, f)
            } else
                ri(a, V(b)).error("wuid")
        }
        ,
        c
    });
    function yv(a, b) {
        return {
            Aa: function(c, d) {
                var e = qg(a, b);
                e = e && e.userParams;
                var f = (c.T || {}).zf;
                e && f && e(f);
                d()
            }
        }
    }
    var zv = S("up.int", function(a, b) {
        var c = {};
        return c.userParams = R(a, "up.c", function(d, e, f) {
            var g = qg(a, b)
              , h = ri(a, V(b)).warn;
            g ? Pa(d) ? (h = {},
            d = (h.__ymu = d,
            h),
            (g = g.params) && g(d, e || w, f)) : h("wup") : h("nci")
        }),
        c
    })
      , Av = /[\*\.\?\(\)]/g
      , Bv = K(function(a, b, c) {
        try {
            var d = c.replace("\\s", " ").replace(Av, "");
            b = {};
            ri(a, "").warn("nnw", (b.name = d,
            b))
        } catch (e) {}
    }, qb)
      , Cv = S("r.nn", function(a) {
        Gg(a) && pl(a, va, function(b) {
            b.sa.D(function(c) {
                var d = r(c);
                c = d.next().value;
                d = d.next().value;
                Bv(a, d, c);
                va.splice(100)
            })
        })
    });
    function Dv(a, b) {
        return {
            V: function(c, d) {
                Rh(c) ? d() : Li(b, function(e) {
                    if (e = I(e, "settings.hittoken")) {
                        var f = {};
                        e = (f.hittoken = e,
                        f);
                        c.K = O(c.K || {}, e)
                    }
                    d()
                })
            }
        }
    }
    var Ev = K(md, V)
      , Fv = S("fpi", function(a) {
        var b = Gc(a);
        if (b && !a.document.hidden) {
            var c = Q(a).va;
            c("fpe", 1);
            var d = Qd(a).D(a, ["visibilitychange", "webkitvisibilitychange"], function() {
                a.document.hidden && (c("fht", b.now()),
                d())
            })
        }
    })
      , Gv = /([0-9\\.]+) Safari/
      , Hv = /\sYptp\/\d\.(\d+)\s/;
    function Iv(a) {
        return cc(a) && (a = ub(a).match(Gv)) && a.length ? "14.1" === a[1] : !1
    }
    var Jv = K(function(a) {
        var b;
        a: {
            if ((b = ub(a)) && (b = Hv.exec(b)) && 1 < b.length) {
                b = fb(b[1]);
                break a
            }
            b = 0
        }
        return 50 <= b && 99 >= b || xc(a) ? !1 : !vc(a) || hg(a)
    });
    function Kv(a, b, c, d, e, f, g, h) {
        var k = c.C(f);
        B(k) && (c.F(f, g),
        e(a, b, c, d),
        k = c.C(f, g));
        A(h) || h.Cb(f, "" + k);
        return k
    }
    var Rv = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";")
      , Sv = K(function(a) {
        a = Ue(a)("canvas");
        var b = I(a, "getContext");
        if (!b)
            return null;
        try {
            var c = C(b, a)("2d");
            c.font = "72px mmmmmmmmmmlli";
            var d = c.measureText("mmmmmmmmmmlli").width;
            return function(e) {
                c.font = "72px " + e;
                return c.measureText("mmmmmmmmmmlli").width === d
            }
        } catch (e) {
            return null
        }
    });
    function Tv(a, b) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
        var c = [0, 0, 0, 0];
        c[3] += a[3] * b[3];
        c[2] += c[3] >>> 16;
        c[3] &= 65535;
        c[2] += a[2] * b[3];
        c[1] += c[2] >>> 16;
        c[2] &= 65535;
        c[2] += a[3] * b[2];
        c[1] += c[2] >>> 16;
        c[2] &= 65535;
        c[1] += a[1] * b[3];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[1] += a[2] * b[2];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[1] += a[3] * b[1];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0];
        c[0] &= 65535;
        return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
    }
    function Uv(a, b) {
        a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
        b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
        var c = [0, 0, 0, 0];
        c[3] += a[3] + b[3];
        c[2] += c[3] >>> 16;
        c[3] &= 65535;
        c[2] += a[2] + b[2];
        c[1] += c[2] >>> 16;
        c[2] &= 65535;
        c[1] += a[1] + b[1];
        c[0] += c[1] >>> 16;
        c[1] &= 65535;
        c[0] += a[0] + b[0];
        c[0] &= 65535;
        return [c[0] << 16 | c[1], c[2] << 16 | c[3]]
    }
    function Vv(a, b) {
        b %= 64;
        if (32 === b)
            return [a[1], a[0]];
        if (32 > b)
            return [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b];
        b -= 32;
        return [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b]
    }
    function Wv(a, b) {
        b %= 64;
        return 0 === b ? a : 32 > b ? [a[0] << b | a[1] >>> 32 - b, a[1] << b] : [a[1] << b - 32, 0]
    }
    function Xv(a, b) {
        return [a[0] ^ b[0], a[1] ^ b[1]]
    }
    function Yv(a) {
        a = Xv(a, [0, a[0] >>> 1]);
        a = Tv(a, [4283543511, 3981806797]);
        a = Xv(a, [0, a[0] >>> 1]);
        a = Tv(a, [3301882366, 444984403]);
        return a = Xv(a, [0, a[0] >>> 1])
    }
    var Zv = [2277735313, 289559509]
      , $v = [1291169091, 658871167];
    function aw(a, b) {
        var c = a || ""
          , d = (void 0 === b ? 210 : b) || 0
          , e = c.length - c.length % 16
          , f = [0, d];
        d = [0, d];
        for (var g = 0; g < e; g += 16) {
            var h = [a.charCodeAt(g + 4) & 255 | (a.charCodeAt(g + 5) & 255) << 8 | (a.charCodeAt(g + 6) & 255) << 16 | (a.charCodeAt(g + 7) & 255) << 24, a.charCodeAt(g) & 255 | (a.charCodeAt(g + 1) & 255) << 8 | (a.charCodeAt(g + 2) & 255) << 16 | (a.charCodeAt(g + 3) & 255) << 24]
              , k = [a.charCodeAt(g + 12) & 255 | (a.charCodeAt(g + 13) & 255) << 8 | (a.charCodeAt(g + 14) & 255) << 16 | (a.charCodeAt(g + 15) & 255) << 24, a.charCodeAt(g + 8) & 255 | (a.charCodeAt(g + 9) & 255) << 8 | (a.charCodeAt(g + 10) & 255) << 16 | (a.charCodeAt(g + 11) & 255) << 24];
            h = Tv(h, Zv);
            h = Vv(h, 31);
            h = Tv(h, $v);
            f = Xv(f, h);
            f = Vv(f, 27);
            f = Uv(f, d);
            f = Uv(Tv(f, [0, 5]), [0, 1390208809]);
            k = Tv(k, $v);
            k = Vv(k, 33);
            k = Tv(k, Zv);
            d = Xv(d, k);
            d = Vv(d, 31);
            d = Uv(d, f);
            d = Uv(Tv(d, [0, 5]), [0, 944331445])
        }
        e = c.length % 16;
        g = c.length - e;
        h = [0, 0];
        k = [0, 0];
        switch (e) {
        case 15:
            k = Xv(k, Wv([0, c.charCodeAt(g + 14)], 48));
        case 14:
            k = Xv(k, Wv([0, c.charCodeAt(g + 13)], 40));
        case 13:
            k = Xv(k, Wv([0, c.charCodeAt(g + 12)], 32));
        case 12:
            k = Xv(k, Wv([0, c.charCodeAt(g + 11)], 24));
        case 11:
            k = Xv(k, Wv([0, c.charCodeAt(g + 10)], 16));
        case 10:
            k = Xv(k, Wv([0, c.charCodeAt(g + 9)], 8));
        case 9:
            k = Xv(k, [0, c.charCodeAt(g + 8)]),
            k = Tv(k, $v),
            k = Vv(k, 33),
            k = Tv(k, Zv),
            d = Xv(d, k);
        case 8:
            h = Xv(h, Wv([0, c.charCodeAt(g + 7)], 56));
        case 7:
            h = Xv(h, Wv([0, c.charCodeAt(g + 6)], 48));
        case 6:
            h = Xv(h, Wv([0, c.charCodeAt(g + 5)], 40));
        case 5:
            h = Xv(h, Wv([0, c.charCodeAt(g + 4)], 32));
        case 4:
            h = Xv(h, Wv([0, c.charCodeAt(g + 3)], 24));
        case 3:
            h = Xv(h, Wv([0, c.charCodeAt(g + 2)], 16));
        case 2:
            h = Xv(h, Wv([0, c.charCodeAt(g + 1)], 8));
        case 1:
            h = Xv(h, [0, c.charCodeAt(g)]),
            h = Tv(h, Zv),
            h = Vv(h, 31),
            h = Tv(h, $v),
            f = Xv(f, h)
        }
        f = Xv(f, [0, c.length]);
        d = Xv(d, [0, c.length]);
        f = Uv(f, d);
        d = Uv(d, f);
        f = Yv(f);
        d = Yv(d);
        f = Uv(f, d);
        d = Uv(d, f);
        return ("00000000" + (f[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (f[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
    }
    var bw = S("p.cd", function(a) {
        if (ic(a) || ac(a)) {
            var b = Le(a);
            if (B(b.C("jn"))) {
                b.F("jn", !1);
                var c = a.chrome || cc(a) ? function() {}
                : /./;
                a = Vl(a);
                c.toString = function() {
                    b.F("jn", !0);
                    return "Yandex.Metrika counter is initialized"
                }
                ;
                a.log("%c%s", "color: inherit", c)
            }
        }
    });
    function cw(a) {
        return P(",", [a.description, a.suffixes, a.type])
    }
    function dw(a) {
        try {
            var b = jb(a) ? a : [];
            return P(",", [a.name, a.description, N(Wb, Ed, Hb(cw), Pb(","))(b)])
        } catch (c) {
            return ""
        }
    }
    var ew = K(function(a) {
        a = I(a, "navigator.plugins");
        return !!(a && jb(a) && Tb(N(ib("name"), Xa(/Chrome PDF Viewer/)), a))
    })
      , fw = Ja(function(a, b) {
        return Q(b).C(a, null)
    });
    function gw(a) {
        return a ? Uk(Zt(a)) : null
    }
    var hw = K(function(a) {
        return tb(/tizen/i, a)
    });
    function iw(a) {
        if (!hw(a))
            return null;
        a = I(a, "webapis.adinfo.getTIFA");
        if (y(a))
            try {
                return gw(a())
            } catch (b) {}
        return null
    }
    function jw(a) {
        if (!hw(a))
            return null;
        a = I(a, "tizen.systeminfo.getCapability");
        if (y(a))
            try {
                return gw(a("http://tizen.org/system/tizenid"))
            } catch (b) {}
        return null
    }
    function kw(a) {
        if (!hw(a))
            return null;
        a = I(a, "tizen.systeminfo.getCapabilities");
        try {
            if (y(a))
                return gw(I(a(), "duid"))
        } catch (b) {}
        return null
    }
    var lw = K(function(a) {
        return tb(/webos|web0s/i, a)
    });
    function mw(a) {
        var b = I(a, "webOS.service.request");
        return y(b) ? new T(function(c) {
            var d = {}
              , e = {};
            b("luna://com.webos.service.sm", (e.method = "deviceid/getIDs",
            e.parameters = (d.idType = ["LGUDID"],
            d),
            e.onSuccess = function(f) {
                c(gw(I(f, "idList.0.idValue")))
            }
            ,
            e))
        }
        ) : T.resolve(null)
    }
    var nw = K(function(a) {
        return y(I(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
    });
    function ow(a, b) {
        try {
            var c = b.localStorage.getItem(a);
            return c && Uk(Zt(c))
        } catch (d) {}
        return null
    }
    var pw = K(F("panoramaId", ow))
      , qw = K(function(a) {
        return ow("pubcid.org", a) || ow("_pubCommonId", a)
    })
      , rw = K(F("_sharedid", ow))
      , sw = K(function(a, b) {
        if (b.xb)
            return null;
        var c = ue(a, "").C("_ga");
        return c && Uk(Zt(c))
    }, N(qb, V))
      , tw = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart", "navigationStart"], ["redirectEnd", "redirectStart"], [function(a, b) {
        return I(b, "redirectCount") || I(a, "navigation.redirectCount")
    }
    ], ["domInteractive", "domLoading"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete", "navigationStart"], ["loadEventStart", "navigationStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart", "navigationStart"]]
      , uw = [["domainLookupEnd", "domainLookupStart"], ["connectEnd", "connectStart"], ["responseStart", "requestStart"], ["responseEnd", "responseStart"], ["fetchStart"], ["redirectEnd", "redirectStart"], ["redirectCount"], ["domInteractive", "responseEnd"], ["domContentLoadedEventEnd", "domContentLoadedEventStart"], ["domComplete"], ["loadEventStart"], ["loadEventEnd", "loadEventStart"], ["domContentLoadedEventStart"]]
      , vw = {}
      , ww = (vw.responseEnd = 1,
    vw.domInteractive = 1,
    vw.domContentLoadedEventStart = 1,
    vw.domContentLoadedEventEnd = 1,
    vw.domComplete = 1,
    vw.loadEventStart = 1,
    vw.loadEventEnd = 1,
    vw.unloadEventStart = 1,
    vw.unloadEventEnd = 1,
    vw.secureConnectionStart = 1,
    vw)
      , xw = K(nd);
    function yw(a, b, c) {
        return M(function(d) {
            var e = r(d)
              , f = e.next().value;
            e = e.next().value;
            if (y(f))
                return f(a, b) || null;
            if (1 === d.length)
                return b[f] ? Math.round(b[f]) : null;
            var g;
            !(g = b[f] && b[e]) && (g = 0 === b[f] && 0 === b[e]) && (g = r(d),
            d = g.next().value,
            g = g.next().value,
            g = !(ww[d] || ww[g]));
            if (!g)
                return null;
            f = Math.round(b[f]) - Math.round(b[e]);
            return 0 > f || 36E5 < f ? null : f
        }, c)
    }
    function zw(a, b) {
        var c = a.length ? M(function(d, e) {
            var f = b[e];
            return f === d ? null : f
        }, a) : b;
        a.length = 0;
        M(N(J, Wa("push", a)), b);
        return Dd(La(null), c).length === a.length ? null : c
    }
    function Aw(a, b, c) {
        if ((void 0 === c.K ? {} : c.K).nohit)
            return null;
        a = Gc(a);
        if (!a)
            return null;
        var d = c = null;
        I(a, "getEntriesByType") && (d = I(a.getEntriesByType("navigation"), "0")) && (c = uw);
        if (!c) {
            var e = I(a, "timing");
            e && (c = tw,
            d = e)
        }
        if (!c)
            return null;
        a = yw(a, d, c);
        b = V(b);
        b = xw(b);
        return (b = zw(b, a)) && P(",", b)
    }
    var Bw = K(md)
      , Cw = K(function(a) {
        var b = I(a, "webkitRequestFileSystem");
        if (y(b) && !ic(a))
            return (new T(C(b, a, 0, 0))).then(function() {
                var d = I(a, "navigator.storage") || {};
                return d.estimate ? d.estimate() : {}
            }).then(function(d) {
                return (d = d.quota) && 12E7 > d ? !0 : !1
            })["catch"](F(!0, J));
        if (wb(a))
            return T.resolve(A(I(a, "navigator.serviceWorker")));
        b = I(a, "openDatabase");
        if (cc(a) && y(b)) {
            var c = !1;
            try {
                b(null, null, null, null)
            } catch (d) {
                c = !0
            }
            return T.resolve(c)
        }
        return T.resolve(!I(a, "indexedDB") && (I(a, "PointerEvent") || I(a, "MSPointerEvent")))
    });
    function Dw(a) {
        if (fc(a))
            return null;
        var b = Bw(a)
          , c = b.wg;
        A(c) && (b.wg = null,
        Cw(a).then(function(d) {
            b.wg = d
        }));
        return c ? 1 : null
    }
    var Ew = /(\?|&)turbo_uid=([\w\d]+)($|&)/
      , Fw = K(function(a, b) {
        var c = ve(a)
          , d = Ud(a).search.match(Ew);
        return d && 2 <= d.length ? (d = r(d),
        d.next(),
        d.next(),
        d = d.next().value,
        b.xb || c.F("turbo_uid", d),
        d) : (c = c.C("turbo_uid")) ? c : ""
    });
    function Gw() {
        return null
    }
    var Hw = S("pa.plgn", function(a, b) {
        var c = mg(a, b);
        c && c.ba.D(["pluginInfo"], R(a, "c.plgn", function() {
            var d = Q(a);
            d.F("cmc", d.C("cmc", 0) + 1);
            return Ot(b)
        }))
    })
      , Iw = {}
      , Jw = (Iw.am = "com.am",
    Iw.tr = "com.tr",
    Iw.ge = "com.ge",
    Iw.il = "co.il",
    Iw["\u0440\u0444"] = "ru",
    Iw["xn--p1ai"] = "ru",
    Iw["\u0431\u0435\u043b"] = "by",
    Iw["xn--90ais"] = "by",
    Iw)
      , Kw = {
        "mc.edadeal.ru": /^([^/]+\.)?edadeal\.ru$/,
        "mc.yandexsport.ru": /^([^/]+\.)?yandexsport\.ru$/,
        "mc.kinopoisk.ru": /^([^/]+\.)?kinopoisk\.ru$/
    }
      , Lw = {}
      , Mw = (Lw.ka = "ge",
    Lw.ro = "md",
    Lw.tg = "tj",
    Lw.tk = "tm",
    Lw.et = "ee",
    Lw.hy = "com.am",
    Lw.he = "co.li",
    Lw.ky = "kg",
    Lw.be = "by",
    Lw.tr = "com.tr",
    Lw.kk = "kz",
    Lw)
      , Nw = N(x, D([1, null], xd))
      , Ow = /^https?:\/\//
      , Pw = {
        1882689622: 1,
        2318205080: 1,
        3115871109: 1,
        1996539654: 1,
        2065498185: 1,
        823651274: 1,
        12282461: 1,
        1555719328: 1,
        1417229093: 1,
        138396985: 1
    };
    function Qw(a) {
        a = r(a.replace(Ow, "").split("?")).next().value;
        var b = a + "?"
          , c = Fi(b);
        if (Hu[c])
            return [b, c, !0];
        b = Fi(a);
        return Hu[b] ? [a, b, !0] : [a, b, !1]
    }
    var Rw = K(function(a) {
        a = Gc(a);
        if (!a || !y(a.getEntriesByType))
            return null;
        a = a.getEntriesByType("resource");
        return (a = Pe(N(ib("name"), Qw, ib("2")), a)) ? zd(a.transferSize) : null
    });
    function Sw(a, b) {
        var c = uj(function(d, e) {
            return d[1].ga > e[1].ga ? 1 : -1
        }, sd(Ff));
        c = M(function(d) {
            var e = r(d);
            d = e.next().value;
            var f = e.next().value.cb;
            e = H(b, d) && !B(b[d]);
            d = b[d] !== (f || J)(void 0);
            return zd(e && d)
        }, c);
        return gb(P("", c))
    }
    function Tw(a, b) {
        var c = I(b, "pointerType");
        c && (a.pt = c);
        return a
    }
    function Uw(a, b) {
        Z.call(this, a, b, "cc", !1);
        this.onClick = this.J.H(this.onClick, "oc");
        this.ca.push([["click"], this.onClick])
    }
    sa(Uw, Z);
    Uw.prototype.onClick = function(a) {
        var b = a.target;
        if (b && (3 === b.nodeType && b.parentNode && (b = b.parentNode),
        b = this.O(b))) {
            var c = Ce(this.l);
            b = N(function(d) {
                return yk(d, a)
            }, function(d) {
                return Tw(d, a)
            })({
                target: b,
                x: (void 0 === a.clientX ? 0 : a.clientX) || 0,
                y: (void 0 === a.clientY ? 0 : a.clientY) || 0,
                id: c
            });
            this.G.R("event", b, "elementClick")
        }
    }
    ;
    var Vw = K(function(a) {
        return {
            Tj: a,
            Lb: null,
            Tb: []
        }
    });
    function Ww(a, b) {
        var c = Vw(Bo);
        U(b, c.Tb) || c.Tb.push(b);
        if (Oa(c.Lb)) {
            var d = Ue(a);
            if (!d)
                return null;
            d = d("iframe");
            O(d.style, {
                display: "none",
                width: "1px",
                height: "1px",
                visibility: "hidden"
            });
            d.src = Bo;
            var e = $e(a);
            if (!e)
                return null;
            e.appendChild(d);
            c.Lb = d
        } else
            (d = I(c.Lb, "contentWindow")) && d.postMessage("frameReinit", "*");
        return c.Lb
    }
    function Xw(a) {
        var b = Vw(Bo);
        U(a, b.Tb) && (b.Tb = Dd(N(La(a), rb), b.Tb),
        b.Tb.length || (Ve(b.Lb),
        b.Lb = null))
    }
    var Yw = {};
    function Zw(a, b) {
        return {
            V: function(c, d) {
                var e = c.K
                  , f = c.M;
                !Yw[b.id] && f.C("pv") && b.exp && !e.nohit && (e.exp = b.exp,
                Yw[b.id] = !0);
                d()
            }
        }
    }
    var $w = S("exps.int", function(a, b) {
        var c = {};
        return c.experiments = function(d, e, f) {
            if (x(d) && !(0 >= d.length)) {
                var g = pi(a, "e", b)
                  , h = gl(b).url
                  , k = {}
                  , l = {};
                d = g({
                    M: Og((k.ex = 1,
                    k.ar = 1,
                    k)),
                    K: (l["page-url"] = h || Ud(a).href,
                    l.exp = d,
                    l)
                }, b);
                return fl(a, "exps.s", d, e || w, f)
            }
        }
        ,
        c
    })
      , ax = S("p.fh", function(a, b) {
        b = void 0 === b ? !0 : b;
        var c = Le(a)
          , d = Be(a)
          , e = c.C("wasSynced")
          , f = {
            id: 3,
            $: "0"
        };
        if (b && e && e.time + 864E5 > d(ye))
            return T.resolve(e);
        e = {};
        var g = {};
        return pi(a, "f", f)({
            M: Og((e.pv = 1,
            e)),
            K: (g["page-url"] = Ud(a).href,
            g["page-ref"] = a.document.referrer,
            g)
        }, f).then(function(h) {
            var k = {};
            h = (k.time = d(ye),
            k.params = I(h, "settings"),
            k);
            c.F("wasSynced", h);
            return h
        })["catch"](R(a, "f.h"))
    });
    function bx(a, b) {
        return {
            V: function(c, d) {
                c.T || (c.T = {});
                var e = c.T;
                var f = oh("hidv2")(ph(V(b)));
                e.Bi = f;
                d()
            },
            Aa: function(c, d) {
                var e = I(c.Ag, "settings.hidv2")
                  , f = c.T.Bi;
                f(Wt(V(b), e));
                d()
            }
        }
    }
    var cx = Ja(function(a, b) {
        0 === parseFloat(I(b, "settings.c_recp")) && (a.Ne.F("ymoo" + a.Ca, a.$g(Mt)),
        a.Xd && a.Xd.destruct && a.Xd.destruct())
    })
      , dx = ki("ev")
      , ex = K(function(a, b, c) {
        return new zj(a,b,c,"ev")
    });
    function fx(a, b) {
        Z.call(this, a, b, "sc");
        this.Eb = new qk;
        this.Gb = {
            x: 0,
            y: 0
        };
        this.dc = new qk;
        this.Rb = new qk;
        this.ia = new ck(a);
        this.Qa = this.J.H(this.Qa, "o");
        H(a, "onscrollend") ? (this.ca.push([["scroll"], this.od]),
        this.ca.push([["scrollend"], this.Wi])) : this.ca.push([["scroll"], this.Xi])
    }
    sa(fx, Z);
    n = fx.prototype;
    n.start = function() {
        Z.prototype.start.call(this);
        this.G.R("event", {
            x: Math.max(this.l.scrollX, 0),
            y: Math.max(this.l.scrollY, 0),
            page: !0,
            target: -1
        }, "scroll", 0)
    }
    ;
    n.stop = function() {
        Z.prototype.stop.call(this);
        this.ia.flush();
        this.dc.forEach(function(a) {
            a.clear()
        });
        this.dc.clear();
        this.Rb.clear()
    }
    ;
    n.Wi = function(a) {
        var b = a.target
          , c = this.Eb.get(b);
        c && (c.cancel(),
        this.Eb["delete"](b));
        if (c = this.Rb.get(b))
            gx(this, c, a),
            this.Rb["delete"](b)
    }
    ;
    n.od = function(a) {
        var b = a.target;
        this.Rb.set(b, a);
        if (this.G.Ka().Ee())
            this.Qa(a);
        else {
            var c = this.Eb.get(b);
            c || (c = dk(this.ia, C(this.Qa, this), 100, {
                ke: !0
            }),
            this.Eb.set(b, c));
            c(a)
        }
    }
    ;
    n.Xi = function(a) {
        var b = this;
        this.od(a);
        var c = a.target;
        a = this.dc.get(c);
        a || (a = oo(this.l, function() {
            var d = b.Rb.get(c);
            d && (gx(b, d),
            b.Rb["delete"](c));
            b.dc["delete"](c)
        }, 1E3, this.J.Da("d")),
        this.dc.set(c, a));
        a.fn()
    }
    ;
    function hx(a, b) {
        return a.G.Ka().nc() === b || a.l === b || a.l.document === b
    }
    n.Qa = function(a) {
        var b = a.target
          , c = hx(this, b)
          , d = this.$a(b)
          , e = d.left;
        d = d.top;
        if (c) {
            if (this.Gb.x === e && this.Gb.y === d)
                return;
            this.Gb = {
                x: e,
                y: d
            }
        }
        a = yk({
            x: e,
            y: d,
            page: c,
            target: c ? -1 : this.O(b)
        }, a);
        this.G.R("event", a, "scroll")
    }
    ;
    function gx(a, b, c) {
        c = void 0 === c ? b : c;
        b = b.target;
        var d = hx(a, b)
          , e = a.$a(b);
        c = yk({
            x: e.left,
            y: e.top,
            page: d,
            target: d ? -1 : a.O(b)
        }, c);
        a.G.R("event", c, "scrollend")
    }
    n.$a = function(a) {
        var b = {
            left: 0,
            top: 0
        };
        if (!a)
            return b;
        if (a.window === a)
            return {
                top: a.scrollY || 0,
                left: a.scrollX || 0
            };
        var c = a.ownerDocument || a
          , d = a;
        return a !== c || (d = this.G.Ka().nc(),
        d) ? U(d, [a.documentElement, c.body]) ? (a = c.defaultView || c.parentWindow || {},
        {
            top: d.scrollTop || a.scrollY || 0,
            left: d.scrollLeft || a.scrollX || 0
        }) : {
            top: Math.max(d.scrollTop || 0, 0),
            left: Math.max(d.scrollLeft || 0, 0)
        } : b
    }
    ;
    function ix(a, b) {
        this.removeNode = function() {}
        ;
        this.l = a;
        var c = Lj(a, this, "si", b.Sa);
        this.start = c.H(this.start, "st");
        this.stop = c.H(this.stop, "sp");
        this.O = c.H(this.O, "i");
        this.sb = c.H(this.sb, "a");
        this.removeNode = c.H(this.removeNode, "r");
        this.ad = c.H(Rj, "gs")
    }
    n = ix.prototype;
    n.Ed = function() {}
    ;
    n.D = function() {}
    ;
    n.X = function() {}
    ;
    n.start = function() {}
    ;
    n.stop = function() {}
    ;
    n.sb = function(a) {
        var b = this;
        M(function(c) {
            b.ad(b.l, c)
        }, a.nodes)
    }
    ;
    n.O = function(a) {
        if (a === this.l)
            return 0;
        a = this.ad(this.l, a);
        return Oa(a) ? 0 : a.id
    }
    ;
    n.flush = function() {}
    ;
    var jx = ["copy", "cut"];
    function kx(a, b) {
        Z.call(this, a, b, "cb");
        this.ye = this.J.H(this.ye, "hc");
        this.ca.push([jx, this.ye])
    }
    sa(kx, Z);
    kx.prototype.ye = function(a) {
        this.G.R("event", {}, a.type)
    }
    ;
    function lx(a, b) {
        Z.call(this, a, b, "pc", !1);
        this.qg = H(a, "PointerEvent");
        var c = r(this.qg ? ["pointermove", "pointerdown", "pointerup"] : ["mousemove", "mousedown", "mouseup"])
          , d = c.next().value
          , e = c.next().value;
        c = c.next().value;
        this.ia = new ck(a);
        this.Pa = this.J.H(this.Pa, "n");
        this.qf = this.J.H(dk(this.ia, C(this.Pa, this), 100), "t");
        ac(a) || ic(a) || /mobile/i.test(ub(a)) || !A(I(a, "orientation")) || (this.ca.push([[d], this.qf]),
        this.ca.push([[e, c], this.Pa]))
    }
    sa(lx, Z);
    lx.prototype.stop = function() {
        Z.prototype.stop.call(this);
        this.ia.flush()
    }
    ;
    lx.prototype.Pa = function(a) {
        var b = a.type
          , c = void 0 === a.clientX ? null : a.clientX
          , d = void 0 === a.clientY ? null : a.clientY
          , e = a.target || this.l.document.elementFromPoint(c, d);
        c = yk({
            x: c || 0,
            y: d || 0,
            target: this.O(e) || 0
        }, a);
        this.qg && Tw(c, a);
        this.G.R("event", c, b)
    }
    ;
    function mx(a, b) {
        Z.call(this, a, b, "st", !1);
        var c = this;
        this.Jg = function() {
            c.kd && (c.G.R("event", c.kd, "elementSelection"),
            c.kd = void 0)
        }
        ;
        this.oc = this.J.H(this.oc, "hs");
        this.se = this.J.H(this.se, "gi");
        this.ve = this.J.H(this.ve, "gp");
        this.$d = oo(a, this.Jg, 500, "st");
        this.ca.push([sk, this.oc])
    }
    sa(mx, Z);
    mx.prototype.stop = function() {
        this.$d.clear();
        this.Jg();
        Z.prototype.stop.call(this)
    }
    ;
    mx.prototype.oc = function(a) {
        var b = a.type
          , c = a.which
          , d = a.buttons;
        a = a.target;
        c = A(d) ? 1 === c : 1 === (d & 1);
        if ("mousemove" !== b || c)
            (b = "select" === b ? this.se(a) : this.ve()) ? (this.kd = b,
            this.$d.fn()) : (this.kd = void 0,
            this.$d.clear())
    }
    ;
    mx.prototype.se = function(a) {
        var b = this;
        if (a && fj(a) && !kj(this.l, a).eb && !Zi(this.l, a)) {
            var c = (a.value || "").substring(a.selectionStart, this.l.Math.min(a.selectionEnd, a.selectionStart + 1E4));
            if (c && (a = vk(a, function(d) {
                return b.O(d)
            })))
                return {
                    start: a.start,
                    end: a.end,
                    target: a.target,
                    ed: Fi(c)
                }
        }
    }
    ;
    mx.prototype.ve = function() {
        var a = this
          , b = rk(this.l);
        if (b && !(0 >= b.rangeCount)) {
            var c = b.getRangeAt(0) || this.l.document.createRange()
              , d = uk(this.l, function(e) {
                return a.O(e)
            });
            if (d && !Zi(this.l, c.startContainer) && !Zi(this.l, c.endContainer) && (b = ("" + b).substring(0, 1E4)))
                return {
                    start: d.start,
                    end: d.end,
                    startNode: d.startNode,
                    endNode: d.endNode,
                    ed: Fi(b)
                }
        }
    }
    ;
    var nx = K(function(a, b) {
        var c = [ek, fx, Qj, wk, Ek, Bk, Fk, ak, kx, mx];
        c.push(Uw);
        c.push(lx);
        return new Nj(a,{
            Hb: c,
            Ld: ix,
            Md: Hk,
            Sa: "ev",
            Ph: !0,
            Zi: b
        })
    });
    function ox(a, b, c) {
        var d = {
            type: "event",
            event: c,
            stamp: b.stamp(),
            frameId: b.$c(),
            data: {}
        };
        "sessionStart" === c && (d.data.recordStamp = b.we(),
        cb(a, a.devicePixelRatio) && (d.data.dpr = xk(3)(a.devicePixelRatio)));
        return d
    }
    var px = K(Af);
    function qx(a, b, c, d, e) {
        function f(k) {
            var l = {};
            return g({
                M: Og((l.rst = d,
                l)).Cb("pvt", e),
                K: O({}, k.K),
                N: O({}, k.N)
            }, b)
        }
        var g = pi(a, "ev", b)
          , h = px(a);
        h.D(f);
        return {
            Kh: function(k) {
                c.oa([k])(uf(R(a, "ev.str"), function(l) {
                    var m = {};
                    f({
                        K: (m["wv-type"] = c.type,
                        m["wv-check"] = "" + lh(l),
                        m),
                        N: {
                            aa: l
                        }
                    })["catch"](R(a, "ev.sts"))
                }))
            },
            ti: function(k, l, m) {
                l = {};
                return T.all(h.trigger({
                    K: (l["wv-part"] = "" + m,
                    l["wv-type"] = c.type,
                    l["wv-check"] = "" + lh(k),
                    l),
                    N: {
                        aa: k
                    }
                })).then(w)
            },
            mj: F(f, h.X)
        }
    }
    var rx = S("ev", function(a, b) {
        if (!oc(a) && Gi.isEnabled(a)) {
            var c = !1
              , d = function() {
                c = !0
            }
              , e = Be(a);
            Li(b, function(f) {
                if (!c) {
                    f = I(f, "settings.ev");
                    var g = I(f, "pvt");
                    if (f) {
                        Ki(V(b)).Vh = e(ye);
                        var h = nx(a, g)
                          , k = ox(a, h, "sessionStart");
                        f = new Gi(a,"6");
                        g = qx(a, b, f, k.data.recordStamp, h.rb().Zi || null);
                        var l = g.Kh
                          , m = g.ti
                          , p = g.mj;
                        d = function() {
                            l(ox(a, h, "sessionEnd"));
                            p()
                        }
                        ;
                        var q = ex(a, f, m);
                        q.D("se", function t() {
                            q.X("se", t)
                        });
                        h.Gd ? l(k) : (Q(a).va("stopEventRecorder", function() {
                            h.stop()
                        }),
                        Rd(a) ? Qd(a).D(a, ["pagehide"], function(t) {
                            t.persisted ? q.flush(!0) : h.stop()
                        }, null) : Qd(a).D(a, ["beforeunload", "unload"], function() {
                            h.stop()
                        }),
                        Wi(a, function() {
                            l(k);
                            h.Gd || (h.start(Hb(function(t) {
                                q.push(t);
                                "eof" === t.event && q.flush(!0)
                            })),
                            q.flush())
                        }, "ev.R.s"))
                    }
                }
            })["catch"](R(a, "ev.R.c"));
            return function() {
                d()
            }
        }
    });
    function sx(a, b, c, d) {
        var e = d.data;
        if (x(e)) {
            var f = r(e.split("*"));
            e = f.next().value;
            var g = f.next().value
              , h = f.next().value;
            f = f.next().value;
            "sc.frame" === e && d.source ? d.source.postMessage((b ? "sc.bl" : "sc.images") + "*" + a, "*") : e === (b ? "sc.blr" : "sc.image") && g === a.split("?")[0] && c(h, x(f) ? Vk(Tk(f)) : null)
        }
    }
    function tx(a, b, c, d, e) {
        e = void 0 === e ? "isp" : e;
        return new T(function(f, g) {
            if (Ww(a, e)) {
                var h = w
                  , k = function(l, m) {
                    "1" === l ? f({
                        ib: m,
                        hh: 0
                    }) : g(l);
                    h();
                    Xw(e)
                };
                h = Qd(a).D(a, ["message"], D([b, c, k], R(a, d + ".m.mir", sx)));
                W(a, F("7", k), 3E3, d + ".t.mir")
            } else
                g(6)
        }
        )
    }
    var ux = N(De, ib("cid"));
    function vx(a, b, c) {
        return function(d, e) {
            return Li(e, function(f) {
                if (I(f, "settings." + a)) {
                    var g = Q(d)
                      , h = g.C
                      , k = g.F;
                    if (A(h("oms"))) {
                        var l = Uf(d, e);
                        g = {};
                        var m = Ee(d, (g.counterId = e.id,
                        g["cnt-class"] = e.$,
                        g));
                        if (f = b(d, m, f, l))
                            return k("oms", 1),
                            tx(d, f, !!c, "isp.stat").then(function(p) {
                                p = p.ib;
                                if (x(p)) {
                                    if (p = c && c(d, p)) {
                                        var q = Uk(Zt(p));
                                        k("oms", 8);
                                        p = {
                                            id: 99742118,
                                            $: "0"
                                        };
                                        var v = pi(d, "pi", p)
                                          , t = {};
                                        q = Og((t[a] = q,
                                        t.u = l,
                                        t));
                                        t = {};
                                        t = (t["page-url"] = Ud(d).href,
                                        t["page-ref"] = d.document.referrer,
                                        t["site-info"] = m,
                                        t);
                                        return v({
                                            M: q,
                                            K: t
                                        }, p).then(D(["oms", 4], k), F(9, Fc))
                                    }
                                    k("oms", 3)
                                } else
                                    k("oms", 2)
                            })["catch"](function(p) {
                                p = cb(d, p) || x(p) ? p : 5;
                                k("oms", p)
                            })
                    }
                }
            })["catch"](R(d, "l.isp." + a))
        }
    }
    function wx() {
        return P("", M(function(a) {
            return String.fromCharCode(a.charCodeAt(0) + 15)
        }, Vk(Tk("VCNUKCkkUiMeIlUjVx4lIydVHiohJyEeVyZWKFNVVSEmIyoj"))))
    }
    function xx(a, b) {
        var c = Le(a)
          , d = c.C
          , e = c.F;
        if ("" === d("cc")) {
            e("cc", 0);
            var f = Be(a)
              , g = Q(a);
            pi(a, "6", b)({
                N: {
                    mb: !0,
                    Cf: !1
                }
            }, ["https://mc.yandex.md/cc"]).then(function(h) {
                h = I(h.ib, "c");
                e("cc", h + "&" + f(Mt));
                g.F("cc", h)
            })["catch"](function(h) {
                var k = f(Mt);
                e("cc", "&" + k);
                Sc(a, "cc", h)
            })
        }
    }
    var yx = S("cc.i", function(a, b) {
        var c = D([a, b], xx);
        c = D([a, c, 300, void 0], W);
        Li(b, c)
    });
    function zx(a) {
        return {
            V: function(b, c) {
                var d = b.M;
                if (d) {
                    var e = Q(a).C("adBlockEnabled");
                    e && d.F("adb", e)
                }
                c()
            }
        }
    }
    function Ax(a, b) {
        var c = a.document;
        if (U(c.readyState, ["interactive", "complete"]))
            Wi(a, b, "adb.r.cor");
        else {
            var d = Qd(a)
              , e = d.D
              , f = d.lb
              , g = function() {
                f(c, ["DOMContentLoaded"], g);
                f(a, ["load"], g);
                b()
            };
            e(c, ["DOMContentLoaded"], g);
            e(a, ["load"], g)
        }
    }
    var Bx = F("9-d5ve+.r%7", J)
      , Cx = S("adb", function(a, b) {
        if (!b.xb) {
            var c = Q(a);
            if (!c.C("adBlockEnabled")) {
                var d = function(m) {
                    U(m, ["2", "1"]) && c.F("adBlockEnabled", m)
                }
                  , e = ve(a)
                  , f = e.C("isad");
                if (f)
                    d(f);
                else {
                    var g = F("adStatus", c.F)
                      , h = function(m) {
                        m = m ? "1" : "2";
                        d(m);
                        g("complete");
                        e.F("isad", m, 1200);
                        return m
                    }
                      , k = pi(a, "adb", b);
                    if (!c.C("adStatus")) {
                        g("process");
                        var l = "metrika/a" + Bx().replace(/[^a-v]+/g, "") + "t.gif";
                        Ax(a, function() {
                            return k({
                                Ta: {
                                    ta: l
                                }
                            }).then(F(!1, h))["catch"](F(!0, h))
                        })
                    }
                }
            }
        }
    })
      , Dx = S("pr.p", function(a, b) {
        if (uc(a)) {
            var c = pi(a, "5", b)
              , d = {};
            d = Og((d.pq = 1,
            d.ar = 1,
            d));
            var e = {};
            c({
                M: d,
                K: (e["page-url"] = Ud(a).href,
                e["page-ref"] = I(a, "document.referrer") || "",
                e)
            }, b)["catch"](R(a, "pr.p.s"))
        }
    })
      , Ex = !1;
    function Fx(a) {
        return {
            V: function(b, c) {
                if (!b.M)
                    return c();
                var d = Q(a).C("fid");
                !Ex && d && (Gh(b, "fid", d),
                Ex = !0);
                return c()
            }
        }
    }
    var Gx = S("fid", function(a) {
        var b = w;
        if (!y(a.PerformanceObserver))
            return b;
        var c = Q(a);
        if (c.C("fido"))
            return b;
        c.F("fido", !0);
        var d = new a.PerformanceObserver(R(a, "fid", function(f) {
            f = f.getEntries()[0];
            c.F("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
            b()
        }));
        b = function() {
            return d.disconnect()
        }
        ;
        try {
            var e = {};
            d.observe((e.type = "first-input",
            e.buffered = !0,
            e))
        } catch (f) {}
        return b
    })
      , Hx = K(md);
    function Ix(a) {
        var b = Hx();
        b.Yg || (b.Yg = a)
    }
    function Jx(a, b, c) {
        if (I(c, "settings.ins")) {
            var d = Q(a);
            if (!d.C("scip")) {
                var e = Le(a)
                  , f = Be(a)(Mt);
                c = db(e.C("sci"));
                if (!(c && 1440 >= f - c)) {
                    c = pi(a, "ci", b);
                    var g = ["sync.cook.int"]
                      , h = function(p) {
                        p = d.C("scip", "") + p;
                        d.F("scip", p)
                    }
                      , k = F("a", h);
                    d.F("scip", "0");
                    var l = {};
                    l = (l.tag = "cm-urls",
                    l.stage = "mc-yandex-ru",
                    l["mc-id"] = "" + b.id,
                    l.duid = Uf(a, b),
                    l);
                    var m = Hx().Yg;
                    m && (l.scid = m);
                    return c({
                        N: {
                            fa: g,
                            jb: 3E3,
                            mb: !0
                        },
                        K: l
                    }, ["https://eu.asas.yango.com/mapuid"]).then(function(p) {
                        p = I(p.ib, "CookieMatchUrls");
                        if (L(p) && jb(p)) {
                            h("1");
                            var q = pi(a, "c", b);
                            p = M(function(v, t) {
                                return q({
                                    N: {
                                        fa: g,
                                        jb: 3E3
                                    }
                                }, ["https://" + v]).then(N(F("c", h), F("" + t, h)))["catch"](N(F("b", h), F("" + t, h)))
                            }, Dd(x, p));
                            return T.all(p)
                        }
                        k()
                    }, k).then(function() {
                        var p = d.C("scip");
                        !p || Ha(p, "a") || Ha(p, "b") || (e.F("sci", f),
                        h("d"))
                    }, w)
                }
            }
        }
    }
    function Kx(a) {
        a = I(a, "navigator") || {};
        return a.doNotTrack || a.msDoNotTrack || "unknown"
    }
    var Lx = K(N(ib("performance.memory.jsHeapSizeLimit"), Wa("concat", "")))
      , Mx = ["availWidth", "availHeight", "availTop"];
    function Nx(a) {
        return P("x", M(F(I(a, "screen") || {}, I), Mx))
    }
    var Ox = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" ");
    function Px(a) {
        var b = void 0 === b ? Ox : b;
        b = M(F(I(a, "navigator") || {}, I), b);
        b = P("x", b);
        try {
            var c = ya(I(a, "navigator.getGamepads"), "getGamepads") && a.navigator.getGamepads() || []
        } catch (d) {
            c = []
        }
        return b + "x" + jb(c)
    }
    var Qx = ["webgl", "experimental-webgl"];
    function Rx(a, b) {
        b.clearColor(0, 0, 0, 1);
        b.enable(b.DEPTH_TEST);
        b.depthFunc(b.LEQUAL);
        b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
        return "[" + I(a, "0") + ", " + I(a, "1") + "]"
    }
    var Sx = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0];
    function Tx(a, b) {
        if (!y(a.Float32Array))
            return !1;
        var c = I(b, "canvas");
        if (!c || !xa("toDataUrl", c.toDataURL))
            return !1;
        try {
            b.createBuffer()
        } catch (d) {
            return !1
        }
        return !0
    }
    var Ux = F(Lc("ccf"), Fc);
    function Vx(a, b) {
        return [function() {
            var c = b.createBuffer();
            c && b.getParameter && xa("getParameter", b.getParameter) || Ux();
            b.bindBuffer(b.ARRAY_BUFFER, c);
            var d = new a.Float32Array(Sx);
            b.bufferData(b.ARRAY_BUFFER, d, b.STATIC_DRAW);
            c.Hi = 3;
            c.Oi = 3;
            d = b.createProgram();
            var e = b.createShader(b.VERTEX_SHADER);
            d && e || Ux();
            return {
                af: d,
                Dj: e,
                Cj: c
            }
        }
        , function(c) {
            var d = c.af
              , e = c.Dj;
            b.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
            b.compileShader(e);
            b.attachShader(d, e);
            (d = b.createShader(b.FRAGMENT_SHADER)) || Ux();
            return O(c, {
                ii: d
            })
        }
        , function(c) {
            var d = c.af
              , e = c.ii;
            b.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
            b.compileShader(e);
            b.attachShader(d, e);
            b.linkProgram(d);
            b.useProgram(d);
            return c
        }
        , function(c) {
            var d = c.af;
            c = c.Cj;
            d.Bj = b.getAttribLocation(d, "attrVertex");
            d.Pi = b.getUniformLocation(d, "uniformOffset");
            b.enableVertexAttribArray(d.lk);
            b.vertexAttribPointer(d.Bj, c.Hi, b.FLOAT, !1, 0, 0);
            b.uniform2f(d.Pi, 1, 1);
            b.drawArrays(b.TRIANGLE_STRIP, 0, c.Oi);
            return b.canvas
        }
        ]
    }
    function Wx(a) {
        return G(function(b, c) {
            var d = r(c)
              , e = d.next().value;
            d = d.next().value;
            b[e + " precision"] = I(d, "precision") || "n";
            b[e + " precision rangeMin"] = I(d, "rangeMin") || "n";
            b[e + " precision rangeMax"] = I(d, "rangeMax") || "n";
            return b
        }, {}, [["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)], ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT)], ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)], ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)], ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)], ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)], ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)], ["webgl vertex shader medium int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)], ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)], ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)], ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)], ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]])
    }
    var Xx = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";");
    function Yx(a) {
        var b = I(a, "matchMedia");
        if (b && xa("matchMedia", b)) {
            var c = Wa("matchMedia", a);
            return G(function(d, e) {
                d[e] = c("(" + e + ")");
                return d
            }, {}, Xx)
        }
    }
    var Zx = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" ")
      , $x = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" ");
    function ay(a) {
        a = Ue(a);
        if (!a)
            return "";
        a = a("video");
        try {
            var b = Wa("canPlayType", a)
              , c = Gb(function(d) {
                return M(N(J, Wa("concat", d + "; codecs=")), $x)
            }, Zx);
            return M(b, Zx.concat(c))
        } catch (d) {
            return "canPlayType"
        }
    }
    function by(a, b, c) {
        var d = I(a, "location.host");
        a = Uf(a, b);
        c.F("pu", "" + Fi(d) + a)
    }
    function cy(a, b, c) {
        var d = Sf(a, b);
        if (d) {
            d.ba.D(["gpu-get"], function() {
                var g = {};
                return g.type = "gpu-get",
                g.pu = c.C("pu"),
                g
            });
            var e = I(a, "opener");
            if (e) {
                var f = W(a, D([a, b, c], by), 200, "pu.m");
                b = {};
                d.jf(e, (b.type = "gpu-get",
                b), function(g, h) {
                    var k = I(h, "pu");
                    k && (Kd(a, f),
                    c.F("pu", k))
                })
            } else
                by(a, b, c)
        }
    }
    function dy(a, b, c) {
        if (I(a, "navigator.onLine") && (b = a.RTCPeerConnection || a.mozRTCPeerConnection || a.webkitRTCPeerConnection) && I(b, "prototype.constructor.name")) {
            var d = {}
              , e = new b((d.iceServers = [],
            d));
            b = I(e, "createDataChannel");
            y(b) && (b.call(e, "y.metrika"),
            b = I(e, "createOffer"),
            y(b) && !b.length && (b = b.call(e),
            d = I(b, "then"),
            y(d) && d.call(b, R(a, "pp.d", function(f) {
                var g = I(e, "setLocalDescription");
                y(g) && g.call(e, f, w, w)
            })),
            b = {},
            O(e, (b.onicecandidate = R(a, "pp.oic", function() {
                var f, g = I(e, "close");
                if (y(g)) {
                    try {
                        var h = (f = I(e, "localDescription.sdp")) && f.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                    } catch (k) {
                        e.onicecandidate = w;
                        "closed" !== e.iceConnectionState && g.call(e);
                        return
                    }
                    h && 0 < h.length && c.F("pp", Fi(h[1]));
                    e.onicecandidate = w;
                    g.call(e)
                }
            }),
            b))))
        }
    }
    var ey = N(ib("settings.pcs"), La("1"));
    function fy(a, b, c, d) {
        return Li(b, function(e) {
            if (!ey(e) && !$b(a))
                if (e = d.C("zzlc"),
                A(e) || Oa(e) || "na" === e) {
                    var f = Ue(a);
                    if (f && (e = $e(a))) {
                        var g = f("iframe");
                        O(g.style, {
                            display: "none",
                            width: "1px",
                            height: "1px",
                            visibility: "hidden"
                        });
                        f = 68 <= xb(a);
                        var h = xc(a);
                        g.src = "https://mc.yandex." + (f || h ? "md" : "ru") + Tk("L21ldHJpa2EvenpsYy5odG1s");
                        e.appendChild(g);
                        var k = 0
                          , l = Qd(a).D(a, ["message"], R(a, "zz.m", function(m) {
                            (m = I(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (Ve(g),
                            m = m.substr(8),
                            d.F("zzlc", m),
                            c.F("zzlc", m),
                            l(),
                            Kd(a, k))
                        }));
                        k = W(a, N(l, F(g, Ve)), 3E3, "c.d.z")
                    }
                } else
                    c.F("zzlc", e)
        })
    }
    function gy(a, b, c, d) {
        b = d.C("cc");
        d = D(["cc", ""], d.F);
        if (b) {
            var e = r(b.split("&"));
            b = e.next().value;
            (e = (e = e.next().value) && fb(e)) && 1440 < Be(a)(Mt) - e ? d() : c.F("cc", b)
        } else
            La(0)(b) || d()
    }
    var hy = K(function(a, b) {
        var c = Q(a)
          , d = Le(a)
          , e = []
          , f = D([a, b, c, d], Kv);
        fc(a) || Iv(a) || e.push(D([dy, "pp", ""], f));
        var g = !Jv(a) || 68 <= xb(a);
        g && e.push(D([cy, "pu", ""], f));
        !g || d.Ge || vc(a) || (e.push(D([fy, "zzlc", "na"], f)),
        e.push(D([gy, "cc", ""], f)));
        return e.length ? {
            Aa: function(h, k) {
                if (0 === c.C("isEU"))
                    try {
                        M(Pc, e)
                    } catch (l) {}
                k()
            },
            V: function(h, k) {
                var l = h.M;
                if (l && 0 === c.C("isEU"))
                    try {
                        M(Na(l), e)
                    } catch (m) {}
                k()
            }
        } : {}
    }, N(qb, V));
    function iy(a) {
        return {
            V: function(b, c) {
                var d = b.M
                  , e = Le(a).C("fip");
                e && d && (d.F("fip", e),
                Gh(b, "fip", zd(e)));
                c()
            }
        }
    }
    function jy(a) {
        var b = I(a, "ApplePaySession")
          , c = Ud(a).protocol;
        a = b && "https:" === c && !oc(a) ? b : void 0;
        b = "";
        if (!a)
            return b;
        try {
            b = "" + a.canMakePayments();
            c = "";
            var d = a.supportsVersion;
            if (y(d))
                for (var e = 1; 20 >= e; e += 1)
                    c += d.call(a, e) ? "" + e : "0";
            return c + b
        } catch (f) {
            return b
        }
    }
    function ky(a, b, c) {
        c = void 0 === c ? ":" : c;
        M(function(d) {
            var e = r(d);
            d = e.next().value;
            e = e.next().value;
            return a.push("" + d + c + e)
        }, sd(b))
    }
    function ly(a, b) {
        var c = b.yh;
        if (!Tx(a, c))
            return "";
        var d = [];
        a: {
            var e = Vx(a, c);
            try {
                var f = D(e, N)()();
                break a
            } catch (z) {
                if ("ccf" === I(z, "message")) {
                    f = null;
                    break a
                }
                Fc(z)
            }
            f = void 0
        }
        if (Oa(f))
            var g = "";
        else
            try {
                g = f.toDataURL()
            } catch (z) {
                g = ""
            }
        g && d.push(g);
        var h = c.getContextAttributes();
        try {
            var k = ya(c.getSupportedExtensions, "getSupportedExtensions") ? c.getSupportedExtensions() || [] : []
        } catch (z) {
            k = []
        }
        k = P(";", k);
        g = Rx(c.getParameter(c.ALIASED_LINE_WIDTH_RANGE), c);
        f = Rx(c.getParameter(c.ALIASED_POINT_SIZE_RANGE), c);
        e = c.getParameter(c.ALPHA_BITS);
        h = h && h.antialias ? "yes" : "no";
        var l = c.getParameter(c.BLUE_BITS)
          , m = c.getParameter(c.DEPTH_BITS)
          , p = c.getParameter(c.GREEN_BITS)
          , q = c.getExtension("EXT_texture_filter_anisotropic") || c.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || c.getExtension("MOZ_EXT_texture_filter_anisotropic");
        if (q) {
            var v = c.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            0 === v && (v = 2)
        }
        v = {
            Sj: k,
            "webgl aliased line width range": g,
            "webgl aliased point size range": f,
            "webgl alpha bits": e,
            "webgl antialiasing": h,
            "webgl blue bits": l,
            "webgl depth bits": m,
            "webgl green bits": p,
            "webgl max anisotropy": q ? v : null,
            "webgl max combined texture image units": c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
            "webgl max cube map texture size": c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),
            "webgl max fragment uniform vectors": c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),
            "webgl max render buffer size": c.getParameter(c.MAX_RENDERBUFFER_SIZE),
            "webgl max texture image units": c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),
            "webgl max texture size": c.getParameter(c.MAX_TEXTURE_SIZE),
            "webgl max varying vectors": c.getParameter(c.MAX_VARYING_VECTORS),
            "webgl max vertex attribs": c.getParameter(c.MAX_VERTEX_ATTRIBS),
            "webgl max vertex texture image units": c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            "webgl max vertex uniform vectors": c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),
            "webgl max viewport dims": Rx(c.getParameter(c.MAX_VIEWPORT_DIMS), c),
            "webgl red bits": c.getParameter(c.RED_BITS),
            "webgl renderer": c.getParameter(c.RENDERER),
            "webgl shading language version": c.getParameter(c.SHADING_LANGUAGE_VERSION),
            "webgl stencil bits": c.getParameter(c.STENCIL_BITS),
            "webgl vendor": c.getParameter(c.VENDOR),
            "webgl version": c.getParameter(c.VERSION)
        };
        ky(d, v, ": ");
        a: {
            try {
                var t = c.getExtension("WEBGL_debug_renderer_info");
                if (t) {
                    var u = {
                        "webgl unmasked vendor": c.getParameter(t.UNMASKED_VENDOR_WEBGL),
                        "webgl unmasked renderer": c.getParameter(t.UNMASKED_RENDERER_WEBGL)
                    };
                    break a
                }
            } catch (z) {}
            u = {}
        }
        ky(d, u);
        if (!c.getShaderPrecisionFormat)
            return P("~", d);
        ky(d, Wx(c));
        return P("~", d)
    }
    var my = function(a) {
        return function(b) {
            var c = Ue(b);
            if (!c)
                return "";
            c = c("canvas");
            var d = []
              , e = a()
              , f = e.Wh;
            e = e.Mh;
            try {
                var g = Wa("getContext", c);
                d = M(N(J, g), e)
            } catch (h) {
                return ""
            }
            return (g = Pe(J, d)) ? f(b, {
                canvas: c,
                yh: g
            }) : ""
        }
    }(function() {
        return {
            Mh: Qx,
            Wh: ly
        }
    });
    function ny(a) {
        if (a = Sv(a))
            try {
                for (var b = [], c = 0; c < Rv.length; c += 1) {
                    var d = a(Rv[c]);
                    b.push(d)
                }
                var e = b
            } catch (f) {
                e = []
            }
        else
            e = [];
        return e ? P("x", e) : ""
    }
    function oy(a, b, c) {
        return P("x", M(N(J, Wa("concat", "" + a), F(c, I)), b))
    }
    function py(a) {
        return (a = Yx(a)) ? P("x", M(D(["", ["matches", "media"]], oy), Ed(wd(a)))) : ""
    }
    var qy = N(function(a) {
        return (a = I(a, "navigator.plugins")) && jb(a) ? N(Wb, Ed, vj(function(b, c) {
            return b.name > c.name ? 1 : 2
        }), Hb(dw))(a) : ""
    }, Pb(","))
      , ry = ["name", "lang", "localService", "voiceURI", "default"];
    function sy(a) {
        var b = I(a, "speechSynthesis.getVoices");
        if (b)
            return a = C(b, a.speechSynthesis),
            Gb(function(c) {
                return M(F(c, I), ry)
            }, a())
    }
    function ty(a) {
        return P("x", sy(a) || [])
    }
    function uy(a) {
        a = ay(a);
        return L(a) ? P("x", a) : a
    }
    var vy = K(function(a) {
        var b = Q(a)
          , c = b.C("isEU");
        if (A(c)) {
            var d = fb(ne(a, "is_gdpr") || "");
            if (U(d, [0, 1]))
                b.F("isEU", d),
                c = !!d;
            else if (a = Le(a).C("wasSynced"),
            a = I(a, "params.eu"))
                b.F("isEU", a),
                c = !!a
        }
        return c
    }, function(a) {
        return Q(a).C("isEU")
    })
      , wy = S("i.e", vy)
      , xy = S("i.ep", function(a) {
        vy(a)
    });
    function yy(a, b, c, d, e) {
        if (!Bg(a))
            return w;
        var f = [], g = [], h = Qd(a), k;
        zf(a, "doe")(uf(w, function() {
            var l = Cg(b, a.document.body);
            e && (l = Dd(e, l));
            M(function(p) {
                f.push(p);
                g.push(h.D(p, c, d))
            }, l);
            if (xa("MutationObserver", a.MutationObserver)) {
                var m = b.toUpperCase();
                l = new a.MutationObserver(R(a, "de.m", function(p) {
                    M(function(q) {
                        var v = q.addedNodes;
                        q = q.removedNodes;
                        v && v.length && M(function(t) {
                            Qk(a, t, function(u) {
                                u.nodeName !== m || e && !e(u) || Pe(La(u), f) || (f.push(u),
                                g.push(h.D(u, c, d)))
                            }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                        }, v);
                        q && q.length && M(function(t) {
                            Qk(a, t, function(u) {
                                u.nodeName !== m || e && !e(u) || (u = Xb(a)(u, f),
                                -1 !== u && (g[u](),
                                g.splice(u, 1),
                                f.splice(u, 1)))
                            }, void 0, a.NodeFilter.SHOW_ELEMENT, !0)
                        }, q)
                    }, p)
                }));
                l.observe(a.document.body, {
                    childList: !0,
                    subtree: !0
                });
                k = C(l.disconnect, l)
            }
        }));
        return function() {
            k && k();
            M(Oc, g);
            Zb(g);
            Zb(f)
        }
    }
    var zy = Ao + "/tag_phono.js"
      , Ay = Sd("appl", function(a) {
        return new T(function(b, c) {
            Ul(a, zy, b, c, {
                crossOrigin: !0
            })
        }
        )
    }, !0);
    function By(a, b, c) {
        var d = c.Ob
          , e = fe(c.tc);
        if (e && !(100 <= jb(e))) {
            var f = "tel" === I(d, "type")
              , g = 0 < Ba(e, "@") && !f
              , h = ie(e);
            h = jb(h);
            if (g || !g && (f || h))
                if (b = 1 === b ? Qb(a).C("app") : Pu,
                a = g ? Nu(e) : b(a, e))
                    return {
                        Ob: d,
                        Gi: g,
                        tc: a,
                        isTrusted: I(c, "isTrusted"),
                        Ie: c.Ie
                    }
        }
    }
    function Cy(a, b, c, d, e, f) {
        var g = b.Gi
          , h = b.tc
          , k = b.isTrusted
          , l = b.Ie;
        b = b.Ob.readOnly;
        var m = {}
          , p = {};
        c = (p.fi = Fh((m.a = g ? 1 : 0,
        m.b = c,
        m.c = f || 0,
        m.d = b ? 1 : null,
        m.e = l ? 1 : null,
        m)).oa(),
        p.fit = d,
        p);
        B(k) || (c.ite = zd(k));
        e && (g ? (e = r(h.split("@")),
        g = e.next().value,
        h = e.next().value.split("."),
        e = h[h.length - 1],
        h = P(".", h.slice(0, -1)),
        d = jb(g),
        k = jb(h),
        g = 3 >= d ? "***" : 4 === d ? g[0] + "***" : g[0] + sj("*", d - 2) + g[d - 1],
        2 >= k ? h = sj("*", k) : 3 === k ? h = h[0] + "**" : (k = Math.floor(k / 2) + k % 2,
        h = "" + h[0] + sj("*", k) + h.slice(k + 1)),
        e = "e:" + (g + "@" + h + "." + e)) : (e = ie(h),
        g = e.slice(-4),
        e = "p:" + tj("*", jb(e), g)),
        c.mfpd = e);
        e = {};
        a.params((e.__ym = c,
        e))
    }
    var Dy = S("ice", function(a, b, c, d, e) {
        if (b = qg(a, b))
            if (e = By(a, d, e))
                return a = Si(a, e.Ob),
                Cy(b, e, a, d, !1),
                !0
    })
      , Ey = S("ice", function(a, b, c, d, e) {
        if (b = qg(a, b))
            if (e = By(a, d, e)) {
                var f = Si(a, e.Ob);
                Ru(a, e.tc).then(D([b, e, f, d, c], Cy), R(a, "ice.s"));
                return !0
            }
    });
    function Fy(a, b, c, d, e) {
        var f = e.target;
        a = nb(a)(f, c);
        f = -1 !== a;
        if (b || f)
            f && c.splice(a, 1),
            d(e)
    }
    function Gy(a, b, c, d, e) {
        var f = I(e, "target");
        e = I(e, "isTrusted") || !1;
        f && (f = Di("button,input", a, f)) && "submit" === f.type && (f = Iu(a, f)) && (d = d(f),
        b.push(f),
        W(a, D([a, !1, b, c, {
            target: f,
            isTrusted: e,
            formData: d
        }], Fy), 300, "i.c.l"))
    }
    function Hy(a, b) {
        var c = Iy
          , d = []
          , e = [];
        d.push(yy(a, "form", ["submit"], R(a, "ltfs.s", function(f) {
            var g = I(f, "target");
            g && Fy(a, !0, e, b, {
                target: g,
                isTrusted: I(f, "isTrusted") || !1,
                formData: c(g)
            })
        })));
        d.push(yy(a, "button", ["click"], R(a, "ltfs.bc", D([a, e, b, c], Gy))));
        d.push(yy(a, "input", ["click"], R(a, "ltfs.ic", D([a, e, b, c], Gy)), function(f) {
            return "submit" === f.type
        }));
        return D([Pc, d], M)
    }
    var Jy = ["text", "email", "tel"]
      , Ky = ["cc-", "name", "shipping"];
    function Iy(a) {
        a = Cg("input", a);
        return M(function(b) {
            return [b, b.value]
        }, a)
    }
    var Ly = S("icei", function(a, b) {
        if (Qu(a)) {
            var c = !1
              , d = w
              , e = w;
            Li(b, function(f) {
                if (!(wy(a) || I(f, "settings.eu") || c)) {
                    var g = !!I(f, "settings.mcf");
                    (I(f, "settings.cf") ? xf(Ay(a).then(F(D([a, b, g, 1], Ey), J), F(D([a, b, g, 2], Ey), J))) : yf(D([a, b, g, 0], Dy)))(uf(R(a, "ice.tt"), R(a, "ice.tc", function(h) {
                        if (!c) {
                            var k = function(l) {
                                return jj(a, l) || !U(l.type, Jy) || Tb(Ad, M(F(l.autocomplete, Ha), Ky)) ? !1 : !0
                            };
                            d = yy(a, "input", ["blur"], function(l) {
                                (l = I(l, "target")) && h({
                                    Ob: l,
                                    tc: I(l, "value") || ""
                                })
                            }, k);
                            e = Hy(a, function(l) {
                                var m = l.isTrusted
                                  , p = 0;
                                M(function(q) {
                                    var v = r(q);
                                    q = v.next().value;
                                    v = v.next().value;
                                    20 <= p || !k(q) || h({
                                        Ob: q,
                                        tc: v,
                                        isTrusted: m,
                                        Ie: !0
                                    }) && (p += 1)
                                }, l.formData)
                            })
                        }
                    })))
                }
            })["catch"](R(a, "ice.t"));
            return function() {
                c = !0;
                d();
                e()
            }
        }
    }), My;
    function Ny(a, b, c) {
        var d = I(a, "AppMetricaInitializer")
          , e = I(d, "init");
        if (e)
            try {
                C(e, d)(Ee(a, b))
            } catch (f) {}
        else
            My = W(a, D([a, b, 2 * c], Ny), c, "ai.d");
        return function() {
            return Kd(a, My)
        }
    }
    var Oy = S("p.ai", function(a, b) {
        if (fc(a) || hg(a))
            return Li(b, function(c) {
                if (c = I(c, "settings.sbp")) {
                    var d = {};
                    return Ny(a, O({}, c, (d.c = b.id,
                    d)), 10)
                }
            })
    })
      , Py = Kc.split(".")
      , Qy = Py.pop()
      , Ry = P(".", Py)
      , Sy = /^([^.]+\.)?(boost|appmetrica|metrika|metrica|direct|ads)\.yandex\.([a-z.]+)$/
      , Ty = K(nd);
    function Uy(a) {
        a = nc(a);
        return Mw[a] || "ru"
    }
    function Vy(a) {
        a = Do(a);
        return Jw[a] || a
    }
    var Wy = K(function() {
        var a = G(function(b, c) {
            "ru" !== c && (b[c] = Ry + "." + c);
            return b
        }, {}, Kt);
        M(function(b) {
            a[b] = b
        }, td(Kw));
        return a
    })
      , Xy = K(function(a) {
        a = Ud(a).hostname;
        return (a = Pe(N(ib("1"), Za("test"), Ka(Oc)(a)), sd(Kw))) && a[0]
    });
    function Yy(a, b) {
        var c = Uy(a)
          , d = [Xy(a) || Vy(a)];
        Eo(a) && d.push(c);
        var e = Be(a);
        c = Le(a);
        var f = c.C("synced", {});
        d = Dd(function(g) {
            if (b[g]) {
                var h = (f[g] || 1) + 1440 < e(Mt);
                h && delete f[g];
                return h
            }
        }, d);
        c.F("synced", f);
        return M(function(g) {
            return {
                oj: b[g],
                Li: g
            }
        }, d)
    }
    var Zy = function(a, b) {
        return function(c, d) {
            if (vc(c) || wb(c))
                return {};
            var e = V(d);
            e = Wy(e);
            var f = Yy(c, e)
              , g = Q(c)
              , h = oc(c)
              , k = Eo(c);
            return {
                V: function(l, m) {
                    var p = l.M;
                    p = !(p && p.C("pv"));
                    if (!k || h || p || !f.length)
                        return m();
                    if (g.C("startSync"))
                        Ty(c).push(m);
                    else {
                        g.F("startSync", !0);
                        p = D([c, d, f, w, !1], a);
                        var q = r(bg).next().value;
                        if (!q)
                            return m();
                        q(c).then(p).then(m, N(Ma(m), R(c, b)))["catch"](w)
                    }
                }
            }
        }
    }(function(a, b, c, d, e) {
        var f = Be(a)
          , g = Q(a)
          , h = Le(a);
        d = jh(a, b, "c");
        var k = Rg(a, d)
          , l = xj();
        Ix(l);
        return G(function(m, p) {
            function q() {
                var u = h.C("synced");
                g.F("startSync", !1);
                u && (u[p.Li] = v,
                h.F("synced", u));
                u = Ty(a);
                M(Oc, u);
                Zb(u)
            }
            var v, t = {};
            t = k({
                N: {
                    fa: ["sync.cook"],
                    jb: 1500
                },
                K: (t.scid = l,
                t.cid = "" + b.id,
                t)
            }, ["https://" + p.oj + "/sync_cookie_image_check" + (e ? "_secondary" : "")]).then(function() {
                v = f(Mt);
                q()
            })["catch"](function() {
                v = f(Mt) - 1435;
                q()
            });
            t = F(t, J);
            return m.then(t)
        }, T.resolve(), c)["catch"](R(a, "ctl"))
    }, "sy.c")
      , $y = {}
      , az = ($y.brands = "chu",
    $y.architecture = "cha",
    $y.bitness = "chb",
    $y.uaFullVersion = "chf",
    $y.fullVersionList = "chl",
    $y.mobile = "chm",
    $y.model = "cho",
    $y.platform = "chp",
    $y.platformVersion = "chv",
    $y);
    function bz(a) {
        return x(a) ? a : L(a) ? P(",", M(function(b) {
            return '"' + b.brand + '";v="' + b.version + '"'
        }, a)) : B(a) ? "" : a ? "?1" : "?0"
    }
    function cz(a) {
        return "che\n" + a
    }
    function dz(a) {
        var b = G(function(c, d) {
            var e = r(d)
              , f = e.next().value;
            e = e.next().value;
            (f = bz(a[f])) && c.push("" + e + "\n" + f);
            return c
        }, [], sd(az));
        return P("\n", b)
    }
    var ez = K(function(a) {
        return dg(a).then(dz, cz)
    });
    function fz(a) {
        return {
            V: function(b, c) {
                ez(a).then(function(d) {
                    b.K || (b.K = {});
                    b.K.uah = d;
                    c()
                }, c)
            }
        }
    }
    function gz(a, b) {
        b = void 0 === b ? !0 : b;
        var c = Dg("canvas", a.document);
        if (c && (c = ef(c))) {
            var d = r(af(a) || bf(a))
              , e = d.next().value;
            d = d.next().value;
            if (.3 <= tf(a, c, {
                h: d,
                w: e
            }) / (d * e)) {
                Q(a).F("hc", 1);
                return
            }
        }
        b && W(a, D([a, !1], gz), 3E3, "h.c")
    }
    function hz(a, b) {
        if ("https://oauth.yandex.ru" === I(b, "origin") && I(b, "source.window") && "_ym_uid_request" === I(b.data, "_ym")) {
            var c = b.source
              , d = {};
            d = (d._ym_uid = a,
            d);
            c.postMessage(d, "https://oauth.yandex.ru")
        }
    }
    var iz = Sd("ot", function(a, b) {
        if (yc(a)) {
            var c = Qd(a);
            return Li(b, R(a, "ot.s", function(d) {
                if (I(d, "settings.oauth")) {
                    var e = []
                      , f = Uf(a, b);
                    e.push(c.D(a, ["message"], R(a, "ot.m", F(f, hz))));
                    zf(a, "ot")(uf(w, R(a, "ot.b", function() {
                        function g(p) {
                            var q = p.href;
                            if (q && Nl(q, "https://oauth.yandex.ru/") && !Ha(q, "_ym_uid=")) {
                                q = Ha(q, "?") ? "&" : "?";
                                var v = {};
                                p.href += "" + q + ce((v._ym_uid = f,
                                v.mc = "v",
                                v));
                                c.D(p, ["click"], R(a, "ot.click", function() {
                                    var t = "et=" + k(ye);
                                    p.href += "&" + t
                                }))
                            }
                        }
                        var h = a.document.body
                          , k = Be(a)
                          , l = Cg("a", h);
                        M(g, l);
                        if (xa("MutationObserver", a.MutationObserver)) {
                            l = new a.MutationObserver(R(a, "ot.m", F(function(p) {
                                p = p.addedNodes;
                                for (var q = 0; q < p.length; q += 1) {
                                    var v = p[q];
                                    "A" === v.nodeName && g(v)
                                }
                            }, M)));
                            var m = {};
                            m = (m.childList = !0,
                            m.subtree = !0,
                            m);
                            l.observe(h, m);
                            e.push(C(l.disconnect, l))
                        }
                    })));
                    return D([Pc, e], M)
                }
            }))
        }
    });
    function jz(a, b) {
        var c = Q(a).C("wv2Counter");
        if (!c || !b)
            return null;
        c = c.split(":")[0];
        var d = b.split("/")[1];
        return c && c === d ? "1" : null
    }
    function kz(a, b) {
        return new T(function(c) {
            return W(a, c, b, "ebw.psd")
        }
        )
    }
    function lz(a, b, c) {
        var d = void 0 === d ? 1E3 : d;
        var e = void 0 === e ? 5 : e;
        var f = void 0 === f ? 9 : f;
        if (0 === b)
            return T.resolve();
        b = a.Math.min(f, c);
        c = b - 1;
        return kz(a, Ce(a, c < e ? 0 : a.Math.pow(2, c), a.Math.pow(2, b)) * d)
    }
    function mz(a, b) {
        var c = I(b, "name");
        c && Rc(a, "so.csp.e", "" + c)
    }
    var nz = K(function(a, b, c) {
        var d = a.document;
        if (!d)
            return w;
        var e = K(Qd(a).D(d, ["securitypolicyviolation"], function(f) {
            "enforce" === I(f, "disposition") && Ha("" + I(f, "blockedURI"), b) && (f = I(f, "effectiveDirective"),
            "connect-src" === f || "default-src" === f) && (Rc(c, "so.csp.v", f),
            e())
        }));
        return e
    })
      , oz = K(function(a, b, c) {
        if (Ww(a, "cspfp")) {
            var d = w
              , e = 0
              , f = K(function(g) {
                Rc(c, "so.csp.f", g);
                d();
                Kd(a, e);
                Xw("cspfp")
            }, w);
            d = Qd(a).D(a, ["message"], function(g) {
                var h = I(g, "data");
                if (x(h)) {
                    var k = r(h.split("*"));
                    h = k.next().value;
                    var l = k.next().value;
                    k = k.next().value;
                    "sc.frame" === h && g.source ? g.source.postMessage("sc.ws*" + b, "*") : "sc.wsr" === h && ("f.0" === l && k && mz(c, {
                        name: k
                    }),
                    f(l || "f.0"))
                }
            });
            e = W(a, function() {
                return f("f.3")
            }, 1500, "cspfp")
        } else
            Rc(c, "so.csp.f", "f.0")
    })
      , pz = K(function(a, b) {
        var c = b(ye);
        return K(function(d) {
            d && (d = b(ye) - c,
            Rc(a, "so.csp.t", 5 > d ? "t.b0" : 50 > d ? "t.b1" : 500 > d ? "t.b2" : "t.b3"))
        }, w)
    })
      , qz = "wss://" + Kc + "/solid.ws";
    function rz(a) {
        return new T(function(b, c) {
            function d() {
                h = W(a, function() {
                    if (1 === u.readyState) {
                        var z = {};
                        z = Ee(a, (z.resource = "ping",
                        z.timestamp = l(ye),
                        z));
                        u.send(z || new Uint8Array([10]));
                        d()
                    }
                }, 5E3, "so.sp")
            }
            function e() {
                p(!0);
                W(a, m, 100, "so.csp");
                oz(a, qz, "wserrs")
            }
            var f = Q(a).F;
            f("wss", 1);
            var g = {
                once: !0
            }
              , h = 0
              , k = 0
              , l = Be(a)
              , m = nz(a, qz, "wserrs")
              , p = pz("wserrs", l)
              , q = R(a, "so.ee", function() {
                f("wss", 0);
                u && u.close();
                .001 <= a.Math.random() || Rc("wserrs", "ws error", "so.ee");
                e()
            })
              , v = R(a, "so.oe", function() {
                f("wss", 2);
                b(u);
                Kd(a, k);
                d();
                p(!1);
                m()
            })
              , t = R(a, "so.ce", function(z) {
                f("wss", 0);
                Kd(a, h);
                u.removeEventListener("error", q, g);
                u.removeEventListener("open", v, g);
                u.removeEventListener("close", t, g);
                if (!(.001 <= a.Math.random())) {
                    var E = {};
                    Rc("wserrs", JSON.stringify((E.code = z.code,
                    E.wasClean = z.wasClean,
                    E)), "so.ce")
                }
            });
            try {
                var u = new a.WebSocket(qz);
                k = W(a, function() {
                    f("wss", 0);
                    c(Lc("so.t"));
                    u.close();
                    e()
                }, 2E4, "so.ot");
                u.addEventListener("open", v, g);
                u.addEventListener("error", q, g);
                u.addEventListener("close", t, g)
            } catch (z) {
                f("wss", 0),
                c(Lc("so.e")),
                mz("wserrs", z),
                e()
            }
            Rd(a) && Qd(a).D(a, ["pagehide"], function(z) {
                try {
                    z.persisted && (f("wss", 0),
                    u.close())
                } catch (E) {}
            }, null)
        }
        )
    }
    var sz = K(function() {
        return {
            type: 1,
            ja: -1,
            Ua: 5,
            wc: []
        }
    });
    function tz(a, b) {
        var c = sz()
          , d = c.ja;
        if (0 === c.type) {
            if (1 === c.Db.readyState)
                return T.resolve({
                    Lc: c.Lc,
                    Db: c.Db,
                    ja: d,
                    xg: !1
                });
            try {
                c.Db.close()
            } catch (e) {}
            O(c, {
                type: 1,
                Db: void 0,
                Lc: void 0,
                Sd: !1
            })
        }
        c.Sd || (c.ja += 1,
        c.Sd = !0,
        lz(a, c.ja, c.Ua).then(b).then(function(e) {
            function f() {
                c.ja += 1;
                c.Ua += 1;
                return lz(a, c.ja, c.Ua).then(F(a, rz)).then(g, f)
            }
            function g(h) {
                function k() {
                    0 === c.type && (c.Ua = a.Math.max(5, c.Ua - 1),
                    5 < c.Ua && W(a, k, 6E4, "so.cd"))
                }
                O(c, {
                    type: 0,
                    Db: h,
                    Lc: e,
                    Sd: !1
                });
                M(function(l, m) {
                    var p = l.resolve;
                    return p({
                        Lc: e,
                        Db: h,
                        ja: c.ja,
                        xg: !m && c.ja !== d
                    })
                }, c.wc);
                Zb(c.wc);
                c.Ua += 1;
                k()
            }
            rz(a).then(g, f)["catch"](function() {
                M(function(h) {
                    h = h.reject;
                    return h()
                }, c.wc);
                Zb(c.wc)
            })
        }));
        return new T(function(e, f) {
            c.wc.push({
                resolve: e,
                reject: f
            })
        }
        )
    }
    var uz = K(function(a) {
        return new RegExp("^" + a + ":([^:]+)|:" + a + ":([^:]+)")
    })
      , vz = [["wv-part", J], ["hidv2", J], ["browser-info", Ja(function(a, b) {
        return G(function(c, d) {
            var e = uz(d);
            (e = b.match(e)) && c.Cb(d, e[1] || e[2]);
            return c
        }, Og(), a).oa()
    })(["bt", "et", "st", "i", "w"])], ["t", J]];
    function wz(a) {
        return G(function(b, c) {
            var d = r(c)
              , e = d.next().value;
            d = d.next().value;
            var f = a[e];
            f && (d = d(f)) && (b[e] = d);
            return b
        }, {}, vz)
    }
    var xz = 1
      , yz = {};
    function zz(a) {
        var b;
        return function(c, d) {
            if (!d.ag)
                return T.reject(Lc("n.wst"));
            var e = xz;
            xz += 1;
            return tz(a, d.ag).then(function(f) {
                var g = f.Db
                  , h = f.Lc
                  , k = f.ja
                  , l = f.xg;
                l && g.addEventListener("message", function(m) {
                    if ((m = De(a, m.data)) && (m = m.ack) && yz[m]) {
                        var p = yz[m]
                          , q = p.resolve;
                        Kd(a, p.ya);
                        q(null);
                        delete yz[m]
                    }
                });
                return new T(function(m, p) {
                    var q = d.aa
                      , v = d.ta
                      , t = d.gb
                      , u = !b;
                    u && (b = {
                        query: t,
                        ja: k
                    });
                    if (!u && (l || k > b.ja)) {
                        var z = {};
                        g.send(Ee(a, (z.resource = v,
                        z.query = b.query,
                        z.wstoken = h,
                        z.reconnects = k,
                        z)));
                        b.ja += 1
                    }
                    t = !u && t ? wz(t) : t;
                    z = jz(a, v);
                    var E = {};
                    t = z ? O({}, t, (E.wva = z,
                    E)) : t;
                    z = {};
                    v = Ee(a, (z.reconnects = u ? k : void 0,
                    z.resource = v,
                    z.wstoken = u ? h : void 0,
                    z.query = t,
                    z.seq = e,
                    z));
                    q && (q = x(q) ? q : '"' + Uk(q) + '"',
                    v = v.substring(0, v.length - 1) + ',"body":' + q + "}");
                    g.send(v);
                    q = W(a, function() {
                        p(Lc("s.t.to"));
                        delete yz[e]
                    }, 1E4, "so.rt");
                    yz[e] = {
                        resolve: m,
                        ya: q
                    }
                }
                )
            })
        }
    }
    var Az = K(function() {
        var a = Ri();
        return G(function(b, c) {
            b[a[c]] = c;
            return b
        }, {}, td(a))
    })
      , Bz = /(\D\d*)/g;
    function Cz(a) {
        if (!a)
            return "";
        a = a.match(Bz);
        if (!a || 0 === a.length)
            return "";
        var b = Az();
        return "//HTML/BODY/" + G(function(c, d) {
            var e = d[0]
              , f = fb(d.slice(1));
            return "/" + b[e] + (f ? "[" + (f + 1) + "]" : "") + c
        }, "", a)
    }
    function Dz(a, b) {
        var c = Cz(b);
        return c ? I(a, "document.evaluate") ? a.document.evaluate(c, a.document, null, a.XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue : null : null
    }
    var Ez = K(md);
    function Fz(a) {
        return {
            aj: Re(a.element),
            je: a.je
        }
    }
    function Gz(a, b) {
        var c = a.document.body;
        if (c) {
            var d = b.price_patterns
              , e = Ez(b.id);
            if (e.$b) {
                if (!Mi(a, e.$b.element))
                    return Fz(e.$b);
                e.$b = void 0
            }
            d = G(function(h, k) {
                var l = r(k)
                  , m = l.next().value;
                l = l.next().value;
                h[m] = l;
                return h
            }, {}, d);
            var f = null
              , g = null;
            d.cs && Bg(a) && (f = Dg(d.cs, c),
            g = "c");
            d.p && !f && (f = Dz(a, d.p),
            g = "x");
            if (f && g)
                return e.$b = {
                    element: f,
                    je: g
                },
                Fz(e.$b)
        }
    }
    function Hz(a, b) {
        var c = a[b[0]];
        return !(!c || c !== b[1])
    }
    function Iz(a, b) {
        var c = b.patterns;
        if (0 === c.length)
            return !1;
        if (1 === c.length)
            return Hz(a, c[0]);
        c = G(function(f, g) {
            var h = r(g)
              , k = h.next().value;
            h = h.next().value;
            var l = a[k];
            if (l === h) {
                if (f.ie += 1,
                "i" === k || "c" === k)
                    f.fg = !0
            } else
                l && "p" === k && je(l) === je(h) && (f.hg = !0);
            return f
        }, {
            ie: 0,
            fg: !1,
            hg: !1
        }, c);
        var d = c.fg
          , e = c.hg;
        return 2 <= c.ie || d && e
    }
    function Jz(a, b) {
        var c = b.patterns;
        return 0 === c.length ? !1 : Tb(F(a, Hz), c)
    }
    function Kz(a, b, c, d) {
        c = M(function(e) {
            if (!d(b, e))
                return !1;
            var f = {};
            f = (f.rg = e.id,
            f);
            if (e = Gz(a, e))
                f.gp = gw(e.aj),
                f.mg = e.je;
            return f
        }, c);
        return Ed(c)
    }
    var Lz = Ka(Nl)("btn:")
      , Mz = Ka(Nl)("form:");
    function Nz(a) {
        var b = r(a)
          , c = b.next().value;
        b = b.next().value;
        return "bp" === c ? ["p", Vk(Tk(b))] : a
    }
    var Oz = Hb(function(a) {
        a.patterns = M(Nz, a.patterns);
        a.price_patterns = M(Nz, a.price_patterns);
        return a
    })
      , Pz = K(md, V);
    function Qz(a, b, c, d) {
        var e = Pz(c).dj;
        if (!e)
            throw Cc("im.no");
        Ul(a, Ao + "/" + b + ".js?ver=2652&b=", function() {
            var f = Q(a).C("ytmm");
            (f = I(f, b + ".init")) && f(e, d, "2652")
        })
    }
    var Rz = S("p.ips", function(a, b) {
        Li(b, function(c) {
            (I(c, "settings.phchange") || I(c, "settings.phhide")) && Qz(a, "tag_phone", b, c)
        })
    });
    function Sz(a, b) {
        return S("p.suid", function(c) {
            var d = c.r;
            c = c.u;
            var e = {};
            d = (e.fsr = x(d) ? d : null,
            e.fsu = x(c) ? c : null,
            e);
            c = {};
            d = (c.__ym = d,
            c);
            (c = qg(a, b)) && c.params && c.params(d)
        })
    }
    var Tz = S("p.suic", function(a, b) {
        return Li(b, function(c) {
            var d = Q(a)
              , e = d.C
              , f = d.F;
            e = e("pic");
            d = Sz(a, b);
            if (y(e))
                return e(d);
            if (c = I(c, "settings.pic")) {
                e = Af(a);
                var g = e.D
                  , h = e.X
                  , k = e.trigger;
                e = function(l) {
                    g(l);
                    return function() {
                        h(l)
                    }
                }
                ;
                f("pic", e);
                d = e(d);
                f("prs", 3);
                pi(a, "pic", b)({
                    N: {
                        Cf: !1,
                        fa: ["pic"]
                    }
                }, [c]).then(function(l) {
                    l = l.ib;
                    if (B(l))
                        f("prs", 5);
                    else if (Pa(l)) {
                        var m = l.h;
                        x(m) && m ? (re(a, "_ym_fa", m, 43200),
                        f("prs", 8),
                        k(l)) : f("prs", 7)
                    } else
                        f("prs", 6)
                }, D(["prs", 4], f));
                return d
            }
            f("prs", 2)
        })["catch"](R(a, "pic"))
    })
      , Uz = S("p.tv", function(a) {
        if (lw(a)) {
            var b = Q(a);
            mw(a).then(function(c) {
                b.F("lgguid", c)
            }, R(a, "p.tv.p"))
        }
    })
      , Vz = {}
      , Wz = K(md)
      , Xz = N(Wa("exec", /counterID=(\d+)/), ib("1"))
      , Yz = Ja(function(a, b) {
        var c = Wb(b)
          , d = r(c)
          , e = d.next().value;
        d = ka(d);
        var f = "" + e;
        var g = Xz(f);
        g ? f = {
            id: g,
            $: "0"
        } : -1 === Ba(f, ":") ? f = (f = fb(f)) ? {
            id: f,
            $: "0"
        } : void 0 : (g = r(f.split(":")),
        f = g.next().value,
        g = g.next().value,
        f = (f = fb(f)) ? {
            id: f,
            $: Yo(g) ? "1" : "0"
        } : void 0);
        g = a.Ya[Jc];
        if (f) {
            var h = r(c);
            h.next();
            d = h.next().value;
            h = ka(h);
            if (d) {
                var k = qg(a, f)
                  , l = V(f)
                  , m = Wz(a);
                m[l] || (m[l] = {});
                l = m[l];
                if (!b.ym_xqd) {
                    if (m = Vz[d])
                        for (var p = 0; p < m.length; p += 1)
                            if ((0,
                            m[p])(a, f, h, k))
                                return;
                    "init" === d ? (b.ym_xqd = !0,
                    k ? (c = {},
                    si(a, "" + e, "dc", (c.key = e,
                    c))) : a["yaCounter" + f.id] = new g(O({}, h[0], f))) : k && k[d] && l.Di ? (k[d].apply(k, la(h)),
                    b.ym_xqd = !0) : (e = l.Sg,
                    e || (e = [],
                    l.Sg = e),
                    e.push(c))
                }
            }
        } else
            c = Q(a).C("staticMethods", {})[e],
            y(c) && c.apply(null, la(d))
    })
      , Zz = "telefone phone phone_number customer_phone mobile_phone cell_phone contact_phone phone_contact primary_phone telephone user_mobile customer_contact_number mobile_number user_telephone phone_no contact_number subscriber_phone clientPhone tel".split(" ")
      , $z = "email_name user_email email email_address customer_email contact_email primary_email emailID user_emailID mail user_mail subscriber_email user_contact_email clientEmail".split(" ")
      , aA = ["visitorContactInfo"];
    function bA(a, b, c) {
        (a = Pu(a, b)) && c.push(["phone", a]);
        return a
    }
    function cA(a, b, c) {
        M(function(d) {
            x(d) && !bA(a, d, c) && (d = Nu(d)) && c.push(["email", d])
        }, b)
    }
    function dA(a, b, c, d) {
        c = void 0 === c ? [] : c;
        d = void 0 === d ? 1 : d;
        if (!(3 < d) && Pa(b))
            return b = sd(b),
            M(function(e) {
                var f = r(e);
                e = f.next().value;
                f = f.next().value;
                x(f) ? U(e, Zz) ? bA(a, f, c) : U(e, $z) && (e = c,
                (f = Nu(f)) && e.push(["email", f])) : L(f) && U(e, aA) ? cA(a, f, c) : Pa(f) && dA(a, f, c, d + 1)
            }, b),
            c
    }
    function eA(a, b, c) {
        b && Pa(c) && (c = dA(a, c) || [],
        M(function(d) {
            d = r(d);
            var e = d.next().value;
            d = d.next().value;
            return Ru(a, d).then(function(f) {
                var g = {}
                  , h = {}
                  , k = {};
                return b((k.__ym = (h.fpdlh = Fh((g.a = "email" === e ? 1 : 0,
                g.c = f || 0,
                g)).oa(),
                h),
                k))
            })
        }, c))
    }
    var fA = S("fpdlc", function(a, b) {
        var c = qg(a, b);
        if (c && Qu(a))
            return Li(b, function(d) {
                if (I(d, "settings.cf")) {
                    var e = c.params, f;
                    d = [Cl(a, "dataLayer", function(g) {
                        f = g;
                        g.sa.D(D([a, e], eA))
                    }), function() {
                        f && f.unsubscribe()
                    }
                    ];
                    return D([Pc, d], M)
                }
            })
    })
      , gA = S("ymc.g", function(a, b) {
        var c = {};
        return c.getYmclid = function(d) {
            d && Li(b, function(e) {
                el(a, d, null, I(e, "settings.ymclid"))
            })
        }
        ,
        c
    })
      , hA = Ao + "-tags/_/tag_ec.js"
      , iA = Ao + "-tags/_/tag_ec_test.js"
      , jA = S("ecl.h", function(a, b) {
        return Li(b, function(c) {
            var d = I(c, "settings.zero_code")
              , e = De(a, d);
            if (Pa(e) && (H(e, "ec") || H(e, "ect"))) {
                c = Q(a);
                var f = c.C("ecrs", [])
                  , g = {};
                f.push((g.counterKey = V(b),
                g.settings = d,
                g));
                c.F("ecrs", f);
                d = e.em;
                B(d) || (f = c.C("ecmv", {}),
                g = V(b),
                f[g] = d,
                c.F("ecmv", f));
                d = !!e.ec;
                e = !!e.ect;
                !c.C("ecl") && d && (c.F("ecl", !0),
                rg(a, {
                    src: hA
                }));
                !c.C("ectl") && e && (c.F("ectl", !0),
                rg(a, {
                    src: iA
                }))
            }
        })["catch"](R(a, "ecl.hs"))
    })
      , kA = S("rsa.i", function(a, b) {
        if (!Ko(a))
            return Li(b, function(c) {
                var d = I(c, "settings.rspi");
                I(c, "settings.rse") && d && (Ul(a, "https://yandex.ru/ads/system/context.js", w, R(a, "rsa.cl")),
                c = {},
                d = (c.pageId = d,
                c),
                Ul(a, "https://yandex.ru/ads/system/ap-loader.js", w, R(a, "rsa.apl"), {
                    Kf: d
                }))
            })["catch"](R(a, "rsa.hs"))
    })
      , lA = S("wm.p", function(a) {
        var b = Q(a)
          , c = {}
          , d = Af(a);
        b.F("wmg", {
            add: function(e, f, g, h, k) {
                k = void 0 === k ? !1 : k;
                if (!c[e]) {
                    var l = function(m) {
                        m.kh !== e && (m.gg ? f(m.Nf) : g())
                    };
                    c[e] = function() {
                        d.X(l)
                    }
                    ;
                    d.D(l);
                    k && d.trigger({
                        kh: e,
                        gg: k,
                        Nf: h
                    })
                }
            },
            remove: function(e) {
                var f = c[e];
                f && f();
                delete c[e]
            },
            update: function(e, f, g) {
                c[e] && d.trigger({
                    kh: e,
                    Nf: g,
                    gg: f
                })
            }
        })
    });
    function mA(a, b) {
        var c = w;
        uc(a) ? c = Qd(a).D(a, ["prerenderingchange"], b, !0) : b();
        return c
    }
    function nA(a, b, c) {
        var d = I(c, "scripts");
        if (!B(d) && 0 !== d.length) {
            var e = xk(3);
            M(function(f) {
                if (!(300 >= f.duration || .999 >= a.Math.random())) {
                    var g = f.sourceURL;
                    g && Ut(g) === ua.host && (g = {},
                    f = (g.d = e(f.duration),
                    g.st = e(f.startTime),
                    g.pd = e(f.pauseDuration),
                    g.scp = f.sourceCharPosition,
                    g.sfn = f.sourceFunctionName,
                    g.td = e(c.blockingDuration),
                    g.fut = e(c.firstUIEventTimestamp),
                    g.rs = e(c.renderStart),
                    g.sls = e(c.styleAndLayoutStart),
                    g.e = [],
                    g.f = [],
                    g),
                    b.push(f))
                }
            }, d)
        }
    }
    function oA(a, b, c) {
        b = c.flush();
        if (0 !== b.length) {
            var d = Uc.slice();
            M(function(e) {
                var f = e.st
                  , g = e.st + e.d
                  , h = new Ci;
                M(function(l) {
                    l.startTime < g && l.endTime > f && h.add(l.scope)
                }, d);
                if (0 !== h.size) {
                    var k = {};
                    O(e, (k.f = Vb(h),
                    k));
                    Rc("longtask", Ee(a, e) || "uns", "laf")
                }
            }, b)
        }
    }
    function pA(a, b, c, d) {
        "long-animation-frame" === d.entryType && nA(a, c, d)
    }
    var qA = S("lt", function(a) {
        var b = []
          , c = D([Oc, b], M);
        if (y(a.PerformanceObserver)) {
            var d = Tc()
              , e = Tc()
              , f = function(h) {
                Wi(a, D([a, h.getEntries(), D([a, d, e], pA), "lt.i", 50, D([a, d, e], oA)], Dj), "lt.r")
            }
              , g = mA(a, R(a, "lt.a", function() {
                var h = new a.PerformanceObserver(R(a, "lt.p", f));
                b.push(function() {
                    return h.disconnect()
                });
                try {
                    H(a, "PerformanceLongAnimationFrameTiming") && h.observe({
                        type: "long-animation-frame",
                        buffered: !0
                    }),
                    H(a, "PerformanceEventTiming") && h.observe({
                        type: "event",
                        buffered: !0,
                        Qj: 300
                    })
                } catch (k) {}
            }));
            b.push(g);
            return c
        }
    });
    function rA(a, b, c) {
        if ("complete" === I(a, "document.readyState"))
            b();
        else {
            var d = R(a, c + ".wfd.l", function() {
                Qd(a).lb(a, ["load"], d);
                b()
            });
            Qd(a).D(a, ["load"], d)
        }
    }
    function sA(a, b, c, d, e, f) {
        return function(g, h) {
            return Li(h, function(k) {
                var l = Q(g)
                  , m = l.C
                  , p = l.F
                  , q = ue(g, "");
                if (!m(c)) {
                    var v = I(k, "settings." + a);
                    if (v)
                        return p(c, 1),
                        p(b, 1),
                        rA(g, function() {
                            El(g, function() {
                                tx(g, v, !0, d, e).then(R(g, d + ".pt", function() {
                                    f && q.F("mdd", "1", 1440);
                                    p(b, 2)
                                }))["catch"](R(g, d + ".pc", function(t) {
                                    "7" === t || 6 === t ? p(b, 4) : (f && q.F("mdd", "0", 1440),
                                    p(b, 3))
                                }))
                            }, 1E3, d)
                        }, d);
                    p(b, 0)
                }
            })["catch"](R(g, d))
        }
    }
    var tA = S("p.cac", sA("mdd", "cac", "cacp", "cac", "cac.mdd", !0))
      , uA = S("p.cac.e", sA("mdde", "cae", "caep", "cac.e", "cac.mdde", !1))
      , vA = ["yandex_metrika_callback" + ua.callbackPostfix, "yandex_metrika_callbacks" + ua.callbackPostfix]
      , wA = S("cb.i", function(a) {
        var b = r(vA)
          , c = b.next().value
          , d = b.next().value;
        if (y(a[c]))
            a[c]();
        "object" === typeof a[d] && M(function(e, f) {
            a[d][f] = null;
            el(a, e)
        }, a[d]);
        M(function(e) {
            try {
                delete a[e]
            } catch (f) {
                a[e] = void 0
            }
        }, vA)
    })
      , xA = S("h.p", function(a, b) {
        var c = pi(a, "h", b)
          , d = b.Kb || "" + Ud(a).href
          , e = b.oe || a.document.referrer
          , f = {}
          , g = {};
        f = {
            M: Og((f.pv = 1,
            f)),
            K: (g["page-url"] = d,
            g["page-ref"] = e,
            g),
            T: {}
        };
        var h = Ki(V(b));
        g = h.sc;
        h = h.Ei;
        var k = {};
        f.Ja = Fh((k.clt = cb(a, h) && cb(a, g) ? g - h : null,
        k));
        f.T.Z = b.Z;
        f.T.zf = b.zf;
        b.bc && f.K && (f.K.nohit = "1");
        return c(f, b).then(function(l) {
            if (l) {
                if (!b.bc) {
                    var m = {};
                    ti(a, b, "h", (m.id = b.id,
                    m.url = d,
                    m.ref = e,
                    m), b.Z)()
                }
                Wi(a, D([a, b, l], Yt), "h.ss")
            }
        })["catch"](R(a, "h.g.s"))
    })
      , yA = S("destruct.e", function(a, b, c) {
        return function() {
            var d = Q(a)
              , e = b.id;
            M(function(f, g) {
                return y(f) && R(a, "dest.fr." + g, f)()
            }, c);
            delete d.C("counters")[V(b)];
            delete a["yaCounter" + e]
        }
    });
    function zA(a, b, c, d, e) {
        if (!c.length)
            return e;
        c = M(function(f) {
            return D([a, b, d], f)
        }, c);
        return N.apply(null, la(c))(e)
    }
    function AA(a, b, c, d) {
        return R(a, "cm." + c, d)
    }
    function BA(a, b, c, d) {
        return function() {
            var e = Sa(arguments);
            e = d.apply(null, la(e));
            return A(e) ? qg(a, b) : e
        }
    }
    var CA = Q(window);
    CA.va("hitParam", {});
    CA.va("lastReferrer", window.location.href);
    sg.push(S("p.ar", function(a, b) {
        var c = pi(a, "a", b)
          , d = {};
        return d.hit = function(e, f, g, h, k, l) {
            var m = {};
            m = {
                K: {},
                M: Og((m.pv = 1,
                m.ar = 1,
                m))
            };
            f = Pa(f) ? {
                title: f.title,
                referrer: f.referrer || f.referer,
                Z: f.params,
                Oc: f.callback,
                l: f.ctx
            } : {
                title: f,
                referrer: g,
                Z: h,
                Oc: k,
                l: l
            };
            h = gl(b);
            g = Ud(a).href;
            k = b.bc ? b.Kb || g : g;
            g = A(h.url) ? k : g;
            g = e || g;
            h.url !== g && (h.ref = h.url,
            h.url = e);
            e = b.bc ? b.oe || a.document.referrer : a.document.referrer;
            e = f.referrer || h.ref || e;
            h = {};
            h = ti(a, b, "pv", (h.id = b.id,
            h.url = g,
            h.ref = e,
            h), f.Z);
            k = O(m.T || {}, {
                Z: f.Z,
                title: f.title
            });
            l = {};
            m = c(O(m, {
                T: k,
                K: O(m.K || {}, (l["page-url"] = g,
                l["page-ref"] = e,
                l))
            }), b).then(h);
            return fl(a, "p.ar.s", m, f.Oc || w, f.l)
        }
        ,
        d
    }));
    oi.a = li;
    di.a = [[Wh, -100], [Ih, 1], [Th, 2], [Mh(), 3], [Nh, 4]];
    ih.a = fh;
    sg.push(function(a, b) {
        var c = {};
        return c.firstPartyParams = Uu(a, b),
        c.firstPartyParamsHashed = Wu(a, b),
        c
    });
    pg.push("fpp");
    pg.push("fpmh");
    (function() {
        var a = Q(window);
        a.va("getCounters", ml(window));
        Rt.push(nl);
        Ag["counters.c"] = "cntc";
        Ag["counters.s"] = "cnts";
        ug.push(function(b, c, d) {
            var e = a.C("getCounters");
            e && (c.counters = Dl(b, {}, "counters.c", e),
            d.counters = Dl(b, {}, "counters.s", e))
        })
    }
    )();
    oi["1"] = li;
    sg.push($u);
    ih["1"] = eh;
    bi(Yu, -1);
    X("h", Yu, -1);
    X("a", Yu, -1);
    di["1"] = [[Yu, -1], [Ih, 1], [Th, 2], [Mh(), 3], [Wh, 4]];
    sg.push(bv);
    sg.push(jl);
    oi.g = li;
    ih.g = eh;
    di.g = Zh;
    sg.push(cv);
    sg.push(S("cl.p", function(a, b) {
        function c(p, q, v, t) {
            t = void 0 === t ? {} : t;
            v ? ev(a, b, {
                url: v,
                Pb: !0,
                fd: p,
                ld: q,
                sender: d,
                jh: t
            }) : g.warn("clel")
        }
        var d = pi(a, "2", b)
          , e = []
          , f = V(b)
          , g = ri(a, f)
          , h = R(a, "s.s.tr", F(kl(a, f), dv));
        f = {
            l: a,
            Jh: b,
            Xh: e,
            sender: d,
            Vj: Q(a),
            Hh: Me(a, b.id),
            Xj: Hf(a),
            tj: F(F(f, ll(a)), N(Oc, ib("trackLinks")))
        };
        f = R(a, "cl.p.c", F(f, fv));
        f = Qd(a).D(a, ["click"], f);
        b.bh && h(b.bh);
        var k = R(a, "file.clc", D([!0, !1], c))
          , l = R(a, "e.l.l.clc", D([!1, !0], c));
        e = R(a, "add.f.e.clc", gv(e));
        var m = {};
        return m.file = k,
        m.extLink = l,
        m.addFileExtension = e,
        m.trackLinks = h,
        m.u = f,
        m
    }));
    di["2"] = Zh;
    oi["2"] = li;
    ih["2"] = eh;
    oi.r = ki("r");
    ih.r = ["f", "x", "j", "i"];
    tg.push(S("p.r", function(a, b) {
        var c = mv(a);
        c.Ch();
        return hv(a, b, c.ni())
    }));
    X("r", function(a, b) {
        var c = mv(a);
        return {
            V: function(d, e) {
                var f = void 0 === d.M ? Og() : d.M
                  , g = d.T.zc
                  , h = f.C("rqnl", 0) + 1;
                f.F("rqnl", h);
                g && c.xj(g, h);
                e()
            },
            Aa: function(d, e) {
                nv(a, d, b, c);
                e()
            }
        }
    }, 1);
    bi(ov, 100);
    X("h", ov, 100);
    X("a", ov, 100);
    X("1", ov, 100);
    X("n", ov, 100);
    X("m", ov, 100);
    sg.push(qv);
    X("n", Ih, 1);
    X("n", Th, 2);
    X("n", Mh(), 3);
    X("n", Wh, 3);
    oi.n = li;
    ih.n = eh;
    Gf({
        Ff: {
            ga: "accurateTrackBounce"
        }
    });
    sg.push(rv);
    sg.push(wv);
    sg.push(xv);
    pg.push("user_id");
    sg.push(zv);
    bi(yv, 0);
    X("h", yv, 0);
    X("a", yv, 0);
    ke.push("_ym_debug");
    St.unshift(Cv);
    var DA = {}
      , EA = (DA.tp = N(qb, th, yd),
    DA.tpid = N(qb, function(a) {
        a = V(a);
        return sh[a] && sh[a].sj || null
    }),
    DA);
    O(ag, EA);
    bi(Dv, 20);
    X("h", Dv, 20);
    X("a", Dv, 20);
    X("n", Dv, 20);
    X("1", Dv, 20);
    St.unshift(Fv);
    ag.fp = function(a, b, c) {
        if (c.K && c.K.nohit)
            return null;
        c = Q(a).C;
        if (!c("fpe"))
            return null;
        b = Ev(b);
        if (b.Zh)
            return null;
        c = c("fht", Infinity);
        a: {
            var d = I(a, "performance.getEntriesByType");
            if (y(d)) {
                if (a = Dd(N(J, ib("name"), La("first-contentful-paint")), d.call(a.performance, "paint")),
                a.length) {
                    a = a[0].startTime;
                    break a
                }
            } else {
                var e = I(a, "chrome.loadTimes");
                d = Yf(a);
                if (y(e) && (e = e.call(a.chrome),
                e = I(e, "firstPaintTime"),
                d && e)) {
                    a = 1E3 * e - d;
                    break a
                }
                if (a = I(a, "performance.timing.msFirstPaint")) {
                    a -= d;
                    break a
                }
            }
            a = void 0
        }
        return a && c > a ? (b.Zh = a,
        Math.round(a)) : null
    }
    ;
    (function() {
        var a = {
            bu: nw,
            pri: Dw
        };
        a.wv = F(2, J);
        a.ds = Aw;
        a.co = function(c) {
            return zd(Q(c).C("jn"))
        }
        ;
        a.td = Fw;
        var b = {};
        O(a, (b.iss = N(rc, yd),
        b.hdl = N(sc, yd),
        b.iia = N(tc, yd),
        b.cpf = N(ew, yd),
        b.ntf = K(function(c) {
            c = I(c, "Notification.permission");
            c = "denied" === c ? !1 : "granted" === c ? !0 : null;
            return Oa(c) ? null : c ? 2 : 1
        }),
        b.eu = fw("isEU"),
        b.ns = Yf,
        b.np = function(c) {
            return Ce(c, 0, 100) ? null : gw(fe(bc(c), 100))
        }
        ,
        b));
        a.pani = pw;
        a.pci = qw;
        a.si = rw;
        a.gi = sw;
        a.pic = function(c) {
            return ne(c, "_ym_fa")
        }
        ;
        a.mdd = function(c) {
            return ne(c, "mdd")
        }
        ;
        a.stlgg = fw("lgguid");
        a.sttdi = kw;
        a.stti = jw;
        a.sttifa = iw;
        a.bl = fw("bl");
        a.ntq = fw("ntq");
        O(ag, a)
    }
    )();
    (function() {
        var a = {};
        a.hc = fw("hc");
        a.oo = fw("oo");
        a.pmc = fw("cmc");
        a.re = N(Pt, yd);
        a.aw = function(b) {
            b = Pe(N(B, rb), [b.document.hidden, b.document.msHidden, b.document.webkitHidden]);
            return B(b) ? null : zd(!b)
        }
        ;
        a.rcm = Rw;
        a.yu = function(b) {
            return (b = ue(b, "").C("yandexuid")) && b.substring(0, 25)
        }
        ;
        a.ifc = fw("ifc");
        a.ifb = fw("ifb");
        a.ecs = fw("ecs");
        a.csu = fw("csu");
        a.csi = fw("scip");
        a.cdl = fw("cdl");
        a.eco = K(Sw, N(qb, V));
        a.pis = fw("pis");
        a.ucs = function(b) {
            return (b = ue(b).C("ucs")) && b.substring(0, 25)
        }
        ;
        a.oms = fw("oms");
        a.prs = fw("prs");
        a.cac = fw("cac");
        a.cae = fw("cae");
        a.wss = fw("wss");
        a.w2s = fw("w2s");
        a.evs = Gw;
        a.evt = function(b, c) {
            var d = Ki(V(c))
              , e = d.sc;
            d = d.Vh;
            return cb(b, d) && cb(b, e) ? d - e : null
        }
        ;
        a.evc = fw("ccd");
        a.evn = fw("nod");
        Kh.rfs = function(b, c) {
            return Nw(c.oe)
        }
        ;
        Kh.ufs = function(b, c) {
            return Nw(c.Kb)
        }
        ;
        O(Kh, a)
    }
    )();
    ih.er = Vt;
    (function() {
        var a = window;
        try {
            var b = jh(a, {
                id: 26302566,
                $: "0"
            }, "er")
              , c = Vo(a, b, 26302566);
            Qc.push(function(d, e, f, g) {
                if (!(.01 >= a.Math.random())) {
                    var h = {}
                      , k = {}
                      , l = {}
                      , m = {}
                      , p = {};
                    c((p[d] = (m["2652"] = (l[e] = (k[f] = g ? (h[a.location.href] = g,
                    h) : a.location.href,
                    k),
                    l),
                    m),
                    p))
                }
            })
        } catch (d) {}
    }
    )();
    Qt.push(function(a, b) {
        if (I(a, "disableYaCounter" + b.id) || I(a, "Ya.disableMetrica")) {
            var c = V(b);
            delete Q(a).C("counters", {})[c];
            Fc(Lc("oo.e"))
        }
    });
    ai.unshift(function(a) {
        return {
            V: function(b, c) {
                Q(a).C("oo") || c()
            }
        }
    });
    bi(Zw, -99);
    X("h", Zw, -99);
    X("a", Zw, -99);
    sg.push($w);
    di.e = Zh;
    oi.e = li;
    ih.e = eh;
    Gf({
        exp: {
            ga: "experiments"
        }
    });
    Ag.experiments = "ex";
    bg.push(ax);
    oi.f = li;
    var FA = {};
    O(ih, (FA.f = fh,
    FA));
    X("f", Mh(), 1);
    X("f", Nh, 2);
    X("f", Dv, 20);
    X("h", bx, -10);
    X("a", bx, -10);
    X("ev", rh, 3);
    X("wv2", rh, 3);
    X("1", rh, 19);
    X("n", rh, 19);
    X("4", rh, 2);
    X("m", rh, 2);
    bi(rh, 19);
    Qt.push(function(a, b) {
        var c = {
            Ca: V(b),
            Xd: qg(a, b),
            $g: Be(a),
            Ne: Le(a)
        }
          , d = c.$g(Mt);
        if (!c.Ne.Ge) {
            var e = c.Ne.C("ymoo" + c.Ca);
            e && 30 > d - e ? (c = c.Ca,
            delete Q(a).C("counters", {})[c],
            Fc(Lc("uws"))) : Li(b, cx(c))["catch"](R(a, "d.f"))
        }
    });
    ii("ev", function(a, b) {
        return {
            V: function(c, d) {
                kh(a, b, c, "rn", "events");
                d()
            }
        }
    }, 1);
    X("ev", Mh(mh), 1);
    X("ev", yj, 2);
    ih.ev = ["s"];
    oi.ev = dx;
    sg.push(rx);
    ih.pi = eh;
    oi.pi = li;
    X("pi", Mh());
    sg.push(S("isp.bl", vx("bl", function() {
        return P("=", ["https://fcpe.beeline.ru/sync/me?guid", wx()])
    }, ux)));
    sg.push(S("isp.mf", vx("mf", function(a, b, c, d) {
        b = Ud(a);
        b = $d(b.protocol + "//" + b.hostname + b.pathname);
        c = "";
        do
            c += Ce(a);
        while (c.length < d.length);
        c = c.slice(0, d.length);
        a = "";
        for (var e = 0; e < d.length; e += 1)
            a += (d.charCodeAt(e) + c.charCodeAt(e) - 96) % 10;
        d = r([c, a]);
        a = d.next().value;
        return "https://adstat.yandex.ru/track?service=metrika&id=" + d.next().value + "&mask=" + a + "&ref=" + b
    })));
    sg.push(S("isp.rt", vx("rt", function(a, b, c, d) {
        c = "" + Fi(d);
        var e = {};
        d = Og((e.rt = 1,
        e.u = d,
        e)).oa();
        e = {};
        a = ce((e["browser-info"] = d,
        e["page-url"] = Ud(a).href,
        e["page-ref"] = a.document.referrer,
        e["site-info"] = b,
        e));
        return "https://" + c + ".mc.yandex.ru/watch/99742118/1?" + a
    })));
    sg.push(S("isp.tl2", vx("tl2", function(a, b, c, d) {
        if (c = I(c, "settings.tl2")) {
            var e = {};
            d = Og((e.tl2 = 1,
            e.u = d,
            e)).oa();
            e = {};
            a = ce((e["browser-info"] = d,
            e["page-url"] = Ud(a).href,
            e["page-ref"] = a.document.referrer,
            e["site-info"] = b,
            e));
            return "https://" + c + ".mc.yandex.ru/watch/99742118/1?" + a
        }
    })));
    sg.push(S("isp.ntq", vx("ntq", function(a, b, c, d) {
        a = new a.Date;
        a.setMonth(a.getMonth() + 1);
        a = Math.floor(a.getTime() / 1E3);
        d = tj("0", 30, "" + Fi(d));
        d = P("-", [d.slice(0, 8), d.slice(8, 12), "4" + d.slice(12, 15), "8" + d.slice(15, 18), d.slice(18, 30)]);
        return "https://spadsync.com/partner?brandid=pyan0002&consent=" + a + "&zenithid=" + d
    }, qb)));
    ih["6"] = ["f", "x"];
    oi["6"] = Rg;
    sg.push(yx);
    sg.push(Hw);
    bi(zx, 6);
    X("h", zx, 6);
    X("a", zx, 6);
    X("5", zx, 6);
    X("1", zx, 6);
    X("adb");
    X("n", zx, 4);
    ih.adb = Vt;
    oi.adb = ji;
    Rt.push(Cx);
    ih["5"] = eh;
    oi["5"] = li;
    sg.push(Dx);
    X("5", Wh, -100);
    X("5", Mh(), 3);
    X("5", Nh, 4);
    bi(Fx, 7);
    X("h", Fx, 7);
    X("a", Fx, 7);
    X("n", Fx, 6);
    tg.push(Gx);
    oi.d = li;
    X("d", Mh(["hid", "u", "v", "vf"]), 1);
    ih.d = Vt;
    X("n", function(a, b) {
        return {
            Aa: function(c, d) {
                if (!c.T || !c.T.force) {
                    var e = 24226447 === b.id ? 1 : .002
                      , f = Gc(a);
                    if (f && y(f.getEntriesByType)) {
                        var g = .002 < Math.random()
                          , h = Math.random() > (void 0 === e ? 1 : e);
                        if (!g || !h) {
                            var k = f.getEntriesByType("resource")
                              , l = {}
                              , m = {};
                            f = {};
                            e = Ud(a).href;
                            for (var p = 0; p < k.length; p += 1) {
                                var q = k[p]
                                  , v = r(Qw(q.name))
                                  , t = v.next().value
                                  , u = v.next().value;
                                v = v.next().value;
                                var z = {};
                                z = (z.dns = Math.round(q.domainLookupEnd - q.domainLookupStart),
                                z.tcp = Math.round(q.connectEnd - q.connectStart),
                                z.duration = Math.round(q.duration),
                                z.response = Math.round(q.responseEnd - q.requestStart),
                                z);
                                if ("script" === q.initiatorType && !g) {
                                    var E = {};
                                    m[t] = O(z, (E.name = q.name,
                                    E.decodedBodySize = q.decodedBodySize,
                                    E.transferSize = Math.round(q.transferSize),
                                    E))
                                }
                                !v && !Pw[u] || l[t] || h || (q = {},
                                l[t] = O(z, (q.pages = e,
                                q)))
                            }
                            td(l).length && (f.timings8 = l);
                            td(m).length && (f.scripts = m);
                            td(f).length && (g = {},
                            h = {},
                            pi(a, "d", b)({
                                M: Og((g.ar = 1,
                                g.pv = 1,
                                g)),
                                N: {
                                    aa: Ee(a, f) || void 0
                                },
                                K: (h["page-url"] = e,
                                h)
                            }, {
                                id: 51533966,
                                $: "0"
                            })["catch"](R(a, "r.tim.ng2")))
                        }
                    }
                }
                d()
            }
        }
    }, 7);
    ih.ci = ["x"];
    oi.ci = Rg;
    tg.push(S("p.sci", function(a, b) {
        return Li(b, D([a, b], Jx))["catch"](R(a, "ins.cs"))
    }));
    tg.push(bw);
    bi(hy, 8);
    X("h", hy, 8);
    X("a", hy, 8);
    X("f", hy, 3);
    X("n", hy, 5);
    X("5", hy, 8);
    Rt.push(function() {
        var a = [my, qy, jy, Kx, ny, Px, Lx, Nx, ty, uy, py];
        return S("fip", function(b) {
            if (!Jv(b) || wb(b)) {
                var c = Le(b);
                if (!c.C("fip")) {
                    var d = N(Hb(N(function(e, f) {
                        return S("fip." + f, e)(b)
                    }, C(aw, null))), Pb("-"))(a);
                    c.F("fip", d)
                }
            }
        })
    }());
    bi(iy, 9);
    X("h", iy, 9);
    X("a", iy, 9);
    X("5", iy, 9);
    X("h", function(a) {
        return {
            Aa: function(b, c) {
                var d = b.Ag;
                Rh(b) && d && Q(a).F("isEU", I(d, "settings.eu"));
                c()
            }
        }
    }, 3);
    Rt.push(xy);
    tg.push(Ly);
    sg.push(Oy);
    ai.push(function(a) {
        return {
            V: function(b, c) {
                var d = b.Ta || {}, e;
                b: {
                    if (e = Ud(a).hostname)
                        if (e = e.match(Sy))
                            if (e = e[3],
                            U(e, Kt))
                                break b;
                    e = !1
                }
                e ? e = Ry + "." + e : (e = I(a, "document.referrer")) ? (e = Kg(a, e).hostname,
                e = Lt(e),
                e = Ry + "." + (e || Qy)) : e = Kc;
                b.Ta = O(d, {
                    bg: [e]
                });
                c()
            }
        }
    });
    bi(Zy, 5);
    X("h", Zy, 5);
    X("a", Zy, 5);
    X("5", Zy, 5);
    X("1", Zy, 6);
    ih.c = Vt;
    oi.c = Rg;
    X("h", fz, 7);
    X("a", fz, 7);
    X("5", fz, 7);
    X("1", fz, 7);
    bi(fz, 7);
    St.push(S("hcp", gz));
    tg.push(S("p.ot", iz));
    Gf({
        Qh: {
            ga: "disableWebsocket",
            cb: Ad
        }
    });
    ah.s = {
        check: function(a, b) {
            return !b.Qh && xa("WebSocket", a.WebSocket) ? zz(a) : !1
        },
        id: 5
    };
    ih.ws = ["f", "x"];
    oi.ws = Rg;
    X("g", function(a, b) {
        return {
            V: function(c, d) {
                var e = c.K;
                if (e && e["page-url"]) {
                    var f = e["page-url"];
                    Lz(f) || Mz(f) ? Li(b, function(g) {
                        var h = I(g, "settings.goal_values");
                        if (h) {
                            var k = (g = Kg(a, f).query) ? be(g) : void 0;
                            if (k) {
                                g = c.T || {};
                                g.Z || (g.Z = {});
                                g.Z.__ym || (g.Z.__ym = {});
                                var l = Lz(f) ? Iz : Jz;
                                h = Oz(h);
                                h = Kz(a, k, h, l);
                                0 !== h.length && (k = {},
                                h = (k.cgd = h[0],
                                k.cmg = h,
                                k),
                                O(g.Z.__ym, h),
                                c.T = O(c.T || {}, g))
                            }
                        }
                        d()
                    })["catch"](N(Ma(d), R(a, "a.g.v"))) : d()
                } else
                    d()
            }
        }
    }, -2);
    St.push(S("cdl", function(a) {
        var b = Q(a).va;
        if (a = I(a, "navigator.cookieDeprecationLabel"))
            try {
                a.getValue().then(F("cdl", b), D(["cdl", "e"], b))
            } catch (c) {
                b("cdl", "d")
            }
        else
            b("cdl", "na")
    }));
    Gf({
        Rh: {
            ga: "disableYtm",
            cb: Ad
        }
    });
    ih.ytm = ["f", "x"];
    sg.push(S("p.ytm", function(a, b) {
        var c = !1
          , d = [function() {
            c = !0
        }
        ]
          , e = D([Oc, d], M)
          , f = jm(a);
        Eu(a, b).then(function(g) {
            if (!c && g) {
                if (g = b.id === +mcOptions.id ? ytmConfig : null)
                    return g;
                g = jh(a, b, "ytm");
                var h = {};
                return Rg(a, g)({
                    N: {
                        fa: ["ytm"],
                        mb: !0
                    },
                    K: f ? (h.nonce = f,
                    h) : void 0
                }, ["https://" + Kc + "/ytm-config/" + b.id]).then(ib(Xo({
                    ib: 1
                })))
            }
        }).then(function(g) {
            if (!c && Pa(g)) {
                var h = !(!f || !0 !== g.isPreview)
                  , k = Me(a, "", "ytm-debugger");
                f ? k.C("nonce") !== f && (k.F("nonce", f),
                k.pb("data")) : (k.pb("nonce"),
                k.pb("data"));
                if (h) {
                    var l = Mo(a, g);
                    Ul(a, Co, w, R(a, "ytm.d.in"))
                }
                cu(a, b, l && l.trigger);
                h = Bu(a, b.id, g, h);
                k = V(b);
                var m = Du(a, k).ee
                  , p = Cu(a, g.permissions, b.id, g.containerId);
                k = Af(a);
                l = yu({
                    l: a,
                    counterId: b.id,
                    config: g,
                    W: p,
                    Pe: h,
                    Nh: l,
                    ee: m,
                    fh: k,
                    Gf: C(d.push, d)
                });
                l.add(hu(a, "ytm.init_consent"));
                l.add(hu(a, "ytm.init"));
                g = tu(a, l, g);
                d.push(g, h.Of, F(k.Ki, Zb));
                l.Ma()
            }
        })["catch"](R(a, "ytm.s"));
        return function() {
            return e()
        }
    }));
    ug.push(function(a, b, c) {
        c.policy = zo(a).rh
    });
    ke.push("_ytm_preview");
    tg.push(Rz);
    ih.pis = gh;
    oi.pis = Rg;
    tg.push(S("p.sci", function(a, b) {
        return Li(b, function(c) {
            var d = I(c, "settings.pis");
            if (d && !ey(c)) {
                c = Q(a);
                var e = c.C;
                c = c.F;
                e = e("pis");
                if (B(e))
                    return e = pi(a, "pis", b),
                    c("pis", "0"),
                    e({
                        N: {
                            fa: ["pis"]
                        }
                    }, [d]).then(D(["pis", "1"], c), Ma(D(["pis", "a"], c)))
            }
        })["catch"](R(a, "pis"))
    }));
    ih.pic = ["j"];
    oi.pic = Rg;
    tg.push(Tz);
    St.push(Uz);
    Vz.init || (Vz.init = []);
    Vz.init.push(function(a, b, c, d) {
        c = c[0];
        if (!c || !c.ssr)
            return !1;
        if (b.id !== +mcOptions.id || !mcOptions)
            return !0;
        if (d)
            return c = {},
            si(a, "" + b.id, "dc", (c.key = V(b),
            c)),
            !0;
        d = jm(a);
        var e;
        if (e = d && !0 !== ((b.id === +mcOptions.id ? ytmConfig : null) || {}).isPreview) {
            e = V(b) + "._ytm_preview";
            var f = Q(a)
              , g = f.C;
            f = f.F;
            g(e) ? e = !0 : (f(e, !0),
            e = !1);
            e = !e
        }
        if (e)
            return Ul(a, Ao + "/tag.js?id=" + b.id + "&nonce=" + d, w, R(a, "ssr.pw.l")),
            !0;
        d = Q(a).C("ssr.c", {})[b.id];
        e = "yaCounter" + b.id;
        g = {};
        g = (g.webvisor = !!ui(b).webvisor,
        g);
        a[e] = new d(O(g, c, b));
        return !0
    });
    ug.push(function(a, b) {
        var c = Q(a)
          , d = c.C("ssr.c", {});
        d[+mcOptions.id] = b;
        c.F("ssr.c", d)
    });
    tg.push(fA);
    sg.push(gA);
    Ag.getYmclid = "yc";
    tg.push(jA);
    tg.push(kA);
    St.push(lA);
    tg.push(qA);
    ih.csu = ["i"];
    oi.csu = Rg;
    tg.push(S("p.gss", function(a, b) {
        return Li(b, function(c) {
            var d = Qb(a)
              , e = d.C
              , f = d.F;
            if (!e("csup"))
                if (d = I(c, "settings.csu"),
                Xd(a) || Yo(b.$) || !x(d) && !d)
                    f("csu", 0);
                else if (ey(c))
                    f("csu", 5);
                else {
                    var g = Le(a)
                      , h = Be(a)(Mt);
                    if ((c = db(g.C("csu"))) && 1440 >= h - c)
                        f("csu", 1);
                    else
                        return f("csup", 1),
                        f("csu", 2),
                        pi(a, "csu", b)({
                            N: {
                                fa: ["csu"]
                            }
                        }, [d]).then(function() {
                            f("csu", 4);
                            g.F("csu", h)
                        }, D(["csu", 3], f))
                }
        })["catch"](R(a, "s.csu"))
    }));
    tg.push(tA, uA);
    sg.push(function(a, b) {
        var c = Wz(a)
          , d = V(b)
          , e = c[d];
        e || (e = {},
        c[d] = e);
        e.Di = !0;
        if (c = e.Sg)
            d = Yz(a),
            M(d, c)
    });
    tg.unshift(function(a, b) {
        Li(b, function(c) {
            var d = Gg(a)
              , e = Ju(a);
            (d || e.id) && Qz(a, "tag_debug", b, c)
        })
    });
    function GA(a, b, c, d) {
        var e = this;
        return R(window, "c.i", function() {
            function f(E) {
                (E = dl(k, m, "", E)(k, m)) && (y(E.then) ? E.then(g) : g(E));
                return E
            }
            function g(E) {
                E && (y(E) ? p.push(E) : Pa(E) && M(function(Y) {
                    var ha = r(Y);
                    Y = ha.next().value;
                    ha = ha.next().value;
                    y(ha) && ("u" === Y ? p.push(ha) : h(ha, Y))
                }, sd(E)))
            }
            function h(E, Y, ha) {
                e[Y] = zA(k, m, ha || q, Y, E)
            }
            var k = window;
            (!k || isNaN(a) && !a) && Mc();
            var l = Fu(a, b, c, d)
              , m = Gu(l);
            Pz(m).dj = l;
            Xt(m, m.Z || {});
            var p = []
              , q = [AA, dl, BA];
            q.unshift(Dl);
            var v = M(J, tg);
            l = V(m);
            m.id || Fc(Cc("Invalid Metrika id: " + m.id, !0));
            var t = CA.C("counters", {});
            if (t[l])
                return v = {},
                si(k, l, "dc", (v.key = l,
                v)),
                t[l];
            var u = Ki(l)
              , z = I(k, "ym.l");
            cb(k, z) && (u.Ei = z);
            u.sc = Be(k)(ye);
            t[l] = e;
            CA.F("counters", t);
            CA.va("counter", e);
            M(function(E) {
                E(k, m)
            }, Qt);
            R(k, "c.i.bh", function() {
                M(f, Rt)
            })();
            f(xA);
            h(yA(k, m, p), "destruct", [AA, BA]);
            Wi(k, D([k, v, f, "a.i", 1], Dj), "a.ra");
            R(k, "c.i.ps", function() {
                M(f, sg)
            })();
            l = {};
            Ig(k, (l.counterKey = V(m),
            l.name = "counter",
            l.data = Ot(m),
            l))
        })()
    }
    R(window, "wp.i", function() {
        M(Ka(Oc)(window), St)
    })();
    if (window.Ya && GA) {
        window.Ya[Jc] = GA;
        wA(window);
        var HA = window.Ya[Jc];
        CA.va("staticMethods", {});
        var IA = CA.C("staticMethods");
        M(N(Ya([window, HA, IA]), Oc), ug)
    }
    (function(a) {
        var b = I(a, "ym");
        if (b) {
            var c = I(b, "a");
            c || (b.a = [],
            c = b.a);
            var d = Yz(a);
            pl(a, c, function(e) {
                e.sa.D(d)
            }, !0)
        }
    }
    )(window);
}
).call(this);
