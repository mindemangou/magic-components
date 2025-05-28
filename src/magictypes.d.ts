
export type PropsType<T={ [k:string]:string}> = {
  tagName: string
}& T


type refreshPropsType=(queryparams?: Record<string, string>, fragment?: string)=>Promise<void | {
  [k: string]: string | undefined;
} | undefined> | undefined


export type ElementType=ShadowRoot|HTMLElement


export type Connected=({element}:{element:ElementType,props:PropsType,refreshProps:refreshPropsType})=>void;

export type Disconnected=( ({element}:{element:ElementType})=>void )|null;

type CallbacksType={connected:Connected,disconnected:Disconnected}

type ConponantConfigType={allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean}

export type GlobaleElementConstructor=(
  {connected,disconnected}:CallbacksType,
  {allowShadowDom,stylecontent,whenVisible}:ConponantConfigType
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
