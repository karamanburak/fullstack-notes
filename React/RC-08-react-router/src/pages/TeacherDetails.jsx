import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import spinner from '../img/loading.gif'
import NotFound from './NotFound';

const TeacherDetails = () => {

  const navigate = useNavigate()

  //^ 1. yol----------------//
  const { id } = useParams()
  const [person, setPerson] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)




  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((veri) => setPerson(veri))
      .catch((err) => setError(true))
      .finally(() => setLoading(false))
  }, [id])
  if (error) {
    return <NotFound />
  } else if (loading) {
    return (
      <div>
        <img src={spinner} alt="" />
      </div>
    )
  }
  //^----------------//

  // useEffect te [] içini boş bırakabilirim. çünkü zaten bu sayfaya kisi tıklanınca o kisinin id  si ile geliniyor ve bu sayfa tekrar çalışıyor, ama syntax gereği, id ye bağlı çalıştığı için [] içine id değiştiğinde çalış komutu verirsek herkes mutlu olur, yapmazsakta hata almayız
  //navigate(-sayı) ile sayı kaçsa o kadar sekme geri döner, yani sayı 2 ise 2 önce ziyaret ettiğimiz sayfaya döner

  //^ 2. yol ----------------- //
  //! useLocation.//  navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz

  // const {state:{person}} = useLocation()
  // console.log(person);

  return (
    <div className=" text-center">
      <div style={{ border: "2px solid cornflowerblue" }} className='w-50 m-auto my-4' >
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.name}`}
          width="300px"
          alt="" />
        <h5>{person.name}</h5>
        <h6>{person.username} </h6>
        <h6>{person.phone}</h6>
        <h6>{person.email}</h6>
        <h6>{person.website}</h6>
      </div>
      <button onClick={() => navigate(-1)} className='btn btn-danger mx-2'>Go Back</button>
      <button onClick={() => navigate("/")} className='btn btn-info'>Go Home</button>

    </div>
  )
}

export default TeacherDetails