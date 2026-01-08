"use client"
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { IoMdCheckboxOutline } from "react-icons/io";
import SingleService from '../utils/SingleService';
import { CiSearch } from "react-icons/ci";
import { MdOutlineDataThresholding } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { AiOutlineSolution } from "react-icons/ai";
import { motion } from 'framer-motion';


const Service = () => {


  const services = [
    { icon: IoMdCheckboxOutline, text: "Trusted web design agency" },
    { icon: CiSearch, text: "Get found on Google, Yahoo and Bing" },
    { icon: MdOutlineDataThresholding, text: "Generate calls and leads for your services" },
    { icon: TiTick, text: "Nobody is more affordable" },
    { icon: AiOutlineSolution, text: "One stop shop for marketing and web design" },
  ]


  return (
    <div className='w-full'>
      <div className='flex justify-center items-center gap-2'>
        {/* <GoDotFill color='#4a5caa' /> */}
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          viewport={{ once: true, amount: 0.3 }}
          className='border-b-2 border-[#4a5caa]  text-4xl'>What Do We Offer</motion.p>
      </div>

      <div className='mt-8 flex flex-col gap-5'>
        {
          services.map((item, index) => (
            <SingleService key={index} index={index} Icon={item.icon} text={item.text} />
          ))
        }
      </div>
    </div>
  )
}

export default Service