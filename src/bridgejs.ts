import getCustomElementConstructor, { type Connected, type Disconnected } from "./globaleElement.ts"


const  registerCustomElement=(tagName:string, ClassRef:CustomElementConstructor)=>{
    if (!customElements.get(tagName)) {
      customElements.define(tagName, ClassRef);
    }
  }
 


export const define=(name:string,connected:Connected,disconnected:Disconnected=null)=> {
    
    registerCustomElement(name,getCustomElementConstructor(connected,disconnected,name)) 
}


export const reloadElement=(names:string[])=> {

  for (const name of names) {

    const element=document.querySelector(name)

    if(element) {
        element?.setAttribute('reload',name)
    }

  }
  
}


  