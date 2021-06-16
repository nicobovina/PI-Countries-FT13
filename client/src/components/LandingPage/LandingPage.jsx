import React from 'react';

// import './LandingPage.css';

import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div>
      <h1>Soy la Landing</h1>
      <Link to={'/Home'}>HOME</Link>
    </div>
  )
};

export default LandingPage;