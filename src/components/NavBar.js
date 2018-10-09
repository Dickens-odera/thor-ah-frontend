import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

const NavBar = () => (
  <Fragment>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Authors Haven App is live
      </p>
      <Link to='/' className="App-link"> Home </Link>
      <Link to='/sample' className="App-link"> sample </Link>
      <Link to='/create-article' className="App-link"> Create Article </Link>
    </header>
  </Fragment>
)

export default NavBar;
