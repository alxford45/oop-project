import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  InputBase,
  List,
  WithStyles
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import DashBar from "../../components/DashBar";
import { searchQuery } from "../../graphql/queries/searchQuery";
import { ArtistList } from "../../list/ArtistList";
import { styles } from "./Edit.Form.styles";
import { Artist } from "../../list/Artist";
interface State {
  list: ArtistList | null;
  searchField: string;
  isOpen: boolean;
}
interface Props extends WithStyles {
  onSave: (list: ArtistList, props: any) => void;
  onCreate: ({ title: string }) => JSX.Element | null;
  onQuery: (
    { name: string },
    list: ArtistList,
    artistItem: Artist
  ) => JSX.Element | null;
}

class NestedList extends React.Component<Props, State> {
  state = {
    list: null,
    searchField: "",
    isOpen: true
  };

  //Updates the contents of the search bar
  handleSearchChange = e => {
    this.setState({ search: e.target.value });
  };

  //Prevents the page from refreshing when submitting Title
  handleRefresh = e => {
    e.preventDefault();
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  //Gives name state a value thus calling getSpotify to acquire the API data
  handleSearchRequest = e => {
    e.preventDefault();
    this.setState({ name: this.state.search });
  };

  addToList = (name, spotifyID, icon) => {
    const Artist = {
      name: name,
      id: spotifyID,
      icon: icon
    };
    list.add(Artist);
    this.setState({ list: list }); //Refreshes actions on page to render changed list
  };

  deleteFromList = index => {
    list.remove(index);
    this.setState({ list: list }); //Refreshes actions on page to render changed list
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleDialogClose = () => {
    this.setState({ open: false });
  };

  handleSave = () => {
    if (list.state.size == 0) {
      return alert("You must add an Artist first!");
    }
    list.setTitle(this.state.title);
    this.props.callback(list); //Sends the list data to be saved in the App state
    list = new ArtistList(); //Creates a new instance of the ArtistList to reset the page for the next created list
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
              <form onSubmit={evt => this.handleSearchRequest(evt)}>
                <InputBase
                  onChange={evt => this.handleSearchChange(evt)}
                  value={this.state.search}
                  placeholder={"Search for for your music destination…"}
                />
              </form>
              <div>
                {//Calls the Spotify search query and renders the 5 most popular artists based on the given name
                this.getSpotify({ name: this.state.name })}
              </div>
            </Grid>
            <Divider />
            <Grid item sm={6} md={4} lg={3} />
            <Grid item sm={6} md={4} lg={4}>
              <Card className={classes.list}>
                {//Loops through the created list and renders each individual artist's info
                list.get().map((artist, index) => (
                  <List key={index}>
                    <ListItem>
                      <ListItemIcon>
                        <Avatar src={artist.icon} />
                      </ListItemIcon>
                      <ListItemText
                        inset
                        primary={artist.name}
                        className={classes.listText}
                      />
                      <Card>
                        <Button onClick={() => this.deleteFromList(artist)}>
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
