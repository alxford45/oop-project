import * as React from "react";
import { Query, Mutation } from "react-apollo";
import { searchQuery } from "../../graphql/queries/searchQuery";
import { Card, List, ListItem, Avatar } from "material-ui";
import { ListItemIcon, ListItemText, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { ArtistList } from "../../list/ArtistList";
import { Artist } from "../../list/Artist";
import { createList } from "../../graphql/mutations/createList";
import { addToList } from "../../graphql/mutations/addToList";

let list = new ArtistList();
let artistItem: Artist = {
  id: "",
  name: "",
  icon: ""
};
const onQuery = ({ name }) => {
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
const onCreate = (title: string) => {
  return (
    <Mutation mutation={createList} variables={{ title }}>
      {mutate => {
        return null;
      }}
    </Mutation>
  );
};
const onSave = (list: ArtistList) => {
  const itemIds = new Array<string>(list.size());
  const listId = list.getId();

  list.get().forEach(item => itemIds.push(item.id));
  return (
    <Mutation mutation={addToList} variables={{ ...itemIds, listId }}>
      {mutate => {
        return null;
      }}
    </Mutation>
  );
};
