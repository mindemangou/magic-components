import { createRoot } from "react-dom/client"
import { define } from "./bridgejs"
import { Header } from "./Header"
import { PropsWithChildren, useEffect } from "react"
import { BridgeProvider, useBridgeData } from "./BridgeProvider"

/* type PropsType={
    age:string
} */

const App=()=> {

    const {age,data}=useBridgeData<{age:string,data:{version:string}}>()

    useEffect(()=> {
        console.log(data)
    });

    return <>
        <h1>HOME my age is {age??'??'}</h1>
        <Header />
    </>
}

define('app-app',({element,props})=> {

    createRoot(element).render(
        <BridgeProvider data={props}>
            <App/>
        </BridgeProvider>
        )
})
