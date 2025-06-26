import getCustomElementConstructor,{ keyList } from './MagicComponentsConstructor.ts';
import { keyVerification, registerCustomElement } from './utiles.ts';
import type { Config, Define, GetPath, GetProps, PropsType } from './magictypes';


const observer=new IntersectionObserver((elements,intersectionObserverInit)=> {
   for (const element of elements) {
   
    if(element.isIntersecting) {
     
      element?.target?.setAttribute('data-render','true')
      intersectionObserverInit.unobserve(element.target)
  
    }
    
  } 

})


//create custom element
export const define:Define=async ({tagname,allowShadowDom=false,stylecontent='',whenVisible=false},connected,disconnected=null)=> {

  const customElementConstructor=getCustomElementConstructor({connected,disconnected},{allowShadowDom,stylecontent,whenVisible,tagname})

  registerCustomElement(tagname,customElementConstructor)
 
  keyVerification(keyList)
 
  if(whenVisible) {
    
    const elements=document.querySelectorAll(tagname)
    
    for (const element of elements) {

          observer.observe(element)
    }

  } 
  
  
}

//Generate request path
export const getPath:GetPath=(queryparams,fragment='')=> {
  
  const requestOrigin=location.origin

  const requestPath=location.pathname

  //get query params from current request
  const currentRequestQuery=Object.fromEntries(new URL(location.toString()).searchParams.entries())

  //merge query params
  let requestQuery=`?${new URLSearchParams({...currentRequestQuery,...queryparams}).toString()}`

  
  let requestFragment=location.hash

  if(fragment.length>0) {
    requestFragment=`#${fragment}`
  }

  return `${requestOrigin}${requestPath}${requestQuery}${requestFragment}`

}


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

    //const template=element.querySelector('template')

    // if(template) {
    //   //Get template content
    //   const content=template?.content.textContent?.trim()

    //   //Parse json
    //   const parseContent=content?JSON.parse(content):{}

    //   map.set('data',parseContent)
    // }
    
    map.set('tagname',element.tagName.toLowerCase())

    const props=Object.fromEntries(map)  as PropsType
    
    return props
}



export const config:Config=async (
  {loader}
)=> {


}


  