import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputBase
} from "@material-ui/core";
import * as React from "react";
import { Mutation } from "react-apollo";
import { createList } from "../../../graphql/mutations/createList";
import { ArtistList } from "../../../list/ArtistList";

export const onCreate = (list: ArtistList) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [title, setTitle] = React.useState("");
  return (
    <Mutation
      mutation={createList}
      onCompleted={data => list.setId(data.createList.id)}
    >
      {createList => {
        return (
          <Dialog open={isOpen} aria-labelledby="form-dialog-title">
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
              <Button
                type="button"
                color="primary"
                onClick={() => {
                  setIsOpen(isOpen => !isOpen);
                  createList({ variables: { title: title } });
                  list.setTitle(title);
                }}
              >
                Create List
              </Button>
            </DialogActions>
          </Dialog>
        );
      }}
    </Mutation>
  );
};
