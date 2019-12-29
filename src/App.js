import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Michael', age: 24},
      {name: 'Jess', age: 18},
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Clicked')
    this.setState( {
      persons: [
        {name: newName, age: 6000},
        {name: 'Michael', age: 24},
        {name: 'G.I.JOSE', age: 0},
      ]
    })
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
//bind is better option to use
  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler('Maximus!!')}>Switch Name</button>
        <Person
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age} />
        <Person
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Max!')}
         changed={this.nameChangedHandler} >Hobbies: Racing</Person>
        <Person
         name={this.state.persons[2].name} 
         age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
