import { getProps, observer } from "./magiccomponents";
import type { Adapters, GlobalElementConstructor } from './magictypes'
import Dompurify from 'dompurify'

const getMagicComponentsConstructor: GlobalElementConstructor = ({ connected }, { allowShadowDom = false, stylecontent, whenVisible = false, adapter=()=>({}) }) => {

    class MagicConstructor extends HTMLElement {

        static observedAttributes = ["data-render"];

        private stylecontent: string | undefined | null = stylecontent;

        private allowShadowDom: boolean = allowShadowDom;

        private disconnected = () => { }

        private whenVisibleAllowed: boolean = whenVisible

        private adapter: Adapters  = adapter

        constructor() {

            super();

        }

       async connectedCallback() {
            if (this.whenVisibleAllowed) {
                return;
            }

            const needHydrate=await this.hydrateIfNeeded()
            // SSR hydration support
            if (needHydrate) {
                return;
            }

            this.render();
        }

         disconnectedCallback() {

            //Remove observer
            if (this.whenVisibleAllowed && typeof window !== "undefined" && observer) {
                observer.unobserve(this)
            }

            this.disconnected()

        }

        attributeChangedCallback(name: string, _: string, newValue: string) {

            if (name === "data-render" && newValue === "true") {
                this.render();
            }

        }

        /**
         * Hydrate SSR content if present.
         * Returns true if hydration was performed (so render should be skipped).
         */
        private async hydrateIfNeeded(): Promise<boolean> {
            // Si shadow DOM, hydrate le shadowRoot si déjà présent
            if (this.allowShadowDom && this.shadowRoot && this.shadowRoot.hasChildNodes()) {
                // Optionnel : attacher les comportements JS ici si besoin
                const props = getProps(this);
                const container = this.getSlotContainer();
                const slots =  this.getSlots(container);
                const result = connected({ element: this.shadowRoot, props, slots });
                this.disconnected = typeof result === "function" ? result : () => {};
                return true;
            }
            // Si pas de shadow DOM, hydrate si le composant a déjà du contenu
            if (!this.allowShadowDom && this.hasChildNodes()) {
                const props = getProps(this);
                const container = this.getSlotContainer();
                const slots =  this.getSlots(container);
                const result = connected({ element: this, props, slots });
                this.disconnected = typeof result === "function" ? result : () => {};
                return true;
            }
            return false;
        }

       

        private async render() {

            const props = getProps(this);
            const container = this.getSlotContainer();
            const slots =  this.getSlots(container);

            if (this.allowShadowDom) {

                if (!this.shadowRoot) {

                    const shadow = this.attachShadow({ mode: "open" });

                    this.addSlotInShadowDom(container);

                    const result = connected({ element: shadow, props, slots });

                    this.disconnected = typeof result === "function" ? result : () => {};

                    this.addStyle(shadow);
                }

            } else {

                const result = connected({ element: this, props, slots })

                this.disconnected = typeof result === "function" ? result : () => {};

            }

        }

        private  addSlotInShadowDom(element: HTMLElement|null) {

            if (element) {

                const dirty=element instanceof HTMLTemplateElement ?element.content:element
                
                const content = Dompurify.sanitize(dirty, { RETURN_DOM_FRAGMENT: true ,FORBID_TAGS: ['style', 'script', 'iframe', 'object', 'embed',"link","meta"] })

                this.appendChild(content)
            }

        }


        // Remplace le type SlotsType par any pour la compatibilité dynamique
        private  getSlots(element: HTMLElement|null) {
               
                if(typeof this.adapter === 'function' ){
                    return this.adapter(element)
                }

                return {};
        }

        private getSlotContainer() {

            const tagname = this.tagName.toLowerCase();

            const container = this.querySelector(`[data-for='${tagname}']`) as HTMLElement

            return container

        }


        private addStyle(shadow: ShadowRoot) {

            if (this.stylecontent) {
                const style = document.createElement('style')

                style.textContent = this.stylecontent

                shadow.appendChild(style)
            }
        }

    }

    return MagicConstructor

}


 export default getMagicComponentsConstructor
