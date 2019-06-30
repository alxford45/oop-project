import { IconButton } from "@material-ui/core";
import * as React from "react";
import { Mutation } from "react-apollo";
import { createList } from "../../../graphql/mutations/createList";
import { Artist } from "../../../list/Artist";
import SaveIcon from "@material-ui/icons/Save";

export const onCreate = (
  list: Artist[],
  title: string,
  props: any,
  reset: any
) => {
  //@ts-ignore
  const itemIds = list.flatMap(artist => artist.id);

  return (
    <Mutation
      mutation={createList}
      onCompleted={() => {
        props.history.push("/Dashboard");
        //clears data stored in ListContext
        reset();
      }}
    >
      {createList => {
        return (
          <IconButton
            aria-label="save"
            onClick={async () => {
              console.log(itemIds);
              await createList({
                variables: {
                  title: title,
                  itemIds: itemIds
                }
              });
            }}
          >
            <SaveIcon />
          </IconButton>
        );
      }}
    </Mutation>
  );
};
