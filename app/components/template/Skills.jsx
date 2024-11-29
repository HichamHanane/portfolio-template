"use client"
// import React from 'react';
import { motion } from 'framer-motion';
// const skillsArray = ['JavaScript', 'React', 'Node.js', 'CSS', 'Tailwind', 'Git', 'Redux', 'MongoDB', 'TypeScript'];

function Skills({skills , displaySection}) {
  return (
    <div className="border-b border-neutral-900 pb-10" style={{ display: displaySection ? null : 'none' }}>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        My Skills
      </motion.h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
        {skills?.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 rounded-lg shadow-lg cursor-pointer flex items-center justify-center font-medium transition-all duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills;


