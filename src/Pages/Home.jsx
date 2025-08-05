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
 <Navbar pageName={"Home"} toggleDrawer={toggleDrawer}/>
    </div>
   
    <div className='bg-red-400 w-full h-screen  absolute'>
 <Drawer isDrawerOpen={isDrawerOpen}/>

      {/* home design  */}

            {/* school mission */}
      <div className='w-full bg-[#780000] text-[#fdf0d5] h-auto md:h-1/2 p-5'>
      <h1 className='text-4xl font-bold font-serif w-full text-center'>Welcome To The Website</h1>

      <h2 className='text-3xl font-bold font-serif mt-20 w-full text-center'>Our Mission</h2>
        <p className='p-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum recusandae architecto harum, repellat sunt ipsam. Ut fugiat rerum dicta neque similique facilis amet consectetur, esse quo, officia dolor natus eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique mollitia architecto sunt itaque soluta. Minima minus deserunt blanditiis, impedit dolorum hic officia libero earum, modi quod, est tenetur quam ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur voluptatum eum vitae fuga suscipit quas maxime, ullam consequatur dolorem harum. Vero, nesciunt eum cupiditate nobis nisi quisquam similique eligendi? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis labore quas, autem consequuntur tempore minus veritatis ut iure! Vitae beatae numquam saepe ducimus reprehenderit id velit repellendus voluptatibus molestias quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, incidunt! Mollitia quo quos voluptate porro beatae dolor magnam, temporibus corrupti, error placeat saepe sapiente asperiores officiis inventore unde modi atque!</p>
      </div>


{/* latest announcements  */}
    <div className='w-full bg-[#c1121f]  p-4 h-auto md:h-1/3'>
    <h1 className='text-[#fdf0d5] text-3xl font-bold font-serif w-full text-center'>Latest Announcements</h1>
    
    <div className='w-full flex md:flex-row gap-3 items-center flex-col justify-around mt-10 '>
      <Event />
       <Event />
        <Event />
         <Event />
          <Event />
      

    </div>
    
    </div>

    {/* achivements  */}

    <div className='w-full h-auto md:h-1/3 p-4 bg-[#780000]'>
     <h1 className='text-[#fdf0d5] text-3xl font-bold font-serif w-full text-center'>Achivements</h1>
     <div className='flex md:flex-row flex-col items-center gap-3 justify-around mt-3'>

     
      <Achivement/>
       <Achivement/>
        <Achivement/>
         <Achivement/>
          <Achivement/>
           <Achivement/>
           </div>
    </div>

    <div className='w-full h-1/3 p-4   bg-[#9a2727]'>
     <h1 className='text-[#fdf0d5] text-3xl font-bold font-serif w-full text-center'>Quick Links</h1>
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