import React, { useState } from 'react';
import '../Styles/Carousel.css'; // Import your CSS file here
import games from './games';



const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className='h-screen w-full relative '>
      <video src="../public/bg3.mp4" autoPlay loop muted className="absolute top-0 left-0 object-cover w-full h-full -z-10"/>
       <section className="game-section absolute bottom-0 left-0 overflow-x-auto">
      <div className='custom-carousel-container'>
      <div className="custom-carousel overflow-hidden">
        {games.map((game, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? 'active' : ''}`}
            style={{backgroundImage: `url(${game.src})`}}
            onClick={() => handleClick(index)}
          >
            <div className="item-desc">
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <button className='flex justify-center'>Register</button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
    </div>
   
  );
}

export default Carousel;
