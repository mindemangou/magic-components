var b = Object.defineProperty;
var E = (e, t, n) => t in e ? b(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var h = (e, t, n) => E(e, typeof t != "symbol" ? t + "" : t, n);
import { ajax as w, config as y, process as k, trigger as $ } from "htmx.org";
const g = /* @__PURE__ */ new Map();
let f = 0;
const S = (e, t, n) => {
  class s extends HTMLElement {
    constructor() {
      super();
      h(this, "shadow", null);
      h(this, "stylecontent", null);
      this.stylecontent = n;
    }
    connectedCallback() {
      var i;
      const l = this.getAttribute("data-key");
      if (l) {
        const m = `key_${f}`;
        f++, g.set(m, l);
      }
      if (((i = this.parentElement) == null ? void 0 : i.tagName) === "TEMPLATE")
        return;
      const c = x(this);
      this.hasAttribute("data-shadow") ? (this.shadow = this.attachShadow({ mode: "open" }), e({ element: this.shadow, props: c }), this.addStyle(this.shadow)) : e({ element: this, props: c });
    }
    addStyle(l) {
      if (this.stylecontent) {
        const d = document.createElement("style");
        d.innerHTML = this.stylecontent, l.appendChild(d);
      }
    }
    disconnectedCallBack() {
      t && t({ element: this });
    }
  }
  return s;
}, T = (e, t) => {
  customElements.get(e) || customElements.define(e, t);
}, M = (e) => {
  const t = e.reduce((s, r) => (s[r] = (s[r] || 0) + 1, s), {});
  return Object.entries(t).filter(([s, r]) => r > 1);
}, C = (e) => {
  const t = M(e);
  if (t.length > 0)
    for (const n of t) {
      const [s] = n;
      throw new Error(`The key '${s}' already exists`);
    }
}, N = async ({ tagname: e, stylecontent: t }, n, s = null) => {
  const r = S(n, s, t);
  T(e, r), C([...g.values()]);
}, O = (e, t) => {
  const n = location.href, s = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let r = `?${new URLSearchParams({ ...s, ...e }).toString()}`, o = location.hash;
  return t.length > 0 && (o = `#${t}`), `${n}${r}${o}`;
}, j = ({ tagname: e, key: t }, n = {}, s = "") => {
  const r = O(n, s), o = t ? `${e}[data-key='${t}']` : `${e}:nth-child(1 of ${e})`;
  return document.querySelector(o) === null ? Promise.reject("Target not found ") : w("GET", r, { target: o, select: o, swap: "outerHTML" });
}, x = (e) => {
  var d;
  const t = { ...e.dataset }, s = Object.entries(t).map((c) => {
    const [u, i] = c;
    try {
      return i ? [u, JSON.parse(i)] : [u, i];
    } catch {
      return [u, i];
    }
  }), r = new Map(s), o = e.querySelector("template");
  if (o) {
    const c = (d = o == null ? void 0 : o.content.textContent) == null ? void 0 : d.trim(), u = c ? JSON.parse(c) : {};
    r.set("data", u);
  }
  return r.set("tagName", e.tagName.toLowerCase()), Object.fromEntries(r);
};
let p = 0, a = null;
const A = async (e, t) => {
  var s;
  if (y.refreshOnHistoryMiss === !1)
    return console.warn("Redirect is not enabled"), !1;
  const n = document.body;
  a && ($(a, "htmx:abort", {}), (s = a.parentElement) == null || s.remove(), a = null), n.innerHTML += `<span hx-disinherit="*" class='link-parent'> 
    <a class='bridge-redirect-link' href='${e}' hx-headers='${JSON.stringify(t)}' hx-boost='true' id='bridge-redirect-link-${p}'></a> 
  </span>`, k(document.body), a = n.querySelector(`.link-parent>#bridge-redirect-link-${p}`), a == null || a.click(), p++;
}, H = async ({ redirect: e, loader: t }) => {
  if (e && (y.refreshOnHistoryMiss = !0), t != null && t.enable) {
    await import("./magicloader-BIhLYwnH.js");
    const n = document.createElement("magic-loader");
    n.setAttribute("data-color", t.color ?? "#639ef4"), document.body.append(n);
  }
};
export {
  H as config,
  N as define,
  O as getPath,
  x as getProps,
  A as redirect,
  j as reload
};
