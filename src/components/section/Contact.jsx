"use client"
import { motion } from "framer-motion"

const Contact = () => {




    const contactInfo = [
        {
            title: 'Address',
            description: 'Raikali, Akkelpur, Joypurhat',
        },
        {
            title: 'Division',
            description: 'Rajshahi',
        },
        {
            title: 'Country',
            description: 'Bangladesh',
        },
    ]



    return (

        <div className="w-full max-w-6xl mt-8 text-white">

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true, amount: 0.3 }}
                className='flex justify-center items-center gap-2 mb-8'>
                {/* <GoDotFill color='#4a5caa' /> */}
                <p className='border-b-2 border-[#4a5caa] text-4xl text-white'>Contact</p>
            </motion.div>

            <div className="flex ">

                <div className="w-1/3">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="w-full h-full m-auto flex-col bg-sdf px-5 py-10 flex gap-5">
                        <p className="text-4xl text-slate-400">Ignite Creative Solutions Corp</p>

                        <div className="flex flex-col gap-5">
                            <p className=""><span>Email: </span>hello@ignitecreative.co</p>
                            <p className=""><span>WhatsApp: </span>+123-0000-000</p>
                        </div>
                    </motion.div>
                </div>

                <div className="w-2/3">
                    <motion.div
                        // initial={{ y: 100, opacity: 0 }}
                        // whileInView={{ y: 0, opacity: 1 }}
                        // transition={{ duration: 0.3 }}
                        // viewport={{ once: true, amount: 0.3 }}
                        className=" w-full">

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380511.82523355377!2d-87.73187899999996!3d41.83371054999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sdk!4v1767880793487!5m2!1sen!2sdk" className="w-full h-[400px] " ></iframe>
                    </motion.div>
                </div>

            </div>


        </div>


    )
}

export default Contact