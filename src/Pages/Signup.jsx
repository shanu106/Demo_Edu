import React from 'react'

const Signup = ({isFormOpen}) => {
  return (
  

     <div className= {`${isFormOpen ? 'fixed' : 'hidden'} md:w-1/3  right-0 md:h-auto w-3/4 pb-2 bg-[#dee2e6]    shadow-2xl shadow-black  rounded-2xl`} >
    
    
     <div className='flex flex-wrap justify-center'>
     <h2 className='w-full text-center mt-3 text-2xl font-bold font-serif text-[#212529]'>Sign Up</h2>
     
        <div className='flex  flex-wrap p-4 gap-4'>

     
          <p className="] w-full">Role</p>
  <label className='flex gap-3 '>
    <input type="radio" name="gender" value="male" />
    Staff
  </label>
   <label className='flex gap-3 '>
    <input type="radio" name="gender" value="male" />
    Student
  </label>
   <label className='flex gap-3 '>
    <input type="radio" name="gender" value="male" />
    Parent
  </label>
    </div>
     <div className='p-8 flex w-full flex-col justify-between gap-8'>
        <input type="text" placeholder='First Name'  className='placeholder:text-[#212529] outline-0 stroke-1 border-b-2 w-full'  />
         <input type="text" placeholder='Last Name'  className='placeholder:text-[#212529] outline-0 stroke-1 border-b-2 w-full'  />
         <input type="email" placeholder='Email'  className='placeholder:text-[#212529] outline-0 stroke-1 border-b-2 w-full'  />
          <input type="number" placeholder='Contact'  className='placeholder:text-[#212529] outline-0 stroke-1 border-b-2 w-full'  />
          <input type="text" placeholder='Address'  className='placeholder:text-[#212529] outline-0 stroke-1 border-b-2 w-full'  />
    
     </div>

     <button className='bg-[#212529] px-4 py-2   text-[#e9ecef] rounded-lg '>Sign Up</button>


     </div>
     </div>
    
  )
}

export default Signup




// [#f8f9fa]
// [#e9ecef]
// [#dee2e6]
// [#ced4da]
// [#adb5bd]
// [#6c757d]
// [#495057]
// [#343a40]
// [#212529]