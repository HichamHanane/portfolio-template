"use client"

import Link from 'next/link';
import React from 'react'
import {FaInstagram, FaLinkedin} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
// import logo from "../assets/AI_logo.png";

const Navbar = ({logo , linkedin , facebook , instagram}) => {
  return (
    <nav className='mb-5 flex items-center justify-between pb-6'>
      <div className='flex flex-shrink-0 items-center'>
      {/* <img src={"logo"} alt='logo' className='h-20 w-20' /> */}
      <p className="font-inter">{logo}</p>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href={linkedin} target='_blank' rel='noopener noreferrer' className='text-neutral-300 hover:text-red-800 transition-colors duration-200'>
            <FaLinkedin />
          </a>
          <a href={facebook} target='_blank' rel='noopener noreferrer' className='text-neutral-300 hover:text-red-800 transition-colors duration-200'>
            <FaFacebook />
          </a>
          <a href={instagram} target='_blank' rel='noopener noreferrer' className='text-neutral-300 hover:text-red-800 transition-colors duration-200'>
            <FaInstagram />
          </a>
      </div>
    </nav>
  )
}

export default Navbar
