import type {ReactNode} from 'react'

export type PropsType<T={ [k:PropertyKey]:string}> = {
  tagname: string
}& T

type ConponentConfigType={allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean,tagname:string}

//type X=ConponentConfigType["allowShadowDom"] extends true ?true:false

export type ElementType=ShadowRoot|HTMLElement


export type ConnectedParams<P = { [k:PropertyKey]:string}>={
  element:ShadowRoot|HTMLElement,
  props:PropsType<T>
}

export type Connected = ({ element, props }: ConnectedParams) =>( (() => void)| Promise<void>|Promise<()=>void> | void );



export type GlobalElementConstructor=(
  {connected}:{connected:Connected},
  {allowShadowDom,stylecontent,whenVisible,tagname}:ConponentConfigType
)=>CustomElementConstructor;

export type Define=({tagname,allowShadowDom,stylecontent,whenVisible}:ConponentConfigType, connected: Connected) => Promise<void>;


export type GetProps=(element: HTMLElement) => PropsType


 declare module '@mindemangou/magiccomponents' {

    const define:Define;

}

