import { ajax as h, config as m, process as y, trigger as b } from "htmx.org";
const g = /* @__PURE__ */ new Map();
let f = 0;
const E = (e, t) => {
  class r extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      var l;
      const s = this.getAttribute("data-key");
      if (s) {
        const a = `key_${f}`;
        f++, g.set(a, s);
      }
      if (((l = this.parentElement) == null ? void 0 : l.tagName) === "TEMPLATE")
        return;
      const i = w(this);
      e({ element: this, props: i });
    }
    disconnectedCallBack() {
      t && t({ element: this });
    }
  }
  return r;
}, k = (e, t) => {
  customElements.get(e) || customElements.define(e, t);
}, $ = (e) => {
  const t = e.reduce((n, s) => (n[s] = (n[s] || 0) + 1, n), {});
  return Object.entries(t).filter(([n, s]) => s > 1);
}, T = (e) => {
  const t = $(e);
  if (t.length > 0)
    for (const r of t) {
      const [n] = r;
      throw new Error(`The key '${n}' already exists`);
    }
}, x = async (e, t, r = null) => {
  const n = E(t, r);
  k(e, n), T([...g.values()]);
}, M = (e, t) => {
  const r = location.href, n = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let s = `?${new URLSearchParams({ ...n, ...e }).toString()}`, o = location.hash;
  return t.length > 0 && (o = `#${t}`), `${r}${s}${o}`;
}, S = ({ tagname: e, key: t }, r = {}, n = "") => {
  const s = M(r, n), o = t ? `${e}[data-key='${t}']` : `${e}:nth-child(1 of ${e})`;
  return document.querySelector(o) === null ? Promise.reject("Target not found ") : h("GET", s, { target: o, select: o, swap: "outerHTML" });
}, w = (e) => {
  var l;
  const t = { ...e.dataset }, n = Object.entries(t).map((a) => {
    const [u, d] = a;
    try {
      return d ? [u, JSON.parse(d)] : [u, d];
    } catch {
      return [u, d];
    }
  }), s = new Map(n), o = e.querySelector("template");
  if (o) {
    const a = (l = o == null ? void 0 : o.content.textContent) == null ? void 0 : l.trim(), u = a ? JSON.parse(a) : {};
    s.set("data", u);
  }
  s.set("tagName", e.tagName.toLowerCase());
  const i = Object.fromEntries(s);
  return console.log(i), i;
};
let p = 0, c = null;
const q = async (e, t) => {
  var n;
  if (m.refreshOnHistoryMiss === !1)
    return console.warn("Redirect is not enabled"), !1;
  const r = document.body;
  c && (b(c, "htmx:abort", {}), (n = c.parentElement) == null || n.remove(), c = null), r.innerHTML += `<span hx-disinherit="*" class='link-parent'> 
    <a class='bridge-redirect-link' href='${e}' hx-headers='${JSON.stringify(t)}' hx-boost='true' id='bridge-redirect-link-${p}'></a> 
  </span>`, y(document.body), c = r.querySelector(`.link-parent>#bridge-redirect-link-${p}`), c == null || c.click(), p++;
}, L = async ({ redirect: e, loader: t }) => {
  if (e && (m.refreshOnHistoryMiss = !0), t != null && t.enable) {
    await import("./magicloader-B7fWRlEn.js");
    const r = document.createElement("bridge-loader");
    r.setAttribute("data-color", t.color ?? "#639ef4"), document.body.append(r);
  }
};
export {
  L as config,
  x as define,
  M as getPath,
  w as getProps,
  q as redirect,
  S as reload
};
