import getCustomElementConstructor from './MagicComponentsConstructor.ts';
import { registerCustomElement } from './utiles.ts';
import type { Define, GetProps, PropsType } from './magictypes';
import Dompurify from 'dompurify'

// Lazy observer instance
export let observer: IntersectionObserver | undefined;

// Helper: safely parse JSON, fallback to original value if parsing fails
function safeParse(value: string): unknown {

  const sanitizeValue=Dompurify.sanitize(value,{FORBID_TAGS: ['style', 'script', 'iframe', 'object', 'embed',"link","meta"]})

  try {
    const parsed = sanitizeValue ? JSON.parse(sanitizeValue) : sanitizeValue;
    return parsed
  } catch {
    return sanitizeValue
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

  // Instanciation de l'observer uniquement si nécessaire
  if(whenVisible && typeof window !== "undefined") {

    if (!observer && typeof window.IntersectionObserver !== "undefined") {

      observer = new IntersectionObserver((elements, intersectionObserverInit) => {

        for (const element of elements) {
          if(element.isIntersecting) {
            element?.target?.setAttribute('data-render','true')
            intersectionObserverInit.unobserve(element.target)
          }
        }

      });

    }

    if (observer) {
      const elements=document.querySelectorAll(tagname)
      for (const element of elements) {
        observer.observe(element)
      }
    }

  }

}

//Extract props from tag
export const getProps:GetProps = (element) => {
  const dataEntries = extractDatasetProps(element);

  const map = new Map(dataEntries);
  map.set('tagname', element.tagName.toLowerCase());

  const props = Object.fromEntries(map) as PropsType;
  return props
}



