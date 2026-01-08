"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { animate, motion } from "framer-motion";

const Navbar = () => {

    const navItems = [
        { name: "About", href: "/about" },
        { name: "CRM Access", href: "/crm-access" },
        { name: "Service Plans", href: "/service-plans" },
        { name: "Contact", href: "/contact" },
        // { name: "How It Works", href: "/how-it-works" },
        { name: "Support", href: "/support" }
    ];


    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}

            className='flex w-full py-8 px-12 justify-between gap-5 items-center'>
            <Link href="/" className='flex items-center cursor-pointer'>
                <Image alt='logo' src={"/logo.png"} width={50} height={50} />
                <span>
                    <p className='text-[#4a5caa] font-bold text-2xl tracking-wider mt-5'>IGNITE</p>
                    <p className='text-[#659fc5] font-bold text-base tracking-wider'> CREATIVE</p>
                </span>
            </Link>

            <div className="flex items-center gap-5 flex-wrap justify-end max-w-[70%]">
                {navItems.map((item) => (
                    <Link
                        href={item.href}
                        key={item.href}
                        className="hover:underline hover:text-[#4a5caa] transition text-white whitespace-nowrap"
                    >
                        {item.name}
                    </Link>
                ))}

                <button className="cursor-pointer bg-[#4a5caa] hover:bg-[#659fc5] transition px-3.5 py-1 rounded-full whitespace-nowrap text-white ">
                    Call Now
                </button>
            </div>

        </motion.div>
    )
}

export default Navbar