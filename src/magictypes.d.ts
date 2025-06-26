
export type PropsType<T={ [k:string]:string}> = {
  tagname: string
}& T

export type ElementType=ShadowRoot|HTMLElement

export type ConnectedParams<T>={
  element:ElementType,
  props:{tagname: string}&T
}


export type Connected=({element,props}:ConnectedParams<T>)=>void;



export type Disconnected=( ({element}:{element:ElementType})=>void )|null;

type CallbacksType={connected:Connected,disconnected:Disconnected}

type ConponantConfigType={allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean,tagname:string}

export type GlobaleElementConstructor=(
  {connected,disconnected}:CallbacksType,
  {allowShadowDom,stylecontent,whenVisible,tagname}:ConponantConfigType
)=>CustomElementConstructor;

export type Define=({tagname,allowShadowDom,stylecontent,whenVisible}:{tagname:string,allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean}, connected: Connected, disconnected?: Disconnected) => Promise<void>;


export type GetProps=(element: HTMLElement) => PropsType


 declare module '@mindemangou/magiccomponents' {

    const define:Define;
    const getProps:GetProps

}
