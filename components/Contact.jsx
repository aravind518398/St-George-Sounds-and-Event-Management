"use client"

import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false
import Image from "next/image"
import { assets } from "../assets/assets"
import { useState } from "react"
import GoogleMap from "./GoogleMap"
import { motion } from "framer-motion"


export default function Contact() {
    const [result, setResult] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        setResult("Sending....");
        const formData = new FormData(e.target);
        formData.append("access_key", "0b5ead75-cddc-414e-89a0-c158aadfdf16");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            setResult(
                <span>
                    Form submitted successfully <span style={{ color: 'green' }}>✔</span>
                </span>
            );
            e.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }
    return (
        <>
            <div className="w-full h-[40vh] md:h-[70vh] bg-transparent relative" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                <div className="space-y-2 text-[#f1f1f1] absolute bottom-2 md:bottom-30 left-4 md:left-16 lg:left-32 xl:left-80  ">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className=" text-xl md:text-3xl lg:text-4xl font-semibold pb-2 lg:pb-4 " >Contact Us</motion.h1>
                    <p className="hidden sm:block">Need help planning your next event? Look no further than St George Event Management Kerala!</p>
                    <p className="hidden sm:block">We can provide everything you need to ensure your event is a success. </p>
                </div>
            </div>
            <div className="w-full min-h-[100vh] bg-white">
                <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-80">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pt-8 sm:pt-16 md:pt-20 lg:pt-30 pb-8">
                        <div className="mt-8 mx-4 ">
                            <h1 className="text-lg sm:text-xl md:text-2xl pb- md:pb-10 text-[#674188]"
                                style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                                COMPANY LOGO
                            </h1>
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold pb-6 md:pb-10 leading-tight"
                                style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                                WANT TO WORK WITH US?
                            </h1>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pb-6 md:pb-10">
                                <FontAwesomeIcon
                                    icon={faPhoneVolume}
                                    color="#674188"
                                    size="2xl"
                                    className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 mt-1 sm:mt-0"
                                />
                                <div>
                                    <h3 className="text-sm sm:text-base" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                                        TALK TO OUR SUPPORT TEAM
                                        <br />
                                        <span className="font-bold text-base sm:text-lg">+91-9567797440</span>
                                    </h3>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pb-6 md:pb-10">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    color="#674188"
                                    size="2xl"
                                    className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 mt-1 sm:mt-0"
                                />
                                <div>
                                    <h3 className="text-sm sm:text-base" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                                        EMAIL OUR SUPPORT TEAM
                                        <br />
                                        <span className="font-bold text-base sm:text-lg">support@company.com</span>
                                    </h3>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2 }}
                                className="flex gap-4 sm:gap-6 md:gap-10">
                                <Image
                                    src={assets.insta_icon}
                                    className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform cursor-pointer"
                                    alt="Instagram icon"
                                />
                                <Image
                                    src={assets.youtube_icon}
                                    className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform cursor-pointer"
                                    alt="YouTube icon"
                                />
                                <Image
                                    src={assets.logo_facebook}
                                    className="w-10 h-10 sm:w-12 sm:h-12 hover:scale-110 transition-transform cursor-pointer"
                                    alt="Facebook icon"
                                />
                            </motion.div>
                        </div>

                        <div className="mt-8 lg:mt-0">
                            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg ">
                                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#674188]"
                                    style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                                    GET IN TOUCH
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullname"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#674188] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                            placeholder="Enter your Full Name"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#674188] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                            placeholder="Enter your Phone Number"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#674188] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                                            placeholder="Enter your Email ID"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="3"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#674188] focus:border-transparent transition-all duration-200 resize-vertical text-sm sm:text-base"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="w-full bg-[#674188] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#5a3674]  text-sm sm:text-base"
                                            style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
                                        >
                                            SEND MESSAGE
                                        </button>
                                    </div>
                                    <p className="mt-4">{result}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <GoogleMap />
            </div>
        </>
    )
}