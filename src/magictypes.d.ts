import {SlotsType} from '@mindemangou/magiccomponents-react'

export type PropsType<T={ [k:string]:string}> = {
  tagname: string
}& T

export type ElementType=ShadowRoot|HTMLElement

export type ConnectedParams<T = any,Keys=any>={
  element:ElementType,
  props:{tagname: string}&T,
  slots:SlotsType<Keys>

}

export type Connected = ({ element, props,slots }: ConnectedParams<T,Keys>) =>( (() => void)| Promise<void>|Promise<()=>void> | void );


type CallbacksType={connected:Connected}

export type Adaptaters="react"

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
