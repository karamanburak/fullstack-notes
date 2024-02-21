import './App.css';

import React from 'react';

//! bootstrap in yolunu import etmeliyiz, dilersek bunu index.js de yapabiliriz
import "bootstrap/dist/css/bootstrap.min.css"


import dataA from "./data"
import CourseCard from './component/CourseCard';


const App = () => {
  console.log(dataA);
  return (
    <div>
    <CourseCard veri={dataA}/>
    </div>
  )
}

export default App
