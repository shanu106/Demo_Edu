import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    

    
  return (
    <div className='w-full bg-amber-400 h-1/9 top-0 absolute flex items-center justify-between px-5'>
        <button onClick={props.toggleDrawer} className='bg-amber-600 text-white fixed z-10 px-4 py-2 rounded'>Menu</button>
        <h2>Page Name</h2>
        
    </div>
  )
}

export default Navbar