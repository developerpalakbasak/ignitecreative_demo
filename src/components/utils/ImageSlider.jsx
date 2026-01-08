"use client";

import { useState } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const ImageSlider = () => {
    const images = ["hero_1.jpg", "hero_2.jpg", "hero_3.jpg"];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handlers
    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="max-w-[600px] mx-auto rounded-2xl ">
            {/* Main and thumbnails */}
            <div className="flex flex-col items-center gap-2 w-full">
                {/* Main Image */}

                <div className="relative w-full">
                    <img
                        src={images[currentIndex]}
                        alt=""
                        className="cursor-pointer w-full h-[280px] object-cover rounded-2xl shadow-[0_0_30px_1px_rgba(0,0,0,0.3)]"
                    />

                    {/* <IoIosArrowDropleftCircle
                        size={30}
                        className="absolute top-[50%] hover:text-[#4a5caa] text-slate-400 cursor-pointer"
                        onClick={prevImage}
                    />
                    <IoIosArrowDroprightCircle
                        size={30}
                        className="absolute top-[50%] right-0 hover:text-[#4a5caa] text-slate-400 cursor-pointer"
                        onClick={nextImage}
                    /> */}

                </div>


                {/* Thumbnails */}
                <div className="flex gap-2 mt-2">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt=""
                            className={`cursor-pointer w-[60px] h-[45px] object-cover rounded-xl border-2 ${i === currentIndex ? "border-[#4a5caa]" : "border-transparent"
                                }`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            </div>

            {/* Arrows */}
            <div className="flex justify-center items-center mt-5 gap-5">

            </div>
        </div>
    );
};

export default ImageSlider;
