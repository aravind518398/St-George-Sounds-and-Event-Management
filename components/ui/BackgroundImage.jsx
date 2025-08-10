"use client";

import { assets } from "../../assets/assets";

export default function BackgroundImage() {
    return (
 <div className="fixed top-0 left-0 w-full h-[70vh] -z-10" style={{
    backgroundImage: `url(${assets.event_management.src})`, 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}}>
</div>
    )
}