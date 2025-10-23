import React from 'react'
import { useState } from 'react'
import "../styles/component-styles/demo.css"

const Demo = () => {
  // Introducing a state to manage toggling
  const [toggleState, setToggleState] = useState(1);

  const handleToggle = (index) => {
    setToggleState(index);
  }

  return (
    <div className="demo-section">
      {/* Content section for all the tabs */}
      <div className="demo-image-contents">

        {/* Content for the image editing tab */}
        <div className={toggleState === 1 ? "demo-content demo-content-active" : "demo-content"}>
          <video src="./videos/magnific-upscaler-video.webm" autoPlay loop muted></video>
        </div>

        {/* Content for the image generation tab */}
        <div className={toggleState === 2 ? "demo-content demo-content-active" : "demo-content"}>
          <img src="./photos/imgi_52_image-generation-new.webp" alt="" />
        </div>

        {/* Content for the video generation tab */}
        <div className={toggleState === 3 ? "demo-content demo-content-active" : "demo-content"}>
          <img src="./photos/imgi_53_video-generator.webp" alt="" />
        </div>

        {/* Content for the video editing tab */}
        <div className={toggleState === 4 ? "demo-content demo-content-active" : "demo-content"}>
          <img src="./photos/imgi_54_video-editor.webp" alt="" />
        </div>

        {/* Content for the audio generation tab */}
        <div className={toggleState === 5 ? "demo-content demo-content-active" : "demo-content"}>
          <img src="./photos/imgi_55_audio-generation.webp" alt="" />
        </div>

      </div>

      {/* Tabs section to manipulate contents */}
      <div className="tabs-row">
        {/* tab for Image Editing */}
        <button className={toggleState === 1 ? "tab tab-active" : "tab"} onClick={() => handleToggle(1)}>Image editing</button>

        {/* tab for Image generation */}
        <button className={toggleState === 2 ? "tab tab-active" : "tab"} onClick={() => handleToggle(2)}>Image generation</button>

        {/* tab for Video generation */}
        <button className={toggleState === 3 ? "tab tab-active" : "tab"} onClick={() => handleToggle(3)}>Video generation</button>

        {/* tab for Video Editing */}
        <button className={toggleState === 4 ? "tab tab-active" : "tab"} onClick={() => handleToggle(4)}>Video editing</button>

        {/* tab for Audio generation */}
        <button className={toggleState === 5 ? "tab tab-active" : "tab"} onClick={() => handleToggle(5)}>Audio generation</button>

      </div>
    </div>
  )
}

export default Demo