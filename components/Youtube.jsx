"use client";

import { useEffect, useState } from "react";
import YoutubeSkeleton from "./ui/YoutubeSkeleton";
import supabase from "../config/supabaseClient";

export default function Youtube() {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data, error } = await supabase.from("home-page-youtube-video").select("*");

        if (error) {
          console.log(error);
        } else {
          setVideos(data);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        setIsLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Don't render anything if still loading or no videos
  if (isLoading || videos.length === 0) {
    return (
      <div className="w-full flex justify-center my-35">
        <YoutubeSkeleton />
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center my-35">
      <div className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[800px] aspect-video relative">


        {iframeLoading && (
          <img
            src={`https://img.youtube.com/vi/${videos[0].url}/maxresdefault.jpg`}
            alt="YouTube Thumbnail"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
          />
        )}


        <iframe
          className="w-full h-full rounded-2xl shadow-2xl"
          src={`https://www.youtube.com/embed/${videos[0].url}?rel=0`}
          title="YouTube video player"
          onLoad={() => setIframeLoading(false)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>


        <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 rounded-full opacity-20 -z-10"></div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full opacity-20 -z-10"></div>
      </div>
    </div>
  );
}