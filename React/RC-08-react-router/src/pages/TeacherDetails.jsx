import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const TeacherDetails = () => {
  const [teacher,setTeacher] = useState([])
  console.log(teacher);

  const getData = async () => {
    const res = await axios(`https://jsonplaceholder.typicode.com/users/${idD}`);

    setTeacher(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

 const {idD} = useParams()
 const navigate = useNavigate()

 
  return (
    <div className=" text-center">
    <div style={{border:"2px solid cornflowerblue"}} className='w-50 m-auto my-4' >
      <img
        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${teacher.name}`}
        width="300px"
        alt=""/>
                <img src={teacher.id} alt=""/>
              <h5>{teacher.name}</h5>
              <h6>{teacher.username} </h6>
              <h6>{teacher.phone}</h6>
              <h6>{teacher.email}</h6>
              <h6>{teacher.website}</h6>
    </div>
    <button onClick={()=> navigate(-1)} className='btn btn-danger mx-2'>Go Back</button>
    <button onClick={()=> navigate("/")} className='btn btn-info'>Go Home</button>
        
    </div>
  )
}

export default TeacherDetails