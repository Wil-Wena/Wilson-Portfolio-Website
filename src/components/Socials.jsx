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
            href: '/Wilson_Aballey_CV.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {
                    links.map(({id, child, href, style, download})=>(
                        <li 
                        key={id} 
                        className={
                            "flex justify-between items-center w-40 h-12 px-3 ml-[-100px] hover:ml-[-4px] hover:rounded-md duration-200  bg-purple-300"
                         + " " + style} >
                                <a href={href} className='flex justify-between items-center w-full text-white' download={download} rel="noreferrer" target="_blank">
                                    <>
                                        {child}
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