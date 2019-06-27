import * as React from "react";
import { Input } from "@material-ui/core";
import { onQuery } from "./functions/onQuery";
import { ArtistList } from "../../list/ArtistList";

export const Search = () => {
  const [input, setInput] = React.useState("");
  const renderSearch = (
    <Input
      placeholder="search your favorite artist!"
      value={input}
      onChange={e => setInput(e.target.value)}
    />
  );
  return [input as string, renderSearch];
};
