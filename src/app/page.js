import Carousel from "../../components/Carousel";
import Count from "../../components/ui/Count";
import Navbar from "../../components/Navbar";
import Youtube from "../../components/Youtube";
import Service from "../../components/Service";
import Footer from "../../components/Footer";
import Whatsapp from "../../components/ui/Whatsapp";
import PhotoGallery from "../../components/PhotoGallery";


export default function Home() {
  return (
  <>
  <Navbar/>
  <Carousel/>
  <Count/>
  <Youtube/>
  <Service/>
  <PhotoGallery/>
  <Footer/>
  <Whatsapp/>
  </>
  );
}
