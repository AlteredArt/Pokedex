import React, {useState, useEffect} from 'react';
import './App.css';

const PokemonList = (props) => {
  const handleClick = (pokemon) => {
    props.setSelectedPokemon(pokemon)
  }
  return (
    <React.Fragment>
      <h3>All Pokemon</h3>
        <ul>
         {props.pokemons.map((pokemon) => (
           <li className="li"><a onClick={() => {handleClick(pokemon)}}>{pokemon.name}</a></li>))}
      </ul>
    </React.Fragment>
  );
};


const PokemonDetail = ({pokemon}) => {
  if(!pokemon) {
    return null;
  }
  return <h3>{pokemon.name}</h3>;
  
}

export default function App() {
  const [pokemons, setPokemons] = useState([{name: "Bulbasaur"}]);
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then((data) => setPokemons(data.results));
  }, []);

  return (
   <div className="App">
   <h1>Pokedex</h1>
    <PokemonList pokemons={pokemons} setSelectedPokemon={setSelectedPokemon}/>
    <PokemonDetail pokemon={selectedPokemon} />
   </div>
  )
}


