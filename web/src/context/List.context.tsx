import * as React from "react";
import { Artist } from "../list/Artist";

export const ListContext = React.createContext({
  artistList: [] as Artist[],
  addArtist: (artist: Artist) => {},
  removeArtist: (index: number) => {}
});
