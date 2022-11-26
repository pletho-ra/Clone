import React, {useEffect} from 'react'
import './Testinomials.css';
import {FaStar} from 'react-icons/fa'
import {images} from '../constants'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Testinomials = () => {

  useEffect(()=> {
    Aos.init
    ({once:true})
  },[]);  
  return (
    <section className = "testinomials_section py-12">
      <div className="container pb-12">
        <div data-aos = "fade-up" data-aos-delay = "100" className="row justify-center py-12">
            <div className="col text-center">
                <h1 className="text-white display-2 font-bold">Testinomials</h1>
                <p className="text-white">Our product is loved by users worldwide.</p>
            </div>
        </div>
        <div className="home_sc_9_card row py-4">
          <div data-aos="fade-up" data-aos-delay= "200" className="col-md-4 py-4">
            <div className="card">
              <div className="card-body pt-6 pl-6">
                <div className="d-flex">
                  <div>
                    <img src={images.james} alt="James Curran" className="img-fluid" style={{'borderRadius':'50%'}} />
                  </div>
                  <div className="pl-4">
                    <label htmlFor="" className="mb-0">Kip Dynamite</label>
                    <p>Customer</p>
                  </div>
                </div>
                <div>
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                </div>
                <h6>I sold like $65,000 in Tupperware using sales Liger</h6>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay= "200" className="col-md-4 py-4">
            <div className="card">
              <div className="card-body pt-6 pl-6">
                <div className="d-flex">
                  <div>
                    <img src={images.james} alt="James Curran" className="img-fluid" style={{'borderRadius':'50%'}} />
                  </div>
                  <div className="pl-4">
                    <label htmlFor="" className="mb-0">Kip Dynamite</label>
                    <p>Customer</p>
                  </div>
                </div>
                <div>
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                </div>
                <h6>I sold like $65,000 in Tupperware using sales Liger</h6>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay= "200" className="col-md-4 py-4 tag">
            <div className="card">
              <div className="card-body pt-6 pl-6">
                <div className="d-flex">
                  <div>
                    <img src={images.james} alt="James Curran" className="img-fluid" style={{'borderRadius':'50%'}} />
                  </div>
                  <div className="pl-4">
                    <label htmlFor="" className="mb-0">Kip Dynamite</label>
                    <p>Customer</p>
                  </div>
                </div>
                <div>
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                  <FaStar className='text-[#d4AF37] inline-block' />
                </div>
                <h6>I sold like $65,000 in Tupperware using sales Liger</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testinomials
