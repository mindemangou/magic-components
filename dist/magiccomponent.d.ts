export type Connected=({element,props}:{element:HTMLElement,props:unknown})=>void;

export type Disconnected=( ({element}:{element:HTMLElement})=>void )|null;

export type GlobaleElementConstructor=(connected:Connected,disconnected:Disconnected)=>CustomElementConstructor;


declare const registerCustomElement: (tagName: string, ClassRef: CustomElementConstructor) => void;

export declare const define: (
  name: string,
  connected: Connected,
  disconnected?: Disconnected | null
) => Promise<void>;

export declare const getPath: (
  query: Record<string, string>,
  fragment: string
) => string;

export declare const reload: (
  name: string,
  query?: Record<string, string>,
  fragment?: string
) => void;

export declare const getProps: (element: HTMLElement) => Record<string, any>;

export declare const redirect: (
  url: string,
  headers?: object
) => Promise<boolean | void>;

export declare const config: (options: {
  redirect: boolean;
  loader?: { enable: boolean; color?: string };
}) => Promise<void>;