import React, { Component } from "react";

class PokemonSearchWithClass extends Component {
  state = {
    imageUrl: ""
  };

  async componentDidMount() {
    try {
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.props.pokedexNumber}/`
      );
      let data = await response.json();
      this.setState({ imageUrl: data.sprites.front_default });
    } catch {
      console.log("Something went horribly wrong");
    }
  }

  async componentDidUpdate() {
    try {
      let response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.props.pokedexNumber}/`
      );
      let data = await response.json();
      this.setState({ imageUrl: data.sprites.front_default });
    } catch {
      console.log("Something went horribly wrong");
    }
  }

  render = () => (
    <div>
      <h3>Using class component: </h3>
      <h3>Pokemon Icon: </h3>
      <img alt="pokemon icon" src={this.state.imageUrl} />
    </div>
  );
}

export default PokemonSearchWithClass;
