import React from 'react'
import { useState } from 'react'
import { Button } from './Statistics'
import "../styles/component-styles/creative.css"


const social_media = [
  {
    id: 1,
    src: "./photos/imgi_56_usecase-resize.webp",
    description: "Auto-resize for each platform.",
    span: "Make your design fit every social format, fast."
  },

  {
    id: 2,
    src: "./photos/imgi_57_on-brand.webp",
    description: "Create on-brand stories and reels.",
    span: "Stay true to your brand style in every post."
  },

  {
    id: 3,
    src: "./photos/imgi_58_remove-background.webp",
    description: "Remove background to highlight subjects.",
    span: "Clean up your content and keep the focus on your subject."
  },

  {
    id: 4,
    src: "./photos/imgi_59_social-post.webp",
    description: "Generate social media posts.",
    span: "Need content fast? Get scroll-worthy posts in seconds."
  }
]


// Button try
export const TryButton = () => {
  return (
    <button className="try-btn">
      Try
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg"><path d="M-24 422h401.645l-72.822 72.822c-9.763 9.763-9.763 25.592 0 35.355 9.763 9.764 25.593 9.762 35.355 0l115.5-115.5a25 25 0 0 0 0-35.355l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355 0-9.763 9.763-9.763 25.592 0 35.355l72.822 72.822H-24c-13.808 0-25 11.193-25 25S-37.808 422-24 422"></path></svg>
    </button>
  )
}

// Single card design
export const CreativeImageCard = ({prop}) => {
  return (
    <div>
      <div className="creative-image-card" style={{backgroundImage:`url(${prop.src})`}}>
        <TryButton />
      </div>
      <p>{prop.description}<span> {prop.span}</span></p>
    </div>
  )
}

// card list for an option selected
export const CreativeImageCards = ({prop}) => {
  return (
    <div className="creative-image-cards">
        {prop.map((card) => (
          <CreativeImageCard key={card.id} prop={card} />
        ))}
    </div>
  )
}


const Creative = () => {
  // Introducing a state to manage toggling
  const [toggleState, setToggleState] = useState(1);

  const handleToggle = (index) => {
    setToggleState(index);
  }

  return (
    <div className="demo-section">
       {/* Tabs section to manipulate contents */}
      <div className="tabs-row">
        {/* tab for Social media */}
        <button className={toggleState === 1 ? "tab tab-active" : "tab"} onClick={() => handleToggle(1)}>Social media</button>

        {/* tab for Video creation */}
        <button className={toggleState === 2 ? "tab tab-active" : "tab"} onClick={() => handleToggle(2)}>Advertising</button>

        {/* tab for Video generation */}
        <button className={toggleState === 3 ? "tab tab-active" : "tab"} onClick={() => handleToggle(3)}>Video creation</button>

        {/* tab for Photography */}
        <button className={toggleState === 4 ? "tab tab-active" : "tab"} onClick={() => handleToggle(4)}>Photography</button>

        {/* tab for Branding */}
        <button className={toggleState === 5 ? "tab tab-active" : "tab"} onClick={() => handleToggle(5)}>Branding</button>

        {/* tab for Printed materials */}
        <button className={toggleState === 5 ? "tab tab-active" : "tab"} onClick={() => handleToggle(5)}>Printed materials</button>

        {/* tab for Audion creation */}
        <button className={toggleState === 5 ? "tab tab-active" : "tab"} onClick={() => handleToggle(5)}>Audion creation</button>

      </div>

      {/* Content section for all the tabs */}
      <div className="demo-image-contents">

        {/* Content for the image editing tab */}
        <div className={toggleState === 1 ? "demo-content demo-content-active" : "demo-content"}>
          <CreativeImageCards prop={social_media} />
        </div>

        {/* Content for the image generation tab */}
        <div className={toggleState === 2 ? "demo-content demo-content-active" : "demo-content"}>
          {/* <img src="./photos/imgi_52_image-generation-new.webp" alt="" /> */}
        </div>

        {/* Content for the video generation tab */}
        <div className={toggleState === 3 ? "demo-content demo-content-active" : "demo-content"}>
          {/* <img src="./photos/imgi_53_video-generator.webp" alt="" /> */}
        </div>

        {/* Content for the video editing tab */}
        <div className={toggleState === 4 ? "demo-content demo-content-active" : "demo-content"}>
          {/* <img src="./photos/imgi_54_video-editor.webp" alt="" /> */}
        </div>

        {/* Content for the audio generation tab */}
        <div className={toggleState === 5 ? "demo-content demo-content-active" : "demo-content"}>
          {/* <img src="./photos/imgi_55_audio-generation.webp" alt="" /> */}
        </div>

      </div>

     
    </div>
  )
}

export default Creative