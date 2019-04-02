import { gql } from "apollo-server-express";

export const typeDef = gql`
  type User {
    id: ID!
    email: String!
  }
`;
