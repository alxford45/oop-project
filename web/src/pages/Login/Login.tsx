import * as React from "react";
import { Mutation } from "react-apollo";
import Form from "./Form";
import { login } from "../../graphql/mutations/login";
import { RouteComponentProps } from "react-router";
import { me } from "../../graphql/queries/me";

class Login extends React.Component<RouteComponentProps<{}>> {
  render() {
    return (
      <Mutation
        mutation={login}
        update={(cache, { data }) => {
          if (!data || !data.login) {
            console.log(data);
            return;
          }

          cache.writeQuery({
            query: me,
            data: { me: data.login }
          });
        }}
      >
        {(login, { client }) => (
          <Form
            onSubmit={async data => {
              await client.resetStore();
              const response = await login({
                variables: data
              });
              console.log("Response from Login mutation:");
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
