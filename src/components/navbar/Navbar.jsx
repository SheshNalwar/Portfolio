import React from 'react'
import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
    return (
        <div className='navbar h-16 z-10'>
            {/* <Sidebar /> */}
            <div className="wrapper w-full flex justify-end items-center px-36">
                {/* <motion.span initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Shesh Nalwar</motion.span> */}
                <div className="social w-36 right-0">
                    <a href="https://github.com/SheshNalwar " target="_blank" className='bg-white rounded-2xl h-8 w-8'>
                        <img src="/githubIcon.png" alt="" className='h-full w-full object-cover' />
                    </a>
                    <a href="https://www.linkedin.com/in/sheshnalwar/ " target="_blank" className='bg-white rounded-2xl h-8 w-8'>
                        <img src="/linkedin.png" alt="" className='h-full w-full object-cover' />
                    </a>
                    <a href="https://x.com/NalwarShesh " target="_blank" className='bg-white rounded-2xl h-8 w-8'>
                        <img src="/twitter.png" alt="" className='h-full w-full object-cover' />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Navbar