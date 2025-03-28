import {config} from "./magiccomponents";

config({redirect:true,loader:{enable:true,color:'#a3d'}})

//on('htmx:xhr:progress',()=>console.log('progress'))

/* window.addEventListener("popstate",()=> {
    //history.go()
    const items=localStorage.getItem('htmx-history-cache')

    if(items) {
        const parsItem=JSON.parse(items) as any[]
        const path=document.location.pathname
        const element=parsItem.find((el)=> {
            return el.url===path
        })
        document.body.innerHTML+="<a href='/about.php?id=4' hx-boost='true'>test</a>"
        process(document.body)
        console.log(element.content)
    }
  }); */