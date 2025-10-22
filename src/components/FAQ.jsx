import React from 'react'
import { useState } from 'react'
import "../styles/component-styles/faq.css"


const faqs = [
  {
    id: 1,
    question: "Is my content private and secure? Does Freepik use my inputs or outputs to train its models?",
    answer: `Your content is private and secure. Everything you create is private by default and only accessible to you. We have strict agreements in place to protect your data and keep your work secure. Freepik doesn’t use anything you create or upload to train our AI tools—and the same goes for our third-party providers. Your inputs and outputs are never used for training or shared with others.`
  },

  {
    id: 2,
    question: "How do credits work, and how many generations do I get per tool?",
    answer: `Credits are only used for generating content with AI tools—not for downloading stock assets or your own creations. Each one consumes a different number of credits per generation, and results can vary, from a single image to several.

    If you’re on a monthly plan, credits reset every month. Annual plans give you all your credits upfront, with a yearly reset. Unused credits don’t roll over—unless you upgrade your plan or switch from monthly to annual. Premium+ users can also buy extra credits, which are used only after regular ones run out and expire after three years. You’ll need an active plan to use them, and if you cancel, they’ll be paused.
    
    Downloads don’t use credits. Free users get 10 stock downloads a day. Premium and Premium+ users get unlimited stock downloads. Your AI creations have no download limits.
    
    For more details, check out our Pricing page.`
  },

  {
    id: 3,
    question: "Can I use AI-generated content commercially, and do I own the rights to it?",
    answer: `Yes, absolutely. You fully own the rights to anything you create with our AI tools—including the ability to use, modify, and monetize it. Everything you generate is private by default and only accessible to you.

    If you’re on a subscription plan, you’re also granted a full commercial license for both AI-generated content and stock assets—perfect for professional projects. Just make sure your inputs and outputs don’t infringe on third-party rights like identity, trademarks, or intellectual property.
    
    Keep in mind that commercial regulations can vary across countries, especially for uses like merchandising, branding, or creating derivative works. For more details, check our Terms of Use for AI Products, or reach out to our support team—we’re here to help.`
  },

  {
    id: 4,
    question: "Do I need to attribute to use Freepik stock content?",
    answer: `If you're on a Premium, Premium+, or Enterprise plan, you don’t need to attribute. For Teams plans, it depends on the tier: it’s required with the Essential plan, but not with Premium or Premium+.

    If you’re using Freepik for free or on an Essential plan, attribution is required. Just include a visible line like "Designed by Freepik" with a link to our site.
    
    Keep in mind all our paid plans include a commercial license for AI-generated content. Free plans are limited to personal use only and require attribution.
    
    For full details, check out our Attribution Guide.`
  },

  {
    id: 5,
    question: "Do you offer legal indemnification for AI and stock content?",
    answer: `Yes, but only with an Enterprise subscription.

    Enterprise customers benefit from enhanced legal protection, including indemnification for both stock and AI-generated content. This coverage applies when content is used in accordance with Freepik’s licensing terms and the Master Services Agreement (MSA).
    
    This protection is not available on Free, Essential, Premium, Premium+, or Pro plans. AI-generated content is explicitly excluded from indemnification under those subscriptions.
    
    You can find more details in our Support Center, or learn more about Freepik Enterprise.`
  }
]

// Accordion Setup
export const Accordion = ({prop}) => {

  // Creating a use state for accordion
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  }


  return (
    <div className="single-accordion">
      {/* Accordion question that is clickable */}
      <button className="accordion-question" onClick={handleAccordion}>
        <h3>{prop.question}</h3>
        <h3><span>{accordionOpen ? "-" : "+"}</span></h3>
      </button>

      {/* display answer based on accordion state */}
      <div className="accordion-answer">
        {accordionOpen && <p>{prop.answer}</p>}
      </div>

    </div>
  )
}


export const Questions = () => {
  return (
    <div className="questions">
      {faqs.map((f) => (
        <Accordion key={f.id} prop={f} />
      ))}
    </div>
  )
}

const FAQ = () => {
  return (
    <div className="faq-section">
      <h2>Frequently asked questions</h2>
      <Questions />
    </div>
  )
}

export default FAQ