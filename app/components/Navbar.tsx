"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
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
    // <nav className='flex fixed items-center backdrop-blur-2xl'>
        <ul className='flex sm:right-2 right-0  md:right-12 top-10 fixed h-auto py-2 shadow-2xl  shadow-sky-400/20 z-1000'>
          {
            navLinks.map(nav=>(
              <li><Link href={nav.path} className={`md:text-xl text-sm  font-medium
              px-[5px] md:px-6  py-3 
              backdrop-blur-xl 
              hover:text-slate-700 ${pathName === nav.path ? "text-transparent bg-clip-text bg-gradient-to-r from-sky-500 border-sky-400 ":"text-slate-500"}
              transition-all duration-300
              border-b-3 hover:border-sky-400  z-500`}>{ nav.title.toUpperCase()}</Link></li>
            ))
          }
        </ul>
      
    // </nav>
  )
}

export default Navbar