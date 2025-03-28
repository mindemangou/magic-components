import {ajax,process,config as htmxconfig} from 'htmx.org'
import type { Connected, Disconnected } from './MagicComponentsConstructor.ts';

const  registerCustomElement=(tagName:string, ClassRef:CustomElementConstructor)=>{
    if (!customElements.get(tagName)) {
      customElements.define(tagName, ClassRef);
    }
}

export const define=async (name:string,connected:Connected,disconnected:Disconnected=null)=> {
      const module=await import('./MagicComponentsConstructor.ts')

      const getCustomElementConstructor=module.default
    registerCustomElement(name,getCustomElementConstructor(connected,disconnected)) 
}

export const getPath=(query:Record<string,string>,fragment:string):string=> {

  const requestOrigin=location.origin

  const currentRequestQuery=Object.fromEntries(new URL(location.toString()).searchParams.entries())

  let requestQuery=`?${new URLSearchParams({...currentRequestQuery,...query}).toString()}`

  let requestFragment=location.hash

  if(fragment.length>0) {
    requestFragment=`#${fragment}`
  }

  return `${requestOrigin}${requestQuery}${requestFragment}`

}

export const reload=({name,key}:{name:string,key?:string},query:Record<string,string>={},fragment:string='')=> {
 const path=getPath(query,fragment)

 const selector=key?`${name}[data-key='${key}']`:`${name}:nth-child(1 of ${name})`

 return ajax('GET',path,{target:selector,select:selector,swap:'outerHTML'})

}

export const getProps=(element:HTMLElement)=>{

    const data={...element.dataset}

    const dataToEntries=Object.entries(data)

    const map=new Map(dataToEntries)

    const template=element.querySelector('template')

    if(template) {
      //Get template content
      const content=template?.content.textContent?.trim()

      //Parse json
      const parseContent=content?JSON.parse(content):{}

      map.set('data',parseContent)
    }
    
    map.set('tagName',element.tagName.toLowerCase())

    const props=Object.fromEntries(map)  
    
    return props
}


let linkID=0
export const redirect=async (url:string,headers?:object)=> {

  if(htmxconfig.refreshOnHistoryMiss===false) {
    console.warn('Redirect is not enabled')
    return false
  }

  const body=document.body
  body.innerHTML+=`<span hx-disinherit="*" class='link-parent' > 
  <a class='bridge-redirect-link' href='${url}' hx-headers='${JSON.stringify(headers)}' hx-boost='true' id='bridge-redirect-link-${linkID}' hx-sync=".bridge-redirect-link:abort" ></a> 
  </span>`

  process(document.body)

  const link=body.querySelector<HTMLLinkElement>(`.link-parent>#bridge-redirect-link-${linkID}`) 
  
  link?.click()

  linkID++

  link?.parentElement?.remove()
  

}

export const config=async (
  { redirect,loader}:{redirect:boolean,loader?:{enable:boolean,color?:string}}
)=> {

  if(redirect) {
    htmxconfig.refreshOnHistoryMiss=true
  }

  if(loader?.enable) {
    //import lodader
    await import('./magicloader.ts')
    
    const bridgeLoader=document.createElement('bridge-loader')
    
    bridgeLoader.setAttribute('data-color',loader.color??'#639ef4')
    
    document.body.append(bridgeLoader)
  }

}


  