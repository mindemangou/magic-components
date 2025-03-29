import { ajax as m, config as p, process as g, trigger as h } from "htmx.org";
const f = /* @__PURE__ */ new Map();
let d = 0;
const y = (e, t) => {
  class r extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      var a;
      const s = this.getAttribute("data-key");
      if (s) {
        const l = `key_${d}`;
        d++, f.set(l, s);
      }
      if (((a = this.parentElement) == null ? void 0 : a.tagName) === "TEMPLATE")
        return;
      const i = M(this);
      e({ element: this, props: i });
    }
    disconnectedCallBack() {
      t && t({ element: this });
    }
  }
  return r;
}, b = (e, t) => {
  customElements.get(e) || customElements.define(e, t);
}, E = (e) => {
  const t = e.reduce((n, s) => (n[s] = (n[s] || 0) + 1, n), {});
  return Object.entries(t).filter(([n, s]) => s > 1);
}, $ = (e) => {
  const t = E(e);
  if (t.length > 0)
    for (const r of t) {
      const [n] = r;
      throw new Error(`The key '${n}' already exists`);
    }
}, w = async (e, t, r = null) => {
  const n = y(t, r);
  b(e, n), $([...f.values()]);
}, k = (e, t) => {
  const r = location.href, n = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let s = `?${new URLSearchParams({ ...n, ...e }).toString()}`, o = location.hash;
  return t.length > 0 && (o = `#${t}`), `${r}${s}${o}`;
}, C = ({ tagname: e, key: t }, r = {}, n = "") => {
  const s = k(r, n), o = t ? `${e}[data-key='${t}']` : `${e}:nth-child(1 of ${e})`;
  return document.querySelector(o) === null ? Promise.reject("Target not found ") : m("GET", s, { target: o, select: o, swap: "outerHTML" });
}, M = (e) => {
  var i;
  const t = { ...e.dataset }, r = Object.entries(t), n = new Map(r), s = e.querySelector("template");
  if (s) {
    const a = (i = s == null ? void 0 : s.content.textContent) == null ? void 0 : i.trim(), l = a ? JSON.parse(a) : {};
    n.set("data", l);
  }
  return n.set("tagName", e.tagName.toLowerCase()), Object.fromEntries(n);
};
let u = 0, c = null;
const x = async (e, t) => {
  var n;
  if (p.refreshOnHistoryMiss === !1)
    return console.warn("Redirect is not enabled"), !1;
  const r = document.body;
  c && (h(c, "htmx:abort", {}), (n = c.parentElement) == null || n.remove(), c = null), r.innerHTML += `<span hx-disinherit="*" class='link-parent'> 
    <a class='bridge-redirect-link' href='${e}' hx-headers='${JSON.stringify(t)}' hx-boost='true' id='bridge-redirect-link-${u}'></a> 
  </span>`, g(document.body), c = r.querySelector(`.link-parent>#bridge-redirect-link-${u}`), c == null || c.click(), u++;
}, O = async ({ redirect: e, loader: t }) => {
  if (e && (p.refreshOnHistoryMiss = !0), t != null && t.enable) {
    await import("./magicloader-B7fWRlEn.js");
    const r = document.createElement("bridge-loader");
    r.setAttribute("data-color", t.color ?? "#639ef4"), document.body.append(r);
  }
};
export {
  O as config,
  w as define,
  k as getPath,
  M as getProps,
  x as redirect,
  C as reload
};
