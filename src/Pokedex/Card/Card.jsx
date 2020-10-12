import React from "react";


const Card = ({ weight, height, imageUrl, name }) => (
  <div className='card'>
    <img className='poke' alt="pokemon icon" src={imageUrl} />
    <h1 id='name'>{name}</h1>
    <h3>Weight: {weight} / Height: {height}</h3>
  </div>
)


export default Card;


