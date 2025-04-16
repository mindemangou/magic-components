import {test,expect, vi} from 'vitest'

import { define, getPath } from '../src/magiccomponents';
import { keyList } from '../src/MagicComponentsConstructor';
import { keyVerification, registerCustomElement } from '../src/utiles';
import getCustomElementConstructor from '../src/MagicComponentsConstructor'
 

test('define should register a custom element and verify keys', async () => {

    vi.mock('../src/utiles',{spy:true});
  
    vi.mock('../src/MagicComponentsConstructor',{spy:true});
    
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
   expect(getCustomElementConstructor).toHaveBeenCalledWith(mockConnected, mockDisconnected,false,'');

    // Ensure registerCustomElement is called with the correct arguments
    expect(registerCustomElement).toHaveBeenCalledWith(tagName, mockCustomElementConstructor);

    // Ensure keyVerification is called with the correct keys
    expect(keyList).toEqual(['value1', 'value2']);

    expect(keyVerification).toBeCalledWith(['value1', 'value2']);
})


test.each([
  {urlhref:'https://localhost:8000/home.php',urlhash:'#home',testhash:'',resultat:'https://localhost:8000/home.php?p=3&category=football#home'},
  {urlhref:'https://localhost:8000/about.php',urlhash:'#about',testhash:'aboutme',resultat:'https://localhost:8000/about.php?p=3&category=football#aboutme'}
])('getPath function test', async ({urlhref,urlhash,testhash,resultat}) => {

  vi.mock('../src/magiccomponents.ts',{spy:true});

 
  location.href=urlhref
  location.hash=urlhash
 
  const queryparams={p:'3',category:'football'};

  const path=getPath(queryparams,testhash)

  expect(path).toBe(resultat)
})

