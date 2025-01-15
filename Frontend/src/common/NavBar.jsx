import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className=' bg-gradient-to-b from-green-700 to-white shadow-white '>
            <div className='flex justify-around items-center gap-40 p-2'>
            <div>
                <h1 className='text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-800'>OnlyLearn</h1>
            </div>
            <div className='flex justify-center items-center gap-10 '>
                <button className='bg-white px-4 py-2 rounded-xl font-semibold shadow-xl border  border-green-200 hover:bg-green-50'>LOGIN</button>
                <button className='bg-white px-4 py-2 rounded-xl font-semibold shadow-xl border  border-green-200 hover:bg-green-50'>SIGNUP</button>
            </div>
            </div>
           
        </nav>
    </div>
  )
}

export default NavBar


