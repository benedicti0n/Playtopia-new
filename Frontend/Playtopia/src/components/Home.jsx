import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import Navbar from "./Navbar.jsx";

import "../Styles/Fonts.css";
import "../Styles/Home.css";

// TODO: implement a full page smooth scroll. Reference help links given below:
// https://www.youtube.com/watch?v=hnbOIVBREUM
// https://github.com/oelbaga/snapscroll-react

const Home = () => {
  return (
    <div id="homeContainer" className=" h-screen w-full lg:pt-0 lg:px-[100px] lg:pb-[40px] sm:px-[50-px] flex justify-center items-center flex-col relative overflow-hidden] bg-cover bg-center bg-no-repeat">

      <video src="/bg.mp4" autoPlay loop muted className="absolute top-0 left-0 object-cover w-full h-full z-0"/>

      <Navbar />

      <h1 className="font-[Simplicity] text-[190px] text-white ">Playtopia</h1>
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
