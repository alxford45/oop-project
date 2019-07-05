import { Mutation } from "react-apollo";
import { logout } from "../graphql/mutations/logout";
import { IconButton } from "@material-ui/core";
import ActionPowerSettingsNewRounded from "@material-ui/icons/PowerSettingsNewRounded";
import * as React from "react";

export const Logout = (props: any) => {
  return (
    <Mutation mutation={logout}>
      {mutate => (
        <IconButton
          aria-label="logout"
          color="default"
          className={props.classes.logout}
          onClick={async () => {
            const response = await mutate();
            console.log(`Logged out`);
            props.history.push("/");
          }}
        >
          <ActionPowerSettingsNewRounded />
        </IconButton>
      )}
    </Mutation>
  );
};
