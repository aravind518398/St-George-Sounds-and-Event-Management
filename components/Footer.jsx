"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Footer() {
    const [currectYear, SetCurrentYear] = useState();
    useEffect(()=> {
        SetCurrentYear(new Date().getFullYear())
    },[])
    
    const backgroundImg = assets.footer_img.src
    return (
        <div className="w-full min-h-screen"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
            <div className="w-full min-h-screen bg-black/82">
                <div className="px-4 py-6">
                    <ul className="flex gap-8 md:gap-20 justify-center">
                        <Link target="_blank" href="https://www.instagram.com/s_g_events_aruvithura?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <motion.li
                                initial={{ scale: 1, opacity: 0.5 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ scale: 0.9 }}
                            >
                                <FontAwesomeIcon icon={faInstagram} color="white" size="xl" className="hover:text-purple-400" />
                            </motion.li>
                        </Link>
                        <Link target="_blank" href="https://youtube.com/@sgeventsaruvithura?si=WbLKWy5vTstPPpOS">
                            <motion.li
                                initial={{ scale: 1, opacity: 0.5 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ scale: 0.9 }}
                            >
                                <FontAwesomeIcon icon={faYoutube} color="white" size="xl" className="hover:text-purple-400" />
                            </motion.li>
                        </Link>
                        <Link href="https://www.facebook.com/sgeventsaruvithura?mibextid=rS40aB7S9Ucbxw6v" target="_blank">
                            <motion.li
                                initial={{ scale: 1, opacity: 0.5 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                whileHover={{ scale: 0.9 }}
                            >
                                <FontAwesomeIcon icon={faFacebook} color="white" size="xl" className="hover:text-purple-400" />
                            </motion.li>
                        </Link>
                    </ul>
                </div>
                <div className="px-4">
                    {/* <h1 className="text-2xl md:text-3xl text-white py-6 md:py-12 text-center" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                        COMPANY LOGO
                    </h1> */}
                    <div className=" flex justify-center items-center py-6 md:py-12 ">
                        <a href="/" ><Image className="w-[58px] h-[58px]  md:w-[60px] md:h-[60px]  lg:w-[80px] lg:h-[80px]" src="/sg-logo.png" alt="logo" width={80} height={80} style={{ filter: "brightness(0) invert(1)" }} /></a>
                    </div>

                </div>
                <div className="flex justify-center px-4 mb-8">
                    <p className="text-white text-sm md:text-base max-w-[350px] md:max-w-[600px] lg:max-w-[900px] text-center leading-relaxed" style={{ fontFamily: "Verdana" }}>
                        Planning a full event has never been easier! St George® Event Management, an ISO 9001:2015 Certified Event Management Company based in Kerala state, India, offers a wide range of services to make your events stress-free and memorable across Kerala. From premium corporate events and destination wedding planning to small-scale birthday parties and private gatherings, you can be sure we have it all covered. With offices in Kochi, Thrissur, Calicut, and Trivandrum, we also specialize in venue selections, booking, and hospitality services. We primarily serve Keralites, Malayalees, and those looking to plan destination events in Kerala. We exclusively operate within Kerala. Whether you are planning a destination wedding event or a local celebration in Kerala, India, St George® is here to help.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-start px-4 gap-4 md:gap-0">
                    <FooterTable
                        heading={"QUICK LINK"}
                        items={["Home", "About", "Gallery", "Contact"]}
                        links={["/", "/about", "/gallery", "/contact"]}
                    />
                    <FooterTable
                        heading={"SERVICES"}
                        items={["Corporate Events", "Wedding Photography", "Event Planning", "Birthday Photography"]}
                    />
                    <FooterTable
                        heading={"CONTACT INFO"}
                        items={["Email: stgeorgesoundsites@gmail.com", "Phone: +919961020996", "Address: Aruvithura, Kottayam, Erattupetta, Kerala 686122"]}
                    />
                </div>
                <div className="mx-4 md:mx-10 mt-8">
                    <hr className="border-white/30" />
                    <div className="py-4 md:py-6">
                        <ul className="text-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 text-sm">
                            <a href="tel:+919961020996"><li className="flex items-center gap-2 cursor-pointer " >
                                <FontAwesomeIcon icon={faPhone} color="white" />
                                +91-9961020996
                            </li></a>
                            <li className="flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faEnvelope} color="white" />
                                stgeorgesoundsites@gmail.com
                            </li>
                        </ul>
                    </div>
                    <hr className="border-white/30" />
                </div>
                <div className="text-white text-xs md:text-sm flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-10 gap-4 lg:mx-30">
                    <p>© 2013–{currectYear} St George Event Management. All Rights Reserved.</p>
                    <p><span className="text-gray-300 text-shadow-blue-500">Created by </span><b><a href="https://portfolio-virid-one-33.vercel.app/" target="_blank" className="text-[#009075]  hover:underline">Aravind</a></b></p>
                </div>
            </div>
        </div>
    )
}

// Updated FooterTable component
export function FooterTable({ heading, items, links }) {
    const pathname = usePathname();

    return (
        <div className="text-white w-full md:w-[280px] py-6 md:py-8 text-center md:text-left">
            <h1 className="text-lg md:text-xl font-semibold mb-4 text-white/90">{heading}</h1>
            <ul className="space-y-2 text-sm md:text-base" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                {items?.map((value, index) => (
                    <li key={index}>
                        {links && links[index] ? (
                            <Link
                                href={links[index]}
                                className={`cursor-pointer hover:text-purple-400 transition-colors duration-200 block break-words ${pathname === links[index]
                                        ? "text-purple-400"
                                        : "text-white"
                                    }`}
                            >
                                {value}
                            </Link>
                        ) : (
                            <span className="text-white block break-words cursor-pointer hover:text-purple-400 transition-colors duration-200 ">
                                {value}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}