import React, { useEffect, useState } from 'react'

export const UseEffectAxiosFetch = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => setPeople(data))
  }, [])
  

  return (
    <div>
      {people.map((a)=>{
        return(
          <div>
            <h1> 
            {a.name}
            </h1>
          </div>
        )
      })}
    </div>
  )
}
