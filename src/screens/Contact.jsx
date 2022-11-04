import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='flex flex-col pt-40 p-4 justify-center max-w-screen mx-auto bg-violet-700 w-full h-full '>
            <div className="lg:pt-40">
                <div className=" mx-auto px-4 sm:py-5 md:py-5">
                    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48 ">
                        <div className="w-full lg:w-6/12 px-4 ">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg rounded-2 ">
                                <div className="flex-auto p-5 lg:p-10 bg-white" >
                                    <h4 className="text-2xl font-semibold">
                                        Contact me
                                    </h4>
                                    <p className="leading-relaxed mt-1 mb-4 gray-500">
                                        Complete this form
                                    </p>
                                    <form action="https://getform.io/f/a8c097e5-6ad3-48b2-8c32-348e4add442e" method='POST' >
                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                htmlFor="full-name"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name='name'
                                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Full Name"
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name='email'
                                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                htmlFor="message"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                rows="4"
                                                name='message-area'
                                                cols="80"
                                                className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Type a message..."
                                            />
                                        </div>
                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="submit"
                                            >
                                                Send Message
                                            </button>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-3xl font-bold inline border-b-4 border-gray-500'
                >Contact</p>
                <p className='py-6'>You can get in touch with me through this form</p>
            </div>
            <div >
                <form action="" className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Please enter your name'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-indigo-700' />
                <input type="text" name='name' placeholder='Please enter your email'
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-indigo-700' />
               <textarea placeholder='Enter your message here' name="mesasge" rows="10" className='p-2 bg-transparent rounded:md border-dark-50 border-2 focus:outline-indigo-700'></textarea>
                <button  className='bg-gray-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 text-white'>
                    Submit
                </button>
                </form>
            </div>
        </div> */}
        </div>
    )
}

export default Contact