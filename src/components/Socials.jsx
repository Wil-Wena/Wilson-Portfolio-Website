import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillFilePersonFill } from 'react-icons/bs'

const Socials = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} color='blue' />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} color='black' />
                </>
            ),
            href: 'https://github.com',
        },
        {
            id: 3,
            child: (
                <>
                    Gmail <HiOutlineMail size={30} color='red' />
                </>
            ),
            href: 'https://gmail.com',
        },
        {
            id: 4,
            child:(
                <>
                            Resume <BsFillFilePersonFill size={30} color='blue' />
                        </>
            ),
            href: '',
            style: 'rounded-tr-md',
            download: true,
        }
    ]
    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    links.map(({id,child,href,style,download})=>(
                        <li key={id} className={"flex justify-between items-center w-40 h-14
                        px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200  bg-purple-300
                        " + " "}>
                                <a href='' className='flex justify-between items-center w-full text-white'>
                                    <>
                                        LinkedIn <FaLinkedin size={30} color='blue' />
                                    </>
                                </a>
                            </li>
                    ))
                }
               
            </ul>
        </div>
    )
}

export default Socials