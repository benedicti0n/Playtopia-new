import React from 'react'
import '../Styles/Hamburger2.css'

const Hamburger2 = () => {
  return (
   
<nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />
  
    <span></span>
    <span></span>
    <span></span>
    

    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About Us</li></a>
      <a href="#"><li>Events</li></a>
      <a href="#"><li>Gallery</li></a>
      <a href="#"><li>Contact Us</li></a>
    </ul>
  </div>
</nav>
  )
}

export default Hamburger2