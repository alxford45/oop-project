import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import * as React from "react";
import { Query } from "react-apollo";
import { artistsQuery } from "../../graphql/queries/artistsQuery";

export const Preview = (ids: string[]) => {
  let args = ids.filter((_, index) => index < 3);
  return (
    <Query query={artistsQuery} variables={{ ids: args }}>
      {({ data, loading, error }) => {
        if (error) {
          console.log(error);
        }
        if (loading) return null;
        return (
          <React.Fragment>
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
          </React.Fragment>
        );
      }}
    </Query>
  );
};
