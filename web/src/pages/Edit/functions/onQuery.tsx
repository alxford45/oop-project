import {
  Avatar,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import * as React from "react";
import { Query } from "react-apollo";
import { searchQuery } from "../../../graphql/queries/searchQuery";
import { Artist } from "../../../list/Artist";
import { ArtistList } from "../../../list/ArtistList";

export const onQuery = (name: string, list: ArtistList) => {
  const artistItem: Artist = {
    id: "",
    name: "",
    icon: ""
  };
  return (
    <Query query={searchQuery} variables={{ name }}>
      {({ loading, data }) => {
        if (loading) return <div>loading</div>;
        if (!data) return null;
        return (
          <Card>
            {//Iterates through the returned Spotify data and renders the 5 most popular results
            data.search.artists.items.map(
              ({ name, id, images }, index: number) => {
                return (
                  <List>
                    <ListItem key={index}>
                      {images.length > 0 ? (
                        <ListItemIcon>
                          <Avatar src={images[0].url} />
                        </ListItemIcon>
                      ) : (
                        <ListItemIcon>
                          <Avatar />
                        </ListItemIcon>
                      )}
                      <ListItemText inset primary={name} />
                      <Card>
                        <IconButton
                          onClick={() => {
                            if (images.length > 0) {
                              const icon = images[0].url;
                              artistItem.icon = icon;
                            } else {
                              const icon = "";
                              artistItem.icon = icon;
                            }
                            artistItem.name = name;
                            artistItem.id = id;
                            list.add(artistItem);
                          }}
                        >
                          <AddIcon />
                        </IconButton>
                      </Card>
                    </ListItem>
                  </List>
                );
              }
            )}
          </Card>
        );
      }}
    </Query>
  );
};
