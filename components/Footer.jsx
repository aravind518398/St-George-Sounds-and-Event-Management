"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";



export default function Footer() {
    const backgroundImg = assets.footer_img.src
    return (
        <div className="w-full h-[100vh] "
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"

            }}>
            <div className="w-full h-[100vh] bg-black/82 ">
                <div className="" >
                    <ul className="flex gap-20 pt-10 justify-center">
                        <a target="_blank" href="#"><li><FontAwesomeIcon icon={faInstagram} color="white" size="xl" /></li></a>
                        <a target="_blank" href="#"><li><FontAwesomeIcon icon={faYoutube} color="white" size="xl" /></li></a>
                        <a target="_blank" href="#"><li><FontAwesomeIcon icon={faFacebook} color="white" size="xl" /></li></a>
                    </ul>
                </div>
                <div>
                    <h1 className="text-3xl text-white py-20 text-center" style={{ fontFamily: "Courier" }}>COMPANY LOGO</h1>
                </div>
                <div className="flex justify-center">
                    <p className="text-white max-w-[400px]  md:max-w-[600px] lg:max-w-[900px] " style={{ fontFamily: "Courier" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
                {/* Table section */}
                <div className="flex justify-center">
                    <FooterTable heading={"QUICK LINK"} items={["Home", "About", "Gallery", "Contact"]} />
                    <FooterTable heading={"SERVICES"} items={["Corporate Events", "Wedding Photography", "Event Planning"]} />
                    <FooterTable heading={"CONTACT INFO"} items={["Email: contact@example.com", "Phone: +1234567890", "Address: 123 Street"]} />
                </div>

            </div>

        </div>
    )
}


export function FooterTable({ heading, items }) {

    return (
        <div className="text-white w-[300px]  py-16">
            <h1 className="text-xl ">{heading}</h1>
            <br />
            <ul className="space-y-2" style={{ fontFamily: "Courier, monospace" }}>
    {items?.map((value, index) => (
        <li key={index}>
            <a 
                href="#" 
                className="cursor-pointer hover:text-[#009075] transition-colors duration-200 block"
            >
                {value}
            </a>
        </li>
    ))}
</ul>

        </div>
    )
}