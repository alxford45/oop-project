import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
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
import { List, ListItem, ListItemText } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar>
            <List>
              {["Home", "Login"].map(value => (
                <ListItem button key={value}>
                  <NavLink to={value}>
                    <ListItemText primary={value} />
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </NavBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home">
              <Redirect to="/" />
            </Route>
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
