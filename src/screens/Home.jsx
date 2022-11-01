import React from 'react'
import HeroImage from "../assets/heroImage.png"
import { FiArrowRightCircle } from "react-icons/fi"
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b via-purple-900 from-purple-700 to-purple-400'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4
      md:flex-row text-white
      '>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold mt-5'>
            I'm a Frontend Developer
          </h2>
          <p className='text-gray-200 py-3 max-w-md'>
            I have two years experinece in frontend Developement.
            Currently, I love to work with technologies on both mobile and web. i.e. ReactJS and Flutter.
          </p>
          <div>
            <button className='group w-fit px-6 py-3 my-2 flex items-center rounded-md 
            bg-gradient-to-r from-purple-600 to-violet-500 cursor-pointer'>
              Portfolio
              <span className='ml-2 group-hover:rotate-45 duration-100'>                
                <FiArrowRightCircle size={20}/>
              </span> 
            </button>
          </div>
        </div>
        <section>
        <img src={HeroImage} alt='My Profile' className='rounded-2xl mx-auto w-2/3 md:w-full pb-8'></img>

        </section>
      </div>

    </div>
  )
}

export default Home