var jt = Object.defineProperty;
var Vt = (o, n, a) => n in o ? jt(o, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[n] = a;
var U = (o, n, a) => Vt(o, typeof n != "symbol" ? n + "" : n, a);
import { getSlotsForReact as $t } from "@mindemangou/magiccomponents-react";
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: At,
  setPrototypeOf: ft,
  isFrozen: qt,
  getPrototypeOf: Kt,
  getOwnPropertyDescriptor: Zt
} = Object;
let {
  freeze: y,
  seal: D,
  create: St
} = Object, {
  apply: Ue,
  construct: Fe
} = typeof Reflect < "u" && Reflect;
y || (y = function(n) {
  return n;
});
D || (D = function(n) {
  return n;
});
Ue || (Ue = function(n, a, s) {
  return n.apply(a, s);
});
Fe || (Fe = function(n, a) {
  return new n(...a);
});
const de = O(Array.prototype.forEach), Jt = O(Array.prototype.lastIndexOf), ut = O(Array.prototype.pop), Q = O(Array.prototype.push), Qt = O(Array.prototype.splice), he = O(String.prototype.toLowerCase), we = O(String.prototype.toString), mt = O(String.prototype.match), ee = O(String.prototype.replace), en = O(String.prototype.indexOf), tn = O(String.prototype.trim), N = O(Object.prototype.hasOwnProperty), R = O(RegExp.prototype.test), te = nn(TypeError);
function O(o) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      s[u - 1] = arguments[u];
    return Ue(o, n, s);
  };
}
function nn(o) {
  return function() {
    for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
      a[s] = arguments[s];
    return Fe(o, a);
  };
}
function l(o, n) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : he;
  ft && ft(o, null);
  let s = n.length;
  for (; s--; ) {
    let u = n[s];
    if (typeof u == "string") {
      const L = a(u);
      L !== u && (qt(n) || (n[s] = L), u = L);
    }
    o[u] = !0;
  }
  return o;
}
function on(o) {
  for (let n = 0; n < o.length; n++)
    N(o, n) || (o[n] = null);
  return o;
}
function P(o) {
  const n = St(null);
  for (const [a, s] of At(o))
    N(o, a) && (Array.isArray(s) ? n[a] = on(s) : s && typeof s == "object" && s.constructor === Object ? n[a] = P(s) : n[a] = s);
  return n;
}
function ne(o, n) {
  for (; o !== null; ) {
    const s = Zt(o, n);
    if (s) {
      if (s.get)
        return O(s.get);
      if (typeof s.value == "function")
        return O(s.value);
    }
    o = Kt(o);
  }
  function a() {
    return null;
  }
  return a;
}
const pt = y(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xe = y(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pe = y(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), rn = y(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ve = y(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), an = y(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), dt = y(["#text"]), Tt = y(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ke = y(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ht = y(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Te = y(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), sn = D(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ln = D(/<%[\w\W]*|[\w\W]*%>/gm), cn = D(/\$\{[\w\W]*/gm), fn = D(/^data-[\-\w.\u00B7-\uFFFF]+$/), un = D(/^aria-[\-\w]+$/), Rt = D(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), mn = D(/^(?:\w+script|data):/i), pn = D(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), yt = D(/^html$/i), dn = D(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Et = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: un,
  ATTR_WHITESPACE: pn,
  CUSTOM_ELEMENT: dn,
  DATA_ATTR: fn,
  DOCTYPE_NAME: yt,
  ERB_EXPR: ln,
  IS_ALLOWED_URI: Rt,
  IS_SCRIPT_OR_DATA: mn,
  MUSTACHE_EXPR: sn,
  TMPLIT_EXPR: cn
});
const oe = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Tn = function() {
  return typeof window > "u" ? null : window;
}, hn = function(n, a) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let s = null;
  const u = "data-tt-policy-suffix";
  a && a.hasAttribute(u) && (s = a.getAttribute(u));
  const L = "dompurify" + (s ? "#" + s : "");
  try {
    return n.createPolicy(L, {
      createHTML(I) {
        return I;
      },
      createScriptURL(I) {
        return I;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + L + " could not be created."), null;
  }
}, _t = function() {
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
function Ot() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Tn();
  const n = (r) => Ot(r);
  if (n.version = "3.2.6", n.removed = [], !o || !o.document || o.document.nodeType !== oe.document || !o.Element)
    return n.isSupported = !1, n;
  let {
    document: a
  } = o;
  const s = a, u = s.currentScript, {
    DocumentFragment: L,
    HTMLTemplateElement: I,
    Node: F,
    Element: p,
    NodeFilter: g,
    NamedNodeMap: H = o.NamedNodeMap || o.MozNamedAttrMap,
    HTMLFormElement: v,
    DOMParser: ie,
    trustedTypes: re
  } = o, V = p.prototype, bt = ne(V, "cloneNode"), Dt = ne(V, "remove"), Nt = ne(V, "nextSibling"), Ct = ne(V, "childNodes"), ae = ne(V, "parentNode");
  if (typeof I == "function") {
    const r = a.createElement("template");
    r.content && r.content.ownerDocument && (a = r.content.ownerDocument);
  }
  let A, $ = "";
  const {
    implementation: Ee,
    createNodeIterator: It,
    createDocumentFragment: Mt,
    getElementsByTagName: wt
  } = a, {
    importNode: xt
  } = s;
  let S = _t();
  n.isSupported = typeof At == "function" && typeof ae == "function" && Ee && Ee.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: _e,
    ERB_EXPR: ge,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: Pt,
    ARIA_ATTR: vt,
    IS_SCRIPT_OR_DATA: kt,
    ATTR_WHITESPACE: He,
    CUSTOM_ELEMENT: Ut
  } = Et;
  let {
    IS_ALLOWED_URI: ze
  } = Et, d = null;
  const Ge = l({}, [...pt, ...xe, ...Pe, ...ve, ...dt]);
  let h = null;
  const We = l({}, [...Tt, ...ke, ...ht, ...Te]);
  let f = Object.seal(St(null, {
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
  })), q = null, Se = null, Be = !0, Re = !0, Ye = !1, Xe = !0, z = !1, se = !0, k = !1, ye = !1, Oe = !1, G = !1, le = !1, ce = !1, je = !0, Ve = !1;
  const Ft = "user-content-";
  let Le = !0, K = !1, W = {}, B = null;
  const $e = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const Ke = l({}, ["audio", "video", "img", "source", "image", "track"]);
  let be = null;
  const Ze = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), fe = "http://www.w3.org/1998/Math/MathML", ue = "http://www.w3.org/2000/svg", M = "http://www.w3.org/1999/xhtml";
  let Y = M, De = !1, Ne = null;
  const Ht = l({}, [fe, ue, M], we);
  let me = l({}, ["mi", "mo", "mn", "ms", "mtext"]), pe = l({}, ["annotation-xml"]);
  const zt = l({}, ["title", "style", "font", "a", "script"]);
  let Z = null;
  const Gt = ["application/xhtml+xml", "text/html"], Wt = "text/html";
  let T = null, X = null;
  const Bt = a.createElement("form"), Je = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ce = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(X && X === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = P(e), Z = // eslint-disable-next-line unicorn/prefer-includes
      Gt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Wt : e.PARSER_MEDIA_TYPE, T = Z === "application/xhtml+xml" ? we : he, d = N(e, "ALLOWED_TAGS") ? l({}, e.ALLOWED_TAGS, T) : Ge, h = N(e, "ALLOWED_ATTR") ? l({}, e.ALLOWED_ATTR, T) : We, Ne = N(e, "ALLOWED_NAMESPACES") ? l({}, e.ALLOWED_NAMESPACES, we) : Ht, be = N(e, "ADD_URI_SAFE_ATTR") ? l(P(Ze), e.ADD_URI_SAFE_ATTR, T) : Ze, qe = N(e, "ADD_DATA_URI_TAGS") ? l(P(Ke), e.ADD_DATA_URI_TAGS, T) : Ke, B = N(e, "FORBID_CONTENTS") ? l({}, e.FORBID_CONTENTS, T) : $e, q = N(e, "FORBID_TAGS") ? l({}, e.FORBID_TAGS, T) : P({}), Se = N(e, "FORBID_ATTR") ? l({}, e.FORBID_ATTR, T) : P({}), W = N(e, "USE_PROFILES") ? e.USE_PROFILES : !1, Be = e.ALLOW_ARIA_ATTR !== !1, Re = e.ALLOW_DATA_ATTR !== !1, Ye = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Xe = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, z = e.SAFE_FOR_TEMPLATES || !1, se = e.SAFE_FOR_XML !== !1, k = e.WHOLE_DOCUMENT || !1, G = e.RETURN_DOM || !1, le = e.RETURN_DOM_FRAGMENT || !1, ce = e.RETURN_TRUSTED_TYPE || !1, Oe = e.FORCE_BODY || !1, je = e.SANITIZE_DOM !== !1, Ve = e.SANITIZE_NAMED_PROPS || !1, Le = e.KEEP_CONTENT !== !1, K = e.IN_PLACE || !1, ze = e.ALLOWED_URI_REGEXP || Rt, Y = e.NAMESPACE || M, me = e.MATHML_TEXT_INTEGRATION_POINTS || me, pe = e.HTML_INTEGRATION_POINTS || pe, f = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && Je(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (f.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && Je(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (f.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (f.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), z && (Re = !1), le && (G = !0), W && (d = l({}, dt), h = [], W.html === !0 && (l(d, pt), l(h, Tt)), W.svg === !0 && (l(d, xe), l(h, ke), l(h, Te)), W.svgFilters === !0 && (l(d, Pe), l(h, ke), l(h, Te)), W.mathMl === !0 && (l(d, ve), l(h, ht), l(h, Te))), e.ADD_TAGS && (d === Ge && (d = P(d)), l(d, e.ADD_TAGS, T)), e.ADD_ATTR && (h === We && (h = P(h)), l(h, e.ADD_ATTR, T)), e.ADD_URI_SAFE_ATTR && l(be, e.ADD_URI_SAFE_ATTR, T), e.FORBID_CONTENTS && (B === $e && (B = P(B)), l(B, e.FORBID_CONTENTS, T)), Le && (d["#text"] = !0), k && l(d, ["html", "head", "body"]), d.table && (l(d, ["tbody"]), delete q.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw te('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw te('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        A = e.TRUSTED_TYPES_POLICY, $ = A.createHTML("");
      } else
        A === void 0 && (A = hn(re, u)), A !== null && typeof $ == "string" && ($ = A.createHTML(""));
      y && y(e), X = e;
    }
  }, Qe = l({}, [...xe, ...Pe, ...rn]), et = l({}, [...ve, ...an]), Yt = function(e) {
    let t = ae(e);
    (!t || !t.tagName) && (t = {
      namespaceURI: Y,
      tagName: "template"
    });
    const i = he(e.tagName), c = he(t.tagName);
    return Ne[e.namespaceURI] ? e.namespaceURI === ue ? t.namespaceURI === M ? i === "svg" : t.namespaceURI === fe ? i === "svg" && (c === "annotation-xml" || me[c]) : !!Qe[i] : e.namespaceURI === fe ? t.namespaceURI === M ? i === "math" : t.namespaceURI === ue ? i === "math" && pe[c] : !!et[i] : e.namespaceURI === M ? t.namespaceURI === ue && !pe[c] || t.namespaceURI === fe && !me[c] ? !1 : !et[i] && (zt[i] || !Qe[i]) : !!(Z === "application/xhtml+xml" && Ne[e.namespaceURI]) : !1;
  }, C = function(e) {
    Q(n.removed, {
      element: e
    });
    try {
      ae(e).removeChild(e);
    } catch {
      Dt(e);
    }
  }, j = function(e, t) {
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
      if (G || le)
        try {
          C(t);
        } catch {
        }
      else
        try {
          t.setAttribute(e, "");
        } catch {
        }
  }, tt = function(e) {
    let t = null, i = null;
    if (Oe)
      e = "<remove></remove>" + e;
    else {
      const m = mt(e, /^[\r\n\t ]+/);
      i = m && m[0];
    }
    Z === "application/xhtml+xml" && Y === M && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const c = A ? A.createHTML(e) : e;
    if (Y === M)
      try {
        t = new ie().parseFromString(c, Z);
      } catch {
      }
    if (!t || !t.documentElement) {
      t = Ee.createDocument(Y, "template", null);
      try {
        t.documentElement.innerHTML = De ? $ : c;
      } catch {
      }
    }
    const E = t.body || t.documentElement;
    return e && i && E.insertBefore(a.createTextNode(i), E.childNodes[0] || null), Y === M ? wt.call(t, k ? "html" : "body")[0] : k ? t.documentElement : E;
  }, nt = function(e) {
    return It.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, Ie = function(e) {
    return e instanceof v && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof H) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ot = function(e) {
    return typeof F == "function" && e instanceof F;
  };
  function w(r, e, t) {
    de(r, (i) => {
      i.call(n, e, t, X);
    });
  }
  const it = function(e) {
    let t = null;
    if (w(S.beforeSanitizeElements, e, null), Ie(e))
      return C(e), !0;
    const i = T(e.nodeName);
    if (w(S.uponSanitizeElement, e, {
      tagName: i,
      allowedTags: d
    }), se && e.hasChildNodes() && !ot(e.firstElementChild) && R(/<[/\w!]/g, e.innerHTML) && R(/<[/\w!]/g, e.textContent) || e.nodeType === oe.progressingInstruction || se && e.nodeType === oe.comment && R(/<[/\w]/g, e.data))
      return C(e), !0;
    if (!d[i] || q[i]) {
      if (!q[i] && at(i) && (f.tagNameCheck instanceof RegExp && R(f.tagNameCheck, i) || f.tagNameCheck instanceof Function && f.tagNameCheck(i)))
        return !1;
      if (Le && !B[i]) {
        const c = ae(e) || e.parentNode, E = Ct(e) || e.childNodes;
        if (E && c) {
          const m = E.length;
          for (let b = m - 1; b >= 0; --b) {
            const x = bt(E[b], !0);
            x.__removalCount = (e.__removalCount || 0) + 1, c.insertBefore(x, Nt(e));
          }
        }
      }
      return C(e), !0;
    }
    return e instanceof p && !Yt(e) || (i === "noscript" || i === "noembed" || i === "noframes") && R(/<\/no(script|embed|frames)/i, e.innerHTML) ? (C(e), !0) : (z && e.nodeType === oe.text && (t = e.textContent, de([_e, ge, Ae], (c) => {
      t = ee(t, c, " ");
    }), e.textContent !== t && (Q(n.removed, {
      element: e.cloneNode()
    }), e.textContent = t)), w(S.afterSanitizeElements, e, null), !1);
  }, rt = function(e, t, i) {
    if (je && (t === "id" || t === "name") && (i in a || i in Bt))
      return !1;
    if (!(Re && !Se[t] && R(Pt, t))) {
      if (!(Be && R(vt, t))) {
        if (!h[t] || Se[t]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(at(e) && (f.tagNameCheck instanceof RegExp && R(f.tagNameCheck, e) || f.tagNameCheck instanceof Function && f.tagNameCheck(e)) && (f.attributeNameCheck instanceof RegExp && R(f.attributeNameCheck, t) || f.attributeNameCheck instanceof Function && f.attributeNameCheck(t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            t === "is" && f.allowCustomizedBuiltInElements && (f.tagNameCheck instanceof RegExp && R(f.tagNameCheck, i) || f.tagNameCheck instanceof Function && f.tagNameCheck(i)))
          ) return !1;
        } else if (!be[t]) {
          if (!R(ze, ee(i, He, ""))) {
            if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && en(i, "data:") === 0 && qe[e])) {
              if (!(Ye && !R(kt, ee(i, He, "")))) {
                if (i)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, at = function(e) {
    return e !== "annotation-xml" && mt(e, Ut);
  }, st = function(e) {
    w(S.beforeSanitizeAttributes, e, null);
    const {
      attributes: t
    } = e;
    if (!t || Ie(e))
      return;
    const i = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: h,
      forceKeepAttr: void 0
    };
    let c = t.length;
    for (; c--; ) {
      const E = t[c], {
        name: m,
        namespaceURI: b,
        value: x
      } = E, J = T(m), Me = x;
      let _ = m === "value" ? Me : tn(Me);
      if (i.attrName = J, i.attrValue = _, i.keepAttr = !0, i.forceKeepAttr = void 0, w(S.uponSanitizeAttribute, e, i), _ = i.attrValue, Ve && (J === "id" || J === "name") && (j(m, e), _ = Ft + _), se && R(/((--!?|])>)|<\/(style|title)/i, _)) {
        j(m, e);
        continue;
      }
      if (i.forceKeepAttr)
        continue;
      if (!i.keepAttr) {
        j(m, e);
        continue;
      }
      if (!Xe && R(/\/>/i, _)) {
        j(m, e);
        continue;
      }
      z && de([_e, ge, Ae], (ct) => {
        _ = ee(_, ct, " ");
      });
      const lt = T(e.nodeName);
      if (!rt(lt, J, _)) {
        j(m, e);
        continue;
      }
      if (A && typeof re == "object" && typeof re.getAttributeType == "function" && !b)
        switch (re.getAttributeType(lt, J)) {
          case "TrustedHTML": {
            _ = A.createHTML(_);
            break;
          }
          case "TrustedScriptURL": {
            _ = A.createScriptURL(_);
            break;
          }
        }
      if (_ !== Me)
        try {
          b ? e.setAttributeNS(b, m, _) : e.setAttribute(m, _), Ie(e) ? C(e) : ut(n.removed);
        } catch {
          j(m, e);
        }
    }
    w(S.afterSanitizeAttributes, e, null);
  }, Xt = function r(e) {
    let t = null;
    const i = nt(e);
    for (w(S.beforeSanitizeShadowDOM, e, null); t = i.nextNode(); )
      w(S.uponSanitizeShadowNode, t, null), it(t), st(t), t.content instanceof L && r(t.content);
    w(S.afterSanitizeShadowDOM, e, null);
  };
  return n.sanitize = function(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = null, i = null, c = null, E = null;
    if (De = !r, De && (r = "<!-->"), typeof r != "string" && !ot(r))
      if (typeof r.toString == "function") {
        if (r = r.toString(), typeof r != "string")
          throw te("dirty is not a string, aborting");
      } else
        throw te("toString is not a function");
    if (!n.isSupported)
      return r;
    if (ye || Ce(e), n.removed = [], typeof r == "string" && (K = !1), K) {
      if (r.nodeName) {
        const x = T(r.nodeName);
        if (!d[x] || q[x])
          throw te("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (r instanceof F)
      t = tt("<!---->"), i = t.ownerDocument.importNode(r, !0), i.nodeType === oe.element && i.nodeName === "BODY" || i.nodeName === "HTML" ? t = i : t.appendChild(i);
    else {
      if (!G && !z && !k && // eslint-disable-next-line unicorn/prefer-includes
      r.indexOf("<") === -1)
        return A && ce ? A.createHTML(r) : r;
      if (t = tt(r), !t)
        return G ? null : ce ? $ : "";
    }
    t && Oe && C(t.firstChild);
    const m = nt(K ? r : t);
    for (; c = m.nextNode(); )
      it(c), st(c), c.content instanceof L && Xt(c.content);
    if (K)
      return r;
    if (G) {
      if (le)
        for (E = Mt.call(t.ownerDocument); t.firstChild; )
          E.appendChild(t.firstChild);
      else
        E = t;
      return (h.shadowroot || h.shadowrootmode) && (E = xt.call(s, E, !0)), E;
    }
    let b = k ? t.outerHTML : t.innerHTML;
    return k && d["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && R(yt, t.ownerDocument.doctype.name) && (b = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + b), z && de([_e, ge, Ae], (x) => {
      b = ee(b, x, " ");
    }), A && ce ? A.createHTML(b) : b;
  }, n.setConfig = function() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ce(r), ye = !0;
  }, n.clearConfig = function() {
    X = null, ye = !1;
  }, n.isValidAttribute = function(r, e, t) {
    X || Ce({});
    const i = T(r), c = T(e);
    return rt(i, c, t);
  }, n.addHook = function(r, e) {
    typeof e == "function" && Q(S[r], e);
  }, n.removeHook = function(r, e) {
    if (e !== void 0) {
      const t = Jt(S[r], e);
      return t === -1 ? void 0 : Qt(S[r], t, 1)[0];
    }
    return ut(S[r]);
  }, n.removeHooks = function(r) {
    S[r] = [];
  }, n.removeAllHooks = function() {
    S = _t();
  }, n;
}
var En = Ot();
const _n = ({ connected: o }, { allowShadowDom: n = !1, stylecontent: a, whenVisible: s = !1, adaptater: u }) => {
  class L extends HTMLElement {
    constructor() {
      super();
      U(this, "stylecontent", a);
      U(this, "allowShadowDom", n);
      U(this, "disconnected", () => {
      });
      U(this, "whenVisibleAllowed", s);
      U(this, "adaptater", u);
    }
    connectedCallback() {
      this.whenVisibleAllowed || this.render();
    }
    disconnectedCallback() {
      this.whenVisibleAllowed && Lt.unobserve(this), this.disconnected();
    }
    attributeChangedCallback(p, g, H) {
      p === "data-render" && H === "true" && this.render();
    }
    render() {
      const p = Rn(this), g = this.getTemplate(), H = this.getSlots(g);
      if (this.allowShadowDom) {
        if (!this.shadowRoot) {
          const v = this.attachShadow({ mode: "open" });
          this.addTemplateSlot(g);
          const ie = o({ element: v, props: p, slots: H });
          this.disconnected = typeof ie == "function" ? ie : () => {
          }, this.addStyle(v);
        }
      } else {
        const v = o({ element: this, props: p, slots: H });
        this.disconnected = typeof v == "function" ? v : () => {
        };
      }
    }
    async addTemplateSlot(p) {
      if (p) {
        const g = En.sanitize(p.content, { RETURN_DOM_FRAGMENT: !0 });
        this.appendChild(g);
      }
    }
    getSlots(p) {
      return this.adaptater === "react" ? $t(p) : { allSlots: "" };
    }
    getTemplate() {
      const p = this.tagName.toLowerCase();
      return this.querySelector(`[data-for='${p}']`);
    }
    addStyle(p) {
      if (this.stylecontent) {
        const g = document.createElement("style");
        g.textContent = this.stylecontent, p.appendChild(g);
      }
    }
    //  public getReactSlots(): Record<string, any> {
    //     const slots: Record<string, any> = {};
    //     // Default slot (no name)
    //     const defaultSlotNodes = Array.from(this.childNodes).filter(
    //         node => !(node instanceof HTMLElement && node.hasAttribute('slot'))
    //     );
    //     if (defaultSlotNodes.length > 0) {
    //         const container = document.createElement('div');
    //         defaultSlotNodes.forEach(node => container.appendChild(node.cloneNode(true)));
    //         slots.children = parse(container.innerHTML);
    //     }
    //     // Named slots
    //     const namedSlotNodes = Array.from(this.children).filter(
    //         el => el instanceof HTMLElement && el.hasAttribute('slot')
    //     ) as HTMLElement[];
    //     for (const el of namedSlotNodes) {
    //         const slotName = el.getAttribute('slot');
    //         if (slotName) {
    //             slots[slotName] = parse(el.outerHTML);
    //         }
    //     }
    //     return slots;
    // }
  }
  return U(L, "observedAttributes", ["data-render"]), L;
}, gn = (o, n) => {
  customElements.get(o) || customElements.define(o, n);
}, gt = (o) => {
  if (typeof o == "string") {
    const n = document.createElement("div");
    return n.textContent = o, n.innerHTML;
  }
  return o;
}, Lt = new IntersectionObserver((o, n) => {
  var a;
  for (const s of o)
    s.isIntersecting && ((a = s == null ? void 0 : s.target) == null || a.setAttribute("data-render", "true"), n.unobserve(s.target));
});
function An(o) {
  try {
    const n = o && JSON.parse(o);
    return gt(n);
  } catch {
    return gt(o);
  }
}
function Sn(o) {
  return Object.entries({ ...o.dataset }).map(
    ([n, a]) => [n, An(a ?? "")]
  );
}
const Ln = async ({ tagname: o, allowShadowDom: n = !1, stylecontent: a = "", whenVisible: s = !1, adaptater: u }, L) => {
  if (!o || typeof o != "string" || !/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]+$/.test(o))
    throw new Error(`Invalid or missing tagname: "${o}". A valid custom element name must contain a hyphen.`);
  const I = _n({ connected: L }, { allowShadowDom: n, stylecontent: a, whenVisible: s, adaptater: u });
  if (gn(o, I), s) {
    const F = document.querySelectorAll(o);
    for (const p of F)
      Lt.observe(p);
  }
}, Rn = (o) => {
  const n = Sn(o), a = new Map(n);
  return a.set("tagname", o.tagName.toLowerCase()), Object.fromEntries(a);
};
export {
  Ln as define,
  Rn as getProps,
  Lt as observer
};
