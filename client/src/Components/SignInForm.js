import React from 'react';
import Modal from 'react-modal';

import { FaKey, FaUser } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { login } from '../lib/api';
Modal.setAppElement('#root');

const SignInForm = ({ setSignUpForm }) => {
  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const { dispatch } = useAuth();

  const onSubmit = async (data) => {
    const response = await login(data);
    if (!response.error) {
      dispatch({
        type: 'LOGIN',
        payload: response,
      });
      history.push('/');
    } else {
      console.log(response.error);
    }
  };

  return (
    <form className="modal__form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="modal__heading">Sign In</h3>
      <div className="input-wrap">
        <FaUser className="input-wrap__icon" />
        <input
          ref={register}
          className="input-wrap__input"
          type="text"
          name="email"
          placeholder="Email"
        />
      </div>
      <div className="input-wrap">
        <FaKey className="input-wrap__icon" />
        <input
          className="input-wrap__input "
          type="password"
          ref={register}
          name="password"
          placeholder="Password"
        />
      </div>
      <button className="button button--impact" type="submit">
        Log In!
      </button>
      <div className="modal__sign-up">
        New?&nbsp;
        <span className="link" onClick={() => setSignUpForm(true)}>
          Create an Account!
        </span>
      </div>
    </form>
  );
};

export default SignInForm;
