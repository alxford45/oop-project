import * as React from "react";
import { Mutation } from "react-apollo";
import Form from "./Form";
import { login } from "../../graphql/mutations/login";
import { RouteComponentProps } from "react-router";

class Login extends React.Component<RouteComponentProps<{}>> {
  render() {
    return (
      <Mutation
        mutation={login}
        onCompleted={() => this.props.history.push("/Dashboard")}
      >
        {mutate => (
          <Form
            onSubmit={async data => {
              const response = await mutate({
                variables: data
              });
              this.props.history.push("/Dashboard");
            }}
          />
        )}
      </Mutation>
    );
  }
}
export default Login;
