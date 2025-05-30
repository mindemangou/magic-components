var w = Object.defineProperty;
var E = (t, e, o) => e in t ? w(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var i = (t, e, o) => E(t, typeof e != "symbol" ? e + "" : e, o);
const y = [], C = ({ connected: t, disconnected: e }, { allowShadowDom: o, stylecontent: n, whenVisible: r }) => {
  class c extends HTMLElement {
    //private randomKey:string|null=null;
    constructor() {
      super();
      i(this, "shadow", null);
      i(this, "stylecontent", n);
      i(this, "allowShadowDom", o);
      i(this, "componentKey", null);
      i(this, "data", {});
      i(this, "whenVisibleAllowed", r);
      this.componentKey = this.getAttribute("data-key"), this.refreshProps = this.refreshProps.bind(this), this.sendData = this.sendData.bind(this);
    }
    connectedCallback() {
      var a;
      this.componentKey && y.push(this.componentKey), ((a = this.parentElement) == null ? void 0 : a.tagName) !== "TEMPLATE" && (this.whenVisibleAllowed || this.render());
    }
    disconnectedCallBack() {
      e && e({ element: this });
    }
    // private getRandomKey(){
    //     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     let  key = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    //     return key;
    // }
    attributeChangedCallback(s, a, h) {
      if (h !== "true")
        return s;
      this.render();
    }
    render() {
      const s = f(this);
      this.allowShadowDom ? (this.shadow = this.attachShadow({ mode: "open" }), t({ element: this.shadow, props: s, refreshProps: this.refreshProps, sendData: this.sendData, key: this.componentKey }), this.addStyle(this.shadow)) : t({ element: this, props: s, refreshProps: this.refreshProps, sendData: this.sendData, key: this.componentKey });
    }
    //Refresh props data
    async refreshProps(s = {}, a = "") {
      const { ajax: h } = (await import("htmx.org")).default;
      if (this.componentKey === null) {
        console.warn("You must add the data-key attribute on each element");
        return;
      }
      const p = document.createElement("template");
      p.id = this.componentKey;
      const m = document.body.appendChild(p), g = S(s, a), b = `[data-key='${this.componentKey}']`;
      return h("get", g, { target: `#${m.id}`, select: b, swap: "innerHTML" }).then(() => {
        const u = m.firstElementChild;
        return u && (this.data = f(u)), this.data;
      }).then((u) => (m == null || m.remove(), u)).catch((u) => {
        console.error(u);
      });
    }
    async sendData(s, a) {
      if (!customElements.get(s)) {
        console.error(`The ${s} custom element has not been defined yet`);
        return;
      }
      const h = document.querySelector(s), p = new CustomEvent("incoming_data", {
        detail: { bag: a }
      });
      h == null || h.dispatchEvent(p);
    }
    //Add style in shadow dom
    addStyle(s) {
      if (this.stylecontent) {
        const a = document.createElement("style");
        a.innerHTML = this.stylecontent, s.appendChild(a);
      }
    }
  }
  return i(c, "observedAttributes", ["data-render"]), c;
}, k = (t, e) => {
  customElements.get(t) || customElements.define(t, e);
}, P = (t) => {
  const e = t.reduce((n, r) => (n[r] = (n[r] || 0) + 1, n), {});
  return Object.entries(e).filter(([n, r]) => r > 1);
}, T = (t) => {
  const e = P(t);
  if (e.length > 0)
    for (const o of e) {
      const [n] = o;
      throw new Error(`The key '${n}' already exists`);
    }
}, K = new IntersectionObserver((t, e) => {
  var o;
  for (const n of t)
    n.isIntersecting && ((o = n == null ? void 0 : n.target) == null || o.setAttribute("data-render", "true"), e.unobserve(n.target));
}), D = async ({ tagname: t, allowShadowDom: e = !1, stylecontent: o = "", whenVisible: n = !1 }, r, c = null) => {
  const l = C({ connected: r, disconnected: c }, { allowShadowDom: e, stylecontent: o, whenVisible: n });
  if (k(t, l), T(y), n) {
    const d = document.querySelectorAll(t);
    for (const s of d)
      K.observe(s);
  }
}, S = (t, e = "") => {
  const o = location.origin, n = location.pathname, r = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let c = `?${new URLSearchParams({ ...r, ...t }).toString()}`, l = location.hash;
  return e.length > 0 && (l = `#${e}`), `${o}${n}${c}${l}`;
}, f = (t) => {
  const e = { ...t.dataset }, n = Object.entries(e).map((l) => {
    const [d, s] = l;
    try {
      return s ? [d, JSON.parse(s)] : [d, s];
    } catch {
      return [d, s];
    }
  }), r = new Map(n);
  return r.set("tagname", t.tagName.toLowerCase()), Object.fromEntries(r);
}, $ = async ({ loader: t }) => {
  if (t != null && t.enable) {
    await import("./magicloader-Dzr0wQWE.js");
    const e = document.createElement("magic-loader");
    e.setAttribute("data-color", t.color ?? "#639ef4"), document.body.append(e);
  }
};
export {
  $ as config,
  D as define,
  S as getPath,
  f as getProps
};
