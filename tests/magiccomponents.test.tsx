import {expect, vi, describe, test} from 'vitest'

import { define } from '../src/magiccomponents';
import {render} from '@testing-library/react'
import { SayHello, UserList } from './SayHello';
import { ConnectedParams } from '../src/magictypes';
import {ReactAdapter} from "@mindemangou/magiccomponents-react"

    
  describe('MagicComponents-react', () => {

    test('React render test',async ()=>{

         const connected = vi.fn(({element,props}:ConnectedParams)=>{
                    render(<SayHello username={props.username} />,{container:element})
         });

        await define({ tagname: 'my-element' }, connected);

        const myElement=document.createElement('my-element');

        myElement.setAttribute('data-username',"John Doe")

        document.body.appendChild(myElement)


         await Promise.resolve()

        expect(connected).toBeCalled()

        const myCustomElement=document.querySelector('my-element')

        expect(myCustomElement?.innerHTML).toBe("<h1>Hello John Doe</h1>")

    })

    test('React slot test',async ()=>{

         const connected = vi.fn(({element}:ConnectedParams)=>{
                    const slots=ReactAdapter(element)
                    render(<UserList lists={slots.lists} />,{container:element})
         });

        await define({ tagname: 'my-users' }, connected);

        const myElement=document.createElement('my-users');

         myElement.innerHTML=`<magic-fragment slot="lists"><li>Gaut</li><li>Aya</li><li>doe</li></magic-fragment>`
        document.body.appendChild(myElement)


         await Promise.resolve()

        expect(connected).toBeCalled()

        const myCustomElement=document.querySelector('my-users')

        expect(myCustomElement?.innerHTML).toBe("<ul><li>Gaut</li><li>Aya</li><li>doe</li></ul>")

    })

  
  });

