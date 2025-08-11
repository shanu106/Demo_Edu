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
import Contact from './Pages/contact'
import Alumni from './Pages/Alumni'
import Blogs from './Pages/Blogs'
import Careers from './Pages/Careers'
import Terms from './Pages/Privacy_page'   
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import QuickLinks from './Components/QuickLinks'
import Footer from './Components/Footer'
import Drawer from './Components/Drawer'


function App() {


  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const toggleDrawer = () =>{
    setDrawerOpen(!isDrawerOpen)
  }
  useEffect(() => {
        
        document.body.style.overflowY=isDrawerOpen ? 'hidden' : 'auto';
      
       
      })

  return (
  
    <>
      <div className="flex flex-col min-h-screen  ">
  <Navbar toggleDrawer={toggleDrawer}  isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen}/>

    <Drawer toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
  <main className='flex-1' >


    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/academics' element={<Academics />}/>
      <Route path='/admissions' element={<Admissions />}/>
      <Route path='/staff' element={<Staff />}/>
      <Route path='/students' element={<Students  />}/>
      <Route path='/parents' element={<Parents />}/>
      <Route path='/news/events' element={<NewsEvents />}/>
      <Route path='/gallery' element={<Gallery />}/>
      <Route path='/announcements' element={<Announcements />}/>
      <Route path='/LMS' element={<LMS  />}/>
      <Route path='/contact' element={<Contact />}/> 
      <Route path='/alumni' element={<Alumni />}/>
      <Route path='/blogs' element={<Blogs />}/>
      <Route path='/careers' element={<Careers />}/>
      <Route path='/terms' element={<Terms />}/>         
    </Routes>

      </main>
      {/* <div className="w-full h-full xl:h-[40%] absolute bottom-0 md:h-auto p-5  bg-[#adb5bd]">
          <QuickLinks />
        </div> */}
    <div className='bg-black'>
      <Footer />
    </div>
        
      </div>
   </>
  )
}

export default App
