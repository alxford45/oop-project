import { IconButton } from "@material-ui/core";
import * as React from "react";
import { Mutation } from "react-apollo";
import { createList } from "../../../graphql/mutations/createList";
import { Artist } from "../../../list/Artist";
import SaveIcon from "@material-ui/icons/Save";

  //@ts-ignore
  const itemIds = list.flatMap(artist => artist.id);

  return (
    <Mutation mutation={createList}>
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
              props.history.push("/Dashboard");
            }}
          >
            <SaveIcon />
          </IconButton>
        );
      }}
    </Mutation>
  );
};
