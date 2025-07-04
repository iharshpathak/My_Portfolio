import React from 'react'
import { assets } from '../assets/assets.js'
import {HERO_CONTENT} from '../constants/index.js'
import { easeIn, motion } from "motion/react"


const iconVariants = (duration)=>({
  initial: {y: 0},
  animate: {
    y: 3,
    transition: {
      duration: duration,
        ease: "easeIn",
        repeat: Infinity,
        repeatType: "reverse",
    }
  },
})

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1,
    transition: { duration: 0.5, delay: delay, ease: "easeIn", },
},
});


const Hero =()=>{
  return(
    <div className='pb-4 lg:mb-35'>
      <div className='ml-2  flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1 variants={container(0.5)} initial="hidden" animate="visible" className=' pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Harsh Pathak</motion.h1>
            <motion.span variants={container(1)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
              Full Stack Developer
            </motion.span>
            <motion.p variants={container(1.50)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex justify-center'>
          <motion.img initial={{x: 100, opacity: 0}} animate={{x:0 , opacity: 1}} transition={{duration:0.5, delay: 1.5, ease: "easeIn"}} className='rounded-xl hover:-translate-y-3 transition-transform duration-900' width={600} height={500} src="/hero.jpg" alt="pic"/>
        </div>
        </div>
      </div>
    </div>
    )
}
export default Hero