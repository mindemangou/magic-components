import type {ReactNode} from 'react'
import { ComponentConfigType, ConnectedParams } from './magictypes';


 type Connected = ({ element, props }: ConnectedParams) =>ReactNode;



 type GlobalElementConstructor=(
  {connected}:{connected:Connected},
  {allowShadowDom,stylecontent,whenVisible,tagname}:ComponentConfigType
)=>CustomElementConstructor;

 type Define=({tagname,allowShadowDom,stylecontent,whenVisible}:ComponentConfigType, connected: Connected) => Promise<void>;



 declare module '@mindemangou/magiccomponents/react' {

    const define:Define;

}

