"use client"
import React from 'react';
import { motion } from "framer-motion";
import Sidebar from '../sidebar/Sidebar';
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../Icons';

const Navbar = () => {
    return (
        <div className='navbar sm:h-16 sm:w-full z-10 h-24 sm:flex sm:flex-row sm:items-center sm:justify-center justify-between'>
            <Sidebar className={`sm:hidden flex`} />
            <div className="wrapper sm:w-full sm:h-full h-full w-1/3 sm:flex sm:justify-end items-center px-36 hidden">
                <div className="social w-36 right-0 flex gap-4">
                    <a href="https://github.com/SheshNalwar" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className="bg-black rounded-2xl h-8 w-8 p-1" />
                    </a>
                    <a href="https://www.linkedin.com/in/sheshnalwar/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="bg-black rounded-2xl h-8 w-8 p-1" />
                    </a>
                    <a href="https://x.com/NalwarShesh" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon className="bg-black rounded-2xl h-8 w-8 p-1" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;