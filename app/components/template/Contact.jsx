"use client"
import React from 'react';
// import { CONTACT } from '../../default-data'
import { FaLinkedin, FaFacebook } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = ({contact}) => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1 
             whileInView={{opacity: 1, y: 0}}
             initial ={{opacity:0 , y: -100}}
             transition={{duration : 0.5}}
             className="my-10 text-center text-4xl">
             Contact
            </motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p 
                 whileInView={{opacity: 1, x: 0}}
                 initial ={{opacity:0 , x: -100}}
                 transition={{duration : 1}}
                 className="my-4">
                 {contact.address}
                </motion.p>
                <motion.p
                 whileInView={{opacity: 1, x: 0}}
                 initial ={{opacity:0 , x: 100}}
                 transition={{duration : 1}} 
                 className="my-4">
                 {contact.phoneNo}
                </motion.p>
                <motion.a 
                    whileInView={{opacity: 1, x: 0}}
                    initial ={{opacity:0 , x: -100}}
                    transition={{duration : 1}}
                    href={`mailto:${contact.email}`} 
                    className="border-b text-neutral-300 hover:text-red-800 transition-colors duration-200">
                    {contact.email}
                </motion.a>
            </div>
            <motion.div 
              whileInView={{opacity: 1, x: 0}}
              initial ={{opacity:0 , x: 100}}
              transition={{duration : 1}}
              className='flex justify-center space-x-6 text-2xl mt-6'>
                <a
                    href='https://www.linkedin.com/in/abderrafi-issami-0b791415/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-neutral-300 hover:text-red-800 transition-colors duration-200'
                >
                    <FaLinkedin />
                </a>
                <a
                    href='https://web.facebook.com/abderrafi.issami'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-neutral-300 hover:text-red-800 transition-colors duration-200'
                >
                    <FaFacebook />
                </a>
            </motion.div>
        </div>
    );
};

export default Contact;



