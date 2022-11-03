import React from 'react';

import { urlFor } from '../../client';
import './Details.scss';

const Details = ({ piece }) => {
  console.log(piece.name)
  return (
    <div className='app__details-wrapper'>
      <h2 className='head-text'>{piece.name}</h2>
      <div className='app__piece-details'>
        <img className='details__main-img' src={urlFor(piece.images[0])} alt={piece.name} />
        <div className='details__info'>
          {piece.disponible ? <p className='details__item'>Prix: {piece.price}</p> : <p>Non disponible</p>}
          <p className='details__item'>Mesures: {piece.mesures}</p>
          <p className='details__item'>Support: {piece.type}</p>
          <p className='details__item'>{piece.description}</p>
          <a href='https://www.etsy.com/ca-fr/shop/IsabelValdesArt' target="_blank" rel="noopener noreferrer">Voir dans Boutique</a>
        </div>
      </div>
      <div className='app__piece-other'>
        {piece.images.map((image, index) => (
          <img className='details__other-img' src={urlFor(image)} alt={piece.name} />
        ))}
      </div>
    </div>

  )
}

export default Details