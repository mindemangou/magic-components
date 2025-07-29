// import Dompurify from 'dompurify'
 
//  export const safeStringParse=<T>(value:T):T|string=>{

//     if (typeof value === 'string') {
//       // const div = document.createElement('div');
//       // div.textContent = value;

//       return Dompurify.sanitize(value);
//     }

//     //console.log(Dompurify.sanitize(`${value}`))
//     return value;
//  }

  
export const registerCustomElement = (tagName: string, ClassRef: CustomElementConstructor) => {
  // In dev, allow redefinition by deleting the old constructor if possible (not standard, but helps with HMR)
  // In production, just skip if already defined
  if (customElements.get(tagName)) {
    // Optionally, you can log or warn here
    // In HMR, you might want to reload the page or replace the element
    return;
  }
  customElements.define(tagName, ClassRef);
};




//  export const  registerCustomElement=(tagName:string, ClassRef:CustomElementConstructor)=>{
//      if (!customElements.get(tagName)) {
    
//        customElements.define(tagName, ClassRef);
//      }
//  }

//  export const safeStringParse=<T>(value:T):T|string=>{

//     if (typeof value === 'string') {
//       const div = document.createElement('div');
//       div.textContent = value;

//       return div.innerHTML;
//     }
//     return value;
//  }










 
