var p = Object.defineProperty;
var w = (t, e, n) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var i = (t, e, n) => w(t, typeof e != "symbol" ? e + "" : e, n);
const y = ({ connected: t }, { allowShadowDom: e = !1, stylecontent: n, whenVisible: o = !1 }) => {
  class a extends HTMLElement {
    constructor() {
      super();
      i(this, "stylecontent", n);
      i(this, "allowShadowDom", e);
      i(this, "disconnected", () => {
      });
      i(this, "whenVisibleAllowed", o);
    }
    connectedCallback() {
      this.whenVisibleAllowed || this.render();
    }
    disconnectedCallback() {
      this.whenVisibleAllowed && u.unobserve(this), this.disconnected();
    }
    attributeChangedCallback(r, s, c) {
      r === "data-render" && c === "true" && this.render();
    }
    render() {
      const r = E(this);
      if (this.allowShadowDom) {
        if (!this.shadowRoot) {
          const s = this.attachShadow({ mode: "open" }), c = t({ element: s, props: r });
          this.disconnected = typeof c == "function" ? c : () => {
          }, this.addTemplateSlot(), this.addStyle(s);
        }
      } else {
        const s = t({ element: this, props: r });
        this.disconnected = typeof s == "function" ? s : () => {
        };
      }
    }
    async addTemplateSlot() {
      const r = this.tagName.toLowerCase(), s = this.querySelector(`[data-for='${r}']`);
      if (s) {
        const c = s.content.querySelectorAll("[slot]"), f = new DocumentFragment();
        for (const m of c)
          f.append(m);
        const h = (await import("./purify.es-DHbHSKL1.js")).default.sanitize(f, { RETURN_DOM_FRAGMENT: !0 });
        this.appendChild(h);
      }
    }
    addStyle(r) {
      if (this.stylecontent) {
        const s = document.createElement("style");
        s.textContent = this.stylecontent, r.appendChild(s);
      }
    }
    // //Refresh props data
    // async refreshProps(queryparams:Record<string,string>={},fragment:string='') {
    //     const {ajax}=(await import('htmx.org')).default
    //     if(this.componentKey===null) {
    //         console.warn(`You must add the data-key attribute on each element`)
    //         return ;
    //     }
    //     //Create template in Dom
    //     const templateCreated=document.createElement('template')
    //     templateCreated.id=this.componentKey as string
    //     const template=document.body.appendChild(templateCreated)
    //     //Get request Path
    //     const path=getPath(queryparams,fragment)
    //     const selector=`[data-key='${this.componentKey}']`
    //   return  ajax('get',path,{target:`#${template.id}`,select:selector,swap:'innerHTML'}).then(()=> {
    //         const element=template.firstElementChild as HTMLElement
    //         if(element) {
    //             this.data=getProps(element)
    //         }
    //         return this.data
    //     }).then((data)=>{
    //         template?.remove()
    //         return data
    //     }).catch((err)=> {
    //         console.error(err)
    //     })  
    // }
    // private async sendData(tagname:string,data:any){
    //     if(!customElements.get(tagname)){
    //         console.error(`The ${tagname} custom element has not been defined yet`)  
    //         return;
    //     }
    //     const element=document.querySelector(tagname)
    //     const customEvent=new CustomEvent('incoming_data',{
    //     detail:{bag:data},
    //     })
    //     element?.dispatchEvent(customEvent)
    // }
    //Add style in shadow dom
  }
  return i(a, "observedAttributes", ["data-render"]), a;
}, b = (t, e) => {
  customElements.get(t) || customElements.define(t, e);
}, u = new IntersectionObserver((t, e) => {
  var n;
  for (const o of t)
    o.isIntersecting && ((n = o == null ? void 0 : o.target) == null || n.setAttribute("data-render", "true"), e.unobserve(o.target));
});
function g(t) {
  try {
    const e = t && JSON.parse(t);
    if (typeof e == "string") {
      const n = document.createElement("div");
      return n.textContent = e, n.innerHTML;
    }
    return e;
  } catch {
    return t;
  }
}
function C(t) {
  return Object.entries({ ...t.dataset }).map(
    ([e, n]) => [e, g(n ?? "")]
  );
}
const v = async ({ tagname: t, allowShadowDom: e = !1, stylecontent: n = "", whenVisible: o = !1 }, a) => {
  if (!t || typeof t != "string" || !/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]+$/.test(t))
    throw new Error(`Invalid or missing tagname: "${t}". A valid custom element name must contain a hyphen.`);
  const l = y({ connected: a }, { allowShadowDom: e, stylecontent: n, whenVisible: o });
  if (b(t, l), o) {
    const d = document.querySelectorAll(t);
    for (const r of d)
      u.observe(r);
  }
}, E = (t) => {
  const e = C(t), n = new Map(e);
  return n.set("tagname", t.tagName.toLowerCase()), Object.fromEntries(n);
};
export {
  v as define,
  E as getProps,
  u as observer
};
