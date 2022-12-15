import React, { useEffect, useState } from 'react'
import Style from './SideDrawer.module.css'
import { FiHome,FiGrid,FiCompass,FiHelpCircle,FiSettings,FiSearch } from "react-icons/fi";
// import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import logo2 from '../assets/Digiverz_B.png'
import lottie from 'lottie-web';
import { defineElement} from 'lord-icon-element';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import compass from '../assets/compass.json'
import grid from '../assets/Grid and List.json'
import {NavLink} from 'react-router-dom'


function SideDrawer() {

  const [linkState,setLinkState] = useState("")
 
defineElement(lottie.loadAnimation);
  return (
    <div>
    <div className={Style.header_cont}>
    <img src={logo2} alt="logo" width={150} height={50}/>
    <div className='border-[1px] rounded-[10px] bg-[#212637e3] border-[#2F363D] w-[600px] h-[40px] mt-[4px] flex px-4'> 
    <div className='pt-[3px]'>
    {/* <FiSearch  className={Style.icon}/>  */}
    <lord-icon src="https://cdn.lordicon.com/xfftupfv.json" colors="primary:#ffffff" trigger="morph"></lord-icon>
   
    </div>  
    <input placeholder='Search...' className='outline-none h-[100%] w-[100%] bg-[#212637e3] ml-2 font-[Aquire] text-white text-lg'/> </div>
    <div className={Style.profile}>
        <h6>HK</h6>
    </div>
    </div>
    <div className={Style.container}>
    <div className={Style.top_cont}>
      <NavLink to="/"  className={(state) => state.isActive ? setLinkState("Home"):""}> 
    <div className={linkState ==="Home"? Style.icon_cont_active :Style.icon_cont } >
    {/* <FiHome className={Style.icon} /> */}
    <lord-icon
    src="https://cdn.lordicon.com/osuxyevn.json"
    trigger="hover"
    colors="primary:#ffffff" style={{width:"23px",height:"23px",marginLeft:"7px"}}>
</lord-icon>
    <h6 className={Style.text_2}>Home</h6>
    </div>
    </NavLink>
    <NavLink to="/Product" className={(state) => state.isActive ? setLinkState("Product"):""}>
    <div className={linkState ==="Product"? Style.icon_cont_active :Style.icon_cont } >
    {/* <FiGrid className={Style.icon} /> */}
    {/* <Player
        hover
        speed={3}
        src={grid}
        style={{ height: "30px", width: "35px",marginLeft:'2px' }}
      >
      </Player> */}
      <lord-icon
    src="https://cdn.lordicon.com/ynwbvguu.json"
    trigger="hover"
    colors="primary:#ffffff" style={{width:"23px",height:"23px",marginLeft:"7px"}}></lord-icon>
    <h6 className={Style.text_2}>App</h6>
    </div>
    </NavLink>

    <NavLink to="/Explore" className={(state) => state.isActive ? setLinkState("Explore"):""}>
    <div className={linkState ==="Explore"? Style.icon_cont_active :Style.icon_cont } >
    {/* <FiCompass className={Style.icon} /> */}
    <Player
        hover
        speed={1}
        src={compass}
        style={{ height: "30px", width: "35px",marginLeft:'2px' }}
      >
      </Player>
    <h6 className={Style.text_2}>Explore</h6>
    </div>  
    </NavLink>


    <NavLink to="/MarketPlaceHome" className={(state) => state.isActive ? setLinkState("Market"):""}>
    <div className={linkState ==="Market"? Style.icon_cont_active :Style.icon_cont } >
    {/* <FiGrid className={Style.icon} /> */}
    {/* <Player
        hover
        speed={3}
        src={grid}
        style={{ height: "30px", width: "35px",marginLeft:'2px' }}
      >
      </Player> */}
      <lord-icon
    src="https://cdn.lordicon.com/icxqolmx.json"
    trigger="hover"
    colors="primary:#ffffff" style={{width:"23px",height:"23px",marginLeft:"7px"}}></lord-icon>
    <h6 className={Style.text_2}>Market</h6>
    </div>
    </NavLink>
   
    </div>
    <div className={Style.bottom_cont}>
    <div className={Style.icon_cont}>
    {/* <FiHelpCircle className={Style.icon} /> */}
    <lord-icon
    src="https://cdn.lordicon.com/enzmygww.json"
    trigger="hover"
    colors="primary:#ffffff" style={{width:"23px",height:"23px",marginLeft:"7px"}}></lord-icon>
    <h6 className={Style.text_2}>Help</h6>
    </div>
    <div className={Style.icon_cont}>
    {/* <FiSettings className={Style.icon} /> */}
    <lord-icon
    src="https://cdn.lordicon.com/hwuyodym.json"
    trigger="hover"
    colors="primary:#ffffff" style={{width:"23px",height:"23px",marginLeft:"7px"}}></lord-icon>
    <h6 className={Style.text_2}>Manage</h6>
    </div>
    </div>
    </div>
    </div>
  )
}

export default SideDrawer