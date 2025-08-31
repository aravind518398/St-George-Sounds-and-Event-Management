"use client";

import { useState } from "react";
import YoutubeSkeleton from "./ui/YoutubeSkeleton";

export default function Youtube() {
  const [isLoading, setIsLoading] = useState(true);
  const videoId = "dw3oN6gkfio"; // your YouTube video ID

  return (
    <div className="w-full flex justify-center my-35">
      {isLoading && <YoutubeSkeleton />}
      
      <div className={`w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[800px] aspect-video relative ${isLoading ? 'hidden' : ''}`}>
        
        {/* Custom Thumbnail Overlay (HD) */}
        {isLoading && (
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="YouTube Thumbnail"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        )}

        {/* YouTube Iframe */}
        <iframe
          className="w-full h-full rounded-2xl shadow-2xl"
          src={`https://www.youtube.com/embed/${videoId}?controls=0&rel=0&modestbranding=1`}
          title="YouTube video player"
          onLoad={() => setIsLoading(false)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Decoration */}
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 rounded-full opacity-20 -z-10"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full opacity-20 -z-10"></div>
      </div>
    </div>
  );
}
