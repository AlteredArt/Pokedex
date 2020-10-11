import React from 'react'

const RandomButton = (props) => (
    <button
        style={{ position: 'absolute', left: 20, top: 652 }}
        onClick={props.handleRandom}>Random</button>
)



const SingleButton = (props) => (

    <button
        style={{ position: 'absolute', right: 20, top: 652 }}
        onClick={props.handleSingle}>Single</button>
)

export { SingleButton, RandomButton };