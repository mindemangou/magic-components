import { useEffect, useState } from "react"


export const useDataBag = (tagname: string) => {

    const [dataBag, setDataBag] = useState<any[]>([])
    

    useEffect(() => {
        const element = document.querySelector(tagname)

        const callback = (evt: Event) => {
             
            const customEvent = evt as CustomEvent<{bag: any}>
            const { bag } = customEvent.detail

            setDataBag((old) => [...old,bag])

        }
        
        element?.addEventListener('incoming_data', callback)

        
        // Cleanup function to remove event listener
        return () => {
            element?.removeEventListener('incoming_data', callback)
        }
        
    }, []) 



    return dataBag
}


/* export const useDataBag=<T=null>()=> {
    const {tagname,key}=useContext(MagicContext) as ContextValueType
    
    if(tagname===undefined && key===undefined){
        console.warn("Ensure that your component is wrapped with MagicComponentsProvider before using the useDataBag hook")
    }

    const [dataBag,setDataBag]=useState<T|null>(null)

    // Use useEffect to handle event listeners
    useEffect(() => {
        const elements = document.querySelectorAll(tagname)
        
        const handleIncomingData = (evt: Event) => {
            const customEvent = evt as CustomEvent<{bag:T}>
            const { bag } = customEvent.detail
            setDataBag(bag)
        }

        // Add event listener to all elements
        elements.forEach(element => {
            element?.addEventListener('incoming_data', handleIncomingData)
        })

        // Cleanup function to remove event listeners
        return () => {
            elements.forEach(element => {
                element?.removeEventListener('incoming_data', handleIncomingData)
            })
        }
    }, [tagname]) // Only re-run if tagname changes
  
    return dataBag
} */