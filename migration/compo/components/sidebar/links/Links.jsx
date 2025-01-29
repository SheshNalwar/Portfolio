import React from "react";
import { motion } from "framer-motion";

const Links = ({ setOpen }) => {
    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1, // Stagger children animations
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1, // Reverse stagger direction when closing
            },
        },
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        },
    };

    const items = ["Homepage", "Skills", "Projects", "Contact", "About"];

    const handleLinkClick = () => {
        setOpen(false); // Close sidebar on link click
    };

    return (
        <motion.div
            className="absolute w-full h-full flex items-center justify-center flex-col gap-5 "
            variants={variants}
            initial="closed" // Initial state for links
            animate="open" // Animate to open state
        >
            {items.map((item) => (
                <motion.a
                    className="text-4xl text-black"
                    href={`#${item}`}
                    onClick={handleLinkClick}
                    key={item}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {item}
                </motion.a>
            ))}
        </motion.div>

    );
};

export default Links;
