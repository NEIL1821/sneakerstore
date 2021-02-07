import React, {useState, useEffect} from 'react';
import { useAuth } from '../../context/AuthContext';
import { getUserById } from '../../lib/api';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ProfileTop = () => {
  const [userData, setData] = useState({});
  // const [ ratings, setRatings] = useState(null);

  const star = () => <AiFillStar className="gold" />;
  const rating = (num) => [...Array(num)].map(star);

  const { auth } = useAuth();
  
  useEffect(() => {
    async function fetchData() {
      const userDataResponse =  await getUserById(auth.userId)
      setData(userDataResponse);
    }
    fetchData();
  }, [auth.userId]);

 

  return (
    <section className="profile__top">
      <div className="space-between">
        <h2 className="heading__impact-2 mb-2">Profile Page</h2>
        <button className="profile__logout" onClick={() => console.log('PENIS!')}>
          Log Out
        </button>
      </div>
      <div className="flex-col-1">
        <h3 className="profile__name">
          Account:&nbsp;
          <Link to="/profile">
            {userData.email}
          </Link>
        </h3>
        <h3 className="profile__rating">
          Rating: {rating(4)}
        </h3>
        <h3 className="profile__sales">
          Total Sales: <span>{userData.totalSales}</span>
        </h3>
        <h3 className="profile__active">Member Since: 12/23/2020</h3>
      </div>
    </section>
  );
};

export default ProfileTop;
