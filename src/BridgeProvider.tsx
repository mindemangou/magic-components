import { createContext, PropsWithChildren, useContext } from "react"

const BridgeContext=createContext<unknown>({})

type BrigeProviderType=PropsWithChildren<{
    data:unknown
}>
export const BridgeProvider=({children,data}:BrigeProviderType)=> {

    return <BridgeContext value={data}>
                {children}
            </BridgeContext>
}

export const useBridgeData=<T extends {}>()=> {

    const data=useContext(BridgeContext) as unknown as T

    return data
}