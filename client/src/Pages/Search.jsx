import React, { useEffect, useState } from 'react';
import Logo from '../img/logos/another-1.png';
import Data2 from './data2.json';
import ShoeCard from '../Components/ShoeCard';
import { getAllSneakers } from '../lib/api';

const Search = () => {
  const [sneakers, setSneakers] = useState([]);

  // Get all data from Mongo
  useEffect(() => {
    getAllSneakers().then((res) => {
      setSneakers(res);
    });
  }, []);

  // Dynamic Search
  const [searchTerm, setSearchTerm] = useState('');
  const results = !searchTerm
    ? sneakers
    : sneakers.filter(
        (sneaker) =>
          sneaker.title.toLowerCase().includes(searchTerm) || sneaker.title.includes(searchTerm)
      );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="search">
        <img className="search__logo mb-3" src={Logo} alt="logo" />
        <input
          className="search__input mb-2"
          type="text"
          name="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
      <h3 className="heading__impact mb-3 clamp-1">Recent listings</h3>
      <div className="shoe mb-4">
        {results.map((sneaker) => (
          <ShoeCard key={sneaker._id} sneaker={sneaker} />
        ))}
      </div>
      <div className="heading__impact mb-3 clamp-1">Featured Products</div>
      <div className="shoe">
        {Data2.shoes.map((sneaker) => (
          <ShoeCard sneaker={sneaker}  key={sneaker._id}  />
        ))}
      </div>
    </>
  );
};

export default Search;
