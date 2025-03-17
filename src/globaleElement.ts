import camelCase from "lodash.camelcase"


export type Connected=({element,props}:{element:HTMLElement,props:unknown})=>void;

export type Disconnected=( ({element}:{element:HTMLElement})=>void )|null;

export type GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected,name:string)=>CustomElementConstructor


 const getGlobalElementConstructor:GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected,name:string)=> {

        
    class GlobalElement extends HTMLElement{

        static observedAttributes = ["reload"];

        static originalElement:Node|null=null;

        constructor() {
            
            super();
          }

        connectedCallback() {
            const props=this.getProps()

            connected({element:this,props})
        }

        disconnectedCallBack() {

            if(disconnected) {
                disconnected({element:this})
            }
            
        }

       async attributeChangedCallback(_name:string, _oldValue:string, newValue:string) {
            const {ajax}=await import('htmx.org')
            ajax('GET',location.toString(),{target:newValue,select:newValue,swap:'outerHTML'})
        }

        private getProps() {

            const map=new Map()

            for (const element of this.attributes) {
                map.set(camelCase(element.name),element.value)
            }

            const template=this.querySelector('template')

            if(template) {
              //Get template content
              const content=template?.content.textContent?.trim()

              //Parse json
              const parseContent=content?JSON.parse(content):' '

              map.set('data',parseContent)
            }
            
            const props=Object.fromEntries(map)

            return props
        }

    
    }
    
    return GlobalElement

 }


 export default getGlobalElementConstructor
