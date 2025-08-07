import React from 'react'
import { Link } from 'react-router-dom'

const QuickLinks = () => {
  return (
    <div className='flex h-full text-[#343a40]  justify-around items-center'>
        <div className=' flex flex-col items-start gap-2 justify-center h-full '>
 <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/academics'>Academics</Link>
            <Link to='/admissions'>Admissions</Link>
        </div>
       <div className=' flex flex-col items-start gap-2 justify-center h-full '>
<Link to='/staff'>Staff</Link>
            <Link to='/students'>Students</Link>
            <Link to='/parents'>Parents</Link>
            <Link to='/news/events'>News/Events</Link>
       </div>
            
            <div className=' flex flex-col items-start gap-2 justify-center h-full '>
<Link to='/gallery'>Gallery</Link>
            <Link to='/announcements'>Announcements</Link>
            <Link to='/LMS'>LMS</Link>
            <Link to='/contact'>Contact</Link>
            </div>
            
            <div className=' flex flex-col items-start gap-2 justify-center h-full '>
<Link to='/alumni'>Alumni</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/careers'>Careers</Link>
            <Link to='/terms'>Terms</Link>
            </div>
            
      
    </div>
  )
}

export default QuickLinks


// [#03045e]
// [#023e8a]
// [#0077b6]
// [#0096c7]
// [#00b4d8] 
// [#48cae4]
// [#90e0ef]
// [#ade8f4]
// [#caf0f8]