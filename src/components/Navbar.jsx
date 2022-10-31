import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 text-white px-5 bg-black fixed'>
      <div className='text-5xl ml-5 mt-4 font-signature'>Wilson</div>
    
      <ul className='flex'>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>Home</li>
        <li className=''>Home</li>
      </ul>
    
    </div>
  )
}

export default Navbar