import React from 'react'
import { motion } from "framer-motion"
import "./motion.css"

const Motion = ({ move }) => {

    return (
        <div className='box-container'>
            <motion.div
                className='box'
                animate={move}
            >
            </motion.div>
            <motion.div
                className='box rounding'
                animate={{
                    scale: [1, 10, 10, 5, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                }}
                transition={{ delay: 3, duration: 2 }}
            >
            </motion.div>
            <motion.div
                className='box'
                animate={move}
            >
            </motion.div>
        </div>
    )
}

export default Motion