import React from 'react';

import '../assets/styles/components/Spinner.scss';

const Loader = () => (
  <div className='lds-ring'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Loader;
