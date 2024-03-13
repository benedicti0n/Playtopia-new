import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import "../Styles/Carousel.css";
import games from "./games";

const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedGame, setSelectedGame] = useState(games[0]);
  const defaultH1 = games[0].title;
  const defaultP = games[0].desc;
  const defaultBackgroundSrc = "/EventBg/Desktop/bgImg1.jpg";

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5 // adjust the threshold as needed
  });

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    setSelectedGame(index === activeIndex ? null : games[index]);
  };

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
  }, []);

  return (
    <div className="h-screen w-full ">
      {windowWidth.windowWidth < 768 ? (
        <div
          id="screen"
          className="h-screen w-full relative bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${
              selectedGame ? selectedGame.src : defaultBackgroundSrc
            })`,
          }}
        >
          <div className="h-full w-full bg-black opacity-50 absolute"></div>
          <div className="text-white mx-8 pt-[120px] relative z-20" ref={ref}>

          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className="text-3xl mb-3"
            
          >
              {selectedGame ? selectedGame.title : defaultH1}
            
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}
            className="text-sm"
            
          >
              {selectedGame ? selectedGame.desc : defaultP}
            
          </motion.p>
          </div>
          

          <section className="game-section absolute bottom-0 left-0 ">
            <div className="carousel">
              {games.map((game, index) => (
                <div
                  key={index}
                  className={`item ${
                    index === activeIndex ? "active" : ""
                  } bg-cover bg-${game.position}`}
                  style={{ backgroundImage: `url(${game.src})` }}
                  onClick={() => handleClick(index)}
                >
                  <div className="item-desc">
                    <h3>{game.title}</h3>
                    <Link to={game.route}>
                      <button className="flex justify-center rounded-lg">
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="h-screen w-full relative">
          <div className="carousel w-full h-full bg-cover bg-center relative">
            <div
              id="item1"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg1.jpg')] bg-cover bg-center flex justify-start items-center text-white"
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0 font-[Valorant] ">
                  Valorant
                </h1>
                <p className="text-2xl md:text-xl my-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  deserunt at, id itaque dolor dolores cumque consequatur,
                  accusantium quibusdam sequi eaque, assumenda asperiores fugit
                  sint adipisci hic necessitatibus. Nisi, eius.
                </p>
                <div className="w-full flex mt-12">
                  <Link to={"/valorantReg"}>
                    <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
              {/* <div><Contributor/></div> */}
            </div>

            <div
              id="item2"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg2.jpg')] bg-cover bg-center flex justify-start items-center text-white"
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0 font-[PUBG]">
                  Battlegrounds Mobile India
                </h1>
                <p className="text-2xl md:text-xl my-6">
                  Greetings, Battleground Champions! We are thrilled to welcome
                  you to our exhilarating BGMI Tournament! As avid gamers and
                  enthusiasts ourselves, we've crafted an electrifying event to
                  celebrate the spirit of competition and camaraderie within the
                  PUBG community.
                </p>
                <div className="w-full flex mt-12">
                  <Link to="/bgmiReg">
                    <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="item3"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg3.jpg')] bg-cover bg-center flex justify-start items-center text-white "
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0">8 Ball Pool</h1>
                <p className="text-2xl md:text-xl my-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  deserunt at, id itaque dolor dolores cumque consequatur,
                  accusantium quibusdam sequi eaque, assumenda asperiores fugit
                  sint adipisci hic necessitatibus. Nisi, eius.
                </p>
                <div className="w-full flex mt-12">
                  <Link to={"/8bpReg"}>
                    <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="item4"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg4.jpg')] bg-cover bg-center flex justify-start items-center text-white "
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0">Photography</h1>
                <p className="text-2xl md:text-xl my-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  deserunt at, id itaque dolor dolores cumque consequatur,
                  accusantium quibusdam sequi eaque, assumenda asperiores fugit
                  sint adipisci hic necessitatibus. Nisi, eius.
                </p>
                <div className="w-full flex mt-12">
                  <Link to={"/"}>
                    <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="item5"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg5.jpg')] bg-cover bg-center flex justify-start items-center text-white "
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0">Business Hackathon</h1>
                <p className="text-2xl md:text-xl my-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  deserunt at, id itaque dolor dolores cumque consequatur,
                  accusantium quibusdam sequi eaque, assumenda asperiores fugit
                  sint adipisci hic necessitatibus. Nisi, eius.
                </p>
                <div className="w-full flex mt-12">
                  <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                    Register
                  </button>
                </div>
              </div>
            </div>

            <div
              id="item6"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg6.jpg')] bg-cover bg-center flex justify-start items-center text-white "
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0">Treasure Hunt</h1>
                <p className="text-2xl md:text-xl my-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  deserunt at, id itaque dolor dolores cumque consequatur,
                  accusantium quibusdam sequi eaque, assumenda asperiores fugit
                  sint adipisci hic necessitatibus. Nisi, eius.
                </p>
                <div className="w-full flex mt-12">
                  <Link to={"/treasureHuntReg"}>
                    <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="item7"
              className="carousel-item w-full bg-[url('/EventBg/Desktop/bgImg7.jpg')] bg-cover bg-center flex justify-start items-center text-white "
            >
              <div className="h-full w-full bg-black opacity-50 absolute"></div>
              <div className="h-[350px] w-[700px] mx-[90px] lg:mx-[200px] z-10">
                <h1 className="text-9xl md:text-7xl m-0">Open Mic</h1>
                <p className="text-2xl md:text-xl my-6">
                  Open Mic is one of the exciting segments of Playtopia, an
                  event organized by the Department of Computer Application and
                  Science; Business Administration. It provides a platform for
                  individuals or duos to showcase their talents in various
                  genres including music, poetry/storytelling, stand-up comedy,
                  and open spectrum performances.
                </p>
                <div className="w-full flex mt-12">
                  <button className="w-[150px] bg-white h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-black">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[120px] w-full flex justify-center absolute bottom-10 lg:gap-7 md:gap-3 z-20">
            <a href="#item1" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/valoLogo.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item2" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/bgmiLogo.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item3" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/8bpLogo.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item4" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/carromLogo.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item5" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/ttLogo.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item6" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/tresureLogo.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
            <a href="#item7" className="h-full w-[120px] bg-cover bg-center">
              <img
                src="/EventBg/SliderLogo/openMicLogo.jpg"
                alt=""
                loading="lazy"
                className="h-full w-full hover:scale-110 transition-transform duration-2000 rounded-lg"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
