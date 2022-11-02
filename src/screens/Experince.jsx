import React from 'react'
import flutter from '../assets/flutter.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import mysql from '../assets/my_sql.png'
const Experince = () => {
    const stacks = [
        {
            id: 1,
            img: flutter,
            title: 'Flutter',
            style: 'shadow-blue-400'
        },
        {
            id: 2,
            img: html,
            title: 'Html',
            style: 'shadow-purple-300'
        },
        {
            id: 3,
            img:  javascript ,
            title: 'JavaScript',
            style: 'shadow-orange-400'
        },
        {
            id: 4,
            img:  react ,
            title: 'React',
            style: 'shadow-gray-400'
        },
        {
            id: 5,
            img:  flutter ,
            title: 'FLutter',
            style: 'shadow-blue-400'
        },
        {
            id: 6,
            img:  tailwind ,
            title: 'Tailwind CSS',
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            img:  mysql ,
            title: 'MySQL',
            style: 'shadow-blue-700'
        },
        {
            id: 8,
            img:  github ,
            title: 'GitHub',
            style: 'shadow-black',
            color: 'fill-black-400'
        },
    ]
    return (
        <div name='experince' className='bg-purple-500 w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <p className='text-4xl font-bold border-b-4 p-2 inline'>Tech Stacks</p>
                    <p className='py-6'>I have experince with these technologies</p>
                </div>
                <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    stacks.map(({ id, img, title, style,color }) => (
                            <div key={id} className={"shadow-lg hover:scale-105 duration-300 py-2 rounded-lg" + " " + style + " " + color}>
                                <img src={img} alt="" size={20} className='p-2 mx-auto justify-center w-40' />
                                <p className='break-words'>
                                    {title}
                                </p>
                            </div>
                    ))
                }
                </div>

            </div>
        </div>
    )
}

export default Experince