import { useEffect, useState } from "react"
import {KullaniciContext} from './context/KullaniciContext'

import GosterUsers from "./pages/GosterUsers"

const App = () => {

const [users,setUsers] = useState([])


useEffect(()=>{
  fetch("https://api.github.com/users")
  .then((res)=>res.json())
  .then((data)=>setUsers(data))

},[])

const changeWidth = (id,size) => {
  setUsers(users.map((a)=>a.id===id ? {...a, width:size}:a))
 
}

  return (
   <KullaniciContext.Provider value={{users,changeWidth}}>
      <GosterUsers />
   </KullaniciContext.Provider>
 
  );
}

export default App
