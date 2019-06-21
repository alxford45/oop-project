import * as React from "react";
import { Query, Mutation } from "react-apollo";
import { searchQuery } from "../../graphql/queries/searchQuery";
import { Card, List, ListItem, Avatar, Dialog } from "material-ui";
import {
  ListItemIcon,
  ListItemText,
  IconButton,
  DialogTitle,
  DialogContent,
  InputBase,
  DialogActions,
  Button
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { ArtistList } from "../../list/ArtistList";
import { Artist } from "../../list/Artist";
import { createList } from "../../graphql/mutations/createList";
import { addToList } from "../../graphql/mutations/addToList";
import SaveIcon from "@material-ui/icons/Save";

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
const onCreate = (list: ArtistList) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [title, setTitle] = React.useState("");
  return (
    <Mutation mutation={createList}>
      {(createList, { data }) => {
        return (
          <Dialog
            open={isOpen}
            aria-labelledby="form-dialog-title"
            onSubmit={event => {
              event.preventDefault();
              setIsOpen(isOpen => !isOpen);
              createList({ variables: { title: title } });
              list.setTitle(title);
              list.setId(data.id);
            }}
          >
            <DialogTitle id="form-dialog-title">Enter A List Title</DialogTitle>
            <DialogContent>
              <InputBase
                autoFocus
                margin="dense"
                id="title"
                fullWidth
                onChange={event => setTitle(event.target.value)}
                value={title}
              />
            </DialogContent>
            <DialogActions>
              <Button type="submit" color="primary">
                Create List
              </Button>
            </DialogActions>
          </Dialog>
        );
      }}
    </Mutation>
  );
};
const onSave = (list: ArtistList, props: any) => {
  const { classes } = props;
  return (
    <Mutation mutation={addToList}>
      {addToList => {
        return (
          <Card className={classes.list}>
            <IconButton
              aria-label="save"
              onClick={() => {
                addToList({
                  variables: {
                    itemIds: list.getArtistIds(),
                    listId: list.getId()
                  }
                });
                props.history.push("/Dashboard");
              }}
            >
              <SaveIcon />
            </IconButton>
          </Card>
        );
      }}
    </Mutation>
  );
};
