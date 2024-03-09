import React, { useState } from 'react';
import './CarouselComponent.css'; // Import your CSS file here
import games from './games';
const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="game-section">
      <h2 className="line-title">Trending Games</h2>
      <div className="custom-carousel flex">
        {games.map((game, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? 'active' : ''}`}
            style={{backgroundImage: `url(${game.src})`}}
            onClick={() => handleClick(index)}
          >
            <div className="item-desc">
              <h3>{game.title}</h3>
              <p>{game.platform}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CarouselComponent;
