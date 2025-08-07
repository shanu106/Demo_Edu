import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import QuickLinks from '../Components/QuickLinks'
import Footer from '../Components/Footer'

import Drawer from '../Components/Drawer'
import { Link } from 'react-router-dom'

const contact = ({isDrawerOpen, setDrawerOpen}) => {


   const toggleDrawer = () =>{
        setDrawerOpen(!isDrawerOpen)
    }
  return (
    <>
     <div className=' w-full mt-0  '>
 <Navbar pageName={"Contact us"} toggleDrawer={toggleDrawer}/>
    </div>

 <div className=' w-full h-screen  absolute'>
 <Drawer isDrawerOpen={isDrawerOpen}/>
      <div className='w-full bg-[#e9ecef]  text-[#212529] h-2/3 md:h-2/3 p-5'>

<div className='w-full md:h-1/4 flex flex-wrap'>
  <h3 className='w-full text-center text-3xl font-bold font-serif'>" Get in Touch with us ! "</h3>
      <p className='w-full text-center mt-5 text-lg md:text-4xl font-mono'>" We are here to answer your Questions... ! "</p>

</div>
    

<div className=' w-full flex items-center justify-around md:h-3/4 '>


  <div className='w-1/3 h-1/2 rounded-2xl text-xl font-serif text-[#212529] justify-center flex flex-wrap place-items-center  bg-[#adb5bd]'>
  <p>Email : info@school.com</p>
  <p>Contact : 9999999999</p>
  <p>Office Timings : 09:00 - 4:30</p>
  <p>Adress : 5 , jaroli trade center, indore , <br /> MP, 4231234</p>
  </div>
  <div className='w-1/3 text-lg flex flex-col items-center justify-center leading-12 h-1/2 rounded-2xl bg-[#adb5bd]'>

<div className='flex'>
<h5><i className="ri-instagram-line"></i>  </h5>
  <Link to={'/instagram'}> instagram.com/school</Link>
</div>
<div className='flex'>
  <h5><i className="ri-linkedin-fill"></i> </h5>
     <Link to={'/linkdin'}>linkdin.com/school</Link>
</div>
<div className='flex'>
   <h5><i className="ri-facebook-fill"></i> </h5>
   <Link to={'/facebook'}> facebook.com/school</Link>
</div>
<div className='flex'>
  <h5><i className="ri-youtube-fill"></i> </h5>
   <Link to={'/youtube'}> youtube.com/school</Link>

</div>
 
  

  

     

    
  </div>

  
  
</div>







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

export default contact



// [#f8f9fa]
// [#e9ecef]
// [#dee2e6]
// [#ced4da]
// [#adb5bd]
// [#6c757d]
// [#495057]
// [#343a40]
// [#212529]







// <div className='flex flex-wrap  justify-center h md:h-1/3'>

// <h4 className='ml-5 text-2xl  md:text-4xl font-serif mt-4'>Contact Us</h4>
// <div className='flex gap-2 w-full text-center text-lg md:text-2xl font-serif'>
//   <h5>Email : </h5>
//   <Link to={'/email'}> info@school.com</Link>
// </div>
// <div className='flex gap-2 w-full text-lg md:text-2xl font-serif'>
//   <h5>Contact : </h5>
//   <Link to={'/CALL'}> 99911XXXXX</Link>
// </div>
// <div className='flex gap-2 w-full text-lg md:text-2xl font-serif'>
//   <h5>Office Timings  : </h5>
//   <Link to={'/CALL'}> 09:00 - 4:30</Link>
// </div>
// <div className='flex  w-full gap-1 flex-wrap text-lg md:text-2xl font-serif'>
//   <h5>Adress : </h5>
//   <Link to={'/Adress'}> 5 , jaroli trade center, indore , <br /> MP, 4231234</Link>
// </div>
// </div>


// <div className='flex flex-wrap items-center md:h-1/3'>
// <h4 className='ml-5  text-2xl md:text-4xl font-serif mt-8'>Social Media</h4>
// <div className='flex gap-2 w-full text-lg md:text-2xl font-serif'>
//   <h5><i className="ri-instagram-line"></i> : </h5>
//   <Link to={'/instagram'}> instagram.com/school</Link>
// </div>
// <div className='flex gap-2 w-full text-lg md:text-2xl font-serif'>
//   <h5><i className="ri-facebook-fill"></i> : </h5>
//   <Link to={'/facebook'}> facebook.com/school</Link>
// </div>
// <div className='flex w-full gap-2 text-lg md:text-2xl font-serif'>
//   <h5><i className="ri-linkedin-fill"></i> : </h5>
//   <Link to={'/linkdin'}>linkdin.com/school</Link>
// </div>
// </div>
