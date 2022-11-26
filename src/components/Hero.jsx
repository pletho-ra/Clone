import React from 'react'
import {images} from '../constants'
import { BsFillHandIndexThumbFill } from 'react-icons/bs'

const Hero = ({toggleMenu}) => {
  return (
    <div className = 'container px-[15px] mx-auto'>
      <div  className = 'home_sc_1 justify-between row'>
        <div className = 'self-center col-md-6 col-lg-5'>
            <h1 className='text-6xl leading-[70px] font-bold text-white font-sans py-4'>
            Simplest most affordable door-2-door sales software.
            </h1>
            <a href="/" className="inline-block register_btn text-center text-lg get_started">
                <BsFillHandIndexThumbFill className="inline-block align-middle"/>
                &nbsp; Register for free
            </a>
            <a href="/" className="register_btn inline-block text-center text-lg mt-[0.5rem] lg:hidden get_started">
                <BsFillHandIndexThumbFill className="inline-block"/>
                &nbsp; Sign in 
            </a>
        </div>
        <div className = {toggleMenu ? 'lg:flex-[0_0_58.333333%] lg:max-w-[58.333333%] md:flex-[0_0_50%] md:max-w-[50%] self-center relative w-full min-h-[1px] px-[15px] z-[-1050]' : 'lg:flex-[0_0_58.333333%] lg:max-w-[58.333333%] md:flex-[0_0_50%] md:max-w-[50%] self-center relative w-full min-h-[1px] px-[15px] z-1'}>
          <img 
            src={images.heropng} 
            alt=""
            className=''
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;
