"use client"

import React from 'react'
import { motion } from "framer-motion"

import { FaExternalLinkAlt, FaGithub, FaFileDownload } from 'react-icons/fa'

import Link from 'next/link'


const Projects = ({ projects, displaySection }) => {
  //   if (!display) return null

  return (
    <div className="border-b border-neutral-900 pb-10" style={{ display: displaySection ? null : 'none' }}>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 md:px-0">
        {projects?.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-2xl font-bold text-white mb-4 truncate">{project.title}</h2>
              <p className="text-gray-400 mb-4 text-justify">A responsive SaaS platform built with Next.js, Node.js, and Tailwind CSS, enabling users to create, customize, and deploy professional portfolios. Features include editable templates, MongoDB storage, and Vercel deployment after payment integration via Google Pay.</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project?.directLink && (
                  <Link
                    href={project.directLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 text-sm font-medium"
                  >
                    <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                    View
                  </Link>
                )}
                {project?.githubLink && (
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow inline-flex items-center justify-center px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition duration-300 text-sm font-medium"
                  >
                    <FaGithub className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                )}
                {project?.document && (
                  <Link
                    href={project.document.document_url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 text-sm font-medium"
                  >
                    <FaFileDownload className="mr-2 h-4 w-4" />
                    Download
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
export default Projects;


