import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import Navbar from "./Navbar.jsx";

import "../Styles/Fonts.css";
import "../Styles/Home.css";

// TODO: implement a full page smooth scroll. Reference help links given below:
// https://www.youtube.com/watch?v=hnbOIVBREUM
// https://github.com/oelbaga/snapscroll-react

const Home = () => {
  return (
    <div id="homeContainer" className=" h-screen w-full lg:pt-0 lg:px-[100px] lg:pb-[40px] sm:px-[50-px] flex justify-center items-center flex-col relative overflow-hidden bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">

      <Navbar />
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
