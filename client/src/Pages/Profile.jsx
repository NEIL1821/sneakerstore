import React from 'react';
import ProfileLeft from './Profile/ProfileLeft';
import ProfileTop from './Profile/ProfileTop';
import ProfileBottom from './Profile/ProfileBottom';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <ProfileTop />
      <ProfileBottom />
    </div>
  );
};

export default Profile;
