'use client'
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {Link as ScrollLink } from 'react-scroll';
import EmailSection from './EmailSection';


const contact = [
  {
    path:'contact-section',
    title: 'Hire me'
  }
]

export default function HeroSection() {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-12 sm:col-span-7 place-self-center text-center sm:text-left'
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-gray-500 to-secondary-500'>
              Hello, I Am {' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Success',
                1200,
                'Web Developer',
                1200,
                'Frontend Developer',
                1000,
                'UI/UX Designer',
                1200,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6'>
            Hello, welcome. My Name Is Success Obayangbon, And Im a Web Developer and a UI/UX Designer.
          </p>
          <div>
          {contact.map((email) => (
            <ul key={email.title}>
            <ScrollLink
                  to={email.path}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
            <li className='list-none px-6 lg:w-full sm:w-full text-center cursor-pointer py-3 rounded-full mr-4 bg-gradient-to-br from-orange-500 via-gray-600 to-pink-500 hover:bg-slate-200 text-white'>
                {email.title}
            </li>
               </ScrollLink>
               </ul>
               ))}
            <button className='px-1 lg:w-full sm:w-full py-1 rounded-full bg-gradient-to-br from-orange-500 via-gray-600 to-pink-500 hover:bg-gray-600 text-white mt-3'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV
              </span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-12 sm:col-span-5 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:h-[400px] lg:w-[400px] relative'>
            <Image
              src='/IMG_1148.JPG'
              className='rounded-full h-[150px] w-[150px] lg:h-[300px] lg:w-[300px] absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'
              height={300}
              width={300}
              alt='profile-image'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
