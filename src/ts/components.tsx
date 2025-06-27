import { createRoot } from "react-dom/client"
import { define } from "../magiccomponents"

define({tagname:'t-t',allowShadowDom:true},({element})=>{
    
   
        createRoot(element).render(
            <p>Test</p>
        )

   return ()=>{
        console.log('remove')
   }
    
})