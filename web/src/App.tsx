import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Edit from "./pages/Edit/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home">
              <Redirect to="/" />
            </Route>
            <Route path="/Login" component={Login} sensitive={true} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Edit" component={Edit} />
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
