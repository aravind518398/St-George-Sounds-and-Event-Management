"use client";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Whatsapp() {

   const handleClick = () => {
    const phoneNumber = "919567797440";
    const message = "Hi";
    const encodedMessage = encodeURIComponent(message);

    // Detect mobile or desktop
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Open WhatsApp app
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    } else {
      // Open WhatsApp Web
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, "_blank");
    }
  };

  return (
    <motion.div
    initial={{scale:0 }}
    whileInView={{scale:1}}
    transition={{delay:1, stiffness:100, type:"spring"}}
    className="fixed right-4 bottom-4 md:right-6 md:bottom-6  lg:right-8 lg:bottom-8 z-40 "
    ><a target="_blank" onClick={handleClick}>
      <Image src="/whatsapp-png-icon.png" alt="whatsapp-icon" width={60} height={60} className="hover:brightness-90 w-13 md:w-15 lg:w-17 "/>
      </a></motion.div>
  )
}

