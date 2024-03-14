import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import Teacher from './pages/Teacher';
import TeacherDetails from './pages/TeacherDetails';
import CourseCard from './pages/CourseCard';
import CardDetails from './pages/CardDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './pages/ContactForm';
import Login from './pages/Login';
const App = () => {
  return (
    <div>
    <Router>
        <MyNavbar />
      <Routes>
          <Route path='/' element={<Home />}></Route>
            <Route path='/teacher' element={<Teacher />}></Route>
            <Route path='/teacher/:idD' element={<TeacherDetails />}></Route>
            <Route path='/courses' element={<CourseCard />}></Route>
            <Route path='/courses/:namee' element={<CardDetails />}></Route>
            <Route path='/contact' element={<ContactForm />}></Route>
            <Route path='/login' element={<Login />}></Route>
      </Routes>
        <Footer />
    </Router>

    </div>
  )
}

export default App