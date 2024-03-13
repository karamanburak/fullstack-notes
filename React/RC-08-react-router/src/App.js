import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Teacher from './pages/Teacher';
import CourseCard from './pages/CourseCard';
const App = () => {
  return (
    <div>
    <MyNavbar/>
      <Home/>
    <Teacher/>
    <CourseCard/>

      <Footer/>
    </div>
  )
}

export default App