"use client"
import React from 'react'
import { motion } from 'framer-motion'

const SingleTestimonial = ({ left, center, right }) => {

    let initial = { x: 0, y: 0 };

    if (left) initial.x = -100;
    if (right) initial.x = 100;
    if (center) initial.y = 50;

    return (
        <motion.div
            initial={{ ...initial, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}

            className='border p-3 rounded-xl'>
            <p className='text-sm'>We have loved working with Melissa the last year! She’s made a big difference in our business and sincerely cares about her clients success. We highly recommend her.</p>
            <p className='text-xs text-gray-400 mt-3'>- Charity Reiter - Bethesda Natural Health</p>
        </motion.div>
    )
}

export default SingleTestimonial