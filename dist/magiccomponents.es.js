var Vt = Object.defineProperty;
var $t = (o, n, a) => n in o ? Vt(o, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[n] = a;
var H = (o, n, a) => $t(o, typeof n != "symbol" ? n + "" : n, a);
const qt = ({ connected: o }, { allowShadowDom: n = !1, stylecontent: a, whenVisible: s = !1 }) => {
  class c extends HTMLElement {
    constructor() {
      super();
      H(this, "stylecontent", a);
      H(this, "allowShadowDom", n);
      H(this, "disconnected", () => {
      });
      H(this, "hider", "data-hider");
      H(this, "whenVisibleAllowed", s);
    }
    async connectedCallback() {
      this.whenVisibleAllowed || await this.hydrateIfNeeded() || this.render();
    }
    disconnectedCallback() {
      this.whenVisibleAllowed && typeof window < "u" && V && V.unobserve(this), this.disconnected();
    }
    async attributeChangedCallback(h, u, g) {
      if (h === "data-render" && g === "true") {
        if (await this.hydrateIfNeeded())
          return;
        this.render();
      }
    }
    /**
     * Hydrate SSR content if present.
     * Returns true if hydration was performed (so render should be skipped).
     */
    async hydrateIfNeeded() {
      const h = gt(this);
      if (this.allowShadowDom && this.shadowRoot && this.shadowRoot.hasChildNodes()) {
        const u = o({ element: this.shadowRoot, props: h });
        return this.removeAttribute(this.hider), this.disconnected = typeof u == "function" ? u : () => {
        }, !0;
      }
      if (!this.allowShadowDom && this.hasChildNodes()) {
        const u = o({ element: this, props: h });
        return this.removeAttribute(this.hider), this.disconnected = typeof u == "function" ? u : () => {
        }, !0;
      }
      return !1;
    }
    async render() {
      const h = gt(this);
      if (this.allowShadowDom) {
        if (!this.shadowRoot) {
          const u = this.attachShadow({ mode: "open" }), g = o({ element: u, props: h });
          this.removeAttribute(this.hider), this.disconnected = typeof g == "function" ? g : () => {
          }, this.addStyle(u);
        }
      } else {
        const u = o({ element: this, props: h });
        this.removeAttribute(this.hider), this.disconnected = typeof u == "function" ? u : () => {
        };
      }
    }
    addStyle(h) {
      if (this.stylecontent) {
        const u = document.createElement("style");
        u.textContent = this.stylecontent, h.appendChild(u);
      }
    }
  }
  return H(c, "observedAttributes", ["data-render"]), c;
}, Kt = (o, n) => {
  customElements.get(o) || customElements.define(o, n);
};
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: St,
  setPrototypeOf: mt,
  isFrozen: Zt,
  getPrototypeOf: Jt,
  getOwnPropertyDescriptor: Qt
} = Object;
let {
  freeze: O,
  seal: w,
  create: Fe
} = Object, {
  apply: He,
  construct: ze
} = typeof Reflect < "u" && Reflect;
O || (O = function(n) {
  return n;
});
w || (w = function(n) {
  return n;
});
He || (He = function(n, a) {
  for (var s = arguments.length, c = new Array(s > 2 ? s - 2 : 0), E = 2; E < s; E++)
    c[E - 2] = arguments[E];
  return n.apply(a, c);
});
ze || (ze = function(n) {
  for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
    s[c - 1] = arguments[c];
  return new n(...s);
});
const pe = D(Array.prototype.forEach), en = D(Array.prototype.lastIndexOf), pt = D(Array.prototype.pop), Q = D(Array.prototype.push), tn = D(Array.prototype.splice), he = D(String.prototype.toLowerCase), Me = D(String.prototype.toString), xe = D(String.prototype.match), ee = D(String.prototype.replace), nn = D(String.prototype.indexOf), on = D(String.prototype.trim), N = D(Object.prototype.hasOwnProperty), b = D(RegExp.prototype.test), te = rn(TypeError);
function D(o) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
      s[c - 1] = arguments[c];
    return He(o, n, s);
  };
}
function rn(o) {
  return function() {
    for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
      a[s] = arguments[s];
    return ze(o, a);
  };
}
function l(o, n) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : he;
  mt && mt(o, null);
  let s = n.length;
  for (; s--; ) {
    let c = n[s];
    if (typeof c == "string") {
      const E = a(c);
      E !== c && (Zt(n) || (n[s] = E), c = E);
    }
    o[c] = !0;
  }
  return o;
}
function an(o) {
  for (let n = 0; n < o.length; n++)
    N(o, n) || (o[n] = null);
  return o;
}
function x(o) {
  const n = Fe(null);
  for (const [a, s] of St(o))
    N(o, a) && (Array.isArray(s) ? n[a] = an(s) : s && typeof s == "object" && s.constructor === Object ? n[a] = x(s) : n[a] = s);
  return n;
}
function ne(o, n) {
  for (; o !== null; ) {
    const s = Qt(o, n);
    if (s) {
      if (s.get)
        return D(s.get);
      if (typeof s.value == "function")
        return D(s.value);
    }
    o = Jt(o);
  }
  function a() {
    return null;
  }
  return a;
}
const dt = O(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ve = O(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pe = O(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), sn = O(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ke = O(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ln = O(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ht = O(["#text"]), Tt = O(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ue = O(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Et = O(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), de = O(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), cn = w(/\{\{[\w\W]*|[\w\W]*\}\}/gm), fn = w(/<%[\w\W]*|[\w\W]*%>/gm), un = w(/\$\{[\w\W]*/gm), mn = w(/^data-[\-\w.\u00B7-\uFFFF]+$/), pn = w(/^aria-[\-\w]+$/), yt = w(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), dn = w(/^(?:\w+script|data):/i), hn = w(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Rt = w(/^html$/i), Tn = w(/^[a-z][.\w]*(-[.\w]+)+$/i);
var _t = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: pn,
  ATTR_WHITESPACE: hn,
  CUSTOM_ELEMENT: Tn,
  DATA_ATTR: mn,
  DOCTYPE_NAME: Rt,
  ERB_EXPR: fn,
  IS_ALLOWED_URI: yt,
  IS_SCRIPT_OR_DATA: dn,
  MUSTACHE_EXPR: cn,
  TMPLIT_EXPR: un
});
const oe = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, En = function() {
  return typeof window > "u" ? null : window;
}, _n = function(n, a) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let s = null;
  const c = "data-tt-policy-suffix";
  a && a.hasAttribute(c) && (s = a.getAttribute(c));
  const E = "dompurify" + (s ? "#" + s : "");
  try {
    return n.createPolicy(E, {
      createHTML(C) {
        return C;
      },
      createScriptURL(C) {
        return C;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + E + " could not be created."), null;
  }
}, At = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function bt() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : En();
  const n = (r) => bt(r);
  if (n.version = "3.3.1", n.removed = [], !o || !o.document || o.document.nodeType !== oe.document || !o.Element)
    return n.isSupported = !1, n;
  let {
    document: a
  } = o;
  const s = a, c = s.currentScript, {
    DocumentFragment: E,
    HTMLTemplateElement: C,
    Node: h,
    Element: u,
    NodeFilter: g,
    NamedNodeMap: Ge = o.NamedNodeMap || o.MozNamedAttrMap,
    HTMLFormElement: Ot,
    DOMParser: Dt,
    trustedTypes: ie
  } = o, $ = u.prototype, Lt = ne($, "cloneNode"), wt = ne($, "remove"), Ct = ne($, "nextSibling"), Nt = ne($, "childNodes"), re = ne($, "parentNode");
  if (typeof C == "function") {
    const r = a.createElement("template");
    r.content && r.content.ownerDocument && (a = r.content.ownerDocument);
  }
  let y, q = "";
  const {
    implementation: Te,
    createNodeIterator: It,
    createDocumentFragment: Mt,
    getElementsByTagName: xt
  } = a, {
    importNode: vt
  } = s;
  let R = At();
  n.isSupported = typeof St == "function" && typeof re == "function" && Te && Te.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Ee,
    ERB_EXPR: _e,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: Pt,
    ARIA_ATTR: kt,
    IS_SCRIPT_OR_DATA: Ut,
    ATTR_WHITESPACE: We,
    CUSTOM_ELEMENT: Ft
  } = _t;
  let {
    IS_ALLOWED_URI: Be
  } = _t, T = null;
  const Ye = l({}, [...dt, ...ve, ...Pe, ...ke, ...ht]);
  let _ = null;
  const Xe = l({}, [...Tt, ...Ue, ...Et, ...de]);
  let m = Object.seal(Fe(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), K = null, ge = null;
  const z = Object.seal(Fe(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let je = !0, Se = !0, Ve = !1, $e = !0, G = !1, ae = !0, U = !1, ye = !1, Re = !1, W = !1, se = !1, le = !1, qe = !0, Ke = !1;
  const Ht = "user-content-";
  let be = !0, Z = !1, B = {}, I = null;
  const Oe = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ze = null;
  const Je = l({}, ["audio", "video", "img", "source", "image", "track"]);
  let De = null;
  const Qe = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ce = "http://www.w3.org/1998/Math/MathML", fe = "http://www.w3.org/2000/svg", v = "http://www.w3.org/1999/xhtml";
  let Y = v, Le = !1, we = null;
  const zt = l({}, [ce, fe, v], Me);
  let ue = l({}, ["mi", "mo", "mn", "ms", "mtext"]), me = l({}, ["annotation-xml"]);
  const Gt = l({}, ["title", "style", "font", "a", "script"]);
  let J = null;
  const Wt = ["application/xhtml+xml", "text/html"], Bt = "text/html";
  let d = null, X = null;
  const Yt = a.createElement("form"), et = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ce = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(X && X === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = x(e), J = // eslint-disable-next-line unicorn/prefer-includes
      Wt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Bt : e.PARSER_MEDIA_TYPE, d = J === "application/xhtml+xml" ? Me : he, T = N(e, "ALLOWED_TAGS") ? l({}, e.ALLOWED_TAGS, d) : Ye, _ = N(e, "ALLOWED_ATTR") ? l({}, e.ALLOWED_ATTR, d) : Xe, we = N(e, "ALLOWED_NAMESPACES") ? l({}, e.ALLOWED_NAMESPACES, Me) : zt, De = N(e, "ADD_URI_SAFE_ATTR") ? l(x(Qe), e.ADD_URI_SAFE_ATTR, d) : Qe, Ze = N(e, "ADD_DATA_URI_TAGS") ? l(x(Je), e.ADD_DATA_URI_TAGS, d) : Je, I = N(e, "FORBID_CONTENTS") ? l({}, e.FORBID_CONTENTS, d) : Oe, K = N(e, "FORBID_TAGS") ? l({}, e.FORBID_TAGS, d) : x({}), ge = N(e, "FORBID_ATTR") ? l({}, e.FORBID_ATTR, d) : x({}), B = N(e, "USE_PROFILES") ? e.USE_PROFILES : !1, je = e.ALLOW_ARIA_ATTR !== !1, Se = e.ALLOW_DATA_ATTR !== !1, Ve = e.ALLOW_UNKNOWN_PROTOCOLS || !1, $e = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, G = e.SAFE_FOR_TEMPLATES || !1, ae = e.SAFE_FOR_XML !== !1, U = e.WHOLE_DOCUMENT || !1, W = e.RETURN_DOM || !1, se = e.RETURN_DOM_FRAGMENT || !1, le = e.RETURN_TRUSTED_TYPE || !1, Re = e.FORCE_BODY || !1, qe = e.SANITIZE_DOM !== !1, Ke = e.SANITIZE_NAMED_PROPS || !1, be = e.KEEP_CONTENT !== !1, Z = e.IN_PLACE || !1, Be = e.ALLOWED_URI_REGEXP || yt, Y = e.NAMESPACE || v, ue = e.MATHML_TEXT_INTEGRATION_POINTS || ue, me = e.HTML_INTEGRATION_POINTS || me, m = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && et(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (m.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && et(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (m.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (m.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), G && (Se = !1), se && (W = !0), B && (T = l({}, ht), _ = [], B.html === !0 && (l(T, dt), l(_, Tt)), B.svg === !0 && (l(T, ve), l(_, Ue), l(_, de)), B.svgFilters === !0 && (l(T, Pe), l(_, Ue), l(_, de)), B.mathMl === !0 && (l(T, ke), l(_, Et), l(_, de))), e.ADD_TAGS && (typeof e.ADD_TAGS == "function" ? z.tagCheck = e.ADD_TAGS : (T === Ye && (T = x(T)), l(T, e.ADD_TAGS, d))), e.ADD_ATTR && (typeof e.ADD_ATTR == "function" ? z.attributeCheck = e.ADD_ATTR : (_ === Xe && (_ = x(_)), l(_, e.ADD_ATTR, d))), e.ADD_URI_SAFE_ATTR && l(De, e.ADD_URI_SAFE_ATTR, d), e.FORBID_CONTENTS && (I === Oe && (I = x(I)), l(I, e.FORBID_CONTENTS, d)), e.ADD_FORBID_CONTENTS && (I === Oe && (I = x(I)), l(I, e.ADD_FORBID_CONTENTS, d)), be && (T["#text"] = !0), U && l(T, ["html", "head", "body"]), T.table && (l(T, ["tbody"]), delete K.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw te('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw te('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        y = e.TRUSTED_TYPES_POLICY, q = y.createHTML("");
      } else
        y === void 0 && (y = _n(ie, c)), y !== null && typeof q == "string" && (q = y.createHTML(""));
      O && O(e), X = e;
    }
  }, tt = l({}, [...ve, ...Pe, ...sn]), nt = l({}, [...ke, ...ln]), Xt = function(e) {
    let t = re(e);
    (!t || !t.tagName) && (t = {
      namespaceURI: Y,
      tagName: "template"
    });
    const i = he(e.tagName), f = he(t.tagName);
    return we[e.namespaceURI] ? e.namespaceURI === fe ? t.namespaceURI === v ? i === "svg" : t.namespaceURI === ce ? i === "svg" && (f === "annotation-xml" || ue[f]) : !!tt[i] : e.namespaceURI === ce ? t.namespaceURI === v ? i === "math" : t.namespaceURI === fe ? i === "math" && me[f] : !!nt[i] : e.namespaceURI === v ? t.namespaceURI === fe && !me[f] || t.namespaceURI === ce && !ue[f] ? !1 : !nt[i] && (Gt[i] || !tt[i]) : !!(J === "application/xhtml+xml" && we[e.namespaceURI]) : !1;
  }, M = function(e) {
    Q(n.removed, {
      element: e
    });
    try {
      re(e).removeChild(e);
    } catch {
      wt(e);
    }
  }, F = function(e, t) {
    try {
      Q(n.removed, {
        attribute: t.getAttributeNode(e),
        from: t
      });
    } catch {
      Q(n.removed, {
        attribute: null,
        from: t
      });
    }
    if (t.removeAttribute(e), e === "is")
      if (W || se)
        try {
          M(t);
        } catch {
        }
      else
        try {
          t.setAttribute(e, "");
        } catch {
        }
  }, ot = function(e) {
    let t = null, i = null;
    if (Re)
      e = "<remove></remove>" + e;
    else {
      const p = xe(e, /^[\r\n\t ]+/);
      i = p && p[0];
    }
    J === "application/xhtml+xml" && Y === v && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const f = y ? y.createHTML(e) : e;
    if (Y === v)
      try {
        t = new Dt().parseFromString(f, J);
      } catch {
      }
    if (!t || !t.documentElement) {
      t = Te.createDocument(Y, "template", null);
      try {
        t.documentElement.innerHTML = Le ? q : f;
      } catch {
      }
    }
    const S = t.body || t.documentElement;
    return e && i && S.insertBefore(a.createTextNode(i), S.childNodes[0] || null), Y === v ? xt.call(t, U ? "html" : "body")[0] : U ? t.documentElement : S;
  }, it = function(e) {
    return It.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, Ne = function(e) {
    return e instanceof Ot && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof Ge) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, rt = function(e) {
    return typeof h == "function" && e instanceof h;
  };
  function P(r, e, t) {
    pe(r, (i) => {
      i.call(n, e, t, X);
    });
  }
  const at = function(e) {
    let t = null;
    if (P(R.beforeSanitizeElements, e, null), Ne(e))
      return M(e), !0;
    const i = d(e.nodeName);
    if (P(R.uponSanitizeElement, e, {
      tagName: i,
      allowedTags: T
    }), ae && e.hasChildNodes() && !rt(e.firstElementChild) && b(/<[/\w!]/g, e.innerHTML) && b(/<[/\w!]/g, e.textContent) || e.nodeType === oe.progressingInstruction || ae && e.nodeType === oe.comment && b(/<[/\w]/g, e.data))
      return M(e), !0;
    if (!(z.tagCheck instanceof Function && z.tagCheck(i)) && (!T[i] || K[i])) {
      if (!K[i] && lt(i) && (m.tagNameCheck instanceof RegExp && b(m.tagNameCheck, i) || m.tagNameCheck instanceof Function && m.tagNameCheck(i)))
        return !1;
      if (be && !I[i]) {
        const f = re(e) || e.parentNode, S = Nt(e) || e.childNodes;
        if (S && f) {
          const p = S.length;
          for (let L = p - 1; L >= 0; --L) {
            const k = Lt(S[L], !0);
            k.__removalCount = (e.__removalCount || 0) + 1, f.insertBefore(k, Ct(e));
          }
        }
      }
      return M(e), !0;
    }
    return e instanceof u && !Xt(e) || (i === "noscript" || i === "noembed" || i === "noframes") && b(/<\/no(script|embed|frames)/i, e.innerHTML) ? (M(e), !0) : (G && e.nodeType === oe.text && (t = e.textContent, pe([Ee, _e, Ae], (f) => {
      t = ee(t, f, " ");
    }), e.textContent !== t && (Q(n.removed, {
      element: e.cloneNode()
    }), e.textContent = t)), P(R.afterSanitizeElements, e, null), !1);
  }, st = function(e, t, i) {
    if (qe && (t === "id" || t === "name") && (i in a || i in Yt))
      return !1;
    if (!(Se && !ge[t] && b(Pt, t))) {
      if (!(je && b(kt, t))) {
        if (!(z.attributeCheck instanceof Function && z.attributeCheck(t, e))) {
          if (!_[t] || ge[t]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(lt(e) && (m.tagNameCheck instanceof RegExp && b(m.tagNameCheck, e) || m.tagNameCheck instanceof Function && m.tagNameCheck(e)) && (m.attributeNameCheck instanceof RegExp && b(m.attributeNameCheck, t) || m.attributeNameCheck instanceof Function && m.attributeNameCheck(t, e)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              t === "is" && m.allowCustomizedBuiltInElements && (m.tagNameCheck instanceof RegExp && b(m.tagNameCheck, i) || m.tagNameCheck instanceof Function && m.tagNameCheck(i)))
            ) return !1;
          } else if (!De[t]) {
            if (!b(Be, ee(i, We, ""))) {
              if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && nn(i, "data:") === 0 && Ze[e])) {
                if (!(Ve && !b(Ut, ee(i, We, "")))) {
                  if (i)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, lt = function(e) {
    return e !== "annotation-xml" && xe(e, Ft);
  }, ct = function(e) {
    P(R.beforeSanitizeAttributes, e, null);
    const {
      attributes: t
    } = e;
    if (!t || Ne(e))
      return;
    const i = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let f = t.length;
    for (; f--; ) {
      const S = t[f], {
        name: p,
        namespaceURI: L,
        value: k
      } = S, j = d(p), Ie = k;
      let A = p === "value" ? Ie : on(Ie);
      if (i.attrName = j, i.attrValue = A, i.keepAttr = !0, i.forceKeepAttr = void 0, P(R.uponSanitizeAttribute, e, i), A = i.attrValue, Ke && (j === "id" || j === "name") && (F(p, e), A = Ht + A), ae && b(/((--!?|])>)|<\/(style|title|textarea)/i, A)) {
        F(p, e);
        continue;
      }
      if (j === "attributename" && xe(A, "href")) {
        F(p, e);
        continue;
      }
      if (i.forceKeepAttr)
        continue;
      if (!i.keepAttr) {
        F(p, e);
        continue;
      }
      if (!$e && b(/\/>/i, A)) {
        F(p, e);
        continue;
      }
      G && pe([Ee, _e, Ae], (ut) => {
        A = ee(A, ut, " ");
      });
      const ft = d(e.nodeName);
      if (!st(ft, j, A)) {
        F(p, e);
        continue;
      }
      if (y && typeof ie == "object" && typeof ie.getAttributeType == "function" && !L)
        switch (ie.getAttributeType(ft, j)) {
          case "TrustedHTML": {
            A = y.createHTML(A);
            break;
          }
          case "TrustedScriptURL": {
            A = y.createScriptURL(A);
            break;
          }
        }
      if (A !== Ie)
        try {
          L ? e.setAttributeNS(L, p, A) : e.setAttribute(p, A), Ne(e) ? M(e) : pt(n.removed);
        } catch {
          F(p, e);
        }
    }
    P(R.afterSanitizeAttributes, e, null);
  }, jt = function r(e) {
    let t = null;
    const i = it(e);
    for (P(R.beforeSanitizeShadowDOM, e, null); t = i.nextNode(); )
      P(R.uponSanitizeShadowNode, t, null), at(t), ct(t), t.content instanceof E && r(t.content);
    P(R.afterSanitizeShadowDOM, e, null);
  };
  return n.sanitize = function(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = null, i = null, f = null, S = null;
    if (Le = !r, Le && (r = "<!-->"), typeof r != "string" && !rt(r))
      if (typeof r.toString == "function") {
        if (r = r.toString(), typeof r != "string")
          throw te("dirty is not a string, aborting");
      } else
        throw te("toString is not a function");
    if (!n.isSupported)
      return r;
    if (ye || Ce(e), n.removed = [], typeof r == "string" && (Z = !1), Z) {
      if (r.nodeName) {
        const k = d(r.nodeName);
        if (!T[k] || K[k])
          throw te("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (r instanceof h)
      t = ot("<!---->"), i = t.ownerDocument.importNode(r, !0), i.nodeType === oe.element && i.nodeName === "BODY" || i.nodeName === "HTML" ? t = i : t.appendChild(i);
    else {
      if (!W && !G && !U && // eslint-disable-next-line unicorn/prefer-includes
      r.indexOf("<") === -1)
        return y && le ? y.createHTML(r) : r;
      if (t = ot(r), !t)
        return W ? null : le ? q : "";
    }
    t && Re && M(t.firstChild);
    const p = it(Z ? r : t);
    for (; f = p.nextNode(); )
      at(f), ct(f), f.content instanceof E && jt(f.content);
    if (Z)
      return r;
    if (W) {
      if (se)
        for (S = Mt.call(t.ownerDocument); t.firstChild; )
          S.appendChild(t.firstChild);
      else
        S = t;
      return (_.shadowroot || _.shadowrootmode) && (S = vt.call(s, S, !0)), S;
    }
    let L = U ? t.outerHTML : t.innerHTML;
    return U && T["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && b(Rt, t.ownerDocument.doctype.name) && (L = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + L), G && pe([Ee, _e, Ae], (k) => {
      L = ee(L, k, " ");
    }), y && le ? y.createHTML(L) : L;
  }, n.setConfig = function() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ce(r), ye = !0;
  }, n.clearConfig = function() {
    X = null, ye = !1;
  }, n.isValidAttribute = function(r, e, t) {
    X || Ce({});
    const i = d(r), f = d(e);
    return st(i, f, t);
  }, n.addHook = function(r, e) {
    typeof e == "function" && Q(R[r], e);
  }, n.removeHook = function(r, e) {
    if (e !== void 0) {
      const t = en(R[r], e);
      return t === -1 ? void 0 : tn(R[r], t, 1)[0];
    }
    return pt(R[r]);
  }, n.removeHooks = function(r) {
    R[r] = [];
  }, n.removeAllHooks = function() {
    R = At();
  }, n;
}
var An = bt();
let V;
function gn(o) {
  const n = An.sanitize(o, { FORBID_TAGS: ["style", "script", "iframe", "object", "embed", "link", "meta"] });
  try {
    return n && JSON.parse(n);
  } catch {
    return n;
  }
}
function Sn(o) {
  return Object.entries({ ...o.dataset }).map(
    ([n, a]) => [n, gn(a ?? "")]
  );
}
const Rn = async ({ tagname: o, allowShadowDom: n = !1, stylecontent: a = "", whenVisible: s = !1 }, c) => {
  if (!o || typeof o != "string" || !/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]+$/.test(o))
    throw new Error(`Invalid or missing tagname: "${o}". A valid custom element name must contain a hyphen.`);
  const E = qt({ connected: c }, { allowShadowDom: n, stylecontent: a, whenVisible: s });
  if (Kt(o, E), s && typeof window < "u" && (!V && typeof window.IntersectionObserver < "u" && (V = new IntersectionObserver((C, h) => {
    var u;
    for (const g of C)
      g.isIntersecting && ((u = g == null ? void 0 : g.target) == null || u.setAttribute("data-render", "true"), h.unobserve(g.target));
  })), V)) {
    const C = document.querySelectorAll(o);
    for (const h of C)
      V.observe(h);
  }
}, gt = (o) => {
  const n = Sn(o), a = new Map(n);
  return a.set("tagname", o.tagName.toLowerCase()), Object.fromEntries(a);
};
export {
  Rn as define,
  gt as getProps,
  V as observer
};
