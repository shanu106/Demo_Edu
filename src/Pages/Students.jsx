import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import QuickLinks from '../Components/QuickLinks'
import Navbar from '../Components/Navbar'
import Drawer from '../Components/Drawer'
const Students = () => {
  
  return (
    <>


 <div className=' w-full h-full  '>

      <div className='w-full bg-[#f8f9fa] text-[#6c757d] h-auto md:h-auto p-5'>

    <div className='flex text-xl justify-end gap-3'>
    <i className=" border-2 px-1 rounded-full ri-folder-user-line"></i>
    <h1>Rakesh Kumar</h1>
    </div>


    <div className='w-full h-1/2 border-b-1 flex justify-around p-4 flex-col gap-3 md:flex-row  md:flex-wrap '>
      <h4 className='text-3xl font-bold font-serif w-full mb-2 text-[#212529] text-center'>Homework</h4>
    
      <div className='md:w-1/4 md:h-3/4 gap-3 justify-center p-3 cursor-pointer  flex flex-row flex-wrap  bg-[#90a8bf] rounded-2xl'><img className='w-3/4 h-3/4' src="/public/homework (1).png" alt="" />
       <h4 className='text-2xl font-bold w-full text-center text-[#343a40] font-serif'>All </h4>
      </div>
    
     <div className='md:w-1/4 md:h-3/4  gap-3 justify-center p-3 cursor-pointer  flex flex-row flex-wrap  bg-[#9dca9e] rounded-2xl'><img className='w-3/4 h-3/4' src="/public/homework.png" alt="" />
       <h4 className='text-2xl font-bold w-full text-center text-[#344037] font-serif'>Submitted </h4>
      </div>
     
      <div className='md:w-1/4 md:h-3/4 gap-3 justify-center p-3 cursor-pointer  flex flex-row flex-wrap  bg-[#dd7878] rounded-2xl'><img className='w-3/4 h-3/4' src="/public/task.png" alt="" />
       <h4 className='text-2xl font-bold w-full text-center text-[#343a40] font-serif'>Pending </h4>
      </div>
    
    </div>

    <div className='w-full h-1/2 border-b-1 flex justify-between p-4 flex-col gap-3 md:flex-row  md:flex-wrap '>
      <h4 className='text-3xl font-bold font-serif w-full mb-2 text-[#212529] text-center'>Class Notes</h4>
    
      <div className='md:w-1/5 md:h-3/4 gap-3 justify-center p-3 cursor-pointer  flex flex-row flex-wrap  bg-[#90a8bf] rounded-2xl'><img className='w-3/4 h-3/4' src="/public/relativity.png" alt="" />
       <h4 className='text-2xl font-bold w-full text-center text-[#343a40] font-serif'>Physics Notes </h4>
      </div>
    
     <div className='md:w-1/5 md:h-3/4  gap-3 justify-center p-3 cursor-pointer  flex flex-row flex-wrap  bg-[#9dca9e] rounded-2xl'><img className='w-3/4 h-3/4' src="/public/chemistry.png" alt="" />
       <h4 className='text-2xl font-bold w-full text-center text-[#344037] font-serif'>Chemistry Notes </h4>
      </div>
     
      <div className='md:w-1/5 md:h-3/4 gap-3 justify-center p-3 cursor-pointer  flex flex-row flex-wrap  bg-[#dd7878] rounded-2xl'><img className='w-3/4 h-3/4' src="/public/maths.png" alt="" />
       <h4 className='text-2xl font-bold w-full text-center text-[#343a40] font-serif'>Maths Notes </h4>
      </div>

    <div className='md:w-1/5 md:h-3/4  gap-3 justify-center p-3 cursor-pointer  flex flex-row flex-wrap  bg-[#9dca9e] rounded-2xl'><img className='w-3/4 h-3/4' src="/public/letter-a.png" alt="" />
       <h4 className='text-2xl font-bold w-full text-center text-[#344037] font-serif'>Hindi Notes </h4>
      </div>
     
      <div className='md:w-1/5 md:h-3/4 gap-3 justify-center p-3 cursor-pointer  flex flex-row flex-wrap  bg-[#dd7878] rounded-2xl'><img className='w-3/4 h-3/4' src="/public/eng.png" alt="" />
       <h4 className='text-2xl font-bold w-full text-center text-[#343a40] font-serif'>English Notes </h4>
      </div>

    </div>



<div className='w-full h-1/4 flex flex-wrap overflow-x-auto justify-between'>
<h3 className='w-full text-center text-3xl font-bold font-serif'>Result</h3>
<h2>Class : 11<sup>th</sup></h2>
<h2>Section : B</h2>
<table className='  w-full  border-1 text-center border-collapse'>
  <tr className='bg-[#dee2e6]'>
    <th className='border-1  font-serif'>SR No.</th>
    <th className='border-1  font-serif'>Subject Name</th>
    <th className='border-1  font-serif'>Maximum Marks</th>
    <th className='border-1  font-serif'>Minimum Marks</th>
    <th className='border-1  font-serif'>Marks Obtained</th>
    <th className='border-1  font-serif'>Grade</th>
    <th className='border-1  font-serif'>Remark</th>
  </tr>
  <tr>
   <td className='border-1'>1</td>
   <td className='border-1'>Physics</td>
   <td className='border-1'>100</td>
   <td className='border-1'>33</td>
   <td className='border-1'>49</td>
   <td className='border-1'>C</td>
   <td className='border-1'>Pass</td>
  </tr>
  <tr>
   <td className='border-1'>2</td>
   <td className='border-1'>Chemistry</td>
   <td className='border-1'>100</td>
   <td className='border-1'>33</td>
   <td className='border-1'>65</td>
   <td className='border-1'>B</td>
   <td className='border-1'>Pass</td>
  </tr>
  <tr>
   <td className='border-1'>3</td>
   <td className='border-1'>Maths</td>
   <td className='border-1'>100</td>
   <td className='border-1'>33</td>
   <td className='border-1'>87</td>
   <td className='border-1'>A</td>
   <td className='border-1'>Pass</td>
  </tr>
  <tr>
   <td className='border-1'>4</td>
   <td className='border-1'>English</td>
   <td className='border-1'>100</td>
   <td className='border-1'>33</td>
   <td className='border-1'>95</td>
   <td className='border-1'>A+</td>
   <td className='border-1'>Pass</td>
  </tr>
    <tr>
   <td className='border-1'>5</td>
   <td className='border-1'>Physics</td>
   <td className='border-1'>100</td>
   <td className='border-1'>33</td>
   <td className='border-1'>73</td>
   <td className='border-1'>B</td>
   <td className='border-1'>Pass</td>
  </tr>
  <tr>
   <td className='border-1'>6</td>
   <td className='border-1'>Computer</td>
   <td className='border-1'>100</td>
   <td className='border-1'>33</td>
   <td className='border-1'>31</td>
   <td className='border-1'>F</td>
   <td className='border-1 text-[#ec5d5d] border-black'>Fail</td>
  </tr>
  <tr>
    <td className='border-1'></td>
   <td className='border-1'>Total</td>
   <td className='border-1'>600</td>
   <td className='border-1'>198</td>
   <td className='border-1'>400</td>
   <td className='border-1'>C</td>
   <td className='border-1 bg-[#ec5d5d] border-black'>Fail</td>
  </tr>
</table>


</div>


</div>


{/* design page here  */}




    </div>

    </>
  )
}

export default Students




// [#f8f9fa]
// [#e9ecef]
// [#dee2e6]
// [#ced4da]
// [#adb5bd]
// [#6c757d]
// [#495057]
// [#343a40]
// [#212529]