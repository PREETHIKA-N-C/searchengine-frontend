import React from 'react'
import Gallery  from '../components/Gallery'
import SideDrawer from '../components/SideDrawer'
import SkeletonLoader from '../components/SkeletonLoader'
import SliderThumbnail from '../components/SliderThumbnail'
import Home from './Home'
function Explore() {
  return (
    // <div style={{display:"flex"}}>
    //     <SideDrawer />
    //     {/* <SkeletonLoader />   */}
    //     {/* <Home /> */}
    //     {/* <Gallery/> */}
        
    // </div>

    <div>
        <SideDrawer />
        {/* <SkeletonLoader />   */}
        {/* <Home /> */}
        {/* <Gallery/> */}
        <SliderThumbnail/>
    </div>
    
  )
}

export default Explore