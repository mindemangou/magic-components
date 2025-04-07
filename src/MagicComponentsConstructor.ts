import { getProps } from "./magiccomponents";
import  type {GlobaleElementConstructor} from './magictypes'


export const keyMap=new Map()
let i=0

const getMagicComponentsConstructor:GlobaleElementConstructor=(connected,disconnected,stylecontent)=> {

    class MagicConstructor extends HTMLElement{
        
        private shadow:ShadowRoot|null=null
        private stylecontent:string|undefined|null=null;
        constructor() {

            super();


            this.stylecontent=stylecontent
            
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

            const hasShadowAttribut=this.hasAttribute('data-shadow')
            
            if(hasShadowAttribut) {

                this.shadow=this.attachShadow({mode:'open'})

                connected({element:this.shadow,props})

                this.addStyle(this.shadow)
            
            }else {

                connected({element:this,props})

            }

            
        }

        private addStyle(shadow:ShadowRoot) {

            if(this.stylecontent) {
                const style=document.createElement('style')

                style.innerHTML=this.stylecontent
                
               shadow.appendChild(style)
            }
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
