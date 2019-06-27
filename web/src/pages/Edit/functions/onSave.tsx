import { ArtistList } from "../../../list/ArtistList";
import { Mutation } from "react-apollo";
import { addToList } from "../../../graphql/mutations/addToList";
import { Card, IconButton } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import * as React from "react";

export const onSave = (list: ArtistList, props: any) => {
  const { classes } = props;
  return (
    <Mutation mutation={addToList}>
      {addToList => {
        return (
          <Card className={classes.list}>
            <IconButton
              aria-label="save"
              onClick={() => {
                addToList({
                  variables: {
                    itemIds: list.getArtistIds(),
                    listId: list.getId()
                  }
                });
                props.history.push("/Dashboard");
              }}
            >
              <SaveIcon />
            </IconButton>
          </Card>
        );
      }}
    </Mutation>
  );
};
