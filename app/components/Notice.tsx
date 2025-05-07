"use client"
import { motion } from 'motion/react'
import React from 'react'

export default function Notice() {
  return (
    <motion.div
        initial={{opacity:0, x:-40}}
        animate={{opacity:1, x:0}}
        transition={{delay:4,duration:3}}
    className=' tracking-wider text-slate-500/90 fixed right-[50%] top-2 '>
        - Make Things <span className='text-sky-500/80 '> Premium.</span>
    </motion.div>
  )
}
