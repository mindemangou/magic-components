import { getProps as i } from "./magiccomponents.es.js";
let r = [];
const u = (a, e) => {
  class n extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      var s;
      if (((s = this.parentElement) == null ? void 0 : s.tagName) === "TEMPLATE")
        return;
      if (this.hasAttribute("data-key")) {
        const t = this.getAttribute("data-key");
        if (r.includes(t))
          throw new Error(`The key '${t}' already exists`);
        r.push(t);
      }
      const o = i(this);
      a({ element: this, props: o });
    }
    disconnectedCallBack() {
      e && e({ element: this });
    }
  }
  return n;
};
export {
  u as default
};
