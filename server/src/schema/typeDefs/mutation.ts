import { gql } from "apollo-server-express";

export const typeDef = gql`
  type Mutation {
    register(email: String!): Boolean!
    login(email: String!): User
    logout: Boolean!
  }
`;