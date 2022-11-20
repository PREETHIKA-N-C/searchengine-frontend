import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import bg from './assets/parallax-bg2.png'
import main from './assets/parallax-main2.png'
// import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

function AdvanceBanner() {
    const background = {
        image:bg,
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
      };
    
      const headline = {
        translateY: [0, 30],
        scale: [1, 1.05, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
          <div>
          <div className="inset left">
            <h1 className="headline white">KAAR</h1>
          </div>
          <div className="inset right">
            <h1 className="headline white">TECH</h1>
          </div>
          </div>
        )
      };
    
      const foreground= {
        image:main,
        translateY: [0, 15],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
      };
    
      const gradientOverlay= {
        opacity: [0, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />
      };
  return (
    <div>
     <ParallaxBanner
    layers={[background, foreground, headline, gradientOverlay]}
    className="full">

    
    <header class="site-header">
  <div class="site-identity">
    <h1><a href=""> D I G I V E R S E </a></h1>
  </div>  
  <nav class="site-navigation">
    <ul class="nav">
      <li><a href="">About</a></li> 
      <li><a href="">News</a></li> 
      <li><a href="">Contact</a></li> 
    </ul>
  </nav>
</header>

    <div className='searchContainer'>
      <div className='searchDiv'>
        <div className='inputDiv'>
          <input className='inputClass' placeholder='Search'/>
        </div>
      </div>
    </div>
  </ParallaxBanner>
  </div>
  )
}

export default AdvanceBanner