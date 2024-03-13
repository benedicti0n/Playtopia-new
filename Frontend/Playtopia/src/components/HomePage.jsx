import React, { useEffect, useState } from "react";
import Team from "./Team.jsx"
import Home from "./Home";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Events from "./Events.jsx";
import Gallery from "./Gallery.jsx";

import '../Styles/HomePage.css'

function HomePage() {


  return (
      <div className='h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[teal] transition-scroll-2s'>
    <section id="home">
      <Home/>
    </section>
    <section id="aboutus">
      <Aboutus/>
    </section>
    <section id="events" className=" overflow-hidden">
      <Events/>
    </section>
    <section id="gallery">
      <Gallery/>
    </section>
    <section id="footer">
      <Footer/>
    </section>
  </div>
    
  );
}

export default HomePage;