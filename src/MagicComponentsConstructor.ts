import { getProps } from "./magiccomponents";

export type Connected=({element,props}:{element:HTMLElement,props:unknown})=>void;

export type Disconnected=( ({element}:{element:HTMLElement})=>void )|null;

export type GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected)=>CustomElementConstructor;

let keys:any[]=[]
let id=0
 const getMagicComponentsConstructor:GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected)=> {

    class MagicConstructor extends HTMLElement{

        constructor() {
            
            super();
            
          }


        connectedCallback() {

            const parentTagName=this.parentElement?.tagName

            //Evite une duplication lors du refresh
            if(parentTagName==='TEMPLATE') {
                return;
            }

            //unique key verification
            if(this.hasAttribute('data-key')) {
                const key=this.getAttribute('data-key') as string
                
                if(keys.includes(key)) {
                    throw new Error(`The key '${key}' already exists`)
                }else {
                    keys.push(key)
                }
               
            }else {
                this.setAttribute('data-key',`component-${id}`)
                id++
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
