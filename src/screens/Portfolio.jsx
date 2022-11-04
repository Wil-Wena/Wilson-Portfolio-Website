import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
// import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: arrayDestruct,
      href: 'https://github.com/Wil-Wena/time_app'
    },
    {
      id: 2,
      src: installNode,
      href: 'https://claim-knust.netlify.app/login'
    },
    {
      id: 3,
      src: navbar
    },
    {
      id: 4,
      src: reactParallax
    },
    {
      id: 5,
      src: reactSmooth
    },
    {
      id: 6,
      src: reactWeather
    }
  ]

  return (
    <div name='portfolio'
      className='bg-purple-400 w-full text-white '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4'>Portfolio</p>
          <p className='py-6'>Have a look at my projects</p>
        </div>



        {/* Card Structure */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            projects.map(({ id, src, href }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md hover:scale-105 duration-200' />
                <div className='flex items-center justify-center'>
                  <a href={href} rel="noreferrer" target="_blank">             
                     <button onClick={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                  </a>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                </div>
              </div>
            ))
          }

        </div>

      </div>

    </div>
  )
}

export default Portfolio