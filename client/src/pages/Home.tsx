import React, { Component } from "react";
import MediaCard from "../components/MediaCard";
import NavBar from "../components/NavBar";
import { List, ListItem, ListItemText, Theme, createStyles, WithStyles, withStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const styles = (theme: Theme) => createStyles({


});

class Home extends Component<WithStyles<typeof styles>>{
  render() {
    const { classes } = this.props;
    return (
      <main>
        <NavBar>
          <List>
            {["Home", "Login",].map(value => (
              <ListItem button key={value}>
                <NavLink to={value}>
                  <ListItemText primary={value} />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </NavBar>
        <MediaCard />
      </main>
    );
  }
}
export default withStyles(styles)(Home);
