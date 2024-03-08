import React, { useEffect, useState } from 'react'

export const UseEffectAxiosFetch = () => {
  const [people, setPeople] = useState([])

  //^1.yol fetch then (chain)\\

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => setPeople(data))
  // }, [])
  
  //^2.yol fetch async await\\

    const getData = async () => {

   const res = await fetch("https://jsonplaceholder.typicode.com/users")
     const data = await res.json()

     setPeople(data)
    }

    useEffect(() => {
      getData()
  
    }, [])
    


  return (
    <div className='container text-center mt-4'>
    <div className='row'>
      {people.map(({id,username,phone,name})=>{
        return(
          <div key={id} className='col-12 col-sm-6 col-md-4'>
            {/* https://api.dicebear.com/7.x/avataaars/svg?seed=Felix */}
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} />
            <h5> 
            {name}
            </h5>
            <h6>{username} </h6>
            <h6>{phone} </h6>
          </div>
        )
      })}
      </div>
    </div>
  )
}
