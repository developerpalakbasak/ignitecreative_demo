"use client"
import React from 'react'
import CustomSelect from '../utils/CustomSelect'
import { motion } from 'framer-motion'

const StartProject = () => {
    return (
        <div className='w-full mt-8 max-w-2xl mx-auto p-6'>
            <div className='flex justify-center items-center gap-2 mb-8'>
                {/* <GoDotFill color='#4a5caa' /> */}
                <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='border-b-2 text-white border-[#4a5caa] text-4xl'>Ready to Start Your Project?</motion.p>
            </div>

            <div className="  space-y-6">
                {/* Full Name */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}

                    className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 text-white">
                        Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Enter your full name"
                    />
                </motion.div>

                {/* Email */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}

                    className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium  text-white">
                        Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white "
                        placeholder="Enter your email address"
                    />
                </motion.div>

                {/* Phone Number */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-white">
                        Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white "
                        placeholder="Enter your phone number"
                    />
                </motion.div>

                {/* How did you hear about us? */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-white ">
                        How did you hear about us? <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="hear-about"
                        name="hear-about"
                        required
                        className="w-full text-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="Ex: Facebook Ads"
                    />
                </motion.div>
            </div>


            <div className='gap-3 mt-5'>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-white">
                        What type of project are you looking for? <span className="text-red-500">*</span>
                    </label>

                    <CustomSelect />
                </motion.div>

                <motion.span
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className='w-full flex justify-center mt-5'>

                    <button className="cursor-pointer bg-[#4a5caa] hover:bg-[#659fc5] transition px-3.5 py-1 rounded-full whitespace-nowrap text-white">
                        Send
                    </button>
                </motion.span>

            </div>
        </div>
    )
}

export default StartProject