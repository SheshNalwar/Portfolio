"use client"
import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <div className='flex flex-col pt-5 h-auto w-full bg-[linear-gradient(180deg,_#111132,_#0c0c1d)]'>
            <h2 className='text-5xl space-x-10 tracking-widest font-bold text-white uppercase text-center'>Projects</h2>
            <ProjectCard />
        </div>

    )
}

export default Project