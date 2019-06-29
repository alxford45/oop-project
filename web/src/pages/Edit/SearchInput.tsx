import * as React from "react";
import { Input } from "@material-ui/core";

export const Search = () => {
  React.useEffect(() => {
    console.log("Search Mounted");
    return () => {
      console.log("Search Unmounted");
    };
  }, []);
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
