import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import * as React from "react";
import { Query } from "react-apollo";
import { artistsQuery } from "../../graphql/queries/artistsQuery";

interface List {
  names: string[];
}

interface State {
  lists: List[];
}

export const state: State = {
  lists: [] as List[]
};
export const Preview = (ids: string[]) => {
  //let args = ids.filter((_, index) => index < 3);

  return (
    <Query query={artistsQuery} variables={{ ids: ids }}>
      {({ data, loading, error }) => {
        if (error) {
          console.log(error);
        }
        if (loading) return null;

        const list: List = { names: [] as string[] };
        state.lists.push(list);
        return (
          <React.Fragment>
            {data.artists.artists.map((artist, index) => {
              list.names.push(artist.name);
              if (list.names.length < 4) {
                return (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar src={artist.images[0].url} />
                    </ListItemAvatar>
                    <ListItemText>{artist.name}</ListItemText>
                  </ListItem>
                );
              } else {
                return null;
              }
            })}
          </React.Fragment>
        );
      }}
    </Query>
  );
};
