import React from 'react';
import { assets } from '../assets/assets.js';
import { PROJECTS } from '../constants/index.js';
import { easeIn, easeInOut, motion } from "motion/react";

const Projects = () => {
  return (
    <div className='pb-4'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className='my-20 text-center text-4xl hover:text-transparent hover:bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 hover:bg-clip-text'
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className='w-full lg:w-1/4'
            >
              <a href={project.link} target='_blank' rel='noopener noreferrer'>
                <img
                  src={project.image}
                  width={project.type === "UX Design" ? 250 : 400}
                  height={project.type === "UX Design" ? 250 : 400}
                  alt={project.title}
                  className='mb-6 rounded hover:scale-110 transition-transform duration-300'
                />
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <div className={`flex items-center flex-wrap flex-shrink-0 ${project.type === "UX Design" ? 'mt-1' : 'mt-11'}`}>
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                  <h6 className='mb-2 font-semibold hover:text-orange-300'>
                    {project.title}
                  </h6>
                </a>
                <span className='ml-2 text-xs text-cyan-300 font-medium rounded bg-neutral-900 mb-2 px-2 py-1'>
                  {project.type}
                </span>
              </div>

              <p className='mb-4 text-neutral-400'>{project.description}</p>

              {/* ✅ Updated Tech Section */}
              <div className='flex flex-wrap gap-2 mt-2'>
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className='rounded-full bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'
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
  );
};

export default Projects;