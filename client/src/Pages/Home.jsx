import React, { useState } from 'react';
import RegisterModal from '../Components/Modals/RegisterModal';
import Logo from '../img/logos/BLACK.gif';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  const { auth } = useAuth();

  return (
    <>
      <div className="home">
        <img className="home__logo" src={Logo} alt="Logo" />
        <button className="button" onClick={toggleModal}>
          {auth ? 'Enter' : 'Sign In'}
        </button>
      </div>
      <h3 className="home__quote">
        Would you believe in what you believe in if you were the only one who believed it?
        <br /> - Kanye West
      </h3>
      <RegisterModal modalIsOpen={modalIsOpen} toggleModal={toggleModal} />
    </>
  );
};

export default Home;
