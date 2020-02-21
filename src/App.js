import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';


class App extends Component {
  state = {

    inputAge: 0,
    inputName: '',

    persons: [
      { id: 'aaaaa', name: 'Max', age: 28 },
      { id: 'bbbbb', name: 'Manu', age: 29 },
      { id: 'ccccc', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  /*
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }*/

  addPersonHandler = () => {
    const persons = this.state.persons;
    const name = this.state.inputName;
    const age = this.state.inputAge;
    const id = name + age;
    persons.unshift({id, name, age});
    this.setState({persons})
  }

  nameInputHandler = (event) =>{
    // console.log(event.target.value);
    const inputName = event.target.value;
    this.setState({inputName})

  }

  ageInputHandler = (event) =>{
    // console.log(event.target.value);
    const inputAge = event.target.value;
    this.setState({inputAge})

  }

  deletePersonHandler = (personindex) => {
    //const persons = this.state.persons.slice; 轉陣列舊方法
    const persons = [...this.state.persons]; //es6 轉為陣列方法better
    persons.splice(personindex, 1); //delete index
    this.setState({ persons: persons })

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;

    });
  
  

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = (event) => {
    const doesshow = this.state.showPersons;
    this.setState({ showPersons: !doesshow })
  }

  // render執行後真正呈現在畫面上
  render() {

    const style = {

      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': { //radium套件
        backgroundColor: 'lightgreen',
        color: 'black'
      }


    };
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'green';
      //radium套件
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    }


    let classes = []; //red bold(css檔裡的class)
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red','bold']
    }


    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name
          </button>

          <p>
            Name: <input type='text' id='name' onChange={(event) => this.nameInputHandler(event)}/>
            Age: <input type='text' id='age' onChange={(event) => this.ageInputHandler(event)} />
            <button
            onClick = {this.addPersonHandler}>
            Add Name
            </button>
          </p>

          {persons}

        </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}



export default Radium(App);
