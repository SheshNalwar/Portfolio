import React from 'react'
import { ProjectDetails } from '../../Data'
const ProjectCard = () => {
    return (
        <>

            {
                ProjectDetails.map((details, index) => {
                    return (
                        <div key={index} className='border'>
                            <img src={details.imgSrc} alt={details.imgAlt} />
                            <h2>{details.title}</h2>
                            <p>{details.desc}</p>
                            <div>
                                <button>{details.skills.one}</button>
                                <button>{details.skills.two}</button>
                                <button>{details.skills.three}</button>
                            </div>
                            <div>
                                <button>{details.source}</button>
                                <button>{details.link}</button>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default ProjectCard