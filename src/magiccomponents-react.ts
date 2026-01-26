import { define as def } from "./magiccomponents";
import {

    createRoot

} from "react-dom/client"
import { Define } from "./magictypes-react";


export const define:Define =( obj, cb )=>{


    const {autoUnmount,...rest}=obj

    def(rest,({element,props})=>{

        const root=createRoot(element)
        
        //mount component
        root.render( cb({element,props}) )

        //Unmount component
        return ()=>{
            autoUnmount!==false?null:root.unmount()
        }

    })

}


