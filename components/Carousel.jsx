"use client";

import { useState } from "react";
import { assets } from "../assets/assets";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        { src: assets.beautifull_photozone, alt: "beautifull_photozone" },
        { src: assets.fresh_rose_flowers, alt: "fresh_rose_flowers" },
        { src: assets.green_garden, alt: "green_garden" },
        { src: assets.sea_vibe, alt: "sea_vibe" },
    ];

    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={activeIndex === index ? { scale: 1.08 } : { scale: 1 }}
                        transition={{ delay:0.5,duration: 5 }}
                    >
                        <Image
                            className="h-[80vh] w-full object-cover brightness-78"
                            src={slide.src}
                            alt={slide.alt}
                        />
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
