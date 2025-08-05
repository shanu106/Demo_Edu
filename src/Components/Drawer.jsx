import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const drawer = (props) => {


   
   
  return (
    <div id='drawer' className={`${props.isDrawerOpen ?'-translate-x-full' : 'translate-x-0'} h-full w-1/3 relative top-0 left-0  bg-amber-800`}>
      <div className='w-full h-1/5 flex flex-col justify-end pb-5 pl-5'>
        <h3>School Name</h3>
        <p>info@school.com</p>
      </div>
      <div className='flex flex-col items-center justify-between bg-amber-300 w-full h-full' >
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/academics'>Academics</Link>
            <Link to='/admissions'>Admissions</Link>
            <Link to='/staff'>Staff</Link>
            <Link to='/students'>Students</Link>
            <Link to='/parents'>Parents</Link>
            <Link to='/news/events'>News/Events</Link>
            <Link to='/gallery'>Gallery</Link>
            <Link to='/announcements'>Announcements</Link>
            <Link to='/LMS'>LMS</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/alumni'>Alumni</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/terms'>Terms</Link>

        </div>
    </div>
  )
}

export default drawer