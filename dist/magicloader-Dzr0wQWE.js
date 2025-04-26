var h = Object.defineProperty;
var d = (e, i, t) => i in e ? h(e, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[i] = t;
var a = (e, i, t) => d(e, typeof i != "symbol" ? i + "" : i, t);
class c extends HTMLElement {
  constructor() {
    super();
    a(this, "animationOne");
    a(this, "animationTwo");
  }
  async connectedCallback() {
    const { on: t } = (await import("htmx.org")).default, n = this.getAttribute("data-color") ?? "#639ef4";
    this.style.height = "0.2rem", this.style.width = "0", this.style.position = "fixed", this.style.top = "0", this.style.left = "0", this.style.zIndex = "9999", this.style.backgroundColor = n, this.style.display = "none", t("htmx:beforeRequest", (l) => {
      var o;
      const s = l;
      (o = s == null ? void 0 : s.detail) != null && o.boosted && (this.style.display = "block", this.animationOne = this.animate([
        { width: 0 },
        { width: "88%" }
      ], { duration: 7e3, fill: "forwards" }), this.animationOne.addEventListener("finish", () => {
        this.animationTwo = this.animate([
          { width: "88%" },
          { width: "95%" }
        ], { duration: 5e3, iterations: 1 / 0 });
      }));
    });
  }
  disconnectedCallback() {
    var t, n;
    this.animationOne && ((t = this.animationOne) == null || t.cancel()), this.animationTwo && ((n = this.animationTwo) == null || n.cancel());
  }
}
customElements.define("magic-loader", c);
export {
  c as MagicLoader
};
