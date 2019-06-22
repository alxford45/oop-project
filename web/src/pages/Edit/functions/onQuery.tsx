import { Query } from "react-apollo";
import { searchQuery } from "../../../graphql/queries/searchQuery";
import { Card, List, ListItem, Avatar, IconButton } from "material-ui";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import { ArtistList } from "../../../list/ArtistList";
import { Artist } from "../../../list/Artist";
import AddIcon from "@material-ui/icons/Add";

export const onQuery = ({ name }, list: ArtistList, artistItem: Artist) => {
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
                            const icon = images[0].url;
                            artistItem = { name, id, icon };
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
