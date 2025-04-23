import htmx from "htmx.org"


export class MagicLoader extends HTMLElement {

    animationOne:Animation|undefined;
    animationTwo:Animation|undefined;
    constructor() {
        super()
        
    }
    connectedCallback() {

        const color=this.getAttribute('data-color')??'#639ef4'

        this.style.height='0.2rem'
        this.style.width='0'
        this.style.position='fixed'
        this.style.top='0'
        this.style.left='0'
        this.style.zIndex='9999'
        this.style.backgroundColor=color
        this.style.display='none'


        htmx.on('htmx:beforeRequest',(event: Event)=> {
            
             const e = event as CustomEvent<{ boosted: boolean }>;

             if(e?.detail?.boosted) {
                 this.style.display='block'

                 this.animationOne=this.animate([
                    {width:0},
                    {width:'88%'}
                ],{duration:7000,fill:'forwards'})
                
                this.animationOne.addEventListener('finish',()=> {
                   this.animationTwo=this.animate([
                        {width:'88%'},
                        {width:'95%'}
                    ],{duration:5000,iterations:Infinity})
                })

             }
            
         })
 
    }

    disconnectedCallback() {
        
        if(this.animationOne) {
            this.animationOne?.cancel()
        }

        if(this.animationTwo) {
            this.animationTwo?.cancel()
        }

    }
}

customElements.define('magic-loader',MagicLoader)
