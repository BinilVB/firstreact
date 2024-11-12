import React, { Component } from "react";

export default class Form extends Component {
  state = {
    firstName: "",
    secondName: "",
  };
  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  display = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h2>form </h2>
        <input
          type="text"
          name="firstName"
          value={this.state.inputValue}
          onChange={this.change}
        />
        <input
          type="text"
          name="secondName"
          value={this.state.inputValue}
          onChange={this.change}
        />
        <button type="button" onClick={this.display}>
          submit
        </button>
      </div>
    );
  }
}
