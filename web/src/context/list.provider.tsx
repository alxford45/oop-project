import * as React from "react";
import {
  ADD_ARTIST,
  REMOVE_ARTIST,
  SET_TITLE,
  listReducer
} from "./list.reducer";
import { ListContext } from "./List.context";
import { Artist } from "../list/Artist";

export const ListProvider = props => {
  const [state, dispatch] = React.useReducer(listReducer, {
    title: "",
    artistList: [] as Artist[]
  });
  const addArtist = (artist: Artist) => {
    dispatch({ type: ADD_ARTIST, payload: artist });
  };
  const removeArtist = (index: number) => {
    dispatch({ type: REMOVE_ARTIST, payload: index });
  };
  const setTitle = (title: string) => {
    dispatch({ type: SET_TITLE, payload: title });
  };
  return (
    <ListContext.Provider
      value={{
        title: state.title,
        artistList: state.artistList,
        addArtist: addArtist,
        removeArtist: removeArtist,
        setTitle: setTitle
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
