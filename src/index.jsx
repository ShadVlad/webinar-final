import React, { Component } from "react";
import ReactDom from "react-dom";

export class App extends Component {
  render() {
    return <div>Hello from react!</div>;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
