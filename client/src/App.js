import React from 'react';
import './App.css';

import { Route } from "react-router";

import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Activities from './components/Activities/Activities';
import NavBar from './components/NavBar/NavBar'


export function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={NavBar} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/country/:id' component={CountryDetails} />
      <Route exact path='/activities' component={Activities} />
    </div>
  );
}

export default App;
