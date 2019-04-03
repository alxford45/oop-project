import * as React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { RouteComponentProps } from "react-router-dom";
import { RegisterMutation, RegisterMutationVariables } from "../schemaTypes";
import { Form } from "./Form";

const registerMutation = gql`
  mutation RegisterMutation($email: String!) {
    register(email: $email)
  }
`;
export class Register extends React.PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={registerMutation}
      >
        {mutate => (
          <Form
            buttonText="register"
            onSubmit={async data => {
              const response = await mutate({
                variables: data
              });
            }}
          />
        )}
      </Mutation>
    );
  }
}
