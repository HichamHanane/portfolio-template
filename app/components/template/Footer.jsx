"use client"

import React from 'react'
// import { FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='border-t border-neutral-900 py-8'>
      <div className='container mx-auto px-8 flex flex-col items-center justify-center'>
       
        <p className='text-sm text-neutral-400'>&copy; 2024 By: <a  href='https://feizhoucom.com/'  target='_blank' rel='noopener noreferrer' className='text-neutral-300 hover:text-red-800 transition-colors duration-200' >FeizhouCom</a>.</p>
      </div>
    </footer>
  )
}

export default Footer;
