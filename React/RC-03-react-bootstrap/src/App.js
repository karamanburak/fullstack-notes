import './App.css';

import React from 'react';

//! bootstrap in yolunu import etmeliyiz, dilersek bunu index.js de yapabiliriz
import "bootstrap/dist/css/bootstrap.min.css"


import dataA from "./data"
import CourseCard from './component/CourseCard';
import MyNavbar from './component/MyNavbar';
import Slider from './component/Slider';


const App = () => {
  console.log(dataA);
  return (
    <div>
      <MyNavbar/>
    <Slider/>
    <CourseCard veri={dataA}/>

    </div>
  )
}

export default App
