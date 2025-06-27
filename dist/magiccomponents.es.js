var p = Object.defineProperty;
var w = (t, e, n) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var i = (t, e, n) => w(t, typeof e != "symbol" ? e + "" : e, n);
import b from "dompurify";
const y = ({ connected: t }, { allowShadowDom: e = !1, stylecontent: n, whenVisible: s = !1 }) => {
  class c extends HTMLElement {
    constructor() {
      super();
      i(this, "stylecontent", n);
      i(this, "allowShadowDom", e);
      i(this, "disconnected", () => {
      });
      i(this, "whenVisibleAllowed", s);
    }
    connectedCallback() {
      this.whenVisibleAllowed || this.render();
    }
    disconnectedCallback() {
      this.whenVisibleAllowed && m.unobserve(this), this.disconnected();
    }
    attributeChangedCallback(o, r, a) {
      o === "data-render" && a === "true" && this.render();
    }
    render() {
      const o = S(this);
      if (this.allowShadowDom) {
        if (!this.shadowRoot) {
          const r = this.attachShadow({ mode: "open" });
          this.disconnected = t({ element: r, props: o }), this.addTemplateSlot(), this.addStyle(r);
        }
      } else
        this.disconnected = t({ element: this, props: o });
    }
    addTemplateSlot() {
      const o = this.tagName.toLowerCase(), r = this.querySelector(`[data-for='${o}']`);
      if (r) {
        const a = r.content.querySelectorAll("[slot]"), h = new DocumentFragment();
        for (const u of a)
          h.append(u);
        const f = b.sanitize(h, { RETURN_DOM_FRAGMENT: !0 });
        this.appendChild(f);
      }
    }
    addStyle(o) {
      if (this.stylecontent) {
        const r = document.createElement("style");
        r.textContent = this.stylecontent, o.appendChild(r);
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
  return i(c, "observedAttributes", ["data-render"]), c;
}, g = (t, e) => {
  customElements.get(t) || customElements.define(t, e);
}, m = new IntersectionObserver((t, e) => {
  var n;
  for (const s of t)
    s.isIntersecting && ((n = s == null ? void 0 : s.target) == null || n.setAttribute("data-render", "true"), e.unobserve(s.target));
});
function C(t) {
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
function E(t) {
  return Object.entries({ ...t.dataset }).map(
    ([e, n]) => [e, C(n ?? "")]
  );
}
const D = async ({ tagname: t, allowShadowDom: e = !1, stylecontent: n = "", whenVisible: s = !1 }, c) => {
  if (!t || typeof t != "string" || !/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]+$/.test(t))
    throw new Error(`Invalid or missing tagname: "${t}". A valid custom element name must contain a hyphen.`);
  const d = y({ connected: c }, { allowShadowDom: e, stylecontent: n, whenVisible: s });
  if (g(t, d), s) {
    const l = document.querySelectorAll(t);
    for (const o of l)
      m.observe(o);
  }
}, S = (t) => {
  const e = E(t), n = new Map(e);
  return n.set("tagname", t.tagName.toLowerCase()), Object.fromEntries(n);
};
export {
  D as define,
  S as getProps,
  m as observer
};
