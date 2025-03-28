export type Connected = ({ element, props }: {
    element: HTMLElement;
    props: unknown;
}) => void;
export type Disconnected = (({ element }: {
    element: HTMLElement;
}) => void) | null;
export type GlobaleElementConstructor = (connected: Connected, disconnected: Disconnected) => CustomElementConstructor;
declare const getMagicComponentsConstructor: GlobaleElementConstructor;
export default getMagicComponentsConstructor;
