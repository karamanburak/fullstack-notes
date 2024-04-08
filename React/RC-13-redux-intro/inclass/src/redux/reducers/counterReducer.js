import { useState } from "react"
import { DEC, INC, RESET } from "../types/counterTypes"

// const [count,setCount] = useState(0)
// const [todo,setTodo] = useState()

const initialState = {
    count: 0,
    // title:""

}

//! action parametresi bir obje olmak zorunda bu obje de bizden type ve payload propertylerini bekler.\\
export const counterReducer = (state = initialState, action) => {

    switch (action.type) {
        case INC:
            return { count: state.count + 1 }
        case DEC:
            return { count: state.count - 1 }
        case RESET:
            // return initialState
            return {...state, count:0}
        default:
            return state //* olmayan bir type bilgisi geldiginde state i oldugu gibi döndürmelidir.\\
    }

    //! Reducer fonksiyonu muhakkak bir state objesi döndürmelidir.\\
}