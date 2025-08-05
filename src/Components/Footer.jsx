import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-amber-950 w-full h-14 flex flex-col justify-center items-center fixed bottom-0 '>
        <p className='text-white'><i className="ri-copyright-line"></i> School Name. All Rights Reserved</p>
        <Link className='text-blue-500'>Developed By BytetoBrain</Link>
    </div>
  )
}

export default Footer
