import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Drawer = (props) => {


   
   
  return (
    <div id='drawer' className={`${props.isDrawerOpen ?'left-0' : '-left-1/3'} ${props.isDrawerOpen ?'fixed' : 'absolute'}   h-full w-3/4 md:w-1/3  z-10   overflow-y-auto    bg-[#dee2e6]`}>
      <div className='w-full h-1/9 flex flex-col justify-end pb-5 pl-5 text-[#495057]'>
        <h3>School Name</h3>
        <p>info@school.com</p>
      </div>
      <div className='flex flex-col items-center text-[#495057] justify-between bg-[#ced4da] w-full h-full' >
            <Link className='mt-3' to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/academics'>Academics</Link>
            <Link to='/admissions'>Admissions</Link>
            <Link to='/staff'>Staff</Link>
            <Link to='/students'>Students</Link>
            <Link to='/parents'>Parents</Link>
            <Link to='/news/events'>News/Events</Link>
            <Link to='/announcements'>Announcements</Link>
            <Link to='/LMS'>LMS</Link>
            <Link to='/alumni'>Alumni</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/terms'>Terms</Link>

            <div className='w-full flex flex-col justify-center items-center border-t-2'>
               <p className='text-[#03045e]'><i className="ri-copyright-line"></i> School Name. All Rights Reserved</p>
                      <Link className='text-[#023e8a]'>Developed By BytetoBrain</Link>
            </div>

        </div>
    </div>
  )
}

export default Drawer


// [#f8f9fa]
// [#e9ecef]
// [#dee2e6]
// [#ced4da]
// [#adb5bd]
// [#6c757d]
// [#495057]
// [#343a40]
// [#212529]