import React, {useEffect, useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {images} from '../constants'

const Platform = () => {
  const [selected, setSelected] = useState('s3');

  const handleChange = (e) =>{
      setSelected(e.target.value);
  }
  useEffect(()=> {
    Aos.init
    ({once: true})
  }, [])
    
  return (
    <section className="py-12">
      <div className="container">
        <div data-aos = "fade-up" data-aos-delay = "200" className="pt-12 flex flex-wrap mx-[-15px] justify-center">
            <div className="text-center">
                <h2 className="h2_platform">Meet Our Desktop Platform</h2>
            </div>
        </div>
        
        <div id="slider" className="mt-4">
            <input type="radio" value='s1' name="slider" id="s1" onChange={handleChange} checked = {selected === 's1'}/>
              <input type="radio" value='s2' name="slider" id="s2" onChange={handleChange} checked = {selected === 's2'}/>
                <input type="radio" value='s3' name="slider" id="s3" onChange={handleChange} checked = {selected === 's3'}/>
                  <input type="radio" value='s4' name="slider" id="s4" onChange={handleChange} checked = {selected === 's4'}/>
                    <input type="radio" value='s5' name="slider" id="s5" onChange={handleChange} checked = {selected === 's5'}/>

            <label htmlFor="s1" id="slide1">
                <img src={images.pic2} alt="imageplaceholder" className="img-fluid rounded-[.5rem]" />
            </label>

            <label htmlFor="s2" id="slide2">
                <img src={images.pic3} alt="imageplaceholder" className="img-fluid rounded-[.5rem]" />
            </label>

            <label htmlFor="s3" id="slide3">
                <img src={images.pic4} alt="imageplaceholder" className="img-fluid rounded-[.5rem]" />
            </label>

            <label htmlFor="s4" id="slide4">
                <img src={images.pic2} alt="imageplaceholder" className="img-fluid rounded-[.5rem]" />
            </label>
            
            <label htmlFor="s5" id="slide5">
                <img src={images.pic5} alt="imageplaceholder" className="img-fluid rounded-[.5rem]"/>
            </label>
        </div>
      </div>
    </section>
  )
}

export default Platform
