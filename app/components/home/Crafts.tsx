"use client";
import React from "react";
import AnimatedPinDemo from "../crafts/ProjectCard";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "motion/react";

// import ProjectCard from '../crafts/ProjectCard'

export default function Crafts() {
  const skills = [
    "Next.js",
    "Type Script",
    "Mongodb",
    "Also Other Essentials"
  ]
  return (
    <div className="min-h-[500px] w-full relative  z-10 mt-40 bg-transparent ">
      <h1 className="text-5xl font-bold bg-gradient-to-r  py-2 shadow-2xl shadow-sky-400/5  w-fit bg-clip-text text-transparent from-sky-400/50 to-sky-900">
        Projects <span className="text-xl">(Only Web Crafts Here)</span>
      </h1>
      <div className="flex gap-4 px-2 text-slate-700 ">
        <Link href={"/expertise"} className="border-b hover:border-dotted hover:text-slate-600 duration-300 transition-all">SKILLS </Link>
        {skills.map(skill=><div className="ring px-2 text-slate-600 rounded-sm">{skill}</div>)}
      </div>
      <div className="w-full  py-4  mb-8 grid lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 transition-all duration-300 gap-y-11 gap-2 grid-cols-1 sm:grid-cols-1 ">
        {Array(4)
          .fill(0)
          .map((index) => (
            <AnimatedPinDemo key={index} />
          ))}
      </div>
      {/* <Link href={"/crafts"} className="px-2">
        <h1 className="ring w-[450px] mx-auto ring-sky-400">See all crafts</h1>
      </Link> */}
      <div className="h-auto w-full   justify-center grid place-items-center ">
        <motion.div
          initial={{ opacity: 0, y: -3 }}
          transition={{ duration: 0.5, delay: 3 }}
          animate={{ opacity: 1, y: 3 }}
          className="  w-full text-center float"
        >
          <Link
            className="shadow-lg shadow-sky-500/5 ring  hover:ring-sky-400/50 duration-500  transition-all ring-sky-400/10 px-14 flex w-[450px] group justify-evenly items-center py-2 rounded-md font-serif   text-xl hover:text-sky-400/90  text-sky-400/30 "
            href={"/crafts"}
          >
            All Crafts
            <span className="group-hover:translate-x-2 relative transition-all duration-400 text-sky-900/40 group-hover:text-sky-500 flex items-center">
              <FaArrowRightLong />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
