import React from 'react';

import Piece from './Piece/Piece';
import './Gallery.scss';


const Gallery = ({pieces}) => {


  return (
    <>
      <div className='app__gallery-wrapper'>
        <h2 className='head-text gallery-title'>Mes créations</h2>
        <div className='app__gallery'>
          {pieces.map((piece, index)=>(
            <>
              {<Piece key={index} piece={piece}/>}
            </>
          ))}
        </div>
      </div>
    </>
    
  )
}

export default Gallery
