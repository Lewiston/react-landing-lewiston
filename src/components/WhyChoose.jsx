import React from 'react'
import '../styles/component-styles/whychoose.css';


const why_choose = [
    {
      id: 1,
      title: "The all-in-one suite for creatives",
      icon_src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg min-h-6 min-w-6 lg:min-h-8 lg:min-w-8"><path d="M167.089 650.914c-4.536 0-9.105-.476-13.645-1.441-56.47-12.026-107.823-43.382-144.599-88.29C-28.457 515.63-49 458.063-49 399.088c0-68.289 26.568-132.516 74.81-180.849 48.235-48.325 112.398-75.014 180.669-75.151l.517-.001c140.513 0 255.305 114.153 256 254.707q.01 2.073-.012 4.143c-.358 32.797-13.529 63.552-37.085 86.599-23.434 22.927-54.399 35.553-87.193 35.553H267c-19.299 0-35 15.701-35 35v26.805c0 19.708-8.786 38.123-24.105 50.523-11.715 9.482-26.076 14.497-40.806 14.497m39.907-457.827h-.417C93.223 193.314 1 285.726 1 399.088c0 96.65 68.492 181.385 162.858 201.48 6.102 1.303 10.498-1.332 12.578-3.016 2.078-1.682 5.564-5.434 5.564-11.66v-26.805c0-46.869 38.131-85 85-85h71.706c40.521 0 73.844-32.612 74.281-72.698v-.002q.018-1.668.01-3.343c-.559-113.096-92.941-204.957-206.001-204.957"></path><path d="M71 429.088c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30m136-136c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30m96.151 39.849c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30m-192.302 0c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30"></path></svg>,
      paragraph: "Power your creativity with leading GenAI models, pro features, and a vast stock library—all in one platform."
    },

    {
      id: 2,
      title: "AI you can trust: private and secure",
      icon_src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg min-h-6 min-w-6 lg:min-h-8 lg:min-w-8"><path d="M357 341.638V291c0-82.71-67.29-150-150-150S57 208.29 57 291v50.638C25.405 346.035 1 373.213 1 406v182c0 35.841 29.159 65 65 65h282c35.841 0 65-29.159 65-65V406c0-32.787-24.405-59.965-56-64.362M207 191c55.14 0 100 44.86 100 100v50H107v-50c0-55.14 44.86-100 100-100m156 397c0 8.271-6.729 15-15 15H66c-8.271 0-15-6.729-15-15V406c0-8.271 6.729-15 15-15h282c8.271 0 15 6.729 15 15z"></path></svg>,
      paragraph: "Your data is never used to train AI—ours or third-party. You're fully protected with advanced security and full rights."
    },

    {
      id: 3,
      title: "Easy to use, with professional results",
      icon_src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg min-h-6 min-w-6 lg:min-h-8 lg:min-w-8"><path d="M149.333 550.378H78.622c-13.807 0-25-11.193-25-25v-70.711c0-6.63 2.634-12.989 7.322-17.678l264.36-264.36c25.344-25.343 66.58-25.343 91.924 0l14.143 14.142c25.344 25.344 25.344 66.581 0 91.924l-264.36 264.36a25 25 0 0 1-17.678 7.323m-45.711-50h35.355L396.016 243.34c5.849-5.848 5.849-15.365 0-21.213l-14.143-14.142c-5.848-5.849-15.365-5.849-21.213 0L103.622 465.023z"></path><path d="M375.622 391.013v184.366c0 8.284-6.716 15-15 15h-332c-8.284 0-15-6.716-15-15V243.378c0-8.284 6.716-15 15-15h184.365l50-50H28.622c-35.899 0-65 29.101-65 65v332c0 35.898 29.101 65 65 65h332c35.898 0 65-29.102 65-65V341.013z"></path></svg>,
      paragraph: "Stay consistent, adapt assets easily, and create confidently with powerful tools built for real workflows like yours."
    },

    {
      id: 4,
      title: "Join the creators shaping AI's future",
      icon_src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg min-h-6 min-w-6 lg:min-h-8 lg:min-w-8"><path d="M437 25H75c-35.8 0-65 29.2-65 65v257c0 35.8 29.2 65 65 65h35v50c0 9.1 4.9 17.4 12.8 21.8 3.8 2.1 8 3.2 12.2 3.2 4.6 0 9.1-1.3 13.2-3.8L263.1 412H437c35.8 0 65-29.2 65-65V90c0-35.8-29.2-65-65-65m15 322c0 8.3-6.7 15-15 15H256c-4.7 0-9.2 1.3-13.2 3.8L160 417.1V387c0-13.8-11.2-25-25-25H75c-8.3 0-15-6.7-15-15V90c0-8.3 6.7-15 15-15h362c8.3 0 15 6.7 15 15z"></path><path d="M320.6 193.5h.2c10.8 0 20.4-5.5 25.8-14.7 5.5-9.5 5.5-21.2 0-30.6-5.4-9.2-15-14.7-25.8-14.7h-.2c-10.8 0-20.4 5.5-25.8 14.7-5.5 9.5-5.5 21.2 0 30.6 5.4 9.2 15.1 14.7 25.8 14.7M191.6 193.5h.2c10.8 0 20.4-5.5 25.8-14.7 5.5-9.5 5.5-21.2 0-30.6-5.4-9.2-15-14.7-25.8-14.7h-.2c-10.8 0-20.4 5.5-25.8 14.7-5.5 9.5-5.5 21.2 0 30.6 5.4 9.2 15.1 14.7 25.8 14.7M343.1 230.3c-47.5 44.6-123 44.3-175.6-.8-10.5-9-26.3-7.8-35.3 2.7s-7.8 26.3 2.7 35.3c34.6 29.7 78.2 46 122.7 46h.7c44.8-.2 87.1-16.8 119-46.7 10.1-9.5 10.6-25.3 1.1-35.3-9.4-10.2-25.2-10.6-35.3-1.2"></path></svg>,
      paragraph: "Be part of a global community of top creatives. Get early access to new tools, share your work, and stay inspired."
    }
]



export const WhyChooseCardComponent = ({prop}) => {
  return (
    <div className="card-component">
      <div className="title-icon">
        <h3>{prop.title}</h3>
        <p>{prop.paragraph}</p>
      </div>
      {prop.icon_src}
    </div>
  )
}


export const WhyChooseComponents = () => {
  return (
    <div className="why-choose-cards">
      {why_choose.map((choice) => (
        <WhyChooseCardComponent key={why_choose.id} prop={choice} />
      ))}
    </div>
  )
}




const WhyChoose = () => {
  return (
    <div className="why-choose">
      <h2>Why Choose Freepik?</h2>
      <WhyChooseComponents />
    </div>
  )
}

export default WhyChoose
