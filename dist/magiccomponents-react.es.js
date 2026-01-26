import { define as u } from "./magiccomponents.es.js";
import { createRoot as i } from "react-dom/client";
const c = (n, r) => {
  const { autoUnmount: e, ...f } = n;
  u(f, ({ element: o, props: s }) => {
    const t = i(o);
    return t.render(r({ element: o, props: s })), () => {
      e !== !1 || t.unmount();
    };
  });
};
export {
  c as define
};
