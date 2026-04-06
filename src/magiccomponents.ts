import getCustomElementConstructor from './MagicComponentsConstructor.ts';
import { registerCustomElement, safeParse } from './utiles.ts';
import type { Define, GetProps, PropsType } from './magictypes';


// Helper: extract dataset as entries with parsed values
function extractDatasetProps(element: HTMLElement): [string, unknown][] {
  
  return Object.entries({ ...element.dataset }).map(
    ([key, value]: [string, string | undefined]) => [key, safeParse(value ?? "")]
  );
  
}

//create custom element
export const define:Define=async ({tagname,allowShadowDom=false,stylecontent='',whenVisible=false},connected)=> {

  // Error handling for tagname
  if (!tagname || typeof tagname !== 'string' || !/^[a-z][.0-9_a-z-]*-[.0-9_a-z-]+$/.test(tagname)) {
    throw new Error(`Invalid or missing tagname: "${tagname}". A valid custom element name must contain a hyphen.`);
  }

  const customElementConstructor=getCustomElementConstructor({connected},{allowShadowDom,stylecontent,whenVisible,tagname})
 
  registerCustomElement(tagname,customElementConstructor)

}




/**
 * Extract props from tag
 */
export const getProps:GetProps = (element) => {
  const dataEntries = extractDatasetProps(element);

  const map = new Map(dataEntries);
  map.set('tagname', element.tagName.toLowerCase());

  const props = Object.fromEntries(map) as PropsType;
  return props
}
