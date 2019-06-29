import * as React from "react";
import { Search } from "./SearchInput";
import { ListComponent } from "./ListComponent";
import { Title } from "./Title";
import { SearchResults } from "./SearchResults";

export const Edit = () => {
  React.useEffect(() => {
    console.log("Edit Mounted");
    return () => {
      console.log("Edit Unmounted");
    };
  }, []);

  let [searchInput, renderSearch] = Search();

  return (
    <React.Fragment>
      {Title()}
      {renderSearch}
      {SearchResults(searchInput as string)}
      {ListComponent()}
    </React.Fragment>
  );
};
