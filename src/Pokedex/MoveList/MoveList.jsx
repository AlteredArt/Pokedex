import React from 'react';

export default class MoveList extends React.Component {

    render() {
        let showMoves = this.props.displayMoves ? (
            <div>
                <button onClick={this.props.handleMoveToggle}>Hide Moves</button>
                <h3 style={{ textDecoration: 'underline' }}>Move List:</h3>
                {
                    this.props.moves.map(move => (
                        <li key={move.move.name}>{move.move.name}</li>
                    ))
                }
                <button onClick={this.props.handleMoveToggle}>Hide Moves</button>
            </div>
        ) : (
                <div>
                    <button onClick={this.props.handleMoveToggle}>Show Moves</button>
                </div>
            );


        return (
            <div>
                {showMoves}
            </div>
        )
    }
}