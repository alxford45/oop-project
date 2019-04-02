import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React, { Component } from "react";
import { Drawer } from "@material-ui/core";

class SimpleAppBar extends Component {
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
        return (
            <div className="AppBar">
                <AppBar position="static">

                </AppBar>
            </div>
        );
    }
}

export default SimpleAppBar;
