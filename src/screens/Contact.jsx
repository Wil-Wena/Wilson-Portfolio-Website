import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-gray-500'
                >Contact</p>
                <p className='py-6'>You can get in touch with me through this form</p>
            </div>
            <div >
                <form action="">
                    <input type="text" name='name' placeholder='Please enter your name'
                    className='p-2 bg-transparent border-1 rounded-md text-white focus:outline-indigo-700' />
                <input type="text" name='name' placeholder='Please enter your name'
                    className='p-2 bg-transparent border-1 rounded-md text-white focus:outline-indigo-700' />
               <textarea placeholder='Enter your message here' name="mesasge" rows="10" className='p-2 bg-transparent rounded:md border-1 focus:outline-indigo-700'></textarea>
                <button  className='bg-gray-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-white'>
                    Submit
                </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact