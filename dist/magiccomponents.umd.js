(function(s,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("htmx.org")):typeof define=="function"&&define.amd?define(["exports","htmx.org"],r):(s=typeof globalThis<"u"?globalThis:s||self,r(s.magiccomponents={},s.htmx))})(this,function(s,r){"use strict";var M=Object.defineProperty;var T=(s,r,c)=>r in s?M(s,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[r]=c;var d=(s,r,c)=>T(s,typeof r!="symbol"?r+"":r,c);const c=(t,e)=>{customElements.get(t)||customElements.define(t,e)},p=async(t,e,o=null)=>{const i=(await Promise.resolve().then(()=>O)).default;c(t,i(e,o))},u=(t,e)=>{const o=location.origin,n=Object.fromEntries(new URL(location.toString()).searchParams.entries());let i=`?${new URLSearchParams({...n,...t}).toString()}`,a=location.hash;return e.length>0&&(a=`#${e}`),`${o}${i}${a}`},b=({name:t,key:e},o={},n="")=>{const i=u(o,n),a=e?`${t}[data-key='${e}']`:`${t}:nth-child(1 of ${t})`;return r.ajax("GET",i,{target:a,select:a,swap:"outerHTML"})},h=t=>{var g;const e={...t.dataset},o=Object.entries(e),n=new Map(o),i=t.querySelector("template");if(i){const y=(g=i==null?void 0:i.content.textContent)==null?void 0:g.trim(),E=y?JSON.parse(y):{};n.set("data",E)}return n.set("tagName",t.tagName.toLowerCase()),Object.fromEntries(n)};let l=0;const w=async(t,e)=>{var i;if(r.config.refreshOnHistoryMiss===!1)return console.warn("Redirect is not enabled"),!1;const o=document.body;o.innerHTML+=`<span hx-disinherit="*" class='link-parent' > 
  <a class='bridge-redirect-link' href='${t}' hx-headers='${JSON.stringify(e)}' hx-boost='true' id='bridge-redirect-link-${l}' hx-sync=".bridge-redirect-link:abort" ></a> 
  </span>`,r.process(document.body);const n=o.querySelector(`.link-parent>#bridge-redirect-link-${l}`);n==null||n.click(),l++,(i=n==null?void 0:n.parentElement)==null||i.remove()},C=async({redirect:t,loader:e})=>{if(t&&(r.config.refreshOnHistoryMiss=!0),e!=null&&e.enable){await Promise.resolve().then(()=>k);const o=document.createElement("bridge-loader");o.setAttribute("data-color",e.color??"#639ef4"),document.body.append(o)}};let f=[];const O=Object.freeze(Object.defineProperty({__proto__:null,default:(t,e)=>{class o extends HTMLElement{constructor(){super()}connectedCallback(){if(this.hasAttribute("data-key")){const a=this.getAttribute("data-key");if(f.includes(a))throw new Error(`Key: ${a} already exists`);f.push(a)}const i=h(this);t({element:this,props:i})}disconnectedCallBack(){e&&e({element:this})}}return o}},Symbol.toStringTag,{value:"Module"}));class m extends HTMLElement{constructor(){super();d(this,"animationOne");d(this,"animationTwo")}connectedCallback(){const o=this.getAttribute("data-color")??"#639ef4";this.style.height="0.2rem",this.style.width="0",this.style.position="fixed",this.style.top="0",this.style.left="0",this.style.zIndex="9999",this.style.backgroundColor=o,this.style.display="none",r.on("htmx:beforeRequest",n=>{var a;const i=n;(a=i==null?void 0:i.detail)!=null&&a.boosted&&(this.style.display="block",this.animationOne=this.animate([{width:0},{width:"88%"}],{duration:7e3,fill:"forwards"}),this.animationOne.addEventListener("finish",()=>{this.animationTwo=this.animate([{width:"88%"},{width:"95%"}],{duration:5e3,iterations:1/0})}))})}disconnectedCallback(){var o,n;this.animationOne&&((o=this.animationOne)==null||o.cancel()),this.animationTwo&&((n=this.animationTwo)==null||n.cancel())}}customElements.define("bridge-loader",m);const k=Object.freeze(Object.defineProperty({__proto__:null,MagicLoader:m},Symbol.toStringTag,{value:"Module"}));s.config=C,s.define=p,s.getPath=u,s.getProps=h,s.redirect=w,s.reload=b,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
