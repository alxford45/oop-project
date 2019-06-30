import {
  createStyles,
  List,
  ListItem,
  ListItemText,
  Theme,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";

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

      height: "100vh",
      overflow: "auto"
    },
    text: {
      color: "white",
      component: "h6",
      variant: "h1"
    }
  });

class Home extends Component<WithStyles> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <main className={classes.content}>
          <NavBar>
            <List>
              <ListItem button>
                <NavLink to={"/"}>
                  <ListItemText primary="Home" />
                </NavLink>
              </ListItem>
              <ListItem button>
                <NavLink to={"/Login"}>
                  <ListItemText primary="Login" />
                </NavLink>
              </ListItem>
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
