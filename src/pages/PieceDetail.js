import React from 'react';
import { useParams } from 'react-router-dom';


import Details from '../components/Details/Details';

const PieceDetail = ({ pieces }) => {

  const { id } = useParams();

  return (
    <div>
      {pieces.map((piece, index) => (
        <>
          {piece.id === id && <Details piece={piece}/>}
        </>
      ))}

    </div>


  )
}

export default PieceDetail