import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import QuickLinks from '../Components/QuickLinks'
import Navbar from '../Components/Navbar'
import Drawer from '../Components/Drawer'
const Careers = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

   const toggleDrawer = () =>{
        setDrawerOpen(!isDrawerOpen)
    }
  return (
    <>
     <div className=' w-full mt-0  bg-red-300 '>
 <Navbar pageName={"Careers"} toggleDrawer={toggleDrawer}/>
    </div>

 <div className='bg-red-400 w-full h-screen  absolute'>
 <Drawer isDrawerOpen={isDrawerOpen}/>
      <div className='w-full bg-[#780000] text-[#fdf0d5] h-2/3 md:h-2/3 p-5'>

    
</div>


{/* design page here  */}



 <div className='w-full h-1/3 p-4   bg-[#9a2727]'>
     <h1 className='text-[#fdf0d5] text-3xl font-bold font-serif w-full text-center'>Quick Links</h1>
      <QuickLinks />
    </div>

   
</div>
    <div className='w-full h-1/3'>
      <Footer />
    </div>

    </>
  )
}

export default Careers