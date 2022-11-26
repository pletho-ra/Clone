import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const VideoSection = () => {
  useEffect(()=> {
    Aos.init({
      once: true,
    })
  }, [])

  return (
    <section className="py-12 mb-[170px]">
      <div className="container py-12">
        <div className="row justify-center pt-12" data-aos = "fade-up" data-aos-delay = "200">
            <div className="text-center">
                <h2 className="text-[#212529] h2_Video-section">
                    Want to get started in
                    <br/>
                    under 5 minutes?
                </h2>
            </div>
        </div>
        <div className="row py-12 justify-center" style={{'height':'auto'}}>
          <div className="video_sc_outer">
            <iframe 
              src="https://www.youtube.com/embed/83HHZ_PLNFA" 
              frameBorder="0"
              allow= "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube"
              className="video_sc_inner"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
