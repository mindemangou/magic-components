
export type PropsType<T={ [k:string]:string}> = {
  tagname: string
}& T


export type refreshPropsType=(queryparams?: Record<string, string>, fragment?: string)=> Promise<void | {
    [k: string]: string | undefined;
}>

export type SendDataType=(tagname:string,data:any)=>void


export type ConnectedParams<T>={
  element:ElementType,
  props:{tagname: string}&T,
  refreshProps:refreshPropsType,
  send:SendDataType,
  key?:string
}

export type ElementType=ShadowRoot|HTMLElement


export type Connected=({element,props,refreshProps,send,key}:ConnectedParams)=>void;


export type Disconnected=( ({element}:{element:ElementType})=>void )|null;

type CallbacksType={connected:Connected,disconnected:Disconnected}

type ConponantConfigType={allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean,tagname:string}

export type GlobaleElementConstructor=(
  {connected,disconnected}:CallbacksType,
  {allowShadowDom,stylecontent,whenVisible,tagname}:ConponantConfigType
)=>CustomElementConstructor;

export type Define=({tagname,allowShadowDom,stylecontent,whenVisible}:{tagname:string,allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean}, connected: Connected, disconnected?: Disconnected) => Promise<void>;

export type GetPath=(queryparams: Record<string, string>, fragment?: string) => string;


export type GetProps=(element: HTMLElement) => PropsType

export type Config=({ redirect, loader,allowHeadSwap }: {
  loader?: {
      enable: boolean;
      color?: string;
  };
  allowHeadSwap?: boolean;
}) => Promise<void>;

 declare module '@mindemangou/magiccomponents' {

    const define:Define;

    const getPath: GetPath

    const getProps:GetProps

    const config:Config;

}
