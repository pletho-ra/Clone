import React, {useEffect} from 'react'
import './FaqSection.css'
// import {Question} from './index'

import Aos from 'aos'
import 'aos/dist/aos.css'

const FaqSection = () => {
  useEffect(() => {
    Aos.init
    ({once:true})
  }, []);

  return (
    <section className='py-12'>
      <div className="container">
        <div data-aos='fade-up' data-aos-delay='100' className="row justify-center py-12">
           <div className="col text-center">
               <h1 className="text-[2.75rem] font-semibold">Frequently Asked Questions</h1>         
           </div> 
        </div>
        {/* <Question /> */}
      </div>
    </section>
  )
}

export default FaqSection
