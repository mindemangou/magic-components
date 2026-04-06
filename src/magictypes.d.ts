
export type PropsType<T={ [k:PropertyKey]:string}> = {
  [Key in keyof T]:T[Key]
} & {  tagname: string}

type ComponentConfigType={allowShadowDom?:boolean,stylecontent?:string,whenVisible?:boolean,tagname:string}


export type ConnectedParams<P = Record<PropertyKey,string>>={
  element:HTMLElement,
  props:PropsType<P>
}

export type Connected= ({ element, props }: ConnectedParams) =>( {view?:string,cleanUp?:()=>void }| Promise<{view?:string,cleanUp?:()=>void }>|void|Promise<void> )  //( (() => void)| Promise<void>|Promise<()=>void> | void );


export type GlobalElementConstructor=(
  connected:{connected:Connected},
  config:ComponentConfigType
)=>CustomElementConstructor;


export type Define=(config:ComponentConfigType, connected: Connected) => Promise<void>|void


export type GetProps=(element: HTMLElement) => PropsType


declare module '@mindemangou/magiccomponents' {

    const define:Define;

}

