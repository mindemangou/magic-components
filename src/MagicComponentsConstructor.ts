import { getProps } from "./magiccomponents";

export type Connected=({element,props}:{element:HTMLElement,props:unknown})=>void;

export type Disconnected=( ({element}:{element:HTMLElement})=>void )|null;

export type GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected)=>CustomElementConstructor;


export const keyMap=new Map()
let i=0

const getMagicComponentsConstructor:GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected)=> {

    class MagicConstructor extends HTMLElement{
        
        constructor() {
            super();
            
          }


        connectedCallback() {
            
            const componentKey=this.getAttribute('data-key')

            if(componentKey) {
                const key=`key_${i}`
                i++
                keyMap.set(key,componentKey)
            }
           
            const parentTagName=this.parentElement?.tagName

            //Evite une duplication lors du refresh
            if(parentTagName==='TEMPLATE') {
                return;
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
