import { gql } from "apollo-boost";
import { LoginMutation, LoginMutationVariables } from "../schemaTypes";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Mutation } from "react-apollo";
import LoginForm from "./LoginForm";

const loginMutation = gql`
  mutation LoginMutation($email: String!) {
    login(email: $email) {
      id
      email
    }
  }
`;
const meQuery = gql`
  query MeQuery {
    me {
      id
      email
    }
  }
`;
class Login extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <Mutation<LoginMutation, LoginMutationVariables>
        update={(cache, { data }) => {
          if (!data || !data.login) {
            console.log("error! null data");
            return;
          }

          cache.writeQuery({
            query: meQuery,
            data: { me: data.login }
          });
        }}
        mutation={loginMutation}
      >
        {(mutate, { client }) => (
          <LoginForm
            onSubmit2={async data => {
              // optional reset cache
              await client.resetStore();
              const response = await mutate({
                variables: data
              });
              console.log(response);
              this.props.history.push("/dashboard");
            }}
          />
        )}
      </Mutation>
    );
  }
}
export default Login;
