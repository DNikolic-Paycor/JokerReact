import React, {Component} from 'react';
import Footer from './Footer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: "",
      isLoaded:false
    };
  }

  nextJoke = () => {
    fetch('https://geek-jokes.sameerkumar.website/api').then((result) => {
      return result.json();
    }).then((data) => {
      
      this.setState({
        joke: data,
        isLoaded:true
      });
    
    })
  }

  componentDidMount() {
    this.nextJoke();
  }

  render() {
    return (
    <div className="App">
      <div className="App-header align-center">
        <h1>How about a Joke?</h1>
        <p className="red-text">..dont forget to smile..</p>
      </div>
      <div className="App-joke align-center">
        {this.state.isLoaded ? <h3>"{this.state.joke}"</h3> :
          <h3>Loading ...</h3>
       }
        {/* <h3 className="align-center">{this.state.answer}</h3> */}
        <button onClick={()=> this.nextJoke()}>More jokes..</button>
        <Footer joke={this.state.joke}/>
      </div>
    </div>);
  }
}

export default App;
