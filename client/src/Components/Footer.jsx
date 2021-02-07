import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <h4 className="footer__logo">SneakerStore &copy;</h4>
        <div className="flex-row footer__icons">
          <a href="http://twitter.com">
            <AiOutlineTwitter />
          </a>
          <a href="http://facebook.com">
            <FaFacebookF />
          </a>
          <a href="http://instagram.com">
            <TiSocialInstagram />
          </a>
          <a href="http://linkedin.com">
            <AiFillLinkedin />
          </a>
        </div>
        <div className="footer__subheading">Proudly built in Tel Aviv 🇮🇱</div>
      </div>
      <div className="footer__bottom">
        <div className="flex-row">
          <Link className="footer__link" to="/">
            Contact
          </Link>
          <Link className="footer__link" to="/">
            Services
          </Link>
          <Link className="footer__link" to="/">
            Affiliates
          </Link>
          <Link className="footer__link" to="/">
            FAQ
          </Link>
        </div>
        <div className="footer__copy">&copy;2021 SneakerStore. All Rights Reserved.</div>
        <div className="footer__closer">
          Developed by Yegor Nilov, Neil Mayers, Ryan Roberts, and Giorgia Borgmann.
        </div>
      </div>
    </div>
  );
};

export default Footer;
