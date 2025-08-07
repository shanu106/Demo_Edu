import { useEffect, useState } from 'react'
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
import Terms from './Pages/Privacy_page'   
import Signup from './Pages/Signup'
import Home from './Pages/Home'


function App() {


  const [isDrawerOpen, setDrawerOpen] = useState(false)
  
  useEffect(() => {
        
        document.body.style.overflowY=isDrawerOpen ? 'hidden' : 'auto';
      
       
      })

  return (
  
  
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Home isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/about' element={<About isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/academics' element={<Academics isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/admissions' element={<Admissions isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/staff' element={<Staff isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/students' element={<Students isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />}/>
      <Route path='/parents' element={<Parents isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/news/events' element={<NewsEvents isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/gallery' element={<Gallery isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/announcements' element={<Announcements isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/LMS' element={<LMS isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />}/>
      <Route path='/contact' element={<Contact isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/> 
      <Route path='/alumni' element={<Alumni isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/blogs' element={<Blogs isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/careers' element={<Careers isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>
      <Route path='/terms' element={<Terms isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>}/>         
    </Routes>
   
   
  )
}

export default App
