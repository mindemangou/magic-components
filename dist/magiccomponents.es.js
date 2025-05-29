var w = Object.defineProperty;
var E = (e, t, o) => t in e ? w(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var i = (e, t, o) => E(e, typeof t != "symbol" ? t + "" : t, o);
const y = [], C = ({ connected: e, disconnected: t }, { allowShadowDom: o, stylecontent: n, whenVisible: r }) => {
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
      t && t({ element: this });
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
      this.allowShadowDom ? (this.shadow = this.attachShadow({ mode: "open" }), e({ element: this.shadow, props: s, refreshProps: this.refreshProps, send: this.sendData, key: this.componentKey }), this.addStyle(this.shadow)) : e({ element: this, props: s, refreshProps: this.refreshProps, send: this.sendData, key: this.componentKey });
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
}, k = (e, t) => {
  customElements.get(e) || customElements.define(e, t);
}, P = (e) => {
  const t = e.reduce((n, r) => (n[r] = (n[r] || 0) + 1, n), {});
  return Object.entries(t).filter(([n, r]) => r > 1);
}, T = (e) => {
  const t = P(e);
  if (t.length > 0)
    for (const o of t) {
      const [n] = o;
      throw new Error(`The key '${n}' already exists`);
    }
}, K = new IntersectionObserver((e, t) => {
  var o;
  for (const n of e)
    n.isIntersecting && ((o = n == null ? void 0 : n.target) == null || o.setAttribute("data-render", "true"), t.unobserve(n.target));
}), $ = async ({ tagname: e, allowShadowDom: t = !1, stylecontent: o = "", whenVisible: n = !1 }, r, c = null) => {
  const l = C({ connected: r, disconnected: c }, { allowShadowDom: t, stylecontent: o, whenVisible: n });
  if (k(e, l), T(y), n) {
    const d = document.querySelectorAll(e);
    for (const s of d)
      K.observe(s);
  }
}, S = (e, t = "") => {
  const o = location.origin, n = location.pathname, r = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let c = `?${new URLSearchParams({ ...r, ...e }).toString()}`, l = location.hash;
  return t.length > 0 && (l = `#${t}`), `${o}${n}${c}${l}`;
}, f = (e) => {
  const t = { ...e.dataset }, n = Object.entries(t).map((l) => {
    const [d, s] = l;
    try {
      return s ? [d, JSON.parse(s)] : [d, s];
    } catch {
      return [d, s];
    }
  }), r = new Map(n);
  return r.set("tagname", e.tagName.toLowerCase()), Object.fromEntries(r);
}, L = async ({ loader: e }) => {
  if (e != null && e.enable) {
    await import("./magicloader-Dzr0wQWE.js");
    const t = document.createElement("magic-loader");
    t.setAttribute("data-color", e.color ?? "#639ef4"), document.body.append(t);
  }
};
export {
  L as config,
  $ as define,
  S as getPath,
  f as getProps
};
