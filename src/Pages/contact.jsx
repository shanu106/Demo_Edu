import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import QuickLinks from '../Components/QuickLinks'
import Footer from '../Components/Footer'

import Drawer from '../Components/Drawer'
import { Link } from 'react-router-dom'

const contact = (props) => {

  const [isDrawerOpen, setDrawerOpen] = useState(false)

   const toggleDrawer = () =>{
        setDrawerOpen(!isDrawerOpen)
    }
  return (
    <>
     <div className=' w-full mt-0  bg-red-300 '>
 <Navbar pageName={"Contact us"} toggleDrawer={toggleDrawer}/>
    </div>

 <div className='bg-red-400 w-full h-screen  absolute'>
 <Drawer isDrawerOpen={isDrawerOpen}/>
      <div className='w-full bg-[#780000] text-[#fdf0d5] h-2/3 md:h-2/3 p-5'>

      <h3 className='w-full text-center text-3xl font-bold font-serif'>" Get in Touch with us ! "</h3>
      <p className='w-full text-center mt-5 text-lg md:text-4xl font-mono'>" We are here to answer your Questions... ! "</p>

<h4 className='ml-5 text-2xl md:text-4xl font-serif mt-4'>Contact Us</h4>

<div className='flex flex-wrap  items-center h md:h-1/3'>
<div className='flex gap-2 w-full text-lg md:text-2xl font-serif'>
  <h5>Email : </h5>
  <Link to={'/email'}> info@school.com</Link>
</div>
<div className='flex gap-2 w-full text-lg md:text-2xl font-serif'>
  <h5>Contact : </h5>
  <Link to={'/CALL'}> 99911XXXXX</Link>
</div>
<div className='flex gap-2 w-full text-lg md:text-2xl font-serif'>
  <h5>Office Timings  : </h5>
  <Link to={'/CALL'}> 09:00 - 4:30</Link>
</div>
<div className='flex  w-full gap-1 flex-wrap text-lg md:text-2xl font-serif'>
  <h5>Adress : </h5>
  <Link to={'/Adress'}> 5 , jaroli trade center, indore , <br /> MP, 4231234</Link>
</div>
</div>
<h4 className='ml-5  text-2xl md:text-4xl font-serif mt-8'>Social Media</h4>

<div className='flex flex-wrap items-center md:h-1/3'>
<div className='flex gap-2 w-full text-lg md:text-2xl font-serif'>
  <h5><i className="ri-instagram-line"></i> : </h5>
  <Link to={'/instagram'}> instagram.com/school</Link>
</div>
<div className='flex gap-2 w-full text-lg md:text-2xl font-serif'>
  <h5><i className="ri-facebook-fill"></i> : </h5>
  <Link to={'/facebook'}> facebook.com/school</Link>
</div>
<div className='flex w-full gap-2 text-lg md:text-2xl font-serif'>
  <h5><i className="ri-linkedin-fill"></i> : </h5>
  <Link to={'/linkdin'}>linkdin.com/school</Link>
</div>
</div>



</div>


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

export default contact