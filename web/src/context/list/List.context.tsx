import * as React from "react";
import { Artist } from "../../types/Artist";

export const ListContext = React.createContext({
  title: "",
  artistList: [] as Artist[],
  addArtist: (artist: Artist) => {},
  removeArtist: (index: number) => {},
  setTitle: (title: string) => {},
  reset: () => {}
});
