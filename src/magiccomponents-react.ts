import { define as def } from "./magiccomponents";
import { type ReactNode} from "react";
import type {  ComponentConfigType, ConnectedParams } from "./magictypes";
import {

    createRoot

} from "react-dom/client"


export const define =( obj:ComponentConfigType , cb:(params:ConnectedParams)=>ReactNode )=>{

    def(obj,({element,props})=>{

        createRoot(element).render( cb({element,props}) )

    })

}


