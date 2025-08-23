"use client";


import supabase from "../config/supabaseClient";
import { motion } from "framer-motion";
import Image from "next/image";


import { useEffect, useState } from "react";


export default function Gallery() {

    const [images, setImages] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            // List files in the bucket
            const { data, error } = await supabase.storage
                .from("photo-gallery")
                .list();

            if (error) {
                console.error("Error listing images:", error);
                return;
            }

            // Convert to public URLs
            const urls = data.map((file) => {
                const { data: publicUrl } = supabase
                    .storage
                    .from("photo-gallery")
                    .getPublicUrl(file.name);

                return publicUrl.publicUrl;
            });

            setImages(urls);
        };

        fetchImages();
    }, []);


    console.log(supabase)

    return (
        <>
            <div className="w-full h-[40vh] md:h-[70vh] bg-transparent relative" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                <div className="space-y-2 text-[#f1f1f1] absolute bottom-2 md:bottom-30 left-4 md:left-16 lg:left-32 xl:left-80  ">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className=" text-xl md:text-3xl lg:text-4xl font-semibold pb-2 lg:pb-4 " >Gallery of COMPANY NAME</motion.h1>
                    <p className="">Need help planning your next event? Look no further than St George Event Management Kerala!</p>
                    <p className="">We can provide everything you need to ensure your event is a success. </p>
                </div>

            </div>
            <div className="w-full min-h-[100vh] bg-white px-5 md:px-18 lg:px-30 xl:px-80 ">
                <p className=" pt-20 pb-5 " style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>Melodia® Events always prioritizes the satisfaction of our clients in Kerala. We are particularly delighted to work with the Malayalee community, bringing joy from the heart. Here are some photos of our recent work in Kerala that we would like to share with you.</p>
                <p className="" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}> Please note that we have only showcased a few photos here due to our company policy limitations. However, if you wish to explore our extensive collection, which includes our latest designs, decorations, wedding dance videos, other entertainment, recent wedding photos, and new trends in decorations and other event aspects, kindly contact us or send us a message on WhatsApp or Gmail. We have a dedicated team available to promptly respond to your inquiries, provide additional photos, and address any clarifications you may have. So, don’t hesitate; send us a message now!</p>
                {/* Gallery Navbar */}
                <div className="py-20 ">
                    <ul className="flex justify-between   " >
                        <a href=""><li className=" rounded-full  py-1.5 px-1 md:px-3 md:py-1.5 bg-[#674188] text-white cursor-pointer ">Photo Gallery</li></a>
                        <a href=""><li className=" rounded-full  py-1.5 px-1 md:px-3 md:py-1.5 bg-[#f1f1f1] text-[#171717] cursor-pointer">Video Gallery</li></a>
                        <a href=""><li className=" rounded-full  py-1.5 px-1 md:px-3 md:py-1.5  bg-[#f1f1f1] text-[#171717]cursor-pointer">Shorts Gallery</li></a>
                        <a href=""><li className=" rounded-full  py-1.5 px-1 md:px-3 md:py-1.5  bg-[#f1f1f1] text-[#171717]cursor-pointer">Wedding Albums</li></a>
                    </ul>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-3 xl:gap-6 pb-8">
                    {images?.map((urls, i) => (
                        <div key={i} className="w-full h-48 sm:h-52 md:h-56 lg:h-60 rounded-2xl overflow-hidden">
                            <Image
                                src={urls}
                                alt={`Image ${i}`}
                                width={600}
                                height={400}
                                quality={100}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 50vw, 33vw"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    ))}
                </div>


            </div>

        </>
    )
}

