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
import { Card, List, ListItem, ListItemIcon, ListItemText, Grid, Fab, Button } from "@material-ui/core";
import { BigList } from "../list/BigList";
import { Link } from "react-router-dom";

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

const dashList = new BigList();

class Dashboard extends React.Component<any, any, WithStyles<typeof styles>> {

  constructor(props: any) {
    super(props);
    this.state = {
      bigList: this.props.bigList,
    };
  }

  handleView = (list) => {
    this.props.callback(list);
  };


  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.classes.root}>
        <DashBar />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Typography variant="h4" gutterBottom component="h2" align="center">
            Your Personal Music Maps
          </Typography>
          <Divider />
          <Grid container spacing={40} >
            {this.state.bigList.get().map((item, index) => (
              <Grid key={index} item sm={6} md={4} lg={4}>
                {this.props.title}
                <Card>
                  {item.getTitle()}
                  <Link to={"./View"} style={{ textDecoration: "none" }}>
                    <Button onClick={() => this.handleView(item)}>
                      View All
                    </Button>
                  </Link>
                  {item.get().map((artist, index) => {
                    return (
                      <List key={index} >
                        <ListItem>
                          <ListItemIcon>{artist.icon}</ListItemIcon>
                          <ListItemText inset primary={artist.name} />

                        </ListItem>
                      </List>
                    );
                  })}
                </Card>
              </Grid>
            ))}
            <Grid item sm={6} md={4} lg={4}>
              <Link to={"./Edit"} style={{ textDecoration: "none" }}>
                <Fab >
                  NEW
              </Fab>
              </Link>
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);