"use client"

import { useState, useEffect } from 'react';

function AnimatedCounter({ targetValue, suffix = "", duration = 3000, decimals = 0 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentCount = easeOut * targetValue;

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [targetValue, duration]);

    const formatNumber = (num) => {
        if (decimals > 0) {
            return num.toFixed(decimals);
        }
        return Math.floor(num);
    };

    return (
        <span>
            {formatNumber(count)}{suffix}
        </span>
    );
}


export default function StatsSection() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center px-4 sm:px-8 lg:px-20 py-10" >
            <div className=" py-2  lg:py-16">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                    <AnimatedCounter targetValue={12} suffix="+" />
                </h1>
                <span className="text-base sm:text-lg lg:text-2xl">Years of Experience</span>
            </div>

            <div className=" py-2 lg:py-16">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                    <AnimatedCounter targetValue={1.7} suffix="K+" decimals={1} />
                </h1>
                <span className="text-base sm:text-lg lg:text-2xl">Events Covered</span>
            </div>

            <div className=" py-2 lg:py-16">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                    <AnimatedCounter targetValue={1.5} suffix="K+" decimals={1} />
                </h1>
                <span className="text-base sm:text-lg lg:text-2xl">Satisfied Clients</span>
            </div>

            <div className=" py-2 lg:py-16">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                    <AnimatedCounter targetValue={4.8} decimals={1} />
                </h1>
                <span className="text-base sm:text-lg lg:text-2xl">Customer Rating</span>
            </div>

        </div>
    );
}
