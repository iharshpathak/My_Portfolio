import React from 'react'
import { assets } from '../assets/assets.js'
import {CERTIFICATES} from '../constants/index.js'
import { easeIn, easeInOut, motion } from "motion/react"

const Certificates = () => {
  return (
    <div className='pb-4'>
      <motion.h2 whileInView={{opacity: 1, y: 0}}
        initial ={{opacity: 0, y: -100}}
        transition={{duration: 1.5, ease: "easeInOut"}}
        className='my-20 text-center text-4xl hover:text-transparent hover:bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 hover:bg-clip-text'>Certificates</motion.h2>
      <div>
        {CERTIFICATES.map((certificate, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div whileInView={{opacity: 1, x: 0}}
              initial ={{opacity: 0, x: -100}}
              transition={{duration: 1, ease: "easeInOut"}}
              className='ml-[80px] sm:ml-4 lg:ml-0 w-full lg:w-1/4'>
               <img src={certificate.image} width={100} height={100} alt={certificate.title} className='mb-6 rounded hover:scale-105 transition-transform duration-300'/>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className='ml-20 w-full max-w-xl lg:w-3/4 lg:ml-0'
            >
              <div className='flex flex-col flex-shrink-0'>
                  <h6 className='mb-1 font-semibold'>{certificate.title}</h6>

                <h2 className='mb-1  text-neutral-300'>{certificate.company}</h2>

                <a href={certificate.link} target='_blank' rel='noopener noreferrer'>
                  <span className='text-xs text-lime-300 font-medium rounded bg-slate-900 mt-1 px-4 py-2 inline-block hover:shadow-[-5px_5px_22px_-7px_rgba(34,_197,_94,_0.5)] hover:text-lime-200 hover:font-bold hover:cursor-pointer hover:transition-colors duration-500 ease-in-out'>
                    See Credential
                  </span>
                </a>
              </div>

            </motion.div>
          </div>
        ))}

      </div>
    </div>
  )
}
export default Certificates