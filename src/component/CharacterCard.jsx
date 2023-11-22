import React from 'react';
import './Characters.scss'
const CharacterCard = ({ frame, imageUrl, onClick }) => (
    
    <>

    <div className="characterCard" onClick={onClick} style={{ background: `url(${imageUrl}) no-repeat center`, backgroundSize: 'cover', filter: 'grayscale(0)' }}>
    {!imageUrl && <button className='caption'>+</button>}
    <button className="caption bottom">+</button>
  </div>
    </>
);

export default CharacterCard;
