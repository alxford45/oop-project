import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import View from "./pages/View";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import { List, ListItem, ListItemText } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar>
            <List>
              {["Home", "Dashboard", "View", "SignUp", "Edit", "Login "].map(
                value => (
                  <ListItem button key={value}>
                    <NavLink to={value}>
                      <ListItemText primary={value} />
                    </NavLink>
                  </ListItem>
                )
              )}
            </List>
          </NavBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/View" component={View} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Edit" component={Edit} />
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
