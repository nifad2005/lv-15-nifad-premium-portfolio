"use client"
import { principles } from '@/lib/data'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'


export default function Principle() {
  
  return (
    <div className='mt-10'>
      <span className="text-5xl font-bold bg-gradient-to-r from-10% via-sky-800 via-65%  py-2 shadow-2xl shadow-sky-400/5  w-fit bg-clip-text text-transparent from-sky-400/50 to-sky-900">
        Principles <span className="text-xl">(Core values of my life)</span>
      </span>
      <div className='py-8 px-4 flex flex-col gap-4'>
        {principles.map(principle=>(
          <div className='ring-2 text-xl font-semibold font-sans px-2 py-2 xl:w-1/2 xl:min-w-[700px] w-full rounded-md transition-all duration-300
            ring-sky-400/30 hover:ring-sky-400/60 text-sky-400/20 hover:text-sky-300/30 cursor-grabbing
          '>{principle.principle}</div>
        ))}
      </div>
      <div className='w-full h-auto px-4 flex justify-center'><motion.div
            initial={{opacity:0,y:-3}}
            transition={{duration:0.5,delay:3}}
            animate={{opacity:1,y:3}}
            className='mt-4 text-center'>
              <Link className='shadow-lg shadow-sky-500/5 ring hover:ring-sky-400/50 duration-500 transition-all ring-sky-400/10 px-14 flex w-[450px] group justify-evenly items-center py-2 rounded-md font-serif   text-xl hover:text-sky-400/90  text-sky-400/30 ' href={'/principles'}>More Principles
                <span className='group-hover:translate-x-2 relative transition-all duration-400 text-sky-900/40 group-hover:text-sky-500 flex items-center'
                  
                >
                  <FaArrowRightLong/>
                </span>
              </Link>
            </motion.div></div>
    </div>
  )
}
