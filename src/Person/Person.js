import React from 'react';
import './Person.css';
import Radium from 'radium';

import { ListGroup } from 'react-bootstrap';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 450px)': {
    //         width: '500px'

    //     }
    // };

    return (

        <ListGroup.Item>
            <div className="Person">
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>Belonging to group {props.group}</p>
                
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />


            </div>
        </ListGroup.Item>
    )
};

export default Radium(person);