import React from 'react';
import Button from 'react-bootstrap/Button';
import './Person.css';


class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: 0,
      helpMe: false
    };
  }

  handleGreeting = () => {
    // increment the number of greetings by one
    this.setState({
      greetings: this.state.greetings + 1
    });
    
  };

  needsHelp = () => {
    this.setState({
      helpMe: true
    });
  };

  wasHelped = () => {
    this.setState({
      helpMe: false
    });
  };

  render() {
    console.log(this.props);
    return (
      <article>
        <h3>{this.props.name}</h3>
        <p>👋 {this.state.greetings} greetings</p>
        <p onClick={this.handleGreeting}>Say Hello!</p>
        <img
          src={this.props.imageURL}
          alt={this.props.name}
        />
        {/* WTF */}
        <div>{this.state.helpMe ? 'I need help' : ''}</div>
        <Button onClick={this.needsHelp}>I need help</Button>
        <Button onClick={this.wasHelped} variant="success">I got help</Button>
      </article>
    )
  }
}

export default Person;
