import * as React from "react";
import { Mutation } from "react-apollo";
import Form from "./Form";
import { me } from "../../graphql/queries/me";
import { login } from "../../graphql/mutations/login";
import { RouteComponentProps } from "react-router";

class Login extends React.Component<RouteComponentProps<{}>> {
  render() {
    return (
      <Mutation
        update={(cache, { data }) => {
          if (!data || !data.login) {
            return;
          }

          cache.writeQuery({
            query: me,
            data: { me: data.login }
          });
        }}
        mutation={login}
      >
        {(mutate, { client }) => (
          <Form
            onSubmit={async data => {
              // optional reset cache
              await client.resetStore();
              const response = await mutate({
                variables: data
              });
              console.log(response);
              this.props.history.push("/account");
            }}
          />
        )}
      </Mutation>
    );
  }
}
