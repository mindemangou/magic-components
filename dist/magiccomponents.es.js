var T = Object.defineProperty;
var C = (t, e, n) => e in t ? T(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var h = (t, e, n) => C(t, typeof e != "symbol" ? e + "" : e, n);
import { ajax as M, on as y, trigger as f, config as v, process as x } from "htmx.org";
const H = [], L = (t, e, n, o) => {
  class s extends HTMLElement {
    constructor() {
      super();
      h(this, "shadow", null);
      h(this, "stylecontent", o);
      h(this, "allowShadowDom", n);
      h(this, "componentKey", null);
      h(this, "data", {});
      h(this, "magicData", { data: {}, tagName: this.tagName.toLocaleLowerCase() });
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
      const i = this.tagName.toLocaleLowerCase();
      if (this.componentKey === null) {
        console.warn(`You must add the data-key attribute on each ${i}`);
        return;
      }
      const d = document.createElement("template");
      d.id = i, document.body.appendChild(d);
      const a = O(l, r), u = `${i}[data-key='${this.componentKey}']`;
      return M("GET", a, { target: `#${i}`, select: u, swap: "innerHTML" }).then(() => {
        const p = d.firstElementChild;
        return p && (this.data = b(p)), this.data;
      }).then((p) => (d.remove(), p)).catch((p) => {
        console.error(p);
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
      const s = [], c = [], g = [], l = [];
      e.innerHTML = o.join(" ");
      const r = e.querySelector("head"), i = document.head, d = /* @__PURE__ */ new Map();
      if (r == null)
        return;
      for (const a of r.children)
        d.set(a.outerHTML, a);
      for (const a of i.children)
        d.has(a.outerHTML) ? (d.delete(a.outerHTML), g.push(a)) : (f(document.body, "htmx:removingHeadElement", { headElement: a }), c.push(a));
      l.push(...d.values());
      for (const a of l) {
        let u = document.createRange().createContextualFragment(a.outerHTML);
        f(document.body, "htmx:addingHeadElement", { headElement: u }), i.appendChild(u), s.push(u);
      }
      for (const a of c)
        f(document.body, "htmx:removingHeadElement", { headElement: a }), i.removeChild(a);
      f(document.body, "htmx:afterHeadMerge", { added: s, kept: g, removed: c });
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
}, K = async ({ tagname: t, allowShadowDom: e = !1, stylecontent: n }, o, s = null) => {
  const c = L(o, s, e, n);
  S(t, c), N(H);
}, O = (t, e) => {
  const n = location.href, o = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let s = `?${new URLSearchParams({ ...o, ...t }).toString()}`, c = location.hash;
  return e.length > 0 && (c = `#${e}`), `${n}${s}${c}`;
}, b = (t) => {
  var l;
  const e = { ...t.dataset }, o = Object.entries(e).map((r) => {
    const [i, d] = r;
    try {
      return d ? [i, JSON.parse(d)] : [i, d];
    } catch {
      return [i, d];
    }
  }), s = new Map(o), c = t.querySelector("template");
  if (c) {
    const r = (l = c == null ? void 0 : c.content.textContent) == null ? void 0 : l.trim(), i = r ? JSON.parse(r) : {};
    s.set("data", i);
  }
  return s.set("tagName", t.tagName.toLowerCase()), Object.fromEntries(s);
};
let w = 0, m = null;
const q = async (t, e) => {
  var o;
  if (v.refreshOnHistoryMiss === !1)
    return console.warn("Redirect is not enabled"), !1;
  const n = document.body;
  m && (f(m, "htmx:abort", {}), (o = m.parentElement) == null || o.remove(), m = null), n.innerHTML += `<span hx-disinherit="*" class='link-parent'> 
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
  K as define,
  O as getPath,
  b as getProps,
  q as redirect
};
