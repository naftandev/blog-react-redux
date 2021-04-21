import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/pages/Home.scss';

const Home = () => (
  <main className='Home'>
    <div className='Home__details'>
      <h1>React & Redux</h1>
      <h2>Blog</h2>
    </div>
    <Link to='/users' className='btn' type='button'>
      Users list
    </Link>
  </main>
);

export default Home;
