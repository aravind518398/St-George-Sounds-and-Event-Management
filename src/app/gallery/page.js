

import BackgroundImage from '../../../components/ui/BackgroundImage'
import Navbar from '../../../components/Navbar'
import Whatsapp from '../../../components/ui/Whatsapp'
import Footer from '../../../components/Footer'
import Gallery from '../../../components/Gallery'
import { assets } from '../../../assets/assets'

export default async function GalleryPage() {
  const carousel_five = assets.carousel_five.src;

  try {
    return (
      <>
        <BackgroundImage src={carousel_five} />
        <Navbar />
        <Gallery />
        
        <Footer />
        <Whatsapp />
      </>
    )

  } catch (error) {
    console.error('Supabase error:', error)
    return <div>Gallery temporarily unavailable</div>
  }
}





