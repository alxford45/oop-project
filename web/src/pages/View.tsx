import React, { Component } from "react";
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Grid,
  Avatar,
  Typography
} from "@material-ui/core";
import DashBar from "../components/DashBar";
import Calendar from "../components/Calendar";
import { Query } from "react-apollo";
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
      justify: "center"
    },
    text: {
      color: "white",
      component: "h6",
      variant: "h1"
    }
  });

let event = new EventList();

class View extends Component<any, any, WithStyles<typeof styles>> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: this.props.list
    };
  }

  saveEvent = (id, displayName, uri, location, type, venue, start, performance) => {
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

  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.classes.root}>
        <DashBar />
        <main className={classes.content}>
          {this.get(660883)}
          <div className={classes.appBarSpacer} />
          <Grid container spacing={40}>
            <Grid item sm={6} md={4} lg={4} >

              <Typography  className={classes.text}>
                {this.state.list.get().map((item) => (
                  <div className={classes.bigAvatar}>
                    <Avatar className={classes.bigAvatar} src={item.icon} />
                    {item.name}
                  </div>
                ))}
              </Typography>
            </Grid  >
            <Grid item sm={12} md={8} lg={8}>
              <Calendar event={event} />
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}
export default withStyles(styles)(View);
