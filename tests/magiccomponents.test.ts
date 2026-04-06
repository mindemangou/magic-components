import {expect, vi, describe,it} from 'vitest'

import { define, getProps } from '../src/magiccomponents';


  describe('MagicComponents', () => {


    
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
      //reprendre le test
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

      await define({ tagname: 'shadow-el',allowShadowDom:true }, ({ element }) => {

        if(element.shadowRoot){
          element.shadowRoot.innerHTML = '<span>Shadow!</span>';
        }
        
      });

      const el = document.createElement('shadow-el');
      document.body.appendChild(el);

      // Wait for the custom element to be upgraded and connected
      await customElements.whenDefined('shadow-el');
      await Promise.resolve();
      
      expect(el.shadowRoot).toBeTruthy()
      expect(el.shadowRoot?.innerHTML).toBe('<span>Shadow!</span>');

      document.body.removeChild(el)
    });

    it('should call cleanUp function', async () => {

      const myCleanUp=vi.fn(()=>{
        console.log("unmount")
      })

        await define({ tagname: 'user-img'}, () => {

           return {cleanUp:()=>{
            myCleanUp()
           } }
           
        });

        const el = document.createElement('user-img');
        document.body.appendChild(el);

        // Wait for the custom element to be upgraded and connected
        await customElements.whenDefined('user-img');
        await Promise.resolve();

        document.body.removeChild(el)


        expect(myCleanUp).toBeCalled()


    });
  

  
  });

