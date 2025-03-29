 export const  registerCustomElement=(tagName:string, ClassRef:CustomElementConstructor)=>{
     if (!customElements.get(tagName)) {
       customElements.define(tagName, ClassRef);
     }
 }
 
 const getDuplicateKey=(keyList:string[])=> {
    const duplicates = keyList.reduce((acc, item) => {
          
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const duplicateEntries = Object.entries(duplicates).filter(([_, count]) => count > 1);

    return duplicateEntries
 }

export const keyVerification=(keyList:string[])=> {
      const duplicateKey=getDuplicateKey(keyList)

      if(duplicateKey.length>0) {

        for (const arr of duplicateKey) {
            const [key]=arr
            throw new Error(`The key '${key}' already exists`)
        }
      }
 }
