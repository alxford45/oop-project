import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ListProvider } from "./context/list.provider";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Edit } from "./pages/Edit/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import { createBrowserHistory } from "history";
import { View } from "./pages/View/View";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <ListProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} sensitive={true} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Edit" {...history} component={Edit} />
          <Route path="/View" {...history} component={View} />
        </Switch>
      </ListProvider>
    </Router>
  );
};

export default App;
