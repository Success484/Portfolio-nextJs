'use client'
import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ProjectCard({imgUrl, title, description, gitUrl, previewUrl}) {
  return (
    <div id='projects-section'>
      <div className='h-52 md:h-72 rounded-t-xl relative group' 
        style={{background: `url(${imgUrl})`,
        backgroundSize: "cover"}}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link href={gitUrl} className='h-14 w-14 mr-2 relative rounded-full border-2 border-[#adb7be] hover:border-white flex items-center justify-center group/link'>
                <CodeBracketIcon className='h-10 w-10 text-[#adb7be] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </Link>

            <Link href={previewUrl} className='h-14 w-14 relative rounded-full border-2 border-[#adb7be] hover:border-white flex items-center justify-center group/link'>
                <EyeIcon className='h-10 w-10 text-[#adb7be] cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </Link>
        </div>
      </div>
     <div className='text-white mt-3 rounded-b-xl-bg-[#181818] py-6 px-4'>
        <h5 className='font-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#adb7be]'>{description}</p>
     </div>
    </div>
  )
}