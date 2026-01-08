"use client"
import React from 'react'
import { motion } from 'framer-motion';

const SingleFeature = ({ left, center, right, Icon, text, size = 40 }) => {

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


            className='border p-4 rounded-xl text-white'>
            <span className='w-full flex justify-center mb-2'>
                <Icon size={size} />
            </span>
            <p className='text-2xl'>{text}</p>

        </motion.div>
    )
}

export default SingleFeature