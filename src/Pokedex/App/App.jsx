import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card'
import { RandomButton, SingleButton } from '../Button/Button';
import MoveList from '../MoveList/MoveList';




class App extends Component {
    constructor() {
        super();
        this.state = {
            pokeDexNumber: 1,
            imageUrl: "",
            name: '',
            weight: '',
            height: '',
            moves: [],
            displayMoves: false,
            searchInput: '',
            list: []

        };
        // this.handleRandomButton = this.handleRandomButton.bind(this)
    }


    //new try catch fetching when component
    async componentDidMount() {
        try {
            let response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${this.state.pokeDexNumber}/`
            );
            let data = await response.json();
            this.setState({
                imageUrl: data.sprites.front_shiny
            });
        } catch {
            console.warn("Something went horribly wrong");
        }
        fetch('https://pokeapi.co/api/v2/pokemon?limit=1050')
            .then(response => response.json())
            // .then(names => console.log(names.results))
            .then(names => this.setState({ list: names.results }))

    }
    //old fetching when component updates
    componentDidUpdate() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokeDexNumber}/`)
            .then(response => response.json())
            // .then(data => console.log(data.name))
            .then(data => this.setState({
                imageUrl: data.sprites.front_shiny, name: data.name, moves: data.moves, weight: data.weight, height: data.height
            }))
    }


    handleRandomButton = () => { this.setState({ pokeDexNumber: Math.floor(Math.random() * 1050) + 1 }) };
    handleSingleButton = () => { this.setState({ pokeDexNumber: this.state.pokeDexNumber + 1 }) };
    handleMoveToggle = () => { this.setState({ displayMoves: !this.state.displayMoves }) };


    render() {

        const { weight, height, imageUrl, name, pokeDexNumber, moves, displayMoves } = this.state
        return (
            <div className="App" >
                <h1 className='header'>Shiny PokeDex</h1>
                <h1 className='header'>#{pokeDexNumber}</h1>
                <Card weight={weight} height={height} imageUrl={imageUrl} name={name} />
                <RandomButton handleRandom={this.handleRandomButton} />
                <SingleButton handleSingle={this.handleSingleButton} />
                <MoveList handleMoveToggle={this.handleMoveToggle} moves={moves} displayMoves={displayMoves} />
            </div>
        )
    }
}


export default App;
