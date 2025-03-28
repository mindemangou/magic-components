declare module '@mindemangou/magiccomponents' {

    type PropsType<T={ [k:string]:string}> = {
        tagName: string
        data: Record<string, any>
    }& T
    
     type Connected=({element,props}:{element:HTMLElement,props:PropsType})=>void;


     type Disconnected=( ({element}:{element:HTMLElement})=>void )|null;

    
     declare const define: (name: string, connected: Connected, disconnected?: Disconnected) => Promise<void>;

     declare const getPath: (query: Record<string, string>, fragment: string) => string;

     declare const reload: ({name,key}:{name:string,key:string}, query?: Record<string, string>, fragment?: string) => Promise<void>;

     declare const getProps: (element: HTMLElement) => {
        [k: string]: string;
    };

     declare const redirect: (url: string, headers?: object) => Promise<boolean>;

     declare const config: ({ redirect, loader }: {
        redirect: boolean;
        loader?: {
            enable: boolean;
            color?: string;
        };
    }) => Promise<void>;

}
