import React from 'react'
import "../styles/component-styles/socialproof.css"

const SocialProof = () => {
  return (
    <div className="social-proof">
      <h2>You bring the vision. We help you go further. <span>Join 700,000 creative teams, marketers, and designers worldwide.</span></h2>
      <div className="client-icons">
        <img src="./photos/imgi_5_google.svg" alt="Google Logo" />
        <img src="./photos/imgi_6_nubank.svg" alt="Nubank Logo" />
        <img src="./photos/imgi_7_hello-fresh.svg" alt="Hello Fresh Logo" />
        <img src="./photos/imgi_8_coca-cola.svg" alt="Coca-cola Logo" />
        <img src="./photos/imgi_9_ogilvy.svg" alt="Ogilvy Logo" />
      </div>
    </div>
  )
}

export default SocialProof