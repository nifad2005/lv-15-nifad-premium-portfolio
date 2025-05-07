"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

import { HiMiniHome } from "react-icons/hi2";
function Homebutton() {
    const pathName = usePathname()
  return (
    <>
     {pathName === "/"?null:<Link href={"/"} className=' fixed top-24 shadow-xl shadow-sky-400/10 sm:right-3 h-auto flex justify-center transition-all duration-300 group active:border-sky-500 right-2  md:right-12 w-24 border-b-3 border-slate-600 hover:border-sky-400 py-2 cursor-pointer '>
        <HiMiniHome className='text-slate-700 text-3xl justify-center transition-all duration-300 group-active:text-sky-500  group-hover:text-sky-500'/>
    </Link>
        }
    </>
  )
}

export default Homebutton