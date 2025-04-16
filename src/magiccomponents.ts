import {process,config as htmxconfig, trigger} from 'htmx.org'

import getCustomElementConstructor,{ keyList } from './MagicComponentsConstructor.ts';
import { keyVerification, registerCustomElement } from './utiles.ts';
import type { Config, Define, GetPath, GetProps, PropsType } from './magictypes';

import { swapHead } from './allowHeadSwap.ts';

//create custom element
export const define:Define=async ({tagname,allowShadowDom=false,stylecontent},connected,disconnected=null)=> {

  const customElementConstructor=getCustomElementConstructor(connected,disconnected,allowShadowDom,stylecontent)

  registerCustomElement(tagname,customElementConstructor)
 
  keyVerification(keyList)
}

//Generate request path
export const getPath:GetPath=(queryparams:Record<string,string>,fragment:string):string=> {
  
  const requestOrigin=location.href

  //get query params from current request
  const currentRequestQuery=Object.fromEntries(new URL(location.toString()).searchParams.entries())

  //merge queryp arams
  let requestQuery=`?${new URLSearchParams({...currentRequestQuery,...queryparams}).toString()}`

  let requestFragment=location.hash

  if(fragment.length>0) {
    requestFragment=`#${fragment}`
  }

  return `${requestOrigin}${requestQuery}${requestFragment}`

}

/* export const reload=({tagname,key}:{tagname:string,key?:string},query:Record<string,string>={},fragment:string='')=> {
 const path=getPath(query,fragment)

  const selector=key?`${tagname}[data-key='${key}']`:`${tagname}:nth-child(1 of ${tagname})`
  const target=document.querySelector(selector)

  if(target===null) {
    return  Promise.reject('Target not found ')
  }

  return ajax('GET',path,{target:selector,select:selector,swap:'outerHTML'})

} */

  //Extract props from tag
export const getProps:GetProps=(element)=>{

    const data={...element.dataset}

    const dataToEntries=Object.entries(data)

    //convertir le json en objet si possible
    const dataToEntriesValidation=dataToEntries.map<[string, string]>((el)=> {

      const [key,value]=el as [string,string]
        try {
          if(value) {
            return [key,JSON.parse(value)]
          }
          return [key, value]
        }catch(e){
          return [key, value]
        }
  
    })

    
    const map=new Map(dataToEntriesValidation)

    const template=element.querySelector('template')

    if(template) {
      //Get template content
      const content=template?.content.textContent?.trim()

      //Parse json
      const parseContent=content?JSON.parse(content):{}

      map.set('data',parseContent)
    }
    
    map.set('tagName',element.tagName.toLowerCase())

    const props=Object.fromEntries(map)  as PropsType
    
    return props
}


let linkID = 0;
let currentLink: HTMLLinkElement | null = null;

export const redirect = async (url: string, headers?: object) => {

  if (htmxconfig.refreshOnHistoryMiss === false) {
    console.warn('Redirect is not enabled');
    return false;
  }

  const body = document.body;

  // Abort the previous request if a new redirect is triggered
  if (currentLink) {
    trigger(currentLink, 'htmx:abort', {});
    currentLink.parentElement?.remove();
    currentLink = null;
  }

  body.innerHTML += `<span hx-disinherit="*" class='link-parent'> 
    <a class='bridge-redirect-link' href='${url}' hx-headers='${JSON.stringify(headers)}' hx-boost='true' id='bridge-redirect-link-${linkID}'></a> 
  </span>`;

  process(document.body);

  currentLink = body.querySelector<HTMLLinkElement>(`.link-parent>#bridge-redirect-link-${linkID}`);

  currentLink?.click();

  linkID++;
};


export const config:Config=async (
  { redirect,loader,allowHeadSwap}
)=> {

  if(allowHeadSwap) {
      swapHead()
  }

  if(redirect) {
    htmxconfig.refreshOnHistoryMiss=true
  }

  if(loader?.enable) {
    //import lodader
    await import('./magicloader.ts')
    
    const magicLoader=document.createElement('magic-loader')
    
    magicLoader.setAttribute('data-color',loader.color??'#639ef4')
    
    document.body.append(magicLoader)

  }

}


  