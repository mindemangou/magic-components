import { getProps as a } from "./magiccomponents.es.js";
let s = [];
const l = (r, e) => {
  class o extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      if (this.hasAttribute("data-key")) {
        const t = this.getAttribute("data-key");
        if (s.includes(t))
          throw new Error(`Key: ${t} already exists`);
        s.push(t);
      }
      const n = a(this);
      r({ element: this, props: n });
    }
    disconnectedCallBack() {
      e && e({ element: this });
    }
  }
  return o;
};
export {
  l as default
};
