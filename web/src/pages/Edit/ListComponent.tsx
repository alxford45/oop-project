import * as React from "react";
import { reducer, REMOVE_DISPATCH } from "./Reducer";
import { ArtistList } from "../../list/ArtistList";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Button
} from "@material-ui/core";

export const ListComponent = (initialList: ArtistList) => {
  const [list, dispatch] = React.useReducer(reducer, initialList);
  return (
    <List>
      {list.get().map((artist, index) => {
        return (
          <ListItem key={index}>
            <ListItemText>{artist.name}</ListItemText>
            {artist.icon ? <Avatar src={artist.icon} /> : <Avatar />}
            <Button
              type="button"
              onClick={() => {
                dispatch({
                  type: REMOVE_DISPATCH,
                  index: index,
                  artist: artist
                });
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
