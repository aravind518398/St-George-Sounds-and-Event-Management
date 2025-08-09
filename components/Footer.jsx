"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Footer() {
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
                    {/* Social Media Icons */}
                    <ul className="flex gap-8 md:gap-20 justify-center">
                        <a target="_blank" href="#">
                            <motion.li
                                initial={{scale:1}}
                                whileHover={{scale:0.9}}
                            >
                                <FontAwesomeIcon icon={faInstagram} color="white" size="xl" className="hover:text-purple-400" />
                            </motion.li>
                        </a>
                        <a target="_blank" href="#">
                            <motion.li
                                initial={{scale:1}}
                                whileHover={{scale:0.9}}
                            >
                                <FontAwesomeIcon icon={faYoutube} color="white" size="xl" className="hover:text-purple-400" />
                            </motion.li>
                        </a>
                        <a target="_blank" href="#">
                            <motion.li
                                initial={{scale:1}}
                                whileHover={{scale:0.9}}
                            >
                                <FontAwesomeIcon icon={faFacebook} color="white" size="xl" className="hover:text-purple-400" />
                            </motion.li>
                        </a>
                    </ul>
                </div>

                {/* Company Logo */}
                <div className="px-4">
                    <h1 className="text-2xl md:text-3xl text-white py-6 md:py-12 text-center" style={{ fontFamily: "Courier" }}>
                        COMPANY LOGO
                    </h1>
                </div>

                {/* Description */}
                <div className="flex justify-center px-4 mb-8">
                    <p className="text-white text-sm md:text-base max-w-[350px] md:max-w-[600px] lg:max-w-[900px] text-center leading-relaxed" style={{ fontFamily: "Courier" }}>
                        Planning a full event has never been easier! St George® Event Management, an ISO 9001:2015 Certified Event Management Company based in Kerala state, India, offers a wide range of services to make your events stress-free and memorable across Kerala. From premium corporate events and destination wedding planning to small-scale birthday parties and private gatherings, you can be sure we have it all covered. With offices in Kochi, Thrissur, Calicut, and Trivandrum, we also specialize in venue selections, booking, and hospitality services. We primarily serve Keralites, Malayalees, and those looking to plan destination events in Kerala. We exclusively operate within Kerala. Whether you are planning a destination wedding event or a local celebration in Kerala, India, St George® is here to help.
                    </p>
                </div>

                {/* Footer Tables - Mobile Responsive */}
                <div className="flex flex-col md:flex-row justify-center items-start  px-4 gap-4 md:gap-0">
                    <FooterTable heading={"QUICK LINK"} items={["Home", "About", "Gallery", "Contact"]} />
                    <FooterTable heading={"SERVICES"} items={["Corporate Events", "Wedding Photography", "Event Planning"]} />
                    <FooterTable heading={"CONTACT INFO"} items={["Email: contact@example.com", "Phone: +1234567890", "Address: 123 Street"]} />
                </div>

                {/* Contact Information */}
                <div className="mx-4 md:mx-10 mt-8">
                    <hr className="border-white/30" />
                    <div className="py-4 md:py-6">
                        <ul className="text-white flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 text-sm">
                            <li className="flex items-center gap-2 cursor-pointer " >
                                <FontAwesomeIcon icon={faPhone} color="white" />
                                +91-9567797440
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer">
                                <FontAwesomeIcon icon={faEnvelope} color="white"/>
                                example@gmail.com
                            </li>
                        </ul>
                    </div>
                    <hr className="border-white/30"/>
                </div>

                {/* Copyright */}
                <div className="text-white text-xs md:text-sm flex flex-col md:flex-row justify-between items-center py-6 px-4 md:px-10 gap-4">
                    <p>© 2008–2025 St George Event Management. All Rights Reserved.</p>
                    <p>Powered by <a href="" className="text-blue-400 hover:text-blue-300">aravindrkrishnan280@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}

export function FooterTable({ heading, items }) {
    return (
        <div className="text-white w-full md:w-[200px] py-6 md:py-8 text-center md:text-left">
            <h1 className="text-lg md:text-xl font-semibold mb-4 text-white/90">{heading}</h1>
            <ul className="space-y-2 text-sm md:text-base" style={{ fontFamily: "Courier, monospace" }}>
                {items?.map((value, index) => (
                    <li key={index}>
                        <a 
                            href="#" 
                            className="cursor-pointer hover:text-purple-400 transition-colors duration-200 block break-words"
                        >
                            {value}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}