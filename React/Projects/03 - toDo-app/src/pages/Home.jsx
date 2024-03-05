import React, { useState } from 'react'
import AddTask from '../components/AddTask'
import ShowTasks from '../components/ShowTasks'
import Data from '../helper/Data'

const Home = () => {

  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("gorevler")) || Data)


  return (
    <div>
      <AddTask todos={todos} setTodos={setTodos} />
      <ShowTasks todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Home