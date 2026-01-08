"use client"
import React from 'react'
import SingleFeature from '../utils/SingleFeature'
import { CiStar } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { motion } from 'framer-motion';


const Feature = () => {
    return (
        <div className='w-full mt-10 '>
            <div className='flex justify-center items-center gap-2 mb-8'>
                {/* <GoDotFill color='#4a5caa' /> */}
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='border-b-2 text-white border-[#4a5caa] text-4xl'>Feature</motion.p>
            </div>

            <div className='grid grid-cols-3 gap-2'>
                <SingleFeature left Icon={CiStar} text="Outstanding Support for our Clients" />
                <SingleFeature center Icon={MdManageAccounts} text="Your One Stop Shop for All Your Business Management Needs" />
                <SingleFeature right Icon={BiSolidOffer} text="Offering the best value in the industry" />
            </div>
        </div>
    )
}

export default Feature