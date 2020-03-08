import React from 'react';
import Radium from 'radium';
import { ListGroup } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import Person from '../Person/Person';


const group = (props) => {

    console.log(props.groupName)
    // console.log(person.name)


    return (
        <Card>
            <Card.Header>Group {props.groupName}</Card.Header>
            <ListGroup variant="flush">
                {this.state.persons.map((person, index) => {
                    // console.log(person.group)
                    
                       
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            group={person.group}
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                



                })}
            </ListGroup>
        </Card>

    )
};

export default Radium(group);







