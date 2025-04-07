export type Connected=({element,props}:{element:HTMLElement|ShadowRoot,props:PropsType})=>void;


export type Disconnected=( ({element}:{element:HTMLElement})=>void )|null;

export type GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected,stylecontent?:string)=>CustomElementConstructor;

export type Define=({tagname,stylecontent}:{tagname:string,stylecontent?:string}, connected: Connected, disconnected?: Disconnected) => Promise<void>;

 declare module '@mindemangou/magiccomponents' {

    type PropsType<T={ [k:string]:string}> = {
        tagName: string
        data: Record<string, any>
    }& T
    
    
    const define:Define;

      const getPath: (query: Record<string, string>, fragment: string) => string;

      const reload: ({tagname,key}:{tagname:string,key:string}, query?: Record<string, string>, fragment?: string) => Promise<void>;

      const getProps: (element: HTMLElement) => {
        [k: string]: string;
    };

      const redirect: (url: string, headers?: object) => Promise<boolean>;

      const config: ({ redirect, loader }: {
        redirect: boolean;
        loader?: {
            enable: boolean;
            color?: string;
        };
    }) => Promise<void>;

}
