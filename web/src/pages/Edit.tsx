import React, { Props, Component } from "react";
import { Query } from "react-apollo";
import { searchQuery } from "../graphql/searchQuery";
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
import Test from "./Test";
//const ListProvider = require('../components/ListProvider');

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      background:
        "linear-gradient(45deg, #37474f 30%, #78909c 70%, #b0bec5 90%)"
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
      search: "",
      name: "",
      list: list
    };
  }

  handleChange = e => {
    console.log("changing");
    this.setState({ search: e.target.value });
  };

  handleRequest = e => {
    e.preventDefault();
    console.log("submitted");
    this.setState({ name: this.state.search });
  };

  get = ({ name }) => {
    return this.state.name == "" ? null : (
      <Query query={searchQuery} variables={{ name }}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading</div>;
          console.log(data.search.artists.items);
          return (
            <Card>
              {data.search.artists.items.map(({ name, id }, index) => {
                return (
                  <List key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <Avatar />
                      </ListItemIcon>
                      <ListItemText inset primary={name} />
                      <Card>
                        <Button onClick={() => this.addToList(name, id)}>
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
                );
              })}
            </Card>
          );
        }}
      </Query>
    );
  };

  addToList = (name, id) => {
    const Artist = {
      key: 0,
      name: name,
      id: id,
      icon: <Avatar />
    };
    list.add(Artist);
    this.setState({ list: list });
    console.log("adding to list");
  };

  deleteFromList = item => {
    list.remove(item.key);
    list.get().map((todo, index) => (todo.key = index));
    this.setState({ list: list });
  };

  handleSave = () => {
    if (list.state.size == 0) {
      return alert("You must add an Artist first!");
    }
    console.log("added artist");
    this.props.callback(list);
    list = new ArtistList();
    this.setState({ list: list });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <DashBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Grid container spacing={40}>
            <Grid item sm={6} md={4} lg={4}>
              <form onSubmit={evt => this.handleRequest(evt)}>
                <InputBase
                  onChange={evt => this.handleChange(evt)}
                  value={this.state.request}
                  placeholder={"Search for for your music destination…"}
                />
              </form>
              <div>{this.get({ name: this.state.name })}</div>
            </Grid>
            <Divider />
            <Grid item sm={6} md={4} lg={3} />
            <Grid item sm={6} md={4} lg={4}>
              <Card>
                <Button onClick={this.handleSave}>Save</Button>
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
      </div>
    );
  }
}

export default withStyles(styles)(NestedList);
