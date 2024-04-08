
const initialState = {
    todoList: []
}

//? types
const ADD = "ADD";
const DEL = "DEL";
const CLR = "CLR";
const TGL = "TGL";

//! action creators
//^ action creators \\
// export const addTodo = (text) => ({type:ADD,payload:text})
export const addTodo = (payload) => ({ type: ADD, payload })
export const clearTodo = () => ({ type: CLR })
export const deleteTodo = (payload) => ({ type: DEL, payload })
export const toggleTodo = (payload) => ({ type: TGL, payload })


export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD:
            return { ...state, todoList: [...state.todoList, { text: payload, completed: false, id: crypto.randomUUID() }] }
        case CLR:
            return { ...state, todoList: [] }
        case TGL:
            return {
                ...state,
                todoList: state.todoList.map((item) =>
                    item.id === payload ? { ...item, completed: !item.completed } : item
                )
            }
        case DEL:
            return {
                ...state,
                todoList: state.todoList.filter((item) => item.id !== payload),
            }
        case "RESET":
            // return initialState
            return { ...state, count: 0 }
        default:
            return state //* olmayan bir type bilgisi geldiginde de state i oldugu gibi döndürmelidir.
    }
}
