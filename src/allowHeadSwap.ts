
 const mergeHead=async (newContent:string,trigger:Function)=>{


        if (newContent && newContent.indexOf('<head') > -1) {

            const htmlDoc = document.createElement("html");

            // remove svgs to avoid conflicts
            const contentWithSvgsRemoved = newContent.replace(/<svg(\s[^>]*>|>)([\s\S]*?)<\/svg>/gim, '');

            // extract head tag
            const headTag = contentWithSvgsRemoved.match(/(<head(\s[^>]*>|>)([\s\S]*?)<\/head>)/im);
            
            // if the  head tag exists...
            if (headTag) {

                const added = []
                const removed = []
                const preserved = []
                const nodesToAppend = []

                htmlDoc.innerHTML = headTag.join(' ');
                
                const newHeadTag = htmlDoc.querySelector("head");
                const currentHead = document.head;

                const srcToNewHeadNodes = new Map();
                if (newHeadTag == null) {
                    return;
                } else {
                    // put all new head elements into a Map, by their outerHTML
                    
                    for (const newHeadChild of newHeadTag.children) {
                        srcToNewHeadNodes.set(newHeadChild.outerHTML, newHeadChild);
                    }
                }


                // get the current head
                for (const currentHeadElt of currentHead.children) {

                    // If the current head element is in the map
                    let inNewContent = srcToNewHeadNodes.has(currentHeadElt.outerHTML);

                    if (inNewContent) {

                        srcToNewHeadNodes.delete(currentHeadElt.outerHTML);
                        preserved.push(currentHeadElt);
                    } else {
                        trigger(document.body, "htmx:removingHeadElement", {headElement: currentHeadElt})
                            removed.push(currentHeadElt);
                    }
                }

                // Push the tremaining new head elements in the Map into the
                // nodes to append to the head tag
                nodesToAppend.push(...srcToNewHeadNodes.values());

                for (const newNode of nodesToAppend) {

                    let newElt = document.createRange().createContextualFragment(newNode.outerHTML);

                    trigger(document.body, "htmx:addingHeadElement", {headElement: newElt})
                    currentHead.appendChild(newElt);
                    added.push(newElt);
                    
                }

                // remove all removed elements, after we have appended the new elements to avoid
                // additional network requests for things like style sheets
                for (const removedElement of removed) {
                    trigger(document.body, "htmx:removingHeadElement", {headElement: removedElement}) 
                        currentHead.removeChild(removedElement);
                    
                }

                trigger(document.body, "htmx:afterHeadMerge", {added: added, kept: preserved, removed: removed});
            }
        }
    }

    
//Swap the head in htmx response
export const swapHead=async ({on,trigger}:{on:Function,trigger:Function})=> {

    on('htmx:afterSwap', function(event:unknown){
     
        const evt=event as CustomEvent<{xhr:{response:any},boosted:boolean }>
           
        const serverResponse = evt.detail.xhr.response;
    
        mergeHead(serverResponse,trigger);
        
    })
    
    on('htmx:historyRestore', function(event:unknown){
    
        const evt=event as CustomEvent<{xhr:{response:unknown},cacheMiss:unknown,serverResponse:string,item:{head:string} }>
    
        //trigger(document.body, "htmx:beforeHeadMerge", evt.detail)
    
        if (evt.detail.cacheMiss) {
            mergeHead(evt.detail.serverResponse,trigger);
        } else {
            mergeHead(evt.detail.item.head,trigger);
        }
        
    })
    
    on('htmx:historyItemCreated', function(event:unknown){
    
        const evt=event as CustomEvent<{item:{head:unknown} }>
    
        const historyItem = evt.detail.item;
        historyItem.head = document.head.outerHTML;
    })
    

}



