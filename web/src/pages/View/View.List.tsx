import * as React from "react";
import { Query } from "react-apollo";
import { artistsQuery } from "../../graphql/queries/artistsQuery";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
  Card,
  Typography,
  CardContent,
  CardHeader
} from "@material-ui/core";
export const ViewList = (ids: string[], title: string) => {
  return (
    <Query query={artistsQuery} variables={{ ids: ids }}>
      {({ data, loading, error }) => {
        if (error) {
          console.log(error);
        }
        if (loading) return null;
        return (
          <Card>
            <CardContent>
              <Typography variant="h3">{title}</Typography>
              <List>
                {data.artists.artists.map((artist, index) => {
                  return (
                    <ListItem key={index}>
                      <ListItemAvatar>
                        <Avatar src={artist.images[0].url} />
                      </ListItemAvatar>
                      <ListItemText>{artist.name}</ListItemText>
                    </ListItem>
                  );
                })}
              </List>
            </CardContent>
          </Card>
        );
      }}
    </Query>
  );
};
