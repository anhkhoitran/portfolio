import React from 'react';
import shopaaPic from '../assets/shopaa.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full h-screen text-gray-300 bg-slate-800'>
        <div className='max-w-[500px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
            <div>
                <h1 className='text-4xl font-bold inline border-b-4'>Projects</h1>
            </div>

            <div className='py-10'>
                <div>
                    <img className='rounded-md hover:scale-110 duration-500' src={shopaaPic} alt="shopaa pic" />
                    <p className='text-2xl text-center py-4'>Ecommerce Website</p>
                    <p className='text-justify py-2'>Features: Add products to cart, Remove products from cart, Edit quantity, View product detail. </p>
                    <p className='text-justify py-2'>Technology: ReactJS, Redux, TailwindCSS.</p>
                </div>
                <div>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-2 my-4 mr-4 bg-white font-bold text-gray-700
                         hover:bg-black hover:text-white'>Github</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-2 my-4 bg-white font-bold text-gray-700
                         hover:bg-black hover:text-white'>Demo</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects