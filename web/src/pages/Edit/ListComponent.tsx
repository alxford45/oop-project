import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import * as React from "react";
import { ListContext } from "../../context/List.context";

export const ListComponent = () => {
  React.useEffect(() => {
    console.log("ListComponent Mounted");
    return () => {
      console.log("ListComponent Unmounted");
    };
  }, []);
  const context = React.useContext(ListContext);
  const artistList = context.artistList;
  const removeArtist = context.removeArtist;
  const title = context.title;

  return (
    <List>
      <ListItemText>{title}</ListItemText>
      {artistList.map((artist, index) => {
        return (
          <ListItem key={index}>
            <ListItemText>{artist.name}</ListItemText>
            {artist.icon ? <Avatar src={artist.icon} /> : <Avatar />}
            <Button
              type="button"
              onClick={() => {
                removeArtist(index);
              }}
            >
              x
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
