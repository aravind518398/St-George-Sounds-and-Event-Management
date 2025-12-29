import Link from "next/link";
import PhotoGallery from "../../../components/PhotoGallery";
import BackgroundImage from "../../../components/ui/BackgroundImage";
import { assets } from "../../../assets/assets";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Whatsapp from "../../../components/ui/Whatsapp";

import About from "../../../components/About";



export default function AboutPage() {
 const carousel_four = assets.ower_cover_photo.src;
  return (
    <>
     <BackgroundImage src={carousel_four} />
       <Navbar />
        <About />
        <Footer />
        <Whatsapp />
    </>

  );
}