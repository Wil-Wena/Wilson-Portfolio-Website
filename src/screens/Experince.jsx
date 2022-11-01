import React from 'react'
import flutter from '../assets/flutter.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import mysql from '../assets/mysql.png'
const Experince = () => {
    const stacks=[
        {
            id: 1,
            img: {flutter},
            title: 'FLutter'
        },
        {
            id: 2,
            img: {html},
            title: 'Html'
        },
        {
            id: 3,
            img: {javascript},
            title: 'JavaScript'
        },
        {
            id: 4,
            img: {react},
            title: 'React'
        },
        {
            id: 5,
            img: {flutter},
            title: 'FLutter'
        },
        {
            id: 6,
            img: {tailwind},
            title: 'Tailwind CSS'
        },
        {
            id: 7,
            img: {mysql},
            title: 'MySQL'
        },
        {
            id: 8,
            img: {github},
            title: 'GitHub'
        },
    ]
  return (
    <div name='experince' className='bg-purple-500 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            
            <div>
                <p className='text-4xl font-bold border-b-4 p-2 inline'>Experince</p>
                <p>My Tech Stacks</p>
            </div>

            <div>
                <div>
                    <img src={flutter} alt="" />
                    <p>
                       Flutter 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experince