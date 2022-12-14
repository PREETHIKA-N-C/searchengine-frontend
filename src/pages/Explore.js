import React, { useState } from 'react'
import Gallery  from '../components/Gallery'
import ProductSkullLoader from '../components/ProductSkullLoader'
import SideDrawer from '../components/SideDrawer'
import SkeletonLoader from '../components/SkeletonLoader'
import SliderThumbnail from '../components/SliderThumbnail'
import Home from './Home'
import Product from './Product'
function Explore() {
  const [load,setLoad] = useState(false);
  setTimeout(()=>{
    setLoad(true)
  },5000)
  return (
    // <div style={{display:"flex"}}>
    //     <SideDrawer />
    //     {/* <SkeletonLoader />   */}
    //     {/* <Home /> */}
    //     {/* <Gallery/> */}
        
    // </div>
    <>
        {/* <SideDrawer />
        {load ? <Product/>:<ProductSkullLoader />} */}
        {/* <SideDrawer /> */}
        {/* <SliderThumbnail/> */}
        {load ? <Gallery/>:<SkeletonLoader /> } 
        {/* <Home /> */}
       
        </>
  )
}

export default Explore