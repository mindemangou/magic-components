var H = Object.defineProperty;
var T = (t, e, o) => e in t ? H(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[e] = o;
var m = (t, e, o) => T(t, typeof e != "symbol" ? e + "" : e, o);
const E = [], C = ({ connected: t, disconnected: e }, { allowShadowDom: o, stylecontent: n, whenVisible: s }) => {
  class r extends HTMLElement {
    constructor() {
      super();
      m(this, "shadow", null);
      m(this, "stylecontent", n);
      m(this, "allowShadowDom", o);
      m(this, "componentKey", null);
      m(this, "data", {});
      m(this, "magicData", { data: {}, tagName: this.tagName.toLocaleLowerCase() });
      m(this, "whenVisibleAllowed", s);
      this.componentKey = this.getAttribute("data-key");
    }
    connectedCallback() {
      var c;
      this.componentKey && E.push(this.componentKey), ((c = this.parentElement) == null ? void 0 : c.tagName) !== "TEMPLATE" && (this.whenVisibleAllowed || this.render());
    }
    disconnectedCallBack() {
      e && e({ element: this });
    }
    attributeChangedCallback(d, c, l) {
      if (l !== "true")
        return d;
      this.render();
    }
    render() {
      this.magicData = b(this), this.allowShadowDom ? (this.shadow = this.attachShadow({ mode: "open" }), t({ element: this.shadow }), this.addStyle(this.shadow)) : t({ element: this });
    }
    //Refresh props data
    async refreshMagicData(d = {}, c = "") {
      const { ajax: l } = (await import("htmx.org")).default, h = this.tagName.toLocaleLowerCase();
      if (this.componentKey === null) {
        console.warn(`You must add the data-key attribute on each ${h}`);
        return;
      }
      const a = document.createElement("template");
      a.id = h, document.body.appendChild(a);
      const p = N(d, c), v = `${h}[data-key='${this.componentKey}']`;
      return l("get", p, { target: `#${h}`, select: v, swap: "innerHTML" }).then(() => {
        const y = a.firstElementChild;
        return y && (this.data = b(y)), this.data;
      }).then((y) => (a.remove(), y)).catch((y) => {
        console.error(y);
      });
    }
    //Add style in shadow dom
    addStyle(d) {
      if (this.stylecontent) {
        const c = document.createElement("style");
        c.innerHTML = this.stylecontent, d.appendChild(c);
      }
    }
  }
  return m(r, "observedAttributes", ["data-render"]), r;
}, S = (t, e) => {
  customElements.get(t) || customElements.define(t, e);
}, x = (t) => {
  const e = t.reduce((n, s) => (n[s] = (n[s] || 0) + 1, n), {});
  return Object.entries(e).filter(([n, s]) => s > 1);
}, L = (t) => {
  const e = x(t);
  if (e.length > 0)
    for (const o of e) {
      const [n] = o;
      throw new Error(`The key '${n}' already exists`);
    }
}, g = async (t, e) => {
  if (t && t.indexOf("<head") > -1) {
    const o = document.createElement("html"), s = t.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, "").match(/(<head(\s[^>]*>|>)([\s\S]*?)<\/head>)/im);
    if (s) {
      const r = [], i = [], u = [], d = [];
      o.innerHTML = s.join(" ");
      const c = o.querySelector("head"), l = document.head, h = /* @__PURE__ */ new Map();
      if (c == null)
        return;
      for (const a of c.children)
        h.set(a.outerHTML, a);
      for (const a of l.children)
        h.has(a.outerHTML) ? (h.delete(a.outerHTML), u.push(a)) : (e(document.body, "htmx:removingHeadElement", { headElement: a }), i.push(a));
      d.push(...h.values());
      for (const a of d) {
        let p = document.createRange().createContextualFragment(a.outerHTML);
        e(document.body, "htmx:addingHeadElement", { headElement: p }), l.appendChild(p), r.push(p);
      }
      for (const a of i)
        e(document.body, "htmx:removingHeadElement", { headElement: a }), l.removeChild(a);
      e(document.body, "htmx:afterHeadMerge", { added: r, kept: u, removed: i });
    }
  }
}, M = async ({ on: t, trigger: e }) => {
  t("htmx:afterSwap", function(o) {
    const s = o.detail.xhr.response;
    g(s, e);
  }), t("htmx:historyRestore", function(o) {
    const n = o;
    n.detail.cacheMiss ? g(n.detail.serverResponse, e) : g(n.detail.item.head, e);
  }), t("htmx:historyItemCreated", function(o) {
    const s = o.detail.item;
    s.head = document.head.outerHTML;
  });
}, k = new IntersectionObserver((t, e) => {
  var o;
  for (const n of t)
    n.isIntersecting && ((o = n == null ? void 0 : n.target) == null || o.setAttribute("data-render", "true"), e.unobserve(n.target));
}), O = async ({ tagname: t, allowShadowDom: e = !1, stylecontent: o = "", whenVisible: n = !1 }, s, r = null) => {
  const i = C({ connected: s, disconnected: r }, { allowShadowDom: e, stylecontent: o, whenVisible: n });
  if (S(t, i), L(E), n) {
    const u = document.querySelectorAll(t);
    for (const d of u)
      k.observe(d);
  }
}, N = (t, e = "") => {
  const o = location.origin, n = location.pathname, s = Object.fromEntries(new URL(location.toString()).searchParams.entries());
  let r = `?${new URLSearchParams({ ...s, ...t }).toString()}`, i = location.hash;
  return e.length > 0 && (i = `#${e}`), `${o}${n}${r}${i}`;
}, b = (t) => {
  var u;
  const e = { ...t.dataset }, n = Object.entries(e).map((d) => {
    const [c, l] = d;
    try {
      return l ? [c, JSON.parse(l)] : [c, l];
    } catch {
      return [c, l];
    }
  }), s = new Map(n), r = t.querySelector("template");
  if (r) {
    const d = (u = r == null ? void 0 : r.content.textContent) == null ? void 0 : u.trim(), c = d ? JSON.parse(d) : {};
    s.set("data", c);
  }
  return s.set("tagName", t.tagName.toLowerCase()), Object.fromEntries(s);
};
let w = 0, f = null;
const R = async (t, e) => {
  var i;
  const { config: o, trigger: n, process: s } = (await import("htmx.org")).default;
  if (o.refreshOnHistoryMiss === !1)
    return console.warn("Redirect is not enabled"), !1;
  const r = document.body;
  f && (n(f, "htmx:abort", {}), (i = f.parentElement) == null || i.remove(), f = null), r.innerHTML += `<span hx-disinherit="*" class='link-parent'> 
    <a class='bridge-redirect-link' href='${t}' hx-headers='${JSON.stringify(e)}' hx-boost='true' id='bridge-redirect-link-${w}'></a> 
  </span>`, s(document.body), f = r.querySelector(`.link-parent>#bridge-redirect-link-${w}`), f == null || f.click(), w++;
}, q = async ({ redirect: t, loader: e, allowHeadSwap: o }) => {
  const { on: n, trigger: s, config: r } = (await import("htmx.org")).default;
  if (o && M({ on: n, trigger: s }), t && (r.refreshOnHistoryMiss = !0), e != null && e.enable) {
    await import("./magicloader-Dzr0wQWE.js");
    const i = document.createElement("magic-loader");
    i.setAttribute("data-color", e.color ?? "#639ef4"), document.body.append(i);
  }
};
export {
  q as config,
  O as define,
  N as getPath,
  b as getProps,
  R as redirect
};
