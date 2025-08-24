

import BackgroundImage from '../../../components/ui/BackgroundImage'
import Navbar from '../../../components/Navbar'
import Whatsapp from '../../../components/ui/Whatsapp'
import Footer from '../../../components/Footer'
import Gallery from '../../../components/Gallery'
import { assets } from '../../../assets/assets'

export default async function GalleryPage() {
  const sea_vibe = assets.sea_vibe.src;

  try {
    return (
      <>
        <BackgroundImage src={sea_vibe} />
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





