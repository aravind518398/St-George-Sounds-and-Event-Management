import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
    return (
        <div className="left-1/2 transform -translate-x-1/2 my-[2%] absolute z-10 w-[50%]">
            <div className="flex  items-center justify-between">
                <h1 className="text-white">COMPANY LOGO</h1>
                <ul className="flex gap-15 text-white cursor-pointer  ">
                    <li className="hover:text-[#00c9a7]/80  transition-colors duration-500 ">HOME</li>
                    <li className="hover:text-[#00c9a7]/80 transition-colors duration-500 ">ABOUT</li>
                    <li className="hover:text-[#00c9a7]/80 transition-colors duration-500 ">GALLERY</li>
                    <li className="hover:text-[#00c9a7]/80 transition-colors duration-500 ">CONTACT US</li>
                </ul>
                <button className="flex bg-gradient-to-br from-[#009075] to-[#00c9a7] text-[#ededed] rounded-3xl px-5 py-2 gap-1
                hover:from-[#00c9a7] hover:to-[#009075] transition-all duration-300 "><FontAwesomeIcon icon={faPhone} className=" text-shadow-white" style={{ width: "16px" }} />+91 9567797440</button>
            </div>
        </div>

    )
}