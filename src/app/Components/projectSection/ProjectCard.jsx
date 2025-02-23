"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ProjectDetails } from "../../Data";

const ProjectCard = () => {
    const targetRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Mobile: <768px
            setCardWidth(window.innerWidth * (window.innerWidth < 768 ? 0.9 : 0.28)); // 90vw on mobile, 28vw on desktop
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const gap = 24; // Gap between cards
    const totalCards = ProjectDetails.length;
    const totalScrollWidth = (cardWidth + gap) * totalCards - gap;

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", `-${totalScrollWidth - window.innerWidth}px`]
    );

    return (
        <section
            ref={targetRef}
            className={`relative ${
                isMobile ? "h-auto" : "h-[400vh]"
            }`}
        >
            <div className={`sticky top-0 ${isMobile ? "block" : "flex h-screen items-center overflow-hidden"}`}>
                <motion.div
                    style={isMobile ? {} : { x, width: `${totalScrollWidth}px` }}
                    className={`flex ${isMobile ? "flex-col items-center gap-6" : ""}`}
                >
                    {ProjectDetails.map((details, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg border-2 border-purple-700 bg-gray-900 shadow-lg flex-shrink-0 ${
                                isMobile ? "w-[90vw]" : "w-[28vw] mx-3"
                            }`}
                        >
                            <img
                                src={details.imgSrc}
                                alt={details.imgAlt}
                                className="h-40 w-full object-cover rounded-md transition-transform duration-300 hover:scale-105"
                            />
                            <div className="w-full py-3">
                                <h2 className="text-lg font-bold capitalize tracking-wider">{details.title}</h2>
                                <p className="text-sm h-16 text-gray-300">{details.desc}</p>

                                {/* Ensure skills is an array */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {Array.isArray(details.skills) &&
                                        details.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-2 py-1 text-xs font-semibold bg-purple-600 rounded-md"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                </div>

                                <div className="flex gap-3 mt-4">
                                    <a
                                        href={details.source}
                                        target="_blank"
                                        className="px-3 py-1 text-sm font-bold bg-gray-300 text-black rounded-md hover:scale-110"
                                    >
                                        Source Code
                                    </a>
                                    <a
                                        href={details.link}
                                        target="_blank"
                                        className="px-3 py-1 text-sm font-bold bg-gray-300 text-black rounded-md hover:scale-110"
                                    >
                                        View
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectCard;
