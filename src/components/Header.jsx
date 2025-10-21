import React from "react";
import '../styles/component-styles/header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Start of header */}
      <div className="header-links">
        {/* Header logo image */}
        <svg width="160" height="44" fill="#1273EB" class="h-auto w-[108px] lg:w-auto text-piki-blue-500 dark:text-white" viewBox="0 0 109 16" xmlns="http://www.w3.org/2000/svg"><path d="M28.6279 10.0932C28.5821 10.0476 28.6126 9.95621 28.689 9.95621H28.9947H29.01C31.6235 9.69741 33.8091 8.0076 33.8091 5.02378C33.8091 1.58325 31.0274 0 27.8331 0H12.901C12.7023 0 12.5342 0.167458 12.5342 0.365365V15.6194C12.5342 15.8173 12.7023 15.9847 12.901 15.9847H17.6695C17.8682 15.9847 18.0363 15.8173 18.0363 15.6194V10.7478C18.0363 10.5499 18.2044 10.3825 18.4031 10.3825H21.5057C21.9336 10.3825 22.3463 10.5652 22.6367 10.8849L27.0537 15.8477C27.1454 15.8934 27.2371 15.9239 27.3288 15.9695H33.6257C33.9466 15.9695 34.1147 15.5889 33.8855 15.3606L28.6279 10.0932ZM26.641 6.82016H18.3878C18.1891 6.82016 18.021 6.6527 18.021 6.45479V4.14081C18.021 3.94291 18.1891 3.77544 18.3878 3.77544H26.5188C27.6803 3.77544 28.4445 4.33872 28.4445 5.25213C28.4445 6.28733 27.7414 6.82016 26.641 6.82016Z"></path><path d="M88.9058 0.015625H84.1373C83.9386 0.015625 83.7705 0.183083 83.7705 0.38099V10.5047C83.7705 10.7026 83.9386 10.87 84.1373 10.87H88.9058C89.1045 10.87 89.2726 10.7026 89.2726 10.5047V0.38099C89.2573 0.183083 89.1045 0.015625 88.9058 0.015625Z"></path><path d="M88.9058 13.0156H84.1373C83.9386 13.0156 83.7705 13.1831 83.7705 13.381V15.6341C83.7705 15.832 83.9386 15.9994 84.1373 15.9994H88.9058C89.1045 15.9994 89.2726 15.832 89.2726 15.6341V13.381C89.2573 13.1831 89.1045 13.0156 88.9058 13.0156Z"></path><path d="M108.53 15.5132L102.401 7.4295C102.264 7.24682 102.279 7.00324 102.432 6.83578L108.225 0.502776C108.393 0.320094 108.255 0.0308495 108.011 0.0308495H102.997C102.86 0.0308495 102.738 0.0917438 102.646 0.183085L97.0521 6.30296C97.0369 6.31818 97.0063 6.3334 96.9757 6.3334H96.777C96.7312 6.3334 96.6853 6.28773 96.6853 6.24206V0.350541C96.6853 0.167858 96.5325 0.015625 96.3491 0.015625H91.764C91.5806 0.015625 91.4277 0.167858 91.4277 0.350541V15.635C91.4277 15.8025 91.5653 15.9395 91.7334 15.9395H96.3644C96.5325 15.9395 96.67 15.8025 96.67 15.635V12.7882C96.67 12.6664 96.7159 12.5598 96.7923 12.4685L98.825 10.3068C98.825 10.3068 98.8403 10.2763 98.8862 10.2763C98.932 10.2763 99.1307 10.2763 99.1613 10.2763C99.1919 10.2763 99.2224 10.3068 99.2224 10.3068L103.318 15.7568C103.41 15.8786 103.548 15.9395 103.701 15.9395H108.301C108.545 15.9395 108.668 15.6807 108.53 15.5132Z"></path><path d="M41.2214 3.66928H45.8829C46.0816 3.66928 46.2497 3.50182 46.2497 3.30392V0.38099C46.2497 0.183083 46.0816 0.015625 45.8829 0.015625H36.2389C36.0402 0.015625 35.8721 0.183083 35.8721 0.38099V15.635C35.8721 15.8329 36.0402 16.0004 36.2389 16.0004H45.8829C46.0816 16.0004 46.2497 15.8329 46.2497 15.635V12.7121C46.2497 12.5142 46.0816 12.3467 45.8829 12.3467H41.1908C40.9921 12.3467 40.824 12.1793 40.824 11.9813V10.0784C40.824 9.86527 41.0074 9.68259 41.2214 9.68259H45.8829C46.0816 9.68259 46.2497 9.51513 46.2497 9.31723V6.45519C46.2497 6.25729 46.0816 6.08983 45.8829 6.08983H41.2214C41.0074 6.08983 40.824 5.90714 40.824 5.69401V4.04987C40.824 3.83674 41.0074 3.66928 41.2214 3.66928Z"></path><path d="M53.7546 3.66928H58.4161C58.6148 3.66928 58.7829 3.50182 58.7829 3.30392V0.38099C58.7829 0.183083 58.6148 0.015625 58.4161 0.015625H48.7721C48.5734 0.015625 48.4053 0.183083 48.4053 0.38099V15.635C48.4053 15.8329 48.5734 16.0004 48.7721 16.0004H58.4161C58.6148 16.0004 58.7829 15.8329 58.7829 15.635V12.7121C58.7829 12.5142 58.6148 12.3467 58.4161 12.3467H53.724C53.5253 12.3467 53.3572 12.1793 53.3572 11.9813V10.0784C53.3572 9.86527 53.5406 9.68259 53.7546 9.68259H58.4161C58.6148 9.68259 58.7829 9.51513 58.7829 9.31723V6.45519C58.7829 6.25729 58.6148 6.08983 58.4161 6.08983H53.7546C53.5406 6.08983 53.3572 5.90714 53.3572 5.69401V4.04987C53.3572 3.83674 53.5406 3.66928 53.7546 3.66928Z"></path><path d="M5.35124 3.66928H10.0128C10.2115 3.66928 10.3796 3.50182 10.3796 3.30392V0.38099C10.3796 0.183083 10.2115 0.015625 10.0128 0.015625H0.368765C0.170077 0.015625 0.00195312 0.183083 0.00195312 0.38099V15.635C0.00195312 15.8329 0.170077 16.0004 0.368765 16.0004H4.58706C4.78575 16.0004 4.95387 15.8329 4.95387 15.635V10.0936C4.95387 9.88049 5.13727 9.69781 5.35124 9.69781H10.0128C10.2115 9.69781 10.3796 9.53035 10.3796 9.33245V6.47042C10.3796 6.27251 10.2115 6.10505 10.0128 6.10505H5.35124C5.13727 6.10505 4.95387 5.92237 4.95387 5.70924V4.06509C4.95387 3.83674 5.12199 3.66928 5.35124 3.66928Z"></path><path d="M75.7474 0.015625H61.3043C61.1056 0.015625 60.9375 0.183083 60.9375 0.38099V15.635C60.9375 15.8329 61.1056 16.0004 61.3043 16.0004H66.0728C66.2715 16.0004 66.4396 15.8329 66.4396 15.635V10.596C66.4396 10.4894 66.516 10.4133 66.623 10.4133H67.3108H75.7627C79.4307 10.4133 82.2124 8.51037 82.2124 5.14596C82.2124 1.65977 79.4308 0.015625 75.7474 0.015625ZM75.0596 6.82056H66.8064C66.6077 6.82056 66.4396 6.6531 66.4396 6.45519V4.14121C66.4396 3.94331 66.6077 3.77584 66.8064 3.77584H74.9374C76.0989 3.77584 76.8631 4.33912 76.8631 5.25253C76.8631 6.28773 76.1448 6.82056 75.0596 6.82056Z"></path></svg>        {/* nav list item */}
        <nav className="navigation">
          <ul className="nav-list">
            {/* AI Suite header content */}
            <li className="nav-list-item">AI Suite

              {/* dropdown menu content */}
              <div className="nav-dropdown-container">

                {/* dropdown menu heading */}
                <h4>AI Suite</h4>

                {/* dropdown list container */}
                <div className="nav-dropdown-list">
                  {/* dropdown columns */}
                  <div className="nav-dropdown-list-item">
                    {/* dropdown column header */}
                    <div className="nav-list-item-title">
                      <img src="./photos/add.svg" alt="image icon" />
                      <p>IMAGE</p>
                    </div>
                    {/* dropdown column links */}
                    <div className="nav-list-item-links">
                      <ul>
                        <li><a href="https://www.freepik.com/ai/image-generator#from_element=mainmenu">AI Image Generator</a></li>
                        <li><a href="https://www.freepik.com/ai/photo-editor#from_element=mainmenu">Image Editor</a></li>
                        <li><a href="https://www.freepik.com/ai/image-upscaler#from_element=mainmenu">Image Upscaler</a></li>
                        <li className="new-feature"><a href="https://www.freepik.com/pikaso/assistant#from_element=mainmenu">Assistant</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="nav-dropdown-list-item">
                    {/* dropdown column header */}
                    <div className="nav-list-item-title">
                      <img src="./photos/wand.svg" alt="image icon" />
                      <p>VIDEO</p>
                    </div>
                    {/* dropdown column links */}
                    <div className="nav-list-item-links">
                      <ul>
                        <li><a href="https://www.freepik.com/ai/video-generator#from_element=mainmenu">AI Video Generator</a></li>
                        <li><a href="https://www.freepik.com/ai/video-editor#from_element=mainmenu">Video Project Generator</a></li>
                        <li><a href="https://www.freepik.com/pikaso/video-clip-editor#from_element=mainmenu">Clip Editor</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="nav-dropdown-list-item">
                    {/* dropdown column header */}
                    <div className="nav-list-item-title">
                      <img src="./photos/subscriptions.svg" alt="image icon" />
                      <p>AUDIO</p>
                    </div>
                    {/* dropdown column links */}
                    <div className="nav-list-item-links">
                      <ul>
                        <li><a href="https://www.freepik.com/ai/voice-generator#from_element=mainmenu">Text to Speech</a></li>
                        <li><a href="https://www.freepik.com/ai/sound-effect-generator#from_element=mainmenu">Sound Effects Generator</a></li>
                        <li><a href="https://www.freepik.com/pikaso/music#from_element=mainmenu">Music Generator</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="nav-dropdown-list-item">
                    {/* dropdown column header */}
                    <div className="nav-list-item-title">
                      <img src="./photos/add.svg" alt="image icon" />
                      <p>OTHERS</p>
                    </div>
                    {/* dropdown column links */}
                    <div className="nav-list-item-links">
                      <ul>
                        <li><a href="https://www.freepik.com/designer#from_element=mainmenu">Design Editor</a></li>
                        <li><a href="https://www.freepik.com/mockup-generator#from_element=mainmenu">Mockup Generator</a></li>
                        <li><a href="https://www.freepik.com/ai/icon-generator#from_element=mainmenu">Icon Generator</a></li>
                        <li><a href="https://www.freepik.com/ai/background-remover#from_element=mainmenu">Background Remover</a></li>
                        <li><a href="https://www.freepik.com/ai/image-extender#from_element=mainmenu">Image Expander</a></li>
                        <li><a href="https://www.freepik.com/ai/reimagine#from_element=mainmenu">Reimagine</a></li>
                        <li><a href="https://www.freepik.com/pikaso/sketch#from_element=mainmenu">Sketch to Image</a></li>
                      </ul>
                    </div>
                  </div>


                </div>

                {/* Bottom content for dropdown menus */}
                <div className="nav-dropdown-bottom-content">
              
                  <a className="bottom-content-link" href="https://www.freepik.com/ai#from_element=mainmenu">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-sm"><path d="M19.802 3.414 18.7.914c-.538-1.219-2.269-1.219-2.806 0l-1.102 2.5c-.154.35-.434.63-.784.784l-2.5 1.102c-1.22.538-1.22 2.269 0 2.806l2.5 1.102c.35.154.63.434.784.784l1.102 2.5c.537 1.22 2.268 1.22 2.806 0l1.102-2.5c.154-.35.434-.63.784-.784l2.5-1.102c1.219-.537 1.219-2.268 0-2.806l-2.5-1.102a1.53 1.53 0 0 1-.784-.784M5.442 9.52l.74 1.678c.103.235.291.423.526.527l1.677.74c.82.36.82 1.522 0 1.883l-1.677.74a1.03 1.03 0 0 0-.527.526l-.74 1.678c-.36.819-1.522.819-1.883 0l-.74-1.678a1.03 1.03 0 0 0-.526-.526l-1.678-.74c-.819-.36-.819-1.523 0-1.884l1.678-.74c.235-.103.423-.291.526-.526l.74-1.678c.36-.818 1.523-.818 1.884 0M14.367 17.094l.608 1.382c.086.193.24.348.434.433l1.382.61a.848.848 0 0 1 0 1.55l-1.382.61a.85.85 0 0 0-.434.433l-.608 1.381a.848.848 0 0 1-1.551 0l-.61-1.381a.85.85 0 0 0-.433-.434l-1.381-.609a.848.848 0 0 1 0-1.55l1.381-.61a.85.85 0 0 0 .434-.433l.609-1.382a.848.848 0 0 1 1.55 0"></path></svg>
                    <p>AI News</p>
                  </a>
                
                  <a className="bottom-content-link" href="https://www.freepik.com/ai#from_element=mainmenu">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-lg size-4 text-surface-foreground-0"><path d="M388.02 215.98C339.667 167.629 275.38 141 207 141S74.333 167.629 25.98 215.98C-22.371 264.332-49 328.62-49 397s26.629 132.668 74.98 181.02C74.333 626.371 138.62 653 207 653s132.667-26.629 181.02-74.98C436.371 529.668 463 465.38 463 397s-26.629-132.668-74.98-181.02M206.999 594.556c-28.257-26.276-50.21-57.813-64.859-92.556h129.72c-14.65 34.744-36.603 66.281-64.861 92.556M126.613 452C122.92 434.105 121 415.699 121 397s1.921-37.105 5.613-55h160.774c3.693 17.895 5.613 36.301 5.613 55s-1.921 37.105-5.613 55zM1 397c0-19.042 2.609-37.484 7.467-55h67.236C72.597 359.985 71 378.371 71 397s1.597 37.015 4.703 55H8.467A205.5 205.5 0 0 1 1 397m206-197.557c28.257 26.276 50.211 57.813 64.859 92.557H142.141c14.648-34.743 36.602-66.281 64.859-92.557M338.297 342h67.236c4.858 17.516 7.467 35.958 7.467 55s-2.609 37.484-7.467 55h-67.235c3.106-17.985 4.703-36.371 4.703-55s-1.598-37.015-4.704-55m45.866-50h-58.741a317.4 317.4 0 0 0-47.355-88.362C322.719 220.102 360.14 251.62 384.163 292m-248.229-88.362A317.3 317.3 0 0 0 88.579 292H29.837c24.023-40.38 61.444-71.898 106.097-88.362M29.837 502h58.742a317.3 317.3 0 0 0 47.355 88.362C91.281 573.898 53.86 542.38 29.837 502m248.23 88.362A317.3 317.3 0 0 0 325.422 502h58.741c-24.023 40.379-61.443 71.898-106.096 88.362"></path></svg>
                    <p>Community</p>
                  </a>

                </div>
              </div>
            </li>

            <li className="nav-list-item">Stock
            {/* dropdown menu content */}
              <div className="nav-dropdown-container">

                {/* dropdown menu heading */}
                <h4>Stock</h4>

                {/* dropdown list container */}
                <div className="nav-dropdown-list">
                  {/* dropdown columns */}
                  <div className="nav-dropdown-list-item">

                    {/* dropdown column links */}
                    <div className="nav-list-item-links">
                      <ul className="stock-list-item">
                        <li><a href="https://www.freepik.com/photos#from_element=mainmenu">Photos</a></li>
                        <li><a href="https://www.freepik.com/vectors#from_element=mainmenu">Vectors</a></li>
                        <li><a href="https://www.freepik.com/illustrations#from_element=mainmenu">Illustration</a></li>
                        <li><a href="https://www.freepik.com/videos#from_element=mainmenu">Video</a></li>
                        <li><a href="https://www.freepik.com/video-templates#from_element=mainmenu">Video Templates</a></li>
                        <li><a href="https://www.freepik.com/motion-graphics#from_element=mainmenu">Motion Graphics</a></li>
                        <li><a href="https://www.freepik.com/audio#from_element=mainmenu">Audio</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="nav-dropdown-list-item">

                    {/* dropdown column links */}
                    <div className="nav-list-item-links">
                      <ul className="stock-list-item">
                        <li><a href="https://www.freepik.com/icons#from_element=mainmenu">Icons</a></li>
                        <li><a href="https://www.freepik.com/templates#from_element=mainmenu">Templates</a></li>
                        <li><a href="https://www.freepik.com/mockups#from_element=mainmenu">Mockups</a></li>
                        <li><a href="https://www.freepik.com/psd#from_element=mainmenu">PSD</a></li>
                        <li><a href="https://www.freepik.com/3d-models#from_element=mainmenu">3D</a></li>
                        <li><a href="https://www.freepik.com/fonts#from_element=mainmenu">Fonts</a></li>
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Bottom content for dropdown menus */}
                <div className="nav-dropdown-bottom-content">
                
                  <a className="bottom-content-link" href="https://www.freepik.com/images#from_element=mainmenu">
                    <p>All Images</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-xl"><path d="m226.644 397-92.322 92.322c-9.763 9.763-9.763 25.592 0 35.355s25.592 9.763 35.355 0l110-110C284.559 409.797 287 403.398 287 397s-2.441-12.796-7.322-17.678l-110-110c-9.764-9.763-25.592-9.763-35.355 0s-9.763 25.592 0 35.355z"></path></svg>
                  </a>

                </div>
              </div>
            </li>


            <li className="nav-list-item">Resources
            {/* dropdown menu content */}
              <div className="nav-dropdown-container">


                {/* dropdown list container */}
                <div className="nav-dropdown-list resources-dropdown-list">
                  {/* dropdown columns */}
                  <div className="nav-dropdown-list-item">
                    {/* dropdown column header */}
                    <div className="nav-list-item-title resource-list-item">
                      <p>COMPANY</p>
                    </div>
                    {/* dropdown column links */}
                    <div className="nav-list-item-links">
                      <ul>
                        {/* dropdown column list item */}
                        <li>
                          <a href="https://www.freepik.com/company/about-us">
                            <div className="nav-dropdown-icon">
                              {/* Icon container */}
                              <div className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" class="$w-[1em] $h-[1em] $fill-current $text-xl"><path d="M207 653c-68.38 0-132.667-26.629-181.02-74.98C-22.371 529.667-49 465.38-49 397s26.629-132.667 74.98-181.02C74.333 167.629 138.62 141 207 141s132.667 26.629 181.02 74.98C436.371 264.333 463 328.62 463 397s-26.629 132.667-74.98 181.02C339.667 626.371 275.38 653 207 653m0-462C93.411 191 1 283.411 1 397s92.411 206 206 206 206-92.411 206-206-92.411-206-206-206"></path><path d="M217 543c-13.807 0-25-11.193-25-25V391h-25c-13.807 0-25-11.193-25-25s11.193-25 25-25h50c13.807 0 25 11.193 25 25v152c0 13.807-11.193 25-25 25m-10-232c-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30-13.458 30-30 30"></path></svg>
                              </div> 
                              {/* Link header and paragraph */}
                              <div className="icon-text">
                                <h5>About Us</h5>
                                <p>Meet the team and 15 years of experience</p>
                              </div> 
                            </div>  
                          </a>
                        </li>

                        <li>
                          <a href="https://www.freepik.com/ai/partners">
                            <div className="nav-dropdown-icon">
                              {/* Icon container */}
                              <div className="icon-container">
                                <img src="./photos/person_shield.svg" alt="" />
                              </div> 
                              {/* Link header and paragraph */}
                              <div className="icon-text">
                                <h5>AI Partners Program</h5>
                                <p>Top Creatives and Affiliate Programs</p>
                              </div> 
                            </div>  
                          </a>
                        </li>

                        <li>
                          <a href="https://www.freepik.com/blog/">
                            <div className="nav-dropdown-icon">
                              {/* Icon container */}
                              <div className="icon-container">
                                <img src="./photos/newsmode.svg" alt="" />
                              </div> 
                              {/* Link header and paragraph */}
                              <div className="icon-text">
                                <h5>Blog</h5>
                                <p>Creative news and tips</p>
                              </div> 
                            </div>  
                          </a>
                        </li>

                        <li>
                          <a href="https://www.freepik.com/profile/support">
                            <div className="nav-dropdown-icon">
                              {/* Icon container */}
                              <div className="icon-container">
                                <img src="./photos/help.svg" alt="" />
                              </div> 
                              {/* Link header and paragraph */}
                              <div className="icon-text">
                                <h5>Get Help</h5>
                                <p>Get support from our team</p>
                              </div> 
                            </div>  
                          </a>
                        </li>

                        <li>
                          <a href="https://www.freepik.com/company/about-us#contact-us">
                            <div className="nav-dropdown-icon">
                              {/* Icon container */}
                              <div className="icon-container">
                                <img src="./photos/mail.svg" alt="" />
                              </div> 
                              {/* Link header and paragraph */}
                              <div className="icon-text">
                                <h5>Contact Us</h5>
                                <p>Meet the team and 15 years of experience</p>
                              </div> 
                            </div>  
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="nav-dropdown-list-item">
                    {/* dropdown column header */}
                    <div className="nav-list-item-title resource-list-item">
                      <p>MORE</p>
                    </div>
                    {/* dropdown column links */}
                    <div className="nav-list-item-links">
                      <ul>
                        <li><a href="https://www.freepik.com/enterprise">Enterprise</a></li>
                        <li><a href="https://www.freepik.com/api">API for Developers</a></li>
                        <li><a href="https://play.google.com/store/apps/details?id=com.freepikcompany.freepik">Android App</a></li>
                        <li><a href="https://apps.apple.com/us/app/freepik-ai-video-generator/id1664092086">IOS App</a></li>
                        <li><a href="https://www.figma.com/@freepik">Figma Plugin</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </li>


            <li className="nav-list-item"><a href="https://www.freepik.com/enterprise#from_element=mainmenu">Enterprise</a></li>


            <li className="nav-list-item"><a href="https://www.freepik.com/pricing?origin=freepik_web#from_element=mainmenu">Pricing</a></li>


          </ul>
        </nav>
      </div>

      {/* Header Forms */}

      <div className="header-form">
        <div className="header-search-bar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-49 141 512 512" width="16" height="16" aria-hidden="true" color="white" class="$w-[1em] $h-[1em] $fill-current $text-sm $text-surface-foreground-0"><path d="M448.178 602.822 316.426 471.071c26.355-33.88 42.074-76.422 42.074-122.571 0-110.28-89.72-200-200-200s-200 89.72-200 200 89.72 200 200 200c46.149 0 88.691-15.719 122.571-42.074l131.751 131.751c4.882 4.882 11.28 7.323 17.678 7.323s12.796-2.441 17.678-7.322c9.762-9.763 9.762-25.593 0-35.356M8.5 348.5c0-82.71 67.29-150 150-150s150 67.29 150 150-67.29 150-150 150-150-67.29-150-150"></path></svg>
          <input type="text" placeholder="Search assets or start creating"/>
        </div>

        {/* Search Button */}
        <button className="btn-sign-in" type="submit">Sign in</button>
      </div>

    </header>
  );
};

export default Header;
