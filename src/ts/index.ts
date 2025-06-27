import { define } from "../magiccomponents";



// define({tagname:'add-add',allowShadowDom:true},({element})=>{
    
//     const handleCLick=()=>{
//         console.log('okok')
//     }

//     element.innerHTML=/*html*/`

//     <span onclick='${handleCLick}' >click me</span>
//         <button id='add' >++++</button>
//     `

//     const add=element.querySelector('#add')


//     add?.addEventListener('click',()=>{
//         console.log('okok')
//         const oldValue=$counter.get()
//         const newValue=oldValue+1
//         $counter.set(newValue)
//     })
// })


// define({tagname:'remove-remove',allowShadowDom:true},({element})=>{
    

//     element.innerHTML=/*html*/`
//         <button id='remove' >----</button>
//     `

//     const remove=element.querySelector('#remove')

//     remove?.addEventListener('click',()=>{
//         const oldValue=$counter.get()
//         const newValue=oldValue-1
//         $counter.set(newValue)
//     })

// })

// define({tagname:'number-number'},({element})=>{
    
//     console.log('first number')

    
// })



define({tagname:'u-u',allowShadowDom:true},({element})=>{
    
        element.innerHTML=`
         salut <slot name='isok' ></slot> ll
        `

   return ()=>{
        console.log('remove')
   }
    
})
