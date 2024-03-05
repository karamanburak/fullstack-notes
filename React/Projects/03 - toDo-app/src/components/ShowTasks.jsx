import React from 'react'
import { FaTimesCircle } from "react-icons/fa";

const ShowTasks = ({todos, setTodos}) => {
// console.log(todos);

const deleteTodo = (rmv) => {


  //^ 1.yol 
// todos=todos.filter((i)=>i.id !== rmv)
// setTodos(todos)
//   localStorage.setItem("gorevler", JSON.stringify(todos));

  //^ 2.yol 

  localStorage.setItem("gorevler",
   JSON.stringify(todos = todos.filter((i) => i.id !== rmv)))
  setTodos(JSON.parse(localStorage.getItem("gorevler")));

  setTodos(JSON.parse(localStorage.getItem("gorevler")))

}

  const styleStorage = (x) => {
    localStorage.setItem(
      "gorevler",
      JSON.stringify(todos.map((a) => (a.id === x.id ? { ...a, isDone: !a.isDone } : a))

      )
    );
    setTodos(JSON.parse(localStorage.getItem("gorevler")))



  }

  return (
    <div>
    {todos.map((x,index)=>{
      return (
        <div key={index} className={x.isDone ? "done" : "gorev"}
        onDoubleClick={()=>styleStorage(x)}
        >
        <h3>{x.text} 
        <FaTimesCircle 
        style={{color:"red"}} 
        onClick={()=>deleteTodo(x.id)}
        />
        </h3>
        <h6>{x.day} </h6>


        </div>
      )
    })}

    </div>
  )
}

export default ShowTasks