import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-purple-500 text-white '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center break-words'>
                <div className='pb-5'>
                    <p className='text-4xl font-bold border-b-4 inline'>About</p>
                </div>
                <p className='text-xl mt-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores, impedit non nesciunt doloremque temporibus, dicta illo atque provident numquam explicabo esse ipsum laboriosam soluta reprehenderit voluptatum
                    labore accusamus odio.
                            </p>
                <br />
                {/* <p className='text-xl sm:pb-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores, qui, similique quibusdam iusto aperiam dolorem ea praesentium assumenda impedit, hic deserunt! Deleniti illum, pariatur modi placeat voluptatem facilis perspiciatis.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sunt enim tempora id, quis reiciendis velit hic doloremque! Veritatis eos quaerat, error quis atque quam dolores earum. Qui, obcaecati a.

                </p> */}

            </div>

        </div>
    )
}

export default About