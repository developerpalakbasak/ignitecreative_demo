"use client"
import React from 'react'
import { GoDotFill } from 'react-icons/go'
import SingleTestimonial from '../utils/SingleTestimonial'
import Link from 'next/link'
import { motion } from 'framer-motion'


const Testimonials = () => {
    return (
        <div className='mt-10 w-full'>
            <div className='flex justify-center items-center gap-2'>
                {/* <GoDotFill color='#4a5caa' /> */}
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='border-b-2 border-[#4a5caa] text-4xl text-white'>Testimonials</motion.p>
            </div>

            <div className='w-full'>
                <div className='grid grid-cols-3 gap-2 mt-8'>
                    <SingleTestimonial left />
                    <SingleTestimonial center />
                    <SingleTestimonial right />

                </div>

                <span className='flex justify-center mt-5'>
                    <motion.a
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true, amount: 0.1 }}
                        href="/" className='cursor-pointer bg-[#4a5caa] hover:bg-[#659fc5] transition px-4 py-1 rounded-full whitespace-nowrap text-white'>See More</motion.a>
                </span>
            </div>

        </div>
    )
}

export default Testimonials