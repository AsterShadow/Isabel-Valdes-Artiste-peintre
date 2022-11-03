import React from 'react';

import './Footer.scss';
import Logo from '../../assets/logoWhite.svg';

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className='footer-items'>
        <img src={Logo} alt='logo'/>
        <div className='socials-section'>
          <a className='socials-item' href='https://www.facebook.com/profile.php?id=100064535749047' target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className='socials-item' href='https://www.instagram.com/isabelvaldesart/' target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className='socials-item' href='https://www.etsy.com/ca-fr/shop/IsabelValdesArt' target="_blank" rel="noopener noreferrer">Boutique</a>
        </div>

      </div>
      <p>©2022 Isabel Valdes Artiste Peintre</p>
      <p>Made with ❤️ by Xzandro</p>
    </div>
  )
}

export default Footer