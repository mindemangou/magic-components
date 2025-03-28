import type { Connected, Disconnected } from './magictypes.d.ts';
export declare const define: (name: string, connected: Connected, disconnected?: Disconnected) => Promise<number>;
export declare const getPath: (query: Record<string, string>, fragment: string) => string;
export declare const reload: (name: string, query?: Record<string, string>, fragment?: string) => Promise<void>;
export declare const getProps: (element: HTMLElement) => {
    [k: string]: string;
};
export declare const redirect: (url: string, headers?: object) => Promise<boolean>;
export declare const config: ({ redirect, loader }: {
    redirect: boolean;
    loader?: {
        enable: boolean;
        color?: string;
    };
}) => Promise<void>;
