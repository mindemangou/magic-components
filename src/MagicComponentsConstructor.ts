import { getPath, getProps } from "./magiccomponents";
import  type {GlobaleElementConstructor, PropsType} from './magictypes'


export const keyList:string[]=[]

const getMagicComponentsConstructor:GlobaleElementConstructor=({connected,disconnected},{allowShadowDom,stylecontent,whenVisible})=> {

    class MagicConstructor extends HTMLElement{

        static observedAttributes = ["data-render"];
        
        private shadow:ShadowRoot|null=null

        private stylecontent:string|undefined|null=stylecontent;

        private allowShadowDom:boolean|undefined=allowShadowDom;

        private componentKey:string|null|undefined=null

        public data:{[k: string]: string | undefined}={}

        private whenVisibleAllowed=whenVisible

        constructor() {

            super();

            this.componentKey=this.getAttribute('data-key')

            this.refreshProps=this.refreshProps.bind(this)

        }

        connectedCallback() {


            if(this.componentKey) {
                keyList.push(this.componentKey)
            }
           
            const parentTagName=this.parentElement?.tagName

            //Evite une duplication lors du refresh
            if(parentTagName==='TEMPLATE') {
                return;
            }

          
            if(this.whenVisibleAllowed) {
                return ;
            }
            

           this.render()

            
        }

        disconnectedCallBack() {

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

                this.shadow=this.attachShadow({mode:'open'})

                connected({element:this.shadow,props,refreshProps:this.refreshProps})

                this.addStyle(this.shadow)
                
            }else {

                connected({element:this,props,refreshProps:this.refreshProps})

            }
        }

        //Refresh props data
        async refreshProps(queryparams:Record<string,string>={},fragment:string='') {
            
            const {ajax}=(await import('htmx.org')).default

    
            if(this.componentKey===null) {
                console.warn(`You must add the data-key attribute on each element`)
                return ;
            }
            
            //Create template in Dom
            const templateCreated=document.createElement('template')
    
            templateCreated.id=this.componentKey as string
            
            const template=document.body.appendChild(templateCreated)
            
            //Get request Path
            const path=getPath(queryparams,fragment)
            
            const selector=`[data-key='${this.componentKey}']`

            
          return  ajax('get',path,{target:`#${template.id}`,select:selector,swap:'innerHTML'}).then(()=> {
                
                const element=template.firstElementChild as HTMLElement
                
                if(element) {
                    this.data=getProps(element)
                }

                return this.data
        
            }).then((data)=>{

                template?.remove()
                return data

            }).catch((err)=> {
                console.error(err)
            })  
              
        }

        //Add style in shadow dom
        private addStyle(shadow:ShadowRoot) {

            if(this.stylecontent) {
                const style=document.createElement('style')

                style.innerHTML=this.stylecontent
                
               shadow.appendChild(style)
            }
        }

    
    }
    
    return MagicConstructor

 }

 export default getMagicComponentsConstructor
