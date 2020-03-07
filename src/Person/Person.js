import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.switchPersonsInfo}>I'm a {props.name} and {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.nameChangedHandler} defaultValue={props.name}/>
        </div>
    )
}

export default person;