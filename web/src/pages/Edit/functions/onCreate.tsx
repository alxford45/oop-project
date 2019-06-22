import { ArtistList } from "../../../list/ArtistList";
import { Mutation } from "react-apollo";
import { createList } from "../../../graphql/mutations/createList";
import { Dialog } from "material-ui";
import {
  DialogTitle,
  DialogContent,
  InputBase,
  DialogActions,
  Button
} from "@material-ui/core";
import * as React from "react";

export const onCreate = (list: ArtistList) => {
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
