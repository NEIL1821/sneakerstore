import React, { useState } from 'react';
import Modal from 'react-modal';
import { useAuth } from '../../context/AuthContext';
import SignUpForm from '../SignUpForm';
import SignInForm from '../SignInForm';
Modal.setAppElement('#root');

const SignInModal = ({ toggleModal, modalIsOpen }) => {
  const [signUpForm, setSignUpForm] = useState(false);

  const { auth } = useAuth();
  console.log('Got here ' + JSON.stringify(auth));

  // State will be
  // import SignUp , add on Click inside of SignIn , changing a state
  // Set singupUpOpen ? signIN : signUp

  return (
    <Modal className="modal" isOpen={modalIsOpen} onRequestClose={toggleModal}>
      {signUpForm ? (
        <SignUpForm closeSignUp={(value) => setSignUpForm(value)} />
      ) : (
        <SignInForm setSignUpForm={setSignUpForm} />
      )}
      <div className="modal__right">
        <h3 className="right__heading">Welcome Back</h3>
        <p className="right__text">Signed up users gain access to the following:</p>
        <ul className="right__list">
          <li>Ability to contact sellers directly</li>
          <li>Purchase sneakers with secure payment encryption</li>
          <li>Lifetime 24/7 customer support</li>
        </ul>
      </div>
    </Modal>
  );
};

export default SignInModal;
