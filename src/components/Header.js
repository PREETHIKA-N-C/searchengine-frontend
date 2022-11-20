import React from 'react'
import './Header.css'
function Header() {
  return (
    <div>
        
    <header class="site-header">
  <div class="site-identity">
    <h1><a className='aLink' href=""> D I G I V E R S E </a></h1>
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