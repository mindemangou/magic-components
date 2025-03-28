import type { Connected, Disconnected, GlobaleElementConstructor } from "./magictypes";
import { getProps } from "./magiccomponents";


 const getMagicComponentsConstructor:GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected)=> {

    class MagicConstructor extends HTMLElement{

        constructor() {
            
            super();
          }


        connectedCallback() {
            const props=getProps(this)
            
            connected({element:this,props})
        }

        disconnectedCallBack() {

            if(disconnected) {
                disconnected({element:this})
            }
            
        }

    
    }
    
    return MagicConstructor

 }

 export default getMagicComponentsConstructor
