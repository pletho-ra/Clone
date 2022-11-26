import React from 'react'
import { images } from '../constants'

const DownloadApp = () => {
  return (
    <section style ={{'background': 'linear-gradient(150deg, black, transparent)'}} className = 'py-12'>
      <div className="container">
        <div className="flex flex-wrap mx-[-15px] justify-center">
            <div className="col-12 text-white text-center col-md-8">
                <h2 className="h1 text-[2.5rem] text-white font-normal font-serif mb-[1.5rem] mt-0">
                    Download Our Mobile App
                </h2>
                <a href="https://apps.apple.com/ee/app/sales-liger/id1596990385" target="_blank" rel="noreferrer" className="text-center my-0 mx-[10px] inline-block">
                    <img src={images.apple} alt="AppStore" width="150px" height="45px"/>
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.buildingit.salesliger&hl=en_IN&gl=US" target="_blank" rel="noreferrer" className="text-center my-0 mx-[10px] inline-block">
                    <img src={ images.google} alt="Google" width="150px" height="45px"/>
                </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default DownloadApp
