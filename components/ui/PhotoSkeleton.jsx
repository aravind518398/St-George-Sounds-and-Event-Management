import React from 'react';
import Image from 'next/image';

const PhotoSkeleton = () => {
    return (
        <div className="mx-4 py-8">
            <h1 className="text-3xl font-bold text-center text-purple-800/70" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>Event Management Photos</h1>
            <div className="flex justify-center pt-3 mb-10">
                <Image src="/violet-design.svg" alt="violet-design" width={300} height={1} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
                        <div className="w-full h-80  md:h-90 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-shimmer"></div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
            <div className="flex justify-center pt-18 mb-10">
                <Image src="/violet-design.svg" alt="violet-design" width={300} height={1} />
            </div>
        </div>
    );
};

export default PhotoSkeleton;



