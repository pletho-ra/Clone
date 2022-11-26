import React from 'react'
import { images } from '../constants'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsFillHandIndexThumbFill }  from 'react-icons/bs'
import { BsXLg } from 'react-icons/bs'
import { Hero } from './index'

import {useState} from 'react'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section className = 'home_hero mdMax:bg-bottom' >
      <header className = 'h-[6.25rem]'>
        <nav className = 'navbar scrolled navbar-expand-lg navbar-light mdx:flex-row mdx:flex-nowrap mdx:justify-start mdNav:px-0'>
          <div className = 'container'>
          <a href="/" className = 'inline-block py-[.0625rem] mr-4 text-[1.25rem] whitespace-nowrap'>
            <img
              src = {images.logo}
              alt = 'logo'
              className = '.navbar__brand max-w-full h-[100px] align-middle'
            />
          </a>
          <ul className = 'hidden lg:flex space-x-8 text-lg items-center text-white ml-auto'>
            <li><a href="/">Testimonials</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">FAQ's</a></li>
          </ul>
          <div className = 'flex lg:hidden space-x-2 border-2 border-white rounded-lg ml-auto'>
            <AiOutlineMenu className=" text-4xl border-white p-1 text-white" onClick ={() => setToggleMenu(true)} />

            {toggleMenu &&
              <div className = 'flex flex-col w-[calc(100% - 1.4rem)] bg-white absolute top-0 left-0 right-0 z-1050  overflow-y-auto px-[1.5rem] rounded-[0.375rem] ease-in items-center duration-200'>
                <div className = ' flex justify-between w-full items-center border-b-2 border-gray-500 mb-5 pb-4'>
                    <img
                      src = {images.logo}
                      alt = 'logo'
                      className = 'w-30 h-12 lg:hidden object-contain'
                    />
                    <BsXLg className = 'text-md text-black' onClick = {() => setToggleMenu(false)}/>
                </div>
                <ul className = 'lg:hidden space-y-5 text-lg text-black w-full text-center z-[1050]'>
                  <li className = ''><a href='/'>Testimonials</a></li>
                  <li className = ''><a href='/'>Features</a></li>
                  <li className = ''><a href='/'>Pricing</a></li>
                  <li className = ''><a href='/'>FAQ's</a></li>
                </ul>
                <ul className="flex flex-col lg:hidden  text-center z-[1050] ">
                  <li className = ' mx-3 pt-4'><a href="/" className="register_btn sm:inline-block"><BsFillHandIndexThumbFill className= "inline-block align-center" /> &nbsp; Register for free</a></li>
                  <li className =' mx-3 pt-4 '><a href="/" className= 'sign_btn'>Sign In</a></li>
                </ul>
              </div>
            }
          </div>
          <ul className="hidden lg:flex space-x-2 items-center ml-auto">
            <li className = ' pt-2 '><a href="/" className="register_btn sm:inline-block"><BsFillHandIndexThumbFill className= "inline-block" /> &nbsp; Register for free</a></li>
            <li className = ' pt-2 '><a href="/" className="sign_btn bg-white">Sign In</a></li>
          </ul>
          </div>
        </nav>
      </header>
      <Hero 
        toggleMenu ={toggleMenu}  
      />
    </section>
  )
}

export default Header;

