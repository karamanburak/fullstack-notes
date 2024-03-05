import React, { useState } from 'react'
import AddTask from '../components/AddTask'
import ShowTasks from '../components/ShowTasks'
import Data from '../helper/Data'

const Home = () => {

  const [todos,setTodos] = useState(Data)


  return (
    <div>
      <AddTask/>
      <ShowTasks todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Home