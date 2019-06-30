import { Artist, isArtist } from "../list/Artist";
import { type } from "os";
import { ArtistList } from "../list/ArtistList";

export const ADD_ARTIST = "ADD_ARTIST";
export const REMOVE_ARTIST = "REMOVE_ARTIST";
export const SET_TITLE = "SET_TITLE";
export const RESET = "RESET";

interface State {
  title: string;
  artistList: Artist[];
}
interface Action {
  type: string;
  payload: Artist | string | number | null;
}

type ListReducer = (state: State, action: Action) => State;

export const listReducer: ListReducer = (state, action) => {
  try {
    switch (action.type) {
      case "SET_TITLE": {
        if (typeof action.payload !== "string") {
          throw "Error: expected payload to be type 'string' for 'SET_TITLE'";
        }
        const title = action.payload;
        return { title: title, artistList: state.artistList };
      }
      case "ADD_ARTIST": {
        if (!isArtist(action.payload)) {
          throw "Error: expected payload to be type 'Artist' for 'ADD_ARTIST'";
        }
        const artist: Artist = action.payload;
        return {
          title: state.title,
          artistList: [...state.artistList, artist]
        };
      }
      case "REMOVE_ARTIST": {
        if (typeof action.payload !== "number") {
          throw "Error: expected payload to be type 'number' for 'REMOVE_ARTIST'";
        }
        const artistList = state.artistList.filter(
          (_, index) => index !== action.payload
        );
        return { title: state.title, artistList: artistList };
      }
      case "RESET": {
        if (typeof action.payload !== null) {
          throw "Error: expected payload to be type 'null' for 'RESET'";
        }
        return { title: "", artistList: [] };
      }
      default:
        return state;
    }
  } catch (error) {
    console.log(error);
    console.log("Warning: returning previous state before error");
    return state;
  }
};
