import React, { Component } from "react";
import Dashboard from "./pages/Dashboard";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Context from "./Context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";
import ListData from "./components/ListData";
import { ListItemText, List, ListItem } from "@material-ui/core";
import View from "./pages/View";

class App extends Component {
  render() {
    return (

      <Router>
        <div>

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
