import React from 'react'
import { FaReact } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaPython } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { BiLogoRedux } from "react-icons/bi";
import { easeIn, easeInOut, motion } from "motion/react"

const Technologies = () =>{

  const iconVariants = (duration)=>({
    initial: {y: -10},
    animate: {
      y: 0,
      transition: {
        duration: duration,
          ease: "easeIn",
          repeat: Infinity,
          repeatType: "reverse",
      }
    },
  })
  return(
    <div className='pb-24'>
      <motion.h2 whileInView={{opacity: 1, y: 0}}
        initial ={{opacity: 0, y: -100}}
        transition={{duration: 1.8, ease: "easeInOut"}}
        
        className='my-20 text-center text-4xl hover:text-transparent hover:bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 hover:bg-clip-text'>Technologies</motion.h2>
      <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial ={{opacity: 0, x: -100}}
        transition={{duration: 1.5, ease: "easeInOut"}}

        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        
        
        
        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
          variants={iconVariants(2.5)} initial="initial" animate="animate"
          className='motion-animate rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-[0_0_30px_rgba(24,255,101,0.55)] hover:cursor-pointer hover:bg-zinc-950'>
          <BiLogoMongodb className='text-7xl text-green-600' />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)} initial="initial" animate="animate"
          className='motion-animate rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-[0_0_30px_rgba(255,255,255,0.55)] hover:cursor-pointer hover:bg-zinc-950'>
          <SiExpress className='text-7xl text-neutral-50' />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" 
          className='motion-animate rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-[0_0_30px_rgba(118,255,252,0.55)] hover:cursor-pointer hover:bg-zinc-950'>
          <FaReact className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" 
          className='motion-animate rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-[0_0_30px_rgba(23,255,66,0.55)] hover:cursor-pointer hover:bg-zinc-950'>
          <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"
          className='motion-animate rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-[0_0_30px_rgba(255,255,255,0.55)] hover:cursor-pointer hover:bg-zinc-950'>
          <SiNextdotjs className='text-7xl text-neutral-50' />
        </motion.div>
        <motion.div variants={iconVariants(1.25)} initial="initial" animate="animate"
          className='motion-animate rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-[0_0_30px_rgba(220,103,255,0.55)] hover:cursor-pointer hover:bg-zinc-950'>
          <BiLogoRedux className='text-7xl text-purple-400' />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" 
          className='motion-animate rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-[0_0_30px_rgba(23,149,255,0.55)] hover:cursor-pointer hover:bg-zinc-950'>
          <GrMysql   className='text-7xl text-cyan-700' />
        </motion.div>
        <motion.div variants={iconVariants(2.9)} initial="initial" animate="animate" 
          className='motion-animate rounded-2xl border-4 border-neutral-800 p-4 hover:shadow-[0_0_30px_rgba(255,168,23,0.55)] hover:cursor-pointer hover:bg-zinc-950'>
          <FaJava  className='text-7xl text-orange-400' />
        </motion.div>
      </motion.div>
    </div>
  )
}
export default Technologies