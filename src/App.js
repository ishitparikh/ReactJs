import React, { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ishit",
      user: {
        firstName: "Harper",
        lastName: "Perez"
      }
    };
    this.name = "Ishit";
  }

  formatName(user) {
    if (user) {
      return " " + user.firstName + " " + user.lastName;
    }
    return "Stranger";
  }

  render() {
    return (
      <div className="App">
        <h1>Hello {this.name}</h1>
        <h1>Message from {this.formatName(this.state.user)}</h1>
      </div>
    );
  }
}
