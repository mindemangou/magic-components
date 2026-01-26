import { define as i } from "./magiccomponents.es.js";
import { createRoot as t } from "react-dom/client";
const m = (o, r) => {
  i(o, ({ element: e, props: f }) => {
    t(e).render(r({ element: e, props: f }));
  });
};
export {
  m as define
};
