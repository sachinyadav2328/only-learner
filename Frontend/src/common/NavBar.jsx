import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav>
            <div className='flex justify-around
             items-center gap-40 bg-orange-200 p-2'>
            <div>
                <h4 className=''>ONLY-LEARNERS</h4>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <button className='border-2 border-red-200 p-2 rounded-full'>LOGIN</button>
                <button className='border-2 border-red-200 p-2 rounded-full'>SIGNUP</button>
            </div>
            </div>
           
        </nav>
    </div>
  )
}

export default NavBar