import React from 'react'
import './About_Stats.css'

const About_Stats = () => {
  return (
    <section className="about-stats">
      <div className="container">
        <div className="about-stats_items">
            <div className="about-stats_item">
                <h2 className="text-[#212529] mt-0">
                    <span className="about-stats--number text-[#212529]">1200</span>
                    <br className="text-[#212529]"/>
                    Organizations
                </h2>
            </div>

            <div className="about-stats_item">
                <p className="text-[#212529] mt-0 mb-[1rem]">
                    Join the
                    <strong> 1,200 </strong>
                    organization using Our software.
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About_Stats
