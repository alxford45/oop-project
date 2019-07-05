import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ListProvider } from "./context/list/list.provider";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Edit } from "./pages/Edit/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import { createBrowserHistory } from "history";
import { View } from "./pages/View/View";
import { Events } from "./pages/Events/Events";
import { EventProvider } from "./context/event/event.provider";

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <ListProvider>
        <EventProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} sensitive={true} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Edit" {...history} component={Edit} />
            <Route path="/View" {...history} component={View} />
            <Route path="/Events" {...history} component={Events} />
          </Switch>
        </EventProvider>
      </ListProvider>
    </Router>
  );
};

export default App;
