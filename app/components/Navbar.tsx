"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { HiMiniHome } from "react-icons/hi2";
function Navbar() {
  const navLinks =[
  
    {
      title:"Essence",
      path:"/essence"
    },{
      title:"Crafts",
      path:"/crafts"
    },{
      title:"Principles",
      path:"/principles"
    },{
      title:"Expertise",
      path:"/expertise"
    },{
      title:"Journal",
      path:"/journal"
    },
  ]

  const pathName = usePathname()
  return (
    <nav className='min-h-16  flex items-center'>
        <ul className='flex sm:right-2 right-0  md:right-12 top-10 fixed '>
          {
            navLinks.map(nav=>(
              <li><Link href={nav.path} className={`md:text-xl text-sm  font-medium
              px-[5px] md:px-6  py-3 
              hover:text-slate-700 ${pathName === nav.path ? "text-transparent bg-clip-text bg-gradient-to-r from-sky-500 border-sky-400 ":"text-slate-600"}
              transition-all duration-300
              border-b-3 hover:border-sky-400`}>{ nav.title.toUpperCase()}</Link></li>
            ))
          }
        </ul>
      
    </nav>
  )
}

export default Navbar