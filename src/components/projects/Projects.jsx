import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import "./projects.scss"

const items = [
    {
        id: 1,
        title: "Cinemaven",
        img: "/cinemaven.jpg",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique porro vero id eveniet alias fuga laborum temporibus provident sed asperiores totam nemo, ipsa earum necessitatibus, nulla, quis architecto perspiciatis!"

    },
    {
        id: 1,
        title: "Cinemaven",
        img: "/cinemaven.jpg",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique porro vero id eveniet alias fuga laborum temporibus provident sed asperiores totam nemo, ipsa earum necessitatibus, nulla, quis architecto perspiciatis!"

    },
    {
        id: 1,
        title: "Cinemaven",
        img: "/cinemaven.jpg",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique porro vero id eveniet alias fuga laborum temporibus provident sed asperiores totam nemo, ipsa earum necessitatibus, nulla, quis architecto perspiciatis!"

    },
    {
        id: 1,
        title: "Cinemaven",
        img: "/cinemaven.jpg",
        desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis similique porro vero id eveniet alias fuga laborum temporibus provident sed asperiores totam nemo, ipsa earum necessitatibus, nulla, quis architecto perspiciatis!"

    },

]



const Single = ({ item }) => {
    return (
        <section className='section'>
            {item.title}
        </section>
    )
}

const Projects = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress,
        {
            stiffness: 100,
            damping: 30
        }
    )

    return (
        <div className='projects' ref={ref} >

            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {
                items.map((item) => (
                    <Single item={item} key={item.id} />
                ))
            }
        </div >
    )
}

export default Projects