import React, { Component } from "react";
import MediaCard from "../components/MediaCard";
import NavBar from "../components/NavBar";
import { List, ListItem, ListItemText, Theme, createStyles, WithStyles, withStyles, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = (theme: Theme) => createStyles({
  root: {
    display: "flex",
    background: 'linear-gradient(45deg, #37474f 30%, #78909c 70%, #b0bec5 90%)'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,

    height: "100vh",
    overflow: "auto"
  },
  text: {
    color: "white",
    component: "h6",
    variant: "h1"
  }

});

class Home extends Component<WithStyles<typeof styles>>{
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <main className={classes.content}>
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
          <CssBaseline />
          <div className={classes.appBarSpacer} />
          <Typography variant="h1" component="h1" className={classes.text}>
            MusicMap
          </Typography>
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(Home);