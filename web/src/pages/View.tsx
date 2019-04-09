import React, { Component } from "react";
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Grid,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Card,
  Button
} from "@material-ui/core";
import DashBar from "../components/DashBar";
import Calendar from "../components/Calendar";
import { Query, ApolloConsumer } from "react-apollo";
import { eventQuery } from "../graphql/eventQuery";
import { EventList } from "../list/EventList";
import { string } from "prop-types";

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
      padding: theme.spacing.unit * 3,
      height: "100vh",
      overflow: "auto"
    },
    bigAvatar: {
      margin: 10,
      width: 200,
      height: 200,
      marginLeft: 125,
      marginRight: 100
    },
    text: {
      color: "white",
      component: "h6",
      variant: "h1"
    },
    container: {
      justifyItems: "center",
      alignItems: "center"
    }
  });

let event = new EventList();

class View extends Component<any, any, WithStyles<typeof styles>> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: this.props.list,
      open: false
    };
  }

  saveEvent = (
    id,
    displayName,
    uri,
    location,
    type,
    venue,
    start,
    performance
  ) => {
    let newEvent = {
      name: displayName,
      day: start.date,
      months: 0,
      id: id,
      uri: uri,
      location: location,
      type: type,
      venue: venue,
      performance: performance
    };
    event.add(newEvent);
  };
  get = id => {
    return (
      <Query query={eventQuery} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <div>loading</div>;
          return data.eventSearch.resultsPage.results.event.map(
            ({
              id,
              displayName,
              uri,
              location,
              type,
              venue,
              start,
              performance
            }) => {
              this.saveEvent(
                id,
                displayName,
                uri,
                location,
                type,
                venue,
                start,
                performance
              );
            }
          );
        }}
      </Query>
    );
  };

  handleTab = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.classes.root}>
        <DashBar />
        <main className={classes.content}>
          {this.get("")}
          <div className={classes.appBarSpacer} />
          <Button onClick={this.handleTab}>
            {this.state.open ? "Albums & Songs" : "Calendar"}
          </Button>
          {this.state.open ? (
            <Calendar event={event} list={this.state.list} />
          ) : (
            <Grid container className={classes.container} spacing={40}>
              {this.state.list.get().map(item => (
                <Grid item sm={6} md={4} lg={4}>
                  <div>
                    <div>
                      <Typography
                        className={classes.text}
                        align="center"
                        component="h5"
                        variant="h5"
                      >
                        {item.name}
                      </Typography>
                    </div>
                    <Avatar className={classes.bigAvatar} src={item.icon} />
                  </div>
                  <Grid container spacing={40}>
                    <Grid item sm={8} md={6} lg={6}>
                      <div>
                        <Typography className={classes.text} align="center">
                          Albums
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item sm={8} md={6} lg={6}>
                      <div>
                        <Typography className={classes.text} align="center">
                          Songs
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          )}
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(View);
