import htmx from "htmx.org";
import { getPath, getProps } from "./magiccomponents";
import  type {GlobaleElementConstructor, PropsType, ShadowRootType} from './magictypes'


export const keyList:string[]=[]

const getMagicComponentsConstructor:GlobaleElementConstructor=(connected,disconnected,allowShadowDom,stylecontent,whenVisible)=> {

    class MagicConstructor extends HTMLElement{

        static observedAttributes = ["data-render"];
        
        private shadow:ShadowRootType|null=null

        private stylecontent:string|undefined|null=stylecontent;

        private allowShadowDom:boolean|undefined=allowShadowDom;

        private componentKey:string|null|undefined=null

        public data:{[k: string]: string | undefined;}={}

        public magicData:PropsType|object={data:{},tagName:this.tagName.toLocaleLowerCase()}

        private whenVisibleAllowed=whenVisible

        constructor() {

            super();

            this.componentKey=this.getAttribute('data-key')

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
                return;
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
           
            this.magicData=getProps(this)

            if(this.allowShadowDom) {

                this.shadow=this.attachShadow({mode:'open'})  as ShadowRootType

                connected({element:this.shadow})

                this.addStyle(this.shadow)
                
            }else {

                connected({element:this})

            }
        }

        //Refresh props data
        refreshMagicData(queryparams:Record<string,string>={},fragment:string='') {
        
            const tagName=this.tagName.toLocaleLowerCase()
    
            if(this.componentKey===null) {
                console.warn(`You must add the data-key attribute on each ${tagName}`)
                return ;
            }
    
            const template=document.createElement('template')
    
            template.id=tagName
            
            document.body.appendChild(template)
    
            const path=getPath(queryparams,fragment)
    
            const selector=`${tagName}[data-key='${this.componentKey}']`

            
          return  htmx.ajax('get',path,{target:`#${tagName}`,select:selector,swap:'innerHTML'}).then(()=> {
                
                const element=template.firstElementChild as HTMLElement
                
                if(element) {
                    this.data=getProps(element)
                }

                return this.data
        
            }).then((data)=>{
                template.remove()
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
