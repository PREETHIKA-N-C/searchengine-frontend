import React from 'react'
import { ParallaxProvider } from "react-scroll-parallax";
import Banner from '../components/Banner';
import Search from '../components/Search';
import Header from '../components/Header';
import slideBg1 from '../assets/parallax-bg2.png'
import SlideMain1 from '../assets/parallax-main2.png'
import slideBg2 from '../assets/parallax-bg3.jpg'
import SlideMain2 from '../assets/parallax-main3.png'
import SlideBg4 from '../assets/parallax-bg5.jpg'
import SlideMain41 from '../assets/parallax-main51.png'
import SlideMain42 from '../assets/parallax-main52.png'
import SlideMain43 from '../assets/parallax-main53.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useEffect, useState } from 'react';


function Home() {
    const [scrollPx,setScrollPx] = useState(0)
    // setInterval(()=>{
    //   console.log("hi")
    //   scroll.scrollMore(753,{
    //     duration: 1500,
    // delay: 100,
    // smooth: true,
    //   });
    //   setScrollPx(scrollPx+1)
    //   console.log(scrollPx)
    // },10000)

  // function checkReading (e) {
  //   console.log(e)
  //   if (checkReading.read) {
  //     return;
  //   }
  //   checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
  //   console.log(checkReading.read)
  // }
  const foreground1= {
    image:SlideMain41,
    translateX: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const foreground2= {
    image:SlideMain42,
    translateX: [0, -15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const foreground3= {
    image:SlideMain43,
    translateY: [0, -15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };
  return (
    <ParallaxProvider >


    {/* slide 1 */}
     <Banner bgImage={slideBg1} mainImage={SlideMain1}>
       <Header/>
       <Search/>
     </Banner>
 
    {/* slide 2 */}
    <Banner bgImage={slideBg2} mainImage={SlideMain2} translateX={[0, 90]} translateY={[0,-21]} />
 
    {/* slide 3 */}
    <Banner bgImage="https://cdn.wallpapersafari.com/90/87/148nop.jpeg" foregrounds={[foreground1,foreground2,foreground3]} />
 
    {/* slide 4 */}
    <Banner bgImage="https://wallpaperaccess.com/full/338765.jpg" mainImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png" />
     
     
       <div className="center full">
         <h1 className="headline gray">KAAR TECH</h1>
       </div>
     </ParallaxProvider>
  )
}

export default Home