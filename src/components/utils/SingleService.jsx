import React from 'react';
import { motion } from 'framer-motion';

const SingleService = ({
    index,
    Icon,
    text,
    size = 40
}) => {
    const even = index % 2 === 0
    return (
        <motion.div
            initial={{ x: even ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 10, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className='p-[2px] bg-gradient-to-r from-[#659fc5] to-[#4a5caa] rounded-lg'
        >
            <div className='flex items-center gap-5 p-4 bg-black rounded-lg'>
                <Icon size={size} />
                <p className='text-3xl'>{text}</p>
            </div>
        </motion.div>

    );
};

export default SingleService;