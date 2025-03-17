import {test,expect, vi} from 'vitest'
import {render} from '@testing-library/react'
import {BridgeProvider} from '../src/BridgeProvider'
import {Hello} from './Hello'
import { Browser, BrowserErrorCaptureEnum } from 'happy-dom'

import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  waitFor,
  screen,
  
} from '@testing-library/dom'
import { define } from '../src/bridgejs'
import React from 'react'

function getExampleDOM() {

  const div = document.createElement('main')
  div.innerHTML = `
    <hello-hello userid='10' ></hello-hello>
  `
  return div
}


test('essai',async ()=> {

  const browser = new Browser({ settings: { errorCapture: BrowserErrorCaptureEnum.processLevel } });
const page = browser.newPage();
const body=page.mainFrame.document.body
body.innerHTML= `
<hello-hello userid='10' ></hello-hello>
`


// Aborts all ongoing operations and closes the browser
await browser.close();

  const dom=body
 
  define('hello-hello',({element,props})=> {

    render(<BridgeProvider data={props}><Hello/></BridgeProvider>,{
      container: document?.body?.appendChild(dom)
    })

    
  })

  console.log(body.innerHTML)

  
 /*  const hello=document.body.querySelector('hello-hello')
  console.log(hello)
  expect(hello?.innerHTML).toBe('<h1>Hi! John doe</h1>') */
  
})


/* test('examples of some things', async () => {
  const famousProgrammerInHistory = 'Ada Lovelace'
  const container = getExampleDOM()

  // Get form elements by their label text.
  // An error will be thrown if one cannot be found (accessibility FTW!)
  const input = getByLabelText(container, 'Username')
  input.value = famousProgrammerInHistory

  // Get elements by their text, just like a real user does.
  getByText(container, 'Print Username').click()

  await waitFor(() =>
    expect(queryByTestId(container, 'printed-username')).toBeTruthy(),
  )

  // getByTestId and queryByTestId are an escape hatch to get elements
  // by a test id (could also attempt to get this element by its text)
  expect(getByTestId(container, 'printed-username').innerHTML).toBe(
    famousProgrammerInHistory,
  )
  // jest snapshots work great with regular DOM nodes!
  expect(container).toMatchSnapshot()
}) */