var Xo = Object.defineProperty;
var Jo = (t, e, n) => e in t ? Xo(t, e, {enumerable: !0, configurable: !0, writable: !0, value: n}) : t[e] = n;
var _ = (t, e, n) => (Jo(t, typeof e != "symbol" ? e + "" : e, n), n);
(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
    new MutationObserver(r => {
        for (const o of r) if (o.type === "childList") for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && i(a)
    }).observe(document, {childList: !0, subtree: !0});

    function n(r) {
        const o = {};
        return r.integrity && (o.integrity = r.integrity), r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? o.credentials = "include" : r.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function i(r) {
        if (r.ep) return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o)
    }
})();

/**
 * @vue/shared v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/function Xi(t, e) {
    const n = new Set(t.split(","));
    return e ? i => n.has(i.toLowerCase()) : i => n.has(i)
}

const Ae = {}, Gt = [], et = () => {
    }, Zo = () => !1,
    ci = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
    Ji = t => t.startsWith("onUpdate:"), He = Object.assign, Zi = (t, e) => {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
    }, el = Object.prototype.hasOwnProperty, me = (t, e) => el.call(t, e), q = Array.isArray,
    $t = t => Tn(t) === "[object Map]", on = t => Tn(t) === "[object Set]", Fr = t => Tn(t) === "[object Date]",
    re = t => typeof t == "function", Ne = t => typeof t == "string", Tt = t => typeof t == "symbol",
    Ce = t => t !== null && typeof t == "object", As = t => (Ce(t) || re(t)) && re(t.then) && re(t.catch),
    Es = Object.prototype.toString, Tn = t => Es.call(t), tl = t => Tn(t).slice(8, -1),
    Is = t => Tn(t) === "[object Object]", er = t => Ne(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
    Hn = Xi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    ui = t => {
        const e = Object.create(null);
        return n => e[n] || (e[n] = t(n))
    }, nl = /-(\w)/g, ft = ui(t => t.replace(nl, (e, n) => n ? n.toUpperCase() : "")), il = /\B([A-Z])/g,
    ln = ui(t => t.replace(il, "-$1").toLowerCase()), fi = ui(t => t.charAt(0).toUpperCase() + t.slice(1)),
    Ci = ui(t => t ? `on${fi(t)}` : ""), Ft = (t, e) => !Object.is(t, e), Kn = (t, e) => {
        for (let n = 0; n < t.length; n++) t[n](e)
    }, ii = (t, e, n) => {
        Object.defineProperty(t, e, {configurable: !0, enumerable: !1, value: n})
    }, _n = t => {
        const e = parseFloat(t);
        return isNaN(e) ? t : e
    };
let Sr;
const Cs = () => Sr || (Sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function hi(t) {
    if (q(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const i = t[n], r = Ne(i) ? ll(i) : hi(i);
            if (r) for (const o in r) e[o] = r[o]
        }
        return e
    } else if (Ne(t) || Ce(t)) return t
}

const rl = /;(?![^(]*\))/g, sl = /:([^]+)/, ol = /\/\*[^]*?\*\//g;

function ll(t) {
    const e = {};
    return t.replace(ol, "").split(rl).forEach(n => {
        if (n) {
            const i = n.split(sl);
            i.length > 1 && (e[i[0].trim()] = i[1].trim())
        }
    }), e
}

function Xt(t) {
    let e = "";
    if (Ne(t)) e = t; else if (q(t)) for (let n = 0; n < t.length; n++) {
        const i = Xt(t[n]);
        i && (e += i + " ")
    } else if (Ce(t)) for (const n in t) t[n] && (e += n + " ");
    return e.trim()
}

const al = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", cl = Xi(al);

function Bs(t) {
    return !!t || t === ""
}

function ul(t, e) {
    if (t.length !== e.length) return !1;
    let n = !0;
    for (let i = 0; n && i < t.length; i++) n = Jt(t[i], e[i]);
    return n
}

function Jt(t, e) {
    if (t === e) return !0;
    let n = Fr(t), i = Fr(e);
    if (n || i) return n && i ? t.getTime() === e.getTime() : !1;
    if (n = Tt(t), i = Tt(e), n || i) return t === e;
    if (n = q(t), i = q(e), n || i) return n && i ? ul(t, e) : !1;
    if (n = Ce(t), i = Ce(e), n || i) {
        if (!n || !i) return !1;
        const r = Object.keys(t).length, o = Object.keys(e).length;
        if (r !== o) return !1;
        for (const a in t) {
            const c = t.hasOwnProperty(a), h = e.hasOwnProperty(a);
            if (c && !h || !c && h || !Jt(t[a], e[a])) return !1
        }
    }
    return String(t) === String(e)
}

function tr(t, e) {
    return t.findIndex(n => Jt(n, e))
}

const bn = t => Ne(t) ? t : t == null ? "" : q(t) || Ce(t) && (t.toString === Es || !re(t.toString)) ? JSON.stringify(t, Ts, 2) : String(t),
    Ts = (t, e) => e && e.__v_isRef ? Ts(t, e.value) : $t(e) ? {[`Map(${e.size})`]: [...e.entries()].reduce((n, [i, r], o) => (n[Bi(i, o) + " =>"] = r, n), {})} : on(e) ? {[`Set(${e.size})`]: [...e.values()].map(n => Bi(n))} : Tt(e) ? Bi(e) : Ce(e) && !q(e) && !Is(e) ? String(e) : e,
    Bi = (t, e = "") => {
        var n;
        return Tt(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
    };
/**
 * @vue/reactivity v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/let nt;

class fl {
    constructor(e = !1) {
        this.detached = e, this._active = !0, this.effects = [], this.cleanups = [], this.parent = nt, !e && nt && (this.index = (nt.scopes || (nt.scopes = [])).push(this) - 1)
    }

    get active() {
        return this._active
    }

    run(e) {
        if (this._active) {
            const n = nt;
            try {
                return nt = this, e()
            } finally {
                nt = n
            }
        }
    }

    on() {
        nt = this
    }

    off() {
        nt = this.parent
    }

    stop(e) {
        if (this._active) {
            let n, i;
            for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop();
            for (n = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]();
            if (this.scopes) for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !e) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function hl(t, e = nt) {
    e && e.active && e.effects.push(t)
}

function dl() {
    return nt
}

let Mt;

class nr {
    constructor(e, n, i, r) {
        this.fn = e, this.trigger = n, this.scheduler = i, this.active = !0, this.deps = [], this._dirtyLevel = 2, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, hl(this, r)
    }

    get dirty() {
        if (this._dirtyLevel === 1) {
            Dt();
            for (let e = 0; e < this._depsLength; e++) {
                const n = this.deps[e];
                if (n.computed && (pl(n.computed), this._dirtyLevel >= 2)) break
            }
            this._dirtyLevel < 2 && (this._dirtyLevel = 0), jt()
        }
        return this._dirtyLevel >= 2
    }

    set dirty(e) {
        this._dirtyLevel = e ? 2 : 0
    }

    run() {
        if (this._dirtyLevel = 0, !this.active) return this.fn();
        let e = It, n = Mt;
        try {
            return It = !0, Mt = this, this._runnings++, Rr(this), this.fn()
        } finally {
            Or(this), this._runnings--, Mt = n, It = e
        }
    }

    stop() {
        var e;
        this.active && (Rr(this), Or(this), (e = this.onStop) == null || e.call(this), this.active = !1)
    }
}

function pl(t) {
    return t.value
}

function Rr(t) {
    t._trackId++, t._depsLength = 0
}

function Or(t) {
    if (t.deps && t.deps.length > t._depsLength) {
        for (let e = t._depsLength; e < t.deps.length; e++) Fs(t.deps[e], t);
        t.deps.length = t._depsLength
    }
}

function Fs(t, e) {
    const n = t.get(e);
    n !== void 0 && e._trackId !== n && (t.delete(e), t.size === 0 && t.cleanup())
}

let It = !0, Mi = 0;
const Ss = [];

function Dt() {
    Ss.push(It), It = !1
}

function jt() {
    const t = Ss.pop();
    It = t === void 0 ? !0 : t
}

function ir() {
    Mi++
}

function rr() {
    for (Mi--; !Mi && Ni.length;) Ni.shift()()
}

function Rs(t, e, n) {
    if (e.get(t) !== t._trackId) {
        e.set(t, t._trackId);
        const i = t.deps[t._depsLength];
        i !== e ? (i && Fs(i, t), t.deps[t._depsLength++] = e) : t._depsLength++
    }
}

const Ni = [];

function Os(t, e, n) {
    ir();
    for (const i of t.keys()) if (i._dirtyLevel < e && t.get(i) === i._trackId) {
        const r = i._dirtyLevel;
        i._dirtyLevel = e, r === 0 && (i._shouldSchedule = !0, i.trigger())
    }
    Us(t), rr()
}

function Us(t) {
    for (const e of t.keys()) e.scheduler && e._shouldSchedule && (!e._runnings || e.allowRecurse) && t.get(e) === e._trackId && (e._shouldSchedule = !1, Ni.push(e.scheduler))
}

const Ls = (t, e) => {
    const n = new Map;
    return n.cleanup = t, n.computed = e, n
}, Vi = new WeakMap, Nt = Symbol(""), Di = Symbol("");

function Xe(t, e, n) {
    if (It && Mt) {
        let i = Vi.get(t);
        i || Vi.set(t, i = new Map);
        let r = i.get(n);
        r || i.set(n, r = Ls(() => i.delete(n))), Rs(Mt, r)
    }
}

function mt(t, e, n, i, r, o) {
    const a = Vi.get(t);
    if (!a) return;
    let c = [];
    if (e === "clear") c = [...a.values()]; else if (n === "length" && q(t)) {
        const h = Number(i);
        a.forEach((g, y) => {
            (y === "length" || !Tt(y) && y >= h) && c.push(g)
        })
    } else switch (n !== void 0 && c.push(a.get(n)), e) {
        case"add":
            q(t) ? er(n) && c.push(a.get("length")) : (c.push(a.get(Nt)), $t(t) && c.push(a.get(Di)));
            break;
        case"delete":
            q(t) || (c.push(a.get(Nt)), $t(t) && c.push(a.get(Di)));
            break;
        case"set":
            $t(t) && c.push(a.get(Nt));
            break
    }
    ir();
    for (const h of c) h && Os(h, 2);
    rr()
}

const ml = Xi("__proto__,__v_isRef,__isVue"),
    Ps = new Set(Object.getOwnPropertyNames(Symbol).filter(t => t !== "arguments" && t !== "caller").map(t => Symbol[t]).filter(Tt)),
    Ur = gl();

function gl() {
    const t = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(e => {
        t[e] = function (...n) {
            const i = ve(this);
            for (let o = 0, a = this.length; o < a; o++) Xe(i, "get", o + "");
            const r = i[e](...n);
            return r === -1 || r === !1 ? i[e](...n.map(ve)) : r
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(e => {
        t[e] = function (...n) {
            Dt(), ir();
            const i = ve(this)[e].apply(this, n);
            return rr(), jt(), i
        }
    }), t
}

function vl(t) {
    const e = ve(this);
    return Xe(e, "has", t), e.hasOwnProperty(t)
}

class Ms {
    constructor(e = !1, n = !1) {
        this._isReadonly = e, this._shallow = n
    }

    get(e, n, i) {
        const r = this._isReadonly, o = this._shallow;
        if (n === "__v_isReactive") return !r;
        if (n === "__v_isReadonly") return r;
        if (n === "__v_isShallow") return o;
        if (n === "__v_raw") return i === (r ? o ? Sl : js : o ? Ds : Vs).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
        const a = q(e);
        if (!r) {
            if (a && me(Ur, n)) return Reflect.get(Ur, n, i);
            if (n === "hasOwnProperty") return vl
        }
        const c = Reflect.get(e, n, i);
        return (Tt(n) ? Ps.has(n) : ml(n)) || (r || Xe(e, "get", n), o) ? c : Se(c) ? a && er(n) ? c : c.value : Ce(c) ? r ? ks(c) : lr(c) : c
    }
}

class Ns extends Ms {
    constructor(e = !1) {
        super(!1, e)
    }

    set(e, n, i, r) {
        let o = e[n];
        if (!this._shallow) {
            const h = Zt(o);
            if (!ri(i) && !Zt(i) && (o = ve(o), i = ve(i)), !q(e) && Se(o) && !Se(i)) return h ? !1 : (o.value = i, !0)
        }
        const a = q(e) && er(n) ? Number(n) < e.length : me(e, n), c = Reflect.set(e, n, i, r);
        return e === ve(r) && (a ? Ft(i, o) && mt(e, "set", n, i) : mt(e, "add", n, i)), c
    }

    deleteProperty(e, n) {
        const i = me(e, n);
        e[n];
        const r = Reflect.deleteProperty(e, n);
        return r && i && mt(e, "delete", n, void 0), r
    }

    has(e, n) {
        const i = Reflect.has(e, n);
        return (!Tt(n) || !Ps.has(n)) && Xe(e, "has", n), i
    }

    ownKeys(e) {
        return Xe(e, "iterate", q(e) ? "length" : Nt), Reflect.ownKeys(e)
    }
}

class yl extends Ms {
    constructor(e = !1) {
        super(!0, e)
    }

    set(e, n) {
        return !0
    }

    deleteProperty(e, n) {
        return !0
    }
}

const wl = new Ns, xl = new yl, _l = new Ns(!0), sr = t => t, di = t => Reflect.getPrototypeOf(t);

function Pn(t, e, n = !1, i = !1) {
    t = t.__v_raw;
    const r = ve(t), o = ve(e);
    n || (Ft(e, o) && Xe(r, "get", e), Xe(r, "get", o));
    const {has: a} = di(r), c = i ? sr : n ? cr : An;
    if (a.call(r, e)) return c(t.get(e));
    if (a.call(r, o)) return c(t.get(o));
    t !== r && t.get(e)
}

function Mn(t, e = !1) {
    const n = this.__v_raw, i = ve(n), r = ve(t);
    return e || (Ft(t, r) && Xe(i, "has", t), Xe(i, "has", r)), t === r ? n.has(t) : n.has(t) || n.has(r)
}

function Nn(t, e = !1) {
    return t = t.__v_raw, !e && Xe(ve(t), "iterate", Nt), Reflect.get(t, "size", t)
}

function Lr(t) {
    t = ve(t);
    const e = ve(this);
    return di(e).has.call(e, t) || (e.add(t), mt(e, "add", t, t)), this
}

function Pr(t, e) {
    e = ve(e);
    const n = ve(this), {has: i, get: r} = di(n);
    let o = i.call(n, t);
    o || (t = ve(t), o = i.call(n, t));
    const a = r.call(n, t);
    return n.set(t, e), o ? Ft(e, a) && mt(n, "set", t, e) : mt(n, "add", t, e), this
}

function Mr(t) {
    const e = ve(this), {has: n, get: i} = di(e);
    let r = n.call(e, t);
    r || (t = ve(t), r = n.call(e, t)), i && i.call(e, t);
    const o = e.delete(t);
    return r && mt(e, "delete", t, void 0), o
}

function Nr() {
    const t = ve(this), e = t.size !== 0, n = t.clear();
    return e && mt(t, "clear", void 0, void 0), n
}

function Vn(t, e) {
    return function (i, r) {
        const o = this, a = o.__v_raw, c = ve(a), h = e ? sr : t ? cr : An;
        return !t && Xe(c, "iterate", Nt), a.forEach((g, y) => i.call(r, h(g), h(y), o))
    }
}

function Dn(t, e, n) {
    return function (...i) {
        const r = this.__v_raw, o = ve(r), a = $t(o), c = t === "entries" || t === Symbol.iterator && a,
            h = t === "keys" && a, g = r[t](...i), y = n ? sr : e ? cr : An;
        return !e && Xe(o, "iterate", h ? Di : Nt), {
            next() {
                const {value: A, done: S} = g.next();
                return S ? {value: A, done: S} : {value: c ? [y(A[0]), y(A[1])] : y(A), done: S}
            }, [Symbol.iterator]() {
                return this
            }
        }
    }
}

function wt(t) {
    return function (...e) {
        return t === "delete" ? !1 : t === "clear" ? void 0 : this
    }
}

function bl() {
    const t = {
        get(o) {
            return Pn(this, o)
        }, get size() {
            return Nn(this)
        }, has: Mn, add: Lr, set: Pr, delete: Mr, clear: Nr, forEach: Vn(!1, !1)
    }, e = {
        get(o) {
            return Pn(this, o, !1, !0)
        }, get size() {
            return Nn(this)
        }, has: Mn, add: Lr, set: Pr, delete: Mr, clear: Nr, forEach: Vn(!1, !0)
    }, n = {
        get(o) {
            return Pn(this, o, !0)
        }, get size() {
            return Nn(this, !0)
        }, has(o) {
            return Mn.call(this, o, !0)
        }, add: wt("add"), set: wt("set"), delete: wt("delete"), clear: wt("clear"), forEach: Vn(!0, !1)
    }, i = {
        get(o) {
            return Pn(this, o, !0, !0)
        }, get size() {
            return Nn(this, !0)
        }, has(o) {
            return Mn.call(this, o, !0)
        }, add: wt("add"), set: wt("set"), delete: wt("delete"), clear: wt("clear"), forEach: Vn(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        t[o] = Dn(o, !1, !1), n[o] = Dn(o, !0, !1), e[o] = Dn(o, !1, !0), i[o] = Dn(o, !0, !0)
    }), [t, n, e, i]
}

const [Al, El, Il, Cl] = bl();

function or(t, e) {
    const n = e ? t ? Cl : Il : t ? El : Al;
    return (i, r, o) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? i : Reflect.get(me(n, r) && r in i ? n : i, r, o)
}

const Bl = {get: or(!1, !1)}, Tl = {get: or(!1, !0)}, Fl = {get: or(!0, !1)}, Vs = new WeakMap, Ds = new WeakMap,
    js = new WeakMap, Sl = new WeakMap;

function Rl(t) {
    switch (t) {
        case"Object":
        case"Array":
            return 1;
        case"Map":
        case"Set":
        case"WeakMap":
        case"WeakSet":
            return 2;
        default:
            return 0
    }
}

function Ol(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : Rl(tl(t))
}

function lr(t) {
    return Zt(t) ? t : ar(t, !1, wl, Bl, Vs)
}

function Ul(t) {
    return ar(t, !1, _l, Tl, Ds)
}

function ks(t) {
    return ar(t, !0, xl, Fl, js)
}

function ar(t, e, n, i, r) {
    if (!Ce(t) || t.__v_raw && !(e && t.__v_isReactive)) return t;
    const o = r.get(t);
    if (o) return o;
    const a = Ol(t);
    if (a === 0) return t;
    const c = new Proxy(t, a === 2 ? i : n);
    return r.set(t, c), c
}

function Qt(t) {
    return Zt(t) ? Qt(t.__v_raw) : !!(t && t.__v_isReactive)
}

function Zt(t) {
    return !!(t && t.__v_isReadonly)
}

function ri(t) {
    return !!(t && t.__v_isShallow)
}

function zs(t) {
    return Qt(t) || Zt(t)
}

function ve(t) {
    const e = t && t.__v_raw;
    return e ? ve(e) : t
}

function Hs(t) {
    return ii(t, "__v_skip", !0), t
}

const An = t => Ce(t) ? lr(t) : t, cr = t => Ce(t) ? ks(t) : t;

class Ks {
    constructor(e, n, i, r) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new nr(() => e(this._value), () => Gn(this, 1), () => this.dep && Us(this.dep)), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = i
    }

    get value() {
        const e = ve(this);
        return (!e._cacheable || e.effect.dirty) && Ft(e._value, e._value = e.effect.run()) && Gn(e, 2), Gs(e), e.effect._dirtyLevel >= 1 && Gn(e, 1), e._value
    }

    set value(e) {
        this._setter(e)
    }

    get _dirty() {
        return this.effect.dirty
    }

    set _dirty(e) {
        this.effect.dirty = e
    }
}

function Ll(t, e, n = !1) {
    let i, r;
    const o = re(t);
    return o ? (i = t, r = et) : (i = t.get, r = t.set), new Ks(i, r, o || !r, n)
}

function Gs(t) {
    It && Mt && (t = ve(t), Rs(Mt, t.dep || (t.dep = Ls(() => t.dep = void 0, t instanceof Ks ? t : void 0))))
}

function Gn(t, e = 2, n) {
    t = ve(t);
    const i = t.dep;
    i && Os(i, e)
}

function Se(t) {
    return !!(t && t.__v_isRef === !0)
}

function ye(t) {
    return Pl(t, !1)
}

function Pl(t, e) {
    return Se(t) ? t : new Ml(t, e)
}

class Ml {
    constructor(e, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : ve(e), this._value = n ? e : An(e)
    }

    get value() {
        return Gs(this), this._value
    }

    set value(e) {
        const n = this.__v_isShallow || ri(e) || Zt(e);
        e = n ? e : ve(e), Ft(e, this._rawValue) && (this._rawValue = e, this._value = n ? e : An(e), Gn(this, 2))
    }
}

function K(t) {
    return Se(t) ? t.value : t
}

const Nl = {
    get: (t, e, n) => K(Reflect.get(t, e, n)), set: (t, e, n, i) => {
        const r = t[e];
        return Se(r) && !Se(n) ? (r.value = n, !0) : Reflect.set(t, e, n, i)
    }
};

function $s(t) {
    return Qt(t) ? t : new Proxy(t, Nl)
}

/**
 * @vue/runtime-core v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/function Ct(t, e, n, i) {
    let r;
    try {
        r = i ? t(...i) : t()
    } catch (o) {
        pi(o, e, n)
    }
    return r
}

function st(t, e, n, i) {
    if (re(t)) {
        const o = Ct(t, e, n, i);
        return o && As(o) && o.catch(a => {
            pi(a, e, n)
        }), o
    }
    const r = [];
    for (let o = 0; o < t.length; o++) r.push(st(t[o], e, n, i));
    return r
}

function pi(t, e, n, i = !0) {
    const r = e ? e.vnode : null;
    if (e) {
        let o = e.parent;
        const a = e.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; o;) {
            const g = o.ec;
            if (g) {
                for (let y = 0; y < g.length; y++) if (g[y](t, a, c) === !1) return
            }
            o = o.parent
        }
        const h = e.appContext.config.errorHandler;
        if (h) {
            Ct(h, null, 10, [t, a, c]);
            return
        }
    }
    Vl(t, n, r, i)
}

function Vl(t, e, n, i = !0) {
    console.error(t)
}

let En = !1, ji = !1;
const Ke = [];
let ct = 0;
const Wt = [];
let _t = null, Lt = 0;
const Qs = Promise.resolve();
let ur = null;

function Ws(t) {
    const e = ur || Qs;
    return t ? e.then(this ? t.bind(this) : t) : e
}

function Dl(t) {
    let e = ct + 1, n = Ke.length;
    for (; e < n;) {
        const i = e + n >>> 1, r = Ke[i], o = In(r);
        o < t || o === t && r.pre ? e = i + 1 : n = i
    }
    return e
}

function fr(t) {
    (!Ke.length || !Ke.includes(t, En && t.allowRecurse ? ct + 1 : ct)) && (t.id == null ? Ke.push(t) : Ke.splice(Dl(t.id), 0, t), Ys())
}

function Ys() {
    !En && !ji && (ji = !0, ur = Qs.then(Xs))
}

function jl(t) {
    const e = Ke.indexOf(t);
    e > ct && Ke.splice(e, 1)
}

function kl(t) {
    q(t) ? Wt.push(...t) : (!_t || !_t.includes(t, t.allowRecurse ? Lt + 1 : Lt)) && Wt.push(t), Ys()
}

function Vr(t, e, n = En ? ct + 1 : 0) {
    for (; n < Ke.length; n++) {
        const i = Ke[n];
        if (i && i.pre) {
            if (t && i.id !== t.uid) continue;
            Ke.splice(n, 1), n--, i()
        }
    }
}

function qs(t) {
    if (Wt.length) {
        const e = [...new Set(Wt)].sort((n, i) => In(n) - In(i));
        if (Wt.length = 0, _t) {
            _t.push(...e);
            return
        }
        for (_t = e, Lt = 0; Lt < _t.length; Lt++) _t[Lt]();
        _t = null, Lt = 0
    }
}

const In = t => t.id == null ? 1 / 0 : t.id, zl = (t, e) => {
    const n = In(t) - In(e);
    if (n === 0) {
        if (t.pre && !e.pre) return -1;
        if (e.pre && !t.pre) return 1
    }
    return n
};

function Xs(t) {
    ji = !1, En = !0, Ke.sort(zl);
    try {
        for (ct = 0; ct < Ke.length; ct++) {
            const e = Ke[ct];
            e && e.active !== !1 && Ct(e, null, 14)
        }
    } finally {
        ct = 0, Ke.length = 0, qs(), En = !1, ur = null, (Ke.length || Wt.length) && Xs()
    }
}

function Hl(t, e, ...n) {
    if (t.isUnmounted) return;
    const i = t.vnode.props || Ae;
    let r = n;
    const o = e.startsWith("update:"), a = o && e.slice(7);
    if (a && a in i) {
        const y = `${a === "modelValue" ? "model" : a}Modifiers`, {number: A, trim: S} = i[y] || Ae;
        S && (r = n.map(P => Ne(P) ? P.trim() : P)), A && (r = n.map(_n))
    }
    let c, h = i[c = Ci(e)] || i[c = Ci(ft(e))];
    !h && o && (h = i[c = Ci(ln(e))]), h && st(h, t, 6, r);
    const g = i[c + "Once"];
    if (g) {
        if (!t.emitted) t.emitted = {}; else if (t.emitted[c]) return;
        t.emitted[c] = !0, st(g, t, 6, r)
    }
}

function Js(t, e, n = !1) {
    const i = e.emitsCache, r = i.get(t);
    if (r !== void 0) return r;
    const o = t.emits;
    let a = {}, c = !1;
    if (!re(t)) {
        const h = g => {
            const y = Js(g, e, !0);
            y && (c = !0, He(a, y))
        };
        !n && e.mixins.length && e.mixins.forEach(h), t.extends && h(t.extends), t.mixins && t.mixins.forEach(h)
    }
    return !o && !c ? (Ce(t) && i.set(t, null), null) : (q(o) ? o.forEach(h => a[h] = null) : He(a, o), Ce(t) && i.set(t, a), a)
}

function mi(t, e) {
    return !t || !ci(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), me(t, e[0].toLowerCase() + e.slice(1)) || me(t, ln(e)) || me(t, e))
}

let je = null, gi = null;

function si(t) {
    const e = je;
    return je = t, gi = t && t.type.__scopeId || null, e
}

function Fn(t) {
    gi = t
}

function Sn() {
    gi = null
}

function Zs(t, e = je, n) {
    if (!e || t._n) return t;
    const i = (...r) => {
        i._d && Yr(-1);
        const o = si(e);
        let a;
        try {
            a = t(...r)
        } finally {
            si(o), i._d && Yr(1)
        }
        return a
    };
    return i._n = !0, i._c = !0, i._d = !0, i
}

function Ti(t) {
    const {
        type: e,
        vnode: n,
        proxy: i,
        withProxy: r,
        props: o,
        propsOptions: [a],
        slots: c,
        attrs: h,
        emit: g,
        render: y,
        renderCache: A,
        data: S,
        setupState: P,
        ctx: te,
        inheritAttrs: X
    } = t;
    let oe, F;
    const M = si(t);
    try {
        if (n.shapeFlag & 4) {
            const N = r || i, $ = N;
            oe = at(y.call($, N, A, o, P, S, te)), F = h
        } else {
            const N = e;
            oe = at(N.length > 1 ? N(o, {attrs: h, slots: c, emit: g}) : N(o, null)), F = e.props ? h : Kl(h)
        }
    } catch (N) {
        wn.length = 0, pi(N, t, 1), oe = ce(St)
    }
    let H = oe;
    if (F && X !== !1) {
        const N = Object.keys(F), {shapeFlag: $} = H;
        N.length && $ & 7 && (a && N.some(Ji) && (F = Gl(F, a)), H = en(H, F))
    }
    return n.dirs && (H = en(H), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (H.transition = n.transition), oe = H, si(M), oe
}

const Kl = t => {
    let e;
    for (const n in t) (n === "class" || n === "style" || ci(n)) && ((e || (e = {}))[n] = t[n]);
    return e
}, Gl = (t, e) => {
    const n = {};
    for (const i in t) (!Ji(i) || !(i.slice(9) in e)) && (n[i] = t[i]);
    return n
};

function $l(t, e, n) {
    const {props: i, children: r, component: o} = t, {props: a, children: c, patchFlag: h} = e, g = o.emitsOptions;
    if (e.dirs || e.transition) return !0;
    if (n && h >= 0) {
        if (h & 1024) return !0;
        if (h & 16) return i ? Dr(i, a, g) : !!a;
        if (h & 8) {
            const y = e.dynamicProps;
            for (let A = 0; A < y.length; A++) {
                const S = y[A];
                if (a[S] !== i[S] && !mi(g, S)) return !0
            }
        }
    } else return (r || c) && (!c || !c.$stable) ? !0 : i === a ? !1 : i ? a ? Dr(i, a, g) : !0 : !!a;
    return !1
}

function Dr(t, e, n) {
    const i = Object.keys(e);
    if (i.length !== Object.keys(t).length) return !0;
    for (let r = 0; r < i.length; r++) {
        const o = i[r];
        if (e[o] !== t[o] && !mi(n, o)) return !0
    }
    return !1
}

function Ql({vnode: t, parent: e}, n) {
    for (; e;) {
        const i = e.subTree;
        if (i.suspense && i.suspense.activeBranch === t && (i.el = t.el), i === t) (t = e.vnode).el = n, e = e.parent; else break
    }
}

const hr = "components";

function zt(t, e) {
    return no(hr, t, !0, e) || t
}

const eo = Symbol.for("v-ndc");

function to(t) {
    return Ne(t) ? no(hr, t, !1) || t : t || eo
}

function no(t, e, n = !0, i = !1) {
    const r = je || Ge;
    if (r) {
        const o = r.type;
        if (t === hr) {
            const c = Da(o, !1);
            if (c && (c === e || c === ft(e) || c === fi(ft(e)))) return o
        }
        const a = jr(r[t] || o[t], e) || jr(r.appContext[t], e);
        return !a && i ? o : a
    }
}

function jr(t, e) {
    return t && (t[e] || t[ft(e)] || t[fi(ft(e))])
}

const Wl = t => t.__isSuspense;

function Yl(t, e) {
    e && e.pendingBranch ? q(t) ? e.effects.push(...t) : e.effects.push(t) : kl(t)
}

const ql = Symbol.for("v-scx"), Xl = () => $n(ql), jn = {};

function Yt(t, e, n) {
    return io(t, e, n)
}

function io(t, e, {immediate: n, deep: i, flush: r, once: o, onTrack: a, onTrigger: c} = Ae) {
    if (e && o) {
        const R = e;
        e = (...ne) => {
            R(...ne), $()
        }
    }
    const h = Ge, g = R => i === !0 ? R : Pt(R, i === !1 ? 1 : void 0);
    let y, A = !1, S = !1;
    if (Se(t) ? (y = () => t.value, A = ri(t)) : Qt(t) ? (y = () => g(t), A = !0) : q(t) ? (S = !0, A = t.some(R => Qt(R) || ri(R)), y = () => t.map(R => {
        if (Se(R)) return R.value;
        if (Qt(R)) return g(R);
        if (re(R)) return Ct(R, h, 2)
    })) : re(t) ? e ? y = () => Ct(t, h, 2) : y = () => (P && P(), st(t, h, 3, [te])) : y = et, e && i) {
        const R = y;
        y = () => Pt(R())
    }
    let P, te = R => {
        P = H.onStop = () => {
            Ct(R, h, 4), P = H.onStop = void 0
        }
    }, X;
    if (_i) if (te = et, e ? n && st(e, h, 3, [y(), S ? [] : void 0, te]) : y(), r === "sync") {
        const R = Xl();
        X = R.__watcherHandles || (R.__watcherHandles = [])
    } else return et;
    let oe = S ? new Array(t.length).fill(jn) : jn;
    const F = () => {
        if (!(!H.active || !H.dirty)) if (e) {
            const R = H.run();
            (i || A || (S ? R.some((ne, G) => Ft(ne, oe[G])) : Ft(R, oe))) && (P && P(), st(e, h, 3, [R, oe === jn ? void 0 : S && oe[0] === jn ? [] : oe, te]), oe = R)
        } else H.run()
    };
    F.allowRecurse = !!e;
    let M;
    r === "sync" ? M = F : r === "post" ? M = () => qe(F, h && h.suspense) : (F.pre = !0, h && (F.id = h.uid), M = () => fr(F));
    const H = new nr(y, et, M), N = dl(), $ = () => {
        H.stop(), N && Zi(N.effects, H)
    };
    return e ? n ? F() : oe = H.run() : r === "post" ? qe(H.run.bind(H), h && h.suspense) : H.run(), X && X.push($), $
}

function Jl(t, e, n) {
    const i = this.proxy, r = Ne(t) ? t.includes(".") ? ro(i, t) : () => i[t] : t.bind(i, i);
    let o;
    re(e) ? o = e : (o = e.handler, n = e);
    const a = On(this), c = io(r, o.bind(i), n);
    return a(), c
}

function ro(t, e) {
    const n = e.split(".");
    return () => {
        let i = t;
        for (let r = 0; r < n.length && i; r++) i = i[n[r]];
        return i
    }
}

function Pt(t, e, n = 0, i) {
    if (!Ce(t) || t.__v_skip) return t;
    if (e && e > 0) {
        if (n >= e) return t;
        n++
    }
    if (i = i || new Set, i.has(t)) return t;
    if (i.add(t), Se(t)) Pt(t.value, e, n, i); else if (q(t)) for (let r = 0; r < t.length; r++) Pt(t[r], e, n, i); else if (on(t) || $t(t)) t.forEach(r => {
        Pt(r, e, n, i)
    }); else if (Is(t)) for (const r in t) Pt(t[r], e, n, i);
    return t
}

function Ye(t, e) {
    if (je === null) return t;
    const n = bi(je) || je.proxy, i = t.dirs || (t.dirs = []);
    for (let r = 0; r < e.length; r++) {
        let [o, a, c, h = Ae] = e[r];
        o && (re(o) && (o = {mounted: o, updated: o}), o.deep && Pt(a), i.push({
            dir: o,
            instance: n,
            value: a,
            oldValue: void 0,
            arg: c,
            modifiers: h
        }))
    }
    return t
}

function Rt(t, e, n, i) {
    const r = t.dirs, o = e && e.dirs;
    for (let a = 0; a < r.length; a++) {
        const c = r[a];
        o && (c.oldValue = o[a].value);
        let h = c.dir[i];
        h && (Dt(), st(h, n, 8, [t.el, c, t, e]), jt())
    }
}/*! #__NO_SIDE_EFFECTS__ */
function $e(t, e) {
    return re(t) ? He({name: t.name}, e, {setup: t}) : t
}

const vn = t => !!t.type.__asyncLoader, so = t => t.type.__isKeepAlive;

function Zl(t, e) {
    oo(t, "a", e)
}

function ea(t, e) {
    oo(t, "da", e)
}

function oo(t, e, n = Ge) {
    const i = t.__wdc || (t.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return t()
    });
    if (vi(e, i, n), n) {
        let r = n.parent;
        for (; r && r.parent;) so(r.parent.vnode) && ta(i, e, n, r), r = r.parent
    }
}

function ta(t, e, n, i) {
    const r = vi(e, t, i, !0);
    lo(() => {
        Zi(i[e], r)
    }, n)
}

function vi(t, e, n = Ge, i = !1) {
    if (n) {
        const r = n[t] || (n[t] = []), o = e.__weh || (e.__weh = (...a) => {
            if (n.isUnmounted) return;
            Dt();
            const c = On(n), h = st(e, n, t, a);
            return c(), jt(), h
        });
        return i ? r.unshift(o) : r.push(o), o
    }
}

const vt = t => (e, n = Ge) => (!_i || t === "sp") && vi(t, (...i) => e(...i), n), na = vt("bm"), an = vt("m"),
    ia = vt("bu"), ra = vt("u"), dr = vt("bum"), lo = vt("um"), sa = vt("sp"), oa = vt("rtg"), la = vt("rtc");

function aa(t, e = Ge) {
    vi("ec", t, e)
}

function pr(t, e, n, i) {
    let r;
    const o = n && n[i];
    if (q(t) || Ne(t)) {
        r = new Array(t.length);
        for (let a = 0, c = t.length; a < c; a++) r[a] = e(t[a], a, void 0, o && o[a])
    } else if (typeof t == "number") {
        r = new Array(t);
        for (let a = 0; a < t; a++) r[a] = e(a + 1, a, void 0, o && o[a])
    } else if (Ce(t)) if (t[Symbol.iterator]) r = Array.from(t, (a, c) => e(a, c, void 0, o && o[c])); else {
        const a = Object.keys(t);
        r = new Array(a.length);
        for (let c = 0, h = a.length; c < h; c++) {
            const g = a[c];
            r[c] = e(t[g], g, c, o && o[c])
        }
    } else r = [];
    return n && (n[i] = r), r
}

function ao(t, e, n = {}, i, r) {
    if (je.isCE || je.parent && vn(je.parent) && je.parent.isCE) return e !== "default" && (n.name = e), ce("slot", n, i && i());
    let o = t[e];
    o && o._c && (o._d = !1), ee();
    const a = o && co(o(n)),
        c = Rn(Ee, {key: n.key || a && a.key || `_${e}`}, a || (i ? i() : []), a && t._ === 1 ? 64 : -2);
    return !r && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), o && o._c && (o._d = !0), c
}

function co(t) {
    return t.some(e => _o(e) ? !(e.type === St || e.type === Ee && !co(e.children)) : !0) ? t : null
}

const ki = t => t ? Ao(t) ? bi(t) || t.proxy : ki(t.parent) : null, yn = He(Object.create(null), {
    $: t => t,
    $el: t => t.vnode.el,
    $data: t => t.data,
    $props: t => t.props,
    $attrs: t => t.attrs,
    $slots: t => t.slots,
    $refs: t => t.refs,
    $parent: t => ki(t.parent),
    $root: t => ki(t.root),
    $emit: t => t.emit,
    $options: t => mr(t),
    $forceUpdate: t => t.f || (t.f = () => {
        t.effect.dirty = !0, fr(t.update)
    }),
    $nextTick: t => t.n || (t.n = Ws.bind(t.proxy)),
    $watch: t => Jl.bind(t)
}), Fi = (t, e) => t !== Ae && !t.__isScriptSetup && me(t, e), ca = {
    get({_: t}, e) {
        const {ctx: n, setupState: i, data: r, props: o, accessCache: a, type: c, appContext: h} = t;
        let g;
        if (e[0] !== "$") {
            const P = a[e];
            if (P !== void 0) switch (P) {
                case 1:
                    return i[e];
                case 2:
                    return r[e];
                case 4:
                    return n[e];
                case 3:
                    return o[e]
            } else {
                if (Fi(i, e)) return a[e] = 1, i[e];
                if (r !== Ae && me(r, e)) return a[e] = 2, r[e];
                if ((g = t.propsOptions[0]) && me(g, e)) return a[e] = 3, o[e];
                if (n !== Ae && me(n, e)) return a[e] = 4, n[e];
                zi && (a[e] = 0)
            }
        }
        const y = yn[e];
        let A, S;
        if (y) return e === "$attrs" && Xe(t, "get", e), y(t);
        if ((A = c.__cssModules) && (A = A[e])) return A;
        if (n !== Ae && me(n, e)) return a[e] = 4, n[e];
        if (S = h.config.globalProperties, me(S, e)) return S[e]
    }, set({_: t}, e, n) {
        const {data: i, setupState: r, ctx: o} = t;
        return Fi(r, e) ? (r[e] = n, !0) : i !== Ae && me(i, e) ? (i[e] = n, !0) : me(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (o[e] = n, !0)
    }, has({_: {data: t, setupState: e, accessCache: n, ctx: i, appContext: r, propsOptions: o}}, a) {
        let c;
        return !!n[a] || t !== Ae && me(t, a) || Fi(e, a) || (c = o[0]) && me(c, a) || me(i, a) || me(yn, a) || me(r.config.globalProperties, a)
    }, defineProperty(t, e, n) {
        return n.get != null ? t._.accessCache[e] = 0 : me(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n)
    }
};

function kr(t) {
    return q(t) ? t.reduce((e, n) => (e[n] = null, e), {}) : t
}

let zi = !0;

function ua(t) {
    const e = mr(t), n = t.proxy, i = t.ctx;
    zi = !1, e.beforeCreate && zr(e.beforeCreate, t, "bc");
    const {
        data: r,
        computed: o,
        methods: a,
        watch: c,
        provide: h,
        inject: g,
        created: y,
        beforeMount: A,
        mounted: S,
        beforeUpdate: P,
        updated: te,
        activated: X,
        deactivated: oe,
        beforeDestroy: F,
        beforeUnmount: M,
        destroyed: H,
        unmounted: N,
        render: $,
        renderTracked: R,
        renderTriggered: ne,
        errorCaptured: G,
        serverPrefetch: ue,
        expose: Q,
        inheritAttrs: Y,
        components: he,
        directives: Te,
        filters: ge
    } = e;
    if (g && fa(g, i, null), a) for (const L in a) {
        const k = a[L];
        re(k) && (i[L] = k.bind(n))
    }
    if (r) {
        const L = r.call(n, n);
        Ce(L) && (t.data = lr(L))
    }
    if (zi = !0, o) for (const L in o) {
        const k = o[L], de = re(k) ? k.bind(n, n) : re(k.get) ? k.get.bind(n, n) : et,
            Fe = !re(k) && re(k.set) ? k.set.bind(n) : et, J = Vt({get: de, set: Fe});
        Object.defineProperty(i, L, {enumerable: !0, configurable: !0, get: () => J.value, set: le => J.value = le})
    }
    if (c) for (const L in c) uo(c[L], i, n, L);
    if (h) {
        const L = re(h) ? h.call(n) : h;
        Reflect.ownKeys(L).forEach(k => {
            va(k, L[k])
        })
    }
    y && zr(y, t, "c");

    function j(L, k) {
        q(k) ? k.forEach(de => L(de.bind(n))) : k && L(k.bind(n))
    }

    if (j(na, A), j(an, S), j(ia, P), j(ra, te), j(Zl, X), j(ea, oe), j(aa, G), j(la, R), j(oa, ne), j(dr, M), j(lo, N), j(sa, ue), q(Q)) if (Q.length) {
        const L = t.exposed || (t.exposed = {});
        Q.forEach(k => {
            Object.defineProperty(L, k, {get: () => n[k], set: de => n[k] = de})
        })
    } else t.exposed || (t.exposed = {});
    $ && t.render === et && (t.render = $), Y != null && (t.inheritAttrs = Y), he && (t.components = he), Te && (t.directives = Te)
}

function fa(t, e, n = et) {
    q(t) && (t = Hi(t));
    for (const i in t) {
        const r = t[i];
        let o;
        Ce(r) ? "default" in r ? o = $n(r.from || i, r.default, !0) : o = $n(r.from || i) : o = $n(r), Se(o) ? Object.defineProperty(e, i, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: a => o.value = a
        }) : e[i] = o
    }
}

function zr(t, e, n) {
    st(q(t) ? t.map(i => i.bind(e.proxy)) : t.bind(e.proxy), e, n)
}

function uo(t, e, n, i) {
    const r = i.includes(".") ? ro(n, i) : () => n[i];
    if (Ne(t)) {
        const o = e[t];
        re(o) && Yt(r, o)
    } else if (re(t)) Yt(r, t.bind(n)); else if (Ce(t)) if (q(t)) t.forEach(o => uo(o, e, n, i)); else {
        const o = re(t.handler) ? t.handler.bind(n) : e[t.handler];
        re(o) && Yt(r, o, t)
    }
}

function mr(t) {
    const e = t.type, {mixins: n, extends: i} = e, {
        mixins: r,
        optionsCache: o,
        config: {optionMergeStrategies: a}
    } = t.appContext, c = o.get(e);
    let h;
    return c ? h = c : !r.length && !n && !i ? h = e : (h = {}, r.length && r.forEach(g => oi(h, g, a, !0)), oi(h, e, a)), Ce(e) && o.set(e, h), h
}

function oi(t, e, n, i = !1) {
    const {mixins: r, extends: o} = e;
    o && oi(t, o, n, !0), r && r.forEach(a => oi(t, a, n, !0));
    for (const a in e) if (!(i && a === "expose")) {
        const c = ha[a] || n && n[a];
        t[a] = c ? c(t[a], e[a]) : e[a]
    }
    return t
}

const ha = {
    data: Hr,
    props: Kr,
    emits: Kr,
    methods: pn,
    computed: pn,
    beforeCreate: Qe,
    created: Qe,
    beforeMount: Qe,
    mounted: Qe,
    beforeUpdate: Qe,
    updated: Qe,
    beforeDestroy: Qe,
    beforeUnmount: Qe,
    destroyed: Qe,
    unmounted: Qe,
    activated: Qe,
    deactivated: Qe,
    errorCaptured: Qe,
    serverPrefetch: Qe,
    components: pn,
    directives: pn,
    watch: pa,
    provide: Hr,
    inject: da
};

function Hr(t, e) {
    return e ? t ? function () {
        return He(re(t) ? t.call(this, this) : t, re(e) ? e.call(this, this) : e)
    } : e : t
}

function da(t, e) {
    return pn(Hi(t), Hi(e))
}

function Hi(t) {
    if (q(t)) {
        const e = {};
        for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
        return e
    }
    return t
}

function Qe(t, e) {
    return t ? [...new Set([].concat(t, e))] : e
}

function pn(t, e) {
    return t ? He(Object.create(null), t, e) : e
}

function Kr(t, e) {
    return t ? q(t) && q(e) ? [...new Set([...t, ...e])] : He(Object.create(null), kr(t), kr(e ?? {})) : e
}

function pa(t, e) {
    if (!t) return e;
    if (!e) return t;
    const n = He(Object.create(null), t);
    for (const i in e) n[i] = Qe(t[i], e[i]);
    return n
}

function fo() {
    return {
        app: null,
        config: {
            isNativeTag: Zo,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}

let ma = 0;

function ga(t, e) {
    return function (i, r = null) {
        re(i) || (i = He({}, i)), r != null && !Ce(r) && (r = null);
        const o = fo(), a = new WeakSet;
        let c = !1;
        const h = o.app = {
            _uid: ma++,
            _component: i,
            _props: r,
            _container: null,
            _context: o,
            _instance: null,
            version: ka,
            get config() {
                return o.config
            },
            set config(g) {
            },
            use(g, ...y) {
                return a.has(g) || (g && re(g.install) ? (a.add(g), g.install(h, ...y)) : re(g) && (a.add(g), g(h, ...y))), h
            },
            mixin(g) {
                return o.mixins.includes(g) || o.mixins.push(g), h
            },
            component(g, y) {
                return y ? (o.components[g] = y, h) : o.components[g]
            },
            directive(g, y) {
                return y ? (o.directives[g] = y, h) : o.directives[g]
            },
            mount(g, y, A) {
                if (!c) {
                    const S = ce(i, r);
                    return S.appContext = o, A === !0 ? A = "svg" : A === !1 && (A = void 0), y && e ? e(S, g) : t(S, g, A), c = !0, h._container = g, g.__vue_app__ = h, bi(S.component) || S.component.proxy
                }
            },
            unmount() {
                c && (t(null, h._container), delete h._container.__vue_app__)
            },
            provide(g, y) {
                return o.provides[g] = y, h
            },
            runWithContext(g) {
                li = h;
                try {
                    return g()
                } finally {
                    li = null
                }
            }
        };
        return h
    }
}

let li = null;

function va(t, e) {
    if (Ge) {
        let n = Ge.provides;
        const i = Ge.parent && Ge.parent.provides;
        i === n && (n = Ge.provides = Object.create(i)), n[t] = e
    }
}

function $n(t, e, n = !1) {
    const i = Ge || je;
    if (i || li) {
        const r = i ? i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : li._context.provides;
        if (r && t in r) return r[t];
        if (arguments.length > 1) return n && re(e) ? e.call(i && i.proxy) : e
    }
}

function ya(t, e, n, i = !1) {
    const r = {}, o = {};
    ii(o, wi, 1), t.propsDefaults = Object.create(null), ho(t, e, r, o);
    for (const a in t.propsOptions[0]) a in r || (r[a] = void 0);
    n ? t.props = i ? r : Ul(r) : t.type.props ? t.props = r : t.props = o, t.attrs = o
}

function wa(t, e, n, i) {
    const {props: r, attrs: o, vnode: {patchFlag: a}} = t, c = ve(r), [h] = t.propsOptions;
    let g = !1;
    if ((i || a > 0) && !(a & 16)) {
        if (a & 8) {
            const y = t.vnode.dynamicProps;
            for (let A = 0; A < y.length; A++) {
                let S = y[A];
                if (mi(t.emitsOptions, S)) continue;
                const P = e[S];
                if (h) if (me(o, S)) P !== o[S] && (o[S] = P, g = !0); else {
                    const te = ft(S);
                    r[te] = Ki(h, c, te, P, t, !1)
                } else P !== o[S] && (o[S] = P, g = !0)
            }
        }
    } else {
        ho(t, e, r, o) && (g = !0);
        let y;
        for (const A in c) (!e || !me(e, A) && ((y = ln(A)) === A || !me(e, y))) && (h ? n && (n[A] !== void 0 || n[y] !== void 0) && (r[A] = Ki(h, c, A, void 0, t, !0)) : delete r[A]);
        if (o !== c) for (const A in o) (!e || !me(e, A)) && (delete o[A], g = !0)
    }
    g && mt(t, "set", "$attrs")
}

function ho(t, e, n, i) {
    const [r, o] = t.propsOptions;
    let a = !1, c;
    if (e) for (let h in e) {
        if (Hn(h)) continue;
        const g = e[h];
        let y;
        r && me(r, y = ft(h)) ? !o || !o.includes(y) ? n[y] = g : (c || (c = {}))[y] = g : mi(t.emitsOptions, h) || (!(h in i) || g !== i[h]) && (i[h] = g, a = !0)
    }
    if (o) {
        const h = ve(n), g = c || Ae;
        for (let y = 0; y < o.length; y++) {
            const A = o[y];
            n[A] = Ki(r, h, A, g[A], t, !me(g, A))
        }
    }
    return a
}

function Ki(t, e, n, i, r, o) {
    const a = t[n];
    if (a != null) {
        const c = me(a, "default");
        if (c && i === void 0) {
            const h = a.default;
            if (a.type !== Function && !a.skipFactory && re(h)) {
                const {propsDefaults: g} = r;
                if (n in g) i = g[n]; else {
                    const y = On(r);
                    i = g[n] = h.call(null, e), y()
                }
            } else i = h
        }
        a[0] && (o && !c ? i = !1 : a[1] && (i === "" || i === ln(n)) && (i = !0))
    }
    return i
}

function po(t, e, n = !1) {
    const i = e.propsCache, r = i.get(t);
    if (r) return r;
    const o = t.props, a = {}, c = [];
    let h = !1;
    if (!re(t)) {
        const y = A => {
            h = !0;
            const [S, P] = po(A, e, !0);
            He(a, S), P && c.push(...P)
        };
        !n && e.mixins.length && e.mixins.forEach(y), t.extends && y(t.extends), t.mixins && t.mixins.forEach(y)
    }
    if (!o && !h) return Ce(t) && i.set(t, Gt), Gt;
    if (q(o)) for (let y = 0; y < o.length; y++) {
        const A = ft(o[y]);
        Gr(A) && (a[A] = Ae)
    } else if (o) for (const y in o) {
        const A = ft(y);
        if (Gr(A)) {
            const S = o[y], P = a[A] = q(S) || re(S) ? {type: S} : He({}, S);
            if (P) {
                const te = Wr(Boolean, P.type), X = Wr(String, P.type);
                P[0] = te > -1, P[1] = X < 0 || te < X, (te > -1 || me(P, "default")) && c.push(A)
            }
        }
    }
    const g = [a, c];
    return Ce(t) && i.set(t, g), g
}

function Gr(t) {
    return t[0] !== "$"
}

function $r(t) {
    const e = t && t.toString().match(/^\s*(function|class) (\w+)/);
    return e ? e[2] : t === null ? "null" : ""
}

function Qr(t, e) {
    return $r(t) === $r(e)
}

function Wr(t, e) {
    return q(e) ? e.findIndex(n => Qr(n, t)) : re(e) && Qr(e, t) ? 0 : -1
}

const mo = t => t[0] === "_" || t === "$stable", gr = t => q(t) ? t.map(at) : [at(t)], xa = (t, e, n) => {
    if (e._n) return e;
    const i = Zs((...r) => gr(e(...r)), n);
    return i._c = !1, i
}, go = (t, e, n) => {
    const i = t._ctx;
    for (const r in t) {
        if (mo(r)) continue;
        const o = t[r];
        if (re(o)) e[r] = xa(r, o, i); else if (o != null) {
            const a = gr(o);
            e[r] = () => a
        }
    }
}, vo = (t, e) => {
    const n = gr(e);
    t.slots.default = () => n
}, _a = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
        const n = e._;
        n ? (t.slots = ve(e), ii(e, "_", n)) : go(e, t.slots = {})
    } else t.slots = {}, e && vo(t, e);
    ii(t.slots, wi, 1)
}, ba = (t, e, n) => {
    const {vnode: i, slots: r} = t;
    let o = !0, a = Ae;
    if (i.shapeFlag & 32) {
        const c = e._;
        c ? n && c === 1 ? o = !1 : (He(r, e), !n && c === 1 && delete r._) : (o = !e.$stable, go(e, r)), a = e
    } else e && (vo(t, e), a = {default: 1});
    if (o) for (const c in r) !mo(c) && a[c] == null && delete r[c]
};

function Gi(t, e, n, i, r = !1) {
    if (q(t)) {
        t.forEach((S, P) => Gi(S, e && (q(e) ? e[P] : e), n, i, r));
        return
    }
    if (vn(i) && !r) return;
    const o = i.shapeFlag & 4 ? bi(i.component) || i.component.proxy : i.el, a = r ? null : o, {i: c, r: h} = t,
        g = e && e.r, y = c.refs === Ae ? c.refs = {} : c.refs, A = c.setupState;
    if (g != null && g !== h && (Ne(g) ? (y[g] = null, me(A, g) && (A[g] = null)) : Se(g) && (g.value = null)), re(h)) Ct(h, c, 12, [a, y]); else {
        const S = Ne(h), P = Se(h), te = t.f;
        if (S || P) {
            const X = () => {
                if (te) {
                    const oe = S ? me(A, h) ? A[h] : y[h] : h.value;
                    r ? q(oe) && Zi(oe, o) : q(oe) ? oe.includes(o) || oe.push(o) : S ? (y[h] = [o], me(A, h) && (A[h] = y[h])) : (h.value = [o], t.k && (y[t.k] = h.value))
                } else S ? (y[h] = a, me(A, h) && (A[h] = a)) : P && (h.value = a, t.k && (y[t.k] = a))
            };
            r || te ? X() : (X.id = -1, qe(X, n))
        }
    }
}

const qe = Yl;

function Aa(t) {
    return Ea(t)
}

function Ea(t, e) {
    const n = Cs();
    n.__VUE__ = !0;
    const {
            insert: i,
            remove: r,
            patchProp: o,
            createElement: a,
            createText: c,
            createComment: h,
            setText: g,
            setElementText: y,
            parentNode: A,
            nextSibling: S,
            setScopeId: P = et,
            insertStaticContent: te
        } = t, X = (d, m, x, B = null, C = null, O = null, V = void 0, T = null, U = !!m.dynamicChildren) => {
            if (d === m) return;
            d && !un(d, m) && (B = fe(d), le(d, C, O, !0), d = null), m.patchFlag === -2 && (U = !1, m.dynamicChildren = null);
            const {type: I, ref: D, shapeFlag: W} = m;
            switch (I) {
                case yi:
                    oe(d, m, x, B);
                    break;
                case St:
                    F(d, m, x, B);
                    break;
                case Ri:
                    d == null && M(m, x, B, V);
                    break;
                case Ee:
                    he(d, m, x, B, C, O, V, T, U);
                    break;
                default:
                    W & 1 ? $(d, m, x, B, C, O, V, T, U) : W & 6 ? Te(d, m, x, B, C, O, V, T, U) : (W & 64 || W & 128) && I.process(d, m, x, B, C, O, V, T, U, pt)
            }
            D != null && C && Gi(D, d && d.ref, O, m || d, !m)
        }, oe = (d, m, x, B) => {
            if (d == null) i(m.el = c(m.children), x, B); else {
                const C = m.el = d.el;
                m.children !== d.children && g(C, m.children)
            }
        }, F = (d, m, x, B) => {
            d == null ? i(m.el = h(m.children || ""), x, B) : m.el = d.el
        }, M = (d, m, x, B) => {
            [d.el, d.anchor] = te(d.children, m, x, B, d.el, d.anchor)
        }, H = ({el: d, anchor: m}, x, B) => {
            let C;
            for (; d && d !== m;) C = S(d), i(d, x, B), d = C;
            i(m, x, B)
        }, N = ({el: d, anchor: m}) => {
            let x;
            for (; d && d !== m;) x = S(d), r(d), d = x;
            r(m)
        }, $ = (d, m, x, B, C, O, V, T, U) => {
            m.type === "svg" ? V = "svg" : m.type === "math" && (V = "mathml"), d == null ? R(m, x, B, C, O, V, T, U) : ue(d, m, C, O, V, T, U)
        }, R = (d, m, x, B, C, O, V, T) => {
            let U, I;
            const {props: D, shapeFlag: W, transition: z, dirs: Z} = d;
            if (U = d.el = a(d.type, O, D && D.is, D), W & 8 ? y(U, d.children) : W & 16 && G(d.children, U, null, B, C, Si(d, O), V, T), Z && Rt(d, null, B, "created"), ne(U, d, d.scopeId, V, B), D) {
                for (const s in D) s !== "value" && !Hn(s) && o(U, s, null, D[s], O, d.children, B, C, _e);
                "value" in D && o(U, "value", null, D.value, O), (I = D.onVnodeBeforeMount) && lt(I, B, d)
            }
            Z && Rt(d, null, B, "beforeMount");
            const u = Ia(C, z);
            u && z.beforeEnter(U), i(U, m, x), ((I = D && D.onVnodeMounted) || u || Z) && qe(() => {
                I && lt(I, B, d), u && z.enter(U), Z && Rt(d, null, B, "mounted")
            }, C)
        }, ne = (d, m, x, B, C) => {
            if (x && P(d, x), B) for (let O = 0; O < B.length; O++) P(d, B[O]);
            if (C) {
                let O = C.subTree;
                if (m === O) {
                    const V = C.vnode;
                    ne(d, V, V.scopeId, V.slotScopeIds, C.parent)
                }
            }
        }, G = (d, m, x, B, C, O, V, T, U = 0) => {
            for (let I = U; I < d.length; I++) {
                const D = d[I] = T ? bt(d[I]) : at(d[I]);
                X(null, D, m, x, B, C, O, V, T)
            }
        }, ue = (d, m, x, B, C, O, V) => {
            const T = m.el = d.el;
            let {patchFlag: U, dynamicChildren: I, dirs: D} = m;
            U |= d.patchFlag & 16;
            const W = d.props || Ae, z = m.props || Ae;
            let Z;
            if (x && Ot(x, !1), (Z = z.onVnodeBeforeUpdate) && lt(Z, x, m, d), D && Rt(m, d, x, "beforeUpdate"), x && Ot(x, !0), I ? Q(d.dynamicChildren, I, T, x, B, Si(m, C), O) : V || k(d, m, T, null, x, B, Si(m, C), O, !1), U > 0) {
                if (U & 16) Y(T, m, W, z, x, B, C); else if (U & 2 && W.class !== z.class && o(T, "class", null, z.class, C), U & 4 && o(T, "style", W.style, z.style, C), U & 8) {
                    const u = m.dynamicProps;
                    for (let s = 0; s < u.length; s++) {
                        const l = u[s], f = W[l], p = z[l];
                        (p !== f || l === "value") && o(T, l, f, p, C, d.children, x, B, _e)
                    }
                }
                U & 1 && d.children !== m.children && y(T, m.children)
            } else !V && I == null && Y(T, m, W, z, x, B, C);
            ((Z = z.onVnodeUpdated) || D) && qe(() => {
                Z && lt(Z, x, m, d), D && Rt(m, d, x, "updated")
            }, B)
        }, Q = (d, m, x, B, C, O, V) => {
            for (let T = 0; T < m.length; T++) {
                const U = d[T], I = m[T], D = U.el && (U.type === Ee || !un(U, I) || U.shapeFlag & 70) ? A(U.el) : x;
                X(U, I, D, null, B, C, O, V, !0)
            }
        }, Y = (d, m, x, B, C, O, V) => {
            if (x !== B) {
                if (x !== Ae) for (const T in x) !Hn(T) && !(T in B) && o(d, T, x[T], null, V, m.children, C, O, _e);
                for (const T in B) {
                    if (Hn(T)) continue;
                    const U = B[T], I = x[T];
                    U !== I && T !== "value" && o(d, T, I, U, V, m.children, C, O, _e)
                }
                "value" in B && o(d, "value", x.value, B.value, V)
            }
        }, he = (d, m, x, B, C, O, V, T, U) => {
            const I = m.el = d ? d.el : c(""), D = m.anchor = d ? d.anchor : c("");
            let {patchFlag: W, dynamicChildren: z, slotScopeIds: Z} = m;
            Z && (T = T ? T.concat(Z) : Z), d == null ? (i(I, x, B), i(D, x, B), G(m.children || [], x, D, C, O, V, T, U)) : W > 0 && W & 64 && z && d.dynamicChildren ? (Q(d.dynamicChildren, z, x, C, O, V, T), (m.key != null || C && m === C.subTree) && yo(d, m, !0)) : k(d, m, x, D, C, O, V, T, U)
        }, Te = (d, m, x, B, C, O, V, T, U) => {
            m.slotScopeIds = T, d == null ? m.shapeFlag & 512 ? C.ctx.activate(m, x, B, V, U) : ge(m, x, B, C, O, V, U) : w(d, m, U)
        }, ge = (d, m, x, B, C, O, V) => {
            const T = d.component = La(d, B, C);
            if (so(d) && (T.ctx.renderer = pt), Pa(T), T.asyncDep) {
                if (C && C.registerDep(T, j), !d.el) {
                    const U = T.subTree = ce(St);
                    F(null, U, m, x)
                }
            } else j(T, d, m, x, C, O, V)
        }, w = (d, m, x) => {
            const B = m.component = d.component;
            if ($l(d, m, x)) if (B.asyncDep && !B.asyncResolved) {
                L(B, m, x);
                return
            } else B.next = m, jl(B.update), B.effect.dirty = !0, B.update(); else m.el = d.el, B.vnode = m
        }, j = (d, m, x, B, C, O, V) => {
            const T = () => {
                if (d.isMounted) {
                    let {next: D, bu: W, u: z, parent: Z, vnode: u} = d;
                    {
                        const v = wo(d);
                        if (v) {
                            D && (D.el = u.el, L(d, D, V)), v.asyncDep.then(() => {
                                d.isUnmounted || T()
                            });
                            return
                        }
                    }
                    let s = D, l;
                    Ot(d, !1), D ? (D.el = u.el, L(d, D, V)) : D = u, W && Kn(W), (l = D.props && D.props.onVnodeBeforeUpdate) && lt(l, Z, D, u), Ot(d, !0);
                    const f = Ti(d), p = d.subTree;
                    d.subTree = f, X(p, f, A(p.el), fe(p), d, C, O), D.el = f.el, s === null && Ql(d, f.el), z && qe(z, C), (l = D.props && D.props.onVnodeUpdated) && qe(() => lt(l, Z, D, u), C)
                } else {
                    let D;
                    const {el: W, props: z} = m, {bm: Z, m: u, parent: s} = d, l = vn(m);
                    if (Ot(d, !1), Z && Kn(Z), !l && (D = z && z.onVnodeBeforeMount) && lt(D, s, m), Ot(d, !0), W && kt) {
                        const f = () => {
                            d.subTree = Ti(d), kt(W, d.subTree, d, C, null)
                        };
                        l ? m.type.__asyncLoader().then(() => !d.isUnmounted && f()) : f()
                    } else {
                        const f = d.subTree = Ti(d);
                        X(null, f, x, B, d, C, O), m.el = f.el
                    }
                    if (u && qe(u, C), !l && (D = z && z.onVnodeMounted)) {
                        const f = m;
                        qe(() => lt(D, s, f), C)
                    }
                    (m.shapeFlag & 256 || s && vn(s.vnode) && s.vnode.shapeFlag & 256) && d.a && qe(d.a, C), d.isMounted = !0, m = x = B = null
                }
            }, U = d.effect = new nr(T, et, () => fr(I), d.scope), I = d.update = () => {
                U.dirty && U.run()
            };
            I.id = d.uid, Ot(d, !0), I()
        }, L = (d, m, x) => {
            m.component = d;
            const B = d.vnode.props;
            d.vnode = m, d.next = null, wa(d, m.props, B, x), ba(d, m.children, x), Dt(), Vr(d), jt()
        }, k = (d, m, x, B, C, O, V, T, U = !1) => {
            const I = d && d.children, D = d ? d.shapeFlag : 0, W = m.children, {patchFlag: z, shapeFlag: Z} = m;
            if (z > 0) {
                if (z & 128) {
                    Fe(I, W, x, B, C, O, V, T, U);
                    return
                } else if (z & 256) {
                    de(I, W, x, B, C, O, V, T, U);
                    return
                }
            }
            Z & 8 ? (D & 16 && _e(I, C, O), W !== I && y(x, W)) : D & 16 ? Z & 16 ? Fe(I, W, x, B, C, O, V, T, U) : _e(I, C, O, !0) : (D & 8 && y(x, ""), Z & 16 && G(W, x, B, C, O, V, T, U))
        }, de = (d, m, x, B, C, O, V, T, U) => {
            d = d || Gt, m = m || Gt;
            const I = d.length, D = m.length, W = Math.min(I, D);
            let z;
            for (z = 0; z < W; z++) {
                const Z = m[z] = U ? bt(m[z]) : at(m[z]);
                X(d[z], Z, x, null, C, O, V, T, U)
            }
            I > D ? _e(d, C, O, !0, !1, W) : G(m, x, B, C, O, V, T, U, W)
        }, Fe = (d, m, x, B, C, O, V, T, U) => {
            let I = 0;
            const D = m.length;
            let W = d.length - 1, z = D - 1;
            for (; I <= W && I <= z;) {
                const Z = d[I], u = m[I] = U ? bt(m[I]) : at(m[I]);
                if (un(Z, u)) X(Z, u, x, null, C, O, V, T, U); else break;
                I++
            }
            for (; I <= W && I <= z;) {
                const Z = d[W], u = m[z] = U ? bt(m[z]) : at(m[z]);
                if (un(Z, u)) X(Z, u, x, null, C, O, V, T, U); else break;
                W--, z--
            }
            if (I > W) {
                if (I <= z) {
                    const Z = z + 1, u = Z < D ? m[Z].el : B;
                    for (; I <= z;) X(null, m[I] = U ? bt(m[I]) : at(m[I]), x, u, C, O, V, T, U), I++
                }
            } else if (I > z) for (; I <= W;) le(d[I], C, O, !0), I++; else {
                const Z = I, u = I, s = new Map;
                for (I = u; I <= z; I++) {
                    const ae = m[I] = U ? bt(m[I]) : at(m[I]);
                    ae.key != null && s.set(ae.key, I)
                }
                let l, f = 0;
                const p = z - u + 1;
                let v = !1, b = 0;
                const ie = new Array(p);
                for (I = 0; I < p; I++) ie[I] = 0;
                for (I = Z; I <= W; I++) {
                    const ae = d[I];
                    if (f >= p) {
                        le(ae, C, O, !0);
                        continue
                    }
                    let pe;
                    if (ae.key != null) pe = s.get(ae.key); else for (l = u; l <= z; l++) if (ie[l - u] === 0 && un(ae, m[l])) {
                        pe = l;
                        break
                    }
                    pe === void 0 ? le(ae, C, O, !0) : (ie[pe - u] = I + 1, pe >= b ? b = pe : v = !0, X(ae, m[pe], x, null, C, O, V, T, U), f++)
                }
                const be = v ? Ca(ie) : Gt;
                for (l = be.length - 1, I = p - 1; I >= 0; I--) {
                    const ae = u + I, pe = m[ae], we = ae + 1 < D ? m[ae + 1].el : B;
                    ie[I] === 0 ? X(null, pe, x, we, C, O, V, T, U) : v && (l < 0 || I !== be[l] ? J(pe, x, we, 2) : l--)
                }
            }
        }, J = (d, m, x, B, C = null) => {
            const {el: O, type: V, transition: T, children: U, shapeFlag: I} = d;
            if (I & 6) {
                J(d.component.subTree, m, x, B);
                return
            }
            if (I & 128) {
                d.suspense.move(m, x, B);
                return
            }
            if (I & 64) {
                V.move(d, m, x, pt);
                return
            }
            if (V === Ee) {
                i(O, m, x);
                for (let W = 0; W < U.length; W++) J(U[W], m, x, B);
                i(d.anchor, m, x);
                return
            }
            if (V === Ri) {
                H(d, m, x);
                return
            }
            if (B !== 2 && I & 1 && T) if (B === 0) T.beforeEnter(O), i(O, m, x), qe(() => T.enter(O), C); else {
                const {leave: W, delayLeave: z, afterLeave: Z} = T, u = () => i(O, m, x), s = () => {
                    W(O, () => {
                        u(), Z && Z()
                    })
                };
                z ? z(O, u, s) : s()
            } else i(O, m, x)
        }, le = (d, m, x, B = !1, C = !1) => {
            const {type: O, props: V, ref: T, children: U, dynamicChildren: I, shapeFlag: D, patchFlag: W, dirs: z} = d;
            if (T != null && Gi(T, null, x, d, !0), D & 256) {
                m.ctx.deactivate(d);
                return
            }
            const Z = D & 1 && z, u = !vn(d);
            let s;
            if (u && (s = V && V.onVnodeBeforeUnmount) && lt(s, m, d), D & 6) Be(d.component, x, B); else {
                if (D & 128) {
                    d.suspense.unmount(x, B);
                    return
                }
                Z && Rt(d, null, m, "beforeUnmount"), D & 64 ? d.type.remove(d, m, x, C, pt, B) : I && (O !== Ee || W > 0 && W & 64) ? _e(I, m, x, !1, !0) : (O === Ee && W & 384 || !C && D & 16) && _e(U, m, x), B && Ue(d)
            }
            (u && (s = V && V.onVnodeUnmounted) || Z) && qe(() => {
                s && lt(s, m, d), Z && Rt(d, null, m, "unmounted")
            }, x)
        }, Ue = d => {
            const {type: m, el: x, anchor: B, transition: C} = d;
            if (m === Ee) {
                Je(x, B);
                return
            }
            if (m === Ri) {
                N(d);
                return
            }
            const O = () => {
                r(x), C && !C.persisted && C.afterLeave && C.afterLeave()
            };
            if (d.shapeFlag & 1 && C && !C.persisted) {
                const {leave: V, delayLeave: T} = C, U = () => V(x, O);
                T ? T(d.el, O, U) : U()
            } else O()
        }, Je = (d, m) => {
            let x;
            for (; d !== m;) x = S(d), r(d), d = x;
            r(m)
        }, Be = (d, m, x) => {
            const {bum: B, scope: C, update: O, subTree: V, um: T} = d;
            B && Kn(B), C.stop(), O && (O.active = !1, le(V, d, m, x)), T && qe(T, m), qe(() => {
                d.isUnmounted = !0
            }, m), m && m.pendingBranch && !m.isUnmounted && d.asyncDep && !d.asyncResolved && d.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve())
        }, _e = (d, m, x, B = !1, C = !1, O = 0) => {
            for (let V = O; V < d.length; V++) le(d[V], m, x, B, C)
        },
        fe = d => d.shapeFlag & 6 ? fe(d.component.subTree) : d.shapeFlag & 128 ? d.suspense.next() : S(d.anchor || d.el);
    let ze = !1;
    const dt = (d, m, x) => {
        d == null ? m._vnode && le(m._vnode, null, null, !0) : X(m._vnode || null, d, m, null, null, null, x), ze || (ze = !0, Vr(), qs(), ze = !1), m._vnode = d
    }, pt = {p: X, um: le, m: J, r: Ue, mt: ge, mc: G, pc: k, pbc: Q, n: fe, o: t};
    let cn, kt;
    return e && ([cn, kt] = e(pt)), {render: dt, hydrate: cn, createApp: ga(dt, cn)}
}

function Si({type: t, props: e}, n) {
    return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n
}

function Ot({effect: t, update: e}, n) {
    t.allowRecurse = e.allowRecurse = n
}

function Ia(t, e) {
    return (!t || t && !t.pendingBranch) && e && !e.persisted
}

function yo(t, e, n = !1) {
    const i = t.children, r = e.children;
    if (q(i) && q(r)) for (let o = 0; o < i.length; o++) {
        const a = i[o];
        let c = r[o];
        c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = bt(r[o]), c.el = a.el), n || yo(a, c)), c.type === yi && (c.el = a.el)
    }
}

function Ca(t) {
    const e = t.slice(), n = [0];
    let i, r, o, a, c;
    const h = t.length;
    for (i = 0; i < h; i++) {
        const g = t[i];
        if (g !== 0) {
            if (r = n[n.length - 1], t[r] < g) {
                e[i] = r, n.push(i);
                continue
            }
            for (o = 0, a = n.length - 1; o < a;) c = o + a >> 1, t[n[c]] < g ? o = c + 1 : a = c;
            g < t[n[o]] && (o > 0 && (e[i] = n[o - 1]), n[o] = i)
        }
    }
    for (o = n.length, a = n[o - 1]; o-- > 0;) n[o] = a, a = e[a];
    return n
}

function wo(t) {
    const e = t.subTree.component;
    if (e) return e.asyncDep && !e.asyncResolved ? e : wo(e)
}

const Ba = t => t.__isTeleport, Ee = Symbol.for("v-fgt"), yi = Symbol.for("v-txt"), St = Symbol.for("v-cmt"),
    Ri = Symbol.for("v-stc"), wn = [];
let rt = null;

function ee(t = !1) {
    wn.push(rt = t ? null : [])
}

function Ta() {
    wn.pop(), rt = wn[wn.length - 1] || null
}

let Cn = 1;

function Yr(t) {
    Cn += t
}

function xo(t) {
    return t.dynamicChildren = Cn > 0 ? rt || Gt : null, Ta(), Cn > 0 && rt && rt.push(t), t
}

function se(t, e, n, i, r, o) {
    return xo(E(t, e, n, i, r, o, !0))
}

function Rn(t, e, n, i, r) {
    return xo(ce(t, e, n, i, r, !0))
}

function _o(t) {
    return t ? t.__v_isVNode === !0 : !1
}

function un(t, e) {
    return t.type === e.type && t.key === e.key
}

const wi = "__vInternal", bo = ({key: t}) => t ?? null, Qn = ({
                                                                  ref: t,
                                                                  ref_key: e,
                                                                  ref_for: n
                                                              }) => (typeof t == "number" && (t = "" + t), t != null ? Ne(t) || Se(t) || re(t) ? {
    i: je,
    r: t,
    k: e,
    f: !!n
} : t : null);

function E(t, e = null, n = null, i = 0, r = null, o = t === Ee ? 0 : 1, a = !1, c = !1) {
    const h = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t,
        props: e,
        key: e && bo(e),
        ref: e && Qn(e),
        scopeId: gi,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: i,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: je
    };
    return c ? (vr(h, n), o & 128 && t.normalize(h)) : n && (h.shapeFlag |= Ne(n) ? 8 : 16), Cn > 0 && !a && rt && (h.patchFlag > 0 || o & 6) && h.patchFlag !== 32 && rt.push(h), h
}

const ce = Fa;

function Fa(t, e = null, n = null, i = 0, r = null, o = !1) {
    if ((!t || t === eo) && (t = St), _o(t)) {
        const c = en(t, e, !0);
        return n && vr(c, n), Cn > 0 && !o && rt && (c.shapeFlag & 6 ? rt[rt.indexOf(t)] = c : rt.push(c)), c.patchFlag |= -2, c
    }
    if (ja(t) && (t = t.__vccOpts), e) {
        e = Sa(e);
        let {class: c, style: h} = e;
        c && !Ne(c) && (e.class = Xt(c)), Ce(h) && (zs(h) && !q(h) && (h = He({}, h)), e.style = hi(h))
    }
    const a = Ne(t) ? 1 : Wl(t) ? 128 : Ba(t) ? 64 : Ce(t) ? 4 : re(t) ? 2 : 0;
    return E(t, e, n, i, r, a, o, !0)
}

function Sa(t) {
    return t ? zs(t) || wi in t ? He({}, t) : t : null
}

function en(t, e, n = !1) {
    const {props: i, ref: r, patchFlag: o, children: a} = t, c = e ? Ra(i || {}, e) : i;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: t.type,
        props: c,
        key: c && bo(c),
        ref: e && e.ref ? n && r ? q(r) ? r.concat(Qn(e)) : [r, Qn(e)] : Qn(e) : r,
        scopeId: t.scopeId,
        slotScopeIds: t.slotScopeIds,
        children: a,
        target: t.target,
        targetAnchor: t.targetAnchor,
        staticCount: t.staticCount,
        shapeFlag: t.shapeFlag,
        patchFlag: e && t.type !== Ee ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: t.dynamicProps,
        dynamicChildren: t.dynamicChildren,
        appContext: t.appContext,
        dirs: t.dirs,
        transition: t.transition,
        component: t.component,
        suspense: t.suspense,
        ssContent: t.ssContent && en(t.ssContent),
        ssFallback: t.ssFallback && en(t.ssFallback),
        el: t.el,
        anchor: t.anchor,
        ctx: t.ctx,
        ce: t.ce
    }
}

function Le(t = " ", e = 0) {
    return ce(yi, null, t, e)
}

function xi(t = "", e = !1) {
    return e ? (ee(), Rn(St, null, t)) : ce(St, null, t)
}

function at(t) {
    return t == null || typeof t == "boolean" ? ce(St) : q(t) ? ce(Ee, null, t.slice()) : typeof t == "object" ? bt(t) : ce(yi, null, String(t))
}

function bt(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : en(t)
}

function vr(t, e) {
    let n = 0;
    const {shapeFlag: i} = t;
    if (e == null) e = null; else if (q(e)) n = 16; else if (typeof e == "object") if (i & 65) {
        const r = e.default;
        r && (r._c && (r._d = !1), vr(t, r()), r._c && (r._d = !0));
        return
    } else {
        n = 32;
        const r = e._;
        !r && !(wi in e) ? e._ctx = je : r === 3 && je && (je.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024))
    } else re(e) ? (e = {default: e, _ctx: je}, n = 32) : (e = String(e), i & 64 ? (n = 16, e = [Le(e)]) : n = 8);
    t.children = e, t.shapeFlag |= n
}

function Ra(...t) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
        const i = t[n];
        for (const r in i) if (r === "class") e.class !== i.class && (e.class = Xt([e.class, i.class])); else if (r === "style") e.style = hi([e.style, i.style]); else if (ci(r)) {
            const o = e[r], a = i[r];
            a && o !== a && !(q(o) && o.includes(a)) && (e[r] = o ? [].concat(o, a) : a)
        } else r !== "" && (e[r] = i[r])
    }
    return e
}

function lt(t, e, n, i = null) {
    st(t, e, 7, [n, i])
}

const Oa = fo();
let Ua = 0;

function La(t, e, n) {
    const i = t.type, r = (e ? e.appContext : t.appContext) || Oa, o = {
        uid: Ua++,
        vnode: t,
        type: i,
        parent: e,
        appContext: r,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new fl(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: e ? e.provides : Object.create(r.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: po(i, r),
        emitsOptions: Js(i, r),
        emit: null,
        emitted: null,
        propsDefaults: Ae,
        inheritAttrs: i.inheritAttrs,
        ctx: Ae,
        data: Ae,
        props: Ae,
        attrs: Ae,
        slots: Ae,
        refs: Ae,
        setupState: Ae,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return o.ctx = {_: o}, o.root = e ? e.root : o, o.emit = Hl.bind(null, o), t.ce && t.ce(o), o
}

let Ge = null, ai, $i;
{
    const t = Cs(), e = (n, i) => {
        let r;
        return (r = t[n]) || (r = t[n] = []), r.push(i), o => {
            r.length > 1 ? r.forEach(a => a(o)) : r[0](o)
        }
    };
    ai = e("__VUE_INSTANCE_SETTERS__", n => Ge = n), $i = e("__VUE_SSR_SETTERS__", n => _i = n)
}
const On = t => {
    const e = Ge;
    return ai(t), t.scope.on(), () => {
        t.scope.off(), ai(e)
    }
}, qr = () => {
    Ge && Ge.scope.off(), ai(null)
};

function Ao(t) {
    return t.vnode.shapeFlag & 4
}

let _i = !1;

function Pa(t, e = !1) {
    e && $i(e);
    const {props: n, children: i} = t.vnode, r = Ao(t);
    ya(t, n, r, e), _a(t, i);
    const o = r ? Ma(t, e) : void 0;
    return e && $i(!1), o
}

function Ma(t, e) {
    const n = t.type;
    t.accessCache = Object.create(null), t.proxy = Hs(new Proxy(t.ctx, ca));
    const {setup: i} = n;
    if (i) {
        const r = t.setupContext = i.length > 1 ? Va(t) : null, o = On(t);
        Dt();
        const a = Ct(i, t, 0, [t.props, r]);
        if (jt(), o(), As(a)) {
            if (a.then(qr, qr), e) return a.then(c => {
                Xr(t, c, e)
            }).catch(c => {
                pi(c, t, 0)
            });
            t.asyncDep = a
        } else Xr(t, a, e)
    } else Eo(t, e)
}

function Xr(t, e, n) {
    re(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Ce(e) && (t.setupState = $s(e)), Eo(t, n)
}

let Jr;

function Eo(t, e, n) {
    const i = t.type;
    if (!t.render) {
        if (!e && Jr && !i.render) {
            const r = i.template || mr(t).template;
            if (r) {
                const {isCustomElement: o, compilerOptions: a} = t.appContext.config, {
                    delimiters: c,
                    compilerOptions: h
                } = i, g = He(He({isCustomElement: o, delimiters: c}, a), h);
                i.render = Jr(r, g)
            }
        }
        t.render = i.render || et
    }
    {
        const r = On(t);
        Dt();
        try {
            ua(t)
        } finally {
            jt(), r()
        }
    }
}

function Na(t) {
    return t.attrsProxy || (t.attrsProxy = new Proxy(t.attrs, {
        get(e, n) {
            return Xe(t, "get", "$attrs"), e[n]
        }
    }))
}

function Va(t) {
    const e = n => {
        t.exposed = n || {}
    };
    return {
        get attrs() {
            return Na(t)
        }, slots: t.slots, emit: t.emit, expose: e
    }
}

function bi(t) {
    if (t.exposed) return t.exposeProxy || (t.exposeProxy = new Proxy($s(Hs(t.exposed)), {
        get(e, n) {
            if (n in e) return e[n];
            if (n in yn) return yn[n](t)
        }, has(e, n) {
            return n in e || n in yn
        }
    }))
}

function Da(t, e = !0) {
    return re(t) ? t.displayName || t.name : t.name || e && t.__name
}

function ja(t) {
    return re(t) && "__vccOpts" in t
}

const Vt = (t, e) => Ll(t, e, _i), ka = "3.4.15";
/**
 * @vue/runtime-dom v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/const za = "http://www.w3.org/2000/svg", Ha = "http://www.w3.org/1998/Math/MathML",
    At = typeof document < "u" ? document : null, Zr = At && At.createElement("template"), Ka = {
        insert: (t, e, n) => {
            e.insertBefore(t, n || null)
        },
        remove: t => {
            const e = t.parentNode;
            e && e.removeChild(t)
        },
        createElement: (t, e, n, i) => {
            const r = e === "svg" ? At.createElementNS(za, t) : e === "mathml" ? At.createElementNS(Ha, t) : At.createElement(t, n ? {is: n} : void 0);
            return t === "select" && i && i.multiple != null && r.setAttribute("multiple", i.multiple), r
        },
        createText: t => At.createTextNode(t),
        createComment: t => At.createComment(t),
        setText: (t, e) => {
            t.nodeValue = e
        },
        setElementText: (t, e) => {
            t.textContent = e
        },
        parentNode: t => t.parentNode,
        nextSibling: t => t.nextSibling,
        querySelector: t => At.querySelector(t),
        setScopeId(t, e) {
            t.setAttribute(e, "")
        },
        insertStaticContent(t, e, n, i, r, o) {
            const a = n ? n.previousSibling : e.lastChild;
            if (r && (r === o || r.nextSibling)) for (; e.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling));) ; else {
                Zr.innerHTML = i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t;
                const c = Zr.content;
                if (i === "svg" || i === "mathml") {
                    const h = c.firstChild;
                    for (; h.firstChild;) c.appendChild(h.firstChild);
                    c.removeChild(h)
                }
                e.insertBefore(c, n)
            }
            return [a ? a.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
        }
    }, Ga = Symbol("_vtc");

function $a(t, e, n) {
    const i = t[Ga];
    i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}

const yr = Symbol("_vod"), Un = {
    beforeMount(t, {value: e}, {transition: n}) {
        t[yr] = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : fn(t, e)
    }, mounted(t, {value: e}, {transition: n}) {
        n && e && n.enter(t)
    }, updated(t, {value: e, oldValue: n}, {transition: i}) {
        !e != !n && (i ? e ? (i.beforeEnter(t), fn(t, !0), i.enter(t)) : i.leave(t, () => {
            fn(t, !1)
        }) : fn(t, e))
    }, beforeUnmount(t, {value: e}) {
        fn(t, e)
    }
};

function fn(t, e) {
    t.style.display = e ? t[yr] : "none"
}

const Qa = Symbol("");

function Wa(t, e, n) {
    const i = t.style, r = i.display, o = Ne(n);
    if (n && !o) {
        if (e && !Ne(e)) for (const a in e) n[a] == null && Qi(i, a, "");
        for (const a in n) Qi(i, a, n[a])
    } else if (o) {
        if (e !== n) {
            const a = i[Qa];
            a && (n += ";" + a), i.cssText = n
        }
    } else e && t.removeAttribute("style");
    yr in t && (i.display = r)
}

const es = /\s*!important$/;

function Qi(t, e, n) {
    if (q(n)) n.forEach(i => Qi(t, e, i)); else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n); else {
        const i = Ya(t, e);
        es.test(n) ? t.setProperty(ln(i), n.replace(es, ""), "important") : t[i] = n
    }
}

const ts = ["Webkit", "Moz", "ms"], Oi = {};

function Ya(t, e) {
    const n = Oi[e];
    if (n) return n;
    let i = ft(e);
    if (i !== "filter" && i in t) return Oi[e] = i;
    i = fi(i);
    for (let r = 0; r < ts.length; r++) {
        const o = ts[r] + i;
        if (o in t) return Oi[e] = o
    }
    return e
}

const ns = "http://www.w3.org/1999/xlink";

function qa(t, e, n, i, r) {
    if (i && e.startsWith("xlink:")) n == null ? t.removeAttributeNS(ns, e.slice(6, e.length)) : t.setAttributeNS(ns, e, n); else {
        const o = cl(e);
        n == null || o && !Bs(n) ? t.removeAttribute(e) : t.setAttribute(e, o ? "" : n)
    }
}

function Xa(t, e, n, i, r, o, a) {
    if (e === "innerHTML" || e === "textContent") {
        i && a(i, r, o), t[e] = n ?? "";
        return
    }
    const c = t.tagName;
    if (e === "value" && c !== "PROGRESS" && !c.includes("-")) {
        t._value = n;
        const g = c === "OPTION" ? t.getAttribute("value") : t.value, y = n ?? "";
        g !== y && (t.value = y), n == null && t.removeAttribute(e);
        return
    }
    let h = !1;
    if (n === "" || n == null) {
        const g = typeof t[e];
        g === "boolean" ? n = Bs(n) : n == null && g === "string" ? (n = "", h = !0) : g === "number" && (n = 0, h = !0)
    }
    try {
        t[e] = n
    } catch {
    }
    h && t.removeAttribute(e)
}

function Et(t, e, n, i) {
    t.addEventListener(e, n, i)
}

function Ja(t, e, n, i) {
    t.removeEventListener(e, n, i)
}

const is = Symbol("_vei");

function Za(t, e, n, i, r = null) {
    const o = t[is] || (t[is] = {}), a = o[e];
    if (i && a) a.value = i; else {
        const [c, h] = ec(e);
        if (i) {
            const g = o[e] = ic(i, r);
            Et(t, c, g, h)
        } else a && (Ja(t, c, a, h), o[e] = void 0)
    }
}

const rs = /(?:Once|Passive|Capture)$/;

function ec(t) {
    let e;
    if (rs.test(t)) {
        e = {};
        let i;
        for (; i = t.match(rs);) t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0
    }
    return [t[2] === ":" ? t.slice(3) : ln(t.slice(2)), e]
}

let Ui = 0;
const tc = Promise.resolve(), nc = () => Ui || (tc.then(() => Ui = 0), Ui = Date.now());

function ic(t, e) {
    const n = i => {
        if (!i._vts) i._vts = Date.now(); else if (i._vts <= n.attached) return;
        st(rc(i, n.value), e, 5, [i])
    };
    return n.value = t, n.attached = nc(), n
}

function rc(t, e) {
    if (q(e)) {
        const n = t.stopImmediatePropagation;
        return t.stopImmediatePropagation = () => {
            n.call(t), t._stopped = !0
        }, e.map(i => r => !r._stopped && i && i(r))
    } else return e
}

const ss = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
    sc = (t, e, n, i, r, o, a, c, h) => {
        const g = r === "svg";
        e === "class" ? $a(t, i, g) : e === "style" ? Wa(t, n, i) : ci(e) ? Ji(e) || Za(t, e, n, i, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : oc(t, e, i, g)) ? Xa(t, e, i, o, a, c, h) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), qa(t, e, i, g))
    };

function oc(t, e, n, i) {
    if (i) return !!(e === "innerHTML" || e === "textContent" || e in t && ss(e) && re(n));
    if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA") return !1;
    if (e === "width" || e === "height") {
        const r = t.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1
    }
    return ss(e) && Ne(n) ? !1 : e in t
}

const tn = t => {
    const e = t.props["onUpdate:modelValue"] || !1;
    return q(e) ? n => Kn(e, n) : e
};

function lc(t) {
    t.target.composing = !0
}

function os(t) {
    const e = t.target;
    e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}

const gt = Symbol("_assign"), Wi = {
    created(t, {modifiers: {lazy: e, trim: n, number: i}}, r) {
        t[gt] = tn(r);
        const o = i || r.props && r.props.type === "number";
        Et(t, e ? "change" : "input", a => {
            if (a.target.composing) return;
            let c = t.value;
            n && (c = c.trim()), o && (c = _n(c)), t[gt](c)
        }), n && Et(t, "change", () => {
            t.value = t.value.trim()
        }), e || (Et(t, "compositionstart", lc), Et(t, "compositionend", os), Et(t, "change", os))
    }, mounted(t, {value: e}) {
        t.value = e ?? ""
    }, beforeUpdate(t, {value: e, modifiers: {lazy: n, trim: i, number: r}}, o) {
        if (t[gt] = tn(o), t.composing) return;
        const a = r || t.type === "number" ? _n(t.value) : t.value, c = e ?? "";
        a !== c && (document.activeElement === t && t.type !== "range" && (n || i && t.value.trim() === c) || (t.value = c))
    }
}, ac = {
    deep: !0, created(t, e, n) {
        t[gt] = tn(n), Et(t, "change", () => {
            const i = t._modelValue, r = Bn(t), o = t.checked, a = t[gt];
            if (q(i)) {
                const c = tr(i, r), h = c !== -1;
                if (o && !h) a(i.concat(r)); else if (!o && h) {
                    const g = [...i];
                    g.splice(c, 1), a(g)
                }
            } else if (on(i)) {
                const c = new Set(i);
                o ? c.add(r) : c.delete(r), a(c)
            } else a(Io(t, o))
        })
    }, mounted: ls, beforeUpdate(t, e, n) {
        t[gt] = tn(n), ls(t, e, n)
    }
};

function ls(t, {value: e, oldValue: n}, i) {
    t._modelValue = e, q(e) ? t.checked = tr(e, i.props.value) > -1 : on(e) ? t.checked = e.has(i.props.value) : e !== n && (t.checked = Jt(e, Io(t, !0)))
}

const nn = {
    deep: !0, created(t, {value: e, modifiers: {number: n}}, i) {
        const r = on(e);
        Et(t, "change", () => {
            const o = Array.prototype.filter.call(t.options, a => a.selected).map(a => n ? _n(Bn(a)) : Bn(a));
            t[gt](t.multiple ? r ? new Set(o) : o : o[0]), t._assigning = !0, Ws(() => {
                t._assigning = !1
            })
        }), t[gt] = tn(i)
    }, mounted(t, {value: e, oldValue: n, modifiers: {number: i}}) {
        as(t, e, n, i)
    }, beforeUpdate(t, e, n) {
        t[gt] = tn(n)
    }, updated(t, {value: e, oldValue: n, modifiers: {number: i}}) {
        t._assigning || as(t, e, n, i)
    }
};

function as(t, e, n, i) {
    const r = t.multiple, o = q(e);
    if (!(r && !o && !on(e)) && !(o && Jt(e, n))) {
        for (let a = 0, c = t.options.length; a < c; a++) {
            const h = t.options[a], g = Bn(h);
            if (r) if (o) {
                const y = typeof g;
                y === "string" || y === "number" ? h.selected = e.includes(i ? _n(g) : g) : h.selected = tr(e, g) > -1
            } else h.selected = e.has(g); else if (Jt(Bn(h), e)) {
                t.selectedIndex !== a && (t.selectedIndex = a);
                return
            }
        }
        !r && t.selectedIndex !== -1 && (t.selectedIndex = -1)
    }
}

function Bn(t) {
    return "_value" in t ? t._value : t.value
}

function Io(t, e) {
    const n = e ? "_trueValue" : "_falseValue";
    return n in t ? t[n] : e
}

const cc = He({patchProp: sc}, Ka);
let cs;

function uc() {
    return cs || (cs = Aa(cc))
}

const fc = (...t) => {
    const e = uc().createApp(...t), {mount: n} = e;
    return e.mount = i => {
        const r = dc(i);
        if (!r) return;
        const o = e._component;
        !re(o) && !o.render && !o.template && (o.template = r.innerHTML), r.innerHTML = "";
        const a = n(r, !1, hc(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a
    }, e
};

function hc(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml"
}

function dc(t) {
    return Ne(t) ? document.querySelector(t) : t
}

class pc {
    constructor() {
        _(this, "name", "");
        _(this, "canvas");
        this.name || (this.name = String(Math.random() * Date.now()))
    }

    init(e) {
        this.canvas = e
    }

    entry({deltaTime: e, canvas: n}) {
    }

    loop({deltaTime: e, canvas: n}) {
    }

    exit({deltaTime: e, canvas: n}) {
    }

    pause({deltaTime: e, canvas: n}) {
    }

    resume({deltaTime: e, canvas: n}) {
    }
}

class mc {
    constructor(e) {
        _(this, "loops", []);
        _(this, "currentLoop");
        _(this, "deltaTime", 0);
        _(this, "requestId", 0);
        _(this, "currentFps", 0);
        _(this, "lastCalledTime", 0);
        this.canvas = e
    }

    start(e) {
        var n, i, r, o, a, c;
        if (!this.canvas.isStarted) {
            this.canvas.events.subscribe("canvas:loaded", () => {
                this.start(e)
            });
            return
        }
        if (this.canvas.clear(), typeof e < "u") {
            this.currentLoop && ((i = (n = this.currentLoop).exit) == null || i.call(n, {
                deltaTime: this.deltaTime,
                canvas: this.canvas
            }));
            const h = this.loops.find(g => g.name === e);
            h && (this.currentLoop = h, (o = (r = this.currentLoop).entry) == null || o.call(r, {
                deltaTime: this.deltaTime,
                canvas: this.canvas
            }), this.startLoop())
        } else this.currentLoop && ((c = (a = this.currentLoop).resume) == null || c.call(a, {
            deltaTime: this.deltaTime,
            canvas: this.canvas
        }), this.startLoop())
    }

    add(e, n) {
        e.init(this.canvas), this.loops.push(e), n && this.start(e.name)
    }

    destroy(e) {
        const n = this.loops.find(i => i.name === e);
        n && (this.loops = this.loops.filter(i => i !== n))
    }

    startLoop() {
        this.lastCalledTime = Date.now();
        const e = () => {
            this.requestId = requestAnimationFrame(e), this.deltaTime = (Date.now() - this.lastCalledTime) / 1e3, this.lastCalledTime = Date.now(), this.canvas.events.emit("loop:start"), this.nextTick(), this.canvas.events.emit("loop:end")
        };
        this.requestId = requestAnimationFrame(e)
    }

    nextTick() {
        const {canvas: e} = this;
        e.clear(), this.currentLoop.loop({deltaTime: this.deltaTime, canvas: e})
    }
}

class Ie {
    constructor(e, n) {
        _(this, "x", 0);
        _(this, "y", 0);
        typeof e == "object" ? (this.x = Number(e.x), this.y = Number(e.y)) : e !== void 0 && n !== void 0 ? (this.x = e, this.y = n) : e !== void 0 && (this.x = e, this.y = e)
    }

    plus(e, n) {
        return typeof e == "object" ? (this.x += e.x, this.y += e.y) : e !== void 0 && n !== void 0 ? (this.x += e, this.y += n) : (this.x += e, this.y += e), this
    }

    minus(e, n) {
        return typeof e == "object" ? (this.x -= e.x, this.y -= e.y) : e !== void 0 && n !== void 0 ? (this.x -= e, this.y -= n) : (this.x -= e, this.y -= e), this
    }

    inc(e, n) {
        return typeof e == "object" ? (this.x *= e.x, this.y *= e.y) : e !== void 0 && n !== void 0 ? (this.x *= e, this.y *= n) : (this.x *= e, this.y *= e), this
    }

    div(e, n) {
        return typeof e == "object" ? (this.x /= e.x, this.y /= e.y) : e !== void 0 && n !== void 0 ? (this.x /= e, this.y /= n) : (this.x /= e, this.y /= e), this
    }

    toSize() {
        return new Re(this.x, this.y)
    }
}

class Re {
    constructor(e, n) {
        _(this, "w", 0);
        _(this, "h", 0);
        typeof e == "object" ? (this.w = e.w, this.h = e.h) : e !== void 0 && n !== void 0 ? (this.w = e, this.h = n) : e !== void 0 && (this.w = e, this.h = e)
    }

    plus(e, n) {
        return typeof e == "object" ? (this.w += e.w, this.h += e.h) : e !== void 0 && n !== void 0 ? (this.w += e, this.h += n) : (this.w += e, this.h += e), this
    }

    minus(e, n) {
        return typeof e == "object" ? (this.w -= e.w, this.h -= e.h) : e !== void 0 && n !== void 0 ? (this.w -= e, this.h -= n) : (this.w -= e, this.h -= e), this
    }

    inc(e, n) {
        return typeof e == "object" ? (this.w *= e.w, this.h *= e.h) : e !== void 0 && n !== void 0 ? (this.w *= e, this.h *= n) : (this.w *= e, this.h *= e), this
    }

    div(e, n) {
        return typeof e == "object" ? (this.w /= e.w, this.h /= e.h) : e !== void 0 && n !== void 0 ? (this.w /= e, this.h /= n) : (this.w /= e, this.h /= e), this
    }

    toPoint() {
        return new Ie(this.w, this.h)
    }
}

class gc extends pc {
    constructor() {
        super(...arguments);
        _(this, "currentImage")
    }

    entry({canvas: n}) {
        this.currentImage = n.objects.ImageObject({})
    }

    loop({canvas: n}) {
        if (Me.value.length) {
            const r = Me.value[ot.value];
            n.camera.offset.x = (n.size.w - ke.value.w) / 2, n.camera.offset.y = (n.size.h - ke.value.h) / 2;
            const {currentImage: o} = this;
            o.image = r.currentImage, o.size = new Re(ke.value), o.render()
        }
        const i = Ve.tools.find(r => r.name === Ve.active.value);
        i != null && i.render && i.render.render(this)
    }
}

class vc {
    constructor() {
        _(this, "active", ye(""));
        _(this, "tools", [])
    }

    setActive(e) {
        this.active.value = e
    }

    reset() {
        this.setActive("")
    }

    add(e) {
        this.tools.push(e)
    }
}

const yc = {id: "relative-parent"}, wc = {id: "size-calibration"}, xc = $e({
        __name: "InputNumber",
        props: {modelValue: {type: Number, default: 0}},
        emits: ["update:modelValue"],
        setup(t, {emit: e}) {
            const n = t, i = e, r = Vt({
                get() {
                    return n.modelValue
                }, set(o) {
                    return i("update:modelValue", Number(o))
                }
            });
            return (o, a) => (ee(), se("div", yc, [E("span", wc, bn(r.value), 1), Ye(E("input", {
                id: "autosized-input",
                "onUpdate:modelValue": a[0] || (a[0] = c => r.value = c)
            }, null, 512), [[Wi, r.value]])]))
        }
    }), Oe = (t, e) => {
        const n = t.__vccOpts || t;
        for (const [i, r] of e) n[i] = r;
        return n
    }, Pe = Oe(xc, [["__scopeId", "data-v-c4de8e2e"]]), wr = t => (Fn("data-v-e85b02e8"), t = t(), Sn(), t),
    _c = {class: "result"}, bc = ["src"], Ac = {class: "settings"}, Ec = wr(() => E("div", {class: "x"}, "x", -1)),
    Ic = wr(() => E("option", {value: "neuquant"}, "neuquant", -1)),
    Cc = wr(() => E("option", {value: "octree"}, "octree", -1)), Bc = [Ic, Cc], Tc = $e({
        __name: "Preview_settings", setup(t) {
            const e = ye(""), n = () => {
                console.log("change", mn.value);
                const i = Ho(), r = new Blob([i], {type: "image/gif"}), o = window.URL.createObjectURL(r);
                e.value = o, setTimeout(function () {
                    return window.URL.revokeObjectURL(o)
                }, 1e3), console.log(1)
            };
            return an(() => {
                sn.value = !0, n()
            }), dr(() => {
                sn.value = !1
            }), (i, r) => (ee(), se(Ee, null, [E("div", _c, [e.value ? (ee(), se("img", {
                key: 0,
                src: e.value
            }, null, 8, bc)) : xi("", !0)]), E("div", Ac, [E("div", null, [Le(" Размер: "), ce(Pe, {
                modelValue: K(ke).w,
                "onUpdate:modelValue": r[0] || (r[0] = o => K(ke).w = o),
                onChange: n
            }, null, 8, ["modelValue"]), Ec, ce(Pe, {
                modelValue: K(ke).h,
                "onUpdate:modelValue": r[1] || (r[1] = o => K(ke).h = o),
                onChange: n
            }, null, 8, ["modelValue"])]), E("div", null, [Le("Повторений: "), ce(Pe, {
                modelValue: K(Yn),
                "onUpdate:modelValue": r[2] || (r[2] = o => Se(Yn) ? Yn.value = o : null),
                onChange: n
            }, null, 8, ["modelValue"])]), E("div", null, [Le("FPS: "), ce(Pe, {
                modelValue: K(qn),
                "onUpdate:modelValue": r[3] || (r[3] = o => Se(qn) ? qn.value = o : null),
                onChange: n
            }, null, 8, ["modelValue"])]), E("div", null, [Le("Качество: "), ce(Pe, {
                modelValue: K(mn),
                "onUpdate:modelValue": r[4] || (r[4] = o => Se(mn) ? mn.value = o : null),
                onChange: n,
                min: "1",
                max: "30"
            }, null, 8, ["modelValue"])]), E("div", null, [Le("Оптимизация: "), ce(Pe, {
                modelValue: K(Jn),
                "onUpdate:modelValue": r[5] || (r[5] = o => Se(Jn) ? Jn.value = o : null),
                onChange: n,
                min: "1",
                max: "100"
            }, null, 8, ["modelValue"])]), E("div", null, [Le(" Алгоритм: "), Ye(E("select", {
                "onUpdate:modelValue": r[6] || (r[6] = o => Se(Xn) ? Xn.value = o : null),
                onChange: n
            }, Bc, 544), [[nn, K(Xn)]])]), E("button", {onClick: r[7] || (r[7] = o => K(xu)())}, "save"), E("div", {
                class: "close",
                onClick: r[8] || (r[8] = o => K(Ve).reset())
            }, "x")])], 64))
        }
    }), Fc = Oe(Tc, [["__scopeId", "data-v-e85b02e8"]]),
    Sc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/klEQVR4nO2Y308TQRDH+R/0b/ERfBd9wkcQYiCCIMTwo41GnsQSojSUCLQaExWuScuLFArW3rXX1kMFAfkVQ1tKAlpNi9jU9Cd8zWzi2QPUB1tazU0yyWZnr/vpzM7sZsrKVFGlBOT6iHBa+0Cydw77ku33vSimdg77klqjZNMYXp2SATWm2alBuz/Nb2chhlFU5bezMNj9aa1xdlIGJOpSgBNzIIlJBiTXFhtKPKTEpAKKqgfD/8EZdK+vQXiuB2++DMejC0xpLDj0cK2vFw/QtboC3nIVXmsTNt9ZEYsGkEnFmdKY5jzWRgiWZrjWVk8Q8EMKgmMALnMdPgU9SGeyeObbRIvBi6ruafSMzmMvnkIilUEmu49wUISLq4XgMLBvCwroDkUhjLdi0dmLTPobIl8TaNKLqO+XcNO8BZ1tF7HEPn7IbizJ1tDaRacO/Hgb+42CALpDn+Hk6vD+9UO2eTqzz+DaTCvos+/Jmgv4JZ5ma2gtycbcYzhHa+AOhvML6A5F4ByrRWDBLG9OYa3vlxhU72QE1V3DqKisRkd3H6J7cQZqfRNHg17CxMuQ/F1ggWN/VNzazRPgToIddP/8KHKlecDLwkqANV0jOHP2vEJpjmw3zFu4ZvAqvvXPPQVvaYF7J/n3gMLMXSw4bgM4UGxSdWuanTmCIM8dBiw/V81sOluUrVXKAZb4Xggz904GsPwYwIrKGma7Y4viYvdM4QB/G2LuNyHWGH8Z4o25J/kLsSJJ3nLKJNH/TBKCJE+S0pjmyEaJlJsk/vmxPCfJH8vMsqLM5GqrcZmtoYJd0DJztFDrFIW6QS+xUNKZJKUxeY5srFCn4lh80VPYQn3kquNq2TWWyWZZCOmcUeKQtg762BzZPgbccHGXTuaqO+6x4LE2IrhkQSyS81iIBNicx3qlCI+Ff+W5JRZY21XAsOpBlM4Z7CzB1kfHUE7rgxo11LApBUh+O4uBKX9aY5JsMiC1uqjl1THkSxW9/TbkS2pN0oSi/aaKKmXFk+9BZFr82hmgQQAAAABJRU5ErkJggg==",
    Rc = {}, Oc = E("div", {class: "icon"}, [E("img", {src: Sc})], -1),
    Uc = E("div", {class: "name"}, " Результат ", -1);

function Lc(t, e) {
    return ee(), se(Ee, null, [Oc, Uc], 64)
}

const Pc = Oe(Rc, [["render", Lc]]);

class Mc {
    render(e) {
    }
}

function Co(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}

var Bo = {}, Ai = {};
Ai.byteLength = Dc;
Ai.toByteArray = kc;
Ai.fromByteArray = Kc;
var ut = [], Ze = [], Nc = typeof Uint8Array < "u" ? Uint8Array : Array,
    Li = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ht = 0, Vc = Li.length; Ht < Vc; ++Ht) ut[Ht] = Li[Ht], Ze[Li.charCodeAt(Ht)] = Ht;
Ze[45] = 62;
Ze[95] = 63;

function To(t) {
    var e = t.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var n = t.indexOf("=");
    n === -1 && (n = e);
    var i = n === e ? 0 : 4 - n % 4;
    return [n, i]
}

function Dc(t) {
    var e = To(t), n = e[0], i = e[1];
    return (n + i) * 3 / 4 - i
}

function jc(t, e, n) {
    return (e + n) * 3 / 4 - n
}

function kc(t) {
    var e, n = To(t), i = n[0], r = n[1], o = new Nc(jc(t, i, r)), a = 0, c = r > 0 ? i - 4 : i, h;
    for (h = 0; h < c; h += 4) e = Ze[t.charCodeAt(h)] << 18 | Ze[t.charCodeAt(h + 1)] << 12 | Ze[t.charCodeAt(h + 2)] << 6 | Ze[t.charCodeAt(h + 3)], o[a++] = e >> 16 & 255, o[a++] = e >> 8 & 255, o[a++] = e & 255;
    return r === 2 && (e = Ze[t.charCodeAt(h)] << 2 | Ze[t.charCodeAt(h + 1)] >> 4, o[a++] = e & 255), r === 1 && (e = Ze[t.charCodeAt(h)] << 10 | Ze[t.charCodeAt(h + 1)] << 4 | Ze[t.charCodeAt(h + 2)] >> 2, o[a++] = e >> 8 & 255, o[a++] = e & 255), o
}

function zc(t) {
    return ut[t >> 18 & 63] + ut[t >> 12 & 63] + ut[t >> 6 & 63] + ut[t & 63]
}

function Hc(t, e, n) {
    for (var i, r = [], o = e; o < n; o += 3) i = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (t[o + 2] & 255), r.push(zc(i));
    return r.join("")
}

function Kc(t) {
    for (var e, n = t.length, i = n % 3, r = [], o = 16383, a = 0, c = n - i; a < c; a += o) r.push(Hc(t, a, a + o > c ? c : a + o));
    return i === 1 ? (e = t[n - 1], r.push(ut[e >> 2] + ut[e << 4 & 63] + "==")) : i === 2 && (e = (t[n - 2] << 8) + t[n - 1], r.push(ut[e >> 10] + ut[e >> 4 & 63] + ut[e << 2 & 63] + "=")), r.join("")
}

var xr = {};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
xr.read = function (t, e, n, i, r) {
    var o, a, c = r * 8 - i - 1, h = (1 << c) - 1, g = h >> 1, y = -7, A = n ? r - 1 : 0, S = n ? -1 : 1, P = t[e + A];
    for (A += S, o = P & (1 << -y) - 1, P >>= -y, y += c; y > 0; o = o * 256 + t[e + A], A += S, y -= 8) ;
    for (a = o & (1 << -y) - 1, o >>= -y, y += i; y > 0; a = a * 256 + t[e + A], A += S, y -= 8) ;
    if (o === 0) o = 1 - g; else {
        if (o === h) return a ? NaN : (P ? -1 : 1) * (1 / 0);
        a = a + Math.pow(2, i), o = o - g
    }
    return (P ? -1 : 1) * a * Math.pow(2, o - i)
};
xr.write = function (t, e, n, i, r, o) {
    var a, c, h, g = o * 8 - r - 1, y = (1 << g) - 1, A = y >> 1,
        S = r === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, P = i ? 0 : o - 1, te = i ? 1 : -1,
        X = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, a = y) : (a = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -a)) < 1 && (a--, h *= 2), a + A >= 1 ? e += S / h : e += S * Math.pow(2, 1 - A), e * h >= 2 && (a++, h /= 2), a + A >= y ? (c = 0, a = y) : a + A >= 1 ? (c = (e * h - 1) * Math.pow(2, r), a = a + A) : (c = e * Math.pow(2, A - 1) * Math.pow(2, r), a = 0)); r >= 8; t[n + P] = c & 255, P += te, c /= 256, r -= 8) ;
    for (a = a << r | c, g += r; g > 0; t[n + P] = a & 255, P += te, a /= 256, g -= 8) ;
    t[n + P - te] |= X * 128
};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function (t) {
    const e = Ai, n = xr,
        i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    t.Buffer = c, t.SlowBuffer = M, t.INSPECT_MAX_BYTES = 50;
    const r = 2147483647;
    t.kMaxLength = r, c.TYPED_ARRAY_SUPPORT = o(), !c.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");

    function o() {
        try {
            const u = new Uint8Array(1), s = {
                foo: function () {
                    return 42
                }
            };
            return Object.setPrototypeOf(s, Uint8Array.prototype), Object.setPrototypeOf(u, s), u.foo() === 42
        } catch {
            return !1
        }
    }

    Object.defineProperty(c.prototype, "parent", {
        enumerable: !0, get: function () {
            if (c.isBuffer(this)) return this.buffer
        }
    }), Object.defineProperty(c.prototype, "offset", {
        enumerable: !0, get: function () {
            if (c.isBuffer(this)) return this.byteOffset
        }
    });

    function a(u) {
        if (u > r) throw new RangeError('The value "' + u + '" is invalid for option "size"');
        const s = new Uint8Array(u);
        return Object.setPrototypeOf(s, c.prototype), s
    }

    function c(u, s, l) {
        if (typeof u == "number") {
            if (typeof s == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
            return A(u)
        }
        return h(u, s, l)
    }

    c.poolSize = 8192;

    function h(u, s, l) {
        if (typeof u == "string") return S(u, s);
        if (ArrayBuffer.isView(u)) return te(u);
        if (u == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof u);
        if (I(u, ArrayBuffer) || u && I(u.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (I(u, SharedArrayBuffer) || u && I(u.buffer, SharedArrayBuffer))) return X(u, s, l);
        if (typeof u == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        const f = u.valueOf && u.valueOf();
        if (f != null && f !== u) return c.from(f, s, l);
        const p = oe(u);
        if (p) return p;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof u[Symbol.toPrimitive] == "function") return c.from(u[Symbol.toPrimitive]("string"), s, l);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof u)
    }

    c.from = function (u, s, l) {
        return h(u, s, l)
    }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array);

    function g(u) {
        if (typeof u != "number") throw new TypeError('"size" argument must be of type number');
        if (u < 0) throw new RangeError('The value "' + u + '" is invalid for option "size"')
    }

    function y(u, s, l) {
        return g(u), u <= 0 ? a(u) : s !== void 0 ? typeof l == "string" ? a(u).fill(s, l) : a(u).fill(s) : a(u)
    }

    c.alloc = function (u, s, l) {
        return y(u, s, l)
    };

    function A(u) {
        return g(u), a(u < 0 ? 0 : F(u) | 0)
    }

    c.allocUnsafe = function (u) {
        return A(u)
    }, c.allocUnsafeSlow = function (u) {
        return A(u)
    };

    function S(u, s) {
        if ((typeof s != "string" || s === "") && (s = "utf8"), !c.isEncoding(s)) throw new TypeError("Unknown encoding: " + s);
        const l = H(u, s) | 0;
        let f = a(l);
        const p = f.write(u, s);
        return p !== l && (f = f.slice(0, p)), f
    }

    function P(u) {
        const s = u.length < 0 ? 0 : F(u.length) | 0, l = a(s);
        for (let f = 0; f < s; f += 1) l[f] = u[f] & 255;
        return l
    }

    function te(u) {
        if (I(u, Uint8Array)) {
            const s = new Uint8Array(u);
            return X(s.buffer, s.byteOffset, s.byteLength)
        }
        return P(u)
    }

    function X(u, s, l) {
        if (s < 0 || u.byteLength < s) throw new RangeError('"offset" is outside of buffer bounds');
        if (u.byteLength < s + (l || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let f;
        return s === void 0 && l === void 0 ? f = new Uint8Array(u) : l === void 0 ? f = new Uint8Array(u, s) : f = new Uint8Array(u, s, l), Object.setPrototypeOf(f, c.prototype), f
    }

    function oe(u) {
        if (c.isBuffer(u)) {
            const s = F(u.length) | 0, l = a(s);
            return l.length === 0 || u.copy(l, 0, 0, s), l
        }
        if (u.length !== void 0) return typeof u.length != "number" || D(u.length) ? a(0) : P(u);
        if (u.type === "Buffer" && Array.isArray(u.data)) return P(u.data)
    }

    function F(u) {
        if (u >= r) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes");
        return u | 0
    }

    function M(u) {
        return +u != u && (u = 0), c.alloc(+u)
    }

    c.isBuffer = function (s) {
        return s != null && s._isBuffer === !0 && s !== c.prototype
    }, c.compare = function (s, l) {
        if (I(s, Uint8Array) && (s = c.from(s, s.offset, s.byteLength)), I(l, Uint8Array) && (l = c.from(l, l.offset, l.byteLength)), !c.isBuffer(s) || !c.isBuffer(l)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (s === l) return 0;
        let f = s.length, p = l.length;
        for (let v = 0, b = Math.min(f, p); v < b; ++v) if (s[v] !== l[v]) {
            f = s[v], p = l[v];
            break
        }
        return f < p ? -1 : p < f ? 1 : 0
    }, c.isEncoding = function (s) {
        switch (String(s).toLowerCase()) {
            case"hex":
            case"utf8":
            case"utf-8":
            case"ascii":
            case"latin1":
            case"binary":
            case"base64":
            case"ucs2":
            case"ucs-2":
            case"utf16le":
            case"utf-16le":
                return !0;
            default:
                return !1
        }
    }, c.concat = function (s, l) {
        if (!Array.isArray(s)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (s.length === 0) return c.alloc(0);
        let f;
        if (l === void 0) for (l = 0, f = 0; f < s.length; ++f) l += s[f].length;
        const p = c.allocUnsafe(l);
        let v = 0;
        for (f = 0; f < s.length; ++f) {
            let b = s[f];
            if (I(b, Uint8Array)) v + b.length > p.length ? (c.isBuffer(b) || (b = c.from(b)), b.copy(p, v)) : Uint8Array.prototype.set.call(p, b, v); else if (c.isBuffer(b)) b.copy(p, v); else throw new TypeError('"list" argument must be an Array of Buffers');
            v += b.length
        }
        return p
    };

    function H(u, s) {
        if (c.isBuffer(u)) return u.length;
        if (ArrayBuffer.isView(u) || I(u, ArrayBuffer)) return u.byteLength;
        if (typeof u != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof u);
        const l = u.length, f = arguments.length > 2 && arguments[2] === !0;
        if (!f && l === 0) return 0;
        let p = !1;
        for (; ;) switch (s) {
            case"ascii":
            case"latin1":
            case"binary":
                return l;
            case"utf8":
            case"utf-8":
                return C(u).length;
            case"ucs2":
            case"ucs-2":
            case"utf16le":
            case"utf-16le":
                return l * 2;
            case"hex":
                return l >>> 1;
            case"base64":
                return T(u).length;
            default:
                if (p) return f ? -1 : C(u).length;
                s = ("" + s).toLowerCase(), p = !0
        }
    }

    c.byteLength = H;

    function N(u, s, l) {
        let f = !1;
        if ((s === void 0 || s < 0) && (s = 0), s > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, s >>>= 0, l <= s)) return "";
        for (u || (u = "utf8"); ;) switch (u) {
            case"hex":
                return de(this, s, l);
            case"utf8":
            case"utf-8":
                return ge(this, s, l);
            case"ascii":
                return L(this, s, l);
            case"latin1":
            case"binary":
                return k(this, s, l);
            case"base64":
                return Te(this, s, l);
            case"ucs2":
            case"ucs-2":
            case"utf16le":
            case"utf-16le":
                return Fe(this, s, l);
            default:
                if (f) throw new TypeError("Unknown encoding: " + u);
                u = (u + "").toLowerCase(), f = !0
        }
    }

    c.prototype._isBuffer = !0;

    function $(u, s, l) {
        const f = u[s];
        u[s] = u[l], u[l] = f
    }

    c.prototype.swap16 = function () {
        const s = this.length;
        if (s % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let l = 0; l < s; l += 2) $(this, l, l + 1);
        return this
    }, c.prototype.swap32 = function () {
        const s = this.length;
        if (s % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let l = 0; l < s; l += 4) $(this, l, l + 3), $(this, l + 1, l + 2);
        return this
    }, c.prototype.swap64 = function () {
        const s = this.length;
        if (s % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let l = 0; l < s; l += 8) $(this, l, l + 7), $(this, l + 1, l + 6), $(this, l + 2, l + 5), $(this, l + 3, l + 4);
        return this
    }, c.prototype.toString = function () {
        const s = this.length;
        return s === 0 ? "" : arguments.length === 0 ? ge(this, 0, s) : N.apply(this, arguments)
    }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function (s) {
        if (!c.isBuffer(s)) throw new TypeError("Argument must be a Buffer");
        return this === s ? !0 : c.compare(this, s) === 0
    }, c.prototype.inspect = function () {
        let s = "";
        const l = t.INSPECT_MAX_BYTES;
        return s = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (s += " ... "), "<Buffer " + s + ">"
    }, i && (c.prototype[i] = c.prototype.inspect), c.prototype.compare = function (s, l, f, p, v) {
        if (I(s, Uint8Array) && (s = c.from(s, s.offset, s.byteLength)), !c.isBuffer(s)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof s);
        if (l === void 0 && (l = 0), f === void 0 && (f = s ? s.length : 0), p === void 0 && (p = 0), v === void 0 && (v = this.length), l < 0 || f > s.length || p < 0 || v > this.length) throw new RangeError("out of range index");
        if (p >= v && l >= f) return 0;
        if (p >= v) return -1;
        if (l >= f) return 1;
        if (l >>>= 0, f >>>= 0, p >>>= 0, v >>>= 0, this === s) return 0;
        let b = v - p, ie = f - l;
        const be = Math.min(b, ie), ae = this.slice(p, v), pe = s.slice(l, f);
        for (let we = 0; we < be; ++we) if (ae[we] !== pe[we]) {
            b = ae[we], ie = pe[we];
            break
        }
        return b < ie ? -1 : ie < b ? 1 : 0
    };

    function R(u, s, l, f, p) {
        if (u.length === 0) return -1;
        if (typeof l == "string" ? (f = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, D(l) && (l = p ? 0 : u.length - 1), l < 0 && (l = u.length + l), l >= u.length) {
            if (p) return -1;
            l = u.length - 1
        } else if (l < 0) if (p) l = 0; else return -1;
        if (typeof s == "string" && (s = c.from(s, f)), c.isBuffer(s)) return s.length === 0 ? -1 : ne(u, s, l, f, p);
        if (typeof s == "number") return s = s & 255, typeof Uint8Array.prototype.indexOf == "function" ? p ? Uint8Array.prototype.indexOf.call(u, s, l) : Uint8Array.prototype.lastIndexOf.call(u, s, l) : ne(u, [s], l, f, p);
        throw new TypeError("val must be string, number or Buffer")
    }

    function ne(u, s, l, f, p) {
        let v = 1, b = u.length, ie = s.length;
        if (f !== void 0 && (f = String(f).toLowerCase(), f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le")) {
            if (u.length < 2 || s.length < 2) return -1;
            v = 2, b /= 2, ie /= 2, l /= 2
        }

        function be(pe, we) {
            return v === 1 ? pe[we] : pe.readUInt16BE(we * v)
        }

        let ae;
        if (p) {
            let pe = -1;
            for (ae = l; ae < b; ae++) if (be(u, ae) === be(s, pe === -1 ? 0 : ae - pe)) {
                if (pe === -1 && (pe = ae), ae - pe + 1 === ie) return pe * v
            } else pe !== -1 && (ae -= ae - pe), pe = -1
        } else for (l + ie > b && (l = b - ie), ae = l; ae >= 0; ae--) {
            let pe = !0;
            for (let we = 0; we < ie; we++) if (be(u, ae + we) !== be(s, we)) {
                pe = !1;
                break
            }
            if (pe) return ae
        }
        return -1
    }

    c.prototype.includes = function (s, l, f) {
        return this.indexOf(s, l, f) !== -1
    }, c.prototype.indexOf = function (s, l, f) {
        return R(this, s, l, f, !0)
    }, c.prototype.lastIndexOf = function (s, l, f) {
        return R(this, s, l, f, !1)
    };

    function G(u, s, l, f) {
        l = Number(l) || 0;
        const p = u.length - l;
        f ? (f = Number(f), f > p && (f = p)) : f = p;
        const v = s.length;
        f > v / 2 && (f = v / 2);
        let b;
        for (b = 0; b < f; ++b) {
            const ie = parseInt(s.substr(b * 2, 2), 16);
            if (D(ie)) return b;
            u[l + b] = ie
        }
        return b
    }

    function ue(u, s, l, f) {
        return U(C(s, u.length - l), u, l, f)
    }

    function Q(u, s, l, f) {
        return U(O(s), u, l, f)
    }

    function Y(u, s, l, f) {
        return U(T(s), u, l, f)
    }

    function he(u, s, l, f) {
        return U(V(s, u.length - l), u, l, f)
    }

    c.prototype.write = function (s, l, f, p) {
        if (l === void 0) p = "utf8", f = this.length, l = 0; else if (f === void 0 && typeof l == "string") p = l, f = this.length, l = 0; else if (isFinite(l)) l = l >>> 0, isFinite(f) ? (f = f >>> 0, p === void 0 && (p = "utf8")) : (p = f, f = void 0); else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        const v = this.length - l;
        if ((f === void 0 || f > v) && (f = v), s.length > 0 && (f < 0 || l < 0) || l > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        p || (p = "utf8");
        let b = !1;
        for (; ;) switch (p) {
            case"hex":
                return G(this, s, l, f);
            case"utf8":
            case"utf-8":
                return ue(this, s, l, f);
            case"ascii":
            case"latin1":
            case"binary":
                return Q(this, s, l, f);
            case"base64":
                return Y(this, s, l, f);
            case"ucs2":
            case"ucs-2":
            case"utf16le":
            case"utf-16le":
                return he(this, s, l, f);
            default:
                if (b) throw new TypeError("Unknown encoding: " + p);
                p = ("" + p).toLowerCase(), b = !0
        }
    }, c.prototype.toJSON = function () {
        return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
    };

    function Te(u, s, l) {
        return s === 0 && l === u.length ? e.fromByteArray(u) : e.fromByteArray(u.slice(s, l))
    }

    function ge(u, s, l) {
        l = Math.min(u.length, l);
        const f = [];
        let p = s;
        for (; p < l;) {
            const v = u[p];
            let b = null, ie = v > 239 ? 4 : v > 223 ? 3 : v > 191 ? 2 : 1;
            if (p + ie <= l) {
                let be, ae, pe, we;
                switch (ie) {
                    case 1:
                        v < 128 && (b = v);
                        break;
                    case 2:
                        be = u[p + 1], (be & 192) === 128 && (we = (v & 31) << 6 | be & 63, we > 127 && (b = we));
                        break;
                    case 3:
                        be = u[p + 1], ae = u[p + 2], (be & 192) === 128 && (ae & 192) === 128 && (we = (v & 15) << 12 | (be & 63) << 6 | ae & 63, we > 2047 && (we < 55296 || we > 57343) && (b = we));
                        break;
                    case 4:
                        be = u[p + 1], ae = u[p + 2], pe = u[p + 3], (be & 192) === 128 && (ae & 192) === 128 && (pe & 192) === 128 && (we = (v & 15) << 18 | (be & 63) << 12 | (ae & 63) << 6 | pe & 63, we > 65535 && we < 1114112 && (b = we))
                }
            }
            b === null ? (b = 65533, ie = 1) : b > 65535 && (b -= 65536, f.push(b >>> 10 & 1023 | 55296), b = 56320 | b & 1023), f.push(b), p += ie
        }
        return j(f)
    }

    const w = 4096;

    function j(u) {
        const s = u.length;
        if (s <= w) return String.fromCharCode.apply(String, u);
        let l = "", f = 0;
        for (; f < s;) l += String.fromCharCode.apply(String, u.slice(f, f += w));
        return l
    }

    function L(u, s, l) {
        let f = "";
        l = Math.min(u.length, l);
        for (let p = s; p < l; ++p) f += String.fromCharCode(u[p] & 127);
        return f
    }

    function k(u, s, l) {
        let f = "";
        l = Math.min(u.length, l);
        for (let p = s; p < l; ++p) f += String.fromCharCode(u[p]);
        return f
    }

    function de(u, s, l) {
        const f = u.length;
        (!s || s < 0) && (s = 0), (!l || l < 0 || l > f) && (l = f);
        let p = "";
        for (let v = s; v < l; ++v) p += W[u[v]];
        return p
    }

    function Fe(u, s, l) {
        const f = u.slice(s, l);
        let p = "";
        for (let v = 0; v < f.length - 1; v += 2) p += String.fromCharCode(f[v] + f[v + 1] * 256);
        return p
    }

    c.prototype.slice = function (s, l) {
        const f = this.length;
        s = ~~s, l = l === void 0 ? f : ~~l, s < 0 ? (s += f, s < 0 && (s = 0)) : s > f && (s = f), l < 0 ? (l += f, l < 0 && (l = 0)) : l > f && (l = f), l < s && (l = s);
        const p = this.subarray(s, l);
        return Object.setPrototypeOf(p, c.prototype), p
    };

    function J(u, s, l) {
        if (u % 1 !== 0 || u < 0) throw new RangeError("offset is not uint");
        if (u + s > l) throw new RangeError("Trying to access beyond buffer length")
    }

    c.prototype.readUintLE = c.prototype.readUIntLE = function (s, l, f) {
        s = s >>> 0, l = l >>> 0, f || J(s, l, this.length);
        let p = this[s], v = 1, b = 0;
        for (; ++b < l && (v *= 256);) p += this[s + b] * v;
        return p
    }, c.prototype.readUintBE = c.prototype.readUIntBE = function (s, l, f) {
        s = s >>> 0, l = l >>> 0, f || J(s, l, this.length);
        let p = this[s + --l], v = 1;
        for (; l > 0 && (v *= 256);) p += this[s + --l] * v;
        return p
    }, c.prototype.readUint8 = c.prototype.readUInt8 = function (s, l) {
        return s = s >>> 0, l || J(s, 1, this.length), this[s]
    }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function (s, l) {
        return s = s >>> 0, l || J(s, 2, this.length), this[s] | this[s + 1] << 8
    }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function (s, l) {
        return s = s >>> 0, l || J(s, 2, this.length), this[s] << 8 | this[s + 1]
    }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function (s, l) {
        return s = s >>> 0, l || J(s, 4, this.length), (this[s] | this[s + 1] << 8 | this[s + 2] << 16) + this[s + 3] * 16777216
    }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function (s, l) {
        return s = s >>> 0, l || J(s, 4, this.length), this[s] * 16777216 + (this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3])
    }, c.prototype.readBigUInt64LE = z(function (s) {
        s = s >>> 0, d(s, "offset");
        const l = this[s], f = this[s + 7];
        (l === void 0 || f === void 0) && m(s, this.length - 8);
        const p = l + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24,
            v = this[++s] + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + f * 2 ** 24;
        return BigInt(p) + (BigInt(v) << BigInt(32))
    }), c.prototype.readBigUInt64BE = z(function (s) {
        s = s >>> 0, d(s, "offset");
        const l = this[s], f = this[s + 7];
        (l === void 0 || f === void 0) && m(s, this.length - 8);
        const p = l * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s],
            v = this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + f;
        return (BigInt(p) << BigInt(32)) + BigInt(v)
    }), c.prototype.readIntLE = function (s, l, f) {
        s = s >>> 0, l = l >>> 0, f || J(s, l, this.length);
        let p = this[s], v = 1, b = 0;
        for (; ++b < l && (v *= 256);) p += this[s + b] * v;
        return v *= 128, p >= v && (p -= Math.pow(2, 8 * l)), p
    }, c.prototype.readIntBE = function (s, l, f) {
        s = s >>> 0, l = l >>> 0, f || J(s, l, this.length);
        let p = l, v = 1, b = this[s + --p];
        for (; p > 0 && (v *= 256);) b += this[s + --p] * v;
        return v *= 128, b >= v && (b -= Math.pow(2, 8 * l)), b
    }, c.prototype.readInt8 = function (s, l) {
        return s = s >>> 0, l || J(s, 1, this.length), this[s] & 128 ? (255 - this[s] + 1) * -1 : this[s]
    }, c.prototype.readInt16LE = function (s, l) {
        s = s >>> 0, l || J(s, 2, this.length);
        const f = this[s] | this[s + 1] << 8;
        return f & 32768 ? f | 4294901760 : f
    }, c.prototype.readInt16BE = function (s, l) {
        s = s >>> 0, l || J(s, 2, this.length);
        const f = this[s + 1] | this[s] << 8;
        return f & 32768 ? f | 4294901760 : f
    }, c.prototype.readInt32LE = function (s, l) {
        return s = s >>> 0, l || J(s, 4, this.length), this[s] | this[s + 1] << 8 | this[s + 2] << 16 | this[s + 3] << 24
    }, c.prototype.readInt32BE = function (s, l) {
        return s = s >>> 0, l || J(s, 4, this.length), this[s] << 24 | this[s + 1] << 16 | this[s + 2] << 8 | this[s + 3]
    }, c.prototype.readBigInt64LE = z(function (s) {
        s = s >>> 0, d(s, "offset");
        const l = this[s], f = this[s + 7];
        (l === void 0 || f === void 0) && m(s, this.length - 8);
        const p = this[s + 4] + this[s + 5] * 2 ** 8 + this[s + 6] * 2 ** 16 + (f << 24);
        return (BigInt(p) << BigInt(32)) + BigInt(l + this[++s] * 2 ** 8 + this[++s] * 2 ** 16 + this[++s] * 2 ** 24)
    }), c.prototype.readBigInt64BE = z(function (s) {
        s = s >>> 0, d(s, "offset");
        const l = this[s], f = this[s + 7];
        (l === void 0 || f === void 0) && m(s, this.length - 8);
        const p = (l << 24) + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + this[++s];
        return (BigInt(p) << BigInt(32)) + BigInt(this[++s] * 2 ** 24 + this[++s] * 2 ** 16 + this[++s] * 2 ** 8 + f)
    }), c.prototype.readFloatLE = function (s, l) {
        return s = s >>> 0, l || J(s, 4, this.length), n.read(this, s, !0, 23, 4)
    }, c.prototype.readFloatBE = function (s, l) {
        return s = s >>> 0, l || J(s, 4, this.length), n.read(this, s, !1, 23, 4)
    }, c.prototype.readDoubleLE = function (s, l) {
        return s = s >>> 0, l || J(s, 8, this.length), n.read(this, s, !0, 52, 8)
    }, c.prototype.readDoubleBE = function (s, l) {
        return s = s >>> 0, l || J(s, 8, this.length), n.read(this, s, !1, 52, 8)
    };

    function le(u, s, l, f, p, v) {
        if (!c.isBuffer(u)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (s > p || s < v) throw new RangeError('"value" argument is out of bounds');
        if (l + f > u.length) throw new RangeError("Index out of range")
    }

    c.prototype.writeUintLE = c.prototype.writeUIntLE = function (s, l, f, p) {
        if (s = +s, l = l >>> 0, f = f >>> 0, !p) {
            const ie = Math.pow(2, 8 * f) - 1;
            le(this, s, l, f, ie, 0)
        }
        let v = 1, b = 0;
        for (this[l] = s & 255; ++b < f && (v *= 256);) this[l + b] = s / v & 255;
        return l + f
    }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function (s, l, f, p) {
        if (s = +s, l = l >>> 0, f = f >>> 0, !p) {
            const ie = Math.pow(2, 8 * f) - 1;
            le(this, s, l, f, ie, 0)
        }
        let v = f - 1, b = 1;
        for (this[l + v] = s & 255; --v >= 0 && (b *= 256);) this[l + v] = s / b & 255;
        return l + f
    }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function (s, l, f) {
        return s = +s, l = l >>> 0, f || le(this, s, l, 1, 255, 0), this[l] = s & 255, l + 1
    }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function (s, l, f) {
        return s = +s, l = l >>> 0, f || le(this, s, l, 2, 65535, 0), this[l] = s & 255, this[l + 1] = s >>> 8, l + 2
    }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function (s, l, f) {
        return s = +s, l = l >>> 0, f || le(this, s, l, 2, 65535, 0), this[l] = s >>> 8, this[l + 1] = s & 255, l + 2
    }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function (s, l, f) {
        return s = +s, l = l >>> 0, f || le(this, s, l, 4, 4294967295, 0), this[l + 3] = s >>> 24, this[l + 2] = s >>> 16, this[l + 1] = s >>> 8, this[l] = s & 255, l + 4
    }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function (s, l, f) {
        return s = +s, l = l >>> 0, f || le(this, s, l, 4, 4294967295, 0), this[l] = s >>> 24, this[l + 1] = s >>> 16, this[l + 2] = s >>> 8, this[l + 3] = s & 255, l + 4
    };

    function Ue(u, s, l, f, p) {
        kt(s, f, p, u, l, 7);
        let v = Number(s & BigInt(4294967295));
        u[l++] = v, v = v >> 8, u[l++] = v, v = v >> 8, u[l++] = v, v = v >> 8, u[l++] = v;
        let b = Number(s >> BigInt(32) & BigInt(4294967295));
        return u[l++] = b, b = b >> 8, u[l++] = b, b = b >> 8, u[l++] = b, b = b >> 8, u[l++] = b, l
    }

    function Je(u, s, l, f, p) {
        kt(s, f, p, u, l, 7);
        let v = Number(s & BigInt(4294967295));
        u[l + 7] = v, v = v >> 8, u[l + 6] = v, v = v >> 8, u[l + 5] = v, v = v >> 8, u[l + 4] = v;
        let b = Number(s >> BigInt(32) & BigInt(4294967295));
        return u[l + 3] = b, b = b >> 8, u[l + 2] = b, b = b >> 8, u[l + 1] = b, b = b >> 8, u[l] = b, l + 8
    }

    c.prototype.writeBigUInt64LE = z(function (s, l = 0) {
        return Ue(this, s, l, BigInt(0), BigInt("0xffffffffffffffff"))
    }), c.prototype.writeBigUInt64BE = z(function (s, l = 0) {
        return Je(this, s, l, BigInt(0), BigInt("0xffffffffffffffff"))
    }), c.prototype.writeIntLE = function (s, l, f, p) {
        if (s = +s, l = l >>> 0, !p) {
            const be = Math.pow(2, 8 * f - 1);
            le(this, s, l, f, be - 1, -be)
        }
        let v = 0, b = 1, ie = 0;
        for (this[l] = s & 255; ++v < f && (b *= 256);) s < 0 && ie === 0 && this[l + v - 1] !== 0 && (ie = 1), this[l + v] = (s / b >> 0) - ie & 255;
        return l + f
    }, c.prototype.writeIntBE = function (s, l, f, p) {
        if (s = +s, l = l >>> 0, !p) {
            const be = Math.pow(2, 8 * f - 1);
            le(this, s, l, f, be - 1, -be)
        }
        let v = f - 1, b = 1, ie = 0;
        for (this[l + v] = s & 255; --v >= 0 && (b *= 256);) s < 0 && ie === 0 && this[l + v + 1] !== 0 && (ie = 1), this[l + v] = (s / b >> 0) - ie & 255;
        return l + f
    }, c.prototype.writeInt8 = function (s, l, f) {
        return s = +s, l = l >>> 0, f || le(this, s, l, 1, 127, -128), s < 0 && (s = 255 + s + 1), this[l] = s & 255, l + 1
    }, c.prototype.writeInt16LE = function (s, l, f) {
        return s = +s, l = l >>> 0, f || le(this, s, l, 2, 32767, -32768), this[l] = s & 255, this[l + 1] = s >>> 8, l + 2
    }, c.prototype.writeInt16BE = function (s, l, f) {
        return s = +s, l = l >>> 0, f || le(this, s, l, 2, 32767, -32768), this[l] = s >>> 8, this[l + 1] = s & 255, l + 2
    }, c.prototype.writeInt32LE = function (s, l, f) {
        return s = +s, l = l >>> 0, f || le(this, s, l, 4, 2147483647, -2147483648), this[l] = s & 255, this[l + 1] = s >>> 8, this[l + 2] = s >>> 16, this[l + 3] = s >>> 24, l + 4
    }, c.prototype.writeInt32BE = function (s, l, f) {
        return s = +s, l = l >>> 0, f || le(this, s, l, 4, 2147483647, -2147483648), s < 0 && (s = 4294967295 + s + 1), this[l] = s >>> 24, this[l + 1] = s >>> 16, this[l + 2] = s >>> 8, this[l + 3] = s & 255, l + 4
    }, c.prototype.writeBigInt64LE = z(function (s, l = 0) {
        return Ue(this, s, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    }), c.prototype.writeBigInt64BE = z(function (s, l = 0) {
        return Je(this, s, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
    });

    function Be(u, s, l, f, p, v) {
        if (l + f > u.length) throw new RangeError("Index out of range");
        if (l < 0) throw new RangeError("Index out of range")
    }

    function _e(u, s, l, f, p) {
        return s = +s, l = l >>> 0, p || Be(u, s, l, 4), n.write(u, s, l, f, 23, 4), l + 4
    }

    c.prototype.writeFloatLE = function (s, l, f) {
        return _e(this, s, l, !0, f)
    }, c.prototype.writeFloatBE = function (s, l, f) {
        return _e(this, s, l, !1, f)
    };

    function fe(u, s, l, f, p) {
        return s = +s, l = l >>> 0, p || Be(u, s, l, 8), n.write(u, s, l, f, 52, 8), l + 8
    }

    c.prototype.writeDoubleLE = function (s, l, f) {
        return fe(this, s, l, !0, f)
    }, c.prototype.writeDoubleBE = function (s, l, f) {
        return fe(this, s, l, !1, f)
    }, c.prototype.copy = function (s, l, f, p) {
        if (!c.isBuffer(s)) throw new TypeError("argument should be a Buffer");
        if (f || (f = 0), !p && p !== 0 && (p = this.length), l >= s.length && (l = s.length), l || (l = 0), p > 0 && p < f && (p = f), p === f || s.length === 0 || this.length === 0) return 0;
        if (l < 0) throw new RangeError("targetStart out of bounds");
        if (f < 0 || f >= this.length) throw new RangeError("Index out of range");
        if (p < 0) throw new RangeError("sourceEnd out of bounds");
        p > this.length && (p = this.length), s.length - l < p - f && (p = s.length - l + f);
        const v = p - f;
        return this === s && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, f, p) : Uint8Array.prototype.set.call(s, this.subarray(f, p), l), v
    }, c.prototype.fill = function (s, l, f, p) {
        if (typeof s == "string") {
            if (typeof l == "string" ? (p = l, l = 0, f = this.length) : typeof f == "string" && (p = f, f = this.length), p !== void 0 && typeof p != "string") throw new TypeError("encoding must be a string");
            if (typeof p == "string" && !c.isEncoding(p)) throw new TypeError("Unknown encoding: " + p);
            if (s.length === 1) {
                const b = s.charCodeAt(0);
                (p === "utf8" && b < 128 || p === "latin1") && (s = b)
            }
        } else typeof s == "number" ? s = s & 255 : typeof s == "boolean" && (s = Number(s));
        if (l < 0 || this.length < l || this.length < f) throw new RangeError("Out of range index");
        if (f <= l) return this;
        l = l >>> 0, f = f === void 0 ? this.length : f >>> 0, s || (s = 0);
        let v;
        if (typeof s == "number") for (v = l; v < f; ++v) this[v] = s; else {
            const b = c.isBuffer(s) ? s : c.from(s, p), ie = b.length;
            if (ie === 0) throw new TypeError('The value "' + s + '" is invalid for argument "value"');
            for (v = 0; v < f - l; ++v) this[v + l] = b[v % ie]
        }
        return this
    };
    const ze = {};

    function dt(u, s, l) {
        ze[u] = class extends l {
            constructor() {
                super(), Object.defineProperty(this, "message", {
                    value: s.apply(this, arguments),
                    writable: !0,
                    configurable: !0
                }), this.name = `${this.name} [${u}]`, this.stack, delete this.name
            }

            get code() {
                return u
            }

            set code(p) {
                Object.defineProperty(this, "code", {configurable: !0, enumerable: !0, value: p, writable: !0})
            }

            toString() {
                return `${this.name} [${u}]: ${this.message}`
            }
        }
    }

    dt("ERR_BUFFER_OUT_OF_BOUNDS", function (u) {
        return u ? `${u} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
    }, RangeError), dt("ERR_INVALID_ARG_TYPE", function (u, s) {
        return `The "${u}" argument must be of type number. Received type ${typeof s}`
    }, TypeError), dt("ERR_OUT_OF_RANGE", function (u, s, l) {
        let f = `The value of "${u}" is out of range.`, p = l;
        return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? p = pt(String(l)) : typeof l == "bigint" && (p = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (p = pt(p)), p += "n"), f += ` It must be ${s}. Received ${p}`, f
    }, RangeError);

    function pt(u) {
        let s = "", l = u.length;
        const f = u[0] === "-" ? 1 : 0;
        for (; l >= f + 4; l -= 3) s = `_${u.slice(l - 3, l)}${s}`;
        return `${u.slice(0, l)}${s}`
    }

    function cn(u, s, l) {
        d(s, "offset"), (u[s] === void 0 || u[s + l] === void 0) && m(s, u.length - (l + 1))
    }

    function kt(u, s, l, f, p, v) {
        if (u > l || u < s) {
            const b = typeof s == "bigint" ? "n" : "";
            let ie;
            throw v > 3 ? s === 0 || s === BigInt(0) ? ie = `>= 0${b} and < 2${b} ** ${(v + 1) * 8}${b}` : ie = `>= -(2${b} ** ${(v + 1) * 8 - 1}${b}) and < 2 ** ${(v + 1) * 8 - 1}${b}` : ie = `>= ${s}${b} and <= ${l}${b}`, new ze.ERR_OUT_OF_RANGE("value", ie, u)
        }
        cn(f, p, v)
    }

    function d(u, s) {
        if (typeof u != "number") throw new ze.ERR_INVALID_ARG_TYPE(s, "number", u)
    }

    function m(u, s, l) {
        throw Math.floor(u) !== u ? (d(u, l), new ze.ERR_OUT_OF_RANGE(l || "offset", "an integer", u)) : s < 0 ? new ze.ERR_BUFFER_OUT_OF_BOUNDS : new ze.ERR_OUT_OF_RANGE(l || "offset", `>= ${l ? 1 : 0} and <= ${s}`, u)
    }

    const x = /[^+/0-9A-Za-z-_]/g;

    function B(u) {
        if (u = u.split("=")[0], u = u.trim().replace(x, ""), u.length < 2) return "";
        for (; u.length % 4 !== 0;) u = u + "=";
        return u
    }

    function C(u, s) {
        s = s || 1 / 0;
        let l;
        const f = u.length;
        let p = null;
        const v = [];
        for (let b = 0; b < f; ++b) {
            if (l = u.charCodeAt(b), l > 55295 && l < 57344) {
                if (!p) {
                    if (l > 56319) {
                        (s -= 3) > -1 && v.push(239, 191, 189);
                        continue
                    } else if (b + 1 === f) {
                        (s -= 3) > -1 && v.push(239, 191, 189);
                        continue
                    }
                    p = l;
                    continue
                }
                if (l < 56320) {
                    (s -= 3) > -1 && v.push(239, 191, 189), p = l;
                    continue
                }
                l = (p - 55296 << 10 | l - 56320) + 65536
            } else p && (s -= 3) > -1 && v.push(239, 191, 189);
            if (p = null, l < 128) {
                if ((s -= 1) < 0) break;
                v.push(l)
            } else if (l < 2048) {
                if ((s -= 2) < 0) break;
                v.push(l >> 6 | 192, l & 63 | 128)
            } else if (l < 65536) {
                if ((s -= 3) < 0) break;
                v.push(l >> 12 | 224, l >> 6 & 63 | 128, l & 63 | 128)
            } else if (l < 1114112) {
                if ((s -= 4) < 0) break;
                v.push(l >> 18 | 240, l >> 12 & 63 | 128, l >> 6 & 63 | 128, l & 63 | 128)
            } else throw new Error("Invalid code point")
        }
        return v
    }

    function O(u) {
        const s = [];
        for (let l = 0; l < u.length; ++l) s.push(u.charCodeAt(l) & 255);
        return s
    }

    function V(u, s) {
        let l, f, p;
        const v = [];
        for (let b = 0; b < u.length && !((s -= 2) < 0); ++b) l = u.charCodeAt(b), f = l >> 8, p = l % 256, v.push(p), v.push(f);
        return v
    }

    function T(u) {
        return e.toByteArray(B(u))
    }

    function U(u, s, l, f) {
        let p;
        for (p = 0; p < f && !(p + l >= s.length || p >= u.length); ++p) s[p + l] = u[p];
        return p
    }

    function I(u, s) {
        return u instanceof s || u != null && u.constructor != null && u.constructor.name != null && u.constructor.name === s.name
    }

    function D(u) {
        return u !== u
    }

    const W = function () {
        const u = "0123456789abcdef", s = new Array(256);
        for (let l = 0; l < 16; ++l) {
            const f = l * 16;
            for (let p = 0; p < 16; ++p) s[f + p] = u[l] + u[p]
        }
        return s
    }();

    function z(u) {
        return typeof BigInt > "u" ? Z : u
    }

    function Z() {
        throw new Error("BigInt not supported")
    }
})(Bo);
const Gc = Co(Bo);
var _r = {exports: {}}, qt = typeof Reflect == "object" ? Reflect : null,
    us = qt && typeof qt.apply == "function" ? qt.apply : function (e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    }, Wn;
qt && typeof qt.ownKeys == "function" ? Wn = qt.ownKeys : Object.getOwnPropertySymbols ? Wn = function (e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Wn = function (e) {
    return Object.getOwnPropertyNames(e)
};

function $c(t) {
    console && console.warn && console.warn(t)
}

var Fo = Number.isNaN || function (e) {
    return e !== e
};

function xe() {
    xe.init.call(this)
}

_r.exports = xe;
_r.exports.once = qc;
xe.EventEmitter = xe;
xe.prototype._events = void 0;
xe.prototype._eventsCount = 0;
xe.prototype._maxListeners = void 0;
var fs = 10;

function Ei(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}

Object.defineProperty(xe, "defaultMaxListeners", {
    enumerable: !0, get: function () {
        return fs
    }, set: function (t) {
        if (typeof t != "number" || t < 0 || Fo(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        fs = t
    }
});
xe.init = function () {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
xe.prototype.setMaxListeners = function (e) {
    if (typeof e != "number" || e < 0 || Fo(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function So(t) {
    return t._maxListeners === void 0 ? xe.defaultMaxListeners : t._maxListeners
}

xe.prototype.getMaxListeners = function () {
    return So(this)
};
xe.prototype.emit = function (e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var r = e === "error", o = this._events;
    if (o !== void 0) r = r && o.error === void 0; else if (!r) return !1;
    if (r) {
        var a;
        if (n.length > 0 && (a = n[0]), a instanceof Error) throw a;
        var c = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
        throw c.context = a, c
    }
    var h = o[e];
    if (h === void 0) return !1;
    if (typeof h == "function") us(h, this, n); else for (var g = h.length, y = Po(h, g), i = 0; i < g; ++i) us(y[i], this, n);
    return !0
};

function Ro(t, e, n, i) {
    var r, o, a;
    if (Ei(n), o = t._events, o === void 0 ? (o = t._events = Object.create(null), t._eventsCount = 0) : (o.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), o = t._events), a = o[e]), a === void 0) a = o[e] = n, ++t._eventsCount; else if (typeof a == "function" ? a = o[e] = i ? [n, a] : [a, n] : i ? a.unshift(n) : a.push(n), r = So(t), r > 0 && a.length > r && !a.warned) {
        a.warned = !0;
        var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        c.name = "MaxListenersExceededWarning", c.emitter = t, c.type = e, c.count = a.length, $c(c)
    }
    return t
}

xe.prototype.addListener = function (e, n) {
    return Ro(this, e, n, !1)
};
xe.prototype.on = xe.prototype.addListener;
xe.prototype.prependListener = function (e, n) {
    return Ro(this, e, n, !0)
};

function Qc() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function Oo(t, e, n) {
    var i = {fired: !1, wrapFn: void 0, target: t, type: e, listener: n}, r = Qc.bind(i);
    return r.listener = n, i.wrapFn = r, r
}

xe.prototype.once = function (e, n) {
    return Ei(n), this.on(e, Oo(this, e, n)), this
};
xe.prototype.prependOnceListener = function (e, n) {
    return Ei(n), this.prependListener(e, Oo(this, e, n)), this
};
xe.prototype.removeListener = function (e, n) {
    var i, r, o, a, c;
    if (Ei(n), r = this._events, r === void 0) return this;
    if (i = r[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, i.listener || n)); else if (typeof i != "function") {
        for (o = -1, a = i.length - 1; a >= 0; a--) if (i[a] === n || i[a].listener === n) {
            c = i[a].listener, o = a;
            break
        }
        if (o < 0) return this;
        o === 0 ? i.shift() : Wc(i, o), i.length === 1 && (r[e] = i[0]), r.removeListener !== void 0 && this.emit("removeListener", e, c || n)
    }
    return this
};
xe.prototype.off = xe.prototype.removeListener;
xe.prototype.removeAllListeners = function (e) {
    var n, i, r;
    if (i = this._events, i === void 0) return this;
    if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
    if (arguments.length === 0) {
        var o = Object.keys(i), a;
        for (r = 0; r < o.length; ++r) a = o[r], a !== "removeListener" && this.removeAllListeners(a);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = i[e], typeof n == "function") this.removeListener(e, n); else if (n !== void 0) for (r = n.length - 1; r >= 0; r--) this.removeListener(e, n[r]);
    return this
};

function Uo(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var r = i[e];
    return r === void 0 ? [] : typeof r == "function" ? n ? [r.listener || r] : [r] : n ? Yc(r) : Po(r, r.length)
}

xe.prototype.listeners = function (e) {
    return Uo(this, e, !0)
};
xe.prototype.rawListeners = function (e) {
    return Uo(this, e, !1)
};
xe.listenerCount = function (t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : Lo.call(t, e)
};
xe.prototype.listenerCount = Lo;

function Lo(t) {
    var e = this._events;
    if (e !== void 0) {
        var n = e[t];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}

xe.prototype.eventNames = function () {
    return this._eventsCount > 0 ? Wn(this._events) : []
};

function Po(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function Wc(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function Yc(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function qc(t, e) {
    return new Promise(function (n, i) {
        function r(a) {
            t.removeListener(e, o), i(a)
        }

        function o() {
            typeof t.removeListener == "function" && t.removeListener("error", r), n([].slice.call(arguments))
        }

        Mo(t, e, o, {once: !0}), e !== "error" && Xc(t, r, {once: !0})
    })
}

function Xc(t, e, n) {
    typeof t.on == "function" && Mo(t, "error", e, n)
}

function Mo(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n); else if (typeof t.addEventListener == "function") t.addEventListener(e, function r(o) {
        i.once && t.removeEventListener(e, r), n(o)
    }); else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}

var Jc = _r.exports;
const Zc = Co(Jc), eu = {}, tu = eu, nu = Zc;
let Ut;
const No = Gc.Buffer, xn = 8;

class iu {
    constructor() {
        this.levels = Array.from({length: xn}, () => []), this.root = new br(0, this)
    }

    addColor(e) {
        this.root.addColor(e, 0, this)
    }

    makePalette(e) {
        let n = [], i = 0, r = this.leafNodes.length;
        for (let o = xn - 1; o > -1; o -= 1) if (this.levels[o]) {
            for (let a of this.levels[o]) if (r -= a.removeLeaves(), r <= e) break;
            if (r <= e) break;
            this.levels[o] = []
        }
        for (let o of this.leafNodes) {
            if (i >= e) break;
            o.isLeaf && n.push(o.color), o.paletteIndex = i, i++
        }
        return n
    }

    * makePaletteIncremental(e) {
        let n = [], i = 0, r = this.leafNodes.length;
        for (let o = xn - 1; o > -1; o -= 1) {
            if (this.levels[o]) {
                for (let a of this.levels[o]) if (r -= a.removeLeaves(), r <= e) break;
                if (r <= e) break;
                this.levels[o] = []
            }
            yield
        }
        for (let o of this.leafNodes) {
            if (i >= e) break;
            o.isLeaf && n.push(o.color), o.paletteIndex = i, i++
        }
        return yield, n
    }

    get leafNodes() {
        return this.root.leafNodes
    }

    addLevelNode(e, n) {
        this.levels[e].push(n)
    }

    getPaletteIndex(e) {
        return this.root.getPaletteIndex(e, 0)
    }
}

class br {
    constructor(e, n) {
        this._color = new rn(0, 0, 0), this.pixelCount = 0, this.paletteIndex = 0, this.children = [], this._debugColor, e < xn - 1 && n.addLevelNode(e, this)
    }

    get isLeaf() {
        return this.pixelCount > 0
    }

    get leafNodes() {
        let e = [];
        for (let n of this.children) n && (n.isLeaf ? e.push(n) : e.push(...n.leafNodes));
        return e
    }

    addColor(e, n, i) {
        if (n >= xn) {
            this._color.add(e), this.pixelCount++;
            return
        }
        let r = hs(e, n);
        this.children[r] || (this.children[r] = new br(n, i)), this.children[r].addColor(e, n + 1, i)
    }

    getPaletteIndex(e, n) {
        if (this.isLeaf) return this.paletteIndex;
        let i = hs(e, n);
        if (this.children[i]) return this.children[i].getPaletteIndex(e, n + 1);
        for (let r of this.children) if (r) return r.getPaletteIndex(e, n + 1)
    }

    removeLeaves() {
        let e = 0;
        for (let n of this.children) n && (this._color.add(n._color), this.pixelCount += n.pixelCount, e++);
        return this.children = [], e - 1
    }

    get debugColor() {
        if (this._debugColor) return this._debugColor;
        if (this.isLeaf) return this.color;
        let e = new rn, n = 0;

        function i(r) {
            for (let o of r.children) o.isLeaf ? (e.add(o._color), n++) : i(o)
        }

        return i(this), e.normalized(n)
    }

    get color() {
        return this._color.normalized(this.pixelCount)
    }
}

class rn {
    constructor(e = 0, n = 0, i = 0) {
        this.red = e, this.green = n, this.blue = i
    }

    clone() {
        return new rn(this.red, this.green, this.blue)
    }

    get array() {
        return [this.red, this.green, this.blue, this.red + this.green + this.blue]
    }

    toString() {
        return [this.red, this.green, this.blue].join(",")
    }

    toCSS() {
        return `rgb(${[this.red, this.green, this.blue].map(e => Math.floor(e)).join(",")})`
    }

    normalized(e) {
        return new rn(this.red / e, this.green / e, this.blue / e)
    }

    add(e) {
        this.red += e.red, this.green += e.green, this.blue += e.blue
    }
}

function hs(t, e) {
    let n = 0, i = 128 >> e;
    return t.red & i && (n |= 4), t.green & i && (n |= 2), t.blue & i && (n |= 1), n
}

var ru = 100, De = 256, ds = De - 1, xt = 4, Vo = 16, Ar = 1 << Vo, Do = 10, Er = 10, su = Ar >> Er, ou = Ar << Do - Er,
    lu = De >> 3, Yi = 6, au = 1 << Yi, cu = lu * au, uu = 30, jo = 10, kn = 1 << jo, ko = 8, ps = 1 << ko,
    fu = jo + ko, Kt = 1 << fu, ms = 499, gs = 491, vs = 487, zo = 503, hu = 3 * zo;

function du(t, e) {
    var n, i, r, o, a;

    function c() {
        n = [], i = new Int32Array(256), r = new Int32Array(De), o = new Int32Array(De), a = new Int32Array(De >> 3);
        var F, M;
        for (F = 0; F < De; F++) M = (F << xt + 8) / De, n[F] = new Float64Array([M, M, M, 0]), o[F] = Ar / De, r[F] = 0
    }

    function h() {
        for (var F = 0; F < De; F++) n[F][0] >>= xt, n[F][1] >>= xt, n[F][2] >>= xt, n[F][3] = F
    }

    function g(F, M, H, N, $) {
        n[M][0] -= F * (n[M][0] - H) / kn, n[M][1] -= F * (n[M][1] - N) / kn, n[M][2] -= F * (n[M][2] - $) / kn
    }

    function y(F, M, H, N, $) {
        for (var R = Math.abs(M - F), ne = Math.min(M + F, De), G = M + 1, ue = M - 1, Q = 1, Y, he; G < ne || ue > R;) he = a[Q++], G < ne && (Y = n[G++], Y[0] -= he * (Y[0] - H) / Kt, Y[1] -= he * (Y[1] - N) / Kt, Y[2] -= he * (Y[2] - $) / Kt), ue > R && (Y = n[ue--], Y[0] -= he * (Y[0] - H) / Kt, Y[1] -= he * (Y[1] - N) / Kt, Y[2] -= he * (Y[2] - $) / Kt)
    }

    function A(F, M, H) {
        var N = 2147483647, $ = N, R = -1, ne = R, G, ue, Q, Y, he;
        for (G = 0; G < De; G++) ue = n[G], Q = Math.abs(ue[0] - F) + Math.abs(ue[1] - M) + Math.abs(ue[2] - H), Q < N && (N = Q, R = G), Y = Q - (r[G] >> Vo - xt), Y < $ && ($ = Y, ne = G), he = o[G] >> Er, o[G] -= he, r[G] += he << Do;
        return o[R] += su, r[R] -= ou, ne
    }

    function S() {
        var F, M, H, N, $, R, ne = 0, G = 0;
        for (F = 0; F < De; F++) {
            for (H = n[F], $ = F, R = H[1], M = F + 1; M < De; M++) N = n[M], N[1] < R && ($ = M, R = N[1]);
            if (N = n[$], F != $ && (M = N[0], N[0] = H[0], H[0] = M, M = N[1], N[1] = H[1], H[1] = M, M = N[2], N[2] = H[2], H[2] = M, M = N[3], N[3] = H[3], H[3] = M), R != ne) {
                for (i[ne] = G + F >> 1, M = ne + 1; M < R; M++) i[M] = F;
                ne = R, G = F
            }
        }
        for (i[ne] = G + ds >> 1, M = ne + 1; M < 256; M++) i[M] = ds
    }

    function P(F, M, H) {
        for (var N, $, R, ne = 1e3, G = -1, ue = i[M], Q = ue - 1; ue < De || Q >= 0;) ue < De && ($ = n[ue], R = $[1] - M, R >= ne ? ue = De : (ue++, R < 0 && (R = -R), N = $[0] - F, N < 0 && (N = -N), R += N, R < ne && (N = $[2] - H, N < 0 && (N = -N), R += N, R < ne && (ne = R, G = $[3])))), Q >= 0 && ($ = n[Q], R = M - $[1], R >= ne ? Q = -1 : (Q--, R < 0 && (R = -R), N = $[0] - F, N < 0 && (N = -N), R += N, R < ne && (N = $[2] - H, N < 0 && (N = -N), R += N, R < ne && (ne = R, G = $[3]))));
        return G
    }

    function te() {
        var F, M = t.length, H = 30 + (e - 1) / 3, N = M / (3 * e), $ = ~~(N / ru), R = kn, ne = cu, G = ne >> Yi;
        for (G <= 1 && (G = 0), F = 0; F < G; F++) a[F] = R * ((G * G - F * F) * ps / (G * G));
        var ue;
        M < hu ? (e = 1, ue = 3) : M % ms !== 0 ? ue = 3 * ms : M % gs !== 0 ? ue = 3 * gs : M % vs !== 0 ? ue = 3 * vs : ue = 3 * zo;
        var Q, Y, he, Te, ge = 0;
        for (F = 0; F < N;) if (Q = (t[ge] & 255) << xt, Y = (t[ge + 1] & 255) << xt, he = (t[ge + 2] & 255) << xt, Te = A(Q, Y, he), g(R, Te, Q, Y, he), G !== 0 && y(G, Te, Q, Y, he), ge += ue, ge >= M && (ge -= M), F++, $ === 0 && ($ = 1), F % $ === 0) for (R -= R / H, ne -= ne / uu, G = ne >> Yi, G <= 1 && (G = 0), Te = 0; Te < G; Te++) a[Te] = R * ((G * G - Te * Te) * ps / (G * G))
    }

    function X() {
        c(), te(), h(), S()
    }

    this.buildColormap = X;

    function oe() {
        for (var F = [], M = [], H = 0; H < De; H++) M[n[H][3]] = H;
        for (var N = 0, $ = 0; $ < De; $++) {
            var R = M[$];
            F[N++] = n[R][0], F[N++] = n[R][1], F[N++] = n[R][2]
        }
        return F
    }

    this.getColormap = oe, this.lookupRGB = P
}

let Pi, ys;
var ws = -1, zn = 12, hn = 5003,
    pu = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535];

function mu(t, e, n, i) {
    var r = Math.max(2, i), o = new Uint8Array(256), a = new Int32Array(hn), c = new Int32Array(hn), h, g = 0, y, A = 0,
        S, P = !1, te, X, oe;

    function F(Q, Y) {
        o[y++] = Q, y >= 254 && R(Y)
    }

    function M(Q) {
        H(hn), A = X + 2, P = !0, ue(X, Q)
    }

    function H(Q) {
        for (var Y = 0; Y < Q; ++Y) a[Y] = -1
    }

    function N(Q, Y) {
        var he, Te, ge, w, j, L, k;
        for (te = Q, P = !1, Ut = te, S = ne(Ut), X = 1 << Q - 1, oe = X + 1, A = X + 2, y = 0, w = G(), k = 0, he = hn; he < 65536; he *= 2) ++k;
        k = 8 - k, L = hn, H(L), ue(X, Y);
        e:for (; (Te = G()) != ws;) {
            if (he = (Te << zn) + w, ge = Te << k ^ w, a[ge] === he) {
                w = c[ge];
                continue
            } else if (a[ge] >= 0) {
                j = L - ge, ge === 0 && (j = 1);
                do if ((ge -= j) < 0 && (ge += L), a[ge] === he) {
                    w = c[ge];
                    continue e
                } while (a[ge] >= 0)
            }
            ue(w, Y), w = Te, A < 1 << zn ? (c[ge] = A++, a[ge] = he) : M(Y)
        }
        ue(w, Y), ue(oe, Y)
    }

    function $(Q) {
        Q.writeByte(r), Pi = t * e, ys = 0, N(r + 1, Q), Q.writeByte(0)
    }

    function R(Q) {
        y > 0 && (Q.writeByte(y), Q.writeBytes(o, 0, y), y = 0)
    }

    function ne(Q) {
        return (1 << Q) - 1
    }

    function G() {
        if (Pi === 0) return ws;
        --Pi;
        var Q = n[ys++];
        return Q & 255
    }

    function ue(Q, Y) {
        for (h &= pu[g], g > 0 ? h |= Q << g : h = Q, g += Ut; g >= 8;) F(h & 255, Y), h >>= 8, g -= 8;
        if ((A > S || P) && (P ? (S = ne(Ut = te), P = !1) : (++Ut, Ut == zn ? S = 1 << zn : S = ne(Ut))), Q == oe) {
            for (; g > 0;) F(h & 255, Y), h >>= 8, g -= 8;
            R(Y)
        }
    }

    this.encode = $
}

class gu {
    constructor() {
        this.data = []
    }

    getData() {
        return No.from(this.data)
    }

    writeByte(e) {
        this.data.push(e)
    }

    writeUTFBytes(e) {
        for (var n = e.length, i = 0; i < n; i++) this.writeByte(e.charCodeAt(i))
    }

    writeBytes(e, n, i) {
        for (var r = i || e.length, o = n || 0; o < r; o++) this.writeByte(e[o])
    }
}

class vu extends nu {
    constructor(e, n, i = "neuquant", r = !1, o = 0) {
        super(), this.width = ~~e, this.height = ~~n, this.algorithm = i, this.useOptimizer = r, this.totalFrames = o, this.frames = 1, this.threshold = 90, this.indexedPixels = null, this.palSizeNeu = 7, this.palSizeOct = 7, this.sample = 10, this.colorTab = null, this.reuseTab = null, this.colorDepth = null, this.usedEntry = new Array, this.firstFrame = !0, this.started = !1, this.image = null, this.prevImage = null, this.dispose = -1, this.repeat = 0, this.delay = 0, this.transparent = null, this.transIndex = 0, this.readStreams = [], this.out = new gu
    }

    createReadStream(e) {
        return e || (e = new tu.Readable, e._read = function () {
        }), this.readStreams.push(e), e
    }

    emitData() {
        this.readStreams.length !== 0 && this.out.data.length && (this.readStreams.forEach(e => {
            e.push(No.from(this.out.data))
        }), this.out.data = [])
    }

    start() {
        this.out.writeUTFBytes("GIF89a"), this.started = !0, this.emitData()
    }

    end() {
        this.readStreams.length !== null && (this.emitData(), this.readStreams.forEach(e => e.push(null)), this.readStreams = [])
    }

    addFrame(e) {
        e && e.getImageData ? this.image = e.getImageData(0, 0, this.width, this.height).data : this.image = e, this.analyzePixels(), this.firstFrame && (this.writeLSD(), this.writePalette(), this.repeat >= 0 && this.writeNetscapeExt()), this.writeGraphicCtrlExt(), this.writeImageDesc(), this.firstFrame || this.writePalette(), this.writePixels(), this.firstFrame = !1, this.emitData(), this.totalFrames && this.emit("progress", Math.floor(this.frames++ / this.totalFrames * 100))
    }

    analyzePixels() {
        const e = this.width, n = this.height;
        var i = this.image;
        if (this.useOptimizer && this.prevImage) {
            for (var r = 0, o = i.length, a = 0; a < o; a += 4) (i[a] !== this.prevImage[a] || i[a + 1] !== this.prevImage[a + 1] || i[a + 2] !== this.prevImage[a + 2]) && r++;
            const te = 100 - Math.ceil(r / (i.length / 4) * 100);
            this.reuseTab = te >= this.threshold
        }
        if (this.prevImage = i, this.algorithm === "neuquant") {
            var c = 0;
            this.pixels = new Uint8Array(e * n * 3);
            for (var a = 0; a < n; a++) for (var h = 0; h < e; h++) {
                var g = a * e * 4 + h * 4;
                this.pixels[c++] = i[g], this.pixels[c++] = i[g + 1], this.pixels[c++] = i[g + 2]
            }
            var y = this.pixels.length / 3;
            this.indexedPixels = new Uint8Array(y), this.reuseTab || (this.quantizer = new du(this.pixels, this.sample), this.quantizer.buildColormap(), this.colorTab = this.quantizer.getColormap());
            for (var A = 0, h = 0; h < y; h++) {
                var S = this.quantizer.lookupRGB(this.pixels[A++] & 255, this.pixels[A++] & 255, this.pixels[A++] & 255);
                this.usedEntry[S] = !0, this.indexedPixels[h] = S
            }
            this.colorDepth = 8, this.palSizeNeu = 7, this.pixels = null
        } else if (this.algorithm === "octree") {
            this.colors = [], this.reuseTab || (this.quantizer = new iu);
            for (var a = 0; a < n; a++) for (var h = 0; h < e; h++) {
                var g = a * e * 4 + h * 4;
                const M = new rn(i[g], i[g + 1], i[g + 2]);
                this.colors.push(M), this.reuseTab || this.quantizer.addColor(M)
            }
            const te = this.colors.length;
            if (this.indexedPixels = new Uint8Array(te), !this.reuseTab) {
                this.colorTab = [];
                const X = this.quantizer.makePalette(Math.pow(2, this.palSizeOct + 1));
                for (const oe of X) this.colorTab.push(oe.red, oe.green, oe.blue)
            }
            for (var a = 0; a < te; a++) this.indexedPixels[a] = this.quantizer.getPaletteIndex(this.colors[a]);
            this.colorDepth = this.palSizeOct + 1
        }
        if (this.transparent !== null) {
            this.transIndex = this.findClosest(this.transparent);
            for (var P = 0; P < y; P++) this.image[P * 4 + 3] == 0 && (this.indexedPixels[P] = this.transIndex)
        }
    }

    findClosest(e) {
        if (this.colorTab === null) return -1;
        for (var n = (e & 16711680) >> 16, i = (e & 65280) >> 8, r = e & 255, o = 0, a = 256 * 256 * 256, c = this.colorTab.length, h = 0; h < c;) {
            var g = h / 3, y = n - (this.colorTab[h++] & 255), A = i - (this.colorTab[h++] & 255),
                S = r - (this.colorTab[h++] & 255), P = y * y + A * A + S * S;
            this.usedEntry[g] && P < a && (a = P, o = g)
        }
        return o
    }

    setFrameRate(e) {
        this.delay = Math.round(100 / e)
    }

    setDelay(e) {
        this.delay = Math.round(e / 10)
    }

    setDispose(e) {
        e >= 0 && (this.dispose = e)
    }

    setRepeat(e) {
        this.repeat = e
    }

    setTransparent(e) {
        this.transparent = e
    }

    setQuality(e) {
        e < 1 && (e = 1), this.quality = e
    }

    setThreshold(e) {
        e > 100 ? e = 100 : e < 0 && (e = 0), this.threshold = e
    }

    setPaletteSize(e) {
        e > 7 ? e = 7 : e < 4 && (e = 4), this.palSizeOct = e
    }

    writeLSD() {
        this.writeShort(this.width), this.writeShort(this.height), this.out.writeByte(240 | this.palSizeNeu), this.out.writeByte(0), this.out.writeByte(0)
    }

    writeGraphicCtrlExt() {
        this.out.writeByte(33), this.out.writeByte(249), this.out.writeByte(4);
        var e, n;
        this.transparent === null ? (e = 0, n = 0) : (e = 1, n = 2), this.dispose >= 0 && (n = this.dispose & 7), n <<= 2, this.out.writeByte(0 | n | 0 | e), this.writeShort(this.delay), this.out.writeByte(this.transIndex), this.out.writeByte(0)
    }

    writeNetscapeExt() {
        this.out.writeByte(33), this.out.writeByte(255), this.out.writeByte(11), this.out.writeUTFBytes("NETSCAPE2.0"), this.out.writeByte(3), this.out.writeByte(1), this.writeShort(this.repeat), this.out.writeByte(0)
    }

    writeImageDesc() {
        this.out.writeByte(44), this.writeShort(0), this.writeShort(0), this.writeShort(this.width), this.writeShort(this.height), this.firstFrame ? this.out.writeByte(0) : this.out.writeByte(128 | this.palSizeNeu)
    }

    writePalette() {
        this.out.writeBytes(this.colorTab);
        for (var e = 3 * 256 - this.colorTab.length, n = 0; n < e; n++) this.out.writeByte(0)
    }

    writeShort(e) {
        this.out.writeByte(e & 255), this.out.writeByte(e >> 8 & 255)
    }

    writePixels() {
        var e = new mu(this.width, this.height, this.indexedPixels, this.colorDepth);
        e.encode(this.out)
    }

    finish() {
        this.out.writeByte(59), this.end()
    }
}

const Yn = ye(0), yu = ye(0), qn = ye(60), mn = ye(30), Xn = ye("octree"), Jn = ye(100), wu = (t, e, n) => e - n + t,
    Ho = () => {
        const {w: t, h: e} = ke.value, n = new vu(t, e, Xn.value, !0), i = document.createElement("canvas"),
            r = i.getContext("2d");
        i.setAttribute("width", String(t)), i.setAttribute("height", String(e)), n.start(), n.setRepeat(Yn.value), n.setDelay(yu.value), n.setFrameRate(qn.value), n.setQuality(wu(1, 30, mn.value)), n.setTransparent(1), n.setThreshold(Jn.value);
        for (const a of Me.value) r.clearRect(0, 0, t, e), r.drawImage(a.currentImage, 0, 0, t, e), n.addFrame(r);
        return n.finish(), n.out.getData()
    }, xu = () => {
        const t = Ho(), e = function (i, r, o) {
            var a;
            a = new Blob([i], {type: o});
            const c = window.URL.createObjectURL(a);
            n(c, r), setTimeout(function () {
                return window.URL.revokeObjectURL(c)
            }, 1e3)
        }, n = function (i, r) {
            var o;
            o = document.createElement("a"), o.href = i, o.download = r, document.body.appendChild(o), o.style = "display: none", o.click(), o.remove()
        };
        e(t, "1.gif", "image/gif")
    };

class _u {
    constructor() {
        _(this, "name", "Preview");
        _(this, "ui", Pc);
        _(this, "settings", Fc);
        _(this, "render", new Mc)
    }
}

const bu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfUlEQVR4nO2ZT2jTUBzHv6PotJMphTmsWz1MUBwioqzCDptahOFB5gy6S2XddIxt4mteNoeIKIgyBEGml6FHD4IX9aR48TAFnSAiDFRkBz15qOD8U9P9JFFja5I6m5eS6vvA99Lf4/36Ib8E8gJIJBLJv8MwVUMjxfeMUINjf0YRMSJjVAeNqAxRbL1HaTk0egmVNngXSU1HyyJy6FXK1pvTFbPG6QEUCnkTSU6tLotI8slAQV+VdkCjeavOabjyRE5S2Byp/DqnOXBqEivC9Sx6Zx4KTdftPVZPjS66CN8DqEqcCPv0HkC34MTMfiO0DRrpRa5eSrRITHDCPx71z4uOIKeM66O6RBHxaHR2QfcTp1vBFRmlTdAo+xcPiP3BFEnTeiQucbSePmMm/WXO1nfnxAWz1jZ+AkOZlmCKAGsAdFkxevzeNxrvyVuzMagihTAHEeO/lIwU8QiTV8QFOVoeYXK0XJCj5REmR8sFOVoeYXK0XJCj5REmRysPTkeh0WMzau6p/Z05p1t1I5x+HeUE6oq0nWuAqr9Z0LtzOjuNSEttMEWAJrSfH/+jhKp/RfNBDUBdUEUMtqN3ZqqoiHL3OoAt8AMmTqQG9VtTYB/tGxoZejeLpZG9ABZhjOrBKSE0aYdTFA/v7Ouwa3LC8WbfPHgcwCpz1fePNeR7kqWLGAfGCfS9eFSw4YH7NwHErVWHX/cEXcSgFo3t/WCfP5ibHcm8RU3UOOVbjJ8YnwQqQMSgGbuvTYLn5hE/dgpAI/KpIJEqINSBjquXAbTaqvvuKOiffeZ7Om+shABWAOgEsMShFvPhe0m3Q6ohiLDL78sArC1DQqJEJJL/kW9Qr4OGbGaXHwAAAABJRU5ErkJggg==",
    Au = {}, Eu = E("div", {class: "icon"}, [E("img", {src: bu})], -1),
    Iu = E("div", {class: "name"}, " Отразить ", -1);

function Cu(t, e) {
    return ee(), se(Ee, null, [Eu, Iu], 64)
}

const Bu = Oe(Au, [["render", Cu]]), Tu = E("option", {value: "horizontal"}, "По горизонтали", -1),
    Fu = E("option", {value: "vertical"}, "По вертикали", -1), Su = [Tu, Fu],
    Ru = E("option", {value: "current"}, "Текущий кадр", -1), Ou = E("option", {value: "all"}, "Все кадры", -1),
    Uu = [Ru, Ou], Lu = $e({
        __name: "Flip_settings", setup(t) {
            const e = ye("current"), n = ye("horizontal"), i = async () => {
                await Ko.flip(n.value, e.value)
            };
            return (r, o) => (ee(), se("div", null, [Ye(E("select", {"onUpdate:modelValue": o[0] || (o[0] = a => n.value = a)}, Su, 512), [[nn, n.value]]), Ye(E("select", {"onUpdate:modelValue": o[1] || (o[1] = a => e.value = a)}, Uu, 512), [[nn, e.value]]), E("button", {onClick: i}, "Отразить")]))
        }
    });

class Pu {
    constructor(e) {
        _(this, "offset", new Ie);
        _(this, "scale", 1);
        this.canvas = e
    }
}

class Ir {
    constructor(e, n) {
        _(this, "x", 0);
        _(this, "y", 0);
        _(this, "w", 0);
        _(this, "h", 0);
        this.x = e.x, this.y = e.y, this.w = n.w, this.h = n.h
    }
}

class Mu {
    static isIntersect(e, n) {
        return e.x + e.w >= n.x && e.x <= n.x + n.w && e.y + e.h >= n.y && e.y <= n.y + n.h
    }
}

class Cr {
    constructor(e, n) {
        _(this, "name", "BaseObject");
        _(this, "type", "base");
        _(this, "position", new Ie);
        _(this, "size", new Re);
        _(this, "parent", null);
        _(this, "children", []);
        _(this, "visible", !0);
        this.canvas = e
    }

    isIntersect(e) {
        return Mu.isIntersect(e, this.getBox())
    }

    getBox() {
        const {position: e, size: n} = this;
        return new Ir(e, n)
    }

    move() {
    }

    render(e) {
    }

    destroy() {
    }
}

class Nu extends Cr {
    constructor(n, i) {
        super(n, i);
        _(this, "type", "image");
        _(this, "image");
        this.canvas = n, i && Object.assign(this, i)
    }

    render(n) {
        const {image: i, size: r, canvas: o} = this, a = new Ie(this.position).plus(o.camera.offset);
        n || (n = this.canvas.context), n.drawImage(i, a.x, a.y, r.w, r.h)
    }
}

class Vu extends Cr {
    constructor(n, i) {
        super(n, i);
        _(this, "type", "rect");
        _(this, "borderColor", "transparent");
        _(this, "backgroundColor", "transparent");
        this.canvas = n, i && Object.assign(this, i)
    }

    render(n) {
        const {size: i, canvas: r, borderColor: o, backgroundColor: a} = this,
            c = new Ie(this.position).plus(r.camera.offset);
        n || (n = this.canvas.context), n.beginPath(), n.rect(c.x, c.y, i.w, i.h), n.closePath(), o && (n.strokeStyle = o, n.stroke()), a && (n.fillStyle = a, n.fill())
    }
}

class Du extends Cr {
    constructor(n, i) {
        super(n, i);
        _(this, "type", "text");
        _(this, "name", "TextObject");
        _(this, "text", "TextObject");
        _(this, "font", "Arial");
        _(this, "textAlign", "left");
        _(this, "textBaseline", "top");
        _(this, "borderColor", "rgba(0, 0, 0, 0)");
        _(this, "fillColor", "rgba(0, 0, 0, 1)");
        this.canvas = n, i && Object.assign(this, i)
    }

    render(n) {
        n || (n = this.canvas.context), n.fillStyle = this.fillColor, n.strokeStyle = this.borderColor, n.font = `${this.size.w}px ${this.font}`, n.textBaseline = this.textBaseline, n.textAlign = this.textAlign, n.strokeText(this.text, this.position.x, this.position.y), n.fillText(this.text, this.position.x, this.position.y)
    }
}

class ju {
    constructor(e) {
        this.canvas = e
    }

    ImageObject(e) {
        return new Nu(this.canvas, e)
    }

    RectObject(e) {
        return new Vu(this.canvas, e)
    }

    TextObject(e) {
        return new Du(this.canvas, e)
    }
}

class Ln {
    constructor(e = new Re) {
        _(this, "canvas", document.createElement("canvas"));
        _(this, "context", this.canvas.getContext("2d"));
        _(this, "size", new Re);
        _(this, "camera", new Pu(this));
        _(this, "objects", new ju(this));
        this.resize(e)
    }

    clear() {
        const {w: e, h: n} = this.size;
        this.context.clearRect(0, 0, e, n)
    }

    resize(e) {
        const {w: n, h: i} = e;
        this.size = e, this.canvas.setAttribute("width", String(n)), this.canvas.setAttribute("height", String(i))
    }

    async getImage() {
        return new Promise(e => {
            const n = new Image;
            n.addEventListener("load", () => {
                e(n)
            }), n.src = this.canvas.toDataURL()
        })
    }

    getPixelColor(e) {
        const {x: n, y: i} = e, r = this.context.getImageData(n, i, 1, 1).data, o = r[0], a = r[1], c = r[2], h = r[3];
        return `rgba(${o}, ${a}, ${c}, ${h})`
    }
}

class ku {
    constructor() {
        _(this, "canvas", new Ln)
    }

    render(e) {
    }

    async flip(e, n) {
        if (this.canvas.resize(ke.value), n === "current") await this.flipFrame(Me.value[ot.value], e); else for (const i of Me.value) await this.flipFrame(i, e)
    }

    async flipFrame(e, n) {
        this.canvas.clear();
        const {w: i, h: r} = ke.value;
        this.canvas.context.save(), n === "horizontal" ? (this.canvas.context.translate(i, 0), this.canvas.context.scale(-1, 1)) : (this.canvas.context.translate(0, r), this.canvas.context.scale(1, -1)), this.canvas.context.drawImage(e.originalImage, 0, 0, i, r), this.canvas.context.restore(), e.originalImage = await this.canvas.getImage(), await e.update()
    }
}

const Ko = new ku;

class zu {
    constructor() {
        _(this, "name", "Flip");
        _(this, "settings", Lu);
        _(this, "ui", Bu);
        _(this, "render", Ko)
    }
}

const Hu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDklEQVR4nO3Yz2scZRgH8Ckqpa1SpN3MTsz7Y9fVCtWTf4CiJ/MHKIKgBxEL4qlxq6A3TcSDpImwmxjMvD8W2eJFUg+aVuhBENKTMaGJSXf3fd5NWsWcRMGkI5PNJDOb7Wa2s2Q6sg88t33feT4z3xnY1zB61ateRSoq6iQr6+esb/VxI6n1OKvlMrIOmVLdwV9VfukfWzhlJBFBS1plStrxOv3F4nJqfP5hI8mIjNyGOGZh9VpUDCpV+4mAt4mAi0TqS0QCIxI+JVIN5r5bOtpdhGwM728Xki6sOunCzWup8VsdY4jUT1EJ31ABd6jUzl16gwj9/kC5diwaQjYQrS7iQaziTSdd7AxDSvpVKvXfbQCBJkLfoBzOdIzIlNZNIrVqt7kfYk1UXMz3YfamQr8bFkDdFo0mHG5juZ7tCJItr5ykAs5TqfO7LWDRf4H+ieXLZmE1b7k9Uc1bxcqbB+2LObxIBWy2GPgPIvU0lfAhFfAxFXqWctj0ELvNYT5SzNyiQs8ELw5Dnax/7kfnQSpgIXi34Q7h+jOTrZ1o/j0qrZ2lHOaaMYTrC7FCqIBX/FHZ6ffarTHZ2gkq4HrTmo1IX7OoEMJ1ORgT/ZPhOEcOWpcVtWe8mBGvpRqMEQLrfkiG118LuxZzfXUX0XjxR4w4IM8W5x6iArb8kKxUT4SGCBhugrDokL0vSGjIk1Kfbn5pc+V6KjSEw1AAIvRMNIi4N4g7dCDjSYaQbkG4dghLMoTvIHoQ3xPx31H3LhmH+kTA2W0G9x4t0g2ILx65qSRCpuqpQMZ7ELgfnogvGhxijhbfi0ZcEMzBQZEgLF4I3kH8PyCs0ciOBIEZ/yCHCrFhyEPcNxAvHukkQtJT9ZQ/425bUp+OC8KbIJ+EXeueSfkzjpnacv9sxQPhMBL8lqvZsGuRDa8HBmGw1sm1cVchthr0ZxwztYmmq2cPXOg4RzCDn/2DYKa+jg2SG106ijhsBLLO1FyrMyl/Ia4+CCLAQRxejg3iFrLVhX1D2er6AKs9bTTVmS9/fwQz+Lz595jBvFF2HjDihAyUa8fcQfYPp7aQDVcwg2Fsw0eIAcc2/Lnvd7b6l3D1/IGDM/UWZirvNWJw2b9Pf/G3RXNsKb99ZDtRzaeLlfOPFldOdoTBsprFTN1ucadDtH4n1DWY+qHdPubFBcccW3IPzr0DdNU3uWJ2BNnDtHoyrRsx+AcxeCPs/lZRH0e2mg0DcREDk7WcESVm7juDGGzcHaG2EINLj3VwGBfEwJV2ELMQEdH8NSPT6iVswwhiwNzBkQ2j2znnFSvK3paLYXC1FaRv7IZKTS53B3EYZbXA9I3++ldqPEGIVhg0rW6dGp57wUhqWQ3Muaytcdyz9KpXRsLrP67bwHzCtPGdAAAAAElFTkSuQmCC",
    Ku = {}, Gu = E("div", {class: "icon"}, [E("img", {src: Hu})], -1), $u = E("div", {class: "name"}, " Реверс ", -1);

function Qu(t, e) {
    return ee(), se(Ee, null, [Gu, $u], 64)
}

const Wu = Oe(Ku, [["render", Qu]]), Yu = $e({
    __name: "Reverse_settings", setup(t) {
        const e = () => {
            Go.reverse()
        };
        return an(() => {
            e(), Ve.reset()
        }), (n, i) => (ee(), se("div", null, [E("button", {onClick: e}, "Реверс")]))
    }
});

class qu {
    render(e) {
    }

    reverse() {
        Me.value.reverse();
        let e = Date.now();
        for (const n of Me.value) n.lastUpdate = e += 1
    }
}

const Go = new qu;

class Xu {
    constructor() {
        _(this, "name", "Reverse");
        _(this, "ui", Wu);
        _(this, "settings", Yu);
        _(this, "render", Go)
    }
}

const Ju = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcUlEQVR4nO3Yz08TQRQH8FVjogdNjIlGjXe9cTb+Bxq0nS0HmvBD0MYDxtBtRS+ocJGoxMjObBWiAoK2UUQT1PiD7sxuwYQfKhqBKh56KCZGRNPE/toxs2kJNmqg4LJr+k3m0tN8+t7bfVmOK+TfJ3TBsR6LfCUWwU2CeEyg3Y+h/ejgJedGziohLY69BPGfVMkRH7tZnp4IVNE3XRVa6ErJDwLtXzEE+zmzRxZt+wgEyXe3KtPfgh4aw96581320El/lYYhSJsaI2cQk4FqbT4g9zAMQWBGaS3ewFkVEctURpVK4jLiXZxVEbHMYTODof02Z2VETG+vaqogEDT8wiHk2NHvs+9aDkQMe+lYZ1laRvYOQxEy4p0YgiSGgMrQdm6piO9BgRLEJ4jIlxmNSE/1uGi0r4YSBFIYgrv5ImLYS992V6QJAtH+a+XrDEV8vOeau8S0juHpyPXSRQNibDYC1Rr7E2QR7DEGIR7YydqJVSL3MgyjSDyd8FflibDt44xKUDy4WxaBxtrpd5daLCYcOMze6MkgtBVzRocNNoEgNb1ETHglEdk8FZ2XMHLQP2Ie1lBVctAJ/yHzIo5dHdjqQer7zrbzqXwwYTMg3FDd4vWpk2c7RxPPIkn6/NENuhhM2IwIPE31s1DM8HUnNS1iMRgF8RSLoNe0iDnMwzaKUcmfMX2ZDUAETaZFLBQT7ath7UVzF01TIRaCmepx6XPCtmbDHrFen/q+sWs0/jySWjBCh0RStKutKY2RQ5uPYbsZ29HYrmbqSmQRjV0vE15JnXoCSyWC+CRrp0wlrIc47pO3ZdcZDIHeTpZFZNPvs+9SLhdvtzTC0BQQkUIlli+FdooU2mn5UminSIo2dP8H74kGMyDqLr/YzD4UNOS5xTKER1I/sG2YW8l4pFDgTMdwXgi2wrNVfsUR9fV0tQCVZODlF+siWI74htYKUE3eeT1jXUQ2J6SQCh9/0Cw3E7lxQ3LiVOtgXI5atBIsQotSJCBltrl3PPk3iKkrIfyC0PQLM0wuyNQIFjck5QIkWsfAdAah0eb746mTbYNxNjN3Xs3Q2yOf6en2IXO20/zUQqVaEBUdc/HBeMojKbMCJHVeFAp5oJLwQCXmRUp7HSSbOLOnlmEg0XREi1KU/d3h96/hKF3FWSlu1mbzEIVwxuYna7U5FoAmUL4AAAAASUVORK5CYII=",
    Zu = {}, ef = E("div", {class: "icon"}, [E("img", {src: Ju})], -1), tf = E("div", {class: "name"}, " Пипетка ", -1);

function nf(t, e) {
    return ee(), se(Ee, null, [ef, tf], 64)
}

const rf = Oe(Zu, [["render", nf]]), sf = {class: "colorPicker"}, of = {class: "value"}, lf = $e({
    __name: "ColorPicker_settings", setup(t) {
        return (e, n) => (ee(), se("div", sf, [E("div", {
            class: "color",
            style: hi({background: K(qi)})
        }, null, 4), E("div", of, bn(K(qi)), 1)]))
    }
}), af = Oe(lf, [["__scopeId", "data-v-e2de7e42"]]);

class cf {
    constructor() {
        _(this, "isPause", !1)
    }

    render(e) {
        const {mouse: n} = e.canvas;
        if (!this.isPause && n.isMoving()) {
            const i = new Ir(new Ie, new Re(ke.value));
            qi.value = n.isIntersect(i) ? Bt.getPixelColor(n.position) : "rgba(0, 0, 0, 0)"
        }
        e.canvas.mouse.isPress("left") && (this.isPause = !this.isPause)
    }
}

const uf = new cf, qi = ye("rgba(0, 0, 0, 0)");

class ff {
    constructor() {
        _(this, "name", "ColorPicker");
        _(this, "ui", rf);
        _(this, "settings", af);
        _(this, "render", uf)
    }
}

function xs(t, e) {
    return Math.floor(Math.random() * (e - t + 1) + t)
}

function hf(t) {
    const e = document.createElement("canvas"), n = e.getContext("2d");
    return e.width = t.w, e.height = t.h, {canvas: e, context: n}
}

async function $o(t, e, n) {
    return new Promise(i => {
        const {canvas: r, context: o} = hf(new Re(t.width, t.height));
        o.drawImage(t, 0, 0);
        const a = o.getImageData(e.x, e.y, n.w, n.h);
        r.width = a.width, r.height = a.height, o.putImageData(a, 0, 0);
        const c = new Image;
        c.addEventListener("load", () => {
            i(c)
        }), c.src = r.toDataURL()
    })
}

class df {
    render(e) {
        it.render(e.canvas)
    }

    async crop() {
        Ve.reset();
        const e = new Ie(it.position.value), n = it.size.value;
        ke.value = n;
        for (const i of Me.value) i.originalImage = await $o(i.originalImage, e, n), await i.update()
    }
}

const pf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACuklEQVR4nO2aT2jTUBzHo0cFRT1505NXrx6EHQXZ1oNj4Abrpqi4gpNu5s8mSbFxbd5026FuXSJOBdseRMbaim6ips55EsJuXgRB9CLs1s1OnvyiA80e6WsNzYvkB19a2vx478MveX3v9y3HhRGgiM9U2uKZiuImfmb1iB9zE9NzJzmMd1FdbE909u2WmreqJA3feYMBlmtxCDfvHxI045sNQwsCEza/YkySXyAQV2/pBznaYA1ERHfPCci43HAiSyDChNEjaPoWwAQaZBTNHeU1/azrRZ1S8Xjn6GKbU7HJl/PJnLXpBnJeWx4i5XqlPqUweHq8eICKNiKVVzqkEnaqP7WMb+Qs7AbSnXi2I89r9SmFQTqQsfK72OwaRk/X/5L86ANWC2uuIOqTzzvyvFSHVMJQmRAEhRVZD28tFD4jvyMyVlrtSizVelJm9U9dnKzUknWW34EJc9OZ14h6U6+/X8q892bVapeK0XaxpDh1Ab14lcxZNTeQXvX5PCmXVmeuL3wCGE9A/NiiyHJ2D7wCDFQmkCCivYvVP8bRg72BBRlJG8d4ZNS2d7GBBdmGsd8EEYTXjKigGSecnwcKhE8bA3AoEpDeH2gQQdNPAQzpu0CA8OP36raKmAcRYYnVjI16MEyD8KnsfgHpX2gaBUyDQMjTD/dxFMEkiPjrF1tsZAzmQIS03t1M34k5EOl29jDANDoGMyAjU4tXZFne3ewYzIBcm3r8Y3h6Yci2IJoQnGfgcAZtJZUg6JtBE5CUS21p0ID4qXimongC4qfUvFUNQUwGKmGGFcmHzwhm6tbiXVxdLwR9M2gCgn2hEgT+DJhNzjyYFz0Ihc/+r4ImIHQ0wYuRCQKzCZwzYr5PjrJ/W5RWRAjCWvxXFelKLNXAjI0RFBwQqRgFfwac5QhJUnkF/gfg9zxbFj8BksH4nJMlzP0AAAAASUVORK5CYII=",
    mf = {}, gf = E("div", {class: "icon"}, [E("img", {src: pf})], -1),
    vf = E("div", {class: "name"}, " Обрезать ", -1);

function yf(t, e) {
    return ee(), se(Ee, null, [gf, vf], 64)
}

const wf = Oe(mf, [["render", yf]]), Ii = t => (Fn("data-v-a40c1603"), t = t(), Sn(), t), xf = {class: "crop"},
    _f = Ii(() => E("b", null, "Позиция", -1)), bf = Ii(() => E("div", {class: "x"}, "x", -1)),
    Af = Ii(() => E("b", null, "Размер", -1)), Ef = Ii(() => E("div", {class: "x"}, "x", -1)), If = $e({
        __name: "Crop_settings", setup(t) {
            const e = () => {
                Qo.crop()
            };
            return (n, i) => (ee(), se("div", xf, [E("div", null, [_f, Le(": "), ce(Pe, {
                modelValue: K(it).position.value.x,
                "onUpdate:modelValue": i[0] || (i[0] = r => K(it).position.value.x = r)
            }, null, 8, ["modelValue"]), bf, ce(Pe, {
                modelValue: K(it).position.value.y,
                "onUpdate:modelValue": i[1] || (i[1] = r => K(it).position.value.y = r)
            }, null, 8, ["modelValue"])]), E("div", null, [Af, Le(": "), ce(Pe, {
                modelValue: K(it).size.value.w,
                "onUpdate:modelValue": i[2] || (i[2] = r => K(it).size.value.w = r)
            }, null, 8, ["modelValue"]), Ef, ce(Pe, {
                modelValue: K(it).size.value.h,
                "onUpdate:modelValue": i[3] || (i[3] = r => K(it).size.value.h = r)
            }, null, 8, ["modelValue"])]), E("div", null, [E("button", {onClick: e}, "обрезать")])]))
        }
    }), Cf = Oe(If, [["__scopeId", "data-v-a40c1603"]]);

class Br {
    constructor(e) {
        _(this, "position", ye(new Ie));
        _(this, "size", ye(new Re));
        _(this, "isSelected", !1);
        _(this, "movingStart", new Ie);
        _(this, "config", {moving: !0, reselect: !0});
        e && (this.config = e)
    }

    render(e) {
        const {mouse: n} = e, i = "rgba(0, 0, 0, 0.91)", r = "#00a5ff",
            o = new Ir(this.position.value, this.size.value);
        n.isPress("left") && (n.isIntersect(o) ? this.movingStart = n.getPosition() : (this.position.value = n.getPosition(), this.isSelected = !0)), n.isMoving() && n.isDown("left") && (this.isSelected ? this.size.value = n.getPosition().minus(this.position.value).toSize() : (this.position.value.plus(n.getPosition().minus(this.movingStart)), this.movingStart = n.getPosition())), n.isUp("left") && (this.isSelected = !1), e.objects.RectObject({
            borderColor: r,
            size: this.size.value,
            position: this.position.value
        }).render();
        const a = e.camera.offset;
        e.objects.RectObject({
            backgroundColor: i,
            size: new Re(this.position.value.x + a.x, e.size.h),
            position: new Ie().minus(a)
        }).render(), e.objects.RectObject({
            backgroundColor: i,
            size: new Re(e.size.w, e.size.h),
            position: new Ie().minus(0, a.y).plus(this.position.value.x + this.size.value.w, 0)
        }).render(), e.objects.RectObject({
            backgroundColor: i,
            size: new Re(this.size.value.w, this.position.value.y + a.y),
            position: new Ie().minus(0, a.y).plus(this.position.value.x, 0)
        }).render(), e.objects.RectObject({
            backgroundColor: i,
            size: new Re(this.size.value.w, e.size.h),
            position: new Ie().plus(this.position.value.x, this.position.value.y + this.size.value.h)
        }).render()
    }
}

const Qo = new df, it = new Br;

class Bf {
    constructor() {
        _(this, "name", "Crop");
        _(this, "ui", wf);
        _(this, "settings", Cf);
        _(this, "render", Qo)
    }
}

const Tf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJ60lEQVR4nO2aWUwb3RWAp63avvxt1apqVXV5afvUvnR5aCu1lbo99alS1Yf0oX2BhBnbeMMGg1kTg+cOAeI/C+C5d7zgjS0/kIQEyNr8kBASSCArWfrnz15CEkrCEk5179jjsBibhGxSj3TEeDz2nM/nnuWegeNeo4gbfd9AArZLvGxDWbu+zr2PIuaQ3yAe35EEDKrKt6sF+dfc+yK1utovIgFXIkGeR7lk0r479sjQQhbcZjzNzgl4S3Fx9AvcuyzVfOPPkYBHqAdcpb6bliOtYDrRBlkHFdi0T4GyCjId984w0pOfce+aVPPyTyUBR5EgL0g6PFXoCz+kAHkHW6CsNghOiQDfRRiQ2U8WRD1mQIjHB7byyi/fqvFSTsMPRMFrRLx8jBklyNPlUuCi9bDqBUckCshEABkIID0G0YjBQlSYTXsVcNYoj5EgP4vH0FGJx7luHfn+uhsa/Wv0c1I2+baob/wxDVKkwxuQIJdKPG6SePl8IoiRgdwrrW26ZDncvEABrL0tsNnlZ+9VFvkgr7sZdO0KuAoIO1e6mUBOlxJfbgQKt5EpMRdPat8nyGNIwEGJxyX0nvTe1AZqC7Vpbb+24P27JMgTyYzzgurw4yqrcqW0NnjOvic2ZR5oYx6gnijZGVI9YMBQ3BAC88fJGMnuUaDAE/eOAYNjG2Eg9D2qujZlocjjm3TZyT2kx1Mr3Rvx8kMk4H9kBmFs+JokyE+RCV8v9QTHnDh0wxGO3LF1xqatR1XDNB1ohfyOGJRLQZD06s0qKgOQ19uy6LqEsczgdhr0CW9icCIChpgCWX3Ja7Kot/YrYGilMaXM53nJTP5O5UmVhdxHPH5G61NaEKRTfkJvUhiKLDa6vw1sPc1Q0BoFJwlDhTvAYoD9WgYMZTVNYN/XvPgzK4Ak1BAjUOoiIOnU73DlY8jqUz3Ed6pxlL0EzioriVXxi7QgVXr5h/Ripz+sGeL0hpa5WTQRKEcBKGyKgDWeZlPpSiDaL79PAZuXsGWX1ceW2KL70PcS19rqVWgaM2lBqNvoxcXekGYIDdiSXSFw+sKQ3xaDvJ4WSMTGalrQFoMyTxBMTalBlmkfAYuPQP52AoVbCejakyAF21UQtEn+bloQWnXpxTRw0xmaSmkhtO1ppktA09xYspa8rDpqVZBanf/LaUHUOMGzpXXB9AYPfbTsXJmnSTU+vjTOHe5ftFRoXCxd+5mqUyKABLwAHHwmMxA9niiXAqtC2M50gmOse9E5WsmpsS11u8FbHGHHV4eG2N/t9gB0K93s2NDyciAllQREnTzNZSqinlzb4vKvCGA+2Q724S4oOt8NRRf2g2N0H1iGdrP37F0xZuhI33HoatzDjm9fOMv+hsRWuDFyhh2XuDA46gjLTmsBKSsn4DbguxmDIJ182lWaBuTCfg3EGl9itKZQQ0eP9GsgE9fPQ7WOMJBPR4cT6RNqcgm482imyjxuKpw0Y5ELGYNIOtJT5fClXVqFY91gXpKlqKEXjp/QQB7dvAi1RoWB3Lmkeqd9e4cWO/q2zEG2FGBAevlY5iA8DosW8jxdsCc8kVBHc5QZd+nEoAYyfe8yePICDOT++Bg711HfBeOn1NgxRjJfWm4L7cVwe+YgAhaRDmu9UqZaGI1qAZ4AmZkYh52OJgby8MZ5DeTW2Ag7NvsXeyT7kA82HvYvg8juVYDaJAly3VpA9PQmS3umldTeEQNHNMKgHSE1U90YPsNAagwEZh9eBW9JmIE8vnVRA6Gxw+7xQuXOOqiAabAVzEPty0CEjng7JGBzxiCI9/6Zfoiu+VXjJFH0aNtgV6BkRxM7vnlumIF4LH4G4nc1Qxi1wfT9K+z6zoY9MHX3Mrs2f0cSxDAQhaLzahIxnmhZBGIMqa2LKMh/yRikRt/wTdamNIQyWkqHIj2wzerTit7ti2fh2unTcHLvUQZy5eQpttzo8dD+f8GnYyMwO3GVZTPWY73YTA7EwDS4GIK1Jx+qHqnU1X8nYxDmFQHfSFVLEprf2cy+fOzIAAz3HtdA7l0ZZUan01qTj/VTy+LhkG95DanAgHTybW6tIvFyQDTgedPHqUESlXyg8wg8fTAOH9oCWu3IBIRWe6eYPv1m9yh0M7aABDmyZhAkyH9jcdIaTe2VgVa25nuDB5hhh6K9arCPnM4IpNEZYlU+HYgpGO96dXjDmkE8OZ4PkCA/Ldu6evMoOnwQrWlnhk1+chHqLD6ocQTg8tlTaUGUzVHWdqRtFkUGMlOZtesr3MuIxOMWUS/PW46lrid0m7vN6oeZ/4wz48YHh6DOpAY+XWr0dSoQmpIrSlYH2ditLitJkHdzLyuiIP+O7RZJcre4VB2RiNaWJAykbUl/x2HYI++Fu5fOaefnH92E2cnr2mtcHmVBvBqILb4rrNaRP3GvIojHZ9xWPEP37CvC9LcBsioQqGrWvLKSzk1eg4XpCXj+33vs9bMH4yxrrRbs2X0KVObJCxKPRzPeg6QE0eENzCu+1F4pCqpeORjuWTUm5h79G2Ynr7FjWmfoZ6zxod2K3miM79957z+5V5Xi4uLPSrw86DaRZ+bjq8RKXVAtjtHeVT1Dlb4f3doOUi5mw4cVY2O/Am4jfk7nxGsezKX2ivwrOtctrQnOrpaKK5AKE0JtcKn/JCuMD8aTev/KKFw+MQiR6nZ2nX0nWXVbK6lDuT9y6ymSIPsojP2j1P0XnawU+cMsZlacUiYmhkYM9vrUEMYI3ZvLQLcT3HoLzeGSgK+7zWTaeiRNV9yv7haLmsJQGIiwwRpTTCA3oi6bVBCb9tJ9B5mTePyJa1Pwq9zrEEnn/S19WONy+h6bU2WxFTTTjVN2nwIVxXie3qNa8P7htUBoMIKcQ5dHOQo8MQ2sI0gfq+DP1SyFc7k3IUiQtzKY6uAkfYxQ0JLsx2zdzZDfnowjOlkxtCTjITe8eHpI+yi+Q4Gi6jiEIHu4NyU0HSIBy2yjY8TzopFohm8Wg1BVkBxcuMr9i9oQl10dXidei3SaYkw8NsD+dUu1mQqttPTXU7tSecEcb/fplN5tVzSQLaU+uu41wytt6lwr0Z6r+3CWZutpzeLeliAel7OdWwG5T6fyND0XhpOPJNiyCyY9YFEUyI0qkLNPgc1FeCYO4X7lFmQ9hD5FQgKeFU1kIu/A8tS8NLDphLHShp+xx9U85rl3SVAO/j17NKbHU/aPYnOpQOjc122kEPgJHXJw76JU55Af0aJJp/mOUHh6KYg5oNDt6hzi5Vvv5HP2F6U61/8tJOCTtJ0p2dH0KAFiqycUgrbkZ2v0yve490E8OZ4PJAF3sGeDRcrZsgrC/icF8XJ3xg9p3hVhz+kFLEo8nqNBLQm4ZlfWrs9z76tUWRu/RPVt2/F/4d6w/A+IqB/3WLWOawAAAABJRU5ErkJggg==",
    Ff = {}, Sf = E("div", {class: "icon"}, [E("img", {src: Tf})], -1), Rf = E("div", {class: "name"}, " Цензура ", -1);

function Of(t, e) {
    return ee(), se(Ee, null, [Sf, Rf], 64)
}

const Uf = Oe(Ff, [["render", Of]]), yt = t => (Fn("data-v-e74608ae"), t = t(), Sn(), t), Lf = {class: "censored"},
    Pf = yt(() => E("b", null, "Метод:", -1)), Mf = yt(() => E("option", {value: "pixel"}, "pixel", -1)), Nf = [Mf],
    Vf = yt(() => E("b", null, "Размер пикселя", -1)), Df = yt(() => E("b", null, "Позиция", -1)),
    jf = yt(() => E("div", {class: "x"}, "x", -1)), kf = yt(() => E("b", null, "Размер", -1)),
    zf = yt(() => E("div", {class: "x"}, "x", -1)), Hf = yt(() => E("option", {value: "current"}, "текущий кадр", -1)),
    Kf = yt(() => E("option", {value: "all"}, "все кадры", -1)), Gf = [Hf, Kf], $f = $e({
        __name: "Censored_settings", setup(t) {
            const e = ye("pixel"), n = ye(5), i = ye("current"), r = () => {
                switch (e.value) {
                    case"pixel": {
                        Yo.pixel(new Ie(tt.position.value), new Re(tt.size.value), n.value, i.value);
                        break
                    }
                }
            };
            return (o, a) => (ee(), se("div", Lf, [E("div", null, [Pf, Ye(E("select", {"onUpdate:modelValue": a[0] || (a[0] = c => e.value = c)}, Nf, 512), [[nn, e.value]])]), Ye(E("div", null, [Vf, Le(": "), ce(Pe, {
                modelValue: n.value,
                "onUpdate:modelValue": a[1] || (a[1] = c => n.value = c)
            }, null, 8, ["modelValue"])], 512), [[Un, e.value === "pixel"]]), E("div", null, [Df, Le(": "), ce(Pe, {
                modelValue: K(tt).position.value.x,
                "onUpdate:modelValue": a[2] || (a[2] = c => K(tt).position.value.x = c)
            }, null, 8, ["modelValue"]), jf, ce(Pe, {
                modelValue: K(tt).position.value.y,
                "onUpdate:modelValue": a[3] || (a[3] = c => K(tt).position.value.y = c)
            }, null, 8, ["modelValue"])]), E("div", null, [kf, Le(": "), ce(Pe, {
                modelValue: K(tt).size.value.w,
                "onUpdate:modelValue": a[4] || (a[4] = c => K(tt).size.value.w = c)
            }, null, 8, ["modelValue"]), zf, ce(Pe, {
                modelValue: K(tt).size.value.h,
                "onUpdate:modelValue": a[5] || (a[5] = c => K(tt).size.value.h = c)
            }, null, 8, ["modelValue"])]), E("div", null, [Ye(E("select", {"onUpdate:modelValue": a[6] || (a[6] = c => i.value = c)}, Gf, 512), [[nn, i.value]])]), E("div", null, [E("button", {onClick: r}, "создать")])]))
        }
    }), Qf = Oe($f, [["__scopeId", "data-v-e74608ae"]]);

class Wo {
    constructor(e) {
        _(this, "name", "");
        _(this, "visible", !0);
        _(this, "object");
        this.name = e
    }
}

class Wf {
    render(e) {
        tt.render(e.canvas)
    }

    async censoredPixel(e, n, i, r) {
        console.log(i, n);
        const o = Tr.canvas.camera.offset, a = new Ln(i), c = await $o(e.originalImage, n, i);
        a.objects.ImageObject({image: c, position: new Ie(0), size: i}).render();
        const h = i.w / r, g = i.h / r;
        for (let S = 0; S < g; S++) for (let P = 0; P < h; P++) {
            const te = new Ie(P, S).inc(r), X = xs(te.x, te.x + r), oe = xs(te.y, te.y + r), F = new Ie(X, oe),
                M = a.getPixelColor(F);
            a.objects.RectObject({position: te, size: new Re(r), backgroundColor: M}).render()
        }
        const y = await a.getImage(), A = new Wo("censored");
        A.object = Bt.objects.ImageObject({
            image: y,
            size: i,
            position: new Ie(n).minus(o)
        }), e.layers.push(A), await e.update()
    }

    async pixel(e, n, i, r) {
        if (r === "current") await this.censoredPixel(Me.value[ot.value], e, n, i); else for (const o of Me.value) await this.censoredPixel(o, e, n, i)
    }
}

const Yo = new Wf, tt = new Br({reselect: !0, moving: !0});

class Yf {
    constructor() {
        _(this, "name", "Censored");
        _(this, "ui", Uf);
        _(this, "settings", Qf);
        _(this, "render", Yo)
    }
}

class qf {
    constructor() {
        _(this, "iframe", document.createElement("iframe"));
        _(this, "window");
        _(this, "document");
        _(this, "head");
        _(this, "body");
        _(this, "root");
        this.iframe = document.createElement("iframe"), this.iframe.setAttribute("style", "width: 100%; height: 100%; border: none; margin: none;")
    }

    render(e) {
        this.root = e, this.root.innerHTML = "", this.root.appendChild(this.iframe), this.window = this.iframe.contentWindow, this.document = this.window.document, this.head = this.document.head, this.body = this.document.body, this.iframe.setAttribute("style", "width: 100%; height: 100%; border: none; margin: none;");
        const n = this.document.createElement("style");
        n.setAttribute("type", "text/css"), n.appendChild(this.document.createTextNode("body {padding: 0; margin: 0;}")), this.head.appendChild(n)
    }
}

class Xf {
    constructor(e) {
        _(this, "position", new Ie);
        _(this, "press", []);
        _(this, "down", []);
        _(this, "up", []);
        _(this, "speed", new Ie);
        _(this, "moving", !1);
        _(this, "wheel", null);
        _(this, "mouseWheel", e => {
            this.wheel = e.deltaY > 0 ? "down" : "up"
        });
        _(this, "mouseMove", e => {
            this.speed = new Ie(e.x, e.y).minus(this.position), this.position.x = e.x, this.position.y = e.y, this.moving = !0
        });
        _(this, "mousedown", e => {
            const n = this.getKeyById(e.button);
            this.down.push(n), this.press.push(n)
        });
        _(this, "mouseup", e => {
            const n = this.getKeyById(e.button);
            this.up.push(n), this.down = this.down.filter(i => i !== n)
        });
        _(this, "clear", () => {
            this.moving = !1, this.speed = new Ie, this.press = [], this.up = [], this.wheel = null
        });
        _(this, "getKeyById", e => {
            switch (e) {
                case 0:
                    return "left";
                case 1:
                    return "middle";
                case 2:
                    return "right";
                default:
                    return "left"
            }
        });
        this.canvas = e
    }

    enable() {
        this.canvas.events.subscribe("loop:end", this.clear), this.canvas.iframe.window.addEventListener("wheel", this.mouseWheel), this.canvas.iframe.window.addEventListener("mousedown", this.mousedown), this.canvas.iframe.window.addEventListener("mouseup", this.mouseup), this.canvas.iframe.window.addEventListener("mousemove", this.mouseMove)
    }

    disable() {
        this.canvas.events.unsubscribe("loop:end", this.clear), this.canvas.iframe.window.removeEventListener("wheel", this.mouseWheel), this.canvas.iframe.window.removeEventListener("mousedown", this.mousedown), this.canvas.iframe.window.removeEventListener("mouseup", this.mouseup), this.canvas.iframe.window.removeEventListener("mousemove", this.mouseMove)
    }

    isIntersect(e) {
        const {x: n, y: i} = this.getPosition();
        return n >= e.x && n <= e.x + e.w && i >= e.y && i <= e.y + e.h
    }

    getPosition() {
        return new Ie(this.position).minus(this.canvas.camera.offset)
    }

    getSpeed() {
        return this.speed
    }

    isMoving() {
        return this.moving
    }

    isDown(e) {
        return this.down.findIndex(n => n === e) > -1
    }

    isPress(e) {
        return this.press.findIndex(n => n === e) > -1
    }

    isUp(e) {
        return this.up.findIndex(n => n === e) > -1
    }

    isWheel(e) {
        return this.wheel === e
    }
}

class Jf {
    constructor(e) {
        _(this, "events", []);
        this.canvas = e
    }

    subscribe(e, n) {
        this.events.push({eventName: e, cb: n})
    }

    emit(e, n) {
        this.events.filter(i => i.eventName === e).forEach(i => i.cb(n))
    }

    unsubscribe(e, n) {
        this.events = this.events.filter(i => i.eventName !== e && n !== i.cb)
    }
}

class Zf extends Ln {
    constructor() {
        super();
        _(this, "iframe", new qf);
        _(this, "mouse", new Xf(this));
        _(this, "events", new Jf(this));
        _(this, "loops", new mc(this));
        _(this, "isStarted", !1);
        this.events.subscribe("resize", () => this.onResize())
    }

    render(n) {
        this.iframe.render(n), this.iframe.body.appendChild(this.canvas), this.iframe.window.addEventListener("resize", () => this.events.emit("resize")), this.isStarted = !0, this.events.emit("canvas:loaded"), this.events.emit("resize")
    }

    onResize() {
        const n = this.iframe.root.getBoundingClientRect();
        this.resize(new Re(n.width, n.height))
    }
}

class eh {
    render(e) {
    }
}

const th = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADJklEQVR4nO3ZzU/TYBwH8IbEeDBRArqtbAgIQVgiqP0VbsbEP8DEi2c9GBPjyb/AeJerhm0BhBBUsmxjyIvQdicPHvSoaNR1G+u6rU95ibyu5lnWMnCvMbI+Yd/ke+meQz9pn2ftU4qqp5566jkRYYQN2jkj8c6gPESRHODRg/736RV6OKz1zsiTFKkBAT1iBVVrm4huEY2BHOTKXPIrhuBeJhEDOciAoG45RiL7xGIgB8Ht8Sd+6hDcbpIwkAe5zikJ2iVqRGIgD4LbOR1P5ENwu0jAwBHItaX0j6MQIjBwBJJdiidjm4UwnWbGQAGIcyH1pRAEt8OsGCgAYUJozzEW3SUKAwUguN1B+XsxCG672TBQBMLwKmpxF4dkMX4TYaAIBLfDG4+VgpgKAyUgfctKhHaVhuBeNAMGSkBwW6diajkIbmutMVAG4pxPGU/FpsZAGQjLo4z9VXSnUoy9VhgoBxFU7VIwmX2DNDUGKoAwwtom7QlnqsHQvmPGVALJPn/5pHBVkOGwZjtOTKWQfk6Jt1SwFB+qK6zRAdljKgiu/U08Ve1Vod2i5phDTaaC9Cykv1UM8IgZ21hk2zYtfaY0rcFUEFx6IvbbONnR6C7tlRbx7WMNyE+tweQ9+3xysI1TGv/7if8rpOOdfPAH6RY1y2y8jzJDoEoIKyg79IhobBvZvNIyRQIEeDXFCGu3WUFF+jGHXz54rx8R97tmk2fNDllhuLUePI7l0XP9+NVlNY1vKx1zIZB4YWbIQn/epB3klHYQ0J7+e8tbSdIh1onYplkhL5mP2qm/xvLIayzFS8qv/OW2OZh6WBtBAQgIaJfl0GOqSBhOuZkPtk7G1nWIZWpVpGoZENDd3KROsyHlVtnxvPpJh7TPpQ9tGzXOJG5QNYumNQCv3Bngko5KhgOv3s+7gnvW0YixbdQ8LX2gSEnXrHYaBBQ3Jr0/YWwbWT3hzJn5dQtFSoBXnxlLMYc2bO6Dd5VmnzxKkfQBleXRto6xeKWIDmnyJcYpkgK8Oq5DehcV8fzr1dVzgfgTirSwIbUbBBRieTTELKHOWp9PPfWclPwBCBjfyj2JX7QAAAAASUVORK5CYII=",
    nh = {}, ih = E("div", {class: "icon"}, [E("img", {src: th})], -1),
    rh = E("div", {class: "name"}, " Переместить ", -1);

function sh(t, e) {
    return ee(), se(Ee, null, [ih, rh], 64)
}

const oh = Oe(nh, [["render", sh]]), lh = {};

function ah(t, e) {
    return ee(), se("div")
}

const ch = Oe(lh, [["render", ah]]), uh = new eh;

class fh {
    constructor() {
        _(this, "name", "MovingResize");
        _(this, "ui", oh);
        _(this, "settings", ch);
        _(this, "render", uh)
    }
}

class hh {
    constructor() {
        _(this, "canvas", new Ln);
        _(this, "canvasImage", new Image)
    }

    render(e) {
        We.render(e.canvas);
        const n = this.canvasImage;
        e.canvas.objects.ImageObject({image: n, position: We.position.value, size: new Re(n.width, n.height)}).render()
    }

    async getTextImage() {
        const {canvas: e} = this;
        return e.resize(We.size.value), e.clear(), e.objects.TextObject({
            font: ei.value,
            textAlign: Lh.value,
            textBaseline: Uh.value,
            borderColor: Ph.value,
            fillColor: ti.value,
            text: ni.value,
            position: new Ie,
            size: new Re(Zn.value)
        }).render(e.context), await e.getImage()
    }

    async update() {
        console.log("update"), this.canvasImage = await this.getTextImage()
    }

    async createText() {
        const e = Tr.canvas.camera.offset, n = Me.value[ot.value], i = new Wo("Text");
        i.object = Bt.objects.ImageObject({
            size: We.size.value,
            position: new Ie(We.position.value).minus(e),
            image: await this.getTextImage()
        }), n.layers.push(i), await n.update()
    }
}

const dh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFRUlEQVR4nO1YW2wUVRge1GiMibcH47sx+uI10QdfINqdmd1ZvMTWVGyJGOABH4wR0YJhG0TmzMwWotBtKSAVEBS8EIK2NUpVunPOFrq9bWktsEtpIQu0dB+ALXs75l+7yc7sbGvb3e206Z98yWbnP+fMd+Y73/nPYZiFmOdhEcnLrIg/mRAIr2LMHoJCfGXV3siaet8tI6ze0xXmkJqwyZ5HGbMGL7c8xiFM3f4bNBBKGMIfStDir06N8RJew5g1WIQ3LKv2jmUjkYJ43J9YqpCTjFlDUEjv9t8vTkgC8FtviHIIxy2K+xHGbFEk4cf1svKPJmjPlUgS8Dv1//nROH1jW+ttUy56FuEN79S0aWTV0JOc+SQaz4Q0X2XzsfNxu4JPMHNBVs6GC1RQiBfgbLygedbQM0p5hGNslfowY5bgpJYnYNZV/03Ny5a5vGEW4U85pFaU17SH05+BvF7bmpTXCsYswYrqxvJarVu1XxpLSooVyTMWueVZ+N02FNYQ3XT0XFxQcBNjlrA7Pf07dLLapwapTcHDDKWLADaZXNuPg5qc413Xk/ISxJMPmUdWAa2s1h7sjfIS+TqVZ5XI3o+/64uk55y7HqevOj0RTiLlJnAr1bFcp394waVOEmFF/GYqz4JIsV3xRM+NxDWEN/7UH7cr5BczuNVZ1x+DOkf6b8NbvK35wVQe7yD3g4yadDZ8rHOE8ohE4TkzW8F+4X4SZIV1sgLbtTs9RJ9vl4mnSmfDZ0diya9nQbh09taHiCuX12pllW67GfkGNgz47If+mCDho7PDAmZYIeerT2hllW67+vxsNvxz+zC1SnjMonTcV3ASVqQ+ZSQrje3qg9JFgkyGD+hsuH84RsEILIgUF5wIK6qb3t3ZkSETsF2w2mztrBKuX6ezYUDFkb6YVcJHCssiuXA9/ppmraxStjvRzPKiWmJ3eqKQm972x7Zr1CqTcEmVem/BSPAyfhpk1TpwS/MyUOHqbVcfRej0A2DDcCZJb/vPcAwKzCgruV8vGBEWqZ+/ZyArZ+MAtSvEM1l7QSatW5u0NgxY931f1CrjgwV0K0+gpnko40XKatrhYqFisvbZbPjwqavgXjf5L3+9J+8kUhaqlxXYLj9+iPq/0Ntw37UorJMYh4iQdyKcqG5eUdeRccHgC0Zog290SoA2+n4+Otgb4WW8L+9EBIUM7PwzU1a5wqHWK9SGyI0Sh+/uvJHgRfdzSVld1Moql+i5GqG8jOMccnN5I8KKeMvKXZ0ZizTX+PDbMxGrhHfnjYigkIt1BrKqahyY0iJPB7TV93eABKlNJqHFjua7ck6Ck9TnYeDTg1qnAYCVckh1caJaNCUg1WVkw93BCNhwnJfcr+SeCFLRyt2ZskpVu2DL011z3qGxjMn5YL8vwku4NudEBMUzWPfXpYwB4ULBJpMRw2p3sshSDQfGq2hBIddLDh++M2ck+C3uF4w2MMDaQ31RqGin3beEvzGqhn3BCOWT8lIX54wIi7C8ak9XxiaYqnahop1u3xxS3zKqhgOhBH2/vvs2L+HtOSNiV8jQrr8zZdU0Xu3O5NoT7rQ4Ccf11XAglKB7Wy4nD2kOB71jxiRYpL6YTVZgnYKTtM50jKVOqIYzbbjz8m2YqASL3C/NmAgnqsrbO9qiRrVSmcs7xonq+hyMsR76ajAYY1m1F9bgtpmNQOkiDuGBiTY0sNBc7VFcNkjq4LRccSHMEJyIl8CF2xzDEiMilTaZxEpd3eG5ABucJEVcaUgEEmpPx+lcQKmrOzz/idjmibSWzIvFvhCMOeJfd2VTikYOy2wAAAAASUVORK5CYII=",
    ph = {}, mh = E("div", {class: "icon"}, [E("img", {src: dh})], -1), gh = E("div", {class: "name"}, " Текст ", -1);

function vh(t, e) {
    return ee(), se(Ee, null, [mh, gh], 64)
}

const yh = Oe(ph, [["render", vh]]), ht = t => (Fn("data-v-8a9098b0"), t = t(), Sn(), t), wh = {class: "text"},
    xh = ht(() => E("b", null, "Позиция", -1)), _h = ht(() => E("div", {class: "x"}, "x", -1)),
    bh = ht(() => E("b", null, "Размер", -1)), Ah = ht(() => E("div", {class: "x"}, "x", -1)),
    Eh = ht(() => E("b", null, "Размер текста", -1)), Ih = ht(() => E("b", null, "Шрифт", -1)),
    Ch = ht(() => E("option", {value: "arial"}, "arial", -1)),
    Bh = ht(() => E("option", {value: "Comic Sans MS"}, "Comic Sans MS", -1)), Th = [Ch, Bh],
    Fh = ht(() => E("b", null, "Заливка:", -1)), Sh = ht(() => E("b", null, "Текст", -1)), Rh = $e({
        __name: "Text_settings", setup(t) {
            Yt(We.position, () => {
                gn.update()
            }), Yt(We.size, () => {
                gn.update()
            });
            const e = () => {
                gn.update()
            }, n = () => {
                Ve.reset(), gn.createText()
            };
            return (i, r) => (ee(), se("div", wh, [E("div", null, [xh, Le(": "), ce(Pe, {
                modelValue: K(We).position.value.x,
                "onUpdate:modelValue": r[0] || (r[0] = o => K(We).position.value.x = o)
            }, null, 8, ["modelValue"]), _h, ce(Pe, {
                modelValue: K(We).position.value.y,
                "onUpdate:modelValue": r[1] || (r[1] = o => K(We).position.value.y = o)
            }, null, 8, ["modelValue"])]), E("div", null, [bh, Le(": "), ce(Pe, {
                modelValue: K(We).size.value.w,
                "onUpdate:modelValue": r[2] || (r[2] = o => K(We).size.value.w = o)
            }, null, 8, ["modelValue"]), Ah, ce(Pe, {
                modelValue: K(We).size.value.h,
                "onUpdate:modelValue": r[3] || (r[3] = o => K(We).size.value.h = o)
            }, null, 8, ["modelValue"])]), E("div", null, [Eh, Le(": "), ce(Pe, {
                modelValue: K(Zn),
                "onUpdate:modelValue": r[4] || (r[4] = o => Se(Zn) ? Zn.value = o : null),
                onInput: e
            }, null, 8, ["modelValue"])]), E("div", null, [Ih, Le(": "), Ye(E("select", {
                "onUpdate:modelValue": r[5] || (r[5] = o => Se(ei) ? ei.value = o : null),
                onInput: e
            }, Th, 544), [[nn, K(ei)]])]), E("div", null, [Fh, Ye(E("input", {
                type: "color",
                "onUpdate:modelValue": r[6] || (r[6] = o => Se(ti) ? ti.value = o : null),
                onInput: e
            }, null, 544), [[Wi, K(ti)]])]), E("div", null, [Sh, Le(": "), Ye(E("input", {
                type: "text",
                "onUpdate:modelValue": r[7] || (r[7] = o => Se(ni) ? ni.value = o : null),
                onInput: e
            }, null, 544), [[Wi, K(ni)]])]), E("div", null, [E("button", {onClick: n}, "сохранить")])]))
        }
    }), Oh = Oe(Rh, [["__scopeId", "data-v-8a9098b0"]]), gn = new hh, We = new Br, Zn = ye(48), ei = ye("arial"),
    Uh = ye("top"), Lh = ye("left"), ti = ye("#fd0a0a"), Ph = ye("#fd0a0a"), ni = ye("new text");

class Mh {
    constructor() {
        _(this, "name", "Text");
        _(this, "ui", yh);
        _(this, "settings", Oh);
        _(this, "render", gn)
    }
}

const Me = ye([]), ke = ye(new Re), ot = ye(0), Bt = new Zf, Tr = new gc, dn = ye(!1), sn = ye(!1);
Bt.loops.add(Tr, !0);
const Ve = new vc;
Ve.add(new fh);
Ve.add(new zu);
Ve.add(new Xu);
Ve.add(new ff);
Ve.add(new Bf);
Ve.add(new Yf);
Ve.add(new Mh);
Ve.add(new _u);
const Nh = {class: "header"}, Vh = {class: "tools"}, Dh = ["onClick"], jh = $e({
        __name: "Head", setup(t) {
            const e = n => {
                Ve.active.value = n.name
            };
            return (n, i) => Ye((ee(), se("div", Nh, [E("div", Vh, [(ee(!0), se(Ee, null, pr(K(Ve).tools, r => (ee(), se("div", {
                class: Xt(["tool", {active: K(Ve).active.value === r.name}]),
                onClick: o => e(r)
            }, [(ee(), Rn(to(r.ui)))], 10, Dh))), 256))])], 512)), [[Un, !K(sn)]])
        }
    }), kh = {class: "editor"}, zh = {key: 0, class: "settings"}, Hh = $e({
        __name: "Editor", setup(t) {
            const e = ye(null), n = Vt(() => Ve.tools.find(i => i.name === Ve.active.value));
            return Yt(ke, () => {
                console.log("change")
            }), an(() => {
                Bt.render(e.value), Bt.mouse.enable(), Bt.loops.start()
            }), (i, r) => (ee(), se("div", kh, [Ye(E("div", {
                class: "canvas",
                ref_key: "canvasContent",
                ref: e
            }, null, 512), [[Un, !K(sn)]]), n.value ? (ee(), se("div", zh, [(ee(), Rn(to(n.value.settings)))])) : xi("", !0)]))
        }
    }), Kh = Oe(Hh, [["__scopeId", "data-v-69e11d6b"]]), Gh = {class: "layers"}, $h = {class: "layer"},
    Qh = ["onUpdate:modelValue"], Wh = $e({
        __name: "Layers", setup(t) {
            const e = Vt(() => Me.value[ot.value]), n = Vt(() => {
                var i;
                return (i = Me.value[ot.value]) == null ? void 0 : i.layers
            });
            return (i, r) => Ye((ee(), se("div", Gh, [(ee(!0), se(Ee, null, pr(n.value, o => (ee(), se("div", $h, [E("label", null, [Ye(E("input", {
                type: "checkbox",
                "onUpdate:modelValue": a => o.visible = a,
                onChange: r[0] || (r[0] = a => e.value.update())
            }, null, 40, Qh), [[ac, o.visible]]), Le(" " + bn(o.name), 1)])]))), 256))], 512)), [[Un, !K(sn)]])
        }
    }), Yh = Oe(Wh, [["__scopeId", "data-v-c73897ac"]]), _s = $e({
        __name: "CanvasImage",
        props: {image: {type: HTMLImageElement, required: !0}, size: {type: Re, required: !0}},
        setup(t) {
            const e = ye(null), n = t, i = new Re(50, 50);
            return an(() => {
                var h;
                const {w: r, h: o} = n.size, a = document.createElement("canvas");
                a.setAttribute("width", String(r)), a.setAttribute("height", String(o)), a.setAttribute("style", `width: ${i.w}px; height: ${i.h}px;`), a.getContext("2d").drawImage(n.image, 0, 0, r, o), (h = e.value) == null || h.appendChild(a)
            }), (r, o) => (ee(), se("div", {ref_key: "image", ref: e, class: "image"}, null, 512))
        }
    }), qh = {}, Xh = {class: "horizontalScroll"}, Jh = {class: "scroll"};

function Zh(t, e) {
    return ee(), se("div", Xh, [E("div", Jh, [ao(t.$slots, "default", {}, void 0, !0)])])
}

const ed = Oe(qh, [["render", Zh], ["__scopeId", "data-v-ffdfae86"]]), td = {class: "frames"}, nd = ["onClick"],
    id = $e({
        __name: "Frames", setup(t) {
            const e = n => {
                ot.value = n
            };
            return (n, i) => Ye((ee(), se("div", td, [K(Me).length ? (ee(), Rn(ed, {key: 0}, {
                default: Zs(() => [(ee(), se("div", {
                    class: Xt(["frame", {active: K(ot) === 0}]),
                    onClick: i[0] || (i[0] = r => e(0)),
                    key: K(Me)[0].update
                }, [ce(_s, {
                    size: K(ke),
                    image: K(Me)[0].currentImage
                }, null, 8, ["size", "image"])], 2)), (ee(!0), se(Ee, null, pr(K(Me), (r, o) => (ee(), se("div", {
                    class: Xt(["frame", {active: o === K(ot)}]),
                    onClick: a => e(o),
                    key: r.lastUpdate
                }, [ce(_s, {size: K(ke), image: r.currentImage}, null, 8, ["size", "image"])], 10, nd))), 128))]), _: 1
            })) : xi("", !0)], 512)), [[Un, !K(sn)]])
        }
    }), rd = Oe(id, [["__scopeId", "data-v-98b80218"]]),
    sd = "" + new URL("loading-6tDPekf3.gif", import.meta.url).href,
    od = "" + new URL("timer-GX-OSKpl.gif", import.meta.url).href, ld = function () {
        var t, e, n = [0, 4, 2, 1], i = [8, 8, 4, 2], r, o, a, c;
        const h = {GCExt: 249, COMMENT: 254, APPExt: 255, UNKNOWN: 1, IMAGE: 44, EOF: 59, EXT: 33};
        var g = function (j) {
            this.data = new Uint8ClampedArray(j), this.pos = 0;
            var L = this.data.length;
            this.getString = function (k) {
                for (var de = ""; k--;) de += String.fromCharCode(this.data[this.pos++]);
                return de
            }, this.readSubBlocks = function () {
                var k, de, Fe = "";
                do for (de = k = this.data[this.pos++]; de--;) Fe += String.fromCharCode(this.data[this.pos++]); while (k !== 0 && this.pos < L);
                return Fe
            }, this.readSubBlocksB = function () {
                var k, de, Fe = [];
                do for (de = k = this.data[this.pos++]; de--;) Fe.push(this.data[this.pos++]); while (k !== 0 && this.pos < L);
                return Fe
            }
        };

        function y(j, L) {
            var k, de, Fe, J, le, Ue, Je, Be, _e, fe, ze, dt;
            for (Fe = de = 0, Be = [], J = 1 << j, le = J + 1, Ue = j + 1, Je = !1; !Je;) {
                for (fe = _e, _e = 0, k = 0; k < Ue; k++) L[Fe >> 3] & 1 << (Fe & 7) && (_e |= 1 << k), Fe++;
                if (_e === J) {
                    for (Be = [], Ue = j + 1, k = 0; k < J; k++) Be[k] = [k];
                    Be[J] = [], Be[le] = null
                } else {
                    if (_e === le) {
                        Je = !0;
                        return
                    }
                    for (_e >= Be.length ? Be.push(Be[fe].concat(Be[fe][0])) : fe !== J && Be.push(Be[fe].concat(Be[_e][0])), ze = Be[_e], dt = ze.length, k = 0; k < dt; k++) c[de++] = ze[k];
                    Be.length === 1 << Ue && Ue < 12 && Ue++
                }
            }
        }

        function A(j) {
            for (var L = [], k = 0; k < j; k++) L.push([e.data[e.pos++], e.data[e.pos++], e.data[e.pos++]]);
            return L
        }

        function S() {
            var j;
            e.pos += 6, w.width = e.data[e.pos++] + (e.data[e.pos++] << 8), w.height = e.data[e.pos++] + (e.data[e.pos++] << 8), j = e.data[e.pos++], w.colorRes = (j & 112) >> 4, w.globalColourCount = 1 << (j & 7) + 1, w.bgColourIndex = e.data[e.pos++], e.pos++, j & 128 && (w.globalColourTable = A(w.globalColourCount)), setTimeout(N, 0)
        }

        function P() {
            e.pos += 1, e.getString(8) === "NETSCAPE" ? e.pos += 8 : (e.pos += 3, e.readSubBlocks())
        }

        function te() {
            var j;
            e.pos++, j = e.data[e.pos++], w.disposalMethod = (j & 28) >> 2, w.transparencyGiven = !!(j & 1), w.delayTime = e.data[e.pos++] + (e.data[e.pos++] << 8), w.transparencyIndex = e.data[e.pos++], e.pos++
        }

        function X() {
            var j, L, k;
            j = function (de) {
                var Fe, J;
                Fe = a / de, J = 0, r !== a && (o = new Uint8Array(a), r = a);
                for (let le = 0; le < 4; le++) for (let Ue = n[le]; Ue < Fe; Ue += i[le]) console.log(111, c), o.set(c.subarray(J, J + de), Ue * de), J += de
            }, L = {}, w.frames.push(L), L.disposalMethod = w.disposalMethod, L.time = w.length, L.delay = w.delayTime * 10, w.length += L.delay, w.transparencyGiven ? L.transparencyIndex = w.transparencyIndex : L.transparencyIndex = void 0, L.leftPos = e.data[e.pos++] + (e.data[e.pos++] << 8), L.topPos = e.data[e.pos++] + (e.data[e.pos++] << 8), L.width = e.data[e.pos++] + (e.data[e.pos++] << 8), L.height = e.data[e.pos++] + (e.data[e.pos++] << 8), k = e.data[e.pos++], L.localColourTableFlag = !!(k & 128), L.localColourTableFlag && (L.localColourTable = A(1 << (k & 7) + 1)), a !== L.width * L.height && (c = new Uint8Array(L.width * L.height), a = L.width * L.height), y(e.data[e.pos++], e.readSubBlocksB()), k & 64 ? (L.interlaced = !0, j(L.width)) : L.interlaced = !1, oe(L)
        }

        function oe(fe) {
            var L, k, de, Fe, J, le, Ue, Je, Be, _e, fe, ze;
            for (fe.image = document.createElement("canvas"), fe.image.width = w.width, fe.image.height = w.height, fe.image.ctx = fe.image.getContext("2d"), L = fe.localColourTableFlag ? fe.localColourTable : w.globalColourTable, w.lastFrame === null && (w.lastFrame = fe), le = w.lastFrame.disposalMethod === 2 || w.lastFrame.disposalMethod === 3, le || fe.image.ctx.drawImage(w.lastFrame.image, 0, 0, w.width, w.height), k = fe.image.ctx.getImageData(fe.leftPos, fe.topPos, fe.width, fe.height), ze = fe.transparencyIndex, de = k.data, fe.interlaced ? Be = o : Be = c, Fe = Be.length, J = 0, Ue = 0; Ue < Fe; Ue++) Je = Be[Ue], _e = L[Je], ze !== Je ? (de[J++] = _e[0], de[J++] = _e[1], de[J++] = _e[2], de[J++] = 255) : (le && (de[J + 3] = 0), J += 4);
            fe.image.ctx.putImageData(k, fe.leftPos, fe.topPos), w.lastFrame = fe, !w.waitTillDone && typeof w.onload == "function" && R()
        }

        function F() {
            w.loading = !1, w.frameCount = w.frames.length, w.lastFrame = null, e = void 0, w.complete = !0, w.disposalMethod = void 0, w.transparencyGiven = void 0, w.delayTime = void 0, w.transparencyIndex = void 0, w.waitTillDone = void 0, c = void 0, o = void 0, a = void 0, o = void 0, w.currentFrame = 0, w.frames.length > 0 && (w.image = w.frames[0].image), R(), typeof w.onloadall == "function" && w.onloadall.bind(w)({
                type: "loadall",
                path: [w]
            }), w.playOnLoad && w.play()
        }

        function M() {
            F(), typeof w.cancelCallback == "function" && w.cancelCallback.bind(w)({type: "canceled", path: [w]})
        }

        function H() {
            const j = e.data[e.pos++];
            j === h.GCExt ? te() : j === h.COMMENT ? w.comment += e.readSubBlocks() : j === h.APPExt ? P() : (j === h.UNKNOWN && (e.pos += 13), e.readSubBlocks())
        }

        function N() {
            if (w.cancel !== void 0 && w.cancel === !0) {
                M();
                return
            }
            const j = e.data[e.pos++];
            if (j === h.IMAGE) {
                if (X(), w.firstFrameOnly) {
                    F();
                    return
                }
            } else if (j === h.EOF) {
                F();
                return
            } else H();
            typeof w.onprogress == "function" && w.onprogress({
                bytesRead: e.pos,
                totalBytes: e.data.length,
                frame: w.frames.length
            }), setTimeout(N, 0)
        }

        function $(j) {
            return w.complete ? !1 : (w.cancelCallback = j, w.cancel = !0, !0)
        }

        function R() {
            w.currentFrame = 0, w.nextFrameAt = w.lastFrameAt = new Date().valueOf(), typeof w.onload == "function" && w.onload.bind(w)({
                type: "load",
                path: [w]
            }), w.onerror = w.onload = void 0
        }

        function ne(j) {
            e = new g(j), S()
        }

        function G(j) {
            console.log(j), ne(j)
        }

        function ue() {
            w.playing || (w.paused = !1, w.playing = !0, ge())
        }

        function Q() {
            w.paused = !0, w.playing = !1, clearTimeout(t)
        }

        function Y() {
            w.paused || !w.playing ? w.play() : w.pause()
        }

        function he(j) {
            clearTimeout(t), w.currentFrame = j % w.frames.length, w.playing ? ge() : w.image = w.frames[w.currentFrame].image
        }

        function Te(j) {
            clearTimeout(t), j < 0 && (j = 0), j *= 1e3, j %= w.length;
            for (var L = 0; j > w.frames[L].time + w.frames[L].delay && L < w.frames.length;) L += 1;
            w.currentFrame = L, w.playing ? ge() : w.image = w.frames[w.currentFrame].image
        }

        function ge() {
            var j, L;
            if (w.playSpeed === 0) {
                w.pause();
                return
            } else w.playSpeed < 0 ? (w.currentFrame -= 1, w.currentFrame < 0 && (w.currentFrame = w.frames.length - 1), L = w.currentFrame, L -= 1, L < 0 && (L = w.frames.length - 1), j = -w.frames[L].delay * 1 / w.playSpeed) : (w.currentFrame += 1, w.currentFrame %= w.frames.length, j = w.frames[w.currentFrame].delay * 1 / w.playSpeed), w.image = w.frames[w.currentFrame].image, t = setTimeout(ge, j)
        }

        var w = {
            onload: null,
            onerror: null,
            onprogress: null,
            onloadall: null,
            paused: !1,
            playing: !1,
            waitTillDone: !0,
            loading: !1,
            firstFrameOnly: !1,
            width: null,
            height: null,
            frames: [],
            comment: "",
            length: 0,
            currentFrame: 0,
            frameCount: 0,
            playSpeed: 1,
            lastFrame: null,
            image: null,
            playOnLoad: !0,
            load: G,
            cancel: $,
            play: ue,
            pause: Q,
            seek: Te,
            seekFrame: he,
            togglePlay: Y
        };
        return w
    };

class bs {
    constructor(e) {
        _(this, "originalImage", HTMLImageElement);
        _(this, "currentImage", HTMLImageElement);
        _(this, "layers", []);
        _(this, "lastUpdate", Date.now());
        _(this, "canvas", new Ln);
        this.originalImage = e, this.currentImage = e
    }

    async update() {
        const e = new Re(ke.value);
        this.canvas.resize(e), this.canvas.clear(), this.canvas.objects.ImageObject({
            image: this.originalImage,
            size: e
        }).render();
        for (const n of this.layers.filter(i => i.visible)) n.object.render(this.canvas.context);
        this.currentImage = await this.canvas.getImage(), this.lastUpdate = Date.now()
    }
}

const ad = async t => new Promise(e => {
    const n = new FileReader;
    n.readAsDataURL(t), n.onload = () => {
        const i = new Image;
        i.onload = function () {
            e(new Re(i.width, i.height))
        }, i.src = n.result
    }
});

class cd {
    constructor(e) {
        _(this, "frames", []);
        _(this, "onload");
        e && (this.onload = e)
    }

    async parseImage(e) {
        return new Promise(n => {
            const i = new Image;
            i.addEventListener("load", () => {
                n(i)
            }), i.src = e.toDataURL()
        })
    }

    async load(e) {
        const n = ["image/gif", "image/png", "image/jpg", "image/jpeg"];
        if (n.includes(e.type)) {
            const i = e.type === n[0];
            ke.value.w || (ke.value = await ad(e));
            const r = new FileReader;
            r.onload = async o => {
                const a = o.target.result;
                if (i) {
                    const c = new ld;
                    c.onload = async () => {
                        for (const h of c.frames) this.frames.push(new bs(await this.parseImage(h.image)));
                        this.onload && this.onload()
                    }, c.frames = [], c.load(new Uint8Array(a))
                } else {
                    const c = new Image;
                    c.onload = () => {
                        this.frames.push(new bs(c)), this.onload && this.onload()
                    }, typeof a == "string" && (c.src = a)
                }
            }, i ? r.readAsArrayBuffer(e) : r.readAsDataURL(e)
        }
    }
}

const ud = {class: "upload"}, fd = {key: 0, class: "dragInfo"}, hd = {key: 0, src: sd, alt: ""},
    dd = {key: 1, src: od, alt: ""}, pd = {key: 2}, md = {key: 3}, gd = {key: 4}, vd = $e({
        __name: "Upload", setup(t) {
            const e = Vt(() => !Me.value.length), n = ye(!1);
            let i;
            const r = async c => {
                dn.value = !0;
                const h = new cd(() => {
                    for (const g of h.frames) Me.value.push(g);
                    dn.value = !1, ot.value = 0
                });
                await h.load(c)
            }, o = c => {
                c ? (i && clearTimeout(i), n.value = !0) : i = setTimeout(() => {
                    n.value = !1
                }, 50)
            }, a = {
                drag(c) {
                    c.preventDefault()
                }, dragstart(c) {
                    c.preventDefault()
                }, dragend(c) {
                    c.preventDefault()
                }, dragover(c) {
                    c.preventDefault(), o(!0)
                }, dragenter(c) {
                    c.preventDefault(), o(!0)
                }, dragleave(c) {
                    c.preventDefault(), o(!0)
                }, async drop(c) {
                    c.preventDefault(), o(!1);
                    for (const h of c.dataTransfer.files) await r(h)
                }
            };
            return an(() => {
                Object.entries(a).forEach(([c, h]) => {
                    window.addEventListener(c, h)
                })
            }), dr(() => {
                Object.entries(a).forEach(([c, h]) => {
                    window.removeEventListener(c, h)
                })
            }), (c, h) => (ee(), se(Ee, null, [ao(c.$slots, "default", {}, void 0, !0), E("div", ud, [e.value || n.value || K(dn) ? (ee(), se("div", fd, [K(dn) ? (ee(), se("img", hd)) : (ee(), se("img", dd)), K(dn) ? (ee(), se("span", pd, "Обработка ..")) : n.value ? (ee(), se("span", md, "Бросай уже")) : (ee(), se("span", gd, "Тащи сюда свои грязные гифки"))])) : xi("", !0)])], 64))
        }
    }), yd = Oe(vd, [["__scopeId", "data-v-226be76c"]]), qo = t => (Fn("data-v-0bb6ff57"), t = t(), Sn(), t),
    wd = {class: "info"}, xd = qo(() => E("b", null, "Всего кадров:", -1)), _d = qo(() => E("b", null, "текущий:", -1)),
    bd = $e({
        __name: "Info", setup(t) {
            return Vt(() => Bt.mouse.position), (e, n) => (ee(), se("div", wd, [xd, Le(" " + bn(K(Me).length) + ", ", 1), _d, Le(" " + bn(K(ot) + 1) + ". ", 1)]))
        }
    }), Ad = Oe(bd, [["__scopeId", "data-v-0bb6ff57"]]),
    Ed = $e({components: {Info: Ad, Upload: yd, Frames: rd, Storyboard: Yh, Editor: Kh, Head: jh}}),
    Id = {class: "container"};

function Cd(t, e, n, i, r, o) {
    const a = zt("Head"), c = zt("Editor"), h = zt("Storyboard"), g = zt("Frames"), y = zt("Info"), A = zt("upload");
    return ee(), se(Ee, null, [ce(a), E("div", Id, [ce(c), ce(h)]), ce(g), ce(y), ce(A)], 64)
}

const Bd = Oe(Ed, [["render", Cd]]), Td = fc(Bd);
Td.mount("#app");
