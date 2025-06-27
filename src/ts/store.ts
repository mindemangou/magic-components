import { atom } from 'nanostores'

export const $counter = atom<number>(0)

$counter.subscribe((val)=>{
    console.log(val)
})