import React from "react";
import ball from '../../assets/ball.png'

const Card = ({ weight, height, imageUrl, name }) => (
  <div>
    <div className='pics'>
      <img className='ball' alt='ball' src={ball} />

      <img className='poke' alt="pokemon icon" src={imageUrl} />
    </div>
    <div className='info'>
      <h1 id='name'>{name}</h1>
      <h3>Weight: {weight} / Height: {height}</h3>
    </div>
  </div>
)


export default Card;


