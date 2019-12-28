import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
const app = props => {
  const [ personState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Michael', age: 24},
      {name: 'Jess', age: 18},
    ],
    otherState: 'some other value'
});

  const [ otherState, setOtherState ] = useState('some other value');

  console.log(personState, otherState)

  const switchNameHandler = () => {
    //console.log('Clicked')
    setPersonsState( {
      persons: [
        {name: 'Maximus', age: 6000},
        {name: 'Michael', age: 24},
        {name: 'G.I.JOSE', age: 0},
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age} />
      <Person
        name={personState.persons[1].name} 
        age={personState.persons[1].age}>Hobbies: Racing</Person>
      <Person
        name={personState.persons[2].name} 
        age={personState.persons[2].age} />
    </div>
  );
}

export default app;

