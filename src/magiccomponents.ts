import getCustomElementConstructor from './MagicComponentsConstructor.ts';
import { registerCustomElement, safeStringParse } from './utiles.ts';
import type { Define, GetProps, PropsType } from './magictypes';


export const observer = (typeof window !== "undefined" && typeof window.IntersectionObserver !== "undefined")
  ? new IntersectionObserver((elements, intersectionObserverInit) => {
      for (const element of elements) {
        if(element.isIntersecting) {
          element?.target?.setAttribute('data-render','true')
          intersectionObserverInit.unobserve(element.target)
        }
      }
    })
  : undefined;

// Helper: safely parse JSON, fallback to original value if parsing fails
function safeParse(value: string): unknown {
  
  try {
     const parsed = value ? JSON.parse(value) : value;
     
    // If the parsed value is a string, encode it to prevent XSS when injecting into the DOM
    return safeStringParse(parsed)
    
  } catch {
   
    // If the parsed value is a string, encode it to prevent XSS when injecting into the DOM
    return safeStringParse(value)
  }
}

// Helper: extract dataset as entries with parsed values
function extractDatasetProps(element: HTMLElement): [string, unknown][] {
  return Object.entries({ ...element.dataset }).map(
    ([key, value]: [string, string | undefined]) => [key, safeParse(value ?? "")]
  );
}

//create custom element
export const define:Define=async ({tagname,allowShadowDom=false,stylecontent='',whenVisible=false,adaptater},connected)=> {

  // Error handling for tagname
  if (!tagname || typeof tagname !== 'string' || !/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]+$/.test(tagname)) {
    throw new Error(`Invalid or missing tagname: "${tagname}". A valid custom element name must contain a hyphen.`);
  }

  const customElementConstructor=getCustomElementConstructor({connected},{allowShadowDom,stylecontent,whenVisible,tagname,adaptater})

  registerCustomElement(tagname,customElementConstructor)
 
  //keyVerification(keyList)
 
   if(whenVisible && typeof window !== "undefined" && observer) {
    const elements=document.querySelectorAll(tagname)
    for (const element of elements) {
      observer.observe(element)
    }
  } 

    
  
  
}

//Generate request path
// export const getPath:GetPath=(queryparams,fragment='')=> {
  
//   const requestOrigin=location.origin

//   const requestPath=location.pathname

//   //get query params from current request
//   const currentRequestQuery=Object.fromEntries(new URL(location.toString()).searchParams.entries())

//   //merge query params
//   let requestQuery=`?${new URLSearchParams({...currentRequestQuery,...queryparams}).toString()}`

  
//   let requestFragment=location.hash

//   if(fragment.length>0) {
//     requestFragment=`#${fragment}`
//   }

//   return `${requestOrigin}${requestPath}${requestQuery}${requestFragment}`

// }


//Extract props from tag
export const getProps:GetProps = (element) => {
  const dataEntries = extractDatasetProps(element);

  const map = new Map(dataEntries);
  map.set('tagname', element.tagName.toLowerCase());

  const props = Object.fromEntries(map) as PropsType;
  return props
}



