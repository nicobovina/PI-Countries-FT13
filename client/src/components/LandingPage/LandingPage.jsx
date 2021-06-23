import React from 'react';
import { Link } from 'react-router-dom';


import landingStyle from './LandingPage.module.css';


export function LandingPage(props) {
  return (
    <div className={landingStyle.main}>
      <h1 className={landingStyle.mainTitle}>TRAVEL APP</h1>
      <Link className={landingStyle.join} to={'/Home'} >INGRESAR</Link>
    </div>
  )
};


export default LandingPage;