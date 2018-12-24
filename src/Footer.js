import React, {Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.joke !== prevProps.joke) {
       this.setState({
           joke:this.props.joke
       })
    }
  }

  render() {
    return (
        <h3>"{this.state.joke}"</h3>
    )
  }
}

export default Footer;
