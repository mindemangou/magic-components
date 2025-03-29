import { getProps as c } from "./magiccomponents.es.js";
let a = [], r = 0;
const h = (n, e) => {
  class o extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      var s;
      if (((s = this.parentElement) == null ? void 0 : s.tagName) === "TEMPLATE")
        return;
      if (this.hasAttribute("data-key")) {
        const t = this.getAttribute("data-key");
        if (a.includes(t))
          throw new Error(`The key '${t}' already exists`);
        a.push(t);
      } else
        this.setAttribute("data-key", `component-${r}`), r++;
      const i = c(this);
      n({ element: this, props: i });
    }
    disconnectedCallBack() {
      e && e({ element: this });
    }
  }
  return o;
};
export {
  h as default
};
