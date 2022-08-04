import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(true);
  const clickHandler = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center bg-slate-800 text-gray-300 px-4">
      {/* menu bar */}
      <div className="text-2xl font-bold">Portfolio</div>

      <ul className="hidden md:flex">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* icon */}
      <div onClick={clickHandler} className="md:hidden z-10">
        {!nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      {!nav && (
        <div className="absolute bg-slate-800 flex justify-center items-center h-screen w-full top-0 left-0">
          <ul>
          <li  className="py-6 text-4xl"><Link onClick={clickHandler} to="home" smooth={true} duration={500}>Home</Link></li>
          <li  className="py-6 text-4xl"><Link onClick={clickHandler} to="about" smooth={true} duration={500}>About</Link></li>
          <li  className="py-6 text-4xl"><Link onClick={clickHandler} to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li  className="py-6 text-4xl"><Link onClick={clickHandler} to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li  className="py-6 text-4xl"><Link onClick={clickHandler} to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </div>
      )}
      {/* social icon */}
      <div className="hidden lg:flex fixed top-[35%] left-0">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600">
                <a className="flex justify-between items-center w-full" href="https://linkedin.com/in/tran-anh-khoi-3b3969175" 
                target='_blank' rel="noreferrer">
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-neutral-800">
                <a className="flex justify-between items-center w-full" href="https://github.com/anhkhoitran" target='_blank' rel="noreferrer">
                    Github <FaGithub size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-900">
                <a className="flex justify-between items-center w-full" href="mailto:akitran2509@gmail.com" target='_blank' rel="noreferrer">
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-zinc-700">
                <a className="flex justify-between items-center w-full" href="/" target='_blank' rel="noreferrer">
                    My CV <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
