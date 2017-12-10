import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: "",
      answer: ""
    };
  }

  nextJoke() {
    fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke').then((result) => {
      return result.json();

    }).then((data1) => {
      this.setState({joke: data1.setup, answer: data1.punchline});
    })
  }

  componentWillMount() {
    this.nextJoke();
  }

  render() {
    return (<div className="App">
      <div className="App-header align-center">
        <h1>How about a Joke?</h1>
        <p className="red-text">..dont forget to smile..</p>
      </div>
      <div className="App-joke align-center">
        <h3>"{this.state.joke}"</h3>
        <h3 className="align-center">{this.state.answer}</h3>
        <button onClick={() => this.nextJoke()}>More jokes..</button>
      </div>

    </div>);
  }
}

export default App;
