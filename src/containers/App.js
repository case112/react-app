import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

import './components/Persons/Person/Person.css';

class App extends Component {
  state = {
    persons: [
      {id: '0', name: 'Max', age: 28},
      {id: '1', name: 'Michael', age: 24},
      {id: '2', name: 'Jess', age: 18},
    ],
    showPersons: false
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

    this.setState({persons: persons})

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

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
          </div>
      );

      btnClass = classes.Red;
    }


    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }


    return (
      <div className={classes.App}>
  
        {persons}
      </div>
    );
  }
}

export default App;
