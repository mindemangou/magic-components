var $t = Object.defineProperty;
var qt = (o, n, a) => n in o ? $t(o, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[n] = a;
var H = (o, n, a) => qt(o, typeof n != "symbol" ? n + "" : n, a);
import { getSlotsForReact as mt } from "@mindemangou/magiccomponents-react";
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: yt,
  setPrototypeOf: pt,
  isFrozen: Kt,
  getPrototypeOf: Zt,
  getOwnPropertyDescriptor: Jt
} = Object;
let {
  freeze: O,
  seal: N,
  create: Rt
} = Object, {
  apply: He,
  construct: ze
} = typeof Reflect < "u" && Reflect;
O || (O = function(n) {
  return n;
});
N || (N = function(n) {
  return n;
});
He || (He = function(n, a, s) {
  return n.apply(a, s);
});
ze || (ze = function(n, a) {
  return new n(...a);
});
const he = b(Array.prototype.forEach), Qt = b(Array.prototype.lastIndexOf), dt = b(Array.prototype.pop), ee = b(Array.prototype.push), en = b(Array.prototype.splice), Ee = b(String.prototype.toLowerCase), xe = b(String.prototype.toString), ht = b(String.prototype.match), te = b(String.prototype.replace), tn = b(String.prototype.indexOf), nn = b(String.prototype.trim), C = b(Object.prototype.hasOwnProperty), R = b(RegExp.prototype.test), ne = on(TypeError);
function b(o) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
      s[p - 1] = arguments[p];
    return He(o, n, s);
  };
}
function on(o) {
  return function() {
    for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
      a[s] = arguments[s];
    return ze(o, a);
  };
}
function l(o, n) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ee;
  pt && pt(o, null);
  let s = n.length;
  for (; s--; ) {
    let p = n[s];
    if (typeof p == "string") {
      const L = a(p);
      L !== p && (Kt(n) || (n[s] = L), p = L);
    }
    o[p] = !0;
  }
  return o;
}
function rn(o) {
  for (let n = 0; n < o.length; n++)
    C(o, n) || (o[n] = null);
  return o;
}
function k(o) {
  const n = Rt(null);
  for (const [a, s] of yt(o))
    C(o, a) && (Array.isArray(s) ? n[a] = rn(s) : s && typeof s == "object" && s.constructor === Object ? n[a] = k(s) : n[a] = s);
  return n;
}
function oe(o, n) {
  for (; o !== null; ) {
    const s = Jt(o, n);
    if (s) {
      if (s.get)
        return b(s.get);
      if (typeof s.value == "function")
        return b(s.value);
    }
    o = Zt(o);
  }
  function a() {
    return null;
  }
  return a;
}
const Tt = O(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Pe = O(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ve = O(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), an = O(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ke = O(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), sn = O(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Et = O(["#text"]), _t = O(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ue = O(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), gt = O(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Te = O(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ln = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), cn = N(/<%[\w\W]*|[\w\W]*%>/gm), fn = N(/\$\{[\w\W]*/gm), un = N(/^data-[\-\w.\u00B7-\uFFFF]+$/), mn = N(/^aria-[\-\w]+$/), Ot = N(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), pn = N(/^(?:\w+script|data):/i), dn = N(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), bt = N(/^html$/i), hn = N(/^[a-z][.\w]*(-[.\w]+)+$/i);
var At = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: mn,
  ATTR_WHITESPACE: dn,
  CUSTOM_ELEMENT: hn,
  DATA_ATTR: un,
  DOCTYPE_NAME: bt,
  ERB_EXPR: cn,
  IS_ALLOWED_URI: Ot,
  IS_SCRIPT_OR_DATA: pn,
  MUSTACHE_EXPR: ln,
  TMPLIT_EXPR: fn
});
const ie = {
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
  const p = "data-tt-policy-suffix";
  a && a.hasAttribute(p) && (s = a.getAttribute(p));
  const L = "dompurify" + (s ? "#" + s : "");
  try {
    return n.createPolicy(L, {
      createHTML(M) {
        return M;
      },
      createScriptURL(M) {
        return M;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + L + " could not be created."), null;
  }
}, St = function() {
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
function Lt() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Tn();
  const n = (r) => Lt(r);
  if (n.version = "3.2.6", n.removed = [], !o || !o.document || o.document.nodeType !== ie.document || !o.Element)
    return n.isSupported = !1, n;
  let {
    document: a
  } = o;
  const s = a, p = s.currentScript, {
    DocumentFragment: L,
    HTMLTemplateElement: M,
    Node: U,
    Element: c,
    NodeFilter: f,
    NamedNodeMap: h = o.NamedNodeMap || o.MozNamedAttrMap,
    HTMLFormElement: D,
    DOMParser: re,
    trustedTypes: ae
  } = o, $ = c.prototype, Dt = oe($, "cloneNode"), Nt = oe($, "remove"), Ct = oe($, "nextSibling"), It = oe($, "childNodes"), se = oe($, "parentNode");
  if (typeof M == "function") {
    const r = a.createElement("template");
    r.content && r.content.ownerDocument && (a = r.content.ownerDocument);
  }
  let S, q = "";
  const {
    implementation: _e,
    createNodeIterator: Mt,
    createDocumentFragment: xt,
    getElementsByTagName: Pt
  } = a, {
    importNode: vt
  } = s;
  let y = St();
  n.isSupported = typeof yt == "function" && typeof se == "function" && _e && _e.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: ge,
    ERB_EXPR: Ae,
    TMPLIT_EXPR: Se,
    DATA_ATTR: kt,
    ARIA_ATTR: Ut,
    IS_SCRIPT_OR_DATA: Ft,
    ATTR_WHITESPACE: Ge,
    CUSTOM_ELEMENT: Ht
  } = At;
  let {
    IS_ALLOWED_URI: We
  } = At, T = null;
  const Be = l({}, [...Tt, ...Pe, ...ve, ...ke, ...Et]);
  let _ = null;
  const Ye = l({}, [..._t, ...Ue, ...gt, ...Te]);
  let m = Object.seal(Rt(null, {
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
  })), K = null, ye = null, je = !0, Re = !0, Xe = !1, Ve = !0, z = !1, le = !0, F = !1, Oe = !1, be = !1, G = !1, ce = !1, fe = !1, $e = !0, qe = !1;
  const zt = "user-content-";
  let Le = !0, Z = !1, W = {}, B = null;
  const Ke = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ze = null;
  const Je = l({}, ["audio", "video", "img", "source", "image", "track"]);
  let we = null;
  const Qe = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ue = "http://www.w3.org/1998/Math/MathML", me = "http://www.w3.org/2000/svg", x = "http://www.w3.org/1999/xhtml";
  let Y = x, De = !1, Ne = null;
  const Gt = l({}, [ue, me, x], xe);
  let pe = l({}, ["mi", "mo", "mn", "ms", "mtext"]), de = l({}, ["annotation-xml"]);
  const Wt = l({}, ["title", "style", "font", "a", "script"]);
  let J = null;
  const Bt = ["application/xhtml+xml", "text/html"], Yt = "text/html";
  let E = null, j = null;
  const jt = a.createElement("form"), et = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ce = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(j && j === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = k(e), J = // eslint-disable-next-line unicorn/prefer-includes
      Bt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Yt : e.PARSER_MEDIA_TYPE, E = J === "application/xhtml+xml" ? xe : Ee, T = C(e, "ALLOWED_TAGS") ? l({}, e.ALLOWED_TAGS, E) : Be, _ = C(e, "ALLOWED_ATTR") ? l({}, e.ALLOWED_ATTR, E) : Ye, Ne = C(e, "ALLOWED_NAMESPACES") ? l({}, e.ALLOWED_NAMESPACES, xe) : Gt, we = C(e, "ADD_URI_SAFE_ATTR") ? l(k(Qe), e.ADD_URI_SAFE_ATTR, E) : Qe, Ze = C(e, "ADD_DATA_URI_TAGS") ? l(k(Je), e.ADD_DATA_URI_TAGS, E) : Je, B = C(e, "FORBID_CONTENTS") ? l({}, e.FORBID_CONTENTS, E) : Ke, K = C(e, "FORBID_TAGS") ? l({}, e.FORBID_TAGS, E) : k({}), ye = C(e, "FORBID_ATTR") ? l({}, e.FORBID_ATTR, E) : k({}), W = C(e, "USE_PROFILES") ? e.USE_PROFILES : !1, je = e.ALLOW_ARIA_ATTR !== !1, Re = e.ALLOW_DATA_ATTR !== !1, Xe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Ve = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, z = e.SAFE_FOR_TEMPLATES || !1, le = e.SAFE_FOR_XML !== !1, F = e.WHOLE_DOCUMENT || !1, G = e.RETURN_DOM || !1, ce = e.RETURN_DOM_FRAGMENT || !1, fe = e.RETURN_TRUSTED_TYPE || !1, be = e.FORCE_BODY || !1, $e = e.SANITIZE_DOM !== !1, qe = e.SANITIZE_NAMED_PROPS || !1, Le = e.KEEP_CONTENT !== !1, Z = e.IN_PLACE || !1, We = e.ALLOWED_URI_REGEXP || Ot, Y = e.NAMESPACE || x, pe = e.MATHML_TEXT_INTEGRATION_POINTS || pe, de = e.HTML_INTEGRATION_POINTS || de, m = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && et(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (m.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && et(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (m.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (m.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), z && (Re = !1), ce && (G = !0), W && (T = l({}, Et), _ = [], W.html === !0 && (l(T, Tt), l(_, _t)), W.svg === !0 && (l(T, Pe), l(_, Ue), l(_, Te)), W.svgFilters === !0 && (l(T, ve), l(_, Ue), l(_, Te)), W.mathMl === !0 && (l(T, ke), l(_, gt), l(_, Te))), e.ADD_TAGS && (T === Be && (T = k(T)), l(T, e.ADD_TAGS, E)), e.ADD_ATTR && (_ === Ye && (_ = k(_)), l(_, e.ADD_ATTR, E)), e.ADD_URI_SAFE_ATTR && l(we, e.ADD_URI_SAFE_ATTR, E), e.FORBID_CONTENTS && (B === Ke && (B = k(B)), l(B, e.FORBID_CONTENTS, E)), Le && (T["#text"] = !0), F && l(T, ["html", "head", "body"]), T.table && (l(T, ["tbody"]), delete K.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ne('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ne('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = e.TRUSTED_TYPES_POLICY, q = S.createHTML("");
      } else
        S === void 0 && (S = En(ae, p)), S !== null && typeof q == "string" && (q = S.createHTML(""));
      O && O(e), j = e;
    }
  }, tt = l({}, [...Pe, ...ve, ...an]), nt = l({}, [...ke, ...sn]), Xt = function(e) {
    let t = se(e);
    (!t || !t.tagName) && (t = {
      namespaceURI: Y,
      tagName: "template"
    });
    const i = Ee(e.tagName), u = Ee(t.tagName);
    return Ne[e.namespaceURI] ? e.namespaceURI === me ? t.namespaceURI === x ? i === "svg" : t.namespaceURI === ue ? i === "svg" && (u === "annotation-xml" || pe[u]) : !!tt[i] : e.namespaceURI === ue ? t.namespaceURI === x ? i === "math" : t.namespaceURI === me ? i === "math" && de[u] : !!nt[i] : e.namespaceURI === x ? t.namespaceURI === me && !de[u] || t.namespaceURI === ue && !pe[u] ? !1 : !nt[i] && (Wt[i] || !tt[i]) : !!(J === "application/xhtml+xml" && Ne[e.namespaceURI]) : !1;
  }, I = function(e) {
    ee(n.removed, {
      element: e
    });
    try {
      se(e).removeChild(e);
    } catch {
      Nt(e);
    }
  }, X = function(e, t) {
    try {
      ee(n.removed, {
        attribute: t.getAttributeNode(e),
        from: t
      });
    } catch {
      ee(n.removed, {
        attribute: null,
        from: t
      });
    }
    if (t.removeAttribute(e), e === "is")
      if (G || ce)
        try {
          I(t);
        } catch {
        }
      else
        try {
          t.setAttribute(e, "");
        } catch {
        }
  }, ot = function(e) {
    let t = null, i = null;
    if (be)
      e = "<remove></remove>" + e;
    else {
      const d = ht(e, /^[\r\n\t ]+/);
      i = d && d[0];
    }
    J === "application/xhtml+xml" && Y === x && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const u = S ? S.createHTML(e) : e;
    if (Y === x)
      try {
        t = new re().parseFromString(u, J);
      } catch {
      }
    if (!t || !t.documentElement) {
      t = _e.createDocument(Y, "template", null);
      try {
        t.documentElement.innerHTML = De ? q : u;
      } catch {
      }
    }
    const g = t.body || t.documentElement;
    return e && i && g.insertBefore(a.createTextNode(i), g.childNodes[0] || null), Y === x ? Pt.call(t, F ? "html" : "body")[0] : F ? t.documentElement : g;
  }, it = function(e) {
    return Mt.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, Ie = function(e) {
    return e instanceof D && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof h) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, rt = function(e) {
    return typeof U == "function" && e instanceof U;
  };
  function P(r, e, t) {
    he(r, (i) => {
      i.call(n, e, t, j);
    });
  }
  const at = function(e) {
    let t = null;
    if (P(y.beforeSanitizeElements, e, null), Ie(e))
      return I(e), !0;
    const i = E(e.nodeName);
    if (P(y.uponSanitizeElement, e, {
      tagName: i,
      allowedTags: T
    }), le && e.hasChildNodes() && !rt(e.firstElementChild) && R(/<[/\w!]/g, e.innerHTML) && R(/<[/\w!]/g, e.textContent) || e.nodeType === ie.progressingInstruction || le && e.nodeType === ie.comment && R(/<[/\w]/g, e.data))
      return I(e), !0;
    if (!T[i] || K[i]) {
      if (!K[i] && lt(i) && (m.tagNameCheck instanceof RegExp && R(m.tagNameCheck, i) || m.tagNameCheck instanceof Function && m.tagNameCheck(i)))
        return !1;
      if (Le && !B[i]) {
        const u = se(e) || e.parentNode, g = It(e) || e.childNodes;
        if (g && u) {
          const d = g.length;
          for (let w = d - 1; w >= 0; --w) {
            const v = Dt(g[w], !0);
            v.__removalCount = (e.__removalCount || 0) + 1, u.insertBefore(v, Ct(e));
          }
        }
      }
      return I(e), !0;
    }
    return e instanceof c && !Xt(e) || (i === "noscript" || i === "noembed" || i === "noframes") && R(/<\/no(script|embed|frames)/i, e.innerHTML) ? (I(e), !0) : (z && e.nodeType === ie.text && (t = e.textContent, he([ge, Ae, Se], (u) => {
      t = te(t, u, " ");
    }), e.textContent !== t && (ee(n.removed, {
      element: e.cloneNode()
    }), e.textContent = t)), P(y.afterSanitizeElements, e, null), !1);
  }, st = function(e, t, i) {
    if ($e && (t === "id" || t === "name") && (i in a || i in jt))
      return !1;
    if (!(Re && !ye[t] && R(kt, t))) {
      if (!(je && R(Ut, t))) {
        if (!_[t] || ye[t]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(lt(e) && (m.tagNameCheck instanceof RegExp && R(m.tagNameCheck, e) || m.tagNameCheck instanceof Function && m.tagNameCheck(e)) && (m.attributeNameCheck instanceof RegExp && R(m.attributeNameCheck, t) || m.attributeNameCheck instanceof Function && m.attributeNameCheck(t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            t === "is" && m.allowCustomizedBuiltInElements && (m.tagNameCheck instanceof RegExp && R(m.tagNameCheck, i) || m.tagNameCheck instanceof Function && m.tagNameCheck(i)))
          ) return !1;
        } else if (!we[t]) {
          if (!R(We, te(i, Ge, ""))) {
            if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && tn(i, "data:") === 0 && Ze[e])) {
              if (!(Xe && !R(Ft, te(i, Ge, "")))) {
                if (i)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, lt = function(e) {
    return e !== "annotation-xml" && ht(e, Ht);
  }, ct = function(e) {
    P(y.beforeSanitizeAttributes, e, null);
    const {
      attributes: t
    } = e;
    if (!t || Ie(e))
      return;
    const i = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: _,
      forceKeepAttr: void 0
    };
    let u = t.length;
    for (; u--; ) {
      const g = t[u], {
        name: d,
        namespaceURI: w,
        value: v
      } = g, Q = E(d), Me = v;
      let A = d === "value" ? Me : nn(Me);
      if (i.attrName = Q, i.attrValue = A, i.keepAttr = !0, i.forceKeepAttr = void 0, P(y.uponSanitizeAttribute, e, i), A = i.attrValue, qe && (Q === "id" || Q === "name") && (X(d, e), A = zt + A), le && R(/((--!?|])>)|<\/(style|title)/i, A)) {
        X(d, e);
        continue;
      }
      if (i.forceKeepAttr)
        continue;
      if (!i.keepAttr) {
        X(d, e);
        continue;
      }
      if (!Ve && R(/\/>/i, A)) {
        X(d, e);
        continue;
      }
      z && he([ge, Ae, Se], (ut) => {
        A = te(A, ut, " ");
      });
      const ft = E(e.nodeName);
      if (!st(ft, Q, A)) {
        X(d, e);
        continue;
      }
      if (S && typeof ae == "object" && typeof ae.getAttributeType == "function" && !w)
        switch (ae.getAttributeType(ft, Q)) {
          case "TrustedHTML": {
            A = S.createHTML(A);
            break;
          }
          case "TrustedScriptURL": {
            A = S.createScriptURL(A);
            break;
          }
        }
      if (A !== Me)
        try {
          w ? e.setAttributeNS(w, d, A) : e.setAttribute(d, A), Ie(e) ? I(e) : dt(n.removed);
        } catch {
          X(d, e);
        }
    }
    P(y.afterSanitizeAttributes, e, null);
  }, Vt = function r(e) {
    let t = null;
    const i = it(e);
    for (P(y.beforeSanitizeShadowDOM, e, null); t = i.nextNode(); )
      P(y.uponSanitizeShadowNode, t, null), at(t), ct(t), t.content instanceof L && r(t.content);
    P(y.afterSanitizeShadowDOM, e, null);
  };
  return n.sanitize = function(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = null, i = null, u = null, g = null;
    if (De = !r, De && (r = "<!-->"), typeof r != "string" && !rt(r))
      if (typeof r.toString == "function") {
        if (r = r.toString(), typeof r != "string")
          throw ne("dirty is not a string, aborting");
      } else
        throw ne("toString is not a function");
    if (!n.isSupported)
      return r;
    if (Oe || Ce(e), n.removed = [], typeof r == "string" && (Z = !1), Z) {
      if (r.nodeName) {
        const v = E(r.nodeName);
        if (!T[v] || K[v])
          throw ne("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (r instanceof U)
      t = ot("<!---->"), i = t.ownerDocument.importNode(r, !0), i.nodeType === ie.element && i.nodeName === "BODY" || i.nodeName === "HTML" ? t = i : t.appendChild(i);
    else {
      if (!G && !z && !F && // eslint-disable-next-line unicorn/prefer-includes
      r.indexOf("<") === -1)
        return S && fe ? S.createHTML(r) : r;
      if (t = ot(r), !t)
        return G ? null : fe ? q : "";
    }
    t && be && I(t.firstChild);
    const d = it(Z ? r : t);
    for (; u = d.nextNode(); )
      at(u), ct(u), u.content instanceof L && Vt(u.content);
    if (Z)
      return r;
    if (G) {
      if (ce)
        for (g = xt.call(t.ownerDocument); t.firstChild; )
          g.appendChild(t.firstChild);
      else
        g = t;
      return (_.shadowroot || _.shadowrootmode) && (g = vt.call(s, g, !0)), g;
    }
    let w = F ? t.outerHTML : t.innerHTML;
    return F && T["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && R(bt, t.ownerDocument.doctype.name) && (w = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + w), z && he([ge, Ae, Se], (v) => {
      w = te(w, v, " ");
    }), S && fe ? S.createHTML(w) : w;
  }, n.setConfig = function() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ce(r), Oe = !0;
  }, n.clearConfig = function() {
    j = null, Oe = !1;
  }, n.isValidAttribute = function(r, e, t) {
    j || Ce({});
    const i = E(r), u = E(e);
    return st(i, u, t);
  }, n.addHook = function(r, e) {
    typeof e == "function" && ee(y[r], e);
  }, n.removeHook = function(r, e) {
    if (e !== void 0) {
      const t = Qt(y[r], e);
      return t === -1 ? void 0 : en(y[r], t, 1)[0];
    }
    return dt(y[r]);
  }, n.removeHooks = function(r) {
    y[r] = [];
  }, n.removeAllHooks = function() {
    y = St();
  }, n;
}
var wt = Lt();
const _n = ({ connected: o }, { allowShadowDom: n = !1, stylecontent: a, whenVisible: s = !1, adaptater: p }) => {
  class L extends HTMLElement {
    constructor() {
      super();
      H(this, "stylecontent", a);
      H(this, "allowShadowDom", n);
      H(this, "disconnected", () => {
      });
      H(this, "whenVisibleAllowed", s);
      H(this, "adaptater", p);
    }
    async connectedCallback() {
      this.whenVisibleAllowed || await this.hydrateIfNeeded() || this.render();
    }
    disconnectedCallback() {
      this.whenVisibleAllowed && typeof window < "u" && V && V.unobserve(this), this.disconnected();
    }
    attributeChangedCallback(c, f, h) {
      c === "data-render" && h === "true" && this.render();
    }
    /**
     * Hydrate SSR content if present.
     * Returns true if hydration was performed (so render should be skipped).
     */
    async hydrateIfNeeded() {
      if (this.allowShadowDom && this.shadowRoot && this.shadowRoot.hasChildNodes()) {
        const c = Fe(this), f = this.getSlotContainer(), h = this.getSlots(f), D = o({ element: this.shadowRoot, props: c, slots: h });
        return this.disconnected = typeof D == "function" ? D : () => {
        }, !0;
      }
      if (!this.allowShadowDom && this.hasChildNodes()) {
        const c = Fe(this), f = this.getSlotContainer(), h = this.getSlots(f), D = o({ element: this, props: c, slots: h });
        return this.disconnected = typeof D == "function" ? D : () => {
        }, !0;
      }
      return !1;
    }
    async render() {
      const c = Fe(this), f = this.getSlotContainer(), h = this.getSlots(f);
      if (this.allowShadowDom) {
        if (!this.shadowRoot) {
          const D = this.attachShadow({ mode: "open" });
          this.addSlotInShadowDom(f);
          const re = o({ element: D, props: c, slots: h });
          this.disconnected = typeof re == "function" ? re : () => {
          }, this.addStyle(D);
        }
      } else {
        const D = o({ element: this, props: c, slots: h });
        this.disconnected = typeof D == "function" ? D : () => {
        };
      }
    }
    addSlotInShadowDom(c) {
      if (c) {
        const f = c instanceof HTMLTemplateElement ? c.content : c, h = wt.sanitize(f, { RETURN_DOM_FRAGMENT: !0, FORBID_TAGS: ["style", "script", "iframe", "object", "embed", "link", "meta"] });
        this.appendChild(h);
      }
    }
    // Remplace le type SlotsType par any pour la compatibilité dynamique
    getSlots(c) {
      if (this.adaptater === "react")
        try {
          if (typeof mt == "function")
            return mt(c);
          console.error("'getSlotsForReact' is not available. Make sure '@mindemangou/magiccomponents-react' is installed ");
        } catch (f) {
          console.error("Error while importing getSlotsForReact:", f);
        }
      return {};
    }
    getSlotContainer() {
      const c = this.tagName.toLowerCase();
      return this.querySelector(`[data-for='${c}']`);
    }
    addStyle(c) {
      if (this.stylecontent) {
        const f = document.createElement("style");
        f.textContent = this.stylecontent, c.appendChild(f);
      }
    }
  }
  return H(L, "observedAttributes", ["data-render"]), L;
}, gn = (o, n) => {
  customElements.get(o) || customElements.define(o, n);
};
let V;
function An(o) {
  const n = wt.sanitize(o, { FORBID_TAGS: ["style", "script", "iframe", "object", "embed", "link", "meta"] });
  try {
    return n && JSON.parse(n);
  } catch {
    return n;
  }
}
function Sn(o) {
  return Object.entries({ ...o.dataset }).map(
    ([n, a]) => [n, An(a ?? "")]
  );
}
const On = async ({ tagname: o, allowShadowDom: n = !1, stylecontent: a = "", whenVisible: s = !1, adaptater: p }, L) => {
  if (!o || typeof o != "string" || !/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]+$/.test(o))
    throw new Error(`Invalid or missing tagname: "${o}". A valid custom element name must contain a hyphen.`);
  const M = _n({ connected: L }, { allowShadowDom: n, stylecontent: a, whenVisible: s, adaptater: p });
  if (gn(o, M), s && typeof window < "u" && (!V && typeof window.IntersectionObserver < "u" && (V = new IntersectionObserver((U, c) => {
    var f;
    for (const h of U)
      h.isIntersecting && ((f = h == null ? void 0 : h.target) == null || f.setAttribute("data-render", "true"), c.unobserve(h.target));
  })), V)) {
    const U = document.querySelectorAll(o);
    for (const c of U)
      V.observe(c);
  }
}, Fe = (o) => {
  const n = Sn(o), a = new Map(n);
  return a.set("tagname", o.tagName.toLowerCase()), Object.fromEntries(a);
};
export {
  On as define,
  Fe as getProps,
  V as observer
};
