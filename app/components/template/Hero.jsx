"use client"

import React from 'react'
// import { HERO_CONTENT } from '../../default-data'
// import profilPic from '../assets/Profil.jpg';
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x: -100, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5 , delay: delay},
  }
});

const Hero = ({data}) => {
  return (
    <div className='border-b border-neutral-900 pd-4 lg:mb-35'>
      
      <div className='flex flex-wrap'>
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-centre lg:items-start">
         <motion.h1 
           variants={container(0)}
           initial="hidden"
           animate="visible"
           className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
           {data?.displayName}
         </motion.h1>
         <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"    
            className='bg-gradient-to-r from-red-900 via-red-700 to-red-500 bg-clip-text text-3xl tracking-tight text-transparent'>
            {data?.position}
         </motion.span>
         <motion.p 
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className='text-justify my-2 max-w-xl py-6 font-light tracking-tighter '>
          {data?.about}
         </motion.p>
        </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
           <motion.img 
             initial={{x: 100 , opacity: 0}}
             animate={{x: 0, opacity:1}}
             transition={{duration:1 , delay: 1.2}}
             src={data?.image}
             alt='photo'
             className='rounded-lg shadow-lg lg:max-w-md lg:max-h-[75vh] object-cover ml-auto'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
