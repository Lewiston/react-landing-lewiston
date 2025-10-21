import React from 'react'
import '../styles/component-styles/pricing.css';


export const SimpleButton = ({label="Button Label", fill = "#272727", color = "white" }) => {
  return (
    <button className="simple-btn" style={{backgroundColor: fill, color: color}}>
      {label} 
    </button>
  )
}


const Pricing = () => {
  return (
    <div className="pricing-section">
      <h2>Plans that cover your needs</h2>
      
      {/* the different Pricing tables */}
      <div className="pricing-tables">

        {/* Pricing for Individuals */}
        <div className="pricing individuals">
            <div className="description">
              <h3>Individuals</h3>
              <p>Create professional, on-brand visuals fast with AI-powered tools and high-quality stock assets.</p>
            </div>

            <div className="price-value">
              <p><span className="starting-at">Starting at</span> <span>3.75 EUR</span> /month <br />37% off billed annually</p>
              <SimpleButton label="Show individual plans" />
            </div>

            <div className="pricing-features">
              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>AI generation and editing of images, videos, icons, mockups, and music</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Train custom AI models for on-brand visuals: styles, objects, colors, and characters</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Upscale images up to 10K resolution with Magnific and videos up to 4K with Topaz</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Access to Premium stock content: 250M+ photos, vectors, templates, and more</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Priority speed for image and video generation with ChatGPT, Kling, and Veo 3</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Commercial AI license for professionals</p>
              </div>

            </div>

        </div>

        {/* Pricing for Teams */}
        <div className="pricing teams">
            <div className="description">
              <h3>Teams</h3>
              <p>Collaborate with your team on AI-driven projects and premium stock assets.</p>
            </div>

            <div className="price-value">
              <p><span>21 EUR</span> per user/month <br />38% off billed annually</p>
              <SimpleButton fill="white" color="#272727" label="Get a plan" />
            </div>

            <div className="pricing-features">
              <h4>Everything in individual plans, and:</h4>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Unlimited image generation and editing</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Control team credit usage</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Unified admin and billing</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Secured asset storage</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Team collaboration and sharing</p>
              </div>

            </div>

        </div>

        {/* Pricing for Enterprise */}
        <div className="pricing enterprise">
            <div className="description">
              <h3>Enterprise</h3>
              <p>Get the best for your organization with a dedicated account manager and priority support.</p>
            </div>

            <div className="price-value">
              <p><span>Custom</span> <br /> <br /></p>
              <SimpleButton label="Learn more" />
            </div>

            <div className="pricing-features">
              <h4>Everything in team plans, and:</h4>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Legal indemnification for AI-generated content</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Rights over your AI-generated content</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>SSO and enterprise-level security & compliance</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Expert guidance, training, and technical support</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Unlimited users, flexible credits</p>
              </div>

              <div className="pricing-features-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg mt-0.5 min-w-6 text-piki-blue-400"><path d="M127 552.25a24.92 24.92 0 0 1-17.678-7.322l-101-101c-9.763-9.763-9.763-25.593 0-35.355 9.764-9.764 25.592-9.764 35.355 0l83.339 83.34 243.323-242.857c9.771-9.754 25.602-9.74 35.355.033 9.754 9.772 9.739 25.602-.033 35.355l-261 260.5A24.92 24.92 0 0 1 127 552.25"></path></svg>
                <p>Freepik Studios: custom, high-impact AI content</p>
              </div>

            </div>

        </div>

      </div>
    </div>
  )
}

export default Pricing