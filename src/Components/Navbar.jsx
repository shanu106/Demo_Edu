import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = (props) => {

    

    
  return (
    <div className='w-full bg-amber-500 md:bg-amber-400  z-10  relative flex items-center justify-between px-5'>
       <div className='flex items-center w-1/3 h-full '>

     
        <button onClick={props.toggleDrawer} id='btnToggleDrawer' className='  z-10 px-4 py-2 rounded'>< i className="ri-menu-line"></i></button>
        <h2 className='ml-5 font-bold text-2xl text-blue-700'>{props.pageName}</h2>
          </div>
          <div>
            <Link to={'/signup'}>Login / SignUp</Link>
          </div>
    </div>
  )
}

export default Navbar