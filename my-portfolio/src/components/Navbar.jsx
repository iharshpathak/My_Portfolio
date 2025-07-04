import React from 'react'
import { assets } from '../assets/assets.js'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import { TbBrandHackerrank } from "react-icons/tb";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaBehanceSquare } from "react-icons/fa";

const Navbar = () =>{
  return(
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-12' src="/hpLogo.png" alt='Logo'/>
        </div>
        <div className='m-8 flex items-center justify-center gap-3 ml-14 md:ml-0 md:gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/itsharshpathak" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-slate-300 hover:text-sky-300 transform hover:scale-115 transition duration-300 hover:shadow-[0_0_45px_rgba(69,185,255,0.55)] hover:cursor-pointer'/>
          </a>
          <a href="https://github.com/iharshpathak" target="_blank" rel="noopener noreferrer">
            <FaGithub className='text-slate-300 hover:text-indigo-200 transform hover:scale-115 transition duration-300 hover:shadow-[0_0_45px_rgba(239,241,255,0.55)] hover:cursor-pointer'/>
          </a>
          <a href="https://leetcode.com/iamharshpathak" target="_blank" rel="noopener noreferrer">
            <TbBrandLeetcode className='text-slate-300 hover:text-orange-200 transform hover:scale-115 transition duration-300 hover:shadow-[0_0_45px_rgba(255,225,179,0.55)] hover:cursor-pointer'/>
          </a>
          <a href="https://www.hackerrank.com/profile/iamhp" target="_blank" rel="noopener noreferrer">
            <TbBrandHackerrank className='text-slate-300 hover:text-green-300 transform hover:scale-115 transition duration-300 hover:shadow-[0_0_45px_rgba(46,197,97,0.6)] hover:cursor-pointer'/>
          </a>
          <a href="https://www.behance.net/itsharshpathak" target="_blank" rel="noopener noreferrer">
            <FaBehanceSquare className='text-slate-300 hover:text-blue-300 transform hover:scale-115 transition duration-300 hover:shadow-[0_0_45px_rgba(98,170,255,0.55)] hover:cursor-pointer'/>
          </a>
        </div>
    </nav>
  )
}
export default Navbar;