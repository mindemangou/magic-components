import { ajax as u, config as d, process as m } from "htmx.org";
const p = (t, e) => {
  customElements.get(t) || customElements.define(t, e);
}, b = async (t, e, n = null) => {
  const s = (await import("./MagicComponentsConstructor-DkbxdPGo.js")).default;
  p(t, s(e, n));
}, f = (t, e) => {
  const n = location.origin, r = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let s = `?${new URLSearchParams({ ...r, ...t }).toString()}`, o = location.hash;
  return e.length > 0 && (o = `#${e}`), `${n}${s}${o}`;
}, h = ({ name: t, key: e }, n = {}, r = "") => {
  const s = f(n, r), o = e ? `${t}[data-key='${e}']` : `${t}:nth-child(1 of ${t})`;
  return u("GET", s, { target: o, select: o, swap: "outerHTML" });
}, y = (t) => {
  var i;
  const e = { ...t.dataset }, n = Object.entries(e), r = new Map(n), s = t.querySelector("template");
  if (s) {
    const a = (i = s == null ? void 0 : s.content.textContent) == null ? void 0 : i.trim(), l = a ? JSON.parse(a) : {};
    r.set("data", l);
  }
  return r.set("tagName", t.tagName.toLowerCase()), Object.fromEntries(r);
};
let c = 0;
const $ = async (t, e) => {
  var s;
  if (d.refreshOnHistoryMiss === !1)
    return console.warn("Redirect is not enabled"), !1;
  const n = document.body;
  n.innerHTML += `<span hx-disinherit="*" class='link-parent' > 
  <a class='bridge-redirect-link' href='${t}' hx-headers='${JSON.stringify(e)}' hx-boost='true' id='bridge-redirect-link-${c}' hx-sync=".bridge-redirect-link:abort" ></a> 
  </span>`, m(document.body);
  const r = n.querySelector(`.link-parent>#bridge-redirect-link-${c}`);
  r == null || r.click(), c++, (s = r == null ? void 0 : r.parentElement) == null || s.remove();
}, E = async ({ redirect: t, loader: e }) => {
  if (t && (d.refreshOnHistoryMiss = !0), e != null && e.enable) {
    await import("./magicloader-B7fWRlEn.js");
    const n = document.createElement("bridge-loader");
    n.setAttribute("data-color", e.color ?? "#639ef4"), document.body.append(n);
  }
};
export {
  E as config,
  b as define,
  f as getPath,
  y as getProps,
  $ as redirect,
  h as reload
};
