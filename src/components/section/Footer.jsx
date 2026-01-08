"use client"
import React from 'react'
import { animate, motion } from "framer-motion";


const Footer = () => {
    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}

            className=' text-white max-w-6xl mt-8  flex justify-center items-center py-3  rounded-2xl'>
            <p>All right reserverd to <span>{" "}</span><span className="bg-gradient-to-r from-[#4a5caa] to-[#659fc5] bg-clip-text text-transparent">
                Ignite Creative
            </span> </p>

        </motion.div>
    )
}

export default Footer