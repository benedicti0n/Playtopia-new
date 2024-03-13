import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Hamburger2 from "./Hamburger2";
import "../Styles/SignUpBtn.css";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState({
    windowWidth: window.innerWidth,
  });
  const [scrolling, setScrolling] = useState(false);

  const detectSize = () => {
    setWindowWidth({
      windowWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }),
    [];

  const handleScrollToSection = (id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-[90%] h-[70px] md:h-[90px] lg:h-[75px] md:px-[10px] lg:pt-0 lg:px-[100px] sm:mx-[50px] flex justify-between items-center font-[Kollektif] fixed top-0 z-50">
      {windowWidth.windowWidth < 768 ? (
        <motion.header
          id="headSection"
          className="h-full w-full mx-1 mt-10 flex justify-between items-center z-3 backdrop-blur-3xl rounded-2xl"
          initial={{ y: -100, opacity: 0 }} // Initial position (off-screen and invisible)
          animate={{ y: 0, opacity: 1 }} // Animation when component mounts
          transition={{ type:"tween", stiffness: 150, damping: 20, duration: 0.5 }} // Animation transition
        >
          <div>
            <img src="/Logo.svg" alt="" className="h-[70px] ml-2" />
          </div>
          <Hamburger2 />
        </motion.header>
      ) : (
        <motion.header
          id="headSection"
          className="h-full w-full flex justify-between items-center z-3 md:mt-[30px] lg:mt-[40px] backdrop-blur-3xl rounded-2xl"
          initial={{ y: -100, opacity: 0 }} // Initial position (off-screen and invisible)
          animate={{ y: 0, opacity: 1 }} // Animation when component mounts
          transition={{ type:"tween", stiffness: 150, damping: 20, duration: 0.5 }}
        >
          <div>
            <img src="/Logo.svg" alt="" className="h-[90px] md:h-[100px] lg:h-[75px]" />
          </div>
          <div id="linksSection" className="flex justify-center items-center">
            <a
              href="#home"
              className="text-[20px] md:text-[17px] text-white m-[20px] hover:text-white"
              onClick={() => handleScrollToSection("home")}
            >
              Home
            </a>
            <a
              href="#aboutus"
              className="text-[20px]  md:text-[17px] text-white m-[20px] hover:text-white"
              onClick={() => handleScrollToSection("aboutus")}
            >
              About Us
            </a>
            <a
              href="#events"
              className="text-[20px]  md:text-[17px] text-white m-[20px] hover:text-white"
              onClick={() => handleScrollToSection("events")}
            >
              Events
            </a>
            <a
              href="#gallery"
              className="text-[20px] md:text-[17px] text-white m-[20px] hover:text-white"
              onClick={() => handleScrollToSection("gallery")}
            >
              Gallery
            </a>
            <a
              href="#footer"
              className="text-[20px] md:text-[17px] text-white m-[20px] hover:text-white"
              onClick={() => handleScrollToSection("footer")}
            >
              Contact Us
            </a>
          </div>

          <Link to={"/signUp"}>
            <button className="md:h-[35px] md:w-[130px]">
              Sign up
              <div className="flex justify-center items-center">
                <div className="arrow"></div>
              </div>
            </button>
          </Link>
          </motion.header>
      )}
    </div>
  );
};

export default Navbar;
