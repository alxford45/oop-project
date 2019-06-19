import * as React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { ArtistList } from "./list/ArtistList";
import { BigList } from "./list/BigList";
import Dashboard from "./pages/Dashboard/Dashboard";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Login from "./pages/Login/Form";
import Collection from "./pages/Collection";

const list = new ArtistList();
const bigList = new BigList();

interface State {
  bigList: BigList;
  list: ArtistList;
}

class App extends React.Component<{}, State> {
  state = {
    bigList: bigList,
    list: list
  };

  //Takes the list data from the Edit page and stores it in App's state.
  editCallback = data => {
    bigList.add(data);
  };

  //Takes the specific list chosen on dashboard and sends its data to the view page.
  passListToView = data => {
    this.setState({ list: data });
  };

  deleteList = data => {
    bigList.remove(data);
    this.setState({ bigList: bigList });
  };

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
            <Route
              path="/dashboard"
              render={props => (
                <Dashboard
                  {...props}
                  callbackView={this.passListToView}
                  callbackDelete={this.deleteList}
                  bigList={bigList}
                />
              )}
            />
            <Route
              path="/edit"
              render={props => <Edit {...props} callback={this.editCallback} />}
            />
            <Route
              path="/view"
              render={props => <Collection {...props} list={this.state.list} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
