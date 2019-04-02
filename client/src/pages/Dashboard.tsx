import React from "react";
import { withStyles, Theme, createStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CreateGrid from "../components/CreateGrid";
import DashBar from "../components/DashBar";
import NavBar from "../components/NavBar";
import SimpleAppBar from "../components/SimpleAppBar";


const styles = (theme: Theme) => createStyles({
  root: {
    display: "flex",
    background: 'linear-gradient(45deg, #37474f 30%, #78909c 70%, #b0bec5 90%)'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
});


class Dashboard extends React.Component<WithStyles<typeof styles>> {
  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.classes.root}>
        <SimpleAppBar />
        <DashBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2" align="center">
            Music Map
          </Typography>
          <Divider />
          <CreateGrid />
        </main>
      </div>

    );
  }
}


export default withStyles(styles)(Dashboard);
