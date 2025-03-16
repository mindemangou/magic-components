import camelCase from "lodash.camelcase"


export type Connected=({element,props}:{element:HTMLElement,props:unknown})=>void;

export type Disconnected=( ({element}:{element:HTMLElement})=>void )|null;

export type GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected)=>CustomElementConstructor

 const getGlobalElementConstructor:GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected)=> {
    
    class GlobalElement extends HTMLElement{

        constructor() {
            
            super();
          }

        connectedCallback() {
            
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
            
            connected({element:this,props})

        }

        disconnectedCallBack() {

            if(disconnected) {
                disconnected({element:this})
            }
            
        }

    
    }
    
    return GlobalElement

 }


 export default getGlobalElementConstructor
