import { getProps } from "./magiccomponents";
import  type {GlobaleElementConstructor} from './magictypes'


const getMagicComponentsConstructor:GlobaleElementConstructor=({connected,disconnected},{allowShadowDom,stylecontent,whenVisible})=> {

    class MagicConstructor extends HTMLElement{

        static observedAttributes = ["data-render"];
        
        private stylecontent:string|undefined|null=stylecontent;

        private allowShadowDom:boolean|undefined=allowShadowDom;

        // private componentKey:string|null|undefined=null

        public data:{[k: string]: string | undefined}={}

        private whenVisibleAllowed=whenVisible

        constructor() {

            super();

            // this.componentKey=this.getAttribute('data-key')

        }

        connectedCallback() {


            // if(this.componentKey) {
            //     keyList.push(this.componentKey)
            // }

          
            if(this.whenVisibleAllowed) {
                return ;
            }
            
           this.render()

            
        }

        disconnectedCallback() {

            if(disconnected) {
                disconnected({element:this})
            }
            
        }

        attributeChangedCallback(name:string, _:string, newValue:string) {

            if(newValue!=='true') {
                return name;
            }

            this.render()

        }

        private render() {
           
            const props=getProps(this)

            if(this.allowShadowDom) {

                const shadow=this.attachShadow({mode:'open'})

                connected({element:shadow,props})

                this.addSlotsTemplate()
                
                this.addStyle(shadow)
                
            }else {

                connected({element:this,props})

            }
        }

        private addSlotsTemplate(){
            const splitComponentName=this.tagName.toLowerCase().split('-');

                const attributName=`data-${splitComponentName[0]}`

                const template=this.querySelector(`template[${attributName}]`) as HTMLTemplateElement

                if(template){
                    const content=template.content
                    
                    this.appendChild(content.cloneNode(true))
                }
        }

        private addStyle(shadow:ShadowRoot) {

            if(this.stylecontent) {
                const style=document.createElement('style')

                style.innerHTML=this.stylecontent
                
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
