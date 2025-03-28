import { ajax as u, config as d, process as m } from "htmx.org";
const p = (e, t) => {
  customElements.get(e) || customElements.define(e, t);
}, b = async (e, t, n = null) => {
  const s = (await import("./MagicComponentsConstructor-Dm5hnmSw.js")).default;
  p(e, s(t, n));
}, g = (e, t) => {
  const n = location.origin, r = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let s = `?${new URLSearchParams({ ...r, ...e }).toString()}`, o = location.hash;
  return t.length > 0 && (o = `#${t}`), `${n}${s}${o}`;
}, h = (e, t = {}, n = "") => {
  const r = g(t, n);
  return u("GET", r, { target: e, select: e, swap: "innerHTML" });
}, y = (e) => {
  var i;
  const t = { ...e.dataset }, n = Object.entries(t), r = new Map(n), s = e.querySelector("template");
  if (s) {
    const a = (i = s == null ? void 0 : s.content.textContent) == null ? void 0 : i.trim(), l = a ? JSON.parse(a) : {};
    r.set("data", l);
  }
  return r.set("tagName", e.tagName.toLowerCase()), Object.fromEntries(r);
};
let c = 0;
const E = async (e, t) => {
  var s;
  if (d.refreshOnHistoryMiss === !1)
    return console.warn("Redirect is not enabled"), !1;
  const n = document.body;
  n.innerHTML += `<span hx-disinherit="*" class='link-parent' > 
  <a class='bridge-redirect-link' href='${e}' hx-headers='${JSON.stringify(t)}' hx-boost='true' id='bridge-redirect-link-${c}' hx-sync=".bridge-redirect-link:abort" ></a> 
  </span>`, m(document.body);
  const r = n.querySelector(`.link-parent>#bridge-redirect-link-${c}`);
  r == null || r.click(), c++, (s = r == null ? void 0 : r.parentElement) == null || s.remove();
}, $ = async ({ redirect: e, loader: t }) => {
  if (e && (d.refreshOnHistoryMiss = !0), t != null && t.enable) {
    await import("./magicloader-B7fWRlEn.js");
    const n = document.createElement("bridge-loader");
    n.setAttribute("data-color", t.color ?? "#639ef4"), document.body.append(n);
  }
};
export {
  $ as config,
  b as define,
  g as getPath,
  y as getProps,
  E as redirect,
  h as reload
};
