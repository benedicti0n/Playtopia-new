import React, { useEffect, useState } from "react";
import Home from "./Home";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
// import Events2 from "./Events2.jsx";
import Gallery from "./Gallery.jsx";
import Carousel from "./Carousel.jsx";
// import Loader from "./Loader";

// import '../Styles/Transition.css'

function HomePage() {
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 5000);
//   }, []);



  return (
    <div>
      <div className='h-screen  z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[indigo]'>
    <section  className='snap-center'>
      <Home/>
    </section>
    <section  className='snap-center'>
      <Aboutus/>
    </section>
    <section className='snap-center'>
      <Carousel/>
    </section>
    <section className='snap-center'>
      <Gallery/>
    </section>
    <section className='snap-center'>
      <Footer/>
    </section>
  </div>
    </div>
    
  );
}

export default HomePage;
