import React from 'react';
import './Characters.scss'; // Assuming Characters.scss exists

const CharacterCard = ({ frame, imageUrl, onClick }) => {
  // console.log(imageUrl); // For debugging purposes, if needed

  return (
    <>
      <div className="characterCard" onClick={onClick} style={{ filter: 'grayscale(0)' }}>
        {imageUrl ? (
          <img className="imageclass" src={imageUrl} alt="Character" style={{ objectFit: 'cover' }} />
        ) : (
          <button className="caption">+</button>
        )}
        <button className="caption bottom">+</button>
      </div>
    </>
  );
};

export default CharacterCard;
