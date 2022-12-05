import React from 'react'
import './Header.css'
import logo from '../assets/Digiverz.png'
import logo2 from '../assets/Digiverz_B.png'
function Header() {
  return (
    <div>
        
    <header class="site-header">
  <div class="site-identity">
    <h1><a className='aLink' href=""> 
    <img src={logo2} alt="logo" width={150} height={50}/>
    </a></h1>
  </div>  
  <nav class="site-navigation">
    <ul class="nav">
      <li><a  className='aLink'href="">About</a></li> 
      <li><a className='aLink' href="">News</a></li> 
      <li><a className='aLink' href="">Contact</a></li> 
    </ul>
  </nav>
</header>

    </div>
  )
}

export default Header