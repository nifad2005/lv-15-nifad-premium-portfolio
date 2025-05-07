"use client";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import Image from "next/image";

export default function AnimatedPinDemo() {
  return (
    <div className=" w-full  flex items-center justify-center  ">
      <PinContainer
        title="Open this"
        href="https://twitter.com/nifad2005"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight  text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  line-clamp-1 text-base text-slate-100">
            Project 1
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-400 line-clamp-2 ">
              This is project about my first work ead fe akldfeoie aeioadl f e Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore tempora totam similique autem, quibusdam ipsa corrupti vel necessitatibus sint unde cum incidunt, facilis ullam velit voluptatem iusto rem omnis?
            </span>
          </div>
           
          <Image alt="eadi" src={"/images/nifad.jpg"} height={100} width={100} className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500  via-purple-500 to-blue-500 overflow-hidden" />
        </div>
      </PinContainer>
    </div>
  );
}











// "use client"
// import { motion, scale } from 'motion/react'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// function ProjectCard() {
//   return (
//     <Link href={`https://www.example.com`} target='_blank'>
//     <motion.div
//     initial={{scale:1}}
//     whileHover={{scale:1.01}}
//     transition={{duration:0.2}}
//     className='h-[300px] bg-gradient-to-r from-green-300/5 group to-sky-700/80 group-hover:to-sky-700 w-[370px] overflow-hidden flex-col flex gap-2 items-center  pt-2 aspect-square  backdrop-blur-2xl rounded-md'>
//         <div className='px-2'>
//             <h1 className='text-3xl font-semibold tracking-tight w-full text-center line-clamp-1 text-sky-500'>Project1 title</h1>
//             <h2 className='float-right text-slate-400  line-clamp-2'>This is description of the project1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minus iure nisi cumque aspernatur quam totam commodi magni, porro ea repellendus nostrum</h2>
//         </div>
        
//         <motion.div
            
//         className='w-full overflow-hidden'>
//             <Image className='w-full h-auto bg-cover blur-[2px] group-hover:grayscale-0 grayscale-25 transition-all duration-300' src={"/images/project.jpg"} alt='kd' height={400} width={400} />
//         </motion.div>
//     </motion.div>
//     </Link>
//   )
// }

// export default ProjectCard