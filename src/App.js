import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personState, setPersonsState] = useState({  //useState回傳兩個elements
    persons: [
      { name: "MAX", age: 28 },
      { name: "Willy", age: 24 },
      { name: "Will", age: 26 }

    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonsState({

      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 25 },
        { name: 'Jason', age: 24 }
      ]
    });
  };



  return (
    <div className="App">
      <h1>hi, I'm a react app</h1>
      <p>this is really working</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}>
      </Person>
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}>
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}>
      </Person>
    </div>
  );
};


export default App;
