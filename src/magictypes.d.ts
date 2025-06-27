
export type PropsType<T={ [k:string]:string}> = {
  tagname: string
}& T

export type ElementType=ShadowRoot|HTMLElement

export type ConnectedParams<T>={
  element:ElementType,
  props:{tagname: string}&T
}


export type Connected=({element,props}:ConnectedParams<T>)=>(()=>void);


type CallbacksType={connected:Connected}

type ConponentConfigType={allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean,tagname:string}

export type GlobalElementConstructor=(
  {connected}:CallbacksType,
  {allowShadowDom,stylecontent,whenVisible,tagname}:ConponentConfigType
)=>CustomElementConstructor;

export type Define=({tagname,allowShadowDom,stylecontent,whenVisible}:{tagname:string,allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean}, connected: Connected) => Promise<void>;


export type GetProps=(element: HTMLElement) => PropsType


 declare module '@mindemangou/magiccomponents' {

    const define:Define;
    const getProps:GetProps

}
