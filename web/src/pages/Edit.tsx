import React from "react";
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
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { ArtistList } from "../list/ArtistList";
import { artistSearchQuery } from "../graphql/artistSearchQuery";
import { artistQuery } from "../graphql/artistQuery";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';


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
    },
    list: {
      background:
        "linear-gradient(45deg, #0d47a1 30%, #1e88e5 70%, #42a5f5 90%)"
    },
    listText: {
      color: "theme.palette.common.white"
    }
  });

let list = new ArtistList();
let title = "";
let image = "";

class NestedList extends React.Component<any, any, WithStyles<typeof styles>> {
  constructor(props: any) {
    super(props);
    this.state = {
      search: "",
      name: "",
      list: list,
      open: true,
      title: ""
    };
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleRefresh = e => {
    e.preventDefault();
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleRequest = e => {
    e.preventDefault();
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
              {data.search.artists.items.map(({ name, id, images }, index) => {
                console.log(
                  "typeof images[0] ? " + !Array.isArray(images) ||
                    !images.length
                );
                return (
                  <List key={index}>
                    <ListItem>
                      {images.length > 0 ? (
                        <ListItemIcon>
                          <Avatar src={images[0].url} />
                        </ListItemIcon>
                      ) : (
                        <ListItemIcon>
                          <Avatar />
                        </ListItemIcon>
                      )}

                      <ListItemText inset primary={name} />
                      <Card>
                        <Button
                          onClick={() =>
                            this.addToList(name, id, images[0].url)
                          }
                        >
                          <AddIcon />
                        </Button>
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

  addToList = (name, id, icon) => {
    const Artist = {
      key: 0,
      name: name,
      id: id,
      icon: icon
    };
    list.add(Artist);
    this.setState({ list: list });
  };

  deleteFromList = item => {
    list.remove(item.key);
    list.get().map((todo, index) => (todo.key = index));
    this.setState({ list: list });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = () => {
    if (list.state.size == 0) {
      return alert("You must add an Artist first!");
    }
    list.setTitle(this.state.title);
    this.props.callback(list);
    list = new ArtistList();
    this.setState({ list: list });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <DashBar />
        <Dialog
          open={this.state.open} //{this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Enter A List Title</DialogTitle>
          <DialogContent>
            <form onSubmit={evt => this.handleRefresh(evt)}>
              <InputBase
                autoFocus
                margin="dense"
                id="name"
                fullWidth
                
                onChange={evt => this.handleTitleChange(evt)}
                value={this.state.title}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Create List
            </Button>
          </DialogActions>
        </Dialog>
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
              <Card className={classes.list}>
                <Link to={"./Dashboard"} style={{ textDecoration: "none" }}>
                  <Button onClick={this.handleSave}>
                    <SaveIcon /> {this.state.title}
                  </Button>
                </Link>
              </Card>
              <Card className={classes.list}>
                {list.get().map((todo, index) => (
                  <List key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <Avatar src={todo.icon} />
                      </ListItemIcon>
                      <ListItemText
                        inset
                        primary={todo.name}
                        className={classes.listText}
                      />
                      <Card>
                        <Button onClick={() => this.deleteFromList(todo)}>
                          <DeleteIcon />
                        </Button>
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
