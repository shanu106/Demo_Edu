import React from 'react'

const Signup = () => {
  return (
    <div className='w-screen h-screen bg-[#669bbc] flex justify-center items-center'>

     <div className=' md:w-1/3 md:h-3/4 w-3/4 pb-2 flex flex-wrap bg-[#fdf0d5] items-center justify-center rounded-2xl '>
     <h2 className='w-full text-center mt-3 text-2xl font-bold font-serif text-[#780000]'>Sign Up</h2>
     
        <div className='flex flex-wrap p-4 gap-4'>

     
          <p className="text-[#780000] w-full">Role</p>
  <label className='flex gap-3 text-[#780000]'>
    <input type="radio" name="gender" value="male" />
    Staff
  </label>
   <label className='flex gap-3 text-[#780000]'>
    <input type="radio" name="gender" value="male" />
    Student
  </label>
   <label className='flex gap-3 text-[#780000]'>
    <input type="radio" name="gender" value="male" />
    Parent
  </label>
    </div>
     <div className='p-8 flex w-full flex-col justify-between gap-8'>
        <input type="text" placeholder='First Name'  className='placeholder:text-[#780000] outline-0 stroke-1 border-b-2 w-full'  />
         <input type="text" placeholder='Last Name'  className='placeholder:text-[#780000] outline-0 stroke-1 border-b-2 w-full'  />
         <input type="email" placeholder='Email'  className='placeholder:text-[#780000] outline-0 stroke-1 border-b-2 w-full'  />
          <input type="number" placeholder='Contact'  className='placeholder:text-[#780000] outline-0 stroke-1 border-b-2 w-full'  />
          <input type="text" placeholder='Address'  className='placeholder:text-[#780000] outline-0 stroke-1 border-b-2 w-full'  />
    
     </div>

     <button className='bg-[#003049] px-4 py-2  text-[#fdf0d5] rounded-lg '>Sign Up</button>
     </div>
    </div>
  )
}

export default Signup
