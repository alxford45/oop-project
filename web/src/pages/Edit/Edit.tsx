import * as React from "react";
import { onCreate } from "./functions/onCreate";
import { ArtistList } from "../../list/ArtistList";
import { Search } from "./Search";
import { onQuery } from "./functions/onQuery";
import { ListComponent } from "./ListComponent";
export const Edit = () => {
  let [searchInput, renderSearch] = Search();
  const input = searchInput as string;
  const list = React.useRef(new ArtistList());
  return (
    <React.Fragment>
      {onCreate(list.current)}
      {renderSearch}
      {onQuery(input, list.current)}
      <div>{ListComponent(list.current)}</div>
    </React.Fragment>
  );
};
