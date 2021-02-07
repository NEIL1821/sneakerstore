import React, { useEffect, useState } from 'react';
const SNEAKER_URL = `https://api.thesneakerdatabase.com/v1/sneakers?limit=25&releaseYear=2020`;

const Marquee = () => {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    const getSneakers = async () => {
      try {
        const response = await fetch(SNEAKER_URL);
        const data = await response.json();
        return setSneakers(data);
      } catch (e) {
        console.error(e);
      }
    };
    getSneakers();
  }, []);

  return (
    <div className="marquee mb-3">
      <div className="marquee__content">
        {sneakers.results ? (
          sneakers.results.map((item) => (
            <span key={item.id} className="marquee__item">
              {item.title} &nbsp;
              <span className="price">${item.retailPrice}</span>
            </span>
          ))
        ) : (
          <span className="marquee__item">Loading Marquee!!</span>
        )}
      </div>
    </div>
  );
};

export default Marquee;
