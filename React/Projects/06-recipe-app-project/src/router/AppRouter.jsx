import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Login from '../pages/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import PrivateRouter from './PrivateRouter';
import About from '../pages/about/About'
import Footer from '../components/footer/Footer';
import Details from '../pages/details/Details';


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
    <Route path="/details" element={<Details />} />

</Routes>
<Footer/>
</BrowserRouter>

  );
}

export default AppRouter