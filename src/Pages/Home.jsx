import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Drawer from '../Components/drawer'

const Home = () => {
  
    const [isDrawerOpen, setDrawerOpen] = useState(false)

    const toggleDrawer = () =>{
        setDrawerOpen(!isDrawerOpen)
    }
  return (
    <div className='bg-red-400 w-full h-full absolute top-0 left-0 flex items-center justify-center'>
        <Navbar toggleDrawer={toggleDrawer}/>
       <Drawer isDrawerOpen={isDrawerOpen}/>
        <h1 className='text-3xl text-white'>Welcome to the Home Page</h1>
        <p className='text-white'>This is the home page content {isDrawerOpen.toString()}.</p>
       
    </div>
  )
}

export default Home