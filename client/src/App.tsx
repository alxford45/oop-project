import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import View from "./pages/View";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/View" component={View} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Edit" component={Edit} />
            <Route path="/Login" component={Login} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
