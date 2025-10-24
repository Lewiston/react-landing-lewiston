import React from 'react'
import { Button } from './Statistics'
import '../styles/component-styles/hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Hero title, description and button */}
      <div className="hero-texts">
        <h2>Creative work, reimagined</h2>
        <p>One suite: top AI models, pro editing tools, and stock assets—trusted by 700,000+ creatives.</p>
        <Button label="Get started for free" />
      </div>

      {/* Hero imagery */}
      <div className="hero-imagery">
        <video src="./videos/v4-home-video-with-logos-v4-home-video-with-logos.webm" autoPlay muted loop></video>
        <img className="img-top-left" src="./photos/imgi_1_v2-top-left.webp" alt="" />
        <img className="img-bottom-left" src="./photos/imgi_2_v2-bottom-left.webp" alt="" />
        <img className="img-right" src="./photos/imgi_3_v3-right.webp" alt="" />
      </div>
    </div>
  )
}

export default Hero