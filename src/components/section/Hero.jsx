"use client"
import React from 'react'
import Typewriter from '../utils/Typewriter'
import ImageRotator from '../utils/ImageRotator';
import ImageSlider from '../utils/ImageSlider';
import { motion } from 'framer-motion';

const Hero = () => {


    const quotes = ["Inspire Growth", "Nurture Innovation", "Target Excellence"];
    const images = ["hero_1.jpg", "hero_2.jpg", "hero_3.jpg"];


    return (
        <div className='my-15'>
            <div className="flex gap-1">
                <motion.h3
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true }}
                    className="w-1/2 mt-20 text-4xl">
                    <p className='inline'>Done for You Systems That Capture Leads and </p>
                    <span className="bg-gradient-to-r from-[#4a5caa] to-[#659fc5] bg-clip-text text-transparent">
                        Ignite
                    </span>
                    <p>Conversions.</p>

                </motion.h3>

                <motion.span
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true }}
                    className='w-1/2'>
                    {/* <ImageRotator images={images} /> */}
                    <ImageSlider />
                </motion.span>

            </div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true }}
                className='flex flex-col items-center justify-center mt-20 max-w-3xl m-auto'>
                <p className='text-3xl  text-center'>
                    Our Core Values-
                </p>
                <span className='flex'>
                    <Typewriter quotes={quotes} className={"text-3xl "} />
                </span>
            </motion.div>

        </div>
    )
}

export default Hero


