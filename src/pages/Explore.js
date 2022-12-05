import React from 'react'
import Gallery  from '../components/Gallery'
import SideDrawer from '../components/SideDrawer'
import SkeletonLoader from '../components/SkeletonLoader'
import Home from './Home'
function Explore() {
  return (
    <div style={{display:"flex"}}>
        <SideDrawer />
        {/* <SkeletonLoader />   */}
        {/* <Home /> */}
        <Gallery/>
    </div>
  )
}

export default Explore