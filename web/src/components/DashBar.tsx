import { WithStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleIcon from "@material-ui/icons/People";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import classNames from "classnames";
import React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { styles } from "./DashBar.styles";
import { Logout } from "./Logout";

interface Props extends WithStyles, RouteComponentProps {}

class DashBar extends React.Component<Props> {
  state = {
    open: false
  };

  isOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar
            disableGutters={!this.state.open}
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.isOpen()}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.title}>
              Music Map
            </Typography>
            {Logout(this.props)}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => this.isOpen()}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <List>
            <Divider />
            <Link to={"./Dashboard"} style={{ textDecoration: "none" }}>
              <ListItem button>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText inset primary="Dashboard" />
              </ListItem>
            </Link>
            <Divider />
            <Link to={"./Edit"} style={{ textDecoration: "none" }}>
              <ListItem button>
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText inset primary="Edit" />
              </ListItem>
            </Link>
            <Divider />
            <Link to={"./View"} style={{ textDecoration: "none" }}>
              <ListItem button>
                <ListItemIcon>
                  <PhotoCamera />
                </ListItemIcon>
                <ListItemText inset primary="View" />
              </ListItem>
            </Link>
            <Divider />
          </List>
          <List />
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(DashBar);
