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

const advertising = [
  {
    id: 1,
    src: "./photos/imgi_60_variants.webp",
    description: "Create ad variants for A/B testing.",
    span: "Upload your asset to get multiple ad variations—ready to test."
  },

  {
    id: 2,
    src: "./photos/imgi_61_photo-video.webp",
    description: "Create on-brand stories and reels.",
    span: "Stay true to your brand style in every post."
  },

  {
    id: 3,
    src: "./photos/imgi_62_upscale.webp",
    description: "Upscale assets for high-res ad formats.",
    span: "From banners to billboards, upscale up to 10K resolution."
  },

  {
    id: 4,
    src: "./photos/imgi_63_repurpose.webp",
    description: "Repurpose ads for different channels.",
    span: "One campaign, all sizes—ready for every platform."
  }
]

const video_creation = [
  {
    id: 1,
    src: "./photos/imgi_64_intros-outros.webp",
    description: "Animate your campaign shoots.",
    span: "Turn static images into scroll-stopping videos—perfect for social, ads, and decks."
  },

  {
    id: 2,
    src: "./photos/imgi_65_sound-effect.webp",
    description: "Add sound effects to your videos.",
    span: "Boost your videos with sound effects that grab attention."
  },

  {
    id: 3,
    src: "./photos/imgi_66_usecase-character.webp",
    description: "Create clips using consistent characters.",
    span: "Keep a cohesive look across all your clips."
  },

]

const photography = [
  {
    id: 1,
    src: "./photos/imgi_67_replace.webp",
    description: "Replace or remove objects.",
    span: "Clean up your image or swap in what you need."
  },

  {
    id: 2,
    src: "./photos/imgi_68_enhance.webp",
    description: "Enhance image quality.",
    span: "Fix any blurry photos and upscale up to 10K."
  },

  {
    id: 3,
    src: "./photos/imgi_69_change-location.webp",
    description: "Change the location of your photo.",
    span: "Move your subject anywhere with a new background."
  },

  {
    id: 4,
    src: "./photos/imgi_70_reimagine.webp",
    description: "Reimagine your photos as art.",
    span: "Give your images a bold new look with creative filters."
  },

  {
    id: 5,
    src: "./photos/imgi_71_animate-social.webp",
    description: "Animate still photography for socials.",
    span: "Add motion to your photos to boost your engagement."
  }

]

const branding = [
  {
    id: 1,
    src: "./photos/imgi_72_brand-images.webp",
    description: "Turn picture into branded images.",
    span: "Adapt photos to match any brand's style and identity."
  },

  {
    id: 2,
    src: "./photos/imgi_73_brand-mascots.webp",
    description: "Create unique brand mascots or illustrations.",
    span: "Give your brand personality with on-tone visuals."
  },

  {
    id: 3,
    src: "./photos/imgi_74_logo-concepts.webp",
    description: "Brainstorm logo concepts.",
    span: "Explore logo ideas to shape brand directions for your clients."
  },

  {
    id: 4,
    src: "./photos/imgi_75_mockup-logo.webp",
    description: "Mock up your logo on any photo.",
    span: "Showcase your logo in context, from packaging to posters."
  }

]

const printed_materials = [
  {
    id: 1,
    src: "./photos/imgi_76_upscale-print.webp",
    description: "Improve image resolution for printing.",
    span: "Enhance image quality for print—up to 10K resolution, ready in seconds."
  },

  {
    id: 2,
    src: "./photos/imgi_77_adjust-designs.webp",
    description: "Adjust your design for printing in different formats.",
    span: "Use it in brochures, posters, packaging, and more."
  },

  {
    id: 3,
    src: "./photos/imgi_78_packaging.webp",
    description: "Mock up product packaging designs.",
    span: "Preview packaging concepts before presenting them to clients."
  },

  {
    id: 4,
    src: "./photos/imgi_79_design-posters.webp",
    description: "Design posters and flyers.",
    span: "Create eye-catching posters and flyers for print or display."
  }

]

const audio_creation = [
  {
    id: 1,
    src: "./photos/imgi_80_covers.webp",
    description: "Design album covers.",
    span: "Match your music's vibe with a standout cover."
  },

  {
    id: 2,
    src: "./photos/imgi_81_visuals-songs.webp",
    description: "Create visuals for your songs.",
    span: "Design visuals that reflect your song's mood."
  },

  {
    id: 3,
    src: "./photos/imgi_82_voiceover-scripts.webp",
    description: "Build voiceover scripts.",
    span: "Write ready-to-record scripts for your voiceovers."
  },

  {
    id: 4,
    src: "./photos/imgi_83_animate-visuals.webp",
    description: "Animate album visuals.",
    span: "Add motion to your album artwork for digital drops."
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
    <div className="creative-image-container">
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
    <div className="creative-section">
      <h2>All in a single creative suite</h2>
       {/* Tabs section to manipulate contents */}
      <div className="creative-tabs-row">
        {/* tab for Social media */}
        <button className={toggleState === 1 ? "tab tab-active" : "tab"} onClick={() => handleToggle(1)}>Social media</button>

        {/* tab for Advertising */}
        <button className={toggleState === 2 ? "tab tab-active" : "tab"} onClick={() => handleToggle(2)}>Advertising</button>

        {/* tab for Video creation */}
        <button className={toggleState === 3 ? "tab tab-active" : "tab"} onClick={() => handleToggle(3)}>Video creation</button>

        {/* tab for Photography */}
        <button className={toggleState === 4 ? "tab tab-active" : "tab"} onClick={() => handleToggle(4)}>Photography</button>

        {/* tab for Branding */}
        <button className={toggleState === 5 ? "tab tab-active" : "tab"} onClick={() => handleToggle(5)}>Branding</button>

        {/* tab for Printed materials */}
        <button className={toggleState === 6 ? "tab tab-active" : "tab"} onClick={() => handleToggle(6)}>Printed materials</button>

        {/* tab for Audion creation */}
        <button className={toggleState === 7 ? "tab tab-active" : "tab"} onClick={() => handleToggle(7)}>Audion creation</button>

      </div>

      {/* Content section for all the tabs */}
      <div className="demo-image-contents">

        {/* Content for the social media tab */}
        <div className={toggleState === 1 ? "demo-content demo-content-active" : "demo-content"}>
          <CreativeImageCards prop={social_media} />
        </div>

        {/* Content for the advertising tab */}
        <div className={toggleState === 2 ? "demo-content demo-content-active" : "demo-content"}>
          <CreativeImageCards prop={advertising} />
        </div>

        {/* Content for the video creation tab */}
        <div className={toggleState === 3 ? "demo-content demo-content-active" : "demo-content"}>
          <CreativeImageCards prop={video_creation} />
        </div>

        {/* Content for the photography tab */}
        <div className={toggleState === 4 ? "demo-content demo-content-active" : "demo-content"}>
          <CreativeImageCards prop={photography} />
        </div>

        {/* Content for the branding tab */}
        <div className={toggleState === 5 ? "demo-content demo-content-active" : "demo-content"}>
          <CreativeImageCards prop={branding} />
        </div>

        {/* Content for the printed materials tab */}
        <div className={toggleState === 6 ? "demo-content demo-content-active" : "demo-content"}>
          <CreativeImageCards prop={printed_materials} />
        </div>

        {/* Content for the audio creation tab */}
        <div className={toggleState === 7 ? "demo-content demo-content-active" : "demo-content"}>
          <CreativeImageCards prop={audio_creation} />
        </div>

      </div>

     
    </div>
  )
}

export default Creative