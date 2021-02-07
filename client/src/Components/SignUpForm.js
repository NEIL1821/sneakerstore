import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { Si1Password } from 'react-icons/si';
import { signup } from '../lib/api';
import 'react-phone-input-2/lib/style.css';

const SignUpForm = ({ closeSignUp }) => {
  // Client side validation
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  // SuccessModal
  const [modalIsOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  // Send new user to DB
  const onSubmit = async (data) => {
    delete data.password_repeat;
    try {
      const response = await signup(data);
      console.log(response);
      toggleModal();
    } catch (e) {
      console.error('ERROR: ', e);
    }
  };

  return (
    <div className="modal__form">
      <h3 className="modal__heading mt-4">Create an account</h3>
      {errors.name && <p>{errors.name.message}</p>}
      <div className="input-wrap">
        <CgProfile className="input-wrap__icon" />
        <input
          className="input-wrap__input input-wrap__input--alt"
          type="text"
          name="name"
          placeholder="Full Name"
          ref={register({ required: 'You must specify a full name!' })}
        />
      </div>
      {errors.email && <p>{errors.email.message}</p>}
      <div className="input-wrap">
        <HiOutlineMail className="input-wrap__icon" />
        <input
          className="input-wrap__input input-wrap__input--alt"
          type="email"
          name="email"
          placeholder="Email"
          ref={register({
            required: 'You must specify an email!',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please enter a valid email!',
            },
          })}
        />
      </div>
      {errors.phone && <p>{errors.phone.message}</p>}
      <div className="input-wrap">
        <FiPhone className="input-wrap__icon" />
        <input
          className="input-wrap__input input-wrap__input--alt"
          type="tel"
          name="phone"
          placeholder="Phone"
          ref={register({
            required: 'You must specify a phone number!',
            minLength: {
              value: 6,
              message: 'Phone must have at least 6 digits!',
            },
          })}
        />
      </div>
      {errors.password && <p>{errors.password.message}</p>}
      <div className="input-wrap">
        <Si1Password className="input-wrap__icon" />
        <input
          className="input-wrap__input input-wrap__input--alt"
          type="password"
          name="password"
          placeholder="Password (6 chars min.)"
          ref={register({
            required: 'You must specify a password',
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          })}
        />
      </div>
      {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
      <div className="input-wrap">
        <HiOutlineKey className="input-wrap__icon" />
        <input
          className="input-wrap__input input-wrap__input--alt"
          type="password"
          name="password_repeat"
          placeholder="Confirm Password"
          ref={register({
            validate: (value) => value === password.current || 'The passwords do not match',
          })}
        />
      </div>
      <label className="checkbox">
        <input className="checkbox__input" type="checkbox" name="terms" required />I agree to
        the&nbsp;
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          terms and conditions
        </a>
      </label>
      <button onClick={handleSubmit(onSubmit)} type="submit" className="button">
        Create Account
      </button>
      <p className="link mt-3" onClick={() => closeSignUp(false)}>
        Back to Sign In Page
      </p>
    </div>
  );
};

export default SignUpForm;
