var H = Object.defineProperty;
var T = (t, e, o) => e in t ? H(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var m = (t, e, o) => T(t, typeof e != "symbol" ? e + "" : e, o);
import l from "htmx.org";
const E = [], C = (t, e, o, n, a) => {
  class d extends HTMLElement {
    constructor() {
      super();
      m(this, "shadow", null);
      m(this, "stylecontent", n);
      m(this, "allowShadowDom", o);
      m(this, "componentKey", null);
      m(this, "data", {});
      m(this, "magicData", { data: {}, tagName: this.tagName.toLocaleLowerCase() });
      m(this, "whenVisibleAllowed", a);
      this.componentKey = this.getAttribute("data-key");
    }
    connectedCallback() {
      var s;
      this.componentKey && E.push(this.componentKey), ((s = this.parentElement) == null ? void 0 : s.tagName) !== "TEMPLATE" && (this.whenVisibleAllowed || this.render());
    }
    disconnectedCallBack() {
      e && e({ element: this });
    }
    attributeChangedCallback(i, s, c) {
      if (c !== "true")
        return i;
      this.render();
    }
    render() {
      this.magicData = w(this), this.allowShadowDom ? (this.shadow = this.attachShadow({ mode: "open" }), t({ element: this.shadow }), this.addStyle(this.shadow)) : t({ element: this });
    }
    //Refresh props data
    refreshMagicData(i = {}, s = "") {
      const c = this.tagName.toLocaleLowerCase();
      if (this.componentKey === null) {
        console.warn(`You must add the data-key attribute on each ${c}`);
        return;
      }
      const r = document.createElement("template");
      r.id = c, document.body.appendChild(r);
      const p = N(i, s), v = `${c}[data-key='${this.componentKey}']`;
      return l.ajax("get", p, { target: `#${c}`, select: v, swap: "innerHTML" }).then(() => {
        const g = r.firstElementChild;
        return g && (this.data = w(g)), this.data;
      }).then((g) => (r.remove(), g)).catch((g) => {
        console.error(g);
      });
    }
    //Add style in shadow dom
    addStyle(i) {
      if (this.stylecontent) {
        const s = document.createElement("style");
        s.innerHTML = this.stylecontent, i.appendChild(s);
      }
    }
  }
  return m(d, "observedAttributes", ["data-render"]), d;
}, x = (t, e) => {
  customElements.get(t) || customElements.define(t, e);
}, S = (t) => {
  const e = t.reduce((n, a) => (n[a] = (n[a] || 0) + 1, n), {});
  return Object.entries(e).filter(([n, a]) => a > 1);
}, L = (t) => {
  const e = S(t);
  if (e.length > 0)
    for (const o of e) {
      const [n] = o;
      throw new Error(`The key '${n}' already exists`);
    }
}, y = (t) => {
  if (t && t.indexOf("<head") > -1) {
    const e = document.createElement("html"), n = t.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "").match(/(<head(\s[^>]*>|>)([\s\S]*?)<\/head>)/im);
    if (n) {
      const a = [], d = [], h = [], u = [];
      e.innerHTML = n.join(" ");
      const i = e.querySelector("head"), s = document.head, c = /* @__PURE__ */ new Map();
      if (i == null)
        return;
      for (const r of i.children)
        c.set(r.outerHTML, r);
      for (const r of s.children)
        c.has(r.outerHTML) ? (c.delete(r.outerHTML), h.push(r)) : (l.trigger(document.body, "htmx:removingHeadElement", { headElement: r }), d.push(r));
      u.push(...c.values());
      for (const r of u) {
        let p = document.createRange().createContextualFragment(r.outerHTML);
        l.trigger(document.body, "htmx:addingHeadElement", { headElement: p }), s.appendChild(p), a.push(p);
      }
      for (const r of d)
        l.trigger(document.body, "htmx:removingHeadElement", { headElement: r }), s.removeChild(r);
      l.trigger(document.body, "htmx:afterHeadMerge", { added: a, kept: h, removed: d });
    }
  }
}, M = () => {
  l.on("htmx:afterSwap", function(t) {
    const o = t.detail.xhr.response;
    y(o);
  }), l.on("htmx:historyRestore", function(t) {
    const e = t;
    e.detail.cacheMiss ? y(e.detail.serverResponse) : y(e.detail.item.head);
  }), l.on("htmx:historyItemCreated", function(t) {
    const o = t.detail.item;
    o.head = document.head.outerHTML;
  });
}, k = new IntersectionObserver((t, e) => {
  var o;
  console.log("first");
  for (const n of t)
    n.isIntersecting && ((o = n == null ? void 0 : n.target) == null || o.setAttribute("data-render", "true"), e.unobserve(n.target));
}), R = async ({ tagname: t, allowShadowDom: e = !1, stylecontent: o = "", whenVisible: n = !1 }, a, d = null) => {
  const h = C(a, d, e, o, n);
  if (x(t, h), L(E), n) {
    const u = document.querySelectorAll(t);
    for (const i of u)
      k.observe(i);
  }
}, N = (t, e = "") => {
  const o = location.origin, n = location.pathname, a = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let d = `?${new URLSearchParams({ ...a, ...t }).toString()}`, h = location.hash;
  return e.length > 0 && (h = `#${e}`), `${o}${n}${d}${h}`;
}, w = (t) => {
  var u;
  const e = { ...t.dataset }, n = Object.entries(e).map((i) => {
    const [s, c] = i;
    try {
      return c ? [s, JSON.parse(c)] : [s, c];
    } catch {
      return [s, c];
    }
  }), a = new Map(n), d = t.querySelector("template");
  if (d) {
    const i = (u = d == null ? void 0 : d.content.textContent) == null ? void 0 : u.trim(), s = i ? JSON.parse(i) : {};
    a.set("data", s);
  }
  return a.set("tagName", t.tagName.toLowerCase()), Object.fromEntries(a);
};
let b = 0, f = null;
const q = async (t, e) => {
  var n;
  if (l.config.refreshOnHistoryMiss === !1)
    return console.warn("Redirect is not enabled"), !1;
  const o = document.body;
  f && (l.trigger(f, "htmx:abort", {}), (n = f.parentElement) == null || n.remove(), f = null), o.innerHTML += `<span hx-disinherit="*" class='link-parent'> 
    <a class='bridge-redirect-link' href='${t}' hx-headers='${JSON.stringify(e)}' hx-boost='true' id='bridge-redirect-link-${b}'></a> 
  </span>`, l.process(document.body), f = o.querySelector(`.link-parent>#bridge-redirect-link-${b}`), f == null || f.click(), b++;
}, A = async ({ redirect: t, loader: e, allowHeadSwap: o }) => {
  if (o && M(), t && (l.config.refreshOnHistoryMiss = !0), e != null && e.enable) {
    await import("./magicloader-g0T-2qCj.js");
    const n = document.createElement("magic-loader");
    n.setAttribute("data-color", e.color ?? "#639ef4"), document.body.append(n);
  }
};
export {
  A as config,
  R as define,
  N as getPath,
  w as getProps,
  q as redirect
};
