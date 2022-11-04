import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Socials = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} color='blue' />
                </>
            ),
            href: 'https://www.linkedin.com/in/wilson-aballey-44354b1a8/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} color='black' />
                </>
            ),
            href: 'https://github.com/Wil-Wena',

        },
        {
            id: 3,
            child: (
                <>
                    Gmail <FcGoogle size={30} />
                </>
            ),
            href: 'https://mail.google.com/mail/u/0/#inbox',

        },
        {
            id: 4,
            child:(
                <>
                            Resume <BsFillPersonLinesFill size={30} color='gray' />
                        </>
            ),
            href: '/Wilson_Aballey_CV.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ]
    return (
        <div className="lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {
                    links.map(({id, child, href, style, download})=>(
                        <li 
                        key={id} 
                        className={
                            "flex justify-between items-center w-40 h-12 px-3 ml-[-100px] hover:ml-[-4px] hover:rounded-md duration-200  bg-purple-300"
                         + " " + style} >
                                <a href={href} className='flex justify-between items-center text-violet-700 w-full ' download={download} rel="noreferrer" target="_blank">
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