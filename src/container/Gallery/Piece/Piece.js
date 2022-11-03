import React from 'react';
import {urlFor} from '../../../client';
import { Link } from 'react-router-dom';

import './Piece.scss';

const Piece = ({piece}) => {
  return (
    
    <div className='app__gallery-item'>
        <Link 
        to={`/galerie/${piece.id}`} 
        style={{textDecoration:'none'}}
        onClick={()=>{
          window.scrollTo({top:0, left:100, behaviour:'smooth'});
        }}>
            <img src={urlFor(piece.images[0])} alt={piece.name}/>
            <div className='item-info'>
                <h2 className='bold-text'>{piece.name}</h2>
                {piece.disponible?<p className='p-text p-tag'>{piece.price}</p>:<p>Non disponible</p>}
            </div>
        </Link>
    </div>
    
    
  )
}

export default Piece