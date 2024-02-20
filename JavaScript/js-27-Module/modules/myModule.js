console.log("myModule dan selamlar");

export const CALISMA_SAATI = 40

export function topla(s1,s2){
    return s1+s2
}

let counter = 5 

const increment = (miktar) => 
counter+= miktar

const decrement = (miktar) => {
    counter -=miktar
    console.log(counter);
}

const myName = "Burak"

export {increment, decrement, myName}



//! Bir sayfada bir tane export default olabilir
export default function ugurla () {
    console.log("gorusmek uzere JS");
}
