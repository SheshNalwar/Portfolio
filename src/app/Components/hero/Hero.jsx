"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
    const [loopNumH1, setLoopNumH1] = useState(0);
    const [isDeletingH1, setIsDeletingH1] = useState(false);
    const [textH1, setTextH1] = useState("");
    const [deltaH1, setDeltaH1] = useState(100); // Faster typing speed for H1
    const toRotateH1 = ["Crafting Code with Design Precision"];
    const periodH1 = 1000;

    const [loopNumH2, setLoopNumH2] = useState(0);
    const [isDeletingH2, setIsDeletingH2] = useState(false);
    const [textH2, setTextH2] = useState("");
    const [deltaH2, setDeltaH2] = useState(100); // Faster typing speed for H2
    const toRotateH2 = ["Shesh Nalwar"];
    const periodH2 = 1000;

    useEffect(() => {
        let tickerH1;
        if (loopNumH1 < toRotateH1.length) {
            tickerH1 = setInterval(() => {
                tickH1();
            }, deltaH1);
        }
        return () => {
            clearInterval(tickerH1);
        };
    }, [textH1]);

    useEffect(() => {
        let tickerH2;
        if (loopNumH2 < toRotateH2.length) {
            tickerH2 = setInterval(() => {
                tickH2();
            }, deltaH2);
        }
        return () => {
            clearInterval(tickerH2);
        };
    }, [textH2]);

    const tickH1 = () => {
        let i = loopNumH1 % toRotateH1.length;
        let fullText = toRotateH1[i];
        let updatedText = isDeletingH1
            ? fullText.substring(0, textH1.length - 1)
            : fullText.substring(0, textH1.length + 1);

        setTextH1(updatedText);

        if (!isDeletingH1 && updatedText === fullText) {
            setTimeout(() => {
                setLoopNumH1(loopNumH1 + 1);
            }, periodH1);
        }
    };

    const tickH2 = () => {
        let i = loopNumH2 % toRotateH2.length;
        let fullText = toRotateH2[i];
        let updatedText = isDeletingH2
            ? fullText.substring(0, textH2.length - 1)
            : fullText.substring(0, textH2.length + 1);

        setTextH2(updatedText);

        if (!isDeletingH2 && updatedText === fullText) {
            setTimeout(() => {
                setLoopNumH2(loopNumH2 + 1);
            }, periodH2);
        }
    };

    const textVariants = {
        initial: { opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, staggerChildren: 0.1 },
        },
        scrollButton: {
            opacity: 1,
            y: 20,
            transition: { duration: 2, repeat: Infinity },
        },
    };

    const sliderVariants = {
        initial: { x: 0 },
        animate: {
            x: "-220%",
            transition: { repeat: Infinity, repeatType: "mirror", duration: 10 },
        },
    };

    const imageVariants = {
        initial: { opacity: 0, x: 100 }, // Start off-screen (right) and invisible
        animate: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
    };

    return (
        <div className="sm:h-screen h-4/5 sm:px-32 sm:w-full flex sm:items-center sm:justify-center relative bg-gradient-to-b from-[#0c0c1d] to-[#111132]  sm:py-0 py-5 w-full sm:mt-0 mt-5 sm:flex-row flex-col-reverse 
        ">
            <div className="sm:w-3/5 sm:h-full sm:flex sm:flex-col  sm:justify-center sm:gap-8 px-8 py-5">
                <motion.div
                    className="flex flex-col justify-center gap-8"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2
                        className="sm:text-3xl uppercase font-bold text-purple-600 tracking-widest text-2xl text-center sm:text-start "
                        variants={textVariants}
                    >
                        {textH2}
                    </motion.h2>
                    <motion.h1
                        className="sm:text-5xl text-3xl sm:font-medium font-semibold uppercase tracking-[8px] sm:h-52 h-40 sm:w-xl w-auto text-center sm:text-start overflow-hidden sm:leading-snug leading-snug sm:px-0 px-1 "
                        variants={textVariants}
                    >
                        {textH1}
                    </motion.h1>
                    <motion.div variants={textVariants} className="flex gap-4 items-center justify-center sm:justify-start">
                        <motion.a
                            variants={textVariants}
                            className="sm:px-5 px-3 sm:py-3 py-2 border border-white rounded-lg text-white font-semibold hover:bg-white hover:text-black transition"
                            href="#Projects"
                        >
                            See the Latest Works
                        </motion.a>
                        <motion.a
                            variants={textVariants}
                            className="sm:px-5 px-3 sm:py-3 py-2 border border-white rounded-lg text-white font-semibold hover:bg-white hover:text-black transition scroll-smooth"
                            href="#Contact"
                        >
                            Let's Connect
                        </motion.a>

                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src="/scroll.png"
                        alt="Scroll Icon"
                        className="w-14"
                    />
                </motion.div>
            </div>
            <div className="sm:w-2/5 w-full sm:h-full flex items-center justify-center">
                <motion.img
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    src="/shesh.png"
                    alt="Hero Image"
                    className="sm:h-3/4 h-64 w-64 sm:w-full object-cover rounded-full"
                />
            </div>
        </div>
    );
};

export default Hero;