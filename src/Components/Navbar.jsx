import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = (props) => {

    

    
  return (
    <div className='w-full bg-[#dee2e6] h-14  z-10  relative flex items-center justify-between px-5'>
       <div className='flex items-center w-1/3 h-full '>

     
        <button onClick={props.toggleDrawer} id='btnToggleDrawer' className=   {`${props.isDrawerOpen ? 'z-50' : 'z-50'} px-4 py-2  rounded hover:cursor-pointer`}>< i className="text-[#495057] ri-menu-line"></i></button>
        <h2 className='ml-5 font-bold text-2xl text-[#495057]'>{props.pageName}</h2>
          </div>
          <div className=' h-full flex justify-around items-center w-1/3 '>
             <Link to='/contact'>Contact</Link>
              <Link to='/blogs'>Blogs</Link>
             <Link to='/gallery'>Gallery</Link>
            <Link className='p-2 rounded-2xl text-sm bg-[#495057] text-[#dee2e6]' to={'/signup'}>SignUp</Link>
          </div>
    </div>
  )
}

export default Navbar


// [#f8f9fa]
// [#e9ecef]
// [#dee2e6]
// [#ced4da]
// [#adb5bd]
// [#6c757d]
// [#495057]
// [#343a40]
// [#212529]