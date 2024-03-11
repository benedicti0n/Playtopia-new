import React, { useState, useEffect } from "react";

import Navbar from "./Navbar.jsx";
import "../Styles/Fonts.css"
import "../Styles/Home.css";

const Home = () => {

  const [windowWidth, setWindowWidth] = useState({
    windowWidth: window.innerWidth,
  });

  const detectSize = () => {
    setWindowWidth({
      windowWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }),[];


  return (
    <div>
      {windowWidth.windowWidth < 550 ? (
        <div className=" h-screen w-full lg:pt-0 lg:px-[100px] lg:pb-[40px] sm:px-[50-px] flex justify-center items-center flex-col relative ">
      
      <video src="/bgMobile.mp4" autoPlay loop muted className="absolute left-0 top-0 object-cover w-full h-full -z-10"/>
      <div className="h-full w-full bg-[rgba(0,0,0,0.4)] absolute left-0 top-0 "></div>

      <Navbar />

      <h1 className=" text-4xl md:text-6xl lg:text-8xl text-white ">PlayTopia</h1>
      <div id="swipeDown">
          <div className="lines">
            <div className="line"></div>
            <div id="swipeDownTxt">Swipe Down</div>
          </div>
        </div>

    </div>
      ) : (<div className=" h-screen w-full lg:pt-0 lg:px-[100px] lg:pb-[40px] sm:px-[50-px] flex justify-center items-center flex-col relative ">
      
      <video src="/bg.mp4" preload="auto" autoPlay loop muted className="absolute left-0 top-0 object-cover w-full h-full -z-10"/>
      <div className="h-full w-full bg-[rgba(0,0,0,0.4)] absolute left-0 top-0 "></div>

      <Navbar />

      <h1 className="text-4xl font-[Simplicity] md:text-7xl lg:text-8xl text-white">PlayTopia</h1>
      <div id="swipeDown">
          <div className="lines">
            <div className="line"></div>
            <div id="swipeDownTxt">Swipe Down</div>
          </div>
        </div>

    </div>)}
    </div>
    
  );
};

export default Home;
