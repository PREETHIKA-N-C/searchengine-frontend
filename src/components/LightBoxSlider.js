import React , { useState } from 'react'
import Lightbox from 'react-spring-lightbox';
import { FiX,FiChevronLeft,FiChevronRight } from "react-icons/fi";
function LightBoxSlider() {
    const images= [
        {
            src: 'https://static.filehorse.com/screenshots-mac/video-software/adobe-media-encoder-screenshot-02.png',
            loading: 'lazy',
            alt: 'Windows 10 Dark Mode Setting',
        },
        {
            src: 'https://timellenberger.com/static/blog-content/dark-mode/win10-dark-mode.jpg',
            loading: 'lazy',
            alt: 'Windows 10 Dark Mode Setting',
        },
        {
            src: 'https://timellenberger.com/static/blog-content/dark-mode/macos-dark-mode.png',
            loading: 'lazy',
            alt: 'macOS Mojave Dark Mode Setting',
        },
        {
            src: 'https://timellenberger.com/static/blog-content/dark-mode/android-9-dark-mode.jpg',
            loading: 'lazy',
            alt: 'Android 9.0 Dark Mode Setting',
        },
        {
            src: 'https://europe1.discourse-cdn.com/figma/original/2X/b/b2ec4fb60487072936394c14ba0e9ce298a998f3.png',
            loading: 'lazy',
            alt: 'Android 9.0 Dark Mode Setting',
        },
    ];
    const [currentImageIndex, setCurrentIndex] = useState(0);
    const [lightBoxOpen,setLightBoxOpen] = useState(false)
    const gotoPrevious = () =>{
        currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);
    }
    const gotoNext = () =>{
        currentImageIndex + 1 < images.length &&
        setCurrentIndex(currentImageIndex + 1);
    }
    const lightboxClick = (e)=>{
        setLightBoxOpen(true)
        setCurrentIndex(e);
    }
  return (
    <>
      {images.map((data,idx)=>(
                <img className='w-[450px] h-[250px] rounded-[5px] hover:border-[2px] hover:border-[#ffffff3a] hover:opacity-25' src={data.src} alt={data.alt} onClick={()=>lightboxClick(idx)}/>
                ))}
                <Lightbox
            isOpen={lightBoxOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
            className='bg-[#000000c9]' 
            renderHeader={()=>(
                <div className='w-[100%] h-[60px] p-5 flex justify-end '><FiX color='#ffffff' onClick={()=>(setLightBoxOpen(false))} className='w-[25px] h-[25px] cursor-pointer rounded-md hover:bg-[#ffffff3a]' /></div>
            )}   
            renderNextButton={()=>(
                <div className='mr-10 cursor-pointer rounded-[5px] hover:bg-[#ffffff3a] z-[999]' onClick={gotoNext}>
                    <FiChevronRight color='#ffffff' className='w-[35px] h-[35px] ' />
                </div>
            )}
            renderPrevButton={()=>(
                <div className='ml-10 cursor-pointer rounded-[5px] hover:bg-[#ffffff3a] z-[999]' onClick={gotoPrevious}>
                    <FiChevronLeft color='#ffffff' className='w-[35px] h-[35px] ' />
                </div>
            )}
            />
    </>
  )
}

export default LightBoxSlider
