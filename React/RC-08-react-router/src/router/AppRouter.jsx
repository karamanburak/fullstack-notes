import React from 'react'
import Home from '../pages/Home';
import MyNavbar from '../components/MyNavbar';
import Footer from '../components/Footer';
import Teacher from '../pages/Teacher';
import TeacherDetails from '../pages/TeacherDetails';
import CourseCard from '../pages/CourseCard';
import CardDetails from '../pages/CardDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from '../pages/ContactForm';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
    return (
        <Router>
            <MyNavbar />
            {/* "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu
         "/" ile başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir .
         "/courses/:name" böyle bir yolda yani  :name belirtilen kısım bir değişkendir, mesela name=HTML gibi. bunun için : kullanılır
         
          */}
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/teacher' element={<Teacher />} />
                <Route path='/teacher/:id' element={<TeacherDetails />} />

                {/* <Route path="/courses" element={<PrivateRouter />}>
                  <Route path="" element={<CourseCard />} />
                  <Route path="/courses/:namee" element={<CardDetails />} />
              </Route> */}

                <Route path='/courses' element={<CourseCard />}></Route>
                <Route path='/courses/:namee' element={<CardDetails />} />

                {/* sifre kontrolü ile girilebilecek sayfalar icin PrivaRouter a yönlendirdik */}
                <Route path='/contact' element={<PrivateRouter />}>
                    <Route path='' element={<ContactForm />} />
                </Route>

                {/* <Route path='/contact' element={<ContactForm />} /> */}

                <Route path='/login' element={<Login />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default AppRouter