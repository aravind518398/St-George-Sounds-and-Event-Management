"use client";

import supabase from "../config/supabaseClient";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery() {
    const [activeTab, setActiveTab] = useState('photos');
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [shorts, setShorts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(albums);

    const tabs = [
        { id: 'photos', label: 'Photo Gallery', data: images },
        { id: 'videos', label: 'Video Gallery', data: videos },
        { id: 'shorts', label: 'Shorts Gallery', data: shorts },
        { id: 'albums', label: 'Wedding Albums', data: albums }
    ];

    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await supabase.storage
                .from("photo-gallery")
                .list();

            if (error) {
                console.error("Error listing images:", error);
                return;
            }

            const urls = data.map((file) => {
                const { data: publicUrl } = supabase
                    .storage
                    .from("photo-gallery")
                    .getPublicUrl(file.name);

                return publicUrl.publicUrl;
            });
            setIsLoading(false);
            setImages(urls);
        };

        const fetchVideos = async () => {
            const { data, error } = await supabase.from("youtube-videos").select("*");

            if (error) {
                console.log(error);
            } else {
                setIsLoading(false);
                setVideos(data);
            }

        };

        const fetchShorts = async () => {
            const { data, error } = await supabase.from("youtube-shorts").select("*");

            if (error) {
                console.log(error);
            } else {
                setIsLoading(false);
                setShorts(data);
            }
        };

        const fetchAlbums = async () => {
            const { data, error } = await supabase.from("wedding-albums").select("*");

            if (error) {
                console.log(error);
            } else {
                console.log("Fetched data:", data)
                setIsLoading(false);
                setAlbums(data);
            }

        };

        fetchImages();
        fetchVideos();
        fetchShorts();
        fetchAlbums();
    }, []);

    const renderContent = () => {
        const currentData = tabs.find(tab => tab.id === activeTab)?.data || [];

        switch (activeTab) {
            case 'photos':
                return (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6 pb-8">
                        {isLoading ? (<p>Loading....</p>) : (currentData?.map((urls, i) => (
                            <motion.div
                                initial={{ opacity: 0.5, x: 150 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                key={i} className="w-full  sm:h-52 md:h-56 lg:h-60 rounded-2xl overflow-hidden">
                                <Image
                                    src={urls}
                                    alt={`Photo ${i + 1}`}
                                    width={600}
                                    height={400}
                                    quality={100}
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 50vw, 33vw"
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </motion.div>
                        )))}
                    </div>
                );

            case 'videos':
                return (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6 pb-8">
                        {isLoading ? (<p>Loading....</p>) : (videos?.map((video, i) => (
                            <div key={i} className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.url}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full rounded-2xl"
                                />
                            </div>
                        )))}
                    </div>
                );

            case 'shorts':
                return (
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4 xl:grid-cols-5 xl:gap-6 pb-8">
                        {isLoading ? (<p>Loading....</p>) : (shorts?.map((video, i) => (
                            <div key={i} className="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.url}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        )))}
                    </div>
                );

            case 'albums':
                return (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6 pb-8">
                        {isLoading ? (<p>Loading....</p>) : (albums?.map((video, i) => (
                            <div key={i} className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.url}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    className="w-full h-full rounded-2xl"
                                />
                            </div>
                        )))}
                    </div>
                );

            default:
                return null;
        }
    };



    return (
        <>
            <div className="w-full h-[40vh] md:h-[70vh] bg-transparent relative" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                <div className="space-y-2 text-[#f1f1f1] absolute bottom-2 md:bottom-30 left-4 md:left-16 lg:left-32 xl:left-80  ">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className=" text-xl md:text-3xl lg:text-4xl font-semibold pb-2 lg:pb-4 "
                    >
                        Gallery of COMPANY NAME
                    </motion.h1>
                    <p className="hidden sm:block">Need help planning your next event? Look no further than St George Event Management Kerala!</p>
                    <p className="hidden sm:block">We can provide everything you need to ensure your event is a success. </p>
                </div>
            </div>
            <div className="w-full min-h-[100vh] bg-white px-5 md:px-18 lg:px-30 xl:px-80 ">
                <p className=" pt-20 pb-5 " style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                    Melodia® Events always prioritizes the satisfaction of our clients in Kerala. We are particularly delighted to work with the Malayalee community, bringing joy from the heart. Here are some photos of our recent work in Kerala that we would like to share with you.
                </p>
                <p className="" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                    Please note that we have only showcased a few photos here due to our company policy limitations. However, if you wish to explore our extensive collection, which includes our latest designs, decorations, wedding dance videos, other entertainment, recent wedding photos, and new trends in decorations and other event aspects, kindly contact us or send us a message on WhatsApp or Gmail. We have a dedicated team available to promptly respond to your inquiries, provide additional photos, and address any clarifications you may have. So, don't hesitate; send us a message now!
                </p>
                <div className="py-20">
                    <ul className="flex justify-between">
                        {tabs.map((tab) => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`rounded-full py-1.5 px-1 md:px-3 md:py-1.5 cursor-pointer transition-colors duration-200 ${activeTab === tab.id
                                        ? 'bg-[#674188] text-white'
                                        : 'bg-[#f1f1f1] text-[#171717] hover:bg-[#674188] hover:text-[#f1f1f1]'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                {renderContent()}
            </div>
        </>
    );
}