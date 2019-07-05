import { Query } from "react-apollo";
import { eventQuery } from "../../graphql/queries/eventQuery";
import * as React from "react";
import { Event } from "../../types/Event";
import {
  List,
  ListItem,
  ListSubheader,
  Card,
  CardHeader,
  CardContent,
  ListItemText,
  Typography,
  TableHead,
  TableBody,
  TableCell,
  Table,
  TableRow
} from "@material-ui/core";

export const onQuery = (name: string, index: number) => {
  return (
    <Query query={eventQuery} variables={{ name: name }}>
      {({ loading, data, error }) => {
        if (loading) {
          return null;
        }
        console.log(`firing query for ${name}`);

        if (error) {
          console.log(error);
          return null;
        }
        //Null check for if a Artist has not evnents scheduled
        if (!data) {
          console.log(`no data for ${name}`);
          return null;
        }
        if (data.eventByName.resultsPage.results.event === null) {
          return (
            <React.Fragment key={index}>
              <Typography variant="title" component="h3">
                {name}
              </Typography>
              <Typography
                style={{ fontSize: "0.875rem" }}
                align="center"
                variant="caption"
              >
                No Upcoming Events
              </Typography>
            </React.Fragment>
          );
        }
        return (
          <React.Fragment>
            <Typography variant="title" component="h3">
              {name}
            </Typography>
            <Table padding="dense" key={index}>
              <TableHead>
                <TableRow>
                  <TableCell>Event</TableCell>
                  <TableCell>Venue</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.eventByName.resultsPage.results.event.map(
                  (event, idx) => {
                    let time: string = event.start.time;
                    if (time !== null) {
                      time = time.slice(0, 5);
                      const n = +time.substr(0, 2);
                      if (n > 12) {
                        time = n - 12 + ":" + time.slice(0, 2) + " PM";
                      } else {
                        time = time + " AM";
                      }
                    } else {
                      time = "TBA";
                    }
                    let name: string = event.displayName;
                    const at = name.search("at");
                    if (at > 0) {
                      name = name.slice(0, at);
                    }
                    if (name.length > 53) {
                      name = name.slice(0, 50) + "...";
                    }

                    return (
                      <TableRow key={event.id}>
                        <TableCell key={5 * idx + 5}>{name}</TableCell>
                        <TableCell key={idx}>
                          {event.venue.displayName}
                        </TableCell>
                        <TableCell key={2 * idx + 1}>{time}</TableCell>
                        <TableCell key={3 * idx + 2}>
                          {event.start.date}
                        </TableCell>
                        <TableCell key={4 * idx + 3}>
                          {event.location.city}
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </React.Fragment>
        );
      }}
    </Query>
  );
};
