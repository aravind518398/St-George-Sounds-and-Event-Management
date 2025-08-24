import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import BackgroundImage from "../../../components/ui/BackgroundImage";
import Contact from "../../../components/Contact";
import Whatsapp from "../../../components/ui/Whatsapp";
import { assets } from "../../../assets/assets";

export default function ContactPage() {
    const event_management = assets.event_management.src;
    return (
        <>
            <BackgroundImage src={event_management} />
            <Navbar />
            <Contact />
            <Footer />
            <Whatsapp />
        </>
    )
}