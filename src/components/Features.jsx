import React, { useEffect, useRef, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Features = () => {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const myRef = useRef();
  const ref = useRef();

  useEffect(()=> {
    Aos.init
    ({once: true});
  }, [])
  useEffect(()=> {
    const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0];
      setIsElementVisible(entry.isIntersecting);
      if(entry.isIntersecting) { observer.unobserve(entry.target) }
    }, 
    {
      threshold: 0.2,
    }
    )
    observer.observe(myRef.current);
  },[]);

  const progressBar = ()=> {
    var width = 1;
    var id = setInterval(()=>{
      if(width >= 100){
        clearInterval(id);
      } else {
        width++;
        ref.current.style.width = width + '%';
      }
    }, 20)
  }
  const fadeup = (item, delay) => {
    if(isElementVisible){
      setTimeout(function () {
        item.classList.add('about-stages__show-item');
      }, delay);
    } else {
      clearInterval(item.classList)
    }
  }

    var items = document.querySelectorAll('.about-stages__item');
    items.forEach((item, i) => {
      fadeup(item, i*1000);  
    })

  return (
    <section className='about_stages w-full block overflow-hidden '>
      <div className='container block pb-12'>
        <h2 className='text-white h2_about-stages' data-aos='fade-up' data-aos-delay='400' > The Simplest software for businesses that go door-to-door. </h2>
        <div className= 'slide-progress_bar h-[12px]'>
          <div  id= 'progress-bar' ref = {ref} className={`progress_bar ${ isElementVisible ? progressBar() : ''}`}></div>
        </div>
        <div className="about-stages__items" ref = {myRef}>
          <div className= 'about-stages__item'>
            <h3 className="text-white items ">Digital
             <br/>
             Areas
            </h3>
            <p> Allows your organization to send your teams where they need to go, and track their efforts. </p>
          </div>
          <div className= 'about-stages__item'>
            <h3 className="text-white items ">Linked 
             <br/>
              Calender
            </h3>
            <p> Allows your team instantly setup appointments with your sales team.</p>
          </div>
          <div className= 'about-stages__item'>
            <h3 className="text-white items ">Digital 
             <br/>
             contracts
            </h3>
            <p> Allows your team to instantly get waives and contracts signed at the door.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
