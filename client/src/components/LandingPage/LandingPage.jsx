import React from 'react';
import { Link } from 'react-router-dom';


// import './LandingPage.css';


export function LandingPage(props) {
  return (
    <div>
      <h1>Soy la Landing</h1>
      <Link to={'/Home'} >HOME</Link>
    </div>
  )
};


export default LandingPage;