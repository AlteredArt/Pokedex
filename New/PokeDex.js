import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            height: '',
            weight: ''

        }
        // this.fetchPokemonData = this.fetchPokemonData.bind(this)
    }

    componentDidMount() {
        let list = this;
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json())
            .then(function (allpokemon) {
                allpokemon.results.forEach((pokemon) => {
                    let url = pokemon.url
                    fetch(url)
                        .then(response => response.json())
                        // .then(data => console.log(data))
                        .then(data => list.setState({ list: data }));
                })
            })


    }



    render() {
        let { list } = this.state

        // const dataInfected = Object.keys(list).map((list, i) => (
        //     <li key={i}>key: {i} Name: {list.name}</li>
        // ));
        // console.log(dataInfected)

        return (
            <div>
                {Object.entries(list).map(([key, list], i) => (
                    <li key={i}>[list]</li>
                ))}
            </div>
        )
    }
}


export default App;