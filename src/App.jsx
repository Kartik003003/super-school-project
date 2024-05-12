import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/Contact'
import Footer from './components/footer/Footer'
import WhySuperSchool from './components/pages/whySuperSchool/WhySuperSchool'
import CoCurriculumActivity from './components/pages/Co-curriculum Activity/CoCurriculumActivity'
import PrincipalDesk from './components/pages/Principal Desk/PrincipalDesk'
import OurVisionMission from './components/pages/Our Vision & Mission/OurVisionMission'
import Achievements from './components/pages/Achievements/Achievements'
// Academics sub drop downs
import Our_courses from './components/pages/Academics/Our_courses' 
import Calendar from './components/pages/Academics/Calendar'
import Amenities from './components/pages/Academics/Amenities'
import Staff from './components/pages/Academics/Staff'
import Admissions from './components/pages/admission/admission'
import News from './components/pages/news/News'
import Blogs from './components/pages/blogs/Blog'
import Imagefix from './components/pages/fixed_image/imagefix'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/WhySuperSchool' element={<WhySuperSchool />} />
        <Route path='/CoCurriculumActivity' element={<CoCurriculumActivity />} />
        <Route path='/PrincipalDesk' element={<PrincipalDesk />} />
        <Route path='/OurVisionMission' element={<OurVisionMission />} />
        <Route path='/Achievements' element={<Achievements />} />
        <Route path='/Our_courses' element={<Our_courses />} />        
        <Route path='/Calendar' element={<Calendar />} />        
        <Route path='/Amenities' element={<Amenities />} />        
        <Route path='/Staff' element={<Staff />} />        
        <Route path='/Admissions' element={<Admissions />} />        
        <Route path='/News' element={<News />} />        
        <Route path='/Blogs' element={<Blogs />} />        


        {/* No Pages Available Route */}
        <Route path='*' element={<div className='container d-flex justify-content-center align-items-center' style={{ height: '78vh' }}><img src="./errorpage.avif" alt="404" height={220} /></div>} />
      </Routes>
      <Imagefix />
      <Footer />
    </BrowserRouter>
  )
}

export default App
