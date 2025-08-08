"use client"
import Image from 'next/image';
import {motion} from 'framer-motion';

export default function ImageBox({ images, heading, content }) {
  return (
    <div className="relative w-100 h-60 overflow-hidden  rounded-2xl">
      <Image
        src={images}
        alt="example"
        width={100}
        height={60}
        className="w-full h-full object-cover rounded-2xl "
      />
    
      
      <motion.div
      initial={{opacity:0, y:60}}
      whileHover={{opacity:1, y:0}}
      transition={{duration:0.2}}
        className="flex flex-col w-100 h-60 bg-black/50 rounded-2xl absolute top-0 left-0  "
        style={{ fontFamily: 'var(--font-roboto)' }}
      >
        <h1 className="text-2xl pl-10 text-white/90 pt-10">{heading}</h1>
        <p className="pl-10 text-white/90 pt-3 max-w-[280px]">{content}</p>
      </motion.div>
    </div>
  );
}