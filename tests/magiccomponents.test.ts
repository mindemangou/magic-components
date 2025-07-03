import {expect, vi, describe, afterEach, beforeEach, it} from 'vitest'

import { define, getProps } from '../src/magiccomponents';


  describe('MagicComponents', () => {

    beforeEach(() => {
      vi.mock('../src/utiles',{spy:true});
    
      vi.mock('../src/MagicComponentsConstructor',{spy:true});

      vi.mock('../src/magiccomponents.ts',{spy:true}); 


      //vi.stubGlobal('document', dom.document);
      //vi.stubGlobal('customElements', dom.customElements);


    });

    afterEach(()=> {

      vi.unstubAllGlobals()
      vi.resetAllMocks()
  
    })
  
    it('should define and register a custom element', async () => {

      const connected = vi.fn();

      await define({ tagname: 'test-element' }, connected);

      const el = document.createElement('test-element');

      document.body.appendChild(el);

      expect(customElements.get('test-element')).toBeDefined();

      // Wait for the custom element to be upgraded and connected
      await customElements.whenDefined('test-element');
      await Promise.resolve(); 

      // connected doit être appelé lors de l'attachement
      expect(connected).toHaveBeenCalled();

    });
  
    it('should extract props from data-* attributes', () => {
      const el = document.createElement('div');
      el.setAttribute('data-foo', 'bar');
      el.setAttribute('data-json', '{"a":1}');
      const props = getProps(el);
      expect(props.foo).toBe('bar');
      expect(props.json).toEqual({ a: 1 });
    });
  
  
    it('should support Shadow DOM', async () => {
      // // Setup JSDOM environment
      // const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
      // (globalThis as any).window = dom.window;
      // (globalThis as any).document = dom.window.document;
      // (globalThis as any).customElements = dom.window.customElements;
      // (globalThis as any).HTMLElement = dom.window.HTMLElement;

      await define({ tagname: 'shadow-el',allowShadowDom:true }, ({ element }) => {
        element.innerHTML = '<span>Shadow!</span>';
      });

      const el = document.createElement('shadow-el');
      document.body.appendChild(el);

      // Wait for the custom element to be upgraded and connected
      await customElements.whenDefined('shadow-el');
      await Promise.resolve();
      
      expect(el.shadowRoot).toBeTruthy()
      expect(el.shadowRoot?.innerHTML).toBe('<span>Shadow!</span>');
    });
  
    it('should hydrate SSR content', async () => {
      await define({ tagname: 'ssr-el' }, () => {
        // Ne rien faire, juste vérifier que le contenu n'est pas écrasé
      });
      const el = document.createElement('ssr-el');
      el.innerHTML = '<span>SSR</span>';
      document.body.appendChild(el);
      expect(el.innerHTML).toBe('<span>SSR</span>');
    });
  
  });

