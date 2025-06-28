var jt = Object.defineProperty;
var Vt = (o, n, a) => n in o ? jt(o, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[n] = a;
var Y = (o, n, a) => Vt(o, typeof n != "symbol" ? n + "" : n, a);
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
  entries: At,
  setPrototypeOf: ft,
  isFrozen: $t,
  getPrototypeOf: qt,
  getOwnPropertyDescriptor: Kt
} = Object;
let {
  freeze: y,
  seal: N,
  create: St
} = Object, {
  apply: Ue,
  construct: Fe
} = typeof Reflect < "u" && Reflect;
y || (y = function(n) {
  return n;
});
N || (N = function(n) {
  return n;
});
Ue || (Ue = function(n, a, s) {
  return n.apply(a, s);
});
Fe || (Fe = function(n, a) {
  return new n(...a);
});
const me = R(Array.prototype.forEach), Zt = R(Array.prototype.lastIndexOf), ut = R(Array.prototype.pop), Z = R(Array.prototype.push), Jt = R(Array.prototype.splice), de = R(String.prototype.toLowerCase), we = R(String.prototype.toString), mt = R(String.prototype.match), J = R(String.prototype.replace), Qt = R(String.prototype.indexOf), en = R(String.prototype.trim), C = R(Object.prototype.hasOwnProperty), S = R(RegExp.prototype.test), Q = tn(TypeError);
function R(o) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), f = 1; f < a; f++)
      s[f - 1] = arguments[f];
    return Ue(o, n, s);
  };
}
function tn(o) {
  return function() {
    for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
      a[s] = arguments[s];
    return Fe(o, a);
  };
}
function l(o, n) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : de;
  ft && ft(o, null);
  let s = n.length;
  for (; s--; ) {
    let f = n[s];
    if (typeof f == "string") {
      const b = a(f);
      b !== f && ($t(n) || (n[s] = b), f = b);
    }
    o[f] = !0;
  }
  return o;
}
function nn(o) {
  for (let n = 0; n < o.length; n++)
    C(o, n) || (o[n] = null);
  return o;
}
function v(o) {
  const n = St(null);
  for (const [a, s] of At(o))
    C(o, a) && (Array.isArray(s) ? n[a] = nn(s) : s && typeof s == "object" && s.constructor === Object ? n[a] = v(s) : n[a] = s);
  return n;
}
function ee(o, n) {
  for (; o !== null; ) {
    const s = Kt(o, n);
    if (s) {
      if (s.get)
        return R(s.get);
      if (typeof s.value == "function")
        return R(s.value);
    }
    o = qt(o);
  }
  function a() {
    return null;
  }
  return a;
}
const pt = y(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xe = y(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pe = y(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), on = y(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ve = y(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), rn = y(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), dt = y(["#text"]), Tt = y(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ke = y(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Et = y(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pe = y(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), an = N(/\{\{[\w\W]*|[\w\W]*\}\}/gm), sn = N(/<%[\w\W]*|[\w\W]*%>/gm), ln = N(/\$\{[\w\W]*/gm), cn = N(/^data-[\-\w.\u00B7-\uFFFF]+$/), fn = N(/^aria-[\-\w]+$/), yt = N(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), un = N(/^(?:\w+script|data):/i), mn = N(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Rt = N(/^html$/i), pn = N(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ht = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: fn,
  ATTR_WHITESPACE: mn,
  CUSTOM_ELEMENT: pn,
  DATA_ATTR: cn,
  DOCTYPE_NAME: Rt,
  ERB_EXPR: sn,
  IS_ALLOWED_URI: yt,
  IS_SCRIPT_OR_DATA: un,
  MUSTACHE_EXPR: an,
  TMPLIT_EXPR: ln
});
const te = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, dn = function() {
  return typeof window > "u" ? null : window;
}, Tn = function(n, a) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let s = null;
  const f = "data-tt-policy-suffix";
  a && a.hasAttribute(f) && (s = a.getAttribute(f));
  const b = "dompurify" + (s ? "#" + s : "");
  try {
    return n.createPolicy(b, {
      createHTML(M) {
        return M;
      },
      createScriptURL(M) {
        return M;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + b + " could not be created."), null;
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
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dn();
  const n = (r) => Ot(r);
  if (n.version = "3.2.6", n.removed = [], !o || !o.document || o.document.nodeType !== te.document || !o.Element)
    return n.isSupported = !1, n;
  let {
    document: a
  } = o;
  const s = a, f = s.currentScript, {
    DocumentFragment: b,
    HTMLTemplateElement: M,
    Node: O,
    Element: _,
    NodeFilter: D,
    NamedNodeMap: ne = o.NamedNodeMap || o.MozNamedAttrMap,
    HTMLFormElement: Te,
    DOMParser: Ee,
    trustedTypes: oe
  } = o, X = _.prototype, bt = ee(X, "cloneNode"), Dt = ee(X, "remove"), Nt = ee(X, "nextSibling"), Ct = ee(X, "childNodes"), ie = ee(X, "parentNode");
  if (typeof M == "function") {
    const r = a.createElement("template");
    r.content && r.content.ownerDocument && (a = r.content.ownerDocument);
  }
  let g, j = "";
  const {
    implementation: he,
    createNodeIterator: It,
    createDocumentFragment: Mt,
    getElementsByTagName: wt
  } = a, {
    importNode: xt
  } = s;
  let A = _t();
  n.isSupported = typeof At == "function" && typeof ie == "function" && he && he.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: _e,
    ERB_EXPR: ge,
    TMPLIT_EXPR: Ae,
    DATA_ATTR: Pt,
    ARIA_ATTR: vt,
    IS_SCRIPT_OR_DATA: kt,
    ATTR_WHITESPACE: He,
    CUSTOM_ELEMENT: Ut
  } = ht;
  let {
    IS_ALLOWED_URI: ze
  } = ht, p = null;
  const Ge = l({}, [...pt, ...xe, ...Pe, ...ve, ...dt]);
  let T = null;
  const We = l({}, [...Tt, ...ke, ...Et, ...pe]);
  let u = Object.seal(St(null, {
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
  })), V = null, Se = null, Be = !0, ye = !0, Ye = !1, Xe = !0, U = !1, re = !0, k = !1, Re = !1, Oe = !1, F = !1, ae = !1, se = !1, je = !0, Ve = !1;
  const Ft = "user-content-";
  let Le = !0, $ = !1, H = {}, z = null;
  const $e = l({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let qe = null;
  const Ke = l({}, ["audio", "video", "img", "source", "image", "track"]);
  let be = null;
  const Ze = l({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), le = "http://www.w3.org/1998/Math/MathML", ce = "http://www.w3.org/2000/svg", w = "http://www.w3.org/1999/xhtml";
  let G = w, De = !1, Ne = null;
  const Ht = l({}, [le, ce, w], we);
  let fe = l({}, ["mi", "mo", "mn", "ms", "mtext"]), ue = l({}, ["annotation-xml"]);
  const zt = l({}, ["title", "style", "font", "a", "script"]);
  let q = null;
  const Gt = ["application/xhtml+xml", "text/html"], Wt = "text/html";
  let d = null, W = null;
  const Bt = a.createElement("form"), Je = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, Ce = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(W && W === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = v(e), q = // eslint-disable-next-line unicorn/prefer-includes
      Gt.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? Wt : e.PARSER_MEDIA_TYPE, d = q === "application/xhtml+xml" ? we : de, p = C(e, "ALLOWED_TAGS") ? l({}, e.ALLOWED_TAGS, d) : Ge, T = C(e, "ALLOWED_ATTR") ? l({}, e.ALLOWED_ATTR, d) : We, Ne = C(e, "ALLOWED_NAMESPACES") ? l({}, e.ALLOWED_NAMESPACES, we) : Ht, be = C(e, "ADD_URI_SAFE_ATTR") ? l(v(Ze), e.ADD_URI_SAFE_ATTR, d) : Ze, qe = C(e, "ADD_DATA_URI_TAGS") ? l(v(Ke), e.ADD_DATA_URI_TAGS, d) : Ke, z = C(e, "FORBID_CONTENTS") ? l({}, e.FORBID_CONTENTS, d) : $e, V = C(e, "FORBID_TAGS") ? l({}, e.FORBID_TAGS, d) : v({}), Se = C(e, "FORBID_ATTR") ? l({}, e.FORBID_ATTR, d) : v({}), H = C(e, "USE_PROFILES") ? e.USE_PROFILES : !1, Be = e.ALLOW_ARIA_ATTR !== !1, ye = e.ALLOW_DATA_ATTR !== !1, Ye = e.ALLOW_UNKNOWN_PROTOCOLS || !1, Xe = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, U = e.SAFE_FOR_TEMPLATES || !1, re = e.SAFE_FOR_XML !== !1, k = e.WHOLE_DOCUMENT || !1, F = e.RETURN_DOM || !1, ae = e.RETURN_DOM_FRAGMENT || !1, se = e.RETURN_TRUSTED_TYPE || !1, Oe = e.FORCE_BODY || !1, je = e.SANITIZE_DOM !== !1, Ve = e.SANITIZE_NAMED_PROPS || !1, Le = e.KEEP_CONTENT !== !1, $ = e.IN_PLACE || !1, ze = e.ALLOWED_URI_REGEXP || yt, G = e.NAMESPACE || w, fe = e.MATHML_TEXT_INTEGRATION_POINTS || fe, ue = e.HTML_INTEGRATION_POINTS || ue, u = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && Je(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (u.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && Je(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (u.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (u.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), U && (ye = !1), ae && (F = !0), H && (p = l({}, dt), T = [], H.html === !0 && (l(p, pt), l(T, Tt)), H.svg === !0 && (l(p, xe), l(T, ke), l(T, pe)), H.svgFilters === !0 && (l(p, Pe), l(T, ke), l(T, pe)), H.mathMl === !0 && (l(p, ve), l(T, Et), l(T, pe))), e.ADD_TAGS && (p === Ge && (p = v(p)), l(p, e.ADD_TAGS, d)), e.ADD_ATTR && (T === We && (T = v(T)), l(T, e.ADD_ATTR, d)), e.ADD_URI_SAFE_ATTR && l(be, e.ADD_URI_SAFE_ATTR, d), e.FORBID_CONTENTS && (z === $e && (z = v(z)), l(z, e.FORBID_CONTENTS, d)), Le && (p["#text"] = !0), k && l(p, ["html", "head", "body"]), p.table && (l(p, ["tbody"]), delete V.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Q('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Q('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        g = e.TRUSTED_TYPES_POLICY, j = g.createHTML("");
      } else
        g === void 0 && (g = Tn(oe, f)), g !== null && typeof j == "string" && (j = g.createHTML(""));
      y && y(e), W = e;
    }
  }, Qe = l({}, [...xe, ...Pe, ...on]), et = l({}, [...ve, ...rn]), Yt = function(e) {
    let t = ie(e);
    (!t || !t.tagName) && (t = {
      namespaceURI: G,
      tagName: "template"
    });
    const i = de(e.tagName), c = de(t.tagName);
    return Ne[e.namespaceURI] ? e.namespaceURI === ce ? t.namespaceURI === w ? i === "svg" : t.namespaceURI === le ? i === "svg" && (c === "annotation-xml" || fe[c]) : !!Qe[i] : e.namespaceURI === le ? t.namespaceURI === w ? i === "math" : t.namespaceURI === ce ? i === "math" && ue[c] : !!et[i] : e.namespaceURI === w ? t.namespaceURI === ce && !ue[c] || t.namespaceURI === le && !fe[c] ? !1 : !et[i] && (zt[i] || !Qe[i]) : !!(q === "application/xhtml+xml" && Ne[e.namespaceURI]) : !1;
  }, I = function(e) {
    Z(n.removed, {
      element: e
    });
    try {
      ie(e).removeChild(e);
    } catch {
      Dt(e);
    }
  }, B = function(e, t) {
    try {
      Z(n.removed, {
        attribute: t.getAttributeNode(e),
        from: t
      });
    } catch {
      Z(n.removed, {
        attribute: null,
        from: t
      });
    }
    if (t.removeAttribute(e), e === "is")
      if (F || ae)
        try {
          I(t);
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
    q === "application/xhtml+xml" && G === w && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const c = g ? g.createHTML(e) : e;
    if (G === w)
      try {
        t = new Ee().parseFromString(c, q);
      } catch {
      }
    if (!t || !t.documentElement) {
      t = he.createDocument(G, "template", null);
      try {
        t.documentElement.innerHTML = De ? j : c;
      } catch {
      }
    }
    const E = t.body || t.documentElement;
    return e && i && E.insertBefore(a.createTextNode(i), E.childNodes[0] || null), G === w ? wt.call(t, k ? "html" : "body")[0] : k ? t.documentElement : E;
  }, nt = function(e) {
    return It.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      D.SHOW_ELEMENT | D.SHOW_COMMENT | D.SHOW_TEXT | D.SHOW_PROCESSING_INSTRUCTION | D.SHOW_CDATA_SECTION,
      null
    );
  }, Ie = function(e) {
    return e instanceof Te && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof ne) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, ot = function(e) {
    return typeof O == "function" && e instanceof O;
  };
  function x(r, e, t) {
    me(r, (i) => {
      i.call(n, e, t, W);
    });
  }
  const it = function(e) {
    let t = null;
    if (x(A.beforeSanitizeElements, e, null), Ie(e))
      return I(e), !0;
    const i = d(e.nodeName);
    if (x(A.uponSanitizeElement, e, {
      tagName: i,
      allowedTags: p
    }), re && e.hasChildNodes() && !ot(e.firstElementChild) && S(/<[/\w!]/g, e.innerHTML) && S(/<[/\w!]/g, e.textContent) || e.nodeType === te.progressingInstruction || re && e.nodeType === te.comment && S(/<[/\w]/g, e.data))
      return I(e), !0;
    if (!p[i] || V[i]) {
      if (!V[i] && at(i) && (u.tagNameCheck instanceof RegExp && S(u.tagNameCheck, i) || u.tagNameCheck instanceof Function && u.tagNameCheck(i)))
        return !1;
      if (Le && !z[i]) {
        const c = ie(e) || e.parentNode, E = Ct(e) || e.childNodes;
        if (E && c) {
          const m = E.length;
          for (let L = m - 1; L >= 0; --L) {
            const P = bt(E[L], !0);
            P.__removalCount = (e.__removalCount || 0) + 1, c.insertBefore(P, Nt(e));
          }
        }
      }
      return I(e), !0;
    }
    return e instanceof _ && !Yt(e) || (i === "noscript" || i === "noembed" || i === "noframes") && S(/<\/no(script|embed|frames)/i, e.innerHTML) ? (I(e), !0) : (U && e.nodeType === te.text && (t = e.textContent, me([_e, ge, Ae], (c) => {
      t = J(t, c, " ");
    }), e.textContent !== t && (Z(n.removed, {
      element: e.cloneNode()
    }), e.textContent = t)), x(A.afterSanitizeElements, e, null), !1);
  }, rt = function(e, t, i) {
    if (je && (t === "id" || t === "name") && (i in a || i in Bt))
      return !1;
    if (!(ye && !Se[t] && S(Pt, t))) {
      if (!(Be && S(vt, t))) {
        if (!T[t] || Se[t]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(at(e) && (u.tagNameCheck instanceof RegExp && S(u.tagNameCheck, e) || u.tagNameCheck instanceof Function && u.tagNameCheck(e)) && (u.attributeNameCheck instanceof RegExp && S(u.attributeNameCheck, t) || u.attributeNameCheck instanceof Function && u.attributeNameCheck(t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            t === "is" && u.allowCustomizedBuiltInElements && (u.tagNameCheck instanceof RegExp && S(u.tagNameCheck, i) || u.tagNameCheck instanceof Function && u.tagNameCheck(i)))
          ) return !1;
        } else if (!be[t]) {
          if (!S(ze, J(i, He, ""))) {
            if (!((t === "src" || t === "xlink:href" || t === "href") && e !== "script" && Qt(i, "data:") === 0 && qe[e])) {
              if (!(Ye && !S(kt, J(i, He, "")))) {
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
    x(A.beforeSanitizeAttributes, e, null);
    const {
      attributes: t
    } = e;
    if (!t || Ie(e))
      return;
    const i = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let c = t.length;
    for (; c--; ) {
      const E = t[c], {
        name: m,
        namespaceURI: L,
        value: P
      } = E, K = d(m), Me = P;
      let h = m === "value" ? Me : en(Me);
      if (i.attrName = K, i.attrValue = h, i.keepAttr = !0, i.forceKeepAttr = void 0, x(A.uponSanitizeAttribute, e, i), h = i.attrValue, Ve && (K === "id" || K === "name") && (B(m, e), h = Ft + h), re && S(/((--!?|])>)|<\/(style|title)/i, h)) {
        B(m, e);
        continue;
      }
      if (i.forceKeepAttr)
        continue;
      if (!i.keepAttr) {
        B(m, e);
        continue;
      }
      if (!Xe && S(/\/>/i, h)) {
        B(m, e);
        continue;
      }
      U && me([_e, ge, Ae], (ct) => {
        h = J(h, ct, " ");
      });
      const lt = d(e.nodeName);
      if (!rt(lt, K, h)) {
        B(m, e);
        continue;
      }
      if (g && typeof oe == "object" && typeof oe.getAttributeType == "function" && !L)
        switch (oe.getAttributeType(lt, K)) {
          case "TrustedHTML": {
            h = g.createHTML(h);
            break;
          }
          case "TrustedScriptURL": {
            h = g.createScriptURL(h);
            break;
          }
        }
      if (h !== Me)
        try {
          L ? e.setAttributeNS(L, m, h) : e.setAttribute(m, h), Ie(e) ? I(e) : ut(n.removed);
        } catch {
          B(m, e);
        }
    }
    x(A.afterSanitizeAttributes, e, null);
  }, Xt = function r(e) {
    let t = null;
    const i = nt(e);
    for (x(A.beforeSanitizeShadowDOM, e, null); t = i.nextNode(); )
      x(A.uponSanitizeShadowNode, t, null), it(t), st(t), t.content instanceof b && r(t.content);
    x(A.afterSanitizeShadowDOM, e, null);
  };
  return n.sanitize = function(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = null, i = null, c = null, E = null;
    if (De = !r, De && (r = "<!-->"), typeof r != "string" && !ot(r))
      if (typeof r.toString == "function") {
        if (r = r.toString(), typeof r != "string")
          throw Q("dirty is not a string, aborting");
      } else
        throw Q("toString is not a function");
    if (!n.isSupported)
      return r;
    if (Re || Ce(e), n.removed = [], typeof r == "string" && ($ = !1), $) {
      if (r.nodeName) {
        const P = d(r.nodeName);
        if (!p[P] || V[P])
          throw Q("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (r instanceof O)
      t = tt("<!---->"), i = t.ownerDocument.importNode(r, !0), i.nodeType === te.element && i.nodeName === "BODY" || i.nodeName === "HTML" ? t = i : t.appendChild(i);
    else {
      if (!F && !U && !k && // eslint-disable-next-line unicorn/prefer-includes
      r.indexOf("<") === -1)
        return g && se ? g.createHTML(r) : r;
      if (t = tt(r), !t)
        return F ? null : se ? j : "";
    }
    t && Oe && I(t.firstChild);
    const m = nt($ ? r : t);
    for (; c = m.nextNode(); )
      it(c), st(c), c.content instanceof b && Xt(c.content);
    if ($)
      return r;
    if (F) {
      if (ae)
        for (E = Mt.call(t.ownerDocument); t.firstChild; )
          E.appendChild(t.firstChild);
      else
        E = t;
      return (T.shadowroot || T.shadowrootmode) && (E = xt.call(s, E, !0)), E;
    }
    let L = k ? t.outerHTML : t.innerHTML;
    return k && p["!doctype"] && t.ownerDocument && t.ownerDocument.doctype && t.ownerDocument.doctype.name && S(Rt, t.ownerDocument.doctype.name) && (L = "<!DOCTYPE " + t.ownerDocument.doctype.name + `>
` + L), U && me([_e, ge, Ae], (P) => {
      L = J(L, P, " ");
    }), g && se ? g.createHTML(L) : L;
  }, n.setConfig = function() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Ce(r), Re = !0;
  }, n.clearConfig = function() {
    W = null, Re = !1;
  }, n.isValidAttribute = function(r, e, t) {
    W || Ce({});
    const i = d(r), c = d(e);
    return rt(i, c, t);
  }, n.addHook = function(r, e) {
    typeof e == "function" && Z(A[r], e);
  }, n.removeHook = function(r, e) {
    if (e !== void 0) {
      const t = Zt(A[r], e);
      return t === -1 ? void 0 : Jt(A[r], t, 1)[0];
    }
    return ut(A[r]);
  }, n.removeHooks = function(r) {
    A[r] = [];
  }, n.removeAllHooks = function() {
    A = _t();
  }, n;
}
var En = Ot();
const hn = ({ connected: o }, { allowShadowDom: n = !1, stylecontent: a, whenVisible: s = !1 }) => {
  class f extends HTMLElement {
    constructor() {
      super();
      Y(this, "stylecontent", a);
      Y(this, "allowShadowDom", n);
      Y(this, "disconnected", () => {
      });
      Y(this, "whenVisibleAllowed", s);
    }
    connectedCallback() {
      this.whenVisibleAllowed || this.render();
    }
    disconnectedCallback() {
      this.whenVisibleAllowed && Lt.unobserve(this), this.disconnected();
    }
    attributeChangedCallback(O, _, D) {
      O === "data-render" && D === "true" && this.render();
    }
    render() {
      const O = Sn(this);
      if (this.allowShadowDom) {
        if (!this.shadowRoot) {
          const _ = this.attachShadow({ mode: "open" }), D = o({ element: _, props: O });
          this.disconnected = typeof D == "function" ? D : () => {
          }, this.addTemplateSlot(), this.addStyle(_);
        }
      } else {
        const _ = o({ element: this, props: O });
        this.disconnected = typeof _ == "function" ? _ : () => {
        };
      }
    }
    async addTemplateSlot() {
      const O = this.tagName.toLowerCase(), _ = this.querySelector(`[data-for='${O}']`);
      if (_) {
        const D = _.content.querySelectorAll("[slot]"), ne = new DocumentFragment();
        for (const Ee of D)
          ne.append(Ee);
        const Te = En.sanitize(ne, { RETURN_DOM_FRAGMENT: !0 });
        this.appendChild(Te);
      }
    }
    addStyle(O) {
      if (this.stylecontent) {
        const _ = document.createElement("style");
        _.textContent = this.stylecontent, O.appendChild(_);
      }
    }
  }
  return Y(f, "observedAttributes", ["data-render"]), f;
}, _n = (o, n) => {
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
function gn(o) {
  try {
    const n = o && JSON.parse(o);
    return gt(n);
  } catch {
    return gt(o);
  }
}
function An(o) {
  return Object.entries({ ...o.dataset }).map(
    ([n, a]) => [n, gn(a ?? "")]
  );
}
const Rn = async ({ tagname: o, allowShadowDom: n = !1, stylecontent: a = "", whenVisible: s = !1 }, f) => {
  if (!o || typeof o != "string" || !/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]+$/.test(o))
    throw new Error(`Invalid or missing tagname: "${o}". A valid custom element name must contain a hyphen.`);
  const b = hn({ connected: f }, { allowShadowDom: n, stylecontent: a, whenVisible: s });
  if (_n(o, b), s) {
    const M = document.querySelectorAll(o);
    for (const O of M)
      Lt.observe(O);
  }
}, Sn = (o) => {
  const n = An(o), a = new Map(n);
  return a.set("tagname", o.tagName.toLowerCase()), Object.fromEntries(a);
};
export {
  Rn as define,
  Sn as getProps,
  Lt as observer
};
