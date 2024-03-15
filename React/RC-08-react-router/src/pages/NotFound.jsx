import React from 'react'
import{Container} from 'react-bootstrap'
import notFound from '../img/notFound.jpeg'
import { Navigate, useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate()

  return (
    <Container className='text-center'>
      <img src={notFound} alt="" width="500" />
      <div>
      <button 
      onClick={()=>navigate('/')}
      className='btn btn-outline-primary'>GO HOME</button>
      </div>
    </Container>
  )
}

export default NotFound