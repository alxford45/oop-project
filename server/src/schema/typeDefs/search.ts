import { gql } from "apollo-server-express";

export const typeDef = gql`
  type Search {
    artists: Results!
  }
  type Results {
    items: [Item!]
    href: String!
  }
  type Item {
    id: String!
    name: String!
  }
`;
