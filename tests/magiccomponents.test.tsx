import {expect, vi, describe, test} from 'vitest'

import { define } from '../src/magiccomponents-react';
import { SayHello } from './SayHello';
import { ConnectedParams } from '../src/magictypes';

    
describe('MagicComponents-react', () => {


    test('React render test',async ()=>{

         const connected = vi.fn(({props}:ConnectedParams)=>{

              return {component:<SayHello username={props.username} />}
         });  

         await define({ tagname: 'my-element' }, connected)

         const myElement=document.createElement('my-element');

         myElement.setAttribute('data-username',"John Doe")

         document.body.appendChild(myElement)

         await customElements.whenDefined('my-element')

         await new Promise(resolve => setTimeout(resolve, 100))


        const myCustomElement=document.querySelector('my-element')

        expect(connected).toBeCalled()

        expect(myCustomElement?.innerHTML).toBe("<h1>Hello John Doe</h1>")
        
        // Nettoyer le DOM
        document.body.removeChild(myElement)

    })

    test(' cleanUp function call', async () => {

      const cleanUp=vi.fn(()=>{
      })

        await define({ tagname: 'user-video'}, () => {

           return {component:<p>Hello</p>,cleanUp}
           
        });

        const el = document.createElement('user-video');
        document.body.appendChild(el);

        // Wait for the custom element to be upgraded and connected
        await customElements.whenDefined("user-video");

        await Promise.resolve(resolve => setTimeout(resolve, 100));

        document.body.removeChild(el) 


        expect(cleanUp).toBeCalled()


    });

  
  });

