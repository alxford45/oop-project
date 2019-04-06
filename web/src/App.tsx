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
import { ListItemText, List, ListItem, Button } from "@material-ui/core";
import View from "./pages/View";
import ListProvider from "./components/ListProvider";
import { listenerCount } from "cluster";
import { ArtistList } from "./list/ArtistList";
import Test from "./pages/Test";

const list = new ArtistList();
const SearchList = new ArtistList();

class App extends Component {
  state = {
    list: list,
    searchList: SearchList,
    name: "MAYBE"
  }

  myCallback = (dataFromChild) => {
    this.setState({ list: dataFromChild })

  }

  myOtherCallback = (data) => {
    this.setState({ searchList: data });
  }

  render() {
    console.log(this.state.list)
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home">
              <Redirect to="/" />
            </Route>
            <Route path="/Login" component={Login} />
            <Route path="/Dashboard" render={(props) => <Dashboard {...props} list={this.state.searchList} />} />
            <Route path="/Edit" render={(props) => <Edit {...props} callback={this.myOtherCallback} />} />
            <Route path="/View" component={View} />
            <Route path="/Test" render={(props) => <Test {...props} callback={this.myOtherCallback} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
