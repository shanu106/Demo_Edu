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

 <div className=' w-full h-full  absolute'>
 <Drawer toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen}/>
      <div className='w-full bg-[#e9ecef]  text-[#212529] h-auto md:h-2/3 p-5'>

<div className='w-full md:h-1/4 flex flex-wrap'>
  <h3 className='w-full text-center text-3xl font-bold font-serif'>" Get in Touch with us ! "</h3>
      <p className='w-full text-center mt-5 text-lg md:text-4xl font-mono'>" We are here to answer your Questions... ! "</p>

</div>
    

<div className='p-4 w-full  h-3/4 flex   flex-wrap'>
<div className='md:w-1/2 md:h-full rounded-2xl '>
    <h2 className='text-[#780000] font-bold font-serif'>Little Kingdom Public School</h2>
    <p className='font-thin font-serif'>5 , jaroli trade center, indore ,
MP, 4231234</p>


<div className='flex items-center gap-2 mt-5'>
   <i className="border  px-1 text-xl rounded-full ri-contacts-book-2-line"></i>
  <p className='text-lg'> +91 22-456-789</p>
</div>
<div className='flex items-center gap-2 mt-5'>
   <i className="border  px-1 text-xl rounded-full ri-mail-line"></i>
   <div>
 <p className='text-[#780000] font-bold font-serif'>Principal</p>
  <p className='text-lg'> principal@littlekingdom.edu.in</p>
   </div>
  
</div>
<div className='flex items-center gap-2 mt-5'>
   <i className="border  px-1 text-xl rounded-full ri-mail-line"></i>
   <div>
 <p className='text-[#780000] font-bold font-serif'>Vice Principal</p>
  <p className='text-lg'> vp@littlekingdom.edu.in</p>
   </div>
  
</div>
<div className='flex items-center gap-2 mt-5'>
   <i className="border  px-1 text-xl rounded-full ri-mail-line"></i>
   <div>
 <p className='text-[#780000] font-bold font-serif'>Admissions</p>
  <p className='text-lg'> admission@littlekingdom.edu.in</p>
   </div>
  
</div>
<div className='flex items-center gap-2 mt-5'>
   <i className="border  px-1 text-xl rounded-full ri-mail-line"></i>
   <div>
 <p className='text-[#780000] font-bold font-serif'>Main Office</p>
  <p className='text-lg'>office@littlekingdom.edu.in</p>
   </div>
  
</div>

</div>
<div className='md:w-1/2 md:h-full '>
<iframe className='w-full h-full m-3 rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234700.90064963463!2d77.24073995003705!3d23.19932351820722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1754574875020!5m2!1sen!2sin" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"></iframe>

</div>
</div>







</div>

   

{/* design page here  */}



 <div className='w-full h-full xl:h-[40%] relative md:h-[60%] p-5  bg-[#adb5bd]'>
     
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
