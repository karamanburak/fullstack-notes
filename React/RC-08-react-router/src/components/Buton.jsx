import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Buton = () => {
  const navigatE = useNavigate()
  return (
    <div className='text-center'>
      <Button onClick={()=> navigatE("/login")} className='btn btn-danger p-4 m-2'>LOGIN</Button>
      <Button className='btn btn-danger p-4 m-2'>CLOSE</Button>
      <Button className='btn btn-danger p-4 m-2'>DELETE</Button>
    </div>
  )
}

export default Buton