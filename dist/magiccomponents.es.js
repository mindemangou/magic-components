var C = Object.defineProperty;
var M = (t, e, n) => e in t ? C(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var m = (t, e, n) => M(t, typeof e != "symbol" ? e + "" : e, n);
import { ajax as x, on as y, trigger as g, config as v, process as L } from "htmx.org";
const H = [], S = (t, e, n, o, a) => {
  class d extends HTMLElement {
    constructor() {
      super();
      m(this, "shadow", null);
      m(this, "stylecontent", o);
      m(this, "allowShadowDom", n);
      m(this, "componentKey", null);
      m(this, "data", {});
      m(this, "magicData", { data: {}, tagName: this.tagName.toLocaleLowerCase() });
      m(this, "whenVisibleAllowed", a);
      this.componentKey = this.getAttribute("data-key");
    }
    connectedCallback() {
      var r;
      this.componentKey && H.push(this.componentKey), ((r = this.parentElement) == null ? void 0 : r.tagName) !== "TEMPLATE" && (this.magicData = b(this), this.allowShadowDom ? (this.shadow = this.attachShadow({ mode: "open" }), this.render(t, { element: this.shadow }), this.addStyle(this.shadow)) : this.render(t, { element: this }));
    }
    disconnectedCallBack() {
      e && e({ element: this });
    }
    render(i, r) {
      this.whenVisibleAllowed ? new IntersectionObserver((s, h) => {
        s[0].isIntersecting && (i(r), h.unobserve(this));
      }).observe(this) : i(r);
    }
    //Refresh props data
    refreshMagicData(i = {}, r = "") {
      const c = this.tagName.toLocaleLowerCase();
      if (this.componentKey === null) {
        console.warn(`You must add the data-key attribute on each ${c}`);
        return;
      }
      const s = document.createElement("template");
      s.id = c, document.body.appendChild(s);
      const h = R(i, r), T = `${c}[data-key='${this.componentKey}']`;
      return x("GET", h, { target: `#${c}`, select: T, swap: "innerHTML" }).then(() => {
        const f = s.firstElementChild;
        return f && (this.data = b(f)), this.data;
      }).then((f) => (s.remove(), f)).catch((f) => {
        console.error(f);
      });
    }
    //Add style in shadow dom
    addStyle(i) {
      if (this.stylecontent) {
        const r = document.createElement("style");
        r.innerHTML = this.stylecontent, i.appendChild(r);
      }
    }
  }
  return d;
}, k = (t, e) => {
  customElements.get(t) || customElements.define(t, e);
}, N = (t) => {
  const e = t.reduce((o, a) => (o[a] = (o[a] || 0) + 1, o), {});
  return Object.entries(e).filter(([o, a]) => a > 1);
}, $ = (t) => {
  const e = N(t);
  if (e.length > 0)
    for (const n of e) {
      const [o] = n;
      throw new Error(`The key '${o}' already exists`);
    }
}, w = (t) => {
  if (t && t.indexOf("<head") > -1) {
    const e = document.createElement("html"), o = t.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "").match(/(<head(\s[^>]*>|>)([\s\S]*?)<\/head>)/im);
    if (o) {
      const a = [], d = [], l = [], p = [];
      e.innerHTML = o.join(" ");
      const i = e.querySelector("head"), r = document.head, c = /* @__PURE__ */ new Map();
      if (i == null)
        return;
      for (const s of i.children)
        c.set(s.outerHTML, s);
      for (const s of r.children)
        c.has(s.outerHTML) ? (c.delete(s.outerHTML), l.push(s)) : (g(document.body, "htmx:removingHeadElement", { headElement: s }), d.push(s));
      p.push(...c.values());
      for (const s of p) {
        let h = document.createRange().createContextualFragment(s.outerHTML);
        g(document.body, "htmx:addingHeadElement", { headElement: h }), r.appendChild(h), a.push(h);
      }
      for (const s of d)
        g(document.body, "htmx:removingHeadElement", { headElement: s }), r.removeChild(s);
      g(document.body, "htmx:afterHeadMerge", { added: a, kept: l, removed: d });
    }
  }
}, O = () => {
  y("htmx:afterSwap", function(t) {
    const n = t.detail.xhr.response;
    w(n);
  }), y("htmx:historyRestore", function(t) {
    const e = t;
    e.detail.cacheMiss ? w(e.detail.serverResponse) : w(e.detail.item.head);
  }), y("htmx:historyItemCreated", function(t) {
    const n = t.detail.item;
    n.head = document.head.outerHTML;
  });
}, K = async ({ tagname: t, allowShadowDom: e = !1, stylecontent: n = "", whenVisible: o = !1 }, a, d = null) => {
  const l = S(a, d, e, n, o);
  k(t, l), $(H);
}, R = (t, e = "") => {
  const n = location.origin, o = location.pathname, a = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let d = `?${new URLSearchParams({ ...a, ...t }).toString()}`, l = location.hash;
  return e.length > 0 && (l = `#${e}`), `${n}${o}${d}${l}`;
}, b = (t) => {
  var p;
  const e = { ...t.dataset }, o = Object.entries(e).map((i) => {
    const [r, c] = i;
    try {
      return c ? [r, JSON.parse(c)] : [r, c];
    } catch {
      return [r, c];
    }
  }), a = new Map(o), d = t.querySelector("template");
  if (d) {
    const i = (p = d == null ? void 0 : d.content.textContent) == null ? void 0 : p.trim(), r = i ? JSON.parse(i) : {};
    a.set("data", r);
  }
  return a.set("tagName", t.tagName.toLowerCase()), Object.fromEntries(a);
};
let E = 0, u = null;
const j = async (t, e) => {
  var o;
  if (v.refreshOnHistoryMiss === !1)
    return console.warn("Redirect is not enabled"), !1;
  const n = document.body;
  u && (g(u, "htmx:abort", {}), (o = u.parentElement) == null || o.remove(), u = null), n.innerHTML += `<span hx-disinherit="*" class='link-parent'> 
    <a class='bridge-redirect-link' href='${t}' hx-headers='${JSON.stringify(e)}' hx-boost='true' id='bridge-redirect-link-${E}'></a> 
  </span>`, L(document.body), u = n.querySelector(`.link-parent>#bridge-redirect-link-${E}`), u == null || u.click(), E++;
}, A = async ({ redirect: t, loader: e, allowHeadSwap: n }) => {
  if (n && O(), t && (v.refreshOnHistoryMiss = !0), e != null && e.enable) {
    await import("./magicloader-BIhLYwnH.js");
    const o = document.createElement("magic-loader");
    o.setAttribute("data-color", e.color ?? "#639ef4"), document.body.append(o);
  }
};
export {
  A as config,
  K as define,
  R as getPath,
  b as getProps,
  j as redirect
};
