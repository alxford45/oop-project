import * as React from "react";
import { Search } from "./SearchInput";
import { ListComponent } from "./ListComponent";
import { Title } from "./Title";
import { SearchResults } from "./SearchResults";
import { onCreate } from "./functions/onCreate";
import { Button } from "@material-ui/core";
import { ListContext } from "../../context/list/List.context";
import useReactRouter from "use-react-router";
import { History } from "history";

export const Edit = props => {
  React.useEffect(() => {
    console.log("Edit Mounted");
    return () => {
      console.log("Edit Unmounted");
    };
  }, []);
  let [searchInput, renderSearch] = Search();
  const context = React.useContext(ListContext);
  const list = context.artistList;
  const title = context.title;
  const reset = context.reset;
  return (
    <React.Fragment>
      {Title()}
      {renderSearch}
      {SearchResults(searchInput as string)}
      {ListComponent()}
      {onCreate(list, title, props, reset)}
    </React.Fragment>
  );
};
