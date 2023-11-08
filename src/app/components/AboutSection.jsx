'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import TabButton from './TabButton';
import { Link as ScrollLink } from 'react-scroll'; 

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Figma</li>
                <li>Frameworks and Libraries</li>
            </ul>
        )
    },

    {
        title : 'Education',
        id : 'education',
        content : (
            <ul className='list-disc pl-2'>
                <li>Univelsity Acedemy</li>
                <li>University of Lagos</li>
            </ul>
        )
    },

    {
        title : 'Certifications',
        id : 'certifications',
        content : (
            <ul className='list-disc pl-2'>
                <li>Fullstack Developer</li>
            </ul>
        )
    }
];

export default function AboutSection() {
  const [tab, setTab] = useState('skills'); // Default tab is "skills"

  const handleTabChange = (id) => {
    setTab(id);
  }

  return (
    <section id="about-section" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 item-center py-8 px-4 xl:gap-16 sm:py-16 '>
        <Image src='/table.jpg' height={500} width={500} alt='setup' />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
          <p className='text-base lg:text-lg'>I am a frontend web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Next.js, Node.js, HTML, CSS, and Git, and have experience using Figma. I am a quick learner and am always looking to expand my knowledge and skill set. I am a team player and am excited to work with others to create amazing applications. </p>
          <div className='flex flex-row mt-8 gap-2'>
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              Skills
            </TabButton>

            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
              Education
            </TabButton>

            <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>
              Certifications
            </TabButton>
          </div>
          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
}
