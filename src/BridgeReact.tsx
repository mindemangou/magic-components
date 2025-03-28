import { createContext, type PropsWithChildren, useCallback, useContext, useState } from "react"
import {ajax,trigger} from 'htmx.org'
import { getProps } from "./magiccomponents"

const BridgeContext=createContext({})



type BrigeProviderType=PropsWithChildren<{
    init:any
}>

export const BridgeProvider=({children,init}:BrigeProviderType)=> {
    return <BridgeContext value={{...init}}>
                {children}
            </BridgeContext>
}


export const useBridgeData=()=> {
    
    const contextData=useContext(BridgeContext) as any
    
    console.log(contextData)
    
    const [state,setState]=useState({contextData,processing:false})

    const refresh=useCallback(()=> {
            
        setState((oldState)=>({...oldState,processing:true}))

        const template=document.createElement('template')
    
        const tagName=contextData.tagName 
    
        template.id=tagName
        
        document.body.appendChild(template)
    
        ajax('GET',location.toString(),{target:`#${tagName}`,select:`${tagName}`,swap:'innerHTML'}).then(()=> {
            
            const element=template.firstElementChild as HTMLElement
    
            const newdata=getProps(element)
    
            setState(()=>({contextData:newdata,processing:false}))
    
        }).then(()=>template.remove())
    
    },[])

    const sendMessage=useCallback((name:string,data:{[key in string]:any})=> {
            
        const element=document.querySelector(name)
        
        if(element) {
            
            trigger(element,'incoming_message',data)
        }

    },[])


    return {...state.contextData,processing:state.processing,refresh,sendMessage}
}

export const useMessage=()=> {
    
    const data=useContext(BridgeContext) as any
    
    const [state,setState]=useState({})
    
    const element=document.querySelector(data.tagName)

    element?.addEventListener('incoming_message',(evt:{detail:object})=> {
       
        setState(()=>{
            return evt?.detail
        })
        
    })

    return state
}
