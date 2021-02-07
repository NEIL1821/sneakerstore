import React from 'react';
import { BiEnvelope, BiPurchaseTagAlt } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { NavLink, Route, Switch } from 'react-router-dom';
import Messages from '../../Components/Messages';
import Sales from '../../Components/Sales';
import Settings from '../../Components/Settings';

const ProfileBottom = () => {
  return (
    <section className="profile__bottom">
      <div className="flex-center-1 pb-2 clamp-5 mb-2">
        <NavLink
          to="/profile/sales"
          className="profile__navlink icon"
          activeClassName="profile__navlink profile__navlink--active icon"
        >
          Sales&nbsp;
          <BiPurchaseTagAlt />
        </NavLink>
        <NavLink
          to="/profile/messages"
          className="profile__navlink icon"
          activeClassName="profile__navlink profile__navlink--active icon"
        >
          Messages&nbsp;
          <BiEnvelope />
        </NavLink>
        <NavLink
          exact
          to="/profile"
          className="profile__navlink icon"
          activeClassName="profile__navlink profile__navlink--active icon"
        >
          Settings&nbsp;
          <FiSettings />
        </NavLink>
      </div>
      <Switch>
        <Route path="/profile/sales">
          <Sales />
        </Route>
        <Route path="/profile/messages">
          <Messages />
        </Route>
        <Route path="/profile">
          <Settings />
        </Route>
      </Switch>
    </section>
  );
};

export default ProfileBottom;
