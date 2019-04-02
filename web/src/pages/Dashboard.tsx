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

class Dashboard extends React.Component<WithStyles<typeof styles>> {
  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.classes.root}>
        <DashBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2" align="center">
            Music Map
          </Typography>
          <Divider />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
