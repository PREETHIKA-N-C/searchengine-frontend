import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import bg from './assets/parallax-bg5.jpg'
import main1 from './assets/parallax-main51.png'
import main2 from './assets/parallax-main52.png'
import main3 from './assets/parallax-main53.png'

function AdvanceBanner4() {
    const background = {
        image:"https://cdn.wallpapersafari.com/90/87/148nop.jpeg",
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
    
      const foreground1= {
        image:main1,
        translateX: [0, 15],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
      };

      const foreground2= {
        image:main2,
        translateX: [0, -15],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
      };

      const foreground3= {
        image:main3,
        translateY: [0, -15],
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
    layers={[background,foreground1,foreground2,foreground3,headline, gradientOverlay]}
    className="full"
  />
  </div>
  )
}

export default AdvanceBanner4