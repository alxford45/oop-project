import { gql } from "apollo-server-express";

export const typeDef = gql`
  type List {
    id: ID!
    title: String!
    items: [ID]
  }
`;
