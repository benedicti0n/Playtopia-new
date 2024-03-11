import React, { useEffect, useState } from "react";
import Home from "./Home";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Events from "./Events.jsx";
import Gallery from "./Gallery.jsx";
import Loader from "./Loader";
import '../Styles/HomePage.css'

function HomePage() {
  const [showLoader, setShowLoader] = useState(true); // State to track if loader should be shown
  const [contentLoaded, setContentLoaded] = useState(false); // State to track if content is loaded

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setShowLoader(false); // Hide the loader after 3 seconds
      setContentLoaded(true); // Set contentLoaded to true
    }, 3000);

    return () => clearTimeout(loadingTimer); // Clean up the timer
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className='h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[indigo] transition-scroll-2s'>
      {showLoader && <Loader />} {/* Show loader if showLoader is true */}
      {contentLoaded && (
        <>
          <section id="home">
            <Home />
          </section>
          <section id="aboutus">
            <Aboutus />
          </section>
          <section id="events" className=" overflow-hidden">
            <Events />
          </section>
          <section id="gallery">
            <Gallery />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </>
      )}
    </div>
  );
}

export default HomePage;
