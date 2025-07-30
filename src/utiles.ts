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











 
