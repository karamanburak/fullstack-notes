import { useState } from "react"

const AddTask = ({todos, setTodos}) => {

const [text,setText] = useState("")
const [day,setDay] = useState("")
const [display, setDisplay]= useState(true)

const handleSubmit = (e) => {
e.preventDefault()
const id = Math.ceil(Math.random()*100)+6


//^ 1. yol (kalici kaydedilmeyen)
// setTodos([{id:7, text:text, day:day,isDone:false}, ...todos ])

//^ 2.yol (localstroge in ilk yolu)
const newTodos = ({ id: id, text: text, day: day, isDone: false })
//*  setTodos([newTodos, ...todos])
    //*     todos = [newTodos, ...todos];
    //  setTodos(todos);
    //  localStorage.setItem("gorevler",JSON.stringify(todos))



//^ 3.yol (locaLStorage ye yollamanin 2. yolu)

localStorage.setItem("gorevler", JSON.stringify([ newTodos, ...todos]))
setTodos(JSON.parse(localStorage.getItem("gorevler")))

//input alanlarini bosaltmak icin , altta inputlaara value veriyoruz, burada da temizliyoruz.

setText("")
setDay("")

}

  return (
      <div>
          <header className="header">
              <h1>TO DO APP</h1>
              <button
                  className="btn"
                  style={{background: display ? "red" : "purple"}}
                  onClick={()=>setDisplay(!display)}

              >
                 {display ? "CLOSE" : "SHOW"} ADD TASK BAR
              </button>
          </header>

          {display && <form onSubmit={handleSubmit}>
              <div className="form-control">
                  <label htmlFor="text">Task</label>
                  <input
                      id="text"
                      type="text"
                      name="text"
                      onChange={(e) => setText(e.target.value)}
                      value={text}
                  />

              </div>
              <div className="form-control">
                  <label htmlFor="day">Day & Time</label>
                  <input
                      id="day"
                      type="datetime-local"
                      name="day"
                      onChange={(e) => setDay(e.target.value)}
                      value={day}


                  />
              </div>
              <div>
                  <button className="btn btn-submit" type="submit">
                      SUBMİT
                  </button>
              </div>
          </form>  }
         

      </div>
  )
}

export default AddTask