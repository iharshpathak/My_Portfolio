import React from 'react'
import { assets } from '../assets/assets.js'
import {EXTRACURRICULARS} from '../constants/index.js'
import { easeIn, easeInOut, motion } from "motion/react"

const Extracurriculars = () => {
  return (
    <div className='pb-4'>
      <motion.h2 whileInView={{opacity: 1, y: 0}}
        initial ={{opacity: 0, y: -100}}
        transition={{duration: 1.5, ease: "easeInOut"}}
        className='my-20 text-center text-4xl hover:text-transparent hover:bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 hover:bg-clip-text'>Extracurriculars</motion.h2>
      <div>
        {EXTRACURRICULARS.map((extracurricular, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className='w-full lg:w-1/4'
            >
              <p className='mb-2 text-sm text-neutral-400 hover:text-amber-400 '>{extracurricular.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <div className='flex items-center flex-wrap flex-shrink-0'>
                <a href={extracurricular.link} target='_blank' rel='noopener noreferrer'>
                  <h6 className='mb-2 font-semibold hover:text-amber-300'>{extracurricular.title}</h6>
                </a>
                <a href={extracurricular.link2} target='_blank' rel='noopener noreferrer'>
                  <h6 className='mb-2 font-semibold hover:text-sky-400'>
                    {extracurricular.name}
                    <span className='ml-2 text-xs text-emerald-300 font-medium rounded bg-neutral-900 px-2 py-1'>
                      View Certificate
                    </span>
                  </h6>
                </a>
              </div>

              <p className='mb-4 text-neutral-400'>{extracurricular.description}</p>

              <div className='flex flex-wrap gap-2 mt-2'>
                {extracurricular.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className='rounded-full bg-neutral-900 px-2 py-1 text-sm font-medium text-violet-500'
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        ))}

      </div>
    </div>
  )
}
export default Extracurriculars