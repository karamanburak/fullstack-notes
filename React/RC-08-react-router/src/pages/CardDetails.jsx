import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../data'

const CardDetails = () => {

  //! router dan path olarak gelen name burada useParams hook u ile yakalandi\\
const {namee} = useParams()


// tekrar bir önceki sayfaya dönebilmek icin useNavigate
const navigate = useNavigate()
  return (
    <div className='container text-center mt-4'>
    {data.map((i)=>i.name===namee  && (
      <div>
      <h3>{namee}</h3>
      <img src={i.img} width="300px" alt="" />
      <h3>{i.text} </h3>
      <h4>{i.yorum} </h4>
      <div>
        <button onClick={()=>navigate(-1)} className='btn btn-warning'>GO BACK</button>
        <button onClick={() => navigate('/')} className='btn btn-primary'>GO HOME</button>
      </div>
      </div>
      ))}
  
    </div>
  )
}

export default CardDetails