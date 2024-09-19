import "./hero.scss";
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const Hero = () => {
    const [loopNumH1, setLoopNumH1] = useState(0);
    const [isDeletingH1, setIsDeletingH1] = useState(false);
    const [textH1, setTextH1] = useState('');
    const [deltaH1, setDeltaH1] = useState(100); // Faster typing speed for H1
    const toRotateH1 = ["A PASSIONATE DEVELOPER AND UI DESIGNER"];
    const periodH1 = 1000;

    const [loopNumH2, setLoopNumH2] = useState(0);
    const [isDeletingH2, setIsDeletingH2] = useState(false);
    const [textH2, setTextH2] = useState('');
    const [deltaH2, setDeltaH2] = useState(100); // Faster typing speed for H2
    const toRotateH2 = ["SHESH NALWAR"];
    const periodH2 = 1000;

    useEffect(() => {
        let tickerH1;
        if (loopNumH1 < toRotateH1.length) {
            tickerH1 = setInterval(() => {
                tickH1();
            }, deltaH1);
        }
        return () => { clearInterval(tickerH1) };
    }, [textH1]);

    useEffect(() => {
        let tickerH2;
        if (loopNumH2 < toRotateH2.length) {
            tickerH2 = setInterval(() => {
                tickH2();
            }, deltaH2);
        }
        return () => { clearInterval(tickerH2) };
    }, [textH2]);

    const tickH1 = () => {
        let i = loopNumH1 % toRotateH1.length;
        let fullText = toRotateH1[i];
        let updatedText = isDeletingH1 ? fullText.substring(0, textH1.length - 1) : fullText.substring(0, textH1.length + 1);

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
        let updatedText = isDeletingH2 ? fullText.substring(0, textH2.length - 1) : fullText.substring(0, textH2.length + 1);

        setTextH2(updatedText);

        if (!isDeletingH2 && updatedText === fullText) {
            setTimeout(() => {
                setLoopNumH2(loopNumH2 + 1);
            }, periodH2);
        }
    };

    const textVariants = {
        initial: { opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
        scrollButton: { opacity: 1, y: 20, transition: { duration: 2, repeat: Infinity } }
    };

    const sliderVariants = {
        initial: { x: 0 },
        animate: { x: "-220%", transition: { repeat: Infinity, repeatType: "mirror", duration: 10, staggerChildren: 0.1 } }
    };

    const imageVariants = {
        initial: { opacity: 0, x: 100 }, // Start off-screen (right) and invisible
        animate: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } } // Fade in and slide to original position
    };

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="text-container" variants={textVariants} initial="initial" animate="animate" >
                    <motion.h2 variants={textVariants}>{textH2}</motion.h2>
                    <motion.h1 variants={textVariants}>{textH1}</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants} className="btn">See the Latest Works</motion.button>
                        <motion.button variants={textVariants} className="btn">Let's Connect</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="Scroll Icon" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                A FULL STACK DEVELOPER AND DESIGNER
            </motion.div>
            <div className="img-container">
                <motion.img
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    src="/shesh.png"
                    alt="Hero Image"
                />
            </div>
        </div>
    );
};

export default Hero;
