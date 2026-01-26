
export type PropsType<T={ [k:PropertyKey]:string}> = {
  [Key in keyof T]:T[Key]
} & {  tagname: string}

type ComponentConfigType={allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean,tagname:string}

//type X=ConponentConfigType["allowShadowDom"] extends true ?true:false

export type ElementType=ShadowRoot|HTMLElement


export type ConnectedParams<P = { [k:PropertyKey]:string}>={
  element:ShadowRoot|HTMLElement,
  props:PropsType<P>
}

export type Connected = ({ element, props }: ConnectedParams) =>( (() => void)| Promise<void>|Promise<()=>void> | void );



export type GlobalElementConstructor=(
  {connected}:{connected:Connected},
  {allowShadowDom,stylecontent,whenVisible,tagname}:ComponentConfigType
)=>CustomElementConstructor;

export type Define=({tagname,allowShadowDom,stylecontent,whenVisible}:ComponentConfigType, connected: Connected) => Promise<void>|void;


export type GetProps=(element: HTMLElement) => PropsType


 declare module '@mindemangou/magiccomponents' {

    const define:Define;

}

