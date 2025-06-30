var jt = Object.defineProperty;
var Vt = (o, n, a) => n in o ? jt(o, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[n] = a;
var U = (o, n, a) => Vt(o, typeof n != "symbol" ? n + "" : n, a);
import { getSlotsForReact as $t } from "@mindemangou/magiccomponents-react";
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: St,
  setPrototypeOf: ut,
  isFrozen: qt,
  getPrototypeOf: Kt,
  getOwnPropertyDescriptor: Zt
} = Object;
let {
  freeze: R,
  seal: D,
  create: yt
} = Object, {
  apply: Fe,
  construct: He
} = typeof Reflect < "u" && Reflect;
R || (R = function(n) {
  return n;
});
D || (D = function(n) {
  return n;
});
Fe || (Fe = function(n, a, s) {
  return n.apply(a, s);
});
He || (He = function(n, a) {
  return new n(...a);
});
const de = O(Array.prototype.forEach), Jt = O(Array.prototype.lastIndexOf), mt = O(Array.prototype.pop), Q = O(Array.prototype.push), Qt = O(Array.prototype.splice), he = O(String.prototype.toLowerCase), xe = O(String.prototype.toString), pt = O(String.prototype.match), ee = O(String.prototype.replace), en = O(String.prototype.indexOf), tn = O(String.prototype.trim), N = O(Object.prototype.hasOwnProperty), y = O(RegExp.prototype.test), te = nn(TypeError);
function O(o) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++)
      s[u - 1] = arguments[u];
    return Fe(o, n, s);
  };
}
function nn(o) {
  return function() {
    for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
      a[s] = arguments[s];
    return He(o, a);
  };
}
function l(o, n) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : he;
  ut && ut(o, null);
  let s = n.length;
  for (; s--; ) {
    let u = n[s];
    if (typeof u == "string") {
      const b = a(u);
      b !== u && (qt(n) || (n[s] = b), u = b);
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
  const n = yt(null);
  for (const [a, s] of St(o))
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
const dt = R(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Pe = R(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ve = R(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), rn = R(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ke = R(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), an = R(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Tt = R(["#text"]), ht = R(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ue = R(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Et = R(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Te = R(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), sn = D(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ln = D(/<%[\w\W]*|[\w\W]*%>/gm), cn = D(/\$\{[\w\W]*/gm), fn = D(/^data-[\-\w.\u00B7-\uFFFF]+$/), un = D(/^aria-[\-\w]+$/), Rt = D(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), mn = D(/^(?:\w+script|data):/i), pn = D(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ot = D(/^html$/i), dn = D(/^[a-z][.\w]*(-[.\w]+)+$/i);
var _t = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: un,
  ATTR_WHITESPACE: pn,
  CUSTOM_ELEMENT: dn,
  DATA_ATTR: fn,
  DOCTYPE_NAME: Ot,
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
  const b = "dompurify" + (s ? "#" + s : "");
  try {
    return n.createPolicy(b, {
      createHTML(C) {
        return C;
      },
      createScriptURL(C) {
        return C;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + b + " could not be created."), null;
  }
}, gt = function() {
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
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Tn();
  const n = (r) => bt(r);
  if (n.version = "3.2.6", n.removed = [], !o || !o.document || o.document.nodeType !== oe.document || !o.Element)
    return n.isSupported = !1, n;
  let {
    document: a
  } = o;
  const s = a, u = s.currentScript, {
    DocumentFragment: b,
    HTMLTemplateElement: C,
    Node: F,
    Element: p,
    NodeFilter: g,
    NamedNodeMap: H = o.NamedNodeMap || o.MozNamedAttrMap,
    HTMLFormElement: v,
    DOMParser: ie,
    trustedTypes: re
  } = o, V = p.prototype, Lt = ne(V, "cloneNode"), Dt = ne(V, "remove"), Nt = ne(V, "nextSibling"), wt = ne(V, "childNodes"), ae = ne(V, "parentNode");
  if (typeof C == "function") {
    const r = a.createElement("template");
    r.content && r.content.ownerDocument && (a = r.content.ownerDocument);
  }
  let A, $ = "";
  const {
    implementation: _e,
    createNodeIterator: Ct,
    createDocumentFragment: It,
    getElementsByTagName: Mt
  } = a, {
    importNode: xt
  } = s;
  let S = gt();
  n.isSupported = typeof St == "function" && typeof ae == "function" && _e && _e.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ge,
    ERB_EXPR: Ae,
    TMPLIT_EXPR: Se,
    DATA_ATTR: Pt,
    ARIA_ATTR: vt,
    IS_SCRIPT_OR_DATA: kt,
    ATTR_WHITESPACE: ze,
    CUSTOM_ELEMENT: Ut
  } = _t;
  let {
    IS_ALLOWED_URI: Ge
  } = _t, d = null;
  const We = l({}, [...dt, ...Pe, ...ve, ...ke, ...Tt]);
  let h = null;
  const Be = l({}, [...ht, ...Ue, ...Et, ...Te]);
  let f = Object.seal(yt(null, {
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
  })), q = null, ye = null, Ye = !0, Re = !0, Xe = !1, je = !0, z = !1, se = !0, k = !1, Oe = !1, be = !1, G = !1, le = !1, ce = !1, Ve = !0, $e = !1;
  const Ft = "user-content-";
  let Le = !0, K = !1, W = {}, B = null;
  const qe = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ke = null;
  const Ze = l({}, ["audio", "video", "img", "source", "image", "track"]);
  let De = null;
  const Je = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), fe = "http://www.w3.org/1998/Math/MathML", ue = "http://www.w3.org/2000/svg", I = "http://www.w3.org/1999/xhtml";
  let Y = I, Ne = !1, we = null;
  const Ht = l({}, [fe, ue, I], xe);
  let me = l({}, ["mi", "mo", "mn", "ms", "mtext"]), pe = l({}, ["annotation-xml"]);
  const zt = l({}, ["title", "style", "font", "a", "script"]);
  let Z = null;
  const Gt = ["application/xhtml+xml", "text/html"], Wt = "text/html";
  let T = null, X = null;
  const Bt = a.createElement("form"), Qe = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ce = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(X && X === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = P(e), Z = // eslint-disable-next-line unicorn/prefer-includes
      Gt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Wt : e.PARSER_MEDIA_TYPE, T = Z === "application/xhtml+xml" ? xe : he, d = N(e, "ALLOWED_TAGS") ? l({}, e.ALLOWED_TAGS, T) : We, h = N(e, "ALLOWED_ATTR") ? l({}, e.ALLOWED_ATTR, T) : Be, we = N(e, "ALLOWED_NAMESPACES") ? l({}, e.ALLOWED_NAMESPACES, xe) : Ht, De = N(e, "ADD_URI_SAFE_ATTR") ? l(P(Je), e.ADD_URI_SAFE_ATTR, T) : Je, Ke = N(e, "ADD_DATA_URI_TAGS") ? l(P(Ze), e.ADD_DATA_URI_TAGS, T) : Ze, B = N(e, "FORBID_CONTENTS") ? l({}, e.FORBID_CONTENTS, T) : qe, q = N(e, "FORBID_TAGS") ? l({}, e.FORBID_TAGS, T) : P({}), ye = N(e, "FORBID_ATTR") ? l({}, e.FORBID_ATTR, T) : P({}), W = N(e, "USE_PROFILES") ? e.USE_PROFILES : !1, Ye = e.ALLOW_ARIA_ATTR !== !1, Re = e.ALLOW_DATA_ATTR !== !1, Xe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, je = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, z = e.SAFE_FOR_TEMPLATES || !1, se = e.SAFE_FOR_XML !== !1, k = e.WHOLE_DOCUMENT || !1, G = e.RETURN_DOM || !1, le = e.RETURN_DOM_FRAGMENT || !1, ce = e.RETURN_TRUSTED_TYPE || !1, be = e.FORCE_BODY || !1, Ve = e.SANITIZE_DOM !== !1, $e = e.SANITIZE_NAMED_PROPS || !1, Le = e.KEEP_CONTENT !== !1, K = e.IN_PLACE || !1, Ge = e.ALLOWED_URI_REGEXP || Rt, Y = e.NAMESPACE || I, me = e.MATHML_TEXT_INTEGRATION_POINTS || me, pe = e.HTML_INTEGRATION_POINTS || pe, f = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && Qe(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (f.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && Qe(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (f.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (f.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), z && (Re = !1), le && (G = !0), W && (d = l({}, Tt), h = [], W.html === !0 && (l(d, dt), l(h, ht)), W.svg === !0 && (l(d, Pe), l(h, Ue), l(h, Te)), W.svgFilters === !0 && (l(d, ve), l(h, Ue), l(h, Te)), W.mathMl === !0 && (l(d, ke), l(h, Et), l(h, Te))), e.ADD_TAGS && (d === We && (d = P(d)), l(d, e.ADD_TAGS, T)), e.ADD_ATTR && (h === Be && (h = P(h)), l(h, e.ADD_ATTR, T)), e.ADD_URI_SAFE_ATTR && l(De, e.ADD_URI_SAFE_ATTR, T), e.FORBID_CONTENTS && (B === qe && (B = P(B)), l(B, e.FORBID_CONTENTS, T)), Le && (d["#text"] = !0), k && l(d, ["html", "head", "body"]), d.table && (l(d, ["tbody"]), delete q.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw te('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw te('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        A = e.TRUSTED_TYPES_POLICY, $ = A.createHTML("");
      } else
        A === void 0 && (A = hn(re, u)), A !== null && typeof $ == "string" && ($ = A.createHTML(""));
      R && R(e), X = e;
    }
  }, et = l({}, [...Pe, ...ve, ...rn]), tt = l({}, [...ke, ...an]), Yt = function(e) {
    let t = ae(e);
    (!t || !t.tagName) && (t = {
      namespaceURI: Y,
      tagName: "template"
    });
    const i = he(e.tagName), c = he(t.tagName);
    return we[e.namespaceURI] ? e.namespaceURI === ue ? t.namespaceURI === I ? i === "svg" : t.namespaceURI === fe ? i === "svg" && (c === "annotation-xml" || me[c]) : !!et[i] : e.namespaceURI === fe ? t.namespaceURI === I ? i === "math" : t.namespaceURI === ue ? i === "math" && pe[c] : !!tt[i] : e.namespaceURI === I ? t.namespaceURI === ue && !pe[c] || t.namespaceURI === fe && !me[c] ? !1 : !tt[i] && (zt[i] || !et[i]) : !!(Z === "application/xhtml+xml" && we[e.namespaceURI]) : !1;
  }, w = function(e) {
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
          w(t);
        } catch {
        }
      else
        try {
          t.setAttribute(e, "");
        } catch {
        }
  }, nt = function(e) {
    let t = null, i = null;
    if (be)
      e = "<remove></remove>" + e;
    else {
      const m = pt(e, /^[\r\n\t ]+/);
      i = m && m[0];
    }
    Z === "application/xhtml+xml" && Y === I && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const c = A ? A.createHTML(e) : e;
    if (Y === I)
      try {
        t = new ie().parseFromString(c, Z);
      } catch {
      }
    if (!t || !t.documentElement) {
      t = _e.createDocument(Y, "template", null);
      try {
        t.documentElement.innerHTML = Ne ? $ : c;
      } catch {
      }
    }
    const E = t.body || t.documentElement;
    return e && i && E.insertBefore(a.createTextNode(i), E.childNodes[0] || null), Y === I ? Mt.call(t, k ? "html" : "body")[0] : k ? t.documentElement : E;
  }, ot = function(e) {
    return Ct.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, Ie = function(e) {
    return e instanceof v && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof H) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, it = function(e) {
    return typeof F == "function" && e instanceof F;
  };
  function M(r, e, t) {
    de(r, (i) => {
      i.call(n, e, t, X);
    });
  }
  const rt = function(e) {
    let t = null;
    if (M(S.beforeSanitizeElements, e, null), Ie(e))
      return w(e), !0;
    const i = T(e.nodeName);
    if (M(S.uponSanitizeElement, e, {
      tagName: i,
      allowedTags: d
    }), se && e.hasChildNodes() && !it(e.firstElementChild) && y(/<[/\w!]/g, e.innerHTML) && y(/<[/\w!]/g, e.textContent) || e.nodeType === oe.progressingInstruction || se && e.nodeType === oe.comment && y(/<[/\w]/g, e.data))
      return w(e), !0;
    if (!d[i] || q[i]) {
      if (!q[i] && st(i) && (f.tagNameCheck instanceof RegExp && y(f.tagNameCheck, i) || f.tagNameCheck instanceof Function && f.tagNameCheck(i)))
        return !1;
      if (Le && !B[i]) {
        const c = ae(e) || e.parentNode, E = wt(e) || e.childNodes;
        if (E && c) {
          const m = E.length;
          for (let L = m - 1; L >= 0; --L) {
            const x = Lt(E[L], !0);
            x.__removalCount = (e.__removalCount || 0) + 1, c.insertBefore(x, Nt(e));
          }
        }
      }
      return w(e), !0;
    }
    return e instanceof p && !Yt(e) || (i === "noscript" || i === "noembed" || i === "noframes") && y(/<\/no(script|embed|frames)/i, e.innerHTML) ? (w(e), !0) : (z && e.nodeType === oe.text && (t = e.textContent, de([ge, Ae, Se], (c) => {
      t = ee(t, c, " ");
    }), e.textContent !== t && (Q(n.removed, {
      element: e.cloneNode()
    }), e.textContent = t)), M(S.afterSanitizeElements, e, null), !1);
  }, at = function(e, t, i) {
    if (Ve && (t === "id" || t === "name") && (i in a || i in Bt))
      return !1;
    if (!(Re && !ye[t] && y(Pt, t))) {
      if (!(Ye && y(vt, t))) {
        if (!h[t] || ye[t]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(st(e) && (f.tagNameCheck instanceof RegExp && y(f.tagNameCheck, e) || f.tagNameCheck instanceof Function && f.tagNameCheck(e)) && (f.attributeNameCheck instanceof RegExp && y(f.attributeNameCheck, t) || f.attributeNameCheck instanceof Function && f.attributeNameCheck(t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            t === "is" && f.allowCustomizedBuiltInElements && (f.tagNameCheck instanceof RegExp && y(f.tagNameCheck, i) || f.tagNameCheck instanceof Function && f.tagNameCheck(i)))
          ) return !1;
        } else if (!De[t]) {
          if (!y(Ge, ee(i, ze, ""))) {
            if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && en(i, "data:") === 0 && Ke[e])) {
              if (!(Xe && !y(kt, ee(i, ze, "")))) {
                if (i)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, st = function(e) {
    return e !== "annotation-xml" && pt(e, Ut);
  }, lt = function(e) {
    M(S.beforeSanitizeAttributes, e, null);
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
        namespaceURI: L,
        value: x
      } = E, J = T(m), Me = x;
      let _ = m === "value" ? Me : tn(Me);
      if (i.attrName = J, i.attrValue = _, i.keepAttr = !0, i.forceKeepAttr = void 0, M(S.uponSanitizeAttribute, e, i), _ = i.attrValue, $e && (J === "id" || J === "name") && (j(m, e), _ = Ft + _), se && y(/((--!?|])>)|<\/(style|title)/i, _)) {
        j(m, e);
        continue;
      }
      if (i.forceKeepAttr)
        continue;
      if (!i.keepAttr) {
        j(m, e);
        continue;
      }
      if (!je && y(/\/>/i, _)) {
        j(m, e);
        continue;
      }
      z && de([ge, Ae, Se], (ft) => {
        _ = ee(_, ft, " ");
      });
      const ct = T(e.nodeName);
      if (!at(ct, J, _)) {
        j(m, e);
        continue;
      }
      if (A && typeof re == "object" && typeof re.getAttributeType == "function" && !L)
        switch (re.getAttributeType(ct, J)) {
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
          L ? e.setAttributeNS(L, m, _) : e.setAttribute(m, _), Ie(e) ? w(e) : mt(n.removed);
        } catch {
          j(m, e);
        }
    }
    M(S.afterSanitizeAttributes, e, null);
  }, Xt = function r(e) {
    let t = null;
    const i = ot(e);
    for (M(S.beforeSanitizeShadowDOM, e, null); t = i.nextNode(); )
      M(S.uponSanitizeShadowNode, t, null), rt(t), lt(t), t.content instanceof b && r(t.content);
    M(S.afterSanitizeShadowDOM, e, null);
  };
  return n.sanitize = function(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = null, i = null, c = null, E = null;
    if (Ne = !r, Ne && (r = "<!-->"), typeof r != "string" && !it(r))
      if (typeof r.toString == "function") {
        if (r = r.toString(), typeof r != "string")
          throw te("dirty is not a string, aborting");
      } else
        throw te("toString is not a function");
    if (!n.isSupported)
      return r;
    if (Oe || Ce(e), n.removed = [], typeof r == "string" && (K = !1), K) {
      if (r.nodeName) {
        const x = T(r.nodeName);
        if (!d[x] || q[x])
          throw te("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (r instanceof F)
      t = nt("<!---->"), i = t.ownerDocument.importNode(r, !0), i.nodeType === oe.element && i.nodeName === "BODY" || i.nodeName === "HTML" ? t = i : t.appendChild(i);
    else {
      if (!G && !z && !k && // eslint-disable-next-line unicorn/prefer-includes
      r.indexOf("<") === -1)
        return A && ce ? A.createHTML(r) : r;
      if (t = nt(r), !t)
        return G ? null : ce ? $ : "";
    }
    t && be && w(t.firstChild);
    const m = ot(K ? r : t);
    for (; c = m.nextNode(); )
      rt(c), lt(c), c.content instanceof b && Xt(c.content);
    if (K)
      return r;
    if (G) {
      if (le)
        for (E = It.call(t.ownerDocument); t.firstChild; )
          E.appendChild(t.firstChild);
      else
        E = t;
      return (h.shadowroot || h.shadowrootmode) && (E = xt.call(s, E, !0)), E;
    }
    let L = k ? t.outerHTML : t.innerHTML;
    return k && d["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && y(Ot, t.ownerDocument.doctype.name) && (L = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + L), z && de([ge, Ae, Se], (x) => {
      L = ee(L, x, " ");
    }), A && ce ? A.createHTML(L) : L;
  }, n.setConfig = function() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ce(r), Oe = !0;
  }, n.clearConfig = function() {
    X = null, Oe = !1;
  }, n.isValidAttribute = function(r, e, t) {
    X || Ce({});
    const i = T(r), c = T(e);
    return at(i, c, t);
  }, n.addHook = function(r, e) {
    typeof e == "function" && Q(S[r], e);
  }, n.removeHook = function(r, e) {
    if (e !== void 0) {
      const t = Jt(S[r], e);
      return t === -1 ? void 0 : Qt(S[r], t, 1)[0];
    }
    return mt(S[r]);
  }, n.removeHooks = function(r) {
    S[r] = [];
  }, n.removeAllHooks = function() {
    S = gt();
  }, n;
}
var En = bt();
const _n = ({ connected: o }, { allowShadowDom: n = !1, stylecontent: a, whenVisible: s = !1, adaptater: u }) => {
  class b extends HTMLElement {
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
      this.whenVisibleAllowed && typeof window < "u" && Ee && Ee.unobserve(this), this.disconnected();
    }
    attributeChangedCallback(p, g, H) {
      p === "data-render" && H === "true" && this.render();
    }
    render() {
      const p = yn(this), g = this.getTemplate(), H = this.getSlots(g);
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
  return U(b, "observedAttributes", ["data-render"]), b;
}, gn = (o, n) => {
  customElements.get(o) || customElements.define(o, n);
}, At = (o) => {
  if (typeof o == "string") {
    const n = document.createElement("div");
    return n.textContent = o, n.innerHTML;
  }
  return o;
}, Ee = typeof window < "u" && typeof window.IntersectionObserver < "u" ? new IntersectionObserver((o, n) => {
  var a;
  for (const s of o)
    s.isIntersecting && ((a = s == null ? void 0 : s.target) == null || a.setAttribute("data-render", "true"), n.unobserve(s.target));
}) : void 0;
function An(o) {
  try {
    const n = o && JSON.parse(o);
    return At(n);
  } catch {
    return At(o);
  }
}
function Sn(o) {
  return Object.entries({ ...o.dataset }).map(
    ([n, a]) => [n, An(a ?? "")]
  );
}
const bn = async ({ tagname: o, allowShadowDom: n = !1, stylecontent: a = "", whenVisible: s = !1, adaptater: u }, b) => {
  if (!o || typeof o != "string" || !/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]+$/.test(o))
    throw new Error(`Invalid or missing tagname: "${o}". A valid custom element name must contain a hyphen.`);
  const C = _n({ connected: b }, { allowShadowDom: n, stylecontent: a, whenVisible: s, adaptater: u });
  if (gn(o, C), s && typeof window < "u" && Ee) {
    const F = document.querySelectorAll(o);
    for (const p of F)
      Ee.observe(p);
  }
}, yn = (o) => {
  const n = Sn(o), a = new Map(n);
  return a.set("tagname", o.tagName.toLowerCase()), Object.fromEntries(a);
};
export {
  bn as define,
  yn as getProps,
  Ee as observer
};
