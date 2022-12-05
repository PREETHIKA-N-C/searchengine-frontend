import React from 'react'
import Style from './SideDrawer.module.css'
import { FiHome,FiGrid,FiCompass,FiHelpCircle,FiSettings } from "react-icons/fi";
import logo2 from '../assets/Digiverz_B.png'
import Lottie from 'react-lottie-player'
function SideDrawer() {
  return (
    <div>
    <div className={Style.header_cont}>
    <img src={logo2} alt="logo" width={150} height={50}/>
    <div className={Style.profile}>
        <h6>HK</h6>
    </div>
    </div>
    <div className={Style.container}>
    <div className={Style.top_cont}>
    <div className={Style.icon_cont}>
    <FiHome className={Style.icon} />
    <h6 className={Style.text_2}>Home</h6>
    </div>
    <div className={Style.icon_cont}>
    <FiGrid className={Style.icon} />
    <h6 className={Style.text_2}>App</h6>
    </div>
    <div className={Style.icon_cont}>
    <FiCompass className={Style.icon} />
    <h6 className={Style.text_2}>Explore</h6>
    </div>  
        
    </div>
    <div className={Style.bottom_cont}>
    <div className={Style.icon_cont}>
    <FiHelpCircle className={Style.icon} />
    <h6 className={Style.text_2}>Help</h6>
    </div>
    <div className={Style.icon_cont}>
    <FiSettings className={Style.icon} />
    <h6 className={Style.text_2}>Manage</h6>
    </div>
    </div>
    </div>
    </div>
  )
}

export default SideDrawer