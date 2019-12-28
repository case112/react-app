import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Michael', age: 24},
      {name: 'Jess', age: 18},
    ]
  }

  switchNameHandler = () => {
    //console.log('Clicked')
    this.setState( {
      persons: [
        {name: 'Maximus', age: 6000},
        {name: 'Michael', age: 24},
        {name: 'G.I.JOSE', age: 0},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
