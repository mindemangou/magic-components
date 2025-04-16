var T = Object.defineProperty;
var C = (t, e, n) => e in t ? T(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var u = (t, e, n) => C(t, typeof e != "symbol" ? e + "" : e, n);
import { ajax as M, on as y, trigger as g, config as v, process as x } from "htmx.org";
const H = [], L = (t, e, n, o) => {
  class s extends HTMLElement {
    constructor() {
      super();
      u(this, "shadow", null);
      u(this, "stylecontent", o);
      u(this, "allowShadowDom", n);
      u(this, "componentKey", null);
      u(this, "data", {});
      u(this, "magicData", { data: {}, tagName: this.tagName.toLocaleLowerCase() });
      this.componentKey = this.getAttribute("data-key");
    }
    connectedCallback() {
      var r;
      this.componentKey && H.push(this.componentKey), ((r = this.parentElement) == null ? void 0 : r.tagName) !== "TEMPLATE" && (this.magicData = b(this), this.allowShadowDom ? (this.shadow = this.attachShadow({ mode: "open" }), t({ element: this.shadow }), this.addStyle(this.shadow)) : t({ element: this }));
    }
    disconnectedCallBack() {
      e && e({ element: this });
    }
    //Refresh props data
    refreshMagicData(l = {}, r = "") {
      const c = this.tagName.toLocaleLowerCase();
      if (this.componentKey === null) {
        console.warn(`You must add the data-key attribute on each ${c}`);
        return;
      }
      const i = document.createElement("template");
      i.id = c, document.body.appendChild(i);
      const a = O(l, r), p = `${c}[data-key='${this.componentKey}']`;
      return M("GET", a, { target: `#${c}`, select: p, swap: "innerHTML" }).then(() => {
        const f = i.firstElementChild;
        return f && (this.data = b(f)), this.data;
      }).then((f) => (i.remove(), f)).catch((f) => {
        console.error(f);
      });
    }
    //Add style in shadow dom
    addStyle(l) {
      if (this.stylecontent) {
        const r = document.createElement("style");
        r.innerHTML = this.stylecontent, l.appendChild(r);
      }
    }
  }
  return s;
}, S = (t, e) => {
  customElements.get(t) || customElements.define(t, e);
}, k = (t) => {
  const e = t.reduce((o, s) => (o[s] = (o[s] || 0) + 1, o), {});
  return Object.entries(e).filter(([o, s]) => s > 1);
}, N = (t) => {
  const e = k(t);
  if (e.length > 0)
    for (const n of e) {
      const [o] = n;
      throw new Error(`The key '${o}' already exists`);
    }
}, E = (t) => {
  if (t && t.indexOf("<head") > -1) {
    const e = document.createElement("html"), o = t.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "").match(/(<head(\s[^>]*>|>)([\s\S]*?)<\/head>)/im);
    if (o) {
      const s = [], d = [], h = [], l = [];
      e.innerHTML = o.join(" ");
      const r = e.querySelector("head"), c = document.head, i = /* @__PURE__ */ new Map();
      if (r == null)
        return;
      for (const a of r.children)
        i.set(a.outerHTML, a);
      for (const a of c.children)
        i.has(a.outerHTML) ? (i.delete(a.outerHTML), h.push(a)) : (g(document.body, "htmx:removingHeadElement", { headElement: a }), d.push(a));
      l.push(...i.values());
      for (const a of l) {
        let p = document.createRange().createContextualFragment(a.outerHTML);
        g(document.body, "htmx:addingHeadElement", { headElement: p }), c.appendChild(p), s.push(p);
      }
      for (const a of d)
        g(document.body, "htmx:removingHeadElement", { headElement: a }), c.removeChild(a);
      g(document.body, "htmx:afterHeadMerge", { added: s, kept: h, removed: d });
    }
  }
}, $ = () => {
  y("htmx:afterSwap", function(t) {
    const n = t.detail.xhr.response;
    E(n);
  }), y("htmx:historyRestore", function(t) {
    const e = t;
    e.detail.cacheMiss ? E(e.detail.serverResponse) : E(e.detail.item.head);
  }), y("htmx:historyItemCreated", function(t) {
    const n = t.detail.item;
    n.head = document.head.outerHTML;
  });
}, D = async ({ tagname: t, allowShadowDom: e = !1, stylecontent: n = "" }, o, s = null) => {
  const d = L(o, s, e, n);
  S(t, d), N(H);
}, O = (t, e = "") => {
  const n = location.origin, o = location.pathname, s = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let d = `?${new URLSearchParams({ ...s, ...t }).toString()}`, h = location.hash;
  return e.length > 0 && (h = `#${e}`), `${n}${o}${d}${h}`;
}, b = (t) => {
  var l;
  const e = { ...t.dataset }, o = Object.entries(e).map((r) => {
    const [c, i] = r;
    try {
      return i ? [c, JSON.parse(i)] : [c, i];
    } catch {
      return [c, i];
    }
  }), s = new Map(o), d = t.querySelector("template");
  if (d) {
    const r = (l = d == null ? void 0 : d.content.textContent) == null ? void 0 : l.trim(), c = r ? JSON.parse(r) : {};
    s.set("data", c);
  }
  return s.set("tagName", t.tagName.toLowerCase()), Object.fromEntries(s);
};
let w = 0, m = null;
const K = async (t, e) => {
  var o;
  if (v.refreshOnHistoryMiss === !1)
    return console.warn("Redirect is not enabled"), !1;
  const n = document.body;
  m && (g(m, "htmx:abort", {}), (o = m.parentElement) == null || o.remove(), m = null), n.innerHTML += `<span hx-disinherit="*" class='link-parent'> 
    <a class='bridge-redirect-link' href='${t}' hx-headers='${JSON.stringify(e)}' hx-boost='true' id='bridge-redirect-link-${w}'></a> 
  </span>`, x(document.body), m = n.querySelector(`.link-parent>#bridge-redirect-link-${w}`), m == null || m.click(), w++;
}, j = async ({ redirect: t, loader: e, allowHeadSwap: n }) => {
  if (n && $(), t && (v.refreshOnHistoryMiss = !0), e != null && e.enable) {
    await import("./magicloader-BIhLYwnH.js");
    const o = document.createElement("magic-loader");
    o.setAttribute("data-color", e.color ?? "#639ef4"), document.body.append(o);
  }
};
export {
  j as config,
  D as define,
  O as getPath,
  b as getProps,
  K as redirect
};
