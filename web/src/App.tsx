import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Edit } from "./pages/Edit/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import { ListProvider } from "./context/list.provider";

const App = () => {
  return (
    <Router>
      <ListProvider>
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
      </ListProvider>
    </Router>
  );
};

export default App;
