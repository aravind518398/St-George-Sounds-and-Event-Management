import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import BackgroundImage from "../../../components/ui/BackgroundImage";
import Contact from "../../../components/Contact";
import Whatsapp from "../../../components/ui/Whatsapp";
import { assets } from "../../../assets/assets";

export default function ContactPage() {
    const carousel_four = assets.carousel_four.src;
    return (
        <>
            <BackgroundImage src={carousel_four} />
            <Navbar />
            <Contact />
            <Footer />
            <Whatsapp />
        </>
    )
}