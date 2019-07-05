import * as React from "react";
import {
  Avatar,
  Card,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { Query } from "react-apollo";
import { searchQuery } from "../../../graphql/queries/searchQuery";
import AddIcon from "@material-ui/icons/Add";
import { Artist } from "../../../types/Artist";
import defaultImage from "../../../baseline_music_note_black_48dp.png";

export const onQuery = (name: string, addArtist: any) => {
  if (name.length === 0) {
    return null;
  }
  return (
    <Query query={searchQuery} variables={{ name }}>
      {({ loading, data, error }) => {
        if (error) {
          console.log(error);
          return null;
        }
        if (loading) {
          const timer = setTimeout(() => {}, 5000);
          return <div>loading</div>;
        }
        if (!data || name.length === 0) {
          console.log("ERROR: Null Data or Variable");
          return null;
        }
        let artistItem: Artist = {
          id: "",
          name: "",
          icon: ""
        };
        console.log(data);
        return (
          <Card>
            {data.search.artists.items.length === 0 ? (
              <Typography variant="subtitle2">No Results</Typography>
            ) : (
              <List>
                {//Iterates through the returned Spotify data and renders the 5 most popular results
                data.search.artists.items.map(
                  ({ name, id, images }, index: number) => {
                    return (
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
                                artistItem = { id, name, icon };
                                addArtist(artistItem);
                              } else {
                                const icon = defaultImage;
                                artistItem = { id, name, icon };
                                addArtist(artistItem);
                              }
                            }}
                          >
                            <AddIcon />
                          </IconButton>
                        </Card>
                      </ListItem>
                    );
                  }
                )}
              </List>
            )}
          </Card>
        );
      }}
    </Query>
  );
};
