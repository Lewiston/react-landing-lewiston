import React from 'react'
import { useState } from 'react'
import { TryButton } from "./Creative"
import "../styles/component-styles/features.css"


const images = [
  {
    id: 1,
    src: "./photos/imgi_230_generate-main.webp",
    heading: "Generate an AI image",
    info: true
  },

  {
    id: 2,
    src: "./photos/imgi_231_aiassistant-main.webp",
    heading: "Chat with AI to transform images",
    info: false
  },

  {
    id: 3,
    src: "./photos/imgi_232_find-main.webp",
    heading: "Find high-quality images",
    info: false
  },

  {
    id: 4,
    src: "./photos/imgi_233_edit-an-image-main.webp",
    heading: "Edit an image",
    info: true
  },

  {
    id: 5,
    src: "./photos/imgi_234_onbrand-images-2.webp",
    heading: "Create on-brand AI images",
    info: false
  },

  {
    id: 6,
    src: "./photos/imgi_235_upscale-main.webp",
    heading: "Upscale an image up to 10K",
    info: true
  }
]

const video = [
  {
    id: 1,
    src: "./photos/imgi_236_generate-video-main.webp",
    heading: "Generate an AI video",
    info: true
  },

  {
    id: 2,
    src: "./photos/imgi_237_find-video-main.webp",
    heading: "Find stock videos",
    info: false
  },

  {
    id: 3,
    src: "./photos/imgi_238_edit-video-main.webp",
    heading: "Edit a video",
    info: true
  },

  {
    id: 4,
    src: "./photos/imgi_239_add-sfx-video-main.webp",
    heading: "Add sound effects to a video",
    info: true
  },

  {
    id: 5,
    src: "./photos/imgi_240_upscale-video-main.webp",
    heading: "Upscale a video up to 4K",
    info: true
  },

  {
    id: 6,
    src: "./photos/imgi_241_create-lypsinc-main.webp",
    heading: "Create lip sync",
    info: true
  }
]

const audio = [
  {
    id: 1,
    src: "./photos/imgi_242_gen-voiceover-main.webp",
    heading: "Generate a voiceover",
    info: true
  },

  {
    id: 2,
    src: "./photos/imgi_243_find-stock-music-main.webp",
    heading: "Find royalty-free stock music",
    info: false
  },

  {
    id: 3,
    src: "./photos/imgi_244_create-sfx-main.webp",
    heading: "Generate sound effects",
    info: true
  },

  {
    id: 4,
    src: "./photos/imgi_239_add-sfx-video-main.webp",
    heading: "Add sound effects to a video",
    info: true
  },

  {
    id: 5,
    src: "./photos/imgi_245_find-sfx-main.webp",
    heading: "Find stock sound effects",
    info: false
  },

  {
    id: 6,
    src: "./photos/imgi_246_intro-outros-main.webp",
    heading: "Find intros and outros",
    info: false
  }

]

const illustrations = [
  {
    id: 1,
    src: "./photos/imgi_247_make-ai-illustration-main.webp",
    heading: "Generate AI Illustrations",
    info: true
  },

  {
    id: 2,
    src: "./photos/imgi_248_stock-vector-main.webp",
    heading: "Find stock vectors",
    info: false
  },

  {
    id: 3,
    src: "./photos/imgi_249_stock-illus-main.webp",
    heading: "Find stock illustrations",
    info: false
  },

  {
    id: 4,
    src: "./photos/imgi_250_brand-illustration.webp",
    heading: "Create on-brand AI illustrations",
    info: false
  },

  {
    id: 5,
    src: "./photos/imgi_251_animate-illustration-main.webp",
    heading: "Animate an illustration",
    info: false
  },

  {
    id: 6,
    src: "./photos/imgi_252_onbrand-illustration-main.webp",
    heading: "Convert any image to SVG",
    info: false
  }

]

const design = [
  {
    id: 1,
    src: "./photos/imgi_231_aiassistant-main.webp",
    heading: "Use AI Assistant for graphic design",
    info: true
  },

  {
    id: 2,
    src: "./photos/imgi_253_stock-templates-main.webp",
    heading: "Find stock templates and PSDs",
    info: true
  },

  {
    id: 3,
    src: "./photos/imgi_254_social-media-main.webp",
    heading: "Create social media posts",
    info: true
  },

  {
    id: 4,
    src: "./photos/imgi_255_mockup-logo.webp",
    heading: "Generate a mockup",
    info: true
  },

  {
    id: 5,
    src: "./photos/imgi_256_banner-main.webp",
    heading: "Create banners, posters, and more",
    info: true
  },

  {
    id: 6,
    src: "./photos/imgi_257_design-icon-main.webp",
    heading: "Generate AI icons",
    info: true
  }

]





// Single card design
export const FeaturesImageCard = ({prop}) => {
  return (
    <div className="features-image-container">
      <div className="features-image-card" style={{background:`url(${prop.src})`}}>
        <p>{prop.heading}</p>
        <div className="try-info-btns">
          <TryButton />
          { prop.info && 
            <button className="info-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-xl"><path d="M207 653c-68.38 0-132.667-26.629-181.02-74.98C-22.371 529.667-49 465.38-49 397s26.629-132.667 74.98-181.02C74.333 167.629 138.62 141 207 141s132.667 26.629 181.02 74.98C436.371 264.333 463 328.62 463 397s-26.629 132.667-74.98 181.02C339.667 626.371 275.38 653 207 653m0-462C93.411 191 1 283.411 1 397s92.411 206 206 206 206-92.411 206-206-92.411-206-206-206"></path><path d="M217 543c-13.807 0-25-11.193-25-25V391h-25c-13.807 0-25-11.193-25-25s11.193-25 25-25h50c13.807 0 25 11.193 25 25v152c0 13.807-11.193 25-25 25m-10-232c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30"></path></svg>
            </button>
          }
        </div>
      </div>
    </div>
  )
}

// card list for an option selected
export const FeaturesImageCards = ({prop}) => {
  return (
    <div className="features-image-cards">
        {prop.map((card) => (
          <FeaturesImageCard key={card.id} prop={card} />
        ))}
    </div>
  )
}


const Features = () => {
  // Introducing a state to manage toggling
  const [toggleState, setToggleState] = useState(1);

  const handleToggle = (index) => {
    setToggleState(index);
  }

  return (
    <div className="features-section">
      <div className="features-title">
        <h2>The features you need, the simplicity you want</h2>
        <button className="btn-how-to-start"> How to start with AI</button>
      </div>

      <div className="features-tabs">
        {/* Tabs section to manipulate contents */}
        <div className="features-tabs-row">
          {/* tab for Images */}
          <button className={toggleState === 1 ? "tab tab-active" : "tab"} onClick={() => handleToggle(1)}>Images</button>

          {/* tab for Video */}
          <button className={toggleState === 2 ? "tab tab-active" : "tab"} onClick={() => handleToggle(2)}>Video</button>

          {/* tab for Audio */}
          <button className={toggleState === 3 ? "tab tab-active" : "tab"} onClick={() => handleToggle(3)}>Audio</button>

          {/* tab for Illustrations */}
          <button className={toggleState === 4 ? "tab tab-active" : "tab"} onClick={() => handleToggle(4)}>Illustrations</button>

          {/* tab for Design */}
          <button className={toggleState === 5 ? "tab tab-active" : "tab"} onClick={() => handleToggle(5)}>Design</button>

          {/* tab for All AI tools */}
          <a className="ai-tool-link-btn" href="https://www.freepik.com/ai#from_element=home_tools">
            <button className="tab"> <p>All AI tools</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg"><path d="M-24 422h401.645l-72.822 72.822c-9.763 9.763-9.763 25.592 0 35.355 9.763 9.764 25.593 9.762 35.355 0l115.5-115.5a25 25 0 0 0 0-35.355l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355 0-9.763 9.763-9.763 25.592 0 35.355l72.822 72.822H-24c-13.808 0-25 11.193-25 25S-37.808 422-24 422"></path></svg>
            </button>
          </a>

        </div>

        {/* Content section for all the tabs */}
        <div className="demo-image-contents">

          {/* Content for the images tab */}
          <div className={toggleState === 1 ? "demo-content demo-content-active" : "demo-content"}>
            <FeaturesImageCards prop={images} />
          </div>

          {/* Content for the video tab */}
          <div className={toggleState === 2 ? "demo-content demo-content-active" : "demo-content"}>
            <FeaturesImageCards prop={video} />
          </div>

          {/* Content for the audio tab */}
          <div className={toggleState === 3 ? "demo-content demo-content-active" : "demo-content"}>
            <FeaturesImageCards prop={audio} />
          </div>

          {/* Content for the illustrations tab */}
          <div className={toggleState === 4 ? "demo-content demo-content-active" : "demo-content"}>
            <FeaturesImageCards prop={illustrations} />
          </div>

          {/* Content for the design tab */}
          <div className={toggleState === 5 ? "demo-content demo-content-active" : "demo-content"}>
            <FeaturesImageCards prop={design} />
          </div>

        </div>

      </div>

     
    </div>
  )
}

export default Features