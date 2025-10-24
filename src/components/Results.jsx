import React from 'react'
import '../styles/component-styles/results.css';

// An array of video card details
const video_prop = [
  {
    id: 1,
    src: "./videos/product-to-video-tutorial-product-to-video-tutorial.mp4",
    title: "How to turn a product image into a video with effects",
    description: "Make your product move—transform static visuals into animated videos with effects in no time. Fast and ready to share"
  },

  {
    id: 2,
    src: "./videos/place-object-tutorial.mp4",
    title: "How to place your product in multiple backgrounds",
    description: "Use your product as a custom object and place it into different backgrounds in a few clicks. Great for scaling content quickly."
  },

  {
    id: 3,
    src: "./videos/video-for-product-tutorial.mp4",
    title: "How to create video photo shoots for products",
    description: "See your products in different settings—no reshoots, no manual styling. Instant results, always consistent"
  }
]


// Video card
export const ResultsVideoCard = ({prop}) => {
  return (
    <div className="results-video-card">
      <video controls>
        <source src={prop.src} type="video/mp4"/>
      </video>
      <div className="results-video-info">
        <h3>{prop.title}</h3>
        <p>{prop.description}</p>
      </div>
    </div>
  )
}

// Video card container
export const ResultsVideoSlide = () => {
  return (
    <div className="results-video-container">
      {video_prop.map((video) => (
        <ResultsVideoCard key={video.id} prop={video} />
      ))}
    </div>
  )
}



const Results = () => {


  return (
    <div className='results-section'>
      {/* Header and buttons */}
      <div className="results-header">
        <h2>Made with Freepik—real work, real results</h2>
        <div className="scroll-btns">
          <button className="scroll-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-xl"><path d="m187.355 397 92.322-92.322c9.763-9.763 9.763-25.592 0-35.355s-25.592-9.763-35.355 0l-110 110C129.441 384.204 127 390.602 127 397s2.441 12.796 7.322 17.678l110 110c9.764 9.763 25.592 9.763 35.355 0s9.763-25.592 0-35.355z"></path></svg>
          </button>

          <button className="scroll-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-xl"><path d="m226.644 397-92.322 92.322c-9.763 9.763-9.763 25.592 0 35.355s25.592 9.763 35.355 0l110-110C284.559 409.797 287 403.398 287 397s-2.441-12.796-7.322-17.678l-110-110c-9.764-9.763-25.592-9.763-35.355 0s-9.763 25.592 0 35.355z"></path></svg>
          </button>
        </div>
      </div>

      <ResultsVideoSlide />

    </div>
  )
}

export default Results