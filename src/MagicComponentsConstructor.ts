import { getProps, observer } from "./magiccomponents";
import type { Adaptaters, GlobalElementConstructor } from './magictypes'
import Dompurify from 'dompurify'


const getMagicComponentsConstructor: GlobalElementConstructor = ({ connected }, { allowShadowDom = false, stylecontent, whenVisible = false, adaptater }) => {

    class MagicConstructor extends HTMLElement {

        static observedAttributes = ["data-render"];

        private stylecontent: string | undefined | null = stylecontent;

        private allowShadowDom: boolean = allowShadowDom;

        private disconnected = () => { }

        private whenVisibleAllowed: boolean = whenVisible

        private adaptater: Adaptaters | undefined = adaptater

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
                const template = this.getTemplate();
                const slots = await this.getSlots(template);
                const result = connected({ element: this.shadowRoot, props, slots });
                this.disconnected = typeof result === "function" ? result : () => {};
                return true;
            }
            // Si pas de shadow DOM, hydrate si le composant a déjà du contenu
            if (!this.allowShadowDom && this.hasChildNodes()) {
                const props = getProps(this);
                const template = this.getTemplate();
                const slots = await this.getSlots(template);
                const result = connected({ element: this, props, slots });
                this.disconnected = typeof result === "function" ? result : () => {};
                return true;
            }
            return false;
        }

       

        private async render() {

            const props = getProps(this);
            const template = this.getTemplate();
            const slots = await this.getSlots(template);

            if (this.allowShadowDom) {

                if (!this.shadowRoot) {

                    const shadow = this.attachShadow({ mode: "open" });

                    this.addTemplateSlot(template);

                    const result = connected({ element: shadow, props, slots });

                    this.disconnected = typeof result === "function" ? result : () => {};

                    this.addStyle(shadow);
                }

            } else {

                const result = connected({ element: this, props, slots })

                this.disconnected = typeof result === "function" ? result : () => {};

            }

        }

        private  addTemplateSlot(template: HTMLTemplateElement) {


            if (template) {

                const content = Dompurify.sanitize(template.content, { RETURN_DOM_FRAGMENT: true })

                this.appendChild(content)
            }
        }


        // Remplace le type SlotsType par any pour la compatibilité dynamique
        private async getSlots(template: HTMLTemplateElement): Promise<any> {

            if (this.adaptater === "react") {

                try {

                    // Import dynamique de la fonction
                    const mod = await import('@mindemangou/magiccomponents-react');

                    if (typeof mod.getSlotsForReact === "function") {

                        return mod.getSlotsForReact(template);

                    } else {

                        console.error("'getSlotsForReact' is not available. Make sure '@mindemangou/magiccomponents-react' is installed and externalized.");
                    }

                } catch (err) {
                    console.error("Error while importing getSlotsForReact:", err);
                }
            }

            return { allSlots: '' };
        }

        private getTemplate() {
            const tagname = this.tagName.toLowerCase();

            const template = this.querySelector(`[data-for='${tagname}']`) as HTMLTemplateElement

            return template

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
