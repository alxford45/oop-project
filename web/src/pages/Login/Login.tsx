import * as React from "react";
import { Mutation } from "react-apollo";
import Form from "./Form";
import { me } from "../../graphql/queries/me";
import { login } from "../../graphql/mutations/login";
import { RouteComponentProps } from "react-router";

class Login extends React.Component<RouteComponentProps<{}>> {
  render() {
    return (
      <Mutation mutation={login}>
        {(mutate, { client }) => (
          <Form
            onSubmit={async data => {
              // optional reset cache
              await client.resetStore();
              const response = await mutate({
                variables: data
              });
              console.log(response);
              this.props.history.push("/Dashboard");
            }}
          />
        )}
      </Mutation>
    );
  }
}
export default Login;
