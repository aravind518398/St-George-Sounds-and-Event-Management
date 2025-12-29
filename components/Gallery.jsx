"use client";

import supabase from "../config/supabaseClient";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

export default function Gallery() {
    const [activeTab, setActiveTab] = useState('photos');
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [shorts, setShorts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [show, setShow] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const retry = async (fn, retries = 3, delay = 2000) => {
        for (let i = 0; i < retries; i++) {
            const result = await fn();
            if (!result?.error) return result;
            await new Promise(r => setTimeout(r, delay));
        }
        return fn(); // last try
    };


    const handleShow = (index) => {
        setSelectedImageIndex(index);
        setShow(true);
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const tabs = [
        { id: 'photos', label: 'Photo Gallery', data: images },
        { id: 'videos', label: 'Video Gallery', data: videos },
        { id: 'shorts', label: 'Shorts Gallery', data: shorts },
        { id: 'albums', label: 'Wedding Albums', data: albums }
    ];

    useEffect(() => {
        const fetchImages = async () => {
            const { data, error } = await retry(() =>
                supabase.storage.from("photo-gallery").list()
            );

            if (error) {
                console.error("Storage error:", error.message);
                setImages([]);
                return;
            }

            const urls = data
                ?.filter(file => file.name.match(/\.(jpg|jpeg|png|gif|webp)$/i))
                .map(file =>
                    supabase.storage
                        .from("photo-gallery")
                        .getPublicUrl(file.name).data.publicUrl
                )
                .filter(Boolean);

            setImages(urls || []);
        };



        supabase.from("youtube-videos").select("id").limit(1);

        const fetchVideos = async () => {
            const { data, error } = await supabase.from("youtube-videos").select("*");

            if (error) {
                console.log(error);
            } else {
                setVideos(data);
            }
        };

        const fetchShorts = async () => {
            const { data, error } = await supabase.from("youtube-shorts").select("*");

            if (error) {
                console.log(error);
            } else {
                setShorts(data);
            }
        };

        const fetchAlbums = async () => {
            const { data, error } = await supabase.from("wedding-albums").select("*");

            if (error) {
                console.log(error);
            } else {
                setAlbums(data);
            }
        };

        const fetchAllData = async () => {
            setIsLoading(true);
            // await Promise.all([

            // ]);
            fetchImages()
            fetchVideos()
            fetchShorts()
            fetchAlbums()

            setIsLoading(false);
        };

        fetchAllData();
    }, []);

    // useEffect(() => {
    //     if (!images.length) {
    //         const t = setTimeout(fetchImages, 4000);
    //         return () => clearTimeout(t);
    //     }
    // }, [images]);



    const renderContent = () => {
        const currentData = tabs.find(tab => tab.id === activeTab)?.data || [];

        switch (activeTab) {
            case 'photos':
                return (
                    <>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6 pb-8"
                        >
                            {isLoading ? (
                                <p>Loading....</p>
                            ) : currentData?.length === 0 ? (
                                <p>No images found</p>
                            ) : (
                                currentData.map((url, i) =>
                                    url ? ( // only render if url is valid
                                        <motion.div
                                            variants={item}
                                            key={i}
                                            className="w-full sm:h-52 md:h-56 lg:h-56 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-l from-purple-700 to-black"
                                        >
                                            <Image
                                                onClick={() => handleShow(i)}
                                                src={url}
                                                alt={`Photo ${i + 1}`}
                                                width={600}
                                                height={400}
                                                quality={100}
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 50vw, 33vw"
                                                className="w-full h-full object-cover rounded-2xl"
                                            />
                                        </motion.div>
                                    ) : null
                                )
                            )}
                        </motion.div>

                        {images.length > 0 && (
                            <PopupImage
                                show={show}
                                setShow={setShow}
                                selectedImageIndex={selectedImageIndex}
                                setSelectedImageIndex={setSelectedImageIndex}
                                images={images}
                            />
                        )}
                    </>
                );

            case 'videos':
                return (
                    <>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6 pb-8">
                            {isLoading ? (
                                <p>Loading....</p>
                            ) : (
                                videos?.map((video, i) => (
                                    <motion.div
                                        variants={item}
                                        key={i} className="w-full aspect-video rounded-2xl overflow-hidden  bg-gradient-to-l  from-purple-700 to-black shadow-lg"

                                    >
                                        <iframe
                                            src={`https://www.youtube.com/embed/${video.url}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                            className="w-full h-full rounded-2xl "
                                        />
                                    </motion.div>
                                ))
                            )}
                        </motion.div>
                    </>

                );

            case 'shorts':
                return (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4 xl:grid-cols-5 xl:gap-6 pb-8">
                        {isLoading ? (
                            <p>Loading....</p>
                        ) : (
                            shorts?.map((video, i) => (
                                <motion.div
                                    variants={item}
                                    key={i} className="w-full aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-l  from-purple-700 to-black shadow-lg">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.url}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                );

            case 'albums':
                return (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6 pb-8">
                        {isLoading ? (
                            <p>Loading....</p>
                        ) : (
                            albums?.map((video, i) => (
                                <motion.div
                                    variants={item}
                                    key={i} className="w-full aspect-video rounded-2xl overflow-hidden  bg-gradient-to-l  from-purple-700 to-black shadow-lg">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${video.url}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        className="w-full h-full rounded-2xl "
                                    />
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <>
            <div className="w-full h-[50vh] md:h-[68vh] bg-transparent relative" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                <div className="space-y-2 text-[#f1f1f1] absolute bottom-2 md:bottom-30 left-4 md:left-16 lg:left-32 xl:left-80">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-xl md:text-3xl lg:text-4xl font-semibold pb-2 lg:pb-4"
                    >
                        Gallery of St.George Event Management
                    </motion.h1>
                    <p className="hidden md:block">Need help planning your next event? Look no further than St George Event Management Aruvitura!</p>
                    <p className="hidden md:block">We can provide everything you need to ensure your event is a success.</p>
                </div>
            </div>
            <div className="w-full min-h-[100vh] bg-white px-5 md:px-18 lg:px-30 xl:px-80">
                <p className="pt-20 pb-5" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                    St.George Events always prioritizes the satisfaction of our clients in Aruvitura. We are particularly delighted to work with the Malayalee community, bringing joy from the heart. Here are some photos of our recent work in Aruvitura that we would like to share with you.
                </p>
                <p className="" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                    Please note that we have only showcased a few photos here due to our company policy limitations. However, if you wish to explore our extensive collection, which includes our latest designs, decorations, wedding dance videos, other entertainment, recent wedding photos, and new trends in decorations and other event aspects, kindly contact us or send us a message on WhatsApp or Gmail. We have a dedicated team available to promptly respond to your inquiries, provide additional photos, and address any clarifications you may have. So, don't hesitate; send us a message now! <Link href={"/contact"}><span className="text-purple-800">Contact</span></Link>
                </p>
                <div className="py-20 ">
                    <ul className="flex gap-4 md:gap-10">
                        {tabs.map((tab) => (
                            <li key={tab.id}>
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`border-2 border-[#674188] rounded-xl md:rounded-full py-1.5 px-1 md:px-3 md:py-1.5 cursor-pointer transition-colors duration-200  ${activeTab === tab.id
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

export function PopupImage({ show, setShow, selectedImageIndex, setSelectedImageIndex, images }) {
    const handleHide = () => {
        setShow(false);
    };

    const handlePrevious = () => {
        setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const handleNext = () => {
        setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!show) return;

            if (event.key === "ArrowLeft") {
                handlePrevious();
            }
            if (event.key === "ArrowRight") {
                handleNext();
            }
            if (event.key === "Escape") {
                handleHide();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [show, images.length]);

    if (!show || !images.length) return null;

    return (
        <>
            {/* Background overlay */}
            <div
                className="fixed inset-0 bg-black/50 z-20"
                onClick={handleHide}
            />

            {/* Close button */}
            <Image
                onClick={handleHide}
                src={assets.close_icon}
                className="fixed right-8 top-8 cursor-pointer w-[15px] h-[15px] z-30"
                alt="Close"
            />

            {/* Navigation arrows */}
            <button
                onClick={handlePrevious}
                className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white p-2 rounded-xl shadow-lg transition-all duration-300 z-50 w-8 h-15 md:w-10 md:h-20"
                aria-label="Previous image"
            >
                <span className="text-2xl md:text-4xl">&#8249;</span>
            </button>

            <button
                onClick={handleNext}
                className="fixed right-4 top-1/2 -translate-y-1/2  bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white p-2 rounded-xl shadow-lg transition-all duration-300 z-50 w-8 h-15 md:w-10 md:h-20"
                aria-label="Next image"
            >
                <span className="text-2xl md:text-4xl">&#8250;</span>
            </button>

            {/* Image modal */}
            <div className="fixed w-[430px] h-[280px] sm:w-[480px] sm:h-[340px] md:w-[620px] md:h-[400px] lg:w-[800px] lg:h-[550px] xl:w-[1000px] xl:h-[600px] bg-[#171717] top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] z-30 rounded-2xl">
                <Image
                    src={images[selectedImageIndex]}
                    alt={`Photo ${selectedImageIndex + 1}`}
                    width={1115}
                    height={670}
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            {/* Image counter */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2  bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/30 text-white rounded-xl shadow-lg transition-all duration-300 z-50 px-3 py-1  text-sm">
                {selectedImageIndex + 1} / {images.length}
            </div>
        </>
    );
}