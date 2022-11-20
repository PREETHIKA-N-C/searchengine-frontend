import React from 'react'
import { ParallaxBanner } from "react-scroll-parallax";
import './Banner.css'
function Banner({bgImage,mainImage="",children,translateX=[0,0],translateY=[0,15],foregrounds=[{}]}) {
    const background = {
        image:bgImage,
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
          <div className="left">
            <h1 className="headline white">KAAR</h1>
          </div>
          <div className="right">
            <h1 className="headline white">TECH</h1>
          </div>
          </div>
        )
      };
    
      const foreground= {
        image:mainImage,
        translateY: translateY,
        translateX: translateX,
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
    layers={[background, foreground, ...foregrounds, headline, gradientOverlay]}
    className="full">
     {children}
  </ParallaxBanner>
  </div>
  )
  
}



// Banner.defaultProps = {
//     foregroundProps:{
//         image:Banner.mainImage,
//         translateY: [0, 15],
//         scale: [1, 1.1, "easeOutCubic"],
//         shouldAlwaysCompleteAnimation: true
//     }
// }

export default Banner