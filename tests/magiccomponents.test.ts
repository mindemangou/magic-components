import {test,expect, vi, describe, afterEach, beforeEach} from 'vitest'

import { define, getPath } from '../src/magiccomponents';
import { keyList } from '../src/MagicComponentsConstructor';
import { keyVerification, registerCustomElement } from '../src/utiles';
import getCustomElementConstructor from '../src/MagicComponentsConstructor'
import { Browser } from 'happy-dom';

describe('magiccomponents test suite',async ()=> {
  

  beforeEach(()=> {
 
    vi.mock('../src/utiles',{spy:true});
  
    vi.mock('../src/MagicComponentsConstructor',{spy:true});

    vi.mock('../src/magiccomponents.ts',{spy:true}); 

  })
  
  afterEach(()=> {

    vi.unstubAllGlobals()
    vi.resetAllMocks()
 
  })
 
  test('define should register a custom element and verify keys', async () => {

    const mockConnected = vi.fn();
    const mockDisconnected = vi.fn();
    const mockCustomElementConstructor = vi.fn();

    // Mock getCustomElementConstructor to return a fake constructor
    vi.mocked(getCustomElementConstructor).mockReturnValue(mockCustomElementConstructor);
    
   
    // Add mock keys to keyMap
    keyList.push('value1', 'value2');

    const tagName = 'demo-demo'; 
   await define({tagname:'demo-demo'},mockConnected, mockDisconnected);

    // Ensure getCustomElementConstructor is called with the correct arguments
   expect(getCustomElementConstructor).toHaveBeenCalledWith({connected:mockConnected, disconnected:mockDisconnected},{allowShadowDom:false,stylecontent:'',whenVisible:false});

    // Ensure registerCustomElement is called with the correct arguments
    expect(registerCustomElement).toHaveBeenCalledWith(tagName, mockCustomElementConstructor);

    // Ensure keyVerification is called with the correct keys
    expect(keyList).toEqual(['value1', 'value2']);
   
    expect(keyVerification).toBeCalledWith(['value1', 'value2']);
  })

    test('whenVisible option test',{only:true}, async () => {
      
      const browser=new Browser()

      const page= browser.newPage();
 
      const mywindow = page.mainFrame.window;
      const mydocument = page.mainFrame.window.document;

      vi.stubGlobal('customElements', mywindow.customElements);
      vi.stubGlobal('document', mydocument);
          
       
      page.content = /*html*/`
      <html>
      <body>
        <div></div>
        <test-test ></test-test>
      </body>
      </html> 
    `;

      // Define the custom element
      await define( 
        { tagname: 'test-test', whenVisible: true },
        ({ element }) => {
         
          element.innerHTML = /*html*/`
          <h1>Name: John doe</h1>
          `;
        },
        () => {}
      );


      const myElement = mydocument.querySelector('test-test') as unknown as HTMLElement;

      myElement.setAttribute('data-render','true')

      expect(myElement.textContent?.trim()).toBe('Name: John doe');
      expect(myElement.hasAttribute('data-render')).toBeTruthy();

      await browser.close();
    });



  test.each([
    {urlhref:'https://localhost:8000/home.php',urlhash:'#home',testhash:'',resultat:'https://localhost:8000/home.php?p=3&category=football#home'},
    {urlhref:'https://localhost:8000/about.php',urlhash:'#about',testhash:'aboutme',resultat:'https://localhost:8000/about.php?p=3&category=football#aboutme'}
  ])('getPath function test', async ({urlhref,urlhash,testhash,resultat}) => {

  
    location.href=urlhref
    location.hash=urlhash
  
    const queryparams={p:'3',category:'football'};

    const path=getPath(queryparams,testhash)

    expect(path).toBe(resultat)
  })


  

});

