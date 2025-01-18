import React from 'react'
import NavBar from '../common/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'
const MainLayout = () => {
  return (
    <> 
    <div className='sticky top-0 z-10 backdrop-filter backdrop-blur-lg'>
    <NavBar/>
    </div>
    <div className='bg-gray-100'>
        <Outlet />
    </div>
    <Footer/>
    </>
  )
}

export default MainLayout