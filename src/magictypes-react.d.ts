import type {ReactNode} from 'react'
import { ComponentConfigType, ConnectedParams } from './magictypes';


 type Connected = ({ element, props }: ConnectedParams) =>ReactNode;



 type GlobalElementConstructor=(
  {connected}:{connected:Connected},
  {allowShadowDom,stylecontent,whenVisible,tagname}:ComponentConfigType
)=>CustomElementConstructor;

 export type Define=({tagname,allowShadowDom,stylecontent,whenVisible}:ComponentConfigType & {autoUnmount?:boolean}, connected: Connected) => Promise<void>|void;



 declare module '@mindemangou/magiccomponents/react' {

    const define:Define;

}

