"use client"
import { useState, useEffect } from 'react';

// Reusable Counter Component
function AnimatedCounter({ targetValue, suffix = "", duration = 3000, decimals = 0 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
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

    // Format the number based on decimals
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

// Main Component with all counters
export default function StatsSection() {
    return (
        <div className="flex justify-between mx-2 md:mx-30 my-20">
            <div>
                <h1 className="text-center text-2xl md:text-4xl lg:text-6xl">
                    <AnimatedCounter targetValue={15} suffix="+" />
                </h1>
                <span className="text-center text-1xl lg:text-2xl">Years of Experience</span>
            </div>
            
            <div>
                <h1 className="text-center text-2xl md:text-4xl lg:text-6xl">
                    <AnimatedCounter targetValue={1.7} suffix="K+" decimals={1} />
                </h1>
                <span className="text-center text-1xl lg:text-2xl">Events Covered</span>
            </div>
            
            <div>
                <h1 className="text-center text-2xl md:text-4xl lg:text-6xl">
                    <AnimatedCounter targetValue={1.5} suffix="K+" decimals={1} />
                </h1>
                <span className="text-center text-1xl lg:text-2xl">Satisfied Clients</span>
            </div>
            
            <div>
                <h1 className="text-center text-2xl md:text-4xl lg:text-6xl">
                    <AnimatedCounter targetValue={4.8} decimals={1} />
                </h1>
                <span className="text-center text-1xl lg:text-2xl">Customer Rating</span>
            </div>
        </div>
    );
}