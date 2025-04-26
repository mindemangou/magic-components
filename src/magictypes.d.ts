
export type PropsType<T={ [k:string]:string}> = {
  tagName: string
  data: Record<string, any>
}& T

type RefreshType={
  magicData:PropsType|object
  refreshMagicData:(queryparams?: Record<string, string>, fragment?: string)=>Promise<void | {
    [k: string]: string | undefined;
  } | undefined> | undefined
}

export type ShadowRootType=(ShadowRoot&RefreshType)
export type HTMLElementType=(HTMLElement&RefreshType)
export type ElementType=ShadowRootType|HTMLElementType


export type Connected=({element}:{element:ElementType})=>void;

export type Disconnected=( ({element}:{element:ElementType})=>void )|null;

type CallbacksType={connected:Connected,disconnected:Disconnected}
type ComponantConfigType={allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean}

export type GlobaleElementConstructor=(
  {connected,disconnected}:CallbacksType,
  {allowShadowDom,stylecontent,whenVisible}:ComponantConfigType
)=>CustomElementConstructor;

export type Define=({tagname,allowShadowDom,stylecontent,whenVisible}:{tagname:string,allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean}, connected: Connected, disconnected?: Disconnected) => Promise<void>;

export type GetPath=(queryparams: Record<string, string>, fragment?: string) => string;

export type Reload= ({tagname,key}:{tagname:string,key:string}, query?: Record<string, string>, fragment?: string) => Promise<void>;

export type GetProps=(element: HTMLElement) => PropsType

export type Redirect=(url: string, headers?: object) => Promise<boolean>;

export type Config=({ redirect, loader,allowHeadSwap }: {
  redirect: boolean;
  loader?: {
      enable: boolean;
      color?: string;
  };
  allowHeadSwap?: boolean;
}) => Promise<void>;

 declare module '@mindemangou/magiccomponents' {

    const define:Define;

    const getPath: GetPath

    const reload:Reload;

    const getProps:GetProps

    const redirect: Redirect

    const config:Config;

}
