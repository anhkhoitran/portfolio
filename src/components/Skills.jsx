import React from 'react';

import HTMLPic from '../assets/html.png';
import CSSPic from '../assets/css.png';
import JSPic from '../assets/javascript.png';
import ReactPic from '../assets/react.png';
import TailwindPic from '../assets/tailwind.png';
import GithubPic from '../assets/github.png';



const Skills = () => {
  return (
    <div name='skills' className='bg-slate-800 w-full h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center h-full w-full'>
            <div>
                <h1 className='text-4xl font-bold inline border-b-4 '>Skills</h1>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={HTMLPic} alt="html pic" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={CSSPic} alt="css pic" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={JSPic} alt="js pic" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={ReactPic} alt="react pic" />
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={TailwindPic} alt="tailwind pic" />
                    <p className='my-4'>TailwindCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto mt-2' src={GithubPic} alt="github pic" />
                    <p className='my-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills