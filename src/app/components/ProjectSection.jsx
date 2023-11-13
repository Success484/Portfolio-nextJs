'use client'
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projectsData = [
    {
        id: 1,
        title: 'Next.js Portfolio Website',
        description: 'project 1 description',
        image: '/portfolio.jpg',
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/Success484/Portfolio-nextJs.git',
        previewUrl: 'https://success-portfolio-theta.vercel.app/'
    },
    {
        id: 2,
        title: 'Html/Css Calculator Website',
        description: 'project 2 description',
        image: '/calculator.png',
        tag: ["All", "Mobile"],
        gitUrl: 'https://github.com/Success484/Calculator.git',
        previewUrl: 'https://success484.github.io/Calculator/'
    },
    {
        id: 3,
        title: 'Next.js E-commerce Website',
        description: 'project 3 description',
        image: '/ecommerce.jpg',
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/Success484/E-commerce-nextJS.git',
        previewUrl: 'https://wares.vercel.app'
    },
    {
        id: 6,
        title: 'React Weather Website',
        description: 'project 6 description',
        image: '/weathe.png',
        tag: ["All", "Web"],
        gitUrl: 'https://github.com/Success484/Weather-App-React.git',
        previewUrl: 'https://weather-app-react-nu-brown.vercel.app/'
    },
    {
        id: 4,
        title: 'React Blog Website',
        description: 'project 4 description',
        image: '/blog.jpg',
        tag: ["All", "Web"],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 5,
        title: 'React Chat Website',
        description: 'project 5 description',
        image: '/chat.png',
        tag: ["All", "Mobile"],
        gitUrl: '/',
        previewUrl: '/'
    },
]

export default function ProjectSection() {
    const [tag, setTag] = useState('All')
    const { ref, inView } = useInView({ threshold: 0.1 })
    
    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));
        
    return (
        <section>
            <h1 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h1>
            <div className='text-white flex flex-row justify-center items-center py-6 gap-2'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
            </div>
            <ul className='grid md:grid-cols-3 gap-8 md:gap-12' ref={ref}>
                {filteredProjects.map((project, index) => (
                    <motion.li
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                        transition={{ duration: 0.5,  delay: index * 0.4 }}
                        key={project.id}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
