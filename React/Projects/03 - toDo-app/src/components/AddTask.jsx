import { useState } from "react"

const AddTask = ({todos, setTodos}) => {

const [text,setText] = useState("")
const [day,setDay] = useState("")

const handleSubmit = (e) => {
e.preventDefault()

// setTodos([{id:7, text:text, day:day,isDone:false}, ...todos ])

const id = Math.ceil(Math.random()*100)+6

const newTodos = ({ id: id, text: text, day: day, isDone: false })

setTodos([newTodos, ...todos])

setText("")
setDay("")


}

  return (
      <div>
          <header className="header">
              <h1>TO DO APP</h1>
              <button
                  className="btn"
                  style={{background:"red"}}

              >
                  CLOSE ADD TASK BAR
              </button>
          </header>


          <form onSubmit={handleSubmit}>
              <div className="form-control">
                  <label htmlFor="text">Task</label>
                  <input
                      id="text"
                      type="text"
                      name="text"
                      onChange={(e)=>setText(e.target.value)}
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
          </form>

      </div>
  )
}

export default AddTask