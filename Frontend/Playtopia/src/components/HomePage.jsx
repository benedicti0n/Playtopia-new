import React, { useEffect, useState } from "react";
import Home from "./Home";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Events from "./Events.jsx";
import Registration from './Registration.jsx'
// import Gallery from "./Gallery.jsx";
// import Carousel from "./Carousel.jsx";
// import Loader from "./Loader";

import '../Styles/HomePage.css'

function HomePage() {


  return (
      <div className='h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[indigo] transition-scroll-2s'>
    <section>
      <Home/>
    </section>
    <section>
      <Aboutus/>
    </section>
    <section>
      <Events/>
    </section>
    {/* <section>
      <Gallery/>
    </section> */}
    <section>
      <Footer/>
    </section>
  </div>
    
  );
}

export default HomePage;
