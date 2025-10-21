import React from 'react'
import { useState } from 'react';
import '../styles/component-styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
       {/* Footer logo image */}
        <svg width="160" height="44" fill="#1273EB" class="h-auto w-[108px] lg:w-auto text-piki-blue-500 dark:text-white" viewBox="0 0 109 16" xmlns="http://www.w3.org/2000/svg"><path d="M28.6279 10.0932C28.5821 10.0476 28.6126 9.95621 28.689 9.95621H28.9947H29.01C31.6235 9.69741 33.8091 8.0076 33.8091 5.02378C33.8091 1.58325 31.0274 0 27.8331 0H12.901C12.7023 0 12.5342 0.167458 12.5342 0.365365V15.6194C12.5342 15.8173 12.7023 15.9847 12.901 15.9847H17.6695C17.8682 15.9847 18.0363 15.8173 18.0363 15.6194V10.7478C18.0363 10.5499 18.2044 10.3825 18.4031 10.3825H21.5057C21.9336 10.3825 22.3463 10.5652 22.6367 10.8849L27.0537 15.8477C27.1454 15.8934 27.2371 15.9239 27.3288 15.9695H33.6257C33.9466 15.9695 34.1147 15.5889 33.8855 15.3606L28.6279 10.0932ZM26.641 6.82016H18.3878C18.1891 6.82016 18.021 6.6527 18.021 6.45479V4.14081C18.021 3.94291 18.1891 3.77544 18.3878 3.77544H26.5188C27.6803 3.77544 28.4445 4.33872 28.4445 5.25213C28.4445 6.28733 27.7414 6.82016 26.641 6.82016Z"></path><path d="M88.9058 0.015625H84.1373C83.9386 0.015625 83.7705 0.183083 83.7705 0.38099V10.5047C83.7705 10.7026 83.9386 10.87 84.1373 10.87H88.9058C89.1045 10.87 89.2726 10.7026 89.2726 10.5047V0.38099C89.2573 0.183083 89.1045 0.015625 88.9058 0.015625Z"></path><path d="M88.9058 13.0156H84.1373C83.9386 13.0156 83.7705 13.1831 83.7705 13.381V15.6341C83.7705 15.832 83.9386 15.9994 84.1373 15.9994H88.9058C89.1045 15.9994 89.2726 15.832 89.2726 15.6341V13.381C89.2573 13.1831 89.1045 13.0156 88.9058 13.0156Z"></path><path d="M108.53 15.5132L102.401 7.4295C102.264 7.24682 102.279 7.00324 102.432 6.83578L108.225 0.502776C108.393 0.320094 108.255 0.0308495 108.011 0.0308495H102.997C102.86 0.0308495 102.738 0.0917438 102.646 0.183085L97.0521 6.30296C97.0369 6.31818 97.0063 6.3334 96.9757 6.3334H96.777C96.7312 6.3334 96.6853 6.28773 96.6853 6.24206V0.350541C96.6853 0.167858 96.5325 0.015625 96.3491 0.015625H91.764C91.5806 0.015625 91.4277 0.167858 91.4277 0.350541V15.635C91.4277 15.8025 91.5653 15.9395 91.7334 15.9395H96.3644C96.5325 15.9395 96.67 15.8025 96.67 15.635V12.7882C96.67 12.6664 96.7159 12.5598 96.7923 12.4685L98.825 10.3068C98.825 10.3068 98.8403 10.2763 98.8862 10.2763C98.932 10.2763 99.1307 10.2763 99.1613 10.2763C99.1919 10.2763 99.2224 10.3068 99.2224 10.3068L103.318 15.7568C103.41 15.8786 103.548 15.9395 103.701 15.9395H108.301C108.545 15.9395 108.668 15.6807 108.53 15.5132Z"></path><path d="M41.2214 3.66928H45.8829C46.0816 3.66928 46.2497 3.50182 46.2497 3.30392V0.38099C46.2497 0.183083 46.0816 0.015625 45.8829 0.015625H36.2389C36.0402 0.015625 35.8721 0.183083 35.8721 0.38099V15.635C35.8721 15.8329 36.0402 16.0004 36.2389 16.0004H45.8829C46.0816 16.0004 46.2497 15.8329 46.2497 15.635V12.7121C46.2497 12.5142 46.0816 12.3467 45.8829 12.3467H41.1908C40.9921 12.3467 40.824 12.1793 40.824 11.9813V10.0784C40.824 9.86527 41.0074 9.68259 41.2214 9.68259H45.8829C46.0816 9.68259 46.2497 9.51513 46.2497 9.31723V6.45519C46.2497 6.25729 46.0816 6.08983 45.8829 6.08983H41.2214C41.0074 6.08983 40.824 5.90714 40.824 5.69401V4.04987C40.824 3.83674 41.0074 3.66928 41.2214 3.66928Z"></path><path d="M53.7546 3.66928H58.4161C58.6148 3.66928 58.7829 3.50182 58.7829 3.30392V0.38099C58.7829 0.183083 58.6148 0.015625 58.4161 0.015625H48.7721C48.5734 0.015625 48.4053 0.183083 48.4053 0.38099V15.635C48.4053 15.8329 48.5734 16.0004 48.7721 16.0004H58.4161C58.6148 16.0004 58.7829 15.8329 58.7829 15.635V12.7121C58.7829 12.5142 58.6148 12.3467 58.4161 12.3467H53.724C53.5253 12.3467 53.3572 12.1793 53.3572 11.9813V10.0784C53.3572 9.86527 53.5406 9.68259 53.7546 9.68259H58.4161C58.6148 9.68259 58.7829 9.51513 58.7829 9.31723V6.45519C58.7829 6.25729 58.6148 6.08983 58.4161 6.08983H53.7546C53.5406 6.08983 53.3572 5.90714 53.3572 5.69401V4.04987C53.3572 3.83674 53.5406 3.66928 53.7546 3.66928Z"></path><path d="M5.35124 3.66928H10.0128C10.2115 3.66928 10.3796 3.50182 10.3796 3.30392V0.38099C10.3796 0.183083 10.2115 0.015625 10.0128 0.015625H0.368765C0.170077 0.015625 0.00195312 0.183083 0.00195312 0.38099V15.635C0.00195312 15.8329 0.170077 16.0004 0.368765 16.0004H4.58706C4.78575 16.0004 4.95387 15.8329 4.95387 15.635V10.0936C4.95387 9.88049 5.13727 9.69781 5.35124 9.69781H10.0128C10.2115 9.69781 10.3796 9.53035 10.3796 9.33245V6.47042C10.3796 6.27251 10.2115 6.10505 10.0128 6.10505H5.35124C5.13727 6.10505 4.95387 5.92237 4.95387 5.70924V4.06509C4.95387 3.83674 5.12199 3.66928 5.35124 3.66928Z"></path><path d="M75.7474 0.015625H61.3043C61.1056 0.015625 60.9375 0.183083 60.9375 0.38099V15.635C60.9375 15.8329 61.1056 16.0004 61.3043 16.0004H66.0728C66.2715 16.0004 66.4396 15.8329 66.4396 15.635V10.596C66.4396 10.4894 66.516 10.4133 66.623 10.4133H67.3108H75.7627C79.4307 10.4133 82.2124 8.51037 82.2124 5.14596C82.2124 1.65977 79.4308 0.015625 75.7474 0.015625ZM75.0596 6.82056H66.8064C66.6077 6.82056 66.4396 6.6531 66.4396 6.45519V4.14121C66.4396 3.94331 66.6077 3.77584 66.8064 3.77584H74.9374C76.0989 3.77584 76.8631 4.33912 76.8631 5.25253C76.8631 6.28773 76.1448 6.82056 75.0596 6.82056Z"></path></svg>        {/* nav list item */}
        <div className="footer-columns">
          <Products />
          <GetStarted />
          <Company />
          <GetInTouch />
        </div>    
    </footer>
  )
}


const Products = () => {
  return (
    <div>
      <div className="footer-list">
          <h4>Products</h4>
          {/* dropdown columns */}
          <div className="footer-list-item">

            {/* dropdown column links */}
            <div className="nav-list-item-links">
              <ul className="footer-links">
                <li><a href="https://www.freepik.com/pikaso/assistant">AI Assistant</a></li>
                <li><a href="https://www.freepik.com/ai/image-generator">AI Image Generator</a></li>
                <li><a href="https://www.freepik.com/ai/video-generator">AI Video Generator</a></li>
                <li><a href="https://www.freepik.com/ai/voice-generator">AI Voice Generator</a></li>
                <li><a href="https://www.freepik.com/api">API</a></li>
                <li><a href="https://play.google.com/store/apps/details?id=com.freepikcompany.freepik">Android</a></li>
                <li><a href="https://apps.apple.com/us/app/freepik-ai-video-generator/id1664092086">IOS</a></li>
                <li><a href="https://www.freepik.com/ai">All Freepik Tools</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

const GetStarted = () => {
  return (
    <div>
      <div className="footer-list">
          <h4>Get Started</h4>
          {/* dropdown columns */}
          <div className="footer-list-item">

            {/* dropdown column links */}
            <div className="nav-list-item-links">
              <ul className="footer-links">
                <li><a href="https://www.freepik.com/pricing?origin=freepik_web">Pricing</a></li>
                <li><a href="https://contributor.freepik.com/?_gl=1*1v9lsc8*_gcl_au*MTcyNDI0NjQyLjE3NjA5NjY5NDA.*_ga*MTMxNTgzOTcyMi4xNzYwOTY2OTQy*_ga_QWX66025LC*czE3NjEwNDEyNzQkbzkkZzEkdDE3NjEwNDMwMDckajU5JGwwJGgw">Sell Content</a></li>
                <li><a href="https://www.freepik.com/enterprise">Enterprise</a></li>
                <li><a href="https://support.freepik.com/s/?language=en_US&_gl=1*1y09093*_gcl_au*MTcyNDI0NjQyLjE3NjA5NjY5NDA.*_ga*MTMxNTgzOTcyMi4xNzYwOTY2OTQy*_ga_QWX66025LC*czE3NjEwNDEyNzQkbzkkZzEkdDE3NjEwNDMwMDckajU5JGwwJGgw">FAQ</a></li>
                <li><a href="https://www.freepik.com/ai/docs">AI Suite documentation</a></li>
                <li><a href="https://www.freepik.com/legal/terms-of-use#nav-freepik">Terms of use</a></li>
                <li><a href="https://www.freepik.com/legal/privacy">Privacy policy</a></li>
                <li><a href="https://www.freepik.com/legal/cookies">Cookies policy</a></li>
                <li><a href="#">Do Not Sell My Personal Information</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

const Company = () => {
  return (
    <div>
      <div className="footer-list">
          <h4>Company</h4>
          {/* dropdown columns */}
          <div className="footer-list-item">

            {/* dropdown column links */}
            <div className="nav-list-item-links">
              <ul className="footer-links">
                <li><a href="https://www.freepik.com/company/about-us">About Us</a></li>
                <li><a href="https://freepik-company.factorialhr.com/">Careers</a></li>
                <li><a href="https://www.freepik.com/tags">Search Trends</a></li>
                <li><a href="https://www.freepik.com/blog/">Blog</a></li>
                <li><a href="https://www.freepik.com/events">Events</a></li>
                <li><a href="https://magnific.ai/">Magnific</a></li>
                <li><a href="https://slidesgo.com/">Slidesgo</a></li>
                <li><a href="https://www.freepik.com/profile/support">Help center</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}




const GetInTouch = () => {
  const [lang, setLang] = useState("English");
  const [langSelector, setLangSelector] = useState(true);

  const handleChange = (e) => {
    setLang(e.target.value)
    setLangSelector(!langSelector);
  };

  const handleClick = () => setLangSelector(!langSelector);

  return (
    <div>
      <div className="footer-list">
        <h4>Products</h4>
        {/* dropdown columns */}
        <div className="social-icons">
          <a href="https://www.facebook.com/Freepik">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg size-[18px]"><path d="M501 257.5c0-135.3-109.7-245-245-245S11 122.2 11 257.5c0 122.3 89.6 223.6 206.7 242V328.3h-62.2v-70.8h62.2v-54c0-61.4 36.6-95.3 92.5-95.3 26.8 0 54.8 4.8 54.8 4.8v60.3h-30.9c-30.4 0-39.9 18.9-39.9 38.3v46h67.9l-10.9 70.8h-57.1v171.2C411.4 481.1 501 379.8 501 257.5"></path></svg>
          </a>

          <a href="https://x.com/freepik">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg size-[18px]"><path d="M298.158 216.797 484.663 0h-44.196L278.525 188.242 149.182 0H0l195.592 284.655L0 512h44.198l171.016-198.79L351.809 512h149.182L298.147 216.797zm-60.536 70.366-19.818-28.345L60.124 33.272h67.885L255.26 215.295l19.817 28.345 165.411 236.601h-67.886l-134.98-193.067z"></path></svg>
          </a>

          <a href="https://www.pinterest.es/freepik/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg size-[18px]"><path d="M256.2 10.6C120.8 10.6 11 120.4 11 255.8c0 103.9 64.6 192.7 155.8 228.5-2.2-19.4-4-49.2.8-70.4C172 394.7 196.3 292 196.3 292s-7.3-14.7-7.3-36.3c0-34.1 19.8-59.5 44.4-59.5 21 0 31.1 15.7 31.1 34.5 0 21-13.3 52.5-20.4 81.7-5.9 24.4 12.3 44.4 36.3 44.4 43.6 0 77.1-46 77.1-112.2 0-58.7-42.2-99.7-102.5-99.7-69.8 0-110.8 52.3-110.8 106.4 0 21 8.1 43.6 18.2 55.9 2 2.4 2.2 4.6 1.6 7.1-1.8 7.7-6.1 24.4-6.9 27.9-1 4.4-3.6 5.4-8.3 3.2-30.6-14.5-49.8-59.1-49.8-95.3 0-77.3 56.1-148.3 162.1-148.3 85 0 151.2 60.5 151.2 141.7 0 84.6-53.3 152.6-127.1 152.6-24.8 0-48.2-12.9-56.1-28.3 0 0-12.3 46.8-15.3 58.3-5.4 21.4-20.4 48-30.5 64.4 23 7.1 47.2 10.9 72.7 10.9 135.4 0 245.2-109.8 245.2-245.2.2-135.8-109.6-245.6-245-245.6"></path></svg>
          </a>

          <a href="https://www.instagram.com/freepik">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg size-[18px]"><path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1S23.8 74.5 17.3 91c-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6s28.1 22.6 44.6 29.1c16 6.2 34.3 10.5 61.2 11.7s35.4 1.5 103.9 1.5 77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1s22.6-28.1 29.1-44.6c6.2-16 10.5-34.3 11.7-61.2s1.5-35.4 1.5-103.9-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6s-28.1-22.6-44.6-29.1C405.2 11 386.9 6.7 360 5.5c-27-1.1-35.6-1.4-104-1.4"></path><path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4m0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84"></path><circle cx="390.5" cy="121.5" r="30.2"></circle></svg>
          </a>

          <a href="https://www.youtube.com/channel/UC9wPXN2TIWoUamqONb7v8Pw">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg size-[18px]"><path d="M353.49 95.037c-4.393-19.115-20.029-33.214-38.848-35.312-62.031-6.931-206.396-7.014-269.18 0-18.816 2.098-34.445 16.197-38.845 35.312-8.847 38.526-8.776 132.054-.068 169.923 4.393 19.118 20.021 33.21 38.841 35.315 62.031 6.931 206.396 7.014 269.18 0 18.816-2.105 34.452-16.197 38.852-35.315 8.703-37.895 8.815-131.88.068-169.923M145.003 211.903v-63.809c0-11.344 12.28-18.434 22.105-12.762l55.261 31.906c9.824 5.672 9.824 19.852 0 25.524l-55.261 31.903c-9.825 5.672-22.105-1.418-22.105-12.762"></path></svg>
          </a>

          <a href="https://www.linkedin.com/company/freepik-corp/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg size-[18px]"><path d="M436.2 436.3h-75.9V317.4c0-28.3-.5-64.8-39.5-64.8-39.5 0-45.6 30.9-45.6 62.7v120.9h-75.9V191.9h72.8v33.4h1c7.3-12.5 17.8-22.7 30.5-29.7 12.7-6.9 27-10.3 41.4-9.8 76.9 0 91.1 50.6 91.1 116.4zM113.9 158.5c-8.7 0-17.2-2.6-24.5-7.4-7.2-4.8-12.9-11.7-16.2-19.8s-4.2-16.9-2.5-25.4 5.9-16.4 12-22.5c6.2-6.2 14-10.4 22.5-12.1s17.4-.8 25.4 2.5 14.9 9 19.8 16.2c4.8 7.2 7.4 15.7 7.4 24.5 0 5.8-1.1 11.5-3.3 16.8s-5.5 10.2-9.5 14.3c-4.1 4.1-8.9 7.3-14.3 9.5-5.3 2.3-11 3.4-16.8 3.4m37.9 277.8H75.9V191.9h75.9zM474.1 0H37.8c-9.9-.1-19.4 3.7-26.5 10.6S.1 27 0 36.9V475c.1 9.9 4.2 19.4 11.2 26.3 7.1 6.9 16.6 10.8 26.5 10.7H474c9.9.1 19.5-3.7 26.6-10.6s11.2-16.4 11.3-26.3V36.9c-.1-9.9-4.2-19.4-11.3-26.3S484-.1 474.1 0"></path></svg>
          </a>

          <a href="https://discord.gg/a9etNXNmYY">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 12" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg size-[18px]"><path d="M11.86 1.584c-.92-.421-1.892-.72-2.889-.889q-.204.366-.37.752a10.8 10.8 0 0 0-3.205 0 8 8 0 0 0-.37-.752c-.998.17-1.97.47-2.89.891C.306 4.291-.189 6.928.058 9.528c1.07.79 2.27 1.392 3.543 1.778q.43-.58.759-1.223a7.5 7.5 0 0 1-1.195-.57q.15-.11.293-.221a8.32 8.32 0 0 0 7.082 0q.144.118.293.22a7.6 7.6 0 0 1-1.197.572q.328.643.759 1.222a11.6 11.6 0 0 0 3.544-1.777c.291-3.015-.496-5.628-2.08-7.945M4.673 7.929c-.69 0-1.26-.627-1.26-1.398s.55-1.402 1.258-1.402 1.274.632 1.262 1.402c-.012.771-.556 1.398-1.26 1.398m4.652 0c-.692 0-1.26-.627-1.26-1.398s.55-1.402 1.26-1.402c.709 0 1.27.632 1.258 1.402-.012.771-.555 1.398-1.258 1.398"></path></svg>
          </a>

          <a href="https://www.reddit.com/r/Freepik_AI/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17 15" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg size-[18px]"><path d="M10.661 2.177a1.77 1.77 0 1 0-.01-.766A2.86 2.86 0 0 0 8.1 4.25v.009c-1.556.065-2.977.508-4.105 1.208a2.48 2.48 0 1 0-2.568 4.208c.082 2.879 3.219 5.194 7.078 5.194s7-2.318 7.078-5.2a2.48 2.48 0 1 0-2.574-4.206c-1.138-.704-2.575-1.147-4.147-1.206V4.25c0-1.053.783-1.928 1.798-2.071zM3.896 9.003c.042-.9.639-1.59 1.333-1.59.695 0 1.226.73 1.184 1.629-.041.9-.56 1.226-1.255 1.226s-1.303-.366-1.262-1.265m7.887-1.59c.695 0 1.293.69 1.333 1.59.042.9-.567 1.265-1.262 1.265-.694 0-1.213-.326-1.255-1.226s.489-1.629 1.184-1.629m-.826 3.67c.13.014.213.15.162.27a2.832 2.832 0 0 1-5.227 0 .196.196 0 0 1 .163-.27c.763-.077 1.589-.119 2.45-.119.863 0 1.688.042 2.452.12"></path></svg>
          </a>

        </div>

        <div className={ langSelector ? "btn-lang up-arrow" :  "btn-lang down-arrow"} onClick={ handleClick }>
          <p>{lang}</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-xl"><path d="m226.644 397-92.322 92.322c-9.763 9.763-9.763 25.592 0 35.355s25.592 9.763 35.355 0l110-110C284.559 409.797 287 403.398 287 397s-2.441-12.796-7.322-17.678l-110-110c-9.764-9.763-25.592-9.763-35.355 0s-9.763 25.592 0 35.355z"></path></svg>
        
          <select className={ langSelector ? "select-lang-on" : "select-lang-off" } name="language" id="language">
          <option value="English" onClick={handleChange}>English</option>
          <option value="French" onClick={handleChange}>French</option>
          <option value="German" onClick={handleChange}>German</option>
          <option value="Dutch" onClick={handleChange}>Dutch</option>
          <option value="Danish" onClick={handleChange}>Danish</option>
          <option value="Spanish" onClick={handleChange}>Spanish</option>
          <option value="Italian" onClick={handleChange}>Italian</option>
        </select>

        </div>

         
  

        <div className="copyright">
          <small>Copyright © 2010-2025 Freepik <br />Company S.L. All rights reserved</small>
        </div>
      
      </div>

    </div>
  )
}



export default Footer