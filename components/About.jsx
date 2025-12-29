"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { assets } from "../assets/assets"

export default function About() {
    return (
        <>
            {/* HERO SECTION */}
            <div className="w-full h-[50vh] md:h-[68vh] bg-transparent relative overflow-hidden" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                <div className="space-y-2 text-[#f1f1f1] absolute bottom-2 md:bottom-20 left-4 md:left-16 lg:left-32 xl:left-80">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-xl md:text-3xl lg:text-4xl font-semibold pb-2 lg:pb-4 "
                    >
                        About St.George Event<br />Management
                    </motion.h1>
                    <p className="hidden md:block">From concept to execution, Kerala's premier event management</p>
                    <p className="hidden md:block">company delivers flawless experiences tailored to your unique vision.</p>
                </div>
            </div>

            {/* LOGO SECTION */}
            <div className="w-full bg-white px-4 md:px-10 py-10 md:py-30 flex justify-center">
                <div>
                    <Image className=" w-[70px] h-[70px]  sm:w-[100px] sm:h-[100px]" src="/sg-logo.png" alt="logo" width={100} height={100} style={{
                        filter:
                            "brightness(0) saturate(100%) invert(40%) sepia(20%) saturate(1500%) hue-rotate(235deg) brightness(80%) contrast(100%)",
                    }} />
                </div>
            </div>


            {/* WELCOME SECTION */}

            <div className="w-full bg-white px-4 md:px-16 pb-16 md:pb-24">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-semibold text-3xl md:text-4xl mb-8 text-gray-900">Welcome to St.George Event Management</h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                        <p>We are an ISO 9001:2015-certified event management company based in Kerala, with over 15 years of experience in the event management industry in Kerala. Melodia Event Management specializes in wedding event management, as well as a wide range of corporate, personal, regional, public, and private event management services—creating lasting memories for thousands of clients in the Malayalee community in Kerala and for those seeking destination weddings in Kerala from other states of India and abroad. Since 2010–2011, we have successfully organized over 750 weddings, 90 corporate events, 30 inaugurations, and 150 other private events. In 2025, we are committed to delivering 150 more exceptional events as we continue to grow and serve our clients with excellence.</p>
                        <p>Additionally, the brand name Melodia Event Management is often referred to interchangeably as Melodia Events by the company and people in Kerala. Melodia Events, or simply Melodia, is primarily used as an informal or short name for the company; however, our official name remains Melodia Event Management. We mainly serve in God's Own Country as a specialized event management company for Kerala's event management services.</p>
                    </div>
                </div>
            </div>

            {/* COMPANY HISTORY SECTION */}
            <div className="w-full bg-gray-50 px-4 md:px-16 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                        <p>In 2008, our venture was initiated in Kuriachira, Thrissur. Initially, we handled event management tasks primarily in regions close to Thrissur and its surroundings. Our hard work has enabled us to expand from the neighborhoods of Thrissur to the popular territories of Cochin. Compared to other cities, we are now providing more services in Ernakulam (Kochi) through our own production house, a trend that has continued over the last five years. What started as a small firm has now expanded into a multi-locality venue booking, selection, and event management service across Kerala.</p>
                        <p>We proudly serve all of Kerala, from bustling cities to serene villages, as one of the few Kerala-owned event management companies fully dedicated to the state. Deeply rooted in Kerala's rich culture and traditions, we specialize in creating unforgettable events—whether for the Malayalam community on Kerala soil or destination weddings for guests from across India and beyond. With extensive experience in event management, we bring expertise and passion to every celebration. Today, in 2025, Melodia Event Management is strongly represented in Thrissur, Kasaragod, Calicut, Trivandrum, Kannur, Kollam, Alleppey (Alappuzha), Kottayam, Palakkad, Malappuram, and Kochi—the ten most dynamic cities of Kerala.</p>
                    </div>
                </div>
            </div>

            {/* VISIONARY SECTION */}
            <div className="w-full bg-white px-4 md:px-16 py-16 md:py-24">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16">
                    {/* Text Content */}
                    <div className="flex-1">
                        <h2 className="font-semibold text-3xl md:text-4xl mb-6 text-gray-900">John Doe - A Visionary's Journey</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                            <p>John Doe, also known as John is the CEO and founder of Melodia Event Management Company. Mr. John Doe, after his MBA graduation, worked under several IT firms in Thrissur and Kochi. His talent lay elsewhere though; he was a part of a ganamela and orchestra troupe as a professional singer. His vocal ability was showcased on many occasions and in wedding ceremonies. He tried to explore his passion with his own orchestra troupe, the Valence Orchestra, but it didn't develop as expected.</p>
                            <p>Then the idea of 'Event Management' struck his mind. The term as well as the event management field were relatively unknown till 2008. This was the inspiration that led to the founding of Melodia Event Management. John Doe's interest in the performing arts brings the collective insight of an audience and spectators to Melodia Event Management, allowing them to organize occasions in a unique manner. For the first three years, Melodia Event Management operated without even an office.</p>
                            <p>However, in 2011, they opened a small office in Thrissur, marking their transition into a fully functioning organization. Now, as we reach 2025, the company has expanded with multiple offices in various districts and cities across Kerala.</p>
                        </div>
                    </div>

                    {/* Placeholder Image */}
                    <div className="flex-shrink-0 w-full md:w-[350px]">
                        <Image
                            className="w-full h-[300px] md:h-[430px] rounded-lg shadow-lg object-cover"
                            src={assets.ower_photo}
                            width={350}
                            height={430}
                            alt="Owner-Image"
                        />
                    </div>
                </div>
            </div>

            {/* VISION SECTION */}
            <div className="w-full bg-gradient-to-r from-blue-50 to-purple-50 px-4 md:px-16 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-semibold text-3xl md:text-4xl mb-8 text-gray-900">Our Vision</h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                        <p>At Melodia Event Management, our vision is to become Kerala's leading event management company, committed to creating unforgettable experiences for the Malayali community and for those choosing Kerala as their destination for weddings and special occasions. We aim to redefine the event planning industry through innovative, seamless, and highly personalized services, ensuring every event—whether in cities, towns, or villages—celebrates the rich traditions and cultural values of Kerala.</p>
                        <p>In addition, Melodia envisions becoming the most trusted venue booking platform in Kerala. With over 15 years of experience, we strive to be the go-to destination for clients seeking reliable, detailed, and curated information about event venues. By offering a one-stop solution for venue selection and complete event services, we eliminate the hassle of searching across multiple platforms—making event planning easier, faster, and more efficient.</p>
                    </div>
                </div>
            </div>

            {/* MISSION SECTION */}
            <div className="w-full bg-white px-4 md:px-16 py-16 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-semibold text-3xl md:text-4xl mb-8 text-gray-900">Our Mission</h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                        <p>At Melodia Event Management, our mission is to deliver exceptional, professional event planning and management services across the entire state of Kerala—from the northernmost district of Kasaragod to the southern tip of Trivandrum. We are dedicated to serving the Malayali community as well as guests from outside Kerala who choose this culturally rich land for their celebrations.</p>
                        <p>We strive to make high-quality event services accessible not only in major cities but also in rural areas, small towns, and villages throughout Kerala. Our approach blends creativity, cultural sensitivity, and meticulous attention to detail to bring every client's vision to life—whether it's a traditional or destination wedding, a corporate function, or a private celebration.</p>
                        <p>With over 15 years of industry experience, Melodia also aims to become Kerala's most trusted venue booking service platform. We provide clients with curated, comprehensive, and reliable data on various event venues, eliminating the need to search multiple sources. As a one-stop solution for both venue booking and complete event services, we are committed to making every event planning journey seamless, stress-free, and unforgettable.</p>
                    </div>
                </div>
            </div>
        </>
    )
}