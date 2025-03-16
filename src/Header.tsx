import { useBridgeData } from "./BridgeProvider"

export const Header=()=> {
    const {age}=useBridgeData()
    return <>
        <header>
            <span>title is ?? {age}</span>
        </header>
    </>
}