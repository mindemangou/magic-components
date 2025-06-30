import { getProps, observer } from "./magiccomponents";
import  type {Adaptaters, GlobalElementConstructor} from './magictypes'
import Dompurify from 'dompurify'
 import {getSlotsForReact, SlotsType} from '@mindemangou/magiccomponents-react'

const getMagicComponentsConstructor:GlobalElementConstructor=({connected},{allowShadowDom=false,stylecontent,whenVisible=false,adaptater})=> {

    class MagicConstructor extends HTMLElement{

        static observedAttributes = ["data-render"];
        
        private stylecontent:string|undefined|null=stylecontent;

        private allowShadowDom:boolean=allowShadowDom;

        private disconnected = ()=>{}

        private whenVisibleAllowed:boolean=whenVisible

        private adaptater:Adaptaters|undefined=adaptater 

        constructor() {

            super();

        }

        connectedCallback() {

            if(this.whenVisibleAllowed) {
                return ;
            }
            
           this.render()

        }

        disconnectedCallback() {

            //Remove observer
            if(this.whenVisibleAllowed && typeof window !== "undefined" && observer){
                observer.unobserve(this)
            }
            
            this.disconnected()

        }

        attributeChangedCallback(name:string, _:string, newValue:string) {

           if (name === "data-render" && newValue === "true") {
                this.render();
            }

        }

        private render() {
           
            const props=getProps(this)
            
            const template =this.getTemplate()
            const slots=this.getSlots(template);

            if(this.allowShadowDom) {

                if (!this.shadowRoot) {
                    
                    const shadow = this.attachShadow({ mode: "open" });

                    this.addTemplateSlot(template);

                    const result = connected({ element: shadow, props,slots });

                    this.disconnected = typeof result === "function" ? result : () => {};
                    
                    this.addStyle(shadow);
                }
                
            }else {

                const result=connected({element:this,props,slots})

                this.disconnected = typeof result === "function" ? result : () => {};

            }

        }

        private async addTemplateSlot(template:HTMLTemplateElement){


                if(template){
                    
                    const content=Dompurify.sanitize(template.content,{RETURN_DOM_FRAGMENT:true})
                    
                    this.appendChild(content)
                }
        }
 

        private getSlots(template:HTMLTemplateElement):SlotsType{


            if(this.adaptater==="react"){


            // Vérifie si getSlotsForReact est bien importé
            if (typeof getSlotsForReact === "function") {
                return getSlotsForReact(template);
            } else {
                console.error("'getSlotsForReact' is not available. Make sure '@mindemangou/magiccomponents-react' is installed and externalized.");
            }

             

            }

            return {allSlots:''}
        }


        private getTemplate(){
            const tagname=this.tagName.toLowerCase();

            const template=this.querySelector(`[data-for='${tagname}']`) as HTMLTemplateElement

            return template

        }

   
        private addStyle(shadow:ShadowRoot) {

            if(this.stylecontent) {
                const style=document.createElement('style')

                style.textContent=this.stylecontent
                
               shadow.appendChild(style)
            }
        }

        //  public getReactSlots(): Record<string, any> {
        //     const slots: Record<string, any> = {};

        //     // Default slot (no name)
        //     const defaultSlotNodes = Array.from(this.childNodes).filter(
        //         node => !(node instanceof HTMLElement && node.hasAttribute('slot'))
        //     );
        //     if (defaultSlotNodes.length > 0) {
        //         const container = document.createElement('div');
        //         defaultSlotNodes.forEach(node => container.appendChild(node.cloneNode(true)));
        //         slots.children = parse(container.innerHTML);
        //     }

        //     // Named slots
        //     const namedSlotNodes = Array.from(this.children).filter(
        //         el => el instanceof HTMLElement && el.hasAttribute('slot')
        //     ) as HTMLElement[];
        //     for (const el of namedSlotNodes) {
        //         const slotName = el.getAttribute('slot');
        //         if (slotName) {
        //             slots[slotName] = parse(el.outerHTML);
        //         }
        //     }

        //     return slots;
        // }
    
    }
    
    return MagicConstructor

 }

 export default getMagicComponentsConstructor
