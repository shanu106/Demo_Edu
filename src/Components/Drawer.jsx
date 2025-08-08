import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Drawer = (props) => {

const location = useLocation();
   
const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {name: 'Announcements', path: '/announcements'},
    { name: 'Academics', path: '/admissions' },
    { name: 'staff', path: '/staff' },
    { name: 'students', path: '/students' },
    { name: 'Parents', path: '/parents' },
    { name: 'News/Events', path: '/news/events' },
    { name: 'LMS', path: '/LMS' },
    { name: 'Careers', path: '/careers' },
    { name: 'Terms', path: '/terms' },
  ];
   
  return (
    <div id='drawer' className={`${props.isDrawerOpen ?'left-0' : '-left-3/4 md:-left-1/3'} ${props.isDrawerOpen ?'fixed' : 'absolute'}   h-full w-3/4 md:w-1/4  z-10   overflow-y-auto top-0    bg-[#dee2e6]`}>
      <div className='w-full h-1/9  flex text-3xl justify-between p-3  text-[#495057]'>
      
      
      <button><h1>LK</h1></button>
      <button className='hover:cursor-pointer' onClick={props.toggleDrawer}><i className='ri-close-line'></i></button>
      
      </div>
      <div className=' flex flex-col items-center  text-[#495057] justify-start  bg-[#ced4da] w-full h-full' >
            
{navLinks.map(link =>{
  const isActive = location.pathname === link.path

 return (
  <Link className={`${isActive ? 'bg-[#6c757d]' : 'bg-[#ced4da]'} w-full h-18 leading-20 text-center`} key={link.path} to={link.path}> {link.name}</Link>
 )
})}
            <div className='w-full flex flex-col justify-center items-center border-t-2'>
               <p className='text-[#03045e]'><i className="ri-copyright-line"></i> Little Kingdom. All Rights Reserved</p>
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