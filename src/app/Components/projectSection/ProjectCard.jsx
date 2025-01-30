"use client"
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ProjectDetails } from "../../Data";

const ProjectCard = () => {
    const targetRef = useRef(null);

    // Constants
    const cardWidth = window.innerWidth * 0.3; // 30vw
    const gap = 24; // Gap between cards
    const totalCards = ProjectDetails.length;
    const totalScrollWidth = (cardWidth + gap) * totalCards - gap; // Total width of all cards with gaps

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", `-${totalScrollWidth - window.innerWidth}px`]
    );

    return (
        <section ref={targetRef} className="relative h-[400vh] scroll-smooth">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
                <motion.div
                    style={{
                        x,
                        width: `${totalScrollWidth}px`, // Total width matches the cards + gaps
                    }}
                    className="flex"
                >
                    {ProjectDetails.map((details, index) => (
                        <div
                            key={index}
                            className={`group  h-fit w-svw text-white px-3  overflow-hidden rounded-lg mx-[12px] border-2 border-purple-700`}
                        >
                            <img
                                src={details.imgSrc}
                                alt={details.imgAlt}
                                className=" h-60 w-full transition-transform duration-300 object-contain"
                            />
                            <div className=" w-full py-2">
                                <h2 className="text-xl font-bold text-white capitalize tracking-wider ">{details.title}</h2>
                                <p className="text-base h-20 leading-5 text-gray-300 w-full">{details.desc}</p>
                                <div className="flex flex-wrap gap-2 ">
                                    {Object.values(details.skills).map((skill, idx) => (
                                        <button
                                            key={idx}
                                            className="px-2 w-auto text-sm font-bold rounded-md capitalize cursor-pointer bg-purple-600"
                                        >
                                            {skill}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-2">
                                    <button className="px-3 py-1 text-sm font-bold bg-gray-300 text-black rounded-md hover:scale-110">
                                        <a href={details.source} target="_blank">Source Code</a>
                                    </button>
                                    <button className="px-3 py-1 text-sm font-bold bg-gray-300 text-black rounded-md hover:scale-125">
                                        <a href={details.link} target="_blank">View</a>
                                    </button>
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
