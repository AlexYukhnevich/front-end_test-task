import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import authApi from '../../../services/auth';

const LogoutPageNav = ({ history }) => {

  const onLogout = async () => {
    authApi.logOut();
    history.push('/login');
  }
  
  return  (
    <ul className="app-header__nav">
      <li className="app-header__nav-item" onClick={onLogout}>
        <Link className="app-header__nav-item-link" to='/login'>Logout</Link>
      </li> 
    </ul>
  )
}

export default withRouter(LogoutPageNav);