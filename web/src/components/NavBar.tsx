import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component } from "react";
import { Drawer, createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";
import classes from "*.module.scss";

const styles = (theme: Theme) =>
  createStyles({
    nav: {
      background: "linear-gradient(45deg, #0d47a1 30%, #1e88e5 70%, #42a5f5 90%)"
    },
  });

class NavBar extends Component < WithStyles<typeof styles>>{
  state = {
    isOpen: false
  };
  toggleDrawer = () => {
    this.toggleDrawer.bind(this);
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="AppBar">
        <AppBar position="static">
          <Toolbar className={classes.nav}>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.isOpen} onClose={this.toggleDrawer}>
              {this.props.children}
            </Drawer>
            <Typography variant="h6" color="inherit">
              Music Map
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
