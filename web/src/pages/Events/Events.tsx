import * as React from "react";
import { ListItem, Card, CardContent, Typography } from "@material-ui/core";
import { onQuery } from "./onQuery";

export const Events = props => {
  let { history } = props;
  const state = history.location.state.state;
  console.log(state);

  //fireEventQuery(state.names, addEvent);
  return (
    <React.Fragment>
      <Card>
        {state.names.map((name, index) => {
          return <CardContent key={index}>{onQuery(name, index)}</CardContent>;
        })}
      </Card>
    </React.Fragment>
  );
};
