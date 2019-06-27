import { ArtistList } from "../../list/ArtistList";
import { Artist } from "../../list/Artist";

interface Action {
  type: string;
  artist: Artist;
  index: number;
}
export const ADD_DISPATCH = "add";
export const REMOVE_DISPATCH = "remove";
export const reducer = (list: ArtistList, action: Action) => {
  switch (action.type) {
    case "add": {
      const newArtist: Artist = action.artist;
      list.add(newArtist);
      return list;
    }

    case "remove": {
      list.remove(action.index);
      return list;
    }
    default:
      return list;
  }
};
