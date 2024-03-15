//! lifreCycle - useEffect teki UseEffectAxios.jsx componenti

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Teacher = () => {
  const [people, setPeople] = useState([]);



  //!4.yol axios async await

  const getData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");

    setPeople(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

const navigate = useNavigate()

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map((person) => {
          return (
            <div key={person.id} className="col-12 col-sm-6 col-md-4">
              {/* https://www.dicebear.com/styles/avataaars/ */}
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.name}`}
                alt=""
                // onClick={()=>navigate(`/teacher/${person.name}`)}
                onClick={()=>navigate(`/teacher/${person.id}`, {state:{person}})}
              />
              <h5>{person.name}</h5>
              <h6>{person.username} </h6>
              <h6>{person.phone}</h6>
            </div>
          );
        })}
      </div>
    </div>
    
  );
};

export default Teacher;

