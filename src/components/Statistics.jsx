import React from 'react'
import '../styles/component-styles/statistics.css';


const allStatistics = [
    {
      id: 1,
      title: "1 billion",
      sub_title: "AI images, audio, and videos",
      paragraph: "Powered by Flux, Kling, Runway, ChatGPT, ElevenLabs, and more."
    },

    {
      id: 2,
      title: "200 million",
      sub_title: "Highest-quality stock assets",
      paragraph: "Icons, videos, audio, images, vectors, and more ready for your next project."
    },

    {
      id: 3,
      title: "1700,000+",
      sub_title: "Paying customers and growing fast",
      paragraph: "Unlock all creative possibilities with an all-in-one creative suite."
    }
]

export const StatComponent = ({prop}) => {
  return (
    <div className="single-stat">
        <h3 className="stat-title">{prop.title}</h3>
        <h4 className="stat-sub-title">{prop.sub_title}</h4>
        <p className="stat-paragraph">{prop.paragraph}</p>
    </div>
  )
}

export const DisplayStat = () => {
  return (
    <div className="stats">
      {allStatistics.map((s) => (
        <StatComponent key={s.id} prop={s} />
      ))}
    </div>
  )
}

export const Button = ({label="Button Label"}) => {
  return (
    <button className="btn">
      {label}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg"><path d="M-24 422h401.645l-72.822 72.822c-9.763 9.763-9.763 25.592 0 35.355 9.763 9.764 25.593 9.762 35.355 0l115.5-115.5a25 25 0 0 0 0-35.355l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355 0-9.763 9.763-9.763 25.592 0 35.355l72.822 72.822H-24c-13.808 0-25 11.193-25 25S-37.808 422-24 422"></path></svg>
    </button>
  )
}


const Statistics = () => {
  return (
    <div className="stat-section">
      <DisplayStat />
      <div className="call-to-action">
        <h2>Your vision, elevated</h2>
        <Button label="Get started for free" />
      </div>
    </div>
  )
}






export default Statistics