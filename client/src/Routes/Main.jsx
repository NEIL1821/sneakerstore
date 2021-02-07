import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Marquee from '../Components/Marquee';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Search from '../Pages/Search';
import Sell from '../Pages/Sell';
import MySneakers from '../Pages/MySneakers';
import Navbar from '../Components/Navbar';
import SneakerPage from '../Pages/SneakerPage';
import NavbarMin from '../Components/NavbarMin';
import Footer from '../Components/Footer';
import SignIn from '../Pages/SignIn';
import { AuthProvider } from '../context/AuthContext';

const Main = () => {
  return (
    <AuthProvider>
      <Router>
        <Marquee />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signup">
            <SignIn />
          </Route>
          <Route exact path="/">
            <NavbarMin />
            <Search />
            <Footer />
          </Route>
          <Route path="/profile">
            <Navbar />
            <Profile />
            <Footer />
          </Route>
          <Route path="/mysneakers">
            <Navbar />
            <MySneakers />
            <Footer />
          </Route>
          <Route path="/sell">
            <Navbar />
            <Sell />
            <Footer />
          </Route>
          <Route path="/product/:id">
            <Navbar />
            <SneakerPage />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default Main;
