import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import Navbar from "./Navbar.jsx";

import "../Styles/Fonts.css";
import "../Styles/Home.css";

// TODO: implement a full page smooth scroll. Reference help links given below:
// https://www.youtube.com/watch?v=hnbOIVBREUM
// https://github.com/oelbaga/snapscroll-react

const Home = () => {
  return (
    <div className=" h-screen w-full lg:pt-0 lg:px-[100px] lg:pb-[40px] sm:px-[50-px] flex justify-center items-center flex-col relative ">
      
      <video src="/bg.mp4" autoPlay loop muted className="absolute left-0 top-0 object-cover w-full h-full -z-10"/>
      <div className="h-full w-full bg-[rgba(0,0,0,0.4)] absolute left-0 top-0 "></div>

      <Navbar />

      <h1 className="font-[Simplicity] text-4xl lg:text-8xl text-white z-0">PlayTopia</h1>
      <div id="swipeDown">
          <div className="lines">
            <div className="line"></div>
            <div id="swipeDownTxt">Swipe Down</div>
          </div>
        </div>

    </div>
  );
};

export default Home;
