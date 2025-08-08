export default function Youtube() {
    return (
       <div className="w-full flex justify-center my-35">
      <div className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[800px] aspect-video">
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&rel=0&modestbranding=1"
          title="YouTube video player"
          
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
       
    )
}