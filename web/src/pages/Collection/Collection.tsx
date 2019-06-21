import {
  Avatar,
  Button,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from "@material-ui/core";
import React, { Component } from "react";
import { Query } from "react-apollo";
import Calendar from "../../components/Calendar";
import { eventQuery } from "../../graphql/queries/eventQuery";
import { EventList } from "../../list/EventList";
import { styles } from "./Collection.styles";

let events = new EventList();

class Collection extends Component<any, any, WithStyles> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: this.props.list,
      open: false,
      id: 0
    };
  }

  //Saves each artist's singular event into a list of all the artists' events
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
    events.add(newEvent);
  };

  //Retrieves the event data from songkick
  getEvents = name => {
    return (
      <Query query={eventQuery} variables={{ name: name }}>
        {({ loading, data }) => {
          if (loading) return <div>loading</div>;
          //Null check for if a Artist has not evnents scheduled
          if (data.eventByName.resultsPage.results.event == null) {
            return null;
          }
          return data.eventByName.resultsPage.results.event.map(
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

  //Changes the items rendered on the page to either general artist info or calendar
  handleTab = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.classes.root}>
        <main className={classes.content}>
          {//Fetches the songkick data for each artist inthe list
          this.state.list.get().map(item => this.getEvents(item.name))}
          <div className={classes.appBarSpacer} />
          <Button onClick={this.handleTab}>
            {this.state.open ? "Albums & Songs" : "Calendar"}
          </Button>
          {this.state.open ? (
            //Render Calendar
            <Calendar event={events} list={this.state.list} />
          ) : (
            //Render artist info
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
                        <Typography className={classes.text} align="center" />
                      </div>
                    </Grid>
                    <Grid item sm={8} md={6} lg={6}>
                      <div>
                        <Typography className={classes.text} align="center" />
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
export default withStyles(styles)(Collection);
