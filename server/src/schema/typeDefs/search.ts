import { gql } from "apollo-server-express";

/*
type Search {
    artists: {
      href: String!
      items: {
        id: String!
        name: String!
      }
    }
  }  
*/

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
