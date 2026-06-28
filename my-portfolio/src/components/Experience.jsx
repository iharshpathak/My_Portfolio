import React from 'react'
import { assets } from '../assets/assets.js'
import {EXPERIENCES} from '../constants/index.js'
import { easeIn, easeInOut, motion } from "motion/react"

const Experience =()=>{
  return(
    <div className='pb-4'>
      <motion.h2 whileInView={{opacity: 1, y: 0}}
        initial ={{opacity: 0, y: -100}}
        transition={{duration: 1.5, ease: "easeInOut"}}
        className='my-20 text-center text-4xl hover:text-transparent hover:bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 hover:bg-clip-text'>Experience</motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => {
          return (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
              <motion.div whileInView={{opacity: 1, x: 0}}
                initial ={{opacity: 0, x: -100}}
                transition={{duration: 1, ease: "easeInOut"}}
                className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400 hover:text-amber-300'>{experience.year}</p>
              </motion.div>
              <motion.div whileInView={{opacity: 1, x: 0}}
                initial ={{opacity: 0, x: 100}}
                transition={{duration: 1, ease: "easeInOut"}}
                className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-semibold hover:text-cyan-300'>
                  {experience.role} - <span className='text-sm text-purple-100 hover:text-cyan-300'>{experience.company}</span>
                </h6>
                <p className='mb-4 text-neutral-400'>{experience.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-neutral-900 px-3 py-2 text-sm font-medium text-emerald-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
export default Experience
