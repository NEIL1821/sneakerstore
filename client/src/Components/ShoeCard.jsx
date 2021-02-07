import React from 'react';
import moment from 'moment';
import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { savingSneakers } from '../lib/api';

const ShoeCard = ({ userId, sneaker }) => {
  // Render star icons based on rating
  // const star = () => <AiFillStar className="gold" />;
  // const rating = (num) => [...Array(num)].map(star);

  if (!sneaker) {
    return <div>Loading</div>;
  }

  const handleLike = () => {
    savingSneakers(userId, sneaker);
  };

  return (
    <div className="shoe__content">
      <img className="shoe__img mb-2" src={sneaker.media.thumbUrl} alt="shoe" />
      <div className="bg-grey">
        <p className="shoe__title mb-1">
          {sneaker.title} <br /> ({sneaker.releaseDate})
        </p>
        <p className="shoe__price">
          Price: &nbsp;<span>${sneaker.retailPrice}</span>
        </p>
        <p className="shoe__sellar">
          Seller: {sneaker.sellerName}&nbsp;
        </p>
        {/* <p className="shoe__views mb-1">Views: {sneaker.viewedBy.length || '0'}</p> */}
        <p className="shoe__date">Date Listed: {moment(sneaker.updatedAt).format('MM/DD/YYYY')}</p>
        <div className="space-between clamp-1">
          <Link to={`/product/${sneaker.id}`}>
            <button className="shoe__btn">View</button>
          </Link>
          <FaRegHeart className="shoe__icon" onClick={handleLike} />
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
