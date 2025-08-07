import React from 'react'
import { Link } from 'react-router-dom'

const QuickLinks = () => {
  return (
    <div className='grid grid-cols-1   md:grid-cols-3 h-full text-[#343a40]  '>
        
       <div className=' flex flex-col  items-start gap-2 justify-start h-auto '>
        <h3 className='text-2xl font-bold font-serif'>Contact Information</h3>
         <p>Email : info@school.com</p>
  <p>Contact : 9999999999</p>
  <p>Office Timings : 09:00 - 4:30</p>
  <p>Adress : 5 , jaroli trade center, indore , <br /> MP, 4231234</p>

       </div>
            <div className=' flex flex-col  items-start gap-1 md:gap-2 justify-start h-auto '>
          <h3 className='text-2xl font-bold font-serif'>Quick Links</h3>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/academics'>Academics</Link>
            <Link to='/admissions'>Admissions</Link>
            <Link to='/contact'>Contact</Link>
            <Link to={'/privacy'}>Privacy Policy</Link>
            <Link>Terms & conditions</Link>
        </div>
            <div className=' flex flex-col  items-start gap-2 justify-start '>
              <h3 className='text-2xl font-bold font-serif'>Social Media</h3>
              <div className='flex gap-2'>
              <h5><i className="ri-instagram-line"></i>  <Link to={'/instagram'}> instagram</Link> </h5>
               
              </div>
             
                <h5><i className="ri-linkedin-fill"></i>  <Link to={'/linkdin'}>linkdin</Link></h5>
                  
             
             
                 <h5><i className="ri-facebook-fill"></i>  <Link to={'/facebook'}> facebook</Link></h5>
                
             
             
                <h5><i className="ri-youtube-fill"></i>  <Link to={'/youtube'}> youtube</Link></h5>
                 
              
             
            
            </div>
            
          
            
      
    </div>
  )
}

export default QuickLinks


// [#03045e]
// [#023e8a]
// [#0077b6]
// [#0096c7]
// [#00b4d8] 
// [#48cae4]
// [#90e0ef]
// [#ade8f4]
// [#caf0f8]