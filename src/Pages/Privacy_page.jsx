import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import QuickLinks from '../Components/QuickLinks'
import Navbar from '../Components/Navbar'
import Drawer from '../Components/Drawer'
const Privacy_page = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

   const toggleDrawer = () =>{
        setDrawerOpen(!isDrawerOpen)
    }
  return (
    <>
     <div className=' w-full mt-0  bg-red-300 '>
 <Navbar pageName={"Privacy Policy"} toggleDrawer={toggleDrawer}/>
    </div>

 <div className='bg-red-400 w-full h-screen  absolute'>
 <Drawer isDrawerOpen={isDrawerOpen}/>
      <div className='w-full bg-[#780000] text-[#fdf0d5] h-auto md:h-auto flex flex-wrap gap-4 p-5'>
      <h4 className='text-xl font-bold font-serif w-full text-center'>Terms & conditions</h4>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, temporibus. Facere placeat, eius iusto nostrum eos perspiciatis ullam soluta. Eos eius corrupti repudiandae earum aut nisi natus dolor nam mollitia?
Ipsa sapiente animi maiores cumque itaque quia nostrum, fugiat earum quod ipsam adipisci enim, provident corporis hic totam. Deleniti dolorem aliquam expedita! Recusandae soluta quod praesentium molestiae? Fuga, sed adipisci!
Deserunt nisi cum nam laudantium ab? Dolor id repellat magnam aut possimus quisquam officiis assumenda nostrum asperiores, impedit dolorem expedita, totam iure repellendus ut. Optio sit dolorum provident tenetur qui!
Veritatis culpa eos, temporibus doloremque ut beatae minus rerum qui necessitatibus molestias mollitia a explicabo placeat alias tempore est nemo nostrum accusamus reprehenderit neque. Omnis doloribus iusto nemo modi quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non iure architecto soluta inventore ipsum dicta ratione velit fugit, alias sint tempora, ullam molestias labore excepturi possimus eius at enim.</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, temporibus. Facere placeat, eius iusto nostrum eos perspiciatis ullam soluta. Eos eius corrupti repudiandae earum aut nisi natus dolor nam mollitia?
Ipsa sapiente animi maiores cumque itaque quia nostrum, fugiat earum quod ipsam adipisci enim, provident corporis hic totam. Deleniti dolorem aliquam expedita! Recusandae soluta quod praesentium molestiae? Fuga, sed adipisci!
Deserunt nisi cum nam laudantium ab? Dolor id repellat magnam aut possimus quisquam officiis assumenda nostrum asperiores, impedit dolorem expedita, totam iure repellendus ut. Optio sit dolorum provident tenetur qui!
Veritatis culpa eos, temporibus doloremque ut beatae minus rerum qui necessitatibus molestias mollitia a explicabo placeat alias tempore est nemo nostrum accusamus reprehenderit neque. Omnis doloribus iusto nemo modi quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non iure architecto soluta inventore ipsum dicta ratione velit fugit, alias sint tempora, ullam molestias labore excepturi possimus eius at enim.</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, temporibus. Facere placeat, eius iusto nostrum eos perspiciatis ullam soluta. Eos eius corrupti repudiandae earum aut nisi natus dolor nam mollitia?
Ipsa sapiente animi maiores cumque itaque quia nostrum, fugiat earum quod ipsam adipisci enim, provident corporis hic totam. Deleniti dolorem aliquam expedita! Recusandae soluta quod praesentium molestiae? Fuga, sed adipisci!
Deserunt nisi cum nam laudantium ab? Dolor id repellat magnam aut possimus quisquam officiis assumenda nostrum asperiores, impedit dolorem expedita, totam iure repellendus ut. Optio sit dolorum provident tenetur qui!
Veritatis culpa eos, temporibus doloremque ut beatae minus rerum qui necessitatibus molestias mollitia a explicabo placeat alias tempore est nemo nostrum accusamus reprehenderit neque. Omnis doloribus iusto nemo modi quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non iure architecto soluta inventore ipsum dicta ratione velit fugit, alias sint tempora, ullam molestias labore excepturi possimus eius at enim.</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, temporibus. Facere placeat, eius iusto nostrum eos perspiciatis ullam soluta. Eos eius corrupti repudiandae earum aut nisi natus dolor nam mollitia?
Ipsa sapiente animi maiores cumque itaque quia nostrum, fugiat earum quod ipsam adipisci enim, provident corporis hic totam. Deleniti dolorem aliquam expedita! Recusandae soluta quod praesentium molestiae? Fuga, sed adipisci!
Deserunt nisi cum nam laudantium ab? Dolor id repellat magnam aut possimus quisquam officiis assumenda nostrum asperiores, impedit dolorem expedita, totam iure repellendus ut. Optio sit dolorum provident tenetur qui!
Veritatis culpa eos, temporibus doloremque ut beatae minus rerum qui necessitatibus molestias mollitia a explicabo placeat alias tempore est nemo nostrum accusamus reprehenderit neque. Omnis doloribus iusto nemo modi quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non iure architecto soluta inventore ipsum dicta ratione velit fugit, alias sint tempora, ullam molestias labore excepturi possimus eius at enim.</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, temporibus. Facere placeat, eius iusto nostrum eos perspiciatis ullam soluta. Eos eius corrupti repudiandae earum aut nisi natus dolor nam mollitia?
Ipsa sapiente animi maiores cumque itaque quia nostrum, fugiat earum quod ipsam adipisci enim, provident corporis hic totam. Deleniti dolorem aliquam expedita! Recusandae soluta quod praesentium molestiae? Fuga, sed adipisci!
Deserunt nisi cum nam laudantium ab? Dolor id repellat magnam aut possimus quisquam officiis assumenda nostrum asperiores, impedit dolorem expedita, totam iure repellendus ut. Optio sit dolorum provident tenetur qui!
Veritatis culpa eos, temporibus doloremque ut beatae minus rerum qui necessitatibus molestias mollitia a explicabo placeat alias tempore est nemo nostrum accusamus reprehenderit neque. Omnis doloribus iusto nemo modi quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non iure architecto soluta inventore ipsum dicta ratione velit fugit, alias sint tempora, ullam molestias labore excepturi possimus eius at enim.</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, temporibus. Facere placeat, eius iusto nostrum eos perspiciatis ullam soluta. Eos eius corrupti repudiandae earum aut nisi natus dolor nam mollitia?
Ipsa sapiente animi maiores cumque itaque quia nostrum, fugiat earum quod ipsam adipisci enim, provident corporis hic totam. Deleniti dolorem aliquam expedita! Recusandae soluta quod praesentium molestiae? Fuga, sed adipisci!
Deserunt nisi cum nam laudantium ab? Dolor id repellat magnam aut possimus quisquam officiis assumenda nostrum asperiores, impedit dolorem expedita, totam iure repellendus ut. Optio sit dolorum provident tenetur qui!
Veritatis culpa eos, temporibus doloremque ut beatae minus rerum qui necessitatibus molestias mollitia a explicabo placeat alias tempore est nemo nostrum accusamus reprehenderit neque. Omnis doloribus iusto nemo modi quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non iure architecto soluta inventore ipsum dicta ratione velit fugit, alias sint tempora, ullam molestias labore excepturi possimus eius at enim.</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, temporibus. Facere placeat, eius iusto nostrum eos perspiciatis ullam soluta. Eos eius corrupti repudiandae earum aut nisi natus dolor nam mollitia?
Ipsa sapiente animi maiores cumque itaque quia nostrum, fugiat earum quod ipsam adipisci enim, provident corporis hic totam. Deleniti dolorem aliquam expedita! Recusandae soluta quod praesentium molestiae? Fuga, sed adipisci!
Deserunt nisi cum nam laudantium ab? Dolor id repellat magnam aut possimus quisquam officiis assumenda nostrum asperiores, impedit dolorem expedita, totam iure repellendus ut. Optio sit dolorum provident tenetur qui!
Veritatis culpa eos, temporibus doloremque ut beatae minus rerum qui necessitatibus molestias mollitia a explicabo placeat alias tempore est nemo nostrum accusamus reprehenderit neque. Omnis doloribus iusto nemo modi quae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non iure architecto soluta inventore ipsum dicta ratione velit fugit, alias sint tempora, ullam molestias labore excepturi possimus eius at enim.</p>
    
</div>


{/* design page here  */}





 <div className='w-full h-1/3 p-4   bg-[#9a2727]'>
     <h1 className='text-[#fdf0d5] text-3xl font-bold font-serif w-full text-center'>Quick Links</h1>
      <QuickLinks />
    </div>

   
</div>
    <div className='w-full h-1/3'>
      <Footer />
    </div>

    </>
  )
}

export default Privacy_page