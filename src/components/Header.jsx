import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.scss';
import logo from '../assets/statics/logo.png';

const Header = () => (
  <header className='Header'>
    <Link to='/' className='Header__logo'>
      <figure>
        <img src={logo} alt='Blog logo' />
      </figure>
      <span>Blog</span>
    </Link>
    <nav className='Header__navbar'>
      <ul>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
