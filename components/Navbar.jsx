import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
    return (
        <div className="mx-[15%] my-[2%] ">
            <div className="flex justify-between items-center">
                <h1 >COMPANY LOGO</h1>
                <ul className="flex gap-15 ">
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>GALLERY</li>
                    <li>CONTACT US</li>
                </ul>
                <button className="flex bg-gradient-to-br from-[#009075] to-[#00c9a7] text-[#ededed] rounded-3xl px-5 py-2 gap-1
                hover:from-[#00c9a7] hover:to-[#009075] transition-all duration-300 "><FontAwesomeIcon icon={faPhone} className=" text-shadow-white" style={{ width: "16px" }} />+91 9567797440</button>
            </div>
        </div>

    )
}