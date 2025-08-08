import Image from "next/image";
import ImageBox from "./ui/ImageBox";
import { assets } from "../assets/assets";

export default function Service() {
    return (
        <>
            <div className="bg-[#f4dc9f28] " style={{ fontFamily: "'Courier New', Courier, monospace" }}>
                <div>
                    <h1 className=" text-2xl md:text-4xl pt-20 text-purple-800 flex justify-center">OUR SERVICE</h1>
                </div>
                <div>
                    <h1 className="flex justify-center pt-8   md:text-3xl">Services by St George® Event Management</h1>
                </div>
                <div className="flex justify-center">
                    <p className="max-w-110  md:max-w-6xl pt-8 md:text-2xl  text-center ">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    </p>
                </div>
                <div className="flex justify-center pt-10 mb-10">
                    <Image src="/violet-design.svg" alt="violet-design" width={300} height={1} />
                </div>
                <div className="flex flex-wrap gap-6 justify-center max-w-[1200px] mx-auto pb-20">
                    <ImageBox images={assets.beautiful_woman.src} heading={"Heading"} content={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."}  />
                    <ImageBox images={assets.birthday_girl.src} heading={"Heading"}  content={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."}/>
                    <ImageBox images={assets.seminar.src} heading={"Heading"} content={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                    <ImageBox images={assets.traditional_dance.src} heading={"Heading"} content={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                    <ImageBox images={assets.birthday_girl.src} heading={"Heading"} content={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                    <ImageBox images={assets.beautiful_woman.src}  heading={"Heading"} content={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."}/>
                    
                </div>

            </div>
        </>
    )
}