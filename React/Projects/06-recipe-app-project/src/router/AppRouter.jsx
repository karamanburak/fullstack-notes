import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Login from '../pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import PrivateRouter from './PrivateRouter';
import About from '../pages/about/About'


const AppRouter = () => {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
    {/* <Navbar/> */}
    <Route path="/" element={<Login/>}/>

    <Route path='/home' element={<PrivateRouter/>}>
    <Route path="/home" element={<Home/>}/>
    </Route>
    <Route path="/about" element={<About />} />

</Routes>
</BrowserRouter>

  );
}

export default AppRouter