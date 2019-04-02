import * as React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { RouteComponentProps } from "react-router-dom";

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $emai)
  }
`;
