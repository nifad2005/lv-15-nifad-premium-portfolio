"use client"
import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

function Essence() {
  const socialLinks = [
    {
      id: 0,
      path: "https://linkedin.com/in/nifaduzzaman2005",
      icons: <GrLinkedin/>
    },
    {
      id: 1,
      path: "https://facebook.com/nifad2005",
      icons: <FaFacebook/>
    },
    {
      id: 2,
      path: "https://github.com/nifad2005",
      icons: <FaGithub/>
    },
    {
      id: 3,
      path: "https://twitter.com/nifad2005",
      icons: <FaXTwitter/>
    }
  ];
  return (
    <div className='w-full min-h-44 transition-all duration-300'>
      <div className='
        justify-evenly items-center
        xl:flex-row
        flex flex-col 
        h-auto
        transition-all
        duration-300
      '>
        <motion.div 
          initial={{opacity:0, y:-20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.3}}
        className='rounded-full overflow-hidden h-[350px] aspect-square ring-2 ring-sky-400/80 shadow-2xl shadow-sky-500/40 '>
          <Image 
          className='h-[450px] w-auto cursor-grabbing  brightness-80 hover:brightness-100 blur-[2px] 
            
          hover:blur-[0px] duration-500 hover:scale-[1.02]'
          src={"/images/nifad.jpg"} alt='Nifad Image' height={100} width={100}/>
        </motion.div>
        <div className='flex flex-col gap-2  p-4'>
            
              <motion.h1
                initial={{opacity:0, x:-5, }}
                animate={{opacity:1, x:0}}
                transition={{duration:0.6,delay:0.3*1}}
              className='text-6xl  font-bold  text-transparent bg-gradient-to-r text-shadow-5xl  from-sky-400 to-blue-900/30 bg-clip-text shadow-2xl shadow-sky-700/10'>Md Nifad Uzzaman</motion.h1>
            

            <div>

            <motion.p
               initial={{opacity:0, x:-3, }}
               animate={{opacity:1, x:0}}
               transition={{duration:0.6,delay:0.3+0.3}}
            className='text-slate-500 font-serif  '>
              WebDeveloper | BookLover | PassionateTraveler | Resilient | SpirituallyGrounded.
            </motion.p>
            <motion.p 
               initial={{opacity:0, x:-3, }}
               animate={{opacity:1, x:0}}
               transition={{duration:0.6,delay:0.3+0.3}} className='text-slate-500 font-serif  '>
            
              ~Be the first one.
            </motion.p>     
            </div>

            <ul className='flex gap-8 text-2xl mt-4 shadow-2xl items-center px-4 py-2  shadow-sky-700/5 rounded-2xl'>
              {socialLinks.map(link=><motion.li 
                initial={{opacity:0, x:-20*link.id}}
                animate={{opacity:1, x:0}}
                transition={{duration:0.5, delay:0.3}}
                key={link.id}
              ><Link
                className=' rounded-2xl p hover:text-sky-400/80 transition-all duration-300 text-slate-200/20'
              target='_blank' href={link.path}>{link.icons}</Link></motion.li>)}
            </ul>
            
            <motion.div
            initial={{opacity:0,y:-3}}
            transition={{duration:0.5,delay:3}}
            animate={{opacity:1,y:3}}
            className='mt-12  w-full text-center'>
              <Link className='shadow-lg shadow-sky-500/5 ring hover:ring-sky-400/50 duration-500 transition-all ring-sky-400/10 px-14 flex w-[450px] group justify-evenly items-center py-2 rounded-md font-serif   text-xl hover:text-sky-400/90  text-sky-400/30 ' href={'/essence'}>Full Detaills (essence) 
                <span className='group-hover:translate-x-2 relative transition-all duration-400 text-sky-900/40 group-hover:text-sky-500 flex items-center'
                  
                >
                  <FaArrowRightLong/>
                </span>
              </Link>
            </motion.div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Essence