import React from 'react'
import {assets} from '../assets/assets.js'
import {ABOUT_TEXT} from '../constants/index.js'
import { easeIn, motion } from "motion/react"


const About = () =>{
  return(
    <div className='pb-4'>
      <h1 className='my-20 text-center text-4xl text-neutral-200 hover:text-transparent hover:bg-gradient-to-r from-pink-300 to-slate-300 hover:bg-clip-text'>About  
      <span className='text-neutral-500 hover:text-transparent hover:bg-gradient-to-r from-slate-300 to-purple-500 hover:bg-clip-text'> Me</span>
      </h1>
      <div className='flex flex-wrap'>
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 0.5, ease: "easeIn"}}
          className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
          <img className='rounded-2xl hover:-translate-y-3 transition-transform duration-900' width={550} height={500} src="/about.jpg" alt="about"/>
          </div>
        </motion.div>
        <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 0.5, ease: "easeIn"}}
          className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About