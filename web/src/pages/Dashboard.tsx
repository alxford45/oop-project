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
import { Card, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
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
    }
  });

let bigList = new ArtistList();

class Dashboard extends React.Component<any, any, WithStyles<typeof styles>> {

  constructor(props: any) {
    super(props);
    this.state = {
      list: this.props.list,
    };
  }

  loadDash = () => {
    bigList.add(this.state.list);
    console.log(this.state.list);

  };


  render() {
    console.log(this.state.list);
    const { classes } = this.props;
    return (
      <div className={this.props.classes.root}>
        {this.loadDash}
        <DashBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />


          <Typography variant="h4" gutterBottom component="h2" align="center">
            Your Personal Music Maps
          </Typography>
          <Divider />
          <Card>
            {this.state.list.get().map((todo, index) => (

              <List key={index}>
                <ListItem>
                  <ListItemIcon>{todo.icon}</ListItemIcon>
                  <ListItemText inset primary={todo.name} />
                </ListItem>
              </List>


            ))}
          </Card>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
