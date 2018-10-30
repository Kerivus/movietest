import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greet = props => {
  /*
  {props.message}
  {props.words}
  */
  let { message, words } = props;
  return (
    <div>
      <h1>{message}</h1>
      <h2>{words}</h2>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      greeting: 'Welcome to state',
      message: '',
      movies: [
        { title: 'I am Legend' },
        { title: 'Avengers' },
        { title: 'Star Trek' }
      ]
    };
  }

  render() {
    return (
      <div classname="App">
        <Greet message="Hi from component" words="Test word" />
        <label>
          <h3>{this.state.greeting}</h3>
        </label>
        <p />
        <ul>
          {this.state.movies.map(movie => {
            return <li>{movie.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
