import React from 'react';

import '../assets/styles/pages/Error.scss';
import error from '../assets/statics/error.svg';

const Error = ({ origin, message }) => (
  <main className='Error'>
    <figure className='Error__image'></figure>
    <h1 className='Error__title'>Error</h1>
    <div className='Error__info'>
      <p className='Error__origin'>
        Origin: <strong>{origin}</strong>
      </p>
      <p className='Error__message'>
        Message: <span>{message}</span>
      </p>
    </div>
  </main>
);

export default Error;
