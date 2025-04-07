import {ajax,process,config as htmxconfig, trigger} from 'htmx.org'
import getCustomElementConstructor,{ keyMap } from './MagicComponentsConstructor.ts';
import { keyVerification, registerCustomElement } from './utiles.ts';
import type { Define } from './magictypes';

export const define:Define=async ({tagname,stylecontent},connected,disconnected=null)=> {

  const customElementConstructor=getCustomElementConstructor(connected,disconnected,stylecontent)

  registerCustomElement(tagname,customElementConstructor)

  
  keyVerification([...keyMap.values()])
}

export const getPath=(query:Record<string,string>,fragment:string):string=> {
  
  const requestOrigin=location.href

  const currentRequestQuery=Object.fromEntries(new URL(location.toString()).searchParams.entries())

  let requestQuery=`?${new URLSearchParams({...currentRequestQuery,...query}).toString()}`

  let requestFragment=location.hash

  if(fragment.length>0) {
    requestFragment=`#${fragment}`
  }

  return `${requestOrigin}${requestQuery}${requestFragment}`

}

export const reload=({tagname,key}:{tagname:string,key?:string},query:Record<string,string>={},fragment:string='')=> {
 const path=getPath(query,fragment)

  const selector=key?`${tagname}[data-key='${key}']`:`${tagname}:nth-child(1 of ${tagname})`
  const target=document.querySelector(selector)

  if(target===null) {
    return  Promise.reject('Target not found ')
  }

  return ajax('GET',path,{target:selector,select:selector,swap:'outerHTML'})

}

export const getProps=(element:HTMLElement)=>{

    const data={...element.dataset}

    const dataToEntries=Object.entries(data)

    //convertir le json en objet si possible
    const dataToEntriesValidation=dataToEntries.map<[string, string | undefined]>((el)=> {
      const [key,value]=el
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

    const props=Object.fromEntries(map)  
    
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


export const config=async (
  { redirect,loader}:{redirect:boolean,loader?:{enable:boolean,color?:string}}
)=> {

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


  