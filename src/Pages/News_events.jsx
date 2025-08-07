import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import QuickLinks from '../Components/QuickLinks'
import Navbar from '../Components/Navbar'
import Drawer from '../Components/Drawer'
const News_events = ({isDrawerOpen, setDrawerOpen}) => {

   const toggleDrawer = () =>{
        setDrawerOpen(!isDrawerOpen)
    }
  return (
    <>
     <div className=' w-full mt-0  '>
 <Navbar pageName={"News-Events"} toggleDrawer={toggleDrawer}/>
    </div>

 <div className=' w-full h-screen  absolute'>
 <Drawer isDrawerOpen={isDrawerOpen}/>
      <div className='w-full bg-[#f8f9fa] text-[#fdf0d5] h-2/3 md:h-2/3 p-5'>

    
</div>


{/* design page here  */}



 <div className='w-full h-full xl:h-[40%] md:h-[60%] p-5  bg-[#adb5bd]'>
     
      <QuickLinks />
    </div>

   
</div>
    <div className='w-full h-1/3'>
      <Footer />
    </div>

    </>
  )
}

export default News_events