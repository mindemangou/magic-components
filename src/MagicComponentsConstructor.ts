import { getProps } from "./magiccomponents";
import type {  GlobalElementConstructor, PropsType } from './magictypes'
import Dompurify from 'dompurify'


const getMagicComponentsConstructor: GlobalElementConstructor = ({ connected }, { allowShadowDom = false, stylecontent, whenVisible = false }) => {

    class MagicConstructor extends HTMLElement {

        static observedAttributes = ["data-render"];

        private stylecontent: string | undefined | null = stylecontent;

        private allowShadowDom: boolean = allowShadowDom;

        private disconnected = () => { }

        private hidde="data-hidde"

        private whenVisibleAllowed: boolean = whenVisible

        private observer:IntersectionObserver|undefined;

        constructor() {

            super();

        }

       async connectedCallback() {

            if (this.whenVisibleAllowed) {
                this.renderWhenVisible()
                return;
            }


            this.render();
        }



         disconnectedCallback() {


             this.disconnected()

        }

        attributeChangedCallback(name: string, _: string, newValue: string) {


            if(!this.whenVisibleAllowed) {
                return false
            }

            if (name === "data-render" && newValue === "true") {

                this.render();
            }

        }

        private renderWhenVisible(){

            if(this.whenVisibleAllowed !== true){
                return;
            }

            if(this.observer===undefined){

                this.observer=new IntersectionObserver((elements, intersectionObserverInit) => {

                        for (const element of elements) {

                              if(element.isIntersecting) {

                                element?.target?.setAttribute('data-render','true')

                                intersectionObserverInit.unobserve(element.target)

                              }


                        }

                });

            }


            this.observer.observe(this)
            

        }

        
        private async render() {

            const props = getProps(this);


            if (this.allowShadowDom) {

                if (!this.shadowRoot) {

                    const shadow = this.attachShadow({ mode: "open" });

                    
                    // const result = await connected({ element: this, props });

                    // //Add view in custom element
                    // const view=result.view

                    // //Add view in custom element

                    // if(view!==undefined && typeof view==="string"){


                    //     const safeView=Dompurify.sanitize(view,{FORBID_TAGS: ['script', 'iframe', 'object', 'embed',"link","meta"]})

                    //     //Important Purify le texte provenent de l'utilisateur
                    //      shadow.innerHTML=String(safeView)

                    // }


                    // //Remove attribute data-hidde
                    // this.removeAttribute(this.hidde)

                    // this.disconnected = typeof result.cleanUp === "function" ? result.cleanUp : () => {};

                    this.mount({props,shadow})
                    
                     this.addStyle(shadow);
                }


            } else {

                
                this.mount({props})

            }

        }

        private async mount({props,shadow}:{props:PropsType,shadow?:ShadowRoot}){

                const result= await connected( { element: this, props } )

                const view=result?.view

                //Add view in custom element

                if(view!==undefined && typeof view==="string"){

                    //Purify le texte provenent de l'utilisateur

                    const safeView=Dompurify.sanitize(view,{FORBID_TAGS: ['script', 'iframe', 'object', 'embed',"link","meta"]})

                    if(shadow!==undefined) {
                        shadow.innerHTML=String(safeView)

                    }else{

                        this.innerHTML=String(safeView)

                    }
                     


                }

                //Remove attribute data-hidde
                this.removeAttribute(this.hidde)

                this.disconnected = typeof result?.cleanUp === "function" ? result.cleanUp : () => {};
            

        }



        private addStyle(shadow: ShadowRoot) {

            if (this.stylecontent) {

                const style = document.createElement('style')

                style.textContent = String(this.stylecontent)

                shadow.appendChild(style)

            }
        }

    }

    return MagicConstructor

}


 export default getMagicComponentsConstructor
