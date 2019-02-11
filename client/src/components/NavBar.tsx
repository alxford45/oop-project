import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component } from "react";
import { Drawer } from "@material-ui/core";

export interface State {
  isOpen: boolean;
}

class NavBar extends Component<State> {
  toggleDrawer = () => {
    this.toggleDrawer.bind(this);
    this.state.isOpen = !this.state.isOpen;
  };
  state: State = {
    isOpen: false
  };
  render() {
    return (
      <div className="AppBar">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer open={this.state.isOpen} />
            <Typography variant="h6" color="inherit">
              Home
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default NavBar;
