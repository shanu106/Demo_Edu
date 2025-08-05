import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Academics from './Pages/Academics'
import Admissions from './Pages/Admissions'
import Staff from './Pages/Staff'
import Students from './Pages/Students'
import Parents from './Pages/Parent'
import NewsEvents from './Pages/News_events'
import Gallery from './Pages/Gallery'
import Announcements from './Pages/Announcements'
import LMS from './Pages/LMS'
import Contact from './Pages/Contact'
import Alumni from './Pages/Alumni'
import Blogs from './Pages/Blogs'
import Careers from './Pages/Careers'
import Terms from './Pages/Privacy_policy'   
import Signup from './Pages/Signup'
import Home from './Pages/Home'


function App() {

  
  

  return (
  
  
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/academics' element={<Academics/>}/>
      <Route path='/admissions' element={<Admissions/>}/>
      <Route path='/staff' element={<Staff/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path='/parents' element={<Parents/>}/>
      <Route path='/news/events' element={<NewsEvents/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/announcements' element={<Announcements/>}/>
      <Route path='/LMS' element={<LMS/>}/>
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/alumni' element={<Alumni/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/terms' element={<Terms/>}/>         
    </Routes>
   
   
  )
}

export default App
