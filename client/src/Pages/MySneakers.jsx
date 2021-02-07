import React, { useEffect, useState } from 'react';
import { getUserById } from '../lib/api';
import { useAuth } from '../context/AuthContext';
import data from './data.json';
import ShoeCard from '../Components/ShoeCard';
import { AiFillStar } from 'react-icons/ai';

const MySneakers = () => {
  const [userData, setData] = useState({});
  const { auth } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const userDataResponse = await getUserById(auth.userId);
      setData(userDataResponse);
    }
    fetchData();
  }, [auth.userId]);

  console.log(userData)
  //we can show listed sneakers here // maybe sold and purchased too

  const star = () => <AiFillStar className="gold star" />;
  const rating = (num) => [...Array(num)].map(star);

  return (
    <div className="my-sneakers">
      <h1 className="heading__impact mb-3">Current Listings:</h1>
      <div className="shoe mb-4">
        {userData.sellingSneakers ? userData.sellingSneakers.map((shoe) => (
          <ShoeCard sneaker={shoe} />
        )): <div>No Listings </div>}
      </div>
      <h2 className="heading__impact mb-3">Saved Sneakers:</h2>
      <div className="shoe mb-4">
        {data.shoes.map((shoe) => (
          <ShoeCard shoe={shoe} />
        ))}
      </div>
      <h2 className="heading__impact mb-3">Customer Reviews:</h2>
      <div className="reviews-wrapper">
        <div className="customer-review">
          <div className="customer-review__rating">{rating(4)}</div>
          <p className="customer-review__product">
            Nike Air Max - Cherry Red Limited Edition (2021)
          </p>
          <p className="customer-review__author">John D - Jul. 23rd, 2021</p>
          <p className="customer-review__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt distinctio consequatur
            libero aliquam iure impedit repellat eos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MySneakers;
