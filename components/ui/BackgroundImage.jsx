"use client";



export default function BackgroundImage({ src }) {
    return (
        <div className="fixed top-0 left-0 w-full h-[70vh] -z-10 brightness-80" style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
        </div>
    )
}