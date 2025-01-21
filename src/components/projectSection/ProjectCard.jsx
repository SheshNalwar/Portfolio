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
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
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
                            className={`group relative h-[70vh] w-[30vw] overflow-hidden rounded-lg bg-neutral-200 mx-[12px]`}
                        >
                            <img
                                src={details.imgSrc}
                                alt={details.imgAlt}
                                className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 z-10 grid place-content-center bg-gradient-to-t from-black/70 to-transparent p-4">
                                <h2 className="text-xl font-bold text-white">{details.title}</h2>
                                <p className="mt-2 text-sm text-gray-300">{details.desc}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {Object.values(details.skills).map((skill, idx) => (
                                        <button
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium text-white bg-purple-700 rounded-md"
                                        >
                                            {skill}
                                        </button>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <button className="px-3 py-1 text-xs font-medium bg-gray-300 text-black rounded-md">
                                        {details.source}
                                    </button>
                                    <button className="px-3 py-1 text-xs font-medium bg-gray-300 text-black rounded-md">
                                        {details.link}
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
