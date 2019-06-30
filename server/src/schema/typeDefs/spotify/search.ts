import { gql } from "apollo-server-express";

export const typeDef = gql`
  type Search {
    artists: SearchArtists!
  }
  type SearchArtists {
    items: [Item!]
    href: String!
  }
  type Item {
    id: ID!
    name: String!
    images: [Image!]
  }
`;
