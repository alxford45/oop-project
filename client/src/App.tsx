import React, { Component } from "react";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
        </Router>
      </div>
    )
  }
}

export default App;
