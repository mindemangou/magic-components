import type {ReactNode} from 'react'
import type { ComponentConfigType, ConnectedParams } from './magictypes';


 type Connected = ({ element, props }: ConnectedParams) =>{component:ReactNode,cleanUp?:()=>any}|Promise<{component:ReactNode,cleanUp?:()=>any}>;


 export type Define=({tagname,allowShadowDom,stylecontent,whenVisible}:ComponentConfigType & {autoUnmount?:boolean}, connected: Connected) => Promise<void>|void;



 declare module '@mindemangou/magiccomponents/react' {

    const define:Define;

}

