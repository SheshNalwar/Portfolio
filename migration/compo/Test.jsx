
import { motion } from "framer-motion"
import "./app.scss";
import { useState } from "react";
const Test = () => {


    const [open, setOpen] = useState(false);

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }
    return (
        <div className="course">
            <motion.div
                className="box"
                variants={variants}
                transition={{ duration: 2 }}
                animate={open ? "visible" : "hidden"}
                // whileHover={{ opacity: 1, scale: 2 }}
                drag
            ></motion.div>
            <button onClick={() => setOpen(prev => !prev)}>Click</button>
        </div >
    );
}

export default Test