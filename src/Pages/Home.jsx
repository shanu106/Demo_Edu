import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Drawer from '../Components/Drawer'

import Footer from '../Components/Footer'
import Event from '../Components/Event'
import Achivement from '../Components/Achivement'
import QuickLinks from '../Components/QuickLinks'

const Home = () => {
  
    const [isDrawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = () =>{
        setDrawerOpen(!isDrawerOpen)
    }
  return (
    <>
    <div className=' w-full mt-0  bg-red-300 '>
 <Navbar isDrawerOpen={isDrawerOpen} pageName={"Home"} toggleDrawer={toggleDrawer}/>
    </div>
   
    <div className='bg-red-400 w-full h-screen  absolute'>
 <Drawer isDrawerOpen={isDrawerOpen}/>

      {/* home design  */}

            {/* school mission */}
      <div className='w-full bg-[#f8f9fa] text-[#780000] h-auto flex flex-col p-5'>
      <h1 className='text-4xl font-bold font-serif w-full text-center'>Welcome To The Website</h1>

      <h2 className='text-3xl font-bold text-[#212529] font-serif mt-20 w-full text-center'>Our Mission</h2>
    
      <div className=' flex bg-blue-50'>
        <img className=' h-1/3 w-1/3 object-cover' src="public/banner.jpg" alt="" />
         <p className='p-8 text-xl leading-loose xl:flex justify-center items-center  font-serif text-center  text-[#6c757d]'>The Group, powered by education and industry professionals as faculty and a balanced curriculum, aims to provide talents in various streams like business, industrial, educational, medical within and outside the nation and prepare graduates with the never ending desire to learn the principles of integrity and professionalism Group envisions itself to be the most preferred Higher Education Institution bridging academia and industry. Its programs are built on the concepts and applications in Management, IT, Medical, Education, Industrial training, Technical and other courses guided by the core values of Integrity, Ethics and Innovation.</p>
 
      </div>
      
      
     
       
      </div>


{/* latest announcements  */}
    <div className='w-full bg-[#dee2e6]  p-4 h-auto md:h-auto'>
    <h1 className='text-[#212529] text-3xl font-bold font-serif w-full text-center'>Latest Announcements</h1>
    
    <div className='w-full  overflow-x-auto place-items-center  grid grid-cols-1 md:grid-cols-10 grid-rows-2 gap-10 gap-x-80 py-3 items-center flex-col justify-around mt-10 '>
      <Event />
       <Event />
        <Event />
         <Event />
          <Event />
                <Event />
       <Event />
        <Event />
         <Event />
          <Event />
                <Event />
       <Event />
        <Event />
         <Event />
          <Event />
                <Event />
       <Event />
        <Event />
         <Event />
          <Event />
      

    </div>
    
    </div>

    {/* achivements  */}

    <div className='w-full h-auto md:h-auto p-4 bg-[#ced4da]'>
     <h1 className='text-[#212529] text-3xl font-bold font-serif w-full text-center'>Achivements</h1>
     {/* <div className='flex md:flex-row flex-col items-center gap-3 justify-around mt-3'> */}
     <div className='grid xl:grid-cols-6 mt-3 md:grid-rows-2 grid-rows-3 md:grid-cols-4 place-items-center gap-4'>

     
      <Achivement/>
       <Achivement/>
        <Achivement/>
         <Achivement/>
          <Achivement/>
           <Achivement/>
           </div>
    </div>

    <div className='w-full h-1/3 p-4   bg-[#adb5bd]'>
     <h1 className='text-[#212529] text-3xl font-bold font-serif w-full text-center'>Quick Links</h1>
      <QuickLinks />
    </div>


    {/* home page end  */}
    </div>

    

    <div className='w-full h-1/3'>
      <Footer />
    </div>
   


   
    

      </>
  )
}

export default Home

// [#f8f9fa]
// [#e9ecef]
// [#dee2e6]
// [#ced4da]
// [#adb5bd]
// [#6c757d]
// [#495057]
// [#343a40]
// [#212529]