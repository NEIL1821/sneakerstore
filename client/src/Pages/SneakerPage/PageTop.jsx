import React, { useEffect, useState } from 'react';
import { FaPlus, FaShareAlt } from 'react-icons/fa';
import ReactImageMagnify from 'react-image-magnify';
import { getSneakerById } from '../../lib/api';

const PageTop = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    getSneakerById(id).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [id]);

  if (!data) {
    return <h1>Loading!</h1>;
  } else
    return (
      <>
        <div className="flex-right">
          <button className="product__btn">
            <FaShareAlt />
            &nbsp;Share
          </button>
          <button className="product__btn">
            <FaPlus />
            &nbsp; Portfolio
          </button>
          <button className="product__btn">
            <FaPlus />
            &nbsp; Follow
          </button>
        </div>
        <h2 className="heading__impact heading__impact--black mb-1">{data.title}</h2>
        <ul className="product__subheading mb-3">
          <li>
            Condition:&nbsp;
            <span className={data.condition >= 7 ? 'green' : 'yellow'}>{data.condition}/10</span>
          </li>
          <li>Ticker: NK-NIAM9ONBN</li>
          <li>100% Authentic</li>
        </ul>

        {/* Size / Sale / Buttons */}
        <div className="product__subheading product__subheading--2 mb-2">
          <div className="divroduct__size">Size: 12</div>
          <div className="product__retail">Last Sale: $274</div>
          <div>
            <div className="product-button">
              <div className="flex-col-2">
                <span className="product-button__price">$194</span>
                <span className="product-button__ask">Lowest Ask</span>
              </div>
              <div className="divider"></div>
              <div className="flex-col-2">
                <span className="product-button__price">Buy</span>
                <div className="product-button__ask">or Bid</div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-button product-button--red">
              <div className="flex-col-2">
                <span className="product-button__price">$254</span>
                <span style={{ color: ' #ffcfcf' }} className="product-button__ask">
                  Highest Bid
                </span>
              </div>
              <div className="divider"></div>
              <div className="flex-col-2">
                <span className="product-button__price">Sell</span>
                <div style={{ color: ' #ffcfcf' }} className="product-button__ask">
                  or Ask
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__img">
          {/* <img src={data.img} alt="shoe" /> */}
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: data.media.imageUrl,
              },
              largeImage: {
                src: data.media.imageUrl,
                width: 1800,
                height: 600,
              },
            }}
          />

          <div className="product__info">
            <p>
              Description:{' '}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat esse soluta
                distinctio inventore ducimus obcaecati?
              </span>
            </p>
            <p>
              Style: <span>{data.styleId}</span>
            </p>
            <p>
              Colorway: <span>{data.colorway}</span>
            </p>
            <p>
              Retail Price: <span>${data.retailPrice}</span>
            </p>
            <p>
              Release Date: <span>{data.releaseDate}</span>
            </p>
          </div>
        </div>
      </>
    );
};

export default PageTop;
