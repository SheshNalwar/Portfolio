import React, { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = ({ className }) => {
    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            },
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    };

    const [open, setOpen] = useState(false);

    return (
        <motion.div
            className={` ${className} relative bg-white text-black flex sm:sr-only  items-center justify-center flex-col`}
            animate={open ? "open" : "closed"} // Toggle animation state
        >
            {/* Sidebar Background and Links */}
            <motion.div
                className=" bg z-50 fixed top-0 left-0 bottom-0 h-screen w-screen bg-white "
                variants={variants} // Apply animation variants
                initial="closed" // Initial state of animation
                animate={open ? "open" : "closed"} // Conditional animation
            >
                <Links setOpen={setOpen} />
            </motion.div>

            {/* Toggle Button */}
            <ToggleButton setOpen={setOpen} />
        </motion.div>

    );
};

export default Sidebar;