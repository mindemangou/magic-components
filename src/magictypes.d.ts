declare module '@mindemangou/magiccomponents' {

    type PropsType<T={ [k:string]:string}> = {
        tagName: string
        data: Record<string, any>
    }& T
    
     type Connected=({element,props}:{element:HTMLElement,props:PropsType})=>void;


     type Disconnected=( ({element}:{element:HTMLElement})=>void )|null;

    
      const define: (tagname: string, connected: Connected, disconnected?: Disconnected) => Promise<void>;

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
