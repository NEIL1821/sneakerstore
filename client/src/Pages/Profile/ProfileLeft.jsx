import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getUserById } from '../../lib/api';
// import { set } from 'mongoose';

const ProfileLeft = () => {
  const [userData, setData] = useState({});
  // const [id, setId] = useState('');
  const { auth } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const userDataResponse = await getUserById(auth.userId);
      setData(userDataResponse);
    }
    fetchData();
  }, [auth.userId]);

  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  // example below of the info you can access
  // From mongo we need to send back the recent reviews and the image on the db for this panel
  console.log('got here ' + userData.email);

  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
    setFileUrl(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <section className="profile__left">
      <label className="label-center">
        {/* <img className="profile__img" src="https://i.stack.imgur.com/YaL3s.jpg" alt="img" /> */}
        <img  className="profile__img" src={!file ? userData.profilePicture : fileUrl} alt="img" />
        <input
          type="file"
          name="photo"
          id="photo"
          style={{ display: 'none' }}
          onChange={(e) => handleImageChange(e)}
        />
        <div className="overlay">
          <div className="overlay-text">Edit profile picture</div>
        </div>
      </label>
      <h3 className="profile__subheading mb-2">Recent Reviews</h3>
      <div className="review">
        <h3 className="review__author">Giorgia Borgmann: </h3>
        <p className="review__review">Your shoes are the best. Obrigado!! 🔥</p>
        <p className="review__sign">- Product: Nike Air Max (12/23/2020) </p>
      </div>
      <div className="review">
        <h3 className="review__author">Lev Danneman: </h3>
        <p className="review__review">
          You are a terrible seller. My item did not arrive on time. You have managed to deliver the
          worst customer service I have ever experienced. I am going to sue you.🖕🖕🖕🖕🖕🖕
        </p>
        <p className="review__sign">- Product: Yeezy Red October (12/23/2021) </p>
      </div>
    </section>
  );
};

export default ProfileLeft;
