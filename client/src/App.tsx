import React, { Component } from "react";
import Dashboard from "./pages/Dashboard";
import CreateGrid from "./components/CreateGrid";
import MediaCard from "./components/MediaCard";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import View from "./pages/View";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Dashboard />
        </div>
      </Router>
    );
  }
}

export default App;
