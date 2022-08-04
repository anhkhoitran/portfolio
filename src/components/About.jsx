import React from 'react';
import {BsFillPersonFill} from 'react-icons/bs';
import {FaBirthdayCake} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import {AiFillPhone,AiFillMail} from 'react-icons/ai';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-800 text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4'>About</p>
                </div>
            {/* <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                
            </div> */}
            <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-xl'>
                <ul>
                    <li className='flex items-center gap-5 py-1'><BsFillPersonFill size={25}/> Tran Anh Khoi</li>
                    <li className='flex items-center gap-5 py-1'><FaBirthdayCake size={25}/> 25/09/2000</li>
                    <li className='flex items-center gap-5 py-1'><IoMdSchool size={25}/> University of Information Technology</li>
                    <li className='flex items-center gap-5 py-1'><AiFillPhone size={25}/> 0944331968</li>
                    <li className='flex items-center gap-5 py-1'><AiFillMail size={25}/> akitran2509@gmail.com</li>
                </ul>
                <p className='pl-4'>I'm a fresh graduate student and currently looking for a full-time fresher position in web development. 
                    I love to spend time learning new technologies and improving my skills in the future.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About