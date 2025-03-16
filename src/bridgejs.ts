import getCustomElementConstructor, { Connected, Disconnected } from "./globaleElement.ts"


const  registerCustomElement=(tagName:string, ClassRef:CustomElementConstructor)=>{
    if (!customElements.get(tagName)) {
      customElements.define(tagName, ClassRef);
    }
  }
 


export const define=(name:string,connected:Connected,disconnected:Disconnected=null)=> {
    
    registerCustomElement(name,getCustomElementConstructor(connected,disconnected)) 
}


  