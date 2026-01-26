import { define as def } from "./magiccomponents";
import { type ReactNode} from "react";
import type {  ComponentConfigType, ConnectedParams } from "./magictypes";
import {

    createRoot

} from "react-dom/client"


export const define =( obj: ComponentConfigType & {autoUnmount?:boolean}, cb:(params:ConnectedParams)=>ReactNode )=>{


    const {autoUnmount,...rest}=obj

    def(rest,({element,props})=>{

        const root=createRoot(element)

        root.render( cb({element,props}) )

        //Unmount component
        return ()=>{
            autoUnmount!==false?null:root.unmount()
        }

    })

}


