//! lifreCycle - useEffect teki UseEffectAxios.jsx componenti

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TeacherDetails from "./TeacherDetails";
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

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map(({ name, username, id, phone }) => {
          return (
            <div key={id} className="col-12 col-sm-6 col-md-4">
            <Link to={`/teacher/${id}`}>
              {/* https://www.dicebear.com/styles/avataaars/ */}
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
                alt=""
              />
            </Link>
              <h5>{name}</h5>
              <h6>{username} </h6>
              <h6>{phone}</h6>
            </div>
          );
        })}
      </div>
    </div>
    
  );
};

export default Teacher;

