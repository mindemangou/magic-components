import { getProps as n } from "./magiccomponents.es.js";
const a = (e, t) => {
  class o extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      const s = n(this);
      e({ element: this, props: s });
    }
    disconnectedCallBack() {
      t && t({ element: this });
    }
  }
  return o;
};
export {
  a as default
};
