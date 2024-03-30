import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={require('./img/DH.png').default} alt='DH-logo' />
    </footer>
  );
};

export default Footer;