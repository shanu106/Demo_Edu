import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import QuickLinks from '../Components/QuickLinks'
import Navbar from '../Components/Navbar'
import Drawer from '../Components/Drawer'
const Admissions = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

   const toggleDrawer = () =>{
        setDrawerOpen(!isDrawerOpen)
    }
  return (
    <>
     <div className=' w-full mt-0   '>
 <Navbar pageName={"Admissions"} toggleDrawer={toggleDrawer}/>
    </div>

 <div className=' w-full h-screen  absolute'>
 <Drawer isDrawerOpen={isDrawerOpen}/>
      <div className='w-full bg-[#caf0f8] text-[#fdf0d5] h-2/3 md:h-2/3 p-5'>

    
</div>


{/* design page here  */}



 <div className='w-full h-1/3 p-4   bg-[#ade8f4]'>
     <h1 className='text-[#03045e] text-3xl font-bold font-serif w-full text-center'>Quick Links</h1>
      <QuickLinks />
    </div>

   
</div>
    <div className='w-full h-1/3'>
      <Footer />
    </div>

    </>
  )
}

export default Admissions