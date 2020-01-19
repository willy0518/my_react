import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "MAX", age: 28 },
      { name: "Willy", age: 24 },
      { name: "Will", age: 26 }

    ]
    
  }
switchNameHandler = () => {
  console.log('Button was clicked!!')
}

  render() {
    return (
      <div className="App">
        <h1>hi, I'm a react app</h1>
        <p>this is really working</p>
        <button onClick={this.switchNameHandler()}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
