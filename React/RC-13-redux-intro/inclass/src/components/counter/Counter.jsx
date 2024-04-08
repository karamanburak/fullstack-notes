import { decrement, increment, reset } from "../../redux/actions/counterActions"
import { INC } from "../../redux/types/counterTypes"
import "./Counter.css"
import { useDispatch, useSelector } from 'react-redux'


// useDispatch() reducer içerisinde tanımlanan actionsların çalıştırılması için kullanılır.
//? dispatch; Action’ı parametre alarak reducer’ı tetikler. Bunun sonucunda state değiştirilir. Bu fonksiyon her çalıştırıldığında abone olan tüm componen’tler tekrar render edilir.Tabii ki state değiştikten sonra, render işlemi yapılır. Bu işlemden sonra listeners’da abone olan tüm component’lerin içinde gezerek render ediyor. Bu sayede güncel state view’e yansıyor.

const Counter = () => {

  // useSelector(state => state.reducer)
  // const {count} = useSelector(state => state)
  // const count = useSelector(state => state.count) // state in kendisine denk gelir
  const count = useSelector(state => state.counter.count) // combine reducerstan sonra\\
  const dispatch = useDispatch() // setter a denk gelir.
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter: {count}</h1>
      <div>
        <button className="counter-button negative"
          onClick={() => dispatch(decrement())}
        >
        decrease</button>
        <button className="counter-button zero"
          onClick={() => dispatch(reset())}
        >
        reset</button>
        <button className="counter-button positive"
          // onClick={() => dispatch("INC")} //! Action obje olmak zorundadir o nedenle argüman gönderirken obje olarak göndermek zorundayiz. Aksi halde hata aliriz.
          // onClick={() => dispatch({ tip: "INC" })} //? obje icinde gönderdigimiz property type adinda olmali.
          // onClick={() => dispatch({ type: INC })} //* dispatch icerisinde verdigimiz argüman reducer icerisindeki action parametresine karsilik gelir. 
          onClick={() => dispatch(increment())}
        >
          increase</button>
      </div>
    </div>
  )
}

export default Counter
