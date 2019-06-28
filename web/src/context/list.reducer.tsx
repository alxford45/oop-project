import { Artist } from "../list/Artist";
import { type } from "os";

export const ADD_ARTIST = "ADD_ARTIST";
export const REMOVE_ARTIST = "REMOVE_ARTIST";

interface State {
  artistList: Artist[];
}
interface Action {
  type: string;
  payload?: Artist;
  index?: number;
}

type ListReducer = (state: State, action: Action) => State;

export const listReducer: ListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ARTIST": {
      if (action.payload === undefined) {
        console.log("error: artist not added because payload was undefined");
        return state;
      }
      const artist: Artist = action.payload;
      return { artistList: [...state.artistList, artist] };
    }

    case "REMOVE_ARTIST": {
      const artistList = state.artistList.filter(
        (_, index) => index !== action.index
      );
      return { artistList: artistList };
    }
    default:
      return state;
  }
};
