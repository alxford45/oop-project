import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  InputBase,
  DialogActions,
  Button
} from "@material-ui/core";
import { ListContext } from "../../context/List.context";

export const Title = () => {
  React.useEffect(() => {
    console.log("Title Mounted");
    return () => {
      console.log("Title Unmounted");
    };
  }, []);
  const context = React.useContext(ListContext);
  const setTitle = context.setTitle;
  const [isOpen, setIsOpen] = React.useState(true);
  const [input, setInput] = React.useState("");
  return (
    <Dialog open={isOpen} aria-labelledby="form-dialog-title">
      <form
        onSubmit={e => {
          e.preventDefault();
          setTitle(input);
          setIsOpen(isOpen => !isOpen);
        }}
      >
        <DialogTitle id="form-dialog-title">Enter A List Title</DialogTitle>
        <DialogContent>
          <InputBase
            autoFocus
            margin="dense"
            id="title"
            fullWidth
            onChange={event => setInput(event.target.value)}
            value={input}
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
            Create List
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
