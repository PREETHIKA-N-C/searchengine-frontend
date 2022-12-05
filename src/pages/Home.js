import React, { useEffect } from 'react'
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
import slideBg3 from '../assets/parallax-bg7.png'
import SlideMain5 from '../assets/parallax-main7.png'
import logo from '../assets/Digiverz_L.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {  useState } from 'react';


function Home() {
    const [slideName,setSlideName] = useState(2)
    
    // useEffect(()=>{
    //    setTimeout(()=>{
    //     scroller.scrollTo(`slide${slideName}`,{
    //       duration: 1500,
    //   delay: 100,
    //   smooth: true,
    //     });
    //     if(slideName <=4){
    //       setSlideName(slideName+1)
    //       console.log(slideName)
    //     }
    //     else{
    //       setSlideName(1)
    //       console.log(slideName)
    //     }
    //    },10000)
    // },[slideName])


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

  const slide5Foreground1= {
    image:logo,
    translateY: [20,40],
    translateX: [20,40],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const slide5Foreground2 ={
    image:SlideMain5,
    translateX:[30, -20],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  return (
    <div className='parallax_cont'>
    <ParallaxProvider >

    {/* slide 1 */}
    <Element name="slide1">
     <Banner  bgImage={slideBg1} mainImage={SlideMain1} headlineCss="headlineContainer">
       {/* <Header/>
       <Search/> */}
     </Banner>
     </Element>

    {/* slide 2 */}
    <Element name="slide2" >
    <Banner  bgImage="https://wallpaperaccess.com/full/391083.jpg" mainImage={SlideMain2} translateX={[0, 90]} translateY={[0,-21]} />
    </Element>

    {/* slide 3 */}
    <Element name="slide3" >
    <Banner  bgImage="https://cdn.wallpapersafari.com/90/87/148nop.jpeg" foregrounds={[foreground1,foreground2,foreground3]} />
    </Element>

    {/* slide 4 */}

    <Element name="slide4" >
    <Banner  bgImage="https://wallpaperaccess.com/full/338765.jpg" mainImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png" />
    </Element>

    {/* slide 5 */}

    {/* <Element name='slide5'>
      <Banner bgImage={slideBg3} foregrounds={[slide5Foreground1,slide5Foreground2]} />
    </Element> */}
     
       <Element name="slide5"  className="center full">
         <h1 className="headline gray">KAAR TECH</h1>
       </Element>
     </ParallaxProvider>
     </div>
  )
}

export default Home