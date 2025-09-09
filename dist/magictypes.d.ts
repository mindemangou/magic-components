import type {ReactNode} from 'react'

export type PropsType<T={ [k:PropertyKey]:string}> = {
  tagname: string
}& T

export type ElementType=ShadowRoot|HTMLElement


export type ConnectedParams<T = { [k:PropertyKey]:string}>={
  element:ElementType,
  props:PropsType<T>
}

export type Connected = ({ element, props }: ConnectedParams<T>) =>( (() => void)| Promise<void>|Promise<()=>void> | void );


type CallbacksType={connected:Connected}


type ConponentConfigType={allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean,tagname:string}

export type GlobalElementConstructor=(
  {connected}:CallbacksType,
  {allowShadowDom,stylecontent,whenVisible,tagname}:ConponentConfigType
)=>CustomElementConstructor;

export type Define=({tagname,allowShadowDom,stylecontent,whenVisible}:ConponentConfigType, connected: Connected) => Promise<void>;


export type GetProps=(element: HTMLElement) => PropsType


 declare module '@mindemangou/magiccomponents' {

    const define:Define;

}

