import React, { useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import EditBilgi from './EditBilgi';

const BilgiList = ({tutorials,deleteTutorial, getTutorials}) => {

  const [item,setItem] = useState("")
  // const deleteTutorial = async (id) => {
  //   await axios.delete(`${url}/${id}/`)
  // }


// bootstrapten hareketli bir yapi olan modal kullanilacagi icin index.html e bootstrapin script etiketi eklendi.

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorials.map(({id,title,description}) => {
            return (
              <tr key={id} >
                <th>{id}</th>
                <td>{title }</td>
            <td>{description } </td>
                <td className="text-center">
                <FaEdit 
                type='button' 
                className='text-warning' 
                size={20}
                data-bs-toggle="modal"
                 data-bs-target="#editModal"
                 onClick={()=>setItem({id,title,description})}
                />
              <AiFillDelete 
              type='button'
               className='text-danger' 
               size={20}
                onClick={()=>deleteTutorial(id)}
               />


                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <EditBilgi item={item} setItem={setItem} getTutorials={getTutorials} />
    </div>
  )
}

export default BilgiList