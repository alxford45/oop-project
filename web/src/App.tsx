import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { ArtistList } from "./list/ArtistList";
import Dashboard from "./pages/Dashboard/Dashboard";
import Edit from "./pages/Edit/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Collection from "./pages/Collection/Collection";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home">
              <Redirect to="/" />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
