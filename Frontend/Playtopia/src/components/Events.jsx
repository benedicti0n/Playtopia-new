import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import "../Styles/Swiper.css";
import "swiper/css";
import "../Styles/Events.css";
import "swiper/css/effect-coverflow";

// Import images for desktop size
import img1 from "../../public/EventBg/Desktop/bgImg1.jpg";
import img2 from "../../public/EventBg/Desktop/bgImg2.jpg";
import img3 from "../../public/EventBg/Desktop/bgImg3.jpg";
import img4 from "../../public/EventBg/Desktop/bgImg4.jpg";
import img5 from "../../public/EventBg/Desktop/bgImg5.jpg";
import img6 from "../../public/EventBg/Desktop/bgImg6.jpg";
import img7 from "../../public/EventBg/Desktop/bgImg7.jpg";

// Import images for mobile size
import phnImg1 from "../../public/EventBg/Phone/phnBg1.jpg";
import phnImg2 from "../../public/EventBg/Phone/phnBg2.jpg";
import phnImg3 from "../../public/EventBg/Phone/phnBg4.jpg";
import phnImg4 from "../../public/EventBg/Phone/phnBg3.jpg";
import phnImg5 from "../../public/EventBg/Phone/phnBg5.jpg";
import phnImg6 from "../../public/EventBg/Phone/phnBg6.jpg";
import phnImg7 from "../../public/EventBg/Phone/phnBg7.jpg";

// Import slide images
import slide_image_1 from "../../public/EventBg/SliderLogo/valoLogo.jpg";
import slide_image_2 from "../../public/EventBg/SliderLogo/bgmiLogo.jpg";
import slide_image_3 from "../../public/EventBg/SliderLogo/carromLogo.jpg";
import slide_image_4 from "../../public/EventBg/SliderLogo/8bpLogo.jpg";
import slide_image_5 from "../../public/EventBg/SliderLogo/ttLogo.jpg";
import slide_image_6 from "../../public/EventBg/SliderLogo/tresureLogo.jpg";
import slide_image_7 from "../../public/EventBg/SliderLogo/openMicLogo.jpg";

// Define images for desktop size
const imagesDesktop = [img1, img2, img3, img4, img5, img6, img7];

// Define images for mobile size
const imagesPhone = [phnImg1, phnImg2, phnImg3, phnImg4, phnImg5, phnImg6, phnImg7];

const Events = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mainImg, setMainImg] = useState(window.innerWidth < 550 ? imagesPhone[0] : imagesDesktop[0]);

  const detectSize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    }
  }, []);


  const slideImages = [slide_image_1, slide_image_2, slide_image_3, slide_image_4, slide_image_5, slide_image_6, slide_image_7];

  const handleChangeBackground = (index) => {
    setMainImg(imagesDesktop[index]);
  };

  const handleSlideChange = (swiper) => {
    setMainImg(imagesPhone[swiper.realIndex]);
  };

  return (
    <div className="w-full h-full relative"  >
      {windowWidth < 550 ? (
        <div id="phoneScreen" className=" w-full h-screen bg-cover bg-right"  style={{ backgroundImage: `url(${mainImg})` }}>
          <div className="absolute bottom-[60px] left-0 w-full" >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              modules={[EffectCoverflow]}
              className="swiper_container"
              onSlideChange={handleSlideChange}
            >
              {slideImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image} alt={`slide_image_${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div id="eventsContainer" style={{ backgroundImage: `url(${mainImg})` }}>
          <div className="slider-container" >
            <div className="slider">
              {imagesDesktop.map((image, index) => (
                <div
                  className="imgContainer"
                  key={index}
                  onClick={() => handleChangeBackground(index)}
                >
                  {/* <div id="gradientShade" s></div> */}
                  <img src={slideImages[index]} alt={`slide_image_${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
