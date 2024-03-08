import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import React, { useState } from 'react'
import LifeCycleMethods from './components/LifeCycleMethods';

const App = () => {

  const [show,setShow] = useState(true)
  return (
    <div className='container text-center mt-4'>
    <button className="btn btn-danger" onClick={()=> setShow(!show)}>
    SHOW
    </button>
    {show && <LifeCycleMethods/>}
      

    </div>
  )
}

export default App
