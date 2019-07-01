import * as React from "react";
import { Query } from "react-apollo";
import { listById } from "../../graphql/queries/listById";
import { ViewList } from "./View.List";
export const View = props => {
  let { history } = props;
  console.log(history);
  if (history.location.state) {
    var { listId } = history.location.state;
  }

  return (
    <Query
      query={listById}
      variables={{ listId: listId }}
      skip={listId === undefined}
    >
      {({ data, loading, error, client }) => {
        if (error) {
          console.log(error);
          return null;
        }
        if (loading) return <div>loading</div>;
        if (!data) {
          return null;
        }
        console.log(data);
        return <div>{ViewList(data.listById.ids, data.listById.title)}</div>;
      }}
    </Query>
  );
};
