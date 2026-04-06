import { define as def } from "./magiccomponents";
import {createRoot} from "react-dom/client"
import { Define } from "./magictypes-react";


export const define:Define =( obj, cb )=>{


    const {autoUnmount,...rest}=obj

    def(rest,async ({element,props})=>{


        const root=element.shadowRoot!==null?createRoot(element.shadowRoot):createRoot(element)

        
        const {component,cleanUp}=await cb({element,props})

         //mount component
         root?.render( component )

        return {

            cleanUp:()=>{

            //Unmount component
             autoUnmount===false?null:root?.unmount()

             if(cleanUp !== undefined && typeof cleanUp==="function"){
                cleanUp()
             }
            }
        }

    })

}


