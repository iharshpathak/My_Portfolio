import React from 'react'
import { CONTACT } from '../constants/index.js'
import { easeIn, easeInOut, motion } from "motion/react"
import { Toaster, toast } from 'sonner';
import { IoCopyOutline } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";

const Conatct = () =>{
  const url = "https://drive.google.com/uc?export=download&id=1wNQVmlYyW6yAWRoArM8oY1iQWBwuPNT4";

  const DownloadClick = (e) =>{
    toast.success("Download Started!");
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    const textToCopy = "mail.devharsh@gmail.com";
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast.success("Copied email address to clipboard!");
        // Optionally show a success toast or UI feedback
      })
      .catch((err) => {
        alert("Failed to copy: ", err);
      });
  }
  return(
    <div className='pb-20'>
      <Toaster theme="dark"/>
      <motion.h2 whileInView={{opacity: 1, y: 0}}
        initial ={{opacity: 0, y: -100}}
        transition={{duration: 1.5, ease: "easeInOut"}}
        className='my-10 text-center text-4xl hover:text-transparent hover:bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-400 hover:bg-clip-text'>Get in Touch</motion.h2>
      <div className=' mt-10 text-center tracking-tighter'>
        <div className='flex flex-warp gap-8 justify-center sm:gap-8 flex-stack'>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            
              <motion.button onClick={handleClick} whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.5, ease: "easeInOut"}}
                className="group w-[250px] p-5 flex items-center justify-center gap-2 rounded-lg border-2 text-white bg-gray-950 border-transparent shadow-lg shadow-violet-500 hover:font-bold hover:text-transparent hover:bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 hover:bg-clip-text hover:border-slate-950 hover:rounded-xl hover:shadow-purple-400 hover:cursor-pointer transition-colors duration-500 ease-in-out"
              ><IoCopyOutline className="text-xl group-hover:text-purple-200 transition-colors duration-300" />
                <span className='ml-2'> Get My Email</span>
            </motion.button>


            <a href={url} download target="_blank" rel="noopener noreferrer" className="inline-block w-[250px]">
              <motion.button onClick={DownloadClick} whileInView={{opacity: 1, x: 0}}
                  initial={{opacity: 0, x: -100}}
                  transition={{duration: 1.5, ease: "easeInOut"}}
                  className="group w-[250px] p-5 flex items-center justify-center gap-2 rounded-lg border-2 text-white bg-gray-950 border-transparent shadow-lg shadow-violet-500 hover:font-bold hover:text-transparent hover:bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 hover:bg-clip-text hover:border-slate-950 hover:rounded-xl hover:shadow-purple-400 hover:cursor-pointer transition-colors duration-500 ease-in-out"
                ><BsDownload  className="text-xl group-hover:text-purple-200 transition-colors duration-300" />
                  <span className='ml-2'> Download My Resume</span>
              </motion.button>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Conatct