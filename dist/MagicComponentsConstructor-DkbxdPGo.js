import { getProps as r } from "./magiccomponents.es.js";
let e = 0;
const i = (s, t) => {
  class o extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.hasAttribute("data-key") || (this.setAttribute("data-key", `component-${e}`), e++);
      const n = r(this);
      s({ element: this, props: n });
    }
    disconnectedCallBack() {
      t && t({ element: this });
    }
  }
  return o;
};
export {
  i as default
};
