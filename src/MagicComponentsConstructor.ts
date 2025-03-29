import { getProps } from "./magiccomponents";

export type Connected=({element,props}:{element:HTMLElement,props:unknown})=>void;

export type Disconnected=( ({element}:{element:HTMLElement})=>void )|null;

export type GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected)=>CustomElementConstructor;

let keys:string[]=[]
 const getMagicComponentsConstructor:GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected)=> {

    class MagicConstructor extends HTMLElement{

        constructor() {
            
            super();
          }


        connectedCallback() {
            //add unique key
            if(this.hasAttribute('data-key')) {
                const key=this.getAttribute('data-key') as string

                if(keys.includes(key)) {
                    throw new Error(`Key: ${key} already exists`)
                }else {
                    keys.push(key)
                }
            }
            
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
