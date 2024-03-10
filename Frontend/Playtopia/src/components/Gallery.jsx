import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../Styles/Gallery.css'

const Gallery = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      defaults: {
        ease: "linear",
        repeat: -1
      }
    });

    tl.fromTo(
      ".ImageScroll__image-1",
      { x: "-100vw" },
      {
        x: 0,
        duration: 10
      }, 0
    );

    tl.fromTo(
      ".ImageScroll__image-2",
      { x: 0 },
      {
        x: "-100vw",
        duration: 10
      }, 0
    );

    tl.fromTo(
      ".ImageScroll__image-3",
      { x: "-100vw" },
      {
        x: 0,
        duration: 10
      }, 0
    );

    ScrollTrigger.create({
      trigger: "section",
      start: "top+=200 top",
      end: "+=200",
      markers: true,
      onEnter: () => {
        tl.play();
      },
      onLeave: () => {
        tl.pause();
      },
      onUpdate: (self) => {
        const velocity = Math.abs(self.getVelocity());
        tl.timeScale(velocity / 100);
        gsap.to(tl, { timeScale: 1, overwrite: true });
      }
    });
    
  }, []);

  return (
    <div className='h-screen w-full'>
      <section>
      <div className="flex justify-center items-center h-screen">
        <div className="ImageScroll__wrapper">
          <div className="ImageScroll__image bg-cover bg-center bg-repeat-x w-full h-full"></div>
        </div>
        <div className="ImageScroll__wrapper">
          <div className="ImageScroll__image bg-cover bg-center bg-repeat-x w-full h-full"></div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default Gallery;
