import React from 'react';
import './Cube.css';

const Cube = (props) => {
    return (
    <div className="cubeContainer">
            <div><p>{props.first}</p></div>
            <div><p>{props.second}</p></div>
            <div><p>{props.third}</p></div>
    </div>
    )
}

export default Cube;