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
