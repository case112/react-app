import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      {id: '0', name: 'Max', age: 28},
      {id: '1', name: 'Michael', age: 24},
      {id: '2', name: 'Jess', age: 18},
    ],
    showPersons: false
  }

  nameChangedHandler = (event) => {
    //console.log('Clicked')
    this.setState( {
      persons: [
        {name: 'Max', age: 6000},
        {name: event.target.value, age: 24},
        {name: 'G.I.JOSE', age: 0},
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

//bind is better option to use
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
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
              />
          })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
