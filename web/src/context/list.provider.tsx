import * as React from "react";
import { ADD_ARTIST, REMOVE_ARTIST, listReducer } from "./list.reducer";
import { ListContext } from "./List.context";
import { Artist } from "../list/Artist";

export const ListProvider = props => {
  const [state, dispatch] = React.useReducer(listReducer, {
    artistList: [] as Artist[]
  });
  const addArtist = (artist: Artist) => {
    dispatch({ type: ADD_ARTIST, payload: artist });
  };
  const removeArtist = (index: number) => {
    dispatch({ type: REMOVE_ARTIST, index: index });
  };
  return (
    <ListContext.Provider
      value={{
        artistList: state.artistList,
        addArtist: addArtist,
        removeArtist: removeArtist
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};
