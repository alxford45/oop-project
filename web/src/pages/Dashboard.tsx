import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import DashBar from "../components/DashBar";
import ListProvider, { ListContext } from "../components/ListProvider";
import { ArtistList } from "../list/ArtistList";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: "100vh",
      overflow: "auto"
    }
  });

let list = new ArtistList();

class Dashboard extends React.Component<WithStyles<typeof styles>> {

  state = {
    list: list
  }

  handleContext = (context) => {
    console.log(context);
  };

  myCallback = (dataFromChild) => {
    console.log(dataFromChild);
  };

  render() {
    const { classes } = this.props;
    return (
      //<ListContext.Consumer >
      //{(context) => (
      // <React.Fragment>
      <div className={this.props.classes.root}>
        <ListProvider callbackFromParent={this.myCallback} />
        <DashBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2" align="center">
          </Typography>
          <Divider />
        </main>
      </div>
      //</React.Fragment>
      //)}
      //</ListContext.Consumer>
    );
  }
}

export default withStyles(styles)(Dashboard);
