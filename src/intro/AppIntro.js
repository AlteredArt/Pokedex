import React, {Component} from 'react';
import './App.css';
// import PokemonFetchingComponenet from './ClassFetchingComponent';
import PokemonFetchingComponenet from './FunctionFetchingComponent';
class App extends Component {
    state={
        pokedexNumber: 151
    };

    render(){
        return(
           <div className="App">
            <h1>Pokedex Number #{this.state.pokedexNumber}</h1>
            <button
                type="button"
                onClick={() => 
                this.setState({
                    pokedexNumber: Math.floor(Math.random() * 151) + 1
                })
            }
            >
                RandomPokemon Number
            </button>
           <PokemonFetchingComponenet pokedexNumber={this.state.pokedexNumber} />
           </div>
        )
    }
}


export default App;
