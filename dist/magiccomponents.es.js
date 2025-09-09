var jt = Object.defineProperty;
var Vt = (o, n, a) => n in o ? jt(o, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[n] = a;
var U = (o, n, a) => Vt(o, typeof n != "symbol" ? n + "" : n, a);
const $t = ({ connected: o }, { allowShadowDom: n = !1, stylecontent: a, whenVisible: s = !1 }) => {
  class f extends HTMLElement {
    constructor() {
      super();
      U(this, "stylecontent", a);
      U(this, "allowShadowDom", n);
      U(this, "disconnected", () => {
      });
      U(this, "hider", "data-hider");
      U(this, "whenVisibleAllowed", s);
    }
    async connectedCallback() {
      this.whenVisibleAllowed || await this.hydrateIfNeeded() || this.render();
    }
    disconnectedCallback() {
      this.whenVisibleAllowed && typeof window < "u" && X && X.unobserve(this), this.disconnected();
    }
    async attributeChangedCallback(d, u, _) {
      if (d === "data-render" && _ === "true") {
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
      const d = _t(this);
      if (this.allowShadowDom && this.shadowRoot && this.shadowRoot.hasChildNodes()) {
        const u = o({ element: this.shadowRoot, props: d });
        return this.removeAttribute(this.hider), this.disconnected = typeof u == "function" ? u : () => {
        }, !0;
      }
      if (!this.allowShadowDom && this.hasChildNodes()) {
        const u = o({ element: this, props: d });
        return this.removeAttribute(this.hider), this.disconnected = typeof u == "function" ? u : () => {
        }, !0;
      }
      return !1;
    }
    async render() {
      const d = _t(this);
      if (this.allowShadowDom) {
        if (!this.shadowRoot) {
          const u = this.attachShadow({ mode: "open" }), _ = o({ element: u, props: d });
          this.removeAttribute(this.hider), this.disconnected = typeof _ == "function" ? _ : () => {
          }, this.addStyle(u);
        }
      } else {
        const u = o({ element: this, props: d });
        this.removeAttribute(this.hider), this.disconnected = typeof u == "function" ? u : () => {
        };
      }
    }
    // private  addSlotInShadowDom(element: HTMLElement|null) {
    //     if (element) {
    //         const dirty=element instanceof HTMLTemplateElement ?element.content:element
    //         const content = Dompurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true ,FORBID_TAGS: ['style', 'script', 'iframe', 'object', 'embed',"link","meta"] })
    //         this.appendChild(content)
    //     }
    // }
    // Remplace le type SlotsType par any pour la compatibilité dynamique
    // private  getSlots(element: HTMLElement|null) {
    //         if(typeof this.adapter === 'function' ){
    //             return this.adapter(element)
    //         }
    //         return {};
    // }
    // private getSlotContainer() {
    //     const tagname = this.tagName.toLowerCase();
    //     const container = this.querySelector(`[data-for='${tagname}']`) as HTMLElement
    //     return container
    // }
    addStyle(d) {
      if (this.stylecontent) {
        const u = document.createElement("style");
        u.textContent = this.stylecontent, d.appendChild(u);
      }
    }
  }
  return U(f, "observedAttributes", ["data-render"]), f;
}, qt = (o, n) => {
  customElements.get(o) || customElements.define(o, n);
};
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: gt,
  setPrototypeOf: ct,
  isFrozen: Kt,
  getPrototypeOf: Zt,
  getOwnPropertyDescriptor: Jt
} = Object;
let {
  freeze: b,
  seal: D,
  create: At
} = Object, {
  apply: ve,
  construct: ke
} = typeof Reflect < "u" && Reflect;
b || (b = function(n) {
  return n;
});
D || (D = function(n) {
  return n;
});
ve || (ve = function(n, a, s) {
  return n.apply(a, s);
});
ke || (ke = function(n, a) {
  return new n(...a);
});
const me = O(Array.prototype.forEach), Qt = O(Array.prototype.lastIndexOf), ft = O(Array.prototype.pop), J = O(Array.prototype.push), en = O(Array.prototype.splice), de = O(String.prototype.toLowerCase), Ie = O(String.prototype.toString), ut = O(String.prototype.match), Q = O(String.prototype.replace), tn = O(String.prototype.indexOf), nn = O(String.prototype.trim), I = O(Object.prototype.hasOwnProperty), R = O(RegExp.prototype.test), ee = on(TypeError);
function O(o) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), f = 1; f < a; f++)
      s[f - 1] = arguments[f];
    return ve(o, n, s);
  };
}
function on(o) {
  return function() {
    for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
      a[s] = arguments[s];
    return ke(o, a);
  };
}
function l(o, n) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : de;
  ct && ct(o, null);
  let s = n.length;
  for (; s--; ) {
    let f = n[s];
    if (typeof f == "string") {
      const w = a(f);
      w !== f && (Kt(n) || (n[s] = w), f = w);
    }
    o[f] = !0;
  }
  return o;
}
function rn(o) {
  for (let n = 0; n < o.length; n++)
    I(o, n) || (o[n] = null);
  return o;
}
function v(o) {
  const n = At(null);
  for (const [a, s] of gt(o))
    I(o, a) && (Array.isArray(s) ? n[a] = rn(s) : s && typeof s == "object" && s.constructor === Object ? n[a] = v(s) : n[a] = s);
  return n;
}
function te(o, n) {
  for (; o !== null; ) {
    const s = Jt(o, n);
    if (s) {
      if (s.get)
        return O(s.get);
      if (typeof s.value == "function")
        return O(s.value);
    }
    o = Zt(o);
  }
  function a() {
    return null;
  }
  return a;
}
const mt = b(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ce = b(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Me = b(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), an = b(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), xe = b(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), sn = b(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), pt = b(["#text"]), dt = b(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Pe = b(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ht = b(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = b(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ln = D(/\{\{[\w\W]*|[\w\W]*\}\}/gm), cn = D(/<%[\w\W]*|[\w\W]*%>/gm), fn = D(/\$\{[\w\W]*/gm), un = D(/^data-[\-\w.\u00B7-\uFFFF]+$/), mn = D(/^aria-[\-\w]+$/), St = D(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), pn = D(/^(?:\w+script|data):/i), dn = D(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), yt = D(/^html$/i), hn = D(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Tt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: mn,
  ATTR_WHITESPACE: dn,
  CUSTOM_ELEMENT: hn,
  DATA_ATTR: un,
  DOCTYPE_NAME: yt,
  ERB_EXPR: cn,
  IS_ALLOWED_URI: St,
  IS_SCRIPT_OR_DATA: pn,
  MUSTACHE_EXPR: ln,
  TMPLIT_EXPR: fn
});
const ne = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Tn = function() {
  return typeof window > "u" ? null : window;
}, En = function(n, a) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let s = null;
  const f = "data-tt-policy-suffix";
  a && a.hasAttribute(f) && (s = a.getAttribute(f));
  const w = "dompurify" + (s ? "#" + s : "");
  try {
    return n.createPolicy(w, {
      createHTML(N) {
        return N;
      },
      createScriptURL(N) {
        return N;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + w + " could not be created."), null;
  }
}, Et = function() {
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
function Rt() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Tn();
  const n = (r) => Rt(r);
  if (n.version = "3.2.6", n.removed = [], !o || !o.document || o.document.nodeType !== ne.document || !o.Element)
    return n.isSupported = !1, n;
  let {
    document: a
  } = o;
  const s = a, f = s.currentScript, {
    DocumentFragment: w,
    HTMLTemplateElement: N,
    Node: d,
    Element: u,
    NodeFilter: _,
    NamedNodeMap: Ue = o.NamedNodeMap || o.MozNamedAttrMap,
    HTMLFormElement: bt,
    DOMParser: Ot,
    trustedTypes: oe
  } = o, j = u.prototype, Lt = te(j, "cloneNode"), wt = te(j, "remove"), Dt = te(j, "nextSibling"), Nt = te(j, "childNodes"), ie = te(j, "parentNode");
  if (typeof N == "function") {
    const r = a.createElement("template");
    r.content && r.content.ownerDocument && (a = r.content.ownerDocument);
  }
  let S, V = "";
  const {
    implementation: he,
    createNodeIterator: It,
    createDocumentFragment: Ct,
    getElementsByTagName: Mt
  } = a, {
    importNode: xt
  } = s;
  let y = Et();
  n.isSupported = typeof gt == "function" && typeof ie == "function" && he && he.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Te,
    ERB_EXPR: Ee,
    TMPLIT_EXPR: _e,
    DATA_ATTR: Pt,
    ARIA_ATTR: vt,
    IS_SCRIPT_OR_DATA: kt,
    ATTR_WHITESPACE: Fe,
    CUSTOM_ELEMENT: Ut
  } = Tt;
  let {
    IS_ALLOWED_URI: He
  } = Tt, h = null;
  const ze = l({}, [...mt, ...Ce, ...Me, ...xe, ...pt]);
  let E = null;
  const Ge = l({}, [...dt, ...Pe, ...ht, ...pe]);
  let m = Object.seal(At(null, {
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
  })), $ = null, ge = null, We = !0, Ae = !0, Be = !1, Ye = !0, F = !1, re = !0, k = !1, Se = !1, ye = !1, H = !1, ae = !1, se = !1, Xe = !0, je = !1;
  const Ft = "user-content-";
  let Re = !0, q = !1, z = {}, G = null;
  const Ve = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let $e = null;
  const qe = l({}, ["audio", "video", "img", "source", "image", "track"]);
  let be = null;
  const Ke = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), le = "http://www.w3.org/1998/Math/MathML", ce = "http://www.w3.org/2000/svg", M = "http://www.w3.org/1999/xhtml";
  let W = M, Oe = !1, Le = null;
  const Ht = l({}, [le, ce, M], Ie);
  let fe = l({}, ["mi", "mo", "mn", "ms", "mtext"]), ue = l({}, ["annotation-xml"]);
  const zt = l({}, ["title", "style", "font", "a", "script"]);
  let K = null;
  const Gt = ["application/xhtml+xml", "text/html"], Wt = "text/html";
  let T = null, B = null;
  const Bt = a.createElement("form"), Ze = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, we = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(B && B === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = v(e), K = // eslint-disable-next-line unicorn/prefer-includes
      Gt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Wt : e.PARSER_MEDIA_TYPE, T = K === "application/xhtml+xml" ? Ie : de, h = I(e, "ALLOWED_TAGS") ? l({}, e.ALLOWED_TAGS, T) : ze, E = I(e, "ALLOWED_ATTR") ? l({}, e.ALLOWED_ATTR, T) : Ge, Le = I(e, "ALLOWED_NAMESPACES") ? l({}, e.ALLOWED_NAMESPACES, Ie) : Ht, be = I(e, "ADD_URI_SAFE_ATTR") ? l(v(Ke), e.ADD_URI_SAFE_ATTR, T) : Ke, $e = I(e, "ADD_DATA_URI_TAGS") ? l(v(qe), e.ADD_DATA_URI_TAGS, T) : qe, G = I(e, "FORBID_CONTENTS") ? l({}, e.FORBID_CONTENTS, T) : Ve, $ = I(e, "FORBID_TAGS") ? l({}, e.FORBID_TAGS, T) : v({}), ge = I(e, "FORBID_ATTR") ? l({}, e.FORBID_ATTR, T) : v({}), z = I(e, "USE_PROFILES") ? e.USE_PROFILES : !1, We = e.ALLOW_ARIA_ATTR !== !1, Ae = e.ALLOW_DATA_ATTR !== !1, Be = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ye = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, F = e.SAFE_FOR_TEMPLATES || !1, re = e.SAFE_FOR_XML !== !1, k = e.WHOLE_DOCUMENT || !1, H = e.RETURN_DOM || !1, ae = e.RETURN_DOM_FRAGMENT || !1, se = e.RETURN_TRUSTED_TYPE || !1, ye = e.FORCE_BODY || !1, Xe = e.SANITIZE_DOM !== !1, je = e.SANITIZE_NAMED_PROPS || !1, Re = e.KEEP_CONTENT !== !1, q = e.IN_PLACE || !1, He = e.ALLOWED_URI_REGEXP || St, W = e.NAMESPACE || M, fe = e.MATHML_TEXT_INTEGRATION_POINTS || fe, ue = e.HTML_INTEGRATION_POINTS || ue, m = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && Ze(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (m.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && Ze(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (m.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (m.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), F && (Ae = !1), ae && (H = !0), z && (h = l({}, pt), E = [], z.html === !0 && (l(h, mt), l(E, dt)), z.svg === !0 && (l(h, Ce), l(E, Pe), l(E, pe)), z.svgFilters === !0 && (l(h, Me), l(E, Pe), l(E, pe)), z.mathMl === !0 && (l(h, xe), l(E, ht), l(E, pe))), e.ADD_TAGS && (h === ze && (h = v(h)), l(h, e.ADD_TAGS, T)), e.ADD_ATTR && (E === Ge && (E = v(E)), l(E, e.ADD_ATTR, T)), e.ADD_URI_SAFE_ATTR && l(be, e.ADD_URI_SAFE_ATTR, T), e.FORBID_CONTENTS && (G === Ve && (G = v(G)), l(G, e.FORBID_CONTENTS, T)), Re && (h["#text"] = !0), k && l(h, ["html", "head", "body"]), h.table && (l(h, ["tbody"]), delete $.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ee('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ee('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = e.TRUSTED_TYPES_POLICY, V = S.createHTML("");
      } else
        S === void 0 && (S = En(oe, f)), S !== null && typeof V == "string" && (V = S.createHTML(""));
      b && b(e), B = e;
    }
  }, Je = l({}, [...Ce, ...Me, ...an]), Qe = l({}, [...xe, ...sn]), Yt = function(e) {
    let t = ie(e);
    (!t || !t.tagName) && (t = {
      namespaceURI: W,
      tagName: "template"
    });
    const i = de(e.tagName), c = de(t.tagName);
    return Le[e.namespaceURI] ? e.namespaceURI === ce ? t.namespaceURI === M ? i === "svg" : t.namespaceURI === le ? i === "svg" && (c === "annotation-xml" || fe[c]) : !!Je[i] : e.namespaceURI === le ? t.namespaceURI === M ? i === "math" : t.namespaceURI === ce ? i === "math" && ue[c] : !!Qe[i] : e.namespaceURI === M ? t.namespaceURI === ce && !ue[c] || t.namespaceURI === le && !fe[c] ? !1 : !Qe[i] && (zt[i] || !Je[i]) : !!(K === "application/xhtml+xml" && Le[e.namespaceURI]) : !1;
  }, C = function(e) {
    J(n.removed, {
      element: e
    });
    try {
      ie(e).removeChild(e);
    } catch {
      wt(e);
    }
  }, Y = function(e, t) {
    try {
      J(n.removed, {
        attribute: t.getAttributeNode(e),
        from: t
      });
    } catch {
      J(n.removed, {
        attribute: null,
        from: t
      });
    }
    if (t.removeAttribute(e), e === "is")
      if (H || ae)
        try {
          C(t);
        } catch {
        }
      else
        try {
          t.setAttribute(e, "");
        } catch {
        }
  }, et = function(e) {
    let t = null, i = null;
    if (ye)
      e = "<remove></remove>" + e;
    else {
      const p = ut(e, /^[\r\n\t ]+/);
      i = p && p[0];
    }
    K === "application/xhtml+xml" && W === M && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const c = S ? S.createHTML(e) : e;
    if (W === M)
      try {
        t = new Ot().parseFromString(c, K);
      } catch {
      }
    if (!t || !t.documentElement) {
      t = he.createDocument(W, "template", null);
      try {
        t.documentElement.innerHTML = Oe ? V : c;
      } catch {
      }
    }
    const g = t.body || t.documentElement;
    return e && i && g.insertBefore(a.createTextNode(i), g.childNodes[0] || null), W === M ? Mt.call(t, k ? "html" : "body")[0] : k ? t.documentElement : g;
  }, tt = function(e) {
    return It.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      _.SHOW_ELEMENT | _.SHOW_COMMENT | _.SHOW_TEXT | _.SHOW_PROCESSING_INSTRUCTION | _.SHOW_CDATA_SECTION,
      null
    );
  }, De = function(e) {
    return e instanceof bt && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof Ue) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, nt = function(e) {
    return typeof d == "function" && e instanceof d;
  };
  function x(r, e, t) {
    me(r, (i) => {
      i.call(n, e, t, B);
    });
  }
  const ot = function(e) {
    let t = null;
    if (x(y.beforeSanitizeElements, e, null), De(e))
      return C(e), !0;
    const i = T(e.nodeName);
    if (x(y.uponSanitizeElement, e, {
      tagName: i,
      allowedTags: h
    }), re && e.hasChildNodes() && !nt(e.firstElementChild) && R(/<[/\w!]/g, e.innerHTML) && R(/<[/\w!]/g, e.textContent) || e.nodeType === ne.progressingInstruction || re && e.nodeType === ne.comment && R(/<[/\w]/g, e.data))
      return C(e), !0;
    if (!h[i] || $[i]) {
      if (!$[i] && rt(i) && (m.tagNameCheck instanceof RegExp && R(m.tagNameCheck, i) || m.tagNameCheck instanceof Function && m.tagNameCheck(i)))
        return !1;
      if (Re && !G[i]) {
        const c = ie(e) || e.parentNode, g = Nt(e) || e.childNodes;
        if (g && c) {
          const p = g.length;
          for (let L = p - 1; L >= 0; --L) {
            const P = Lt(g[L], !0);
            P.__removalCount = (e.__removalCount || 0) + 1, c.insertBefore(P, Dt(e));
          }
        }
      }
      return C(e), !0;
    }
    return e instanceof u && !Yt(e) || (i === "noscript" || i === "noembed" || i === "noframes") && R(/<\/no(script|embed|frames)/i, e.innerHTML) ? (C(e), !0) : (F && e.nodeType === ne.text && (t = e.textContent, me([Te, Ee, _e], (c) => {
      t = Q(t, c, " ");
    }), e.textContent !== t && (J(n.removed, {
      element: e.cloneNode()
    }), e.textContent = t)), x(y.afterSanitizeElements, e, null), !1);
  }, it = function(e, t, i) {
    if (Xe && (t === "id" || t === "name") && (i in a || i in Bt))
      return !1;
    if (!(Ae && !ge[t] && R(Pt, t))) {
      if (!(We && R(vt, t))) {
        if (!E[t] || ge[t]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(rt(e) && (m.tagNameCheck instanceof RegExp && R(m.tagNameCheck, e) || m.tagNameCheck instanceof Function && m.tagNameCheck(e)) && (m.attributeNameCheck instanceof RegExp && R(m.attributeNameCheck, t) || m.attributeNameCheck instanceof Function && m.attributeNameCheck(t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            t === "is" && m.allowCustomizedBuiltInElements && (m.tagNameCheck instanceof RegExp && R(m.tagNameCheck, i) || m.tagNameCheck instanceof Function && m.tagNameCheck(i)))
          ) return !1;
        } else if (!be[t]) {
          if (!R(He, Q(i, Fe, ""))) {
            if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && tn(i, "data:") === 0 && $e[e])) {
              if (!(Be && !R(kt, Q(i, Fe, "")))) {
                if (i)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, rt = function(e) {
    return e !== "annotation-xml" && ut(e, Ut);
  }, at = function(e) {
    x(y.beforeSanitizeAttributes, e, null);
    const {
      attributes: t
    } = e;
    if (!t || De(e))
      return;
    const i = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: E,
      forceKeepAttr: void 0
    };
    let c = t.length;
    for (; c--; ) {
      const g = t[c], {
        name: p,
        namespaceURI: L,
        value: P
      } = g, Z = T(p), Ne = P;
      let A = p === "value" ? Ne : nn(Ne);
      if (i.attrName = Z, i.attrValue = A, i.keepAttr = !0, i.forceKeepAttr = void 0, x(y.uponSanitizeAttribute, e, i), A = i.attrValue, je && (Z === "id" || Z === "name") && (Y(p, e), A = Ft + A), re && R(/((--!?|])>)|<\/(style|title)/i, A)) {
        Y(p, e);
        continue;
      }
      if (i.forceKeepAttr)
        continue;
      if (!i.keepAttr) {
        Y(p, e);
        continue;
      }
      if (!Ye && R(/\/>/i, A)) {
        Y(p, e);
        continue;
      }
      F && me([Te, Ee, _e], (lt) => {
        A = Q(A, lt, " ");
      });
      const st = T(e.nodeName);
      if (!it(st, Z, A)) {
        Y(p, e);
        continue;
      }
      if (S && typeof oe == "object" && typeof oe.getAttributeType == "function" && !L)
        switch (oe.getAttributeType(st, Z)) {
          case "TrustedHTML": {
            A = S.createHTML(A);
            break;
          }
          case "TrustedScriptURL": {
            A = S.createScriptURL(A);
            break;
          }
        }
      if (A !== Ne)
        try {
          L ? e.setAttributeNS(L, p, A) : e.setAttribute(p, A), De(e) ? C(e) : ft(n.removed);
        } catch {
          Y(p, e);
        }
    }
    x(y.afterSanitizeAttributes, e, null);
  }, Xt = function r(e) {
    let t = null;
    const i = tt(e);
    for (x(y.beforeSanitizeShadowDOM, e, null); t = i.nextNode(); )
      x(y.uponSanitizeShadowNode, t, null), ot(t), at(t), t.content instanceof w && r(t.content);
    x(y.afterSanitizeShadowDOM, e, null);
  };
  return n.sanitize = function(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = null, i = null, c = null, g = null;
    if (Oe = !r, Oe && (r = "<!-->"), typeof r != "string" && !nt(r))
      if (typeof r.toString == "function") {
        if (r = r.toString(), typeof r != "string")
          throw ee("dirty is not a string, aborting");
      } else
        throw ee("toString is not a function");
    if (!n.isSupported)
      return r;
    if (Se || we(e), n.removed = [], typeof r == "string" && (q = !1), q) {
      if (r.nodeName) {
        const P = T(r.nodeName);
        if (!h[P] || $[P])
          throw ee("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (r instanceof d)
      t = et("<!---->"), i = t.ownerDocument.importNode(r, !0), i.nodeType === ne.element && i.nodeName === "BODY" || i.nodeName === "HTML" ? t = i : t.appendChild(i);
    else {
      if (!H && !F && !k && // eslint-disable-next-line unicorn/prefer-includes
      r.indexOf("<") === -1)
        return S && se ? S.createHTML(r) : r;
      if (t = et(r), !t)
        return H ? null : se ? V : "";
    }
    t && ye && C(t.firstChild);
    const p = tt(q ? r : t);
    for (; c = p.nextNode(); )
      ot(c), at(c), c.content instanceof w && Xt(c.content);
    if (q)
      return r;
    if (H) {
      if (ae)
        for (g = Ct.call(t.ownerDocument); t.firstChild; )
          g.appendChild(t.firstChild);
      else
        g = t;
      return (E.shadowroot || E.shadowrootmode) && (g = xt.call(s, g, !0)), g;
    }
    let L = k ? t.outerHTML : t.innerHTML;
    return k && h["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && R(yt, t.ownerDocument.doctype.name) && (L = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + L), F && me([Te, Ee, _e], (P) => {
      L = Q(L, P, " ");
    }), S && se ? S.createHTML(L) : L;
  }, n.setConfig = function() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    we(r), Se = !0;
  }, n.clearConfig = function() {
    B = null, Se = !1;
  }, n.isValidAttribute = function(r, e, t) {
    B || we({});
    const i = T(r), c = T(e);
    return it(i, c, t);
  }, n.addHook = function(r, e) {
    typeof e == "function" && J(y[r], e);
  }, n.removeHook = function(r, e) {
    if (e !== void 0) {
      const t = Qt(y[r], e);
      return t === -1 ? void 0 : en(y[r], t, 1)[0];
    }
    return ft(y[r]);
  }, n.removeHooks = function(r) {
    y[r] = [];
  }, n.removeAllHooks = function() {
    y = Et();
  }, n;
}
var _n = Rt();
let X;
function gn(o) {
  const n = _n.sanitize(o, { FORBID_TAGS: ["style", "script", "iframe", "object", "embed", "link", "meta"] });
  try {
    return n && JSON.parse(n);
  } catch {
    return n;
  }
}
function An(o) {
  return Object.entries({ ...o.dataset }).map(
    ([n, a]) => [n, gn(a ?? "")]
  );
}
const yn = async ({ tagname: o, allowShadowDom: n = !1, stylecontent: a = "", whenVisible: s = !1 }, f) => {
  if (!o || typeof o != "string" || !/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]+$/.test(o))
    throw new Error(`Invalid or missing tagname: "${o}". A valid custom element name must contain a hyphen.`);
  const w = $t({ connected: f }, { allowShadowDom: n, stylecontent: a, whenVisible: s });
  if (qt(o, w), s && typeof window < "u" && (!X && typeof window.IntersectionObserver < "u" && (X = new IntersectionObserver((N, d) => {
    var u;
    for (const _ of N)
      _.isIntersecting && ((u = _ == null ? void 0 : _.target) == null || u.setAttribute("data-render", "true"), d.unobserve(_.target));
  })), X)) {
    const N = document.querySelectorAll(o);
    for (const d of N)
      X.observe(d);
  }
}, _t = (o) => {
  const n = An(o), a = new Map(n);
  return a.set("tagname", o.tagName.toLowerCase()), Object.fromEntries(a);
};
export {
  yn as define,
  _t as getProps,
  X as observer
};
