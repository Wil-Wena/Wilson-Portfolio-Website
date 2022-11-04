import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'About'
    },
    {
      id: 3,
      link: 'Portfolio'
    },
    {
      id: 4,
      link: 'Tech Stacks'
    },
    {
      id: 5,
      link: 'Contact'
    },
  ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white px-5 bg-violet-800 shadow-lg fixed'>
      <div className='text-5xl ml-5  font-signature'>Wilson</div>

      <ul className='hidden md:flex'>
        {
          links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'>
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))
        }
      </ul>
      <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />

        }
      </div>
      {
        nav &&
        (
          <ul className='flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-100 
        '>
        {
          links.map(({ id, link }) => (
            <li key={id} className='px-4 cursor-pointer capitalize py-6
            text-4xl'>
            <Link onClick={()=> setNav(!nav)} to={{link}} smooth duration={500}>{link}</Link>

            </li>
          ))
        }
      </ul>
        )
      }
      

    </div>
  )
}

export default Navbar