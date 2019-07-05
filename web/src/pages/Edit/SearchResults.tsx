import * as React from "react";
import { onQuery } from "./functions/onQuery";
import { ListContext } from "../../context/list/List.context";

export const SearchResults = (name: string) => {
  React.useEffect(() => {
    console.log("SearchResults Mounted");
    return () => {
      console.log("SearchResults Unmounted");
    };
  }, []);
  const context = React.useContext(ListContext);
  const addArtist = context.addArtist;
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await onQuery(name, addArtist);
      setData(result);
    };
    console.log("firing query");
    fetchData();
  }, [onQuery, name]);
  return <React.Fragment>{data}</React.Fragment>;
};
