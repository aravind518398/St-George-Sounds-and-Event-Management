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
        { src: assets.carousel_one, alt: "carousel-one" },
        { src: assets.carousel_two, alt: "carousel-two" },
        { src: assets.carousel_three, alt: "carousel-three" },
        { src: assets.carousel_four, alt: "carousel-four" },
        { src: assets.carousel_five, alt: "carousel-five" },   
    ];

    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className=""
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <motion.div
                        initial={{ scale: 1 }}
                        animate={activeIndex === index ? { scale: 1.08 } : { scale: 1 }}
                        transition={{ delay: 0.5, duration: 5 }}
                    >
                        <Image
                            className="h-[50vh]  md:h-[68vh]  object-cover  brightness-80"
                            src={slide.src}
                            alt={slide.alt}
                        />
                    </motion.div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

