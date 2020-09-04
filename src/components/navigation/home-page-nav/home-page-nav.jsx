import React from 'react';
import { Link } from 'react-router-dom';

const HomePageNav = () => {
  return (
    <ul className="app-header__nav">
      <li className="app-header__nav-item">
        <Link className="app-header__nav-item-link" to='/'>Home</Link>
      </li> 
    </ul>
  )
}

export default HomePageNav;