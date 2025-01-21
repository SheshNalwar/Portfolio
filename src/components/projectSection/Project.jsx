import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
    return (
        <div className='flex flex-col h-auto w-full'>
            <h2 className='text-5xl space-x-10 tracking-widest font-bold text-white uppercase text-center'>Projects</h2>
            <ProjectCard className={" h-[70vh] w-[30vw] flex flex-col items-center justify-start rounded-3xl"} />
        </div>

    )
}

export default Project