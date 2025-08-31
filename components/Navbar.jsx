"use client";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
export default function Navbar() {
    const [isClicked, setIsClicked] = useState(false);
    const pathname = usePathname();
    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <>
            <div className="absolute left-1/2 transform -translate-x-1/2 my-[2%] z-10 w-[100%] max-w-7xl">
                <div className="flex items-center justify-between px-2 sm:px-4">
                    <a href={"/"} onClick={() => (location.reload())}>
                        {/* <h1 className="text-white text-lg sm:text-xl md:text-2xl cursor-pointer whitespace-nowrap" style={{ fontFamily: "Verdana, Geneva, sans-serif" }}>
                            COMPANY LOGO
                        </h1> */}
                        <motion.div
                         initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{delay: 0.3, duration: 0.2, type: "spring", stiffness: 100 }}
                        >
<Image className="w-[50px] h-[50px]  md:w-[60px] md:h-[60px]  lg:w-[80px] lg:h-[80px]" src="/sg-logo.png" alt="logo" width={80} height={80} style={{ filter: "brightness(0) invert(1)" }}/>
                        </motion.div>
                        
                    </a>
                    <MobileNavbar isClicked={isClicked} handleClick={handleClick} />
                    <motion.ul
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
                        className="hidden lg:flex gap-6 xl:gap-10 text-[#171717] cursor-pointer bg-white/80 rounded-full px-6 xl:px-12 py-3 text-sm xl:text-base"
                    >
                        <Link href="/">
                            <li className={`transition-colors duration-300 whitespace-nowrap ${pathname === '/'
                                ? 'text-[#780794dc] font-semibold'
                                : 'hover:text-[#780794dc]/80'
                                }`}>
                                HOME
                            </li>
                        </Link>
                        <Link href="/about">
                            <li className={`transition-colors duration-300 whitespace-nowrap ${pathname === '/about'
                                ? 'text-[#780794dc] font-semibold'
                                : 'hover:text-[#780794dc]/80'
                                }`}>
                                ABOUT
                            </li>
                        </Link>
                        <Link href="/gallery">
                            <li className={`transition-colors duration-300 whitespace-nowrap ${pathname === '/gallery'
                                ? 'text-[#780794dc] font-semibold'
                                : 'hover:text-[#780794dc]/80'
                                }`}>
                                GALLERY
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li className={`transition-colors duration-300 whitespace-nowrap ${pathname === '/contact'
                                ? 'text-[#780794dc] font-semibold'
                                : 'hover:text-[#780794dc]/80'
                                }`}>
                                CONTACT
                            </li>
                        </Link>
                    </motion.ul>
                    <a href="tel:+919567797440">
                        <motion.button
                            initial={{ y: -100 }}
                            animate={{ y: 0 }}
                            className="hidden lg:flex justify-center items-center bg-gradient-to-br from-[#a920cb]/80 to-[#450255]/80 text-[#ededed] rounded-3xl px-3 xl:px-5 py-2 gap-1 border hover:from-[#450255]/80 hover:to-[#a920cb]/80 transition-all duration-500 text-sm xl:text-base whitespace-nowrap"
                        >
                            <FontAwesomeIcon icon={faPhone} className="text-shadow-white" style={{ width: "16px" }} />
                            <span className="xl:inline">+91 9567797440</span>

                        </motion.button>
                    </a>
                    <button onClick={handleClick} className="block lg:hidden p-2 ">
                        <Image src={isClicked ? assets.close_icon : assets.menu_white} alt={isClicked ? "close-icon" : "menu-icon"} className='w-6 h-6 ' />
                    </button>
                </div>
            </div>
        </>
    )
}

export function MobileNavbar({ isClicked, handleClick }) {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            {isClicked && <motion.div
                initial={{ y: -25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 1 }}

                className={`lg:hidden absolute top-15 left-0 w-full text-white ${isClicked ? "" : "hidden"}`}>
                <ul className="w-full">
                    <Link onClick={handleClick} href={"/"} className="block w-full "><li className={`w-full p-3 ${pathname === '/'
                        ? 'text-[#780794dc] font-semibold bg-white/60'
                        : 'hover:text-[#780794dc]/80   bg-black/60 hover:bg-white/70'
                        }`}>HOME</li></Link>
                    <Link onClick={handleClick} href={"/about"} className="block w-full"><li className={`w-full p-3 ${pathname === '/about'
                        ? 'text-[#780794dc] font-semibold bg-white/60'
                        : 'hover:text-[#780794dc]/80  bg-black/60 hover:bg-white/70'
                        }`}>ABOUT</li></Link>
                    <Link onClick={handleClick} href={"/gallery"} className="block w-ful"><li className={`w-full p-3 ${pathname === '/gallery'
                        ? 'text-[#780794dc] font-semibold bg-white/60'
                        : 'hover:text-[#780794dc]/80  bg-black/60 hover:bg-white/70'
                        }`}>GALLERY</li></Link>
                    <Link onClick={handleClick} href={"/contact"} className="block w-full "><li className={`w-full p-3 ${pathname === '/contact'
                        ? 'text-[#780794dc] font-semibold bg-white/60'
                        : 'hover:text-[#780794dc]/80  bg-black/60 hover:bg-white/70'
                        }`}>CONTACT</li></Link>
                </ul>
            </motion.div>}
        </AnimatePresence>
    )
}







