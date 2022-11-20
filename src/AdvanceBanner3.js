import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import bg from './assets/parallax-bg3.jpg'
import main from './assets/parallax-main3.png'

function AdvanceBanner3() {
    const background = {
        image:"https://wallpaperaccess.com/full/391083.jpg",
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
        translateX: [0, 90],
        translateY: [0,-21],
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
    layers={[background, foreground,headline, gradientOverlay]}
    className="full"
  />
  </div>
  )
}

export default AdvanceBanner3