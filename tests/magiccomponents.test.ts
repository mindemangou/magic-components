import {test,expect, vi, Mock} from 'vitest'

import { define } from '../src/magiccomponents';
import { keyList } from '../src/MagicComponentsConstructor';
import { keyVerification, registerCustomElement } from '../src/utiles';
import getCustomElementConstructor from '../src/MagicComponentsConstructor'
 

  test('define should register a custom element and verify keys', async () => {

    vi.mock('../src/utiles', () => ({
      registerCustomElement: vi.fn(),
      keyVerification:vi.fn()
    }));
  
    vi.mock('../src/MagicComponentsConstructor', () => ({
      default:vi.fn(),
      keyMap: new Map(),
    }));
    
    const mockConnected = vi.fn();
    const mockDisconnected = vi.fn();
    const mockCustomElementConstructor = vi.fn();

    // Mock getCustomElementConstructor to return a fake constructor
    (getCustomElementConstructor as Mock).mockReturnValue(mockCustomElementConstructor);
    
    // Add mock keys to keyMap
    keyMap.set('key1', 'value1');
    keyMap.set('key2', 'value2');

    const tagName = 'custom-tag';

   await define(tagName,mockConnected, mockDisconnected);
    // Ensure getCustomElementConstructor is called with the correct arguments
   expect(getCustomElementConstructor).toHaveBeenCalledWith(mockConnected, mockDisconnected);

    // Ensure registerCustomElement is called with the correct arguments
    expect(registerCustomElement).toHaveBeenCalledWith(tagName, mockCustomElementConstructor);

    // Ensure keyVerification is called with the correct keys
    expect([...keyMap.values()]).toEqual(['value1', 'value2']);

    expect(keyVerification).toBeCalledWith(['value1', 'value2']);
  })

