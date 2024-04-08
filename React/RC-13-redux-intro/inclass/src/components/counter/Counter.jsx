import { decrement, increment, reset } from "../../redux/actions/counterActions"
import { INC } from "../../redux/types/counterTypes"
import "./Counter.css"
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

  // useSelector(state => state.reducer)
  // const {count} = useSelector(state => state)
  const count = useSelector(state => state.count) // state in kendisine denk gelir
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
