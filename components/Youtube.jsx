"use client";

import { useState } from "react";
import YoutubeSkeleton from "./ui/YoutubeSkeleton";

export default function Youtube() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full flex justify-center my-35">
      {isLoading && <YoutubeSkeleton />}
      <div className={`w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[800px] aspect-video relative ${isLoading ? 'hidden' : ''}`}>
        <iframe
          className="w-full h-full rounded-2xl shadow-2xl"
          src="https://www.youtube.com/embed/dw3oN6gkfio?si=m7C0OF0LAwyGWkfk?controls=0&rel=0&modestbranding=1"
          title="YouTube video player"
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 rounded-full opacity-20 -z-10"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full opacity-20 -z-10"></div>
      </div>
    </div>
  )
}