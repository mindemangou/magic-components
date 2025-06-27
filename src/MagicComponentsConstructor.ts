import { getProps, observer } from "./magiccomponents";
import  type {GlobalElementConstructor} from './magictypes'


const getMagicComponentsConstructor:GlobalElementConstructor=({connected},{allowShadowDom=false,stylecontent,whenVisible=false})=> {

    class MagicConstructor extends HTMLElement{

        static observedAttributes = ["data-render"];
        
        private stylecontent:string|undefined|null=stylecontent;

        private allowShadowDom:boolean=allowShadowDom;

        private disconnected = ()=>{}

        private whenVisibleAllowed:boolean=whenVisible

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
            if(this.whenVisibleAllowed){
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

            if(this.allowShadowDom) {

                if (!this.shadowRoot) {
                    
                    const shadow = this.attachShadow({ mode: "open" });
                    
                    const result = connected({ element: shadow, props });
                    this.disconnected = typeof result === "function" ? result : () => {};
                    
                    this.addTemplateSlot();

                    this.addStyle(shadow);
                }
                
            }else {

                const result=connected({element:this,props})

                this.disconnected = typeof result === "function" ? result : () => {};

            }

        }

        private async addTemplateSlot(){

                const tagname=this.tagName.toLowerCase();


                const template=this.querySelector(`[data-for='${tagname}']`) as HTMLTemplateElement

                if(template){

                    const tagWithSlot=template.content.querySelectorAll('[slot]')

                    const fragment=new DocumentFragment()

                    for (const tag of tagWithSlot) {
                        fragment.append(tag)
                    }

                    const Dompurify=(await import('dompurify')).default
                    
                    const content=Dompurify.sanitize(fragment,{RETURN_DOM_FRAGMENT:true})
                   
                    this.appendChild(content)
                }
        }

        private addStyle(shadow:ShadowRoot) {

            if(this.stylecontent) {
                const style=document.createElement('style')

                style.textContent=this.stylecontent
                
               shadow.appendChild(style)
            }
        }

        // //Refresh props data
        // async refreshProps(queryparams:Record<string,string>={},fragment:string='') {
            
        //     const {ajax}=(await import('htmx.org')).default

    
        //     if(this.componentKey===null) {
        //         console.warn(`You must add the data-key attribute on each element`)
        //         return ;
        //     }
            
        //     //Create template in Dom
        //     const templateCreated=document.createElement('template')
    
        //     templateCreated.id=this.componentKey as string
            
        //     const template=document.body.appendChild(templateCreated)
            
        //     //Get request Path
        //     const path=getPath(queryparams,fragment)
            
        //     const selector=`[data-key='${this.componentKey}']`

            
        //   return  ajax('get',path,{target:`#${template.id}`,select:selector,swap:'innerHTML'}).then(()=> {
                
        //         const element=template.firstElementChild as HTMLElement
                
        //         if(element) {
        //             this.data=getProps(element)
        //         }

        //         return this.data
        
        //     }).then((data)=>{

        //         template?.remove()
        //         return data

        //     }).catch((err)=> {
        //         console.error(err)
        //     })  
              
        // }

        // private async sendData(tagname:string,data:any){

        //     if(!customElements.get(tagname)){
               
        //         console.error(`The ${tagname} custom element has not been defined yet`)  

        //         return;
        //     }

        //     const element=document.querySelector(tagname)

        //     const customEvent=new CustomEvent('incoming_data',{
        //     detail:{bag:data},

        //     })

        //     element?.dispatchEvent(customEvent)
            
        // }

        //Add style in shadow dom
        

    
    }
    
    return MagicConstructor

 }

 export default getMagicComponentsConstructor
