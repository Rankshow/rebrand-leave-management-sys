import React from 'react'
import Logout from '../logout/logout'

const Navbar = ({ setIsAuthenticated }) => {
  return (
    <>
     <div>
      <nav>
        <ul className='flex items-center pl-4 justify-between bg-black '>
         <h1 className='md:text-3xl text-red-600 font-bold md:py-5 py-5'>Leave Management System</h1>
          <div className='flex cursor-pointer text-white md:mr-4 mr-2'>
          <li className='mr-3 font-medium hover:opacity-[.7]'>Home</li>
           <li className=' font-medium hover:opacity-[.7]'><Logout setIsAuthenticated={setIsAuthenticated} /></li>
            </div> 
        </ul>
      </nav>
      {/* <button onClick={() => setIsAdding(true)} className='text-green-700 rounded-md text-2xl tracking-wider hover:opacity-[.7]'><PlusCircleOutlined /></button> */}
    </div>
    </>
  )
}

export default Navbar