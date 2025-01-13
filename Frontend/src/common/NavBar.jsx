import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav>
            <div className='flex justify-around
             items-center gap-40 p-2'>
            <div>
                <h4 className='font-bold'>ONLYLEARN</h4>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <button className='border-2  p-2 rounded-full font-semibold'>LOGIN</button>
                <button className='border-2  p-2 rounded-full font-semibold'>SIGNUP</button>
            </div>
            </div>
           
        </nav>
    </div>
  )
}

export default NavBar


