import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#495057] w-full  py-6 flex flex-col justify-center items-center fixed bottom-0 '>
        <p className='text-[#dee2e6]'><i className="ri-copyright-line"></i> School Name. All Rights Reserved</p>
        <Link className='text-[#ced4da]'>Developed By BytetoBrain</Link>
    </div>
  )
}

export default Footer





// [#f8f9fa]
// [#e9ecef]
// [#dee2e6]
// [#ced4da]
// [#adb5bd]
// [#6c757d]
// [#495057]
// [#343a40]
// [#212529]