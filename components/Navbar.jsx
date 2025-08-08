import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { assets } from "../assets/assets";
import Image from "next/image";
export default function Navbar() {
    return (
     <div className="absolute left-1/2 transform -translate-x-1/2 my-[2%] z-10 w-full ">

            <div className="flex  items-center justify-between">
                <h1 className="text-white pl-5 ">COMPANY LOGO</h1>
                <ul className="hidden md:flex gap-10 text-white cursor-pointer">
                    <li className="hover:text-[#00c9a7]/80  transition-colors duration-300 ">HOME</li>
                    <li className="hover:text-[#00c9a7]/80 transition-colors duration-300 ">ABOUT</li>
                    <li className="hover:text-[#00c9a7]/80 transition-colors duration-300 ">GALLERY</li>
                    <li className="hover:text-[#00c9a7]/80 transition-colors duration-300 ">CONTACT US</li>
                </ul>
                <button className=" hidden md:flex bg-gradient-to-br from-[#009075] to-[#00c9a7] text-[#ededed] rounded-3xl px-5 py-2 gap-1
                hover:from-[#00c9a7] hover:to-[#009075] transition-all duration-300 mr-10"><FontAwesomeIcon icon={faPhone} className=" text-shadow-white" style={{ width: "16px" }} />+91 9567797440</button>
                 <button className="block md:hidden absolute right-5"  >
            <Image src={assets.menu_white} alt="menu-icon" className='w-6' />
          </button>
            </div>
        </div>

    )
}