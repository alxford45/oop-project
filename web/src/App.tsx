import React, { Component } from "react";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";
import NavBar from "./components/NavBar";
import { ListItemText, List, ListItem } from "@material-ui/core";
import View from "./pages/View";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar>
            <List>
              {["Home", "Login", "Dashboard",].map(value => (
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
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Edit" component={Edit} />
            <Route path="/View" component={View} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;