import React from 'react';

import useGetDate from '../hooks/useGetDate';

import '../assets/styles/components/Footer.scss';

const Footer = () => {
  const { year } = useGetDate();

  return (
    <footer className='Footer'>
      <p>
        Developed by <strong>Naftan</strong> | &copy; {year}
      </p>
    </footer>
  );
};

export default Footer;
