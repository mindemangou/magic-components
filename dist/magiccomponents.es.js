var w = Object.defineProperty;
var b = (t, e, s) => e in t ? w(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var i = (t, e, s) => b(t, typeof e != "symbol" ? e + "" : e, s);
import y from "dompurify";
const C = ({ connected: t }, { allowShadowDom: e = !1, stylecontent: s, whenVisible: n = !1 }) => {
  class a extends HTMLElement {
    constructor() {
      super();
      i(this, "stylecontent", s);
      i(this, "allowShadowDom", e);
      i(this, "disconnected", () => {
      });
      i(this, "whenVisibleAllowed", n);
    }
    connectedCallback() {
      this.whenVisibleAllowed || this.render();
    }
    disconnectedCallback() {
      this.whenVisibleAllowed && p.unobserve(this), this.disconnected();
    }
    attributeChangedCallback(o, r, c) {
      o === "data-render" && c === "true" && this.render();
    }
    render() {
      const o = A(this);
      if (this.allowShadowDom) {
        if (!this.shadowRoot) {
          const r = this.attachShadow({ mode: "open" });
          this.disconnected = t({ element: r, props: o }), this.addSlotsTemplate(), this.addStyle(r);
        }
      } else
        this.disconnected = t({ element: this, props: o });
    }
    addSlotsTemplate() {
      const r = `data-${this.tagName.toLowerCase().split("-")[0]}`, c = this.querySelector(`template[${r}]`);
      if (c) {
        const h = c.content.querySelectorAll("[slot]"), m = new DocumentFragment();
        for (const u of h)
          m.append(u);
        const f = y.sanitize(m, { RETURN_DOM_FRAGMENT: !0 });
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
  return i(a, "observedAttributes", ["data-render"]), a;
}, g = (t, e) => {
  customElements.get(t) || customElements.define(t, e);
}, p = new IntersectionObserver((t, e) => {
  var s;
  for (const n of t)
    n.isIntersecting && ((s = n == null ? void 0 : n.target) == null || s.setAttribute("data-render", "true"), e.unobserve(n.target));
});
function E(t) {
  try {
    const e = t && JSON.parse(t);
    if (typeof e == "string") {
      const s = document.createElement("div");
      return s.textContent = e, s.innerHTML;
    }
    return e;
  } catch {
    return t;
  }
}
function S(t) {
  return Object.entries({ ...t.dataset }).map(
    ([e, s]) => [e, E(s ?? "")]
  );
}
const D = async ({ tagname: t, allowShadowDom: e = !1, stylecontent: s = "", whenVisible: n = !1 }, a) => {
  if (!t || typeof t != "string" || !/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]+$/.test(t))
    throw new Error(`Invalid or missing tagname: "${t}". A valid custom element name must contain a hyphen.`);
  const l = C({ connected: a }, { allowShadowDom: e, stylecontent: s, whenVisible: n });
  if (g(t, l), n) {
    const d = document.querySelectorAll(t);
    for (const o of d)
      p.observe(o);
  }
}, A = (t) => {
  const e = S(t), s = new Map(e);
  return s.set("tagname", t.tagName.toLowerCase()), Object.fromEntries(s);
};
export {
  D as define,
  A as getProps,
  p as observer
};
