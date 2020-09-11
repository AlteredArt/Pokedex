import React, { useState, useEffect } from "react";

const PokemonSearchWithFunction = props => {
  const [imageUrl, setImgUrl] = useState("");

  const fetchData = async () => {
    try {
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${props.pokedexNumber}/`
      );
      let data = await response.json();
      setImgUrl(data.sprites.front_default);
    } catch {
      console.log("Something went horribly wrong");
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <h3>Using Functional component: </h3>
      <h3>Pokemon Icon: </h3>
      <img alt="pokemon icon" src={imageUrl} />
    </div>
  );
};

export default PokemonSearchWithFunction;
