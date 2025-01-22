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
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/youtube.png" alt="" /></a>
                </div>
            </div>
        </div >
    )
}

export default Navbar