"use client"

import React from 'react'
import { motion } from "framer-motion"

import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from 'react-icons/fa'


const Projects = ({ projects}) => {
//   if (!display) return null

  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl text-white"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects?.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neutral-800 hover:bg-neutral-700 text-white p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
            </div>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-red-900 via-red-700 to-red-500 text-white rounded-md hover:bg-purple-700 transition duration-300 mt-auto"
            >
              View Project <FaExternalLinkAlt className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
export default Projects;

// Example projects array


// Usage example
// export default function ProjectsPage() {
//   return <Projects projects={exampleProjects} />
// }