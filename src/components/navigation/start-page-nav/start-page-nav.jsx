import React from 'react';
import { Link } from 'react-router-dom';

const StartPageNav = ({ handleForm }) => {
  return (
    <ul className="app-header__nav">
      <li className="app-header__nav-item" onClick={handleForm}>
        <Link className="app-header__nav-item-link" to='/'>Sign Up</Link>
      </li> 
      <li className="app-header__nav-item">
        <Link className="app-header__nav-item-link" to='/login'>Sign In</Link>
      </li> 
    </ul>
  )
}

export default StartPageNav;