import type {ReactNode} from 'react'

export type PropsType<T={ [k:PropertyKey]:string}> = {
  tagname: string
}& T

export type ElementType=ShadowRoot|HTMLElement

type ReactAdaptater=(element:HTMLElement|null)=>({[key:PropertyKey]:ReactNode})

export type ConnectedParams<T = { [k:PropertyKey]:string}>={
  element:ElementType,
  props:PropsType<T>,
  slots:ReturnType<ReactAdaptater>
}

export type Connected = ({ element, props,slots }: ConnectedParams<T>) =>( (() => void)| Promise<void>|Promise<()=>void> | void );


type CallbacksType={connected:Connected}


export type Adaptaters=ReactAdaptater

type ConponentConfigType={allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean,tagname:string,adaptater?:Adaptaters}

export type GlobalElementConstructor=(
  {connected}:CallbacksType,
  {allowShadowDom,stylecontent,whenVisible,tagname}:ConponentConfigType
)=>CustomElementConstructor;

export type Define=({tagname,allowShadowDom,stylecontent,whenVisible}:ConponentConfigType, connected: Connected) => Promise<void>;


export type GetProps=(element: HTMLElement) => PropsType


 declare module '@mindemangou/magiccomponents' {

    const define:Define;

}

