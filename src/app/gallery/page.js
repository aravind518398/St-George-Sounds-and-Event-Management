

import BackgroundImage from '../../../components/ui/BackgroundImage'
import Navbar from '../../../components/Navbar'
import Whatsapp from '../../../components/ui/Whatsapp'
import Footer from '../../../components/Footer'
import Gallery from '../../../components/Gallery'
import { assets } from '../../../assets/assets'


export default function GalleryPage() {
    const sea_vibe = assets.sea_vibe.src;
    

  

  return (
    <>
    <BackgroundImage src={sea_vibe}/>
    <Navbar/>
    <Gallery/>
      <Footer/>
    <Whatsapp/>
    </>
  )
}

