import React, { Props, Component } from "react";
import DashBar from "../components/DashBar";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles, Theme } from "@material-ui/core/styles";
import {
  WithStyles,
  createStyles,
  Divider,
  Grid,
  InputBase,
  List
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { ArtistList } from "../list/ArtistList";
import ListProvider from "../components/ListProvider";
//const ListProvider = require('../components/ListProvider');

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      background: 'linear-gradient(45deg, #37474f 30%, #78909c 70%, #b0bec5 90%)'
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: "100vh",
      overflow: "auto"
    },
    inputRoot: {
      color: "inherit",
      width: "100%"
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    }
  });

let list = new ArtistList();
let searchList = new ArtistList();

class NestedList extends React.Component<any, any, WithStyles<typeof styles>> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: list,
      searchList: searchList,
      request: "",
      response: null,
      key: 0,
      name: this.props.data
    };
  }


  handleChange = (evt) => {
    this.setState({ request: evt.target.value });
  };



  handleRequest = (evt) => {
    evt.preventDefault();
    searchList.remove(0);
    const objArray = [
      { key: this.state.key, name: this.state.request, id: this.state.response, icon: <Avatar /> },
    ]
    objArray.map((todo) => (
      searchList.add(todo)
    ));
    this.setState({ searchList: searchList.get(), request: "" });
    this.handleQuery(searchList.view(0).name);
    console.log(searchList);
  };

  handleQuery = (id) => {

  };


  addToList = (item) => {
    const searchItem = searchList.view(0);
    list.add(searchItem);
    this.setState({ list: list });
    this.setState({ key: this.state.key + 1 });
    console.log(item.key);
  };

  deleteFromList = (item) => {
    list.remove(item.key);
    list.get().map((todo, index) =>
      todo.key = index,
    );
    this.setState({ list: list });
  };

  handleSave = () => {
    this.props.callbackFromParent(list);

  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <DashBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Grid container spacing={40}>
            <Grid
              justify="center"
              item sm={6} md={4} lg={4}
            >
              <form className={classes.formRoot} onSubmit={evt => this.handleRequest(evt)}>
                <InputBase
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  onChange={evt => this.handleChange(evt)}
                  value={this.state.request}
                  placeholder={"Search for for your music destination…"}
                />
              </form>
              <Card>
                {searchList.get().map((todo) => (
                  <List key={todo.key}>
                    <ListItem>
                      <ListItemIcon>{todo.icon}</ListItemIcon>
                      <ListItemText inset primary={todo.name} />
                      <Card>
                        <Button onClick={() => this.addToList(todo)}>
                          add
                        </Button>
                      </Card>
                      <Card>
                        <Link to={"./View"} style={{ textDecoration: "none" }}>
                          <Button>view</Button>
                        </Link>
                      </Card>
                    </ListItem>
                  </List>
                ))}
              </Card>
            </Grid>
            <Divider />
            <Grid item sm={6} md={4} lg={3}></Grid>
            <Grid item sm={6} md={4} lg={4}>
              <Card>
                <Button onClick={this.handleSave}>
                  Save
                </Button>
              </Card>
              <Card>
                {list.get().map((todo, index) => (
                  <List key={index}>
                    <ListItem>
                      <ListItemIcon>{todo.icon}</ListItemIcon>
                      <ListItemText inset primary={todo.name} />
                      <Card>
                        <Button onClick={() => this.deleteFromList(todo)}>
                          Delete
                        </Button>
                      </Card>
                      <Card>
                        <Link to={"./View"} style={{ textDecoration: "none" }}>
                          <Button>view</Button>
                        </Link>
                      </Card>
                    </ListItem>
                  </List>
                ))}
              </Card>
            </Grid>
          </Grid>
        </main>
      </div >
    );
  }
}

export default withStyles(styles)(NestedList);