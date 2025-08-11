import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
   
   
    <div className='bg-[#495057] w-full  flex flex-col justify-center items-center  '>
   <div className='grid grid-cols-1 w-full   md:grid-cols-3 h-auto bg-[#adb5bd] text-[#343a40]  '>
            
           <div className=' flex flex-col  items-center gap-2 justify-start h-fit '>
            <h3 className='text-2xl font-bold font-serif'>Contact Information</h3>
             <p>Email : info@school.com</p>
      <p>Contact : 9999999999</p>
      <p>Office Timings : 09:00 - 4:30</p>
      <p>Address : 5 , jaroli trade center, indore , MP, 4231234</p>
    
           </div>
                <div className=' flex flex-col  items-center gap-1 md:gap-2 justify-start h-fit '>
              <h3 className='text-2xl font-bold font-serif'>Quick Links</h3>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/academics'>Academics</Link>
                <Link to='/admissions'>Admissions</Link>
                <Link to='/contact'>Contact</Link>
                <Link to={'/privacy'}>Privacy Policy</Link>
                <Link>Terms & conditions</Link>
            </div>
                <div className=' flex flex-col  items-center gap-2 justify-start h-fit '>
                  <h3 className='text-2xl font-bold font-serif'>Social Media</h3>
                  <div className='flex gap-2'>
                  <h5><i className="ri-instagram-line"></i>  <Link to={'/instagram'}> instagram</Link> </h5>
                   
                  </div>
                 
                    <h5><i className="ri-linkedin-fill"></i>  <Link to={'/linkdin'}>linkdin</Link></h5>
                      
                 
                 
                     <h5><i className="ri-facebook-fill"></i>  <Link to={'/facebook'}> facebook</Link></h5>
                    
                 
                 
                    <h5><i className="ri-youtube-fill"></i>  <Link to={'/youtube'}> youtube</Link></h5>
                     
                  
                 
                
                </div>
                
              
                
          
        </div>

        <p className='text-[#dee2e6]'><i className="ri-copyright-line"></i> Little Kingdom. All Rights Reserved</p>
        <Link className='text-[#ced4da]'>Developed By BytetoBrain</Link>
    </div>

     </>
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